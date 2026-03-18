var U9=Object.defineProperty;var F9=(_)=>_;function H9(_,$){this[_]=F9.bind(null,$)}var J9=(_,$)=>{for(var j in $)U9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:H9.bind($,j)})};var D9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var o2,t_,Q3,E9,d$,Z3,U3,F3,H3,M1,y1,A1,k9,n2={},d2=[],y9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,r2=Array.isArray;function x$(_,$){for(var j in $)_[j]=$[j];return _}function b1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function J3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?o2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return h2(_,K,Z,N,null)}function h2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++Q3:N,__i:-1,__u:0};return N==null&&t_.vnode!=null&&t_.vnode(z),z}function a2(_){return _.children}function i2(_,$){this.props=_,this.context=$}function X2(_,$){if($==null)return _.__?X2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?X2(_):null}function A9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=x$({},$);z.__v=$.__v+1,t_.vnode&&t_.vnode(z),I1(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?X2($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,y3(Z,z,N),$.__e=$.__=null,z.__e!=j&&D3(z)}}function D3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),D3(_)}function N3(_){(!_.__d&&(_.__d=!0)&&d$.push(_)&&!s2.__r++||Z3!=t_.debounceRendering)&&((Z3=t_.debounceRendering)||U3)(s2)}function s2(){try{for(var _,$=1;d$.length;)d$.length>$&&d$.sort(F3),_=d$.shift(),$=d$.length,A9(_)}finally{d$.length=s2.__r=0}}function E3(_,$,j,Z,N,z,K,G,q,X,O){var W,F,M,m,u,R,E,H=Z&&Z.__k||d2,C=$.length;for(q=w9(j,$,H,q,C),W=0;W<C;W++)(M=j.__k[W])!=null&&(F=M.__i!=-1&&H[M.__i]||n2,M.__i=W,R=I1(_,M,F,N,z,K,G,q,X,O),m=M.__e,M.ref&&F.ref!=M.ref&&(F.ref&&C1(F.ref,null,M),O.push(M.ref,M.__c||m,M)),u==null&&m!=null&&(u=m),(E=!!(4&M.__u))||F.__k===M.__k?q=k3(M,q,_,E):typeof M.type=="function"&&R!==void 0?q=R:m&&(q=m.nextSibling),M.__u&=-7);return j.__e=u,q}function w9(_,$,j,Z,N){var z,K,G,q,X,O=j.length,W=O,F=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=h2(null,K,null,null,null):r2(K)?K=_.__k[z]=h2(a2,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=h2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,q=z+F,K.__=_,K.__b=_.__b+1,G=null,(X=K.__i=P9(K,j,q,W))!=-1&&(W--,(G=j[X])&&(G.__u|=2)),G==null||G.__v==null?(X==-1&&(N>O?F--:N<O&&F++),typeof K.type!="function"&&(K.__u|=4)):X!=q&&(X==q-1?F--:X==q+1?F++:(X>q?F--:F++,K.__u|=4))):_.__k[z]=null;if(W)for(z=0;z<O;z++)(G=j[z])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=X2(G)),w3(G,G));return Z}function k3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=k3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=X2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function P9(_,$,j,Z){var N,z,K,G=_.key,q=_.type,X=$[j],O=X!=null&&(2&X.__u)==0;if(X===null&&G==null||O&&G==X.key&&q==X.type)return j;if(Z>(O?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((X=$[K=N>=0?N--:z++])!=null&&(2&X.__u)==0&&G==X.key&&q==X.type)return K}return-1}function z3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||y9.test($)?j:j+"px"}function c2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||z3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||z3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(H3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=M1,_.addEventListener($,z?A1:y1,z)):_.removeEventListener($,z?A1:y1,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function K3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=M1++;else if($.t<j.u)return;return j(t_.event?t_.event($):$)}}}function I1(_,$,j,Z,N,z,K,G,q,X){var O,W,F,M,m,u,R,E,H,C,I,i,n,e,d,K_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),z=[G=$.__e=j.__e]),(O=t_.__b)&&O($);_:if(typeof K_=="function")try{if(E=$.props,H=K_.prototype&&K_.prototype.render,C=(O=K_.contextType)&&Z[O.__c],I=O?C?C.props.value:O.__:Z,j.__c?R=(W=$.__c=j.__c).__=W.__E:(H?$.__c=W=new K_(E,I):($.__c=W=new i2(E,I),W.constructor=K_,W.render=b9),C&&C.sub(W),W.state||(W.state={}),W.__n=Z,F=W.__d=!0,W.__h=[],W._sb=[]),H&&W.__s==null&&(W.__s=W.state),H&&K_.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=x$({},W.__s)),x$(W.__s,K_.getDerivedStateFromProps(E,W.__s))),M=W.props,m=W.state,W.__v=$,F)H&&K_.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),H&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(H&&K_.getDerivedStateFromProps==null&&E!==M&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(E,I),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(E,W.__s,I)===!1){$.__v!=j.__v&&(W.props=E,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(c){c&&(c.__=$)}),d2.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&K.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(E,W.__s,I),H&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(M,m,u)})}if(W.context=I,W.props=E,W.__P=_,W.__e=!1,i=t_.__r,n=0,H)W.state=W.__s,W.__d=!1,i&&i($),O=W.render(W.props,W.state,W.context),d2.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,i&&i($),O=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++n<25);W.state=W.__s,W.getChildContext!=null&&(Z=x$(x$({},Z),W.getChildContext())),H&&!F&&W.getSnapshotBeforeUpdate!=null&&(u=W.getSnapshotBeforeUpdate(M,m)),e=O!=null&&O.type===a2&&O.key==null?A3(O.props.children):O,G=E3(_,r2(e)?e:[e],$,j,Z,N,z,K,G,q,X),W.base=$.__e,$.__u&=-161,W.__h.length&&K.push(W),R&&(W.__E=W.__=null)}catch(c){if($.__v=null,q||z!=null)if(c.then){for($.__u|=q?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;z[z.indexOf(G)]=null,$.__e=G}else{for(d=z.length;d--;)b1(z[d]);w1($)}else $.__e=j.__e,$.__k=j.__k,c.then||w1($);t_.__e(c,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=M9(j.__e,$,j,Z,N,z,K,q,X);return(O=t_.diffed)&&O($),128&$.__u?void 0:G}function w1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(w1))}function y3(_,$,j){for(var Z=0;Z<j.length;Z++)C1(j[Z],j[++Z],j[++Z]);t_.__c&&t_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){t_.__e(z,N.__v)}})}function A3(_){return typeof _!="object"||_==null||_.__b>0?_:r2(_)?_.map(A3):x$({},_)}function M9(_,$,j,Z,N,z,K,G,q){var X,O,W,F,M,m,u,R=j.props||n2,E=$.props,H=$.type;if(H=="svg"?N="http://www.w3.org/2000/svg":H=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(X=0;X<z.length;X++)if((M=z[X])&&"setAttribute"in M==!!H&&(H?M.localName==H:M.nodeType==3)){_=M,z[X]=null;break}}if(_==null){if(H==null)return document.createTextNode(E);_=document.createElementNS(N,H,E.is&&E),G&&(t_.__m&&t_.__m($,z),G=!1),z=null}if(H==null)R===E||G&&_.data==E||(_.data=E);else{if(z=z&&o2.call(_.childNodes),!G&&z!=null)for(R={},X=0;X<_.attributes.length;X++)R[(M=_.attributes[X]).name]=M.value;for(X in R)M=R[X],X=="dangerouslySetInnerHTML"?W=M:X=="children"||(X in E)||X=="value"&&("defaultValue"in E)||X=="checked"&&("defaultChecked"in E)||c2(_,X,null,M,N);for(X in E)M=E[X],X=="children"?F=M:X=="dangerouslySetInnerHTML"?O=M:X=="value"?m=M:X=="checked"?u=M:G&&typeof M!="function"||R[X]===M||c2(_,X,M,R[X],N);if(O)G||W&&(O.__html==W.__html||O.__html==_.innerHTML)||(_.innerHTML=O.__html),$.__k=[];else if(W&&(_.innerHTML=""),E3($.type=="template"?_.content:_,r2(F)?F:[F],$,j,Z,H=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&X2(j,0),G,q),z!=null)for(X=z.length;X--;)b1(z[X]);G||(X="value",H=="progress"&&m==null?_.removeAttribute("value"):m!=null&&(m!==_[X]||H=="progress"&&!m||H=="option"&&m!=R[X])&&c2(_,X,m,R[X],N),X="checked",u!=null&&u!=_[X]&&c2(_,X,u,R[X],N))}return _}function C1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){t_.__e(N,j)}}function w3(_,$,j){var Z,N;if(t_.unmount&&t_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||C1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){t_.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&w3(Z[N],$,j||typeof _.type!="function");j||b1(_.__e),_.__c=_.__=_.__e=void 0}function b9(_,$,j){return this.constructor(_,j)}function P3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),t_.__&&t_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],I1($,_=(!Z&&j||$).__k=J3(a2,null,[_]),N||n2,n2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?o2.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),y3(z,_,K)}o2=d2.slice,t_={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(G){_=G}throw _}},Q3=0,E9=function(_){return _!=null&&_.constructor===void 0},i2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=x$({},this.state),typeof _=="function"&&(_=_(x$({},j),this.props)),_&&x$(j,_),_!=null&&this.__v&&($&&this._sb.push($),N3(this))},i2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),N3(this))},i2.prototype.render=a2,d$=[],U3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F3=function(_,$){return _.__v.__b-$.__v.__b},s2.__r=0,H3=/(PointerCapture)$|Capture$/i,M1=0,y1=K3(!1),A1=K3(!0),k9=0;var A2,B0,k1,Y3,w2=0,M3=[],O0=t_,W3=O0.__b,G3=O0.__r,V3=O0.diffed,X3=O0.__c,q3=O0.unmount,L3=O0.__;function x1(_,$){O0.__h&&O0.__h(B0,_,w2||$),w2=0;var j=B0.__H||(B0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function S(_){return w2=1,I9(I3,_)}function I9(_,$,j){var Z=x1(A2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):I3(void 0,$),function(G){var q=Z.__N?Z.__N[0]:Z.__[0],X=Z.t(q,G);q!==X&&(Z.__N=[X,Z.__[1]],Z.__c.setState({}))}],Z.__c=B0,!B0.__f)){var N=function(G,q,X){if(!Z.__c.__H)return!0;var O=Z.__c.__H.__.filter(function(F){return F.__c});if(O.every(function(F){return!F.__N}))return!z||z.call(this,G,q,X);var W=Z.__c.props!==G;return O.some(function(F){if(F.__N){var M=F.__[0];F.__=F.__N,F.__N=void 0,M!==F.__[0]&&(W=!0)}}),z&&z.call(this,G,q,X)||W};B0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=B0;B0.componentWillUpdate=function(G,q,X){if(this.__e){var O=z;z=void 0,N(G,q,X),z=O}K&&K.call(this,G,q,X)},B0.shouldComponentUpdate=N}return Z.__N||Z.__}function v(_,$){var j=x1(A2++,3);!O0.__s&&b3(j.__H,$)&&(j.__=_,j.u=$,B0.__H.__h.push(j))}function D(_){return w2=5,r_(function(){return{current:_}},[])}function r_(_,$){var j=x1(A2++,7);return b3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function A(_,$){return w2=8,r_(function(){return _},$)}function C9(){for(var _;_=M3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(l2),$.__h.some(P1),$.__h=[]}catch(j){$.__h=[],O0.__e(j,_.__v)}}}O0.__b=function(_){B0=null,W3&&W3(_)},O0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),L3&&L3(_,$)},O0.__r=function(_){G3&&G3(_),A2=0;var $=(B0=_.__c).__H;$&&(k1===B0?($.__h=[],B0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(l2),$.__h.some(P1),$.__h=[],A2=0)),k1=B0},O0.diffed=function(_){V3&&V3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(M3.push($)!==1&&Y3===O0.requestAnimationFrame||((Y3=O0.requestAnimationFrame)||x9)(C9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),k1=B0=null},O0.__c=function(_,$){$.some(function(j){try{j.__h.some(l2),j.__h=j.__h.filter(function(Z){return!Z.__||P1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],O0.__e(Z,j.__v)}}),X3&&X3(_,$)},O0.unmount=function(_){q3&&q3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{l2(Z)}catch(N){$=N}}),j.__H=void 0,$&&O0.__e($,j.__v))};var O3=typeof requestAnimationFrame=="function";function x9(_){var $,j=function(){clearTimeout(Z),O3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);O3&&($=requestAnimationFrame(j))}function l2(_){var $=B0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),B0=$}function P1(_){var $=B0;_.__c=_.__(),B0=$}function b3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function I3(_,$){return typeof $=="function"?$(_):$}var C3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],G=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=G:K===4?Z[1]=Object.assign(Z[1]||{},G):K===5?(Z[1]=Z[1]||{})[$[++z]]=G:K===6?Z[1][$[++z]]+=G+"":K?(N=_.apply(G,C3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(G)}return Z},B3=new Map;function T9(_){var $=B3.get(this);return $||($=new Map,B3.set(this,$)),($=C3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",G="",q=[0],X=function(F){z===1&&(F||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,F,K):z===3&&(F||K)?(q.push(3,F,K),z=2):z===2&&K==="..."&&F?q.push(4,F,0):z===2&&K&&!F?q.push(5,0,!0,K):z>=5&&((K||!F&&z===5)&&(q.push(z,0,K,N),z=6),F&&(q.push(z,F,0,N),z=6)),K=""},O=0;O<j.length;O++){O&&(z===1&&X(),X(O));for(var W=0;W<j[O].length;W++)Z=j[O][W],z===1?Z==="<"?(X(),q=[q],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:G?Z===G?G="":K+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(X(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[O][W+1]===">")?(X(),z===3&&(q=q[0]),z=q,(q=q[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(X(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,q=q[0])}return X(),q}(_)),$),arguments,[])).length>1?$:$[0]}var Q=T9.bind(J3);var j$={};J9(j$,{uploadWorkspaceFile:()=>e2,uploadMedia:()=>g1,updateWorkspaceFile:()=>s9,submitAdaptiveCardAction:()=>p1,streamSidePrompt:()=>l9,steerAgentQueueItem:()=>i9,setWorkspaceVisibility:()=>C2,setAgentThoughtVisibility:()=>i1,sendPeerAgentMessage:()=>g9,sendAgentMessage:()=>q2,searchPosts:()=>S1,respondToAgentRequest:()=>t2,renameWorkspaceFile:()=>r1,renameChatBranch:()=>u9,removeAgentQueueItem:()=>h9,pruneChatBranch:()=>m9,moveWorkspaceEntry:()=>a1,getWorkspaceTree:()=>I2,getWorkspaceRawUrl:()=>_1,getWorkspaceFile:()=>d1,getWorkspaceDownloadUrl:()=>$1,getWorkspaceBranch:()=>d9,getTimeline:()=>P2,getThumbnailUrl:()=>l1,getThread:()=>f1,getPostsByHashtag:()=>T1,getMediaUrl:()=>$$,getMediaText:()=>n1,getMediaInfo:()=>L2,getMediaBlob:()=>n9,getChatBranches:()=>v9,getAgents:()=>u1,getAgentThought:()=>h1,getAgentStatus:()=>m1,getAgentQueueState:()=>c9,getAgentModels:()=>b2,getAgentContext:()=>p9,getActiveChatAgents:()=>v1,forkChatBranch:()=>M2,deleteWorkspaceFile:()=>t1,deletePost:()=>R1,createWorkspaceFile:()=>o1,createReply:()=>R9,createPost:()=>f9,attachWorkspaceFile:()=>s1,addToWhitelist:()=>c1,SSEClient:()=>j1});async function c_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function x3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function S9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:G}=await j.read();if(G)break;N+=Z.decode(K,{stream:!0});let q=N.split(`

`);N=q.pop()||"";for(let X of q){let O=x3(X);if(O)$(O.event,O.data)}}N+=Z.decode();let z=x3(N);if(z)$(z.event,z.data)}async function P2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return c_(Z)}async function T1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return c_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function S1(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",q=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return c_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${G}${q}`)}async function f1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return c_(`/thread/${_}${j}`)}async function f9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return c_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function R9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return c_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function R1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return c_(N,{method:"DELETE"})}async function q2(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return c_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function v1(){return c_("/agent/active-chats")}async function v9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/branches${$}`)}async function M2(_,$={}){return c_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function u9(_,$={}){return c_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function m9(_){return c_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function g9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return c_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function u1(){return c_("/agent/roster")}async function m1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/status${$}`)}async function p9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/context${$}`)}async function c9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/queue-state${$}`)}async function h9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function i9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function b2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/models${$}`)}async function g1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function t2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function p1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function l9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await S9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function c1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function h1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return c_(j)}async function i1(_,$,j){return c_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function $$(_){return`/media/${_}`}function l1(_){return`/media/${_}/thumbnail`}async function L2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function n1(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function n9(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function I2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return c_(Z)}async function d9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return c_($)}async function d1(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return c_(N)}async function s9(_,$){return c_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function s1(_){return c_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function e2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:Z});if(!G.ok){let q=await G.json().catch(()=>({error:"Upload failed"})),X=Error(q.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=q.code,X}return G.json()}async function o1(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function r1(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function a1(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function t1(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return c_($,{method:"DELETE"})}async function C2(_,$=!1){return c_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function _1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function $1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class j1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function Z$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function _0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function O2(_,$=!1){let j=Z$(_);if(j===null)return $;return j==="true"}function B2(_,$=null){let j=Z$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function Z1(_){return String(_||"").trim().toLowerCase()}function e1(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return Z1($[1]||"")}function T3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=Z1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function S3(_,$,j={}){let Z=e1($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return T3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return Z1(z?.agent_name).startsWith(Z)})}function _4(_){let $=Z1(_);return $?`@${$} `:""}function f3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return T3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function R3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function L$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let G=`${_}-file-pill`,q=`${_}-file-name`,X=`${_}-file-remove`,O=K==="message"?Q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return Q`
    <span class=${G} title=${j||$} onClick=${N}>
      ${O}
      <span class=${q}>${$}</span>
      ${Z&&Q`
        <button
          class=${X}
          onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var o9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function r9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${v3(j)} / ${v3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,G=$/100*K,q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return Q`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${q}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function v3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function u3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:G,fileRefs:q=[],onRemoveFileRef:X,onClearFileRefs:O,messageRefs:W=[],onRemoveMessageRef:F,onClearMessageRefs:M,activeModel:m=null,modelUsage:u=null,thinkingLevel:R=null,supportsThinking:E=!1,contextUsage:H=null,notificationsEnabled:C=!1,notificationPermission:I="default",onToggleNotifications:i,onModelChange:n,onModelStateChange:e,activeEditorPath:d=null,onAttachEditorFile:K_,onOpenFilePill:c,followupQueueItems:X_=[],onInjectQueuedFollowup:d_,onRemoveQueuedFollowup:__,onSubmitIntercept:t,onMessageResponse:N_,onPopOutChat:j_,isAgentActive:Q_=!1,activeChatAgents:R_=[],currentChatJid:L_="web:default",connectionStatus:I_="connected",onSetFileRefs:U_,onSetMessageRefs:H_,onSubmitError:v_,onSwitchChat:P_,onRenameSession:T_,onCreateSession:$0,onDeleteSession:F0}){let[z_,$_]=S(""),[F_,O_]=S(""),[b_,u_]=S([]),[Z0,h_]=S(!1),[x_,A_]=S([]),[i_,s_]=S(0),[N0,J_]=S(!1),[K0,Y0]=S([]),[R0,v0]=S(0),[H0,D_]=S(!1),[l_,o_]=S(!1),[G0,Q0]=S(!1),[M_,m_]=S(!1),[u0,w_]=S([]),[V0,m0]=S(!1),[z$,T]=S(0),[r,Y_]=S(null),G_=D(null),S_=D(null),f_=D(null),T0=D(null),k$=D(null),K$=D(null),f$=D(null),J0=D(null),n0=D(0),D0=200,E0=(B)=>{let w=new Set,x=[];for(let l of B||[]){if(typeof l!=="string")continue;let V_=l.trim();if(!V_||w.has(V_))continue;w.add(V_),x.push(V_)}return x},y$=()=>{let B=Z$("piclaw_compose_history");if(!B)return[];try{let w=JSON.parse(B);if(!Array.isArray(w))return[];return E0(w)}catch{return[]}},d0=(B)=>{_0("piclaw_compose_history",JSON.stringify(B))},y0=D(y$()),A$=D(-1),A0=D(""),K2=z_.trim()||b_.length>0||q.length>0||W.length>0,j0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),Y$=typeof window<"u"&&typeof Notification<"u",B$=typeof window<"u"?Boolean(window.isSecureContext):!1,I0=Y$&&B$&&I!=="denied",h0=I==="granted"&&C,w$=h0?"Disable notifications":"Enable notifications",Q$=b_.length>0||q.length>0||W.length>0,R$=I_==="disconnected"?"Reconnecting":String(I_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(B)=>B.toUpperCase()),o$=I_==="disconnected"?"Reconnecting":`Connection: ${R$}`,X0=f3(R_,{currentChatJid:L_,limit:4}),v$=!j&&R3({footerWidth:z$,visibleAgentCount:X0.length,hasContextIndicator:Boolean(H&&H.percent!=null)}),W$=(()=>{let B=new Set,w=[];for(let x of Array.isArray(R_)?R_:[]){let l=typeof x?.chat_jid==="string"?x.chat_jid.trim():"";if(!l||l===L_||B.has(l))continue;if(!(typeof x?.agent_name==="string"?x.agent_name.trim():""))continue;B.add(l),w.push(x)}return w})(),w0=W$.length>0&&typeof P_==="function",P$=!j&&typeof T_==="function",k0=!j&&typeof $0==="function",M$=!j&&typeof F0==="function",G$=!j&&(w0||P$||k0||M$),U$=m||"",u$=E&&R?` (${R})`:"",H2=u$.trim()?`${R}`:"",g_=typeof u?.hint_short==="string"?u.hint_short.trim():"",P0=[H2||null,g_||null].filter(Boolean).join(" • "),g0=[U$?`Current model: ${U$}${u$}`:null,u?.plan?`Plan: ${u.plan}`:null,g_||null,u?.primary?.reset_description||null,u?.secondary?.reset_description||null].filter(Boolean),m$=l_?"Switching model…":g0.join(" • ")||`Current model: ${U$}${u$} (tap to open model picker)`,V$=(B)=>{if(!B||typeof B!=="object")return;let w=B.model??B.current;if(typeof e==="function")e({model:w??null,thinking_level:B.thinking_level??null,supports_thinking:B.supports_thinking,provider_usage:B.provider_usage??null});if(w&&typeof n==="function")n(w)},F$=(B)=>{let w=B||G_.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},H$=(B)=>{if(!B)return{content:B,fileRefs:[]};let x=B.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),l=-1;for(let U=0;U<x.length;U+=1)if(x[U].trim()==="Files:"&&x[U+1]&&/^\s*-\s+/.test(x[U+1])){l=U;break}if(l===-1)return{content:B,fileRefs:[]};let V_=[],B_=l+1;for(;B_<x.length;B_+=1){let U=x[B_];if(/^\s*-\s+/.test(U))V_.push(U.replace(/^\s*-\s+/,"").trim());else if(!U.trim())break;else break}if(V_.length===0)return{content:B,fileRefs:[]};let C_=x.slice(0,l),C0=x.slice(B_);return{content:[...C_,...C0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:V_}},p0=(B)=>{if(!B)return{content:B,messageRefs:[]};let x=B.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),l=-1;for(let U=0;U<x.length;U+=1)if(x[U].trim()==="Referenced messages:"&&x[U+1]&&/^\s*-\s+/.test(x[U+1])){l=U;break}if(l===-1)return{content:B,messageRefs:[]};let V_=[],B_=l+1;for(;B_<x.length;B_+=1){let U=x[B_];if(/^\s*-\s+/.test(U)){let k=U.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(k)V_.push(k[1])}else if(!U.trim())break;else break}if(V_.length===0)return{content:B,messageRefs:[]};let C_=x.slice(0,l),C0=x.slice(B_);return{content:[...C_,...C0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:V_}},q0=(B)=>{let w=H$(B||""),x=p0(w.content||"");return{text:x.content||"",fileRefs:w.fileRefs,messageRefs:x.messageRefs}},U0=(B)=>{if(!B.startsWith("/")||B.includes(`
`)){J_(!1),A_([]);return}let w=B.toLowerCase().split(" ")[0];if(w.length<1){J_(!1),A_([]);return}let x=o9.filter((l)=>l.name.startsWith(w)||l.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(x.length>0&&!(x.length===1&&x[0].name===w))D_(!1),Y0([]),A_(x),s_(0),J_(!0);else J_(!1),A_([])},s0=(B)=>{let w=z_,x=w.indexOf(" "),l=x>=0?w.slice(x):"",V_=B.name+l;$_(V_),J_(!1),A_([]),requestAnimationFrame(()=>{let B_=G_.current;if(!B_)return;let C_=V_.length;B_.selectionStart=C_,B_.selectionEnd=C_,B_.focus()})},J$=(B)=>{if(e1(B)==null){D_(!1),Y0([]);return}let w=S3(R_,B,{currentChatJid:L_});if(w.length>0&&!(w.length===1&&_4(w[0].agent_name).trim().toLowerCase()===String(B||"").trim().toLowerCase()))J_(!1),A_([]),Y0(w),v0(0),D_(!0);else D_(!1),Y0([])},b$=(B)=>{let w=_4(B?.agent_name);if(!w)return;$_(w),D_(!1),Y0([]),requestAnimationFrame(()=>{let x=G_.current;if(!x)return;let l=w.length;x.selectionStart=l,x.selectionEnd=l,x.focus()})},D$=(B)=>{if(B?.preventDefault?.(),B?.stopPropagation?.(),j||!w0&&!P$&&!k0&&!M$)return;Q0(!1),J_(!1),A_([]),D_(!1),Y0([]),m_((w)=>!w)},o0=(B)=>{let w=typeof B==="string"?B.trim():"";if(m_(!1),!w||w===L_){requestAnimationFrame(()=>G_.current?.focus());return}P_?.(w)},g$=(B)=>{let w=typeof B?.chat_jid==="string"?B.chat_jid.trim():"";if(w&&typeof P_==="function"){P_(w);return}b$(B)},r0=async()=>{if(typeof T_!=="function")return;m_(!1);try{await T_()}catch(B){console.warn("Failed to rename session:",B)}requestAnimationFrame(()=>G_.current?.focus())},M0=async()=>{if(typeof $0!=="function")return;m_(!1);try{await $0()}catch(B){console.warn("Failed to create session:",B)}requestAnimationFrame(()=>G_.current?.focus())},E$=async()=>{if(typeof F0!=="function")return;m_(!1);try{await F0()}catch(B){console.warn("Failed to delete session:",B)}requestAnimationFrame(()=>G_.current?.focus())},X$=(B)=>{if(j)O_(B);else $_(B),U0(B),J$(B);requestAnimationFrame(()=>F$())},p$=(B)=>{let w=j?F_:z_,x=w&&!w.endsWith(`
`)?`
`:"",l=`${w}${x}${B}`.trimStart();X$(l)},I$=(B)=>{let w=B?.command?.model_label;if(w)return w;let x=B?.command?.message;if(typeof x==="string"){let l=x.match(/•\s+([^\n]+?)\s+\(current\)/);if(l?.[1])return l[1].trim()}return null},C$=async(B)=>{if(j||l_)return;o_(!0);try{let w=await q2("default",B,null,[],null,L_),x=I$(w);V$({model:x??m??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let l=await b2(L_);if(l)V$(l)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{o_(!1)}},c$=async()=>{await C$("/cycle-model")},r$=async(B)=>{if(!B||l_)return;if(await C$(`/model ${B}`))Q0(!1)},h$=(B)=>{B.preventDefault(),B.stopPropagation(),m_(!1),Q0((w)=>!w)},a$=(B)=>{if(B==="queue"||B==="steer"||B==="auto")return B;return Q_?"queue":null},q$=async(B,w,x={})=>{let{includeMedia:l=!0,includeFileRefs:V_=!0,includeMessageRefs:B_=!0,clearAfterSubmit:C_=!0,recordHistory:C0=!0}=x||{},L=typeof B==="string"?B:B&&typeof B?.target?.value==="string"?B.target.value:z_,U=typeof L==="string"?L:"";if(!U.trim()&&(l?b_.length===0:!0)&&(V_?q.length===0:!0)&&(B_?W.length===0:!0))return;J_(!1),A_([]),D_(!1),Y0([]),m_(!1),Y_(null);let k=l?[...b_]:[],y=V_?[...q]:[],g=B_?[...W]:[],s=U.trim();if(C0&&s){let o=y0.current,f=E0(o.filter((W_)=>W_!==s));if(f.push(s),f.length>200)f.splice(0,f.length-200);y0.current=f,d0(f),A$.current=-1,A0.current=""}let a=()=>{if(l)u_([...k]);if(V_)U_?.(y);if(B_)H_?.(g);$_(s),requestAnimationFrame(()=>F$())};if(C_)$_(""),u_([]),O?.(),M?.();(async()=>{try{if(await t?.({content:s,submitMode:w,fileRefs:y,messageRefs:g,mediaFiles:k})){_?.();return}let f=[];for(let t0 of k){let n$=await g1(t0);f.push(n$.id)}let W_=y.length?`Files:
${y.map((t0)=>`- ${t0}`).join(`
`)}`:"",L0=g.length?`Referenced messages:
${g.map((t0)=>`- message:${t0}`).join(`
`)}`:"",a0=f.length?`Images:
${f.map((t0,n$)=>{let G2=k[n$]?.name||`attachment-${n$+1}`;return`- attachment:${t0} (${G2})`}).join(`
`)}`:"",z0=[s,W_,L0,a0].filter(Boolean).join(`

`),W0=await q2("default",z0,null,f,a$(w),L_);if(N_?.(W0),W0?.command){V$({model:W0.command.model_label??m??null,thinking_level:W0.command.thinking_level,supports_thinking:W0.command.supports_thinking});try{let t0=await b2(L_);if(t0)V$(t0)}catch{}}_?.()}catch(o){if(C_)a();let f=o?.message||"Failed to send message.";Y_(f),v_?.(f),console.error("Failed to post:",o)}})()},E_=(B)=>{d_?.(B)},Y2=(B)=>{if(B.isComposing)return;if(j&&B.key==="Escape"){B.preventDefault(),O_(""),G?.();return}if(!j&&M_&&B.key==="Escape"){B.preventDefault(),m_(!1);return}if(H0&&K0.length>0){let w=G_.current?.value??(j?F_:z_);if(!String(w||"").match(/^@([a-zA-Z0-9_-]*)$/))D_(!1),Y0([]);else{if(B.key==="ArrowDown"){B.preventDefault(),v0((x)=>(x+1)%K0.length);return}if(B.key==="ArrowUp"){B.preventDefault(),v0((x)=>(x-1+K0.length)%K0.length);return}if(B.key==="Tab"||B.key==="Enter"){B.preventDefault(),b$(K0[R0]);return}if(B.key==="Escape"){B.preventDefault(),D_(!1),Y0([]);return}}}if(N0&&x_.length>0){let w=G_.current?.value??(j?F_:z_);if(!String(w||"").startsWith("/"))J_(!1),A_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),s_((x)=>(x+1)%x_.length);return}if(B.key==="ArrowUp"){B.preventDefault(),s_((x)=>(x-1+x_.length)%x_.length);return}if(B.key==="Tab"){B.preventDefault(),s0(x_[i_]);return}if(B.key==="Enter"&&!B.shiftKey){if(!(G_.current?.value??(j?F_:z_)).includes(" ")){B.preventDefault();let V_=x_[i_];J_(!1),A_([]),q$(V_.name);return}}if(B.key==="Escape"){B.preventDefault(),J_(!1),A_([]);return}}}if(!j&&(B.key==="ArrowUp"||B.key==="ArrowDown")&&!B.metaKey&&!B.ctrlKey&&!B.altKey&&!B.shiftKey){let w=G_.current;if(!w)return;let x=w.value||"",l=w.selectionStart===0&&w.selectionEnd===0,V_=w.selectionStart===x.length&&w.selectionEnd===x.length;if(B.key==="ArrowUp"&&l||B.key==="ArrowDown"&&V_){let B_=y0.current;if(!B_.length)return;B.preventDefault();let C_=A$.current;if(B.key==="ArrowUp"){if(C_===-1)A0.current=x,C_=B_.length-1;else if(C_>0)C_-=1;A$.current=C_,X$(B_[C_]||"")}else{if(C_===-1)return;if(C_<B_.length-1)C_+=1,A$.current=C_,X$(B_[C_]||"");else A$.current=-1,X$(A0.current||""),A0.current=""}requestAnimationFrame(()=>{let C0=G_.current;if(!C0)return;let L=C0.value.length;C0.selectionStart=L,C0.selectionEnd=L});return}}if(B.key==="Enter"&&!B.shiftKey&&(B.ctrlKey||B.metaKey)){B.preventDefault();let w=G_.current?.value??(j?F_:z_);if(j){if(w.trim())N?.(w.trim(),Z)}else q$(w,"steer");return}if(B.key==="Enter"&&!B.shiftKey){B.preventDefault();let w=G_.current?.value??(j?F_:z_);if(j){if(w.trim())N?.(w.trim(),Z)}else q$(w)}},t$=(B)=>{let w=Array.from(B||[]).filter((x)=>x&&x.type&&x.type.startsWith("image/"));if(!w.length)return;u_((x)=>[...x,...w]),Y_(null)},i$=(B)=>{t$(B.target.files),B.target.value=""},e$=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),n0.current+=1,h_(!0)},J2=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),n0.current=Math.max(0,n0.current-1),n0.current===0)h_(!1)},D2=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),B.dataTransfer)B.dataTransfer.dropEffect="copy";h_(!0)},_2=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),n0.current=0,h_(!1),t$(B.dataTransfer?.files||[])},E2=(B)=>{if(j)return;let w=B.clipboardData?.items;if(!w||!w.length)return;let x=[];for(let l of w){if(l.kind!=="file")continue;let V_=l.getAsFile?.();if(V_)x.push(V_)}if(x.length>0)B.preventDefault(),t$(x)},i0=(B)=>{u_((w)=>w.filter((x,l)=>l!==B))},c0=()=>{Y_(null),u_([]),O?.(),M?.()},l$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((B)=>{let{latitude:w,longitude:x,accuracy:l}=B.coords,V_=`${w.toFixed(5)}, ${x.toFixed(5)}`,B_=Number.isFinite(l)?` ±${Math.round(l)}m`:"",C_=`https://maps.google.com/?q=${w},${x}`,C0=`Location: ${V_}${B_} ${C_}`;p$(C0)},(B)=>{let w=B?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!G0)return;m0(!0),b2(L_).then((B)=>{let w=Array.isArray(B?.models)?B.models.filter((x)=>typeof x==="string"&&x.trim().length>0):[];w.sort((x,l)=>x.localeCompare(l,void 0,{sensitivity:"base"})),w_(w),V$(B)}).catch((B)=>{console.warn("Failed to load model list:",B),w_([])}).finally(()=>{m0(!1)})},[G0,m]),v(()=>{if(j)Q0(!1),m_(!1),J_(!1),A_([]),D_(!1),Y0([])},[j]),v(()=>{if(M_&&!G$)m_(!1)},[M_,G$]),v(()=>{if(!G0)return;let B=(w)=>{let x=T0.current,l=k$.current,V_=w.target;if(x&&x.contains(V_))return;if(l&&l.contains(V_))return;Q0(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[G0]),v(()=>{if(!M_)return;let B=(w)=>{let x=K$.current,l=f$.current,V_=w.target;if(x&&x.contains(V_))return;if(l&&l.contains(V_))return;m_(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[M_]),v(()=>{let B=()=>{let B_=J0.current?.clientWidth||0;T((C_)=>C_===B_?C_:B_)};B();let w=J0.current,x=0,l=()=>{if(x)cancelAnimationFrame(x);x=requestAnimationFrame(()=>{x=0,B()})},V_=null;if(w&&typeof ResizeObserver<"u")V_=new ResizeObserver(()=>l()),V_.observe(w);if(typeof window<"u")window.addEventListener("resize",l);return()=>{if(x)cancelAnimationFrame(x);if(V_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",l)}},[j,m,X0.length,H?.percent]);let W2=(B)=>{let w=B.target.value;if(Y_(null),M_)m_(!1);F$(B.target),X$(w)};return v(()=>{requestAnimationFrame(()=>F$())},[z_,F_,j]),v(()=>{if(j)return;J$(z_)},[R_,L_,z_,j]),Q`
        <div class="compose-box">
            ${!j&&X_.length>0&&Q`
                <div class="compose-queue-stack">
                    ${X_.map((B)=>{let w=typeof B?.content==="string"?B.content:"",x=q0(w);if(!x.text.trim()&&x.fileRefs.length===0&&x.messageRefs.length===0)return null;return Q`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${w}>
                                    ${x.text.trim()&&Q`
                                        <div class="compose-queue-stack-text">${x.text}</div>
                                    `}
                                    ${(x.messageRefs.length>0||x.fileRefs.length>0)&&Q`
                                        <div class="compose-queue-stack-refs">
                                            ${x.messageRefs.map((l)=>Q`
                                                <${L$}
                                                    key=${"queue-msg-"+l}
                                                    prefix="compose"
                                                    label=${"msg:"+l}
                                                    title=${"Message reference: "+l}
                                                    icon="message"
                                                />
                                            `)}
                                            ${x.fileRefs.map((l)=>{let V_=l.split("/").pop()||l;return Q`
                                                    <${L$}
                                                        key=${"queue-file-"+l}
                                                        prefix="compose"
                                                        label=${V_}
                                                        title=${l}
                                                        onClick=${()=>c?.(l)}
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
                                        onClick=${()=>E_(B)}
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
                                        onClick=${()=>__?.(B)}
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
                class=${`compose-input-wrapper${Z0?" drag-active":""}`}
                onDragEnter=${e$}
                onDragOver=${D2}
                onDragLeave=${J2}
                onDrop=${_2}
            >
                <div class="compose-input-main">
                    ${r&&!Q$&&Q`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${r}</div>
                    `}
                    ${Q$&&Q`
                        <div class="compose-file-refs">
                            ${r&&Q`
                                <div class="compose-submit-error" role="status" aria-live="polite">${r}</div>
                            `}
                            ${W.map((B)=>{return Q`
                                    <${L$}
                                        key=${"msg-"+B}
                                        prefix="compose"
                                        label=${"msg:"+B}
                                        title=${"Message reference: "+B}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(B)}
                                    />
                                `})}
                            ${q.map((B)=>{let w=B.split("/").pop()||B;return Q`
                                    <${L$}
                                        prefix="compose"
                                        label=${w}
                                        title=${B}
                                        onClick=${()=>c?.(B)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(B)}
                                    />
                                `})}
                            ${b_.map((B,w)=>{let x=B?.name||`attachment-${w+1}`;return Q`
                                    <${L$}
                                        key=${x+w}
                                        prefix="compose"
                                        label=${x}
                                        title=${x}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>i0(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${c0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof j_==="function"&&Q`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>j_?.()}
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
                        ref=${G_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?F_:z_}
                        onInput=${W2}
                        onKeyDown=${Y2}
                        onPaste=${E2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${H0&&K0.length>0&&Q`
                        <div class="slash-autocomplete" ref=${f_}>
                            ${K0.map((B,w)=>Q`
                                <div
                                    key=${B.chat_jid||B.agent_name}
                                    class=${`slash-item${w===R0?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),b$(B)}}
                                    onMouseEnter=${()=>v0(w)}
                                >
                                    <span class="slash-name">@${B.agent_name}</span>
                                    <span class="slash-desc">${B.display_name||B.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${N0&&x_.length>0&&Q`
                        <div class="slash-autocomplete" ref=${S_}>
                            ${x_.map((B,w)=>Q`
                                <div
                                    key=${B.name}
                                    class=${`slash-item${w===i_?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),s0(B)}}
                                    onMouseEnter=${()=>s_(w)}
                                >
                                    <span class="slash-name">${B.name}</span>
                                    <span class="slash-desc">${B.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${G0&&!j&&Q`
                        <div class="compose-model-popup" ref=${T0}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${V0&&Q`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!V0&&u0.length===0&&Q`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!V0&&u0.map((B)=>Q`
                                    <button
                                        key=${B}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===B?" active":""}`}
                                        onClick=${()=>{r$(B)}}
                                        disabled=${l_}
                                    >
                                        ${B}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{c$()}}
                                    disabled=${l_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${M_&&!j&&Q`
                        <div class="compose-model-popup" ref=${K$}>
                            <div class="compose-model-popup-title">Switch active session</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Active sessions">
                                ${!w0&&Q`
                                    <div class="compose-model-popup-empty">No other active sessions.</div>
                                `}
                                ${w0&&W$.map((B)=>Q`
                                    <button
                                        key=${B.chat_jid}
                                        type="button"
                                        role="menuitem"
                                        class="compose-model-popup-item"
                                        onClick=${()=>o0(B.chat_jid)}
                                    >
                                        ${`@${B.agent_name}${B.display_name?` — ${B.display_name}`:""}${B.is_active?" • active":""}`}
                                    </button>
                                `)}
                            </div>
                            ${(k0||P$||M$)&&Q`
                                <div class="compose-model-popup-actions">
                                    ${k0&&Q`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{M0()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${P$&&Q`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${()=>{r0()}}
                                            title="Rename current branch name and agent handle"
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${M$&&Q`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{E$()}}
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
                <div class="compose-footer" ref=${J0}>
                    ${!j&&m&&Q`
                    <div class="compose-meta-row">
                        ${!j&&m&&Q`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k$}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${m$}
                                    aria-label="Open model picker"
                                    onClick=${h$}
                                    disabled=${l_}
                                >
                                    ${l_?"Switching…":U$}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!l_&&P0&&Q`
                                        <span class="compose-model-usage-hint" title=${m$}>
                                            ${P0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${v$&&Q`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${X0.map((B)=>Q`
                                <button
                                    key=${B.chat_jid||B.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${B.is_active?" active":""}`}
                                    onClick=${()=>g$(B)}
                                    title=${`${B.display_name||B.chat_jid||"Active agent"} — switch to @${B.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${B.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&H&&H.percent!=null&&Q`
                        <${r9} usage=${H} />
                    `}
                    ${G$&&Q`
                        <button
                            ref=${f$}
                            type="button"
                            class=${`icon-btn compose-mention-btn${M_?" active":""}`}
                            onClick=${D$}
                            title=${M_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${M_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&Q`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(B)=>z?.(B.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?G:K}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?Q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:Q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${j0&&!j&&Q`
                        <button
                            class="icon-btn location-btn"
                            onClick=${l$}
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
                    ${I0&&!j&&Q`
                        <button
                            class=${`icon-btn notification-btn${h0?" active":""}`}
                            onClick=${i}
                            title=${w$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&Q`
                        ${d&&K_&&Q`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${K_}
                                title=${`Attach open file: ${d}`}
                                type="button"
                                disabled=${q.includes(d)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${i$} />
                        </label>
                    `}
                    ${(I_!=="connected"||!j)&&Q`
                        <div class="compose-send-stack">
                            ${I_!=="connected"&&Q`
                                <span class="compose-connection-status connection-status ${I_}" title=${o$}>
                                    ${R$}
                                </span>
                            `}
                            ${!j&&Q`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{q$()}}
                                    disabled=${!K2}
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
    `}var p3="piclaw_theme",Z4="piclaw_tint",T2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},c3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},m3={default:{label:"Default",mode:"auto",light:T2,dark:c3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},a9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],j2={theme:"default",tint:null},h3="light",$4=!1;function N4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function U2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function t9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),G=parseInt(N[3],10);if(![z,K,G].every((X)=>Number.isFinite(X)))return null;let q=`#${[z,K,G].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:G,hex:q}}function i3(_){return U2(_)||t9(_)}function x2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function j4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function e9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function _7(_){return e9(_)>0.4?"#000000":"#ffffff"}function l3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function z4(_){return m3[_]||m3.default}function $7(_){return _.mode==="auto"?l3():_.mode}function n3(_,$){let j=z4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||T2}function d3(_,$,j){let Z=i3($);if(!Z)return _;let N=U2(_.bgPrimary),z=U2(_.bgSecondary),K=U2(_.bgHover),G=U2(_.borderColor);if(!N||!z||!K||!G)return _;let X=U2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:x2(N,Z,0.08),bgSecondary:x2(z,Z,0.12),bgHover:x2(K,Z,0.16),borderColor:x2(G,Z,0.08),accent:Z.hex,accentHover:X?x2(Z,X,0.18):Z.hex}}function j7(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=i3(Z),z=N?j4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?j4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?j4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=N?_7(N):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":G,"--accent-contrast-text":q,"--danger-color":_.danger||T2.danger,"--success-color":_.success||T2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([O,W])=>{if(W)j.style.setProperty(O,W)})}function Z7(){if(typeof document>"u")return;let _=document.documentElement;a9.forEach(($)=>_.style.removeProperty($))}function Q2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function g3(_){let $=N4(j2?.theme||"default"),j=j2?.tint?String(j2.tint).trim():null,Z=n3($,_);if($==="default"&&j)Z=d3(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?c3.bgPrimary:T2.bgPrimary}function N7(_,$){if(typeof document>"u")return;let j=Q2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=Q2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",g3("light"));let N=Q2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",g3("dark"));let z=Q2("msapplication-TileColor");if(z&&_)z.setAttribute("content",_);let K=Q2("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let G=Q2("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function z7(){if(typeof window>"u")return;let _={...j2,mode:h3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function K4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=N4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=z4(j),z=$7(N),K=n3(j,z);j2={theme:j,tint:Z},h3=z;let G=document.documentElement;G.dataset.theme=z,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=z;let q=K;if(j==="default"&&Z)q=d3(K,Z,z);if(j==="default"&&!Z)Z7();else j7(q,z);if(N7(q.bgPrimary,z),z7(),$.persist!==!1)if(_0(p3,j),Z)_0(Z4,Z);else _0(Z4,"")}function N1(){if(z4(j2.theme).mode!=="auto")return;K4(j2,{persist:!1})}function s3(){if(typeof window>"u")return()=>{};let _=N4(Z$(p3)||"default"),$=Z$(Z4),j=$?$.trim():null;if(K4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!$4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",N1);else if(Z.addListener)Z.addListener(N1);return $4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",N1);else if(Z.removeListener)Z.removeListener(N1);$4=!1}}return()=>{}}function o3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;K4({theme:j||"default",tint:Z},{persist:!0})}function r3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return l3()}var z1=/#(\w+)/g,K7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),Y7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),W7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),G7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},V7=new Set(["http:","https:","mailto:",""]);function Y4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function Z2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!V7.has(Z.protocol))return null;return Z.href}catch{return null}}function a3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let G=K.tagName.toLowerCase();if(!Y7.has(G)){let X=K.parentNode;if(!X)continue;while(K.firstChild)X.insertBefore(K.firstChild,K);X.removeChild(K);continue}let q=G7[G]||new Set;for(let X of Array.from(K.attributes)){let O=X.name.toLowerCase(),W=X.value;if(O.startsWith("on")){K.removeAttribute(X.name);continue}if(O.startsWith("data-")||O.startsWith("aria-"))continue;if(q.has(O)||W7.has(O)){if(O==="href"){let F=Z2(W);if(!F)K.removeAttribute(X.name);else if(K.setAttribute(X.name,F),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(O==="src"){let F=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,M=Z2(F,{allowDataImage:G==="img"});if(!M)K.removeAttribute(X.name);else K.setAttribute(X.name,M)}continue}K.removeAttribute(X.name)}}return j.body.innerHTML}function t3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function K1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=t3(j);if(N===j)break;j=N}return j}function X7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let G of j){if(!z&&G.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&G.trim().match(/^```\s*$/)){let q=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${q}@@`),z=!1,K=[];continue}if(z)K.push(G);else N.push(G)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function q7(_){if(!_)return _;return K1(_,5)}function L7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function O7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function B7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=q7(z);return`<div class="mermaid-container" data-mermaid="${L7(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function e3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var Q7={span:new Set(["title","class","lang","dir"])};function U7(_,$){let j=Q7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,z;while(z=N.exec($)){let K=(z[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let G=z[2]??z[3]??z[4]??"";Z.push(` ${K}="${Y4(G)}"`)}return Z.join("")}function _6(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,G=z.endsWith("/")?z.slice(0,-1).trim():z,[q=""]=G.split(/\s+/,1),X=q.toLowerCase();if(!X||!K7.has(X))return $;if(X==="br")return N?"":"<br>";if(N)return`</${X}>`;let O=G.slice(q.length).trim(),W=U7(X,O);return`<${X}${W}>`})}function $6(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function j6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function F7(_){if(!window.katex)return _;let $=(K)=>t3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let G=[],q=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let O=G.length;return G.push(X),`@@CODE_BLOCK_${O}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let O=G.length;return G.push(X),`@@CODE_INLINE_${O}@@`}),{html:q,blocks:G}},Z=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,X)=>{let O=Number(X);return G[O]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,q)=>{try{let X=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${G}${X}`}catch(X){return`<span class="math-error" title="${Y4(X.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,q)=>{if(/\s$/.test(q))return K;try{let X=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${G}${X}`}catch(X){return`${G}<span class="math-error" title="${Y4(X.message)}">$${q}$</span>`}}),Z(z,N.blocks)}function H7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(z1.lastIndex=0,!z1.test(K))continue;z1.lastIndex=0;let G=z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let q=K.split(z1);if(q.length<=1)continue;let X=$.createDocumentFragment();q.forEach((O,W)=>{if(W%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",O),F.textContent=`#${O}`,X.appendChild(F)}else X.appendChild($.createTextNode(O))}),z.parentNode?.replaceChild(X,z)}return $.body.innerHTML}function J7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function l0(_,$,j={}){if(!_)return"";let Z=J7(_),{text:N,blocks:z}=X7(Z),K=K1(N,2),q=e3(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=_6(q),O=window.marked?marked.parse(X,{headerIds:!1,mangle:!1}):X.replace(/\n/g,"<br>");return O=$6(O),O=j6(O),O=F7(O),O=H7(O),O=B7(O,z),O=a3(O,j),O}function Y1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=K1($,2),N=e3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=_6(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=$6(K),K=j6(K),K=a3(K),K}function D7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,z)=>{let K=N.trim().split(/\s+/).map((q)=>{let[X,O]=q.split(",").map(Number);return{x:X,y:O}});if(K.length<3)return`<polyline${Z}points="${N}"${z}/>`;let G=[`M ${K[0].x},${K[0].y}`];for(let q=1;q<K.length-1;q++){let X=K[q-1],O=K[q],W=K[q+1],F=O.x-X.x,M=O.y-X.y,m=W.x-O.x,u=W.y-O.y,R=Math.sqrt(F*F+M*M),E=Math.sqrt(m*m+u*u),H=Math.min($,R/2,E/2);if(H<0.5){G.push(`L ${O.x},${O.y}`);continue}let C=O.x-F/R*H,I=O.y-M/R*H,i=O.x+m/E*H,n=O.y+u/E*H,d=F*u-M*m>0?1:0;G.push(`L ${C},${I}`),G.push(`A ${H},${H} 0 0 ${d} ${i},${n}`)}return G.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${Z}d="${G.join(" ")}"${z}/>`})}async function T$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=r3()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let G=K.dataset.mermaid,q=O7(G||""),X=K1(q,2),O=await $(X,{...N,transparent:!0});O=D7(O),K.innerHTML=O,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(q),K.removeAttribute("data-mermaid")}}function Z6(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function N6(_){return String(_||"").trim()||"web:default"}function z6(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function K6(_){if(!_)return!1;return _.status!=="running"}function Y6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function W6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),z=D(null),K=_?.thinking?Y1(_.thinking):"",G=_?.answer?l0(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(N.current&&K)T$(N.current).catch(()=>{})},[K]),v(()=>{if(z.current&&G)T$(z.current).catch(()=>{})},[G]),!_)return null;let q=_.status==="running",X=Boolean(String(_.answer||"").trim()),O=Boolean(String(_.thinking||"").trim()),W=z6(_),F=K6(_),M=!q&&X,m=q?"Thinking…":_.status==="error"?"Error":"Done";return Q`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${m}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&Q`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&Q`<div class="btw-block btw-error">${_.error}</div>`}
            ${O&&Q`
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${W&&Q`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${F&&Q`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&Q`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!M}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var G6="PiClaw";function W4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,G=z[K],q=Z.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",O=X?X:null,W=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:N,color:G,image:O||(W?"/static/icon-192.png":null)}}function V6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function X6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function q6(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",G=z?.dataset?.tint||"",q=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(q&&(G||K&&K!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function E7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function S2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function L6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return S2(_)?"Compacting context":"Working..."}function k7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function O6(_,$=Date.now()){let j=E7(_);if(j===null)return null;return k7(Math.max(0,$-j))}function B6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:G,onPanelToggle:q}){let W=($_)=>{if(!$_)return{text:"",totalLines:0,fullText:""};if(typeof $_==="string"){let u_=$_,Z0=u_?u_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:u_,totalLines:Z0,fullText:u_}}let F_=$_.text||"",O_=$_.fullText||$_.full_text||F_,b_=Number.isFinite($_.totalLines)?$_.totalLines:O_?O_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:F_,totalLines:b_,fullText:O_}},F=160,M=($_)=>String($_||"").replace(/<\/?internal>/gi,""),m=($_)=>{if(!$_)return 1;return Math.max(1,Math.ceil($_.length/160))},u=($_,F_,O_)=>{let b_=($_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!b_)return{text:"",omitted:0,totalLines:Number.isFinite(O_)?O_:0,visibleLines:0};let u_=b_.split(`
`),Z0=u_.length>F_?u_.slice(0,F_).join(`
`):b_,h_=Number.isFinite(O_)?O_:u_.reduce((i_,s_)=>i_+m(s_),0),x_=Z0?Z0.split(`
`).reduce((i_,s_)=>i_+m(s_),0):0,A_=Math.max(h_-x_,0);return{text:Z0,omitted:A_,totalLines:h_,visibleLines:x_}},R=W(j),E=W(Z),H=W($),C=Boolean(R.text)||R.totalLines>0,I=Boolean(E.text)||E.totalLines>0,i=Boolean(H.fullText?.trim()||H.text?.trim());if(!_&&!i&&!C&&!I&&!N&&!z)return null;let[n,e]=S(new Set),[d,K_]=S(()=>Date.now()),c=($_)=>e((F_)=>{let O_=new Set(F_),b_=!O_.has($_);if(b_)O_.add($_);else O_.delete($_);if(typeof q==="function")q($_,b_);return O_});v(()=>{e(new Set)},[K]);let X_=S2(_);v(()=>{if(!X_)return;K_(Date.now());let $_=setInterval(()=>K_(Date.now()),1000);return()=>clearInterval($_)},[X_,_?.started_at,_?.startedAt]);let d_=_?.turn_id||K,__=q6(d_),t=G?"turn-dot turn-dot-queued":"turn-dot",N_=($_)=>$_,j_=Boolean(_?.last_activity||_?.lastActivity),Q_=($_)=>$_==="warning"?"#f59e0b":$_==="error"?"var(--danger-color)":$_==="success"?"var(--success-color)":__,R_=z?.kind||"info",L_=Q_(R_),I_=Q_(_?.kind||(X_?"warning":"info")),U_="",H_=_?.title,v_=_?.status;if(_?.type==="plan")U_=H_?`Planning: ${H_}`:"Planning...";else if(_?.type==="tool_call")U_=H_?`Running: ${H_}`:"Running tool...";else if(_?.type==="tool_status")U_=H_?`${H_}: ${v_||"Working..."}`:v_||"Working...";else if(_?.type==="error")U_=H_||"Agent error";else U_=H_||v_||"Working...";if(j_)U_="Last activity just now";let P_=({panelTitle:$_,text:F_,fullText:O_,totalLines:b_,maxLines:u_,titleClass:Z0,panelKey:h_})=>{let x_=n.has(h_),A_=O_||F_||"",i_=h_==="thought"||h_==="draft"?M(A_):A_,s_=typeof u_==="number",N0=x_&&s_,J_=s_?u(i_,u_,b_):{text:i_||"",omitted:0,totalLines:Number.isFinite(b_)?b_:0};if(!i_&&!(Number.isFinite(J_.totalLines)&&J_.totalLines>0))return null;let K0=`agent-thinking-body${s_?" agent-thinking-body-collapsible":""}`,Y0=s_?`--agent-thinking-collapsed-lines: ${u_};`:"";return Q`
            <div
                class="agent-thinking"
                data-expanded=${x_?"true":"false"}
                data-collapsible=${s_?"true":"false"}
                style=${__?`--turn-color: ${__};`:""}
            >
                <div class="agent-thinking-title ${Z0||""}">
                    ${__&&Q`<span class=${t} aria-hidden="true"></span>`}
                    ${$_}
                    ${N0&&Q`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$_} panel`}
                            onClick=${()=>c(h_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${K0}
                    style=${Y0}
                    dangerouslySetInnerHTML=${{__html:Y1(i_)}}
                />
                ${!x_&&J_.omitted>0&&Q`
                    <button class="agent-thinking-truncation" onClick=${()=>c(h_)}>
                        ▸ ${J_.omitted} more lines
                    </button>
                `}
                ${x_&&J_.omitted>0&&Q`
                    <button class="agent-thinking-truncation" onClick=${()=>c(h_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},T_=N?.tool_call?.title,$0=T_?`Awaiting approval: ${T_}`:"Awaiting approval",F0=X_?O6(_,d):null,z_=($_,F_,O_=null)=>{let b_=L6($_);return Q`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${F_?`--turn-color: ${F_};`:""}
                title=${$_?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${F_&&Q`<span class=${t} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${b_}</span>
                    ${O_&&Q`<span class="agent-status-elapsed">${O_}</span>`}
                </div>
                ${$_.detail&&Q`<div class="agent-thinking-body">${$_.detail}</div>`}
            </div>
        `};return Q`
        <div class="agent-status-panel">
            ${z&&z_(z,L_)}
            ${_?.type==="intent"&&z_(_,I_,F0)}
            ${N&&Q`
                <div class="agent-status agent-status-request" aria-live="polite" style=${__?`--turn-color: ${__};`:""}>
                    <span class=${t} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${$0}</span>
                </div>
            `}
            ${C&&P_({panelTitle:N_("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${I&&P_({panelTitle:N_("Thoughts"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&P_({panelTitle:N_("Draft"),text:H.text,fullText:H.fullText,totalLines:H.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&Q`
                <div class=${`agent-status${j_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${__?`--turn-color: ${__};`:""}>
                    ${__&&Q`<span class=${t} aria-hidden="true"></span>`}
                    ${_?.type==="error"?Q`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!j_&&Q`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${U_}</span>
                </div>
            `}
        </div>
    `}function Q6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",G=Z?.kind||"other",q=Z?.rawInput||{},X=q.command||q.commands&&q.commands[0]||null,O=q.diff||null,W=q.fileName||q.path||null,F=Z?.description||q.description||q.explanation||null,m=(Array.isArray(Z?.locations)?Z.locations:[]).map((C)=>C?.path).filter((C)=>Boolean(C)),u=Array.from(new Set([W,...m].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let R=async(C)=>{try{await t2(j,C,z||null),$()}catch(I){console.error("Failed to respond to agent request:",I)}},E=async()=>{try{await c1(K,`Auto-approved: ${K}`),await t2(j,"approved",z||null),$()}catch(C){console.error("Failed to add to whitelist:",C)}},H=N&&N.length>0;return Q`
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
                ${(F||X||O||u.length>0)&&Q`
                    <div class="agent-request-body">
                        ${F&&Q`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${u.length>0&&Q`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${u.map((C,I)=>Q`<li key=${I}>${C}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${X&&Q`
                            <pre class="agent-request-command">${X}</pre>
                        `}
                        ${O&&Q`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${H?N.map((C)=>Q`
                            <button 
                                key=${C.optionId||C.id||String(C)}
                                class="agent-request-btn ${C.kind==="allow_once"||C.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(C.optionId||C.id||C)}
                            >
                                ${C.name||C.label||C.optionId||C.id||String(C)}
                            </button>
                        `):Q`
                        <button class="agent-request-btn primary" onClick=${()=>R("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>R("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function U6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let q=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${X}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function f2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function N$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function N2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var y7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),A7=new Set(["text/markdown"]),w7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),P7=new Set(["application/vnd.jgraph.mxfile"]);function R2(_){return typeof _==="string"?_.trim().toLowerCase():""}function M7(_){let $=R2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function b7(_){let $=R2(_);return!!$&&$.endsWith(".pdf")}function I7(_){let $=R2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function v2(_,$){let j=R2(_);if(M7($)||P7.has(j))return"drawio";if(b7($)||j==="application/pdf")return"pdf";if(I7($)||w7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(y7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function F6(_){let $=R2(_);return A7.has($)}function H6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function C7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function x7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function J6(_){return C7(_)||x7(_)}function W1(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function T7(_,$){let j=Math.max(W1(_),W1($)),Z=Math.min(W1(_),W1($));return(j+0.05)/(Z+0.05)}function S7(_,$,j="#ffffff"){let Z=J6(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let G=J6(K);if(!G)continue;let q=T7(Z,G);if(q>z)N=K,z=q}return N}function G4(){let _=getComputedStyle(document.documentElement),$=(m,u)=>{for(let R of m){let E=_.getPropertyValue(R).trim();if(E)return E}return u},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),O=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),M=S7(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:G,good:q,warning:X,attention:O,border:W,fontFamily:F,buttonTextColor:M}}function D6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:G,border:q,fontFamily:X}=G4();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var f7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),E6=!1,G1=null,k6=!1;function V4(_){_.querySelector(".adaptive-card-notice")?.remove()}function R7(_,$,j="error"){V4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function v7(_,$=(j)=>l0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function u7(_=($)=>l0($,null)){return($,j)=>{try{let Z=v7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function m7(_){if(k6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=u7(),k6=!0}async function g7(){if(E6)return;if(G1)return G1;return G1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{E6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),G1}function p7(){return globalThis.AdaptiveCards}function c7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function h7(_){return f7.has(_)}function q4(_){if(!Array.isArray(_))return[];return _.filter(c7)}function i7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function X4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>X4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${X4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function l7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return X4($);return typeof $==="string"?$:String($)}function n7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=l7(K.type,j[K.id],K);for(let[G,q]of Object.entries(K))if(Array.isArray(q)||q&&typeof q==="object")K[G]=Z(q);return K};return Z(_)}function d7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function s7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function o7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=s7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function y6(_,$,j){if(!h7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await g7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=p7();m7(Z);let N=new Z.AdaptiveCard,z=G4();N.hostConfig=new Z.HostConfig(D6());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:n7($.payload,K);N.parse(G),N.onExecuteAction=(O)=>{let W=i7(O);if(j?.onAction)V4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let M=F instanceof Error?F.message:String(F||"Action failed.");R7(_,M||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let q=N.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let X=o7($);if(X){_.classList.add("adaptive-card-finished");let O=document.createElement("div");O.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=X.label,O.appendChild(W),X.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=X.detail,O.appendChild(F)}_.appendChild(O)}if(V4(_),_.appendChild(q),X)d7(q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function u2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>u2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${u2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function A6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:u2(j)})).filter(($)=>$.value)}function r7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function L4(_){if(!Array.isArray(_))return[];return _.filter(r7)}function w6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=u2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=A6(j).slice(0,4).map(({key:z,value:K})=>`${z}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function P6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=A6(_.data),Z=j.length>0?j.slice(0,2).map(({key:q,value:X})=>`${q}: ${X}`).join(", "):u2(_.data)||null,N=j.length,z=j.slice(0,4),K=j.slice(4),G=K.length;return{title:$,summary:Z,fields:z,hiddenFields:K,fieldCount:N,hiddenFieldCount:G,submittedAt:_.submitted_at}}function a7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?N$($):null},{label:"Added",value:_?.created_at?N2(_.created_at):null}].filter((Z)=>Z.value)}function t7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let z=$$(_);return`/office-viewer/?url=${encodeURIComponent(z)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function M6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=r_(()=>v2($?.content_type,Z),[$?.content_type,Z]),z=H6(N),K=r_(()=>F6($?.content_type),[$?.content_type]),[G,q]=S(N==="text"),[X,O]=S(""),[W,F]=S(null),M=D(null),m=r_(()=>a7($),[$]),u=r_(()=>t7(_,Z,N),[_,Z,N]),R=r_(()=>{if(!K||!X)return"";return l0(X)},[K,X]);return v(()=>{let E=(H)=>{if(H.key==="Escape")j()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[j]),v(()=>{if(!M.current||!R)return;T$(M.current);return},[R]),v(()=>{let E=!1;async function H(){if(N!=="text"){q(!1),F(null);return}q(!0),F(null);try{let C=await n1(_);if(!E)O(C)}catch{if(!E)F("Failed to load text preview.")}finally{if(!E)q(!1)}}return H(),()=>{E=!0}},[_,N]),Q`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(E)=>{E.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${u&&Q`
                            <a
                                href=${u}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(E)=>E.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${$$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(E)=>E.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&Q`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&W&&Q`<div class="attachment-preview-state">${W}</div>`}
                    ${!G&&!W&&N==="image"&&Q`
                        <img class="attachment-preview-image" src=${$$(_)} alt=${Z} />
                    `}
                    ${!G&&!W&&(N==="pdf"||N==="office"||N==="drawio")&&u&&Q`
                        <iframe class="attachment-preview-frame" src=${u} title=${Z}></iframe>
                    `}
                    ${!G&&!W&&N==="drawio"&&Q`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!G&&!W&&N==="text"&&K&&Q`
                        <div
                            ref=${M}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:R}}
                        />
                    `}
                    ${!G&&!W&&N==="text"&&!K&&Q`
                        <pre class="attachment-preview-text">${X}</pre>
                    `}
                    ${!G&&!W&&N==="unsupported"&&Q`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${m.map((E)=>Q`
                        <div class="attachment-preview-meta-item" key=${E.label}>
                            <span class="attachment-preview-meta-label">${E.label}</span>
                            <span class="attachment-preview-meta-value">${E.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function b6({src:_,onClose:$}){return v(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),Q`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function e7({mediaId:_,onPreview:$}){let[j,Z]=S(null);if(v(()=>{L2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?N$(z):"",q=v2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return Q`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
            <a href=${$$(_)} download=${N} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${N}</span>
                    <span class="file-meta-row">
                        ${K&&Q`<span class="file-size">${K}</span>`}
                        ${j.content_type&&Q`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${q}
            </button>
        </div>
    `}function _5({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=S(null);v(()=>{if(!Number.isFinite(j))return;L2(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?$$(j):null,q=v2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return Q`
        <span class="attachment-pill" title=${z}>
            ${K?Q`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${L$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:Q`
                    <${L$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&Q`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${q}
                    onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function V1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?N2(Z):null;return Q`
        <div class="content-annotations">
            ${$&&$.length>0&&Q`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&Q`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&Q`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function $5({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?N$(_.size):"",N=_.mime_type||"",z=Z5(N),K=Z2(_.uri);return Q`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&Q`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&Q`<span>${N}</span>`}
                    ${Z&&Q`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function j5({block:_}){let[$,j]=S(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return Q`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&Q`
                ${N&&Q`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&Q`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&Q`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(W)=>W.charCodeAt(0))],{type:K||"application/octet-stream"}),X=URL.createObjectURL(q),O=document.createElement("a");O.href=X,O.download=Z.split("/").pop()||"resource",O.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function Z5(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function N5({preview:_}){let $=Z2(_.url),j=Z2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return Q`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(z)=>z.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&Q`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function z5(_,$){return typeof _==="string"?_:""}var K5=1800,Y5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,W5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,G5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function V5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function X5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let G=K||"idle";if(z.dataset.copyState=G,G==="success")z.innerHTML=W5,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(G==="error")z.innerHTML=G5,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=Y5,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),K.appendChild(G);let q=async(X)=>{X.preventDefault(),X.stopPropagation();let W=z.querySelector("code")?.textContent||"",F=await V5(W);N(G,F?"success":"error");let M=j.get(G);if(M)clearTimeout(M);let m=setTimeout(()=>{N(G,"idle"),j.delete(G)},K5);j.set(G,m)};G.addEventListener("click",q),Z.push(()=>{G.removeEventListener("click",q);let X=j.get(G);if(X)clearTimeout(X);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function q5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let X=j[z];if(/^\s*-\s+/.test(X))N.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:N}}function L5(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let X=j[z];if(/^\s*-\s+/.test(X)){let W=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W)N.push(W[1])}else if(!X.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:N}}function O5(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Images:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let X=j[z];if(/^\s*-\s+/.test(X)){let O=X.replace(/^\s*-\s+/,"").trim(),W=O.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||O.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let F=W[1],M=(W[2]||"").trim()||F;N.push({id:F,label:M,raw:O})}else N.push({id:null,label:O,raw:O})}else if(!X.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:N}}function B5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Q5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(B5).sort((O,W)=>W.length-O.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),q=[],X;while(X=G.nextNode())q.push(X);for(let O of q){let W=O.nodeValue;if(!W||!N.test(W)){N.lastIndex=0;continue}N.lastIndex=0;let F=O.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let M=W.split(N).filter((u)=>u!=="");if(M.length===0)continue;let m=K.createDocumentFragment();for(let u of M)if(z.test(u)){let R=K.createElement("mark");R.className="search-highlight-term",R.textContent=u,m.appendChild(R)}else m.appendChild(K.createTextNode(u));O.parentNode.replaceChild(m,O)}return K.body.innerHTML}function I6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:G,userAvatarUrl:q,userAvatarBackground:X,onDelete:O,isThreadReply:W,isThreadPrev:F,isThreadNext:M,isRemoving:m,highlightQuery:u,onFileRef:R}){let[E,H]=S(null),[C,I]=S(()=>new Set),i=D(null),n=_.data,e=n.type==="agent_response",d=G||"You",K_=e?z||G6:d,c=e?W4(z,K,!0):W4(d,q),X_=typeof X==="string"?X.trim().toLowerCase():"",d_=!e&&c.image&&(X_==="clear"||X_==="transparent"),__=e&&Boolean(c.image),t=`background-color: ${d_||__?"transparent":c.color}`,N_=n.content_meta,j_=Boolean(N_?.truncated),Q_=Boolean(N_?.preview),R_=j_&&!Q_,L_=j_?{originalLength:Number.isFinite(N_?.original_length)?N_.original_length:n.content?n.content.length:0,maxLength:Number.isFinite(N_?.max_length)?N_.max_length:0}:null,I_=n.content_blocks||[],U_=n.media_ids||[],H_=z5(n.content,n.link_previews),{content:v_,fileRefs:P_}=q5(H_),{content:T_,messageRefs:$0}=L5(v_),{content:F0,attachments:z_}=O5(T_);H_=F0;let $_=q4(I_),F_=L4(I_),O_=$_.length===1&&typeof $_[0]?.fallback_text==="string"?$_[0].fallback_text.trim():"",b_=F_.length===1?w6(F_[0]).trim():"",u_=Boolean(O_)&&H_?.trim()===O_||Boolean(b_)&&H_?.trim()===b_,Z0=Boolean(H_)&&!R_&&!u_,h_=typeof u==="string"?u.trim():"",x_=r_(()=>{if(!H_||u_)return"";let T=l0(H_,j);return h_?Q5(T,h_):T},[H_,u_,h_]),A_=(T,r)=>{T.stopPropagation(),H($$(r))},[i_,s_]=S(null),N0=(T)=>{s_(T)},J_=(T)=>{T.stopPropagation(),O?.(_)},K0=(T)=>{I((r)=>{let Y_=new Set(r);if(Y_.has(T))Y_.delete(T);else Y_.add(T);return Y_})},Y0=(T,r)=>{let Y_=new Set;if(!T||r.length===0)return{content:T,usedIds:Y_};return{content:T.replace(/attachment:([^\s)"']+)/g,(S_,f_,T0,k$)=>{let K$=f_.replace(/^\/+/,""),J0=r.find((D0)=>D0.name&&D0.name.toLowerCase()===K$.toLowerCase()&&!Y_.has(D0.id))||r.find((D0)=>!Y_.has(D0.id));if(!J0)return S_;if(Y_.add(J0.id),k$.slice(Math.max(0,T0-2),T0)==="](")return`/media/${J0.id}`;return J0.name||"attachment"}),usedIds:Y_}},R0=[],v0=[],H0=[],D_=[],l_=[],o_=[],G0=0;if(I_.length>0)I_.forEach((T)=>{if(T?.type==="text"&&T.annotations)o_.push(T.annotations);if(T?.type==="resource_link")D_.push(T);else if(T?.type==="resource")l_.push(T);else if(T?.type==="file"){let r=U_[G0++];if(r)v0.push(r),H0.push({id:r,name:T?.name||T?.filename||T?.title})}else if(T?.type==="image"||!T?.type){let r=U_[G0++];if(r){let Y_=typeof T?.mime_type==="string"?T.mime_type:void 0;R0.push({id:r,annotations:T?.annotations,mimeType:Y_}),H0.push({id:r,name:T?.name||T?.filename||T?.title})}}});else if(U_.length>0)U_.forEach((T)=>{R0.push({id:T,annotations:null}),H0.push({id:T,name:null})});if(z_.length>0)z_.forEach((T)=>{if(!T?.id)return;let r=H0.find((Y_)=>String(Y_.id)===String(T.id));if(r&&!r.name)r.name=T.label});let{content:Q0,usedIds:M_}=Y0(H_,H0);H_=Q0;let m_=R0.filter(({id:T})=>!M_.has(T)),u0=v0.filter((T)=>!M_.has(T)),w_=z_.length>0?z_.map((T,r)=>({id:T.id||`attachment-${r+1}`,label:T.label||`attachment-${r+1}`})):H0.map((T,r)=>({id:T.id,label:T.name||`attachment-${r+1}`})),V0=r_(()=>q4(I_),[I_]),m0=r_(()=>L4(I_),[I_]);v(()=>{if(!i.current)return;return T$(i.current),X5(i.current)},[x_]);let z$=D(null);return v(()=>{if(!z$.current||V0.length===0)return;let T=z$.current;T.innerHTML="";for(let r of V0){let Y_=document.createElement("div");T.appendChild(Y_),y6(Y_,r,{onAction:async(G_)=>{if(G_.type==="Action.OpenUrl"){let S_=Z2(G_.url||"");if(!S_)throw Error("Invalid URL");window.open(S_,"_blank","noopener,noreferrer");return}if(G_.type==="Action.Submit"){await p1({post_id:_.id,thread_id:n.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:r.card_id,action:{type:G_.type,title:G_.title||"",data:G_.data}});return}console.warn("[post] unsupported adaptive card action:",G_.type,G_)}}).catch((G_)=>{console.error("[post] adaptive card render error:",G_),Y_.textContent=r.fallback_text||"Card failed to render."})}},[V0,n.thread_id,_.id]),Q`
        <div id=${`post-${_.id}`} class="post ${e?"agent-post":""} ${W?"thread-reply":""} ${F?"thread-prev":""} ${M?"thread-next":""} ${m?"removing":""}" onClick=${$}>
            <div class="post-avatar ${e?"agent-avatar":""} ${c.image?"has-image":""}" style=${t}>
                ${c.image?Q`<img src=${c.image} alt=${K_} />`:c.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${J_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${K_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(T)=>{if(T.preventDefault(),T.stopPropagation(),Z)Z(_.id)}}>${U6(_.timestamp)}</a>
                </div>
                ${R_&&L_&&Q`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${f2(L_.originalLength)} chars
                            ${L_.maxLength?Q` • Display limit: ${f2(L_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${Q_&&L_&&Q`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${f2(L_.maxLength)} of ${f2(L_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(P_.length>0||$0.length>0||w_.length>0)&&Q`
                    <div class="post-file-refs">
                        ${$0.map((T)=>{let r=(Y_)=>{if(Y_.preventDefault(),Y_.stopPropagation(),N)N(T,_.chat_jid||null);else{let G_=document.getElementById("post-"+T);if(G_)G_.scrollIntoView({behavior:"smooth",block:"center"}),G_.classList.add("post-highlight"),setTimeout(()=>G_.classList.remove("post-highlight"),2000)}};return Q`
                                <a href=${`#msg-${T}`} class="post-msg-pill-link" onClick=${r}>
                                    <${L$}
                                        prefix="post"
                                        label=${"msg:"+T}
                                        title=${"Message "+T}
                                        icon="message"
                                        onClick=${r}
                                    />
                                </a>
                            `})}
                        ${P_.map((T)=>{let r=T.split("/").pop()||T;return Q`
                                <${L$}
                                    prefix="post"
                                    label=${r}
                                    title=${T}
                                    onClick=${()=>R?.(T)}
                                />
                            `})}
                        ${w_.map((T)=>Q`
                            <${_5}
                                key=${T.id}
                                attachment=${T}
                                onPreview=${N0}
                            />
                        `)}
                    </div>
                `}
                ${Z0&&Q`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:x_}}
                        onClick=${(T)=>{if(T.target.classList.contains("hashtag")){T.preventDefault(),T.stopPropagation();let r=T.target.dataset.hashtag;if(r)j?.(r)}else if(T.target.tagName==="IMG")T.preventDefault(),T.stopPropagation(),H(T.target.src)}}
                    />
                `}
                ${V0.length>0&&Q`
                    <div ref=${z$} class="post-adaptive-cards" />
                `}
                ${m0.length>0&&Q`
                    <div class="post-adaptive-card-submissions">
                        ${m0.map((T,r)=>{let Y_=P6(T),G_=`${T.card_id}-${r}`,S_=C.has(G_);return Q`
                                <div key=${G_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${Y_.title}</span>
                                        </div>
                                    </div>
                                    ${Y_.summary&&Q`
                                        <div class="adaptive-card-submission-summary">${Y_.summary}</div>
                                    `}
                                    ${Y_.fields.length>0&&Q`
                                        <div class="adaptive-card-submission-fields">
                                            ${Y_.fields.map((f_)=>Q`
                                                <span class="adaptive-card-submission-field" title=${`${f_.key}: ${f_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    ${Y_.hiddenFieldCount>0&&Q`
                                        <button
                                            type="button"
                                            class="adaptive-card-submission-toggle"
                                            aria-expanded=${S_?"true":"false"}
                                            onClick=${(f_)=>{f_.preventDefault(),f_.stopPropagation(),K0(G_)}}
                                        >
                                            ${S_?`Hide ${Y_.hiddenFieldCount} more`:`Show ${Y_.hiddenFieldCount} more`}
                                        </button>
                                    `}
                                    ${S_&&Y_.hiddenFields.length>0&&Q`
                                        <div class="adaptive-card-submission-fields adaptive-card-submission-fields-extra">
                                            ${Y_.hiddenFields.map((f_)=>Q`
                                                <span class="adaptive-card-submission-field" title=${`${f_.key}: ${f_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${N2(Y_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${o_.length>0&&Q`
                    ${o_.map((T,r)=>Q`
                        <${V1} key=${r} annotations=${T} />
                    `)}
                `}
                ${m_.length>0&&Q`
                    <div class="media-preview">
                        ${m_.map(({id:T,mimeType:r})=>{let G_=typeof r==="string"&&r.toLowerCase().startsWith("image/svg")?$$(T):l1(T);return Q`
                                <img 
                                    key=${T} 
                                    src=${G_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(S_)=>A_(S_,T)}
                                />
                            `})}
                    </div>
                `}
                ${m_.length>0&&Q`
                    ${m_.map(({annotations:T},r)=>Q`
                        ${T&&Q`<${V1} key=${r} annotations=${T} />`}
                    `)}
                `}
                ${u0.length>0&&Q`
                    <div class="file-attachments">
                        ${u0.map((T)=>Q`
                            <${e7} key=${T} mediaId=${T} onPreview=${N0} />
                        `)}
                    </div>
                `}
                ${D_.length>0&&Q`
                    <div class="resource-links">
                        ${D_.map((T,r)=>Q`
                            <div key=${r}>
                                <${$5} block=${T} />
                                <${V1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${l_.length>0&&Q`
                    <div class="resource-embeds">
                        ${l_.map((T,r)=>Q`
                            <div key=${r}>
                                <${j5} block=${T} />
                                <${V1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${n.link_previews?.length>0&&Q`
                    <div class="link-previews">
                        ${n.link_previews.map((T,r)=>Q`
                            <${N5} key=${r} preview=${T} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&Q`<${b6} src=${E} onClose=${()=>H(null)} />`}
        ${i_&&Q`
            <${M6}
                mediaId=${i_.mediaId}
                info=${i_.info}
                onClose=${()=>s_(null)}
            />
        `}
    `}function C6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:G,emptyMessage:q,timelineRef:X,agents:O,user:W,onDeletePost:F,reverse:M=!0,removingPostIds:m,searchQuery:u}){let[R,E]=S(!1),H=D(null),C=typeof IntersectionObserver<"u",I=A(async()=>{if(!j||!$||R)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,R,j]),i=A((__)=>{let{scrollTop:t,scrollHeight:N_,clientHeight:j_}=__.target,Q_=M?N_-j_-t:t,R_=Math.max(300,j_);if(Q_<R_)I()},[M,I]);v(()=>{if(!C)return;let __=H.current,t=X?.current;if(!__||!t)return;let N_=300,j_=new IntersectionObserver((Q_)=>{for(let R_ of Q_){if(!R_.isIntersecting)continue;I()}},{root:t,rootMargin:`${N_}px 0px ${N_}px 0px`,threshold:0});return j_.observe(__),()=>j_.disconnect()},[C,$,j,X,I]);let n=D(I);if(n.current=I,v(()=>{if(C)return;if(!X?.current)return;let{scrollTop:__,scrollHeight:t,clientHeight:N_}=X.current,j_=M?t-N_-__:__,Q_=Math.max(300,N_);if(j_<Q_)n.current?.()},[C,_,$,M,X]),v(()=>{if(!X?.current)return;if(!$||R)return;let{scrollTop:__,scrollHeight:t,clientHeight:N_}=X.current,j_=M?t-N_-__:__,Q_=Math.max(300,N_);if(t<=N_+1||j_<Q_)n.current?.()},[_,$,R,M,X]),!_)return Q`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return Q`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let e=_.slice().sort((__,t)=>__.id-t.id),d=(__)=>{let t=__?.data?.thread_id;if(t===null||t===void 0||t==="")return null;let N_=Number(t);return Number.isFinite(N_)?N_:null},K_=new Map;for(let __=0;__<e.length;__+=1){let t=e[__],N_=Number(t?.id),j_=d(t);if(j_!==null){let Q_=K_.get(j_)||{anchorIndex:-1,replyIndexes:[]};Q_.replyIndexes.push(__),K_.set(j_,Q_)}else if(Number.isFinite(N_)){let Q_=K_.get(N_)||{anchorIndex:-1,replyIndexes:[]};Q_.anchorIndex=__,K_.set(N_,Q_)}}let c=new Map;for(let[__,t]of K_.entries()){let N_=new Set;if(t.anchorIndex>=0)N_.add(t.anchorIndex);for(let j_ of t.replyIndexes)N_.add(j_);c.set(__,Array.from(N_).sort((j_,Q_)=>j_-Q_))}let X_=e.map((__,t)=>{let N_=d(__);if(N_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let j_=c.get(N_);if(!j_||j_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Q_=j_.indexOf(t);if(Q_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Q_>0,hasThreadNext:Q_<j_.length-1}}),d_=Q`<div class="timeline-sentinel" ref=${H}></div>`;return Q`
        <div class="timeline ${M?"reverse":"normal"}" ref=${X} onScroll=${i}>
            <div class="timeline-content">
                ${M?d_:null}
                ${e.map((__,t)=>{let N_=Boolean(__.data?.thread_id&&__.data.thread_id!==__.id),j_=m?.has?.(__.id),Q_=X_[t]||{};return Q`
                    <${I6}
                        key=${__.id}
                        post=${__}
                        isThreadReply=${N_}
                        isThreadPrev=${Q_.hasThreadPrev}
                        isThreadNext=${Q_.hasThreadNext}
                        isRemoving=${j_}
                        highlightQuery=${u}
                        agentName=${V6(__.data?.agent_id,O||{})}
                        agentAvatarUrl=${X6(__.data?.agent_id,O||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Z?.(__)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${G}
                        onDelete=${F}
                    />
                `})}
                ${M?null:d_}
            </div>
        </div>
    `}class x6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var e_=new x6;var X1=null,O4=null;function T6(){if(O4)return Promise.resolve(O4);if(!X1)X1=import("/static/dist/editor.bundle.js").then((_)=>{return O4=_,_}).catch((_)=>{throw X1=null,_});return X1}class S6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await T6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var B4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new S6(_,$)}};function Q4(){T6().catch(()=>{})}var F4="piclaw://terminal";var U5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},F5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},q1=null,U4=null;function H5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function J5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!H5(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function D5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!q1)q1=J5(()=>Promise.resolve($.init?.())).catch((j)=>{throw q1=null,j});return await q1,$}async function E5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!U4)U4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await U4}async function k5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function y5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function A5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function S$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function w5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function f6(){let _=A5(),$=_?F5:U5,j=S$("--bg-primary",_?"#000000":"#ffffff"),Z=S$("--text-primary",_?"#e7e9ea":"#0f1419"),N=S$("--text-secondary",_?"#71767b":"#536471"),z=S$("--accent-color","#1d9bf0"),K=S$("--danger-color",_?"#ff7b72":"#cf222e"),G=S$("--success-color",_?"#7ee787":"#1a7f37"),q=S$("--bg-hover",_?"#1d1f23":"#e8ebed"),X=S$("--border-color",_?"#2f3336":"#eff3f4"),O=S$("--accent-soft-strong",w5(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:O,selectionForeground:Z,black:q,red:K,green:G,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class H4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await D5();if(await E5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:f6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=f6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await k5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(y5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var J4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new H4(_,$)}},D4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new H4(_,$)}};function s$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function P5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),X=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,O=[];for(let F of X.split("/")){if(!F||F===".")continue;if(F===".."){if(O.length>0)O.pop();continue}O.push(F)}let W=O.join("/");return`${_1(W)}${z}${K}`}function m2(_){return _?.preview||null}function M5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function b5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function I5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${s$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${s$(N$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${s$(N2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${s$(b5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${s$(M5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${s$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function C5(_){let $=m2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=I5(_,$);if($.kind==="image"){let Z=$.url||($.path?_1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${s$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=l0($.text||"",null,{rewriteImageSrc:(N)=>P5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${s$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class E4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=C5(this.context)}getContent(){let _=m2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=m2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var k4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=m2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new E4(_,$)}},y4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return m2(_)||_?.path?1:!1},mount(_,$){return new E4(_,$)}};var x5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),T5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},S5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function v6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function R6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class u6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=v6(j),z=S5[N]||"\uD83D\uDCC4",K=T5[N]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${R6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${R6(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let q=G.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let X=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class m6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=v6(_?.path);if(!$||!x5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new u6(_,$);return new m6(_,$)}};var f5=/\.(csv|tsv)$/i;function g6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${g6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${g6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!f5.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new p6(_,$);return new c6(_,$)}};var R5=/\.pdf$/i;function v5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class h6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${v5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#pdf-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!R5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new h6(_,$);return new i6(_,$)}};var u5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function M4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class l6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${M4(N)}" alt="${M4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${M4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var b4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!u5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new l6(_,$);return new n6(_,$)}};function m5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function g5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var I4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function d6(_){let $=String(_||"").trim();return $?$:I4}function p5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function c5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function h5(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,G,q,X,O,W){try{if(K&&q!=null&&j({filename:K,format:G,data:q,mimeType:X,base64Encoded:Boolean(O),defaultMode:W}))return}catch(F){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",F)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,G,q,X,O,W){try{if(G&&j({filename:G,data:K,mimeType:q,base64Encoded:Boolean(X),mode:O,folderId:W}))return}catch(F){console.warn("[drawio-pane] export intercept failed, falling back to native export",F)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function s6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${c5(j)}`}class o6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${g5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class r6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=p5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(h5(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=I4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await s6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await s6(_,"image/png");else this.xmlData=d6(await _.text());else if(_.status===404)this.xmlData=I4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?d6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var C4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!m5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new o6(_,$);return new r6(_,$)}};class a6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var n_=new a6;var L1="workspaceExplorerScale",i5=["compact","default","comfortable"],l5=new Set(i5),n5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function t6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return l5.has(j)?j:$}function x4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function d5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function s5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function T4(_={}){let $=d5(_),j=_.stored?t6(_.stored,$):$;return s5(j,_)}function e6(_){return n5[t6(_)]}var o5=60000,Z8=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function N8(_,$,j,Z=0,N=[]){if(!j&&Z8(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)N8(z,$,j,Z+1,N);return N}function _8(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&Z8(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function v4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,z=!j||j.length!==Z.length,K=Z.map((G)=>{let q=v4(N.get(G.path),G);if(q!==N.get(G.path))z=!0;return q});return z?{...$,children:K}:_}function f4(_,$,j){if(!_)return _;if(_.path===$)return v4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=f4(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var z8=4,S4=14,r5=8,a5=16;function K8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=K8(Z);return _.__bytes=j,j}function Y8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=z8)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let G of N){let q=Math.max(0,Number(G?.__bytes??G?.size??0));if(q<=0)continue;if(G.type==="dir")z.push({kind:"dir",node:G,size:q});else z.push({kind:"file",name:G.name,path:G.path,size:q})}z.sort((G,q)=>q.size-G.size);let K=z;if(z.length>S4){let G=z.slice(0,S4-1),q=z.slice(S4-1),X=q.reduce((O,W)=>O+W.size,0);G.push({kind:"other",name:`+${q.length} more`,path:`${Z.path}/[other]`,size:X}),K=G}return Z.children=K.map((G)=>{if(G.kind==="dir")return Y8(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function $8(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function W8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function O1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function u4(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,G=z-N>K?N+K:z,q=O1(_,$,Z,N),X=O1(_,$,Z,G),O=O1(_,$,j,G),W=O1(_,$,j,N),F=G-N>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${F} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var G8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function V8(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(G,q,X,O)=>{let W=Array.isArray(G?.children)?G.children:[];if(!W.length)return;let F=Math.max(0,Number(G.size)||0);if(F<=0)return;let M=X-q,m=q;W.forEach((u,R)=>{let E=Math.max(0,Number(u.size)||0);if(E<=0)return;let H=E/F,C=m,I=R===W.length-1?X:m+M*H;if(m=I,I-C<0.003)return;let i=G8[O];if(i){let n=W8(C,O,j);if(Z.push({key:u.path,path:u.path,label:u.name,size:E,color:n,depth:O,startAngle:C,endAngle:I,innerRadius:i[0],outerRadius:i[1],d:u4(120,120,i[0],i[1],C,I)}),O===1)N.push({key:u.path,name:u.name,size:E,pct:z>0?E/z*100:0,color:n})}if(O<z8)K(u,C,I,O+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function R4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=R4(Z,$);if(N)return N}return null}function X8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=G8[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,G=W8(z,1,Z),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:G,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:u4(120,120,N[0],N[1],z,K)}],legend:[{key:X,name:_,size:j,pct:100,color:G}]}}function j8(_,$=!1,j=!1){if(!_)return null;let Z=K8(_),N=Y8(_,0),z=N.size||Z,{segments:K,legend:G}=V8(N,z,j);if(!K.length&&z>0){let q=X8("[files]",N.path,z,j);K=q.segments,G=q.legend}return{root:N,totalSize:z,segments:K,legend:G,truncated:$,isDarkTheme:j}}function t5({payload:_}){if(!_)return null;let[$,j]=S(null),[Z,N]=S(_?.root?.path||"."),[z,K]=S(()=>[_?.root?.path||"."]),[G,q]=S(!1);v(()=>{let c=_?.root?.path||".";N(c),K([c]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Z)return;q(!0);let c=setTimeout(()=>q(!1),180);return()=>clearTimeout(c)},[Z]);let X=r_(()=>{return R4(_.root,Z)||_.root},[_?.root,Z]),O=X?.size||_.totalSize||0,{segments:W,legend:F}=r_(()=>{let c=V8(X,O,_.isDarkTheme);if(c.segments.length>0)return c;if(O<=0)return c;let X_=X?.children?.length?"Total":"[files]";return X8(X_,X?.path||_?.root?.path||".",O,_.isDarkTheme)},[X,O,_.isDarkTheme,_?.root?.path]),[M,m]=S(W),u=D(new Map),R=D(0);v(()=>{let c=u.current,X_=new Map(W.map((N_)=>[N_.key,N_])),d_=performance.now(),__=220,t=(N_)=>{let j_=Math.min(1,(N_-d_)/220),Q_=j_*(2-j_),R_=W.map((L_)=>{let U_=c.get(L_.key)||{startAngle:L_.startAngle,endAngle:L_.startAngle,innerRadius:L_.innerRadius,outerRadius:L_.innerRadius},H_=(F0,z_)=>F0+(z_-F0)*Q_,v_=H_(U_.startAngle,L_.startAngle),P_=H_(U_.endAngle,L_.endAngle),T_=H_(U_.innerRadius,L_.innerRadius),$0=H_(U_.outerRadius,L_.outerRadius);return{...L_,d:u4(120,120,T_,$0,v_,P_)}});if(m(R_),j_<1)R.current=requestAnimationFrame(t)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(t),u.current=X_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[W]);let E=M.length?M:W,H=O>0?N$(O):"0 B",C=X?.name||"",i=(C&&C!=="."?C:"Total")||"Total",n=H,e=z.length>1,d=(c)=>{if(!c?.path)return;let X_=R4(_.root,c.path);if(!X_||!Array.isArray(X_.children)||X_.children.length===0)return;K((d_)=>[...d_,X_.path]),N(X_.path),j(null)},K_=()=>{if(!e)return;K((c)=>{let X_=c.slice(0,-1);return N(X_[X_.length-1]||_?.root?.path||"."),X_}),j(null)};return Q`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${X?.path||_?.root?.path||"."}`}
                data-segments=${E.length}
                data-base-size=${O}>
                ${E.map((c)=>Q`
                    <path
                        key=${c.key}
                        d=${c.d}
                        fill=${c.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===c.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(c)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(c)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>d(c)}
                    >
                        <title>${c.label} — ${N$(c.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${e?" is-drill":""}`}
                    onClick=${K_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${i}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${n}</text>
                </g>
            </svg>
            ${F.length>0&&Q`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((c)=>Q`
                        <div key=${c.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${c.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${c.name}>${c.name}</span>
                            <span class="workspace-folder-starburst-size">${N$(c.size)}</span>
                            <span class="workspace-folder-starburst-pct">${c.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&Q`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function e5({mediaId:_}){let[$,j]=S(null);if(v(()=>{if(!_)return;L2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?N$($.metadata.size):"";return Q`
        <a href=${$$(_)} download=${Z} class="file-attachment"
            onClick=${(z)=>z.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&Q`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function q8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:z,terminalVisible:K=!1}){let[G,q]=S(null),[X,O]=S(new Set(["."])),[W,F]=S(null),[M,m]=S(null),[u,R]=S(""),[E,H]=S(null),[C,I]=S(null),[i,n]=S(!0),[e,d]=S(!1),[K_,c]=S(null),[X_,d_]=S(()=>O2("workspaceShowHidden",!1)),[__,t]=S(!1),[N_,j_]=S(null),[Q_,R_]=S(null),[L_,I_]=S(null),[U_,H_]=S(!1),[v_,P_]=S(null),[T_,$0]=S(()=>$8()),[F0,z_]=S(()=>T4({stored:Z$(L1),...x4()})),[$_,F_]=S(!1),O_=D(X),b_=D(""),u_=D(null),Z0=D(0),h_=D(new Set),x_=D(null),A_=D(new Map),i_=D(_),s_=D(Z),N0=D(null),J_=D(null),K0=D(null),Y0=D(null),R0=D(null),v0=D(null),H0=D("."),D_=D(null),l_=D({path:null,dragging:!1,startX:0,startY:0}),o_=D({path:null,dragging:!1,startX:0,startY:0}),G0=D({path:null,timer:0}),Q0=D(!1),M_=D(0),m_=D(new Map),u0=D(null),w_=D(null),V0=D(null),m0=D(null),z$=D(null),T=D(null),r=D(X_),Y_=D($),G_=D(j??$),S_=D(0),f_=D(L_),T0=D(__),k$=D(N_),K$=D(null),f$=D({x:0,y:0}),J0=D(0),n0=D(null),D0=D(W),E0=D(M),y$=D(null),d0=D(null),y0=D(E);i_.current=_,s_.current=Z,v(()=>{O_.current=X},[X]),v(()=>{r.current=X_},[X_]),v(()=>{Y_.current=$},[$]),v(()=>{G_.current=j??$},[j,$]),v(()=>{f_.current=L_},[L_]),v(()=>{if(typeof window>"u")return;let L=()=>{z_(T4({stored:Z$(L1),...x4()}))};L();let U=()=>L(),k=()=>L(),y=(f)=>{if(!f||f.key===null||f.key===L1)L()};window.addEventListener("resize",U),window.addEventListener("focus",k),window.addEventListener("storage",y);let g=window.matchMedia?.("(pointer: coarse)"),s=window.matchMedia?.("(hover: none)"),a=(f,W_)=>{if(!f)return;if(f.addEventListener)f.addEventListener("change",W_);else if(f.addListener)f.addListener(W_)},o=(f,W_)=>{if(!f)return;if(f.removeEventListener)f.removeEventListener("change",W_);else if(f.removeListener)f.removeListener(W_)};return a(g,U),a(s,U),()=>{window.removeEventListener("resize",U),window.removeEventListener("focus",k),window.removeEventListener("storage",y),o(g,U),o(s,U)}},[]),v(()=>{let L=(U)=>{let k=U?.detail?.path;if(!k)return;let y=k.split("/"),g=[];for(let s=1;s<y.length;s++)g.push(y.slice(0,s).join("/"));if(g.length)O((s)=>{let a=new Set(s);a.add(".");for(let o of g)a.add(o);return a});F(k),requestAnimationFrame(()=>{let s=document.querySelector(`[data-path="${CSS.escape(k)}"]`);if(s)s.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",L),()=>window.removeEventListener("workspace-reveal-path",L)},[]),v(()=>{T0.current=__},[__]),v(()=>{k$.current=N_},[N_]),v(()=>{D0.current=W},[W]),v(()=>{E0.current=M},[M]),v(()=>{y0.current=E},[E]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let L=()=>$0($8());L();let U=window.matchMedia?.("(prefers-color-scheme: dark)"),k=()=>L();if(U?.addEventListener)U.addEventListener("change",k);else if(U?.addListener)U.addListener(k);let y=typeof MutationObserver<"u"?new MutationObserver(()=>L()):null;if(y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(U?.removeEventListener)U.removeEventListener("change",k);else if(U?.removeListener)U.removeListener(k);y?.disconnect()}},[]),v(()=>{if(!M)return;let L=R0.current;if(!L)return;let U=requestAnimationFrame(()=>{try{L.focus(),L.select()}catch{}});return()=>cancelAnimationFrame(U)},[M]),v(()=>{if(!$_)return;let L=(k)=>{let y=k?.target;if(!(y instanceof Element))return;if(z$.current?.contains(y))return;if(T.current?.contains(y))return;F_(!1)},U=(k)=>{if(k?.key==="Escape")F_(!1),T.current?.focus?.()};return document.addEventListener("mousedown",L),document.addEventListener("touchstart",L,{passive:!0}),document.addEventListener("keydown",U),()=>{document.removeEventListener("mousedown",L),document.removeEventListener("touchstart",L),document.removeEventListener("keydown",U)}},[$_]);let A$=async(L)=>{d(!0),H(null),I(null);try{let U=await d1(L,20000);H(U)}catch(U){H({error:U.message||"Failed to load preview"})}finally{d(!1)}};N0.current=A$;let A0=async()=>{if(!Y_.current)return;try{let L=await I2("",1,r.current),U=_8(L.root,O_.current,r.current);if(U===b_.current){n(!1);return}if(b_.current=U,u_.current=L.root,!Z0.current)Z0.current=requestAnimationFrame(()=>{Z0.current=0,q((k)=>v4(k,u_.current)),n(!1)})}catch(L){c(L.message||"Failed to load workspace"),n(!1)}},K2=async(L)=>{if(!L)return;if(h_.current.has(L))return;h_.current.add(L);try{let U=await I2(L,1,r.current);q((k)=>f4(k,L,U.root))}catch(U){c(U.message||"Failed to load workspace")}finally{h_.current.delete(L)}};J_.current=K2;let j0=A(()=>{let L=W;if(!L)return".";let U=A_.current?.get(L);if(U&&U.type==="dir")return U.path;if(L==="."||!L.includes("/"))return".";let k=L.split("/");return k.pop(),k.join("/")||"."},[W]),Y$=A((L)=>{let U=L?.closest?.(".workspace-row");if(!U)return null;let k=U.dataset.path,y=U.dataset.type;if(!k)return null;if(y==="dir")return k;if(k.includes("/")){let g=k.split("/");return g.pop(),g.join("/")||"."}return"."},[]),B$=A((L)=>{return Y$(L?.target||null)},[Y$]),b0=A((L)=>{f_.current=L,I_(L)},[]),I0=A(()=>{let L=G0.current;if(L?.timer)clearTimeout(L.timer);G0.current={path:null,timer:0}},[]),h0=A((L)=>{if(!L||L==="."){I0();return}let U=A_.current?.get(L);if(!U||U.type!=="dir"){I0();return}if(O_.current?.has(L)){I0();return}if(G0.current?.path===L)return;I0();let k=setTimeout(()=>{G0.current={path:null,timer:0},J_.current?.(L),O((y)=>{let g=new Set(y);return g.add(L),g})},600);G0.current={path:L,timer:k}},[I0]),w$=A((L,U)=>{if(f$.current={x:L,y:U},J0.current)return;J0.current=requestAnimationFrame(()=>{J0.current=0;let k=K$.current;if(!k)return;let y=f$.current;k.style.transform=`translate(${y.x+12}px, ${y.y+12}px)`})},[]),Q$=A((L)=>{if(!L)return;let k=(A_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!k)return;R_({path:L,label:k})},[]),R$=A(()=>{if(R_(null),J0.current)cancelAnimationFrame(J0.current),J0.current=0;if(K$.current)K$.current.style.transform="translate(-9999px, -9999px)"},[]),o$=A((L)=>{if(!L)return".";let U=A_.current?.get(L);if(U&&U.type==="dir")return U.path;if(L==="."||!L.includes("/"))return".";let k=L.split("/");return k.pop(),k.join("/")||"."},[]),X0=A(()=>{m(null),R("")},[]),v$=A((L)=>{if(!L)return;let k=(A_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!k||L===".")return;m(L),R(k)},[]),W$=A(async()=>{let L=E0.current;if(!L)return;let U=(u||"").trim();if(!U){X0();return}let k=A_.current?.get(L),y=(k?.name||L.split("/").pop()||L).trim();if(U===y){X0();return}try{let s=(await r1(L,U))?.path||L,a=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(X0(),c(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:L,newPath:s,type:k?.type||"file"}})),k?.type==="dir")O((o)=>{let f=new Set;for(let W_ of o)if(W_===L)f.add(s);else if(W_.startsWith(`${L}/`))f.add(`${s}${W_.slice(L.length)}`);else f.add(W_);return f});if(F(s),k?.type==="dir")H(null),d(!1),I(null);else N0.current?.(s);J_.current?.(a)}catch(g){c(g?.message||"Failed to rename file")}},[X0,u]),S0=A(async(L)=>{let y=L||".";for(let g=0;g<50;g+=1){let a=`untitled${g===0?"":`-${g}`}.md`;try{let f=(await o1(y,a,""))?.path||(y==="."?a:`${y}/${a}`);if(y&&y!==".")O((W_)=>new Set([...W_,y]));F(f),c(null),J_.current?.(y),N0.current?.(f);return}catch(o){if(o?.status===409||o?.code==="file_exists")continue;c(o?.message||"Failed to create file");return}}c("Failed to create file (untitled name already in use).")},[]),w0=A((L)=>{if(L?.stopPropagation?.(),U_)return;let U=o$(D0.current);S0(U)},[U_,o$,S0]);v(()=>{if(typeof window>"u")return;let L=(U)=>{let k=U?.detail?.updates||[];if(!Array.isArray(k)||k.length===0)return;q((o)=>{let f=o;for(let W_ of k){if(!W_?.root)continue;if(!f||W_.path==="."||!W_.path)f=W_.root;else f=f4(f,W_.path,W_.root)}if(f)b_.current=_8(f,O_.current,r.current);return n(!1),f});let y=D0.current;if(Boolean(y)&&k.some((o)=>{let f=o?.path||"";if(!f||f===".")return!0;return y===f||y.startsWith(`${f}/`)||f.startsWith(`${y}/`)}))m_.current.clear();if(!y||!y0.current)return;let s=A_.current?.get(y);if(s&&s.type==="dir")return;if(k.some((o)=>{let f=o?.path||"";if(!f||f===".")return!0;return y===f||y.startsWith(`${f}/`)}))N0.current?.(y)};return window.addEventListener("workspace-update",L),()=>window.removeEventListener("workspace-update",L)},[]),x_.current=A0;let P$=D(()=>{if(typeof window>"u")return;let L=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),U=G_.current??Y_.current,k=document.visibilityState!=="hidden"&&(U||L.matches&&Y_.current);C2(k,r.current).catch(()=>{})}).current,k0=D(0),M$=D(()=>{if(k0.current)clearTimeout(k0.current);k0.current=setTimeout(()=>{k0.current=0,P$()},250)}).current;v(()=>{if(Y_.current)x_.current?.();M$()},[$,j]),v(()=>{x_.current(),P$();let L=setInterval(()=>x_.current(),o5),U=B2("previewHeight",null),k=Number.isFinite(U)?Math.min(Math.max(U,80),600):280;if(M_.current=k,K0.current)K0.current.style.setProperty("--preview-height",`${k}px`);let y=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),g=()=>M$();if(y.addEventListener)y.addEventListener("change",g);else if(y.addListener)y.addListener(g);return document.addEventListener("visibilitychange",g),()=>{if(clearInterval(L),Z0.current)cancelAnimationFrame(Z0.current),Z0.current=0;if(y.removeEventListener)y.removeEventListener("change",g);else if(y.removeListener)y.removeListener(g);if(document.removeEventListener("visibilitychange",g),k0.current)clearTimeout(k0.current),k0.current=0;if(D_.current)clearTimeout(D_.current),D_.current=null;C2(!1,r.current).catch(()=>{})}},[]);let G$=r_(()=>N8(G,X,X_),[G,X,X_]),U$=r_(()=>new Map(G$.map((L)=>[L.node.path,L.node])),[G$]),u$=r_(()=>e6(F0),[F0]);A_.current=U$;let g_=(W?A_.current.get(W):null)?.type==="dir";v(()=>{if(!W||!g_){P_(null),u0.current=null,w_.current=null;return}let L=W,U=`${X_?"hidden":"visible"}:${W}`,k=m_.current,y=k.get(U);if(y?.root){k.delete(U),k.set(U,y);let a=j8(y.root,Boolean(y.truncated),T_);if(a)u0.current=a,w_.current=W,P_({loading:!1,error:null,payload:a});return}let g=u0.current,s=w_.current;P_({loading:!0,error:null,payload:s===W?g:null}),I2(W,r5,X_).then((a)=>{if(D0.current!==L)return;let o={root:a?.root,truncated:Boolean(a?.truncated)};k.delete(U),k.set(U,o);while(k.size>a5){let W_=k.keys().next().value;if(!W_)break;k.delete(W_)}let f=j8(o.root,o.truncated,T_);u0.current=f,w_.current=W,P_({loading:!1,error:null,payload:f})}).catch((a)=>{if(D0.current!==L)return;P_({loading:!1,error:a?.message||"Failed to load folder size chart",payload:s===W?g:null})})},[W,g_,X_,T_]);let P0=Boolean(E&&E.kind==="text"&&!g_&&(!E.size||E.size<=262144)),g0=P0?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",m$=Boolean(W&&W!=="."),V$=Boolean(W&&!g_),F$=Boolean(W&&!g_),H$=W&&g_?$1(W,X_):null,p0=A(()=>F_(!1),[]),q0=A(async(L)=>{p0();try{await L?.()}catch{}},[p0]);v(()=>{let L=V0.current;if(m0.current)m0.current.dispose(),m0.current=null;if(!L)return;if(L.innerHTML="",!W||g_||!E||E.error)return;let U={path:W,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},k=e_.resolve(U)||e_.get("workspace-preview-default");if(!k)return;let y=k.mount(L,U);return m0.current=y,()=>{if(m0.current===y)y.dispose(),m0.current=null;L.innerHTML=""}},[W,g_,E]);let U0=(L)=>{let U=L?.target;if(U instanceof Element)return U;return U?.parentElement||null},s0=(L)=>{return Boolean(L?.closest?.(".workspace-node-icon, .workspace-label-text"))},J$=D((L)=>{if(d0.current)clearTimeout(d0.current),d0.current=null;let k=U0(L)?.closest?.("[data-path]");if(!k)return;let y=k.dataset.path;if(k.dataset.type==="dir"||!y)return;if(E0.current===y)X0();s_.current?.(y)}).current,b$=D((L)=>{if(Q0.current){Q0.current=!1;return}let U=U0(L),k=U?.closest?.("[data-path]");if(Y0.current?.focus?.(),!k)return;let y=k.dataset.path,g=k.dataset.type,s=Boolean(U?.closest?.(".workspace-caret")),a=Boolean(U?.closest?.("button"))||Boolean(U?.closest?.("a"))||Boolean(U?.closest?.("input")),o=D0.current===y,f=E0.current;if(f){if(f===y)return;X0()}let W_=g==="file"&&y$.current===y&&!s&&!a;if(o&&!s&&!a&&y!=="."&&!W_){if(d0.current)clearTimeout(d0.current);d0.current=setTimeout(()=>{d0.current=null,v$(y)},350);return}if(g==="dir"){if(y$.current=null,F(y),H(null),I(null),d(!1),!O_.current.has(y))J_.current?.(y);if(o&&!s)return;O((a0)=>{let z0=new Set(a0);if(z0.has(y))z0.delete(y);else z0.add(y);return z0})}else{y$.current=null,F(y);let L0=A_.current.get(y);if(L0)i_.current?.(L0.path,L0);N0.current?.(y)}}).current,D$=D(()=>{b_.current="",x_.current(),Array.from(O_.current||[]).filter((U)=>U&&U!==".").forEach((U)=>J_.current?.(U))}).current,o0=D(()=>{y$.current=null,F(null),H(null),I(null),d(!1)}).current,g$=D(()=>{d_((L)=>{let U=!L;if(typeof window<"u")_0("workspaceShowHidden",String(U));return r.current=U,C2(!0,U).catch(()=>{}),b_.current="",x_.current?.(),Array.from(O_.current||[]).filter((y)=>y&&y!==".").forEach((y)=>J_.current?.(y)),U})}).current,r0=D((L)=>{if(U0(L)?.closest?.("[data-path]"))return;o0()}).current,M0=A(async(L)=>{if(!L)return;let U=L.split("/").pop()||L;if(!window.confirm(`Delete "${U}"? This cannot be undone.`))return;try{await t1(L);let y=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(D0.current===L)o0();J_.current?.(y),c(null)}catch(y){H((g)=>({...g||{},error:y.message||"Failed to delete file"}))}},[o0]),E$=A((L)=>{let U=Y0.current;if(!U||!L||typeof CSS>"u"||typeof CSS.escape!=="function")return;U.querySelector(`[data-path="${CSS.escape(L)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),X$=A((L)=>{let U=G$;if(!U||U.length===0)return;let k=W?U.findIndex((y)=>y.node.path===W):-1;if(L.key==="ArrowDown"){L.preventDefault();let y=Math.min(k+1,U.length-1),g=U[y];if(!g)return;if(F(g.node.path),g.node.type!=="dir")i_.current?.(g.node.path,g.node),N0.current?.(g.node.path);else H(null),d(!1),I(null);E$(g.node.path);return}if(L.key==="ArrowUp"){L.preventDefault();let y=k<=0?0:k-1,g=U[y];if(!g)return;if(F(g.node.path),g.node.type!=="dir")i_.current?.(g.node.path,g.node),N0.current?.(g.node.path);else H(null),d(!1),I(null);E$(g.node.path);return}if(L.key==="ArrowRight"&&k>=0){let y=U[k];if(y?.node?.type==="dir"&&!X.has(y.node.path))L.preventDefault(),J_.current?.(y.node.path),O((g)=>new Set([...g,y.node.path]));return}if(L.key==="ArrowLeft"&&k>=0){let y=U[k];if(y?.node?.type==="dir"&&X.has(y.node.path))L.preventDefault(),O((g)=>{let s=new Set(g);return s.delete(y.node.path),s});return}if(L.key==="Enter"&&k>=0){L.preventDefault();let y=U[k];if(!y)return;let g=y.node.path;if(y.node.type==="dir"){if(!O_.current.has(g))J_.current?.(g);O((a)=>{let o=new Set(a);if(o.has(g))o.delete(g);else o.add(g);return o}),H(null),I(null),d(!1)}else i_.current?.(g,y.node),N0.current?.(g);return}if((L.key==="Delete"||L.key==="Backspace")&&k>=0){let y=U[k];if(!y||y.node.type==="dir")return;L.preventDefault(),M0(y.node.path);return}if(L.key==="Escape")L.preventDefault(),o0()},[o0,M0,X,G$,E$,W]),p$=A((L)=>{let U=U0(L),k=U?.closest?.(".workspace-row");if(!k)return;let y=k.dataset.type,g=k.dataset.path;if(!g||g===".")return;if(E0.current===g)return;let s=L?.touches?.[0];if(!s)return;if(l_.current={path:s0(U)?g:null,dragging:!1,startX:s.clientX,startY:s.clientY},y!=="file")return;if(D_.current)clearTimeout(D_.current);D_.current=setTimeout(()=>{if(D_.current=null,l_.current?.dragging)return;M0(g)},600)},[M0]),I$=A(()=>{if(D_.current)clearTimeout(D_.current),D_.current=null;let L=l_.current;if(L?.dragging&&L.path){let U=f_.current||j0(),k=n0.current;if(typeof k==="function")k(L.path,U)}l_.current={path:null,dragging:!1,startX:0,startY:0},S_.current=0,t(!1),j_(null),b0(null),I0(),R$()},[j0,R$,b0,I0]),C$=A((L)=>{let U=l_.current,k=L?.touches?.[0];if(!k||!U?.path){if(D_.current)clearTimeout(D_.current),D_.current=null;return}let y=Math.abs(k.clientX-U.startX),g=Math.abs(k.clientY-U.startY),s=y>8||g>8;if(s&&D_.current)clearTimeout(D_.current),D_.current=null;if(!U.dragging&&s)U.dragging=!0,t(!0),j_("move"),Q$(U.path);if(U.dragging){L.preventDefault(),w$(k.clientX,k.clientY);let a=document.elementFromPoint(k.clientX,k.clientY),o=Y$(a)||j0();if(f_.current!==o)b0(o);h0(o)}},[Y$,j0,Q$,w$,b0,h0]),c$=D((L)=>{L.preventDefault();let U=K0.current;if(!U)return;let k=L.clientY,y=M_.current||280,g=L.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let s=k,a=(f)=>{s=f.clientY;let W_=U.clientHeight-80,L0=Math.min(Math.max(y-(f.clientY-k),80),W_);U.style.setProperty("--preview-height",`${L0}px`),M_.current=L0},o=()=>{let f=U.clientHeight-80,W_=Math.min(Math.max(y-(s-k),80),f);M_.current=W_,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("previewHeight",String(Math.round(W_))),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",o)}).current,r$=D((L)=>{L.preventDefault();let U=K0.current;if(!U)return;let k=L.touches[0];if(!k)return;let y=k.clientY,g=M_.current||280,s=L.currentTarget;s.classList.add("dragging"),document.body.style.userSelect="none";let a=(f)=>{let W_=f.touches[0];if(!W_)return;f.preventDefault();let L0=U.clientHeight-80,a0=Math.min(Math.max(g-(W_.clientY-y),80),L0);U.style.setProperty("--preview-height",`${a0}px`),M_.current=a0},o=()=>{s.classList.remove("dragging"),document.body.style.userSelect="",_0("previewHeight",String(Math.round(M_.current||g))),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",o),document.removeEventListener("touchcancel",o)};document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",o),document.addEventListener("touchcancel",o)}).current,h$=async()=>{if(!W)return;try{let L=await s1(W);if(L.media_id)I(L.media_id)}catch(L){H((U)=>({...U||{},error:L.message||"Failed to attach"}))}},a$=async()=>{if(!W||g_)return;await M0(W)},q$=(L)=>{return Array.from(L?.dataTransfer?.types||[]).includes("Files")},E_=A((L)=>{if(!q$(L))return;if(L.preventDefault(),S_.current+=1,!T0.current)t(!0);j_("upload");let U=B$(L)||j0();b0(U),h0(U)},[j0,B$,b0,h0]),Y2=A((L)=>{if(!q$(L))return;if(L.preventDefault(),L.dataTransfer)L.dataTransfer.dropEffect="copy";if(!T0.current)t(!0);if(k$.current!=="upload")j_("upload");let U=B$(L)||j0();if(f_.current!==U)b0(U);h0(U)},[j0,B$,b0,h0]),t$=A((L)=>{if(!q$(L))return;if(L.preventDefault(),S_.current=Math.max(0,S_.current-1),S_.current===0)t(!1),j_(null),b0(null),I0()},[b0,I0]),i$=A(async(L,U=".")=>{let k=Array.from(L||[]);if(k.length===0)return;let y=U&&U!==""?U:".",g=y!=="."?y:"workspace root";H_(!0);try{let s=null;for(let a of k)try{s=await e2(a,y)}catch(o){let f=o?.status,W_=o?.code;if(f===409||W_==="file_exists"){let L0=a?.name||"file";if(!window.confirm(`"${L0}" already exists in ${g}. Overwrite?`))continue;s=await e2(a,y,{overwrite:!0})}else throw o}if(s?.path)y$.current=s.path,F(s.path),N0.current?.(s.path);J_.current?.(y)}catch(s){c(s.message||"Failed to upload file")}finally{H_(!1)}},[]),e$=A(async(L,U)=>{if(!L)return;let k=A_.current?.get(L);if(!k)return;let y=U&&U!==""?U:".",g=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(y===g)return;try{let a=(await a1(L,y))?.path||L;if(k.type==="dir")O((o)=>{let f=new Set;for(let W_ of o)if(W_===L)f.add(a);else if(W_.startsWith(`${L}/`))f.add(`${a}${W_.slice(L.length)}`);else f.add(W_);return f});if(F(a),k.type==="dir")H(null),d(!1),I(null);else N0.current?.(a);J_.current?.(g),J_.current?.(y)}catch(s){c(s?.message||"Failed to move entry")}},[]);n0.current=e$;let J2=A(async(L)=>{if(!q$(L))return;L.preventDefault(),S_.current=0,t(!1),j_(null),I_(null),I0();let U=Array.from(L?.dataTransfer?.files||[]);if(U.length===0)return;let k=f_.current||B$(L)||j0();await i$(U,k)},[j0,B$,i$]),D2=A((L)=>{if(L?.stopPropagation?.(),U_)return;let U=L?.currentTarget?.dataset?.uploadTarget||".";H0.current=U,v0.current?.click()},[U_]),_2=A(()=>{if(U_)return;let L=D0.current,U=L?A_.current?.get(L):null;H0.current=U?.type==="dir"?U.path:".",v0.current?.click()},[U_]),E2=A(()=>{q0(()=>w0(null))},[q0,w0]),i0=A(()=>{q0(()=>_2())},[q0,_2]),c0=A(()=>{q0(()=>D$())},[q0,D$]),l$=A(()=>{q0(()=>g$())},[q0,g$]),W2=A(()=>{if(!W||!P0)return;q0(()=>s_.current?.(W,E))},[q0,W,P0,E]),B=A(()=>{if(!W||W===".")return;q0(()=>v$(W))},[q0,W,v$]),w=A(()=>{if(!W||g_)return;q0(()=>a$())},[q0,W,g_,a$]),x=A(()=>{if(!W||g_)return;q0(()=>h$())},[q0,W,g_,h$]),l=A(()=>{if(!H$)return;if(p0(),typeof window<"u")window.open(H$,"_blank","noopener")},[p0,H$]),V_=A(()=>{p0(),N?.()},[p0,N]),B_=A(()=>{p0(),z?.()},[p0,z]),C_=A((L)=>{if(!L||L.button!==0)return;let U=L.currentTarget;if(!U||!U.dataset)return;let k=U.dataset.path;if(!k||k===".")return;if(E0.current===k)return;let y=U0(L);if(y?.closest?.("button, a, input, .workspace-caret"))return;if(!s0(y))return;L.preventDefault(),o_.current={path:k,dragging:!1,startX:L.clientX,startY:L.clientY};let g=(a)=>{let o=o_.current;if(!o?.path)return;let f=Math.abs(a.clientX-o.startX),W_=Math.abs(a.clientY-o.startY),L0=f>4||W_>4;if(!o.dragging&&L0)o.dragging=!0,Q0.current=!0,t(!0),j_("move"),Q$(o.path),w$(a.clientX,a.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(o.dragging){a.preventDefault(),w$(a.clientX,a.clientY);let a0=document.elementFromPoint(a.clientX,a.clientY),z0=Y$(a0)||j0();if(f_.current!==z0)b0(z0);h0(z0)}},s=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",s);let a=o_.current;if(a?.dragging&&a.path){let o=f_.current||j0(),f=n0.current;if(typeof f==="function")f(a.path,o)}o_.current={path:null,dragging:!1,startX:0,startY:0},S_.current=0,t(!1),j_(null),b0(null),I0(),R$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{Q0.current=!1},0)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",s)},[Y$,j0,Q$,w$,R$,b0,h0,I0]),C0=A(async(L)=>{let U=Array.from(L?.target?.files||[]);if(U.length===0)return;let k=H0.current||".";if(await i$(U,k),H0.current=".",L?.target)L.target.value=""},[i$]);return Q`
        <aside
            class=${`workspace-sidebar${__?" workspace-drop-active":""}`}
            data-workspace-scale=${F0}
            ref=${K0}
            onDragEnter=${E_}
            onDragOver=${Y2}
            onDragLeave=${t$}
            onDrop=${J2}
        >
            <input type="file" multiple style="display:none" ref=${v0} onChange=${C0} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${T}
                            class=${`workspace-menu-button${$_?" active":""}`}
                            onClick=${(L)=>{L.stopPropagation(),F_((U)=>!U)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${$_?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${$_&&Q`
                            <div class="workspace-menu-dropdown" ref=${z$} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${E2} disabled=${U_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${i0} disabled=${U_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${c0}>Refresh tree</button>
                                <button class=${`workspace-menu-item${X_?" active":""}`} role="menuitem" onClick=${l$}>
                                    ${X_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${W&&Q`<div class="workspace-menu-separator"></div>`}
                                ${W&&!g_&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${W2} disabled=${!P0}>Open in editor</button>
                                `}
                                ${m$&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B}>Rename selected</button>
                                `}
                                ${F$&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x}>Download selected file</button>
                                `}
                                ${H$&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l}>Download selected folder (zip)</button>
                                `}
                                ${V$&&Q`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${w}>Delete selected file</button>
                                `}

                                ${(N||z)&&Q`<div class="workspace-menu-separator"></div>`}
                                ${N&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${z&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B_}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${w0} title="New file" disabled=${U_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${D$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${r0}>
                ${U_&&Q`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&Q`<div class="workspace-loading">Loading…</div>`}
                ${K_&&Q`<div class="workspace-error">${K_}</div>`}
                ${G&&Q`
                    <div
                        class="workspace-tree-list"
                        ref=${Y0}
                        tabIndex="0"
                        onClick=${b$}
                        onDblClick=${J$}
                        onKeyDown=${X$}
                        onTouchStart=${p$}
                        onTouchEnd=${I$}
                        onTouchMove=${C$}
                        onTouchCancel=${I$}
                    >
                        ${G$.map(({node:L,depth:U})=>{let k=L.type==="dir",y=L.path===W,g=L.path===M,s=k&&X.has(L.path),a=L_&&L.path===L_,o=Array.isArray(L.children)&&L.children.length>0?L.children.length:Number(L.child_count)||0;return Q`
                                <div
                                    key=${L.path}
                                    class=${`workspace-row${y?" selected":""}${a?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+U*u$.indentPx}px`}}
                                    data-path=${L.path}
                                    data-type=${L.type}
                                    onMouseDown=${C_}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${k?s?Q`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:Q`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${k?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${k?Q`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:Q`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${g?Q`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${R0}
                                                value=${u}
                                                onInput=${(f)=>R(f?.target?.value||"")}
                                                onKeyDown=${(f)=>{if(f.key==="Enter")f.preventDefault(),W$();else if(f.key==="Escape")f.preventDefault(),X0()}}
                                                onBlur=${X0}
                                                onClick=${(f)=>f.stopPropagation()}
                                            />
                                        `:Q`<span class="workspace-label"><span class="workspace-label-text">${L.name}</span></span>`}
                                    ${k&&!s&&o>0&&Q`
                                        <span class="workspace-count">${o}</span>
                                    `}
                                    ${k&&Q`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${L.path}
                                            title="Upload files to this folder"
                                            onClick=${D2}
                                            disabled=${U_}
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
            ${W&&Q`
                <div class="workspace-preview-splitter-h" onMouseDown=${c$} onTouchStart=${r$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${W}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${w0} title="New file" disabled=${U_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!g_&&Q`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>P0&&s_.current?.(W,E)}
                                    title=${g0}
                                    disabled=${!P0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${a$}
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
                            ${g_?Q`
                                    <button class="workspace-download" onClick=${_2}
                                        title="Upload files to this folder" disabled=${U_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${$1(W,X_)}
                                        title="Download folder as zip" onClick=${(L)=>L.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:Q`<button class="workspace-download" onClick=${h$} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${e&&Q`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&Q`<div class="workspace-error">${E.error}</div>`}
                    ${g_&&Q`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${v_?.loading&&Q`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${v_?.error&&Q`<div class="workspace-error">${v_.error}</div>`}
                        ${v_?.payload&&v_.payload.segments?.length>0&&Q`
                            <${t5} payload=${v_.payload} />
                        `}
                        ${v_?.payload&&(!v_.payload.segments||v_.payload.segments.length===0)&&Q`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!g_&&Q`
                        <div class="workspace-preview-body" ref=${V0}></div>
                    `}
                    ${C&&Q`
                        <div class="workspace-download-card">
                            <${e5} mediaId=${C} />
                        </div>
                    `}
                </div>
            `}
            ${Q_&&Q`
                <div class="workspace-drag-ghost" ref=${K$}>${Q_.label}</div>
            `}
        </aside>
    `}var _j=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,$j=/\.(csv|tsv)$/i,jj=/\.pdf$/i,Zj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,L8=/\.drawio(\.xml|\.svg|\.png)?$/i;function O8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:G,previewTabs:q,onToggleDock:X,dockVisible:O}){let[W,F]=S(null),M=D(null);v(()=>{if(!W)return;let H=(C)=>{if(C.type==="keydown"&&C.key!=="Escape")return;F(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[W]),v(()=>{let H=(C)=>{if(C.ctrlKey&&C.key==="Tab"){if(C.preventDefault(),!_.length)return;let I=_.findIndex((i)=>i.id===$);if(C.shiftKey){let i=_[(I-1+_.length)%_.length];j?.(i.id)}else{let i=_[(I+1)%_.length];j?.(i.id)}return}if((C.ctrlKey||C.metaKey)&&C.key==="w"){let I=document.querySelector(".editor-pane");if(I&&I.contains(document.activeElement)){if(C.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let m=A((H,C)=>{if(H.button===1){H.preventDefault(),Z?.(C);return}if(H.button===0)j?.(C)},[j,Z]),u=A((H,C)=>{H.preventDefault(),F({id:C,x:H.clientX,y:H.clientY})},[]),R=A((H)=>{H.preventDefault(),H.stopPropagation()},[]),E=A((H,C)=>{H.preventDefault(),H.stopPropagation(),Z?.(C)},[Z]);if(v(()=>{if(!$||!M.current)return;let H=M.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return Q`
        <div class="tab-strip" ref=${M} role="tablist">
            ${_.map((H)=>Q`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(C)=>m(C,H.id)}
                    onContextMenu=${(C)=>u(C,H.id)}
                >
                    ${H.pinned&&Q`
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
                        onMouseDown=${R}
                        onClick=${(C)=>E(C,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?Q`<span class="tab-dirty-dot" aria-hidden="true"></span>`:Q`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${X&&Q`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${O?" active":""}`}
                    onClick=${X}
                    title=${`${O?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${O?"Hide":"Show"} terminal`}
                    aria-pressed=${O?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${W&&Q`
            <div class="tab-context-menu" style=${{left:W.x+"px",top:W.y+"px"}}>
                <button onClick=${()=>{Z?.(W.id),F(null)}}>Close</button>
                <button onClick=${()=>{N?.(W.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(W.id),F(null)}}>
                    ${_.find((H)=>H.id===W.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{G(W.id),F(null)}}>
                        ${q?.has(W.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${_j.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(W.id),C=W.id.split("/").pop()||"document",I="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(C);window.open(I,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${$j.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(W.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${jj.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(W.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${Zj.test(W.id)&&!L8.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(W.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${L8.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(W.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Nj=400,m4=60,B8=220,g4="mdPreviewHeight";function zj(){try{let _=localStorage.getItem(g4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=m4?$:B8}catch{return B8}}function Q8({getContent:_,path:$,onClose:j}){let[Z,N]=S(""),[z,K]=S(zj),G=D(null),q=D(null),X=D(""),O=D(_);return O.current=_,v(()=>{let M=()=>{let u=O.current?.()||"";if(u===X.current)return;X.current=u;try{let R=l0(u,null,{sanitize:!1});N(R)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};M();let m=setInterval(M,Nj);return()=>clearInterval(m)},[]),v(()=>{if(G.current&&Z)T$(G.current).catch(()=>{})},[Z]),Q`
        <div
            class="md-preview-splitter"
            onMouseDown=${(M)=>{M.preventDefault();let m=M.clientY,u=q.current?.offsetHeight||z,R=q.current?.parentElement,E=R?R.offsetHeight*0.7:500,H=M.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let C=(i)=>{let n=Math.min(Math.max(u-(i.clientY-m),m4),E);K(n)},I=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(g4,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",I)}}
            onTouchStart=${(M)=>{M.preventDefault();let m=M.touches[0];if(!m)return;let u=m.clientY,R=q.current?.offsetHeight||z,E=q.current?.parentElement,H=E?E.offsetHeight*0.7:500,C=M.currentTarget;C.classList.add("dragging"),document.body.style.userSelect="none";let I=(n)=>{let e=n.touches[0];if(!e)return;n.preventDefault();let d=Math.min(Math.max(R-(e.clientY-u),m4),H);K(d)},i=()=>{C.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(g4,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",I),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:z+"px"}}>
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
                ref=${G}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function U8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=D(_);z.current=_;let K=D($);K.current=$;let G=D(j);G.current=j;let q=D(Z);q.current=Z,v(()=>{G.current();let X=new j1((W,F)=>z.current(W,F),(W)=>K.current(W),{chatJid:N});X.connect();let O=()=>{X.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",O),document.addEventListener("visibilitychange",O),()=>{window.removeEventListener("focus",O),document.removeEventListener("visibilitychange",O),X.disconnect()}},[N])}function F8(){let[_,$]=S(!1),[j,Z]=S("default"),N=D(!1);v(()=>{let q=O2("notificationsEnabled",!1);if(N.current=q,$(q),typeof Notification<"u")Z(Notification.permission)},[]),v(()=>{N.current=_},[_]);let z=A(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),K=A(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await z();if(Z(X||"default"),X!=="granted"){N.current=!1,$(!1),_0("notificationsEnabled","false");return}}let q=!N.current;N.current=q,$(q),_0("notificationsEnabled",String(q))},[z]),G=A((q,X)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let O=new Notification(q,{body:X});return O.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:G}}var g2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function H8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=S(null),[z,K]=S(!1),G=D(!1),q=D(null),X=D(!1),O=D(null),W=D(null),F=D(0);v(()=>{G.current=z},[z]),v(()=>{W.current=Z},[Z]),v(()=>{F.current+=1,W.current=null,O.current=null,X.current=!1,G.current=!1,N(null),K(!1)},[j]);let M=A(async(R=null)=>{let E=F.current;try{if(R){let H=await T1(R,50,0,j);if(E!==F.current)return;N(H.posts),K(!1)}else{let H=await P2(10,null,j);if(E!==F.current)return;N(H.posts),K(H.has_more)}}catch(H){if(E!==F.current)return;console.error("Failed to load posts:",H)}},[j]),m=A(async()=>{let R=F.current;try{let E=await P2(10,null,j);if(R!==F.current)return;N((H)=>{if(!H||H.length===0)return E.posts;return g2([...E.posts,...H])}),K((H)=>H||E.has_more)}catch(E){if(R!==F.current)return;console.error("Failed to refresh timeline:",E)}},[j]),u=A(async(R={})=>{let E=F.current,H=W.current;if(!H||H.length===0)return;if(X.current)return;let{preserveScroll:C=!0,preserveMode:I="top",allowRepeat:i=!1}=R,n=(K_)=>{if(!C){K_();return}if(I==="top")$(K_);else _(K_)},d=H.slice().sort((K_,c)=>K_.id-c.id)[0]?.id;if(!Number.isFinite(d))return;if(!i&&O.current===d)return;X.current=!0,O.current=d;try{let K_=await P2(10,d,j);if(E!==F.current)return;if(K_.posts.length>0)n(()=>{N((c)=>g2([...K_.posts,...c||[]])),K(K_.has_more)});else K(!1)}catch(K_){if(E!==F.current)return;console.error("Failed to load more posts:",K_)}finally{if(E===F.current)X.current=!1}},[j,_,$]);return v(()=>{q.current=u},[u]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:G,loadPosts:M,refreshTimeline:m,loadMore:u,loadMoreRef:q,loadingMoreRef:X,lastBeforeIdRef:O}}function J8(){let[_,$]=S(null),[j,Z]=S({text:"",totalLines:0}),[N,z]=S(""),[K,G]=S({text:"",totalLines:0}),[q,X]=S(null),[O,W]=S(null),[F,M]=S(null),m=D(null),u=D(0),R=D(!1),E=D(""),H=D(""),C=D(null),I=D(null),i=D(null),n=D(null),e=D(!1),d=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:G,pendingRequest:q,setPendingRequest:X,currentTurnId:O,setCurrentTurnId:W,steerQueuedTurnId:F,setSteerQueuedTurnId:M,lastAgentEventRef:m,lastSilenceNoticeRef:u,isAgentRunningRef:R,draftBufferRef:E,thoughtBufferRef:H,pendingRequestRef:C,stalledPostIdRef:I,currentTurnIdRef:i,steerQueuedTurnIdRef:n,thoughtExpandedRef:e,draftExpandedRef:d}}function D8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.clientX,M=$.current||280,m=O.currentTarget;m.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=F,R=(H)=>{u=H.clientX;let C=Math.min(Math.max(M+(H.clientX-F),160),600);W.style.setProperty("--sidebar-width",`${C}px`),$.current=C},E=()=>{let H=Math.min(Math.max(M+(u-F),160),600);$.current=H,m.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",_0("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,z=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.touches[0];if(!F)return;let M=F.clientX,m=$.current||280,u=O.currentTarget;u.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(H)=>{let C=H.touches[0];if(!C)return;H.preventDefault();let I=Math.min(Math.max(m+(C.clientX-M),160),600);W.style.setProperty("--sidebar-width",`${I}px`),$.current=I},E=()=>{u.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",_0("sidebarWidth",String(Math.round($.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,K=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.clientX,M=j.current||$.current||280,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=F,R=(H)=>{u=H.clientX;let C=Math.min(Math.max(M+(H.clientX-F),200),800);W.style.setProperty("--editor-width",`${C}px`),j.current=C},E=()=>{let H=Math.min(Math.max(M+(u-F),200),800);j.current=H,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,G=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.touches[0];if(!F)return;let M=F.clientX,m=j.current||$.current||280,u=O.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let R=(H)=>{let C=H.touches[0];if(!C)return;H.preventDefault();let I=Math.min(Math.max(m+(C.clientX-M),200),800);W.style.setProperty("--editor-width",`${I}px`),j.current=I},E=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",_0("editorWidth",String(Math.round(j.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,q=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.clientY,M=Z?.current||200,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let u=F,R=(H)=>{u=H.clientY;let C=Math.min(Math.max(M-(H.clientY-F),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let H=Math.min(Math.max(M-(u-F),100),window.innerHeight*0.5);if(Z)Z.current=H;m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,X=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.touches[0];if(!F)return;let M=F.clientY,m=Z?.current||200,u=O.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let R=(H)=>{let C=H.touches[0];if(!C)return;H.preventDefault();let I=Math.min(Math.max(m-(C.clientY-M),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${I}px`),Z)Z.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",_0("dockHeight",String(Math.round(Z?.current||m))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:X}}function E8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=S(()=>n_.getTabs()),[N,z]=S(()=>n_.getActiveId()),[K,G]=S(()=>n_.getTabs().length>0);v(()=>{return n_.onChange((I,i)=>{Z(I),z(i),G(I.length>0)})},[]);let[q,X]=S(()=>new Set),O=A((I)=>{X((i)=>{let n=new Set(i);if(n.has(I))n.delete(I);else n.add(I);return n})},[]),W=A((I)=>{X((i)=>{if(!i.has(I))return i;let n=new Set(i);return n.delete(I),n})},[]),F=A((I,i={})=>{if(!I)return;let n={path:I,mode:"edit"};try{if(!e_.resolve(n)){if(!e_.get("editor")){console.warn(`[openEditor] No pane handler for: ${I}`);return}}}catch(d){console.warn(`[openEditor] paneRegistry.resolve() error for "${I}":`,d)}let e=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;n_.open(I,e)},[]),M=A(()=>{let I=n_.getActiveId();if(I){let i=n_.get(I);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}n_.close(I),W(I),$.current?.(I)}},[W]),m=A((I)=>{let i=n_.get(I);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}n_.close(I),W(I),$.current?.(I)},[W]),u=A((I)=>{n_.activate(I)},[]),R=A((I)=>{let i=n_.getTabs().filter((d)=>d.id!==I&&!d.pinned),n=i.filter((d)=>d.dirty).length;if(n>0){if(!window.confirm(`${n} unsaved tab${n>1?"s":""} will be closed. Continue?`))return}let e=i.map((d)=>d.id);n_.closeOthers(I),e.forEach((d)=>{W(d),$.current?.(d)})},[W]),E=A(()=>{let I=n_.getTabs().filter((e)=>!e.pinned),i=I.filter((e)=>e.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let n=I.map((e)=>e.id);n_.closeAll(),n.forEach((e)=>{W(e),$.current?.(e)})},[W]),H=A((I)=>{n_.togglePin(I)},[]),C=A(()=>{let I=n_.getActiveId();if(I)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:I}}))},[]);return v(()=>{let I=(i)=>{let{oldPath:n,newPath:e,type:d}=i.detail||{};if(!n||!e)return;if(d==="dir"){for(let K_ of n_.getTabs())if(K_.path===n||K_.path.startsWith(`${n}/`)){let c=`${e}${K_.path.slice(n.length)}`;n_.rename(K_.id,c)}}else n_.rename(n,e)};return window.addEventListener("workspace-file-renamed",I),()=>window.removeEventListener("workspace-file-renamed",I)},[]),v(()=>{let I=(i)=>{if(n_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",I),()=>window.removeEventListener("beforeunload",I)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:q,openEditor:F,closeEditor:M,handleTabClose:m,handleTabActivate:u,handleTabCloseOthers:R,handleTabCloseAll:E,handleTabTogglePin:H,handleTabTogglePreview:O,revealInExplorer:C}}function p4(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var c4=p4("warning",30000),k8=p4("finalize",120000),h4=p4("refresh",30000),y8=30000;function A8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function w8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function P8(_=30000){let[,$]=S(0);v(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function i4(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function M8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function z2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function l4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function b8(_,$={}){if(z2($))return null;if(l4($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Kj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function I8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function C8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function x8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function T8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function F2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function S8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function Kj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function B1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function n4(_){return String(_||"").trim()||"web:default"}function f8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function R8(_={}){return z2(_)&&l4(_)}function Yj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Wj(_={},$={}){if(!R8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Yj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function v8(_={}){if(!R8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let W of N)$.clearTimeout?.(W);N.clear()},K=()=>{Z=0,Wj({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},q=()=>{G();for(let W of[80,220,420]){let F=$.setTimeout?.(()=>{N.delete(F),G()},W);if(F!=null)N.add(F)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},O=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",q,!0),O?.addEventListener?.("resize",q),O?.addEventListener?.("scroll",q),()=>{z(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",q,!0),O?.removeEventListener?.("resize",q),O?.removeEventListener?.("scroll",q)}}function Gj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function O$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Gj($,j)}var Vj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function u8(_){return Vj.has(String(_||"").trim())}function Xj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function m8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Xj(_),{detail:Z})),!0}var qj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function g8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(z2({window:j,navigator:Z}))};N();let K=qj.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of K)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function p8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var s4="piclaw_btw_session";function Lj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Oj(){let _=Z$(s4);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var c8=S1,h8=R1,Bj=u1,i8=h1,l8=i1,n8=m1,d4=O$(j$,"getAgentContext",null),Qj=O$(j$,"getAgentModels",{current:null,models:[]}),Uj=O$(j$,"getActiveChatAgents",{chats:[]}),d8=O$(j$,"getChatBranches",{chats:[]}),Fj=O$(j$,"renameChatBranch",null),Hj=O$(j$,"pruneChatBranch",null),Jj=O$(j$,"getAgentQueueState",{count:0}),Dj=O$(j$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Ej=O$(j$,"removeAgentQueueItem",{removed:!1}),kj=O$(j$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});e_.register(B4);e_.register(y4);e_.register(k4);e_.register(A4);e_.register(w4);e_.register(P4);e_.register(b4);e_.register(C4);Q4();e_.register(J4);e_.register(D4);function yj({locationParams:_}){let $=r_(()=>{let V=_.get("chat_jid");return V&&V.trim()?V.trim():"web:default"},[_]),j=r_(()=>{let V=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),Z=r_(()=>{let V=(_.get("branch_loader")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),N=r_(()=>{let V=_.get("branch_source_chat_jid");return V&&V.trim()?V.trim():$},[$,_]),[z,K]=S("disconnected"),[G,q]=S(()=>z2()),[X,O]=S(null),[W,F]=S(null),[M,m]=S(!1),[u,R]=S("current"),[E,H]=S([]),[C,I]=S([]),[i,n]=S(null),{agentStatus:e,setAgentStatus:d,agentDraft:K_,setAgentDraft:c,agentPlan:X_,setAgentPlan:d_,agentThought:__,setAgentThought:t,pendingRequest:N_,setPendingRequest:j_,currentTurnId:Q_,setCurrentTurnId:R_,steerQueuedTurnId:L_,setSteerQueuedTurnId:I_,lastAgentEventRef:U_,lastSilenceNoticeRef:H_,isAgentRunningRef:v_,draftBufferRef:P_,thoughtBufferRef:T_,pendingRequestRef:$0,stalledPostIdRef:F0,currentTurnIdRef:z_,steerQueuedTurnIdRef:$_,thoughtExpandedRef:F_,draftExpandedRef:O_}=J8(),[b_,u_]=S({}),[Z0,h_]=S(null),[x_,A_]=S(null),[i_,s_]=S(!1),[N0,J_]=S(null),[K0,Y0]=S([]),[R0,v0]=S([]),[H0,D_]=S(null),[l_,o_]=S([]),[G0,Q0]=S(!1),[M_,m_]=S(()=>Oj()),u0=r_(()=>K0.find((V)=>V?.chat_jid===$)||null,[K0,$]),w_=r_(()=>R0.find((V)=>V?.chat_jid===$)||u0||null,[u0,R0,$]),V0=w_?.root_chat_jid||u0?.root_chat_jid||$,m0=Lj(u),[z$,T]=S(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),r=l_.length,Y_=D(new Set),G_=D([]),S_=D(new Set),f_=D(0),T0=D({inFlight:!1,lastAttemptAt:0,turnId:null});Y_.current=new Set(l_.map((V)=>V.row_id)),G_.current=l_;let{notificationsEnabled:k$,notificationPermission:K$,toggleNotifications:f$,notify:J0}=F8(),[n0,D0]=S(()=>new Set),[E0,y$]=S(()=>O2("workspaceOpen",!0)),d0=D(null),{editorOpen:y0,tabStripTabs:A$,tabStripActiveId:A0,previewTabs:K2,openEditor:j0,closeEditor:Y$,handleTabClose:B$,handleTabActivate:b0,handleTabCloseOthers:I0,handleTabCloseAll:h0,handleTabTogglePin:w$,handleTabTogglePreview:Q$,revealInExplorer:R$}=E8({onTabClosed:(V)=>d0.current?.(V)}),o$=D(null),X0=D(null),v$=D(null),W$=D(null),S0=e_.getDockPanes().length>0,[w0,P$]=S(!1),k0=A(()=>P$((V)=>!V),[]),M$=A(()=>{j0(F4,{label:"Terminal"})},[j0]),G$=!j&&(y0||S0&&w0);v(()=>{let V=o$.current;if(!V)return;if(X0.current)X0.current.dispose(),X0.current=null;let Y=A0;if(!Y)return;let J={path:Y,mode:"edit"},b=e_.resolve(J)||e_.get("editor");if(!b){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let P=b.mount(V,J);X0.current=P,P.onDirtyChange?.((Z_)=>{n_.setDirty(Y,Z_)}),P.onSaveRequest?.(()=>{}),P.onClose?.(()=>{Y$()});let p=n_.getViewState(Y);if(p&&typeof P.restoreViewState==="function")requestAnimationFrame(()=>P.restoreViewState(p));if(typeof P.onViewStateChange==="function")P.onViewStateChange((Z_)=>{n_.saveViewState(Y,Z_)});return requestAnimationFrame(()=>P.focus()),()=>{if(X0.current===P)P.dispose(),X0.current=null}},[A0,Y$]),v(()=>{let V=(Y)=>{let J=Y.detail?.path;if(J)j0(J)};return document.addEventListener("office-viewer:open-tab",V),document.addEventListener("drawio:open-tab",V),document.addEventListener("csv-viewer:open-tab",V),document.addEventListener("pdf-viewer:open-tab",V),document.addEventListener("image-viewer:open-tab",V),()=>{document.removeEventListener("office-viewer:open-tab",V),document.removeEventListener("drawio:open-tab",V),document.removeEventListener("csv-viewer:open-tab",V),document.removeEventListener("pdf-viewer:open-tab",V),document.removeEventListener("image-viewer:open-tab",V)}},[j0]),v(()=>{let V=v$.current;if(W$.current)W$.current.dispose(),W$.current=null;if(!V||!S0||!w0)return;let Y=e_.getDockPanes()[0];if(!Y){V.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(V,{mode:"view"});return W$.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(W$.current===J)J.dispose(),W$.current=null}},[S0,w0]);let[U$,u$]=S({name:"You",avatar_url:null,avatar_background:null}),H2=D(!1),g_=D(!1),P0=D(null),g0=D($),m$=D(new Map),V$=D($),F$=D(0),H$=D(0),p0=D({}),q0=D({name:null,avatar_url:null}),U0=D({currentHashtag:null,searchQuery:null}),s0=D(null),J$=D(null),b$=D(0),D$=D(0),o0=D(0),g$=D(null),r0=D(null),M0=D(null),E$=D(null),X$=D(0),p$=D({title:null,avatarBase:null}),I$=D(null),C$=A(()=>{if(I$.current)clearTimeout(I$.current),I$.current=null;n(null)},[]);P8(30000),v(()=>{return s3()},[]),v(()=>{return g8(q)},[]),v(()=>{_0("workspaceOpen",String(E0))},[E0]),v(()=>{return v8()},[]),v(()=>{return()=>{C$()}},[C$]),v(()=>{if(!M_){_0(s4,"");return}_0(s4,JSON.stringify({question:M_.question||"",answer:M_.answer||"",thinking:M_.thinking||"",error:M_.error||null,status:M_.status||"success"}))},[M_]),v(()=>{p0.current=b_||{}},[b_]),v(()=>{g0.current=$},[$]),v(()=>{q0.current=U$||{name:"You",avatar_url:null,avatar_background:null}},[U$]);let c$=A((V,Y,J=null)=>{if(typeof document>"u")return;let b=(V||"").trim()||"PiClaw";if(p$.current.title!==b){document.title=b;let h=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(h&&h.getAttribute("content")!==b)h.setAttribute("content",b);p$.current.title=b}let P=document.getElementById("dynamic-favicon");if(!P)return;let p=P.getAttribute("data-default")||P.getAttribute("href")||"/favicon.ico",Z_=Y||p,k_=Y?`${Z_}|${J||""}`:Z_;if(p$.current.avatarBase!==k_){let h=Y?`${Z_}${Z_.includes("?")?"&":"?"}v=${J||Date.now()}`:Z_;P.setAttribute("href",h),p$.current.avatarBase=k_}},[]),r$=A((V)=>{if(!V)return;H((Y)=>Y.includes(V)?Y:[...Y,V])},[]),h$=A((V)=>{H((Y)=>Y.filter((J)=>J!==V))},[]);d0.current=h$;let a$=A(()=>{H([])},[]),q$=A((V)=>{if(!Array.isArray(V)){H([]);return}let Y=[],J=new Set;for(let b of V){if(typeof b!=="string"||!b.trim())continue;let P=b.trim();if(J.has(P))continue;J.add(P),Y.push(P)}H(Y)},[]),E_=A((V,Y=null,J="info",b=3000)=>{C$(),n({title:V,detail:Y||null,kind:J||"info"}),I$.current=setTimeout(()=>{n((P)=>P?.title===V?null:P)},b)},[C$]),Y2=A((V)=>{let Y=M8(V,{editorOpen:y0,resolvePane:(J)=>e_.resolve(J)});if(Y.kind==="open"){j0(Y.path);return}if(Y.kind==="toast")E_(Y.title,Y.detail,Y.level)},[y0,j0,E_]),t$=A(()=>{let V=A0;if(V)r$(V)},[A0,r$]),i$=A((V)=>{if(!V)return;I((Y)=>Y.includes(V)?Y:[...Y,V])},[]),e$=A(async(V,Y=null)=>{let J=(P)=>{P.scrollIntoView({behavior:"smooth",block:"center"}),P.classList.add("post-highlight"),setTimeout(()=>P.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+V);if(b){J(b);return}try{let P=typeof Y==="string"&&Y.trim()?Y.trim():$,Z_=(await f1(V,P))?.thread?.[0];if(!Z_)return;f((k_)=>{if(!k_)return[Z_];if(k_.some((h)=>h.id===Z_.id))return k_;return[...k_,Z_]}),requestAnimationFrame(()=>{setTimeout(()=>{let k_=document.getElementById("post-"+V);if(k_)J(k_)},50)})}catch(P){console.error("[scrollToMessage] Failed to fetch message",V,P)}},[$]),J2=A((V)=>{I((Y)=>Y.filter((J)=>J!==V))},[]),D2=A(()=>{I([])},[]),_2=A((V)=>{if(!Array.isArray(V)){I([]);return}let Y=[],J=new Set;for(let b of V){if(typeof b!=="string"||!b.trim())continue;let P=b.trim();if(J.has(P))continue;J.add(P),Y.push(P)}I(Y)},[]),E2=A((V)=>{let Y=typeof V==="string"&&V.trim()?V.trim():"Could not send your message.";E_("Compose failed",Y,"error",5000)},[E_]),i0=A((V={})=>{let Y=Date.now();if(U_.current=Y,V.running)v_.current=!0,Q0((J)=>J?J:!0);if(V.clearSilence)H_.current=0},[Q0]),c0=A(()=>{if(E$.current)clearTimeout(E$.current),E$.current=null;X$.current=0},[]);v(()=>()=>{c0()},[c0]);let l$=A(()=>{c0(),d((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:Y,lastActivity:J,...b}=V;return b})},[c0]),W2=A((V)=>{if(!V)return;c0();let Y=Date.now();X$.current=Y,d({type:V.type||"active",last_activity:!0}),E$.current=setTimeout(()=>{if(X$.current!==Y)return;d((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},y8)},[c0]),B=A(()=>{v_.current=!1,Q0(!1),U_.current=null,H_.current=0,P_.current="",T_.current="",$0.current=null,r0.current=null,z_.current=null,$_.current=null,P0.current=null,T0.current={inFlight:!1,lastAttemptAt:0,turnId:null},c0(),R_(null),I_(null),F_.current=!1,O_.current=!1},[c0,R_,I_,Q0]),w=A((V)=>{if(!f8({remainingQueueCount:V,currentTurnId:z_.current,isAgentTurnActive:G0}))return;$_.current=null,I_(null)},[G0,I_]),x=A(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),l=A(()=>({agentStatus:e,agentDraft:K_?{...K_}:{text:"",totalLines:0},agentPlan:X_||"",agentThought:__?{...__}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:Q_,steerQueuedTurnId:L_,isAgentTurnActive:Boolean(G0),followupQueueItems:Array.isArray(l_)?l_.map((V)=>({...V})):[],activeModel:Z0,activeThinkingLevel:x_,supportsThinking:Boolean(i_),activeModelUsage:N0,contextUsage:H0,isAgentRunning:Boolean(v_.current),wasAgentActive:Boolean(g_.current),draftBuffer:P_.current||"",thoughtBuffer:T_.current||"",lastAgentEvent:U_.current||null,lastSilenceNotice:H_.current||0,lastAgentResponse:r0.current||null,currentTurnIdRef:z_.current||null,steerQueuedTurnIdRef:$_.current||null,thoughtExpanded:Boolean(F_.current),draftExpanded:Boolean(O_.current),agentStatusRef:P0.current||null,silentRecovery:{...T0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[Z0,N0,x_,K_,X_,e,__,H0,Q_,l_,G0,N_,L_,i_]),V_=A((V)=>{let Y=V||x();c0(),v_.current=Boolean(Y.isAgentRunning),g_.current=Boolean(Y.wasAgentActive),Q0(Boolean(Y.isAgentTurnActive)),U_.current=Y.lastAgentEvent||null,H_.current=Number(Y.lastSilenceNotice||0),P_.current=Y.draftBuffer||"",T_.current=Y.thoughtBuffer||"",$0.current=Y.pendingRequest||null,r0.current=Y.lastAgentResponse||null,z_.current=Y.currentTurnIdRef||null,$_.current=Y.steerQueuedTurnIdRef||null,P0.current=Y.agentStatusRef||null,T0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},F_.current=Boolean(Y.thoughtExpanded),O_.current=Boolean(Y.draftExpanded),d(Y.agentStatus||null),c(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),d_(Y.agentPlan||""),t(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),j_(Y.pendingRequest||null),R_(Y.currentTurnId||null),I_(Y.steerQueuedTurnId||null),o_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),h_(Y.activeModel||null),A_(Y.activeThinkingLevel||null),s_(Boolean(Y.supportsThinking)),J_(Y.activeModelUsage??null),D_(Y.contextUsage??null)},[c0,x,R_,o_,Q0,I_]),B_=A((V)=>{if(!V)return;if(z_.current===V)return;z_.current=V,T0.current={inFlight:!1,lastAttemptAt:0,turnId:V},R_(V),$_.current=null,I_(null),P_.current="",T_.current="",c({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),j_(null),$0.current=null,r0.current=null,F_.current=!1,O_.current=!1},[R_,I_]),C_=A((V)=>{if(typeof document<"u"){let h=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&h)return}let Y=r0.current;if(!Y||!Y.post)return;if(V&&Y.turnId&&Y.turnId!==V)return;let J=Y.post;if(J.id&&g$.current===J.id)return;let b=String(J?.data?.content||"").trim();if(!b)return;g$.current=J.id||g$.current,r0.current=null;let P=b.replace(/\s+/g," ").slice(0,200),p=p0.current||{},k_=(J?.data?.agent_id?p[J.data.agent_id]:null)?.name||"Pi";J0(k_,P)},[J0]),C0=A(async(V,Y)=>{if(V!=="thought"&&V!=="draft")return;let J=z_.current;if(V==="thought"){if(F_.current=Y,J)try{await l8(J,"thought",Y)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!Y)return;try{let b=J?await i8(J,"thought"):null;if(b?.text)T_.current=b.text;t((P)=>({...P||{text:"",totalLines:0},fullText:T_.current||P?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:P?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(O_.current=Y,J)try{await l8(J,"draft",Y)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!Y)return;try{let b=J?await i8(J,"draft"):null;if(b?.text)P_.current=b.text;c((P)=>({...P||{text:"",totalLines:0},fullText:P_.current||P?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:P?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),L=D(null),U=A(()=>{let V=s0.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);L.current=U;let k=A((V)=>{let Y=s0.current;if(!Y||typeof V!=="function"){V?.();return}let{currentHashtag:J,searchQuery:b}=U0.current||{},P=!(b&&!J),p=P?Y.scrollHeight-Y.scrollTop:Y.scrollTop;V(),requestAnimationFrame(()=>{let Z_=s0.current;if(!Z_)return;if(P){let k_=Math.max(Z_.scrollHeight-p,0);Z_.scrollTop=k_}else{let k_=Math.max(Z_.scrollHeight-Z_.clientHeight,0),h=Math.min(p,k_);Z_.scrollTop=h}})},[]),y=A((V)=>{let Y=s0.current;if(!Y||typeof V!=="function"){V?.();return}let J=Y.scrollTop;V(),requestAnimationFrame(()=>{let b=s0.current;if(!b)return;let P=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(J,P)})},[]),g="Queued as a follow-up (one-at-a-time).",s="⁣",a=A((V)=>{if(!V||!Array.isArray(V))return V;let Y=Y_.current,J=new Set(Y),b=V.filter((P)=>{if(J.has(P?.id))return!1;if(P?.data?.is_bot_message){let p=P?.data?.content;if(p===g||p===s)return!1}return!0});return b.length===V.length?V:b},[]),{posts:o,setPosts:f,hasMore:W_,setHasMore:L0,hasMoreRef:a0,loadPosts:z0,refreshTimeline:W0,loadMore:t0,loadMoreRef:n$}=H8({preserveTimelineScroll:k,preserveTimelineScrollTop:y,chatJid:$}),$2=r_(()=>a(o),[o,l_,a]),G2=A(()=>{let V=F0.current;if(!V)return;f((Y)=>Y?Y.filter((J)=>J.id!==V):Y),F0.current=null},[f]),{handleSplitterMouseDown:s8,handleSplitterTouchStart:o8,handleEditorSplitterMouseDown:r8,handleEditorSplitterTouchStart:a8,handleDockSplitterMouseDown:t8,handleDockSplitterTouchStart:e8}=D8({appShellRef:J$,sidebarWidthRef:b$,editorWidthRef:D$,dockHeightRef:o0}),o4=A(()=>{if(!v_.current)return;v_.current=!1,H_.current=0,U_.current=null,z_.current=null,R_(null),F_.current=!1,O_.current=!1;let V=(P_.current||"").trim();if(P_.current="",T_.current="",c({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),j_(null),$0.current=null,r0.current=null,!V){d({type:"error",title:"Response stalled - No content received"});return}let J=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),P=new Date().toISOString(),p={id:b,timestamp:P,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};F0.current=b,f((Z_)=>Z_?g2([...Z_,p]):[p]),L.current?.(),d(null)},[R_]);v(()=>{U0.current={currentHashtag:X,searchQuery:W}},[X,W]);let p_=A(()=>{let V=++f_.current,Y=$;Jj(Y).then((J)=>{if(V!==f_.current)return;if(g0.current!==Y)return;let b=S_.current,P=Array.isArray(J?.items)?J.items.map((p)=>({...p})).filter((p)=>!b.has(p.row_id)):[];if(P.length){o_((p)=>{if(p.length===P.length&&p.every((Z_,k_)=>Z_.row_id===P[k_].row_id))return p;return P});return}b.clear(),w(0),o_((p)=>p.length===0?p:[])}).catch(()=>{if(V!==f_.current)return;if(g0.current!==Y)return;o_((J)=>J.length===0?J:[])})},[w,$,o_]),e0=A(async()=>{let V=$;try{let Y=await d4(V);if(g0.current!==V)return;if(Y)D_(Y)}catch(Y){if(g0.current!==V)return;console.warn("Failed to fetch agent context:",Y)}},[$]),_$=A(async()=>{let V=$;try{let Y=await n8(V);if(g0.current!==V)return null;if(!Y||Y.status!=="active"||!Y.data){if(g_.current){let{currentHashtag:P,searchQuery:p}=U0.current||{};if(!P&&!p)W0()}return g_.current=!1,B(),P0.current=null,d(null),c({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),j_(null),$0.current=null,Y??null}g_.current=!0;let J=Y.data;P0.current=J;let b=J.turn_id||J.turnId;if(b)B_(b);if(i0({running:!0,clearSilence:!0}),l$(),d(J),Y.thought&&Y.thought.text)t((P)=>{if(P&&P.text&&P.text.length>=Y.thought.text.length)return P;return T_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)c((P)=>{if(P&&P.text&&P.text.length>=Y.draft.text.length)return P;return P_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[B,l$,i0,W0,B_]),Q1=A(async()=>{if(!v_.current)return null;if($0.current)return null;let V=z_.current||null,Y=T0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===V&&J-Y.lastAttemptAt<h4)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=V;try{let{currentHashtag:b,searchQuery:P}=U0.current||{};if(!b&&!P)await W0();return await p_(),await _$()}finally{Y.inFlight=!1}},[_$,p_,W0]);v(()=>{let V=Math.min(1000,Math.max(100,Math.floor(c4/2))),Y=setInterval(()=>{if(!v_.current)return;if($0.current)return;let J=U_.current;if(!J)return;let b=Date.now(),P=b-J,p=S2(P0.current);if(P>=k8){if(!p)d({type:"waiting",title:"Re-syncing after a quiet period…"});Q1();return}if(P>=c4){if(b-H_.current>=h4){if(!p){let Z_=Math.floor(P/1000);d({type:"waiting",title:`Waiting for model… No events for ${Z_}s`})}H_.current=b,Q1()}}},V);return()=>clearInterval(Y)},[Q1]);let _9=A((V)=>{if(K(V),V!=="connected"){d(null),c({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),j_(null),$0.current=null,B();return}if(!H2.current){H2.current=!0,_$(),e0();return}let{currentHashtag:Y,searchQuery:J}=U0.current;if(!Y&&!J)W0();_$(),p_(),e0()},[B,W0,_$,p_,e0]),$9=A(async(V)=>{O(V),f(null),await z0(V)},[z0]),j9=A(async()=>{O(null),F(null),f(null),await z0()},[z0]),Z9=A(async(V,Y=u)=>{if(!V||!V.trim())return;let J=Y==="root"||Y==="all"?Y:"current";R(J),F(V.trim()),O(null),f(null);try{let b=await c8(V.trim(),50,0,$,J,V0);f(b.results),L0(!1)}catch(b){console.error("Failed to search:",b),f([])}},[$,V0,u]),N9=A(()=>{m(!0),F(null),O(null),R("current"),f([])},[]),z9=A(()=>{m(!1),F(null),z0()},[z0]),wj=A(()=>{},[]),K9=A(async(V)=>{if(!V)return;let Y=V.id,J=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():$,b=$2?.filter((p)=>p?.data?.thread_id===Y&&p?.id!==Y).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let P=(p)=>{if(!p.length)return;D0((k_)=>{let h=new Set(k_);return p.forEach((q_)=>h.add(q_)),h}),setTimeout(()=>{if(y(()=>{f((k_)=>k_?k_.filter((h)=>!p.includes(h.id)):k_)}),D0((k_)=>{let h=new Set(k_);return p.forEach((q_)=>h.delete(q_)),h}),a0.current)n$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await h8(Y,b>0,J);if(p?.ids?.length)P(p.ids)}catch(p){let Z_=p?.message||"";if(b===0&&Z_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let h=await h8(Y,!0,J);if(h?.ids?.length)P(h.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${Z_}`)}},[$,$2,y]),r4=A(async()=>{try{let V=await Bj();u_(A8(V));let Y=V?.user||{};u$((b)=>{let P=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",p=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,Z_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(b.name===P&&b.avatar_url===p&&b.avatar_background===Z_)return b;return{name:P,avatar_url:p,avatar_background:Z_}});let J=(V?.agents||[]).find((b)=>b.id==="default");c$(J?.name,J?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=$,Y=await d4(V);if(g0.current!==V)return;if(Y)D_(Y)}catch{}},[c$,$]);v(()=>{r4();let V=B2("sidebarWidth",null),Y=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(b$.current=Y,J$.current)J$.current.style.setProperty("--sidebar-width",`${Y}px`)},[r4]);let U1=G0||e!==null,a4=A((V)=>{if(!V||typeof V!=="object")return;let Y=V.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:b}=V;if(!J&&b===void 0)return;let P=p0.current?.[Y]||{id:Y},p=P.name||null,Z_=P.avatar_url??P.avatarUrl??P.avatar??null,k_=!1,h=!1;if(J&&J!==P.name)p=J,h=!0;if(b!==void 0){let q_=typeof b==="string"?b.trim():null,a_=typeof Z_==="string"?Z_.trim():null,y_=q_||null;if(y_!==(a_||null))Z_=y_,k_=!0}if(!h&&!k_)return;if(u_((q_)=>{let y_={...q_[Y]||{id:Y}};if(h)y_.name=p;if(k_)y_.avatar_url=Z_;return{...q_,[Y]:y_}}),Y==="default")c$(p,Z_,k_?Date.now():null)},[c$]),t4=A((V)=>{if(!V||typeof V!=="object")return;let Y=V.user_name??V.userName,J=V.user_avatar??V.userAvatar,b=V.user_avatar_background??V.userAvatarBackground;if(Y===void 0&&J===void 0&&b===void 0)return;u$((P)=>{let p=typeof Y==="string"&&Y.trim()?Y.trim():P.name||"You",Z_=J===void 0?P.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,k_=b===void 0?P.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(P.name===p&&P.avatar_url===Z_&&P.avatar_background===k_)return P;return{name:p,avatar_url:Z_,avatar_background:k_}})},[]),F1=A((V)=>{if(!V||typeof V!=="object")return;let Y=V.model??V.current;if(Y!==void 0)h_(Y);if(V.thinking_level!==void 0)A_(V.thinking_level??null);if(V.supports_thinking!==void 0)s_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)J_(V.provider_usage??null)},[]),k2=A(()=>{let V=$;Qj(V).then((Y)=>{if(g0.current!==V)return;if(Y)F1(Y)}).catch(()=>{})},[F1,$]),f0=A(()=>{Uj().then((V)=>{let Y=Array.isArray(V?.chats)?V.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];Y0(Y)}).catch(()=>{})},[]),x0=A(()=>{d8(V0).then((V)=>{let Y=Array.isArray(V?.chats)?V.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];v0(Y)}).catch(()=>{})},[V0]),Y9=A((V)=>{let Y=V?.row_id;if(Y==null)return;S_.current.add(Y),o_((J)=>J.filter((b)=>b?.row_id!==Y)),Dj(Y,n4($)).then(()=>{p_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),E_("Failed to steer message","The queued message could not be sent as steering.","warning"),S_.current.delete(Y),p_()})},[$,p_,o_,E_]),W9=A((V)=>{let Y=V?.row_id;if(Y==null)return;let J=G_.current.filter((b)=>b?.row_id!==Y).length;S_.current.add(Y),w(J),o_((b)=>b.filter((P)=>P?.row_id!==Y)),Ej(Y,n4($)).then(()=>{p_()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),E_("Failed to remove message","The queued message could not be removed.","warning"),S_.current.delete(Y),p_()})},[w,$,p_,o_,E_]),H1=A((V)=>{if(!V||typeof V!=="object")return;if(f0(),x0(),V?.queued==="followup"||V?.queued==="steer"){p_();return}let Y=V?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))p_()},[f0,x0,p_]),J1=A(()=>{if(M0.current)M0.current.abort(),M0.current=null;m_(null)},[]),p2=A(async(V)=>{let Y=String(V||"").trim();if(!Y)return E_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(M0.current)M0.current.abort();let J=new AbortController;M0.current=J,m_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await kj(Y,{signal:J.signal,chatJid:N6($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(P,p)=>{if(P==="side_prompt_start")m_((Z_)=>Z_?{...Z_,status:"running"}:Z_)},onThinkingDelta:(P)=>{m_((p)=>p?{...p,thinking:`${p.thinking||""}${P||""}`}:p)},onTextDelta:(P)=>{m_((p)=>p?{...p,answer:`${p.answer||""}${P||""}`}:p)}});if(M0.current!==J)return!0;m_((P)=>P?{...P,answer:b?.result||P.answer||"",thinking:b?.thinking||P.thinking||"",model:b?.model||null,status:"success",error:null}:P)}catch(b){if(J.signal.aborted)return!0;m_((P)=>P?{...P,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:P)}finally{if(M0.current===J)M0.current=null}return!0},[$,E_]),G9=A(async({content:V})=>{let Y=Z6(V);if(!Y)return!1;if(Y.type==="help")return E_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return J1(),E_("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await p2(Y.question),!0;return!1},[J1,p2,E_]),V9=A(()=>{if(M_?.question)p2(M_.question)},[M_,p2]),X9=A(async()=>{let V=Y6(M_);if(!V)return;try{let Y=await q2("default",V,null,[],U1?"queue":null,$);H1(Y),E_(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){E_("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[M_,H1,U1,E_]),y2=A(()=>{k2(),f0(),x0(),p_(),e0()},[k2,f0,x0,p_,e0]);v(()=>{y2();let V=setInterval(()=>{k2(),f0(),x0(),p_()},60000);return()=>clearInterval(V)},[y2,k2,f0,x0,p_]),v(()=>{x0()},[x0]),v(()=>{let V=!1;if(f(null),X)return z0(X),()=>{V=!0};if(W)return c8(W,50,0,$,u,V0).then((Y)=>{if(V)return;f(Y.results),L0(!1)}).catch((Y)=>{if(V)return;console.error("Failed to search:",Y),f([]),L0(!1)}),()=>{V=!0};return z0(),()=>{V=!0}},[$,X,W,u,V0,z0,L0,f]),v(()=>{let V=V$.current||$;m$.current.set(V,l())},[$,l]),v(()=>{let V=V$.current||$;if(V===$)return;m$.current.set(V,l()),V$.current=$,S_.current.clear(),V_(m$.current.get($)||null),p_(),_$(),e0()},[$,_$,e0,p_,V_,l]);let q9=A(()=>{let{currentHashtag:V,searchQuery:Y}=U0.current||{};if(!V&&!Y)W0();y2()},[y2,W0]),D1=A((V,Y)=>{let J=Y?.turn_id,b=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,p=b?b===$:V==="connected"||V==="workspace_update";if(p)a4(Y),t4(Y);if(V==="ui_theme"){o3(Y);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))l$()}if(V==="connected"){d(null),c({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),j_(null),$0.current=null,B();let h=$;n8(h).then((y_)=>{if(g0.current!==h)return;if(!y_||y_.status!=="active"||!y_.data)return;let V2=y_.data,j3=V2.turn_id||V2.turnId;if(j3)B_(j3);if(i0({clearSilence:!0}),W2(V2),y_.thought&&y_.thought.text)T_.current=y_.thought.text,t({text:y_.thought.text,totalLines:y_.thought.totalLines||0});if(y_.draft&&y_.draft.text)P_.current=y_.draft.text,c({text:y_.draft.text,totalLines:y_.draft.totalLines||0})}).catch((y_)=>{console.warn("Failed to fetch agent status:",y_)});let{currentHashtag:q_,searchQuery:a_}=U0.current||{};if(!q_&&!a_)W0();y2();return}if(V==="agent_status"){if(!p){if(Y?.type==="done"||Y?.type==="error")f0(),x0();return}if(Y.type==="done"||Y.type==="error"){if(J&&z_.current&&J!==z_.current)return;if(Y.type==="done"){C_(J||z_.current);let{currentHashtag:h,searchQuery:q_}=U0.current||{};if(!h&&!q_)W0();if(Y.context_usage)D_(Y.context_usage)}if(g_.current=!1,B(),S_.current.clear(),f0(),p_(),c({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),j_(null),Y.type==="error")d({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>d(null),8000);else d(null)}else{if(J)B_(J);if(i0({running:!0,clearSilence:!0}),Y.type==="thinking")P_.current="",T_.current="",c({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0});P0.current=Y,d((h)=>{if(h&&h.type===Y.type&&h.title===Y.title)return h;return Y})}return}if(V==="agent_steer_queued"){if(!p)return;if(J&&z_.current&&J!==z_.current)return;let h=J||z_.current;if(!h)return;$_.current=h,I_(h);return}if(V==="agent_followup_queued"){if(!p)return;let h=Y?.row_id,q_=Y?.content;if(h!=null&&typeof q_==="string"&&q_.trim())o_((a_)=>{if(a_.some((y_)=>y_?.row_id===h))return a_;return[...a_,{row_id:h,content:q_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});p_();return}if(V==="agent_followup_consumed"){if(!p)return;let h=Y?.row_id;if(h!=null){let q_=G_.current.filter((a_)=>a_.row_id!==h).length;w(q_),o_((a_)=>a_.filter((y_)=>y_.row_id!==h))}p_(),W0();return}if(V==="agent_followup_removed"){if(!p)return;let h=Y?.row_id;if(h!=null){let q_=G_.current.filter((a_)=>a_.row_id!==h).length;S_.current.add(h),w(q_),o_((a_)=>a_.filter((y_)=>y_.row_id!==h))}p_();return}if(V==="agent_draft_delta"){if(!p)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B_(J);if(i0({running:!0,clearSilence:!0}),Y?.reset)P_.current="";if(Y?.delta)P_.current+=Y.delta;let h=Date.now();if(!F$.current||h-F$.current>=100){F$.current=h;let q_=P_.current,a_=i4(q_);if(O_.current)c((y_)=>({text:y_?.text||"",totalLines:a_,fullText:q_}));else c({text:q_,totalLines:a_})}return}if(V==="agent_draft"){if(!p)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B_(J);i0({running:!0,clearSilence:!0});let h=Y.text||"",q_=Y.mode||(Y.kind==="plan"?"replace":"append"),a_=Number.isFinite(Y.total_lines)?Y.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(q_==="replace")d_(h);else d_((y_)=>(y_||"")+h);else if(!O_.current)P_.current=h,c({text:h,totalLines:a_});return}if(V==="agent_thought_delta"){if(!p)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B_(J);if(i0({running:!0,clearSilence:!0}),Y?.reset)T_.current="";if(typeof Y?.delta==="string")T_.current+=Y.delta;let h=Date.now();if(F_.current&&(!H$.current||h-H$.current>=100)){H$.current=h;let q_=T_.current;t((a_)=>({text:a_?.text||"",totalLines:i4(q_),fullText:q_}))}return}if(V==="agent_thought"){if(!p)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B_(J);i0({running:!0,clearSilence:!0});let h=Y.text||"",q_=Number.isFinite(Y.total_lines)?Y.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!F_.current)T_.current=h,t({text:h,totalLines:q_});return}if(V==="model_changed"){if(!p)return;if(Y?.model!==void 0)h_(Y.model);if(Y?.thinking_level!==void 0)A_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)s_(Boolean(Y.supports_thinking));let h=$;d4(h).then((q_)=>{if(g0.current!==h)return;if(q_)D_(q_)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(u8(V)){if(!p)return;if(m8(V,Y),V==="extension_ui_notify"&&typeof Y?.message==="string")E_(Y.message,null,Y?.type||"info");if(V==="extension_ui_error"&&typeof Y?.error==="string")E_("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:Z_,searchQuery:k_}=U0.current;if(V==="agent_response"){if(!p)return;G2(),r0.current={post:Y,turnId:z_.current}}if(!Z_&&!k_&&p&&(V==="new_post"||V==="new_reply"||V==="agent_response"))f((h)=>{if(!h)return[Y];if(h.some((q_)=>q_.id===Y.id))return h;return[...h,Y]}),L.current?.();if(V==="interaction_updated"){if(!p)return;f((h)=>{if(!h)return h;if(!h.some((q_)=>q_.id===Y.id))return h;return h.map((q_)=>q_.id===Y.id?Y:q_)})}if(V==="interaction_deleted"){if(!p)return;let h=Y?.ids||[];if(h.length){y(()=>{f((y_)=>y_?y_.filter((V2)=>!h.includes(V2.id)):y_)});let{currentHashtag:q_,searchQuery:a_}=U0.current;if(a0.current&&!q_&&!a_)n$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[B,l$,$,n$,i0,C_,y,f0,x0,W0,G2,B_,W2,a4,t4,k2,p_,o_]);v(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=D1,V.reset=()=>{G2(),B(),d(null),c({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),j_(null)},V.finalize=()=>o4(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[B,o4,D1,G2]),U8({handleSseEvent:D1,handleConnectionStatusChange:_9,loadPosts:z0,onWake:q9,chatJid:$}),v(()=>{if(!$2||$2.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let Y=V.slice(5);e$(Y),history.replaceState(null,"",location.pathname+location.search)},[$2,e$]);let E1=e!==null;v(()=>{if(z!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:b}=U0.current||{},P=!J&&!b;if(E1){if(P)W0();p_(),_$(),e0()}else{if(P)W0();_$(),e0()}},E1?15000:60000);return()=>clearInterval(Y)},[z,E1,_$,e0,p_,W0]),v(()=>{return p8(()=>{_$(),e0(),p_()})},[_$,e0,p_]);let L9=A(()=>{y$((V)=>!V)},[]),e4=A((V)=>{if(typeof window>"u")return;let Y=String(V||"").trim();if(!Y||Y===$)return;let J=F2(window.location.href,Y,{chatOnly:j});window.location.assign(J)},[j,$]),_3=A(async()=>{if(typeof window>"u"||!w_?.chat_jid)return;let V=w_.agent_name||"",Y=w_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let b=window.prompt("Agent handle (without @)",V);if(b===null)return;try{let P=await Fj(w_.chat_jid,{displayName:J,agentName:b});await Promise.allSettled([f0(),x0()]);let p=P?.branch?.agent_name||String(b||"").trim()||V;E_("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(P){let p=P instanceof Error?P.message:String(P||"Could not rename branch.");E_("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[w_,f0,x0,E_]),$3=A(async()=>{if(typeof window>"u"||!w_?.chat_jid)return;if(w_.chat_jid===(w_.root_chat_jid||w_.chat_jid)){E_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=w_.display_name||`@${w_.agent_name||w_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Hj(w_.chat_jid),await Promise.allSettled([f0(),x0()]);let b=w_.root_chat_jid||"web:default";E_("Branch pruned",`${Y} has been archived.`,"info",3000);let P=F2(window.location.href,b,{chatOnly:j});window.location.assign(P)}catch(b){let P=b instanceof Error?b.message:String(b||"Could not prune branch.");E_("Could not prune branch",P||"Could not prune branch.","warning",5000)}},[j,w_,f0,x0,E_]);v(()=>{if(!Z||typeof window>"u")return;let V=!1;return(async()=>{try{T({status:"running",message:"Preparing a new chat branch…"});let Y=await M2(N);if(V)return;let J=Y?.branch,b=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");let P=F2(window.location.href,b,{chatOnly:!0});window.location.replace(P)}catch(Y){if(V)return;T({status:"error",message:B1(Y)})}})(),()=>{V=!0}},[Z,N]);let O9=A(async()=>{if(typeof window>"u")return;try{let Y=(await M2($))?.branch,J=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([f0(),x0()]);let b=Y?.agent_name?`@${Y.agent_name}`:J;E_("New branch created",`Switched to ${b}.`,"info",2500);let P=F2(window.location.href,J,{chatOnly:j});window.location.assign(P)}catch(V){E_("Could not create branch",B1(V),"warning",5000)}},[j,$,f0,x0,E_]),B9=A(async()=>{if(typeof window>"u"||G)return;let V=b8($);if(!V){E_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(V.mode==="tab"){let J=S8(window.location.href,$,{chatOnly:!0});if(!window.open(J,V.target))E_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=I8(V);if(!Y){E_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}C8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let b=(await M2($))?.branch,P=typeof b?.chat_jid==="string"&&b.chat_jid.trim()?b.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");try{let Z_=await v1();Y0(Array.isArray(Z_?.chats)?Z_.chats:[])}catch{}try{let Z_=await d8(V0);v0(Array.isArray(Z_?.chats)?Z_.chats:[])}catch{}let p=F2(window.location.href,P,{chatOnly:!0});x8(Y,p)}catch(J){T8(Y),E_("Could not open branch window",B1(J),"error",5000)}},[$,V0,G,E_]);v(()=>{if(!y0)return;if(typeof window>"u")return;let V=J$.current;if(!V)return;if(!D$.current){let Y=B2("editorWidth",null),J=b$.current||280;D$.current=Number.isFinite(Y)?Y:J}if(V.style.setProperty("--editor-width",`${D$.current}px`),!o0.current){let Y=B2("dockHeight",null);o0.current=Number.isFinite(Y)?Y:200}V.style.setProperty("--dock-height",`${o0.current}px`)},[y0]),v(()=>{if(!S0||j)return;let V=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),k0()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[k0,S0,j]);let Q9=Boolean(L_&&L_===(e?.turn_id||Q_));if(Z)return Q`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${z$.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${z$.message}</p>
                    </div>
                </div>
            </div>
        `;return Q`
        <div class=${`app-shell${E0?"":" workspace-collapsed"}${y0?" editor-open":""}${j?" chat-only":""}`} ref=${J$}>
            ${!j&&Q`
                <${q8}
                    onFileSelect=${r$}
                    visible=${E0}
                    active=${E0||y0}
                    onOpenEditor=${j0}
                    onOpenTerminalTab=${M$}
                    onToggleTerminal=${S0?k0:void 0}
                    terminalVisible=${Boolean(S0&&w0)}
                />
                <button
                    class=${`workspace-toggle-tab${E0?" open":" closed"}`}
                    onClick=${L9}
                    title=${E0?"Hide workspace":"Show workspace"}
                    aria-label=${E0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${s8} onTouchStart=${o8}></div>
            `}
            ${G$&&Q`
                <div class="editor-pane-container">
                    ${y0&&Q`
                        <${O8}
                            tabs=${A$}
                            activeId=${A0}
                            onActivate=${b0}
                            onClose=${B$}
                            onCloseOthers=${I0}
                            onCloseAll=${h0}
                            onTogglePin=${w$}
                            onTogglePreview=${Q$}
                            previewTabs=${K2}
                            onToggleDock=${S0?k0:void 0}
                            dockVisible=${S0&&w0}
                        />
                    `}
                    ${y0&&Q`<div class="editor-pane-host" ref=${o$}></div>`}
                    ${y0&&A0&&K2.has(A0)&&Q`
                        <${Q8}
                            getContent=${()=>X0.current?.getContent?.()}
                            path=${A0}
                            onClose=${()=>Q$(A0)}
                        />
                    `}
                    ${S0&&w0&&Q`<div class="dock-splitter" onMouseDown=${t8} onTouchStart=${e8}></div>`}
                    ${S0&&Q`<div class=${`dock-panel${w0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${k0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${v$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${r8} onTouchStart=${a8}></div>
            `}
            <div class="container">
                ${W&&w8()&&Q`<div class="search-results-spacer"></div>`}
                ${j&&Q`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${w_?.display_name||w_?.agent_name?`@${w_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${w_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${R0.length>1&&Q`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(V)=>e4(V.currentTarget.value)}
                                    >
                                        ${R0.map((V)=>Q`
                                            <option key=${V.chat_jid} value=${V.chat_jid}>
                                                ${`@${V.agent_name}${V.display_name?` — ${V.display_name}`:""}${V.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${w_?.chat_jid&&Q`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${_3}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${w_?.chat_jid&&w_.chat_jid!==(w_.root_chat_jid||w_.chat_jid)&&Q`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${$3}
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
                ${(X||W)&&Q`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${j9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${X?`#${X}`:`Search: ${W} · ${m0}`}</span>
                    </div>
                `}
                <${C6}
                    posts=${$2}
                    hasMore=${W_}
                    onLoadMore=${t0}
                    timelineRef=${s0}
                    onHashtagClick=${$9}
                    onMessageRef=${i$}
                    onScrollToMessage=${e$}
                    onFileRef=${Y2}
                    onPostClick=${void 0}
                    onDeletePost=${K9}
                    emptyMessage=${X?`No posts with #${X}`:W?`No results for "${W}"`:void 0}
                    agents=${b_}
                    user=${U$}
                    reverse=${!(W&&!X)}
                    removingPostIds=${n0}
                    searchQuery=${W}
                />
                <${B6}
                    status=${e}
                    draft=${K_}
                    plan=${X_}
                    thought=${__}
                    pendingRequest=${N_}
                    intent=${i}
                    turnId=${Q_}
                    steerQueued=${Q9}
                    onPanelToggle=${C0}
                />
                <${W6}
                    session=${M_}
                    onClose=${J1}
                    onRetry=${V9}
                    onInject=${X9}
                />
                <${u3}
                    onPost=${()=>{z0(),U()}}
                    onFocus=${U}
                    searchMode=${M}
                    searchScope=${u}
                    onSearch=${Z9}
                    onSearchScopeChange=${R}
                    onEnterSearch=${N9}
                    onExitSearch=${z9}
                    fileRefs=${E}
                    onRemoveFileRef=${h$}
                    onClearFileRefs=${a$}
                    onSetFileRefs=${q$}
                    messageRefs=${C}
                    onRemoveMessageRef=${J2}
                    onClearMessageRefs=${D2}
                    onSetMessageRefs=${_2}
                    onSwitchChat=${e4}
                    onRenameSession=${_3}
                    onCreateSession=${O9}
                    onDeleteSession=${$3}
                    activeEditorPath=${j?null:A0}
                    onAttachEditorFile=${j?void 0:t$}
                    onOpenFilePill=${Y2}
                    followupQueueCount=${r}
                    followupQueueItems=${l_}
                    onInjectQueuedFollowup=${Y9}
                    onRemoveQueuedFollowup=${W9}
                    onSubmitIntercept=${G9}
                    onMessageResponse=${H1}
                    onSubmitError=${E2}
                    onPopOutChat=${G?void 0:B9}
                    isAgentActive=${U1}
                    activeChatAgents=${K0}
                    currentChatJid=${$}
                    connectionStatus=${z}
                    activeModel=${Z0}
                    modelUsage=${N0}
                    thinkingLevel=${x_}
                    supportsThinking=${i_}
                    contextUsage=${H0}
                    notificationsEnabled=${k$}
                    notificationPermission=${K$}
                    onToggleNotifications=${f$}
                    onModelChange=${h_}
                    onModelStateChange=${F1}
                />
                <${Q6}
                    request=${N_}
                    onRespond=${()=>{j_(null),$0.current=null}}
                />
            </div>
        </div>
    `}function Aj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return Q`<${yj} locationParams=${_} />`}P3(Q`<${Aj} />`,document.getElementById("app"));

//# debugId=211D5950BAD08B4064756E2164756E21
//# sourceMappingURL=app.bundle.js.map
