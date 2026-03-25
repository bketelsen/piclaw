var aj=Object.defineProperty;var tj=(_)=>_;function ej(_,$){this[_]=tj.bind(null,$)}var _N=(_,$)=>{for(var j in $)aj(_,j,{get:$[j],enumerable:!0,configurable:!0,set:ej.bind($,j)})};var Q5,L1,T3,$N,y4,z3,y3,S3,x3,K8,j8,N8,jN,Z5={},Y5=[],NN=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q5=Array.isArray;function V4(_,$){for(var j in $)_[j]=$[j];return _}function Q8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function w3(_,$,j){var N,Z,Y,K={};for(Y in $)Y=="key"?N=$[Y]:Y=="ref"?Z=$[Y]:K[Y]=$[Y];if(arguments.length>2&&(K.children=arguments.length>3?Q5.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)K[Y]===void 0&&(K[Y]=_.defaultProps[Y]);return $5(_,K,N,Z,null)}function $5(_,$,j,N,Z){var Y={type:_,props:$,key:j,ref:N,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++T3:Z,__i:-1,__u:0};return Z==null&&L1.vnode!=null&&L1.vnode(Y),Y}function G5(_){return _.children}function j5(_,$){this.props=_,this.context=$}function Z$(_,$){if($==null)return _.__?Z$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?Z$(_):null}function ZN(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,N=[],Z=[],Y=V4({},$);Y.__v=$.__v+1,L1.vnode&&L1.vnode(Y),q8(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,N,j==null?Z$($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,b3(N,Y,Z),$.__e=$.__=null,Y.__e!=j&&R3(Y)}}function R3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),R3(_)}function F3(_){(!_.__d&&(_.__d=!0)&&y4.push(_)&&!K5.__r++||z3!=L1.debounceRendering)&&((z3=L1.debounceRendering)||y3)(K5)}function K5(){try{for(var _,$=1;y4.length;)y4.length>$&&y4.sort(S3),_=y4.shift(),$=y4.length,ZN(_)}finally{y4.length=K5.__r=0}}function f3(_,$,j,N,Z,Y,K,Q,X,q,W){var V,U,D,k,T,E,J,A=N&&N.__k||Y5,C=$.length;for(X=YN(j,$,A,X,C),V=0;V<C;V++)(D=j.__k[V])!=null&&(U=D.__i!=-1&&A[D.__i]||Z5,D.__i=V,E=q8(_,D,U,Z,Y,K,Q,X,q,W),k=D.__e,D.ref&&U.ref!=D.ref&&(U.ref&&G8(U.ref,null,D),W.push(D.ref,D.__c||k,D)),T==null&&k!=null&&(T=k),(J=!!(4&D.__u))||U.__k===D.__k?X=v3(D,X,_,J):typeof D.type=="function"&&E!==void 0?X=E:k&&(X=k.nextSibling),D.__u&=-7);return j.__e=T,X}function YN(_,$,j,N,Z){var Y,K,Q,X,q,W=j.length,V=W,U=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(K=$[Y])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[Y]=$5(null,K,null,null,null):q5(K)?K=_.__k[Y]=$5(G5,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[Y]=$5(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[Y]=K,X=Y+U,K.__=_,K.__b=_.__b+1,Q=null,(q=K.__i=KN(K,j,X,V))!=-1&&(V--,(Q=j[q])&&(Q.__u|=2)),Q==null||Q.__v==null?(q==-1&&(Z>W?U--:Z<W&&U++),typeof K.type!="function"&&(K.__u|=4)):q!=X&&(q==X-1?U--:q==X+1?U++:(q>X?U--:U++,K.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<W;Y++)(Q=j[Y])!=null&&(2&Q.__u)==0&&(Q.__e==N&&(N=Z$(Q)),m3(Q,Q));return N}function v3(_,$,j,N){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=v3(Z[Y],$,j,N));return $}_.__e!=$&&(N&&($&&_.type&&!$.parentNode&&($=Z$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function KN(_,$,j,N){var Z,Y,K,Q=_.key,X=_.type,q=$[j],W=q!=null&&(2&q.__u)==0;if(q===null&&Q==null||W&&Q==q.key&&X==q.type)return j;if(N>(W?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((q=$[K=Z>=0?Z--:Y++])!=null&&(2&q.__u)==0&&Q==q.key&&X==q.type)return K}return-1}function H3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||NN.test($)?j:j+"px"}function _5(_,$,j,N,Z){var Y,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof N=="string"&&(_.style.cssText=N=""),N)for($ in N)j&&$ in j||H3(_.style,$,"");if(j)for($ in j)N&&j[$]==N[$]||H3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(x3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?N?j.u=N.u:(j.u=K8,_.addEventListener($,Y?N8:j8,Y)):_.removeEventListener($,Y?N8:j8,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(Q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function O3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=K8++;else if($.t<j.u)return;return j(L1.event?L1.event($):$)}}}function q8(_,$,j,N,Z,Y,K,Q,X,q){var W,V,U,D,k,T,E,J,A,C,n,l,t,Z0,f,w=$.type;if($.constructor!==void 0)return null;128&j.__u&&(X=!!(32&j.__u),Y=[Q=$.__e=j.__e]),(W=L1.__b)&&W($);_:if(typeof w=="function")try{if(J=$.props,A=w.prototype&&w.prototype.render,C=(W=w.contextType)&&N[W.__c],n=W?C?C.props.value:W.__:N,j.__c?E=(V=$.__c=j.__c).__=V.__E:(A?$.__c=V=new w(J,n):($.__c=V=new j5(J,n),V.constructor=w,V.render=qN),C&&C.sub(V),V.state||(V.state={}),V.__n=N,U=V.__d=!0,V.__h=[],V._sb=[]),A&&V.__s==null&&(V.__s=V.state),A&&w.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=V4({},V.__s)),V4(V.__s,w.getDerivedStateFromProps(J,V.__s))),D=V.props,k=V.state,V.__v=$,U)A&&w.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),A&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(A&&w.getDerivedStateFromProps==null&&J!==D&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,n),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,n)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),Y5.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&K.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,n),A&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(D,k,T)})}if(V.context=n,V.props=J,V.__P=_,V.__e=!1,l=L1.__r,t=0,A)V.state=V.__s,V.__d=!1,l&&l($),W=V.render(V.props,V.state,V.context),Y5.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,l&&l($),W=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++t<25);V.state=V.__s,V.getChildContext!=null&&(N=V4(V4({},N),V.getChildContext())),A&&!U&&V.getSnapshotBeforeUpdate!=null&&(T=V.getSnapshotBeforeUpdate(D,k)),Z0=W!=null&&W.type===G5&&W.key==null?u3(W.props.children):W,Q=f3(_,q5(Z0)?Z0:[Z0],$,j,N,Z,Y,K,Q,X,q),V.base=$.__e,$.__u&=-161,V.__h.length&&K.push(V),E&&(V.__E=V.__=null)}catch(H){if($.__v=null,X||Y!=null)if(H.then){for($.__u|=X?160:128;Q&&Q.nodeType==8&&Q.nextSibling;)Q=Q.nextSibling;Y[Y.indexOf(Q)]=null,$.__e=Q}else{for(f=Y.length;f--;)Q8(Y[f]);Z8($)}else $.__e=j.__e,$.__k=j.__k,H.then||Z8($);L1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):Q=$.__e=QN(j.__e,$,j,N,Z,Y,K,X,q);return(W=L1.diffed)&&W($),128&$.__u?void 0:Q}function Z8(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(Z8))}function b3(_,$,j){for(var N=0;N<j.length;N++)G8(j[N],j[++N],j[++N]);L1.__c&&L1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){L1.__e(Y,Z.__v)}})}function u3(_){return typeof _!="object"||_==null||_.__b>0?_:q5(_)?_.map(u3):V4({},_)}function QN(_,$,j,N,Z,Y,K,Q,X){var q,W,V,U,D,k,T,E=j.props||Z5,J=$.props,A=$.type;if(A=="svg"?Z="http://www.w3.org/2000/svg":A=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(q=0;q<Y.length;q++)if((D=Y[q])&&"setAttribute"in D==!!A&&(A?D.localName==A:D.nodeType==3)){_=D,Y[q]=null;break}}if(_==null){if(A==null)return document.createTextNode(J);_=document.createElementNS(Z,A,J.is&&J),Q&&(L1.__m&&L1.__m($,Y),Q=!1),Y=null}if(A==null)E===J||Q&&_.data==J||(_.data=J);else{if(Y=Y&&Q5.call(_.childNodes),!Q&&Y!=null)for(E={},q=0;q<_.attributes.length;q++)E[(D=_.attributes[q]).name]=D.value;for(q in E)D=E[q],q=="dangerouslySetInnerHTML"?V=D:q=="children"||(q in J)||q=="value"&&("defaultValue"in J)||q=="checked"&&("defaultChecked"in J)||_5(_,q,null,D,Z);for(q in J)D=J[q],q=="children"?U=D:q=="dangerouslySetInnerHTML"?W=D:q=="value"?k=D:q=="checked"?T=D:Q&&typeof D!="function"||E[q]===D||_5(_,q,D,E[q],Z);if(W)Q||V&&(W.__html==V.__html||W.__html==_.innerHTML)||(_.innerHTML=W.__html),$.__k=[];else if(V&&(_.innerHTML=""),f3($.type=="template"?_.content:_,q5(U)?U:[U],$,j,N,A=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,K,Y?Y[0]:j.__k&&Z$(j,0),Q,X),Y!=null)for(q=Y.length;q--;)Q8(Y[q]);Q||(q="value",A=="progress"&&k==null?_.removeAttribute("value"):k!=null&&(k!==_[q]||A=="progress"&&!k||A=="option"&&k!=E[q])&&_5(_,q,k,E[q],Z),q="checked",T!=null&&T!=_[q]&&_5(_,q,T,E[q],Z))}return _}function G8(_,$,j){try{if(typeof _=="function"){var N=typeof _.__u=="function";N&&_.__u(),N&&$==null||(_.__u=_($))}else _.current=$}catch(Z){L1.__e(Z,j)}}function m3(_,$,j){var N,Z;if(L1.unmount&&L1.unmount(_),(N=_.ref)&&(N.current&&N.current!=_.__e||G8(N,null,$)),(N=_.__c)!=null){if(N.componentWillUnmount)try{N.componentWillUnmount()}catch(Y){L1.__e(Y,$)}N.base=N.__P=null}if(N=_.__k)for(Z=0;Z<N.length;Z++)N[Z]&&m3(N[Z],$,j||typeof _.type!="function");j||Q8(_.__e),_.__c=_.__=_.__e=void 0}function qN(_,$,j){return this.constructor(_,j)}function g3(_,$,j){var N,Z,Y,K;$==document&&($=document.documentElement),L1.__&&L1.__(_,$),Z=(N=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],K=[],q8($,_=(!N&&j||$).__k=w3(G5,null,[_]),Z||Z5,Z5,$.namespaceURI,!N&&j?[j]:Z?null:$.firstChild?Q5.call($.childNodes):null,Y,!N&&j?j:Z?Z.__e:$.firstChild,N,K),b3(Y,_,K)}Q5=Y5.slice,L1={__e:function(_,$,j,N){for(var Z,Y,K;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),K=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,N||{}),K=Z.__d),K)return Z.__E=Z}catch(Q){_=Q}throw _}},T3=0,$N=function(_){return _!=null&&_.constructor===void 0},j5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=V4({},this.state),typeof _=="function"&&(_=_(V4({},j),this.props)),_&&V4(j,_),_!=null&&this.__v&&($&&this._sb.push($),F3(this))},j5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),F3(this))},j5.prototype.render=G5,y4=[],y3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,S3=function(_,$){return _.__v.__b-$.__v.__b},K5.__r=0,x3=/(PointerCapture)$|Capture$/i,K8=0,j8=O3(!1),N8=O3(!0),jN=0;var k$,P1,$8,J3,I$=0,h3=[],I1=L1,D3=I1.__b,E3=I1.__r,A3=I1.diffed,M3=I1.__c,k3=I1.unmount,I3=I1.__;function X8(_,$){I1.__h&&I1.__h(P1,_,I$||$),I$=0;var j=P1.__H||(P1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function c(_){return I$=1,GN(c3,_)}function GN(_,$,j){var N=X8(k$++,2);if(N.t=_,!N.__c&&(N.__=[j?j($):c3(void 0,$),function(Q){var X=N.__N?N.__N[0]:N.__[0],q=N.t(X,Q);X!==q&&(N.__N=[q,N.__[1]],N.__c.setState({}))}],N.__c=P1,!P1.__f)){var Z=function(Q,X,q){if(!N.__c.__H)return!0;var W=N.__c.__H.__.filter(function(U){return U.__c});if(W.every(function(U){return!U.__N}))return!Y||Y.call(this,Q,X,q);var V=N.__c.props!==Q;return W.some(function(U){if(U.__N){var D=U.__[0];U.__=U.__N,U.__N=void 0,D!==U.__[0]&&(V=!0)}}),Y&&Y.call(this,Q,X,q)||V};P1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:K}=P1;P1.componentWillUpdate=function(Q,X,q){if(this.__e){var W=Y;Y=void 0,Z(Q,X,q),Y=W}K&&K.call(this,Q,X,q)},P1.shouldComponentUpdate=Z}return N.__N||N.__}function p(_,$){var j=X8(k$++,3);!I1.__s&&p3(j.__H,$)&&(j.__=_,j.u=$,P1.__H.__h.push(j))}function y(_){return I$=5,M0(function(){return{current:_}},[])}function M0(_,$){var j=X8(k$++,7);return p3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return I$=8,M0(function(){return _},$)}function XN(){for(var _;_=h3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(N5),$.__h.some(Y8),$.__h=[]}catch(j){$.__h=[],I1.__e(j,_.__v)}}}I1.__b=function(_){P1=null,D3&&D3(_)},I1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),I3&&I3(_,$)},I1.__r=function(_){E3&&E3(_),k$=0;var $=(P1=_.__c).__H;$&&($8===P1?($.__h=[],P1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(N5),$.__h.some(Y8),$.__h=[],k$=0)),$8=P1},I1.diffed=function(_){A3&&A3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(h3.push($)!==1&&J3===I1.requestAnimationFrame||((J3=I1.requestAnimationFrame)||BN)(XN)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),$8=P1=null},I1.__c=function(_,$){$.some(function(j){try{j.__h.some(N5),j.__h=j.__h.filter(function(N){return!N.__||Y8(N)})}catch(N){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],I1.__e(N,j.__v)}}),M3&&M3(_,$)},I1.unmount=function(_){k3&&k3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(N){try{N5(N)}catch(Z){$=Z}}),j.__H=void 0,$&&I1.__e($,j.__v))};var P3=typeof requestAnimationFrame=="function";function BN(_){var $,j=function(){clearTimeout(N),P3&&cancelAnimationFrame($),setTimeout(_)},N=setTimeout(j,35);P3&&($=requestAnimationFrame(j))}function N5(_){var $=P1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),P1=$}function Y8(_){var $=P1;_.__c=_.__(),P1=$}function p3(_,$){return!_||_.length!==$.length||$.some(function(j,N){return j!==_[N]})}function c3(_,$){return typeof $=="function"?$(_):$}var l3=function(_,$,j,N){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var K=$[Y++],Q=$[Y]?($[0]|=K?1:2,j[$[Y++]]):$[++Y];K===3?N[0]=Q:K===4?N[1]=Object.assign(N[1]||{},Q):K===5?(N[1]=N[1]||{})[$[++Y]]=Q:K===6?N[1][$[++Y]]+=Q+"":K?(Z=_.apply(Q,l3(_,Q,j,["",null])),N.push(Z),Q[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):N.push(Q)}return N},C3=new Map;function VN(_){var $=C3.get(this);return $||($=new Map,C3.set(this,$)),($=l3(this,$.get(_)||($.set(_,$=function(j){for(var N,Z,Y=1,K="",Q="",X=[0],q=function(U){Y===1&&(U||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,U,K):Y===3&&(U||K)?(X.push(3,U,K),Y=2):Y===2&&K==="..."&&U?X.push(4,U,0):Y===2&&K&&!U?X.push(5,0,!0,K):Y>=5&&((K||!U&&Y===5)&&(X.push(Y,0,K,Z),Y=6),U&&(X.push(Y,U,0,Z),Y=6)),K=""},W=0;W<j.length;W++){W&&(Y===1&&q(),q(W));for(var V=0;V<j[W].length;V++)N=j[W][V],Y===1?N==="<"?(q(),X=[X],Y=3):K+=N:Y===4?K==="--"&&N===">"?(Y=1,K=""):K=N+K[0]:Q?N===Q?Q="":K+=N:N==='"'||N==="'"?Q=N:N===">"?(q(),Y=1):Y&&(N==="="?(Y=5,Z=K,K=""):N==="/"&&(Y<5||j[W][V+1]===">")?(q(),Y===3&&(X=X[0]),Y=X,(X=X[0]).push(2,0,Y),Y=0):N===" "||N==="\t"||N===`
`||N==="\r"?(q(),Y=2):K+=N),Y===3&&K==="!--"&&(Y=4,X=X[0])}return q(),X}(_)),$),arguments,[])).length>1?$:$[0]}var z=VN.bind(w3);var G_={};_N(G_,{uploadWorkspaceFile:()=>B5,uploadMedia:()=>H8,updateWorkspaceFile:()=>CN,submitAdaptiveCardAction:()=>O8,streamSidePrompt:()=>kN,steerAgentQueueItem:()=>MN,setWorkspaceVisibility:()=>y$,setAgentThoughtVisibility:()=>E8,sendPeerAgentMessage:()=>JN,sendAgentMessage:()=>c4,searchPosts:()=>V8,restoreChatBranch:()=>ON,respondToAgentRequest:()=>X5,renameWorkspaceFile:()=>C8,renameChatBranch:()=>FN,removeAgentQueueItem:()=>AN,pruneChatBranch:()=>HN,moveWorkspaceEntry:()=>T8,getWorkspaceTree:()=>T$,getWorkspaceRawUrl:()=>V5,getWorkspaceFile:()=>k8,getWorkspaceDownloadUrl:()=>W5,getWorkspaceBranch:()=>PN,getTimeline:()=>p4,getThumbnailUrl:()=>A8,getThread:()=>W8,getPostsByHashtag:()=>B8,getMediaUrl:()=>D_,getMediaText:()=>M8,getMediaInfo:()=>Y$,getMediaBlob:()=>IN,getChatBranches:()=>zN,getAgents:()=>z8,getAgentThought:()=>D8,getAgentStatus:()=>F8,getAgentQueueState:()=>EN,getAgentModels:()=>C$,getAgentContext:()=>DN,getActiveChatAgents:()=>U8,forkChatBranch:()=>P$,deleteWorkspaceFile:()=>y8,deletePost:()=>L8,createWorkspaceFile:()=>P8,createReply:()=>UN,createPost:()=>LN,attachWorkspaceFile:()=>I8,addToWhitelist:()=>J8,SSEClient:()=>L5});async function N1(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let N=await j.json().catch(()=>({error:"Unknown error"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}function i3(_){let $=String(_||"").split(`
`),j="message",N=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))N.push(Y.slice(5).trim());let Z=N.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function WN(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),N=new TextDecoder,Z="";while(!0){let{value:K,done:Q}=await j.read();if(Q)break;Z+=N.decode(K,{stream:!0});let X=Z.split(`

`);Z=X.pop()||"";for(let q of X){let W=i3(q);if(W)$(W.event,W.data)}}Z+=N.decode();let Y=i3(Z);if(Y)$(Y.event,Y.data)}async function p4(_=10,$=null,j=null){let N=`/timeline?limit=${_}`;if($)N+=`&before=${$}`;if(j)N+=`&chat_jid=${encodeURIComponent(j)}`;return N1(N)}async function B8(_,$=50,j=0,N=null){let Z=N?`&chat_jid=${encodeURIComponent(N)}`:"";return N1(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function V8(_,$=50,j=0,N=null,Z="current",Y=null){let K=N?`&chat_jid=${encodeURIComponent(N)}`:"",Q=Z?`&scope=${encodeURIComponent(Z)}`:"",X=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return N1(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${Q}${X}`)}async function W8(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return N1(`/thread/${_}${j}`)}async function LN(_,$=[],j=null){let N=j?`?chat_jid=${encodeURIComponent(j)}`:"";return N1(`/post${N}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function UN(_,$,j=[],N=null){let Z=N?`?chat_jid=${encodeURIComponent(N)}`:"";return N1(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function L8(_,$=!1,j=null){let N=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${N}`;return N1(Z,{method:"DELETE"})}async function c4(_,$,j=null,N=[],Z=null,Y=null){let K=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return N1(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:N,mode:Z})})}async function U8(){return N1("/agent/active-chats")}async function zN(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let N=j.toString()?`?${j.toString()}`:"";return N1(`/agent/branches${N}`)}async function P$(_,$={}){return N1("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function FN(_,$={}){return N1("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function HN(_){return N1("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function ON(_,$={}){return N1("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function JN(_,$,j,N="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:N,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return N1("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function z8(){return N1("/agent/roster")}async function F8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return N1(`/agent/status${$}`)}async function DN(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return N1(`/agent/context${$}`)}async function EN(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return N1(`/agent/queue-state${$}`)}async function AN(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function MN(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function C$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return N1(`/agent/models${$}`)}async function H8(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let N=await j.json().catch(()=>({error:"Upload failed"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function X5(_,$,j=null){let N=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!N.ok){let Z=await N.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${N.status}`)}return N.json()}async function O8(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function kN(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let N=null,Z=null;if(await WN(j,(Y,K)=>{if($.onEvent?.(Y,K),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(Y==="side_prompt_done")N=K;else if(Y==="side_prompt_error")Z=K}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return N}async function J8(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function D8(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return N1(j)}async function E8(_,$,j){return N1("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function D_(_){return`/media/${_}`}function A8(_){return`/media/${_}/thumbnail`}async function Y$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function M8(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function IN(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function T$(_="",$=2,j=!1){let N=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return N1(N)}async function PN(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return N1($)}async function k8(_,$=20000,j=null){let N=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${N}`;return N1(Z)}async function CN(_,$){return N1("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function I8(_){return N1("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function B5(_,$="",j={}){let N=new FormData;N.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),K=Y?`/workspace/upload?${Y}`:"/workspace/upload",Q=await fetch(""+K,{method:"POST",body:N});if(!Q.ok){let X=await Q.json().catch(()=>({error:"Upload failed"})),q=Error(X.error||`HTTP ${Q.status}`);throw q.status=Q.status,q.code=X.code,q}return Q.json()}async function P8(_,$,j=""){let N=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!N.ok){let Z=await N.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${N.status}`);throw Y.status=N.status,Y.code=Z.code,Y}return N.json()}async function C8(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function T8(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Move failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function y8(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return N1($,{method:"DELETE"})}async function y$(_,$=!1){return N1("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function V5(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function W5(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class L5{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(N)=>{this.markActivity(),this.onEvent(j,JSON.parse(N.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let N=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,N);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function U5(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function TN(_,$){let j=U5(_),N=U5($);if(!N)return!1;return j.startsWith(N)||j.includes(N)}function S8(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function x8(_,$,j=Date.now(),N=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>N?Y:`${Z.value}${Y}`,updatedAt:j}}function yN(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let K=0;K<j;K+=1)Y.push((Z+K)%j);return Y}function SN(_,$,j=0,N=(Z)=>Z){let Z=U5($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],K=yN(Y.length,j),Q=Y.map((X)=>U5(N(X)));for(let X of K)if(Q[X].startsWith(Z))return X;for(let X of K)if(Q[X].includes(Z))return X;return-1}function w8(_,$,j=-1,N=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=N(Z[j]);if(TN(Y,$))return j}return SN(Z,$,0,N)}function X_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function G1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function K$(_,$=!1){let j=X_(_);if(j===null)return $;return j==="true"}function Q$(_,$=null){let j=X_(_);if(j===null)return $;let N=parseInt(j,10);return Number.isFinite(N)?N:$}function z5(_){return String(_||"").trim().toLowerCase()}function R8(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return z5($[1]||"")}function n3(_){let $=new Set,j=[];for(let N of Array.isArray(_)?_:[]){let Z=z5(N?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(N)}return j}function d3(_,$,j={}){let N=R8($);if(N==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return n3(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return z5(Y?.agent_name).startsWith(N)})}function f8(_){let $=z5(_);return $?`@${$} `:""}function o3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,N=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return n3(_).filter((Z)=>!(j&&Z?.chat_jid===j)).slice(0,N)}function s3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let N=Number(_||0),Z=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(N)||N<=0)return!1;if(Z<=0)return!1;let Y=460+Z*68+(j?40:0);return N>=Y}function r3(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function F5(_){let $=v8(_);return $?`@${$}`:""}function v8(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function b8(_,$=""){let j=String(_||""),N=v8(j),Z=v8($);if(!j.trim())return{normalized:N,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!N)return{normalized:N,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${N}`;if(N===Z)return{normalized:N,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(N!==j.trim())return{normalized:N,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:N,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function a3(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?F5(_.agent_name):String($||"").trim(),N=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${N} • current branch`}function xN(_,$={}){let j=[],N=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(N&&Z===N)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function H5(_,$={}){let j=F5(_?.agent_name)||String(_?.chat_jid||"").trim(),N=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=xN(_,$);return Z.length>0?`${j} — ${N} • ${Z.join(" • ")}`:`${j} — ${N}`}function t3(_,$,j){let N=F5(_),Z=F5($),Y=String(j||"").trim();if(N&&Z&&N!==Z)return`Restored archived ${N} as ${Z} because ${N} is already in use.`;if(Z)return`Restored ${Z}.`;if(N)return`Restored ${N}.`;return`Restored ${Y||"branch"}.`}function u_({prefix:_="file",label:$,title:j,onRemove:N,onClick:Z,removeTitle:Y="Remove",icon:K="file"}){let Q=`${_}-file-pill`,X=`${_}-file-name`,q=`${_}-file-remove`,W=K==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${Q} title=${j||$} onClick=${Z}>
      ${W}
      <span class=${X}>${$}</span>
      ${N&&z`
        <button
          class=${q}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),N()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var wN=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function RN({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),N=_.tokens,Z=_.contextWindow,Y="Compact context",Q=`${N!=null?`Context: ${e3(N)} / ${e3(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,X=9,q=2*Math.PI*9,W=j/100*q,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${Q}
            aria-label="Compact context"
            onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${W} ${q}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function e3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function _2({onPost:_,onFocus:$,searchMode:j,searchScope:N="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:K,onExitSearch:Q,fileRefs:X=[],onRemoveFileRef:q,onClearFileRefs:W,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:D,activeModel:k=null,modelUsage:T=null,thinkingLevel:E=null,supportsThinking:J=!1,contextUsage:A=null,onContextCompact:C,notificationsEnabled:n=!1,notificationPermission:l="default",onToggleNotifications:t,onModelChange:Z0,onModelStateChange:f,activeEditorPath:w=null,onAttachEditorFile:H,onOpenFilePill:S,followupQueueItems:h=[],onInjectQueuedFollowup:e,onRemoveQueuedFollowup:i,onSubmitIntercept:$0,onMessageResponse:j0,onPopOutChat:Y0,isAgentActive:Q0=!1,activeChatAgents:X0=[],currentChatJid:U0="web:default",connectionStatus:z0="connected",onSetFileRefs:O0,onSetMessageRefs:l0,onSubmitError:P0,onSwitchChat:D0,onRenameSession:i0,isRenameSessionInProgress:n0=!1,onCreateSession:S0,onDeleteSession:B0,onRestoreSession:C0}){let[E0,q0]=c(""),[T0,r0]=c(""),[h0,z1]=c([]),[A1,u0]=c(!1),[d0,Z1]=c([]),[X1,a0]=c(0),[y1,K1]=c(!1),[v1,B1]=c([]),[c1,m0]=c(0),[a1,V1]=c(!1),[F1,J1]=c(!1),[y0,D1]=c(!1),[R0,v0]=c(!1),[e0,d1]=c([]),[m,G0]=c(0),[A0,F0]=c(0),[t0,t1]=c(!1),[l1,h_]=c(0),[M_,e1]=c(null),_1=y(null),S1=y(null),o1=y(null),x1=y(null),k_=y(null),I_=y(null),H4=y(null),O4=y(null),__=y({value:"",updatedAt:0}),p_=y(0),Q1=y(!1),Z4=200,W_=(L)=>{let R=new Set,u=[];for(let o of L||[]){if(typeof o!=="string")continue;let H0=o.trim();if(!H0||R.has(H0))continue;R.add(H0),u.push(H0)}return u},p0=()=>{let L=X_("piclaw_compose_history");if(!L)return[];try{let R=JSON.parse(L);if(!Array.isArray(R))return[];return W_(R)}catch{return[]}},H1=(L)=>{G1("piclaw_compose_history",JSON.stringify(L))},x0=y(p0()),w1=y(-1),Z_=y(""),R1=E0.trim()||h0.length>0||X.length>0||V.length>0,f4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),Y_=typeof window<"u"&&typeof Notification<"u",J4=typeof window<"u"?Boolean(window.isSecureContext):!1,s4=Y_&&J4&&l!=="denied",Y4=l==="granted"&&n,K4=Y4?"Disable notifications":"Enable notifications",L_=h0.length>0||X.length>0||V.length>0,r4=z0==="disconnected"?"Reconnecting":String(z0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(L)=>L.toUpperCase()),P_=z0==="disconnected"?"Reconnecting":`Connection: ${r4}`,$_=(Array.isArray(X0)?X0:[]).filter((L)=>!L?.archived_at),D4=o3($_,{currentChatJid:U0,limit:4}),Q4=!j&&s3({footerWidth:l1,visibleAgentCount:D4.length,hasContextIndicator:Boolean(A&&A.percent!=null)}),w0=(()=>{for(let L of Array.isArray(X0)?X0:[]){let R=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(R&&R===U0)return L}return null})(),C1=Boolean(w0&&w0.chat_jid===(w0.root_chat_jid||w0.chat_jid)),c_=M0(()=>{let L=new Set,R=[];for(let u of Array.isArray(X0)?X0:[]){let o=typeof u?.chat_jid==="string"?u.chat_jid.trim():"";if(!o||o===U0||L.has(o))continue;if(!(typeof u?.agent_name==="string"?u.agent_name.trim():""))continue;L.add(o),R.push(u)}return R},[X0,U0]),U_=c_.length>0,l_=U_&&typeof D0==="function",i_=U_&&typeof C0==="function",z_=Boolean(n0||Q1.current),O1=!j&&typeof i0==="function"&&!z_,Y1=!j&&typeof S0==="function",b1=!j&&typeof B0==="function"&&!C1,n_=!j&&(l_||i_||O1||Y1||b1),E4=k||"",v4=J&&E?` (${E})`:"",u1=v4.trim()?`${E}`:"",C_=typeof T?.hint_short==="string"?T.hint_short.trim():"",q4=[u1||null,C_||null].filter(Boolean).join(" • "),a4=[E4?`Current model: ${E4}${v4}`:null,T?.plan?`Plan: ${T.plan}`:null,C_||null,T?.primary?.reset_description||null,T?.secondary?.reset_description||null].filter(Boolean),s1=F1?"Switching model…":a4.join(" • ")||`Current model: ${E4}${v4} (tap to open model picker)`,K_=(L)=>{if(!L||typeof L!=="object")return;let R=L.model??L.current;if(typeof f==="function")f({model:R??null,thinking_level:L.thinking_level??null,supports_thinking:L.supports_thinking,provider_usage:L.provider_usage??null});if(R&&typeof Z0==="function")Z0(R)},d_=(L)=>{let R=L||_1.current;if(!R)return;R.style.height="auto",R.style.height=`${R.scrollHeight}px`,R.style.overflowY="hidden"},t4=(L)=>{if(!L)return{content:L,fileRefs:[]};let u=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),o=-1;for(let o0=0;o0<u.length;o0+=1)if(u[o0].trim()==="Files:"&&u[o0+1]&&/^\s*-\s+/.test(u[o0+1])){o=o0;break}if(o===-1)return{content:L,fileRefs:[]};let H0=[],c0=o+1;for(;c0<u.length;c0+=1){let o0=u[c0];if(/^\s*-\s+/.test(o0))H0.push(o0.replace(/^\s*-\s+/,"").trim());else if(!o0.trim())break;else break}if(H0.length===0)return{content:L,fileRefs:[]};let U1=u.slice(0,o),$1=u.slice(c0);return{content:[...U1,...$1].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:H0}},b4=(L)=>{if(!L)return{content:L,messageRefs:[]};let u=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),o=-1;for(let o0=0;o0<u.length;o0+=1)if(u[o0].trim()==="Referenced messages:"&&u[o0+1]&&/^\s*-\s+/.test(u[o0+1])){o=o0;break}if(o===-1)return{content:L,messageRefs:[]};let H0=[],c0=o+1;for(;c0<u.length;c0+=1){let o0=u[c0];if(/^\s*-\s+/.test(o0)){let e_=o0.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(e_)H0.push(e_[1])}else if(!o0.trim())break;else break}if(H0.length===0)return{content:L,messageRefs:[]};let U1=u.slice(0,o),$1=u.slice(c0);return{content:[...U1,...$1].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:H0}},o_=(L)=>{let R=t4(L||""),u=b4(R.content||"");return{text:u.content||"",fileRefs:R.fileRefs,messageRefs:u.messageRefs}},T_=(L)=>{if(!L.startsWith("/")||L.includes(`
`)){K1(!1),Z1([]);return}let R=L.toLowerCase().split(" ")[0];if(R.length<1){K1(!1),Z1([]);return}let u=wN.filter((o)=>o.name.startsWith(R)||o.name.replace(/-/g,"").startsWith(R.replace(/-/g,"")));if(u.length>0&&!(u.length===1&&u[0].name===R))V1(!1),B1([]),Z1(u),a0(0),K1(!0);else K1(!1),Z1([])},m1=(L)=>{let R=E0,u=R.indexOf(" "),o=u>=0?R.slice(u):"",H0=L.name+o;q0(H0),K1(!1),Z1([]),requestAnimationFrame(()=>{let c0=_1.current;if(!c0)return;let U1=H0.length;c0.selectionStart=U1,c0.selectionEnd=U1,c0.focus()})},s_=(L)=>{if(R8(L)==null){V1(!1),B1([]);return}let R=d3($_,L,{currentChatJid:U0});if(R.length>0&&!(R.length===1&&f8(R[0].agent_name).trim().toLowerCase()===String(L||"").trim().toLowerCase()))K1(!1),Z1([]),B1(R),m0(0),V1(!0);else V1(!1),B1([])},y_=(L)=>{let R=f8(L?.agent_name);if(!R)return;q0(R),V1(!1),B1([]),requestAnimationFrame(()=>{let u=_1.current;if(!u)return;let o=R.length;u.selectionStart=o,u.selectionEnd=o,u.focus()})},S_=()=>{if(j||!l_&&!i_&&!O1&&!Y1&&!b1)return!1;return __.current={value:"",updatedAt:0},D1(!1),K1(!1),Z1([]),V1(!1),B1([]),v0(!0),!0},A4=(L)=>{if(L?.preventDefault?.(),L?.stopPropagation?.(),j||!l_&&!i_&&!O1&&!Y1&&!b1)return;if(R0){__.current={value:"",updatedAt:0},v0(!1);return}S_()},M4=(L)=>{let R=typeof L==="string"?L.trim():"";if(v0(!1),!R||R===U0){requestAnimationFrame(()=>_1.current?.focus());return}D0?.(R)},e4=async(L)=>{let R=typeof L==="string"?L.trim():"";if(v0(!1),!R||typeof C0!=="function"){requestAnimationFrame(()=>_1.current?.focus());return}try{await C0(R)}catch(u){console.warn("Failed to restore session:",u),requestAnimationFrame(()=>_1.current?.focus())}},M1=(L)=>{let R=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(R&&typeof D0==="function"){D0(R);return}y_(L)},r_=(L)=>{let u=(Array.isArray(L)?L:[]).findIndex((o)=>!o?.disabled);return u>=0?u:0},W1=M0(()=>{let L=[];for(let R of c_){let u=Boolean(R?.archived_at),o=typeof R?.agent_name==="string"?R.agent_name.trim():"",H0=typeof R?.chat_jid==="string"?R.chat_jid.trim():"";if(!o||!H0)continue;L.push({type:"session",key:`session:${H0}`,label:`@${o} — ${H0}${R?.is_active?" active":""}${u?" archived":""}`,chat:R,disabled:u?!i_:!l_})}if(Y1)L.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(O1)L.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:z_});if(b1)L.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return L},[c_,i_,l_,Y1,O1,b1,z_]),k4=async(L)=>{if(L?.preventDefault)L.preventDefault();if(L?.stopPropagation)L.stopPropagation();if(typeof i0!=="function"||n0||Q1.current)return;Q1.current=!0,v0(!1);try{await i0()}catch(R){console.warn("Failed to rename session:",R)}finally{Q1.current=!1}requestAnimationFrame(()=>_1.current?.focus())},x_=async()=>{if(typeof S0!=="function")return;v0(!1);try{await S0()}catch(L){console.warn("Failed to create session:",L)}requestAnimationFrame(()=>_1.current?.focus())},G4=async()=>{if(typeof B0!=="function")return;v0(!1);try{await B0(U0)}catch(L){console.warn("Failed to delete session:",L)}requestAnimationFrame(()=>_1.current?.focus())},w_=(L)=>{if(j)r0(L);else q0(L),T_(L),s_(L);requestAnimationFrame(()=>d_())},F_=(L)=>{let R=j?T0:E0,u=R&&!R.endsWith(`
`)?`
`:"",o=`${R}${u}${L}`.trimStart();w_(o)},Q_=(L)=>{let R=L?.command?.model_label;if(R)return R;let u=L?.command?.message;if(typeof u==="string"){let o=u.match(/•\s+([^\n]+?)\s+\(current\)/);if(o?.[1])return o[1].trim()}return null},X4=async(L)=>{if(j||F1)return;J1(!0);try{let R=await c4("default",L,null,[],null,U0),u=Q_(R);K_({model:u??k??null,thinking_level:R?.command?.thinking_level,supports_thinking:R?.command?.supports_thinking});try{let o=await C$(U0);if(o)K_(o)}catch{}return _?.(),!0}catch(R){return console.error("Failed to switch model:",R),alert("Failed to switch model: "+R.message),!1}finally{J1(!1)}},u4=async()=>{await X4("/cycle-model")},a_=async(L)=>{if(!L||F1)return;if(await X4(`/model ${L}`))D1(!1)},I4=(L)=>{if(!L||L.disabled)return;if(L.type==="session"){let R=L.chat;if(R?.archived_at)e4(R.chat_jid);else M4(R.chat_jid);return}if(L.type==="action"){if(L.action==="new"){x_();return}if(L.action==="rename"){k4();return}if(L.action==="delete")G4()}},P4=(L)=>{L.preventDefault(),L.stopPropagation(),__.current={value:"",updatedAt:0},v0(!1),D1((R)=>!R)},R_=async()=>{if(j)return;C?.(),await f_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},m4=(L)=>{if(L==="queue"||L==="steer"||L==="auto")return L;return Q0?"queue":null},f_=async(L,R,u={})=>{let{includeMedia:o=!0,includeFileRefs:H0=!0,includeMessageRefs:c0=!0,clearAfterSubmit:U1=!0,recordHistory:$1=!0}=u||{},k1=typeof L==="string"?L:L&&typeof L?.target?.value==="string"?L.target.value:E0,o0=typeof k1==="string"?k1:"";if(!o0.trim()&&(o?h0.length===0:!0)&&(H0?X.length===0:!0)&&(c0?V.length===0:!0))return;K1(!1),Z1([]),V1(!1),B1([]),v0(!1),e1(null);let e_=o?[...h0]:[],j_=H0?[...X]:[],v_=c0?[...V]:[],B4=o0.trim();if($1&&B4){let T4=x0.current,q1=W_(T4.filter(($$)=>$$!==B4));if(q1.push(B4),q1.length>200)q1.splice(0,q1.length-200);x0.current=q1,H1(q1),w1.current=-1,Z_.current=""}let _$=()=>{if(o)z1([...e_]);if(H0)O0?.(j_);if(c0)l0?.(v_);q0(B4),requestAnimationFrame(()=>d_())};if(U1)q0(""),z1([]),W?.(),D?.();(async()=>{try{if(await $0?.({content:B4,submitMode:R,fileRefs:j_,messageRefs:v_,mediaFiles:e_})){_?.();return}let q1=[];for(let i1 of e_){let j$=await H8(i1);q1.push(j$.id)}let $$=j_.length?`Files:
${j_.map((i1)=>`- ${i1}`).join(`
`)}`:"",i5=v_.length?`Referenced messages:
${v_.map((i1)=>`- message:${i1}`).join(`
`)}`:"",z$=q1.length?`Attachments:
${q1.map((i1,j$)=>{let s$=e_[j$]?.name||`attachment-${j$+1}`;return`- attachment:${i1} (${s$})`}).join(`
`)}`:"",g4=[B4,$$,i5,z$].filter(Boolean).join(`

`),h4=await c4("default",g4,null,q1,m4(R),U0);if(j0?.(h4),h4?.command){K_({model:h4.command.model_label??k??null,thinking_level:h4.command.thinking_level,supports_thinking:h4.command.supports_thinking});try{let i1=await C$(U0);if(i1)K_(i1)}catch{}}_?.()}catch(T4){if(U1)_$();let q1=T4?.message||"Failed to send message.";e1(q1),P0?.(q1),console.error("Failed to post:",T4)}})()},C4=(L)=>{e?.(L)},t_=x((L)=>{if(j||!y0&&!R0||L?.isComposing)return!1;let R=()=>{L.preventDefault?.(),L.stopPropagation?.()},u=()=>{__.current={value:"",updatedAt:0}};if(L.key==="Escape"){if(R(),u(),y0)D1(!1);if(R0)v0(!1);return!0}if(y0){if(L.key==="ArrowDown"){if(R(),u(),e0.length>0)G0((o)=>(o+1)%e0.length);return!0}if(L.key==="ArrowUp"){if(R(),u(),e0.length>0)G0((o)=>(o-1+e0.length)%e0.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&e0.length>0)return R(),u(),a_(e0[Math.max(0,Math.min(m,e0.length-1))]),!0;if(S8(L)&&e0.length>0){R();let o=x8(__.current,L.key);__.current=o;let H0=w8(e0,o.value,m,(c0)=>c0);if(H0>=0)G0(H0);return!0}}if(R0){if(L.key==="ArrowDown"){if(R(),u(),W1.length>0)F0((o)=>(o+1)%W1.length);return!0}if(L.key==="ArrowUp"){if(R(),u(),W1.length>0)F0((o)=>(o-1+W1.length)%W1.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&W1.length>0)return R(),u(),I4(W1[Math.max(0,Math.min(A0,W1.length-1))]),!0;if(S8(L)&&W1.length>0){R();let o=x8(__.current,L.key);__.current=o;let H0=w8(W1,o.value,A0,(c0)=>c0.label);if(H0>=0)F0(H0);return!0}}return!1},[j,y0,R0,e0,m,W1,A0,a_]),F=(L)=>{if(L.isComposing)return;if(j&&L.key==="Escape"){L.preventDefault(),r0(""),Q?.();return}if(t_(L))return;let R=_1.current?.value??(j?T0:E0);if(r3(L,R,{searchMode:j,showSessionSwitcherButton:n_})){L.preventDefault(),S_();return}if(a1&&v1.length>0){let u=_1.current?.value??(j?T0:E0);if(!String(u||"").match(/^@([a-zA-Z0-9_-]*)$/))V1(!1),B1([]);else{if(L.key==="ArrowDown"){L.preventDefault(),m0((o)=>(o+1)%v1.length);return}if(L.key==="ArrowUp"){L.preventDefault(),m0((o)=>(o-1+v1.length)%v1.length);return}if(L.key==="Tab"||L.key==="Enter"){L.preventDefault(),y_(v1[c1]);return}if(L.key==="Escape"){L.preventDefault(),V1(!1),B1([]);return}}}if(y1&&d0.length>0){let u=_1.current?.value??(j?T0:E0);if(!String(u||"").startsWith("/"))K1(!1),Z1([]);else{if(L.key==="ArrowDown"){L.preventDefault(),a0((o)=>(o+1)%d0.length);return}if(L.key==="ArrowUp"){L.preventDefault(),a0((o)=>(o-1+d0.length)%d0.length);return}if(L.key==="Tab"){L.preventDefault(),m1(d0[X1]);return}if(L.key==="Enter"&&!L.shiftKey){if(!R.includes(" ")){L.preventDefault();let H0=d0[X1];K1(!1),Z1([]),f_(H0.name);return}}if(L.key==="Escape"){L.preventDefault(),K1(!1),Z1([]);return}}}if(!j&&(L.key==="ArrowUp"||L.key==="ArrowDown")&&!L.metaKey&&!L.ctrlKey&&!L.altKey&&!L.shiftKey){let u=_1.current;if(!u)return;let o=u.value||"",H0=u.selectionStart===0&&u.selectionEnd===0,c0=u.selectionStart===o.length&&u.selectionEnd===o.length;if(L.key==="ArrowUp"&&H0||L.key==="ArrowDown"&&c0){let U1=x0.current;if(!U1.length)return;L.preventDefault();let $1=w1.current;if(L.key==="ArrowUp"){if($1===-1)Z_.current=o,$1=U1.length-1;else if($1>0)$1-=1;w1.current=$1,w_(U1[$1]||"")}else{if($1===-1)return;if($1<U1.length-1)$1+=1,w1.current=$1,w_(U1[$1]||"");else w1.current=-1,w_(Z_.current||""),Z_.current=""}requestAnimationFrame(()=>{let k1=_1.current;if(!k1)return;let o0=k1.value.length;k1.selectionStart=o0,k1.selectionEnd=o0});return}}if(L.key==="Enter"&&!L.shiftKey&&(L.ctrlKey||L.metaKey)){if(L.preventDefault(),j){if(R.trim())Z?.(R.trim(),N)}else f_(R,"steer");return}if(L.key==="Enter"&&!L.shiftKey)if(L.preventDefault(),j){if(R.trim())Z?.(R.trim(),N)}else f_(R)},I=(L)=>{let R=Array.from(L||[]).filter((u)=>u instanceof File&&!String(u.name||"").startsWith(".DS_Store"));if(!R.length)return;z1((u)=>[...u,...R]),e1(null)},b=(L)=>{I(L.target.files),L.target.value=""},v=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),p_.current+=1,u0(!0)},d=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),p_.current=Math.max(0,p_.current-1),p_.current===0)u0(!1)},K0=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),L.dataTransfer)L.dataTransfer.dropEffect="copy";u0(!0)},V0=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),p_.current=0,u0(!1),I(L.dataTransfer?.files||[])},L0=(L)=>{if(j)return;let R=L.clipboardData?.items;if(!R||!R.length)return;let u=[];for(let o of R){if(o.kind!=="file")continue;let H0=o.getAsFile?.();if(H0)u.push(H0)}if(u.length>0)L.preventDefault(),I(u)},N0=(L)=>{z1((R)=>R.filter((u,o)=>o!==L))},k0=()=>{e1(null),z1([]),W?.(),D?.()},W0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((L)=>{let{latitude:R,longitude:u,accuracy:o}=L.coords,H0=`${R.toFixed(5)}, ${u.toFixed(5)}`,c0=Number.isFinite(o)?` ±${Math.round(o)}m`:"",U1=`https://maps.google.com/?q=${R},${u}`,$1=`Location: ${H0}${c0} ${U1}`;F_($1)},(L)=>{let R=L?.message||"Unable to retrieve location.";alert(`Location error: ${R}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};p(()=>{if(!y0)return;__.current={value:"",updatedAt:0},t1(!0),C$(U0).then((L)=>{let R=Array.isArray(L?.models)?L.models.filter((u)=>typeof u==="string"&&u.trim().length>0):[];R.sort((u,o)=>u.localeCompare(o,void 0,{sensitivity:"base"})),d1(R),K_(L)}).catch((L)=>{console.warn("Failed to load model list:",L),d1([])}).finally(()=>{t1(!1)})},[y0,k]),p(()=>{if(j)D1(!1),v0(!1),K1(!1),Z1([]),V1(!1),B1([])},[j]),p(()=>{if(R0&&!n_)v0(!1)},[R0,n_]),p(()=>{if(!y0)return;let L=e0.findIndex((R)=>R===k);G0(L>=0?L:0)},[y0,e0,k]),p(()=>{if(!R0)return;F0(r_(W1)),__.current={value:"",updatedAt:0}},[R0,U0]),p(()=>{if(!y0)return;let L=(R)=>{let u=x1.current,o=k_.current,H0=R.target;if(u&&u.contains(H0))return;if(o&&o.contains(H0))return;D1(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[y0]),p(()=>{if(!R0)return;let L=(R)=>{let u=I_.current,o=H4.current,H0=R.target;if(u&&u.contains(H0))return;if(o&&o.contains(H0))return;v0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[R0]),p(()=>{if(j||!y0&&!R0)return;let L=(R)=>{t_(R)};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,y0,R0,t_]),p(()=>{if(!y0)return;let L=x1.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[y0,m,e0]),p(()=>{if(!R0)return;let L=I_.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[R0,A0,W1.length]),p(()=>{let L=()=>{let c0=O4.current?.clientWidth||0;h_((U1)=>U1===c0?U1:c0)};L();let R=O4.current,u=0,o=()=>{if(u)cancelAnimationFrame(u);u=requestAnimationFrame(()=>{u=0,L()})},H0=null;if(R&&typeof ResizeObserver<"u")H0=new ResizeObserver(()=>o()),H0.observe(R);if(typeof window<"u")window.addEventListener("resize",o);return()=>{if(u)cancelAnimationFrame(u);if(H0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",o)}},[j,k,D4.length,A?.percent]);let q_=(L)=>{let R=L.target.value;if(e1(null),R0)v0(!1);d_(L.target),w_(R)};return p(()=>{requestAnimationFrame(()=>d_())},[E0,T0,j]),p(()=>{if(j)return;s_(E0)},[$_,U0,E0,j]),z`
        <div class="compose-box">
            ${!j&&h.length>0&&z`
                <div class="compose-queue-stack">
                    ${h.map((L)=>{let R=typeof L?.content==="string"?L.content:"",u=o_(R);if(!u.text.trim()&&u.fileRefs.length===0&&u.messageRefs.length===0)return null;return z`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${R}>
                                    ${u.text.trim()&&z`
                                        <div class="compose-queue-stack-text">${u.text}</div>
                                    `}
                                    ${(u.messageRefs.length>0||u.fileRefs.length>0)&&z`
                                        <div class="compose-queue-stack-refs">
                                            ${u.messageRefs.map((o)=>z`
                                                <${u_}
                                                    key=${"queue-msg-"+o}
                                                    prefix="compose"
                                                    label=${"msg:"+o}
                                                    title=${"Message reference: "+o}
                                                    icon="message"
                                                />
                                            `)}
                                            ${u.fileRefs.map((o)=>{let H0=o.split("/").pop()||o;return z`
                                                    <${u_}
                                                        key=${"queue-file-"+o}
                                                        prefix="compose"
                                                        label=${H0}
                                                        title=${o}
                                                        onClick=${()=>S?.(o)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                                    <button
                                        class="compose-queue-stack-steer-btn"
                                        type="button"
                                        title="Inject queued follow-up as steer"
                                        aria-label="Inject queued follow-up as steer"
                                        onClick=${()=>C4(L)}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                            <polyline points="14 12 18 8 22 12" />
                                        </svg>
                                        <span>Steer</span>
                                    </button>
                                    <button
                                        class="compose-queue-stack-close-btn"
                                        type="button"
                                        title="Cancel queued message"
                                        aria-label="Cancel queued message"
                                        onClick=${()=>i?.(L)}
                                    >
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${A1?" drag-active":""}`}
                onDragEnter=${v}
                onDragOver=${K0}
                onDragLeave=${d}
                onDrop=${V0}
            >
                <div class="compose-input-main">
                    ${M_&&!L_&&z`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${M_}</div>
                    `}
                    ${L_&&z`
                        <div class="compose-file-refs">
                            ${M_&&z`
                                <div class="compose-submit-error" role="status" aria-live="polite">${M_}</div>
                            `}
                            ${V.map((L)=>{return z`
                                    <${u_}
                                        key=${"msg-"+L}
                                        prefix="compose"
                                        label=${"msg:"+L}
                                        title=${"Message reference: "+L}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(L)}
                                    />
                                `})}
                            ${X.map((L)=>{let R=L.split("/").pop()||L;return z`
                                    <${u_}
                                        prefix="compose"
                                        label=${R}
                                        title=${L}
                                        onClick=${()=>S?.(L)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(L)}
                                    />
                                `})}
                            ${h0.map((L,R)=>{let u=L?.name||`attachment-${R+1}`;return z`
                                    <${u_}
                                        key=${u+R}
                                        prefix="compose"
                                        label=${u}
                                        title=${u}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>N0(R)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${k0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof Y0==="function"&&z`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Y0?.()}
                            title="Open this chat in a new chat-only window"
                            aria-label="Open this chat in a new chat-only window"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 5h5v5" />
                                <path d="M10 14 19 5" />
                                <path d="M19 14v5h-5" />
                                <path d="M5 10V5h5" opacity="0" />
                                <path d="M5 19h5" />
                                <path d="M5 19v-5" />
                            </svg>
                        </button>
                    `}
                    <textarea
                        ref=${_1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?T0:E0}
                        onInput=${q_}
                        onKeyDown=${F}
                        onPaste=${L0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${a1&&v1.length>0&&z`
                        <div class="slash-autocomplete" ref=${o1}>
                            ${v1.map((L,R)=>z`
                                <div
                                    key=${L.chat_jid||L.agent_name}
                                    class=${`slash-item${R===c1?" active":""}`}
                                    onMouseDown=${(u)=>{u.preventDefault(),y_(L)}}
                                    onMouseEnter=${()=>m0(R)}
                                >
                                    <span class="slash-name">@${L.agent_name}</span>
                                    <span class="slash-desc">${L.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${y1&&d0.length>0&&z`
                        <div class="slash-autocomplete" ref=${S1}>
                            ${d0.map((L,R)=>z`
                                <div
                                    key=${L.name}
                                    class=${`slash-item${R===X1?" active":""}`}
                                    onMouseDown=${(u)=>{u.preventDefault(),m1(L)}}
                                    onMouseEnter=${()=>a0(R)}
                                >
                                    <span class="slash-name">${L.name}</span>
                                    <span class="slash-desc">${L.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${y0&&!j&&z`
                        <div class="compose-model-popup" ref=${x1} tabIndex="-1" onKeyDown=${t_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${t0&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!t0&&e0.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!t0&&e0.map((L,R)=>z`
                                    <button
                                        key=${L}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===R?" active":""}${k===L?" current-model":""}`}
                                        onClick=${()=>{a_(L)}}
                                        disabled=${F1}
                                    >
                                        ${L}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{u4()}}
                                    disabled=${F1}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${R0&&!j&&z`
                        <div class="compose-model-popup" ref=${I_} tabIndex="-1" onKeyDown=${t_}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${z`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return a3(w0,U0)})()}
                                    </div>
                                `}
                                ${!U_&&z`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${U_&&c_.map((L,R)=>{let u=Boolean(L.archived_at),H0=L.chat_jid!==(L.root_chat_jid||L.chat_jid)&&!L.is_active&&!u&&typeof B0==="function",c0=H5(L,{currentChatJid:U0});return z`
                                        <div key=${L.chat_jid} class=${`compose-model-popup-item-row${u?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${u?" archived":""}${A0===R?" active":""}`}
                                                onClick=${()=>{if(u){e4(L.chat_jid);return}M4(L.chat_jid)}}
                                                disabled=${u?!i_:!l_}
                                                title=${u?`Restore archived ${`@${L.agent_name}`}`:`Switch to ${`@${L.agent_name}`}`}
                                            >
                                                ${c0}
                                            </button>
                                            ${H0&&z`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${L.agent_name}`}
                                                    onClick=${(U1)=>{U1.stopPropagation(),v0(!1),B0(L.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(Y1||O1||b1)&&z`
                                <div class="compose-model-popup-actions">
                                    ${Y1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${W1.findIndex((L)=>L.key==="action:new")===A0?" active":""}`}
                                            onClick=${()=>{x_()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${O1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${W1.findIndex((L)=>L.key==="action:rename")===A0?" active":""}`}
                                            onClick=${(L)=>{k4(L)}}
                                            title="Rename the current branch handle"
                                            disabled=${z_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${b1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${W1.findIndex((L)=>L.key==="action:delete")===A0?" active":""}`}
                                            onClick=${()=>{G4()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${O4}>
                    ${!j&&k&&z`
                    <div class="compose-meta-row">
                        ${!j&&k&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${s1}
                                    aria-label="Open model picker"
                                    onClick=${P4}
                                    disabled=${F1}
                                >
                                    ${F1?"Switching…":E4}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!F1&&q4&&z`
                                        <span class="compose-model-usage-hint" title=${s1}>
                                            ${q4}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&A&&A.percent!=null&&z`
                            <${RN} usage=${A} onCompact=${R_} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${Q4&&z`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${D4.map((L)=>{let R=Boolean(L?.chat_jid&&L.chat_jid===U0);return z`
                                <button
                                    key=${L.chat_jid||L.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${R?" active":""}`}
                                    onClick=${()=>M1(L)}
                                    title=${`${L.chat_jid||"Active agent"} — switch to @${L.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${L.agent_name}</span>
                                </button>
                            `})}
                        </div>
                    `}
                    ${n_&&z`
                        ${w0?.agent_name&&z`
                            <span
                                class="compose-current-agent-label active"
                                title=${w0.chat_jid||U0}
                                onClick=${A4}
                            >@${w0.agent_name}</span>
                        `}
                        <button
                            ref=${H4}
                            type="button"
                            class=${`icon-btn compose-mention-btn${R0?" active":""}`}
                            onClick=${A4}
                            title=${R0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${R0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&z`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${N}
                                onChange=${(L)=>Y?.(L.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?Q:K}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${f4&&!j&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${W0}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${s4&&!j&&z`
                        <button
                            class=${`icon-btn notification-btn${Y4?" active":""}`}
                            onClick=${t}
                            title=${K4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&z`
                        ${w&&H&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${w}`}
                                type="button"
                                disabled=${X.includes(w)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${b} />
                        </label>
                    `}
                    ${(z0!=="connected"||!j)&&z`
                        <div class="compose-send-stack">
                            ${z0!=="connected"&&z`
                                <span class="compose-connection-status connection-status ${z0}" title=${P_}>
                                    ${r4}
                                </span>
                            `}
                            ${!j&&z`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{f_()}}
                                    disabled=${!R1}
                                    title="Send (Enter)"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var g8="piclaw_theme",J5="piclaw_tint",N2="piclaw_chat_themes",x$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},Z2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},$2={default:{label:"Default",mode:"auto",light:x$,dark:Z2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},fN=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],l4={theme:"default",tint:null},Y2="light",u8=!1;function D5(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function G$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let N=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(N,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${N.toLowerCase()}`}}function vN(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let N=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),N=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=N.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),K=parseInt(Z[2],10),Q=parseInt(Z[3],10);if(![Y,K,Q].every((q)=>Number.isFinite(q)))return null;let X=`#${[Y,K,Q].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:K,b:Q,hex:X}}function K2(_){return G$(_)||vN(_)}function S$(_,$,j){let N=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${N} ${Z} ${Y})`}function m8(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function bN(_){let $=_.r/255,j=_.g/255,N=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=N<=0.03928?N/12.92:Math.pow((N+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*K}function uN(_){return bN(_)>0.4?"#000000":"#ffffff"}function Q2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function h8(_){return $2[_]||$2.default}function mN(_){return _.mode==="auto"?Q2():_.mode}function q2(_,$){let j=h8(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||x$}function G2(_,$,j){let N=K2($);if(!N)return _;let Z=G$(_.bgPrimary),Y=G$(_.bgSecondary),K=G$(_.bgHover),Q=G$(_.borderColor);if(!Z||!Y||!K||!Q)return _;let q=G$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:S$(Z,N,0.08),bgSecondary:S$(Y,N,0.12),bgHover:S$(K,N,0.16),borderColor:S$(Q,N,0.08),accent:N.hex,accentHover:q?S$(N,q,0.18):N.hex}}function gN(_,$){if(typeof document>"u")return;let j=document.documentElement,N=_.accent,Z=K2(N),Y=Z?m8(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=Z?m8(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",Q=Z?m8(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X=Z?uN(Z):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":N,"--accent-hover":_.accentHover||N,"--accent-soft":K,"--accent-soft-strong":Q,"--accent-contrast-text":X,"--danger-color":_.danger||x$.danger,"--success-color":_.success||x$.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([W,V])=>{if(V)j.style.setProperty(W,V)})}function hN(){if(typeof document>"u")return;let _=document.documentElement;fN.forEach(($)=>_.style.removeProperty($))}function q$(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,N=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!N)N=document.createElement("meta"),document.head.appendChild(N);if(N.setAttribute("name",_),j)N.setAttribute("id",j);return N}function j2(_){let $=D5(l4?.theme||"default"),j=l4?.tint?String(l4.tint).trim():null,N=q2($,_);if($==="default"&&j)N=G2(N,j,_);if(N?.bgPrimary)return N.bgPrimary;return _==="dark"?Z2.bgPrimary:x$.bgPrimary}function pN(_,$){if(typeof document>"u")return;let j=q$("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let N=q$("theme-color",{id:"theme-color-light"});if(N)N.setAttribute("media","(prefers-color-scheme: light)"),N.setAttribute("content",j2("light"));let Z=q$("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",j2("dark"));let Y=q$("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let K=q$("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let Q=q$("apple-mobile-web-app-status-bar-style");if(Q)Q.setAttribute("content",$==="dark"?"black-translucent":"default")}function cN(){if(typeof window>"u")return;let _={...l4,mode:Y2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function X2(){try{let _=X_(N2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function lN(_,$,j){let N=X2();if(!$&&!j)delete N[_];else N[_]={theme:$||"default",tint:j||null};G1(N2,JSON.stringify(N))}function iN(_){if(!_)return null;return X2()[_]||null}function B2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function p8(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=D5(_?.theme||"default"),N=_?.tint?String(_.tint).trim():null,Z=h8(j),Y=mN(Z),K=q2(j,Y);l4={theme:j,tint:N},Y2=Y;let Q=document.documentElement;Q.dataset.theme=Y,Q.dataset.colorTheme=j,Q.dataset.tint=N?String(N):"",Q.style.colorScheme=Y;let X=K;if(j==="default"&&N)X=G2(K,N,Y);if(j==="default"&&!N)hN();else gN(X,Y);if(pN(X.bgPrimary,Y),cN(),$.persist!==!1)if(G1(g8,j),N)G1(J5,N);else G1(J5,"")}function O5(){if(h8(l4.theme).mode!=="auto")return;p8(l4,{persist:!1})}function V2(){if(typeof window>"u")return()=>{};let _=B2(),$=iN(_),j=$?D5($.theme||"default"):D5(X_(g8)||"default"),N=$?$.tint?String($.tint).trim():null:(()=>{let Z=X_(J5);return Z?Z.trim():null})();if(p8({theme:j,tint:N},{persist:!1}),window.matchMedia&&!u8){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",O5);else if(Z.addListener)Z.addListener(O5);return u8=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",O5);else if(Z.removeListener)Z.removeListener(O5);u8=!1}}return()=>{}}function W2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||B2(),j=_.theme??_.name??_.colorTheme,N=_.tint??null;if(lN($,j||"default",N),p8({theme:j||"default",tint:N},{persist:!1}),!$||$==="web:default")G1(g8,j||"default"),G1(J5,N||"")}function L2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return Q2()}var E5=/#(\w+)/g,nN=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),dN=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),oN=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),sN={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},rN=new Set(["http:","https:","mailto:",""]);function c8(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function i4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let N=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!rN.has(N.protocol))return null;return N.href}catch{return null}}function U2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),N=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())N.push(Y);for(let K of N){let Q=K.tagName.toLowerCase();if(!dN.has(Q)){let q=K.parentNode;if(!q)continue;while(K.firstChild)q.insertBefore(K.firstChild,K);q.removeChild(K);continue}let X=sN[Q]||new Set;for(let q of Array.from(K.attributes)){let W=q.name.toLowerCase(),V=q.value;if(W.startsWith("on")){K.removeAttribute(q.name);continue}if(W.startsWith("data-")||W.startsWith("aria-"))continue;if(X.has(W)||oN.has(W)){if(W==="href"){let U=i4(V);if(!U)K.removeAttribute(q.name);else if(K.setAttribute(q.name,U),Q==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(W==="src"){let U=Q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,D=i4(U,{allowDataImage:Q==="img"});if(!D)K.removeAttribute(q.name);else K.setAttribute(q.name,D)}continue}K.removeAttribute(q.name)}}return j.body.innerHTML}function z2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function A5(_,$=2){if(!_)return _;let j=_;for(let N=0;N<$;N+=1){let Z=z2(j);if(Z===j)break;j=Z}return j}function aN(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=[],Y=!1,K=[];for(let Q of j){if(!Y&&Q.trim().match(/^```mermaid\s*$/i)){Y=!0,K=[];continue}if(Y&&Q.trim().match(/^```\s*$/)){let X=N.length;N.push(K.join(`
`)),Z.push(`@@MERMAID_BLOCK_${X}@@`),Y=!1,K=[];continue}if(Y)K.push(Q);else Z.push(Q)}if(Y)Z.push("```mermaid"),Z.push(...K);return{text:Z.join(`
`),blocks:N}}function tN(_){if(!_)return _;return A5(_,5)}function eN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let N of $)j+=String.fromCharCode(N);return btoa(j)}function _Z(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let N=0;N<$.length;N+=1)j[N]=$.charCodeAt(N);return new TextDecoder().decode(j)}function $Z(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,N)=>{let Z=Number(N),Y=$[Z]??"",K=tN(Y);return`<div class="mermaid-container" data-mermaid="${eN(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function F2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var jZ={span:new Set(["title","class","lang","dir"])};function NZ(_,$){let j=jZ[_];if(!j||!$)return"";let N=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let K=(Y[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let Q=Y[2]??Y[3]??Y[4]??"";N.push(` ${K}="${c8(Q)}"`)}return N.join("")}function H2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let N=j.trim(),Z=N.startsWith("/"),Y=Z?N.slice(1).trim():N,Q=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[X=""]=Q.split(/\s+/,1),q=X.toLowerCase();if(!q||!nN.has(q))return $;if(q==="br")return Z?"":"<br>";if(Z)return`</${q}>`;let W=Q.slice(X.length).trim(),V=NZ(q,W);return`<${q}${V}>`})}function O2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,N)=>`<pre><code>${$(N)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,N)=>`<code>${$(N)}</code>`)}function J2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=N(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function ZZ(_){if(!window.katex)return _;let $=(K)=>z2(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let Q=[],X=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let W=Q.length;return Q.push(q),`@@CODE_BLOCK_${W}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let W=Q.length;return Q.push(q),`@@CODE_INLINE_${W}@@`}),{html:X,blocks:Q}},N=(K,Q)=>{if(!Q.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,q)=>{let W=Number(q);return Q[W]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,Q,X)=>{try{let q=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${Q}${q}`}catch(q){return`<span class="math-error" title="${c8(q.message)}">${K}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,Q,X)=>{if(/\s$/.test(X))return K;try{let q=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${Q}${q}`}catch(q){return`${Q}<span class="math-error" title="${c8(q.message)}">$${X}$</span>`}}),N(Y,Z.blocks)}function YZ(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=[],Z;while(Z=j.nextNode())N.push(Z);for(let Y of N){let K=Y.nodeValue;if(!K)continue;if(E5.lastIndex=0,!E5.test(K))continue;E5.lastIndex=0;let Q=Y.parentElement;if(Q&&(Q.closest("a")||Q.closest("code")||Q.closest("pre")))continue;let X=K.split(E5);if(X.length<=1)continue;let q=$.createDocumentFragment();X.forEach((W,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",W),U.textContent=`#${W}`,q.appendChild(U)}else q.appendChild($.createTextNode(W))}),Y.parentNode?.replaceChild(q,Y)}return $.body.innerHTML}function KZ(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,N.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,N.push("$$");continue}N.push(Y)}return N.join(`
`)}function QZ(_){let $=KZ(_||""),{text:j,blocks:N}=aN($),Z=A5(j,2),K=F2(Z).replace(/</g,"&lt;");return{safeHtml:H2(K),mermaidBlocks:N}}function B_(_,$,j={}){if(!_)return"";let{safeHtml:N,mermaidBlocks:Z}=QZ(_),Y=window.marked?marked.parse(N,{headerIds:!1,mangle:!1}):N.replace(/\n/g,"<br>");return Y=O2(Y),Y=J2(Y),Y=ZZ(Y),Y=YZ(Y),Y=$Z(Y,Z),Y=U2(Y,j),Y}function M5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=A5($,2),Z=F2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=H2(Z),K=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return K=O2(K),K=J2(K),K=U2(K),K}function qZ(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,N,Z,Y)=>{let K=Z.trim().split(/\s+/).map((X)=>{let[q,W]=X.split(",").map(Number);return{x:q,y:W}});if(K.length<3)return`<polyline${N}points="${Z}"${Y}/>`;let Q=[`M ${K[0].x},${K[0].y}`];for(let X=1;X<K.length-1;X++){let q=K[X-1],W=K[X],V=K[X+1],U=W.x-q.x,D=W.y-q.y,k=V.x-W.x,T=V.y-W.y,E=Math.sqrt(U*U+D*D),J=Math.sqrt(k*k+T*T),A=Math.min($,E/2,J/2);if(A<0.5){Q.push(`L ${W.x},${W.y}`);continue}let C=W.x-U/E*A,n=W.y-D/E*A,l=W.x+k/J*A,t=W.y+T/J*A,f=U*T-D*k>0?1:0;Q.push(`L ${C},${n}`),Q.push(`A ${A},${A} 0 0 ${f} ${l},${t}`)}return Q.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${N}d="${Q.join(" ")}"${Y}/>`})}async function W4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=L2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of Y)try{let Q=K.dataset.mermaid,X=_Z(Q||""),q=A5(X,2),W=await $(q,{...Z,transparent:!0});W=qZ(W),K.innerHTML=W,K.removeAttribute("data-mermaid")}catch(Q){console.error("Mermaid render error:",Q);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${Q.message}`,K.innerHTML="",K.appendChild(X),K.removeAttribute("data-mermaid")}}function D2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function E2(_){return String(_||"").trim()||"web:default"}function A2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function M2(_){if(!_)return!1;return _.status!=="running"}function k2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function I2({session:_,onClose:$,onInject:j,onRetry:N}){let Z=y(null),Y=y(null),K=_?.thinking?M5(_.thinking):"",Q=_?.answer?B_(_.answer,null,{sanitize:!1}):"";if(p(()=>{if(Z.current&&K)W4(Z.current).catch(()=>{})},[K]),p(()=>{if(Y.current&&Q)W4(Y.current).catch(()=>{})},[Q]),!_)return null;let X=_.status==="running",q=Boolean(String(_.answer||"").trim()),W=Boolean(String(_.thinking||"").trim()),V=A2(_),U=M2(_),D=!X&&q,k=X?"Thinking…":_.status==="error"?"Error":"Done";return z`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${k}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&z`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&z`<div class="btw-block btw-error">${_.error}</div>`}
            ${W&&z`
                <details class="btw-block btw-thinking" open=${X?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${V&&z`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:Q}}
                    ></div>
                </div>
            `}

            ${U&&z`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&z`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>N?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!D}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function GZ(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return N?{kind:j,svg:N}:null}function XZ(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return N?{kind:Y,html:N}:{kind:Y}}function S4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function I0(_){return typeof _==="string"&&_.trim()?_.trim():null}function C2(_,$=!1){let N=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(N))}var T2="__PICLAW_WIDGET_HOST__:";function P2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function l8(_,$){if(!_||_.type!=="generated_widget")return null;let j=GZ(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:C2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function y2(_){if(!_||typeof _!=="object")return null;let $=XZ(_),j=I0(_?.widget_id)||I0(_?.widgetId)||I0(_?.tool_call_id)||I0(_?.toolCallId),N=I0(_?.tool_call_id)||I0(_?.toolCallId),Z=I0(_?.turn_id)||I0(_?.turnId),Y=I0(_?.title)||I0(_?.name)||"Generated widget",K=I0(_?.subtitle)||"",Q=I0(_?.description)||K,X=I0(_?.status),q=X==="loading"||X==="streaming"||X==="final"||X==="error"?X:"streaming";return{title:Y,subtitle:K,description:Q,originPostId:S4(_?.origin_post_id)??S4(_?.originPostId),originChatJid:I0(_?.origin_chat_jid)||I0(_?.originChatJid)||I0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:C2(_?.capabilities,!0),source:"live",status:q,turnId:Z,toolCallId:N,width:S4(_?.width),height:S4(_?.height),error:I0(_?.error)}}function S2(_){return l8(_,null)!==null}function p1(_){let $=I0(_?.toolCallId)||I0(_?.tool_call_id);if($)return $;let j=I0(_?.widgetId)||I0(_?.widget_id);if(j)return j;let N=S4(_?.originPostId)??S4(_?.origin_post_id);if(N!==null)return`post:${N}`;return null}function x2(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function w2(_){return x2(_)?"allow-downloads allow-scripts":"allow-downloads"}function k5(_){return{title:I0(_?.title)||"Generated widget",widgetId:I0(_?.widgetId)||I0(_?.widget_id),toolCallId:I0(_?.toolCallId)||I0(_?.tool_call_id),turnId:I0(_?.turnId)||I0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:I0(_?.status)||"final"}}function I5(_){return{...k5(_),subtitle:I0(_?.subtitle)||"",description:I0(_?.description)||"",error:I0(_?.error)||null,width:S4(_?.width),height:S4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function P5(_){return`${T2}${JSON.stringify(I5(_))}`}function R2(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=I0(_.text)||I0(_.content)||I0(_.message)||I0(_.prompt)||I0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let N=I0(j.text)||I0(j.content)||I0(j.message)||I0(j.prompt)||I0(j.value);if(N)return N}return null}function f2(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function v2(_){let $=I0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return I0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function BZ(_){let $=k5(_);return`<script>
(function () {
  const meta = ${P2($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {}
  }

  const windowNamePrefix = ${P2(T2)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {}
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function b2(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=j==="svg"?Z:N;if(!K)return"";let Q=x2(_),X=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",Q?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),q=j==="svg"?`<div class="widget-svg-shell">${K}</div>`:K,W=Q?BZ(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${X}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${Y.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${W}
</head>
<body>${q}</body>
</html>`}function u2({widget:_,onClose:$,onWidgetEvent:j}){let N=y(null),Z=y(!1),Y=M0(()=>b2(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(p(()=>{if(!_)return;let J=(A)=>{if(A.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),p(()=>{Z.current=!1},[Y]),p(()=>{if(!_)return;let J=N.current;if(!J)return;let A=(Z0)=>{let f=P5(_),w=Z0==="widget.init"?k5(_):I5(_);try{J.name=f}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:Z0,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:w},"*")}catch{}},C=()=>{A("widget.init"),A("widget.update")},n=()=>{Z.current=!0,C()};J.addEventListener("load",n);let t=[0,40,120,300,800].map((Z0)=>setTimeout(C,Z0));return()=>{J.removeEventListener("load",n),t.forEach((Z0)=>clearTimeout(Z0))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),p(()=>{if(!_)return;let J=N.current;if(!J?.contentWindow)return;let A=P5(_),C=I5(_);try{J.name=A}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:C},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),p(()=>{if(!_)return;let J=(A)=>{let C=A?.data;if(!C||C.__piclawGeneratedWidget!==!0)return;let n=N.current,l=p1(_),t=p1({widgetId:C.widgetId,toolCallId:C.toolCallId});if(t&&l&&t!==l)return;if(!t&&n?.contentWindow&&A.source!==n.contentWindow)return;j?.(C,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let Q=(_?.artifact||{}).kind||_?.kind||"html",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",W=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=W==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",D=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",k=!Y,T=v2(_),E=w2(_);return z`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${X}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${Q.toUpperCase()}</div>
                        <div class="floating-widget-title">${X}</div>
                        ${(q||D)&&z`
                            <div class="floating-widget-subtitle">${q||D}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${()=>$?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${k?z`<div class="floating-widget-empty">${T}</div>`:z`
                            <iframe
                                ref=${N}
                                class="floating-widget-frame"
                                title=${X}
                                name=${P5(_)}
                                sandbox=${E}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var m2="PiClaw";function i8(_,$,j=!1){let N=_||"PiClaw",Z=N.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=Z.charCodeAt(0)%Y.length,Q=Y[K],X=N.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",W=q?q:null,V=j||X==="PiClaw".toLowerCase()||X==="pi";return{letter:Z,color:Q,image:W||(V?"/static/icon-192.png":null)}}function g2(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function h2(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function p2(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,K=Y?.dataset?.colorTheme||"",Q=Y?.dataset?.tint||"",X=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(X&&(Q||K&&K!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),N=0;for(let Y=0;Y<j.length;Y+=1)N=(N*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(N)%$.length;return $[Z]}function VZ(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function w$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function c2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return w$(_)?"Compacting context":"Working..."}function WZ(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,N=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(N).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${N}:${String(j).padStart(2,"0")}`}function l2(_,$=Date.now()){let j=VZ(_);if(j===null)return null;return WZ(Math.max(0,$-j))}function i2({status:_,draft:$,plan:j,thought:N,pendingRequest:Z,intent:Y,turnId:K,steerQueued:Q,onPanelToggle:X}){let V=(B0)=>{if(!B0)return{text:"",totalLines:0,fullText:""};if(typeof B0==="string"){let T0=B0,r0=T0?T0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:T0,totalLines:r0,fullText:T0}}let C0=B0.text||"",E0=B0.fullText||B0.full_text||C0,q0=Number.isFinite(B0.totalLines)?B0.totalLines:E0?E0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:C0,totalLines:q0,fullText:E0}},U=160,D=(B0)=>String(B0||"").replace(/<\/?internal>/gi,""),k=(B0)=>{if(!B0)return 1;return Math.max(1,Math.ceil(B0.length/160))},T=(B0,C0,E0)=>{let q0=(B0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!q0)return{text:"",omitted:0,totalLines:Number.isFinite(E0)?E0:0,visibleLines:0};let T0=q0.split(`
`),r0=T0.length>C0?T0.slice(0,C0).join(`
`):q0,h0=Number.isFinite(E0)?E0:T0.reduce((u0,d0)=>u0+k(d0),0),z1=r0?r0.split(`
`).reduce((u0,d0)=>u0+k(d0),0):0,A1=Math.max(h0-z1,0);return{text:r0,omitted:A1,totalLines:h0,visibleLines:z1}},E=V(j),J=V(N),A=V($),C=Boolean(E.text)||E.totalLines>0,n=Boolean(J.text)||J.totalLines>0,l=Boolean(A.fullText?.trim()||A.text?.trim());if(!_&&!l&&!C&&!n&&!Z&&!Y)return null;let[t,Z0]=c(new Set),[f,w]=c(()=>Date.now()),H=(B0)=>Z0((C0)=>{let E0=new Set(C0),q0=!E0.has(B0);if(q0)E0.add(B0);else E0.delete(B0);if(typeof X==="function")X(B0,q0);return E0});p(()=>{Z0(new Set)},[K]);let S=w$(_);p(()=>{if(!S)return;w(Date.now());let B0=setInterval(()=>w(Date.now()),1000);return()=>clearInterval(B0)},[S,_?.started_at,_?.startedAt]);let h=_?.turn_id||K,e=p2(h),i=Q?"turn-dot turn-dot-queued":"turn-dot",$0=(B0)=>B0,j0=Boolean(_?.last_activity||_?.lastActivity),Y0=(B0)=>B0==="warning"?"#f59e0b":B0==="error"?"var(--danger-color)":B0==="success"?"var(--success-color)":e,Q0=Y?.kind||"info",X0=Y0(Q0),U0=Y0(_?.kind||(S?"warning":"info")),z0="",O0=_?.title,l0=_?.status;if(_?.type==="plan")z0=O0?`Planning: ${O0}`:"Planning...";else if(_?.type==="tool_call")z0=O0?`Running: ${O0}`:"Running tool...";else if(_?.type==="tool_status")z0=O0?`${O0}: ${l0||"Working..."}`:l0||"Working...";else if(_?.type==="error")z0=O0||"Agent error";else z0=O0||l0||"Working...";if(j0)z0="Last activity just now";let P0=({panelTitle:B0,text:C0,fullText:E0,totalLines:q0,maxLines:T0,titleClass:r0,panelKey:h0})=>{let z1=t.has(h0),A1=E0||C0||"",u0=h0==="thought"||h0==="draft"?D(A1):A1,d0=typeof T0==="number",Z1=z1&&d0,X1=d0?T(u0,T0,q0):{text:u0||"",omitted:0,totalLines:Number.isFinite(q0)?q0:0};if(!u0&&!(Number.isFinite(X1.totalLines)&&X1.totalLines>0))return null;let a0=`agent-thinking-body${d0?" agent-thinking-body-collapsible":""}`,y1=d0?`--agent-thinking-collapsed-lines: ${T0};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${z1?"true":"false"}
                data-collapsible=${d0?"true":"false"}
                style=${e?`--turn-color: ${e};`:""}
            >
                <div class="agent-thinking-title ${r0||""}">
                    ${e&&z`<span class=${i} aria-hidden="true"></span>`}
                    ${B0}
                    ${Z1&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${B0} panel`}
                            onClick=${()=>H(h0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${a0}
                    style=${y1}
                    dangerouslySetInnerHTML=${{__html:M5(u0)}}
                />
                ${!z1&&X1.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>H(h0)}>
                        ▸ ${X1.omitted} more lines
                    </button>
                `}
                ${z1&&X1.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>H(h0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},D0=Z?.tool_call?.title,i0=D0?`Awaiting approval: ${D0}`:"Awaiting approval",n0=S?l2(_,f):null,S0=(B0,C0,E0=null)=>{let q0=c2(B0);return z`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${C0?`--turn-color: ${C0};`:""}
                title=${B0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${C0&&z`<span class=${i} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${q0}</span>
                    ${E0&&z`<span class="agent-status-elapsed">${E0}</span>`}
                </div>
                ${B0.detail&&z`<div class="agent-thinking-body">${B0.detail}</div>`}
            </div>
        `};return z`
        <div class="agent-status-panel">
            ${Y&&S0(Y,X0)}
            ${_?.type==="intent"&&S0(_,U0,n0)}
            ${Z&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${e?`--turn-color: ${e};`:""}>
                    <span class=${i} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${i0}</span>
                </div>
            `}
            ${C&&P0({panelTitle:$0("Planning"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,panelKey:"plan"})}
            ${n&&P0({panelTitle:$0("Thoughts"),text:J.text,fullText:J.fullText,totalLines:J.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${l&&P0({panelTitle:$0("Draft"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&z`
                <div class=${`agent-status${j0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${e?`--turn-color: ${e};`:""}>
                    ${e&&z`<span class=${i} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!j0&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${z0}</span>
                </div>
            `}
        </div>
    `}function n2({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:N,options:Z,chat_jid:Y}=_,K=N?.title||"Agent Request",Q=N?.kind||"other",X=N?.rawInput||{},q=X.command||X.commands&&X.commands[0]||null,W=X.diff||null,V=X.fileName||X.path||null,U=N?.description||X.description||X.explanation||null,k=(Array.isArray(N?.locations)?N.locations:[]).map((C)=>C?.path).filter((C)=>Boolean(C)),T=Array.from(new Set([V,...k].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:N,options:Z});let E=async(C)=>{try{await X5(j,C,Y||null),$()}catch(n){console.error("Failed to respond to agent request:",n)}},J=async()=>{try{await J8(K,`Auto-approved: ${K}`),await X5(j,"approved",Y||null),$()}catch(C){console.error("Failed to add to whitelist:",C)}},A=Z&&Z.length>0;return z`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${K}</div>
                </div>
                ${(U||q||W||T.length>0)&&z`
                    <div class="agent-request-body">
                        ${U&&z`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${T.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${T.map((C,n)=>z`<li key=${n}>${C}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&z`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${W&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${W}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${A?Z.map((C)=>z`
                            <button 
                                key=${C.optionId||C.id||String(C)}
                                class="agent-request-btn ${C.kind==="allow_once"||C.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(C.optionId||C.id||C)}
                            >
                                ${C.name||C.label||C.optionId||C.id||String(C)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>E("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>E("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${J}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function d2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let N=new Date-$,Z=N/1000,Y=86400000;if(N<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(N<5*Y){let X=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${q}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),Q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${Q}`}function R$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function E_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function n4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var LZ=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),UZ=new Set(["text/markdown"]),zZ=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),FZ=new Set(["application/vnd.jgraph.mxfile"]);function f$(_){return typeof _==="string"?_.trim().toLowerCase():""}function HZ(_){let $=f$(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function OZ(_){let $=f$(_);return!!$&&$.endsWith(".pdf")}function JZ(_){let $=f$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function v$(_,$){let j=f$(_);if(HZ($)||FZ.has(j))return"drawio";if(OZ($)||j==="application/pdf")return"pdf";if(JZ($)||zZ.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(LZ.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function o2(_){let $=f$(_);return UZ.has($)}function s2(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function DZ(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let N=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(N.slice(0,2),16),g:parseInt(N.slice(2,4),16),b:parseInt(N.slice(4,6),16)}}function EZ(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let N=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![N,Z,Y].every((K)=>Number.isFinite(K)))return null;return{r:N,g:Z,b:Y}}function r2(_){return DZ(_)||EZ(_)}function C5(_){let $=(Y)=>{let K=Y/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),N=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*N+0.0722*Z}function AZ(_,$){let j=Math.max(C5(_),C5($)),N=Math.min(C5(_),C5($));return(j+0.05)/(N+0.05)}function MZ(_,$,j="#ffffff"){let N=r2(_);if(!N)return j;let Z=j,Y=-1;for(let K of $){let Q=r2(K);if(!Q)continue;let X=AZ(N,Q);if(X>Y)Z=K,Y=X}return Z}function n8(){let _=getComputedStyle(document.documentElement),$=(k,T)=>{for(let E of k){let J=_.getPropertyValue(E).trim();if(J)return J}return T},j=$(["--text-primary","--color-text"],"#0f1419"),N=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),Q=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),W=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),D=MZ(Q,[j,Z],j);return{fg:j,fgMuted:N,bgPrimary:Z,bg:Y,bgEmphasis:K,accent:Q,good:X,warning:q,attention:W,border:V,fontFamily:U,buttonTextColor:D}}function a2(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:N,accent:Z,good:Y,warning:K,attention:Q,border:X,fontFamily:q}=n8();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:K,subtle:K},attention:{default:Q,subtle:Q}}},emphasis:{backgroundColor:N,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:K,subtle:K},attention:{default:Q,subtle:Q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var kZ=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),t2=!1,T5=null,e2=!1;function d8(_){_.querySelector(".adaptive-card-notice")?.remove()}function IZ(_,$,j="error"){d8(_);let N=document.createElement("div");N.className=`adaptive-card-notice adaptive-card-notice-${j}`,N.textContent=$,_.appendChild(N)}function PZ(_,$=(j)=>B_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function CZ(_=($)=>B_($,null)){return($,j)=>{try{let N=PZ($,_);j.outputHtml=N.outputHtml,j.didProcess=N.didProcess}catch(N){console.error("[adaptive-card] Failed to process markdown:",N),j.outputHtml=String($??""),j.didProcess=!1}}}function TZ(_){if(e2||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=CZ(),e2=!0}async function yZ(){if(t2)return;if(T5)return T5;return T5=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{t2=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),T5}function SZ(){return globalThis.AdaptiveCards}function xZ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function wZ(_){return kZ.has(_)}function s8(_){if(!Array.isArray(_))return[];return _.filter(xZ)}function RZ(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:N,raw:_}}function o8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>o8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,N])=>`${j}: ${o8(N)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function fZ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return o8($);return typeof $==="string"?$:String($)}function vZ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,N=(Z)=>{if(Array.isArray(Z))return Z.map((Q)=>N(Q));if(!Z||typeof Z!=="object")return Z;let K={...Z};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=fZ(K.type,j[K.id],K);for(let[Q,X]of Object.entries(K))if(Array.isArray(X)||X&&typeof X==="object")K[Q]=N(X);return K};return N(_)}function bZ(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function uZ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function mZ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,N=j&&typeof j.title==="string"?j.title.trim():"",Z=uZ(_.completed_at||j?.submitted_at),Y=[N||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function _7(_,$,j){if(!wZ($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await yZ()}catch(N){return console.error("[adaptive-card] Failed to load SDK:",N),!1}try{let N=SZ();TZ(N);let Z=new N.AdaptiveCard,Y=n8();Z.hostConfig=new N.HostConfig(a2());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,Q=$.state==="active"?$.payload:vZ($.payload,K);Z.parse(Q),Z.onExecuteAction=(W)=>{let V=RZ(W);if(j?.onAction)d8(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let D=U instanceof Error?U.message:String(U||"Action failed.");IZ(_,D||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let X=Z.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let q=mZ($);if(q){_.classList.add("adaptive-card-finished");let W=document.createElement("div");W.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=q.label,W.appendChild(V),q.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=q.detail,W.appendChild(U)}_.appendChild(W)}if(d8(_),_.appendChild(X),q)bZ(X);return!0}catch(N){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,N),!1}}function b$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>b$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${b$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function $7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:b$(j)})).filter(($)=>$.value)}function gZ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function r8(_){if(!Array.isArray(_))return[];return _.filter(gZ)}function j7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let N=b$(j);return N?`Card submission: ${$} — ${N}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=$7(j).map(({key:Y,value:K})=>`${Y}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function N7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=$7(_.data),N=j.length>0?j.slice(0,2).map(({key:Y,value:K})=>`${Y}: ${K}`).join(", "):b$(_.data)||null,Z=j.length;return{title:$,summary:N,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function hZ(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?E_($):null},{label:"Added",value:_?.created_at?n4(_.created_at):null}].filter((N)=>N.value)}function pZ(_,$,j){let N=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${N}#media=${Z}&name=${N}`;if(j==="office"){let Y=D_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${N}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${N}&readonly=1#media=${Z}&name=${N}&readonly=1`;return null}function Z7({mediaId:_,info:$,onClose:j}){let N=$?.filename||`attachment-${_}`,Z=M0(()=>v$($?.content_type,N),[$?.content_type,N]),Y=s2(Z),K=M0(()=>o2($?.content_type),[$?.content_type]),[Q,X]=c(Z==="text"),[q,W]=c(""),[V,U]=c(null),D=y(null),k=M0(()=>hZ($),[$]),T=M0(()=>pZ(_,N,Z),[_,N,Z]),E=M0(()=>{if(!K||!q)return"";return B_(q)},[K,q]);return p(()=>{let J=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),p(()=>{if(!D.current||!E)return;W4(D.current);return},[E]),p(()=>{let J=!1;async function A(){if(Z!=="text"){X(!1),U(null);return}X(!0),U(null);try{let C=await M8(_);if(!J)W(C)}catch{if(!J)U("Failed to load text preview.")}finally{if(!J)X(!1)}}return A(),()=>{J=!0}},[_,Z]),z`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${N}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${T&&z`
                            <a
                                href=${T}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(J)=>J.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${D_(_)}
                            download=${N}
                            class="attachment-preview-download"
                            onClick=${(J)=>J.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${Q&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!Q&&V&&z`<div class="attachment-preview-state">${V}</div>`}
                    ${!Q&&!V&&Z==="image"&&z`
                        <img class="attachment-preview-image" src=${D_(_)} alt=${N} />
                    `}
                    ${!Q&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&T&&z`
                        <iframe class="attachment-preview-frame" src=${T} title=${N}></iframe>
                    `}
                    ${!Q&&!V&&Z==="drawio"&&z`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!Q&&!V&&Z==="text"&&K&&z`
                        <div
                            ref=${D}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:E}}
                        />
                    `}
                    ${!Q&&!V&&Z==="text"&&!K&&z`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!Q&&!V&&Z==="unsupported"&&z`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${k.map((J)=>z`
                        <div class="attachment-preview-meta-item" key=${J.label}>
                            <span class="attachment-preview-meta-label">${J.label}</span>
                            <span class="attachment-preview-meta-value">${J.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function Y7({src:_,onClose:$}){return p(()=>{let j=(N)=>{if(N.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),z`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function cZ({mediaId:_,onPreview:$}){let[j,N]=c(null);if(p(()=>{Y$(_).then(N).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,K=Y?E_(Y):"",X=v$(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${D_(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${K&&z`<span class="file-size">${K}</span>`}
                        ${j.content_type&&z`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            <button
                class="file-attachment-preview"
                type="button"
                onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${X}
            </button>
        </div>
    `}function lZ({attachment:_,onPreview:$}){let j=Number(_?.id),[N,Z]=c(null);p(()=>{if(!Number.isFinite(j))return;Y$(j).then(Z).catch(()=>{});return},[j]);let Y=N?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?D_(j):null,X=v$(N?.content_type,N?.filename||_?.label)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${Y}>
            ${K?z`
                    <a href=${K} download=${Y} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${u_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:z`
                    <${u_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&N&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${X}
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:j,info:N})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function y5({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:N}=_,Z=N?n4(N):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&z`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&z`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function iZ({block:_}){let $=_.title||_.name||_.uri,j=_.description,N=_.size?E_(_.size):"",Z=_.mime_type||"",Y=oZ(Z),K=i4(_.uri);return z`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(Q)=>Q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&z`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&z`<span>${Z}</span>`}
                    ${N&&z`<span>${N}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function nZ({block:_}){let[$,j]=c(!1),N=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),K=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${N}
            </button>
            ${$&&z`
                ${Z&&z`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&z`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation();let X=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:K||"application/octet-stream"}),q=URL.createObjectURL(X),W=document.createElement("a");W.href=q,W.download=N.split("/").pop()||"resource",W.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function dZ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let N=l8(_,$),Z=S2(_),Y=N?.artifact?.kind||_?.artifact?.kind||_?.kind||null,K=N?.title||_.title||_.name||"Generated widget",Q=N?.description||_.description||_.subtitle||"",X=_.open_label||"Open widget",q=(W)=>{if(W.preventDefault(),W.stopPropagation(),!N)return;j?.(N)};return z`
        <div class="generated-widget-launch" onClick=${(W)=>W.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${K}</div>
            </div>
            ${Q&&z`<div class="generated-widget-launch-description">${Q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${q}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${X}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function oZ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function sZ({preview:_}){let $=i4(_.url),j=i4(_.image,{allowDataImage:!0}),N=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${N}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function rZ(_,$){return typeof _==="string"?_:""}var aZ=1800,tZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,eZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,_Y=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function $Y(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let N=document.execCommand("copy");return document.body.removeChild(j),N}catch{return!1}}function jY(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,N=[],Z=(Y,K)=>{let Q=K||"idle";if(Y.dataset.copyState=Q,Q==="success")Y.innerHTML=eZ,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(Q==="error")Y.innerHTML=_Y,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=tZ,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let K=document.createElement("div");K.className="post-code-block",Y.parentNode?.insertBefore(K,Y),K.appendChild(Y);let Q=document.createElement("button");Q.type="button",Q.className="post-code-copy-btn",Z(Q,"idle"),K.appendChild(Q);let X=async(q)=>{q.preventDefault(),q.stopPropagation();let V=Y.querySelector("code")?.textContent||"",U=await $Y(V);Z(Q,U?"success":"error");let D=j.get(Q);if(D)clearTimeout(D);let k=setTimeout(()=>{Z(Q,"idle"),j.delete(Q)},aZ);j.set(Q,k)};Q.addEventListener("click",X),N.push(()=>{Q.removeEventListener("click",X);let q=j.get(Q);if(q)clearTimeout(q);if(K.parentNode)K.parentNode.insertBefore(Y,K),K.remove()})}),()=>{N.forEach((Y)=>Y())}}function NY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){N=q;break}if(N===-1)return{content:_,fileRefs:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q))Z.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,N),Q=j.slice(Y),X=[...K,...Q].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:Z}}function ZY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){N=q;break}if(N===-1)return{content:_,messageRefs:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let V=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,N),Q=j.slice(Y),X=[...K,...Q].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:Z}}function YY(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let q=0;q<j.length;q+=1){let W=j[q].trim();if((W==="Images:"||W==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){N=q;break}}if(N===-1)return{content:_,attachments:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let W=q.replace(/^\s*-\s+/,"").trim(),V=W.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||W.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],D=(V[2]||"").trim()||U;Z.push({id:U,label:D,raw:W})}else Z.push({id:null,label:W,raw:W})}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let K=j.slice(0,N),Q=j.slice(Y),X=[...K,...Q].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:Z}}function KY(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function QY(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let N=j.map(KY).sort((W,V)=>V.length-W.length),Z=new RegExp(`(${N.join("|")})`,"gi"),Y=new RegExp(`^(${N.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),Q=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),X=[],q;while(q=Q.nextNode())X.push(q);for(let W of X){let V=W.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let U=W.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let D=V.split(Z).filter((T)=>T!=="");if(D.length===0)continue;let k=K.createDocumentFragment();for(let T of D)if(Y.test(T)){let E=K.createElement("mark");E.className="search-highlight-term",E.textContent=T,k.appendChild(E)}else k.appendChild(K.createTextNode(T));W.parentNode.replaceChild(k,W)}return K.body.innerHTML}function K7({post:_,onClick:$,onHashtagClick:j,onMessageRef:N,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:K,userName:Q,userAvatarUrl:X,userAvatarBackground:q,onDelete:W,isThreadReply:V,isThreadPrev:U,isThreadNext:D,isRemoving:k,highlightQuery:T,onFileRef:E,onOpenWidget:J}){let[A,C]=c(null),n=y(null),l=_.data,t=l.type==="agent_response",Z0=Q||"You",f=t?Y||m2:Z0,w=t?i8(Y,K,!0):i8(Z0,X),H=typeof q==="string"?q.trim().toLowerCase():"",S=!t&&w.image&&(H==="clear"||H==="transparent"),h=t&&Boolean(w.image),e=`background-color: ${S||h?"transparent":w.color}`,i=l.content_meta,$0=Boolean(i?.truncated),j0=Boolean(i?.preview),Y0=$0&&!j0,Q0=$0?{originalLength:Number.isFinite(i?.original_length)?i.original_length:l.content?l.content.length:0,maxLength:Number.isFinite(i?.max_length)?i.max_length:0}:null,X0=l.content_blocks||[],U0=l.media_ids||[],z0=rZ(l.content,l.link_previews),{content:O0,fileRefs:l0}=NY(z0),{content:P0,messageRefs:D0}=ZY(O0),{content:i0,attachments:n0}=YY(P0);z0=i0;let S0=s8(X0),B0=r8(X0),C0=S0.length===1&&typeof S0[0]?.fallback_text==="string"?S0[0].fallback_text.trim():"",E0=B0.length===1?j7(B0[0]).trim():"",q0=Boolean(C0)&&z0?.trim()===C0||Boolean(E0)&&z0?.trim()===E0,T0=Boolean(z0)&&!Y0&&!q0,r0=typeof T==="string"?T.trim():"",h0=M0(()=>{if(!z0||q0)return"";let m=B_(z0,j);return r0?QY(m,r0):m},[z0,q0,r0]),z1=(m,G0)=>{m.stopPropagation(),C(D_(G0))},[A1,u0]=c(null),d0=(m)=>{u0(m)},Z1=(m)=>{m.stopPropagation(),W?.(_)},X1=(m,G0)=>{let A0=new Set;if(!m||G0.length===0)return{content:m,usedIds:A0};return{content:m.replace(/attachment:([^\s)"']+)/g,(t0,t1,l1,h_)=>{let M_=t1.replace(/^\/+/,""),_1=G0.find((o1)=>o1.name&&o1.name.toLowerCase()===M_.toLowerCase()&&!A0.has(o1.id))||G0.find((o1)=>!A0.has(o1.id));if(!_1)return t0;if(A0.add(_1.id),h_.slice(Math.max(0,l1-2),l1)==="](")return`/media/${_1.id}`;return _1.name||"attachment"}),usedIds:A0}},a0=[],y1=[],K1=[],v1=[],B1=[],c1=[],m0=[],a1=0;if(X0.length>0)X0.forEach((m)=>{if(m?.type==="text"&&m.annotations)m0.push(m.annotations);if(m?.type==="generated_widget")c1.push(m);else if(m?.type==="resource_link")v1.push(m);else if(m?.type==="resource")B1.push(m);else if(m?.type==="file"){let G0=U0[a1++];if(G0)y1.push(G0),K1.push({id:G0,name:m?.name||m?.filename||m?.title})}else if(m?.type==="image"||!m?.type){let G0=U0[a1++];if(G0){let A0=typeof m?.mime_type==="string"?m.mime_type:void 0;a0.push({id:G0,annotations:m?.annotations,mimeType:A0}),K1.push({id:G0,name:m?.name||m?.filename||m?.title})}}});else if(U0.length>0){let m=n0.length>0;U0.forEach((G0,A0)=>{let F0=n0[A0]||null;if(K1.push({id:G0,name:F0?.label||null}),m)y1.push(G0);else a0.push({id:G0,annotations:null})})}if(n0.length>0)n0.forEach((m)=>{if(!m?.id)return;let G0=K1.find((A0)=>String(A0.id)===String(m.id));if(G0&&!G0.name)G0.name=m.label});let{content:V1,usedIds:F1}=X1(z0,K1);z0=V1;let J1=a0.filter(({id:m})=>!F1.has(m)),y0=y1.filter((m)=>!F1.has(m)),D1=n0.length>0?n0.map((m,G0)=>({id:m.id||`attachment-${G0+1}`,label:m.label||`attachment-${G0+1}`})):K1.map((m,G0)=>({id:m.id,label:m.name||`attachment-${G0+1}`})),R0=M0(()=>s8(X0),[X0]),v0=M0(()=>r8(X0),[X0]),e0=M0(()=>{return R0.map((m)=>`${m.card_id}:${m.state}`).join("|")},[R0]);p(()=>{if(!n.current)return;return W4(n.current),jY(n.current)},[h0]);let d1=y(null);return p(()=>{if(!d1.current||R0.length===0)return;let m=d1.current;m.innerHTML="";for(let G0 of R0){let A0=document.createElement("div");m.appendChild(A0),_7(A0,G0,{onAction:async(F0)=>{if(F0.type==="Action.OpenUrl"){let t0=i4(F0.url||"");if(!t0)throw Error("Invalid URL");window.open(t0,"_blank","noopener,noreferrer");return}if(F0.type==="Action.Submit"){await O8({post_id:_.id,thread_id:l.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:G0.card_id,action:{type:F0.type,title:F0.title||"",data:F0.data}});return}console.warn("[post] unsupported adaptive card action:",F0.type,F0)}}).catch((F0)=>{console.error("[post] adaptive card render error:",F0),A0.textContent=G0.fallback_text||"Card failed to render."})}},[e0,_.id]),z`
        <div id=${`post-${_.id}`} class="post ${t?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${D?"thread-next":""} ${k?"removing":""}" onClick=${$}>
            <div class="post-avatar ${t?"agent-avatar":""} ${w.image?"has-image":""}" style=${e}>
                ${w.image?z`<img src=${w.image} alt=${f} />`:w.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${Z1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${f}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(m)=>{if(m.preventDefault(),m.stopPropagation(),N)N(_.id)}}>${d2(_.timestamp)}</a>
                </div>
                ${Y0&&Q0&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${R$(Q0.originalLength)} chars
                            ${Q0.maxLength?z` • Display limit: ${R$(Q0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${j0&&Q0&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${R$(Q0.maxLength)} of ${R$(Q0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(l0.length>0||D0.length>0||D1.length>0)&&z`
                    <div class="post-file-refs">
                        ${D0.map((m)=>{let G0=(A0)=>{if(A0.preventDefault(),A0.stopPropagation(),Z)Z(m,_.chat_jid||null);else{let F0=document.getElementById("post-"+m);if(F0)F0.scrollIntoView({behavior:"smooth",block:"center"}),F0.classList.add("post-highlight"),setTimeout(()=>F0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${m}`} class="post-msg-pill-link" onClick=${G0}>
                                    <${u_}
                                        prefix="post"
                                        label=${"msg:"+m}
                                        title=${"Message "+m}
                                        icon="message"
                                        onClick=${G0}
                                    />
                                </a>
                            `})}
                        ${l0.map((m)=>{let G0=m.split("/").pop()||m;return z`
                                <${u_}
                                    prefix="post"
                                    label=${G0}
                                    title=${m}
                                    onClick=${()=>E?.(m)}
                                />
                            `})}
                        ${D1.map((m)=>z`
                            <${lZ}
                                key=${m.id}
                                attachment=${m}
                                onPreview=${d0}
                            />
                        `)}
                    </div>
                `}
                ${T0&&z`
                    <div 
                        ref=${n}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:h0}}
                        onClick=${(m)=>{if(m.target.classList.contains("hashtag")){m.preventDefault(),m.stopPropagation();let G0=m.target.dataset.hashtag;if(G0)j?.(G0)}else if(m.target.tagName==="IMG")m.preventDefault(),m.stopPropagation(),C(m.target.src)}}
                    />
                `}
                ${R0.length>0&&z`
                    <div ref=${d1} class="post-adaptive-cards" />
                `}
                ${v0.length>0&&z`
                    <div class="post-adaptive-card-submissions">
                        ${v0.map((m,G0)=>{let A0=N7(m),F0=`${m.card_id}-${G0}`;return z`
                                <div key=${F0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${A0.title}</span>
                                        </div>
                                    </div>
                                    ${A0.fields.length>0&&z`
                                        <div class="adaptive-card-submission-fields">
                                            ${A0.fields.map((t0)=>z`
                                                <span class="adaptive-card-submission-field" title=${`${t0.key}: ${t0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${t0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${t0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${n4(A0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${c1.length>0&&z`
                    <div class="generated-widget-launches">
                        ${c1.map((m,G0)=>z`
                            <${dZ}
                                key=${m.widget_id||m.id||`${_.id}-widget-${G0}`}
                                block=${m}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${m0.length>0&&z`
                    ${m0.map((m,G0)=>z`
                        <${y5} key=${G0} annotations=${m} />
                    `)}
                `}
                ${J1.length>0&&z`
                    <div class="media-preview">
                        ${J1.map(({id:m,mimeType:G0})=>{let F0=typeof G0==="string"&&G0.toLowerCase().startsWith("image/svg")?D_(m):A8(m);return z`
                                <img 
                                    key=${m} 
                                    src=${F0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(t0)=>z1(t0,m)}
                                />
                            `})}
                    </div>
                `}
                ${J1.length>0&&z`
                    ${J1.map(({annotations:m},G0)=>z`
                        ${m&&z`<${y5} key=${G0} annotations=${m} />`}
                    `)}
                `}
                ${y0.length>0&&z`
                    <div class="file-attachments">
                        ${y0.map((m)=>z`
                            <${cZ} key=${m} mediaId=${m} onPreview=${d0} />
                        `)}
                    </div>
                `}
                ${v1.length>0&&z`
                    <div class="resource-links">
                        ${v1.map((m,G0)=>z`
                            <div key=${G0}>
                                <${iZ} block=${m} />
                                <${y5} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${B1.length>0&&z`
                    <div class="resource-embeds">
                        ${B1.map((m,G0)=>z`
                            <div key=${G0}>
                                <${nZ} block=${m} />
                                <${y5} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${l.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${l.link_previews.map((m,G0)=>z`
                            <${sZ} key=${G0} preview=${m} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&z`<${Y7} src=${A} onClose=${()=>C(null)} />`}
        ${A1&&z`
            <${Z7}
                mediaId=${A1.mediaId}
                info=${A1.info}
                onClose=${()=>u0(null)}
            />
        `}
    `}function Q7({posts:_,hasMore:$,onLoadMore:j,onPostClick:N,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:K,onFileRef:Q,onOpenWidget:X,emptyMessage:q,timelineRef:W,agents:V,user:U,onDeletePost:D,reverse:k=!0,removingPostIds:T,searchQuery:E}){let[J,A]=c(!1),C=y(null),n=typeof IntersectionObserver<"u",l=x(async()=>{if(!j||!$||J)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,J,j]),t=x((i)=>{let{scrollTop:$0,scrollHeight:j0,clientHeight:Y0}=i.target,Q0=k?j0-Y0-$0:$0,X0=Math.max(300,Y0);if(Q0<X0)l()},[k,l]);p(()=>{if(!n)return;let i=C.current,$0=W?.current;if(!i||!$0)return;let j0=300,Y0=new IntersectionObserver((Q0)=>{for(let X0 of Q0){if(!X0.isIntersecting)continue;l()}},{root:$0,rootMargin:`${j0}px 0px ${j0}px 0px`,threshold:0});return Y0.observe(i),()=>Y0.disconnect()},[n,$,j,W,l]);let Z0=y(l);if(Z0.current=l,p(()=>{if(n)return;if(!W?.current)return;let{scrollTop:i,scrollHeight:$0,clientHeight:j0}=W.current,Y0=k?$0-j0-i:i,Q0=Math.max(300,j0);if(Y0<Q0)Z0.current?.()},[n,_,$,k,W]),p(()=>{if(!W?.current)return;if(!$||J)return;let{scrollTop:i,scrollHeight:$0,clientHeight:j0}=W.current,Y0=k?$0-j0-i:i,Q0=Math.max(300,j0);if($0<=j0+1||Y0<Q0)Z0.current?.()},[_,$,J,k,W]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${W}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let f=_.slice().sort((i,$0)=>i.id-$0.id),w=(i)=>{let $0=i?.data?.thread_id;if($0===null||$0===void 0||$0==="")return null;let j0=Number($0);return Number.isFinite(j0)?j0:null},H=new Map;for(let i=0;i<f.length;i+=1){let $0=f[i],j0=Number($0?.id),Y0=w($0);if(Y0!==null){let Q0=H.get(Y0)||{anchorIndex:-1,replyIndexes:[]};Q0.replyIndexes.push(i),H.set(Y0,Q0)}else if(Number.isFinite(j0)){let Q0=H.get(j0)||{anchorIndex:-1,replyIndexes:[]};Q0.anchorIndex=i,H.set(j0,Q0)}}let S=new Map;for(let[i,$0]of H.entries()){let j0=new Set;if($0.anchorIndex>=0)j0.add($0.anchorIndex);for(let Y0 of $0.replyIndexes)j0.add(Y0);S.set(i,Array.from(j0).sort((Y0,Q0)=>Y0-Q0))}let h=f.map((i,$0)=>{let j0=w(i);if(j0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Y0=S.get(j0);if(!Y0||Y0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Q0=Y0.indexOf($0);if(Q0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Q0>0,hasThreadNext:Q0<Y0.length-1}}),e=z`<div class="timeline-sentinel" ref=${C}></div>`;return z`
        <div class="timeline ${k?"reverse":"normal"}" ref=${W} onScroll=${t}>
            <div class="timeline-content">
                ${k?e:null}
                ${f.map((i,$0)=>{let j0=Boolean(i.data?.thread_id&&i.data.thread_id!==i.id),Y0=T?.has?.(i.id),Q0=h[$0]||{};return z`
                    <${K7}
                        key=${i.id}
                        post=${i}
                        isThreadReply=${j0}
                        isThreadPrev=${Q0.hasThreadPrev}
                        isThreadNext=${Q0.hasThreadNext}
                        isRemoving=${Y0}
                        highlightQuery=${E}
                        agentName=${g2(i.data?.agent_id,V||{})}
                        agentAvatarUrl=${h2(i.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>N?.(i)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${K}
                        onFileRef=${Q}
                        onOpenWidget=${X}
                        onDelete=${D}
                    />
                `})}
                ${k?null:e}
            </div>
        </div>
    `}class q7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let N of this.extensions.values()){if(N.placement!=="tabs")continue;if(!N.canHandle)continue;try{let Z=N.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=N}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${N.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var g0=new q7;var S5=null,a8=null;function qY(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function G7(){if(a8)return Promise.resolve(a8);if(!S5)S5=import(qY()).then((_)=>{return a8=_,_}).catch((_)=>{throw S5=null,_});return S5}class X7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await G7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var t8={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new X7(_,$)}};function e8(){G7().catch(()=>{})}var u$="piclaw://terminal";var GY={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},XY={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},x5=null,_6=null;function BY(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function VY(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,N=(Z,Y)=>{let K=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!BY(K))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=N;try{return await _()}finally{globalThis.fetch=$}}async function WY(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!x5)x5=VY(()=>Promise.resolve($.init?.())).catch((j)=>{throw x5=null,j});return await x5,$}async function LY(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!_6)_6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await _6}async function UY(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function zY(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function FY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function L4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function HY(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function B7(){let _=FY(),$=_?XY:GY,j=L4("--bg-primary",_?"#000000":"#ffffff"),N=L4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=L4("--text-secondary",_?"#71767b":"#536471"),Y=L4("--accent-color","#1d9bf0"),K=L4("--danger-color",_?"#ff7b72":"#cf222e"),Q=L4("--success-color",_?"#7ee787":"#1a7f37"),X=L4("--bg-hover",_?"#1d1f23":"#e8ebed"),q=L4("--border-color",_?"#2f3336":"#eff3f4"),W=L4("--accent-soft-strong",HY(Y,_?"47":"33"));return{background:j,foreground:N,cursor:Y,cursorAccent:j,selectionBackground:W,selectionForeground:N,black:X,red:K,green:Q,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:N,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class $6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,N=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(N)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await WY();if(await LY(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:B7()}),N=null;if(typeof _.FitAddon==="function")N=new _.FitAddon,j.loadAddon?.(N);await j.open($),this.syncHostLayout(),j.loadFonts?.(),N?.observeResize?.(),this.terminal=j,this.fitAddon=N,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=B7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let N=this.bodyEl.querySelector(".terminal-live-host");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),N=()=>_();if(j?.addEventListener)j.addEventListener("change",N);else if(j?.addListener)j.addListener(N);this.mediaQuery=j,this.mediaQueryListener=N;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await UY();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(zY($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((N)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:N}))}),_.onResize?.(({cols:N,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:N,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(N)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(N.data))}catch{Z={type:"output",data:String(N.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var j6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new $6(_,$)}},N6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new $6(_,$)}};function U4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function w5(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let N=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(N),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||K)}function V7(_,$={}){if(U4($))return null;if(w5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:OY(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function Z6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Y6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),N=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${N}</p>
            </div>
        `}catch{}}function K6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function W7(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function d4(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(N.searchParams.set("chat_jid",Z),N.searchParams.delete("branch_loader"),N.searchParams.delete("branch_source_chat_jid"),N.searchParams.delete("pane_popout"),N.searchParams.delete("pane_path"),N.searchParams.delete("pane_label"),j.chatOnly!==!1)N.searchParams.set("chat_only","1");return N.toString()}function L7(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(N.searchParams.set("branch_loader","1"),N.searchParams.set("branch_source_chat_jid",Z),N.searchParams.delete("chat_jid"),N.searchParams.delete("pane_popout"),N.searchParams.delete("pane_path"),N.searchParams.delete("pane_label"),j.chatOnly!==!1)N.searchParams.set("chat_only","1");return N.toString()}function U7(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return N.toString();if(N.searchParams.set("pane_popout","1"),N.searchParams.set("pane_path",Z),j?.label)N.searchParams.set("pane_label",String(j.label));else N.searchParams.delete("pane_label");if(j?.chatJid)N.searchParams.set("chat_jid",String(j.chatJid));return N.searchParams.delete("chat_only"),N.searchParams.delete("branch_loader"),N.searchParams.delete("branch_source_chat_jid"),N.toString()}function OY(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function JY(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function z7(_,$={}){if(U4($))return null;if(w5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:JY(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function R5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let N=j.toLowerCase();if(N.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(N.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(N.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(N.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(N.includes("failed to fork branch")||N.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function DY(_){try{return JSON.parse(_)}catch{return null}}function EY(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function AY(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class Q6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=AY($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let N=this.options.parseControlMessage||DY;this.options.onMessage?.({kind:"control",raw:$.data,payload:N($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=EY(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var m$=()=>{throw Error("Operation requires compiling with --exportRuntime")},MY=typeof BigUint64Array<"u",g$=Symbol();var kY=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function F7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,N=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...N);try{return kY.decode(N)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...N.subarray(Y,Y+=1024));return Z+String.fromCharCode(...N.subarray(Y))}}function H7(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return F7(Z.buffer,Y)}let N=_.env=_.env||{};return N.abort=N.abort||function(Y,K,Q,X){let q=$.memory||N.memory;throw Error(`abort: ${j(q,Y)} at ${j(q,K)}:${Q}:${X}`)},N.trace=N.trace||function(Y,K,...Q){let X=$.memory||N.memory;console.log(`trace: ${j(X,Y)}${K?" ":""}${Q.slice(0,K).join(", ")}`)},N.seed=N.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function O7(_,$){let j=$.exports,N=j.memory,Z=j.table,Y=j.__new||m$,K=j.__pin||m$,Q=j.__unpin||m$,X=j.__collect||m$,q=j.__rtti_base,W=q?(H)=>H[q>>>2]:m$;_.__new=Y,_.__pin=K,_.__unpin=Q,_.__collect=X;function V(H){let S=new Uint32Array(N.buffer);if((H>>>=0)>=W(S))throw Error(`invalid id: ${H}`);return S[(q+4>>>2)+H]}function U(H){let S=V(H);if(!(S&7))throw Error(`not an array: ${H}, flags=${S}`);return S}function D(H){return 31-Math.clz32(H>>>6&31)}function k(H){if(H==null)return 0;let S=H.length,h=Y(S<<1,2),e=new Uint16Array(N.buffer);for(let i=0,$0=h>>>1;i<S;++i)e[$0+i]=H.charCodeAt(i);return h}_.__newString=k;function T(H){if(H==null)return 0;let S=new Uint8Array(H),h=Y(S.length,1);return new Uint8Array(N.buffer).set(S,h),h}_.__newArrayBuffer=T;function E(H){if(!H)return null;let S=N.buffer;if(new Uint32Array(S)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return F7(S,H)}_.__getString=E;function J(H,S,h){let e=N.buffer;if(h)switch(H){case 2:return new Float32Array(e);case 3:return new Float64Array(e)}else switch(H){case 0:return new(S?Int8Array:Uint8Array)(e);case 1:return new(S?Int16Array:Uint16Array)(e);case 2:return new(S?Int32Array:Uint32Array)(e);case 3:return new(S?BigInt64Array:BigUint64Array)(e)}throw Error(`unsupported align: ${H}`)}function A(H,S=0){let h=S,e=U(H),i=D(e),$0=typeof h!=="number",j0=$0?h.length:h,Y0=Y(j0<<i,e&4?H:1),Q0;if(e&4)Q0=Y0;else{K(Y0);let X0=Y(e&2?16:12,H);Q(Y0);let U0=new Uint32Array(N.buffer);if(U0[X0+0>>>2]=Y0,U0[X0+4>>>2]=Y0,U0[X0+8>>>2]=j0<<i,e&2)U0[X0+12>>>2]=j0;Q0=X0}if($0){let X0=J(i,e&2048,e&4096),U0=Y0>>>i;if(e&16384)for(let z0=0;z0<j0;++z0)X0[U0+z0]=h[z0];else X0.set(h,U0)}return Q0}_.__newArray=A;function C(H){let S=new Uint32Array(N.buffer),h=S[H+-8>>>2],e=U(h),i=D(e),$0=e&4?H:S[H+4>>>2],j0=e&2?S[H+12>>>2]:S[$0+-4>>>2]>>>i;return J(i,e&2048,e&4096).subarray($0>>>=i,$0+j0)}_.__getArrayView=C;function n(H){let S=C(H),h=S.length,e=Array(h);for(let i=0;i<h;i++)e[i]=S[i];return e}_.__getArray=n;function l(H){let S=N.buffer,h=new Uint32Array(S)[H+-4>>>2];return S.slice(H,H+h)}_.__getArrayBuffer=l;function t(H){if(!Z)throw Error("Operation requires compiling with --exportTable");let S=new Uint32Array(N.buffer)[H>>>2];return Z.get(S)}_.__getFunction=t;function Z0(H,S,h){return new H(f(H,S,h))}function f(H,S,h){let e=N.buffer,i=new Uint32Array(e);return new H(e,i[h+4>>>2],i[h+8>>>2]>>>S)}function w(H,S,h){_[`__get${S}`]=Z0.bind(null,H,h),_[`__get${S}View`]=f.bind(null,H,h)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{w(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),MY)[BigUint64Array,BigInt64Array].forEach((H)=>{w(H,H.name.slice(3),3)});return _.memory=_.memory||N,_.table=_.table||Z,PY(j,_)}function J7(_){return typeof Response<"u"&&_ instanceof Response}function IY(_){return _ instanceof WebAssembly.Module}async function q6(_,$={}){if(J7(_=await _))return f5(_,$);let j=IY(_)?_:await WebAssembly.compile(_),N=H7($),Z=await WebAssembly.instantiate(j,$),Y=O7(N,Z);return{module:j,instance:Z,exports:Y}}async function f5(_,$={}){if(!WebAssembly.instantiateStreaming)return q6(J7(_=await _)?_.arrayBuffer():_,$);let j=H7($),N=await WebAssembly.instantiateStreaming(_,$),Z=O7(j,N.instance);return{...N,exports:Z}}function PY(_,$={}){let j=_.__argumentsLength?(N)=>{_.__argumentsLength.value=N}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let N of Object.keys(_)){let Z=_[N],Y=N.split("."),K=$;while(Y.length>1){let q=Y.shift();if(!Object.hasOwn(K,q))K[q]={};K=K[q]}let Q=Y[0],X=Q.indexOf("#");if(X>=0){let q=Q.substring(0,X),W=K[q];if(typeof W>"u"||!W.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[g$]}},V.wrap=function(U){return Object.create(V.prototype,{[g$]:{value:U,writable:!1}})},W)Object.getOwnPropertyNames(W).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(W,U)));K[q]=V}if(Q=Q.substring(X+1),K=K[q].prototype,/^(get|set):/.test(Q)){if(!Object.hasOwn(K,Q=Q.substring(4))){let V=_[N.replace("set:","get:")],U=_[N.replace("get:","set:")];Object.defineProperty(K,Q,{get(){return V(this[g$])},set(D){U(this[g$],D)},enumerable:!0})}}else if(Q==="constructor")(K[Q]=function(...V){return j(V.length),Z(...V)}).original=Z;else(K[Q]=function(...V){return j(V.length),Z(this[g$],...V)}).original=Z}else if(/^(get|set):/.test(Q)){if(!Object.hasOwn(K,Q=Q.substring(4)))Object.defineProperty(K,Q,{get:_[N.replace("set:","get:")],set:_[N.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(K[Q]=(...q)=>{return j(q.length),Z(...q)}).original=Z;else K[Q]=Z}return $}var TY="/static/js/vendor/remote-display-decoder.wasm",v5=null;function D7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function E7(){if(v5)return v5;return v5=(async()=>{try{let N=function(Z,Y,K,Q,X,q,W){let V=D7(Y),U=j.__pin(j.__newArrayBuffer(V));try{return j[Z](U,K,Q,X,q,W.bitsPerPixel,W.bigEndian?1:0,W.trueColor?1:0,W.redMax,W.greenMax,W.blueMax,W.redShift,W.greenShift,W.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(TY,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof f5==="function"?await f5(_,{}):await q6(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,K,Q,X,q){return N("processRawRect",Z,Y,K,Q,X,q)},processCopyRect(Z,Y,K,Q,X,q){return j.processCopyRect(Z,Y,K,Q,X,q)},processRreRect(Z,Y,K,Q,X,q){return N("processRreRect",Z,Y,K,Q,X,q)},processHextileRect(Z,Y,K,Q,X,q){return N("processHextileRect",Z,Y,K,Q,X,q)},processZrleTileData(Z,Y,K,Q,X,q){return N("processZrleTileData",Z,Y,K,Q,X,q)},decodeRawRectToRgba(Z,Y,K,Q){let X=D7(Z),q=j.__pin(j.__newArrayBuffer(X));try{let W=j.__pin(j.decodeRawRectToRgba(q,Y,K,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(W))}finally{j.__unpin(W)}}finally{j.__unpin(q);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),v5}function X$(_,$,j){return Math.max($,Math.min(j,_))}function b5(_,$,j){let N=new Uint8Array(6),Z=X$(Math.floor(Number($||0)),0,65535),Y=X$(Math.floor(Number(j||0)),0,65535);return N[0]=5,N[1]=X$(Math.floor(Number(_||0)),0,255),N[2]=Z>>8&255,N[3]=Z&255,N[4]=Y>>8&255,N[5]=Y&255,N}function X6(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function A7(_,$,j,N,Z){let Y=Math.max(1,Math.floor(Number(N||0))),K=Math.max(1,Math.floor(Number(Z||0))),Q=Math.max(1,Number(j?.width||0)),X=Math.max(1,Number(j?.height||0)),q=(Number(_||0)-Number(j?.left||0))/Q,W=(Number($||0)-Number(j?.top||0))/X;return{x:X$(Math.floor(q*Y),0,Math.max(0,Y-1)),y:X$(Math.floor(W*K),0,Math.max(0,K-1))}}function M7(_,$,j,N=0){let Z=Number(_)<0?8:16,Y=X$(Number(N||0)|Z,0,255);return[b5(Y,$,j),b5(Number(N||0),$,j)]}function k7(_,$){let j=new Uint8Array(8),N=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=N>>>24&255,j[5]=N>>>16&255,j[6]=N>>>8&255,j[7]=N&255,j}function h$(_){if(typeof _!=="string")return null;return _.length>0?_:null}function I7(_,$,j,N){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),K=Math.max(1,Math.floor(Number(j||0))),Q=Math.max(1,Math.floor(Number(N||0))),X=Math.min(Z/K,Y/Q);if(!Number.isFinite(X)||X<=0)return 1;return Math.max(0.01,X)}var G6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)G6[`F${_}`]=65470+(_-1);function B6(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(G6,Y))return G6[Y];let j=String(_?.key||""),N=j?j.codePointAt(0):null,Z=N==null?0:N>65535?2:1;if(N!=null&&j.length===Z){if(N<=255)return N;return(16777216|N)>>>0}return null}var T1=Uint8Array,V_=Uint16Array,J6=Int32Array,u5=new T1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),m5=new T1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),z6=new T1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),y7=function(_,$){var j=new V_(31);for(var N=0;N<31;++N)j[N]=$+=1<<_[N-1];var Z=new J6(j[30]);for(var N=1;N<30;++N)for(var Y=j[N];Y<j[N+1];++Y)Z[Y]=Y-j[N]<<5|N;return{b:j,r:Z}},S7=y7(u5,2),x7=S7.b,F6=S7.r;x7[28]=258,F6[258]=28;var w7=y7(m5,0),yY=w7.b,P7=w7.r,H6=new V_(32768);for(b0=0;b0<32768;++b0)$4=(b0&43690)>>1|(b0&21845)<<1,$4=($4&52428)>>2|($4&13107)<<2,$4=($4&61680)>>4|($4&3855)<<4,H6[b0]=(($4&65280)>>8|($4&255)<<8)>>1;var $4,b0,j4=function(_,$,j){var N=_.length,Z=0,Y=new V_($);for(;Z<N;++Z)if(_[Z])++Y[_[Z]-1];var K=new V_($);for(Z=1;Z<$;++Z)K[Z]=K[Z-1]+Y[Z-1]<<1;var Q;if(j){Q=new V_(1<<$);var X=15-$;for(Z=0;Z<N;++Z)if(_[Z]){var q=Z<<4|_[Z],W=$-_[Z],V=K[_[Z]-1]++<<W;for(var U=V|(1<<W)-1;V<=U;++V)Q[H6[V]>>X]=q}}else{Q=new V_(N);for(Z=0;Z<N;++Z)if(_[Z])Q[Z]=H6[K[_[Z]-1]++]>>15-_[Z]}return Q},x4=new T1(288);for(b0=0;b0<144;++b0)x4[b0]=8;var b0;for(b0=144;b0<256;++b0)x4[b0]=9;var b0;for(b0=256;b0<280;++b0)x4[b0]=7;var b0;for(b0=280;b0<288;++b0)x4[b0]=8;var b0,i$=new T1(32);for(b0=0;b0<32;++b0)i$[b0]=5;var b0,SY=j4(x4,9,0),xY=j4(x4,9,1),wY=j4(i$,5,0),RY=j4(i$,5,1),V6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},m_=function(_,$,j){var N=$/8|0;return(_[N]|_[N+1]<<8)>>($&7)&j},W6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},D6=function(_){return(_+7)/8|0},l$=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new T1(_.subarray($,j))};var fY=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N_=function(_,$,j){var N=Error($||fY[_]);if(N.code=_,Error.captureStackTrace)Error.captureStackTrace(N,N_);if(!j)throw N;return N},vY=function(_,$,j,N){var Z=_.length,Y=N?N.length:0;if(!Z||$.f&&!$.l)return j||new T1(0);var K=!j,Q=K||$.i!=2,X=$.i;if(K)j=new T1(Z*3);var q=function(E0){var q0=j.length;if(E0>q0){var T0=new T1(Math.max(q0*2,E0));T0.set(j),j=T0}},W=$.f||0,V=$.p||0,U=$.b||0,D=$.l,k=$.d,T=$.m,E=$.n,J=Z*8;do{if(!D){W=m_(_,V,1);var A=m_(_,V+1,3);if(V+=3,!A){var C=D6(V)+4,n=_[C-4]|_[C-3]<<8,l=C+n;if(l>Z){if(X)N_(0);break}if(Q)q(U+n);j.set(_.subarray(C,l),U),$.b=U+=n,$.p=V=l*8,$.f=W;continue}else if(A==1)D=xY,k=RY,T=9,E=5;else if(A==2){var t=m_(_,V,31)+257,Z0=m_(_,V+10,15)+4,f=t+m_(_,V+5,31)+1;V+=14;var w=new T1(f),H=new T1(19);for(var S=0;S<Z0;++S)H[z6[S]]=m_(_,V+S*3,7);V+=Z0*3;var h=V6(H),e=(1<<h)-1,i=j4(H,h,1);for(var S=0;S<f;){var $0=i[m_(_,V,e)];V+=$0&15;var C=$0>>4;if(C<16)w[S++]=C;else{var j0=0,Y0=0;if(C==16)Y0=3+m_(_,V,3),V+=2,j0=w[S-1];else if(C==17)Y0=3+m_(_,V,7),V+=3;else if(C==18)Y0=11+m_(_,V,127),V+=7;while(Y0--)w[S++]=j0}}var Q0=w.subarray(0,t),X0=w.subarray(t);T=V6(Q0),E=V6(X0),D=j4(Q0,T,1),k=j4(X0,E,1)}else N_(1);if(V>J){if(X)N_(0);break}}if(Q)q(U+131072);var U0=(1<<T)-1,z0=(1<<E)-1,O0=V;for(;;O0=V){var j0=D[W6(_,V)&U0],l0=j0>>4;if(V+=j0&15,V>J){if(X)N_(0);break}if(!j0)N_(2);if(l0<256)j[U++]=l0;else if(l0==256){O0=V,D=null;break}else{var P0=l0-254;if(l0>264){var S=l0-257,D0=u5[S];P0=m_(_,V,(1<<D0)-1)+x7[S],V+=D0}var i0=k[W6(_,V)&z0],n0=i0>>4;if(!i0)N_(3);V+=i0&15;var X0=yY[n0];if(n0>3){var D0=m5[n0];X0+=W6(_,V)&(1<<D0)-1,V+=D0}if(V>J){if(X)N_(0);break}if(Q)q(U+131072);var S0=U+P0;if(U<X0){var B0=Y-X0,C0=Math.min(X0,S0);if(B0+U<0)N_(3);for(;U<C0;++U)j[U]=N[B0+U]}for(;U<S0;++U)j[U]=j[U-X0]}}if($.l=D,$.p=O0,$.b=U,$.f=W,D)W=1,$.m=T,$.d=k,$.n=E}while(!W);return U!=j.length&&K?l$(j,0,U):j.subarray(0,U)},z4=function(_,$,j){j<<=$&7;var N=$/8|0;_[N]|=j,_[N+1]|=j>>8},p$=function(_,$,j){j<<=$&7;var N=$/8|0;_[N]|=j,_[N+1]|=j>>8,_[N+2]|=j>>16},L6=function(_,$){var j=[];for(var N=0;N<_.length;++N)if(_[N])j.push({s:N,f:_[N]});var Z=j.length,Y=j.slice();if(!Z)return{t:f7,l:0};if(Z==1){var K=new T1(j[0].s+1);return K[j[0].s]=1,{t:K,l:1}}j.sort(function(l,t){return l.f-t.f}),j.push({s:-1,f:25001});var Q=j[0],X=j[1],q=0,W=1,V=2;j[0]={s:-1,f:Q.f+X.f,l:Q,r:X};while(W!=Z-1)Q=j[j[q].f<j[V].f?q++:V++],X=j[q!=W&&j[q].f<j[V].f?q++:V++],j[W++]={s:-1,f:Q.f+X.f,l:Q,r:X};var U=Y[0].s;for(var N=1;N<Z;++N)if(Y[N].s>U)U=Y[N].s;var D=new V_(U+1),k=O6(j[W-1],D,0);if(k>$){var N=0,T=0,E=k-$,J=1<<E;Y.sort(function(t,Z0){return D[Z0.s]-D[t.s]||t.f-Z0.f});for(;N<Z;++N){var A=Y[N].s;if(D[A]>$)T+=J-(1<<k-D[A]),D[A]=$;else break}T>>=E;while(T>0){var C=Y[N].s;if(D[C]<$)T-=1<<$-D[C]++-1;else++N}for(;N>=0&&T;--N){var n=Y[N].s;if(D[n]==$)--D[n],++T}k=$}return{t:new T1(D),l:k}},O6=function(_,$,j){return _.s==-1?Math.max(O6(_.l,$,j+1),O6(_.r,$,j+1)):$[_.s]=j},C7=function(_){var $=_.length;while($&&!_[--$]);var j=new V_(++$),N=0,Z=_[0],Y=1,K=function(X){j[N++]=X};for(var Q=1;Q<=$;++Q)if(_[Q]==Z&&Q!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)K(32754);if(Y>2)K(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){K(Z),--Y;for(;Y>6;Y-=6)K(8304);if(Y>2)K(Y-3<<5|8208),Y=0}while(Y--)K(Z);Y=1,Z=_[Q]}return{c:j.subarray(0,N),n:$}},c$=function(_,$){var j=0;for(var N=0;N<$.length;++N)j+=_[N]*$[N];return j},R7=function(_,$,j){var N=j.length,Z=D6($+2);_[Z]=N&255,_[Z+1]=N>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<N;++Y)_[Z+Y+4]=j[Y];return(Z+4+N)*8},T7=function(_,$,j,N,Z,Y,K,Q,X,q,W){z4($,W++,j),++Z[256];var V=L6(Z,15),U=V.t,D=V.l,k=L6(Y,15),T=k.t,E=k.l,J=C7(U),A=J.c,C=J.n,n=C7(T),l=n.c,t=n.n,Z0=new V_(19);for(var f=0;f<A.length;++f)++Z0[A[f]&31];for(var f=0;f<l.length;++f)++Z0[l[f]&31];var w=L6(Z0,7),H=w.t,S=w.l,h=19;for(;h>4&&!H[z6[h-1]];--h);var e=q+5<<3,i=c$(Z,x4)+c$(Y,i$)+K,$0=c$(Z,U)+c$(Y,T)+K+14+3*h+c$(Z0,H)+2*Z0[16]+3*Z0[17]+7*Z0[18];if(X>=0&&e<=i&&e<=$0)return R7($,W,_.subarray(X,X+q));var j0,Y0,Q0,X0;if(z4($,W,1+($0<i)),W+=2,$0<i){j0=j4(U,D,0),Y0=U,Q0=j4(T,E,0),X0=T;var U0=j4(H,S,0);z4($,W,C-257),z4($,W+5,t-1),z4($,W+10,h-4),W+=14;for(var f=0;f<h;++f)z4($,W+3*f,H[z6[f]]);W+=3*h;var z0=[A,l];for(var O0=0;O0<2;++O0){var l0=z0[O0];for(var f=0;f<l0.length;++f){var P0=l0[f]&31;if(z4($,W,U0[P0]),W+=H[P0],P0>15)z4($,W,l0[f]>>5&127),W+=l0[f]>>12}}}else j0=SY,Y0=x4,Q0=wY,X0=i$;for(var f=0;f<Q;++f){var D0=N[f];if(D0>255){var P0=D0>>18&31;if(p$($,W,j0[P0+257]),W+=Y0[P0+257],P0>7)z4($,W,D0>>23&31),W+=u5[P0];var i0=D0&31;if(p$($,W,Q0[i0]),W+=X0[i0],i0>3)p$($,W,D0>>5&8191),W+=m5[i0]}else p$($,W,j0[D0]),W+=Y0[D0]}return p$($,W,j0[256]),W+Y0[256]},bY=new J6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),f7=new T1(0),uY=function(_,$,j,N,Z,Y){var K=Y.z||_.length,Q=new T1(N+K+5*(1+Math.ceil(K/7000))+Z),X=Q.subarray(N,Q.length-Z),q=Y.l,W=(Y.r||0)&7;if($){if(W)X[0]=Y.r>>3;var V=bY[$-1],U=V>>13,D=V&8191,k=(1<<j)-1,T=Y.p||new V_(32768),E=Y.h||new V_(k+1),J=Math.ceil(j/3),A=2*J,C=function(r0){return(_[r0]^_[r0+1]<<J^_[r0+2]<<A)&k},n=new J6(25000),l=new V_(288),t=new V_(32),Z0=0,f=0,w=Y.i||0,H=0,S=Y.w||0,h=0;for(;w+2<K;++w){var e=C(w),i=w&32767,$0=E[e];if(T[i]=$0,E[e]=i,S<=w){var j0=K-w;if((Z0>7000||H>24576)&&(j0>423||!q)){W=T7(_,X,0,n,l,t,f,H,h,w-h,W),H=Z0=f=0,h=w;for(var Y0=0;Y0<286;++Y0)l[Y0]=0;for(var Y0=0;Y0<30;++Y0)t[Y0]=0}var Q0=2,X0=0,U0=D,z0=i-$0&32767;if(j0>2&&e==C(w-z0)){var O0=Math.min(U,j0)-1,l0=Math.min(32767,w),P0=Math.min(258,j0);while(z0<=l0&&--U0&&i!=$0){if(_[w+Q0]==_[w+Q0-z0]){var D0=0;for(;D0<P0&&_[w+D0]==_[w+D0-z0];++D0);if(D0>Q0){if(Q0=D0,X0=z0,D0>O0)break;var i0=Math.min(z0,D0-2),n0=0;for(var Y0=0;Y0<i0;++Y0){var S0=w-z0+Y0&32767,B0=T[S0],C0=S0-B0&32767;if(C0>n0)n0=C0,$0=S0}}}i=$0,$0=T[i],z0+=i-$0&32767}}if(X0){n[H++]=268435456|F6[Q0]<<18|P7[X0];var E0=F6[Q0]&31,q0=P7[X0]&31;f+=u5[E0]+m5[q0],++l[257+E0],++t[q0],S=w+Q0,++Z0}else n[H++]=_[w],++l[_[w]]}}for(w=Math.max(w,S);w<K;++w)n[H++]=_[w],++l[_[w]];if(W=T7(_,X,q,n,l,t,f,H,h,w-h,W),!q)Y.r=W&7|X[W/8|0]<<3,W-=7,Y.h=E,Y.p=T,Y.i=w,Y.w=S}else{for(var w=Y.w||0;w<K+q;w+=65535){var T0=w+65535;if(T0>=K)X[W/8|0]=q,T0=K;W=R7(X,W+1,_.subarray(w,T0))}Y.i=K}return l$(Q,0,N+D6(W)+Z)};var v7=function(){var _=1,$=0;return{p:function(j){var N=_,Z=$,Y=j.length|0;for(var K=0;K!=Y;){var Q=Math.min(K+2655,Y);for(;K<Q;++K)Z+=N+=j[K];N=(N&65535)+15*(N>>16),Z=(Z&65535)+15*(Z>>16)}_=N,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},mY=function(_,$,j,N,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),K=new T1(Y.length+_.length);K.set(Y),K.set(_,Y.length),_=K,Z.w=Y.length}}return uY(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,N,Z)};var b7=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var gY=function(_,$){var j=$.level,N=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=N<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=v7();Z.p($.dictionary),b7(_,2,Z.d())}},hY=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)N_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)N_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var U6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var N=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:N?N.length:0},this.o=new T1(32768),this.p=new T1(0),N)this.o.set(N)}return _.prototype.e=function($){if(!this.ondata)N_(5);if(this.d)N_(4);if(!this.p.length)this.p=$;else if($.length){var j=new T1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,N=vY(this.p,this.s,this.o);this.ondata(l$(N,j,this.s.b),this.d),this.o=l$(N,this.s.b-32768),this.s.b=this.o.length,this.p=l$(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function u7(_,$){if(!$)$={};var j=v7();j.p(_);var N=mY(_,$,$.dictionary?6:2,4);return gY(N,$),b7(N,N.length-4,j.d()),N}var m7=function(){function _($,j){U6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(U6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(hY(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)N_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}U6.prototype.c.call(this,j)},_}();var pY=typeof TextDecoder<"u"&&new TextDecoder,cY=0;try{pY.decode(f7,{stream:!0}),cY=1}catch(_){}var lY=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],iY=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],nY=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],dY=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],oY=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],sY=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],rY=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],aY=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],p7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;p7[_]=$}function c7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function l7(_){let $=0n,j=c7(_);for(let N of j)$=$<<8n|BigInt(N);return $}function tY(_,$){let j=new Uint8Array($),N=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(N&0xffn),N>>=8n;return j}function B$(_,$,j){let N=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;N=N<<1n|Y}return N}function g7(_,$){let j=28n,N=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&N}function eY(_){let $=B$(l7(_),oY,64),j=$>>28n&0x0fffffffn,N=$&0x0fffffffn,Z=[];for(let Y of rY){j=g7(j,Y),N=g7(N,Y);let K=j<<28n|N;Z.push(B$(K,sY,56))}return Z}function _K(_){let $=0n;for(let j=0;j<8;j+=1){let N=BigInt((7-j)*6),Z=Number(_>>N&0x3fn),Y=(Z&32)>>4|Z&1,K=Z>>1&15;$=$<<4n|BigInt(aY[j][Y][K])}return $}function $K(_,$){let j=B$(_,nY,32)^BigInt($),N=_K(j);return B$(N,dY,32)}function h7(_,$){let j=eY($),N=B$(l7(_),lY,64),Z=N>>32n&0xffffffffn,Y=N&0xffffffffn;for(let Q of j){let X=Y,q=(Z^$K(Y,Q))&0xffffffffn;Z=X,Y=q}let K=Y<<32n|Z;return tY(B$(K,iY,64),8)}function jK(_){let $=String(_??""),j=new Uint8Array(8);for(let N=0;N<8;N+=1){let Z=N<$.length?$.charCodeAt(N)&255:0;j[N]=p7[Z]}return j}function i7(_,$){let j=c7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let N=jK(_),Z=new Uint8Array(16);return Z.set(h7(j.slice(0,8),N),0),Z.set(h7(j.slice(8,16),N),8),Z}var g_="vnc";function NK(_){return Number(_)}function ZK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],N=new Set;for(let Z of $){let Y=NK(Z);if(!Number.isFinite(Y))continue;let K=Number(Y);if(!N.has(K))j.push(K),N.add(K)}if(j.length>0)return j;return[5,2,1,0,-223]}function L$(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function YK(_,$){let j=L$(_),N=L$($);if(!j.byteLength)return new Uint8Array(N);if(!N.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+N.byteLength);return Z.set(j,0),Z.set(N,j.byteLength),Z}function KK(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),N=0;for(let Z of _||[]){let Y=L$(Z);j.set(Y,N),N+=Y.byteLength}return j}function QK(){return(_)=>{let $=L$(_);try{let j=[],N=new m7((Z)=>{j.push(new Uint8Array(Z))});if(N.push($,!0),N.err)throw Error(N.msg||"zlib decompression error");return KK(j)}catch(j){try{let N=u7($);return N instanceof Uint8Array?N:new Uint8Array(N)}catch(N){let Z=N instanceof Error?N.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function qK(_){return new TextEncoder().encode(String(_||""))}function V$(_){return new TextDecoder().decode(L$(_))}function GK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function XK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function n7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function BK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function VK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),N=new DataView(j);N.setUint8(0,2),N.setUint8(1,0),N.setUint16(2,$.length,!1);let Z=4;for(let Y of $)N.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function d7(_,$,j,N=0,Z=0){let Y=new ArrayBuffer(10),K=new DataView(Y);return K.setUint8(0,3),K.setUint8(1,_?1:0),K.setUint16(2,N,!1),K.setUint16(4,Z,!1),K.setUint16(6,Math.max(0,$||0),!1),K.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function W$(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function s7(_,$,j,N){if(j===1)return _[$];if(j===2)return N?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return N?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return N?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function WK(_,$,j,N){let Z=N||U$,Y=L$(_),K=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),Q=Math.max(0,$||0)*Math.max(0,j||0)*K;if(Y.byteLength<Q)throw Error(`Incomplete raw rectangle payload: expected ${Q} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let X=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),q=0,W=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=s7(Y,q,K,Z.bigEndian),D=W$(U>>>Z.redShift&Z.redMax,Z.redMax),k=W$(U>>>Z.greenShift&Z.greenMax,Z.greenMax),T=W$(U>>>Z.blueShift&Z.blueMax,Z.blueMax);X[W]=D,X[W+1]=k,X[W+2]=T,X[W+3]=255,q+=K,W+=4}return X}function F4(_,$,j){let N=j||U$,Z=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=s7(_,$,Z,N.bigEndian);return{rgba:[W$(Y>>>N.redShift&N.redMax,N.redMax),W$(Y>>>N.greenShift&N.greenMax,N.greenMax),W$(Y>>>N.blueShift&N.blueMax,N.blueMax),255],bytesPerPixel:Z}}function w4(_,$,j,N,Z,Y,K){if(!K)return;for(let Q=0;Q<Y;Q+=1)for(let X=0;X<Z;X+=1){let q=((N+Q)*$+(j+X))*4;_[q]=K[0],_[q+1]=K[1],_[q+2]=K[2],_[q+3]=K[3]}}function r7(_,$,j,N,Z,Y,K){for(let Q=0;Q<Y;Q+=1){let X=Q*Z*4,q=((N+Q)*$+j)*4;_.set(K.subarray(X,X+Z*4),q)}}function o7(_,$){let j=$,N=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(N+=Z,Z!==255)break}return{consumed:j-$,runLength:N}}function LK(_,$,j,N,Z,Y,K){let Q=Z||U$,X=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let q=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+q)return null;let W=_.slice($+4,$+4+q),V;try{V=K(W)}catch{return{consumed:4+q,skipped:!0}}let U=0,D=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4);for(let k=0;k<N;k+=64){let T=Math.min(64,N-k);for(let E=0;E<j;E+=64){let J=Math.min(64,j-E);if(V.byteLength<U+1)return null;let A=V[U++],C=A&127,n=(A&128)!==0;if(!n&&C===0){let l=J*T*X;if(V.byteLength<U+l)return null;let t=Y(V.slice(U,U+l),J,T,Q);U+=l,r7(D,j,E,k,J,T,t);continue}if(!n&&C===1){let l=F4(V,U,Q);if(!l)return null;U+=l.bytesPerPixel,w4(D,j,E,k,J,T,l.rgba);continue}if(!n&&C>1&&C<=16){let l=[];for(let w=0;w<C;w+=1){let H=F4(V,U,Q);if(!H)return null;U+=H.bytesPerPixel,l.push(H.rgba)}let t=C<=2?1:C<=4?2:4,Z0=Math.ceil(J*t/8),f=Z0*T;if(V.byteLength<U+f)return null;for(let w=0;w<T;w+=1){let H=U+w*Z0;for(let S=0;S<J;S+=1){let h=S*t,e=H+(h>>3),i=8-t-(h&7),$0=V[e]>>i&(1<<t)-1;w4(D,j,E+S,k+w,1,1,l[$0])}}U+=f;continue}if(n&&C===0){let l=0,t=0;while(t<T){let Z0=F4(V,U,Q);if(!Z0)return null;U+=Z0.bytesPerPixel;let f=o7(V,U);if(!f)return null;U+=f.consumed;for(let w=0;w<f.runLength;w+=1)if(w4(D,j,E+l,k+t,1,1,Z0.rgba),l+=1,l>=J){if(l=0,t+=1,t>=T)break}}continue}if(n&&C>0){let l=[];for(let f=0;f<C;f+=1){let w=F4(V,U,Q);if(!w)return null;U+=w.bytesPerPixel,l.push(w.rgba)}let t=0,Z0=0;while(Z0<T){if(V.byteLength<U+1)return null;let f=V[U++],w=f,H=1;if(f&128){w=f&127;let h=o7(V,U);if(!h)return null;U+=h.consumed,H=h.runLength}let S=l[w];if(!S)return null;for(let h=0;h<H;h+=1)if(w4(D,j,E+t,k+Z0,1,1,S),t+=1,t>=J){if(t=0,Z0+=1,Z0>=T)break}}continue}return{consumed:4+q,skipped:!0}}}return{consumed:4+q,rgba:D,decompressed:V}}function UK(_,$,j,N,Z){let Y=Z||U$,K=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+K)return null;let X=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),q=4+K+X*(K+8);if(_.byteLength<$+q)return null;let W=$+4,V=F4(_,W,Y);if(!V)return null;W+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4);w4(U,j,0,0,j,N,V.rgba);for(let D=0;D<X;D+=1){let k=F4(_,W,Y);if(!k)return null;if(W+=k.bytesPerPixel,_.byteLength<W+8)return null;let T=new DataView(_.buffer,_.byteOffset+W,8),E=T.getUint16(0,!1),J=T.getUint16(2,!1),A=T.getUint16(4,!1),C=T.getUint16(6,!1);W+=8,w4(U,j,E,J,A,C,k.rgba)}return{consumed:W-$,rgba:U}}function zK(_,$,j,N,Z,Y){let K=Z||U$,Q=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8)),X=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4),q=$,W=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<N;U+=16){let D=Math.min(16,N-U);for(let k=0;k<j;k+=16){let T=Math.min(16,j-k);if(_.byteLength<q+1)return null;let E=_[q++];if(E&1){let J=T*D*Q;if(_.byteLength<q+J)return null;let A=Y(_.slice(q,q+J),T,D,K);q+=J,r7(X,j,k,U,T,D,A);continue}if(E&2){let J=F4(_,q,K);if(!J)return null;W=J.rgba,q+=J.bytesPerPixel}if(w4(X,j,k,U,T,D,W),E&4){let J=F4(_,q,K);if(!J)return null;V=J.rgba,q+=J.bytesPerPixel}if(E&8){if(_.byteLength<q+1)return null;let J=_[q++];for(let A=0;A<J;A+=1){let C=V;if(E&16){let H=F4(_,q,K);if(!H)return null;C=H.rgba,q+=H.bytesPerPixel}if(_.byteLength<q+2)return null;let n=_[q++],l=_[q++],t=n>>4,Z0=n&15,f=(l>>4)+1,w=(l&15)+1;w4(X,j,k+t,U+Z0,f,w,C)}}}}return{consumed:q-$,rgba:X}}var U$={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class g5{protocol=g_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:WK,this.pipeline=_.pipeline||null,this.encodings=ZK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...U$},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:QK()}receive(_){if(_)this.buffer=YK(this.buffer,_);let $=[],j=[],N=!0;while(N){if(N=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=V$(Z),K=GK(Y);if(!K)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=K,this.clientVersionText=XK(K),j.push(qK(this.clientVersionText)),$.push({type:"protocol-version",protocol:g_,server:K.text.trim(),client:this.clientVersionText.trim()}),this.state=K.minor>=7?"security-types":"security-type-33",N=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+X)break;this.consume(1);let q=V$(this.consume(4+X).slice(4));throw Error(q||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:g_,types:Y});let K=null;if(Y.includes(2)&&this.password!==null)K=2;else if(Y.includes(1))K=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(K)),$.push({type:"security-selected",protocol:g_,securityType:K,label:K===2?"VNC Authentication":"None"}),this.state=K===2?"security-challenge":"security-result",N=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+Q)break;let X=V$(this.consume(4+Q).slice(4));throw Error(X||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:g_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",N=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:g_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",N=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(i7(this.password,Z)),this.state="security-result",N=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+K){let Q=V$(this.consume(4+K).slice(4));throw Error(Q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:g_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",N=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),K=Z.getUint16(2,!1),Q=n7(Z,4),X=Z.getUint32(20,!1);if(this.buffer.byteLength<24+X)break;let q=this.consume(24),W=new DataView(q.buffer,q.byteOffset,q.byteLength);if(this.framebufferWidth=W.getUint16(0,!1),this.framebufferHeight=W.getUint16(2,!1),this.serverPixelFormat=n7(W,4),this.serverName=V$(this.consume(X)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(BK(this.clientPixelFormat)),j.push(VK(this.encodings)),j.push(d7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:g_,width:Y,height:K,name:this.serverName,pixelFormat:Q}),N=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),Q=4,X=[],q=!1,W=!!this.pipeline;for(let U=0;U<K;U+=1){if(this.buffer.byteLength<Q+12){q=!0;break}let D=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,12),k=D.getUint16(0,!1),T=D.getUint16(2,!1),E=D.getUint16(4,!1),J=D.getUint16(6,!1),A=D.getInt32(8,!1);if(Q+=12,A===0){let C=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),n=E*J*C;if(this.buffer.byteLength<Q+n){q=!0;break}let l=this.buffer.slice(Q,Q+n);if(Q+=n,W)this.pipeline.processRawRect(l,k,T,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:k,y:T,width:E,height:J});else X.push({kind:"rgba",x:k,y:T,width:E,height:J,rgba:this.decodeRawRect(l,E,J,this.clientPixelFormat)});continue}if(A===2){let C=UK(this.buffer,Q,E,J,this.clientPixelFormat);if(!C){q=!0;break}if(W){let n=this.buffer.slice(Q,Q+C.consumed);this.pipeline.processRreRect(n,k,T,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:k,y:T,width:E,height:J})}else X.push({kind:"rgba",x:k,y:T,width:E,height:J,rgba:C.rgba});Q+=C.consumed;continue}if(A===1){if(this.buffer.byteLength<Q+4){q=!0;break}let C=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,4),n=C.getUint16(0,!1),l=C.getUint16(2,!1);if(Q+=4,W)this.pipeline.processCopyRect(k,T,E,J,n,l),X.push({kind:"pipeline",x:k,y:T,width:E,height:J});else X.push({kind:"copy",x:k,y:T,width:E,height:J,srcX:n,srcY:l});continue}if(A===16){let C=LK(this.buffer,Q,E,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!C){q=!0;break}if(Q+=C.consumed,C.skipped)continue;if(W&&C.decompressed)this.pipeline.processZrleTileData(C.decompressed,k,T,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:k,y:T,width:E,height:J});else X.push({kind:"rgba",x:k,y:T,width:E,height:J,rgba:C.rgba});continue}if(A===5){let C=zK(this.buffer,Q,E,J,this.clientPixelFormat,this.decodeRawRect);if(!C){q=!0;break}if(W){let n=this.buffer.slice(Q,Q+C.consumed);this.pipeline.processHextileRect(n,k,T,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:k,y:T,width:E,height:J})}else X.push({kind:"rgba",x:k,y:T,width:E,height:J,rgba:C.rgba});Q+=C.consumed;continue}if(A===-223){if(this.framebufferWidth=E,this.framebufferHeight=J,W)this.pipeline.initFramebuffer(E,J);X.push({kind:"resize",x:k,y:T,width:E,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${A}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(q)break;this.consume(Q);let V={type:"framebuffer-update",protocol:g_,width:this.framebufferWidth,height:this.framebufferHeight,rects:X};if(W)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(d7(!0,this.framebufferWidth,this.framebufferHeight)),N=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:g_}),N=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+K)break;this.consume(8);let Q=V$(this.consume(K));$.push({type:"clipboard",protocol:g_,text:Q}),N=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var N4="piclaw://vnc";function FK(_){let $=String(_||"");if($===N4)return null;if(!$.startsWith(`${N4}/`))return null;let j=$.slice(`${N4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function o4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function HK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),N=await j.json().catch(()=>({}));if(!j.ok)throw Error(N?.error||`HTTP ${j.status}`);return N}function OK(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/vnc/ws?target=${encodeURIComponent(_)}`}function JK(_,$){let j=String(_||"").trim(),N=Math.floor(Number($||0));if(!j||!Number.isFinite(N)||N<=0||N>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${N}`}class a7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;rawFallbackAttempted=!1;protocolRecovering=!1;constructor(_,$){this.container=_,this.targetId=FK($?.path),this.targetLabel=this.targetId||null,this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_?"block":"none"}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:18px 18px 20px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:14px;box-shadow:0 16px 38px rgba(0,0,0,.22);">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host placeholder="server" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;min-height:40px;font-weight:600;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((Z)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${o4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${o4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${o4(Z.id)}" data-target-label="${o4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:28px 24px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);font-size:13px;color:var(--text-secondary);line-height:1.5;">
                            No saved VNC targets yet. Connect directly above.
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let N=()=>{let Z=JK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=h$(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>N());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),K=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,K)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${o4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                        <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                        <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                            <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                            <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                        </label>
                        <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Reconnect</button>
                        <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Target</button>
                    </div>
                </div>
                <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:16px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:12px;position:relative;overflow:hidden;">
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${o4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=h$(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=h$(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",N=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${N}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let N=j?.reveal===!0;if(this.canvas.style.display=N||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=N||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let N=I7($,j,this.canvas.width,this.canvas.height);this.displayScale=N,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*N))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*N))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return A7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(b5(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=X6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~X6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of M7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(k7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=B6(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??B6(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((N)=>N.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let N=this.canvas?.getContext("2d",{alpha:!1});if(N){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);N.putImageData(Z,0,0),$=!0}}else for(let N of _.rects||[]){if(N.kind==="resize"){this.ensureCanvasSize(N.width,N.height);continue}if(N.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(N),$=!0;continue}if(N.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(N),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let N=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${N}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${N}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new g5);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,N=$.receive(j);for(let Z of N.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of N.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let N=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${N}`),this.updateDisplayInfo(`Display protocol error: ${N}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(N))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=_==null?null:String(_).trim(),j=await E7(),N={};if(j)N.pipeline=j,N.decodeRawRect=(Y,K,Q,X)=>j.decodeRawRectToRgba(Y,K,Q,X);let Z=h$(this.authPassword);if(Z!==null)N.password=Z;if($)N.encodings=$;if(this.protocol=new g5(N),this.hasRenderedFrame=!1,this.frameTimeoutId=null,this.canvas)this.canvas.style.display="none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display="";this.socketBoundary=new Q6({url:OK(this.targetId),binaryType:"arraybuffer",onOpen:()=>{this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(Y)=>{this.applyMetrics(Y)},onMessage:(Y)=>{this.handleSocketMessage(Y)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{this.setSessionChromeVisible(!0),this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await HK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${o4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var E6={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===N4||$.startsWith(`${N4}/`)?9000:!1},mount(_,$){return new a7(_,$)}};function R4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function DK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let N=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=N?.[1]||j,Y=N?.[2]||"",K=N?.[3]||"",Q=String($||"").split("/").slice(0,-1).join("/"),q=Z.startsWith("/")?Z:`${Q?`${Q}/`:""}${Z}`,W=[];for(let U of q.split("/")){if(!U||U===".")continue;if(U===".."){if(W.length>0)W.pop();continue}W.push(U)}let V=W.join("/");return`${V5(V)}${Y}${K}`}function n$(_){return _?.preview||null}function EK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),N=j>=0?$.slice(j+1):$,Z=N.lastIndexOf(".");if(Z<=0||Z===N.length-1)return"none";return N.slice(Z+1)}function AK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function MK(_,$){let j=$?.path||_?.path||"",N=[];if($?.content_type)N.push(`<span><strong>type:</strong> ${R4($.content_type)}</span>`);if(typeof $?.size==="number")N.push(`<span><strong>size:</strong> ${R4(E_($.size))}</span>`);if($?.mtime)N.push(`<span><strong>modified:</strong> ${R4(n4($.mtime))}</span>`);if(N.push(`<span><strong>kind:</strong> ${R4(AK($))}</span>`),N.push(`<span><strong>extension:</strong> ${R4(EK(j))}</span>`),j)N.push(`<span><strong>path:</strong> ${R4(j)}</span>`);if($?.truncated)N.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${N.join("")}</div>`}function kK(_){let $=n$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=MK(_,$);if($.kind==="image"){let N=$.url||($.path?V5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${R4(N)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let N=B_($.text||"",null,{rewriteImageSrc:(Z)=>DK(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${N}</div>`}return`${j}<pre class="workspace-preview-text"><code>${R4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class A6{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=kK(this.context)}getContent(){let _=n$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=n$(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var M6={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=n$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new A6(_,$)}},k6={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return n$(_)||_?.path?1:!1},mount(_,$){return new A6(_,$)}};var IK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),PK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},CK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function e7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function t7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class _9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document",Z=e7(j),Y=CK[Z]||"\uD83D\uDCC4",K=PK[Z]||"Office Document",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${t7(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${t7(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let X=Q.querySelector("#ov-open-tab");if(X)X.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class $9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(N)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var I6={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=e7(_?.path);if(!$||!IK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new _9(_,$);return new $9(_,$)}};var TK=/\.(csv|tsv)$/i;function j9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class N9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${j9(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${j9(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let K=Y.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let Q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Z9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P6={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!TK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new N9(_,$);return new Z9(_,$)}};var yK=/\.pdf$/i;function SK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class Y9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${SK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class K9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var C6={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!yK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new Y9(_,$);return new K9(_,$)}};var xK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function T6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class Q9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${T6(Z)}" alt="${T6(N)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${T6(N)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let K=Y.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let Q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class q9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y6={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!xK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new Q9(_,$);return new q9(_,$)}};var wK=/\.(mp4|m4v|mov|webm|ogv)$/i;function RK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class G9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${RK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class X9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var S6={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!wK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new G9(_,$);return new X9(_,$)}};function fK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function vK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var x6='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function B9(_){let $=String(_||"").trim();return $?$:x6}function bK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function uK(_){let $="",j=32768;for(let N=0;N<_.length;N+=j)$+=String.fromCharCode(..._.subarray(N,N+j));return btoa($)}function mK(_,$="*"){try{let j=(Y)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},N=_.EditorUi;if(N?.prototype&&!N.prototype.__piclawWorkspaceSavePatched){let Y=N.prototype.saveData;N.prototype.saveData=function(K,Q,X,q,W,V){try{if(K&&X!=null&&j({filename:K,format:Q,data:X,mimeType:q,base64Encoded:Boolean(W),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},N.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(K,Q,X,q,W,V){try{if(Q&&j({filename:Q,data:K,mimeType:X,base64Encoded:Boolean(q),mode:W,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(N?.prototype&&N.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function V9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${uK(j)}`}class W9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${vK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class L9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=bK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(mK(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=x6,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await V9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await V9(_,"image/png");else this.xmlData=B9(await _.text());else if(_.status===404)this.xmlData=x6;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?B9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var w6={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!fK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new W9(_,$);return new L9(_,$)}};var gK=/\.mindmap\.ya?ml$/i;function R6(_){if(document.querySelector(`script[src="${_}"]`))return Promise.resolve();return new Promise(($,j)=>{let N=document.createElement("script");N.src=_,N.onload=()=>$(),N.onerror=()=>j(Error(`Failed to load ${_}`)),document.head.appendChild(N)})}function hK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class U9{container;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${N}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class z9{container;filePath;dirty=!1;dirtyCallback=null;saveCallback=null;disposed=!1;mindmapEl=null;constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content||"")}async init(_){hK("/static/css/mindmap.css"),await Promise.all([R6("/static/js/vendor/d3-mindmap.min.js"),R6("/static/js/vendor/js-yaml.min.js")]),this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;",this.container.appendChild(this.mindmapEl);let $=document.body.classList.contains("dark")||getComputedStyle(document.documentElement).getPropertyValue("--bg-primary").trim().startsWith("#1")||getComputedStyle(document.documentElement).getPropertyValue("--bg-primary").trim().startsWith("#0");if(!$)this.mindmapEl.classList.add("light");let j=this.filePath.replace(/\/[^/]+$/,"")||"/",N=this,Z={postMessage(Y){switch(Y.type){case"edit":N.dirty=!0,N.dirtyCallback?.(!0),N.saveCallback?.(Y.content),N.saveToWorkspace(Y.content);break;case"error":console.error("[mindmap]",Y.text);break;case"openLink":window.open(Y.url,"_blank","noopener,noreferrer");break;case"resolveImagePath":let K=Y.path.startsWith("data:")||Y.path.startsWith("http")?Y.path:`/workspace/raw?path=${encodeURIComponent(j+"/"+Y.path)}`;window.dispatchEvent(new MessageEvent("message",{data:{type:"imageResolved",originalPath:Y.path,resolvedUri:K}}));break;case"ready":window.dispatchEvent(new MessageEvent("message",{data:{type:"update",content:_}})),window.dispatchEvent(new MessageEvent("message",{data:{type:"setTheme",theme:$?"dark":"light"}}));break}},getState(){return null},setState(){}};window.__mindmapVscodeShim=Z,await this.loadMindmapRenderer()}async loadMindmapRenderer(){try{window.acquireVsCodeApi=()=>window.__mindmapVscodeShim,await R6("/static/js/vendor/mindmap-editor.js")}catch($){if(console.error("[mindmap] Failed to load mindmap renderer:",$),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor. Bundle not found at /static/js/vendor/mindmap-editor.js.</div>'}}async saveToWorkspace(_){try{await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}`,{method:"PUT",headers:{"Content-Type":"text/yaml"},body:_}),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){window.dispatchEvent(new MessageEvent("message",{data:{type:"update",content:_}})),this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}onSaveRequest(_){this.saveCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,delete window.__mindmapVscodeShim,delete window.acquireVsCodeApi,this.container.innerHTML=""}}var f6={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!gK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new U9(_,$);return new z9(_,$)}};var pK=/\.kanban\.md$/i;function cK(_){if(document.querySelector(`script[src="${_}"]`))return Promise.resolve();return new Promise(($,j)=>{let N=document.createElement("script");N.src=_,N.onload=()=>$(),N.onerror=()=>j(Error(`Failed to load ${_}`)),document.head.appendChild(N)})}function lK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class F9{container;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${N}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class H9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content||"")}async init(_){lK("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let $=document.body.classList.contains("dark")||getComputedStyle(document.documentElement).getPropertyValue("--bg-primary").trim().startsWith("#1");if(!$)this.boardEl.classList.add("light");let j=this,N={postMessage(Z){switch(Z.type){case"edit":j.dirty=!0,j.dirtyCallback?.(!0),j.saveToWorkspace(Z.content);break;case"ready":window.dispatchEvent(new MessageEvent("message",{data:{type:"update",content:_}})),window.dispatchEvent(new MessageEvent("message",{data:{type:"setTheme",theme:$?"dark":"light"}}));break;case"synced":break}},getState(){return null},setState(){}};window.__kanbanVscodeShim=N,window.acquireVsCodeApi=()=>window.__kanbanVscodeShim;try{await cK("/static/js/vendor/kanban-editor.js")}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){try{await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}`,{method:"PUT",headers:{"Content-Type":"text/markdown"},body:_}),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){window.dispatchEvent(new MessageEvent("message",{data:{type:"update",content:_}})),this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,delete window.__kanbanVscodeShim,delete window.acquireVsCodeApi,this.container.innerHTML=""}}var v6={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!pK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new F9(_,$);return new H9(_,$)}};class O9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((N)=>N!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let N=this.tabs.get(_);if(!N)return;if(this.tabs.delete(_),N.id=$,N.path=$,N.label=j||$.split("/").pop()||$,this.tabs.set($,N),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var s0=new O9;var h5="workspaceExplorerScale",iK=["compact","default","comfortable"],nK=new Set(iK),dK={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function J9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return nK.has(j)?j:$}function b6(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),N=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||N&&j}}function oK(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function sK(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function u6(_={}){let $=oK(_),j=_.stored?J9(_.stored,$):$;return sK(j,_)}function D9(_){return dK[J9(_)]}function rK(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function m6(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let N=$({path:j,mode:"edit"});if(!N||typeof N!=="object")return!1;return N.id!=="editor"}function E9(_,$,j={}){let N=j?.resolvePane;if(m6(_,N))return!0;return rK($)}var aK=60000,I9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function tK(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return m6($,(j)=>g0.resolve(j))}function P9(_,$,j,N=0,Z=[]){if(!j&&I9(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:N}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)P9(Y,$,j,N+1,Z);return Z}function A9(_,$,j){if(!_)return"";let N=[],Z=(Y)=>{if(!j&&I9(Y))return;if(N.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let K of Y.children)Z(K)};return Z(_),N.join("|")}function c6(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,N=Array.isArray($.children)?$.children:null;if(!N)return _;let Z=j?new Map(j.map((Q)=>[Q?.path,Q])):new Map,Y=!j||j.length!==N.length,K=N.map((Q)=>{let X=c6(Z.get(Q.path),Q);if(X!==Z.get(Q.path))Y=!0;return X});return Y?{...$,children:K}:_}function h6(_,$,j){if(!_)return _;if(_.path===$)return c6(_,j);if(!Array.isArray(_.children))return _;let N=!1,Z=_.children.map((Y)=>{let K=h6(Y,$,j);if(K!==Y)N=!0;return K});return N?{..._,children:Z}:_}var C9=4,g6=14,eK=8,_Q=16;function T9(_){if(!_)return 0;if(_.type==="file"){let N=Math.max(0,Number(_.size)||0);return _.__bytes=N,N}let $=Array.isArray(_.children)?_.children:[],j=0;for(let N of $)j+=T9(N);return _.__bytes=j,j}function y9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),N={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=C9)return N;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let Q of Z){let X=Math.max(0,Number(Q?.__bytes??Q?.size??0));if(X<=0)continue;if(Q.type==="dir")Y.push({kind:"dir",node:Q,size:X});else Y.push({kind:"file",name:Q.name,path:Q.path,size:X})}Y.sort((Q,X)=>X.size-Q.size);let K=Y;if(Y.length>g6){let Q=Y.slice(0,g6-1),X=Y.slice(g6-1),q=X.reduce((W,V)=>W+V.size,0);Q.push({kind:"other",name:`+${X.length} more`,path:`${N.path}/[other]`,size:q}),K=Q}return N.children=K.map((Q)=>{if(Q.kind==="dir")return y9(Q.node,$+1);return{name:Q.name,path:Q.path,size:Q.size,children:[]}}),N}function M9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function S9(_,$,j){let N=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${N.toFixed(1)} ${Z}% ${Y}%)`}function p5(_,$,j,N){return{x:_+j*Math.cos(N),y:$+j*Math.sin(N)}}function l6(_,$,j,N,Z,Y){let K=Math.PI*2-0.0001,Q=Y-Z>K?Z+K:Y,X=p5(_,$,N,Z),q=p5(_,$,N,Q),W=p5(_,$,j,Q),V=p5(_,$,j,Z),U=Q-Z>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${N} ${N} 0 ${U} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var x9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function w9(_,$,j){let N=[],Z=[],Y=Math.max(0,Number($)||0),K=(Q,X,q,W)=>{let V=Array.isArray(Q?.children)?Q.children:[];if(!V.length)return;let U=Math.max(0,Number(Q.size)||0);if(U<=0)return;let D=q-X,k=X;V.forEach((T,E)=>{let J=Math.max(0,Number(T.size)||0);if(J<=0)return;let A=J/U,C=k,n=E===V.length-1?q:k+D*A;if(k=n,n-C<0.003)return;let l=x9[W];if(l){let t=S9(C,W,j);if(N.push({key:T.path,path:T.path,label:T.name,size:J,color:t,depth:W,startAngle:C,endAngle:n,innerRadius:l[0],outerRadius:l[1],d:l6(120,120,l[0],l[1],C,n)}),W===1)Z.push({key:T.path,name:T.name,size:J,pct:Y>0?J/Y*100:0,color:t})}if(W<C9)K(T,C,n,W+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:N,legend:Z}}function p6(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let N of j){let Z=p6(N,$);if(Z)return Z}return null}function R9(_,$,j,N){if(!j||j<=0)return{segments:[],legend:[]};let Z=x9[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,K=Math.PI*3/2,Q=S9(Y,1,N),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:Q,depth:1,startAngle:Y,endAngle:K,innerRadius:Z[0],outerRadius:Z[1],d:l6(120,120,Z[0],Z[1],Y,K)}],legend:[{key:q,name:_,size:j,pct:100,color:Q}]}}function k9(_,$=!1,j=!1){if(!_)return null;let N=T9(_),Z=y9(_,0),Y=Z.size||N,{segments:K,legend:Q}=w9(Z,Y,j);if(!K.length&&Y>0){let X=R9("[files]",Z.path,Y,j);K=X.segments,Q=X.legend}return{root:Z,totalSize:Y,segments:K,legend:Q,truncated:$,isDarkTheme:j}}function $Q({payload:_}){if(!_)return null;let[$,j]=c(null),[N,Z]=c(_?.root?.path||"."),[Y,K]=c(()=>[_?.root?.path||"."]),[Q,X]=c(!1);p(()=>{let H=_?.root?.path||".";Z(H),K([H]),j(null)},[_?.root?.path,_?.totalSize]),p(()=>{if(!N)return;X(!0);let H=setTimeout(()=>X(!1),180);return()=>clearTimeout(H)},[N]);let q=M0(()=>{return p6(_.root,N)||_.root},[_?.root,N]),W=q?.size||_.totalSize||0,{segments:V,legend:U}=M0(()=>{let H=w9(q,W,_.isDarkTheme);if(H.segments.length>0)return H;if(W<=0)return H;let S=q?.children?.length?"Total":"[files]";return R9(S,q?.path||_?.root?.path||".",W,_.isDarkTheme)},[q,W,_.isDarkTheme,_?.root?.path]),[D,k]=c(V),T=y(new Map),E=y(0);p(()=>{let H=T.current,S=new Map(V.map(($0)=>[$0.key,$0])),h=performance.now(),e=220,i=($0)=>{let j0=Math.min(1,($0-h)/220),Y0=j0*(2-j0),Q0=V.map((X0)=>{let z0=H.get(X0.key)||{startAngle:X0.startAngle,endAngle:X0.startAngle,innerRadius:X0.innerRadius,outerRadius:X0.innerRadius},O0=(n0,S0)=>n0+(S0-n0)*Y0,l0=O0(z0.startAngle,X0.startAngle),P0=O0(z0.endAngle,X0.endAngle),D0=O0(z0.innerRadius,X0.innerRadius),i0=O0(z0.outerRadius,X0.outerRadius);return{...X0,d:l6(120,120,D0,i0,l0,P0)}});if(k(Q0),j0<1)E.current=requestAnimationFrame(i)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(i),T.current=S,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let J=D.length?D:V,A=W>0?E_(W):"0 B",C=q?.name||"",l=(C&&C!=="."?C:"Total")||"Total",t=A,Z0=Y.length>1,f=(H)=>{if(!H?.path)return;let S=p6(_.root,H.path);if(!S||!Array.isArray(S.children)||S.children.length===0)return;K((h)=>[...h,S.path]),Z(S.path),j(null)},w=()=>{if(!Z0)return;K((H)=>{let S=H.slice(0,-1);return Z(S[S.length-1]||_?.root?.path||"."),S}),j(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${Q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${J.length}
                data-base-size=${W}>
                ${J.map((H)=>z`
                    <path
                        key=${H.key}
                        d=${H.d}
                        fill=${H.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===H.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(H)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(H)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>f(H)}
                    >
                        <title>${H.label} — ${E_(H.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${Z0?" is-drill":""}`}
                    onClick=${w}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${l}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${t}</text>
                </g>
            </svg>
            ${U.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((H)=>z`
                        <div key=${H.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${H.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${H.name}>${H.name}</span>
                            <span class="workspace-folder-starburst-size">${E_(H.size)}</span>
                            <span class="workspace-folder-starburst-pct">${H.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function jQ({mediaId:_}){let[$,j]=c(null);if(p(()=>{if(!_)return;Y$(_).then(j).catch(()=>{})},[_]),!$)return null;let N=$.filename||"file",Z=$.metadata?.size?E_($.metadata.size):"";return z`
        <a href=${D_(_)} download=${N} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${N}</span>
                ${Z&&z`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function f9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:N,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:K,terminalVisible:Q=!1}){let[X,q]=c(null),[W,V]=c(new Set(["."])),[U,D]=c(null),[k,T]=c(null),[E,J]=c(""),[A,C]=c(null),[n,l]=c(null),[t,Z0]=c(!0),[f,w]=c(!1),[H,S]=c(null),[h,e]=c(()=>K$("workspaceShowHidden",!1)),[i,$0]=c(!1),[j0,Y0]=c(null),[Q0,X0]=c(null),[U0,z0]=c(null),[O0,l0]=c(!1),[P0,D0]=c(null),[i0,n0]=c(()=>M9()),[S0,B0]=c(()=>u6({stored:X_(h5),...b6()})),[C0,E0]=c(!1),q0=y(W),T0=y(""),r0=y(null),h0=y(0),z1=y(new Set),A1=y(null),u0=y(new Map),d0=y(_),Z1=y(N),X1=y(null),a0=y(null),y1=y(null),K1=y(null),v1=y(null),B1=y(null),c1=y("."),m0=y(null),a1=y({path:null,dragging:!1,startX:0,startY:0}),V1=y({path:null,dragging:!1,startX:0,startY:0}),F1=y({path:null,timer:0}),J1=y(!1),y0=y(0),D1=y(new Map),R0=y(null),v0=y(null),e0=y(null),d1=y(null),m=y(null),G0=y(null),A0=y(h),F0=y($),t0=y(j??$),t1=y(0),l1=y(U0),h_=y(i),M_=y(j0),e1=y(null),_1=y({x:0,y:0}),S1=y(0),o1=y(null),x1=y(U),k_=y(k),I_=y(null),H4=y(A);d0.current=_,Z1.current=N,p(()=>{q0.current=W},[W]),p(()=>{A0.current=h},[h]),p(()=>{F0.current=$},[$]),p(()=>{t0.current=j??$},[j,$]),p(()=>{l1.current=U0},[U0]),p(()=>{if(typeof window>"u")return;let F=()=>{B0(u6({stored:X_(h5),...b6()}))};F();let I=()=>F(),b=()=>F(),v=(N0)=>{if(!N0||N0.key===null||N0.key===h5)F()};window.addEventListener("resize",I),window.addEventListener("focus",b),window.addEventListener("storage",v);let d=window.matchMedia?.("(pointer: coarse)"),K0=window.matchMedia?.("(hover: none)"),V0=(N0,k0)=>{if(!N0)return;if(N0.addEventListener)N0.addEventListener("change",k0);else if(N0.addListener)N0.addListener(k0)},L0=(N0,k0)=>{if(!N0)return;if(N0.removeEventListener)N0.removeEventListener("change",k0);else if(N0.removeListener)N0.removeListener(k0)};return V0(d,I),V0(K0,I),()=>{window.removeEventListener("resize",I),window.removeEventListener("focus",b),window.removeEventListener("storage",v),L0(d,I),L0(K0,I)}},[]),p(()=>{let F=(I)=>{let b=I?.detail?.path;if(!b)return;let v=b.split("/"),d=[];for(let K0=1;K0<v.length;K0++)d.push(v.slice(0,K0).join("/"));if(d.length)V((K0)=>{let V0=new Set(K0);V0.add(".");for(let L0 of d)V0.add(L0);return V0});D(b),requestAnimationFrame(()=>{let K0=document.querySelector(`[data-path="${CSS.escape(b)}"]`);if(K0)K0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",F),()=>window.removeEventListener("workspace-reveal-path",F)},[]),p(()=>{h_.current=i},[i]),p(()=>{M_.current=j0},[j0]),p(()=>{x1.current=U},[U]),p(()=>{k_.current=k},[k]),p(()=>{H4.current=A},[A]),p(()=>{if(typeof window>"u"||typeof document>"u")return;let F=()=>n0(M9());F();let I=window.matchMedia?.("(prefers-color-scheme: dark)"),b=()=>F();if(I?.addEventListener)I.addEventListener("change",b);else if(I?.addListener)I.addListener(b);let v=typeof MutationObserver<"u"?new MutationObserver(()=>F()):null;if(v?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)v?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(I?.removeEventListener)I.removeEventListener("change",b);else if(I?.removeListener)I.removeListener(b);v?.disconnect()}},[]),p(()=>{if(!k)return;let F=v1.current;if(!F)return;let I=requestAnimationFrame(()=>{try{F.focus(),F.select()}catch{}});return()=>cancelAnimationFrame(I)},[k]),p(()=>{if(!C0)return;let F=(b)=>{let v=b?.target;if(!(v instanceof Element))return;if(m.current?.contains(v))return;if(G0.current?.contains(v))return;E0(!1)},I=(b)=>{if(b?.key==="Escape")E0(!1),G0.current?.focus?.()};return document.addEventListener("mousedown",F),document.addEventListener("touchstart",F,{passive:!0}),document.addEventListener("keydown",I),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("touchstart",F),document.removeEventListener("keydown",I)}},[C0]);let O4=async(F,I={})=>{let b=Boolean(I?.autoOpen),v=String(F||"").trim();w(!0),C(null),l(null);try{let d=await k8(v,20000);if(b&&v&&E9(v,d,{resolvePane:(K0)=>g0.resolve(K0)}))return Z1.current?.(v,d),d;return C(d),d}catch(d){let K0={error:d.message||"Failed to load preview"};return C(K0),K0}finally{w(!1)}};X1.current=O4;let __=async()=>{if(!F0.current)return;try{let F=await T$("",1,A0.current),I=A9(F.root,q0.current,A0.current);if(I===T0.current){Z0(!1);return}if(T0.current=I,r0.current=F.root,!h0.current)h0.current=requestAnimationFrame(()=>{h0.current=0,q((b)=>c6(b,r0.current)),Z0(!1)})}catch(F){S(F.message||"Failed to load workspace"),Z0(!1)}},p_=async(F)=>{if(!F)return;if(z1.current.has(F))return;z1.current.add(F);try{let I=await T$(F,1,A0.current);q((b)=>h6(b,F,I.root))}catch(I){S(I.message||"Failed to load workspace")}finally{z1.current.delete(F)}};a0.current=p_;let Q1=x(()=>{let F=U;if(!F)return".";let I=u0.current?.get(F);if(I&&I.type==="dir")return I.path;if(F==="."||!F.includes("/"))return".";let b=F.split("/");return b.pop(),b.join("/")||"."},[U]),Z4=x((F)=>{let I=F?.closest?.(".workspace-row");if(!I)return null;let b=I.dataset.path,v=I.dataset.type;if(!b)return null;if(v==="dir")return b;if(b.includes("/")){let d=b.split("/");return d.pop(),d.join("/")||"."}return"."},[]),W_=x((F)=>{return Z4(F?.target||null)},[Z4]),p0=x((F)=>{l1.current=F,z0(F)},[]),H1=x(()=>{let F=F1.current;if(F?.timer)clearTimeout(F.timer);F1.current={path:null,timer:0}},[]),x0=x((F)=>{if(!F||F==="."){H1();return}let I=u0.current?.get(F);if(!I||I.type!=="dir"){H1();return}if(q0.current?.has(F)){H1();return}if(F1.current?.path===F)return;H1();let b=setTimeout(()=>{F1.current={path:null,timer:0},a0.current?.(F),V((v)=>{let d=new Set(v);return d.add(F),d})},600);F1.current={path:F,timer:b}},[H1]),w1=x((F,I)=>{if(_1.current={x:F,y:I},S1.current)return;S1.current=requestAnimationFrame(()=>{S1.current=0;let b=e1.current;if(!b)return;let v=_1.current;b.style.transform=`translate(${v.x+12}px, ${v.y+12}px)`})},[]),Z_=x((F)=>{if(!F)return;let b=(u0.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!b)return;X0({path:F,label:b})},[]),R1=x(()=>{if(X0(null),S1.current)cancelAnimationFrame(S1.current),S1.current=0;if(e1.current)e1.current.style.transform="translate(-9999px, -9999px)"},[]),f4=x((F)=>{if(!F)return".";let I=u0.current?.get(F);if(I&&I.type==="dir")return I.path;if(F==="."||!F.includes("/"))return".";let b=F.split("/");return b.pop(),b.join("/")||"."},[]),Y_=x(()=>{T(null),J("")},[]),J4=x((F)=>{if(!F)return;let b=(u0.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!b||F===".")return;T(F),J(b)},[]),o$=x(async()=>{let F=k_.current;if(!F)return;let I=(E||"").trim();if(!I){Y_();return}let b=u0.current?.get(F),v=(b?.name||F.split("/").pop()||F).trim();if(I===v){Y_();return}try{let K0=(await C8(F,I))?.path||F,V0=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(Y_(),S(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:F,newPath:K0,type:b?.type||"file"}})),b?.type==="dir")V((L0)=>{let N0=new Set;for(let k0 of L0)if(k0===F)N0.add(K0);else if(k0.startsWith(`${F}/`))N0.add(`${K0}${k0.slice(F.length)}`);else N0.add(k0);return N0});if(D(K0),b?.type==="dir")C(null),w(!1),l(null);else X1.current?.(K0);a0.current?.(V0)}catch(d){S(d?.message||"Failed to rename file")}},[Y_,E]),s4=x(async(F)=>{let v=F||".";for(let d=0;d<50;d+=1){let V0=`untitled${d===0?"":`-${d}`}.md`;try{let N0=(await P8(v,V0,""))?.path||(v==="."?V0:`${v}/${V0}`);if(v&&v!==".")V((k0)=>new Set([...k0,v]));D(N0),S(null),a0.current?.(v),X1.current?.(N0);return}catch(L0){if(L0?.status===409||L0?.code==="file_exists")continue;S(L0?.message||"Failed to create file");return}}S("Failed to create file (untitled name already in use).")},[]),Y4=x((F)=>{if(F?.stopPropagation?.(),O0)return;let I=f4(x1.current);s4(I)},[O0,f4,s4]);p(()=>{if(typeof window>"u")return;let F=(I)=>{let b=I?.detail?.updates||[];if(!Array.isArray(b)||b.length===0)return;q((L0)=>{let N0=L0;for(let k0 of b){if(!k0?.root)continue;if(!N0||k0.path==="."||!k0.path)N0=k0.root;else N0=h6(N0,k0.path,k0.root)}if(N0)T0.current=A9(N0,q0.current,A0.current);return Z0(!1),N0});let v=x1.current;if(Boolean(v)&&b.some((L0)=>{let N0=L0?.path||"";if(!N0||N0===".")return!0;return v===N0||v.startsWith(`${N0}/`)||N0.startsWith(`${v}/`)}))D1.current.clear();if(!v||!H4.current)return;let K0=u0.current?.get(v);if(K0&&K0.type==="dir")return;if(b.some((L0)=>{let N0=L0?.path||"";if(!N0||N0===".")return!0;return v===N0||v.startsWith(`${N0}/`)}))X1.current?.(v)};return window.addEventListener("workspace-update",F),()=>window.removeEventListener("workspace-update",F)},[]),A1.current=__;let K4=y(()=>{if(typeof window>"u")return;let F=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),I=t0.current??F0.current,b=document.visibilityState!=="hidden"&&(I||F.matches&&F0.current);y$(b,A0.current).catch(()=>{})}).current,L_=y(0),r4=y(()=>{if(L_.current)clearTimeout(L_.current);L_.current=setTimeout(()=>{L_.current=0,K4()},250)}).current;p(()=>{if(F0.current)A1.current?.();r4()},[$,j]),p(()=>{A1.current(),K4();let F=setInterval(()=>A1.current(),aK),I=Q$("previewHeight",null),b=Number.isFinite(I)?Math.min(Math.max(I,80),600):280;if(y0.current=b,y1.current)y1.current.style.setProperty("--preview-height",`${b}px`);let v=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),d=()=>r4();if(v.addEventListener)v.addEventListener("change",d);else if(v.addListener)v.addListener(d);return document.addEventListener("visibilitychange",d),()=>{if(clearInterval(F),h0.current)cancelAnimationFrame(h0.current),h0.current=0;if(v.removeEventListener)v.removeEventListener("change",d);else if(v.removeListener)v.removeListener(d);if(document.removeEventListener("visibilitychange",d),L_.current)clearTimeout(L_.current),L_.current=0;if(m0.current)clearTimeout(m0.current),m0.current=null;y$(!1,A0.current).catch(()=>{})}},[]);let P_=M0(()=>P9(X,W,h),[X,W,h]),$_=M0(()=>new Map(P_.map((F)=>[F.node.path,F.node])),[P_]),D4=M0(()=>D9(S0),[S0]);u0.current=$_;let w0=(U?u0.current.get(U):null)?.type==="dir";p(()=>{if(!U||!w0){D0(null),R0.current=null,v0.current=null;return}let F=U,I=`${h?"hidden":"visible"}:${U}`,b=D1.current,v=b.get(I);if(v?.root){b.delete(I),b.set(I,v);let V0=k9(v.root,Boolean(v.truncated),i0);if(V0)R0.current=V0,v0.current=U,D0({loading:!1,error:null,payload:V0});return}let d=R0.current,K0=v0.current;D0({loading:!0,error:null,payload:K0===U?d:null}),T$(U,eK,h).then((V0)=>{if(x1.current!==F)return;let L0={root:V0?.root,truncated:Boolean(V0?.truncated)};b.delete(I),b.set(I,L0);while(b.size>_Q){let k0=b.keys().next().value;if(!k0)break;b.delete(k0)}let N0=k9(L0.root,L0.truncated,i0);R0.current=N0,v0.current=U,D0({loading:!1,error:null,payload:N0})}).catch((V0)=>{if(x1.current!==F)return;D0({loading:!1,error:V0?.message||"Failed to load folder size chart",payload:K0===U?d:null})})},[U,w0,h,i0]);let C1=Boolean(A&&A.kind==="text"&&!w0&&(!A.size||A.size<=262144)),c_=C1?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",U_=Boolean(U&&U!=="."),l_=Boolean(U&&!w0),i_=Boolean(U&&!w0),z_=U&&w0?W5(U,h):null,O1=x(()=>E0(!1),[]),Y1=x(async(F)=>{O1();try{await F?.()}catch{}},[O1]);p(()=>{let F=e0.current;if(d1.current)d1.current.dispose(),d1.current=null;if(!F)return;if(F.innerHTML="",!U||w0||!A||A.error)return;let I={path:U,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},b=g0.resolve(I)||g0.get("workspace-preview-default");if(!b)return;let v=b.mount(F,I);return d1.current=v,()=>{if(d1.current===v)v.dispose(),d1.current=null;F.innerHTML=""}},[U,w0,A]);let b1=(F)=>{let I=F?.target;if(I instanceof Element)return I;return I?.parentElement||null},n_=(F)=>{return Boolean(F?.closest?.(".workspace-node-icon, .workspace-label-text"))},E4=y((F)=>{let I=b1(F),b=I?.closest?.("[data-path]");if(!b)return;let v=b.dataset.path;if(!v||v===".")return;let d=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),K0=Boolean(I?.closest?.(".workspace-caret"));if(d||K0)return;if(k_.current===v)return;J4(v)}).current,v4=y((F)=>{if(J1.current){J1.current=!1;return}let I=b1(F),b=I?.closest?.("[data-path]");if(K1.current?.focus?.(),!b)return;let v=b.dataset.path,d=b.dataset.type,K0=Boolean(I?.closest?.(".workspace-caret")),V0=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),L0=x1.current===v,N0=k_.current;if(N0){if(N0===v)return;Y_()}let k0=d==="file"&&I_.current===v&&!K0&&!V0;if(d==="dir"){if(I_.current=null,D(v),C(null),l(null),w(!1),!q0.current.has(v))a0.current?.(v);if(L0&&!K0)return;V((q_)=>{let L=new Set(q_);if(L.has(v))L.delete(v);else L.add(v);return L})}else{I_.current=null,D(v);let W0=u0.current.get(v);if(W0)d0.current?.(W0.path,W0);if(!V0&&!K0&&tK(v))Z1.current?.(v,H4.current);else{let L=!V0&&!K0;X1.current?.(v,{autoOpen:L})}}}).current,u1=y(()=>{T0.current="",A1.current(),Array.from(q0.current||[]).filter((I)=>I&&I!==".").forEach((I)=>a0.current?.(I))}).current,C_=y(()=>{I_.current=null,D(null),C(null),l(null),w(!1)}).current,q4=y(()=>{e((F)=>{let I=!F;if(typeof window<"u")G1("workspaceShowHidden",String(I));return A0.current=I,y$(!0,I).catch(()=>{}),T0.current="",A1.current?.(),Array.from(q0.current||[]).filter((v)=>v&&v!==".").forEach((v)=>a0.current?.(v)),I})}).current,a4=y((F)=>{if(b1(F)?.closest?.("[data-path]"))return;C_()}).current,s1=x(async(F)=>{if(!F)return;let I=F.split("/").pop()||F;if(!window.confirm(`Delete "${I}"? This cannot be undone.`))return;try{await y8(F);let v=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(x1.current===F)C_();a0.current?.(v),S(null)}catch(v){C((d)=>({...d||{},error:v.message||"Failed to delete file"}))}},[C_]),K_=x((F)=>{let I=K1.current;if(!I||!F||typeof CSS>"u"||typeof CSS.escape!=="function")return;I.querySelector(`[data-path="${CSS.escape(F)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),d_=x((F)=>{let I=P_;if(!I||I.length===0)return;let b=U?I.findIndex((v)=>v.node.path===U):-1;if(F.key==="ArrowDown"){F.preventDefault();let v=Math.min(b+1,I.length-1),d=I[v];if(!d)return;if(D(d.node.path),d.node.type!=="dir")d0.current?.(d.node.path,d.node),X1.current?.(d.node.path);else C(null),w(!1),l(null);K_(d.node.path);return}if(F.key==="ArrowUp"){F.preventDefault();let v=b<=0?0:b-1,d=I[v];if(!d)return;if(D(d.node.path),d.node.type!=="dir")d0.current?.(d.node.path,d.node),X1.current?.(d.node.path);else C(null),w(!1),l(null);K_(d.node.path);return}if(F.key==="ArrowRight"&&b>=0){let v=I[b];if(v?.node?.type==="dir"&&!W.has(v.node.path))F.preventDefault(),a0.current?.(v.node.path),V((d)=>new Set([...d,v.node.path]));return}if(F.key==="ArrowLeft"&&b>=0){let v=I[b];if(v?.node?.type==="dir"&&W.has(v.node.path))F.preventDefault(),V((d)=>{let K0=new Set(d);return K0.delete(v.node.path),K0});return}if(F.key==="Enter"&&b>=0){F.preventDefault();let v=I[b];if(!v)return;let d=v.node.path;if(v.node.type==="dir"){if(!q0.current.has(d))a0.current?.(d);V((V0)=>{let L0=new Set(V0);if(L0.has(d))L0.delete(d);else L0.add(d);return L0}),C(null),l(null),w(!1)}else d0.current?.(d,v.node),X1.current?.(d);return}if((F.key==="Delete"||F.key==="Backspace")&&b>=0){let v=I[b];if(!v||v.node.type==="dir")return;F.preventDefault(),s1(v.node.path);return}if(F.key==="Escape")F.preventDefault(),C_()},[C_,s1,W,P_,K_,U]),t4=x((F)=>{let I=b1(F),b=I?.closest?.(".workspace-row");if(!b)return;let v=b.dataset.type,d=b.dataset.path;if(!d||d===".")return;if(k_.current===d)return;let K0=F?.touches?.[0];if(!K0)return;if(a1.current={path:n_(I)?d:null,dragging:!1,startX:K0.clientX,startY:K0.clientY},v!=="file")return;if(m0.current)clearTimeout(m0.current);m0.current=setTimeout(()=>{if(m0.current=null,a1.current?.dragging)return;s1(d)},600)},[s1]),b4=x(()=>{if(m0.current)clearTimeout(m0.current),m0.current=null;let F=a1.current;if(F?.dragging&&F.path){let I=l1.current||Q1(),b=o1.current;if(typeof b==="function")b(F.path,I)}a1.current={path:null,dragging:!1,startX:0,startY:0},t1.current=0,$0(!1),Y0(null),p0(null),H1(),R1()},[Q1,R1,p0,H1]),o_=x((F)=>{let I=a1.current,b=F?.touches?.[0];if(!b||!I?.path){if(m0.current)clearTimeout(m0.current),m0.current=null;return}let v=Math.abs(b.clientX-I.startX),d=Math.abs(b.clientY-I.startY),K0=v>8||d>8;if(K0&&m0.current)clearTimeout(m0.current),m0.current=null;if(!I.dragging&&K0)I.dragging=!0,$0(!0),Y0("move"),Z_(I.path);if(I.dragging){F.preventDefault(),w1(b.clientX,b.clientY);let V0=document.elementFromPoint(b.clientX,b.clientY),L0=Z4(V0)||Q1();if(l1.current!==L0)p0(L0);x0(L0)}},[Z4,Q1,Z_,w1,p0,x0]),T_=y((F)=>{F.preventDefault();let I=y1.current;if(!I)return;let b=F.clientY,v=y0.current||280,d=F.currentTarget;d.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let K0=b,V0=(N0)=>{K0=N0.clientY;let k0=I.clientHeight-80,W0=Math.min(Math.max(v-(N0.clientY-b),80),k0);I.style.setProperty("--preview-height",`${W0}px`),y0.current=W0},L0=()=>{let N0=I.clientHeight-80,k0=Math.min(Math.max(v-(K0-b),80),N0);y0.current=k0,d.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("previewHeight",String(Math.round(k0))),document.removeEventListener("mousemove",V0),document.removeEventListener("mouseup",L0)};document.addEventListener("mousemove",V0),document.addEventListener("mouseup",L0)}).current,m1=y((F)=>{F.preventDefault();let I=y1.current;if(!I)return;let b=F.touches[0];if(!b)return;let v=b.clientY,d=y0.current||280,K0=F.currentTarget;K0.classList.add("dragging"),document.body.style.userSelect="none";let V0=(N0)=>{let k0=N0.touches[0];if(!k0)return;N0.preventDefault();let W0=I.clientHeight-80,q_=Math.min(Math.max(d-(k0.clientY-v),80),W0);I.style.setProperty("--preview-height",`${q_}px`),y0.current=q_},L0=()=>{K0.classList.remove("dragging"),document.body.style.userSelect="",G1("previewHeight",String(Math.round(y0.current||d))),document.removeEventListener("touchmove",V0),document.removeEventListener("touchend",L0),document.removeEventListener("touchcancel",L0)};document.addEventListener("touchmove",V0,{passive:!1}),document.addEventListener("touchend",L0),document.addEventListener("touchcancel",L0)}).current,s_=async()=>{if(!U)return;try{let F=await I8(U);if(F.media_id)l(F.media_id)}catch(F){C((I)=>({...I||{},error:F.message||"Failed to attach"}))}},y_=async()=>{if(!U||w0)return;await s1(U)},S_=(F)=>{return Array.from(F?.dataTransfer?.types||[]).includes("Files")},A4=x((F)=>{if(!S_(F))return;if(F.preventDefault(),t1.current+=1,!h_.current)$0(!0);Y0("upload");let I=W_(F)||Q1();p0(I),x0(I)},[Q1,W_,p0,x0]),M4=x((F)=>{if(!S_(F))return;if(F.preventDefault(),F.dataTransfer)F.dataTransfer.dropEffect="copy";if(!h_.current)$0(!0);if(M_.current!=="upload")Y0("upload");let I=W_(F)||Q1();if(l1.current!==I)p0(I);x0(I)},[Q1,W_,p0,x0]),e4=x((F)=>{if(!S_(F))return;if(F.preventDefault(),t1.current=Math.max(0,t1.current-1),t1.current===0)$0(!1),Y0(null),p0(null),H1()},[p0,H1]),M1=x(async(F,I=".")=>{let b=Array.from(F||[]);if(b.length===0)return;let v=I&&I!==""?I:".",d=v!=="."?v:"workspace root";l0(!0);try{let K0=null;for(let V0 of b)try{K0=await B5(V0,v)}catch(L0){let N0=L0?.status,k0=L0?.code;if(N0===409||k0==="file_exists"){let W0=V0?.name||"file";if(!window.confirm(`"${W0}" already exists in ${d}. Overwrite?`))continue;K0=await B5(V0,v,{overwrite:!0})}else throw L0}if(K0?.path)I_.current=K0.path,D(K0.path),X1.current?.(K0.path);a0.current?.(v)}catch(K0){S(K0.message||"Failed to upload file")}finally{l0(!1)}},[]),r_=x(async(F,I)=>{if(!F)return;let b=u0.current?.get(F);if(!b)return;let v=I&&I!==""?I:".",d=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(v===d)return;try{let V0=(await T8(F,v))?.path||F;if(b.type==="dir")V((L0)=>{let N0=new Set;for(let k0 of L0)if(k0===F)N0.add(V0);else if(k0.startsWith(`${F}/`))N0.add(`${V0}${k0.slice(F.length)}`);else N0.add(k0);return N0});if(D(V0),b.type==="dir")C(null),w(!1),l(null);else X1.current?.(V0);a0.current?.(d),a0.current?.(v)}catch(K0){S(K0?.message||"Failed to move entry")}},[]);o1.current=r_;let W1=x(async(F)=>{if(!S_(F))return;F.preventDefault(),t1.current=0,$0(!1),Y0(null),z0(null),H1();let I=Array.from(F?.dataTransfer?.files||[]);if(I.length===0)return;let b=l1.current||W_(F)||Q1();await M1(I,b)},[Q1,W_,M1]),k4=x((F)=>{if(F?.stopPropagation?.(),O0)return;let I=F?.currentTarget?.dataset?.uploadTarget||".";c1.current=I,B1.current?.click()},[O0]),x_=x(()=>{if(O0)return;let F=x1.current,I=F?u0.current?.get(F):null;c1.current=I?.type==="dir"?I.path:".",B1.current?.click()},[O0]),G4=x(()=>{Y1(()=>Y4(null))},[Y1,Y4]),w_=x(()=>{Y1(()=>x_())},[Y1,x_]),F_=x(()=>{Y1(()=>u1())},[Y1,u1]),Q_=x(()=>{Y1(()=>q4())},[Y1,q4]),X4=x(()=>{if(!U||!C1)return;Y1(()=>Z1.current?.(U,A))},[Y1,U,C1,A]),u4=x(()=>{if(!U||U===".")return;Y1(()=>J4(U))},[Y1,U,J4]),a_=x(()=>{if(!U||w0)return;Y1(()=>y_())},[Y1,U,w0,y_]),I4=x(()=>{if(!U||w0)return;Y1(()=>s_())},[Y1,U,w0,s_]),P4=x(()=>{if(!z_)return;if(O1(),typeof window<"u")window.open(z_,"_blank","noopener")},[O1,z_]),R_=x(()=>{O1(),Z?.()},[O1,Z]),m4=x(()=>{O1(),Y?.()},[O1,Y]),f_=x(()=>{O1(),K?.()},[O1,K]),C4=x((F)=>{if(!F||F.button!==0)return;let I=F.currentTarget;if(!I||!I.dataset)return;let b=I.dataset.path;if(!b||b===".")return;if(k_.current===b)return;let v=b1(F);if(v?.closest?.("button, a, input, .workspace-caret"))return;if(!n_(v))return;F.preventDefault(),V1.current={path:b,dragging:!1,startX:F.clientX,startY:F.clientY};let d=(V0)=>{let L0=V1.current;if(!L0?.path)return;let N0=Math.abs(V0.clientX-L0.startX),k0=Math.abs(V0.clientY-L0.startY),W0=N0>4||k0>4;if(!L0.dragging&&W0)L0.dragging=!0,J1.current=!0,$0(!0),Y0("move"),Z_(L0.path),w1(V0.clientX,V0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(L0.dragging){V0.preventDefault(),w1(V0.clientX,V0.clientY);let q_=document.elementFromPoint(V0.clientX,V0.clientY),L=Z4(q_)||Q1();if(l1.current!==L)p0(L);x0(L)}},K0=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",K0);let V0=V1.current;if(V0?.dragging&&V0.path){let L0=l1.current||Q1(),N0=o1.current;if(typeof N0==="function")N0(V0.path,L0)}V1.current={path:null,dragging:!1,startX:0,startY:0},t1.current=0,$0(!1),Y0(null),p0(null),H1(),R1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{J1.current=!1},0)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",K0)},[Z4,Q1,Z_,w1,R1,p0,x0,H1]),t_=x(async(F)=>{let I=Array.from(F?.target?.files||[]);if(I.length===0)return;let b=c1.current||".";if(await M1(I,b),c1.current=".",F?.target)F.target.value=""},[M1]);return z`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${S0}
            ref=${y1}
            onDragEnter=${A4}
            onDragOver=${M4}
            onDragLeave=${e4}
            onDrop=${W1}
        >
            <input type="file" multiple style="display:none" ref=${B1} onChange=${t_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${G0}
                            class=${`workspace-menu-button${C0?" active":""}`}
                            onClick=${(F)=>{F.stopPropagation(),E0((I)=>!I)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${C0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${C0&&z`
                            <div class="workspace-menu-dropdown" ref=${m} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${G4} disabled=${O0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${w_} disabled=${O0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${F_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${h?" active":""}`} role="menuitem" onClick=${Q_}>
                                    ${h?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&z`<div class="workspace-menu-separator"></div>`}
                                ${U&&!w0&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X4} disabled=${!C1}>Open in editor</button>
                                `}
                                ${U_&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${u4}>Rename selected</button>
                                `}
                                ${i_&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I4}>Download selected file</button>
                                `}
                                ${z_&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P4}>Download selected folder (zip)</button>
                                `}
                                ${l_&&z`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${a_}>Delete selected file</button>
                                `}

                                ${(Z||Y||K)&&z`<div class="workspace-menu-separator"></div>`}
                                ${Z&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${R_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${K&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${f_}>
                                        ${Q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${Y4} title="New file" disabled=${O0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${u1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${a4}>
                ${O0&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${t&&z`<div class="workspace-loading">Loading…</div>`}
                ${H&&z`<div class="workspace-error">${H}</div>`}
                ${X&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${K1}
                        tabIndex="0"
                        onClick=${v4}
                        onDblClick=${E4}
                        onKeyDown=${d_}
                        onTouchStart=${t4}
                        onTouchEnd=${b4}
                        onTouchMove=${o_}
                        onTouchCancel=${b4}
                    >
                        ${P_.map(({node:F,depth:I})=>{let b=F.type==="dir",v=F.path===U,d=F.path===k,K0=b&&W.has(F.path),V0=U0&&F.path===U0,L0=Array.isArray(F.children)&&F.children.length>0?F.children.length:Number(F.child_count)||0;return z`
                                <div
                                    key=${F.path}
                                    class=${`workspace-row${v?" selected":""}${V0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+I*D4.indentPx}px`}}
                                    data-path=${F.path}
                                    data-type=${F.type}
                                    onMouseDown=${C4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${b?K0?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${b?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${b?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${d?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${v1}
                                                value=${E}
                                                onInput=${(N0)=>J(N0?.target?.value||"")}
                                                onKeyDown=${(N0)=>{if(N0.key==="Enter")N0.preventDefault(),o$();else if(N0.key==="Escape")N0.preventDefault(),Y_()}}
                                                onBlur=${Y_}
                                                onClick=${(N0)=>N0.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${F.name}</span></span>`}
                                    ${b&&!K0&&L0>0&&z`
                                        <span class="workspace-count">${L0}</span>
                                    `}
                                    ${b&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${F.path}
                                            title="Upload files to this folder"
                                            onClick=${k4}
                                            disabled=${O0}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${U&&z`
                <div class="workspace-preview-splitter-h" onMouseDown=${T_} onTouchStart=${m1}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${Y4} title="New file" disabled=${O0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!w0&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>C1&&Z1.current?.(U,A)}
                                    title=${c_}
                                    disabled=${!C1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${y_}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${w0?z`
                                    <button class="workspace-download" onClick=${x_}
                                        title="Upload files to this folder" disabled=${O0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${W5(U,h)}
                                        title="Download folder as zip" onClick=${(F)=>F.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${s_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${f&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&z`<div class="workspace-error">${A.error}</div>`}
                    ${w0&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${P0?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${P0?.error&&z`<div class="workspace-error">${P0.error}</div>`}
                        ${P0?.payload&&P0.payload.segments?.length>0&&z`
                            <${$Q} payload=${P0.payload} />
                        `}
                        ${P0?.payload&&(!P0.payload.segments||P0.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!w0&&z`
                        <div class="workspace-preview-body" ref=${e0}></div>
                    `}
                    ${n&&z`
                        <div class="workspace-download-card">
                            <${jQ} mediaId=${n} />
                        </div>
                    `}
                </div>
            `}
            ${Q0&&z`
                <div class="workspace-drag-ghost" ref=${e1}>${Q0.label}</div>
            `}
        </aside>
    `}var NQ=new Set(["kanban-editor","mindmap-editor"]);function ZQ(_,$,j){let N=String(_||"").trim();if(!N)return null;if($)return $;if(typeof j!=="function")return null;return j({path:N,mode:"edit"})?.id||null}function v9(_,$,j){let N=ZQ(_,$,j);return NQ.has(N)}var YQ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,KQ=/\.(csv|tsv)$/i,QQ=/\.pdf$/i,qQ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,b9=/\.drawio(\.xml|\.svg|\.png)?$/i;function u9({tabs:_,activeId:$,onActivate:j,onClose:N,onCloseOthers:Z,onCloseAll:Y,onTogglePin:K,onTogglePreview:Q,onEditSource:X,previewTabs:q,paneOverrides:W,onToggleDock:V,dockVisible:U,onToggleZen:D,zenMode:k,onPopOutTab:T}){let[E,J]=c(null),A=y(null);p(()=>{if(!E)return;let H=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[E]),p(()=>{let H=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let h=_.findIndex((e)=>e.id===$);if(S.shiftKey){let e=_[(h-1+_.length)%_.length];j?.(e.id)}else{let e=_[(h+1)%_.length];j?.(e.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let h=document.querySelector(".editor-pane");if(h&&h.contains(document.activeElement)){if(S.preventDefault(),$)N?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,N]);let C=x((H,S)=>{if(H.button===1){H.preventDefault(),N?.(S);return}if(H.button===0)j?.(S)},[j,N]),n=x((H,S)=>{H.preventDefault(),J({id:S,x:H.clientX,y:H.clientY})},[]),l=x((H)=>{H.preventDefault(),H.stopPropagation()},[]),t=x((H,S)=>{H.preventDefault(),H.stopPropagation(),N?.(S)},[N]);p(()=>{if(!$||!A.current)return;let H=A.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let Z0=x((H)=>{if(!(W instanceof Map))return null;return W.get(H)||null},[W]),f=M0(()=>_.find((H)=>H.id===E?.id)||null,[E?.id,_]),w=M0(()=>{let H=E?.id;if(!H)return!1;return v9(H,Z0(H),(S)=>g0.resolve(S))},[E?.id,Z0]);if(!_.length)return null;return z`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((H)=>z`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(S)=>C(S,H.id)}
                    onContextMenu=${(S)=>n(S,H.id)}
                >
                    ${H.pinned&&z`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${H.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${l}
                        onClick=${(S)=>t(S,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&z`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${V}
                    title=${`${U?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${U?"Hide":"Show"} terminal`}
                    aria-pressed=${U?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${D&&z`
                <button
                    class=${`tab-strip-zen-toggle${k?" active":""}`}
                    onClick=${D}
                    title=${`${k?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${k?"Exit":"Enter"} zen mode`}
                    aria-pressed=${k?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${k?z`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:z`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${E&&z`
            <div class="tab-context-menu" style=${{left:E.x+"px",top:E.y+"px"}}>
                <button onClick=${()=>{N?.(E.id),J(null)}}>Close</button>
                <button onClick=${()=>{Z?.(E.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(E.id),J(null)}}>
                    ${f?.pinned?"Unpin":"Pin"}
                </button>
                ${w&&X&&z`
                    <button onClick=${()=>{X(E.id),J(null)}}>Edit Source</button>
                `}
                ${T&&z`
                    <button onClick=${()=>{let H=_.find((S)=>S.id===E.id);T(E.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${Q&&/\.(md|mdx|markdown)$/i.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{Q(E.id),J(null)}}>
                        ${q?.has(E.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${YQ.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(E.id),S=E.id.split("/").pop()||"document",h="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(S);window.open(h,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${KQ.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${QQ.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${qQ.test(E.id)&&!b9.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${b9.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var GQ=400,i6=60,m9=220,n6="mdPreviewHeight";function XQ(){try{let _=localStorage.getItem(n6),$=_?Number(_):NaN;return Number.isFinite($)&&$>=i6?$:m9}catch{return m9}}function d6({getContent:_,path:$,onClose:j}){let[N,Z]=c(""),[Y,K]=c(XQ),Q=y(null),X=y(null),q=y(""),W=y(_);return W.current=_,p(()=>{let D=()=>{let T=W.current?.()||"";if(T===q.current)return;q.current=T;try{let E=B_(T,null,{sanitize:!1});Z(E)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};D();let k=setInterval(D,GQ);return()=>clearInterval(k)},[]),p(()=>{if(Q.current&&N)W4(Q.current).catch(()=>{})},[N]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(D)=>{D.preventDefault();let k=D.clientY,T=X.current?.offsetHeight||Y,E=X.current?.parentElement,J=E?E.offsetHeight*0.7:500,A=D.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let C=(l)=>{let t=Math.min(Math.max(T-(l.clientY-k),i6),J);K(t)},n=()=>{A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(n6,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",n)}}
            onTouchStart=${(D)=>{D.preventDefault();let k=D.touches[0];if(!k)return;let T=k.clientY,E=X.current?.offsetHeight||Y,J=X.current?.parentElement,A=J?J.offsetHeight*0.7:500,C=D.currentTarget;C.classList.add("dragging"),document.body.style.userSelect="none";let n=(t)=>{let Z0=t.touches[0];if(!Z0)return;t.preventDefault();let f=Math.min(Math.max(E-(Z0.clientY-T),i6),A);K(f)},l=()=>{C.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(n6,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",n),document.removeEventListener("touchend",l),document.removeEventListener("touchcancel",l)};document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l)}}
        ></div>
        <div class="md-preview-panel" ref=${X} style=${{height:Y+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${Q}
                dangerouslySetInnerHTML=${{__html:N}}
            />
        </div>
    `}function g9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:N,chatJid:Z}){let Y=y(_);Y.current=_;let K=y($);K.current=$;let Q=y(j);Q.current=j;let X=y(N);X.current=N,p(()=>{Q.current();let q=new L5((V,U)=>Y.current(V,U),(V)=>K.current(V),{chatJid:Z});q.connect();let W=()=>{q.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",W),document.addEventListener("visibilitychange",W),()=>{window.removeEventListener("focus",W),document.removeEventListener("visibilitychange",W),q.disconnect()}},[Z])}function h9(){let[_,$]=c(!1),[j,N]=c("default"),Z=y(!1);p(()=>{let X=K$("notificationsEnabled",!1);if(Z.current=X,$(X),typeof Notification<"u")N(Notification.permission)},[]),p(()=>{Z.current=_},[_]);let Y=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),K=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){N("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await Y();if(N(q||"default"),q!=="granted"){Z.current=!1,$(!1),G1("notificationsEnabled","false");return}}let X=!Z.current;Z.current=X,$(X),G1("notificationsEnabled",String(X))},[Y]),Q=x((X,q)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let W=new Notification(X,{body:q});return W.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:Q}}var d$=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function p9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[N,Z]=c(null),[Y,K]=c(!1),Q=y(!1),X=y(null),q=y(!1),W=y(null),V=y(null),U=y(0);p(()=>{Q.current=Y},[Y]),p(()=>{V.current=N},[N]),p(()=>{U.current+=1,W.current=null,q.current=!1,Q.current=!1,K(!1)},[j]);let D=x(async(E=null)=>{let J=U.current;try{if(E){let A=await B8(E,50,0,j);if(J!==U.current)return;Z(A.posts),K(!1)}else{let A=await p4(10,null,j);if(J!==U.current)return;Z(A.posts),K(A.has_more)}}catch(A){if(J!==U.current)return;console.error("Failed to load posts:",A)}},[j]),k=x(async()=>{let E=U.current;try{let J=await p4(10,null,j);if(E!==U.current)return;Z((A)=>{if(!A||A.length===0)return J.posts;return d$([...J.posts,...A])}),K((A)=>A||J.has_more)}catch(J){if(E!==U.current)return;console.error("Failed to refresh timeline:",J)}},[j]),T=x(async(E={})=>{let J=U.current,A=V.current;if(!A||A.length===0)return;if(q.current)return;let{preserveScroll:C=!0,preserveMode:n="top",allowRepeat:l=!1}=E,t=(w)=>{if(!C){w();return}if(n==="top")$(w);else _(w)},f=A.slice().sort((w,H)=>w.id-H.id)[0]?.id;if(!Number.isFinite(f))return;if(!l&&W.current===f)return;q.current=!0,W.current=f;try{let w=await p4(10,f,j);if(J!==U.current)return;if(w.posts.length>0)t(()=>{Z((H)=>d$([...w.posts,...H||[]])),K(w.has_more)});else K(!1)}catch(w){if(J!==U.current)return;console.error("Failed to load more posts:",w)}finally{if(J===U.current)q.current=!1}},[j,_,$]);return p(()=>{X.current=T},[T]),{posts:N,setPosts:Z,hasMore:Y,setHasMore:K,hasMoreRef:Q,loadPosts:D,refreshTimeline:k,loadMore:T,loadMoreRef:X,loadingMoreRef:q,lastBeforeIdRef:W}}function c9(){let[_,$]=c(null),[j,N]=c({text:"",totalLines:0}),[Z,Y]=c(""),[K,Q]=c({text:"",totalLines:0}),[X,q]=c(null),[W,V]=c(null),[U,D]=c(null),k=y(null),T=y(0),E=y(!1),J=y(""),A=y(""),C=y(null),n=y(null),l=y(null),t=y(null),Z0=y(!1),f=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:N,agentPlan:Z,setAgentPlan:Y,agentThought:K,setAgentThought:Q,pendingRequest:X,setPendingRequest:q,currentTurnId:W,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:D,lastAgentEventRef:k,lastSilenceNoticeRef:T,isAgentRunningRef:E,draftBufferRef:J,thoughtBufferRef:A,pendingRequestRef:C,stalledPostIdRef:n,currentTurnIdRef:l,steerQueuedTurnIdRef:t,thoughtExpandedRef:Z0,draftExpandedRef:f}}function l9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:N}){let Z=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientX,D=$.current||280,k=W.currentTarget;k.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=U,E=(A)=>{T=A.clientX;let C=Math.min(Math.max(D+(A.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${C}px`),$.current=C},J=()=>{let A=Math.min(Math.max(D+(T-U),160),600);$.current=A,k.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",G1("sidebarWidth",String(Math.round(A))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,Y=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let D=U.clientX,k=$.current||280,T=W.currentTarget;T.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(A)=>{let C=A.touches[0];if(!C)return;A.preventDefault();let n=Math.min(Math.max(k+(C.clientX-D),160),600);V.style.setProperty("--sidebar-width",`${n}px`),$.current=n},J=()=>{T.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",G1("sidebarWidth",String(Math.round($.current||k))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,K=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientX,D=j.current||$.current||280,k=W.currentTarget;k.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=U,E=(A)=>{T=A.clientX;let C=Math.min(Math.max(D+(A.clientX-U),200),800);V.style.setProperty("--editor-width",`${C}px`),j.current=C},J=()=>{let A=Math.min(Math.max(D+(T-U),200),800);j.current=A,k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("editorWidth",String(Math.round(A))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,Q=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let D=U.clientX,k=j.current||$.current||280,T=W.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let E=(A)=>{let C=A.touches[0];if(!C)return;A.preventDefault();let n=Math.min(Math.max(k+(C.clientX-D),200),800);V.style.setProperty("--editor-width",`${n}px`),j.current=n},J=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",G1("editorWidth",String(Math.round(j.current||k))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,X=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientY,D=N?.current||200,k=W.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let T=U,E=(A)=>{T=A.clientY;let C=Math.min(Math.max(D-(A.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${C}px`),N)N.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let A=Math.min(Math.max(D-(T-U),100),window.innerHeight*0.5);if(N)N.current=A;k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("dockHeight",String(Math.round(A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,q=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let D=U.clientY,k=N?.current||200,T=W.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let E=(A)=>{let C=A.touches[0];if(!C)return;A.preventDefault();let n=Math.min(Math.max(k-(C.clientY-D),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${n}px`),N)N.current=n;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",G1("dockHeight",String(Math.round(N?.current||k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:Q,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:q}}function BQ(_,$,j,N){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[K,Q]of _.entries()){let X=K;if(N==="dir"){if(K===$)X=j,Z=!0;else if(K.startsWith(`${$}/`))X=`${j}${K.slice($.length)}`,Z=!0}else if(K===$)X=j,Z=!0;Y.set(X,Q)}return Z?Y:_}function i9({onTabClosed:_}={}){let $=y(_);$.current=_;let[j,N]=c(()=>s0.getTabs()),[Z,Y]=c(()=>s0.getActiveId()),[K,Q]=c(()=>s0.getTabs().length>0);p(()=>{return s0.onChange((f,w)=>{N(f),Y(w),Q(f.length>0)})},[]);let[X,q]=c(()=>new Set),[W,V]=c(()=>new Map),U=x((f)=>{q((w)=>{let H=new Set(w);if(H.has(f))H.delete(f);else H.add(f);return H})},[]),D=x((f)=>{q((w)=>{if(!w.has(f))return w;let H=new Set(w);return H.delete(f),H})},[]),k=x((f)=>{V((w)=>{if(!w.has(f))return w;let H=new Map(w);return H.delete(f),H})},[]),T=x((f,w={})=>{if(!f)return;let H=typeof w?.paneOverrideId==="string"&&w.paneOverrideId.trim()?w.paneOverrideId.trim():null,S={path:f,mode:"edit"};try{if(!(H?g0.get(H):g0.resolve(S))){if(!g0.get("editor")){console.warn(`[openEditor] No pane handler for: ${f}`);return}}}catch(e){console.warn(`[openEditor] paneRegistry.resolve() error for "${f}":`,e)}let h=typeof w?.label==="string"&&w.label.trim()?w.label.trim():void 0;if(s0.open(f,h),H)V((e)=>{if(e.get(f)===H)return e;let i=new Map(e);return i.set(f,H),i})},[]),E=x(()=>{let f=s0.getActiveId();if(f){let w=s0.get(f);if(w?.dirty){if(!window.confirm(`"${w.label}" has unsaved changes. Close anyway?`))return}s0.close(f),D(f),k(f),$.current?.(f)}},[k,D]),J=x((f)=>{let w=s0.get(f);if(w?.dirty){if(!window.confirm(`"${w.label}" has unsaved changes. Close anyway?`))return}s0.close(f),D(f),k(f),$.current?.(f)},[k,D]),A=x((f)=>{s0.activate(f)},[]),C=x((f)=>{let w=s0.getTabs().filter((h)=>h.id!==f&&!h.pinned),H=w.filter((h)=>h.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let S=w.map((h)=>h.id);s0.closeOthers(f),S.forEach((h)=>{D(h),k(h),$.current?.(h)})},[k,D]),n=x(()=>{let f=s0.getTabs().filter((S)=>!S.pinned),w=f.filter((S)=>S.dirty).length;if(w>0){if(!window.confirm(`${w} unsaved tab${w>1?"s":""} will be closed. Continue?`))return}let H=f.map((S)=>S.id);s0.closeAll(),H.forEach((S)=>{D(S),k(S),$.current?.(S)})},[k,D]),l=x((f)=>{s0.togglePin(f)},[]),t=x((f)=>{if(!f)return;V((w)=>{if(w.get(f)==="editor")return w;let H=new Map(w);return H.set(f,"editor"),H}),s0.activate(f)},[]),Z0=x(()=>{let f=s0.getActiveId();if(f)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:f}}))},[]);return p(()=>{let f=(w)=>{let{oldPath:H,newPath:S,type:h}=w.detail||{};if(!H||!S)return;if(h==="dir"){for(let e of s0.getTabs())if(e.path===H||e.path.startsWith(`${H}/`)){let i=`${S}${e.path.slice(H.length)}`;s0.rename(e.id,i)}}else s0.rename(H,S);V((e)=>BQ(e,H,S,h))};return window.addEventListener("workspace-file-renamed",f),()=>window.removeEventListener("workspace-file-renamed",f)},[]),p(()=>{let f=(w)=>{if(s0.hasUnsaved())w.preventDefault(),w.returnValue=""};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:Z,previewTabs:X,tabPaneOverrides:W,openEditor:T,closeEditor:E,handleTabClose:J,handleTabActivate:A,handleTabCloseOthers:C,handleTabCloseAll:n,handleTabTogglePin:l,handleTabTogglePreview:U,handleTabEditSource:t,revealInExplorer:Z0}}function o6(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},N=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[N],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var s6=o6("warning",30000),n9=o6("finalize",120000),r6=o6("refresh",30000),d9=30000;function o9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function s9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function r9(_=30000){let[,$]=c(0);p(()=>{let j=setInterval(()=>$((N)=>N+1),_);return()=>clearInterval(j)},[_])}function a6(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((N,Z)=>N+Math.max(1,Math.ceil(Z.length/$)),0)}function a9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function t6(_){return String(_||"").trim()||"web:default"}function t9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function e9(_={}){return U4(_)&&w5(_)}function VQ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let N=Number($?.innerHeight||0);if(Number.isFinite(N)&&N>0)return Math.round(N);return null}function WQ(_={},$={}){if(!e9(_))return null;let j=_.window??(typeof window<"u"?window:null),N=_.document??(typeof document<"u"?document:null);if(!j||!N?.documentElement)return null;let Z=VQ({window:j});if(Z&&Z>0)N.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(N.scrollingElement)N.scrollingElement.scrollTop=0,N.scrollingElement.scrollLeft=0;if(N.documentElement)N.documentElement.scrollTop=0,N.documentElement.scrollLeft=0;if(N.body)N.body.scrollTop=0,N.body.scrollLeft=0}catch{}}return Z}function _j(_={}){if(!e9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let N=0,Z=new Set,Y=()=>{if(N)$.cancelAnimationFrame?.(N),N=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},K=()=>{N=0,WQ({window:$,document:j})},Q=()=>{if(N)$.cancelAnimationFrame?.(N);N=$.requestAnimationFrame?.(K)??0},X=()=>{Q();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Z.delete(U),Q()},V);if(U!=null)Z.add(U)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;X()},W=$.visualViewport;return X(),$.addEventListener("focus",X),$.addEventListener("pageshow",X),$.addEventListener("resize",X),$.addEventListener("orientationchange",X),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",X,!0),W?.addEventListener?.("resize",X),W?.addEventListener?.("scroll",X),()=>{Y(),$.removeEventListener("focus",X),$.removeEventListener("pageshow",X),$.removeEventListener("resize",X),$.removeEventListener("orientationchange",X),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",X,!0),W?.removeEventListener?.("resize",X),W?.removeEventListener?.("scroll",X)}}function LQ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function A_(_,$,j){let N=_?.[$];return typeof N==="function"?N:LQ($,j)}var UQ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function $j(_){return UQ.has(String(_||"").trim())}function zQ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function jj(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let N={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:N})),j.dispatchEvent(new CustomEvent(zQ(_),{detail:N})),!0}var FQ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Nj(_,$={}){let j=$.window??(typeof window<"u"?window:null),N=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(U4({window:j,navigator:N}))};Z();let K=FQ.map((Q)=>{try{return j.matchMedia?.(Q)??null}catch{return null}}).filter(Boolean).map((Q)=>{if(typeof Q.addEventListener==="function")return Q.addEventListener("change",Z),()=>Q.removeEventListener("change",Z);if(typeof Q.addListener==="function")return Q.addListener(Z),()=>Q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let Q of K)Q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function Zj(_,$={}){let j=$.window??(typeof window<"u"?window:null),N=$.document??(typeof document<"u"?document:null);if(!j||!N||typeof _!=="function")return()=>{};let Z=()=>{if(N.visibilityState&&N.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),N.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),N.removeEventListener?.("visibilitychange",Z)}}var $3="piclaw_btw_session",HQ=900,OQ="__piclawRenameBranchFormLock__",e6=()=>{if(typeof window>"u")return null;let _=window,$=OQ,j=_[$];if(j&&typeof j==="object")return j;let N={inFlight:!1,cooldownUntil:0};return _[$]=N,N};function JQ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function DQ(){let _=X_($3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",N=typeof $.answer==="string"?$.answer:"",Z=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:N,thinking:Z,error:K==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:K}}catch{return null}}var Yj=V8,Kj=L8,EQ=z8,Qj=D8,qj=E8,_3=F8,c5=A_(G_,"getAgentContext",null),Gj=A_(G_,"getAgentModels",{current:null,models:[]}),Xj=A_(G_,"getActiveChatAgents",{chats:[]}),l5=A_(G_,"getChatBranches",{chats:[]}),AQ=A_(G_,"renameChatBranch",null),MQ=A_(G_,"pruneChatBranch",null),Bj=A_(G_,"restoreChatBranch",null),Vj=A_(G_,"getAgentQueueState",{count:0}),kQ=A_(G_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),IQ=A_(G_,"removeAgentQueueItem",{removed:!1}),PQ=A_(G_,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});g0.register(t8);g0.register(k6);g0.register(M6);g0.register(I6);g0.register(P6);g0.register(C6);g0.register(y6);g0.register(S6);g0.register(w6);g0.register(f6);g0.register(v6);g0.register(E6);e8();g0.register(j6);g0.register(N6);function CQ({locationParams:_,navigate:$}){let j=M0(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),N=M0(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=M0(()=>{let G=(_.get("pane_popout")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Y=M0(()=>{let G=_.get("pane_path");return G&&G.trim()?G.trim():""},[_]),K=M0(()=>{let G=_.get("pane_label");return G&&G.trim()?G.trim():""},[_]),Q=M0(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),X=M0(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():j},[j,_]),[q,W]=c("disconnected"),[V,U]=c(()=>U4()),[D,k]=c(null),[T,E]=c(null),[J,A]=c(!1),[C,n]=c("current"),[l,t]=c([]),[Z0,f]=c([]),[w,H]=c(null),{agentStatus:S,setAgentStatus:h,agentDraft:e,setAgentDraft:i,agentPlan:$0,setAgentPlan:j0,agentThought:Y0,setAgentThought:Q0,pendingRequest:X0,setPendingRequest:U0,currentTurnId:z0,setCurrentTurnId:O0,steerQueuedTurnId:l0,setSteerQueuedTurnId:P0,lastAgentEventRef:D0,lastSilenceNoticeRef:i0,isAgentRunningRef:n0,draftBufferRef:S0,thoughtBufferRef:B0,pendingRequestRef:C0,stalledPostIdRef:E0,currentTurnIdRef:q0,steerQueuedTurnIdRef:T0,thoughtExpandedRef:r0,draftExpandedRef:h0}=c9(),[z1,A1]=c({}),[u0,d0]=c(null),[Z1,X1]=c(null),[a0,y1]=c(!1),[K1,v1]=c(null),[B1,c1]=c([]),[m0,a1]=c([]),[V1,F1]=c(null),[J1,y0]=c([]),[D1,R0]=c(!1),[v0,e0]=c(()=>DQ()),[d1,m]=c(null),G0=y(new Set),A0=M0(()=>B1.find((G)=>G?.chat_jid===j)||null,[B1,j]),F0=M0(()=>m0.find((G)=>G?.chat_jid===j)||A0||null,[A0,m0,j]),t0=F0?.root_chat_jid||A0?.root_chat_jid||j,t1=JQ(C),[l1,h_]=c(()=>({status:Q?"running":"idle",message:Q?"Preparing a new chat branch…":""})),M_=J1.length,e1=y(new Set),_1=y([]),S1=y(new Set),o1=y(0),x1=y({inFlight:!1,lastAttemptAt:0,turnId:null});e1.current=new Set(J1.map((G)=>G.row_id)),_1.current=J1;let{notificationsEnabled:k_,notificationPermission:I_,toggleNotifications:H4,notify:O4}=h9(),[__,p_]=c(()=>new Set),[Q1,Z4]=c(()=>K$("workspaceOpen",!0)),W_=y(null),{editorOpen:p0,tabStripTabs:H1,tabStripActiveId:x0,previewTabs:w1,tabPaneOverrides:Z_,openEditor:R1,closeEditor:f4,handleTabClose:Y_,handleTabActivate:J4,handleTabCloseOthers:o$,handleTabCloseAll:s4,handleTabTogglePin:Y4,handleTabTogglePreview:K4,handleTabEditSource:L_,revealInExplorer:r4}=i9({onTabClosed:(G)=>W_.current?.(G)}),P_=y(null),$_=y(null),D4=y(null),Q4=y(null),w0=g0.getDockPanes().length>0,[C1,c_]=c(!1),U_=x(()=>c_((G)=>!G),[]),l_=x(()=>{R1(u$,{label:"Terminal"})},[R1]),i_=x(()=>{R1(N4,{label:"VNC"})},[R1]),z_=M0(()=>H1.find((G)=>G.id===x0)||H1[0]||null,[x0,H1]),O1=M0(()=>x0?Z_.get(x0)||null:null,[Z_,x0]),Y1=M0(()=>K||z_?.label||Y||"Pane",[z_?.label,K,Y]),b1=M0(()=>H1.length>1||Boolean(x0&&w1.has(x0)),[w1,x0,H1.length]),n_=M0(()=>Y===N4||Y.startsWith(`${N4}/`),[Y]),E4=M0(()=>Y===u$&&!b1||n_,[n_,b1,Y]),v4=Z||!N&&(p0||w0&&C1),[u1,C_]=c(!1),q4=y(!1),a4=x(()=>{if(!p0||N)return;if(q4.current=C1,C1)c_(!1);C_(!0)},[p0,N,C1]),s1=x(()=>{if(!u1)return;if(C_(!1),q4.current)c_(!0),q4.current=!1},[u1]),K_=x(()=>{if(u1)s1();else a4()},[u1,a4,s1]);p(()=>{if(u1&&!p0)s1()},[u1,p0,s1]),p(()=>{if(!Z||!Y)return;if(s0.getActiveId()===Y)return;R1(Y,K?{label:K}:void 0)},[R1,K,Z,Y]),p(()=>{let G=P_.current;if(!G)return;if($_.current)$_.current.dispose(),$_.current=null;let B=x0;if(!B)return;let O={path:B,mode:"edit"},P=(O1?g0.get(O1):null)||g0.resolve(O)||g0.get("editor");if(!P){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let M=P.mount(G,O);$_.current=M,M.onDirtyChange?.((a)=>{s0.setDirty(B,a)}),M.onSaveRequest?.(()=>{}),M.onClose?.(()=>{f4()});let g=s0.getViewState(B);if(g&&typeof M.restoreViewState==="function")requestAnimationFrame(()=>M.restoreViewState(g));if(typeof M.onViewStateChange==="function")M.onViewStateChange((a)=>{s0.saveViewState(B,a)});return requestAnimationFrame(()=>M.focus()),()=>{if($_.current===M)M.dispose(),$_.current=null}},[x0,O1,f4]),p(()=>{let G=D4.current;if(Q4.current)Q4.current.dispose(),Q4.current=null;if(!G||!w0||!C1)return;let B=g0.getDockPanes()[0];if(!B){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let O=B.mount(G,{mode:"view"});return Q4.current=O,requestAnimationFrame(()=>O.focus?.()),()=>{if(Q4.current===O)O.dispose(),Q4.current=null}},[w0,C1]);let[d_,t4]=c({name:"You",avatar_url:null,avatar_background:null}),b4=y(!1),o_=y(!1),T_=y(null),m1=y(j),s_=y(new Map),y_=y(j),S_=y(0),A4=y(0),M4=y({}),e4=y({name:null,avatar_url:null}),M1=y({currentHashtag:null,searchQuery:null,searchOpen:!1}),r_=y(null),W1=y(null),k4=y(0),x_=y(0),G4=y(0),w_=y(null),F_=y(null),Q_=y(null),X4=y(null),u4=y(0),a_=y({title:null,avatarBase:null}),I4=y(null),P4=y(!1),[R_,m4]=c(!1),f_=y(0),[C4,t_]=c(!1),[F,I]=c(""),b=M0(()=>b8(F,F0?.agent_name||""),[F0?.agent_name,F]),v=y(null),d=x(()=>{if(I4.current)clearTimeout(I4.current),I4.current=null;H(null)},[]);r9(30000),p(()=>{if(!C4)return;requestAnimationFrame(()=>{if(C4)v.current?.focus(),v.current?.select?.()})},[C4]),p(()=>{return V2()},[]),p(()=>{return Nj(U)},[]),p(()=>{G1("workspaceOpen",String(Q1))},[Q1]),p(()=>{return _j()},[]),p(()=>{return()=>{d()}},[d]),p(()=>{if(!v0){G1($3,"");return}G1($3,JSON.stringify({question:v0.question||"",answer:v0.answer||"",thinking:v0.thinking||"",error:v0.error||null,status:v0.status||"success"}))},[v0]),p(()=>{M4.current=z1||{}},[z1]),p(()=>{m1.current=j},[j]),p(()=>{e4.current=d_||{name:"You",avatar_url:null,avatar_background:null}},[d_]);let K0=x((G,B,O=null)=>{if(typeof document>"u")return;let P=(G||"").trim()||"PiClaw";if(a_.current.title!==P){document.title=P;let r=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(r&&r.getAttribute("content")!==P)r.setAttribute("content",P);a_.current.title=P}let M=document.getElementById("dynamic-favicon");if(!M)return;let g=M.getAttribute("data-default")||M.getAttribute("href")||"/favicon.ico",a=B||g,_0=B?`${a}|${O||""}`:a;if(a_.current.avatarBase!==_0){let r=B?`${a}${a.includes("?")?"&":"?"}v=${O||Date.now()}`:a;M.setAttribute("href",r),a_.current.avatarBase=_0}},[]),V0=x((G)=>{if(!G)return;t((B)=>B.includes(G)?B:[...B,G])},[]),L0=x((G)=>{t((B)=>B.filter((O)=>O!==G))},[]);W_.current=L0;let N0=x(()=>{t([])},[]),k0=x((G)=>{if(!Array.isArray(G)){t([]);return}let B=[],O=new Set;for(let P of G){if(typeof P!=="string"||!P.trim())continue;let M=P.trim();if(O.has(M))continue;O.add(M),B.push(M)}t(B)},[]),W0=x((G,B=null,O="info",P=3000)=>{d(),H({title:G,detail:B||null,kind:O||"info"}),I4.current=setTimeout(()=>{H((M)=>M?.title===G?null:M)},P)},[d]),q_=x((G)=>{let B=a9(G,{editorOpen:p0,resolvePane:(O)=>g0.resolve(O)});if(B.kind==="open"){R1(B.path);return}if(B.kind==="toast")W0(B.title,B.detail,B.level)},[p0,R1,W0]),L=x(()=>{let G=x0;if(G)V0(G)},[x0,V0]),R=x((G)=>{if(!G)return;f((B)=>B.includes(G)?B:[...B,G])},[]),u=x(async(G,B=null)=>{let O=(M)=>{M.scrollIntoView({behavior:"smooth",block:"center"}),M.classList.add("post-highlight"),setTimeout(()=>M.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+G);if(P){O(P);return}try{let M=typeof B==="string"&&B.trim()?B.trim():j,a=(await W8(G,M))?.thread?.[0];if(!a)return;g1((_0)=>{if(!_0)return[a];if(_0.some((r)=>r.id===a.id))return _0;return[..._0,a]}),requestAnimationFrame(()=>{setTimeout(()=>{let _0=document.getElementById("post-"+G);if(_0)O(_0)},50)})}catch(M){console.error("[scrollToMessage] Failed to fetch message",G,M)}},[j]),o=x((G)=>{f((B)=>B.filter((O)=>O!==G))},[]),H0=x(()=>{f([])},[]),c0=x((G)=>{if(!Array.isArray(G)){f([]);return}let B=[],O=new Set;for(let P of G){if(typeof P!=="string"||!P.trim())continue;let M=P.trim();if(O.has(M))continue;O.add(M),B.push(M)}f(B)},[]),U1=x((G)=>{let B=typeof G==="string"&&G.trim()?G.trim():"Could not send your message.";W0("Compose failed",B,"error",5000)},[W0]),$1=x((G={})=>{let B=Date.now();if(D0.current=B,G.running)n0.current=!0,R0((O)=>O?O:!0);if(G.clearSilence)i0.current=0},[R0]),k1=x(()=>{if(X4.current)clearTimeout(X4.current),X4.current=null;u4.current=0},[]);p(()=>()=>{k1()},[k1]);let o0=x(()=>{k1(),h((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:B,lastActivity:O,...P}=G;return P})},[k1]),e_=x((G)=>{if(!G)return;k1();let B=Date.now();u4.current=B,h({type:G.type||"active",last_activity:!0}),X4.current=setTimeout(()=>{if(u4.current!==B)return;h((O)=>{if(!O||!(O.last_activity||O.lastActivity))return O;return null})},d9)},[k1]),j_=x(()=>{n0.current=!1,R0(!1),D0.current=null,i0.current=0,S0.current="",B0.current="",C0.current=null,F_.current=null,q0.current=null,T0.current=null,T_.current=null,x1.current={inFlight:!1,lastAttemptAt:0,turnId:null},k1(),O0(null),P0(null),r0.current=!1,h0.current=!1},[k1,O0,P0,R0]),v_=x((G)=>{if(!t9({remainingQueueCount:G,currentTurnId:q0.current,isAgentTurnActive:D1}))return;T0.current=null,P0(null)},[D1,P0]),B4=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),_$=x(()=>({agentStatus:S,agentDraft:e?{...e}:{text:"",totalLines:0},agentPlan:$0||"",agentThought:Y0?{...Y0}:{text:"",totalLines:0},pendingRequest:X0,currentTurnId:z0,steerQueuedTurnId:l0,isAgentTurnActive:Boolean(D1),followupQueueItems:Array.isArray(J1)?J1.map((G)=>({...G})):[],activeModel:u0,activeThinkingLevel:Z1,supportsThinking:Boolean(a0),activeModelUsage:K1,contextUsage:V1,isAgentRunning:Boolean(n0.current),wasAgentActive:Boolean(o_.current),draftBuffer:S0.current||"",thoughtBuffer:B0.current||"",lastAgentEvent:D0.current||null,lastSilenceNotice:i0.current||0,lastAgentResponse:F_.current||null,currentTurnIdRef:q0.current||null,steerQueuedTurnIdRef:T0.current||null,thoughtExpanded:Boolean(r0.current),draftExpanded:Boolean(h0.current),agentStatusRef:T_.current||null,silentRecovery:{...x1.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[u0,K1,Z1,e,$0,S,Y0,V1,z0,J1,D1,X0,l0,a0]),T4=x((G)=>{let B=G||B4();k1(),n0.current=Boolean(B.isAgentRunning),o_.current=Boolean(B.wasAgentActive),R0(Boolean(B.isAgentTurnActive)),D0.current=B.lastAgentEvent||null,i0.current=Number(B.lastSilenceNotice||0),S0.current=B.draftBuffer||"",B0.current=B.thoughtBuffer||"",C0.current=B.pendingRequest||null,F_.current=B.lastAgentResponse||null,q0.current=B.currentTurnIdRef||null,T0.current=B.steerQueuedTurnIdRef||null,T_.current=B.agentStatusRef||null,x1.current=B.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},r0.current=Boolean(B.thoughtExpanded),h0.current=Boolean(B.draftExpanded),h(B.agentStatus||null),i(B.agentDraft?{...B.agentDraft}:{text:"",totalLines:0}),j0(B.agentPlan||""),Q0(B.agentThought?{...B.agentThought}:{text:"",totalLines:0}),U0(B.pendingRequest||null),O0(B.currentTurnId||null),P0(B.steerQueuedTurnId||null),y0(Array.isArray(B.followupQueueItems)?B.followupQueueItems.map((O)=>({...O})):[]),d0(B.activeModel||null),X1(B.activeThinkingLevel||null),y1(Boolean(B.supportsThinking)),v1(B.activeModelUsage??null),F1(B.contextUsage??null)},[k1,B4,O0,y0,R0,P0]),q1=x((G)=>{if(!G)return;if(q0.current===G)return;q0.current=G,x1.current={inFlight:!1,lastAttemptAt:0,turnId:G},O0(G),T0.current=null,P0(null),S0.current="",B0.current="",i({text:"",totalLines:0}),j0(""),Q0({text:"",totalLines:0}),U0(null),C0.current=null,F_.current=null,r0.current=!1,h0.current=!1},[O0,P0]),$$=x((G)=>{if(typeof document<"u"){let r=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&r)return}let B=F_.current;if(!B||!B.post)return;if(G&&B.turnId&&B.turnId!==G)return;let O=B.post;if(O.id&&w_.current===O.id)return;let P=String(O?.data?.content||"").trim();if(!P)return;w_.current=O.id||w_.current,F_.current=null;let M=P.replace(/\s+/g," ").slice(0,200),g=M4.current||{},_0=(O?.data?.agent_id?g[O.data.agent_id]:null)?.name||"Pi";O4(_0,M)},[O4]),i5=x(async(G,B)=>{if(G!=="thought"&&G!=="draft")return;let O=q0.current;if(G==="thought"){if(r0.current=B,O)try{await qj(O,"thought",B)}catch(P){console.warn("Failed to update thought visibility:",P)}if(!B)return;try{let P=O?await Qj(O,"thought"):null;if(P?.text)B0.current=P.text;Q0((M)=>({...M||{text:"",totalLines:0},fullText:B0.current||M?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:M?.totalLines||0}))}catch(P){console.warn("Failed to fetch full thought:",P)}return}if(h0.current=B,O)try{await qj(O,"draft",B)}catch(P){console.warn("Failed to update draft visibility:",P)}if(!B)return;try{let P=O?await Qj(O,"draft"):null;if(P?.text)S0.current=P.text;i((M)=>({...M||{text:"",totalLines:0},fullText:S0.current||M?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:M?.totalLines||0}))}catch(P){console.warn("Failed to fetch full draft:",P)}},[]),z$=y(null),g4=x(()=>{let G=r_.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);z$.current=g4;let h4=x((G)=>{let B=r_.current;if(!B||typeof G!=="function"){G?.();return}let{currentHashtag:O,searchQuery:P,searchOpen:M}=M1.current||{},g=!((P||M)&&!O),a=g?B.scrollHeight-B.scrollTop:B.scrollTop;G(),requestAnimationFrame(()=>{let _0=r_.current;if(!_0)return;if(g){let r=Math.max(_0.scrollHeight-a,0);_0.scrollTop=r}else{let r=Math.max(_0.scrollHeight-_0.clientHeight,0),s=Math.min(a,r);_0.scrollTop=s}})},[]),i1=x((G)=>{let B=r_.current;if(!B||typeof G!=="function"){G?.();return}let O=B.scrollTop;G(),requestAnimationFrame(()=>{let P=r_.current;if(!P)return;let M=Math.max(P.scrollHeight-P.clientHeight,0);P.scrollTop=Math.min(O,M)})},[]),j$="Queued as a follow-up (one-at-a-time).",j3="⁣",s$=x((G)=>{if(!G||!Array.isArray(G))return G;let B=e1.current,O=new Set(B),P=G.filter((M)=>{if(O.has(M?.id))return!1;if(M?.data?.is_bot_message){let g=M?.data?.content;if(g===j$||g===j3)return!1}return!0});return P.length===G.length?G:P},[]),{posts:F$,setPosts:g1,hasMore:Wj,setHasMore:r$,hasMoreRef:N3,loadPosts:b_,refreshTimeline:n1,loadMore:Lj,loadMoreRef:n5}=p9({preserveTimelineScroll:h4,preserveTimelineScrollTop:i1,chatJid:j}),N$=M0(()=>s$(F$),[F$,J1,s$]),a$=x(()=>{let G=E0.current;if(!G)return;g1((B)=>B?B.filter((O)=>O.id!==G):B),E0.current=null},[g1]),{handleSplitterMouseDown:Uj,handleSplitterTouchStart:zj,handleEditorSplitterMouseDown:Fj,handleEditorSplitterTouchStart:Hj,handleDockSplitterMouseDown:Oj,handleDockSplitterTouchStart:Jj}=l9({appShellRef:W1,sidebarWidthRef:k4,editorWidthRef:x_,dockHeightRef:G4}),Z3=x(()=>{if(!n0.current)return;n0.current=!1,i0.current=0,D0.current=null,q0.current=null,O0(null),r0.current=!1,h0.current=!1;let G=(S0.current||"").trim();if(S0.current="",B0.current="",i({text:"",totalLines:0}),j0(""),Q0({text:"",totalLines:0}),U0(null),C0.current=null,F_.current=null,!G){h({type:"error",title:"Response stalled - No content received"});return}let O=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,P=Date.now(),M=new Date().toISOString(),g={id:P,timestamp:M,data:{type:"agent_response",content:O,agent_id:"default",is_local_stall:!0}};E0.current=P,g1((a)=>a?d$([...a,g]):[g]),z$.current?.(),h(null)},[O0]);p(()=>{M1.current={currentHashtag:D,searchQuery:T,searchOpen:J}},[D,T,J]);let j1=x(()=>{let G=++o1.current,B=j;Vj(B).then((O)=>{if(G!==o1.current)return;if(m1.current!==B)return;let P=S1.current,M=Array.isArray(O?.items)?O.items.map((g)=>({...g})).filter((g)=>!P.has(g.row_id)):[];if(M.length){y0((g)=>{if(g.length===M.length&&g.every((a,_0)=>a.row_id===M[_0].row_id))return g;return M});return}P.clear(),v_(0),y0((g)=>g.length===0?g:[])}).catch(()=>{if(G!==o1.current)return;if(m1.current!==B)return;y0((O)=>O.length===0?O:[])})},[v_,j,y0]),H_=x(async()=>{let G=j;try{let B=await c5(G);if(m1.current!==G)return;if(B)F1(B)}catch(B){if(m1.current!==G)return;console.warn("Failed to fetch agent context:",B)}},[j]),O_=x(async()=>{let G=j;try{let B=await _3(G);if(m1.current!==G)return null;if(!B||B.status!=="active"||!B.data){if(o_.current){let{currentHashtag:M,searchQuery:g,searchOpen:a}=M1.current||{};if(!M&&!g&&!a)n1()}return o_.current=!1,j_(),T_.current=null,h(null),i({text:"",totalLines:0}),j0(""),Q0({text:"",totalLines:0}),U0(null),C0.current=null,B??null}o_.current=!0;let O=B.data;T_.current=O;let P=O.turn_id||O.turnId;if(P)q1(P);if($1({running:!0,clearSilence:!0}),o0(),h(O),B.thought&&B.thought.text)Q0((M)=>{if(M&&M.text&&M.text.length>=B.thought.text.length)return M;return B0.current=B.thought.text,{text:B.thought.text,totalLines:B.thought.totalLines||0}});if(B.draft&&B.draft.text)i((M)=>{if(M&&M.text&&M.text.length>=B.draft.text.length)return M;return S0.current=B.draft.text,{text:B.draft.text,totalLines:B.draft.totalLines||0}});return B}catch(B){return console.warn("Failed to fetch agent status:",B),null}},[j_,o0,$1,n1,q1]),d5=x(async()=>{if(!n0.current)return null;if(C0.current)return null;let G=q0.current||null,B=x1.current,O=Date.now();if(B.inFlight)return null;if(B.turnId===G&&O-B.lastAttemptAt<r6)return null;B.inFlight=!0,B.lastAttemptAt=O,B.turnId=G;try{let{currentHashtag:P,searchQuery:M,searchOpen:g}=M1.current||{};if(!P&&!M&&!g)await n1();return await j1(),await O_()}finally{B.inFlight=!1}},[O_,j1,n1]);p(()=>{let G=Math.min(1000,Math.max(100,Math.floor(s6/2))),B=setInterval(()=>{if(!n0.current)return;if(C0.current)return;let O=D0.current;if(!O)return;let P=Date.now(),M=P-O,g=w$(T_.current);if(M>=n9){if(!g)h({type:"waiting",title:"Re-syncing after a quiet period…"});d5();return}if(M>=s6){if(P-i0.current>=r6){if(!g){let a=Math.floor(M/1000);h({type:"waiting",title:`Waiting for model… No events for ${a}s`})}i0.current=P,d5()}}},G);return()=>clearInterval(B)},[d5]);let Dj=x((G)=>{if(W(G),G!=="connected"){h(null),i({text:"",totalLines:0}),j0(""),Q0({text:"",totalLines:0}),U0(null),C0.current=null,j_();return}if(!b4.current){b4.current=!0;let{currentHashtag:M,searchQuery:g,searchOpen:a}=M1.current||{};if(!M&&!g&&!a)n1();O_(),j1(),H_();return}let{currentHashtag:B,searchQuery:O,searchOpen:P}=M1.current;if(!B&&!O&&!P)n1();O_(),j1(),H_()},[j_,n1,O_,j1,H_]),Ej=x(async(G)=>{k(G),g1(null),await b_(G)},[b_]),Aj=x(async()=>{k(null),E(null),g1(null),await b_()},[b_]),Mj=x(async(G,B=C)=>{if(!G||!G.trim())return;let O=B==="root"||B==="all"?B:"current";n(O),E(G.trim()),k(null),g1(null);try{let P=await Yj(G.trim(),50,0,j,O,t0);g1(P.results),r$(!1)}catch(P){console.error("Failed to search:",P),g1([])}},[j,t0,C]),kj=x(()=>{A(!0),E(null),k(null),n("current"),g1([])},[]),Ij=x(()=>{A(!1),E(null),b_()},[b_]),yQ=x(()=>{},[]),o5=!D&&!T&&!J,Pj=x(async(G)=>{if(!G)return;let B=G.id,O=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():j,P=N$?.filter((g)=>g?.data?.thread_id===B&&g?.id!==B).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let M=(g)=>{if(!g.length)return;p_((_0)=>{let r=new Set(_0);return g.forEach((s)=>r.add(s)),r}),setTimeout(()=>{if(i1(()=>{g1((_0)=>_0?_0.filter((r)=>!g.includes(r.id)):_0)}),p_((_0)=>{let r=new Set(_0);return g.forEach((s)=>r.delete(s)),r}),N3.current)n5.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await Kj(B,P>0,O);if(g?.ids?.length)M(g.ids)}catch(g){let a=g?.message||"";if(P===0&&a.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let r=await Kj(B,!0,O);if(r?.ids?.length)M(r.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${a}`)}},[j,N$,i1]),Y3=x(async()=>{try{let G=await EQ();A1(o9(G));let B=G?.user||{};t4((P)=>{let M=typeof B.name==="string"&&B.name.trim()?B.name.trim():"You",g=typeof B.avatar_url==="string"?B.avatar_url.trim():null,a=typeof B.avatar_background==="string"&&B.avatar_background.trim()?B.avatar_background.trim():null;if(P.name===M&&P.avatar_url===g&&P.avatar_background===a)return P;return{name:M,avatar_url:g,avatar_background:a}});let O=(G?.agents||[]).find((P)=>P.id==="default");K0(O?.name,O?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=j,B=await c5(G);if(m1.current!==G)return;if(B)F1(B)}catch{}},[K0,j]);p(()=>{Y3();let G=Q$("sidebarWidth",null),B=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(k4.current=B,W1.current)W1.current.style.setProperty("--sidebar-width",`${B}px`)},[Y3]);let H$=D1||S!==null,K3=x((G)=>{if(!G||typeof G!=="object")return;let B=G.agent_id;if(!B)return;let{agent_name:O,agent_avatar:P}=G;if(!O&&P===void 0)return;let M=M4.current?.[B]||{id:B},g=M.name||null,a=M.avatar_url??M.avatarUrl??M.avatar??null,_0=!1,r=!1;if(O&&O!==M.name)g=O,r=!0;if(P!==void 0){let s=typeof P==="string"?P.trim():null,J0=typeof a==="string"?a.trim():null,f0=s||null;if(f0!==(J0||null))a=f0,_0=!0}if(!r&&!_0)return;if(A1((s)=>{let f0={...s[B]||{id:B}};if(r)f0.name=g;if(_0)f0.avatar_url=a;return{...s,[B]:f0}}),B==="default")K0(g,a,_0?Date.now():null)},[K0]),Q3=x((G)=>{if(!G||typeof G!=="object")return;let B=G.user_name??G.userName,O=G.user_avatar??G.userAvatar,P=G.user_avatar_background??G.userAvatarBackground;if(B===void 0&&O===void 0&&P===void 0)return;t4((M)=>{let g=typeof B==="string"&&B.trim()?B.trim():M.name||"You",a=O===void 0?M.avatar_url:typeof O==="string"&&O.trim()?O.trim():null,_0=P===void 0?M.avatar_background:typeof P==="string"&&P.trim()?P.trim():null;if(M.name===g&&M.avatar_url===a&&M.avatar_background===_0)return M;return{name:g,avatar_url:a,avatar_background:_0}})},[]),s5=x((G)=>{if(!G||typeof G!=="object")return;let B=G.model??G.current;if(B!==void 0)d0(B);if(G.thinking_level!==void 0)X1(G.thinking_level??null);if(G.supports_thinking!==void 0)y1(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)v1(G.provider_usage??null)},[]),O$=x(()=>{let G=j;Gj(G).then((B)=>{if(m1.current!==G)return;if(B)s5(B)}).catch(()=>{})},[s5,j]),h1=x(()=>{let G=j,B=(O)=>Array.isArray(O)?O.filter((P)=>P&&typeof P.chat_jid==="string"&&typeof P.agent_name==="string"&&P.agent_name.trim()):[];Promise.all([Xj().catch(()=>({chats:[]})),l5(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([O,P])=>{if(m1.current!==G)return;let M=B(O?.chats),g=B(P?.chats);if(g.length===0){c1(M);return}let a=new Map(M.map((r)=>[r.chat_jid,r])),_0=g.map((r)=>{let s=a.get(r.chat_jid);return s?{...r,...s,is_active:s.is_active??r.is_active}:r});_0.sort((r,s)=>{if(r.chat_jid===G&&s.chat_jid!==G)return-1;if(s.chat_jid===G&&r.chat_jid!==G)return 1;let J0=Boolean(r.archived_at),f0=Boolean(s.archived_at);if(J0!==f0)return J0?1:-1;if(Boolean(r.is_active)!==Boolean(s.is_active))return r.is_active?-1:1;return String(r.chat_jid).localeCompare(String(s.chat_jid))}),c1(_0)}).catch(()=>{if(m1.current!==G)return;c1([])})},[j]),f1=x(()=>{l5(t0).then((G)=>{let B=Array.isArray(G?.chats)?G.chats.filter((O)=>O&&typeof O.chat_jid==="string"&&typeof O.agent_name==="string"):[];a1(B)}).catch(()=>{})},[t0]),Cj=x((G)=>{let B=G?.row_id;if(B==null)return;S1.current.add(B),y0((O)=>O.filter((P)=>P?.row_id!==B)),kQ(B,t6(j)).then(()=>{j1()}).catch((O)=>{console.warn("[queue] Failed to steer queued item:",O),W0("Failed to steer message","The queued message could not be sent as steering.","warning"),S1.current.delete(B),j1()})},[j,j1,y0,W0]),Tj=x((G)=>{let B=G?.row_id;if(B==null)return;let O=_1.current.filter((P)=>P?.row_id!==B).length;S1.current.add(B),v_(O),y0((P)=>P.filter((M)=>M?.row_id!==B)),IQ(B,t6(j)).then(()=>{j1()}).catch((P)=>{console.warn("[queue] Failed to remove queued item:",P),W0("Failed to remove message","The queued message could not be removed.","warning"),S1.current.delete(B),j1()})},[v_,j,j1,y0,W0]),J$=x((G)=>{if(!G||typeof G!=="object")return;if(h1(),f1(),G?.queued==="followup"||G?.queued==="steer"){j1();return}let B=G?.command;if(B&&typeof B==="object"&&(B?.queued_followup||B?.queued_steer))j1()},[h1,f1,j1]),r5=x(()=>{if(Q_.current)Q_.current.abort(),Q_.current=null;e0(null)},[]),t$=x(async(G)=>{let B=String(G||"").trim();if(!B)return W0("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Q_.current)Q_.current.abort();let O=new AbortController;Q_.current=O,e0({question:B,answer:"",thinking:"",error:null,model:null,status:"running"});try{let P=await PQ(B,{signal:O.signal,chatJid:E2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(M,g)=>{if(M==="side_prompt_start")e0((a)=>a?{...a,status:"running"}:a)},onThinkingDelta:(M)=>{e0((g)=>g?{...g,thinking:`${g.thinking||""}${M||""}`}:g)},onTextDelta:(M)=>{e0((g)=>g?{...g,answer:`${g.answer||""}${M||""}`}:g)}});if(Q_.current!==O)return!0;e0((M)=>M?{...M,answer:P?.result||M.answer||"",thinking:P?.thinking||M.thinking||"",model:P?.model||null,status:"success",error:null}:M)}catch(P){if(O.signal.aborted)return!0;e0((M)=>M?{...M,status:"error",error:P?.payload?.error||P?.message||"BTW request failed."}:M)}finally{if(Q_.current===O)Q_.current=null}return!0},[j,W0]),yj=x(async({content:G})=>{let B=D2(G);if(!B)return!1;if(B.type==="help")return W0("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(B.type==="clear")return r5(),W0("BTW cleared","Closed the side conversation panel.","info"),!0;if(B.type==="ask")return await t$(B.question),!0;return!1},[r5,t$,W0]),Sj=x(()=>{if(v0?.question)t$(v0.question)},[v0,t$]),xj=x(async()=>{let G=k2(v0);if(!G)return;try{let B=await c4("default",G,null,[],H$?"queue":null,j);J$(B),W0(B?.queued==="followup"?"BTW queued":"BTW injected",B?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(B){W0("BTW inject failed",B?.message||"Could not inject BTW answer into chat.","warning")}},[v0,J$,H$,W0]),q3=x(async(G=null)=>{let[B,O,P,M,g,a,_0]=await Promise.allSettled([_3(j),c5(j),Vj(j),Gj(j),Xj(),l5(t0),p4(20,null,j)]),r=B.status==="fulfilled"?B.value:null,s=O.status==="fulfilled"?O.value:null,J0=P.status==="fulfilled"?P.value:null,f0=M.status==="fulfilled"?M.value:null,r1=g.status==="fulfilled"?g.value:null,E1=a.status==="fulfilled"?a.value:null,_4=_0.status==="fulfilled"?_0.value:null,J_=Array.isArray(_4?.posts)?_4.posts:Array.isArray(F$)?F$:[],V3=J_.length?J_[J_.length-1]:null,hj=J_.filter((_8)=>_8?.data?.is_bot_message).length,pj=J_.filter((_8)=>!_8?.data?.is_bot_message).length,W3=Number(J0?.count??_1.current.length??0)||0,L3=Array.isArray(r1?.chats)?r1.chats.length:B1.length,cj=Array.isArray(E1?.chats)?E1.chats.length:m0.length,U3=Number(s?.percent??V1?.percent??0)||0,lj=Number(s?.tokens??V1?.tokens??0)||0,ij=Number(s?.contextWindow??V1?.contextWindow??0)||0,nj=f0?.current??u0??null,dj=f0?.thinking_level??Z1??null,oj=f0?.supports_thinking??a0,sj=r?.status||(D1?"active":"idle"),rj=r?.data?.type||r?.type||null;return{generatedAt:new Date().toISOString(),request:G,chat:{currentChatJid:j,rootChatJid:t0,activeChats:L3,branches:cj},agent:{status:sj,phase:rj,running:Boolean(D1)},model:{current:nj,thinkingLevel:dj,supportsThinking:Boolean(oj)},context:{tokens:lj,contextWindow:ij,percent:U3},queue:{count:W3},timeline:{loadedPosts:J_.length,botPosts:hj,userPosts:pj,latestPostId:V3?.id??null,latestTimestamp:V3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(U3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,W3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,L3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,J_.length*5))}]}},[B1,u0,Z1,V1,m0,j,t0,D1,F$,a0]),D$=x(()=>{O$(),h1(),f1(),j1(),H_()},[O$,h1,f1,j1,H_]);p(()=>{D$();let G=setInterval(()=>{O$(),h1(),f1(),j1()},60000);return()=>clearInterval(G)},[D$,O$,h1,f1,j1]),p(()=>{f1()},[f1]),p(()=>{let G=!1,B=()=>{if(G)return;requestAnimationFrame(()=>{if(G)return;g4()})};if(D)return b_(D),()=>{G=!0};if(T)return Yj(T,50,0,j,C,t0).then((O)=>{if(G)return;g1(O.results),r$(!1)}).catch((O)=>{if(G)return;console.error("Failed to search:",O),g1([]),r$(!1)}),()=>{G=!0};return b_().then(()=>{B()}).catch((O)=>{if(G)return;console.error("Failed to load timeline:",O)}),()=>{G=!0}},[j,D,T,C,t0,b_,g4,r$,g1]),p(()=>{let G=y_.current||j;s_.current.set(G,_$())},[j,_$]),p(()=>{let G=y_.current||j;if(G===j)return;s_.current.set(G,_$()),y_.current=j,S1.current.clear(),T4(s_.current.get(j)||null),j1(),O_(),H_()},[j,O_,H_,j1,T4,_$]);let wj=x(()=>{let{currentHashtag:G,searchQuery:B,searchOpen:O}=M1.current||{};if(!G&&!B&&!O)n1();D$()},[D$,n1]),E$=x((G,B="streaming")=>{let O=y2({...G,...G&&G.status?{}:{status:B}});if(!O)return;let P=p1(O);if(P&&G0.current.has(P))return;m((M)=>{let g=p1(M),a=Boolean(P&&g&&P===g),_0={...a&&M?.artifact?M.artifact:{},...O.artifact||{}};return{...a&&M?M:{},...O,artifact:_0,source:"live",originChatJid:O.originChatJid||j,openedAt:a&&M?.openedAt?M.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),a5=x((G,B)=>{let O=B?.turn_id,P=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():null,g=P?P===j:G==="connected"||G==="workspace_update";if(g)K3(B),Q3(B);if(G==="ui_theme"){W2(B);return}if(G==="generated_widget_open"){if(!g)return;if(O&&!q0.current)q1(O);E$(B,"loading");return}if(G==="generated_widget_delta"){if(!g)return;if(O&&!q0.current)q1(O);E$(B,"streaming");return}if(G==="generated_widget_final"){if(!g)return;if(O&&!q0.current)q1(O);E$(B,"final");return}if(G==="generated_widget_error"){if(!g)return;E$(B,"error");return}if(G==="generated_widget_close"){if(!g)return;let s=p1(B);m((J0)=>{if(!J0||J0?.source!=="live")return J0;let f0=p1(J0);if(s&&f0&&s!==f0)return J0;return null});return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))o0()}if(G==="connected"){h(null),i({text:"",totalLines:0}),j0(""),Q0({text:"",totalLines:0}),U0(null),C0.current=null,j_();let s=j;_3(s).then((E1)=>{if(m1.current!==s)return;if(!E1||E1.status!=="active"||!E1.data)return;let _4=E1.data,J_=_4.turn_id||_4.turnId;if(J_)q1(J_);if($1({clearSilence:!0}),e_(_4),E1.thought&&E1.thought.text)B0.current=E1.thought.text,Q0({text:E1.thought.text,totalLines:E1.thought.totalLines||0});if(E1.draft&&E1.draft.text)S0.current=E1.draft.text,i({text:E1.draft.text,totalLines:E1.draft.totalLines||0})}).catch((E1)=>{console.warn("Failed to fetch agent status:",E1)});let{currentHashtag:J0,searchQuery:f0,searchOpen:r1}=M1.current||{};if(!J0&&!f0&&!r1)n1();D$();return}if(G==="agent_status"){if(!g){if(B?.type==="done"||B?.type==="error")h1(),f1();return}if(B.type==="done"||B.type==="error"){if(O&&q0.current&&O!==q0.current)return;if(B.type==="done"){$$(O||q0.current);let{currentHashtag:s,searchQuery:J0,searchOpen:f0}=M1.current||{};if(!s&&!J0&&!f0)n1();if(B.context_usage)F1(B.context_usage)}if(o_.current=!1,j_(),S1.current.clear(),h1(),j1(),i({text:"",totalLines:0}),j0(""),Q0({text:"",totalLines:0}),U0(null),B.type==="error")h({type:"error",title:B.title||"Agent error"}),setTimeout(()=>h(null),8000);else h(null)}else{if(O)q1(O);if($1({running:!0,clearSilence:!0}),B.type==="thinking")S0.current="",B0.current="",i({text:"",totalLines:0}),j0(""),Q0({text:"",totalLines:0});T_.current=B,h((s)=>{if(s&&s.type===B.type&&s.title===B.title)return s;return B})}return}if(G==="agent_steer_queued"){if(!g)return;if(O&&q0.current&&O!==q0.current)return;let s=O||q0.current;if(!s)return;T0.current=s,P0(s);return}if(G==="agent_followup_queued"){if(!g)return;let s=B?.row_id,J0=B?.content;if(s!=null&&typeof J0==="string"&&J0.trim())y0((f0)=>{if(f0.some((r1)=>r1?.row_id===s))return f0;return[...f0,{row_id:s,content:J0,timestamp:B?.timestamp||null,thread_id:B?.thread_id??null}]});j1();return}if(G==="agent_followup_consumed"){if(!g)return;let s=B?.row_id;if(s!=null){let E1=_1.current.filter((_4)=>_4.row_id!==s).length;v_(E1),y0((_4)=>_4.filter((J_)=>J_.row_id!==s))}j1();let{currentHashtag:J0,searchQuery:f0,searchOpen:r1}=M1.current||{};if(!J0&&!f0&&!r1)n1();return}if(G==="agent_followup_removed"){if(!g)return;let s=B?.row_id;if(s!=null){let J0=_1.current.filter((f0)=>f0.row_id!==s).length;S1.current.add(s),v_(J0),y0((f0)=>f0.filter((r1)=>r1.row_id!==s))}j1();return}if(G==="agent_draft_delta"){if(!g)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)q1(O);if($1({running:!0,clearSilence:!0}),B?.reset)S0.current="";if(B?.delta)S0.current+=B.delta;let s=Date.now();if(!S_.current||s-S_.current>=100){S_.current=s;let J0=S0.current,f0=a6(J0);if(h0.current)i((r1)=>({text:r1?.text||"",totalLines:f0,fullText:J0}));else i({text:J0,totalLines:f0})}return}if(G==="agent_draft"){if(!g)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)q1(O);$1({running:!0,clearSilence:!0});let s=B.text||"",J0=B.mode||(B.kind==="plan"?"replace":"append"),f0=Number.isFinite(B.total_lines)?B.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(B.kind==="plan")if(J0==="replace")j0(s);else j0((r1)=>(r1||"")+s);else if(!h0.current)S0.current=s,i({text:s,totalLines:f0});return}if(G==="agent_thought_delta"){if(!g)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)q1(O);if($1({running:!0,clearSilence:!0}),B?.reset)B0.current="";if(typeof B?.delta==="string")B0.current+=B.delta;let s=Date.now();if(r0.current&&(!A4.current||s-A4.current>=100)){A4.current=s;let J0=B0.current;Q0((f0)=>({text:f0?.text||"",totalLines:a6(J0),fullText:J0}))}return}if(G==="agent_thought"){if(!g)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)q1(O);$1({running:!0,clearSilence:!0});let s=B.text||"",J0=Number.isFinite(B.total_lines)?B.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(!r0.current)B0.current=s,Q0({text:s,totalLines:J0});return}if(G==="model_changed"){if(!g)return;if(B?.model!==void 0)d0(B.model);if(B?.thinking_level!==void 0)X1(B.thinking_level??null);if(B?.supports_thinking!==void 0)y1(Boolean(B.supports_thinking));let s=j;c5(s).then((J0)=>{if(m1.current!==s)return;if(J0)F1(J0)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:B}));return}if($j(G)){if(!g)return;if(jj(G,B),G==="extension_ui_notify"&&typeof B?.message==="string")W0(B.message,null,B?.type||"info");if(G==="extension_ui_error"&&typeof B?.error==="string")W0("Extension UI error",B.error,"error",5000);return}let{currentHashtag:a,searchQuery:_0,searchOpen:r}=M1.current;if(G==="agent_response"){if(!g)return;a$(),F_.current={post:B,turnId:q0.current}}if(!a&&!_0&&!r&&g&&(G==="new_post"||G==="new_reply"||G==="agent_response"))g1((s)=>{if(!s)return[B];if(s.some((J0)=>J0.id===B.id))return s;return[...s,B]}),z$.current?.();if(G==="interaction_updated"){if(!g)return;if(a||_0||r)return;g1((s)=>{if(!s)return s;if(!s.some((J0)=>J0.id===B.id))return s;return s.map((J0)=>J0.id===B.id?B:J0)})}if(G==="interaction_deleted"){if(!g)return;if(a||_0||r)return;let s=B?.ids||[];if(s.length){if(i1(()=>{g1((J0)=>J0?J0.filter((f0)=>!s.includes(f0.id)):J0)}),N3.current)n5.current?.({preserveScroll:!0,preserveMode:"top"})}}},[E$,j_,o0,j,n5,$1,$$,i1,h1,f1,n1,a$,q1,e_,K3,Q3,O$,j1,y0]);p(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=a5,G.reset=()=>{a$(),j_(),h(null),i({text:"",totalLines:0}),j0(""),Q0({text:"",totalLines:0}),U0(null)},G.finalize=()=>Z3(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[j_,Z3,a5,a$]),g9({handleSseEvent:a5,handleConnectionStatusChange:Dj,loadPosts:b_,onWake:wj,chatJid:j}),p(()=>{if(!N$||N$.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let B=G.slice(5);u(B),history.replaceState(null,"",location.pathname+location.search)},[N$,u]);let t5=S!==null;p(()=>{if(q!=="connected")return;let B=setInterval(()=>{let{currentHashtag:O,searchQuery:P,searchOpen:M}=M1.current||{},g=!O&&!P&&!M;if(t5){if(g)n1();j1(),O_(),H_()}else{if(g)n1();O_(),H_()}},t5?15000:60000);return()=>clearInterval(B)},[q,t5,O_,H_,j1,n1]),p(()=>{return Zj(()=>{O_(),H_(),j1()})},[O_,H_,j1]);let Rj=x(()=>{Z4((G)=>!G)},[]),G3=x((G)=>{if(typeof window>"u")return;let B=String(G||"").trim();if(!B||B===j)return;let O=d4(window.location.href,B,{chatOnly:N});$?.(O)},[N,j,$]),e5=x(()=>{if(typeof window>"u"||!F0?.chat_jid)return;let G=Date.now(),B=e6();if(!B)return;if(P4.current||G<f_.current||B.inFlight||G<B.cooldownUntil)return;I(F0.agent_name||""),t_(!0)},[F0]),A$=x(()=>{t_(!1),I("")},[]),X3=x(async(G)=>{if(typeof window>"u"||!F0?.chat_jid)return;if(typeof G!=="string"){e5();return}let B=Date.now(),O=e6();if(!O)return;if(P4.current||B<f_.current||O.inFlight||B<O.cooldownUntil)return;P4.current=!0,O.inFlight=!0,m4(!0);try{let P=F0.agent_name||"",M=b8(G,P);if(!M.canSubmit){W0("Could not rename branch",M.message||"Enter a valid branch handle.","warning",4000);return}let g=M.normalized||P,a=await AQ(F0.chat_jid,{agentName:g});await Promise.allSettled([h1(),f1()]);let _0=a?.branch?.agent_name||g||P;W0("Branch renamed",`@${_0}`,"info",3500),A$()}catch(P){let M=P instanceof Error?P.message:String(P||"Could not rename branch."),g=/already in use/i.test(M||"")?`${M} Switch to or restore that existing session from the session manager.`:M;W0("Could not rename branch",g||"Could not rename branch.","warning",5000)}finally{P4.current=!1,m4(!1);let P=Date.now()+HQ;f_.current=P;let M=e6();if(M)M.inFlight=!1,M.cooldownUntil=P}},[A$,F0,h1,f1,e5,m4,W0]),B3=x(async(G=null)=>{if(typeof window>"u")return;let B=typeof G==="string"&&G.trim()?G.trim():"",O=typeof j==="string"&&j.trim()?j.trim():"",P=B||F0?.chat_jid||O;if(!P){W0("Could not prune branch","No active session is selected yet.","warning",4000);return}let M=(F0?.chat_jid===P?F0:null)||m0.find((r)=>r?.chat_jid===P)||B1.find((r)=>r?.chat_jid===P)||null;if(M?.chat_jid===(M?.root_chat_jid||M?.chat_jid)){W0("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let a=`@${M?.agent_name||P}${M?.chat_jid?` — ${M.chat_jid}`:""}`;if(!window.confirm(`Prune ${a}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await MQ(P),await Promise.allSettled([h1(),f1()]);let r=M?.root_chat_jid||"web:default";W0("Branch pruned",`${a} has been archived.`,"info",3000);let s=d4(window.location.href,r,{chatOnly:N});$?.(s)}catch(r){let s=r instanceof Error?r.message:String(r||"Could not prune branch.");W0("Could not prune branch",s||"Could not prune branch.","warning",5000)}},[B1,N,F0,m0,j,$,h1,f1,W0]),fj=x(async(G)=>{let B=typeof G==="string"?G.trim():"";if(!B||typeof Bj!=="function")return;try{let O=m0.find((r)=>r?.chat_jid===B)||null,P=await Bj(B);await Promise.allSettled([h1(),f1()]);let M=P?.branch,g=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():B,a=t3(O?.agent_name,M?.agent_name,g);W0("Branch restored",a,"info",4200);let _0=d4(window.location.href,g,{chatOnly:N});$?.(_0)}catch(O){let P=O instanceof Error?O.message:String(O||"Could not restore branch.");W0("Could not restore branch",P||"Could not restore branch.","warning",5000)}},[N,m0,$,h1,f1,W0]);p(()=>{if(!Q||typeof window>"u")return;let G=!1;return(async()=>{try{h_({status:"running",message:"Preparing a new chat branch…"});let B=await P$(X);if(G)return;let O=B?.branch,P=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");let M=d4(window.location.href,P,{chatOnly:!0});$?.(M,{replace:!0})}catch(B){if(G)return;h_({status:"error",message:R5(B)})}})(),()=>{G=!0}},[Q,X,$]);let vj=x((G)=>{if(!G||typeof G!=="object")return;let B=p1(G);if(B)G0.current.delete(B);m({...G,openedAt:new Date().toISOString()})},[]),M$=x(()=>{m((G)=>{let B=p1(G);if(G?.source==="live"&&B)G0.current.add(B);return null})},[]),bj=x((G,B)=>{let O=typeof G?.kind==="string"?G.kind:"",P=p1(B);if(!O||!P)return;if(O==="widget.close"){M$();return}if(O==="widget.submit"){let M=R2(G?.payload),g=f2(G?.payload),a=new Date().toISOString();if(m((_0)=>{let r=p1(_0);if(!_0||r!==P)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:O,lastEventPayload:G?.payload||null,lastSubmitAt:a,lastHostUpdate:{type:"submit_pending",submittedAt:a,preview:M||null}}}}),!M){if(W0("Widget submission received","The widget submitted data without a message payload yet.","info",3500),g)M$();return}(async()=>{try{let _0=await c4("default",M,null,[],H$?"queue":null,j);if(J$(_0),m((r)=>{let s=p1(r);if(!r||s!==P)return r;return{...r,runtimeState:{...r.runtimeState||{},lastHostUpdate:{type:_0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:a,preview:M,queued:_0?.queued||null}}}}),W0(_0?.queued==="followup"?"Widget submission queued":"Widget submission sent",_0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),g)M$()}catch(_0){m((r)=>{let s=p1(r);if(!r||s!==P)return r;return{...r,runtimeState:{...r.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:a,preview:M,error:_0?.message||"Could not send the widget message."}}}}),W0("Widget submission failed",_0?.message||"Could not send the widget message.","warning",5000)}})();return}if(O==="widget.ready"||O==="widget.request_refresh"){let M=new Date().toISOString(),g=Boolean(G?.payload?.buildDashboard||G?.payload?.dashboardKind==="internal-state"),a=Number(B?.runtimeState?.refreshCount||0)+1;if(m((_0)=>{let r=p1(_0);if(!_0||r!==P)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:O,lastEventPayload:G?.payload||null,...O==="widget.ready"?{readyAt:M,lastHostUpdate:{type:"ready_ack",at:M}}:{},...O==="widget.request_refresh"?{lastRefreshRequestAt:M,refreshCount:a,lastHostUpdate:{type:g?"refresh_building":"refresh_ack",at:M,count:a,echo:G?.payload||null}}:{}}}}),O==="widget.request_refresh")if(g)(async()=>{try{let _0=await q3(G?.payload||null);m((r)=>{let s=p1(r);if(!r||s!==P)return r;return{...r,runtimeState:{...r.runtimeState||{},dashboard:_0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:a,echo:G?.payload||null}}}}),W0("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(_0){m((r)=>{let s=p1(r);if(!r||s!==P)return r;return{...r,runtimeState:{...r.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:a,error:_0?.message||"Could not build dashboard."}}}}),W0("Dashboard build failed",_0?.message||"Could not build dashboard.","warning",5000)}})();else W0("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[q3,j,M$,J$,H$,W0]);p(()=>{G0.current.clear(),m(null)},[j]);let uj=x(async()=>{if(typeof window>"u")return;try{let B=(await P$(j))?.branch,O=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([h1(),f1()]);let P=B?.agent_name?`@${B.agent_name}`:O;W0("New branch created",`Switched to ${P}.`,"info",2500);let M=d4(window.location.href,O,{chatOnly:N});$?.(M)}catch(G){W0("Could not create branch",R5(G),"warning",5000)}},[N,j,$,h1,f1,W0]),e$=x((G,B)=>{if(typeof window>"u"||V)return;let O=typeof G==="string"&&G.trim()?G.trim():"";if(!O)return;let P=()=>{let _0=s0.get(O);if(!_0||_0.dirty)return;Y_(O)},M=z7(O);if(!M){W0("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000);return}let g=U7(window.location.href,O,{label:typeof B==="string"&&B.trim()?B.trim():void 0,chatJid:j});if(M.mode==="tab"){if(!window.open(g,M.target)){W0("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}P();return}let a=Z6(M);if(!a){W0("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}Y6(a,{title:typeof B==="string"&&B.trim()?`Opening ${B}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."}),K6(a,g),P()},[j,Y_,V,W0]);p(()=>{let G=(O)=>{let P=O.detail?.path,M=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(P)R1(P,M?{label:M}:void 0)},B=(O)=>{let P=O.detail?.path,M=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(P)e$(P,M)};return document.addEventListener("office-viewer:open-tab",G),document.addEventListener("drawio:open-tab",G),document.addEventListener("csv-viewer:open-tab",G),document.addEventListener("pdf-viewer:open-tab",G),document.addEventListener("image-viewer:open-tab",G),document.addEventListener("video-viewer:open-tab",G),document.addEventListener("vnc:open-tab",G),document.addEventListener("pane:popout",B),()=>{document.removeEventListener("office-viewer:open-tab",G),document.removeEventListener("drawio:open-tab",G),document.removeEventListener("csv-viewer:open-tab",G),document.removeEventListener("pdf-viewer:open-tab",G),document.removeEventListener("image-viewer:open-tab",G),document.removeEventListener("video-viewer:open-tab",G),document.removeEventListener("vnc:open-tab",G),document.removeEventListener("pane:popout",B)}},[e$,R1]);let mj=x(async()=>{if(typeof window>"u"||V)return;let G=V7(j);if(!G){W0("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let O=L7(window.location.href,j,{chatOnly:!0});if(!window.open(O,G.target))W0("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let B=Z6(G);if(!B){W0("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}Y6(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let P=(await P$(j))?.branch,M=typeof P?.chat_jid==="string"&&P.chat_jid.trim()?P.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");try{let a=await U8();c1(Array.isArray(a?.chats)?a.chats:[])}catch{}try{let a=await l5(t0);a1(Array.isArray(a?.chats)?a.chats:[])}catch{}let g=d4(window.location.href,M,{chatOnly:!0});K6(B,g)}catch(O){W7(B),W0("Could not open branch window",R5(O),"error",5000)}},[j,t0,V,W0]);p(()=>{if(!p0)return;if(typeof window>"u")return;let G=W1.current;if(!G)return;if(!x_.current){let B=Q$("editorWidth",null),O=k4.current||280;x_.current=Number.isFinite(B)?B:O}if(G.style.setProperty("--editor-width",`${x_.current}px`),!G4.current){let B=Q$("dockHeight",null);G4.current=Number.isFinite(B)?B:200}G.style.setProperty("--dock-height",`${G4.current}px`)},[p0]),p(()=>{if(!w0||N)return;let G=(B)=>{if(B.ctrlKey&&B.key==="`")B.preventDefault(),U_()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[U_,w0,N]),p(()=>{if(N)return;let G=(B)=>{if(B.ctrlKey&&B.shiftKey&&(B.key==="Z"||B.key==="z")){B.preventDefault(),K_();return}if(B.key==="Escape"&&u1)B.preventDefault(),s1()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[K_,s1,u1,N]);let gj=Boolean(l0&&l0===(S?.turn_id||z0));if(Q)return z`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${l1.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${l1.message}</p>
                    </div>
                </div>
            </div>
        `;if(Z)return z`
            <div class=${`app-shell pane-popout${p0?" editor-open":""}`} ref=${W1}>
                <div class="editor-pane-container pane-popout-container">
                    ${p0&&!E4&&z`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${b1?z`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${Y1}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${H1.length>1&&z`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${H1.map((G)=>z`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${G.id===x0?" active":""}`}
                                                                onClick=${(B)=>{J4(G.id),B.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${G.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${x0&&w1.has(x0)&&z`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(G)=>{K4(x0),G.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:z`
                                    <div class="pane-popout-controls-label" aria-label=${Y1}>${Y1}</div>
                                `}
                        </div>
                    `}
                    ${p0?z`<div class="editor-pane-host" ref=${P_}></div>`:z`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${p0&&x0&&w1.has(x0)&&z`
                        <${d6}
                            getContent=${()=>$_.current?.getContent?.()}
                            path=${x0}
                            onClose=${()=>K4(x0)}
                        />
                    `}
                </div>
            </div>
        `;return z`
        <div class=${`app-shell${Q1?"":" workspace-collapsed"}${p0?" editor-open":""}${N?" chat-only":""}${u1?" zen-mode":""}`} ref=${W1}>
            ${C4&&z`
                <div class="rename-branch-overlay" onPointerDown=${(G)=>{if(G.target===G.currentTarget)A$()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(G)=>{G.preventDefault(),X3(F)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${v}
                            value=${F}
                            onInput=${(G)=>{let B=G.currentTarget?.value??"";I(String(B))}}
                            onKeyDown=${(G)=>{if(G.key==="Escape")G.preventDefault(),A$()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${b.kind||"info"}`}>
                            ${b.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${R_||!b.canSubmit}>
                                ${R_?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${A$}
                                disabled=${R_}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!N&&z`
                <${f9}
                    onFileSelect=${V0}
                    visible=${Q1}
                    active=${Q1||p0}
                    onOpenEditor=${R1}
                    onOpenTerminalTab=${l_}
                    onOpenVncTab=${i_}
                    onToggleTerminal=${w0?U_:void 0}
                    terminalVisible=${Boolean(w0&&C1)}
                />
                <button
                    class=${`workspace-toggle-tab${Q1?" open":" closed"}`}
                    onClick=${Rj}
                    title=${Q1?"Hide workspace":"Show workspace"}
                    aria-label=${Q1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${Uj} onTouchStart=${zj}></div>
            `}
            ${v4&&z`
                <div class="editor-pane-container">
                    ${u1&&z`<div class="zen-hover-zone"></div>`}
                    ${p0&&z`
                        <${u9}
                            tabs=${H1}
                            activeId=${x0}
                            onActivate=${J4}
                            onClose=${Y_}
                            onCloseOthers=${o$}
                            onCloseAll=${s4}
                            onTogglePin=${Y4}
                            onTogglePreview=${K4}
                            onEditSource=${L_}
                            previewTabs=${w1}
                            paneOverrides=${Z_}
                            onToggleDock=${w0?U_:void 0}
                            dockVisible=${w0&&C1}
                            onToggleZen=${K_}
                            zenMode=${u1}
                            onPopOutTab=${V?void 0:e$}
                        />
                    `}
                    ${p0&&z`<div class="editor-pane-host" ref=${P_}></div>`}
                    ${p0&&x0&&w1.has(x0)&&z`
                        <${d6}
                            getContent=${()=>$_.current?.getContent?.()}
                            path=${x0}
                            onClose=${()=>K4(x0)}
                        />
                    `}
                    ${w0&&C1&&z`<div class="dock-splitter" onMouseDown=${Oj} onTouchStart=${Jj}></div>`}
                    ${w0&&z`<div class=${`dock-panel${C1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&z`
                                    <button class="dock-panel-action" onClick=${()=>e$(u$,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${U_} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${D4}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${Fj} onTouchStart=${Hj}></div>
            `}
            <div class="container">
                ${T&&s9()&&z`<div class="search-results-spacer"></div>`}
                ${N&&z`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${F0?.agent_name?`@${F0.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${F0?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${m0.length>1&&z`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(G)=>G3(G.currentTarget.value)}
                                    >
                                        ${m0.map((G)=>z`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${H5(G,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${F0?.chat_jid&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${e5}
                                    title=${R_?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${R_}
                                >
                                    ${R_?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${F0?.chat_jid&&F0.chat_jid!==(F0.root_chat_jid||F0.chat_jid)&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${B3}
                                    title="Prune this branch agent"
                                    aria-label="Prune this branch agent"
                                >
                                    Prune
                                </button>
                            `}
                            <span class="chat-window-header-badge">Chat only</span>
                        </div>
                    </div>
                `}
                ${(D||T)&&z`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${Aj}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${D?`#${D}`:`Search: ${T} · ${t1}`}</span>
                    </div>
                `}
                <${Q7}
                    posts=${N$}
                    hasMore=${o5?Wj:!1}
                    onLoadMore=${o5?Lj:void 0}
                    timelineRef=${r_}
                    onHashtagClick=${Ej}
                    onMessageRef=${R}
                    onScrollToMessage=${u}
                    onFileRef=${q_}
                    onPostClick=${void 0}
                    onDeletePost=${Pj}
                    onOpenWidget=${vj}
                    emptyMessage=${D?`No posts with #${D}`:T?`No results for "${T}"`:void 0}
                    agents=${z1}
                    user=${d_}
                    reverse=${o5}
                    removingPostIds=${__}
                    searchQuery=${T}
                />
                <${i2}
                    status=${S}
                    draft=${e}
                    plan=${$0}
                    thought=${Y0}
                    pendingRequest=${X0}
                    intent=${w}
                    turnId=${z0}
                    steerQueued=${gj}
                    onPanelToggle=${i5}
                />
                <${I2}
                    session=${v0}
                    onClose=${r5}
                    onRetry=${Sj}
                    onInject=${xj}
                />
                <${u2}
                    widget=${d1}
                    onClose=${M$}
                    onWidgetEvent=${bj}
                />
                <${_2}
                    onPost=${()=>{let{searchQuery:G,searchOpen:B}=M1.current||{};if(!G&&!B)b_(),g4()}}
                    onFocus=${g4}
                    searchMode=${J}
                    searchScope=${C}
                    onSearch=${Mj}
                    onSearchScopeChange=${n}
                    onEnterSearch=${kj}
                    onExitSearch=${Ij}
                    fileRefs=${l}
                    onRemoveFileRef=${L0}
                    onClearFileRefs=${N0}
                    onSetFileRefs=${k0}
                    messageRefs=${Z0}
                    onRemoveMessageRef=${o}
                    onClearMessageRefs=${H0}
                    onSetMessageRefs=${c0}
                    onSwitchChat=${G3}
                    onRenameSession=${X3}
                    isRenameSessionInProgress=${R_}
                    onCreateSession=${uj}
                    onDeleteSession=${B3}
                    onRestoreSession=${fj}
                    activeEditorPath=${N?null:x0}
                    onAttachEditorFile=${N?void 0:L}
                    onOpenFilePill=${q_}
                    followupQueueCount=${M_}
                    followupQueueItems=${J1}
                    onInjectQueuedFollowup=${Cj}
                    onRemoveQueuedFollowup=${Tj}
                    onSubmitIntercept=${yj}
                    onMessageResponse=${J$}
                    onSubmitError=${U1}
                    onPopOutChat=${V?void 0:mj}
                    isAgentActive=${H$}
                    activeChatAgents=${B1}
                    currentChatJid=${j}
                    connectionStatus=${q}
                    activeModel=${u0}
                    modelUsage=${K1}
                    thinkingLevel=${Z1}
                    supportsThinking=${a0}
                    contextUsage=${V1}
                    notificationsEnabled=${k_}
                    notificationPermission=${I_}
                    onToggleNotifications=${H4}
                    onModelChange=${d0}
                    onModelStateChange=${s5}
                />
                <${n2}
                    request=${X0}
                    onRespond=${()=>{U0(null),C0.current=null}}
                />
            </div>
        </div>
    `}function TQ(){let[_,$]=c(()=>typeof window>"u"?"http://localhost/":window.location.href);p(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=x((Z,Y={})=>{if(typeof window>"u")return;let{replace:K=!1}=Y||{},Q=new URL(String(Z||""),window.location.href).toString();if(K)window.history.replaceState(null,"",Q);else window.history.pushState(null,"",Q);$(window.location.href)},[]),N=M0(()=>new URL(_).searchParams,[_]);return z`<${CQ} locationParams=${N} navigate=${j} />`}g3(z`<${TQ} />`,document.getElementById("app"));

//# debugId=A85FA2A10F7CC54E64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
