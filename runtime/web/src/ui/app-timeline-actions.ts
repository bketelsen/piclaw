type StateSetter<T> = (next: T | ((prev: T) => T)) => void;

export interface LoadHashtagTimelineOptions {
  hashtag: string;
  setCurrentHashtag: (value: string) => void;
  setPosts: StateSetter<any[] | null>;
  loadPosts: (hashtag?: string | null) => Promise<void>;
}

/** Switch into hashtag mode and load hashtag-filtered timeline rows. */
export async function loadHashtagTimeline(options: LoadHashtagTimelineOptions): Promise<void> {
  const { hashtag, setCurrentHashtag, setPosts, loadPosts } = options;
  setCurrentHashtag(hashtag);
  setPosts(null);
  await loadPosts(hashtag);
}

export interface BackToTimelineOptions {
  setCurrentHashtag: (value: string | null) => void;
  setSearchQuery: (value: string | null) => void;
  setPosts: StateSetter<any[] | null>;
  loadPosts: () => Promise<void>;
}

/** Exit hashtag/search context and reload the default timeline view. */
export async function backToTimeline(options: BackToTimelineOptions): Promise<void> {
  const { setCurrentHashtag, setSearchQuery, setPosts, loadPosts } = options;
  setCurrentHashtag(null);
  setSearchQuery(null);
  setPosts(null);
  await loadPosts();
}

export interface SearchTimelineOptions {
  query: unknown;
  scope: unknown;
  currentChatJid: string;
  currentRootChatJid: string;
  searchPosts: (
    query: string,
    limit: number,
    offset: number,
    chatJid: string,
    scope: string,
    rootChatJid: string,
  ) => Promise<{ results?: any[] }>;
  setSearchScope: (value: string) => void;
  setSearchQuery: (value: string | null) => void;
  setCurrentHashtag: (value: string | null) => void;
  setPosts: StateSetter<any[] | null>;
  setHasMore: (value: boolean) => void;
}

/** Execute timeline search and move UI into search-results mode. */
export async function searchTimeline(options: SearchTimelineOptions): Promise<void> {
  const {
    query,
    scope,
    currentChatJid,
    currentRootChatJid,
    searchPosts,
    setSearchScope,
    setSearchQuery,
    setCurrentHashtag,
    setPosts,
    setHasMore,
  } = options;

  const trimmed = typeof query === 'string' ? query.trim() : '';
  if (!trimmed) return;

  const normalizedScope = scope === 'root' || scope === 'all' ? scope : 'current';
  setSearchScope(normalizedScope);
  setSearchQuery(trimmed);
  setCurrentHashtag(null);
  setPosts(null);

  try {
    const result = await searchPosts(trimmed, 50, 0, currentChatJid, normalizedScope, currentRootChatJid);
    setPosts(Array.isArray(result?.results) ? result.results : []);
    setHasMore(false);
  } catch (error) {
    console.error('Failed to search:', error);
    setPosts([]);
  }
}

export interface DeleteTimelinePostOptions {
  post: any;
  posts: any[] | null | undefined;
  currentChatJid: string;
  deletePost: (postId: string | number, deleteReplies: boolean, chatJid: string) => Promise<{ ids?: Array<string | number> }>;
  preserveTimelineScrollTop: (mutate: () => void) => void;
  setPosts: StateSetter<any[] | null>;
  setRemovingPostIds: StateSetter<Set<string | number>>;
  hasMoreRef: { current: boolean };
  loadMoreRef: { current: ((options?: Record<string, unknown>) => void) | null };
  confirm?: (message: string) => boolean;
  showAlert?: (message: string) => void;
  scheduleTimeout?: (callback: () => void, delayMs: number) => void;
}

/** Delete a timeline post (optionally with replies), preserving scroll while animating row removal. */
export async function deleteTimelinePost(options: DeleteTimelinePostOptions): Promise<void> {
  const {
    post,
    posts,
    currentChatJid,
    deletePost,
    preserveTimelineScrollTop,
    setPosts,
    setRemovingPostIds,
    hasMoreRef,
    loadMoreRef,
    confirm = (message) => window.confirm(message),
    showAlert = (message) => alert(message),
    scheduleTimeout = (callback, delayMs) => {
      setTimeout(callback, delayMs);
    },
  } = options;

  if (!post) return;

  const postId = post.id;
  const targetChatJid = typeof post?.chat_jid === 'string' && post.chat_jid.trim()
    ? post.chat_jid.trim()
    : currentChatJid;

  const replyCount = posts?.filter((item) => item?.data?.thread_id === postId && item?.id !== postId).length || 0;
  if (replyCount > 0) {
    const confirmed = confirm(`Delete this message and its ${replyCount} replies?`);
    if (!confirmed) return;
  }

  const scheduleRemoval = (ids: Array<string | number>) => {
    if (!ids.length) return;

    setRemovingPostIds((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.add(id));
      return next;
    });

    scheduleTimeout(() => {
      preserveTimelineScrollTop(() => {
        setPosts((prev) => (prev ? prev.filter((item) => !ids.includes(item.id)) : prev));
      });
      setRemovingPostIds((prev) => {
        const next = new Set(prev);
        ids.forEach((id) => next.delete(id));
        return next;
      });
      if (hasMoreRef.current) {
        loadMoreRef.current?.({ preserveScroll: true, preserveMode: 'top' });
      }
    }, 180);
  };

  try {
    const result = await deletePost(postId, replyCount > 0, targetChatJid);
    if (result?.ids?.length) {
      scheduleRemoval(result.ids);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error || '');
    if (replyCount === 0 && errorMessage.includes('Replies exist')) {
      const confirmed = confirm('Delete this message and its replies?');
      if (!confirmed) return;
      const result = await deletePost(postId, true, targetChatJid);
      if (result?.ids?.length) {
        scheduleRemoval(result.ids);
      }
      return;
    }
    console.error('Failed to delete post:', error);
    showAlert(`Failed to delete message: ${errorMessage}`);
  }
}
