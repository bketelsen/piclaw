import { expect, test } from 'bun:test';

import {
  backToTimeline,
  deleteTimelinePost,
  loadHashtagTimeline,
  searchTimeline,
} from '../../web/src/ui/app-timeline-actions.js';

test('loadHashtagTimeline enters hashtag mode and triggers hashtag load', async () => {
  const calls: string[] = [];

  await loadHashtagTimeline({
    hashtag: '#prod',
    setCurrentHashtag: (value) => calls.push(`hashtag:${value}`),
    setPosts: (next) => calls.push(`posts:${String(next)}`),
    loadPosts: async (value) => calls.push(`load:${value}`),
  });

  expect(calls).toEqual(['hashtag:#prod', 'posts:null', 'load:#prod']);
});

test('backToTimeline resets view state and reloads base timeline', async () => {
  const calls: string[] = [];

  await backToTimeline({
    setCurrentHashtag: (value) => calls.push(`hashtag:${String(value)}`),
    setSearchQuery: (value) => calls.push(`search:${String(value)}`),
    setPosts: (next) => calls.push(`posts:${String(next)}`),
    loadPosts: async () => calls.push('load'),
  });

  expect(calls).toEqual(['hashtag:null', 'search:null', 'posts:null', 'load']);
});

test('searchTimeline normalizes scope and writes results', async () => {
  const scopeCalls: string[] = [];
  const postsCalls: any[] = [];
  const hasMoreCalls: boolean[] = [];

  await searchTimeline({
    query: '  bug  ',
    scope: 'root',
    currentChatJid: 'web:feature',
    currentRootChatJid: 'web:root',
    searchPosts: async (_query, _limit, _offset, chatJid, scope, rootChatJid) => {
      expect(chatJid).toBe('web:feature');
      expect(scope).toBe('root');
      expect(rootChatJid).toBe('web:root');
      return { results: [{ id: 10 }] };
    },
    setSearchScope: (value) => scopeCalls.push(value),
    setSearchQuery: () => undefined,
    setCurrentHashtag: () => undefined,
    setPosts: (value) => postsCalls.push(value),
    setHasMore: (value) => hasMoreCalls.push(value),
  });

  expect(scopeCalls).toEqual(['root']);
  expect(postsCalls.at(-1)).toEqual([{ id: 10 }]);
  expect(hasMoreCalls).toEqual([false]);
});

test('deleteTimelinePost handles direct post deletions and updates removal set', async () => {
  const setPostsCalls: any[] = [];
  const removingSets: Set<string | number>[] = [];
  const loadMoreCalls: any[] = [];

  let removingState = new Set<string | number>();

  await deleteTimelinePost({
    post: { id: 11, data: { thread_id: 11 } },
    posts: [{ id: 11, data: { thread_id: 11 } }],
    currentChatJid: 'web:main',
    deletePost: async () => ({ ids: [11] }),
    preserveTimelineScrollTop: (mutate) => mutate(),
    setPosts: (next) => {
      setPostsCalls.push(next);
    },
    setRemovingPostIds: (next) => {
      removingState = typeof next === 'function' ? next(removingState) : next;
      removingSets.push(new Set(removingState));
    },
    hasMoreRef: { current: true },
    loadMoreRef: { current: (options) => loadMoreCalls.push(options) },
    confirm: () => true,
    scheduleTimeout: (callback) => callback(),
  });

  expect(removingSets[0]).toEqual(new Set([11]));
  expect(removingSets[1]).toEqual(new Set());
  expect(typeof setPostsCalls[0]).toBe('function');
  expect(loadMoreCalls).toEqual([{ preserveScroll: true, preserveMode: 'top' }]);
});

test('deleteTimelinePost retries with reply deletion when backend reports Replies exist', async () => {
  const attempts: Array<[string | number, boolean, string]> = [];

  await deleteTimelinePost({
    post: { id: 99, data: { thread_id: 99 } },
    posts: [{ id: 99, data: { thread_id: 99 } }],
    currentChatJid: 'web:main',
    deletePost: async (postId, deleteReplies, chatJid) => {
      attempts.push([postId, deleteReplies, chatJid]);
      if (!deleteReplies) {
        throw new Error('Replies exist');
      }
      return { ids: [99] };
    },
    preserveTimelineScrollTop: (mutate) => mutate(),
    setPosts: () => undefined,
    setRemovingPostIds: () => undefined,
    hasMoreRef: { current: false },
    loadMoreRef: { current: null },
    confirm: () => true,
    scheduleTimeout: (callback) => callback(),
  });

  expect(attempts).toEqual([
    [99, false, 'web:main'],
    [99, true, 'web:main'],
  ]);
});
