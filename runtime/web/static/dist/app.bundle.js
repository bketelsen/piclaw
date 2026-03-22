var w5=Object.defineProperty;var T5=(_)=>_;function C5(_,$){this[_]=T5.bind(null,$)}var f5=(_,$)=>{for(var j in $)w5(_,j,{get:$[j],enumerable:!0,configurable:!0,set:C5.bind($,j)})};var W1,j0,t3,b5,r$,m3,e3,_8,$8,N4,_4,$4,S5,X1={},L1=[],R5=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,U1=Array.isArray;function m$(_,$){for(var j in $)_[j]=$[j];return _}function Y4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function j8(_,$,j){var Z,N,Y,z={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?N=$[Y]:z[Y]=$[Y];if(arguments.length>2&&(z.children=arguments.length>3?W1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)z[Y]===void 0&&(z[Y]=_.defaultProps[Y]);return q1(_,z,Z,N,null)}function q1(_,$,j,Z,N){var Y={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++t3:N,__i:-1,__u:0};return N==null&&j0.vnode!=null&&j0.vnode(Y),Y}function O1(_){return _.children}function K1(_,$){this.props=_,this.context=$}function k2(_,$){if($==null)return _.__?k2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?k2(_):null}function v5(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],Y=m$({},$);Y.__v=$.__v+1,j0.vnode&&j0.vnode(Y),z4(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?k2($):j,!!(32&$.__u),N),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,z8(Z,Y,N),$.__e=$.__=null,Y.__e!=j&&Z8(Y)}}function Z8(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),Z8(_)}function g3(_){(!_.__d&&(_.__d=!0)&&r$.push(_)&&!B1.__r++||m3!=j0.debounceRendering)&&((m3=j0.debounceRendering)||e3)(B1)}function B1(){try{for(var _,$=1;r$.length;)r$.length>$&&r$.sort(_8),_=r$.shift(),$=r$.length,v5(_)}finally{r$.length=B1.__r=0}}function N8(_,$,j,Z,N,Y,z,K,L,Q,B){var X,H,M,b,m,g,k,w=Z&&Z.__k||L1,p=$.length;for(L=u5(j,$,w,L,p),X=0;X<p;X++)(M=j.__k[X])!=null&&(H=M.__i!=-1&&w[M.__i]||X1,M.__i=X,g=z4(_,M,H,N,Y,z,K,L,Q,B),b=M.__e,M.ref&&H.ref!=M.ref&&(H.ref&&G4(H.ref,null,M),B.push(M.ref,M.__c||b,M)),m==null&&b!=null&&(m=b),(k=!!(4&M.__u))||H.__k===M.__k?L=Y8(M,L,_,k):typeof M.type=="function"&&g!==void 0?L=g:b&&(L=b.nextSibling),M.__u&=-7);return j.__e=m,L}function u5(_,$,j,Z,N){var Y,z,K,L,Q,B=j.length,X=B,H=0;for(_.__k=Array(N),Y=0;Y<N;Y++)(z=$[Y])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[Y]=q1(null,z,null,null,null):U1(z)?z=_.__k[Y]=q1(O1,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[Y]=q1(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[Y]=z,L=Y+H,z.__=_,z.__b=_.__b+1,K=null,(Q=z.__i=m5(z,j,L,X))!=-1&&(X--,(K=j[Q])&&(K.__u|=2)),K==null||K.__v==null?(Q==-1&&(N>B?H--:N<B&&H++),typeof z.type!="function"&&(z.__u|=4)):Q!=L&&(Q==L-1?H--:Q==L+1?H++:(Q>L?H--:H++,z.__u|=4))):_.__k[Y]=null;if(X)for(Y=0;Y<B;Y++)(K=j[Y])!=null&&(2&K.__u)==0&&(K.__e==Z&&(Z=k2(K)),V8(K,K));return Z}function Y8(_,$,j,Z){var N,Y;if(typeof _.type=="function"){for(N=_.__k,Y=0;N&&Y<N.length;Y++)N[Y]&&(N[Y].__=_,$=Y8(N[Y],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=k2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function m5(_,$,j,Z){var N,Y,z,K=_.key,L=_.type,Q=$[j],B=Q!=null&&(2&Q.__u)==0;if(Q===null&&K==null||B&&K==Q.key&&L==Q.type)return j;if(Z>(B?1:0)){for(N=j-1,Y=j+1;N>=0||Y<$.length;)if((Q=$[z=N>=0?N--:Y++])!=null&&(2&Q.__u)==0&&K==Q.key&&L==Q.type)return z}return-1}function p3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||R5.test($)?j:j+"px"}function V1(_,$,j,Z,N){var Y,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||p3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||p3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace($8,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Z?j.u=Z.u:(j.u=N4,_.addEventListener($,Y?$4:_4,Y)):_.removeEventListener($,Y?$4:_4,Y);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function h3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=N4++;else if($.t<j.u)return;return j(j0.event?j0.event($):$)}}}function z4(_,$,j,Z,N,Y,z,K,L,Q){var B,X,H,M,b,m,g,k,w,p,A,R,d,t,o,__=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),Y=[K=$.__e=j.__e]),(B=j0.__b)&&B($);_:if(typeof __=="function")try{if(k=$.props,w=__.prototype&&__.prototype.render,p=(B=__.contextType)&&Z[B.__c],A=B?p?p.props.value:B.__:Z,j.__c?g=(X=$.__c=j.__c).__=X.__E:(w?$.__c=X=new __(k,A):($.__c=X=new K1(k,A),X.constructor=__,X.render=p5),p&&p.sub(X),X.state||(X.state={}),X.__n=Z,H=X.__d=!0,X.__h=[],X._sb=[]),w&&X.__s==null&&(X.__s=X.state),w&&__.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=m$({},X.__s)),m$(X.__s,__.getDerivedStateFromProps(k,X.__s))),M=X.props,b=X.state,X.__v=$,H)w&&__.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),w&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(w&&__.getDerivedStateFromProps==null&&k!==M&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(k,A),$.__v==j.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(k,X.__s,A)===!1){$.__v!=j.__v&&(X.props=k,X.state=X.__s,X.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),L1.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&z.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(k,X.__s,A),w&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(M,b,m)})}if(X.context=A,X.props=k,X.__P=_,X.__e=!1,R=j0.__r,d=0,w)X.state=X.__s,X.__d=!1,R&&R($),B=X.render(X.props,X.state,X.context),L1.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,R&&R($),B=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++d<25);X.state=X.__s,X.getChildContext!=null&&(Z=m$(m$({},Z),X.getChildContext())),w&&!H&&X.getSnapshotBeforeUpdate!=null&&(m=X.getSnapshotBeforeUpdate(M,b)),t=B!=null&&B.type===O1&&B.key==null?G8(B.props.children):B,K=N8(_,U1(t)?t:[t],$,j,Z,N,Y,z,K,L,Q),X.base=$.__e,$.__u&=-161,X.__h.length&&z.push(X),g&&(X.__E=X.__=null)}catch(i){if($.__v=null,L||Y!=null)if(i.then){for($.__u|=L?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;Y[Y.indexOf(K)]=null,$.__e=K}else{for(o=Y.length;o--;)Y4(Y[o]);j4($)}else $.__e=j.__e,$.__k=j.__k,i.then||j4($);j0.__e(i,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=g5(j.__e,$,j,Z,N,Y,z,L,Q);return(B=j0.diffed)&&B($),128&$.__u?void 0:K}function j4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(j4))}function z8(_,$,j){for(var Z=0;Z<j.length;Z++)G4(j[Z],j[++Z],j[++Z]);j0.__c&&j0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(Y){Y.call(N)})}catch(Y){j0.__e(Y,N.__v)}})}function G8(_){return typeof _!="object"||_==null||_.__b>0?_:U1(_)?_.map(G8):m$({},_)}function g5(_,$,j,Z,N,Y,z,K,L){var Q,B,X,H,M,b,m,g=j.props||X1,k=$.props,w=$.type;if(w=="svg"?N="http://www.w3.org/2000/svg":w=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),Y!=null){for(Q=0;Q<Y.length;Q++)if((M=Y[Q])&&"setAttribute"in M==!!w&&(w?M.localName==w:M.nodeType==3)){_=M,Y[Q]=null;break}}if(_==null){if(w==null)return document.createTextNode(k);_=document.createElementNS(N,w,k.is&&k),K&&(j0.__m&&j0.__m($,Y),K=!1),Y=null}if(w==null)g===k||K&&_.data==k||(_.data=k);else{if(Y=Y&&W1.call(_.childNodes),!K&&Y!=null)for(g={},Q=0;Q<_.attributes.length;Q++)g[(M=_.attributes[Q]).name]=M.value;for(Q in g)M=g[Q],Q=="dangerouslySetInnerHTML"?X=M:Q=="children"||(Q in k)||Q=="value"&&("defaultValue"in k)||Q=="checked"&&("defaultChecked"in k)||V1(_,Q,null,M,N);for(Q in k)M=k[Q],Q=="children"?H=M:Q=="dangerouslySetInnerHTML"?B=M:Q=="value"?b=M:Q=="checked"?m=M:K&&typeof M!="function"||g[Q]===M||V1(_,Q,M,g[Q],N);if(B)K||X&&(B.__html==X.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(X&&(_.innerHTML=""),N8($.type=="template"?_.content:_,U1(H)?H:[H],$,j,Z,w=="foreignObject"?"http://www.w3.org/1999/xhtml":N,Y,z,Y?Y[0]:j.__k&&k2(j,0),K,L),Y!=null)for(Q=Y.length;Q--;)Y4(Y[Q]);K||(Q="value",w=="progress"&&b==null?_.removeAttribute("value"):b!=null&&(b!==_[Q]||w=="progress"&&!b||w=="option"&&b!=g[Q])&&V1(_,Q,b,g[Q],N),Q="checked",m!=null&&m!=_[Q]&&V1(_,Q,m,g[Q],N))}return _}function G4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){j0.__e(N,j)}}function V8(_,$,j){var Z,N;if(j0.unmount&&j0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||G4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){j0.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&V8(Z[N],$,j||typeof _.type!="function");j||Y4(_.__e),_.__c=_.__=_.__e=void 0}function p5(_,$,j){return this.constructor(_,j)}function q8(_,$,j){var Z,N,Y,z;$==document&&($=document.documentElement),j0.__&&j0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],z=[],z4($,_=(!Z&&j||$).__k=j8(O1,null,[_]),N||X1,X1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?W1.call($.childNodes):null,Y,!Z&&j?j:N?N.__e:$.firstChild,Z,z),z8(Y,_,z)}W1=L1.slice,j0={__e:function(_,$,j,Z){for(var N,Y,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((Y=N.constructor)&&Y.getDerivedStateFromError!=null&&(N.setState(Y.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(K){_=K}throw _}},t3=0,b5=function(_){return _!=null&&_.constructor===void 0},K1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=m$({},this.state),typeof _=="function"&&(_=_(m$({},j),this.props)),_&&m$(j,_),_!=null&&this.__v&&($&&this._sb.push($),g3(this))},K1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),g3(this))},K1.prototype.render=O1,r$=[],e3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_8=function(_,$){return _.__v.__b-$.__v.__b},B1.__r=0,$8=/(PointerCapture)$|Capture$/i,N4=0,_4=h3(!1),$4=h3(!0),S5=0;var l2,F0,e1,c3,n2=0,K8=[],O0=j0,i3=O0.__b,l3=O0.__r,n3=O0.diffed,s3=O0.__c,d3=O0.unmount,o3=O0.__;function V4(_,$){O0.__h&&O0.__h(F0,_,n2||$),n2=0;var j=F0.__H||(F0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function v(_){return n2=1,h5(X8,_)}function h5(_,$,j){var Z=V4(l2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):X8(void 0,$),function(K){var L=Z.__N?Z.__N[0]:Z.__[0],Q=Z.t(L,K);L!==Q&&(Z.__N=[Q,Z.__[1]],Z.__c.setState({}))}],Z.__c=F0,!F0.__f)){var N=function(K,L,Q){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(H){return H.__c});if(B.every(function(H){return!H.__N}))return!Y||Y.call(this,K,L,Q);var X=Z.__c.props!==K;return B.some(function(H){if(H.__N){var M=H.__[0];H.__=H.__N,H.__N=void 0,M!==H.__[0]&&(X=!0)}}),Y&&Y.call(this,K,L,Q)||X};F0.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:z}=F0;F0.componentWillUpdate=function(K,L,Q){if(this.__e){var B=Y;Y=void 0,N(K,L,Q),Y=B}z&&z.call(this,K,L,Q)},F0.shouldComponentUpdate=N}return Z.__N||Z.__}function S(_,$){var j=V4(l2++,3);!O0.__s&&Q8(j.__H,$)&&(j.__=_,j.u=$,F0.__H.__h.push(j))}function P(_){return n2=5,v_(function(){return{current:_}},[])}function v_(_,$){var j=V4(l2++,7);return Q8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function I(_,$){return n2=8,v_(function(){return _},$)}function c5(){for(var _;_=K8.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(Q1),$.__h.some(Z4),$.__h=[]}catch(j){$.__h=[],O0.__e(j,_.__v)}}}O0.__b=function(_){F0=null,i3&&i3(_)},O0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),o3&&o3(_,$)},O0.__r=function(_){l3&&l3(_),l2=0;var $=(F0=_.__c).__H;$&&(e1===F0?($.__h=[],F0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(Q1),$.__h.some(Z4),$.__h=[],l2=0)),e1=F0},O0.diffed=function(_){n3&&n3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(K8.push($)!==1&&c3===O0.requestAnimationFrame||((c3=O0.requestAnimationFrame)||i5)(c5)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),e1=F0=null},O0.__c=function(_,$){$.some(function(j){try{j.__h.some(Q1),j.__h=j.__h.filter(function(Z){return!Z.__||Z4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],O0.__e(Z,j.__v)}}),s3&&s3(_,$)},O0.unmount=function(_){d3&&d3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{Q1(Z)}catch(N){$=N}}),j.__H=void 0,$&&O0.__e($,j.__v))};var r3=typeof requestAnimationFrame=="function";function i5(_){var $,j=function(){clearTimeout(Z),r3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);r3&&($=requestAnimationFrame(j))}function Q1(_){var $=F0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),F0=$}function Z4(_){var $=F0;_.__c=_.__(),F0=$}function Q8(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function X8(_,$){return typeof $=="function"?$(_):$}var L8=function(_,$,j,Z){var N;$[0]=0;for(var Y=1;Y<$.length;Y++){var z=$[Y++],K=$[Y]?($[0]|=z?1:2,j[$[Y++]]):$[++Y];z===3?Z[0]=K:z===4?Z[1]=Object.assign(Z[1]||{},K):z===5?(Z[1]=Z[1]||{})[$[++Y]]=K:z===6?Z[1][$[++Y]]+=K+"":z?(N=_.apply(K,L8(_,K,j,["",null])),Z.push(N),K[0]?$[0]|=2:($[Y-2]=0,$[Y]=N)):Z.push(K)}return Z},a3=new Map;function l5(_){var $=a3.get(this);return $||($=new Map,a3.set(this,$)),($=L8(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,Y=1,z="",K="",L=[0],Q=function(H){Y===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,H,z):Y===3&&(H||z)?(L.push(3,H,z),Y=2):Y===2&&z==="..."&&H?L.push(4,H,0):Y===2&&z&&!H?L.push(5,0,!0,z):Y>=5&&((z||!H&&Y===5)&&(L.push(Y,0,z,N),Y=6),H&&(L.push(Y,H,0,N),Y=6)),z=""},B=0;B<j.length;B++){B&&(Y===1&&Q(),Q(B));for(var X=0;X<j[B].length;X++)Z=j[B][X],Y===1?Z==="<"?(Q(),L=[L],Y=3):z+=Z:Y===4?z==="--"&&Z===">"?(Y=1,z=""):z=Z+z[0]:K?Z===K?K="":z+=Z:Z==='"'||Z==="'"?K=Z:Z===">"?(Q(),Y=1):Y&&(Z==="="?(Y=5,N=z,z=""):Z==="/"&&(Y<5||j[B][X+1]===">")?(Q(),Y===3&&(L=L[0]),Y=L,(L=L[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(Q(),Y=2):z+=Z),Y===3&&z==="!--"&&(Y=4,L=L[0])}return Q(),L}(_)),$),arguments,[])).length>1?$:$[0]}var W=l5.bind(j8);var e0={};f5(e0,{uploadWorkspaceFile:()=>H1,uploadMedia:()=>U4,updateWorkspaceFile:()=>G7,submitAdaptiveCardAction:()=>O4,streamSidePrompt:()=>N7,steerAgentQueueItem:()=>Z7,setWorkspaceVisibility:()=>r2,setAgentThoughtVisibility:()=>D4,sendPeerAgentMessage:()=>e5,sendAgentMessage:()=>Q2,searchPosts:()=>K4,restoreChatBranch:()=>t5,respondToAgentRequest:()=>F1,renameWorkspaceFile:()=>P4,renameChatBranch:()=>r5,removeAgentQueueItem:()=>j7,pruneChatBranch:()=>a5,moveWorkspaceEntry:()=>M4,getWorkspaceTree:()=>o2,getWorkspaceRawUrl:()=>D1,getWorkspaceFile:()=>A4,getWorkspaceDownloadUrl:()=>J1,getWorkspaceBranch:()=>z7,getTimeline:()=>K2,getThumbnailUrl:()=>J4,getThread:()=>Q4,getPostsByHashtag:()=>q4,getMediaUrl:()=>L$,getMediaText:()=>E4,getMediaInfo:()=>P2,getMediaBlob:()=>Y7,getChatBranches:()=>o5,getAgents:()=>B4,getAgentThought:()=>H4,getAgentStatus:()=>W4,getAgentQueueState:()=>$7,getAgentModels:()=>d2,getAgentContext:()=>_7,getActiveChatAgents:()=>L4,forkChatBranch:()=>s2,deleteWorkspaceFile:()=>I4,deletePost:()=>X4,createWorkspaceFile:()=>k4,createReply:()=>d5,createPost:()=>s5,attachWorkspaceFile:()=>y4,addToWhitelist:()=>F4,SSEClient:()=>E1});async function u_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function B8(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Z.push(Y.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function n5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:K}=await j.read();if(K)break;N+=Z.decode(z,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let Q of L){let B=B8(Q);if(B)$(B.event,B.data)}}N+=Z.decode();let Y=B8(N);if(Y)$(Y.event,Y.data)}async function K2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return u_(Z)}async function q4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return u_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function K4(_,$=50,j=0,Z=null,N="current",Y=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",K=N?`&scope=${encodeURIComponent(N)}`:"",L=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return u_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${K}${L}`)}async function Q4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return u_(`/thread/${_}${j}`)}async function s5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return u_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function d5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return u_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function X4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return u_(N,{method:"DELETE"})}async function Q2(_,$,j=null,Z=[],N=null,Y=null){let z=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return u_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function L4(){return u_("/agent/active-chats")}async function o5(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return u_(`/agent/branches${Z}`)}async function s2(_,$={}){return u_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function r5(_,$={}){return u_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function a5(_){return u_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function t5(_,$={}){return u_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function e5(_,$,j,Z="auto",N={}){let Y={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return u_("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function B4(){return u_("/agent/roster")}async function W4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/status${$}`)}async function _7(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/context${$}`)}async function $7(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/queue-state${$}`)}async function j7(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function Z7(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function d2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/models${$}`)}async function U4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function F1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function O4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function N7(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await n5(j,(Y,z)=>{if($.onEvent?.(Y,z),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(Y==="side_prompt_done")Z=z;else if(Y==="side_prompt_error")N=z}),N){let Y=Error(N?.error||"Side prompt failed");throw Y.payload=N,Y}return Z}async function F4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function H4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return u_(j)}async function D4(_,$,j){return u_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function L$(_){return`/media/${_}`}function J4(_){return`/media/${_}/thumbnail`}async function P2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function E4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Y7(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function o2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return u_(Z)}async function z7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return u_($)}async function A4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return u_(N)}async function G7(_,$){return u_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function y4(_){return u_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function H1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let Y=N.toString(),z=Y?`/workspace/upload?${Y}`:"/workspace/upload",K=await fetch(""+z,{method:"POST",body:Z});if(!K.ok){let L=await K.json().catch(()=>({error:"Upload failed"})),Q=Error(L.error||`HTTP ${K.status}`);throw Q.status=K.status,Q.code=L.code,Q}return K.json()}async function k4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(N.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=N.code,Y}return Z.json()}async function P4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function M4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function I4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return u_($,{method:"DELETE"})}async function r2(_,$=!1){return u_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function D1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function J1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class E1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function _$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function o_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function M2(_,$=!1){let j=_$(_);if(j===null)return $;return j==="true"}function I2(_,$=null){let j=_$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function A1(_){return String(_||"").trim().toLowerCase()}function x4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return A1($[1]||"")}function W8(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=A1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function U8(_,$,j={}){let Z=x4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return W8(_).filter((Y)=>{if(N&&Y?.chat_jid===N)return!1;return A1(Y?.agent_name).startsWith(Z)})}function w4(_){let $=A1(_);return $?`@${$} `:""}function O8(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return W8(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function F8({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let Y=460+N*68+(j?40:0);return Z>=Y}function J$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:Y="Remove",icon:z="file"}){let K=`${_}-file-pill`,L=`${_}-file-name`,Q=`${_}-file-remove`,B=z==="message"?W`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:W`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return W`
    <span class=${K} title=${j||$} onClick=${N}>
      ${B}
      <span class=${L}>${$}</span>
      ${Z&&W`
        <button
          class=${Q}
          onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),Z()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var V7=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function q7({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,Y="Compact context",K=`${Z!=null?`Context: ${H8(Z)} / ${H8(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,L=9,Q=2*Math.PI*9,B=j/100*Q,X=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return W`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${K}
            aria-label="Compact context"
            onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${B} ${Q}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function H8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function D8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:Y,onEnterSearch:z,onExitSearch:K,fileRefs:L=[],onRemoveFileRef:Q,onClearFileRefs:B,messageRefs:X=[],onRemoveMessageRef:H,onClearMessageRefs:M,activeModel:b=null,modelUsage:m=null,thinkingLevel:g=null,supportsThinking:k=!1,contextUsage:w=null,onContextCompact:p,notificationsEnabled:A=!1,notificationPermission:R="default",onToggleNotifications:d,onModelChange:t,onModelStateChange:o,activeEditorPath:__=null,onAttachEditorFile:i,onOpenFilePill:Q_,followupQueueItems:a_=[],onInjectQueuedFollowup:h_,onRemoveQueuedFollowup:r,onSubmitIntercept:N_,onMessageResponse:$_,onPopOutChat:X_,isAgentActive:V_=!1,activeChatAgents:L_=[],currentChatJid:U_="web:default",connectionStatus:Y_="connected",onSetFileRefs:m_,onSetMessageRefs:T_,onSubmitError:A_,onSwitchChat:y_,onRenameSession:q0,isRenameSessionInProgress:K0=!1,onCreateSession:q_,onDeleteSession:j_,onRestoreSession:H_}){let[Z_,D_]=v(""),[C_,c_]=v(""),[i_,g_]=v([]),[l_,f_]=v(!1),[M_,k_]=v([]),[p_,Z0]=v(0),[x0,P_]=v(!1),[k0,n_]=v([]),[b_,Y0]=v(0),[_0,s_]=v(!1),[z0,S_]=v(!1),[H0,N0]=v(!1),[E_,$0]=v(!1),[S0,I_]=v([]),[C,e]=v(!1),[O_,x_]=v(0),[t_,D0]=v(null),w_=P(null),R0=P(null),j$=P(null),Z$=P(null),f0=P(null),T$=P(null),J0=P(null),l0=P(null),n0=P(0),v0=P(!1),N$=200,O2=(G)=>{let O=new Set,D=[];for(let T of G||[]){if(typeof T!=="string")continue;let h=T.trim();if(!h||O.has(h))continue;O.add(h),D.push(h)}return D},F2=()=>{let G=_$("piclaw_compose_history");if(!G)return[];try{let O=JSON.parse(G);if(!Array.isArray(O))return[];return O2(O)}catch{return[]}},P0=(G)=>{o_("piclaw_compose_history",JSON.stringify(G))},E0=P(F2()),G0=P(-1),h0=P(""),V0=Z_.trim()||i_.length>0||L.length>0||X.length>0,w0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),Y$=typeof window<"u"&&typeof Notification<"u",C$=typeof window<"u"?Boolean(window.isSecureContext):!1,h$=Y$&&C$&&R!=="denied",_2=R==="granted"&&A,s0=_2?"Disable notifications":"Enable notifications",$2=i_.length>0||L.length>0||X.length>0,j2=Y_==="disconnected"?"Reconnecting":String(Y_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(G)=>G.toUpperCase()),z$=Y_==="disconnected"?"Reconnecting":`Connection: ${j2}`,U$=(Array.isArray(L_)?L_:[]).filter((G)=>!G?.archived_at),d0=O8(U$,{currentChatJid:U_,limit:4}),X0=!j&&F8({footerWidth:O_,visibleAgentCount:d0.length,hasContextIndicator:Boolean(w&&w.percent!=null)}),d_=(()=>{for(let G of Array.isArray(L_)?L_:[]){let O=typeof G?.chat_jid==="string"?G.chat_jid.trim():"";if(O&&O===U_)return G}return null})(),O$=Boolean(d_&&d_.chat_jid===(d_.root_chat_jid||d_.chat_jid)),E$=(()=>{let G=new Set,O=[];for(let D of Array.isArray(L_)?L_:[]){let T=typeof D?.chat_jid==="string"?D.chat_jid.trim():"";if(!T||T===U_||G.has(T))continue;if(!(typeof D?.agent_name==="string"?D.agent_name.trim():""))continue;G.add(T),O.push(D)}return O})(),c$=E$.length>0,H2=c$&&typeof y_==="function",J_=c$&&typeof H_==="function",G$=Boolean(K0||v0.current),A$=!j&&typeof q0==="function"&&!G$,f$=!j&&typeof q_==="function",o0=!j&&typeof j_==="function"&&!O$,b$=!j&&(H2||J_||A$||f$||o0),r0=b||"",u0=k&&g?` (${g})`:"",L0=u0.trim()?`${g}`:"",m0=typeof m?.hint_short==="string"?m.hint_short.trim():"",a0=[L0||null,m0||null].filter(Boolean).join(" • "),b0=[r0?`Current model: ${r0}${u0}`:null,m?.plan?`Plan: ${m.plan}`:null,m0||null,m?.primary?.reset_description||null,m?.secondary?.reset_description||null].filter(Boolean),i$=z0?"Switching model…":b0.join(" • ")||`Current model: ${r0}${u0} (tap to open model picker)`,t0=(G)=>{if(!G||typeof G!=="object")return;let O=G.model??G.current;if(typeof o==="function")o({model:O??null,thinking_level:G.thinking_level??null,supports_thinking:G.supports_thinking,provider_usage:G.provider_usage??null});if(O&&typeof t==="function")t(O)},c0=(G)=>{let O=G||w_.current;if(!O)return;O.style.height="auto",O.style.height=`${O.scrollHeight}px`,O.style.overflowY="hidden"},l$=(G)=>{if(!G)return{content:G,fileRefs:[]};let D=G.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),T=-1;for(let F_=0;F_<D.length;F_+=1)if(D[F_].trim()==="Files:"&&D[F_+1]&&/^\s*-\s+/.test(D[F_+1])){T=F_;break}if(T===-1)return{content:G,fileRefs:[]};let h=[],u=T+1;for(;u<D.length;u+=1){let F_=D[u];if(/^\s*-\s+/.test(F_))h.push(F_.replace(/^\s*-\s+/,"").trim());else if(!F_.trim())break;else break}if(h.length===0)return{content:G,fileRefs:[]};let a=D.slice(0,T),B_=D.slice(u);return{content:[...a,...B_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:h}},Z2=(G)=>{if(!G)return{content:G,messageRefs:[]};let D=G.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),T=-1;for(let F_=0;F_<D.length;F_+=1)if(D[F_].trim()==="Referenced messages:"&&D[F_+1]&&/^\s*-\s+/.test(D[F_+1])){T=F_;break}if(T===-1)return{content:G,messageRefs:[]};let h=[],u=T+1;for(;u<D.length;u+=1){let F_=D[u];if(/^\s*-\s+/.test(F_)){let D$=F_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(D$)h.push(D$[1])}else if(!F_.trim())break;else break}if(h.length===0)return{content:G,messageRefs:[]};let a=D.slice(0,T),B_=D.slice(u);return{content:[...a,...B_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:h}},S$=(G)=>{let O=l$(G||""),D=Z2(O.content||"");return{text:D.content||"",fileRefs:O.fileRefs,messageRefs:D.messageRefs}},A0=(G)=>{if(!G.startsWith("/")||G.includes(`
`)){P_(!1),k_([]);return}let O=G.toLowerCase().split(" ")[0];if(O.length<1){P_(!1),k_([]);return}let D=V7.filter((T)=>T.name.startsWith(O)||T.name.replace(/-/g,"").startsWith(O.replace(/-/g,"")));if(D.length>0&&!(D.length===1&&D[0].name===O))s_(!1),n_([]),k_(D),Z0(0),P_(!0);else P_(!1),k_([])},F$=(G)=>{let O=Z_,D=O.indexOf(" "),T=D>=0?O.slice(D):"",h=G.name+T;D_(h),P_(!1),k_([]),requestAnimationFrame(()=>{let u=w_.current;if(!u)return;let a=h.length;u.selectionStart=a,u.selectionEnd=a,u.focus()})},y$=(G)=>{if(x4(G)==null){s_(!1),n_([]);return}let O=U8(U$,G,{currentChatJid:U_});if(O.length>0&&!(O.length===1&&w4(O[0].agent_name).trim().toLowerCase()===String(G||"").trim().toLowerCase()))P_(!1),k_([]),n_(O),Y0(0),s_(!0);else s_(!1),n_([])},k$=(G)=>{let O=w4(G?.agent_name);if(!O)return;D_(O),s_(!1),n_([]),requestAnimationFrame(()=>{let D=w_.current;if(!D)return;let T=O.length;D.selectionStart=T,D.selectionEnd=T,D.focus()})},R$=(G)=>{if(G?.preventDefault?.(),G?.stopPropagation?.(),j||!H2&&!J_&&!A$&&!f$&&!o0)return;N0(!1),P_(!1),k_([]),s_(!1),n_([]),$0((O)=>!O)},n$=(G)=>{let O=typeof G==="string"?G.trim():"";if($0(!1),!O||O===U_){requestAnimationFrame(()=>w_.current?.focus());return}y_?.(O)},N2=async(G)=>{let O=typeof G==="string"?G.trim():"";if($0(!1),!O||typeof H_!=="function"){requestAnimationFrame(()=>w_.current?.focus());return}try{await H_(O)}catch(D){console.warn("Failed to restore session:",D),requestAnimationFrame(()=>w_.current?.focus())}},i0=(G)=>{let O=typeof G?.chat_jid==="string"?G.chat_jid.trim():"";if(O&&typeof y_==="function"){y_(O);return}k$(G)},g0=async(G)=>{if(G?.preventDefault)G.preventDefault();if(G?.stopPropagation)G.stopPropagation();if(typeof q0!=="function"||K0||v0.current)return;v0.current=!0,$0(!1);try{await q0()}catch(O){console.warn("Failed to rename session:",O)}finally{v0.current=!1}requestAnimationFrame(()=>w_.current?.focus())},H$=async()=>{if(typeof q_!=="function")return;$0(!1);try{await q_()}catch(G){console.warn("Failed to create session:",G)}requestAnimationFrame(()=>w_.current?.focus())},Y2=async()=>{if(typeof j_!=="function")return;$0(!1);try{await j_(U_)}catch(G){console.warn("Failed to delete session:",G)}requestAnimationFrame(()=>w_.current?.focus())},V$=(G)=>{if(j)c_(G);else D_(G),A0(G),y$(G);requestAnimationFrame(()=>c0())},s$=(G)=>{let O=j?C_:Z_,D=O&&!O.endsWith(`
`)?`
`:"",T=`${O}${D}${G}`.trimStart();V$(T)},P$=(G)=>{let O=G?.command?.model_label;if(O)return O;let D=G?.command?.message;if(typeof D==="string"){let T=D.match(/•\s+([^\n]+?)\s+\(current\)/);if(T?.[1])return T[1].trim()}return null},v$=async(G)=>{if(j||z0)return;S_(!0);try{let O=await Q2("default",G,null,[],null,U_),D=P$(O);t0({model:D??b??null,thinking_level:O?.command?.thinking_level,supports_thinking:O?.command?.supports_thinking});try{let T=await d2(U_);if(T)t0(T)}catch{}return _?.(),!0}catch(O){return console.error("Failed to switch model:",O),alert("Failed to switch model: "+O.message),!1}finally{S_(!1)}},z2=async()=>{await v$("/cycle-model")},D2=async(G)=>{if(!G||z0)return;if(await v$(`/model ${G}`))N0(!1)},M$=(G)=>{G.preventDefault(),G.stopPropagation(),$0(!1),N0((O)=>!O)},d$=async()=>{if(j)return;p?.(),await I$("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},G2=(G)=>{if(G==="queue"||G==="steer"||G==="auto")return G;return V_?"queue":null},I$=async(G,O,D={})=>{let{includeMedia:T=!0,includeFileRefs:h=!0,includeMessageRefs:u=!0,clearAfterSubmit:a=!0,recordHistory:B_=!0}=D||{},M0=typeof G==="string"?G:G&&typeof G?.target?.value==="string"?G.target.value:Z_,F_=typeof M0==="string"?M0:"";if(!F_.trim()&&(T?i_.length===0:!0)&&(h?L.length===0:!0)&&(u?X.length===0:!0))return;P_(!1),k_([]),s_(!1),n_([]),$0(!1),D0(null);let D$=T?[...i_]:[],x$=h?[...L]:[],E2=u?[...X]:[],q$=F_.trim();if(B_&&q$){let q2=E0.current,T0=O2(q2.filter((u$)=>u$!==q$));if(T0.push(q$),T0.length>200)T0.splice(0,T0.length-200);E0.current=T0,P0(T0),G0.current=-1,h0.current=""}let c1=()=>{if(T)g_([...D$]);if(h)m_?.(x$);if(u)T_?.(E2);D_(q$),requestAnimationFrame(()=>c0())};if(a)D_(""),g_([]),B?.(),M?.();(async()=>{try{if(await N_?.({content:q$,submitMode:O,fileRefs:x$,messageRefs:E2,mediaFiles:D$})){_?.();return}let T0=[];for(let Q0 of D$){let B0=await U4(Q0);T0.push(B0.id)}let u$=x$.length?`Files:
${x$.map((Q0)=>`- ${Q0}`).join(`
`)}`:"",U0=E2.length?`Referenced messages:
${E2.map((Q0)=>`- message:${Q0}`).join(`
`)}`:"",i1=T0.length?`Attachments:
${T0.map((Q0,B0)=>{let u2=D$[B0]?.name||`attachment-${B0+1}`;return`- attachment:${Q0} (${u2})`}).join(`
`)}`:"",A2=[q$,u$,U0,i1].filter(Boolean).join(`

`),o$=await Q2("default",A2,null,T0,G2(O),U_);if($_?.(o$),o$?.command){t0({model:o$.command.model_label??b??null,thinking_level:o$.command.thinking_level,supports_thinking:o$.command.supports_thinking});try{let Q0=await d2(U_);if(Q0)t0(Q0)}catch{}}_?.()}catch(q2){if(a)c1();let T0=q2?.message||"Failed to send message.";D0(T0),A_?.(T0),console.error("Failed to post:",q2)}})()},T2=(G)=>{h_?.(G)},C2=(G)=>{if(G.isComposing)return;if(j&&G.key==="Escape"){G.preventDefault(),c_(""),K?.();return}if(!j&&E_&&G.key==="Escape"){G.preventDefault(),$0(!1);return}if(_0&&k0.length>0){let O=w_.current?.value??(j?C_:Z_);if(!String(O||"").match(/^@([a-zA-Z0-9_-]*)$/))s_(!1),n_([]);else{if(G.key==="ArrowDown"){G.preventDefault(),Y0((D)=>(D+1)%k0.length);return}if(G.key==="ArrowUp"){G.preventDefault(),Y0((D)=>(D-1+k0.length)%k0.length);return}if(G.key==="Tab"||G.key==="Enter"){G.preventDefault(),k$(k0[b_]);return}if(G.key==="Escape"){G.preventDefault(),s_(!1),n_([]);return}}}if(x0&&M_.length>0){let O=w_.current?.value??(j?C_:Z_);if(!String(O||"").startsWith("/"))P_(!1),k_([]);else{if(G.key==="ArrowDown"){G.preventDefault(),Z0((D)=>(D+1)%M_.length);return}if(G.key==="ArrowUp"){G.preventDefault(),Z0((D)=>(D-1+M_.length)%M_.length);return}if(G.key==="Tab"){G.preventDefault(),F$(M_[p_]);return}if(G.key==="Enter"&&!G.shiftKey){if(!(w_.current?.value??(j?C_:Z_)).includes(" ")){G.preventDefault();let h=M_[p_];P_(!1),k_([]),I$(h.name);return}}if(G.key==="Escape"){G.preventDefault(),P_(!1),k_([]);return}}}if(!j&&(G.key==="ArrowUp"||G.key==="ArrowDown")&&!G.metaKey&&!G.ctrlKey&&!G.altKey&&!G.shiftKey){let O=w_.current;if(!O)return;let D=O.value||"",T=O.selectionStart===0&&O.selectionEnd===0,h=O.selectionStart===D.length&&O.selectionEnd===D.length;if(G.key==="ArrowUp"&&T||G.key==="ArrowDown"&&h){let u=E0.current;if(!u.length)return;G.preventDefault();let a=G0.current;if(G.key==="ArrowUp"){if(a===-1)h0.current=D,a=u.length-1;else if(a>0)a-=1;G0.current=a,V$(u[a]||"")}else{if(a===-1)return;if(a<u.length-1)a+=1,G0.current=a,V$(u[a]||"");else G0.current=-1,V$(h0.current||""),h0.current=""}requestAnimationFrame(()=>{let B_=w_.current;if(!B_)return;let M0=B_.value.length;B_.selectionStart=M0,B_.selectionEnd=M0});return}}if(G.key==="Enter"&&!G.shiftKey&&(G.ctrlKey||G.metaKey)){G.preventDefault();let O=w_.current?.value??(j?C_:Z_);if(j){if(O.trim())N?.(O.trim(),Z)}else I$(O,"steer");return}if(G.key==="Enter"&&!G.shiftKey){G.preventDefault();let O=w_.current?.value??(j?C_:Z_);if(j){if(O.trim())N?.(O.trim(),Z)}else I$(O)}},z_=(G)=>{let O=Array.from(G||[]).filter((D)=>D instanceof File&&!String(D.name||"").startsWith(".DS_Store"));if(!O.length)return;g_((D)=>[...D,...O]),D0(null)},J2=(G)=>{z_(G.target.files),G.target.value=""},f2=(G)=>{if(j)return;G.preventDefault(),G.stopPropagation(),n0.current+=1,f_(!0)},b2=(G)=>{if(j)return;if(G.preventDefault(),G.stopPropagation(),n0.current=Math.max(0,n0.current-1),n0.current===0)f_(!1)},V2=(G)=>{if(j)return;if(G.preventDefault(),G.stopPropagation(),G.dataTransfer)G.dataTransfer.dropEffect="copy";f_(!0)},S2=(G)=>{if(j)return;G.preventDefault(),G.stopPropagation(),n0.current=0,f_(!1),z_(G.dataTransfer?.files||[])},R2=(G)=>{if(j)return;let O=G.clipboardData?.items;if(!O||!O.length)return;let D=[];for(let T of O){if(T.kind!=="file")continue;let h=T.getAsFile?.();if(h)D.push(h)}if(D.length>0)G.preventDefault(),z_(D)},v2=(G)=>{g_((O)=>O.filter((D,T)=>T!==G))},U=()=>{D0(null),g_([]),B?.(),M?.()},J=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((G)=>{let{latitude:O,longitude:D,accuracy:T}=G.coords,h=`${O.toFixed(5)}, ${D.toFixed(5)}`,u=Number.isFinite(T)?` ±${Math.round(T)}m`:"",a=`https://maps.google.com/?q=${O},${D}`,B_=`Location: ${h}${u} ${a}`;s$(B_)},(G)=>{let O=G?.message||"Unable to retrieve location.";alert(`Location error: ${O}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};S(()=>{if(!H0)return;e(!0),d2(U_).then((G)=>{let O=Array.isArray(G?.models)?G.models.filter((D)=>typeof D==="string"&&D.trim().length>0):[];O.sort((D,T)=>D.localeCompare(T,void 0,{sensitivity:"base"})),I_(O),t0(G)}).catch((G)=>{console.warn("Failed to load model list:",G),I_([])}).finally(()=>{e(!1)})},[H0,b]),S(()=>{if(j)N0(!1),$0(!1),P_(!1),k_([]),s_(!1),n_([])},[j]),S(()=>{if(E_&&!b$)$0(!1)},[E_,b$]),S(()=>{if(!H0)return;let G=(O)=>{let D=Z$.current,T=f0.current,h=O.target;if(D&&D.contains(h))return;if(T&&T.contains(h))return;N0(!1)};return document.addEventListener("pointerdown",G),()=>document.removeEventListener("pointerdown",G)},[H0]),S(()=>{if(!E_)return;let G=(O)=>{let D=T$.current,T=J0.current,h=O.target;if(D&&D.contains(h))return;if(T&&T.contains(h))return;$0(!1)};return document.addEventListener("pointerdown",G),()=>document.removeEventListener("pointerdown",G)},[E_]),S(()=>{let G=()=>{let u=l0.current?.clientWidth||0;x_((a)=>a===u?a:u)};G();let O=l0.current,D=0,T=()=>{if(D)cancelAnimationFrame(D);D=requestAnimationFrame(()=>{D=0,G()})},h=null;if(O&&typeof ResizeObserver<"u")h=new ResizeObserver(()=>T()),h.observe(O);if(typeof window<"u")window.addEventListener("resize",T);return()=>{if(D)cancelAnimationFrame(D);if(h?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",T)}},[j,b,d0.length,w?.percent]);let x=(G)=>{let O=G.target.value;if(D0(null),E_)$0(!1);c0(G.target),V$(O)};return S(()=>{requestAnimationFrame(()=>c0())},[Z_,C_,j]),S(()=>{if(j)return;y$(Z_)},[U$,U_,Z_,j]),W`
        <div class="compose-box">
            ${!j&&a_.length>0&&W`
                <div class="compose-queue-stack">
                    ${a_.map((G)=>{let O=typeof G?.content==="string"?G.content:"",D=S$(O);if(!D.text.trim()&&D.fileRefs.length===0&&D.messageRefs.length===0)return null;return W`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${O}>
                                    ${D.text.trim()&&W`
                                        <div class="compose-queue-stack-text">${D.text}</div>
                                    `}
                                    ${(D.messageRefs.length>0||D.fileRefs.length>0)&&W`
                                        <div class="compose-queue-stack-refs">
                                            ${D.messageRefs.map((T)=>W`
                                                <${J$}
                                                    key=${"queue-msg-"+T}
                                                    prefix="compose"
                                                    label=${"msg:"+T}
                                                    title=${"Message reference: "+T}
                                                    icon="message"
                                                />
                                            `)}
                                            ${D.fileRefs.map((T)=>{let h=T.split("/").pop()||T;return W`
                                                    <${J$}
                                                        key=${"queue-file-"+T}
                                                        prefix="compose"
                                                        label=${h}
                                                        title=${T}
                                                        onClick=${()=>Q_?.(T)}
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
                                        onClick=${()=>T2(G)}
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
                                        onClick=${()=>r?.(G)}
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
                class=${`compose-input-wrapper${l_?" drag-active":""}`}
                onDragEnter=${f2}
                onDragOver=${V2}
                onDragLeave=${b2}
                onDrop=${S2}
            >
                <div class="compose-input-main">
                    ${t_&&!$2&&W`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${t_}</div>
                    `}
                    ${$2&&W`
                        <div class="compose-file-refs">
                            ${t_&&W`
                                <div class="compose-submit-error" role="status" aria-live="polite">${t_}</div>
                            `}
                            ${X.map((G)=>{return W`
                                    <${J$}
                                        key=${"msg-"+G}
                                        prefix="compose"
                                        label=${"msg:"+G}
                                        title=${"Message reference: "+G}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(G)}
                                    />
                                `})}
                            ${L.map((G)=>{let O=G.split("/").pop()||G;return W`
                                    <${J$}
                                        prefix="compose"
                                        label=${O}
                                        title=${G}
                                        onClick=${()=>Q_?.(G)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>Q?.(G)}
                                    />
                                `})}
                            ${i_.map((G,O)=>{let D=G?.name||`attachment-${O+1}`;return W`
                                    <${J$}
                                        key=${D+O}
                                        prefix="compose"
                                        label=${D}
                                        title=${D}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>v2(O)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${U}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof X_==="function"&&W`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>X_?.()}
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
                        ref=${w_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?C_:Z_}
                        onInput=${x}
                        onKeyDown=${C2}
                        onPaste=${R2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${_0&&k0.length>0&&W`
                        <div class="slash-autocomplete" ref=${j$}>
                            ${k0.map((G,O)=>W`
                                <div
                                    key=${G.chat_jid||G.agent_name}
                                    class=${`slash-item${O===b_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),k$(G)}}
                                    onMouseEnter=${()=>Y0(O)}
                                >
                                    <span class="slash-name">@${G.agent_name}</span>
                                    <span class="slash-desc">${G.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${x0&&M_.length>0&&W`
                        <div class="slash-autocomplete" ref=${R0}>
                            ${M_.map((G,O)=>W`
                                <div
                                    key=${G.name}
                                    class=${`slash-item${O===p_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),F$(G)}}
                                    onMouseEnter=${()=>Z0(O)}
                                >
                                    <span class="slash-name">${G.name}</span>
                                    <span class="slash-desc">${G.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${H0&&!j&&W`
                        <div class="compose-model-popup" ref=${Z$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C&&W`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C&&S0.length===0&&W`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C&&S0.map((G)=>W`
                                    <button
                                        key=${G}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${b===G?" active":""}`}
                                        onClick=${()=>{D2(G)}}
                                        disabled=${z0}
                                    >
                                        ${G}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{z2()}}
                                    disabled=${z0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${E_&&!j&&W`
                        <div class="compose-model-popup" ref=${T$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${W`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let G=typeof d_?.agent_name==="string"&&d_.agent_name.trim()?`@${d_.agent_name.trim()}`:U_,O=typeof d_?.chat_jid==="string"&&d_.chat_jid.trim()?d_.chat_jid.trim():U_;return`${G} — ${O} • current`})()}
                                    </div>
                                `}
                                ${!c$&&W`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${c$&&E$.map((G)=>{let O=Boolean(G.archived_at),T=G.chat_jid!==(G.root_chat_jid||G.chat_jid)&&!G.is_active&&!O&&typeof j_==="function",h=`@${G.agent_name} — ${G.chat_jid}${G.is_active?" • active":""}${O?" • archived":""}`;return W`
                                        <div key=${G.chat_jid} class=${`compose-model-popup-item-row${O?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${O?" archived":""}`}
                                                onClick=${()=>{if(O){N2(G.chat_jid);return}n$(G.chat_jid)}}
                                                disabled=${O?!J_:!H2}
                                                title=${O?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${h}
                                            </button>
                                            ${T&&W`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${G.agent_name}`}
                                                    onClick=${(u)=>{u.stopPropagation(),$0(!1),j_(G.chat_jid)}}
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
                            ${(f$||A$||o0)&&W`
                                <div class="compose-model-popup-actions">
                                    ${f$&&W`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{H$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${A$&&W`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${(G)=>{g0(G)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${G$}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${o0&&W`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{Y2()}}
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
                <div class="compose-footer" ref=${l0}>
                    ${!j&&b&&W`
                    <div class="compose-meta-row">
                        ${!j&&b&&W`
                            <div class="compose-model-meta">
                                <button
                                    ref=${f0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${i$}
                                    aria-label="Open model picker"
                                    onClick=${M$}
                                    disabled=${z0}
                                >
                                    ${z0?"Switching…":r0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!z0&&a0&&W`
                                        <span class="compose-model-usage-hint" title=${i$}>
                                            ${a0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&w&&w.percent!=null&&W`
                            <${q7} usage=${w} onCompact=${d$} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${X0&&W`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${d0.map((G)=>W`
                                <button
                                    key=${G.chat_jid||G.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>i0(G)}
                                    title=${`${G.chat_jid||"Active agent"} — switch to @${G.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${G.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${b$&&W`
                        ${d_?.agent_name&&W`
                            <span
                                class="compose-current-agent-label"
                                title=${d_.chat_jid||U_}
                                onClick=${R$}
                            >@${d_.agent_name}</span>
                        `}
                        <button
                            ref=${J0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${E_?" active":""}`}
                            onClick=${R$}
                            title=${E_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${E_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&W`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(G)=>Y?.(G.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?K:z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?W`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:W`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${w0&&!j&&W`
                        <button
                            class="icon-btn location-btn"
                            onClick=${J}
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
                    ${h$&&!j&&W`
                        <button
                            class=${`icon-btn notification-btn${_2?" active":""}`}
                            onClick=${d}
                            title=${s0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&W`
                        ${__&&i&&W`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${i}
                                title=${`Attach open file: ${__}`}
                                type="button"
                                disabled=${L.includes(__)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${J2} />
                        </label>
                    `}
                    ${(Y_!=="connected"||!j)&&W`
                        <div class="compose-send-stack">
                            ${Y_!=="connected"&&W`
                                <span class="compose-connection-status connection-status ${Y_}" title=${z$}>
                                    ${j2}
                                </span>
                            `}
                            ${!j&&W`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{I$()}}
                                    disabled=${!V0}
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
    `}var f4="piclaw_theme",k1="piclaw_tint",A8="piclaw_chat_themes",t2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},y8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},J8={default:{label:"Default",mode:"auto",light:t2,dark:y8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},K7=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],X2={theme:"default",tint:null},k8="light",T4=!1;function P1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function w2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function Q7(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let Y=parseInt(N[1],10),z=parseInt(N[2],10),K=parseInt(N[3],10);if(![Y,z,K].every((Q)=>Number.isFinite(Q)))return null;let L=`#${[Y,z,K].map((Q)=>Q.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:z,b:K,hex:L}}function P8(_){return w2(_)||Q7(_)}function a2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${Y})`}function C4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function X7(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*Y+0.0722*z}function L7(_){return X7(_)>0.4?"#000000":"#ffffff"}function M8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function b4(_){return J8[_]||J8.default}function B7(_){return _.mode==="auto"?M8():_.mode}function I8(_,$){let j=b4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||t2}function x8(_,$,j){let Z=P8($);if(!Z)return _;let N=w2(_.bgPrimary),Y=w2(_.bgSecondary),z=w2(_.bgHover),K=w2(_.borderColor);if(!N||!Y||!z||!K)return _;let Q=w2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:a2(N,Z,0.08),bgSecondary:a2(Y,Z,0.12),bgHover:a2(z,Z,0.16),borderColor:a2(K,Z,0.08),accent:Z.hex,accentHover:Q?a2(Z,Q,0.18):Z.hex}}function W7(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=P8(Z),Y=N?C4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?C4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=N?C4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?L7(N):$==="dark"?"#000000":"#ffffff",Q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":K,"--accent-contrast-text":L,"--danger-color":_.danger||t2.danger,"--success-color":_.success||t2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(Q).forEach(([B,X])=>{if(X)j.style.setProperty(B,X)})}function U7(){if(typeof document>"u")return;let _=document.documentElement;K7.forEach(($)=>_.style.removeProperty($))}function x2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function E8(_){let $=P1(X2?.theme||"default"),j=X2?.tint?String(X2.tint).trim():null,Z=I8($,_);if($==="default"&&j)Z=x8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?y8.bgPrimary:t2.bgPrimary}function O7(_,$){if(typeof document>"u")return;let j=x2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=x2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",E8("light"));let N=x2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",E8("dark"));let Y=x2("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let z=x2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let K=x2("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function F7(){if(typeof window>"u")return;let _={...X2,mode:k8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function w8(){try{let _=_$(A8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function H7(_,$,j){let Z=w8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};o_(A8,JSON.stringify(Z))}function D7(_){if(!_)return null;return w8()[_]||null}function T8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function S4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=P1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=b4(j),Y=B7(N),z=I8(j,Y);X2={theme:j,tint:Z},k8=Y;let K=document.documentElement;K.dataset.theme=Y,K.dataset.colorTheme=j,K.dataset.tint=Z?String(Z):"",K.style.colorScheme=Y;let L=z;if(j==="default"&&Z)L=x8(z,Z,Y);if(j==="default"&&!Z)U7();else W7(L,Y);if(O7(L.bgPrimary,Y),F7(),$.persist!==!1)if(o_(f4,j),Z)o_(k1,Z);else o_(k1,"")}function y1(){if(b4(X2.theme).mode!=="auto")return;S4(X2,{persist:!1})}function C8(){if(typeof window>"u")return()=>{};let _=T8(),$=D7(_),j=$?P1($.theme||"default"):P1(_$(f4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=_$(k1);return N?N.trim():null})();if(S4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!T4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",y1);else if(N.addListener)N.addListener(y1);return T4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",y1);else if(N.removeListener)N.removeListener(y1);T4=!1}}return()=>{}}function f8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||T8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(H7($,j||"default",Z),S4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")o_(f4,j||"default"),o_(k1,Z||"")}function b8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return M8()}var M1=/#(\w+)/g,J7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),E7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),A7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),y7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},k7=new Set(["http:","https:","mailto:",""]);function R4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function L2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!k7.has(Z.protocol))return null;return Z.href}catch{return null}}function S8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=N.nextNode())Z.push(Y);for(let z of Z){let K=z.tagName.toLowerCase();if(!E7.has(K)){let Q=z.parentNode;if(!Q)continue;while(z.firstChild)Q.insertBefore(z.firstChild,z);Q.removeChild(z);continue}let L=y7[K]||new Set;for(let Q of Array.from(z.attributes)){let B=Q.name.toLowerCase(),X=Q.value;if(B.startsWith("on")){z.removeAttribute(Q.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(L.has(B)||A7.has(B)){if(B==="href"){let H=L2(X);if(!H)z.removeAttribute(Q.name);else if(z.setAttribute(Q.name,H),K==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let H=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(X):X,M=L2(H,{allowDataImage:K==="img"});if(!M)z.removeAttribute(Q.name);else z.setAttribute(Q.name,M)}continue}z.removeAttribute(Q.name)}}return j.body.innerHTML}function R8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function I1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=R8(j);if(N===j)break;j=N}return j}function P7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],Y=!1,z=[];for(let K of j){if(!Y&&K.trim().match(/^```mermaid\s*$/i)){Y=!0,z=[];continue}if(Y&&K.trim().match(/^```\s*$/)){let L=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),Y=!1,z=[];continue}if(Y)z.push(K);else N.push(K)}if(Y)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function M7(_){if(!_)return _;return I1(_,5)}function I7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function x7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function w7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),Y=$[N]??"",z=M7(Y);return`<div class="mermaid-container" data-mermaid="${I7(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function v8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var T7={span:new Set(["title","class","lang","dir"])};function C7(_,$){let j=T7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=N.exec($)){let z=(Y[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let K=Y[2]??Y[3]??Y[4]??"";Z.push(` ${z}="${R4(K)}"`)}return Z.join("")}function u8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),Y=N?Z.slice(1).trim():Z,K=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[L=""]=K.split(/\s+/,1),Q=L.toLowerCase();if(!Q||!J7.has(Q))return $;if(Q==="br")return N?"":"<br>";if(N)return`</${Q}>`;let B=K.slice(L.length).trim(),X=C7(Q,B);return`<${Q}${X}>`})}function m8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function g8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let Y=Z(N.nodeValue);if(Y!==N.nodeValue)N.nodeValue=Y}return $.body.innerHTML}function f7(_){if(!window.katex)return _;let $=(z)=>R8(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let K=[],L=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(Q)=>{let B=K.length;return K.push(Q),`@@CODE_BLOCK_${B}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(Q)=>{let B=K.length;return K.push(Q),`@@CODE_INLINE_${B}@@`}),{html:L,blocks:K}},Z=(z,K)=>{if(!K.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,Q)=>{let B=Number(Q);return K[B]??""})},N=j(_),Y=N.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,K,L)=>{try{let Q=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${K}${Q}`}catch(Q){return`<span class="math-error" title="${R4(Q.message)}">${z}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,K,L)=>{if(/\s$/.test(L))return z;try{let Q=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${K}${Q}`}catch(Q){return`${K}<span class="math-error" title="${R4(Q.message)}">$${L}$</span>`}}),Z(Y,N.blocks)}function b7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let Y of Z){let z=Y.nodeValue;if(!z)continue;if(M1.lastIndex=0,!M1.test(z))continue;M1.lastIndex=0;let K=Y.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let L=z.split(M1);if(L.length<=1)continue;let Q=$.createDocumentFragment();L.forEach((B,X)=>{if(X%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",B),H.textContent=`#${B}`,Q.appendChild(H)}else Q.appendChild($.createTextNode(B))}),Y.parentNode?.replaceChild(Q,Y)}return $.body.innerHTML}function S7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let Y of j){if(!N&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&Y.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function $$(_,$,j={}){if(!_)return"";let Z=S7(_),{text:N,blocks:Y}=P7(Z),z=I1(N,2),L=v8(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=u8(L),B=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return B=m8(B),B=g8(B),B=f7(B),B=b7(B),B=w7(B,Y),B=S8(B,j),B}function x1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=I1($,2),N=v8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=u8(N),z=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return z=m8(z),z=g8(z),z=S8(z),z}function R7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,Y)=>{let z=N.trim().split(/\s+/).map((L)=>{let[Q,B]=L.split(",").map(Number);return{x:Q,y:B}});if(z.length<3)return`<polyline${Z}points="${N}"${Y}/>`;let K=[`M ${z[0].x},${z[0].y}`];for(let L=1;L<z.length-1;L++){let Q=z[L-1],B=z[L],X=z[L+1],H=B.x-Q.x,M=B.y-Q.y,b=X.x-B.x,m=X.y-B.y,g=Math.sqrt(H*H+M*M),k=Math.sqrt(b*b+m*m),w=Math.min($,g/2,k/2);if(w<0.5){K.push(`L ${B.x},${B.y}`);continue}let p=B.x-H/g*w,A=B.y-M/g*w,R=B.x+b/k*w,d=B.y+m/k*w,o=H*m-M*b>0?1:0;K.push(`L ${p},${A}`),K.push(`A ${w},${w} 0 0 ${o} ${R},${d}`)}return K.push(`L ${z[z.length-1].x},${z[z.length-1].y}`),`<path${Z}d="${K.join(" ")}"${Y}/>`})}async function g$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=b8()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of Y)try{let K=z.dataset.mermaid,L=x7(K||""),Q=I1(L,2),B=await $(Q,{...N,transparent:!0});B=R7(B),z.innerHTML=B,z.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${K.message}`,z.innerHTML="",z.appendChild(L),z.removeAttribute("data-mermaid")}}function p8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function h8(_){return String(_||"").trim()||"web:default"}function c8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function i8(_){if(!_)return!1;return _.status!=="running"}function l8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function n8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=P(null),Y=P(null),z=_?.thinking?x1(_.thinking):"",K=_?.answer?$$(_.answer,null,{sanitize:!1}):"";if(S(()=>{if(N.current&&z)g$(N.current).catch(()=>{})},[z]),S(()=>{if(Y.current&&K)g$(Y.current).catch(()=>{})},[K]),!_)return null;let L=_.status==="running",Q=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),X=c8(_),H=i8(_),M=!L&&Q,b=L?"Thinking…":_.status==="error"?"Error":"Done";return W`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${b}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&W`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&W`<div class="btw-block btw-error">${_.error}</div>`}
            ${B&&W`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${X&&W`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </div>
            `}

            ${H&&W`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&W`
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
    `}function v7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function u7(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Z?{kind:Y,html:Z}:{kind:Y}}function a$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function K_(_){return typeof _==="string"&&_.trim()?_.trim():null}function d8(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((N)=>typeof N==="string").map((N)=>N.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var o8="__PICLAW_WIDGET_HOST__:";function s8(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function v4(_,$){if(!_||_.type!=="generated_widget")return null;let j=v7(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:d8(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function r8(_){if(!_||typeof _!=="object")return null;let $=u7(_),j=K_(_?.widget_id)||K_(_?.widgetId)||K_(_?.tool_call_id)||K_(_?.toolCallId),Z=K_(_?.tool_call_id)||K_(_?.toolCallId),N=K_(_?.turn_id)||K_(_?.turnId),Y=K_(_?.title)||K_(_?.name)||"Generated widget",z=K_(_?.subtitle)||"",K=K_(_?.description)||z,L=K_(_?.status),Q=L==="loading"||L==="streaming"||L==="final"||L==="error"?L:"streaming";return{title:Y,subtitle:z,description:K,originPostId:a$(_?.origin_post_id)??a$(_?.originPostId),originChatJid:K_(_?.origin_chat_jid)||K_(_?.originChatJid)||K_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:d8(_?.capabilities,!0),source:"live",status:Q,turnId:N,toolCallId:Z,width:a$(_?.width),height:a$(_?.height),error:K_(_?.error)}}function a8(_){return v4(_,null)!==null}function y0(_){let $=K_(_?.toolCallId)||K_(_?.tool_call_id);if($)return $;let j=K_(_?.widgetId)||K_(_?.widget_id);if(j)return j;let Z=a$(_?.originPostId)??a$(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function t8(_){let j=(_?.artifact||{}).kind||_?.kind||null,N=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||N)}function e8(_){return t8(_)?"allow-downloads allow-scripts":"allow-downloads"}function w1(_){return{title:K_(_?.title)||"Generated widget",widgetId:K_(_?.widgetId)||K_(_?.widget_id),toolCallId:K_(_?.toolCallId)||K_(_?.tool_call_id),turnId:K_(_?.turnId)||K_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:K_(_?.status)||"final"}}function T1(_){return{...w1(_),subtitle:K_(_?.subtitle)||"",description:K_(_?.description)||"",error:K_(_?.error)||null,width:a$(_?.width),height:a$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function C1(_){return`${o8}${JSON.stringify(T1(_))}`}function _6(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=K_(_.text)||K_(_.content)||K_(_.message)||K_(_.prompt)||K_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=K_(j.text)||K_(j.content)||K_(j.message)||K_(j.prompt)||K_(j.value);if(Z)return Z}return null}function $6(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function j6(_){let $=K_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return K_(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function m7(_){let $=w1(_);return`<script>
(function () {
  const meta = ${s8($)};
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

  const windowNamePrefix = ${s8(o8)};
  let lastWindowName = null;
  function applyHostEnvelope(data) {
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
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail: data }));
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      applyHostEnvelope({
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
    applyHostEnvelope(data);
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
</script>`}function Z6(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",z=j==="svg"?N:Z;if(!z)return"";let K=t8(_),L=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),Q=j==="svg"?`<div class="widget-svg-shell">${z}</div>`:z,B=K?m7(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${L}" />
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
${B}
</head>
<body>${Q}</body>
</html>`}function N6({widget:_,onClose:$,onWidgetEvent:j}){let Z=P(null),N=P(!1),Y=v_(()=>Z6(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(S(()=>{if(!_)return;let k=(w)=>{if(w.key==="Escape")$?.()};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[_,$]),S(()=>{N.current=!1},[Y]),S(()=>{if(!_)return;let k=Z.current;if(!k)return;let w=(t)=>{let o=C1(_),__=t==="widget.init"?w1(_):T1(_);console.debug("[widget-host] postToFrame",{type:t,widgetId:_?.widgetId||null,runtimeState:__?.runtimeState||null});try{k.name=o}catch(i){console.debug("[widget-host] iframe.name fallback failed",{type:t,error:i?.message||String(i)})}try{k.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:t,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:__},"*")}catch(i){console.debug("[widget-host] postToFrame failed",{type:t,error:i?.message||String(i)})}},p=()=>{w("widget.init"),w("widget.update")},A=()=>{N.current=!0,p()};k.addEventListener("load",A);let d=[0,40,120,300,800].map((t)=>setTimeout(p,t));return()=>{k.removeEventListener("load",A),d.forEach((t)=>clearTimeout(t))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),S(()=>{if(!_)return;let k=Z.current;if(!k?.contentWindow)return;let w=C1(_),p=T1(_);console.debug("[widget-host] direct update effect",{widgetId:_?.widgetId||null,runtimeState:p?.runtimeState||null});try{k.name=w}catch(A){console.debug("[widget-host] direct update iframe.name fallback failed",{error:A?.message||String(A)})}try{k.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:p},"*")}catch(A){console.debug("[widget-host] direct update effect failed",{error:A?.message||String(A)})}return},[_]),S(()=>{if(!_)return;let k=(w)=>{let p=w?.data;if(!p||p.__piclawGeneratedWidget!==!0)return;let A=Z.current,R=y0(_),d=y0({widgetId:p.widgetId,toolCallId:p.toolCallId});if(d&&R&&d!==R)return;if(!d&&A?.contentWindow&&w.source!==A.contentWindow)return;j?.(p,_)};return window.addEventListener("message",k),()=>window.removeEventListener("message",k)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",L=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Q=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",B=_?.source==="live"?"live":"timeline",X=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",H=B==="live"?`Live widget • ${X.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",M=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",b=!Y,m=j6(_),g=e8(_);return W`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${L}
                onClick=${(k)=>k.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${H} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${L}</div>
                        ${(Q||M)&&W`
                            <div class="floating-widget-subtitle">${Q||M}</div>
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
                    ${b?W`<div class="floating-widget-empty">${m}</div>`:W`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${L}
                                name=${C1(_)}
                                sandbox=${g}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var Y6="PiClaw";function u4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%Y.length,K=Y[z],L=Z.trim().toLowerCase(),Q=typeof $==="string"?$.trim():"",B=Q?Q:null,X=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:K,image:B||(X?"/static/icon-192.png":null)}}function z6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function G6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function V6(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,z=Y?.dataset?.colorTheme||"",K=Y?.dataset?.tint||"",L=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(L&&(K||z&&z!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Y=0;Y<j.length;Y+=1)Z=(Z*31+j.charCodeAt(Y))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function g7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function e2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function q6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return e2(_)?"Compacting context":"Working..."}function p7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function K6(_,$=Date.now()){let j=g7(_);if(j===null)return null;return p7(Math.max(0,$-j))}function Q6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:Y,turnId:z,steerQueued:K,onPanelToggle:L}){let X=(j_)=>{if(!j_)return{text:"",totalLines:0,fullText:""};if(typeof j_==="string"){let C_=j_,c_=C_?C_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:C_,totalLines:c_,fullText:C_}}let H_=j_.text||"",Z_=j_.fullText||j_.full_text||H_,D_=Number.isFinite(j_.totalLines)?j_.totalLines:Z_?Z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:H_,totalLines:D_,fullText:Z_}},H=160,M=(j_)=>String(j_||"").replace(/<\/?internal>/gi,""),b=(j_)=>{if(!j_)return 1;return Math.max(1,Math.ceil(j_.length/160))},m=(j_,H_,Z_)=>{let D_=(j_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!D_)return{text:"",omitted:0,totalLines:Number.isFinite(Z_)?Z_:0,visibleLines:0};let C_=D_.split(`
`),c_=C_.length>H_?C_.slice(0,H_).join(`
`):D_,i_=Number.isFinite(Z_)?Z_:C_.reduce((f_,M_)=>f_+b(M_),0),g_=c_?c_.split(`
`).reduce((f_,M_)=>f_+b(M_),0):0,l_=Math.max(i_-g_,0);return{text:c_,omitted:l_,totalLines:i_,visibleLines:g_}},g=X(j),k=X(Z),w=X($),p=Boolean(g.text)||g.totalLines>0,A=Boolean(k.text)||k.totalLines>0,R=Boolean(w.fullText?.trim()||w.text?.trim());if(!_&&!R&&!p&&!A&&!N&&!Y)return null;let[d,t]=v(new Set),[o,__]=v(()=>Date.now()),i=(j_)=>t((H_)=>{let Z_=new Set(H_),D_=!Z_.has(j_);if(D_)Z_.add(j_);else Z_.delete(j_);if(typeof L==="function")L(j_,D_);return Z_});S(()=>{t(new Set)},[z]);let Q_=e2(_);S(()=>{if(!Q_)return;__(Date.now());let j_=setInterval(()=>__(Date.now()),1000);return()=>clearInterval(j_)},[Q_,_?.started_at,_?.startedAt]);let a_=_?.turn_id||z,h_=V6(a_),r=K?"turn-dot turn-dot-queued":"turn-dot",N_=(j_)=>j_,$_=Boolean(_?.last_activity||_?.lastActivity),X_=(j_)=>j_==="warning"?"#f59e0b":j_==="error"?"var(--danger-color)":j_==="success"?"var(--success-color)":h_,V_=Y?.kind||"info",L_=X_(V_),U_=X_(_?.kind||(Q_?"warning":"info")),Y_="",m_=_?.title,T_=_?.status;if(_?.type==="plan")Y_=m_?`Planning: ${m_}`:"Planning...";else if(_?.type==="tool_call")Y_=m_?`Running: ${m_}`:"Running tool...";else if(_?.type==="tool_status")Y_=m_?`${m_}: ${T_||"Working..."}`:T_||"Working...";else if(_?.type==="error")Y_=m_||"Agent error";else Y_=m_||T_||"Working...";if($_)Y_="Last activity just now";let A_=({panelTitle:j_,text:H_,fullText:Z_,totalLines:D_,maxLines:C_,titleClass:c_,panelKey:i_})=>{let g_=d.has(i_),l_=Z_||H_||"",f_=i_==="thought"||i_==="draft"?M(l_):l_,M_=typeof C_==="number",k_=g_&&M_,p_=M_?m(f_,C_,D_):{text:f_||"",omitted:0,totalLines:Number.isFinite(D_)?D_:0};if(!f_&&!(Number.isFinite(p_.totalLines)&&p_.totalLines>0))return null;let Z0=`agent-thinking-body${M_?" agent-thinking-body-collapsible":""}`,x0=M_?`--agent-thinking-collapsed-lines: ${C_};`:"";return W`
            <div
                class="agent-thinking"
                data-expanded=${g_?"true":"false"}
                data-collapsible=${M_?"true":"false"}
                style=${h_?`--turn-color: ${h_};`:""}
            >
                <div class="agent-thinking-title ${c_||""}">
                    ${h_&&W`<span class=${r} aria-hidden="true"></span>`}
                    ${j_}
                    ${k_&&W`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${j_} panel`}
                            onClick=${()=>i(i_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Z0}
                    style=${x0}
                    dangerouslySetInnerHTML=${{__html:x1(f_)}}
                />
                ${!g_&&p_.omitted>0&&W`
                    <button class="agent-thinking-truncation" onClick=${()=>i(i_)}>
                        ▸ ${p_.omitted} more lines
                    </button>
                `}
                ${g_&&p_.omitted>0&&W`
                    <button class="agent-thinking-truncation" onClick=${()=>i(i_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},y_=N?.tool_call?.title,q0=y_?`Awaiting approval: ${y_}`:"Awaiting approval",K0=Q_?K6(_,o):null,q_=(j_,H_,Z_=null)=>{let D_=q6(j_);return W`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${H_?`--turn-color: ${H_};`:""}
                title=${j_?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${H_&&W`<span class=${r} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${D_}</span>
                    ${Z_&&W`<span class="agent-status-elapsed">${Z_}</span>`}
                </div>
                ${j_.detail&&W`<div class="agent-thinking-body">${j_.detail}</div>`}
            </div>
        `};return W`
        <div class="agent-status-panel">
            ${Y&&q_(Y,L_)}
            ${_?.type==="intent"&&q_(_,U_,K0)}
            ${N&&W`
                <div class="agent-status agent-status-request" aria-live="polite" style=${h_?`--turn-color: ${h_};`:""}>
                    <span class=${r} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${q0}</span>
                </div>
            `}
            ${p&&A_({panelTitle:N_("Planning"),text:g.text,fullText:g.fullText,totalLines:g.totalLines,panelKey:"plan"})}
            ${A&&A_({panelTitle:N_("Thoughts"),text:k.text,fullText:k.fullText,totalLines:k.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${R&&A_({panelTitle:N_("Draft"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&W`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${h_?`--turn-color: ${h_};`:""}>
                    ${h_&&W`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?W`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&W`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Y_}</span>
                </div>
            `}
        </div>
    `}function X6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:Y}=_,z=Z?.title||"Agent Request",K=Z?.kind||"other",L=Z?.rawInput||{},Q=L.command||L.commands&&L.commands[0]||null,B=L.diff||null,X=L.fileName||L.path||null,H=Z?.description||L.description||L.explanation||null,b=(Array.isArray(Z?.locations)?Z.locations:[]).map((p)=>p?.path).filter((p)=>Boolean(p)),m=Array.from(new Set([X,...b].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let g=async(p)=>{try{await F1(j,p,Y||null),$()}catch(A){console.error("Failed to respond to agent request:",A)}},k=async()=>{try{await F4(z,`Auto-approved: ${z}`),await F1(j,"approved",Y||null),$()}catch(p){console.error("Failed to add to whitelist:",p)}},w=N&&N.length>0;return W`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${z}</div>
                </div>
                ${(H||Q||B||m.length>0)&&W`
                    <div class="agent-request-body">
                        ${H&&W`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${m.length>0&&W`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${m.map((p,A)=>W`<li key=${A}>${p}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${Q&&W`
                            <pre class="agent-request-command">${Q}</pre>
                        `}
                        ${B&&W`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${w?N.map((p)=>W`
                            <button 
                                key=${p.optionId||p.id||String(p)}
                                class="agent-request-btn ${p.kind==="allow_once"||p.kind==="allow_always"?"primary":""}"
                                onClick=${()=>g(p.optionId||p.id||p)}
                            >
                                ${p.name||p.label||p.optionId||p.id||String(p)}
                            </button>
                        `):W`
                        <button class="agent-request-btn primary" onClick=${()=>g("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>g("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${k}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function L6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,Y=86400000;if(Z<Y){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*Y){let L=$.toLocaleDateString(void 0,{weekday:"short"}),Q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${Q}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${K}`}function _1(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function B$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function B2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var h7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),c7=new Set(["text/markdown"]),i7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),l7=new Set(["application/vnd.jgraph.mxfile"]);function $1(_){return typeof _==="string"?_.trim().toLowerCase():""}function n7(_){let $=$1(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function s7(_){let $=$1(_);return!!$&&$.endsWith(".pdf")}function d7(_){let $=$1(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function j1(_,$){let j=$1(_);if(n7($)||l7.has(j))return"drawio";if(s7($)||j==="application/pdf")return"pdf";if(d7($)||i7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(h7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function B6(_){let $=$1(_);return c7.has($)}function W6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function o7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function r7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),Y=Number(j[3]);if(![Z,N,Y].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:Y}}function U6(_){return o7(_)||r7(_)}function f1(_){let $=(Y)=>{let z=Y/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function a7(_,$){let j=Math.max(f1(_),f1($)),Z=Math.min(f1(_),f1($));return(j+0.05)/(Z+0.05)}function t7(_,$,j="#ffffff"){let Z=U6(_);if(!Z)return j;let N=j,Y=-1;for(let z of $){let K=U6(z);if(!K)continue;let L=a7(Z,K);if(L>Y)N=z,Y=L}return N}function m4(){let _=getComputedStyle(document.documentElement),$=(b,m)=>{for(let g of b){let k=_.getPropertyValue(g).trim();if(k)return k}return m},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),Q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),X=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),M=t7(K,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:Y,bgEmphasis:z,accent:K,good:L,warning:Q,attention:B,border:X,fontFamily:H,buttonTextColor:M}}function O6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:Y,warning:z,attention:K,border:L,fontFamily:Q}=m4();return{fontFamily:Q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:z,subtle:z},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:z,subtle:z},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var e7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),F6=!1,b1=null,H6=!1;function g4(_){_.querySelector(".adaptive-card-notice")?.remove()}function _j(_,$,j="error"){g4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function $j(_,$=(j)=>$$(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function jj(_=($)=>$$($,null)){return($,j)=>{try{let Z=$j($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function Zj(_){if(H6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=jj(),H6=!0}async function Nj(){if(F6)return;if(b1)return b1;return b1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{F6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),b1}function Yj(){return globalThis.AdaptiveCards}function zj(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Gj(_){return e7.has(_)}function h4(_){if(!Array.isArray(_))return[];return _.filter(zj)}function Vj(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function p4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>p4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${p4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function qj(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return p4($);return typeof $==="string"?$:String($)}function Kj(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((K)=>Z(K));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=qj(z.type,j[z.id],z);for(let[K,L]of Object.entries(z))if(Array.isArray(L)||L&&typeof L==="object")z[K]=Z(L);return z};return Z(_)}function Qj(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function Xj(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Lj(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=Xj(_.completed_at||j?.submitted_at),Y=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function D6(_,$,j){if(!Gj($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Nj()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=Yj();Zj(Z);let N=new Z.AdaptiveCard,Y=m4();N.hostConfig=new Z.HostConfig(O6());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:Kj($.payload,z);N.parse(K),N.onExecuteAction=(B)=>{let X=Vj(B);if(j?.onAction)g4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(X)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let M=H instanceof Error?H.message:String(H||"Action failed.");_j(_,M||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",X)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let Q=Lj($);if(Q){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let X=document.createElement("span");if(X.className="adaptive-card-status-label",X.textContent=Q.label,B.appendChild(X),Q.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=Q.detail,B.appendChild(H)}_.appendChild(B)}if(g4(_),_.appendChild(L),Q)Qj(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function Z1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Z1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${Z1(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function J6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:Z1(j)})).filter(($)=>$.value)}function Bj(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function c4(_){if(!Array.isArray(_))return[];return _.filter(Bj)}function E6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=Z1(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=J6(j).map(({key:Y,value:z})=>`${Y}: ${z}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function A6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=J6(_.data),Z=j.length>0?j.slice(0,2).map(({key:Y,value:z})=>`${Y}: ${z}`).join(", "):Z1(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function Wj(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?B$($):null},{label:"Added",value:_?.created_at?B2(_.created_at):null}].filter((Z)=>Z.value)}function Uj(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let Y=L$(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function y6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=v_(()=>j1($?.content_type,Z),[$?.content_type,Z]),Y=W6(N),z=v_(()=>B6($?.content_type),[$?.content_type]),[K,L]=v(N==="text"),[Q,B]=v(""),[X,H]=v(null),M=P(null),b=v_(()=>Wj($),[$]),m=v_(()=>Uj(_,Z,N),[_,Z,N]),g=v_(()=>{if(!z||!Q)return"";return $$(Q)},[z,Q]);return S(()=>{let k=(w)=>{if(w.key==="Escape")j()};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[j]),S(()=>{if(!M.current||!g)return;g$(M.current);return},[g]),S(()=>{let k=!1;async function w(){if(N!=="text"){L(!1),H(null);return}L(!0),H(null);try{let p=await E4(_);if(!k)B(p)}catch{if(!k)H("Failed to load text preview.")}finally{if(!k)L(!1)}}return w(),()=>{k=!0}},[_,N]),W`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(k)=>{k.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${m&&W`
                            <a
                                href=${m}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(k)=>k.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${L$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(k)=>k.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${K&&W`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!K&&X&&W`<div class="attachment-preview-state">${X}</div>`}
                    ${!K&&!X&&N==="image"&&W`
                        <img class="attachment-preview-image" src=${L$(_)} alt=${Z} />
                    `}
                    ${!K&&!X&&(N==="pdf"||N==="office"||N==="drawio")&&m&&W`
                        <iframe class="attachment-preview-frame" src=${m} title=${Z}></iframe>
                    `}
                    ${!K&&!X&&N==="drawio"&&W`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!K&&!X&&N==="text"&&z&&W`
                        <div
                            ref=${M}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:g}}
                        />
                    `}
                    ${!K&&!X&&N==="text"&&!z&&W`
                        <pre class="attachment-preview-text">${Q}</pre>
                    `}
                    ${!K&&!X&&N==="unsupported"&&W`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${b.map((k)=>W`
                        <div class="attachment-preview-meta-item" key=${k.label}>
                            <span class="attachment-preview-meta-label">${k.label}</span>
                            <span class="attachment-preview-meta-value">${k.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function k6({src:_,onClose:$}){return S(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),W`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function Oj({mediaId:_,onPreview:$}){let[j,Z]=v(null);if(S(()=>{P2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",Y=j.metadata?.size,z=Y?B$(Y):"",L=j1(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return W`
        <div class="file-attachment" onClick=${(Q)=>Q.stopPropagation()}>
            <a href=${L$(_)} download=${N} class="file-attachment-main">
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
                        ${z&&W`<span class="file-size">${z}</span>`}
                        ${j.content_type&&W`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function Fj({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=v(null);S(()=>{if(!Number.isFinite(j))return;P2(j).then(N).catch(()=>{});return},[j]);let Y=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?L$(j):null,L=j1(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return W`
        <span class="attachment-pill" title=${Y}>
            ${z?W`
                    <a href=${z} download=${Y} class="attachment-pill-main" onClick=${(Q)=>Q.stopPropagation()}>
                        <${J$}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:W`
                    <${J$}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Z&&W`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function S1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?B2(Z):null;return W`
        <div class="content-annotations">
            ${$&&$.length>0&&W`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&W`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&W`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function Hj({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?B$(_.size):"",N=_.mime_type||"",Y=Ej(N),z=L2(_.uri);return W`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&W`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&W`<span>${N}</span>`}
                    ${Z&&W`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function Dj({block:_}){let[$,j]=v(!1),Z=_.uri||"Embedded resource",N=_.text||"",Y=Boolean(_.data),z=_.mime_type||"";return W`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&W`
                ${N&&W`<pre class="resource-embed-content">${N}</pre>`}
                ${Y&&W`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&W`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(X)=>X.charCodeAt(0))],{type:z||"application/octet-stream"}),Q=URL.createObjectURL(L),B=document.createElement("a");B.href=Q,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(Q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function Jj({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=v4(_,$),N=a8(_),Y=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,z=Z?.title||_.title||_.name||"Generated widget",K=Z?.description||_.description||_.subtitle||"",L=_.open_label||"Open widget",Q=(B)=>{if(B.preventDefault(),B.stopPropagation(),!Z)return;j?.(Z)};return W`
        <div class="generated-widget-launch" onClick=${(B)=>B.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${z}</div>
            </div>
            ${K&&W`<div class="generated-widget-launch-description">${K}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!N}
                    onClick=${Q}
                    title=${N?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${L}
                </button>
                <span class="generated-widget-launch-note">
                    ${N?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function Ej(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Aj({preview:_}){let $=L2(_.url),j=L2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return W`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&W`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function yj(_,$){return typeof _==="string"?_:""}var kj=1800,Pj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Mj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,Ij=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function xj(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function wj(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(Y,z)=>{let K=z||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=Mj,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=Ij,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=Pj,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let z=document.createElement("div");z.className="post-code-block",Y.parentNode?.insertBefore(z,Y),z.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",N(K,"idle"),z.appendChild(K);let L=async(Q)=>{Q.preventDefault(),Q.stopPropagation();let X=Y.querySelector("code")?.textContent||"",H=await xj(X);N(K,H?"success":"error");let M=j.get(K);if(M)clearTimeout(M);let b=setTimeout(()=>{N(K,"idle"),j.delete(K)},kj);j.set(K,b)};K.addEventListener("click",L),Z.push(()=>{K.removeEventListener("click",L);let Q=j.get(K);if(Q)clearTimeout(Q);if(z.parentNode)z.parentNode.insertBefore(Y,z),z.remove()})}),()=>{Z.forEach((Y)=>Y())}}function Tj(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Files:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){Z=Q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let Q=j[Y];if(/^\s*-\s+/.test(Q))N.push(Q.replace(/^\s*-\s+/,"").trim());else if(!Q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),K=j.slice(Y),L=[...z,...K].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function Cj(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Referenced messages:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){Z=Q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let Q=j[Y];if(/^\s*-\s+/.test(Q)){let X=Q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)N.push(X[1])}else if(!Q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),K=j.slice(Y),L=[...z,...K].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function fj(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let Q=0;Q<j.length;Q+=1){let B=j[Q].trim();if((B==="Images:"||B==="Attachments:")&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){Z=Q;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let Q=j[Y];if(/^\s*-\s+/.test(Q)){let B=Q.replace(/^\s*-\s+/,"").trim(),X=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(X){let H=X[1],M=(X[2]||"").trim()||H;N.push({id:H,label:M,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!Q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),K=j.slice(Y),L=[...z,...K].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function bj(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Sj(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(bj).sort((B,X)=>X.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),K=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),L=[],Q;while(Q=K.nextNode())L.push(Q);for(let B of L){let X=B.nodeValue;if(!X||!N.test(X)){N.lastIndex=0;continue}N.lastIndex=0;let H=B.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let M=X.split(N).filter((m)=>m!=="");if(M.length===0)continue;let b=z.createDocumentFragment();for(let m of M)if(Y.test(m)){let g=z.createElement("mark");g.className="search-highlight-term",g.textContent=m,b.appendChild(g)}else b.appendChild(z.createTextNode(m));B.parentNode.replaceChild(b,B)}return z.body.innerHTML}function P6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:Y,agentAvatarUrl:z,userName:K,userAvatarUrl:L,userAvatarBackground:Q,onDelete:B,isThreadReply:X,isThreadPrev:H,isThreadNext:M,isRemoving:b,highlightQuery:m,onFileRef:g,onOpenWidget:k}){let[w,p]=v(null),A=P(null),R=_.data,d=R.type==="agent_response",t=K||"You",o=d?Y||Y6:t,__=d?u4(Y,z,!0):u4(t,L),i=typeof Q==="string"?Q.trim().toLowerCase():"",Q_=!d&&__.image&&(i==="clear"||i==="transparent"),a_=d&&Boolean(__.image),h_=`background-color: ${Q_||a_?"transparent":__.color}`,r=R.content_meta,N_=Boolean(r?.truncated),$_=Boolean(r?.preview),X_=N_&&!$_,V_=N_?{originalLength:Number.isFinite(r?.original_length)?r.original_length:R.content?R.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,L_=R.content_blocks||[],U_=R.media_ids||[],Y_=yj(R.content,R.link_previews),{content:m_,fileRefs:T_}=Tj(Y_),{content:A_,messageRefs:y_}=Cj(m_),{content:q0,attachments:K0}=fj(A_);Y_=q0;let q_=h4(L_),j_=c4(L_),H_=q_.length===1&&typeof q_[0]?.fallback_text==="string"?q_[0].fallback_text.trim():"",Z_=j_.length===1?E6(j_[0]).trim():"",D_=Boolean(H_)&&Y_?.trim()===H_||Boolean(Z_)&&Y_?.trim()===Z_,C_=Boolean(Y_)&&!X_&&!D_,c_=typeof m==="string"?m.trim():"",i_=v_(()=>{if(!Y_||D_)return"";let C=$$(Y_,j);return c_?Sj(C,c_):C},[Y_,D_,c_]),g_=(C,e)=>{C.stopPropagation(),p(L$(e))},[l_,f_]=v(null),M_=(C)=>{f_(C)},k_=(C)=>{C.stopPropagation(),B?.(_)},p_=(C,e)=>{let O_=new Set;if(!C||e.length===0)return{content:C,usedIds:O_};return{content:C.replace(/attachment:([^\s)"']+)/g,(t_,D0,w_,R0)=>{let j$=D0.replace(/^\/+/,""),f0=e.find((J0)=>J0.name&&J0.name.toLowerCase()===j$.toLowerCase()&&!O_.has(J0.id))||e.find((J0)=>!O_.has(J0.id));if(!f0)return t_;if(O_.add(f0.id),R0.slice(Math.max(0,w_-2),w_)==="](")return`/media/${f0.id}`;return f0.name||"attachment"}),usedIds:O_}},Z0=[],x0=[],P_=[],k0=[],n_=[],b_=[],Y0=[],_0=0;if(L_.length>0)L_.forEach((C)=>{if(C?.type==="text"&&C.annotations)Y0.push(C.annotations);if(C?.type==="generated_widget")b_.push(C);else if(C?.type==="resource_link")k0.push(C);else if(C?.type==="resource")n_.push(C);else if(C?.type==="file"){let e=U_[_0++];if(e)x0.push(e),P_.push({id:e,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let e=U_[_0++];if(e){let O_=typeof C?.mime_type==="string"?C.mime_type:void 0;Z0.push({id:e,annotations:C?.annotations,mimeType:O_}),P_.push({id:e,name:C?.name||C?.filename||C?.title})}}});else if(U_.length>0){let C=K0.length>0;U_.forEach((e,O_)=>{let x_=K0[O_]||null;if(P_.push({id:e,name:x_?.label||null}),C)x0.push(e);else Z0.push({id:e,annotations:null})})}if(K0.length>0)K0.forEach((C)=>{if(!C?.id)return;let e=P_.find((O_)=>String(O_.id)===String(C.id));if(e&&!e.name)e.name=C.label});let{content:s_,usedIds:z0}=p_(Y_,P_);Y_=s_;let S_=Z0.filter(({id:C})=>!z0.has(C)),H0=x0.filter((C)=>!z0.has(C)),N0=K0.length>0?K0.map((C,e)=>({id:C.id||`attachment-${e+1}`,label:C.label||`attachment-${e+1}`})):P_.map((C,e)=>({id:C.id,label:C.name||`attachment-${e+1}`})),E_=v_(()=>h4(L_),[L_]),$0=v_(()=>c4(L_),[L_]),S0=v_(()=>{return E_.map((C)=>`${C.card_id}:${C.state}`).join("|")},[E_]);S(()=>{if(!A.current)return;return g$(A.current),wj(A.current)},[i_]);let I_=P(null);return S(()=>{if(!I_.current||E_.length===0)return;let C=I_.current;C.innerHTML="";for(let e of E_){let O_=document.createElement("div");C.appendChild(O_),D6(O_,e,{onAction:async(x_)=>{if(x_.type==="Action.OpenUrl"){let t_=L2(x_.url||"");if(!t_)throw Error("Invalid URL");window.open(t_,"_blank","noopener,noreferrer");return}if(x_.type==="Action.Submit"){await O4({post_id:_.id,thread_id:R.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:x_.type,title:x_.title||"",data:x_.data}});return}console.warn("[post] unsupported adaptive card action:",x_.type,x_)}}).catch((x_)=>{console.error("[post] adaptive card render error:",x_),O_.textContent=e.fallback_text||"Card failed to render."})}},[S0,_.id]),W`
        <div id=${`post-${_.id}`} class="post ${d?"agent-post":""} ${X?"thread-reply":""} ${H?"thread-prev":""} ${M?"thread-next":""} ${b?"removing":""}" onClick=${$}>
            <div class="post-avatar ${d?"agent-avatar":""} ${__.image?"has-image":""}" style=${h_}>
                ${__.image?W`<img src=${__.image} alt=${o} />`:__.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${k_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${o}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${L6(_.timestamp)}</a>
                </div>
                ${X_&&V_&&W`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${_1(V_.originalLength)} chars
                            ${V_.maxLength?W` • Display limit: ${_1(V_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${$_&&V_&&W`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${_1(V_.maxLength)} of ${_1(V_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(T_.length>0||y_.length>0||N0.length>0)&&W`
                    <div class="post-file-refs">
                        ${y_.map((C)=>{let e=(O_)=>{if(O_.preventDefault(),O_.stopPropagation(),N)N(C,_.chat_jid||null);else{let x_=document.getElementById("post-"+C);if(x_)x_.scrollIntoView({behavior:"smooth",block:"center"}),x_.classList.add("post-highlight"),setTimeout(()=>x_.classList.remove("post-highlight"),2000)}};return W`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${e}>
                                    <${J$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${T_.map((C)=>{let e=C.split("/").pop()||C;return W`
                                <${J$}
                                    prefix="post"
                                    label=${e}
                                    title=${C}
                                    onClick=${()=>g?.(C)}
                                />
                            `})}
                        ${N0.map((C)=>W`
                            <${Fj}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${M_}
                            />
                        `)}
                    </div>
                `}
                ${C_&&W`
                    <div 
                        ref=${A}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:i_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let e=C.target.dataset.hashtag;if(e)j?.(e)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),p(C.target.src)}}
                    />
                `}
                ${E_.length>0&&W`
                    <div ref=${I_} class="post-adaptive-cards" />
                `}
                ${$0.length>0&&W`
                    <div class="post-adaptive-card-submissions">
                        ${$0.map((C,e)=>{let O_=A6(C),x_=`${C.card_id}-${e}`;return W`
                                <div key=${x_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${O_.title}</span>
                                        </div>
                                    </div>
                                    ${O_.fields.length>0&&W`
                                        <div class="adaptive-card-submission-fields">
                                            ${O_.fields.map((t_)=>W`
                                                <span class="adaptive-card-submission-field" title=${`${t_.key}: ${t_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${t_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${t_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${B2(O_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${b_.length>0&&W`
                    <div class="generated-widget-launches">
                        ${b_.map((C,e)=>W`
                            <${Jj}
                                key=${C.widget_id||C.id||`${_.id}-widget-${e}`}
                                block=${C}
                                post=${_}
                                onOpenWidget=${k}
                            />
                        `)}
                    </div>
                `}
                ${Y0.length>0&&W`
                    ${Y0.map((C,e)=>W`
                        <${S1} key=${e} annotations=${C} />
                    `)}
                `}
                ${S_.length>0&&W`
                    <div class="media-preview">
                        ${S_.map(({id:C,mimeType:e})=>{let x_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?L$(C):J4(C);return W`
                                <img 
                                    key=${C} 
                                    src=${x_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(t_)=>g_(t_,C)}
                                />
                            `})}
                    </div>
                `}
                ${S_.length>0&&W`
                    ${S_.map(({annotations:C},e)=>W`
                        ${C&&W`<${S1} key=${e} annotations=${C} />`}
                    `)}
                `}
                ${H0.length>0&&W`
                    <div class="file-attachments">
                        ${H0.map((C)=>W`
                            <${Oj} key=${C} mediaId=${C} onPreview=${M_} />
                        `)}
                    </div>
                `}
                ${k0.length>0&&W`
                    <div class="resource-links">
                        ${k0.map((C,e)=>W`
                            <div key=${e}>
                                <${Hj} block=${C} />
                                <${S1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${n_.length>0&&W`
                    <div class="resource-embeds">
                        ${n_.map((C,e)=>W`
                            <div key=${e}>
                                <${Dj} block=${C} />
                                <${S1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${R.link_previews?.length>0&&W`
                    <div class="link-previews">
                        ${R.link_previews.map((C,e)=>W`
                            <${Aj} key=${e} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${w&&W`<${k6} src=${w} onClose=${()=>p(null)} />`}
        ${l_&&W`
            <${y6}
                mediaId=${l_.mediaId}
                info=${l_.info}
                onClose=${()=>f_(null)}
            />
        `}
    `}function M6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:Y,onScrollToMessage:z,onFileRef:K,onOpenWidget:L,emptyMessage:Q,timelineRef:B,agents:X,user:H,onDeletePost:M,reverse:b=!0,removingPostIds:m,searchQuery:g}){let[k,w]=v(!1),p=P(null),A=typeof IntersectionObserver<"u",R=I(async()=>{if(!j||!$||k)return;w(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{w(!1)}},[$,k,j]),d=I((r)=>{let{scrollTop:N_,scrollHeight:$_,clientHeight:X_}=r.target,V_=b?$_-X_-N_:N_,L_=Math.max(300,X_);if(V_<L_)R()},[b,R]);S(()=>{if(!A)return;let r=p.current,N_=B?.current;if(!r||!N_)return;let $_=300,X_=new IntersectionObserver((V_)=>{for(let L_ of V_){if(!L_.isIntersecting)continue;R()}},{root:N_,rootMargin:`${$_}px 0px ${$_}px 0px`,threshold:0});return X_.observe(r),()=>X_.disconnect()},[A,$,j,B,R]);let t=P(R);if(t.current=R,S(()=>{if(A)return;if(!B?.current)return;let{scrollTop:r,scrollHeight:N_,clientHeight:$_}=B.current,X_=b?N_-$_-r:r,V_=Math.max(300,$_);if(X_<V_)t.current?.()},[A,_,$,b,B]),S(()=>{if(!B?.current)return;if(!$||k)return;let{scrollTop:r,scrollHeight:N_,clientHeight:$_}=B.current,X_=b?N_-$_-r:r,V_=Math.max(300,$_);if(N_<=$_+1||X_<V_)t.current?.()},[_,$,k,b,B]),!_)return W`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return W`
            <div class="timeline" ref=${B}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let o=_.slice().sort((r,N_)=>r.id-N_.id),__=(r)=>{let N_=r?.data?.thread_id;if(N_===null||N_===void 0||N_==="")return null;let $_=Number(N_);return Number.isFinite($_)?$_:null},i=new Map;for(let r=0;r<o.length;r+=1){let N_=o[r],$_=Number(N_?.id),X_=__(N_);if(X_!==null){let V_=i.get(X_)||{anchorIndex:-1,replyIndexes:[]};V_.replyIndexes.push(r),i.set(X_,V_)}else if(Number.isFinite($_)){let V_=i.get($_)||{anchorIndex:-1,replyIndexes:[]};V_.anchorIndex=r,i.set($_,V_)}}let Q_=new Map;for(let[r,N_]of i.entries()){let $_=new Set;if(N_.anchorIndex>=0)$_.add(N_.anchorIndex);for(let X_ of N_.replyIndexes)$_.add(X_);Q_.set(r,Array.from($_).sort((X_,V_)=>X_-V_))}let a_=o.map((r,N_)=>{let $_=__(r);if($_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let X_=Q_.get($_);if(!X_||X_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let V_=X_.indexOf(N_);if(V_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:V_>0,hasThreadNext:V_<X_.length-1}}),h_=W`<div class="timeline-sentinel" ref=${p}></div>`;return W`
        <div class="timeline ${b?"reverse":"normal"}" ref=${B} onScroll=${d}>
            <div class="timeline-content">
                ${b?h_:null}
                ${o.map((r,N_)=>{let $_=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),X_=m?.has?.(r.id),V_=a_[N_]||{};return W`
                    <${P6}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${$_}
                        isThreadPrev=${V_.hasThreadPrev}
                        isThreadNext=${V_.hasThreadNext}
                        isRemoving=${X_}
                        highlightQuery=${g}
                        agentName=${z6(r.data?.agent_id,X||{})}
                        agentAvatarUrl=${G6(r.data?.agent_id,X||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>Z?.(r)}
                        onHashtagClick=${N}
                        onMessageRef=${Y}
                        onScrollToMessage=${z}
                        onFileRef=${K}
                        onOpenWidget=${L}
                        onDelete=${M}
                    />
                `})}
                ${b?null:h_}
            </div>
        </div>
    `}class I6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let Y=N===!0?0:typeof N==="number"?N:0;if(Y>j)j=Y,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var e_=new I6;var R1=null,i4=null;function Rj(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function x6(){if(i4)return Promise.resolve(i4);if(!R1)R1=import(Rj()).then((_)=>{return i4=_,_}).catch((_)=>{throw R1=null,_});return R1}class w6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await x6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var l4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new w6(_,$)}};function n4(){x6().catch(()=>{})}var d4="piclaw://terminal";var vj={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},uj={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},v1=null,s4=null;function mj(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function gj(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,Y)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!mj(z))return $(N,Y);if(N instanceof Request)return $(new Request(j,N));return $(j,Y)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function pj(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!v1)v1=gj(()=>Promise.resolve($.init?.())).catch((j)=>{throw v1=null,j});return await v1,$}async function hj(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!s4)s4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await s4}async function cj(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function ij(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function lj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function p$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function nj(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function T6(){let _=lj(),$=_?uj:vj,j=p$("--bg-primary",_?"#000000":"#ffffff"),Z=p$("--text-primary",_?"#e7e9ea":"#0f1419"),N=p$("--text-secondary",_?"#71767b":"#536471"),Y=p$("--accent-color","#1d9bf0"),z=p$("--danger-color",_?"#ff7b72":"#cf222e"),K=p$("--success-color",_?"#7ee787":"#1a7f37"),L=p$("--bg-hover",_?"#1d1f23":"#e8ebed"),Q=p$("--border-color",_?"#2f3336":"#eff3f4"),B=p$("--accent-soft-strong",nj(Y,_?"47":"33"));return{background:j,foreground:Z,cursor:Y,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:L,red:z,green:K,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:Q}}class o4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await pj();if(await hj(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:T6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=T6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await cj();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(ij($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var r4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new o4(_,$)}},a4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new o4(_,$)}};function t$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function sj(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,Y=Z?.[2]||"",z=Z?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),Q=N.startsWith("/")?N:`${K?`${K}/`:""}${N}`,B=[];for(let H of Q.split("/")){if(!H||H===".")continue;if(H===".."){if(B.length>0)B.pop();continue}B.push(H)}let X=B.join("/");return`${D1(X)}${Y}${z}`}function N1(_){return _?.preview||null}function dj(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function oj(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function rj(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${t$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${t$(B$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${t$(B2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${t$(oj($))}</span>`),Z.push(`<span><strong>extension:</strong> ${t$(dj(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${t$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function aj(_){let $=N1(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=rj(_,$);if($.kind==="image"){let Z=$.url||($.path?D1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${t$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=$$($.text||"",null,{rewriteImageSrc:(N)=>sj(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${t$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class t4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=aj(this.context)}getContent(){let _=N1(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=N1(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var e4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=N1(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new t4(_,$)}},_3={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return N1(_)||_?.path?1:!1},mount(_,$){return new t4(_,$)}};var tj=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),ej={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},_Z={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function f6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function C6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class b6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=f6(j),Y=_Z[N]||"\uD83D\uDCC4",z=ej[N]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${C6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${C6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let L=K.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let Q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var $3={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=f6(_?.path);if(!$||!tj.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new b6(_,$);return new S6(_,$)}};var $Z=/\.(csv|tsv)$/i;function R6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${R6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${R6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let z=Y.querySelector("#csv-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var j3={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!$Z.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new v6(_,$);return new u6(_,$)}};var jZ=/\.pdf$/i;function ZZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${ZZ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var Z3={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!jZ.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new m6(_,$);return new g6(_,$)}};var NZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function N3(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${N3(N)}" alt="${N3(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${N3(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let z=Y.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var Y3={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!NZ.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new p6(_,$);return new h6(_,$)}};var YZ=/\.(mp4|m4v|mov|webm|ogv)$/i;function zZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class c6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${zZ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var z3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!YZ.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new c6(_,$);return new i6(_,$)}};function GZ(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function VZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var G3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function l6(_){let $=String(_||"").trim();return $?$:G3}function qZ(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function KZ(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function QZ(_,$="*"){try{let j=(Y)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Y=Z.prototype.saveData;Z.prototype.saveData=function(z,K,L,Q,B,X){try{if(z&&L!=null&&j({filename:z,format:K,data:L,mimeType:Q,base64Encoded:Boolean(B),defaultMode:X}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return Y.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let Y=N.prototype.exportFile;N.prototype.exportFile=function(z,K,L,Q,B,X){try{if(K&&j({filename:K,data:z,mimeType:L,base64Encoded:Boolean(Q),mode:B,folderId:X}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return Y.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function n6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${KZ(j)}`}class s6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${VZ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class d6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=qZ(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(QZ(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=G3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await n6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await n6(_,"image/png");else this.xmlData=l6(await _.text());else if(_.status===404)this.xmlData=G3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?l6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var V3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!GZ(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new s6(_,$);return new d6(_,$)}};class o6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var r_=new o6;var u1="workspaceExplorerScale",XZ=["compact","default","comfortable"],LZ=new Set(XZ),BZ={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function r6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return LZ.has(j)?j:$}function q3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function WZ(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function UZ(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function K3(_={}){let $=WZ(_),j=_.stored?r6(_.stored,$):$;return UZ(j,_)}function a6(_){return BZ[r6(_)]}var OZ=60000,$9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function j9(_,$,j,Z=0,N=[]){if(!j&&$9(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)j9(Y,$,j,Z+1,N);return N}function t6(_,$,j){if(!_)return"";let Z=[],N=(Y)=>{if(!j&&$9(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let z of Y.children)N(z)};return N(_),Z.join("|")}function B3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((K)=>[K?.path,K])):new Map,Y=!j||j.length!==Z.length,z=Z.map((K)=>{let L=B3(N.get(K.path),K);if(L!==N.get(K.path))Y=!0;return L});return Y?{...$,children:z}:_}function X3(_,$,j){if(!_)return _;if(_.path===$)return B3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((Y)=>{let z=X3(Y,$,j);if(z!==Y)Z=!0;return z});return Z?{..._,children:N}:_}var Z9=4,Q3=14,FZ=8,HZ=16;function N9(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=N9(Z);return _.__bytes=j,j}function Y9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Z9)return Z;let N=Array.isArray(_.children)?_.children:[],Y=[];for(let K of N){let L=Math.max(0,Number(K?.__bytes??K?.size??0));if(L<=0)continue;if(K.type==="dir")Y.push({kind:"dir",node:K,size:L});else Y.push({kind:"file",name:K.name,path:K.path,size:L})}Y.sort((K,L)=>L.size-K.size);let z=Y;if(Y.length>Q3){let K=Y.slice(0,Q3-1),L=Y.slice(Q3-1),Q=L.reduce((B,X)=>B+X.size,0);K.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:Q}),z=K}return Z.children=z.map((K)=>{if(K.kind==="dir")return Y9(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Z}function e6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function z9(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${Y}%)`}function m1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function W3(_,$,j,Z,N,Y){let z=Math.PI*2-0.0001,K=Y-N>z?N+z:Y,L=m1(_,$,Z,N),Q=m1(_,$,Z,K),B=m1(_,$,j,K),X=m1(_,$,j,N),H=K-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,"Z"].join(" ")}var G9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function V9(_,$,j){let Z=[],N=[],Y=Math.max(0,Number($)||0),z=(K,L,Q,B)=>{let X=Array.isArray(K?.children)?K.children:[];if(!X.length)return;let H=Math.max(0,Number(K.size)||0);if(H<=0)return;let M=Q-L,b=L;X.forEach((m,g)=>{let k=Math.max(0,Number(m.size)||0);if(k<=0)return;let w=k/H,p=b,A=g===X.length-1?Q:b+M*w;if(b=A,A-p<0.003)return;let R=G9[B];if(R){let d=z9(p,B,j);if(Z.push({key:m.path,path:m.path,label:m.name,size:k,color:d,depth:B,startAngle:p,endAngle:A,innerRadius:R[0],outerRadius:R[1],d:W3(120,120,R[0],R[1],p,A)}),B===1)N.push({key:m.path,name:m.name,size:k,pct:Y>0?k/Y*100:0,color:d})}if(B<Z9)z(m,p,A,B+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function L3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=L3(Z,$);if(N)return N}return null}function q9(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=G9[1];if(!N)return{segments:[],legend:[]};let Y=-Math.PI/2,z=Math.PI*3/2,K=z9(Y,1,Z),Q=`${$||"."}/[files]`;return{segments:[{key:Q,path:Q,label:_,size:j,color:K,depth:1,startAngle:Y,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:W3(120,120,N[0],N[1],Y,z)}],legend:[{key:Q,name:_,size:j,pct:100,color:K}]}}function _9(_,$=!1,j=!1){if(!_)return null;let Z=N9(_),N=Y9(_,0),Y=N.size||Z,{segments:z,legend:K}=V9(N,Y,j);if(!z.length&&Y>0){let L=q9("[files]",N.path,Y,j);z=L.segments,K=L.legend}return{root:N,totalSize:Y,segments:z,legend:K,truncated:$,isDarkTheme:j}}function DZ({payload:_}){if(!_)return null;let[$,j]=v(null),[Z,N]=v(_?.root?.path||"."),[Y,z]=v(()=>[_?.root?.path||"."]),[K,L]=v(!1);S(()=>{let i=_?.root?.path||".";N(i),z([i]),j(null)},[_?.root?.path,_?.totalSize]),S(()=>{if(!Z)return;L(!0);let i=setTimeout(()=>L(!1),180);return()=>clearTimeout(i)},[Z]);let Q=v_(()=>{return L3(_.root,Z)||_.root},[_?.root,Z]),B=Q?.size||_.totalSize||0,{segments:X,legend:H}=v_(()=>{let i=V9(Q,B,_.isDarkTheme);if(i.segments.length>0)return i;if(B<=0)return i;let Q_=Q?.children?.length?"Total":"[files]";return q9(Q_,Q?.path||_?.root?.path||".",B,_.isDarkTheme)},[Q,B,_.isDarkTheme,_?.root?.path]),[M,b]=v(X),m=P(new Map),g=P(0);S(()=>{let i=m.current,Q_=new Map(X.map((N_)=>[N_.key,N_])),a_=performance.now(),h_=220,r=(N_)=>{let $_=Math.min(1,(N_-a_)/220),X_=$_*(2-$_),V_=X.map((L_)=>{let Y_=i.get(L_.key)||{startAngle:L_.startAngle,endAngle:L_.startAngle,innerRadius:L_.innerRadius,outerRadius:L_.innerRadius},m_=(K0,q_)=>K0+(q_-K0)*X_,T_=m_(Y_.startAngle,L_.startAngle),A_=m_(Y_.endAngle,L_.endAngle),y_=m_(Y_.innerRadius,L_.innerRadius),q0=m_(Y_.outerRadius,L_.outerRadius);return{...L_,d:W3(120,120,y_,q0,T_,A_)}});if(b(V_),$_<1)g.current=requestAnimationFrame(r)};if(g.current)cancelAnimationFrame(g.current);return g.current=requestAnimationFrame(r),m.current=Q_,()=>{if(g.current)cancelAnimationFrame(g.current)}},[X]);let k=M.length?M:X,w=B>0?B$(B):"0 B",p=Q?.name||"",R=(p&&p!=="."?p:"Total")||"Total",d=w,t=Y.length>1,o=(i)=>{if(!i?.path)return;let Q_=L3(_.root,i.path);if(!Q_||!Array.isArray(Q_.children)||Q_.children.length===0)return;z((a_)=>[...a_,Q_.path]),N(Q_.path),j(null)},__=()=>{if(!t)return;z((i)=>{let Q_=i.slice(0,-1);return N(Q_[Q_.length-1]||_?.root?.path||"."),Q_}),j(null)};return W`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${Q?.path||_?.root?.path||"."}`}
                data-segments=${k.length}
                data-base-size=${B}>
                ${k.map((i)=>W`
                    <path
                        key=${i.key}
                        d=${i.d}
                        fill=${i.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===i.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(i)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(i)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>o(i)}
                    >
                        <title>${i.label} — ${B$(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
                    onClick=${__}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${R}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${d}</text>
                </g>
            </svg>
            ${H.length>0&&W`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>W`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${B$(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&W`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function JZ({mediaId:_}){let[$,j]=v(null);if(S(()=>{if(!_)return;P2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?B$($.metadata.size):"";return W`
        <a href=${L$(_)} download=${Z} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&W`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function K9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:Y,terminalVisible:z=!1}){let[K,L]=v(null),[Q,B]=v(new Set(["."])),[X,H]=v(null),[M,b]=v(null),[m,g]=v(""),[k,w]=v(null),[p,A]=v(null),[R,d]=v(!0),[t,o]=v(!1),[__,i]=v(null),[Q_,a_]=v(()=>M2("workspaceShowHidden",!1)),[h_,r]=v(!1),[N_,$_]=v(null),[X_,V_]=v(null),[L_,U_]=v(null),[Y_,m_]=v(!1),[T_,A_]=v(null),[y_,q0]=v(()=>e6()),[K0,q_]=v(()=>K3({stored:_$(u1),...q3()})),[j_,H_]=v(!1),Z_=P(Q),D_=P(""),C_=P(null),c_=P(0),i_=P(new Set),g_=P(null),l_=P(new Map),f_=P(_),M_=P(Z),k_=P(null),p_=P(null),Z0=P(null),x0=P(null),P_=P(null),k0=P(null),n_=P("."),b_=P(null),Y0=P({path:null,dragging:!1,startX:0,startY:0}),_0=P({path:null,dragging:!1,startX:0,startY:0}),s_=P({path:null,timer:0}),z0=P(!1),S_=P(0),H0=P(new Map),N0=P(null),E_=P(null),$0=P(null),S0=P(null),I_=P(null),C=P(null),e=P(Q_),O_=P($),x_=P(j??$),t_=P(0),D0=P(L_),w_=P(h_),R0=P(N_),j$=P(null),Z$=P({x:0,y:0}),f0=P(0),T$=P(null),J0=P(X),l0=P(M),n0=P(null),v0=P(null),N$=P(k);f_.current=_,M_.current=Z,S(()=>{Z_.current=Q},[Q]),S(()=>{e.current=Q_},[Q_]),S(()=>{O_.current=$},[$]),S(()=>{x_.current=j??$},[j,$]),S(()=>{D0.current=L_},[L_]),S(()=>{if(typeof window>"u")return;let U=()=>{q_(K3({stored:_$(u1),...q3()}))};U();let J=()=>U(),x=()=>U(),G=(u)=>{if(!u||u.key===null||u.key===u1)U()};window.addEventListener("resize",J),window.addEventListener("focus",x),window.addEventListener("storage",G);let O=window.matchMedia?.("(pointer: coarse)"),D=window.matchMedia?.("(hover: none)"),T=(u,a)=>{if(!u)return;if(u.addEventListener)u.addEventListener("change",a);else if(u.addListener)u.addListener(a)},h=(u,a)=>{if(!u)return;if(u.removeEventListener)u.removeEventListener("change",a);else if(u.removeListener)u.removeListener(a)};return T(O,J),T(D,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",x),window.removeEventListener("storage",G),h(O,J),h(D,J)}},[]),S(()=>{let U=(J)=>{let x=J?.detail?.path;if(!x)return;let G=x.split("/"),O=[];for(let D=1;D<G.length;D++)O.push(G.slice(0,D).join("/"));if(O.length)B((D)=>{let T=new Set(D);T.add(".");for(let h of O)T.add(h);return T});H(x),requestAnimationFrame(()=>{let D=document.querySelector(`[data-path="${CSS.escape(x)}"]`);if(D)D.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",U),()=>window.removeEventListener("workspace-reveal-path",U)},[]),S(()=>{w_.current=h_},[h_]),S(()=>{R0.current=N_},[N_]),S(()=>{J0.current=X},[X]),S(()=>{l0.current=M},[M]),S(()=>{N$.current=k},[k]),S(()=>{if(typeof window>"u"||typeof document>"u")return;let U=()=>q0(e6());U();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),x=()=>U();if(J?.addEventListener)J.addEventListener("change",x);else if(J?.addListener)J.addListener(x);let G=typeof MutationObserver<"u"?new MutationObserver(()=>U()):null;if(G?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)G?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",x);else if(J?.removeListener)J.removeListener(x);G?.disconnect()}},[]),S(()=>{if(!M)return;let U=P_.current;if(!U)return;let J=requestAnimationFrame(()=>{try{U.focus(),U.select()}catch{}});return()=>cancelAnimationFrame(J)},[M]),S(()=>{if(!j_)return;let U=(x)=>{let G=x?.target;if(!(G instanceof Element))return;if(I_.current?.contains(G))return;if(C.current?.contains(G))return;H_(!1)},J=(x)=>{if(x?.key==="Escape")H_(!1),C.current?.focus?.()};return document.addEventListener("mousedown",U),document.addEventListener("touchstart",U,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("touchstart",U),document.removeEventListener("keydown",J)}},[j_]);let O2=async(U)=>{o(!0),w(null),A(null);try{let J=await A4(U,20000);w(J)}catch(J){w({error:J.message||"Failed to load preview"})}finally{o(!1)}};k_.current=O2;let F2=async()=>{if(!O_.current)return;try{let U=await o2("",1,e.current),J=t6(U.root,Z_.current,e.current);if(J===D_.current){d(!1);return}if(D_.current=J,C_.current=U.root,!c_.current)c_.current=requestAnimationFrame(()=>{c_.current=0,L((x)=>B3(x,C_.current)),d(!1)})}catch(U){i(U.message||"Failed to load workspace"),d(!1)}},P0=async(U)=>{if(!U)return;if(i_.current.has(U))return;i_.current.add(U);try{let J=await o2(U,1,e.current);L((x)=>X3(x,U,J.root))}catch(J){i(J.message||"Failed to load workspace")}finally{i_.current.delete(U)}};p_.current=P0;let E0=I(()=>{let U=X;if(!U)return".";let J=l_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let x=U.split("/");return x.pop(),x.join("/")||"."},[X]),G0=I((U)=>{let J=U?.closest?.(".workspace-row");if(!J)return null;let x=J.dataset.path,G=J.dataset.type;if(!x)return null;if(G==="dir")return x;if(x.includes("/")){let O=x.split("/");return O.pop(),O.join("/")||"."}return"."},[]),h0=I((U)=>{return G0(U?.target||null)},[G0]),V0=I((U)=>{D0.current=U,U_(U)},[]),w0=I(()=>{let U=s_.current;if(U?.timer)clearTimeout(U.timer);s_.current={path:null,timer:0}},[]),Y$=I((U)=>{if(!U||U==="."){w0();return}let J=l_.current?.get(U);if(!J||J.type!=="dir"){w0();return}if(Z_.current?.has(U)){w0();return}if(s_.current?.path===U)return;w0();let x=setTimeout(()=>{s_.current={path:null,timer:0},p_.current?.(U),B((G)=>{let O=new Set(G);return O.add(U),O})},600);s_.current={path:U,timer:x}},[w0]),C$=I((U,J)=>{if(Z$.current={x:U,y:J},f0.current)return;f0.current=requestAnimationFrame(()=>{f0.current=0;let x=j$.current;if(!x)return;let G=Z$.current;x.style.transform=`translate(${G.x+12}px, ${G.y+12}px)`})},[]),e$=I((U)=>{if(!U)return;let x=(l_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!x)return;V_({path:U,label:x})},[]),h$=I(()=>{if(V_(null),f0.current)cancelAnimationFrame(f0.current),f0.current=0;if(j$.current)j$.current.style.transform="translate(-9999px, -9999px)"},[]),_2=I((U)=>{if(!U)return".";let J=l_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let x=U.split("/");return x.pop(),x.join("/")||"."},[]),s0=I(()=>{b(null),g("")},[]),$2=I((U)=>{if(!U)return;let x=(l_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!x||U===".")return;b(U),g(x)},[]),j2=I(async()=>{let U=l0.current;if(!U)return;let J=(m||"").trim();if(!J){s0();return}let x=l_.current?.get(U),G=(x?.name||U.split("/").pop()||U).trim();if(J===G){s0();return}try{let D=(await P4(U,J))?.path||U,T=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(s0(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:U,newPath:D,type:x?.type||"file"}})),x?.type==="dir")B((h)=>{let u=new Set;for(let a of h)if(a===U)u.add(D);else if(a.startsWith(`${U}/`))u.add(`${D}${a.slice(U.length)}`);else u.add(a);return u});if(H(D),x?.type==="dir")w(null),o(!1),A(null);else k_.current?.(D);p_.current?.(T)}catch(O){i(O?.message||"Failed to rename file")}},[s0,m]),z$=I(async(U)=>{let G=U||".";for(let O=0;O<50;O+=1){let T=`untitled${O===0?"":`-${O}`}.md`;try{let u=(await k4(G,T,""))?.path||(G==="."?T:`${G}/${T}`);if(G&&G!==".")B((a)=>new Set([...a,G]));H(u),i(null),p_.current?.(G),k_.current?.(u);return}catch(h){if(h?.status===409||h?.code==="file_exists")continue;i(h?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),U$=I((U)=>{if(U?.stopPropagation?.(),Y_)return;let J=_2(J0.current);z$(J)},[Y_,_2,z$]);S(()=>{if(typeof window>"u")return;let U=(J)=>{let x=J?.detail?.updates||[];if(!Array.isArray(x)||x.length===0)return;L((h)=>{let u=h;for(let a of x){if(!a?.root)continue;if(!u||a.path==="."||!a.path)u=a.root;else u=X3(u,a.path,a.root)}if(u)D_.current=t6(u,Z_.current,e.current);return d(!1),u});let G=J0.current;if(Boolean(G)&&x.some((h)=>{let u=h?.path||"";if(!u||u===".")return!0;return G===u||G.startsWith(`${u}/`)||u.startsWith(`${G}/`)}))H0.current.clear();if(!G||!N$.current)return;let D=l_.current?.get(G);if(D&&D.type==="dir")return;if(x.some((h)=>{let u=h?.path||"";if(!u||u===".")return!0;return G===u||G.startsWith(`${u}/`)}))k_.current?.(G)};return window.addEventListener("workspace-update",U),()=>window.removeEventListener("workspace-update",U)},[]),g_.current=F2;let d0=P(()=>{if(typeof window>"u")return;let U=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=x_.current??O_.current,x=document.visibilityState!=="hidden"&&(J||U.matches&&O_.current);r2(x,e.current).catch(()=>{})}).current,X0=P(0),d_=P(()=>{if(X0.current)clearTimeout(X0.current);X0.current=setTimeout(()=>{X0.current=0,d0()},250)}).current;S(()=>{if(O_.current)g_.current?.();d_()},[$,j]),S(()=>{g_.current(),d0();let U=setInterval(()=>g_.current(),OZ),J=I2("previewHeight",null),x=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(S_.current=x,Z0.current)Z0.current.style.setProperty("--preview-height",`${x}px`);let G=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=()=>d_();if(G.addEventListener)G.addEventListener("change",O);else if(G.addListener)G.addListener(O);return document.addEventListener("visibilitychange",O),()=>{if(clearInterval(U),c_.current)cancelAnimationFrame(c_.current),c_.current=0;if(G.removeEventListener)G.removeEventListener("change",O);else if(G.removeListener)G.removeListener(O);if(document.removeEventListener("visibilitychange",O),X0.current)clearTimeout(X0.current),X0.current=0;if(b_.current)clearTimeout(b_.current),b_.current=null;r2(!1,e.current).catch(()=>{})}},[]);let O$=v_(()=>j9(K,Q,Q_),[K,Q,Q_]),E$=v_(()=>new Map(O$.map((U)=>[U.node.path,U.node])),[O$]),c$=v_(()=>a6(K0),[K0]);l_.current=E$;let J_=(X?l_.current.get(X):null)?.type==="dir";S(()=>{if(!X||!J_){A_(null),N0.current=null,E_.current=null;return}let U=X,J=`${Q_?"hidden":"visible"}:${X}`,x=H0.current,G=x.get(J);if(G?.root){x.delete(J),x.set(J,G);let T=_9(G.root,Boolean(G.truncated),y_);if(T)N0.current=T,E_.current=X,A_({loading:!1,error:null,payload:T});return}let O=N0.current,D=E_.current;A_({loading:!0,error:null,payload:D===X?O:null}),o2(X,FZ,Q_).then((T)=>{if(J0.current!==U)return;let h={root:T?.root,truncated:Boolean(T?.truncated)};x.delete(J),x.set(J,h);while(x.size>HZ){let a=x.keys().next().value;if(!a)break;x.delete(a)}let u=_9(h.root,h.truncated,y_);N0.current=u,E_.current=X,A_({loading:!1,error:null,payload:u})}).catch((T)=>{if(J0.current!==U)return;A_({loading:!1,error:T?.message||"Failed to load folder size chart",payload:D===X?O:null})})},[X,J_,Q_,y_]);let G$=Boolean(k&&k.kind==="text"&&!J_&&(!k.size||k.size<=262144)),A$=G$?"Open in editor":k?.size>262144?"File too large to edit":"File is not editable",f$=Boolean(X&&X!=="."),o0=Boolean(X&&!J_),b$=Boolean(X&&!J_),r0=X&&J_?J1(X,Q_):null,u0=I(()=>H_(!1),[]),L0=I(async(U)=>{u0();try{await U?.()}catch{}},[u0]);S(()=>{let U=$0.current;if(S0.current)S0.current.dispose(),S0.current=null;if(!U)return;if(U.innerHTML="",!X||J_||!k||k.error)return;let J={path:X,content:typeof k.text==="string"?k.text:void 0,mtime:k.mtime,size:k.size,preview:k,mode:"view"},x=e_.resolve(J)||e_.get("workspace-preview-default");if(!x)return;let G=x.mount(U,J);return S0.current=G,()=>{if(S0.current===G)G.dispose(),S0.current=null;U.innerHTML=""}},[X,J_,k]);let m0=(U)=>{let J=U?.target;if(J instanceof Element)return J;return J?.parentElement||null},a0=(U)=>{return Boolean(U?.closest?.(".workspace-node-icon, .workspace-label-text"))},b0=P((U)=>{if(v0.current)clearTimeout(v0.current),v0.current=null;let x=m0(U)?.closest?.("[data-path]");if(!x)return;let G=x.dataset.path;if(x.dataset.type==="dir"||!G)return;if(l0.current===G)s0();M_.current?.(G)}).current,i$=P((U)=>{if(z0.current){z0.current=!1;return}let J=m0(U),x=J?.closest?.("[data-path]");if(x0.current?.focus?.(),!x)return;let G=x.dataset.path,O=x.dataset.type,D=Boolean(J?.closest?.(".workspace-caret")),T=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),h=J0.current===G,u=l0.current;if(u){if(u===G)return;s0()}let a=O==="file"&&n0.current===G&&!D&&!T;if(h&&!D&&!T&&G!=="."&&!a){if(v0.current)clearTimeout(v0.current);v0.current=setTimeout(()=>{v0.current=null,$2(G)},350);return}if(O==="dir"){if(n0.current=null,H(G),w(null),A(null),o(!1),!Z_.current.has(G))p_.current?.(G);if(h&&!D)return;B((M0)=>{let F_=new Set(M0);if(F_.has(G))F_.delete(G);else F_.add(G);return F_})}else{n0.current=null,H(G);let B_=l_.current.get(G);if(B_)f_.current?.(B_.path,B_);k_.current?.(G)}}).current,t0=P(()=>{D_.current="",g_.current(),Array.from(Z_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>p_.current?.(J))}).current,c0=P(()=>{n0.current=null,H(null),w(null),A(null),o(!1)}).current,l$=P(()=>{a_((U)=>{let J=!U;if(typeof window<"u")o_("workspaceShowHidden",String(J));return e.current=J,r2(!0,J).catch(()=>{}),D_.current="",g_.current?.(),Array.from(Z_.current||[]).filter((G)=>G&&G!==".").forEach((G)=>p_.current?.(G)),J})}).current,Z2=P((U)=>{if(m0(U)?.closest?.("[data-path]"))return;c0()}).current,S$=I(async(U)=>{if(!U)return;let J=U.split("/").pop()||U;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await I4(U);let G=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(J0.current===U)c0();p_.current?.(G),i(null)}catch(G){w((O)=>({...O||{},error:G.message||"Failed to delete file"}))}},[c0]),A0=I((U)=>{let J=x0.current;if(!J||!U||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(U)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),F$=I((U)=>{let J=O$;if(!J||J.length===0)return;let x=X?J.findIndex((G)=>G.node.path===X):-1;if(U.key==="ArrowDown"){U.preventDefault();let G=Math.min(x+1,J.length-1),O=J[G];if(!O)return;if(H(O.node.path),O.node.type!=="dir")f_.current?.(O.node.path,O.node),k_.current?.(O.node.path);else w(null),o(!1),A(null);A0(O.node.path);return}if(U.key==="ArrowUp"){U.preventDefault();let G=x<=0?0:x-1,O=J[G];if(!O)return;if(H(O.node.path),O.node.type!=="dir")f_.current?.(O.node.path,O.node),k_.current?.(O.node.path);else w(null),o(!1),A(null);A0(O.node.path);return}if(U.key==="ArrowRight"&&x>=0){let G=J[x];if(G?.node?.type==="dir"&&!Q.has(G.node.path))U.preventDefault(),p_.current?.(G.node.path),B((O)=>new Set([...O,G.node.path]));return}if(U.key==="ArrowLeft"&&x>=0){let G=J[x];if(G?.node?.type==="dir"&&Q.has(G.node.path))U.preventDefault(),B((O)=>{let D=new Set(O);return D.delete(G.node.path),D});return}if(U.key==="Enter"&&x>=0){U.preventDefault();let G=J[x];if(!G)return;let O=G.node.path;if(G.node.type==="dir"){if(!Z_.current.has(O))p_.current?.(O);B((T)=>{let h=new Set(T);if(h.has(O))h.delete(O);else h.add(O);return h}),w(null),A(null),o(!1)}else f_.current?.(O,G.node),k_.current?.(O);return}if((U.key==="Delete"||U.key==="Backspace")&&x>=0){let G=J[x];if(!G||G.node.type==="dir")return;U.preventDefault(),S$(G.node.path);return}if(U.key==="Escape")U.preventDefault(),c0()},[c0,S$,Q,O$,A0,X]),y$=I((U)=>{let J=m0(U),x=J?.closest?.(".workspace-row");if(!x)return;let G=x.dataset.type,O=x.dataset.path;if(!O||O===".")return;if(l0.current===O)return;let D=U?.touches?.[0];if(!D)return;if(Y0.current={path:a0(J)?O:null,dragging:!1,startX:D.clientX,startY:D.clientY},G!=="file")return;if(b_.current)clearTimeout(b_.current);b_.current=setTimeout(()=>{if(b_.current=null,Y0.current?.dragging)return;S$(O)},600)},[S$]),k$=I(()=>{if(b_.current)clearTimeout(b_.current),b_.current=null;let U=Y0.current;if(U?.dragging&&U.path){let J=D0.current||E0(),x=T$.current;if(typeof x==="function")x(U.path,J)}Y0.current={path:null,dragging:!1,startX:0,startY:0},t_.current=0,r(!1),$_(null),V0(null),w0(),h$()},[E0,h$,V0,w0]),R$=I((U)=>{let J=Y0.current,x=U?.touches?.[0];if(!x||!J?.path){if(b_.current)clearTimeout(b_.current),b_.current=null;return}let G=Math.abs(x.clientX-J.startX),O=Math.abs(x.clientY-J.startY),D=G>8||O>8;if(D&&b_.current)clearTimeout(b_.current),b_.current=null;if(!J.dragging&&D)J.dragging=!0,r(!0),$_("move"),e$(J.path);if(J.dragging){U.preventDefault(),C$(x.clientX,x.clientY);let T=document.elementFromPoint(x.clientX,x.clientY),h=G0(T)||E0();if(D0.current!==h)V0(h);Y$(h)}},[G0,E0,e$,C$,V0,Y$]),n$=P((U)=>{U.preventDefault();let J=Z0.current;if(!J)return;let x=U.clientY,G=S_.current||280,O=U.currentTarget;O.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=x,T=(u)=>{D=u.clientY;let a=J.clientHeight-80,B_=Math.min(Math.max(G-(u.clientY-x),80),a);J.style.setProperty("--preview-height",`${B_}px`),S_.current=B_},h=()=>{let u=J.clientHeight-80,a=Math.min(Math.max(G-(D-x),80),u);S_.current=a,O.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("previewHeight",String(Math.round(a))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",h)}).current,N2=P((U)=>{U.preventDefault();let J=Z0.current;if(!J)return;let x=U.touches[0];if(!x)return;let G=x.clientY,O=S_.current||280,D=U.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let T=(u)=>{let a=u.touches[0];if(!a)return;u.preventDefault();let B_=J.clientHeight-80,M0=Math.min(Math.max(O-(a.clientY-G),80),B_);J.style.setProperty("--preview-height",`${M0}px`),S_.current=M0},h=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",o_("previewHeight",String(Math.round(S_.current||O))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}).current,i0=async()=>{if(!X)return;try{let U=await y4(X);if(U.media_id)A(U.media_id)}catch(U){w((J)=>({...J||{},error:U.message||"Failed to attach"}))}},g0=async()=>{if(!X||J_)return;await S$(X)},H$=(U)=>{return Array.from(U?.dataTransfer?.types||[]).includes("Files")},Y2=I((U)=>{if(!H$(U))return;if(U.preventDefault(),t_.current+=1,!w_.current)r(!0);$_("upload");let J=h0(U)||E0();V0(J),Y$(J)},[E0,h0,V0,Y$]),V$=I((U)=>{if(!H$(U))return;if(U.preventDefault(),U.dataTransfer)U.dataTransfer.dropEffect="copy";if(!w_.current)r(!0);if(R0.current!=="upload")$_("upload");let J=h0(U)||E0();if(D0.current!==J)V0(J);Y$(J)},[E0,h0,V0,Y$]),s$=I((U)=>{if(!H$(U))return;if(U.preventDefault(),t_.current=Math.max(0,t_.current-1),t_.current===0)r(!1),$_(null),V0(null),w0()},[V0,w0]),P$=I(async(U,J=".")=>{let x=Array.from(U||[]);if(x.length===0)return;let G=J&&J!==""?J:".",O=G!=="."?G:"workspace root";m_(!0);try{let D=null;for(let T of x)try{D=await H1(T,G)}catch(h){let u=h?.status,a=h?.code;if(u===409||a==="file_exists"){let B_=T?.name||"file";if(!window.confirm(`"${B_}" already exists in ${O}. Overwrite?`))continue;D=await H1(T,G,{overwrite:!0})}else throw h}if(D?.path)n0.current=D.path,H(D.path),k_.current?.(D.path);p_.current?.(G)}catch(D){i(D.message||"Failed to upload file")}finally{m_(!1)}},[]),v$=I(async(U,J)=>{if(!U)return;let x=l_.current?.get(U);if(!x)return;let G=J&&J!==""?J:".",O=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(G===O)return;try{let T=(await M4(U,G))?.path||U;if(x.type==="dir")B((h)=>{let u=new Set;for(let a of h)if(a===U)u.add(T);else if(a.startsWith(`${U}/`))u.add(`${T}${a.slice(U.length)}`);else u.add(a);return u});if(H(T),x.type==="dir")w(null),o(!1),A(null);else k_.current?.(T);p_.current?.(O),p_.current?.(G)}catch(D){i(D?.message||"Failed to move entry")}},[]);T$.current=v$;let z2=I(async(U)=>{if(!H$(U))return;U.preventDefault(),t_.current=0,r(!1),$_(null),U_(null),w0();let J=Array.from(U?.dataTransfer?.files||[]);if(J.length===0)return;let x=D0.current||h0(U)||E0();await P$(J,x)},[E0,h0,P$]),D2=I((U)=>{if(U?.stopPropagation?.(),Y_)return;let J=U?.currentTarget?.dataset?.uploadTarget||".";n_.current=J,k0.current?.click()},[Y_]),M$=I(()=>{if(Y_)return;let U=J0.current,J=U?l_.current?.get(U):null;n_.current=J?.type==="dir"?J.path:".",k0.current?.click()},[Y_]),d$=I(()=>{L0(()=>U$(null))},[L0,U$]),G2=I(()=>{L0(()=>M$())},[L0,M$]),I$=I(()=>{L0(()=>t0())},[L0,t0]),T2=I(()=>{L0(()=>l$())},[L0,l$]),C2=I(()=>{if(!X||!G$)return;L0(()=>M_.current?.(X,k))},[L0,X,G$,k]),z_=I(()=>{if(!X||X===".")return;L0(()=>$2(X))},[L0,X,$2]),J2=I(()=>{if(!X||J_)return;L0(()=>g0())},[L0,X,J_,g0]),f2=I(()=>{if(!X||J_)return;L0(()=>i0())},[L0,X,J_,i0]),b2=I(()=>{if(!r0)return;if(u0(),typeof window<"u")window.open(r0,"_blank","noopener")},[u0,r0]),V2=I(()=>{u0(),N?.()},[u0,N]),S2=I(()=>{u0(),Y?.()},[u0,Y]),R2=I((U)=>{if(!U||U.button!==0)return;let J=U.currentTarget;if(!J||!J.dataset)return;let x=J.dataset.path;if(!x||x===".")return;if(l0.current===x)return;let G=m0(U);if(G?.closest?.("button, a, input, .workspace-caret"))return;if(!a0(G))return;U.preventDefault(),_0.current={path:x,dragging:!1,startX:U.clientX,startY:U.clientY};let O=(T)=>{let h=_0.current;if(!h?.path)return;let u=Math.abs(T.clientX-h.startX),a=Math.abs(T.clientY-h.startY),B_=u>4||a>4;if(!h.dragging&&B_)h.dragging=!0,z0.current=!0,r(!0),$_("move"),e$(h.path),C$(T.clientX,T.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(h.dragging){T.preventDefault(),C$(T.clientX,T.clientY);let M0=document.elementFromPoint(T.clientX,T.clientY),F_=G0(M0)||E0();if(D0.current!==F_)V0(F_);Y$(F_)}},D=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",D);let T=_0.current;if(T?.dragging&&T.path){let h=D0.current||E0(),u=T$.current;if(typeof u==="function")u(T.path,h)}_0.current={path:null,dragging:!1,startX:0,startY:0},t_.current=0,r(!1),$_(null),V0(null),w0(),h$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{z0.current=!1},0)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",D)},[G0,E0,e$,C$,h$,V0,Y$,w0]),v2=I(async(U)=>{let J=Array.from(U?.target?.files||[]);if(J.length===0)return;let x=n_.current||".";if(await P$(J,x),n_.current=".",U?.target)U.target.value=""},[P$]);return W`
        <aside
            class=${`workspace-sidebar${h_?" workspace-drop-active":""}`}
            data-workspace-scale=${K0}
            ref=${Z0}
            onDragEnter=${Y2}
            onDragOver=${V$}
            onDragLeave=${s$}
            onDrop=${z2}
        >
            <input type="file" multiple style="display:none" ref=${k0} onChange=${v2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${C}
                            class=${`workspace-menu-button${j_?" active":""}`}
                            onClick=${(U)=>{U.stopPropagation(),H_((J)=>!J)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${j_?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${j_&&W`
                            <div class="workspace-menu-dropdown" ref=${I_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${d$} disabled=${Y_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${G2} disabled=${Y_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${I$}>Refresh tree</button>
                                <button class=${`workspace-menu-item${Q_?" active":""}`} role="menuitem" onClick=${T2}>
                                    ${Q_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${X&&W`<div class="workspace-menu-separator"></div>`}
                                ${X&&!J_&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C2} disabled=${!G$}>Open in editor</button>
                                `}
                                ${f$&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${z_}>Rename selected</button>
                                `}
                                ${b$&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${f2}>Download selected file</button>
                                `}
                                ${r0&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>Download selected folder (zip)</button>
                                `}
                                ${o0&&W`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${J2}>Delete selected file</button>
                                `}

                                ${(N||Y)&&W`<div class="workspace-menu-separator"></div>`}
                                ${N&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S2}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${U$} title="New file" disabled=${Y_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${t0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${Z2}>
                ${Y_&&W`<div class="workspace-drop-hint">Uploading…</div>`}
                ${R&&W`<div class="workspace-loading">Loading…</div>`}
                ${__&&W`<div class="workspace-error">${__}</div>`}
                ${K&&W`
                    <div
                        class="workspace-tree-list"
                        ref=${x0}
                        tabIndex="0"
                        onClick=${i$}
                        onDblClick=${b0}
                        onKeyDown=${F$}
                        onTouchStart=${y$}
                        onTouchEnd=${k$}
                        onTouchMove=${R$}
                        onTouchCancel=${k$}
                    >
                        ${O$.map(({node:U,depth:J})=>{let x=U.type==="dir",G=U.path===X,O=U.path===M,D=x&&Q.has(U.path),T=L_&&U.path===L_,h=Array.isArray(U.children)&&U.children.length>0?U.children.length:Number(U.child_count)||0;return W`
                                <div
                                    key=${U.path}
                                    class=${`workspace-row${G?" selected":""}${T?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*c$.indentPx}px`}}
                                    data-path=${U.path}
                                    data-type=${U.type}
                                    onMouseDown=${R2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${x?D?W`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:W`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${x?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${x?W`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:W`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${O?W`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${P_}
                                                value=${m}
                                                onInput=${(u)=>g(u?.target?.value||"")}
                                                onKeyDown=${(u)=>{if(u.key==="Enter")u.preventDefault(),j2();else if(u.key==="Escape")u.preventDefault(),s0()}}
                                                onBlur=${s0}
                                                onClick=${(u)=>u.stopPropagation()}
                                            />
                                        `:W`<span class="workspace-label"><span class="workspace-label-text">${U.name}</span></span>`}
                                    ${x&&!D&&h>0&&W`
                                        <span class="workspace-count">${h}</span>
                                    `}
                                    ${x&&W`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${U.path}
                                            title="Upload files to this folder"
                                            onClick=${D2}
                                            disabled=${Y_}
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
            ${X&&W`
                <div class="workspace-preview-splitter-h" onMouseDown=${n$} onTouchStart=${N2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${X}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${U$} title="New file" disabled=${Y_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!J_&&W`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>G$&&M_.current?.(X,k)}
                                    title=${A$}
                                    disabled=${!G$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${g0}
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
                            ${J_?W`
                                    <button class="workspace-download" onClick=${M$}
                                        title="Upload files to this folder" disabled=${Y_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${J1(X,Q_)}
                                        title="Download folder as zip" onClick=${(U)=>U.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:W`<button class="workspace-download" onClick=${i0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${t&&W`<div class="workspace-loading">Loading preview…</div>`}
                    ${k?.error&&W`<div class="workspace-error">${k.error}</div>`}
                    ${J_&&W`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${T_?.loading&&W`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${T_?.error&&W`<div class="workspace-error">${T_.error}</div>`}
                        ${T_?.payload&&T_.payload.segments?.length>0&&W`
                            <${DZ} payload=${T_.payload} />
                        `}
                        ${T_?.payload&&(!T_.payload.segments||T_.payload.segments.length===0)&&W`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${k&&!k.error&&!J_&&W`
                        <div class="workspace-preview-body" ref=${$0}></div>
                    `}
                    ${p&&W`
                        <div class="workspace-download-card">
                            <${JZ} mediaId=${p} />
                        </div>
                    `}
                </div>
            `}
            ${X_&&W`
                <div class="workspace-drag-ghost" ref=${j$}>${X_.label}</div>
            `}
        </aside>
    `}var EZ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,AZ=/\.(csv|tsv)$/i,yZ=/\.pdf$/i,kZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Q9=/\.drawio(\.xml|\.svg|\.png)?$/i;function X9({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:Y,onTogglePin:z,onTogglePreview:K,previewTabs:L,onToggleDock:Q,dockVisible:B,onToggleZen:X,zenMode:H}){let[M,b]=v(null),m=P(null);S(()=>{if(!M)return;let A=(R)=>{if(R.type==="keydown"&&R.key!=="Escape")return;b(null)};return document.addEventListener("click",A),document.addEventListener("keydown",A),()=>{document.removeEventListener("click",A),document.removeEventListener("keydown",A)}},[M]),S(()=>{let A=(R)=>{if(R.ctrlKey&&R.key==="Tab"){if(R.preventDefault(),!_.length)return;let d=_.findIndex((t)=>t.id===$);if(R.shiftKey){let t=_[(d-1+_.length)%_.length];j?.(t.id)}else{let t=_[(d+1)%_.length];j?.(t.id)}return}if((R.ctrlKey||R.metaKey)&&R.key==="w"){let d=document.querySelector(".editor-pane");if(d&&d.contains(document.activeElement)){if(R.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[_,$,j,Z]);let g=I((A,R)=>{if(A.button===1){A.preventDefault(),Z?.(R);return}if(A.button===0)j?.(R)},[j,Z]),k=I((A,R)=>{A.preventDefault(),b({id:R,x:A.clientX,y:A.clientY})},[]),w=I((A)=>{A.preventDefault(),A.stopPropagation()},[]),p=I((A,R)=>{A.preventDefault(),A.stopPropagation(),Z?.(R)},[Z]);if(S(()=>{if(!$||!m.current)return;let A=m.current.querySelector(".tab-item.active");if(A)A.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return W`
        <div class="tab-strip" ref=${m} role="tablist">
            ${_.map((A)=>W`
                <div
                    key=${A.id}
                    class=${`tab-item${A.id===$?" active":""}${A.dirty?" dirty":""}${A.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${A.id===$}
                    title=${A.path}
                    onMouseDown=${(R)=>g(R,A.id)}
                    onContextMenu=${(R)=>k(R,A.id)}
                >
                    ${A.pinned&&W`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${A.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${w}
                        onClick=${(R)=>p(R,A.id)}
                        title=${A.dirty?"Unsaved changes":"Close"}
                        aria-label=${A.dirty?"Unsaved changes":`Close ${A.label}`}
                    >
                        ${A.dirty?W`<span class="tab-dirty-dot" aria-hidden="true"></span>`:W`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${Q&&W`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${B?" active":""}`}
                    onClick=${Q}
                    title=${`${B?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${B?"Hide":"Show"} terminal`}
                    aria-pressed=${B?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${X&&W`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${X}
                    title=${`${H?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${H?"Exit":"Enter"} zen mode`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${H?W`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:W`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${M&&W`
            <div class="tab-context-menu" style=${{left:M.x+"px",top:M.y+"px"}}>
                <button onClick=${()=>{Z?.(M.id),b(null)}}>Close</button>
                <button onClick=${()=>{N?.(M.id),b(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),b(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(M.id),b(null)}}>
                    ${_.find((A)=>A.id===M.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${K&&/\.(md|mdx|markdown)$/i.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{K(M.id),b(null)}}>
                        ${L?.has(M.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${EZ.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{let A="/workspace/raw?path="+encodeURIComponent(M.id),R=M.id.split("/").pop()||"document",d="/office-viewer/?url="+encodeURIComponent(A)+"&name="+encodeURIComponent(R);window.open(d,"_blank","noopener"),b(null)}}>Open in New Tab</button>
                `}
                ${AZ.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{let A="/csv-viewer/?path="+encodeURIComponent(M.id);window.open(A,"_blank","noopener"),b(null)}}>Open in New Tab</button>
                `}
                ${yZ.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{let A="/workspace/raw?path="+encodeURIComponent(M.id);window.open(A,"_blank","noopener"),b(null)}}>Open in New Tab</button>
                `}
                ${kZ.test(M.id)&&!Q9.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{let A="/image-viewer/?path="+encodeURIComponent(M.id);window.open(A,"_blank","noopener"),b(null)}}>Open in New Tab</button>
                `}
                ${Q9.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{let A="/drawio/edit?path="+encodeURIComponent(M.id);window.open(A,"_blank","noopener"),b(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var PZ=400,U3=60,L9=220,O3="mdPreviewHeight";function MZ(){try{let _=localStorage.getItem(O3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=U3?$:L9}catch{return L9}}function B9({getContent:_,path:$,onClose:j}){let[Z,N]=v(""),[Y,z]=v(MZ),K=P(null),L=P(null),Q=P(""),B=P(_);return B.current=_,S(()=>{let M=()=>{let m=B.current?.()||"";if(m===Q.current)return;Q.current=m;try{let g=$$(m,null,{sanitize:!1});N(g)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};M();let b=setInterval(M,PZ);return()=>clearInterval(b)},[]),S(()=>{if(K.current&&Z)g$(K.current).catch(()=>{})},[Z]),W`
        <div
            class="md-preview-splitter"
            onMouseDown=${(M)=>{M.preventDefault();let b=M.clientY,m=L.current?.offsetHeight||Y,g=L.current?.parentElement,k=g?g.offsetHeight*0.7:500,w=M.currentTarget;w.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let p=(R)=>{let d=Math.min(Math.max(m-(R.clientY-b),U3),k);z(d)},A=()=>{w.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(O3,String(Math.round(L.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",p),document.addEventListener("mouseup",A)}}
            onTouchStart=${(M)=>{M.preventDefault();let b=M.touches[0];if(!b)return;let m=b.clientY,g=L.current?.offsetHeight||Y,k=L.current?.parentElement,w=k?k.offsetHeight*0.7:500,p=M.currentTarget;p.classList.add("dragging"),document.body.style.userSelect="none";let A=(d)=>{let t=d.touches[0];if(!t)return;d.preventDefault();let o=Math.min(Math.max(g-(t.clientY-m),U3),w);z(o)},R=()=>{p.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(O3,String(Math.round(L.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",A),document.removeEventListener("touchend",R),document.removeEventListener("touchcancel",R)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",R),document.addEventListener("touchcancel",R)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:Y+"px"}}>
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
                ref=${K}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function W9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let Y=P(_);Y.current=_;let z=P($);z.current=$;let K=P(j);K.current=j;let L=P(Z);L.current=Z,S(()=>{K.current();let Q=new E1((X,H)=>Y.current(X,H),(X)=>z.current(X),{chatJid:N});Q.connect();let B=()=>{Q.reconnectIfNeeded();let X=typeof document<"u"?document:null;if(!X||X.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),Q.disconnect()}},[N])}function U9(){let[_,$]=v(!1),[j,Z]=v("default"),N=P(!1);S(()=>{let L=M2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),S(()=>{N.current=_},[_]);let Y=I(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),z=I(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let Q=await Y();if(Z(Q||"default"),Q!=="granted"){N.current=!1,$(!1),o_("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),o_("notificationsEnabled",String(L))},[Y]),K=I((L,Q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(L,{body:Q});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:K}}var Y1=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function O9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=v(null),[Y,z]=v(!1),K=P(!1),L=P(null),Q=P(!1),B=P(null),X=P(null),H=P(0);S(()=>{K.current=Y},[Y]),S(()=>{X.current=Z},[Z]),S(()=>{H.current+=1,X.current=null,B.current=null,Q.current=!1,K.current=!1,N(null),z(!1)},[j]);let M=I(async(g=null)=>{let k=H.current;try{if(g){let w=await q4(g,50,0,j);if(k!==H.current)return;N(w.posts),z(!1)}else{let w=await K2(10,null,j);if(k!==H.current)return;N(w.posts),z(w.has_more)}}catch(w){if(k!==H.current)return;console.error("Failed to load posts:",w)}},[j]),b=I(async()=>{let g=H.current;try{let k=await K2(10,null,j);if(g!==H.current)return;N((w)=>{if(!w||w.length===0)return k.posts;return Y1([...k.posts,...w])}),z((w)=>w||k.has_more)}catch(k){if(g!==H.current)return;console.error("Failed to refresh timeline:",k)}},[j]),m=I(async(g={})=>{let k=H.current,w=X.current;if(!w||w.length===0)return;if(Q.current)return;let{preserveScroll:p=!0,preserveMode:A="top",allowRepeat:R=!1}=g,d=(__)=>{if(!p){__();return}if(A==="top")$(__);else _(__)},o=w.slice().sort((__,i)=>__.id-i.id)[0]?.id;if(!Number.isFinite(o))return;if(!R&&B.current===o)return;Q.current=!0,B.current=o;try{let __=await K2(10,o,j);if(k!==H.current)return;if(__.posts.length>0)d(()=>{N((i)=>Y1([...__.posts,...i||[]])),z(__.has_more)});else z(!1)}catch(__){if(k!==H.current)return;console.error("Failed to load more posts:",__)}finally{if(k===H.current)Q.current=!1}},[j,_,$]);return S(()=>{L.current=m},[m]),{posts:Z,setPosts:N,hasMore:Y,setHasMore:z,hasMoreRef:K,loadPosts:M,refreshTimeline:b,loadMore:m,loadMoreRef:L,loadingMoreRef:Q,lastBeforeIdRef:B}}function F9(){let[_,$]=v(null),[j,Z]=v({text:"",totalLines:0}),[N,Y]=v(""),[z,K]=v({text:"",totalLines:0}),[L,Q]=v(null),[B,X]=v(null),[H,M]=v(null),b=P(null),m=P(0),g=P(!1),k=P(""),w=P(""),p=P(null),A=P(null),R=P(null),d=P(null),t=P(!1),o=P(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:Y,agentThought:z,setAgentThought:K,pendingRequest:L,setPendingRequest:Q,currentTurnId:B,setCurrentTurnId:X,steerQueuedTurnId:H,setSteerQueuedTurnId:M,lastAgentEventRef:b,lastSilenceNoticeRef:m,isAgentRunningRef:g,draftBufferRef:k,thoughtBufferRef:w,pendingRequestRef:p,stalledPostIdRef:A,currentTurnIdRef:R,steerQueuedTurnIdRef:d,thoughtExpandedRef:t,draftExpandedRef:o}}function H9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.clientX,M=$.current||280,b=B.currentTarget;b.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,g=(w)=>{m=w.clientX;let p=Math.min(Math.max(M+(w.clientX-H),160),600);X.style.setProperty("--sidebar-width",`${p}px`),$.current=p},k=()=>{let w=Math.min(Math.max(M+(m-H),160),600);$.current=w,b.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",o_("sidebarWidth",String(Math.round(w))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",k)}).current,Y=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.touches[0];if(!H)return;let M=H.clientX,b=$.current||280,m=B.currentTarget;m.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let g=(w)=>{let p=w.touches[0];if(!p)return;w.preventDefault();let A=Math.min(Math.max(b+(p.clientX-M),160),600);X.style.setProperty("--sidebar-width",`${A}px`),$.current=A},k=()=>{m.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.userSelect="",o_("sidebarWidth",String(Math.round($.current||b))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",k),document.removeEventListener("touchcancel",k)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",k),document.addEventListener("touchcancel",k)}).current,z=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.clientX,M=j.current||$.current||280,b=B.currentTarget;b.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,g=(w)=>{m=w.clientX;let p=Math.min(Math.max(M+(w.clientX-H),200),800);X.style.setProperty("--editor-width",`${p}px`),j.current=p},k=()=>{let w=Math.min(Math.max(M+(m-H),200),800);j.current=w,b.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("editorWidth",String(Math.round(w))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",k)}).current,K=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.touches[0];if(!H)return;let M=H.clientX,b=j.current||$.current||280,m=B.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let g=(w)=>{let p=w.touches[0];if(!p)return;w.preventDefault();let A=Math.min(Math.max(b+(p.clientX-M),200),800);X.style.setProperty("--editor-width",`${A}px`),j.current=A},k=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",o_("editorWidth",String(Math.round(j.current||b))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",k),document.removeEventListener("touchcancel",k)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",k),document.addEventListener("touchcancel",k)}).current,L=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.clientY,M=Z?.current||200,b=B.currentTarget;b.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let m=H,g=(w)=>{m=w.clientY;let p=Math.min(Math.max(M-(w.clientY-H),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${p}px`),Z)Z.current=p;window.dispatchEvent(new CustomEvent("dock-resize"))},k=()=>{let w=Math.min(Math.max(M-(m-H),100),window.innerHeight*0.5);if(Z)Z.current=w;b.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("dockHeight",String(Math.round(w))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",k)}).current,Q=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.touches[0];if(!H)return;let M=H.clientY,b=Z?.current||200,m=B.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let g=(w)=>{let p=w.touches[0];if(!p)return;w.preventDefault();let A=Math.min(Math.max(b-(p.clientY-M),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${A}px`),Z)Z.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},k=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",o_("dockHeight",String(Math.round(Z?.current||b))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",k),document.removeEventListener("touchcancel",k)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",k),document.addEventListener("touchcancel",k)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:Q}}function D9({onTabClosed:_}={}){let $=P(_);$.current=_;let[j,Z]=v(()=>r_.getTabs()),[N,Y]=v(()=>r_.getActiveId()),[z,K]=v(()=>r_.getTabs().length>0);S(()=>{return r_.onChange((A,R)=>{Z(A),Y(R),K(A.length>0)})},[]);let[L,Q]=v(()=>new Set),B=I((A)=>{Q((R)=>{let d=new Set(R);if(d.has(A))d.delete(A);else d.add(A);return d})},[]),X=I((A)=>{Q((R)=>{if(!R.has(A))return R;let d=new Set(R);return d.delete(A),d})},[]),H=I((A,R={})=>{if(!A)return;let d={path:A,mode:"edit"};try{if(!e_.resolve(d)){if(!e_.get("editor")){console.warn(`[openEditor] No pane handler for: ${A}`);return}}}catch(o){console.warn(`[openEditor] paneRegistry.resolve() error for "${A}":`,o)}let t=typeof R?.label==="string"&&R.label.trim()?R.label.trim():void 0;r_.open(A,t)},[]),M=I(()=>{let A=r_.getActiveId();if(A){let R=r_.get(A);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}r_.close(A),X(A),$.current?.(A)}},[X]),b=I((A)=>{let R=r_.get(A);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}r_.close(A),X(A),$.current?.(A)},[X]),m=I((A)=>{r_.activate(A)},[]),g=I((A)=>{let R=r_.getTabs().filter((o)=>o.id!==A&&!o.pinned),d=R.filter((o)=>o.dirty).length;if(d>0){if(!window.confirm(`${d} unsaved tab${d>1?"s":""} will be closed. Continue?`))return}let t=R.map((o)=>o.id);r_.closeOthers(A),t.forEach((o)=>{X(o),$.current?.(o)})},[X]),k=I(()=>{let A=r_.getTabs().filter((t)=>!t.pinned),R=A.filter((t)=>t.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let d=A.map((t)=>t.id);r_.closeAll(),d.forEach((t)=>{X(t),$.current?.(t)})},[X]),w=I((A)=>{r_.togglePin(A)},[]),p=I(()=>{let A=r_.getActiveId();if(A)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:A}}))},[]);return S(()=>{let A=(R)=>{let{oldPath:d,newPath:t,type:o}=R.detail||{};if(!d||!t)return;if(o==="dir"){for(let __ of r_.getTabs())if(__.path===d||__.path.startsWith(`${d}/`)){let i=`${t}${__.path.slice(d.length)}`;r_.rename(__.id,i)}}else r_.rename(d,t)};return window.addEventListener("workspace-file-renamed",A),()=>window.removeEventListener("workspace-file-renamed",A)},[]),S(()=>{let A=(R)=>{if(r_.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",A),()=>window.removeEventListener("beforeunload",A)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:H,closeEditor:M,handleTabClose:b,handleTabActivate:m,handleTabCloseOthers:g,handleTabCloseAll:k,handleTabTogglePin:w,handleTabTogglePreview:B,revealInExplorer:p}}function F3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],Y=Number(N);return Number.isFinite(Y)?Y:$}catch{return $}}var H3=F3("warning",30000),J9=F3("finalize",120000),D3=F3("refresh",30000),E9=30000;function A9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function y9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function k9(_=30000){let[,$]=v(0);S(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function J3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function P9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function W2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function E3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||N>1||z)}function M9(_,$={}){if(W2($))return null;if(E3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:IZ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function I9(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function x9(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function w9(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function T9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function U2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function C9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function IZ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function g1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function A3(_){return String(_||"").trim()||"web:default"}function f9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function b9(_={}){return W2(_)&&E3(_)}function xZ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function wZ(_={},$={}){if(!b9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=xZ({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function S9(_={}){if(!b9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,Y=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let X of N)$.clearTimeout?.(X);N.clear()},z=()=>{Z=0,wZ({window:$,document:j})},K=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},L=()=>{K();for(let X of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),K()},X);if(H!=null)N.add(H)}},Q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},B=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",Q),j.addEventListener("focusin",L,!0),B?.addEventListener?.("resize",L),B?.addEventListener?.("scroll",L),()=>{Y(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",Q),j.removeEventListener("focusin",L,!0),B?.removeEventListener?.("resize",L),B?.removeEventListener?.("scroll",L)}}function TZ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function W$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:TZ($,j)}var CZ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function R9(_){return CZ.has(String(_||"").trim())}function fZ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function v9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(fZ(_),{detail:Z})),!0}var bZ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function u9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(W2({window:j,navigator:Z}))};N();let z=bZ.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",N),()=>K.removeEventListener("change",N);if(typeof K.addListener==="function")return K.addListener(N),()=>K.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let K of z)K();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function m9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var k3="piclaw_btw_session",SZ=900,RZ="__piclawRenameBranchPromptLock__",g9=()=>{if(typeof window>"u")return null;let _=window,$=RZ,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function vZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function uZ(){let _=_$(k3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:z}}catch{return null}}var p9=K4,h9=X4,mZ=B4,c9=H4,i9=D4,y3=W4,p1=W$(e0,"getAgentContext",null),l9=W$(e0,"getAgentModels",{current:null,models:[]}),n9=W$(e0,"getActiveChatAgents",{chats:[]}),h1=W$(e0,"getChatBranches",{chats:[]}),gZ=W$(e0,"renameChatBranch",null),pZ=W$(e0,"pruneChatBranch",null),s9=W$(e0,"restoreChatBranch",null),d9=W$(e0,"getAgentQueueState",{count:0}),hZ=W$(e0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),cZ=W$(e0,"removeAgentQueueItem",{removed:!1}),iZ=W$(e0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});e_.register(l4);e_.register(_3);e_.register(e4);e_.register($3);e_.register(j3);e_.register(Z3);e_.register(Y3);e_.register(z3);e_.register(V3);n4();e_.register(r4);e_.register(a4);function lZ({locationParams:_}){let $=v_(()=>{let q=_.get("chat_jid");return q&&q.trim()?q.trim():"web:default"},[_]),j=v_(()=>{let q=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return q==="1"||q==="true"||q==="yes"},[_]),Z=v_(()=>{let q=(_.get("branch_loader")||"").trim().toLowerCase();return q==="1"||q==="true"||q==="yes"},[_]),N=v_(()=>{let q=_.get("branch_source_chat_jid");return q&&q.trim()?q.trim():$},[$,_]),[Y,z]=v("disconnected"),[K,L]=v(()=>W2()),[Q,B]=v(null),[X,H]=v(null),[M,b]=v(!1),[m,g]=v("current"),[k,w]=v([]),[p,A]=v([]),[R,d]=v(null),{agentStatus:t,setAgentStatus:o,agentDraft:__,setAgentDraft:i,agentPlan:Q_,setAgentPlan:a_,agentThought:h_,setAgentThought:r,pendingRequest:N_,setPendingRequest:$_,currentTurnId:X_,setCurrentTurnId:V_,steerQueuedTurnId:L_,setSteerQueuedTurnId:U_,lastAgentEventRef:Y_,lastSilenceNoticeRef:m_,isAgentRunningRef:T_,draftBufferRef:A_,thoughtBufferRef:y_,pendingRequestRef:q0,stalledPostIdRef:K0,currentTurnIdRef:q_,steerQueuedTurnIdRef:j_,thoughtExpandedRef:H_,draftExpandedRef:Z_}=F9(),[D_,C_]=v({}),[c_,i_]=v(null),[g_,l_]=v(null),[f_,M_]=v(!1),[k_,p_]=v(null),[Z0,x0]=v([]),[P_,k0]=v([]),[n_,b_]=v(null),[Y0,_0]=v([]),[s_,z0]=v(!1),[S_,H0]=v(()=>uZ()),[N0,E_]=v(null),$0=P(new Set),S0=v_(()=>Z0.find((q)=>q?.chat_jid===$)||null,[Z0,$]),I_=v_(()=>P_.find((q)=>q?.chat_jid===$)||S0||null,[S0,P_,$]),C=I_?.root_chat_jid||S0?.root_chat_jid||$,e=vZ(m),[O_,x_]=v(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),t_=Y0.length,D0=P(new Set),w_=P([]),R0=P(new Set),j$=P(0),Z$=P({inFlight:!1,lastAttemptAt:0,turnId:null});D0.current=new Set(Y0.map((q)=>q.row_id)),w_.current=Y0;let{notificationsEnabled:f0,notificationPermission:T$,toggleNotifications:J0,notify:l0}=U9(),[n0,v0]=v(()=>new Set),[N$,O2]=v(()=>M2("workspaceOpen",!0)),F2=P(null),{editorOpen:P0,tabStripTabs:E0,tabStripActiveId:G0,previewTabs:h0,openEditor:V0,closeEditor:w0,handleTabClose:Y$,handleTabActivate:C$,handleTabCloseOthers:e$,handleTabCloseAll:h$,handleTabTogglePin:_2,handleTabTogglePreview:s0,revealInExplorer:$2}=D9({onTabClosed:(q)=>F2.current?.(q)}),j2=P(null),z$=P(null),U$=P(null),d0=P(null),X0=e_.getDockPanes().length>0,[d_,O$]=v(!1),E$=I(()=>O$((q)=>!q),[]),c$=I(()=>{V0(d4,{label:"Terminal"})},[V0]),H2=!j&&(P0||X0&&d_),[J_,G$]=v(!1),A$=P(!1),f$=I(()=>{if(!P0||j)return;if(A$.current=d_,d_)O$(!1);G$(!0)},[P0,j,d_]),o0=I(()=>{if(!J_)return;if(G$(!1),A$.current)O$(!0),A$.current=!1},[J_]),b$=I(()=>{if(J_)o0();else f$()},[J_,f$,o0]);S(()=>{if(J_&&!P0)o0()},[J_,P0,o0]),S(()=>{let q=j2.current;if(!q)return;if(z$.current)z$.current.dispose(),z$.current=null;let V=G0;if(!V)return;let F={path:V,mode:"edit"},E=e_.resolve(F)||e_.get("editor");if(!E){q.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let y=E.mount(q,F);z$.current=y,y.onDirtyChange?.((n)=>{r_.setDirty(V,n)}),y.onSaveRequest?.(()=>{}),y.onClose?.(()=>{w0()});let f=r_.getViewState(V);if(f&&typeof y.restoreViewState==="function")requestAnimationFrame(()=>y.restoreViewState(f));if(typeof y.onViewStateChange==="function")y.onViewStateChange((n)=>{r_.saveViewState(V,n)});return requestAnimationFrame(()=>y.focus()),()=>{if(z$.current===y)y.dispose(),z$.current=null}},[G0,w0]),S(()=>{let q=(V)=>{let F=V.detail?.path;if(F)V0(F)};return document.addEventListener("office-viewer:open-tab",q),document.addEventListener("drawio:open-tab",q),document.addEventListener("csv-viewer:open-tab",q),document.addEventListener("pdf-viewer:open-tab",q),document.addEventListener("image-viewer:open-tab",q),document.addEventListener("video-viewer:open-tab",q),()=>{document.removeEventListener("office-viewer:open-tab",q),document.removeEventListener("drawio:open-tab",q),document.removeEventListener("csv-viewer:open-tab",q),document.removeEventListener("pdf-viewer:open-tab",q),document.removeEventListener("image-viewer:open-tab",q),document.removeEventListener("video-viewer:open-tab",q)}},[V0]),S(()=>{let q=U$.current;if(d0.current)d0.current.dispose(),d0.current=null;if(!q||!X0||!d_)return;let V=e_.getDockPanes()[0];if(!V){q.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=V.mount(q,{mode:"view"});return d0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(d0.current===F)F.dispose(),d0.current=null}},[X0,d_]);let[r0,u0]=v({name:"You",avatar_url:null,avatar_background:null}),L0=P(!1),m0=P(!1),a0=P(null),b0=P($),i$=P(new Map),t0=P($),c0=P(0),l$=P(0),Z2=P({}),S$=P({name:null,avatar_url:null}),A0=P({currentHashtag:null,searchQuery:null,searchOpen:!1}),F$=P(null),y$=P(null),k$=P(0),R$=P(0),n$=P(0),N2=P(null),i0=P(null),g0=P(null),H$=P(null),Y2=P(0),V$=P({title:null,avatarBase:null}),s$=P(null),P$=P(!1),[v$,z2]=v(!1),D2=P(0),M$=I(()=>{if(s$.current)clearTimeout(s$.current),s$.current=null;d(null)},[]);k9(30000),S(()=>{return C8()},[]),S(()=>{return u9(L)},[]),S(()=>{o_("workspaceOpen",String(N$))},[N$]),S(()=>{return S9()},[]),S(()=>{return()=>{M$()}},[M$]),S(()=>{if(!S_){o_(k3,"");return}o_(k3,JSON.stringify({question:S_.question||"",answer:S_.answer||"",thinking:S_.thinking||"",error:S_.error||null,status:S_.status||"success"}))},[S_]),S(()=>{Z2.current=D_||{}},[D_]),S(()=>{b0.current=$},[$]),S(()=>{S$.current=r0||{name:"You",avatar_url:null,avatar_background:null}},[r0]);let d$=I((q,V,F=null)=>{if(typeof document>"u")return;let E=(q||"").trim()||"PiClaw";if(V$.current.title!==E){document.title=E;let l=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(l&&l.getAttribute("content")!==E)l.setAttribute("content",E);V$.current.title=E}let y=document.getElementById("dynamic-favicon");if(!y)return;let f=y.getAttribute("data-default")||y.getAttribute("href")||"/favicon.ico",n=V||f,s=V?`${n}|${F||""}`:n;if(V$.current.avatarBase!==s){let l=V?`${n}${n.includes("?")?"&":"?"}v=${F||Date.now()}`:n;y.setAttribute("href",l),V$.current.avatarBase=s}},[]),G2=I((q)=>{if(!q)return;w((V)=>V.includes(q)?V:[...V,q])},[]),I$=I((q)=>{w((V)=>V.filter((F)=>F!==q))},[]);F2.current=I$;let T2=I(()=>{w([])},[]),C2=I((q)=>{if(!Array.isArray(q)){w([]);return}let V=[],F=new Set;for(let E of q){if(typeof E!=="string"||!E.trim())continue;let y=E.trim();if(F.has(y))continue;F.add(y),V.push(y)}w(V)},[]),z_=I((q,V=null,F="info",E=3000)=>{M$(),d({title:q,detail:V||null,kind:F||"info"}),s$.current=setTimeout(()=>{d((y)=>y?.title===q?null:y)},E)},[M$]),J2=I((q)=>{let V=P9(q,{editorOpen:P0,resolvePane:(F)=>e_.resolve(F)});if(V.kind==="open"){V0(V.path);return}if(V.kind==="toast")z_(V.title,V.detail,V.level)},[P0,V0,z_]),f2=I(()=>{let q=G0;if(q)G2(q)},[G0,G2]),b2=I((q)=>{if(!q)return;A((V)=>V.includes(q)?V:[...V,q])},[]),V2=I(async(q,V=null)=>{let F=(y)=>{y.scrollIntoView({behavior:"smooth",block:"center"}),y.classList.add("post-highlight"),setTimeout(()=>y.classList.remove("post-highlight"),2000)},E=document.getElementById("post-"+q);if(E){F(E);return}try{let y=typeof V==="string"&&V.trim()?V.trim():$,n=(await Q4(q,y))?.thread?.[0];if(!n)return;U0((s)=>{if(!s)return[n];if(s.some((l)=>l.id===n.id))return s;return[...s,n]}),requestAnimationFrame(()=>{setTimeout(()=>{let s=document.getElementById("post-"+q);if(s)F(s)},50)})}catch(y){console.error("[scrollToMessage] Failed to fetch message",q,y)}},[$]),S2=I((q)=>{A((V)=>V.filter((F)=>F!==q))},[]),R2=I(()=>{A([])},[]),v2=I((q)=>{if(!Array.isArray(q)){A([]);return}let V=[],F=new Set;for(let E of q){if(typeof E!=="string"||!E.trim())continue;let y=E.trim();if(F.has(y))continue;F.add(y),V.push(y)}A(V)},[]),U=I((q)=>{let V=typeof q==="string"&&q.trim()?q.trim():"Could not send your message.";z_("Compose failed",V,"error",5000)},[z_]),J=I((q={})=>{let V=Date.now();if(Y_.current=V,q.running)T_.current=!0,z0((F)=>F?F:!0);if(q.clearSilence)m_.current=0},[z0]),x=I(()=>{if(H$.current)clearTimeout(H$.current),H$.current=null;Y2.current=0},[]);S(()=>()=>{x()},[x]);let G=I(()=>{x(),o((q)=>{if(!q)return q;if(!(q.last_activity||q.lastActivity))return q;let{last_activity:V,lastActivity:F,...E}=q;return E})},[x]),O=I((q)=>{if(!q)return;x();let V=Date.now();Y2.current=V,o({type:q.type||"active",last_activity:!0}),H$.current=setTimeout(()=>{if(Y2.current!==V)return;o((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},E9)},[x]),D=I(()=>{T_.current=!1,z0(!1),Y_.current=null,m_.current=0,A_.current="",y_.current="",q0.current=null,i0.current=null,q_.current=null,j_.current=null,a0.current=null,Z$.current={inFlight:!1,lastAttemptAt:0,turnId:null},x(),V_(null),U_(null),H_.current=!1,Z_.current=!1},[x,V_,U_,z0]),T=I((q)=>{if(!f9({remainingQueueCount:q,currentTurnId:q_.current,isAgentTurnActive:s_}))return;j_.current=null,U_(null)},[s_,U_]),h=I(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),u=I(()=>({agentStatus:t,agentDraft:__?{...__}:{text:"",totalLines:0},agentPlan:Q_||"",agentThought:h_?{...h_}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:X_,steerQueuedTurnId:L_,isAgentTurnActive:Boolean(s_),followupQueueItems:Array.isArray(Y0)?Y0.map((q)=>({...q})):[],activeModel:c_,activeThinkingLevel:g_,supportsThinking:Boolean(f_),activeModelUsage:k_,contextUsage:n_,isAgentRunning:Boolean(T_.current),wasAgentActive:Boolean(m0.current),draftBuffer:A_.current||"",thoughtBuffer:y_.current||"",lastAgentEvent:Y_.current||null,lastSilenceNotice:m_.current||0,lastAgentResponse:i0.current||null,currentTurnIdRef:q_.current||null,steerQueuedTurnIdRef:j_.current||null,thoughtExpanded:Boolean(H_.current),draftExpanded:Boolean(Z_.current),agentStatusRef:a0.current||null,silentRecovery:{...Z$.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[c_,k_,g_,__,Q_,t,h_,n_,X_,Y0,s_,N_,L_,f_]),a=I((q)=>{let V=q||h();x(),T_.current=Boolean(V.isAgentRunning),m0.current=Boolean(V.wasAgentActive),z0(Boolean(V.isAgentTurnActive)),Y_.current=V.lastAgentEvent||null,m_.current=Number(V.lastSilenceNotice||0),A_.current=V.draftBuffer||"",y_.current=V.thoughtBuffer||"",q0.current=V.pendingRequest||null,i0.current=V.lastAgentResponse||null,q_.current=V.currentTurnIdRef||null,j_.current=V.steerQueuedTurnIdRef||null,a0.current=V.agentStatusRef||null,Z$.current=V.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},H_.current=Boolean(V.thoughtExpanded),Z_.current=Boolean(V.draftExpanded),o(V.agentStatus||null),i(V.agentDraft?{...V.agentDraft}:{text:"",totalLines:0}),a_(V.agentPlan||""),r(V.agentThought?{...V.agentThought}:{text:"",totalLines:0}),$_(V.pendingRequest||null),V_(V.currentTurnId||null),U_(V.steerQueuedTurnId||null),_0(Array.isArray(V.followupQueueItems)?V.followupQueueItems.map((F)=>({...F})):[]),i_(V.activeModel||null),l_(V.activeThinkingLevel||null),M_(Boolean(V.supportsThinking)),p_(V.activeModelUsage??null),b_(V.contextUsage??null)},[x,h,V_,_0,z0,U_]),B_=I((q)=>{if(!q)return;if(q_.current===q)return;q_.current=q,Z$.current={inFlight:!1,lastAttemptAt:0,turnId:q},V_(q),j_.current=null,U_(null),A_.current="",y_.current="",i({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),$_(null),q0.current=null,i0.current=null,H_.current=!1,Z_.current=!1},[V_,U_]),M0=I((q)=>{if(typeof document<"u"){let l=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&l)return}let V=i0.current;if(!V||!V.post)return;if(q&&V.turnId&&V.turnId!==q)return;let F=V.post;if(F.id&&N2.current===F.id)return;let E=String(F?.data?.content||"").trim();if(!E)return;N2.current=F.id||N2.current,i0.current=null;let y=E.replace(/\s+/g," ").slice(0,200),f=Z2.current||{},s=(F?.data?.agent_id?f[F.data.agent_id]:null)?.name||"Pi";l0(s,y)},[l0]),F_=I(async(q,V)=>{if(q!=="thought"&&q!=="draft")return;let F=q_.current;if(q==="thought"){if(H_.current=V,F)try{await i9(F,"thought",V)}catch(E){console.warn("Failed to update thought visibility:",E)}if(!V)return;try{let E=F?await c9(F,"thought"):null;if(E?.text)y_.current=E.text;r((y)=>({...y||{text:"",totalLines:0},fullText:y_.current||y?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:y?.totalLines||0}))}catch(E){console.warn("Failed to fetch full thought:",E)}return}if(Z_.current=V,F)try{await i9(F,"draft",V)}catch(E){console.warn("Failed to update draft visibility:",E)}if(!V)return;try{let E=F?await c9(F,"draft"):null;if(E?.text)A_.current=E.text;i((y)=>({...y||{text:"",totalLines:0},fullText:A_.current||y?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:y?.totalLines||0}))}catch(E){console.warn("Failed to fetch full draft:",E)}},[]),D$=P(null),x$=I(()=>{let q=F$.current;if(!q)return;if(!(Math.abs(q.scrollTop)>150))q.scrollTop=0},[]);D$.current=x$;let E2=I((q)=>{let V=F$.current;if(!V||typeof q!=="function"){q?.();return}let{currentHashtag:F,searchQuery:E,searchOpen:y}=A0.current||{},f=!((E||y)&&!F),n=f?V.scrollHeight-V.scrollTop:V.scrollTop;q(),requestAnimationFrame(()=>{let s=F$.current;if(!s)return;if(f){let l=Math.max(s.scrollHeight-n,0);s.scrollTop=l}else{let l=Math.max(s.scrollHeight-s.clientHeight,0),c=Math.min(n,l);s.scrollTop=c}})},[]),q$=I((q)=>{let V=F$.current;if(!V||typeof q!=="function"){q?.();return}let F=V.scrollTop;q(),requestAnimationFrame(()=>{let E=F$.current;if(!E)return;let y=Math.max(E.scrollHeight-E.clientHeight,0);E.scrollTop=Math.min(F,y)})},[]),c1="Queued as a follow-up (one-at-a-time).",q2="⁣",T0=I((q)=>{if(!q||!Array.isArray(q))return q;let V=D0.current,F=new Set(V),E=q.filter((y)=>{if(F.has(y?.id))return!1;if(y?.data?.is_bot_message){let f=y?.data?.content;if(f===c1||f===q2)return!1}return!0});return E.length===q.length?q:E},[]),{posts:u$,setPosts:U0,hasMore:i1,setHasMore:A2,hasMoreRef:o$,loadPosts:Q0,refreshTimeline:B0,loadMore:P3,loadMoreRef:u2}=O9({preserveTimelineScroll:E2,preserveTimelineScrollTop:q$,chatJid:$}),y2=v_(()=>T0(u$),[u$,Y0,T0]),z1=I(()=>{let q=K0.current;if(!q)return;U0((V)=>V?V.filter((F)=>F.id!==q):V),K0.current=null},[U0]),{handleSplitterMouseDown:o9,handleSplitterTouchStart:r9,handleEditorSplitterMouseDown:a9,handleEditorSplitterTouchStart:t9,handleDockSplitterMouseDown:e9,handleDockSplitterTouchStart:_5}=H9({appShellRef:y$,sidebarWidthRef:k$,editorWidthRef:R$,dockHeightRef:n$}),M3=I(()=>{if(!T_.current)return;T_.current=!1,m_.current=0,Y_.current=null,q_.current=null,V_(null),H_.current=!1,Z_.current=!1;let q=(A_.current||"").trim();if(A_.current="",y_.current="",i({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),$_(null),q0.current=null,i0.current=null,!q){o({type:"error",title:"Response stalled - No content received"});return}let F=`${q}${`

⚠️ Response may be incomplete - the model stopped responding`}`,E=Date.now(),y=new Date().toISOString(),f={id:E,timestamp:y,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};K0.current=E,U0((n)=>n?Y1([...n,f]):[f]),D$.current?.(),o(null)},[V_]);S(()=>{A0.current={currentHashtag:Q,searchQuery:X,searchOpen:M}},[Q,X,M]);let R_=I(()=>{let q=++j$.current,V=$;d9(V).then((F)=>{if(q!==j$.current)return;if(b0.current!==V)return;let E=R0.current,y=Array.isArray(F?.items)?F.items.map((f)=>({...f})).filter((f)=>!E.has(f.row_id)):[];if(y.length){_0((f)=>{if(f.length===y.length&&f.every((n,s)=>n.row_id===y[s].row_id))return f;return y});return}E.clear(),T(0),_0((f)=>f.length===0?f:[])}).catch(()=>{if(q!==j$.current)return;if(b0.current!==V)return;_0((F)=>F.length===0?F:[])})},[T,$,_0]),K$=I(async()=>{let q=$;try{let V=await p1(q);if(b0.current!==q)return;if(V)b_(V)}catch(V){if(b0.current!==q)return;console.warn("Failed to fetch agent context:",V)}},[$]),Q$=I(async()=>{let q=$;try{let V=await y3(q);if(b0.current!==q)return null;if(!V||V.status!=="active"||!V.data){if(m0.current){let{currentHashtag:y,searchQuery:f,searchOpen:n}=A0.current||{};if(!y&&!f&&!n)B0()}return m0.current=!1,D(),a0.current=null,o(null),i({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),$_(null),q0.current=null,V??null}m0.current=!0;let F=V.data;a0.current=F;let E=F.turn_id||F.turnId;if(E)B_(E);if(J({running:!0,clearSilence:!0}),G(),o(F),V.thought&&V.thought.text)r((y)=>{if(y&&y.text&&y.text.length>=V.thought.text.length)return y;return y_.current=V.thought.text,{text:V.thought.text,totalLines:V.thought.totalLines||0}});if(V.draft&&V.draft.text)i((y)=>{if(y&&y.text&&y.text.length>=V.draft.text.length)return y;return A_.current=V.draft.text,{text:V.draft.text,totalLines:V.draft.totalLines||0}});return V}catch(V){return console.warn("Failed to fetch agent status:",V),null}},[D,G,J,B0,B_]),l1=I(async()=>{if(!T_.current)return null;if(q0.current)return null;let q=q_.current||null,V=Z$.current,F=Date.now();if(V.inFlight)return null;if(V.turnId===q&&F-V.lastAttemptAt<D3)return null;V.inFlight=!0,V.lastAttemptAt=F,V.turnId=q;try{let{currentHashtag:E,searchQuery:y,searchOpen:f}=A0.current||{};if(!E&&!y&&!f)await B0();return await R_(),await Q$()}finally{V.inFlight=!1}},[Q$,R_,B0]);S(()=>{let q=Math.min(1000,Math.max(100,Math.floor(H3/2))),V=setInterval(()=>{if(!T_.current)return;if(q0.current)return;let F=Y_.current;if(!F)return;let E=Date.now(),y=E-F,f=e2(a0.current);if(y>=J9){if(!f)o({type:"waiting",title:"Re-syncing after a quiet period…"});l1();return}if(y>=H3){if(E-m_.current>=D3){if(!f){let n=Math.floor(y/1000);o({type:"waiting",title:`Waiting for model… No events for ${n}s`})}m_.current=E,l1()}}},q);return()=>clearInterval(V)},[l1]);let $5=I((q)=>{if(z(q),q!=="connected"){o(null),i({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),$_(null),q0.current=null,D();return}if(!L0.current){L0.current=!0;let{currentHashtag:y,searchQuery:f,searchOpen:n}=A0.current||{};if(!y&&!f&&!n)B0();Q$(),R_(),K$();return}let{currentHashtag:V,searchQuery:F,searchOpen:E}=A0.current;if(!V&&!F&&!E)B0();Q$(),R_(),K$()},[D,B0,Q$,R_,K$]),j5=I(async(q)=>{B(q),U0(null),await Q0(q)},[Q0]),Z5=I(async()=>{B(null),H(null),U0(null),await Q0()},[Q0]),N5=I(async(q,V=m)=>{if(!q||!q.trim())return;let F=V==="root"||V==="all"?V:"current";g(F),H(q.trim()),B(null),U0(null);try{let E=await p9(q.trim(),50,0,$,F,C);U0(E.results),A2(!1)}catch(E){console.error("Failed to search:",E),U0([])}},[$,C,m]),Y5=I(()=>{b(!0),H(null),B(null),g("current"),U0([])},[]),z5=I(()=>{b(!1),H(null),Q0()},[Q0]),sZ=I(()=>{},[]),n1=!Q&&!X&&!M,G5=I(async(q)=>{if(!q)return;let V=q.id,F=typeof q?.chat_jid==="string"&&q.chat_jid.trim()?q.chat_jid.trim():$,E=y2?.filter((f)=>f?.data?.thread_id===V&&f?.id!==V).length||0;if(E>0){if(!window.confirm(`Delete this message and its ${E} replies?`))return}let y=(f)=>{if(!f.length)return;v0((s)=>{let l=new Set(s);return f.forEach((c)=>l.add(c)),l}),setTimeout(()=>{if(q$(()=>{U0((s)=>s?s.filter((l)=>!f.includes(l.id)):s)}),v0((s)=>{let l=new Set(s);return f.forEach((c)=>l.delete(c)),l}),o$.current)u2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let f=await h9(V,E>0,F);if(f?.ids?.length)y(f.ids)}catch(f){let n=f?.message||"";if(E===0&&n.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let l=await h9(V,!0,F);if(l?.ids?.length)y(l.ids);return}console.error("Failed to delete post:",f),alert(`Failed to delete message: ${n}`)}},[$,y2,q$]),I3=I(async()=>{try{let q=await mZ();C_(A9(q));let V=q?.user||{};u0((E)=>{let y=typeof V.name==="string"&&V.name.trim()?V.name.trim():"You",f=typeof V.avatar_url==="string"?V.avatar_url.trim():null,n=typeof V.avatar_background==="string"&&V.avatar_background.trim()?V.avatar_background.trim():null;if(E.name===y&&E.avatar_url===f&&E.avatar_background===n)return E;return{name:y,avatar_url:f,avatar_background:n}});let F=(q?.agents||[]).find((E)=>E.id==="default");d$(F?.name,F?.avatar_url)}catch(q){console.warn("Failed to load agents:",q)}try{let q=$,V=await p1(q);if(b0.current!==q)return;if(V)b_(V)}catch{}},[d$,$]);S(()=>{I3();let q=I2("sidebarWidth",null),V=Number.isFinite(q)?Math.min(Math.max(q,160),600):280;if(k$.current=V,y$.current)y$.current.style.setProperty("--sidebar-width",`${V}px`)},[I3]);let m2=s_||t!==null,x3=I((q)=>{if(!q||typeof q!=="object")return;let V=q.agent_id;if(!V)return;let{agent_name:F,agent_avatar:E}=q;if(!F&&E===void 0)return;let y=Z2.current?.[V]||{id:V},f=y.name||null,n=y.avatar_url??y.avatarUrl??y.avatar??null,s=!1,l=!1;if(F&&F!==y.name)f=F,l=!0;if(E!==void 0){let c=typeof E==="string"?E.trim():null,G_=typeof n==="string"?n.trim():null,W_=c||null;if(W_!==(G_||null))n=W_,s=!0}if(!l&&!s)return;if(C_((c)=>{let W_={...c[V]||{id:V}};if(l)W_.name=f;if(s)W_.avatar_url=n;return{...c,[V]:W_}}),V==="default")d$(f,n,s?Date.now():null)},[d$]),w3=I((q)=>{if(!q||typeof q!=="object")return;let V=q.user_name??q.userName,F=q.user_avatar??q.userAvatar,E=q.user_avatar_background??q.userAvatarBackground;if(V===void 0&&F===void 0&&E===void 0)return;u0((y)=>{let f=typeof V==="string"&&V.trim()?V.trim():y.name||"You",n=F===void 0?y.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,s=E===void 0?y.avatar_background:typeof E==="string"&&E.trim()?E.trim():null;if(y.name===f&&y.avatar_url===n&&y.avatar_background===s)return y;return{name:f,avatar_url:n,avatar_background:s}})},[]),s1=I((q)=>{if(!q||typeof q!=="object")return;let V=q.model??q.current;if(V!==void 0)i_(V);if(q.thinking_level!==void 0)l_(q.thinking_level??null);if(q.supports_thinking!==void 0)M_(Boolean(q.supports_thinking));if(q.provider_usage!==void 0)p_(q.provider_usage??null)},[]),g2=I(()=>{let q=$;l9(q).then((V)=>{if(b0.current!==q)return;if(V)s1(V)}).catch(()=>{})},[s1,$]),C0=I(()=>{let q=$,V=(F)=>Array.isArray(F)?F.filter((E)=>E&&typeof E.chat_jid==="string"&&typeof E.agent_name==="string"&&E.agent_name.trim()):[];Promise.all([n9().catch(()=>({chats:[]})),h1(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,E])=>{if(b0.current!==q)return;let y=V(F?.chats),f=V(E?.chats);if(f.length===0){x0(y);return}let n=new Map(y.map((l)=>[l.chat_jid,l])),s=f.map((l)=>{let c=n.get(l.chat_jid);return c?{...l,...c,is_active:c.is_active??l.is_active}:l});s.sort((l,c)=>{if(l.chat_jid===q&&c.chat_jid!==q)return-1;if(c.chat_jid===q&&l.chat_jid!==q)return 1;let G_=Boolean(l.archived_at),W_=Boolean(c.archived_at);if(G_!==W_)return G_?1:-1;if(Boolean(l.is_active)!==Boolean(c.is_active))return l.is_active?-1:1;return String(l.chat_jid).localeCompare(String(c.chat_jid))}),x0(s)}).catch(()=>{if(b0.current!==q)return;x0([])})},[$]),I0=I(()=>{h1(C).then((q)=>{let V=Array.isArray(q?.chats)?q.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];k0(V)}).catch(()=>{})},[C]),V5=I((q)=>{let V=q?.row_id;if(V==null)return;R0.current.add(V),_0((F)=>F.filter((E)=>E?.row_id!==V)),hZ(V,A3($)).then(()=>{R_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),z_("Failed to steer message","The queued message could not be sent as steering.","warning"),R0.current.delete(V),R_()})},[$,R_,_0,z_]),q5=I((q)=>{let V=q?.row_id;if(V==null)return;let F=w_.current.filter((E)=>E?.row_id!==V).length;R0.current.add(V),T(F),_0((E)=>E.filter((y)=>y?.row_id!==V)),cZ(V,A3($)).then(()=>{R_()}).catch((E)=>{console.warn("[queue] Failed to remove queued item:",E),z_("Failed to remove message","The queued message could not be removed.","warning"),R0.current.delete(V),R_()})},[T,$,R_,_0,z_]),p2=I((q)=>{if(!q||typeof q!=="object")return;if(C0(),I0(),q?.queued==="followup"||q?.queued==="steer"){R_();return}let V=q?.command;if(V&&typeof V==="object"&&(V?.queued_followup||V?.queued_steer))R_()},[C0,I0,R_]),d1=I(()=>{if(g0.current)g0.current.abort(),g0.current=null;H0(null)},[]),G1=I(async(q)=>{let V=String(q||"").trim();if(!V)return z_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(g0.current)g0.current.abort();let F=new AbortController;g0.current=F,H0({question:V,answer:"",thinking:"",error:null,model:null,status:"running"});try{let E=await iZ(V,{signal:F.signal,chatJid:h8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(y,f)=>{if(y==="side_prompt_start")H0((n)=>n?{...n,status:"running"}:n)},onThinkingDelta:(y)=>{H0((f)=>f?{...f,thinking:`${f.thinking||""}${y||""}`}:f)},onTextDelta:(y)=>{H0((f)=>f?{...f,answer:`${f.answer||""}${y||""}`}:f)}});if(g0.current!==F)return!0;H0((y)=>y?{...y,answer:E?.result||y.answer||"",thinking:E?.thinking||y.thinking||"",model:E?.model||null,status:"success",error:null}:y)}catch(E){if(F.signal.aborted)return!0;H0((y)=>y?{...y,status:"error",error:E?.payload?.error||E?.message||"BTW request failed."}:y)}finally{if(g0.current===F)g0.current=null}return!0},[$,z_]),K5=I(async({content:q})=>{let V=p8(q);if(!V)return!1;if(V.type==="help")return z_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(V.type==="clear")return d1(),z_("BTW cleared","Closed the side conversation panel.","info"),!0;if(V.type==="ask")return await G1(V.question),!0;return!1},[d1,G1,z_]),Q5=I(()=>{if(S_?.question)G1(S_.question)},[S_,G1]),X5=I(async()=>{let q=l8(S_);if(!q)return;try{let V=await Q2("default",q,null,[],m2?"queue":null,$);p2(V),z_(V?.queued==="followup"?"BTW queued":"BTW injected",V?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(V){z_("BTW inject failed",V?.message||"Could not inject BTW answer into chat.","warning")}},[S_,p2,m2,z_]),T3=I(async(q=null)=>{let[V,F,E,y,f,n,s]=await Promise.allSettled([y3($),p1($),d9($),l9($),n9(),h1(C),K2(20,null,$)]),l=V.status==="fulfilled"?V.value:null,c=F.status==="fulfilled"?F.value:null,G_=E.status==="fulfilled"?E.value:null,W_=y.status==="fulfilled"?y.value:null,p0=f.status==="fulfilled"?f.value:null,W0=n.status==="fulfilled"?n.value:null,w$=s.status==="fulfilled"?s.value:null,X$=Array.isArray(w$?.posts)?w$.posts:Array.isArray(u$)?u$:[],S3=X$.length?X$[X$.length-1]:null,D5=X$.filter((t1)=>t1?.data?.is_bot_message).length,J5=X$.filter((t1)=>!t1?.data?.is_bot_message).length,R3=Number(G_?.count??w_.current.length??0)||0,v3=Array.isArray(p0?.chats)?p0.chats.length:Z0.length,E5=Array.isArray(W0?.chats)?W0.chats.length:P_.length,u3=Number(c?.percent??n_?.percent??0)||0,A5=Number(c?.tokens??n_?.tokens??0)||0,y5=Number(c?.contextWindow??n_?.contextWindow??0)||0,k5=W_?.current??c_??null,P5=W_?.thinking_level??g_??null,M5=W_?.supports_thinking??f_,I5=l?.status||(s_?"active":"idle"),x5=l?.data?.type||l?.type||null;return{generatedAt:new Date().toISOString(),request:q,chat:{currentChatJid:$,rootChatJid:C,activeChats:v3,branches:E5},agent:{status:I5,phase:x5,running:Boolean(s_)},model:{current:k5,thinkingLevel:P5,supportsThinking:Boolean(M5)},context:{tokens:A5,contextWindow:y5,percent:u3},queue:{count:R3},timeline:{loadedPosts:X$.length,botPosts:D5,userPosts:J5,latestPostId:S3?.id??null,latestTimestamp:S3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(u3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,R3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,v3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,X$.length*5))}]}},[Z0,c_,g_,n_,P_,$,C,s_,u$,f_]),h2=I(()=>{g2(),C0(),I0(),R_(),K$()},[g2,C0,I0,R_,K$]);S(()=>{h2();let q=setInterval(()=>{g2(),C0(),I0(),R_()},60000);return()=>clearInterval(q)},[h2,g2,C0,I0,R_]),S(()=>{I0()},[I0]),S(()=>{let q=!1;U0(null);let V=()=>{if(q)return;requestAnimationFrame(()=>{if(q)return;x$()})};if(Q)return Q0(Q),()=>{q=!0};if(X)return p9(X,50,0,$,m,C).then((F)=>{if(q)return;U0(F.results),A2(!1)}).catch((F)=>{if(q)return;console.error("Failed to search:",F),U0([]),A2(!1)}),()=>{q=!0};return Q0().then(()=>{V()}).catch((F)=>{if(q)return;console.error("Failed to load timeline:",F)}),()=>{q=!0}},[$,Q,X,m,C,Q0,x$,A2,U0]),S(()=>{let q=t0.current||$;i$.current.set(q,u())},[$,u]),S(()=>{let q=t0.current||$;if(q===$)return;i$.current.set(q,u()),t0.current=$,R0.current.clear(),a(i$.current.get($)||null),R_(),Q$(),K$()},[$,Q$,K$,R_,a,u]);let L5=I(()=>{let{currentHashtag:q,searchQuery:V,searchOpen:F}=A0.current||{};if(!q&&!V&&!F)B0();h2()},[h2,B0]),c2=I((q,V="streaming")=>{let F=r8({...q,...q&&q.status?{}:{status:V}});if(!F)return;let E=y0(F);if(E&&$0.current.has(E))return;E_((y)=>{let f=y0(y),n=Boolean(E&&f&&E===f),s={...n&&y?.artifact?y.artifact:{},...F.artifact||{}};return{...n&&y?y:{},...F,artifact:s,source:"live",originChatJid:F.originChatJid||$,openedAt:n&&y?.openedAt?y.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[$]),o1=I((q,V)=>{let F=V?.turn_id,E=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null,f=E?E===$:q==="connected"||q==="workspace_update";if(f)x3(V),w3(V);if(q==="ui_theme"){f8(V);return}if(q==="generated_widget_open"){if(!f)return;if(F&&!q_.current)B_(F);c2(V,"loading");return}if(q==="generated_widget_delta"){if(!f)return;if(F&&!q_.current)B_(F);c2(V,"streaming");return}if(q==="generated_widget_final"){if(!f)return;if(F&&!q_.current)B_(F);c2(V,"final");return}if(q==="generated_widget_error"){if(!f)return;c2(V,"error");return}if(q==="generated_widget_close"){if(!f)return;let c=y0(V);E_((G_)=>{if(!G_||G_?.source!=="live")return G_;let W_=y0(G_);if(c&&W_&&c!==W_)return G_;return null});return}if(q?.startsWith("agent_")){if(!(q==="agent_draft_delta"||q==="agent_thought_delta"||q==="agent_draft"||q==="agent_thought"))G()}if(q==="connected"){o(null),i({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),$_(null),q0.current=null,D();let c=$;y3(c).then((W0)=>{if(b0.current!==c)return;if(!W0||W0.status!=="active"||!W0.data)return;let w$=W0.data,X$=w$.turn_id||w$.turnId;if(X$)B_(X$);if(J({clearSilence:!0}),O(w$),W0.thought&&W0.thought.text)y_.current=W0.thought.text,r({text:W0.thought.text,totalLines:W0.thought.totalLines||0});if(W0.draft&&W0.draft.text)A_.current=W0.draft.text,i({text:W0.draft.text,totalLines:W0.draft.totalLines||0})}).catch((W0)=>{console.warn("Failed to fetch agent status:",W0)});let{currentHashtag:G_,searchQuery:W_,searchOpen:p0}=A0.current||{};if(!G_&&!W_&&!p0)B0();h2();return}if(q==="agent_status"){if(!f){if(V?.type==="done"||V?.type==="error")C0(),I0();return}if(V.type==="done"||V.type==="error"){if(F&&q_.current&&F!==q_.current)return;if(V.type==="done"){M0(F||q_.current);let{currentHashtag:c,searchQuery:G_,searchOpen:W_}=A0.current||{};if(!c&&!G_&&!W_)B0();if(V.context_usage)b_(V.context_usage)}if(m0.current=!1,D(),R0.current.clear(),C0(),R_(),i({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),$_(null),V.type==="error")o({type:"error",title:V.title||"Agent error"}),setTimeout(()=>o(null),8000);else o(null)}else{if(F)B_(F);if(J({running:!0,clearSilence:!0}),V.type==="thinking")A_.current="",y_.current="",i({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0});a0.current=V,o((c)=>{if(c&&c.type===V.type&&c.title===V.title)return c;return V})}return}if(q==="agent_steer_queued"){if(!f)return;if(F&&q_.current&&F!==q_.current)return;let c=F||q_.current;if(!c)return;j_.current=c,U_(c);return}if(q==="agent_followup_queued"){if(!f)return;let c=V?.row_id,G_=V?.content;if(c!=null&&typeof G_==="string"&&G_.trim())_0((W_)=>{if(W_.some((p0)=>p0?.row_id===c))return W_;return[...W_,{row_id:c,content:G_,timestamp:V?.timestamp||null,thread_id:V?.thread_id??null}]});R_();return}if(q==="agent_followup_consumed"){if(!f)return;let c=V?.row_id;if(c!=null){let W0=w_.current.filter((w$)=>w$.row_id!==c).length;T(W0),_0((w$)=>w$.filter((X$)=>X$.row_id!==c))}R_();let{currentHashtag:G_,searchQuery:W_,searchOpen:p0}=A0.current||{};if(!G_&&!W_&&!p0)B0();return}if(q==="agent_followup_removed"){if(!f)return;let c=V?.row_id;if(c!=null){let G_=w_.current.filter((W_)=>W_.row_id!==c).length;R0.current.add(c),T(G_),_0((W_)=>W_.filter((p0)=>p0.row_id!==c))}R_();return}if(q==="agent_draft_delta"){if(!f)return;if(F&&q_.current&&F!==q_.current)return;if(F&&!q_.current)B_(F);if(J({running:!0,clearSilence:!0}),V?.reset)A_.current="";if(V?.delta)A_.current+=V.delta;let c=Date.now();if(!c0.current||c-c0.current>=100){c0.current=c;let G_=A_.current,W_=J3(G_);if(Z_.current)i((p0)=>({text:p0?.text||"",totalLines:W_,fullText:G_}));else i({text:G_,totalLines:W_})}return}if(q==="agent_draft"){if(!f)return;if(F&&q_.current&&F!==q_.current)return;if(F&&!q_.current)B_(F);J({running:!0,clearSilence:!0});let c=V.text||"",G_=V.mode||(V.kind==="plan"?"replace":"append"),W_=Number.isFinite(V.total_lines)?V.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(V.kind==="plan")if(G_==="replace")a_(c);else a_((p0)=>(p0||"")+c);else if(!Z_.current)A_.current=c,i({text:c,totalLines:W_});return}if(q==="agent_thought_delta"){if(!f)return;if(F&&q_.current&&F!==q_.current)return;if(F&&!q_.current)B_(F);if(J({running:!0,clearSilence:!0}),V?.reset)y_.current="";if(typeof V?.delta==="string")y_.current+=V.delta;let c=Date.now();if(H_.current&&(!l$.current||c-l$.current>=100)){l$.current=c;let G_=y_.current;r((W_)=>({text:W_?.text||"",totalLines:J3(G_),fullText:G_}))}return}if(q==="agent_thought"){if(!f)return;if(F&&q_.current&&F!==q_.current)return;if(F&&!q_.current)B_(F);J({running:!0,clearSilence:!0});let c=V.text||"",G_=Number.isFinite(V.total_lines)?V.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!H_.current)y_.current=c,r({text:c,totalLines:G_});return}if(q==="model_changed"){if(!f)return;if(V?.model!==void 0)i_(V.model);if(V?.thinking_level!==void 0)l_(V.thinking_level??null);if(V?.supports_thinking!==void 0)M_(Boolean(V.supports_thinking));let c=$;p1(c).then((G_)=>{if(b0.current!==c)return;if(G_)b_(G_)}).catch(()=>{});return}if(q==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:V}));return}if(R9(q)){if(!f)return;if(v9(q,V),q==="extension_ui_notify"&&typeof V?.message==="string")z_(V.message,null,V?.type||"info");if(q==="extension_ui_error"&&typeof V?.error==="string")z_("Extension UI error",V.error,"error",5000);return}let{currentHashtag:n,searchQuery:s,searchOpen:l}=A0.current;if(q==="agent_response"){if(!f)return;z1(),i0.current={post:V,turnId:q_.current}}if(!n&&!s&&!l&&f&&(q==="new_post"||q==="new_reply"||q==="agent_response"))U0((c)=>{if(!c)return[V];if(c.some((G_)=>G_.id===V.id))return c;return[...c,V]}),D$.current?.();if(q==="interaction_updated"){if(!f)return;if(n||s||l)return;U0((c)=>{if(!c)return c;if(!c.some((G_)=>G_.id===V.id))return c;return c.map((G_)=>G_.id===V.id?V:G_)})}if(q==="interaction_deleted"){if(!f)return;if(n||s||l)return;let c=V?.ids||[];if(c.length){if(q$(()=>{U0((G_)=>G_?G_.filter((W_)=>!c.includes(W_.id)):G_)}),o$.current)u2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[c2,D,G,$,u2,J,M0,q$,C0,I0,B0,z1,B_,O,x3,w3,g2,R_,_0]);S(()=>{if(typeof window>"u")return;let q=window.__PICLAW_TEST_API||{};return q.emit=o1,q.reset=()=>{z1(),D(),o(null),i({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),$_(null)},q.finalize=()=>M3(),window.__PICLAW_TEST_API=q,()=>{if(window.__PICLAW_TEST_API===q)window.__PICLAW_TEST_API=void 0}},[D,M3,o1,z1]),W9({handleSseEvent:o1,handleConnectionStatusChange:$5,loadPosts:Q0,onWake:L5,chatJid:$}),S(()=>{if(!y2||y2.length===0)return;let q=location.hash;if(!q||!q.startsWith("#msg-"))return;let V=q.slice(5);V2(V),history.replaceState(null,"",location.pathname+location.search)},[y2,V2]);let r1=t!==null;S(()=>{if(Y!=="connected")return;let V=setInterval(()=>{let{currentHashtag:F,searchQuery:E,searchOpen:y}=A0.current||{},f=!F&&!E&&!y;if(r1){if(f)B0();R_(),Q$(),K$()}else{if(f)B0();Q$(),K$()}},r1?15000:60000);return()=>clearInterval(V)},[Y,r1,Q$,K$,R_,B0]),S(()=>{return m9(()=>{Q$(),K$(),R_()})},[Q$,K$,R_]);let B5=I(()=>{O2((q)=>!q)},[]),C3=I((q)=>{if(typeof window>"u")return;let V=String(q||"").trim();if(!V||V===$)return;let F=U2(window.location.href,V,{chatOnly:j});window.location.assign(F)},[j,$]),f3=I(async()=>{if(typeof window>"u"||!I_?.chat_jid)return;let q=Date.now(),V=g9();if(!V)return;if(P$.current||q<D2.current||V.inFlight||q<V.cooldownUntil)return;P$.current=!0,V.inFlight=!0,z2(!0);try{let F=I_.display_name||I_.agent_name||"",E=window.prompt("Agent name",F);if(E===null)return;let y=E.trim(),f=y.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||I_.agent_name||"",n=await gZ(I_.chat_jid,{displayName:y,agentName:f});await Promise.allSettled([C0(),I0()]);let s=n?.branch?.agent_name||f||I_.agent_name||"",l=n?.branch?.display_name||y||s;z_("Branch renamed",`${l} (@${s})`,"info",3500)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not rename branch."),y=/already in use/i.test(E||"")?`${E} Switch to or restore that existing session from the session manager.`:E;z_("Could not rename branch",y||"Could not rename branch.","warning",5000)}finally{P$.current=!1,z2(!1);let F=Date.now()+SZ;D2.current=F;let E=g9();if(E)E.inFlight=!1,E.cooldownUntil=F}},[I_,C0,I0,z2,z_]),b3=I(async(q=null)=>{if(typeof window>"u")return;let V=typeof q==="string"&&q.trim()?q.trim():"",F=typeof $==="string"&&$.trim()?$.trim():"",E=V||I_?.chat_jid||F;if(!E){z_("Could not prune branch","No active session is selected yet.","warning",4000);return}let y=(I_?.chat_jid===E?I_:null)||P_.find((l)=>l?.chat_jid===E)||Z0.find((l)=>l?.chat_jid===E)||null;if(y?.chat_jid===(y?.root_chat_jid||y?.chat_jid)){z_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let n=`@${y?.agent_name||E}${y?.chat_jid?` — ${y.chat_jid}`:""}`;if(!window.confirm(`Prune ${n}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await pZ(E),await Promise.allSettled([C0(),I0()]);let l=y?.root_chat_jid||"web:default";z_("Branch pruned",`${n} has been archived.`,"info",3000);let c=U2(window.location.href,l,{chatOnly:j});window.location.assign(c)}catch(l){let c=l instanceof Error?l.message:String(l||"Could not prune branch.");z_("Could not prune branch",c||"Could not prune branch.","warning",5000)}},[Z0,j,I_,P_,$,C0,I0,z_]),W5=I(async(q)=>{let V=typeof q==="string"?q.trim():"";if(!V||typeof s9!=="function")return;try{let F=await s9(V);await Promise.allSettled([C0(),I0()]);let E=F?.branch,y=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():V,f=typeof E?.agent_name==="string"&&E.agent_name.trim()?`@${E.agent_name.trim()}`:y;z_("Branch restored",`Restored ${f}.`,"info",3200);let n=U2(window.location.href,y,{chatOnly:j});window.location.assign(n)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not restore branch.");z_("Could not restore branch",E||"Could not restore branch.","warning",5000)}},[j,C0,I0,z_]);S(()=>{if(!Z||typeof window>"u")return;let q=!1;return(async()=>{try{x_({status:"running",message:"Preparing a new chat branch…"});let V=await s2(N);if(q)return;let F=V?.branch,E=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let y=U2(window.location.href,E,{chatOnly:!0});window.location.replace(y)}catch(V){if(q)return;x_({status:"error",message:g1(V)})}})(),()=>{q=!0}},[Z,N]);let U5=I((q)=>{if(!q||typeof q!=="object")return;let V=y0(q);if(V)$0.current.delete(V);E_({...q,openedAt:new Date().toISOString()})},[]),i2=I(()=>{E_((q)=>{let V=y0(q);if(q?.source==="live"&&V)$0.current.add(V);return null})},[]),a1=I((q,V)=>{let F=typeof q?.kind==="string"?q.kind:"",E=y0(V);if(console.debug("[widget-host] handleFloatingWidgetEvent",{kind:F,sessionKey:E,widgetId:V?.widgetId||null,payload:q?.payload||null}),!F||!E)return;if(F==="widget.close"){i2();return}if(F==="widget.submit"){let y=_6(q?.payload),f=$6(q?.payload),n=new Date().toISOString();if(E_((s)=>{let l=y0(s);if(!s||l!==E)return s;return{...s,runtimeState:{...s.runtimeState||{},lastEventKind:F,lastEventPayload:q?.payload||null,lastSubmitAt:n,lastHostUpdate:{type:"submit_pending",submittedAt:n,preview:y||null}}}}),!y){if(z_("Widget submission received","The widget submitted data without a message payload yet.","info",3500),f)i2();return}(async()=>{try{let s=await Q2("default",y,null,[],m2?"queue":null,$);if(p2(s),E_((l)=>{let c=y0(l);if(!l||c!==E)return l;return{...l,runtimeState:{...l.runtimeState||{},lastHostUpdate:{type:s?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:n,preview:y,queued:s?.queued||null}}}}),z_(s?.queued==="followup"?"Widget submission queued":"Widget submission sent",s?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),f)i2()}catch(s){E_((l)=>{let c=y0(l);if(!l||c!==E)return l;return{...l,runtimeState:{...l.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:n,preview:y,error:s?.message||"Could not send the widget message."}}}}),z_("Widget submission failed",s?.message||"Could not send the widget message.","warning",5000)}})();return}if(F==="widget.ready"||F==="widget.request_refresh"){let y=new Date().toISOString(),f=Boolean(q?.payload?.buildDashboard||q?.payload?.dashboardKind==="internal-state"),n=Number(V?.runtimeState?.refreshCount||0)+1;if(E_((s)=>{let l=y0(s);if(!s||l!==E)return s;return{...s,runtimeState:{...s.runtimeState||{},lastEventKind:F,lastEventPayload:q?.payload||null,...F==="widget.ready"?{readyAt:y,lastHostUpdate:{type:"ready_ack",at:y}}:{},...F==="widget.request_refresh"?{lastRefreshRequestAt:y,refreshCount:n,lastHostUpdate:{type:f?"refresh_building":"refresh_ack",at:y,count:n,echo:q?.payload||null}}:{}}}}),F==="widget.request_refresh")if(f)(async()=>{try{let s=await T3(q?.payload||null);E_((l)=>{let c=y0(l);if(!l||c!==E)return l;return{...l,runtimeState:{...l.runtimeState||{},dashboard:s,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:n,echo:q?.payload||null}}}}),z_("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(s){E_((l)=>{let c=y0(l);if(!l||c!==E)return l;return{...l,runtimeState:{...l.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:n,error:s?.message||"Could not build dashboard."}}}}),z_("Dashboard build failed",s?.message||"Could not build dashboard.","warning",5000)}})();else z_("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[T3,$,i2,p2,m2,z_]);S(()=>{if(typeof window>"u")return;window.__piclawFloatingWidget=N0||null,console.debug("[widget-host] floatingWidget state",N0?{widgetId:N0?.widgetId||null,runtimeState:N0?.runtimeState||null}:null);return},[N0]),S(()=>{if(!N0||typeof window>"u")return;let q=(V)=>{let F=V?.data;if(!F||F.__piclawGeneratedWidget!==!0)return;if(F.kind!=="widget.request_refresh")return;let E=y0(N0),y=y0({widgetId:F.widgetId,toolCallId:F.toolCallId});if(console.debug("[widget-host] window message",{currentKey:E,incomingKey:y,kind:F.kind,widgetId:F.widgetId||null,payload:F.payload||null}),y&&E&&y!==E)return;a1(F,N0)};return window.addEventListener("message",q),()=>window.removeEventListener("message",q)},[N0,a1]),S(()=>{$0.current.clear(),E_(null)},[$]);let O5=I(async()=>{if(typeof window>"u")return;try{let V=(await s2($))?.branch,F=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([C0(),I0()]);let E=V?.agent_name?`@${V.agent_name}`:F;z_("New branch created",`Switched to ${E}.`,"info",2500);let y=U2(window.location.href,F,{chatOnly:j});window.location.assign(y)}catch(q){z_("Could not create branch",g1(q),"warning",5000)}},[j,$,C0,I0,z_]),F5=I(async()=>{if(typeof window>"u"||K)return;let q=M9($);if(!q){z_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(q.mode==="tab"){let F=C9(window.location.href,$,{chatOnly:!0});if(!window.open(F,q.target))z_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let V=I9(q);if(!V){z_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}x9(V,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await s2($))?.branch,y=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!y)throw Error("Branch fork did not return a chat id.");try{let n=await L4();x0(Array.isArray(n?.chats)?n.chats:[])}catch{}try{let n=await h1(C);k0(Array.isArray(n?.chats)?n.chats:[])}catch{}let f=U2(window.location.href,y,{chatOnly:!0});w9(V,f)}catch(F){T9(V),z_("Could not open branch window",g1(F),"error",5000)}},[$,C,K,z_]);S(()=>{if(!P0)return;if(typeof window>"u")return;let q=y$.current;if(!q)return;if(!R$.current){let V=I2("editorWidth",null),F=k$.current||280;R$.current=Number.isFinite(V)?V:F}if(q.style.setProperty("--editor-width",`${R$.current}px`),!n$.current){let V=I2("dockHeight",null);n$.current=Number.isFinite(V)?V:200}q.style.setProperty("--dock-height",`${n$.current}px`)},[P0]),S(()=>{if(!X0||j)return;let q=(V)=>{if(V.ctrlKey&&V.key==="`")V.preventDefault(),E$()};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[E$,X0,j]),S(()=>{if(j)return;let q=(V)=>{if(V.ctrlKey&&V.shiftKey&&(V.key==="Z"||V.key==="z")){V.preventDefault(),b$();return}if(V.key==="Escape"&&J_)V.preventDefault(),o0()};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[b$,o0,J_,j]);let H5=Boolean(L_&&L_===(t?.turn_id||X_));if(Z)return W`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${O_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${O_.message}</p>
                    </div>
                </div>
            </div>
        `;return W`
        <div class=${`app-shell${N$?"":" workspace-collapsed"}${P0?" editor-open":""}${j?" chat-only":""}${J_?" zen-mode":""}`} ref=${y$}>
            ${!j&&W`
                <${K9}
                    onFileSelect=${G2}
                    visible=${N$}
                    active=${N$||P0}
                    onOpenEditor=${V0}
                    onOpenTerminalTab=${c$}
                    onToggleTerminal=${X0?E$:void 0}
                    terminalVisible=${Boolean(X0&&d_)}
                />
                <button
                    class=${`workspace-toggle-tab${N$?" open":" closed"}`}
                    onClick=${B5}
                    title=${N$?"Hide workspace":"Show workspace"}
                    aria-label=${N$?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${o9} onTouchStart=${r9}></div>
            `}
            ${H2&&W`
                <div class="editor-pane-container">
                    ${J_&&W`<div class="zen-hover-zone"></div>`}
                    ${P0&&W`
                        <${X9}
                            tabs=${E0}
                            activeId=${G0}
                            onActivate=${C$}
                            onClose=${Y$}
                            onCloseOthers=${e$}
                            onCloseAll=${h$}
                            onTogglePin=${_2}
                            onTogglePreview=${s0}
                            previewTabs=${h0}
                            onToggleDock=${X0?E$:void 0}
                            dockVisible=${X0&&d_}
                            onToggleZen=${b$}
                            zenMode=${J_}
                        />
                    `}
                    ${P0&&W`<div class="editor-pane-host" ref=${j2}></div>`}
                    ${P0&&G0&&h0.has(G0)&&W`
                        <${B9}
                            getContent=${()=>z$.current?.getContent?.()}
                            path=${G0}
                            onClose=${()=>s0(G0)}
                        />
                    `}
                    ${X0&&d_&&W`<div class="dock-splitter" onMouseDown=${e9} onTouchStart=${_5}></div>`}
                    ${X0&&W`<div class=${`dock-panel${d_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${E$} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${U$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${a9} onTouchStart=${t9}></div>
            `}
            <div class="container">
                ${X&&y9()&&W`<div class="search-results-spacer"></div>`}
                ${j&&W`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${I_?.agent_name?`@${I_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${I_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${P_.length>1&&W`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(q)=>C3(q.currentTarget.value)}
                                    >
                                        ${P_.map((q)=>W`
                                            <option key=${q.chat_jid} value=${q.chat_jid}>
                                                ${`@${q.agent_name} — ${q.chat_jid}${q.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${I_?.chat_jid&&W`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${f3}
                                    title=${v$?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${v$}
                                >
                                    ${v$?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${I_?.chat_jid&&I_.chat_jid!==(I_.root_chat_jid||I_.chat_jid)&&W`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${b3}
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
                ${(Q||X)&&W`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${Z5}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Q?`#${Q}`:`Search: ${X} · ${e}`}</span>
                    </div>
                `}
                <${M6}
                    posts=${y2}
                    hasMore=${n1?i1:!1}
                    onLoadMore=${n1?P3:void 0}
                    timelineRef=${F$}
                    onHashtagClick=${j5}
                    onMessageRef=${b2}
                    onScrollToMessage=${V2}
                    onFileRef=${J2}
                    onPostClick=${void 0}
                    onDeletePost=${G5}
                    onOpenWidget=${U5}
                    emptyMessage=${Q?`No posts with #${Q}`:X?`No results for "${X}"`:void 0}
                    agents=${D_}
                    user=${r0}
                    reverse=${n1}
                    removingPostIds=${n0}
                    searchQuery=${X}
                />
                <${Q6}
                    status=${t}
                    draft=${__}
                    plan=${Q_}
                    thought=${h_}
                    pendingRequest=${N_}
                    intent=${R}
                    turnId=${X_}
                    steerQueued=${H5}
                    onPanelToggle=${F_}
                />
                <${n8}
                    session=${S_}
                    onClose=${d1}
                    onRetry=${Q5}
                    onInject=${X5}
                />
                <${N6}
                    widget=${N0}
                    onClose=${i2}
                    onWidgetEvent=${a1}
                />
                <${D8}
                    onPost=${()=>{let{searchQuery:q,searchOpen:V}=A0.current||{};if(!q&&!V)Q0(),x$()}}
                    onFocus=${x$}
                    searchMode=${M}
                    searchScope=${m}
                    onSearch=${N5}
                    onSearchScopeChange=${g}
                    onEnterSearch=${Y5}
                    onExitSearch=${z5}
                    fileRefs=${k}
                    onRemoveFileRef=${I$}
                    onClearFileRefs=${T2}
                    onSetFileRefs=${C2}
                    messageRefs=${p}
                    onRemoveMessageRef=${S2}
                    onClearMessageRefs=${R2}
                    onSetMessageRefs=${v2}
                    onSwitchChat=${C3}
                    onRenameSession=${f3}
                    isRenameSessionInProgress=${v$}
                    onCreateSession=${O5}
                    onDeleteSession=${b3}
                    onRestoreSession=${W5}
                    activeEditorPath=${j?null:G0}
                    onAttachEditorFile=${j?void 0:f2}
                    onOpenFilePill=${J2}
                    followupQueueCount=${t_}
                    followupQueueItems=${Y0}
                    onInjectQueuedFollowup=${V5}
                    onRemoveQueuedFollowup=${q5}
                    onSubmitIntercept=${K5}
                    onMessageResponse=${p2}
                    onSubmitError=${U}
                    onPopOutChat=${K?void 0:F5}
                    isAgentActive=${m2}
                    activeChatAgents=${Z0}
                    currentChatJid=${$}
                    connectionStatus=${Y}
                    activeModel=${c_}
                    modelUsage=${k_}
                    thinkingLevel=${g_}
                    supportsThinking=${f_}
                    contextUsage=${n_}
                    notificationsEnabled=${f0}
                    notificationPermission=${T$}
                    onToggleNotifications=${J0}
                    onModelChange=${i_}
                    onModelStateChange=${s1}
                />
                <${X6}
                    request=${N_}
                    onRespond=${()=>{$_(null),q0.current=null}}
                />
            </div>
        </div>
    `}function nZ(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return W`<${lZ} locationParams=${_} />`}q8(W`<${nZ} />`,document.getElementById("app"));

//# debugId=4AC3841C695E864264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
