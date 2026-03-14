var R8=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,Z)=>(typeof require<"u"?require:$)[Z]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var o2,G_,D3,b2,k3,G3,g8,i2={},C3=[],u8=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Y2(_,$){for(var Z in $)_[Z]=$[Z];return _}function y3(_){var $=_.parentNode;$&&$.removeChild(_)}function A3(_,$,Z){var J,X,Y,j={};for(Y in $)Y=="key"?J=$[Y]:Y=="ref"?X=$[Y]:j[Y]=$[Y];if(arguments.length>2&&(j.children=arguments.length>3?o2.call(arguments,2):Z),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)j[Y]===void 0&&(j[Y]=_.defaultProps[Y]);return c2(_,j,J,X,null)}function c2(_,$,Z,J,X){var Y={type:_,props:$,key:Z,ref:J,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++D3:X};return G_.vnode!=null&&G_.vnode(Y),Y}function n2(_){return _.children}function p2(_,$){this.props=_,this.context=$}function L2(_,$){if($==null)return _.__?L2(_.__,_.__.__k.indexOf(_)+1):null;for(var Z;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null)return Z.__e;return typeof _.type=="function"?L2(_):null}function b3(_){var $,Z;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null){_.__e=_.__c.base=Z.__e;break}return b3(_)}}function N3(_){(!_.__d&&(_.__d=!0)&&b2.push(_)&&!l2.__r++||G3!==G_.debounceRendering)&&((G3=G_.debounceRendering)||k3)(l2)}function l2(){for(var _;l2.__r=b2.length;)_=b2.sort(function($,Z){return $.__v.__b-Z.__v.__b}),b2=[],_.some(function($){var Z,J,X,Y,j,G;$.__d&&(j=(Y=(Z=$).__v).__e,(G=Z.__P)&&(J=[],(X=Y2({},Y)).__v=Y.__v+1,E1(G,Y,X,Z.__n,G.ownerSVGElement!==void 0,Y.__h!=null?[j]:null,J,j==null?L2(Y):j,Y.__h),S3(J,Y),Y.__e!=j&&b3(Y)))})}function M3(_,$,Z,J,X,Y,j,G,N,O){var K,H,k,L,A,b,v,M=J&&J.__k||C3,U=M.length;for(Z.__k=[],K=0;K<$.length;K++)if((L=Z.__k[K]=(L=$[K])==null||typeof L=="boolean"?null:typeof L=="string"||typeof L=="number"||typeof L=="bigint"?c2(null,L,null,null,L):Array.isArray(L)?c2(n2,{children:L},null,null,null):L.__b>0?c2(L.type,L.props,L.key,null,L.__v):L)!=null){if(L.__=Z,L.__b=Z.__b+1,(k=M[K])===null||k&&L.key==k.key&&L.type===k.type)M[K]=void 0;else for(H=0;H<U;H++){if((k=M[H])&&L.key==k.key&&L.type===k.type){M[H]=void 0;break}k=null}E1(_,L,k=k||i2,X,Y,j,G,N,O),A=L.__e,(H=L.ref)&&k.ref!=H&&(v||(v=[]),k.ref&&v.push(k.ref,null,L),v.push(H,L.__c||A,L)),A!=null?(b==null&&(b=A),typeof L.type=="function"&&L.__k!=null&&L.__k===k.__k?L.__d=N=P3(L,N,_):N=w3(_,L,k,M,A,N),O||Z.type!=="option"?typeof Z.type=="function"&&(Z.__d=N):_.value=""):N&&k.__e==N&&N.parentNode!=_&&(N=L2(k))}for(Z.__e=b,K=U;K--;)M[K]!=null&&(typeof Z.type=="function"&&M[K].__e!=null&&M[K].__e==Z.__d&&(Z.__d=L2(J,K+1)),I3(M[K],M[K]));if(v)for(K=0;K<v.length;K++)x3(v[K],v[++K],v[++K])}function P3(_,$,Z){var J,X;for(J=0;J<_.__k.length;J++)(X=_.__k[J])&&(X.__=_,$=typeof X.type=="function"?P3(X,$,Z):w3(Z,X,X,_.__k,X.__e,$));return $}function w3(_,$,Z,J,X,Y){var j,G,N;if($.__d!==void 0)j=$.__d,$.__d=void 0;else if(Z==null||X!=Y||X.parentNode==null)_:if(Y==null||Y.parentNode!==_)_.appendChild(X),j=null;else{for(G=Y,N=0;(G=G.nextSibling)&&N<J.length;N+=2)if(G==X)break _;_.insertBefore(X,Y),j=Y}return j!==void 0?j:X.nextSibling}function V3(_,$,Z){$[0]==="-"?_.setProperty($,Z):_[$]=Z==null?"":typeof Z!="number"||u8.test($)?Z:Z+"px"}function m2(_,$,Z,J,X){var Y;_:if($==="style")if(typeof Z=="string")_.style.cssText=Z;else{if(typeof J=="string"&&(_.style.cssText=J=""),J)for($ in J)Z&&$ in Z||V3(_.style,$,"");if(Z)for($ in Z)J&&Z[$]===J[$]||V3(_.style,$,Z[$])}else if($[0]==="o"&&$[1]==="n")Y=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=Z,Z?J||_.addEventListener($,Y?q3:O3,Y):_.removeEventListener($,Y?q3:O3,Y);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=Z==null?"":Z;break _}catch(j){}typeof Z=="function"||(Z!=null&&(Z!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,Z):_.removeAttribute($))}}function O3(_){this.l[_.type+!1](G_.event?G_.event(_):_)}function q3(_){this.l[_.type+!0](G_.event?G_.event(_):_)}function E1(_,$,Z,J,X,Y,j,G,N){var O,K,H,k,L,A,b,v,M,U,P,C=$.type;if($.constructor!==void 0)return null;Z.__h!=null&&(N=Z.__h,G=$.__e=Z.__e,$.__h=null,Y=[G]),(O=G_.__b)&&O($);try{_:if(typeof C=="function"){if(v=$.props,M=(O=C.contextType)&&J[O.__c],U=O?M?M.props.value:O.__:J,Z.__c?b=(K=$.__c=Z.__c).__=K.__E:(("prototype"in C)&&C.prototype.render?$.__c=K=new C(v,U):($.__c=K=new p2(v,U),K.constructor=C,K.render=c8),M&&M.sub(K),K.props=v,K.state||(K.state={}),K.context=U,K.__n=J,H=K.__d=!0,K.__h=[]),K.__s==null&&(K.__s=K.state),C.getDerivedStateFromProps!=null&&(K.__s==K.state&&(K.__s=Y2({},K.__s)),Y2(K.__s,C.getDerivedStateFromProps(v,K.__s))),k=K.props,L=K.state,H)C.getDerivedStateFromProps==null&&K.componentWillMount!=null&&K.componentWillMount(),K.componentDidMount!=null&&K.__h.push(K.componentDidMount);else{if(C.getDerivedStateFromProps==null&&v!==k&&K.componentWillReceiveProps!=null&&K.componentWillReceiveProps(v,U),!K.__e&&K.shouldComponentUpdate!=null&&K.shouldComponentUpdate(v,K.__s,U)===!1||$.__v===Z.__v){K.props=v,K.state=K.__s,$.__v!==Z.__v&&(K.__d=!1),K.__v=$,$.__e=Z.__e,$.__k=Z.__k,$.__k.forEach(function(I){I&&(I.__=$)}),K.__h.length&&j.push(K);break _}K.componentWillUpdate!=null&&K.componentWillUpdate(v,K.__s,U),K.componentDidUpdate!=null&&K.__h.push(function(){K.componentDidUpdate(k,L,A)})}K.context=U,K.props=v,K.state=K.__s,(O=G_.__r)&&O($),K.__d=!1,K.__v=$,K.__P=_,O=K.render(K.props,K.state,K.context),K.state=K.__s,K.getChildContext!=null&&(J=Y2(Y2({},J),K.getChildContext())),H||K.getSnapshotBeforeUpdate==null||(A=K.getSnapshotBeforeUpdate(k,L)),P=O!=null&&O.type===n2&&O.key==null?O.props.children:O,M3(_,Array.isArray(P)?P:[P],$,Z,J,X,Y,j,G,N),K.base=$.__e,$.__h=null,K.__h.length&&j.push(K),b&&(K.__E=K.__=null),K.__e=!1}else Y==null&&$.__v===Z.__v?($.__k=Z.__k,$.__e=Z.__e):$.__e=m8(Z.__e,$,Z,J,X,Y,j,N);(O=G_.diffed)&&O($)}catch(I){$.__v=null,(N||Y!=null)&&($.__e=G,$.__h=!!N,Y[Y.indexOf(G)]=null),G_.__e(I,$,Z)}}function S3(_,$){G_.__c&&G_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(J){J.call(Z)})}catch(J){G_.__e(J,Z.__v)}})}function m8(_,$,Z,J,X,Y,j,G){var N,O,K,H=Z.props,k=$.props,L=$.type,A=0;if(L==="svg"&&(X=!0),Y!=null){for(;A<Y.length;A++)if((N=Y[A])&&(N===_||(L?N.localName==L:N.nodeType==3))){_=N,Y[A]=null;break}}if(_==null){if(L===null)return document.createTextNode(k);_=X?document.createElementNS("http://www.w3.org/2000/svg",L):document.createElement(L,k.is&&k),Y=null,G=!1}if(L===null)H===k||G&&_.data===k||(_.data=k);else{if(Y=Y&&o2.call(_.childNodes),O=(H=Z.props||i2).dangerouslySetInnerHTML,K=k.dangerouslySetInnerHTML,!G){if(Y!=null)for(H={},A=0;A<_.attributes.length;A++)H[_.attributes[A].name]=_.attributes[A].value;(K||O)&&(K&&(O&&K.__html==O.__html||K.__html===_.innerHTML)||(_.innerHTML=K&&K.__html||""))}if(function(b,v,M,U,P){var C;for(C in M)C==="children"||C==="key"||C in v||m2(b,C,null,M[C],U);for(C in v)P&&typeof v[C]!="function"||C==="children"||C==="key"||C==="value"||C==="checked"||M[C]===v[C]||m2(b,C,v[C],M[C],U)}(_,k,H,X,G),K)$.__k=[];else if(A=$.props.children,M3(_,Array.isArray(A)?A:[A],$,Z,J,X&&L!=="foreignObject",Y,j,Y?Y[0]:Z.__k&&L2(Z,0),G),Y!=null)for(A=Y.length;A--;)Y[A]!=null&&y3(Y[A]);G||(("value"in k)&&(A=k.value)!==void 0&&(A!==_.value||L==="progress"&&!A)&&m2(_,"value",A,H.value,!1),("checked"in k)&&(A=k.checked)!==void 0&&A!==_.checked&&m2(_,"checked",A,H.checked,!1))}return _}function x3(_,$,Z){try{typeof _=="function"?_($):_.current=$}catch(J){G_.__e(J,Z)}}function I3(_,$,Z){var J,X;if(G_.unmount&&G_.unmount(_),(J=_.ref)&&(J.current&&J.current!==_.__e||x3(J,null,$)),(J=_.__c)!=null){if(J.componentWillUnmount)try{J.componentWillUnmount()}catch(Y){G_.__e(Y,$)}J.base=J.__P=null}if(J=_.__k)for(X=0;X<J.length;X++)J[X]&&I3(J[X],$,typeof _.type!="function");Z||_.__e==null||y3(_.__e),_.__e=_.__d=void 0}function c8(_,$,Z){return this.constructor(_,Z)}function T3(_,$,Z){var J,X,Y;G_.__&&G_.__(_,$),X=(J=typeof Z=="function")?null:Z&&Z.__k||$.__k,Y=[],E1($,_=(!J&&Z||$).__k=A3(n2,null,[_]),X||i2,i2,$.ownerSVGElement!==void 0,!J&&Z?[Z]:X?null:$.firstChild?o2.call($.childNodes):null,Y,!J&&Z?Z:X?X.__e:$.firstChild,J),S3(Y,_)}o2=C3.slice,G_={__e:function(_,$){for(var Z,J,X;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((J=Z.constructor)&&J.getDerivedStateFromError!=null&&(Z.setState(J.getDerivedStateFromError(_)),X=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_),X=Z.__d),X)return Z.__E=Z}catch(Y){_=Y}throw _}},D3=0,p2.prototype.setState=function(_,$){var Z;Z=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Y2({},this.state),typeof _=="function"&&(_=_(Y2({},Z),this.props)),_&&Y2(Z,_),_!=null&&this.__v&&($&&this.__h.push($),N3(this))},p2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),N3(this))},p2.prototype.render=n2,b2=[],k3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l2.__r=0,g8=0;var d2,M0,z3,M2=0,L1=[],B3=G_.__b,Q3=G_.__r,U3=G_.diffed,H3=G_.__c,L3=G_.unmount;function D1(_,$){G_.__h&&G_.__h(M0,_,M2||$),M2=0;var Z=M0.__H||(M0.__H={__:[],__h:[]});return _>=Z.__.length&&Z.__.push({}),Z.__[_]}function f(_){return M2=1,p8(v3,_)}function p8(_,$,Z){var J=D1(d2++,2);return J.t=_,J.__c||(J.__=[Z?Z($):v3(void 0,$),function(X){var Y=J.t(J.__[0],X);J.__[0]!==Y&&(J.__=[Y,J.__[1]],J.__c.setState({}))}],J.__c=M0),J.__}function m(_,$){var Z=D1(d2++,3);!G_.__s&&f3(Z.__H,$)&&(Z.__=_,Z.__H=$,M0.__H.__h.push(Z))}function F(_){return M2=5,a_(function(){return{current:_}},[])}function a_(_,$){var Z=D1(d2++,7);return f3(Z.__H,$)&&(Z.__=_(),Z.__H=$,Z.__h=_),Z.__}function S(_,$){return M2=8,a_(function(){return _},$)}function h8(){L1.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(h2),_.__H.__h.forEach(F1),_.__H.__h=[]}catch($){_.__H.__h=[],G_.__e($,_.__v)}}),L1=[]}G_.__b=function(_){M0=null,B3&&B3(_)},G_.__r=function(_){Q3&&Q3(_),d2=0;var $=(M0=_.__c).__H;$&&($.__h.forEach(h2),$.__h.forEach(F1),$.__h=[])},G_.diffed=function(_){U3&&U3(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(L1.push($)!==1&&z3===G_.requestAnimationFrame||((z3=G_.requestAnimationFrame)||function(Z){var J,X=function(){clearTimeout(Y),F3&&cancelAnimationFrame(J),setTimeout(Z)},Y=setTimeout(X,100);F3&&(J=requestAnimationFrame(X))})(h8)),M0=void 0},G_.__c=function(_,$){$.some(function(Z){try{Z.__h.forEach(h2),Z.__h=Z.__h.filter(function(J){return!J.__||F1(J)})}catch(J){$.some(function(X){X.__h&&(X.__h=[])}),$=[],G_.__e(J,Z.__v)}}),H3&&H3(_,$)},G_.unmount=function(_){L3&&L3(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(h2)}catch(Z){G_.__e(Z,$.__v)}};var F3=typeof requestAnimationFrame=="function";function h2(_){var $=M0;typeof _.__c=="function"&&_.__c(),M0=$}function F1(_){var $=M0;_.__c=_.__(),M0=$}function f3(_,$){return!_||_.length!==$.length||$.some(function(Z,J){return Z!==_[J]})}function v3(_,$){return typeof $=="function"?$(_):$}var R3=function(_,$,Z,J){var X;$[0]=0;for(var Y=1;Y<$.length;Y++){var j=$[Y++],G=$[Y]?($[0]|=j?1:2,Z[$[Y++]]):$[++Y];j===3?J[0]=G:j===4?J[1]=Object.assign(J[1]||{},G):j===5?(J[1]=J[1]||{})[$[++Y]]=G:j===6?J[1][$[++Y]]+=G+"":j?(X=_.apply(G,R3(_,G,Z,["",null])),J.push(X),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=X)):J.push(G)}return J},E3=new Map,z=function(_){var $=E3.get(this);return $||($=new Map,E3.set(this,$)),($=R3(this,$.get(_)||($.set(_,$=function(Z){for(var J,X,Y=1,j="",G="",N=[0],O=function(k){Y===1&&(k||(j=j.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,k,j):Y===3&&(k||j)?(N.push(3,k,j),Y=2):Y===2&&j==="..."&&k?N.push(4,k,0):Y===2&&j&&!k?N.push(5,0,!0,j):Y>=5&&((j||!k&&Y===5)&&(N.push(Y,0,j,X),Y=6),k&&(N.push(Y,k,0,X),Y=6)),j=""},K=0;K<Z.length;K++){K&&(Y===1&&O(),O(K));for(var H=0;H<Z[K].length;H++)J=Z[K][H],Y===1?J==="<"?(O(),N=[N],Y=3):j+=J:Y===4?j==="--"&&J===">"?(Y=1,j=""):j=J+j[0]:G?J===G?G="":j+=J:J==='"'||J==="'"?G=J:J===">"?(O(),Y=1):Y&&(J==="="?(Y=5,X=j,j=""):J==="/"&&(Y<5||Z[K][H+1]===">")?(O(),Y===3&&(N=N[0]),Y=N,(N=N[0]).push(2,0,Y),Y=0):J===" "||J==="\t"||J===`
`||J==="\r"?(O(),Y=2):j+=J),Y===3&&j==="!--"&&(Y=4,N=N[0])}return O(),N}(_)),$),arguments,[])).length>1?$:$[0]}.bind(A3);async function i_(_,$={}){let Z=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Unknown error"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function r2(_=10,$=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;return i_(Z)}async function g3(_,$=50,Z=0){return i_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${Z}`)}async function u3(_,$=50,Z=0){return i_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${Z}`)}async function m3(_){return i_(`/thread/${_}`)}async function c3(_,$=!1){let Z=`/post/${_}?cascade=${$?"true":"false"}`;return i_(Z,{method:"DELETE"})}async function k1(_,$,Z=null,J=[],X=null){return i_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:Z,media_ids:J,mode:X})})}async function p3(){return i_("/agents")}async function h3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/status${$}`)}async function C1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/context${$}`)}async function y1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/queue-state${$}`)}async function A1(_,$=null){let Z=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function b1(_,$=null){let Z=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function O2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/models${$}`)}async function i3(_){let $=new FormData;$.append("file",_);let Z=await fetch("/media/upload",{method:"POST",body:$});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Upload failed"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function M1(_,$){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function l3(_,$){let Z=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function o3(_,$="thought"){let Z=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i_(Z)}async function n3(_,$,Z){return i_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(Z)})})}function m0(_){return`/media/${_}`}function d3(_){return`/media/${_}/thumbnail`}async function P2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function r3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function s3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function s2(_="",$=2,Z=!1){let J=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${Z?"1":"0"}`;return i_(J)}async function a3(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return i_($)}async function t3(_,$=20000,Z=null){let J=Z?`&mode=${encodeURIComponent(Z)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${J}`;return i_(X)}async function e3(_){return i_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function P1(_,$="",Z={}){let J=new FormData;J.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(Z.overwrite)X.set("overwrite","1");let Y=X.toString(),j=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+j,{method:"POST",body:J});if(!G.ok){let N=await G.json().catch(()=>({error:"Upload failed"})),O=Error(N.error||`HTTP ${G.status}`);throw O.status=G.status,O.code=N.code,O}return G.json()}async function _4(_,$,Z=""){let J=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:Z})});if(!J.ok){let X=await J.json().catch(()=>({error:"Create failed"})),Y=Error(X.error||`HTTP ${J.status}`);throw Y.status=J.status,Y.code=X.code,Y}return J.json()}async function $4(_,$){let Z=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Rename failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function Z4(_,$){let Z=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Move failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function J4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i_($,{method:"DELETE"})}async function a2(_,$=!1){return i_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function w1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function Y4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class S1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_queued",(_)=>{this.onEvent("agent_followup_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_consumed",(_)=>{this.onEvent("agent_followup_consumed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_removed",(_)=>{this.onEvent("agent_followup_removed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,Z=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,Z+$),this.reconnectAttempts=0;let J=Math.max(this.cooldownUntil-Z,0),X=Math.max(this.reconnectDelay,J);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function c0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function I_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function F2(_,$=!1){let Z=c0(_);if(Z===null)return $;return Z==="true"}function E2(_,$=null){let Z=c0(_);if(Z===null)return $;let J=parseInt(Z,10);return Number.isFinite(J)?J:$}function s0({prefix:_="file",label:$,title:Z,onRemove:J,onClick:X,removeTitle:Y="Remove",icon:j="file"}){let G=`${_}-file-pill`,N=`${_}-file-name`,O=`${_}-file-remove`,K=j==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${G} title=${Z||$} onClick=${X}>
      ${K}
      <span class=${N}>${$}</span>
      ${J&&z`
        <button
          class=${O}
          onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),J()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var l8=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function o8({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,J=_.contextWindow,X=Z!=null?`Context: ${X4(Z)} / ${X4(J)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Y=7,j=2*Math.PI*7,G=$/100*j,N=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
        <span class="compose-context-pie icon-btn" title=${X}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${N}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${j}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function X4(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function j4({onPost:_,onFocus:$,searchMode:Z,onSearch:J,onEnterSearch:X,onExitSearch:Y,fileRefs:j=[],onRemoveFileRef:G,onClearFileRefs:N,messageRefs:O=[],onRemoveMessageRef:K,onClearMessageRefs:H,activeModel:k=null,modelUsage:L=null,thinkingLevel:A=null,supportsThinking:b=!1,contextUsage:v=null,currentBranch:M=null,currentBranchRepoPath:U=null,notificationsEnabled:P=!1,notificationPermission:C="default",onToggleNotifications:I,onModelChange:l,onModelStateChange:o,activeEditorPath:Z_=null,onAttachEditorFile:V_,onOpenFilePill:$_,followupQueueItems:N_=[],onInjectQueuedFollowup:P_,onRemoveQueuedFollowup:d,onMessageResponse:Y_,isAgentActive:r=!1}){let[h,e]=f(""),[K_,J_]=f(""),[M_,X_]=f([]),[Q_,U_]=f(!1),[O_,H_]=f([]),[q_,b_]=f(0),[v_,F_]=f(!1),[E_,R_]=f(!1),[D_,t_]=f(!1),[r_,l_]=f([]),[C_,q0]=f(!1),g_=F(null),z0=F(null),S_=F(null),B0=F(null),L_=F(0),I0=200,D0=(Q)=>{let R=new Set,i=[];for(let W_ of Q||[]){if(typeof W_!=="string")continue;let y_=W_.trim();if(!y_||R.has(y_))continue;R.add(y_),i.push(y_)}return i},Q0=()=>{let Q=c0("piclaw_compose_history");if(!Q)return[];try{let R=JSON.parse(Q);if(!Array.isArray(R))return[];return D0(R)}catch{return[]}},s_=(Q)=>{I_("piclaw_compose_history",JSON.stringify(Q))},o_=F(Q0()),x=F(-1),__=F(""),x_=h.trim()||M_.length>0||j.length>0||O.length>0,Z0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),U0=typeof window<"u"&&typeof Notification<"u",J0=typeof window<"u"?Boolean(window.isSecureContext):!1,a0=U0&&J0&&C!=="denied",Y0=C==="granted"&&P,c_=Y0?"Disable notifications":"Enable notifications",X0=k||"",u_=b&&A?` (${A})`:"",j0=u_.trim()?`${A}`:"",p0=typeof L?.hint_short==="string"?L.hint_short.trim():"",H0=typeof M==="string"?M.trim():"",K2=U&&U!=="."?`Git branch: ${H0} (${U})`:`Git branch: ${H0}`,k0=[j0||null,p0||null].filter(Boolean).join(" • "),T0=[X0?`Current model: ${X0}${u_}`:null,L?.plan?`Plan: ${L.plan}`:null,p0||null,L?.primary?.reset_description||null,L?.secondary?.reset_description||null].filter(Boolean),f0=E_?"Switching model…":T0.join(" • ")||`Current model: ${X0}${u_} (tap to open model picker)`,K0=(Q)=>{if(!Q||typeof Q!=="object")return;let R=Q.model??Q.current;if(typeof o==="function")o({model:R??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(R&&typeof l==="function")l(R)},h0=(Q)=>{let R=Q||g_.current;if(!R)return;R.style.height="auto",R.style.height=`${R.scrollHeight}px`,R.style.overflowY="hidden"},v2=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){F_(!1),H_([]);return}let R=Q.toLowerCase().split(" ")[0];if(R.length<1){F_(!1),H_([]);return}let i=l8.filter((W_)=>W_.name.startsWith(R)||W_.name.replace(/-/g,"").startsWith(R.replace(/-/g,"")));if(i.length>0&&!(i.length===1&&i[0].name===R))H_(i),b_(0),F_(!0);else F_(!1),H_([])},W2=(Q)=>{let R=h,i=R.indexOf(" "),W_=i>=0?R.slice(i):"",y_=Q.name+W_;e(y_),F_(!1),H_([]),requestAnimationFrame(()=>{let w_=g_.current;if(!w_)return;let k_=y_.length;w_.selectionStart=k_,w_.selectionEnd=k_,w_.focus()})},W0=(Q)=>{if(Z)J_(Q);else e(Q),v2(Q);requestAnimationFrame(()=>h0())},p_=(Q)=>{let R=Z?K_:h,i=R&&!R.endsWith(`
`)?`
`:"",W_=`${R}${i}${Q}`.trimStart();W0(W_)},w0=(Q)=>{let R=Q?.command?.model_label;if(R)return R;let i=Q?.command?.message;if(typeof i==="string"){let W_=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(W_?.[1])return W_[1].trim()}return null},A0=async(Q)=>{if(Z||E_)return;R_(!0);try{let R=await k1("default",Q,null,[]),i=w0(R);K0({model:i??k??null,thinking_level:R?.command?.thinking_level,supports_thinking:R?.command?.supports_thinking});try{let W_=await O2();if(W_)K0(W_)}catch{}return _?.(),!0}catch(R){return console.error("Failed to switch model:",R),alert("Failed to switch model: "+R.message),!1}finally{R_(!1)}},m_=async()=>{await A0("/cycle-model")},e_=async(Q)=>{if(!Q||E_)return;if(await A0(`/model ${Q}`))t_(!1)},L0=(Q)=>{Q.preventDefault(),Q.stopPropagation(),t_((R)=>!R)},S0=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return r?"queue":null},C0=async(Q,R,i={})=>{let{includeMedia:W_=!0,includeFileRefs:y_=!0,includeMessageRefs:w_=!0,clearAfterSubmit:k_=!0,recordHistory:y0=!0}=i||{},d0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:h,q2=typeof d0==="string"?d0:"";if(!q2.trim()&&(W_?M_.length===0:!0)&&(y_?j.length===0:!0)&&(w_?O.length===0:!0))return;F_(!1),H_([]);let b0=W_?[...M_]:[],z2=y_?[...j]:[],B2=w_?[...O]:[],T_=q2.trim();if(y0&&T_){let f_=o_.current,N0=D0(f_.filter(($2)=>$2!==T_));if(N0.push(T_),N0.length>200)N0.splice(0,N0.length-200);o_.current=N0,s_(N0),x.current=-1,__.current=""}if(k_)e(""),X_([]),N?.(),H?.();(async()=>{try{let f_=[];for(let E0 of b0){let R0=await i3(E0);f_.push(R0.id)}let N0=z2.length?`Files:
${z2.map((E0)=>`- ${E0}`).join(`
`)}`:"",$2=B2.length?`Referenced messages:
${B2.map((E0)=>`- message:${E0}`).join(`
`)}`:"",V0=f_.length?`Images:
${f_.map((E0,R0)=>{let Z2=b0[R0]?.name||`image-${R0+1}`;return`- attachment:${E0} (${Z2})`}).join(`
`)}`:"",F0=[T_,N0,$2,V0].filter(Boolean).join(`

`),v0=await k1("default",F0,null,f_,S0(R));if(Y_?.(v0),v0?.command){K0({model:v0.command.model_label??k??null,thinking_level:v0.command.thinking_level,supports_thinking:v0.command.supports_thinking});try{let E0=await O2();if(E0)K0(E0)}catch{}}_?.()}catch(f_){console.error("Failed to post:",f_)}})()},t0=(Q)=>{P_?.(Q)},G0=(Q)=>{if(Q.isComposing)return;if(Z&&Q.key==="Escape"){Q.preventDefault(),J_(""),Y?.();return}if(v_&&O_.length>0){let R=g_.current?.value??(Z?K_:h);if(!String(R||"").startsWith("/"))F_(!1),H_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),b_((i)=>(i+1)%O_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),b_((i)=>(i-1+O_.length)%O_.length);return}if(Q.key==="Tab"){Q.preventDefault(),W2(O_[q_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(g_.current?.value??(Z?K_:h)).includes(" ")){Q.preventDefault();let y_=O_[q_];F_(!1),H_([]),C0(y_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),F_(!1),H_([]);return}}}if(!Z&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let R=g_.current;if(!R)return;let i=R.value||"",W_=R.selectionStart===0&&R.selectionEnd===0,y_=R.selectionStart===i.length&&R.selectionEnd===i.length;if(Q.key==="ArrowUp"&&W_||Q.key==="ArrowDown"&&y_){let w_=o_.current;if(!w_.length)return;Q.preventDefault();let k_=x.current;if(Q.key==="ArrowUp"){if(k_===-1)__.current=i,k_=w_.length-1;else if(k_>0)k_-=1;x.current=k_,W0(w_[k_]||"")}else{if(k_===-1)return;if(k_<w_.length-1)k_+=1,x.current=k_,W0(w_[k_]||"");else x.current=-1,W0(__.current||""),__.current=""}requestAnimationFrame(()=>{let y0=g_.current;if(!y0)return;let d0=y0.value.length;y0.selectionStart=d0,y0.selectionEnd=d0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let R=g_.current?.value??(Z?K_:h);if(Z){if(R.trim())J?.(R.trim())}else C0(R,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let R=g_.current?.value??(Z?K_:h);if(Z){if(R.trim())J?.(R.trim())}else C0(R)}},h_=(Q)=>{let R=Array.from(Q||[]).filter((i)=>i&&i.type&&i.type.startsWith("image/"));if(!R.length)return;X_((i)=>[...i,...R])},i0=(Q)=>{h_(Q.target.files),Q.target.value=""},G2=(Q)=>{if(Z)return;Q.preventDefault(),Q.stopPropagation(),L_.current+=1,U_(!0)},l0=(Q)=>{if(Z)return;if(Q.preventDefault(),Q.stopPropagation(),L_.current=Math.max(0,L_.current-1),L_.current===0)U_(!1)},o0=(Q)=>{if(Z)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";U_(!0)},e0=(Q)=>{if(Z)return;Q.preventDefault(),Q.stopPropagation(),L_.current=0,U_(!1),h_(Q.dataTransfer?.files||[])},_0=(Q)=>{if(Z)return;let R=Q.clipboardData?.items;if(!R||!R.length)return;let i=[];for(let W_ of R){if(W_.kind!=="file")continue;let y_=W_.getAsFile?.();if(y_)i.push(y_)}if(i.length>0)Q.preventDefault(),h_(i)},n0=(Q)=>{X_((R)=>R.filter((i,W_)=>W_!==Q))},x0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:R,longitude:i,accuracy:W_}=Q.coords,y_=`${R.toFixed(5)}, ${i.toFixed(5)}`,w_=Number.isFinite(W_)?` ±${Math.round(W_)}m`:"",k_=`https://maps.google.com/?q=${R},${i}`,y0=`Location: ${y_}${w_} ${k_}`;p_(y0)},(Q)=>{let R=Q?.message||"Unable to retrieve location.";alert(`Location error: ${R}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!D_)return;q0(!0),O2().then((Q)=>{let R=Array.isArray(Q?.models)?Q.models.filter((i)=>typeof i==="string"&&i.trim().length>0):[];l_(R),K0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),l_([])}).finally(()=>{q0(!1)})},[D_,k]),m(()=>{if(Z)t_(!1)},[Z]),m(()=>{if(!D_)return;let Q=(R)=>{let i=S_.current,W_=B0.current,y_=R.target;if(i&&i.contains(y_))return;if(W_&&W_.contains(y_))return;t_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[D_]);let _2=(Q)=>{let R=Q.target.value;h0(Q.target),W0(R)};return m(()=>{requestAnimationFrame(()=>h0())},[h,K_,Z]),z`
        <div class="compose-box">
            ${!Z&&N_.length>0&&z`
                <div class="compose-queue-stack">
                    ${N_.map((Q)=>{let R=typeof Q?.content==="string"?Q.content:"";if(!R.trim())return null;return z`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${R}>
                                    ${R}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>t0(Q)}
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
                                    onClick=${()=>d?.(Q)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${Q_?" drag-active":""}`}
                onDragEnter=${G2}
                onDragOver=${o0}
                onDragLeave=${l0}
                onDrop=${e0}
            >
                <div class="compose-input-main">
                    ${(j.length>0||M_.length>0||O.length>0)&&z`
                        <div class="compose-file-refs">
                            ${O.map((Q)=>{return z`
                                    <${s0}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>K?.(Q)}
                                    />
                                `})}
                            ${j.map((Q)=>{let R=Q.split("/").pop()||Q;return z`
                                    <${s0}
                                        prefix="compose"
                                        label=${R}
                                        title=${Q}
                                        onClick=${()=>$_?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(Q)}
                                    />
                                `})}
                            ${M_.map((Q,R)=>{let i=Q?.name||`image-${R+1}`;return z`
                                    <${s0}
                                        key=${i+R}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove image"
                                        onRemove=${()=>n0(R)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${g_}
                        placeholder=${Z?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${Z?K_:h}
                        onInput=${_2}
                        onKeyDown=${G0}
                        onPaste=${_0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${v_&&O_.length>0&&z`
                        <div class="slash-autocomplete" ref=${z0}>
                            ${O_.map((Q,R)=>z`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${R===q_?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),W2(Q)}}
                                    onMouseEnter=${()=>b_(R)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${D_&&!Z&&z`
                        <div class="compose-model-popup" ref=${S_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C_&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C_&&r_.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C_&&r_.map((Q)=>z`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${k===Q?" active":""}`}
                                        onClick=${()=>{e_(Q)}}
                                        disabled=${E_}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{m_()}}
                                    disabled=${E_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!Z&&k&&z`
                    <div class="compose-meta-row">
                        ${!Z&&k&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${B0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${f0}
                                    aria-label="Open model picker"
                                    onClick=${L0}
                                    disabled=${E_}
                                >
                                    ${E_?"Switching…":X0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!E_&&k0&&z`
                                        <span class="compose-model-usage-hint" title=${f0}>
                                            ${k0}
                                        </span>
                                    `}
                                    ${H0&&z`
                                        <span class="compose-branch-hint" title=${K2}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M6 3v12"/>
                                                <circle cx="18" cy="6" r="3"/>
                                                <circle cx="6" cy="18" r="3"/>
                                                <path d="M18 9a9 9 0 0 1-9 9"/>
                                            </svg>
                                            <span class="compose-branch-label">${H0}</span>
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${Z?"search-mode":""}">
                    ${!Z&&v&&v.percent!=null&&z`
                        <${o8} usage=${v} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${Z?Y:X}
                        title=${Z?"Close search":"Search"}
                    >
                        ${Z?z`
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
                    ${Z0&&!Z&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${x0}
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
                    ${a0&&!Z&&z`
                        <button
                            class=${`icon-btn notification-btn${Y0?" active":""}`}
                            onClick=${I}
                            title=${c_}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!Z&&z`
                        ${Z_&&V_&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${V_}
                                title=${`Attach open file: ${Z_}`}
                                type="button"
                                disabled=${j.includes(Z_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${i0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{C0()}}
                            disabled=${!x_}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var W4="piclaw_theme",T1="piclaw_tint",_1={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},n8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},K4={default:{label:"Default",mode:"auto",light:_1,dark:n8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},d8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],$1={theme:"default",tint:null},G4="light",x1=!1;function N4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function D2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let Z=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(Z)&&!/^[0-9a-fA-F]{6}$/.test(Z))return null;let J=Z.length===3?Z.split("").map((Y)=>Y+Y).join(""):Z,X=parseInt(J,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${J.toLowerCase()}`}}function r8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let Z=document.createElement("div");if(Z.style.color="",Z.style.color=$,!Z.style.color)return null;let J=Z.style.color;try{if(document.body)Z.style.display="none",document.body.appendChild(Z),J=getComputedStyle(Z).color||Z.style.color,document.body.removeChild(Z)}catch{}let X=J.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Y=parseInt(X[1],10),j=parseInt(X[2],10),G=parseInt(X[3],10);if(![Y,j,G].every((O)=>Number.isFinite(O)))return null;let N=`#${[Y,j,G].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:j,b:G,hex:N}}function V4(_){return D2(_)||r8(_)}function w2(_,$,Z){let J=Math.round(_.r+($.r-_.r)*Z),X=Math.round(_.g+($.g-_.g)*Z),Y=Math.round(_.b+($.b-_.b)*Z);return`rgb(${J} ${X} ${Y})`}function I1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function O4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function f1(_){return K4[_]||K4.default}function s8(_){return _.mode==="auto"?O4():_.mode}function a8(_,$){let Z=f1(_);if($==="dark"&&Z.dark)return Z.dark;if($==="light"&&Z.light)return Z.light;return Z.dark||Z.light||_1}function t8(_,$,Z){let J=V4($);if(!J)return _;let X=D2(_.bgPrimary),Y=D2(_.bgSecondary),j=D2(_.bgHover),G=D2(_.borderColor);if(!X||!Y||!j||!G)return _;let O=D2(Z==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:w2(X,J,0.08),bgSecondary:w2(Y,J,0.12),bgHover:w2(j,J,0.16),borderColor:w2(G,J,0.08),accent:J.hex,accentHover:O?w2(J,O,0.18):J.hex}}function e8(_,$){if(typeof document>"u")return;let Z=document.documentElement,J=_.accent,X=V4(J),Y=X?I1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,j=X?I1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=X?I1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":J,"--accent-hover":_.accentHover||J,"--accent-soft":j,"--accent-soft-strong":G,"--danger-color":_.danger||_1.danger,"--success-color":_.success||_1.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(N).forEach(([O,K])=>{if(K)Z.style.setProperty(O,K)})}function _6(){if(typeof document>"u")return;let _=document.documentElement;d8.forEach(($)=>_.style.removeProperty($))}function t2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function $6(_,$){if(typeof document>"u")return;let Z=t2("theme-color");if(Z&&_)Z.setAttribute("content",_);let J=t2("msapplication-TileColor");if(J&&_)J.setAttribute("content",_);let X=t2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Y=t2("apple-mobile-web-app-status-bar-style");if(Y)Y.setAttribute("content",$==="dark"?"black-translucent":"default")}function Z6(){if(typeof window>"u")return;let _={...$1,mode:G4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function v1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let Z=N4(_?.theme||"default"),J=_?.tint?String(_.tint).trim():null,X=f1(Z),Y=s8(X),j=a8(Z,Y);$1={theme:Z,tint:J},G4=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=Z,G.dataset.tint=J?String(J):"",G.style.colorScheme=Y;let N=j;if(Z==="default"&&J)N=t8(j,J,Y);if(Z==="default"&&!J)_6();else e8(N,Y);if($6(N.bgPrimary,Y),Z6(),$.persist!==!1)if(I_(W4,Z),J)I_(T1,J);else I_(T1,"")}function e2(){if(f1($1.theme).mode!=="auto")return;v1($1,{persist:!1})}function q4(){if(typeof window>"u")return()=>{};let _=N4(c0(W4)||"default"),$=c0(T1),Z=$?$.trim():null;if(v1({theme:_,tint:Z},{persist:!1}),window.matchMedia&&!x1){let J=window.matchMedia("(prefers-color-scheme: dark)");if(J.addEventListener)J.addEventListener("change",e2);else if(J.addListener)J.addListener(e2);return x1=!0,()=>{if(J.removeEventListener)J.removeEventListener("change",e2);else if(J.removeListener)J.removeListener(e2);x1=!1}}return()=>{}}function z4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let Z=_.theme??_.name??_.colorTheme,J=_.tint??null;v1({theme:Z||"default",tint:J},{persist:!0})}function B4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return O4()}var Z1=/#(\w+)/g,J6=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),Y6=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),X6=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),j6={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},K6=new Set(["http:","https:","mailto:",""]);function Q4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function k2(_,$={}){if(!_)return null;let Z=String(_).trim();if(!Z)return null;if(Z.startsWith("#")||Z.startsWith("/"))return Z;if(Z.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(Z))return Z;return null}if(Z.startsWith("blob:"))return Z;try{let J=new URL(Z,typeof window<"u"?window.location.origin:"http://localhost");if(!K6.has(J.protocol))return null;return J.href}catch{return null}}function U4(_,$={}){if(!_)return"";let Z=new DOMParser().parseFromString(_,"text/html"),J=[],X=Z.createTreeWalker(Z.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=X.nextNode())J.push(Y);for(let j of J){let G=j.tagName.toLowerCase();if(!Y6.has(G)){let O=j.parentNode;if(!O)continue;while(j.firstChild)O.insertBefore(j.firstChild,j);O.removeChild(j);continue}let N=j6[G]||new Set;for(let O of Array.from(j.attributes)){let K=O.name.toLowerCase(),H=O.value;if(K.startsWith("on")){j.removeAttribute(O.name);continue}if(K.startsWith("data-")||K.startsWith("aria-"))continue;if(N.has(K)||X6.has(K)){if(K==="href"){let k=k2(H);if(!k)j.removeAttribute(O.name);else if(j.setAttribute(O.name,k),G==="a"&&!j.getAttribute("rel"))j.setAttribute("rel","noopener noreferrer")}else if(K==="src"){let k=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(H):H,L=k2(k,{allowDataImage:G==="img"});if(!L)j.removeAttribute(O.name);else j.setAttribute(O.name,L)}continue}j.removeAttribute(O.name)}}return Z.body.innerHTML}function H4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function J1(_,$=2){if(!_)return _;let Z=_;for(let J=0;J<$;J+=1){let X=H4(Z);if(X===Z)break;Z=X}return Z}function W6(_){if(!_)return{text:"",blocks:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=[],Y=!1,j=[];for(let G of Z){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,j=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let N=J.length;J.push(j.join(`
`)),X.push(`@@MERMAID_BLOCK_${N}@@`),Y=!1,j=[];continue}if(Y)j.push(G);else X.push(G)}if(Y)X.push("```mermaid"),X.push(...j);return{text:X.join(`
`),blocks:J}}function G6(_){if(!_)return _;return J1(_,5)}function N6(_){let $=new TextEncoder().encode(String(_||"")),Z="";for(let J of $)Z+=String.fromCharCode(J);return btoa(Z)}function V6(_){let $=atob(String(_||"")),Z=new Uint8Array($.length);for(let J=0;J<$.length;J+=1)Z[J]=$.charCodeAt(J);return new TextDecoder().decode(Z)}function O6(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(Z,J)=>{let X=Number(J),Y=$[X]??"",j=G6(Y);return`<div class="mermaid-container" data-mermaid="${N6(j)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function L4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,Z)=>{if(Z.includes(`
`))return`
\`\`\`
${Z}
\`\`\`
`;return`\`${Z}\``})}function F4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,Z)=>{let J=Z.trim(),X=J.startsWith("/"),Y=X?J.slice(1).trim():J,N=(Y.endsWith("/")?Y.slice(0,-1).trim():Y).split(/\s+/)[0]?.toLowerCase();if(!N||!J6.has(N))return $;if(N==="br")return X?"":"<br>";if(X)return`</${N}>`;return`<${N}>`})}function E4(_){if(!_)return _;let $=(Z)=>Z.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(Z,J)=>`<pre><code>${$(J)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(Z,J)=>`<code>${$(J)}</code>`)}function D4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=Z.nextNode()){if(!X.nodeValue)continue;let Y=J(X.nodeValue);if(Y!==X.nodeValue)X.nodeValue=Y}return $.body.innerHTML}function q6(_){if(!window.katex)return _;let $=(j)=>H4(j).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),Z=(j)=>{let G=[],N=j.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let K=G.length;return G.push(O),`@@CODE_BLOCK_${K}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let K=G.length;return G.push(O),`@@CODE_INLINE_${K}@@`}),{html:N,blocks:G}},J=(j,G)=>{if(!G.length)return j;return j.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,O)=>{let K=Number(O);return G[K]??""})},X=Z(_),Y=X.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(j,G,N)=>{try{let O=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${G}${O}`}catch(O){return`<span class="math-error" title="${Q4(O.message)}">${j}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(j,G,N)=>{if(/\s$/.test(N))return j;try{let O=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${G}${O}`}catch(O){return`${G}<span class="math-error" title="${Q4(O.message)}">$${N}$</span>`}}),J(Y,X.blocks)}function z6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=[],X;while(X=Z.nextNode())J.push(X);for(let Y of J){let j=Y.nodeValue;if(!j)continue;if(Z1.lastIndex=0,!Z1.test(j))continue;Z1.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let N=j.split(Z1);if(N.length<=1)continue;let O=$.createDocumentFragment();N.forEach((K,H)=>{if(H%2===1){let k=$.createElement("a");k.setAttribute("href","#"),k.className="hashtag",k.setAttribute("data-hashtag",K),k.textContent=`#${K}`,O.appendChild(k)}else O.appendChild($.createTextNode(K))}),Y.parentNode?.replaceChild(O,Y)}return $.body.innerHTML}function B6(_){if(!_)return _;let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=!1;for(let Y of Z){if(!X&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,J.push("$$");continue}if(X&&Y.trim().match(/^```\s*$/)){X=!1,J.push("$$");continue}J.push(Y)}return J.join(`
`)}function X2(_,$,Z={}){if(!_)return"";let J=B6(_),{text:X,blocks:Y}=W6(J),j=J1(X,2),N=L4(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=F4(N),K=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return K=E4(K),K=D4(K),K=q6(K),K=z6(K),K=O6(K,Y),K=U4(K,Z),K}function k4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),Z=J1($,2),X=L4(Z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=F4(X),j=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return j=E4(j),j=D4(j),j=U4(j),j}async function C2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:Z}=window.beautifulMermaid,X=B4()==="dark"?Z["tokyo-night"]:Z["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let j of Y)try{let G=j.dataset.mermaid,N=V6(G||""),O=J1(N,2),K=await $(O,{...X,transparent:!0});j.innerHTML=K,j.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${G.message}`,j.innerHTML="",j.appendChild(N),j.removeAttribute("data-mermaid")}}var C4="PiClaw";function R1(_,$){let Z=_||"PiClaw",J=Z.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=J.charCodeAt(0)%X.length,j=X[Y],G=Z.trim().toLowerCase(),N=typeof $==="string"?$.trim():"",K=(N?N:null)||(G==="PiClaw".toLowerCase()||G==="pi"?"/static/icon-192.png":null);return{letter:J,color:j,image:K}}function y4(_,$){if(!_)return"PiClaw";let Z=$[_]?.name||_;return Z?Z.charAt(0).toUpperCase()+Z.slice(1):"PiClaw"}function A4(_,$){if(!_)return null;let Z=$[_]||{};return Z.avatar_url||Z.avatarUrl||Z.avatar||null}function b4(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,j=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",N=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(N&&(G||j&&j!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],Z=String(_),J=0;for(let Y=0;Y<Z.length;Y+=1)J=(J*31+Z.charCodeAt(Y))%2147483647;let X=Math.abs(J)%$.length;return $[X]}function M4({status:_,draft:$,plan:Z,thought:J,pendingRequest:X,intent:Y,turnId:j,steerQueued:G,onPanelToggle:N}){let H=(X_)=>{if(!X_)return{text:"",totalLines:0,fullText:""};if(typeof X_==="string"){let H_=X_,q_=H_?H_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:H_,totalLines:q_,fullText:H_}}let Q_=X_.text||"",U_=X_.fullText||X_.full_text||Q_,O_=Number.isFinite(X_.totalLines)?X_.totalLines:U_?U_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Q_,totalLines:O_,fullText:U_}},k=160,L=(X_)=>{if(!X_)return 1;return Math.max(1,Math.ceil(X_.length/160))},A=(X_,Q_,U_)=>{let O_=(X_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!O_)return{text:"",omitted:0,totalLines:Number.isFinite(U_)?U_:0,visibleLines:0};let H_=O_.split(`
`),q_=H_.length>Q_?H_.slice(0,Q_).join(`
`):O_,b_=Number.isFinite(U_)?U_:H_.reduce((E_,R_)=>E_+L(R_),0),v_=q_?q_.split(`
`).reduce((E_,R_)=>E_+L(R_),0):0,F_=Math.max(b_-v_,0);return{text:q_,omitted:F_,totalLines:b_,visibleLines:v_}},b=H(Z),v=H(J),M=H($),U=Boolean(b.text)||b.totalLines>0,P=Boolean(v.text)||v.totalLines>0,C=Boolean(M.fullText?.trim()||M.text?.trim());if(!_&&!C&&!U&&!P&&!X&&!Y)return null;let[I,l]=f(new Set),o=(X_)=>l((Q_)=>{let U_=new Set(Q_),O_=!U_.has(X_);if(O_)U_.add(X_);else U_.delete(X_);if(typeof N==="function")N(X_,O_);return U_});m(()=>{l(new Set)},[j]);let Z_=_?.turn_id||j,V_=b4(Z_),$_=G?"turn-dot turn-dot-queued":"turn-dot",N_=(X_)=>X_,P_=Boolean(_?.last_activity||_?.lastActivity),d=Y?.kind||"info",Y_=d==="warning"?"#f59e0b":d==="error"?"var(--danger-color)":d==="success"?"var(--success-color)":V_,r="",h=_?.title,e=_?.status;if(_?.type==="plan")r=h?`Planning: ${h}`:"Planning...";else if(_?.type==="tool_call")r=h?`Running: ${h}`:"Running tool...";else if(_?.type==="tool_status")r=h?`${h}: ${e||"Working..."}`:e||"Working...";else if(_?.type==="error")r=h||"Agent error";else r=h||e||"Working...";if(P_)r="Last activity just now";let K_=({panelTitle:X_,text:Q_,fullText:U_,totalLines:O_,maxLines:H_,titleClass:q_,panelKey:b_})=>{let v_=I.has(b_),F_=U_||Q_||"",E_=typeof H_==="number",R_=v_&&E_,D_=E_?A(F_,H_,O_):{text:F_||"",omitted:0,totalLines:Number.isFinite(O_)?O_:0};if(!F_&&!(Number.isFinite(D_.totalLines)&&D_.totalLines>0))return null;let t_=`agent-thinking-body${E_?" agent-thinking-body-collapsible":""}`,r_=E_?`--agent-thinking-collapsed-lines: ${H_};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${v_?"true":"false"}
                data-collapsible=${E_?"true":"false"}
                style=${V_?`--turn-color: ${V_};`:""}
            >
                <div class="agent-thinking-title ${q_||""}">
                    ${V_&&z`<span class=${$_} aria-hidden="true"></span>`}
                    ${X_}
                    ${R_&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${X_} panel`}
                            onClick=${()=>o(b_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${t_}
                    style=${r_}
                    dangerouslySetInnerHTML=${{__html:k4(F_)}}
                />
                ${!v_&&D_.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>o(b_)}>
                        ▸ ${D_.omitted} more lines
                    </button>
                `}
                ${v_&&D_.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>o(b_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},J_=X?.tool_call?.title,M_=J_?`Awaiting approval: ${J_}`:"Awaiting approval";return z`
        <div class="agent-status-panel">
            ${Y&&z`
                <div
                    class="agent-thinking agent-thinking-intent"
                    aria-live="polite"
                    style=${Y_?`--turn-color: ${Y_};`:""}
                    title=${Y?.detail||""}
                >
                    <div class="agent-thinking-title intent">
                        ${Y_&&z`<span class=${$_} aria-hidden="true"></span>`}
                        ${Y.title}
                    </div>
                    ${Y.detail&&z`<div class="agent-thinking-body">${Y.detail}</div>`}
                </div>
            `}
            ${X&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${V_?`--turn-color: ${V_};`:""}>
                    <span class=${$_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${M_}</span>
                </div>
            `}
            ${U&&K_({panelTitle:N_("Planning"),text:b.text,fullText:b.fullText,totalLines:b.totalLines,panelKey:"plan"})}
            ${P&&K_({panelTitle:N_("Thoughts"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${C&&K_({panelTitle:N_("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&z`
                <div class=${`agent-status${P_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${V_?`--turn-color: ${V_};`:""}>
                    ${V_&&z`<span class=${$_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!P_&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${r}</span>
                </div>
            `}
        </div>
    `}function P4({request:_,onRespond:$}){if(!_)return null;let{request_id:Z,tool_call:J,options:X}=_,Y=J?.title||"Agent Request",j=J?.kind||"other",G=J?.rawInput||{},N=G.command||G.commands&&G.commands[0]||null,O=G.diff||null,K=G.fileName||G.path||null,H=J?.description||G.description||G.explanation||null,L=(Array.isArray(J?.locations)?J.locations:[]).map((U)=>U?.path).filter((U)=>Boolean(U)),A=Array.from(new Set([K,...L].filter(Boolean)));console.log("AgentRequestModal:",{request_id:Z,tool_call:J,options:X});let b=async(U)=>{try{await M1(Z,U),$()}catch(P){console.error("Failed to respond to agent request:",P)}},v=async()=>{try{await l3(Y,`Auto-approved: ${Y}`),await M1(Z,"approved"),$()}catch(U){console.error("Failed to add to whitelist:",U)}},M=X&&X.length>0;return z`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(H||N||O||A.length>0)&&z`
                    <div class="agent-request-body">
                        ${H&&z`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${A.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${A.map((U,P)=>z`<li key=${P}>${U}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${N&&z`
                            <pre class="agent-request-command">${N}</pre>
                        `}
                        ${O&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?X.map((U)=>z`
                            <button 
                                key=${U.optionId||U.id||String(U)}
                                class="agent-request-btn ${U.kind==="allow_once"||U.kind==="allow_always"?"primary":""}"
                                onClick=${()=>b(U.optionId||U.id||U)}
                            >
                                ${U.name||U.label||U.optionId||U.id||String(U)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>b("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>b("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${v}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function w4({status:_}){if(_==="connected")return null;return z`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function S4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let J=new Date-$,X=J/1000,Y=86400000;if(J<Y){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(J<5*Y){let N=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${O}`}let j=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${j} ${G}`}function S2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function P0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function y2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var Q6=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),U6=new Set(["text/markdown"]);function x2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(Q6.has($)||$.startsWith("text/"))return"text";return"unsupported"}function x4(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return U6.has($)}function I4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function H6(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?P0($):null},{label:"Added",value:_?.created_at?y2(_.created_at):null}].filter((J)=>J.value)}function T4({mediaId:_,info:$,onClose:Z}){let J=$?.filename||`attachment-${_}`,X=a_(()=>x2($?.content_type),[$?.content_type]),Y=I4(X),j=a_(()=>x4($?.content_type),[$?.content_type]),[G,N]=f(X==="text"||X==="pdf"),[O,K]=f(""),[H,k]=f(null),[L,A]=f(null),b=F(null),v=a_(()=>H6($),[$]),M=a_(()=>{if(!j||!O)return"";return X2(O)},[j,O]);return m(()=>{let U=(P)=>{if(P.key==="Escape")Z()};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[Z]),m(()=>{if(!b.current||!M)return;C2(b.current);return},[M]),m(()=>{let U=!1,P=null;async function C(){if(X==="text"){N(!0),A(null);try{let I=await r3(_);if(!U)K(I)}catch{if(!U)A("Failed to load text preview.")}finally{if(!U)N(!1)}return}if(X==="pdf"){N(!0),A(null);try{let I=await s3(_);if(P=URL.createObjectURL(I),!U)k(P)}catch{if(!U)A("Failed to load PDF preview.")}finally{if(!U)N(!1)}return}N(!1)}return C(),()=>{if(U=!0,P)URL.revokeObjectURL(P)}},[_,X]),z`
        <div class="image-modal attachment-preview-modal" onClick=${Z}>
            <div class="attachment-preview-shell" onClick=${(U)=>{U.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${J}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${m0(_)}
                            download=${J}
                            class="attachment-preview-download"
                            onClick=${(U)=>U.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${Z}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&L&&z`<div class="attachment-preview-state">${L}</div>`}
                    ${!G&&!L&&X==="image"&&z`
                        <img class="attachment-preview-image" src=${m0(_)} alt=${J} />
                    `}
                    ${!G&&!L&&X==="pdf"&&H&&z`
                        <iframe class="attachment-preview-frame" src=${H} title=${J}></iframe>
                    `}
                    ${!G&&!L&&X==="text"&&j&&z`
                        <div
                            ref=${b}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:M}}
                        />
                    `}
                    ${!G&&!L&&X==="text"&&!j&&z`
                        <pre class="attachment-preview-text">${O}</pre>
                    `}
                    ${!G&&!L&&X==="unsupported"&&z`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${v.map((U)=>z`
                        <div class="attachment-preview-meta-item" key=${U.label}>
                            <span class="attachment-preview-meta-label">${U.label}</span>
                            <span class="attachment-preview-meta-value">${U.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function f4({src:_,onClose:$}){return m(()=>{let Z=(J)=>{if(J.key==="Escape")$()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[$]),z`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function L6({mediaId:_,onPreview:$}){let[Z,J]=f(null);if(m(()=>{P2(_).then(J).catch(()=>{})},[_]),!Z)return null;let X=Z.filename||"file",Y=Z.metadata?.size,j=Y?P0(Y):"",N=x2(Z.content_type)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(O)=>O.stopPropagation()}>
            <a href=${m0(_)} download=${X} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${X}</span>
                    <span class="file-meta-row">
                        ${j&&z`<span class="file-size">${j}</span>`}
                        ${Z.content_type&&z`<span class="file-size">${Z.content_type}</span>`}
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
                onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:_,info:Z})}}
            >
                ${N}
            </button>
        </div>
    `}function F6({attachment:_,onPreview:$}){let Z=Number(_?.id),[J,X]=f(null);m(()=>{if(!Number.isFinite(Z))return;P2(Z).then(X).catch(()=>{});return},[Z]);let Y=J?.filename||_.label||`attachment-${_.id}`,j=Number.isFinite(Z)?m0(Z):null,N=x2(J?.content_type)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${Y}>
            ${j?z`
                    <a href=${j} download=${Y} class="attachment-pill-main" onClick=${(O)=>O.stopPropagation()}>
                        <${s0}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:z`
                    <${s0}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(Z)&&J&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${N}
                    onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:Z,info:J})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Y1({annotations:_}){if(!_)return null;let{audience:$,priority:Z,lastModified:J}=_,X=J?y2(J):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof Z==="number"&&z`
                <span class="content-annotation">Priority: ${Z}</span>
            `}
            ${X&&z`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function E6({block:_}){let $=_.title||_.name||_.uri,Z=_.description,J=_.size?P0(_.size):"",X=_.mime_type||"",Y=k6(X),j=k2(_.uri);return z`
        <a
            href=${j||"#"}
            class="resource-link"
            target=${j?"_blank":void 0}
            rel=${j?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${Z&&z`<div class="resource-link-description">${Z}</div>`}
                <div class="resource-link-meta">
                    ${X&&z`<span>${X}</span>`}
                    ${J&&z`<span>${J}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function D6({block:_}){let[$,Z]=f(!1),J=_.uri||"Embedded resource",X=_.text||"",Y=Boolean(_.data),j=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),Z(!$)}}>
                ${$?"▼":"▶"} ${J}
            </button>
            ${$&&z`
                ${X&&z`<pre class="resource-embed-content">${X}</pre>`}
                ${Y&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${j&&z`<span class="resource-embed-blob-meta">${j}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let N=new Blob([Uint8Array.from(atob(_.data),(H)=>H.charCodeAt(0))],{type:j||"application/octet-stream"}),O=URL.createObjectURL(N),K=document.createElement("a");K.href=O,K.download=J.split("/").pop()||"resource",K.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function k6(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function C6({preview:_}){let $=k2(_.url),Z=k2(_.image,{allowDataImage:!0}),J=Z?`background-image: url('${Z}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${Z?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${J}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${X||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function y6(_,$){return typeof _==="string"?_:""}var A6=1800,b6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,M6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,P6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function w6(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let Z=document.createElement("textarea");Z.value=$,Z.setAttribute("readonly",""),Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none",document.body.appendChild(Z),Z.select(),Z.setSelectionRange(0,Z.value.length);let J=document.execCommand("copy");return document.body.removeChild(Z),J}catch{return!1}}function S6(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let Z=new Map,J=[],X=(Y,j)=>{let G=j||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=M6,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=P6,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=b6,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let j=document.createElement("div");j.className="post-code-block",Y.parentNode?.insertBefore(j,Y),j.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",X(G,"idle"),j.appendChild(G);let N=async(O)=>{O.preventDefault(),O.stopPropagation();let H=Y.querySelector("code")?.textContent||"",k=await w6(H);X(G,k?"success":"error");let L=Z.get(G);if(L)clearTimeout(L);let A=setTimeout(()=>{X(G,"idle"),Z.delete(G)},A6);Z.set(G,A)};G.addEventListener("click",N),J.push(()=>{G.removeEventListener("click",N);let O=Z.get(G);if(O)clearTimeout(O);if(j.parentNode)j.parentNode.insertBefore(Y,j),j.remove()})}),()=>{J.forEach((Y)=>Y())}}function x6(_){if(!_)return{content:_,fileRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Files:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,fileRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O))X.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let j=Z.slice(0,J),G=Z.slice(Y),N=[...j,...G].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:X}}function I6(_){if(!_)return{content:_,messageRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Referenced messages:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,messageRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let H=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(H)X.push(H[1])}else if(!O.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let j=Z.slice(0,J),G=Z.slice(Y),N=[...j,...G].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:X}}function T6(_){if(!_)return{content:_,attachments:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Images:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,attachments:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let K=O.replace(/^\s*-\s+/,"").trim(),H=K.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||K.match(/^attachment:([^\s]+)\s+(.+)$/i);if(H){let k=H[1],L=(H[2]||"").trim()||k;X.push({id:k,label:L,raw:K})}else X.push({id:null,label:K,raw:K})}else if(!O.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let j=Z.slice(0,J),G=Z.slice(Y),N=[...j,...G].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:X}}function f6(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v6(_,$){if(!_||!$)return _;let Z=String($).trim().split(/\s+/).filter(Boolean);if(Z.length===0)return _;let J=Z.map(f6).sort((K,H)=>H.length-K.length),X=new RegExp(`(${J.join("|")})`,"gi"),Y=new RegExp(`^(${J.join("|")})$`,"i"),j=new DOMParser().parseFromString(_,"text/html"),G=j.createTreeWalker(j.body,NodeFilter.SHOW_TEXT),N=[],O;while(O=G.nextNode())N.push(O);for(let K of N){let H=K.nodeValue;if(!H||!X.test(H)){X.lastIndex=0;continue}X.lastIndex=0;let k=K.parentElement;if(k&&k.closest("code, pre, script, style"))continue;let L=H.split(X).filter((b)=>b!=="");if(L.length===0)continue;let A=j.createDocumentFragment();for(let b of L)if(Y.test(b)){let v=j.createElement("mark");v.className="search-highlight-term",v.textContent=b,A.appendChild(v)}else A.appendChild(j.createTextNode(b));K.parentNode.replaceChild(A,K)}return j.body.innerHTML}function v4({post:_,onClick:$,onHashtagClick:Z,onMessageRef:J,onScrollToMessage:X,agentName:Y,agentAvatarUrl:j,userName:G,userAvatarUrl:N,userAvatarBackground:O,onDelete:K,isThreadReply:H,isThreadPrev:k,isThreadNext:L,isRemoving:A,highlightQuery:b,onFileRef:v}){let[M,U]=f(null),P=F(null),C=_.data,I=C.type==="agent_response",l=G||"You",o=I?Y||C4:l,Z_=I?R1(Y,j):R1(l,N),V_=typeof O==="string"?O.trim().toLowerCase():"",$_=!I&&Z_.image&&(V_==="clear"||V_==="transparent"),N_=I&&Boolean(Z_.image),P_=`background-color: ${$_||N_?"transparent":Z_.color}`,d=C.content_meta,Y_=Boolean(d?.truncated),r=Boolean(d?.preview),h=Y_&&!r,e=Y_?{originalLength:Number.isFinite(d?.original_length)?d.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,K_=y6(C.content,C.link_previews),{content:J_,fileRefs:M_}=x6(K_),{content:X_,messageRefs:Q_}=I6(J_),{content:U_,attachments:O_}=T6(X_);K_=U_;let H_=Boolean(K_)&&!h,q_=typeof b==="string"?b.trim():"",b_=a_(()=>{if(!K_)return"";let x=X2(K_,Z);return q_?v6(x,q_):x},[K_,q_]),v_=(x,__)=>{x.stopPropagation(),U(m0(__))},[F_,E_]=f(null),R_=(x)=>{E_(x)},D_=(x)=>{x.stopPropagation(),K?.(_)},t_=(x,__)=>{let x_=new Set;if(!x||__.length===0)return{content:x,usedIds:x_};return{content:x.replace(/attachment:([^\s)"']+)/g,(U0,J0,n_,a0)=>{let Y0=J0.replace(/^\/+/,""),X0=__.find((j0)=>j0.name&&j0.name.toLowerCase()===Y0.toLowerCase()&&!x_.has(j0.id))||__.find((j0)=>!x_.has(j0.id));if(!X0)return U0;if(x_.add(X0.id),a0.slice(Math.max(0,n_-2),n_)==="](")return`/media/${X0.id}`;return X0.name||"attachment"}),usedIds:x_}},r_=[],l_=[],C_=[],q0=[],g_=[],z0=[],S_=C.content_blocks||[],B0=C.media_ids||[],L_=0;if(S_.length>0)S_.forEach((x)=>{if(x?.type==="text"&&x.annotations)z0.push(x.annotations);if(x?.type==="resource_link")q0.push(x);else if(x?.type==="resource")g_.push(x);else if(x?.type==="file"){let __=B0[L_++];if(__)l_.push(__),C_.push({id:__,name:x?.name||x?.filename||x?.title})}else if(x?.type==="image"||!x?.type){let __=B0[L_++];if(__){let x_=typeof x?.mime_type==="string"?x.mime_type:void 0;r_.push({id:__,annotations:x?.annotations,mimeType:x_}),C_.push({id:__,name:x?.name||x?.filename||x?.title})}}});else if(B0.length>0)B0.forEach((x)=>{r_.push({id:x,annotations:null}),C_.push({id:x,name:null})});if(O_.length>0)O_.forEach((x)=>{if(!x?.id)return;let __=C_.find((x_)=>String(x_.id)===String(x.id));if(__&&!__.name)__.name=x.label});let{content:I0,usedIds:D0}=t_(K_,C_);K_=I0;let Q0=r_.filter(({id:x})=>!D0.has(x)),s_=l_.filter((x)=>!D0.has(x)),o_=O_.length>0?O_.map((x,__)=>({id:x.id||`attachment-${__+1}`,label:x.label||`attachment-${__+1}`})):C_.map((x,__)=>({id:x.id,label:x.name||`attachment-${__+1}`}));return m(()=>{if(!P.current)return;return C2(P.current),S6(P.current)},[b_]),z`
        <div id=${`post-${_.id}`} class="post ${I?"agent-post":""} ${H?"thread-reply":""} ${k?"thread-prev":""} ${L?"thread-next":""} ${A?"removing":""}" onClick=${$}>
            <div class="post-avatar ${I?"agent-avatar":""} ${Z_.image?"has-image":""}" style=${P_}>
                ${Z_.image?z`<img src=${Z_.image} alt=${o} />`:Z_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${D_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${o}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(x)=>{if(x.preventDefault(),x.stopPropagation(),J)J(_.id)}}>${S4(_.timestamp)}</a>
                </div>
                ${h&&e&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${S2(e.originalLength)} chars
                            ${e.maxLength?z` • Display limit: ${S2(e.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${r&&e&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${S2(e.maxLength)} of ${S2(e.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(M_.length>0||Q_.length>0||o_.length>0)&&z`
                    <div class="post-file-refs">
                        ${Q_.map((x)=>{let __=(x_)=>{if(x_.preventDefault(),x_.stopPropagation(),X)X(x);else{let Z0=document.getElementById("post-"+x);if(Z0)Z0.scrollIntoView({behavior:"smooth",block:"center"}),Z0.classList.add("post-highlight"),setTimeout(()=>Z0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${x}`} class="post-msg-pill-link" onClick=${__}>
                                    <${s0}
                                        prefix="post"
                                        label=${"msg:"+x}
                                        title=${"Message "+x}
                                        icon="message"
                                        onClick=${__}
                                    />
                                </a>
                            `})}
                        ${M_.map((x)=>{let __=x.split("/").pop()||x;return z`
                                <${s0}
                                    prefix="post"
                                    label=${__}
                                    title=${x}
                                    onClick=${()=>v?.(x)}
                                />
                            `})}
                        ${o_.map((x)=>z`
                            <${F6}
                                key=${x.id}
                                attachment=${x}
                                onPreview=${R_}
                            />
                        `)}
                    </div>
                `}
                ${H_&&z`
                    <div 
                        ref=${P}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:b_}}
                        onClick=${(x)=>{if(x.target.classList.contains("hashtag")){x.preventDefault(),x.stopPropagation();let __=x.target.dataset.hashtag;if(__)Z?.(__)}else if(x.target.tagName==="IMG")x.preventDefault(),x.stopPropagation(),U(x.target.src)}}
                    />
                `}
                ${z0.length>0&&z`
                    ${z0.map((x,__)=>z`
                        <${Y1} key=${__} annotations=${x} />
                    `)}
                `}
                ${Q0.length>0&&z`
                    <div class="media-preview">
                        ${Q0.map(({id:x,mimeType:__})=>{let Z0=typeof __==="string"&&__.toLowerCase().startsWith("image/svg")?m0(x):d3(x);return z`
                                <img 
                                    key=${x} 
                                    src=${Z0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(U0)=>v_(U0,x)}
                                />
                            `})}
                    </div>
                `}
                ${Q0.length>0&&z`
                    ${Q0.map(({annotations:x},__)=>z`
                        ${x&&z`<${Y1} key=${__} annotations=${x} />`}
                    `)}
                `}
                ${s_.length>0&&z`
                    <div class="file-attachments">
                        ${s_.map((x)=>z`
                            <${L6} key=${x} mediaId=${x} onPreview=${R_} />
                        `)}
                    </div>
                `}
                ${q0.length>0&&z`
                    <div class="resource-links">
                        ${q0.map((x,__)=>z`
                            <div key=${__}>
                                <${E6} block=${x} />
                                <${Y1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${g_.length>0&&z`
                    <div class="resource-embeds">
                        ${g_.map((x,__)=>z`
                            <div key=${__}>
                                <${D6} block=${x} />
                                <${Y1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${C.link_previews.map((x,__)=>z`
                            <${C6} key=${__} preview=${x} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${M&&z`<${f4} src=${M} onClose=${()=>U(null)} />`}
        ${F_&&z`
            <${T4}
                mediaId=${F_.mediaId}
                info=${F_.info}
                onClose=${()=>E_(null)}
            />
        `}
    `}function R4({posts:_,hasMore:$,onLoadMore:Z,onPostClick:J,onHashtagClick:X,onMessageRef:Y,onScrollToMessage:j,onFileRef:G,emptyMessage:N,timelineRef:O,agents:K,user:H,onDeletePost:k,reverse:L=!0,removingPostIds:A,searchQuery:b}){let[v,M]=f(!1),U=F(null),P=typeof IntersectionObserver<"u",C=S(async()=>{if(!Z||!$||v)return;M(!0);try{await Z({preserveScroll:!0,preserveMode:"top"})}finally{M(!1)}},[$,v,Z]),I=S((d)=>{let{scrollTop:Y_,scrollHeight:r,clientHeight:h}=d.target,e=L?r-h-Y_:Y_,K_=Math.max(300,h);if(e<K_)C()},[L,C]);m(()=>{if(!P)return;let d=U.current,Y_=O?.current;if(!d||!Y_)return;let r=300,h=new IntersectionObserver((e)=>{for(let K_ of e){if(!K_.isIntersecting)continue;C()}},{root:Y_,rootMargin:`${r}px 0px ${r}px 0px`,threshold:0});return h.observe(d),()=>h.disconnect()},[P,$,Z,O,C]);let l=F(C);if(l.current=C,m(()=>{if(P)return;if(!O?.current)return;let{scrollTop:d,scrollHeight:Y_,clientHeight:r}=O.current,h=L?Y_-r-d:d,e=Math.max(300,r);if(h<e)l.current?.()},[P,_,$,L,O]),m(()=>{if(!O?.current)return;if(!$||v)return;let{scrollTop:d,scrollHeight:Y_,clientHeight:r}=O.current,h=L?Y_-r-d:d,e=Math.max(300,r);if(Y_<=r+1||h<e)l.current?.()},[_,$,v,L,O]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${N||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let o=_.slice().sort((d,Y_)=>d.id-Y_.id),Z_=(d)=>{let Y_=d?.data?.thread_id;if(Y_===null||Y_===void 0||Y_==="")return null;let r=Number(Y_);return Number.isFinite(r)?r:null},V_=new Map;for(let d=0;d<o.length;d+=1){let Y_=o[d],r=Number(Y_?.id),h=Z_(Y_);if(h!==null){let e=V_.get(h)||{anchorIndex:-1,replyIndexes:[]};e.replyIndexes.push(d),V_.set(h,e)}else if(Number.isFinite(r)){let e=V_.get(r)||{anchorIndex:-1,replyIndexes:[]};e.anchorIndex=d,V_.set(r,e)}}let $_=new Map;for(let[d,Y_]of V_.entries()){let r=new Set;if(Y_.anchorIndex>=0)r.add(Y_.anchorIndex);for(let h of Y_.replyIndexes)r.add(h);$_.set(d,Array.from(r).sort((h,e)=>h-e))}let N_=o.map((d,Y_)=>{let r=Z_(d);if(r===null)return{hasThreadPrev:!1,hasThreadNext:!1};let h=$_.get(r);if(!h||h.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let e=h.indexOf(Y_);if(e<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:e>0,hasThreadNext:e<h.length-1}}),P_=z`<div class="timeline-sentinel" ref=${U}></div>`;return z`
        <div class="timeline ${L?"reverse":"normal"}" ref=${O} onScroll=${I}>
            <div class="timeline-content">
                ${L?P_:null}
                ${o.map((d,Y_)=>{let r=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),h=A?.has?.(d.id),e=N_[Y_]||{};return z`
                    <${v4}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${r}
                        isThreadPrev=${e.hasThreadPrev}
                        isThreadNext=${e.hasThreadNext}
                        isRemoving=${h}
                        highlightQuery=${b}
                        agentName=${y4(d.data?.agent_id,K||{})}
                        agentAvatarUrl=${A4(d.data?.agent_id,K||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>J?.(d)}
                        onHashtagClick=${X}
                        onMessageRef=${Y}
                        onScrollToMessage=${j}
                        onFileRef=${G}
                        onDelete=${k}
                    />
                `})}
                ${L?null:P_}
            </div>
        </div>
    `}class g4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,Z=-1/0;for(let J of this.extensions.values()){if(J.placement!=="tabs")continue;if(!J.canHandle)continue;try{let X=J.canHandle(_);if(X===!1||X===0)continue;let Y=X===!0?0:typeof X==="number"?X:0;if(Y>Z)Z=Y,$=J}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${J.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var d_=new g4;var X1=null,g1=null;function u4(){if(g1)return Promise.resolve(g1);if(!X1)X1=import("/static/dist/editor.bundle.js").then((_)=>{return g1=_,_}).catch((_)=>{throw X1=null,_});return X1}class m4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await u4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var u1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new m4(_,$)}};function m1(){u4().catch(()=>{})}class c4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let Z=document.createElement("div");Z.className="terminal-pane-header";let J=document.createElement("span");J.className="terminal-pane-title",J.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",Z.append(J,X);let Y=document.createElement("div");Y.className="terminal-pane-body",Y.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(Z,Y),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var c1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new c4(_,$)}};function j2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function R6(_,$){let Z=String(_||"").trim();if(!Z)return Z;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(Z)||Z.startsWith("#")||Z.startsWith("data:")||Z.startsWith("blob:"))return Z;let J=Z.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=J?.[1]||Z,Y=J?.[2]||"",j=J?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),O=X.startsWith("/")?X:`${G?`${G}/`:""}${X}`,K=[];for(let k of O.split("/")){if(!k||k===".")continue;if(k===".."){if(K.length>0)K.pop();continue}K.push(k)}let H=K.join("/");return`${w1(H)}${Y}${j}`}function I2(_){return _?.preview||null}function g6(_){let $=String(_||""),Z=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),J=Z>=0?$.slice(Z+1):$,X=J.lastIndexOf(".");if(X<=0||X===J.length-1)return"none";return J.slice(X+1)}function u6(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function m6(_,$){let Z=$?.path||_?.path||"",J=[];if($?.content_type)J.push(`<span><strong>type:</strong> ${j2($.content_type)}</span>`);if(typeof $?.size==="number")J.push(`<span><strong>size:</strong> ${j2(P0($.size))}</span>`);if($?.mtime)J.push(`<span><strong>modified:</strong> ${j2(y2($.mtime))}</span>`);if(J.push(`<span><strong>kind:</strong> ${j2(u6($))}</span>`),J.push(`<span><strong>extension:</strong> ${j2(g6(Z))}</span>`),Z)J.push(`<span><strong>path:</strong> ${j2(Z)}</span>`);if($?.truncated)J.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${J.join("")}</div>`}function c6(_){let $=I2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let Z=m6(_,$);if($.kind==="image"){let J=$.url||($.path?w1($.path):"");return`${Z}
            <div class="workspace-preview-image">
                <img src="${j2(J)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let J=X2($.text||"",null,{rewriteImageSrc:(X)=>R6(X,$.path||_?.path)});return`${Z}<div class="workspace-preview-text">${J}</div>`}return`${Z}<pre class="workspace-preview-text"><code>${j2($.text||"")}</code></pre>`}if($.kind==="binary")return`${Z}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${Z}<div class="workspace-preview-text">No preview available.</div>`}class p1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=c6(this.context)}getContent(){let _=I2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let Z=I2(this.context);if(Z&&Z.kind==="text"){if(Z.text=_,$!==void 0)Z.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var h1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=I2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new p1(_,$)}},i1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return I2(_)||_?.path?1:!1},mount(_,$){return new p1(_,$)}};class p4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let Z of this.listeners)try{Z(_,$)}catch{}}open(_,$){let Z=this.tabs.get(_);if(!Z)Z={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,Z);return this.activate(_),Z}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,Z]of this.tabs)if($!==_&&!Z.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((J)=>J!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let Z=this.tabs.get(_);if(!Z||Z.dirty===$)return;Z.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let Z=this.tabs.get(_);if(Z)Z.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,Z){let J=this.tabs.get(_);if(!J)return;if(this.tabs.delete(_),J.id=$,J.path=$,J.label=Z||$.split("/").pop()||$,this.tabs.set($,J),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($+1)%_.length];this.activate(Z.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($-1+_.length)%_.length];this.activate(Z.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var A_=new p4;var j1="workspaceExplorerScale",p6=["compact","default","comfortable"],h6=new Set(p6),i6={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function h4(_,$="default"){if(typeof _!=="string")return $;let Z=_.trim().toLowerCase();return h6.has(Z)?Z:$}function l1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),Z=Boolean(window.matchMedia?.("(hover: none)")?.matches),J=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||J&&Z}}function l6(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function o6(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function o1(_={}){let $=l6(_),Z=_.stored?h4(_.stored,$):$;return o6(Z,_)}function i4(_){return i6[h4(_)]}var n6=60000,d4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function r4(_,$,Z,J=0,X=[]){if(!Z&&d4(_))return X;if(!_)return X;if(X.push({node:_,depth:J}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)r4(Y,$,Z,J+1,X);return X}function l4(_,$,Z){if(!_)return"";let J=[],X=(Y)=>{if(!Z&&d4(Y))return;if(J.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let j of Y.children)X(j)};return X(_),J.join("|")}function s1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let Z=Array.isArray(_.children)?_.children:null,J=Array.isArray($.children)?$.children:null;if(!J)return _;let X=Z?new Map(Z.map((G)=>[G?.path,G])):new Map,Y=!Z||Z.length!==J.length,j=J.map((G)=>{let N=s1(X.get(G.path),G);if(N!==X.get(G.path))Y=!0;return N});return Y?{...$,children:j}:_}function d1(_,$,Z){if(!_)return _;if(_.path===$)return s1(_,Z);if(!Array.isArray(_.children))return _;let J=!1,X=_.children.map((Y)=>{let j=d1(Y,$,Z);if(j!==Y)J=!0;return j});return J?{..._,children:X}:_}var s4=4,n1=14,d6=8,r6=16;function a4(_){if(!_)return 0;if(_.type==="file"){let J=Math.max(0,Number(_.size)||0);return _.__bytes=J,J}let $=Array.isArray(_.children)?_.children:[],Z=0;for(let J of $)Z+=a4(J);return _.__bytes=Z,Z}function t4(_,$=0){let Z=Math.max(0,Number(_?.__bytes??_?.size??0)),J={name:_?.name||_?.path||".",path:_?.path||".",size:Z,children:[]};if(!_||_.type!=="dir"||$>=s4)return J;let X=Array.isArray(_.children)?_.children:[],Y=[];for(let G of X){let N=Math.max(0,Number(G?.__bytes??G?.size??0));if(N<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:N});else Y.push({kind:"file",name:G.name,path:G.path,size:N})}Y.sort((G,N)=>N.size-G.size);let j=Y;if(Y.length>n1){let G=Y.slice(0,n1-1),N=Y.slice(n1-1),O=N.reduce((K,H)=>K+H.size,0);G.push({kind:"other",name:`+${N.length} more`,path:`${J.path}/[other]`,size:O}),j=G}return J.children=j.map((G)=>{if(G.kind==="dir")return t4(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),J}function o4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,Z=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function e4(_,$,Z){let J=((_+Math.PI/2)*180/Math.PI+360)%360,X=Z?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=Z?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${J.toFixed(1)} ${X}% ${Y}%)`}function K1(_,$,Z,J){return{x:_+Z*Math.cos(J),y:$+Z*Math.sin(J)}}function a1(_,$,Z,J,X,Y){let j=Math.PI*2-0.0001,G=Y-X>j?X+j:Y,N=K1(_,$,J,X),O=K1(_,$,J,G),K=K1(_,$,Z,G),H=K1(_,$,Z,X),k=G-X>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${J} ${J} 0 ${k} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${k} 0 ${H.x.toFixed(3)} ${H.y.toFixed(3)}`,"Z"].join(" ")}var _8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function $8(_,$,Z){let J=[],X=[],Y=Math.max(0,Number($)||0),j=(G,N,O,K)=>{let H=Array.isArray(G?.children)?G.children:[];if(!H.length)return;let k=Math.max(0,Number(G.size)||0);if(k<=0)return;let L=O-N,A=N;H.forEach((b,v)=>{let M=Math.max(0,Number(b.size)||0);if(M<=0)return;let U=M/k,P=A,C=v===H.length-1?O:A+L*U;if(A=C,C-P<0.003)return;let I=_8[K];if(I){let l=e4(P,K,Z);if(J.push({key:b.path,path:b.path,label:b.name,size:M,color:l,depth:K,startAngle:P,endAngle:C,innerRadius:I[0],outerRadius:I[1],d:a1(120,120,I[0],I[1],P,C)}),K===1)X.push({key:b.path,name:b.name,size:M,pct:Y>0?M/Y*100:0,color:l})}if(K<s4)j(b,P,C,K+1)})};return j(_,-Math.PI/2,Math.PI*3/2,1),{segments:J,legend:X}}function r1(_,$){if(!_||!$)return null;if(_.path===$)return _;let Z=Array.isArray(_.children)?_.children:[];for(let J of Z){let X=r1(J,$);if(X)return X}return null}function Z8(_,$,Z,J){if(!Z||Z<=0)return{segments:[],legend:[]};let X=_8[1];if(!X)return{segments:[],legend:[]};let Y=-Math.PI/2,j=Math.PI*3/2,G=e4(Y,1,J),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:Z,color:G,depth:1,startAngle:Y,endAngle:j,innerRadius:X[0],outerRadius:X[1],d:a1(120,120,X[0],X[1],Y,j)}],legend:[{key:O,name:_,size:Z,pct:100,color:G}]}}function n4(_,$=!1,Z=!1){if(!_)return null;let J=a4(_),X=t4(_,0),Y=X.size||J,{segments:j,legend:G}=$8(X,Y,Z);if(!j.length&&Y>0){let N=Z8("[files]",X.path,Y,Z);j=N.segments,G=N.legend}return{root:X,totalSize:Y,segments:j,legend:G,truncated:$,isDarkTheme:Z}}function s6({payload:_}){if(!_)return null;let[$,Z]=f(null),[J,X]=f(_?.root?.path||"."),[Y,j]=f(()=>[_?.root?.path||"."]),[G,N]=f(!1);m(()=>{let $_=_?.root?.path||".";X($_),j([$_]),Z(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!J)return;N(!0);let $_=setTimeout(()=>N(!1),180);return()=>clearTimeout($_)},[J]);let O=a_(()=>{return r1(_.root,J)||_.root},[_?.root,J]),K=O?.size||_.totalSize||0,{segments:H,legend:k}=a_(()=>{let $_=$8(O,K,_.isDarkTheme);if($_.segments.length>0)return $_;if(K<=0)return $_;let N_=O?.children?.length?"Total":"[files]";return Z8(N_,O?.path||_?.root?.path||".",K,_.isDarkTheme)},[O,K,_.isDarkTheme,_?.root?.path]),[L,A]=f(H),b=F(new Map),v=F(0);m(()=>{let $_=b.current,N_=new Map(H.map((r)=>[r.key,r])),P_=performance.now(),d=220,Y_=(r)=>{let h=Math.min(1,(r-P_)/220),e=h*(2-h),K_=H.map((J_)=>{let X_=$_.get(J_.key)||{startAngle:J_.startAngle,endAngle:J_.startAngle,innerRadius:J_.innerRadius,outerRadius:J_.innerRadius},Q_=(b_,v_)=>b_+(v_-b_)*e,U_=Q_(X_.startAngle,J_.startAngle),O_=Q_(X_.endAngle,J_.endAngle),H_=Q_(X_.innerRadius,J_.innerRadius),q_=Q_(X_.outerRadius,J_.outerRadius);return{...J_,d:a1(120,120,H_,q_,U_,O_)}});if(A(K_),h<1)v.current=requestAnimationFrame(Y_)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame(Y_),b.current=N_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[H]);let M=L.length?L:H,U=K>0?P0(K):"0 B",P=O?.name||"",I=(P&&P!=="."?P:"Total")||"Total",l=U,o=Y.length>1,Z_=($_)=>{if(!$_?.path)return;let N_=r1(_.root,$_.path);if(!N_||!Array.isArray(N_.children)||N_.children.length===0)return;j((P_)=>[...P_,N_.path]),X(N_.path),Z(null)},V_=()=>{if(!o)return;j(($_)=>{let N_=$_.slice(0,-1);return X(N_[N_.length-1]||_?.root?.path||"."),N_}),Z(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${M.length}
                data-base-size=${K}>
                ${M.map(($_)=>z`
                    <path
                        key=${$_.key}
                        d=${$_.d}
                        fill=${$_.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===$_.key?" is-hovered":""}`}
                        onMouseEnter=${()=>Z($_)}
                        onMouseLeave=${()=>Z(null)}
                        onTouchStart=${()=>Z($_)}
                        onTouchEnd=${()=>Z(null)}
                        onClick=${()=>Z_($_)}
                    >
                        <title>${$_.label} — ${P0($_.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${o?" is-drill":""}`}
                    onClick=${V_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${I}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${l}</text>
                </g>
            </svg>
            ${k.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${k.slice(0,8).map(($_)=>z`
                        <div key=${$_.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${$_.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${$_.name}>${$_.name}</span>
                            <span class="workspace-folder-starburst-size">${P0($_.size)}</span>
                            <span class="workspace-folder-starburst-pct">${$_.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function a6({mediaId:_}){let[$,Z]=f(null);if(m(()=>{if(!_)return;P2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",X=$.metadata?.size?P0($.metadata.size):"";return z`
        <a href=${m0(_)} download=${J} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${J}</span>
                ${X&&z`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function J8({onFileSelect:_,visible:$=!0,active:Z=void 0,onOpenEditor:J}){let[X,Y]=f(null),[j,G]=f(new Set(["."])),[N,O]=f(null),[K,H]=f(null),[k,L]=f(""),[A,b]=f(null),[v,M]=f(null),[U,P]=f(!0),[C,I]=f(!1),[l,o]=f(null),[Z_,V_]=f(()=>F2("workspaceShowHidden",!1)),[$_,N_]=f(!1),[P_,d]=f(null),[Y_,r]=f(null),[h,e]=f(null),[K_,J_]=f(!1),[M_,X_]=f(null),[Q_,U_]=f(()=>o4()),[O_,H_]=f(()=>o1({stored:c0(j1),...l1()})),q_=F(j),b_=F(""),v_=F(null),F_=F(0),E_=F(new Set),R_=F(null),D_=F(new Map),t_=F(_),r_=F(J),l_=F(null),C_=F(null),q0=F(null),g_=F(null),z0=F(null),S_=F(null),B0=F("."),L_=F(null),I0=F({path:null,dragging:!1,startX:0,startY:0}),D0=F({path:null,dragging:!1,startX:0,startY:0}),Q0=F({path:null,timer:0}),s_=F(!1),o_=F(0),x=F(new Map),__=F(null),x_=F(null),Z0=F(null),U0=F(null),J0=F(Z_),n_=F($),a0=F(Z??$),Y0=F(0),c_=F(h),X0=F($_),u_=F(P_),j0=F(null),p0=F({x:0,y:0}),H0=F(0),K2=F(null),k0=F(N),T0=F(K),f0=F(null),K0=F(null),h0=F(A);t_.current=_,r_.current=J,m(()=>{q_.current=j},[j]),m(()=>{J0.current=Z_},[Z_]),m(()=>{n_.current=$},[$]),m(()=>{a0.current=Z??$},[Z,$]),m(()=>{c_.current=h},[h]),m(()=>{if(typeof window>"u")return;let W=()=>{H_(o1({stored:c0(j1),...l1()}))};W();let B=()=>W(),E=()=>W(),D=(c)=>{if(!c||c.key===null||c.key===j1)W()};window.addEventListener("resize",B),window.addEventListener("focus",E),window.addEventListener("storage",D);let g=window.matchMedia?.("(pointer: coarse)"),n=window.matchMedia?.("(hover: none)"),s=(c,j_)=>{if(!c)return;if(c.addEventListener)c.addEventListener("change",j_);else if(c.addListener)c.addListener(j_)},a=(c,j_)=>{if(!c)return;if(c.removeEventListener)c.removeEventListener("change",j_);else if(c.removeListener)c.removeListener(j_)};return s(g,B),s(n,B),()=>{window.removeEventListener("resize",B),window.removeEventListener("focus",E),window.removeEventListener("storage",D),a(g,B),a(n,B)}},[]),m(()=>{let W=(B)=>{let E=B?.detail?.path;if(!E)return;let D=E.split("/"),g=[];for(let n=1;n<D.length;n++)g.push(D.slice(0,n).join("/"));if(g.length)G((n)=>{let s=new Set(n);s.add(".");for(let a of g)s.add(a);return s});O(E),requestAnimationFrame(()=>{let n=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(n)n.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",W),()=>window.removeEventListener("workspace-reveal-path",W)},[]),m(()=>{X0.current=$_},[$_]),m(()=>{u_.current=P_},[P_]),m(()=>{k0.current=N},[N]),m(()=>{T0.current=K},[K]),m(()=>{h0.current=A},[A]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let W=()=>U_(o4());W();let B=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>W();if(B?.addEventListener)B.addEventListener("change",E);else if(B?.addListener)B.addListener(E);let D=typeof MutationObserver<"u"?new MutationObserver(()=>W()):null;if(D?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)D?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(B?.removeEventListener)B.removeEventListener("change",E);else if(B?.removeListener)B.removeListener(E);D?.disconnect()}},[]),m(()=>{if(!K)return;let W=z0.current;if(!W)return;let B=requestAnimationFrame(()=>{try{W.focus(),W.select()}catch{}});return()=>cancelAnimationFrame(B)},[K]);let v2=async(W)=>{I(!0),b(null),M(null);try{let B=await t3(W,20000);b(B)}catch(B){b({error:B.message||"Failed to load preview"})}finally{I(!1)}};l_.current=v2;let W2=async()=>{if(!n_.current)return;try{let W=await s2("",1,J0.current),B=l4(W.root,q_.current,J0.current);if(B===b_.current){P(!1);return}if(b_.current=B,v_.current=W.root,!F_.current)F_.current=requestAnimationFrame(()=>{F_.current=0,Y((E)=>s1(E,v_.current)),P(!1)})}catch(W){o(W.message||"Failed to load workspace"),P(!1)}},W0=async(W)=>{if(!W)return;if(E_.current.has(W))return;E_.current.add(W);try{let B=await s2(W,1,J0.current);Y((E)=>d1(E,W,B.root))}catch(B){o(B.message||"Failed to load workspace")}finally{E_.current.delete(W)}};C_.current=W0;let p_=S(()=>{let W=N;if(!W)return".";let B=D_.current?.get(W);if(B&&B.type==="dir")return B.path;if(W==="."||!W.includes("/"))return".";let E=W.split("/");return E.pop(),E.join("/")||"."},[N]),w0=S((W)=>{let B=W?.closest?.(".workspace-row");if(!B)return null;let E=B.dataset.path,D=B.dataset.type;if(!E)return null;if(D==="dir")return E;if(E.includes("/")){let g=E.split("/");return g.pop(),g.join("/")||"."}return"."},[]),A0=S((W)=>{return w0(W?.target||null)},[w0]),m_=S((W)=>{c_.current=W,e(W)},[]),e_=S(()=>{let W=Q0.current;if(W?.timer)clearTimeout(W.timer);Q0.current={path:null,timer:0}},[]),L0=S((W)=>{if(!W||W==="."){e_();return}let B=D_.current?.get(W);if(!B||B.type!=="dir"){e_();return}if(q_.current?.has(W)){e_();return}if(Q0.current?.path===W)return;e_();let E=setTimeout(()=>{Q0.current={path:null,timer:0},C_.current?.(W),G((D)=>{let g=new Set(D);return g.add(W),g})},600);Q0.current={path:W,timer:E}},[e_]),S0=S((W,B)=>{if(p0.current={x:W,y:B},H0.current)return;H0.current=requestAnimationFrame(()=>{H0.current=0;let E=j0.current;if(!E)return;let D=p0.current;E.style.transform=`translate(${D.x+12}px, ${D.y+12}px)`})},[]),C0=S((W)=>{if(!W)return;let E=(D_.current?.get(W)?.name||W.split("/").pop()||W).trim();if(!E)return;r({path:W,label:E})},[]),t0=S(()=>{if(r(null),H0.current)cancelAnimationFrame(H0.current),H0.current=0;if(j0.current)j0.current.style.transform="translate(-9999px, -9999px)"},[]),G0=S((W)=>{if(!W)return".";let B=D_.current?.get(W);if(B&&B.type==="dir")return B.path;if(W==="."||!W.includes("/"))return".";let E=W.split("/");return E.pop(),E.join("/")||"."},[]),h_=S(()=>{H(null),L("")},[]),i0=S((W)=>{if(!W)return;let E=(D_.current?.get(W)?.name||W.split("/").pop()||W).trim();if(!E||W===".")return;H(W),L(E)},[]),G2=S(async()=>{let W=T0.current;if(!W)return;let B=(k||"").trim();if(!B){h_();return}let E=D_.current?.get(W),D=(E?.name||W.split("/").pop()||W).trim();if(B===D){h_();return}try{let n=(await $4(W,B))?.path||W,s=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(h_(),o(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:W,newPath:n,type:E?.type||"file"}})),E?.type==="dir")G((a)=>{let c=new Set;for(let j_ of a)if(j_===W)c.add(n);else if(j_.startsWith(`${W}/`))c.add(`${n}${j_.slice(W.length)}`);else c.add(j_);return c});if(O(n),E?.type==="dir")b(null),I(!1),M(null);else l_.current?.(n);C_.current?.(s)}catch(g){o(g?.message||"Failed to rename file")}},[h_,k]),l0=S(async(W)=>{let D=W||".";for(let g=0;g<50;g+=1){let s=`untitled${g===0?"":`-${g}`}.md`;try{let c=(await _4(D,s,""))?.path||(D==="."?s:`${D}/${s}`);if(D&&D!==".")G((j_)=>new Set([...j_,D]));O(c),o(null),C_.current?.(D),l_.current?.(c);return}catch(a){if(a?.status===409||a?.code==="file_exists")continue;o(a?.message||"Failed to create file");return}}o("Failed to create file (untitled name already in use).")},[]),o0=S((W)=>{if(W?.stopPropagation?.(),K_)return;let B=G0(k0.current);l0(B)},[K_,G0,l0]);m(()=>{if(typeof window>"u")return;let W=(B)=>{let E=B?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;Y((a)=>{let c=a;for(let j_ of E){if(!j_?.root)continue;if(!c||j_.path==="."||!j_.path)c=j_.root;else c=d1(c,j_.path,j_.root)}if(c)b_.current=l4(c,q_.current,J0.current);return P(!1),c});let D=k0.current;if(Boolean(D)&&E.some((a)=>{let c=a?.path||"";if(!c||c===".")return!0;return D===c||D.startsWith(`${c}/`)||c.startsWith(`${D}/`)}))x.current.clear();if(!D||!h0.current)return;let n=D_.current?.get(D);if(n&&n.type==="dir")return;if(E.some((a)=>{let c=a?.path||"";if(!c||c===".")return!0;return D===c||D.startsWith(`${c}/`)}))l_.current?.(D)};return window.addEventListener("workspace-update",W),()=>window.removeEventListener("workspace-update",W)},[]),R_.current=W2;let e0=F(()=>{if(typeof window>"u")return;let W=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),B=a0.current??n_.current,E=document.visibilityState!=="hidden"&&(B||W.matches&&n_.current);a2(E,J0.current).catch(()=>{})}).current,_0=F(0),n0=F(()=>{if(_0.current)clearTimeout(_0.current);_0.current=setTimeout(()=>{_0.current=0,e0()},250)}).current;m(()=>{if(n_.current)R_.current?.();n0()},[$,Z]),m(()=>{R_.current(),e0();let W=setInterval(()=>R_.current(),n6),B=E2("previewHeight",null),E=Number.isFinite(B)?Math.min(Math.max(B,80),600):280;if(o_.current=E,q0.current)q0.current.style.setProperty("--preview-height",`${E}px`);let D=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),g=()=>n0();if(D.addEventListener)D.addEventListener("change",g);else if(D.addListener)D.addListener(g);return document.addEventListener("visibilitychange",g),()=>{if(clearInterval(W),F_.current)cancelAnimationFrame(F_.current),F_.current=0;if(D.removeEventListener)D.removeEventListener("change",g);else if(D.removeListener)D.removeListener(g);if(document.removeEventListener("visibilitychange",g),_0.current)clearTimeout(_0.current),_0.current=0;if(L_.current)clearTimeout(L_.current),L_.current=null;a2(!1,J0.current).catch(()=>{})}},[]);let x0=a_(()=>r4(X,j,Z_),[X,j,Z_]),_2=a_(()=>new Map(x0.map((W)=>[W.node.path,W.node])),[x0]),Q=a_(()=>i4(O_),[O_]);D_.current=_2;let i=(N?D_.current.get(N):null)?.type==="dir";m(()=>{if(!N||!i){X_(null),__.current=null,x_.current=null;return}let W=N,B=`${Z_?"hidden":"visible"}:${N}`,E=x.current,D=E.get(B);if(D?.root){E.delete(B),E.set(B,D);let s=n4(D.root,Boolean(D.truncated),Q_);if(s)__.current=s,x_.current=N,X_({loading:!1,error:null,payload:s});return}let g=__.current,n=x_.current;X_({loading:!0,error:null,payload:n===N?g:null}),s2(N,d6,Z_).then((s)=>{if(k0.current!==W)return;let a={root:s?.root,truncated:Boolean(s?.truncated)};E.delete(B),E.set(B,a);while(E.size>r6){let j_=E.keys().next().value;if(!j_)break;E.delete(j_)}let c=n4(a.root,a.truncated,Q_);__.current=c,x_.current=N,X_({loading:!1,error:null,payload:c})}).catch((s)=>{if(k0.current!==W)return;X_({loading:!1,error:s?.message||"Failed to load folder size chart",payload:n===N?g:null})})},[N,i,Z_,Q_]);let W_=Boolean(A&&A.kind==="text"&&!i&&(!A.size||A.size<=262144)),y_=W_?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable";m(()=>{let W=Z0.current;if(U0.current)U0.current.dispose(),U0.current=null;if(!W)return;if(W.innerHTML="",!N||i||!A||A.error)return;let B={path:N,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},E=d_.resolve(B)||d_.get("workspace-preview-default");if(!E)return;let D=E.mount(W,B);return U0.current=D,()=>{if(U0.current===D)D.dispose(),U0.current=null;W.innerHTML=""}},[N,i,A]);let w_=(W)=>{let B=W?.target;if(B instanceof Element)return B;return B?.parentElement||null},k_=(W)=>{return Boolean(W?.closest?.(".workspace-node-icon, .workspace-label-text"))},y0=F((W)=>{if(K0.current)clearTimeout(K0.current),K0.current=null;let E=w_(W)?.closest?.("[data-path]");if(!E)return;let D=E.dataset.path;if(E.dataset.type==="dir"||!D)return;if(T0.current===D)h_();r_.current?.(D)}).current,d0=F((W)=>{if(s_.current){s_.current=!1;return}let B=w_(W),E=B?.closest?.("[data-path]");if(g_.current?.focus?.(),!E)return;let D=E.dataset.path,g=E.dataset.type,n=Boolean(B?.closest?.(".workspace-caret")),s=Boolean(B?.closest?.("button"))||Boolean(B?.closest?.("a"))||Boolean(B?.closest?.("input")),a=k0.current===D,c=T0.current;if(c){if(c===D)return;h_()}let j_=g==="file"&&f0.current===D&&!n&&!s;if(a&&!n&&!s&&D!=="."&&!j_){if(K0.current)clearTimeout(K0.current);K0.current=setTimeout(()=>{K0.current=null,i0(D)},350);return}if(g==="dir"){if(f0.current=null,O(D),b(null),M(null),I(!1),!q_.current.has(D))C_.current?.(D);if(a&&!n)return;G((u0)=>{let z_=new Set(u0);if(z_.has(D))z_.delete(D);else z_.add(D);return z_})}else{f0.current=null,O(D);let O0=D_.current.get(D);if(O0)t_.current?.(O0.path,O0);l_.current?.(D)}}).current,q2=F(()=>{b_.current="",R_.current(),Array.from(q_.current||[]).filter((B)=>B&&B!==".").forEach((B)=>C_.current?.(B))}).current,b0=F(()=>{f0.current=null,O(null),b(null),M(null),I(!1)}).current,z2=F(()=>{V_((W)=>{let B=!W;if(typeof window<"u")I_("workspaceShowHidden",String(B));return J0.current=B,a2(!0,B).catch(()=>{}),b_.current="",R_.current?.(),Array.from(q_.current||[]).filter((D)=>D&&D!==".").forEach((D)=>C_.current?.(D)),B})}).current,B2=F((W)=>{if(w_(W)?.closest?.("[data-path]"))return;b0()}).current,T_=S(async(W)=>{if(!W)return;let B=W.split("/").pop()||W;if(!window.confirm(`Delete "${B}"? This cannot be undone.`))return;try{await J4(W);let D=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(k0.current===W)b0();C_.current?.(D),o(null)}catch(D){b((g)=>({...g||{},error:D.message||"Failed to delete file"}))}},[b0]),f_=S((W)=>{let B=g_.current;if(!B||!W||typeof CSS>"u"||typeof CSS.escape!=="function")return;B.querySelector(`[data-path="${CSS.escape(W)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),N0=S((W)=>{let B=x0;if(!B||B.length===0)return;let E=N?B.findIndex((D)=>D.node.path===N):-1;if(W.key==="ArrowDown"){W.preventDefault();let D=Math.min(E+1,B.length-1),g=B[D];if(!g)return;if(O(g.node.path),g.node.type!=="dir")t_.current?.(g.node.path,g.node),l_.current?.(g.node.path);else b(null),I(!1),M(null);f_(g.node.path);return}if(W.key==="ArrowUp"){W.preventDefault();let D=E<=0?0:E-1,g=B[D];if(!g)return;if(O(g.node.path),g.node.type!=="dir")t_.current?.(g.node.path,g.node),l_.current?.(g.node.path);else b(null),I(!1),M(null);f_(g.node.path);return}if(W.key==="ArrowRight"&&E>=0){let D=B[E];if(D?.node?.type==="dir"&&!j.has(D.node.path))W.preventDefault(),C_.current?.(D.node.path),G((g)=>new Set([...g,D.node.path]));return}if(W.key==="ArrowLeft"&&E>=0){let D=B[E];if(D?.node?.type==="dir"&&j.has(D.node.path))W.preventDefault(),G((g)=>{let n=new Set(g);return n.delete(D.node.path),n});return}if(W.key==="Enter"&&E>=0){W.preventDefault();let D=B[E];if(!D)return;let g=D.node.path;if(D.node.type==="dir"){if(!q_.current.has(g))C_.current?.(g);G((s)=>{let a=new Set(s);if(a.has(g))a.delete(g);else a.add(g);return a}),b(null),M(null),I(!1)}else t_.current?.(g,D.node),l_.current?.(g);return}if((W.key==="Delete"||W.key==="Backspace")&&E>=0){let D=B[E];if(!D||D.node.type==="dir")return;W.preventDefault(),T_(D.node.path);return}if(W.key==="Escape")W.preventDefault(),b0()},[b0,T_,j,x0,f_,N]),$2=S((W)=>{let B=w_(W),E=B?.closest?.(".workspace-row");if(!E)return;let D=E.dataset.type,g=E.dataset.path;if(!g||g===".")return;if(T0.current===g)return;let n=W?.touches?.[0];if(!n)return;if(I0.current={path:k_(B)?g:null,dragging:!1,startX:n.clientX,startY:n.clientY},D!=="file")return;if(L_.current)clearTimeout(L_.current);L_.current=setTimeout(()=>{if(L_.current=null,I0.current?.dragging)return;T_(g)},600)},[T_]),V0=S(()=>{if(L_.current)clearTimeout(L_.current),L_.current=null;let W=I0.current;if(W?.dragging&&W.path){let B=c_.current||p_(),E=K2.current;if(typeof E==="function")E(W.path,B)}I0.current={path:null,dragging:!1,startX:0,startY:0},Y0.current=0,N_(!1),d(null),m_(null),e_(),t0()},[p_,t0,m_,e_]),F0=S((W)=>{let B=I0.current,E=W?.touches?.[0];if(!E||!B?.path){if(L_.current)clearTimeout(L_.current),L_.current=null;return}let D=Math.abs(E.clientX-B.startX),g=Math.abs(E.clientY-B.startY),n=D>8||g>8;if(n&&L_.current)clearTimeout(L_.current),L_.current=null;if(!B.dragging&&n)B.dragging=!0,N_(!0),d("move"),C0(B.path);if(B.dragging){W.preventDefault(),S0(E.clientX,E.clientY);let s=document.elementFromPoint(E.clientX,E.clientY),a=w0(s)||p_();if(c_.current!==a)m_(a);L0(a)}},[w0,p_,C0,S0,m_,L0]),v0=F((W)=>{W.preventDefault();let B=q0.current;if(!B)return;let E=W.clientY,D=o_.current||280,g=W.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let n=E,s=(c)=>{n=c.clientY;let j_=B.clientHeight-80,O0=Math.min(Math.max(D-(c.clientY-E),80),j_);B.style.setProperty("--preview-height",`${O0}px`),o_.current=O0},a=()=>{let c=B.clientHeight-80,j_=Math.min(Math.max(D-(n-E),80),c);o_.current=j_,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("previewHeight",String(Math.round(j_))),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",a)}).current,E0=F((W)=>{W.preventDefault();let B=q0.current;if(!B)return;let E=W.touches[0];if(!E)return;let D=E.clientY,g=o_.current||280,n=W.currentTarget;n.classList.add("dragging"),document.body.style.userSelect="none";let s=(c)=>{let j_=c.touches[0];if(!j_)return;c.preventDefault();let O0=B.clientHeight-80,u0=Math.min(Math.max(g-(j_.clientY-D),80),O0);B.style.setProperty("--preview-height",`${u0}px`),o_.current=u0},a=()=>{n.classList.remove("dragging"),document.body.style.userSelect="",I_("previewHeight",String(Math.round(o_.current||g))),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",a),document.removeEventListener("touchcancel",a)};document.addEventListener("touchmove",s,{passive:!1}),document.addEventListener("touchend",a),document.addEventListener("touchcancel",a)}).current,R0=async()=>{if(!N)return;try{let W=await e3(N);if(W.media_id)M(W.media_id)}catch(W){b((B)=>({...B||{},error:W.message||"Failed to attach"}))}},Q2=async()=>{if(!N||i)return;await T_(N)},Z2=(W)=>{return Array.from(W?.dataTransfer?.types||[]).includes("Files")},N2=S((W)=>{if(!Z2(W))return;if(W.preventDefault(),Y0.current+=1,!X0.current)N_(!0);d("upload");let B=A0(W)||p_();m_(B),L0(B)},[p_,A0,m_,L0]),W1=S((W)=>{if(!Z2(W))return;if(W.preventDefault(),W.dataTransfer)W.dataTransfer.dropEffect="copy";if(!X0.current)N_(!0);if(u_.current!=="upload")d("upload");let B=A0(W)||p_();if(c_.current!==B)m_(B);L0(B)},[p_,A0,m_,L0]),G1=S((W)=>{if(!Z2(W))return;if(W.preventDefault(),Y0.current=Math.max(0,Y0.current-1),Y0.current===0)N_(!1),d(null),m_(null),e_()},[m_,e_]),V2=S(async(W,B=".")=>{let E=Array.from(W||[]);if(E.length===0)return;let D=B&&B!==""?B:".",g=D!=="."?D:"workspace root";J_(!0);try{let n=null;for(let s of E)try{n=await P1(s,D)}catch(a){let c=a?.status,j_=a?.code;if(c===409||j_==="file_exists"){let O0=s?.name||"file";if(!window.confirm(`"${O0}" already exists in ${g}. Overwrite?`))continue;n=await P1(s,D,{overwrite:!0})}else throw a}if(n?.path)f0.current=n.path,O(n.path),l_.current?.(n.path);C_.current?.(D)}catch(n){o(n.message||"Failed to upload file")}finally{J_(!1)}},[]),R2=S(async(W,B)=>{if(!W)return;let E=D_.current?.get(W);if(!E)return;let D=B&&B!==""?B:".",g=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(D===g)return;try{let s=(await Z4(W,D))?.path||W;if(E.type==="dir")G((a)=>{let c=new Set;for(let j_ of a)if(j_===W)c.add(s);else if(j_.startsWith(`${W}/`))c.add(`${s}${j_.slice(W.length)}`);else c.add(j_);return c});if(O(s),E.type==="dir")b(null),I(!1),M(null);else l_.current?.(s);C_.current?.(g),C_.current?.(D)}catch(n){o(n?.message||"Failed to move entry")}},[]);K2.current=R2;let $0=S(async(W)=>{if(!Z2(W))return;W.preventDefault(),Y0.current=0,N_(!1),d(null),e(null),e_();let B=Array.from(W?.dataTransfer?.files||[]);if(B.length===0)return;let E=c_.current||A0(W)||p_();await V2(B,E)},[p_,A0,V2]),N1=S((W)=>{if(W?.stopPropagation?.(),K_)return;let B=W?.currentTarget?.dataset?.uploadTarget||".";B0.current=B,S_.current?.click()},[K_]),V1=S(()=>{if(K_)return;let W=k0.current,B=W?D_.current?.get(W):null;B0.current=B?.type==="dir"?B.path:".",S_.current?.click()},[K_]),g2=S((W)=>{if(!W||W.button!==0)return;let B=W.currentTarget;if(!B||!B.dataset)return;let E=B.dataset.path;if(!E||E===".")return;if(T0.current===E)return;let D=w_(W);if(D?.closest?.("button, a, input, .workspace-caret"))return;if(!k_(D))return;W.preventDefault(),D0.current={path:E,dragging:!1,startX:W.clientX,startY:W.clientY};let g=(s)=>{let a=D0.current;if(!a?.path)return;let c=Math.abs(s.clientX-a.startX),j_=Math.abs(s.clientY-a.startY),O0=c>4||j_>4;if(!a.dragging&&O0)a.dragging=!0,s_.current=!0,N_(!0),d("move"),C0(a.path),S0(s.clientX,s.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(a.dragging){s.preventDefault(),S0(s.clientX,s.clientY);let u0=document.elementFromPoint(s.clientX,s.clientY),z_=w0(u0)||p_();if(c_.current!==z_)m_(z_);L0(z_)}},n=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",n);let s=D0.current;if(s?.dragging&&s.path){let a=c_.current||p_(),c=K2.current;if(typeof c==="function")c(s.path,a)}D0.current={path:null,dragging:!1,startX:0,startY:0},Y0.current=0,N_(!1),d(null),m_(null),e_(),t0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{s_.current=!1},0)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",n)},[w0,p_,C0,S0,t0,m_,L0,e_]),g0=S(async(W)=>{let B=Array.from(W?.target?.files||[]);if(B.length===0)return;let E=B0.current||".";if(await V2(B,E),B0.current=".",W?.target)W.target.value=""},[V2]);return z`
        <aside
            class=${`workspace-sidebar${$_?" workspace-drop-active":""}`}
            data-workspace-scale=${O_}
            ref=${q0}
            onDragEnter=${N2}
            onDragOver=${W1}
            onDragLeave=${G1}
            onDrop=${$0}
        >
            <input type="file" multiple style="display:none" ref=${S_} onChange=${g0} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${o0} title="New file" disabled=${K_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${q2} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${Z_?" active":""}`}
                        onClick=${z2}
                        title=${Z_?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!Z_&&z`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${B2}>
                ${K_&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${U&&z`<div class="workspace-loading">Loading…</div>`}
                ${l&&z`<div class="workspace-error">${l}</div>`}
                ${X&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${g_}
                        tabIndex="0"
                        onClick=${d0}
                        onDblClick=${y0}
                        onKeyDown=${N0}
                        onTouchStart=${$2}
                        onTouchEnd=${V0}
                        onTouchMove=${F0}
                        onTouchCancel=${V0}
                    >
                        ${x0.map(({node:W,depth:B})=>{let E=W.type==="dir",D=W.path===N,g=W.path===K,n=E&&j.has(W.path),s=h&&W.path===h,a=Array.isArray(W.children)&&W.children.length>0?W.children.length:Number(W.child_count)||0;return z`
                                <div
                                    key=${W.path}
                                    class=${`workspace-row${D?" selected":""}${s?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+B*Q.indentPx}px`}}
                                    data-path=${W.path}
                                    data-type=${W.type}
                                    onMouseDown=${g2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?n?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${g?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${z0}
                                                value=${k}
                                                onInput=${(c)=>L(c?.target?.value||"")}
                                                onKeyDown=${(c)=>{if(c.key==="Enter")c.preventDefault(),G2();else if(c.key==="Escape")c.preventDefault(),h_()}}
                                                onBlur=${h_}
                                                onClick=${(c)=>c.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${W.name}</span></span>`}
                                    ${E&&!n&&a>0&&z`
                                        <span class="workspace-count">${a}</span>
                                    `}
                                    ${E&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${W.path}
                                            title="Upload files to this folder"
                                            onClick=${N1}
                                            disabled=${K_}
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
            ${N&&z`
                <div class="workspace-preview-splitter-h" onMouseDown=${v0} onTouchStart=${E0}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${N}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${o0} title="New file" disabled=${K_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!i&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>W_&&r_.current?.(N,A)}
                                    title=${y_}
                                    disabled=${!W_}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${Q2}
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
                            ${i?z`
                                    <button class="workspace-download" onClick=${V1}
                                        title="Upload files to this folder" disabled=${K_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${Y4(N,Z_)}
                                        title="Download folder as zip" onClick=${(W)=>W.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${R0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${C&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&z`<div class="workspace-error">${A.error}</div>`}
                    ${i&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${M_?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${M_?.error&&z`<div class="workspace-error">${M_.error}</div>`}
                        ${M_?.payload&&M_.payload.segments?.length>0&&z`
                            <${s6} payload=${M_.payload} />
                        `}
                        ${M_?.payload&&(!M_.payload.segments||M_.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!i&&z`
                        <div class="workspace-preview-body" ref=${Z0}></div>
                    `}
                    ${v&&z`
                        <div class="workspace-download-card">
                            <${a6} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${Y_&&z`
                <div class="workspace-drag-ghost" ref=${j0}>${Y_.label}</div>
            `}
        </aside>
    `}function Y8({tabs:_,activeId:$,onActivate:Z,onClose:J,onCloseOthers:X,onCloseAll:Y,onTogglePin:j,onTogglePreview:G,previewTabs:N,onToggleDock:O,dockVisible:K}){let[H,k]=f(null),L=F(null);m(()=>{if(!H)return;let U=(P)=>{if(P.type==="keydown"&&P.key!=="Escape")return;k(null)};return document.addEventListener("click",U),document.addEventListener("keydown",U),()=>{document.removeEventListener("click",U),document.removeEventListener("keydown",U)}},[H]),m(()=>{let U=(P)=>{if(P.ctrlKey&&P.key==="Tab"){if(P.preventDefault(),!_.length)return;let C=_.findIndex((I)=>I.id===$);if(P.shiftKey){let I=_[(C-1+_.length)%_.length];Z?.(I.id)}else{let I=_[(C+1)%_.length];Z?.(I.id)}return}if((P.ctrlKey||P.metaKey)&&P.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(P.preventDefault(),$)J?.($)}}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$,Z,J]);let A=S((U,P)=>{if(U.button===1){U.preventDefault(),J?.(P);return}if(U.button===0)Z?.(P)},[Z,J]),b=S((U,P)=>{U.preventDefault(),k({id:P,x:U.clientX,y:U.clientY})},[]),v=S((U)=>{U.preventDefault(),U.stopPropagation()},[]),M=S((U,P)=>{U.preventDefault(),U.stopPropagation(),J?.(P)},[J]);if(m(()=>{if(!$||!L.current)return;let U=L.current.querySelector(".tab-item.active");if(U)U.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return z`
        <div class="tab-strip" ref=${L} role="tablist">
            ${_.map((U)=>z`
                <div
                    key=${U.id}
                    class=${`tab-item${U.id===$?" active":""}${U.dirty?" dirty":""}${U.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${U.id===$}
                    title=${U.path}
                    onMouseDown=${(P)=>A(P,U.id)}
                    onContextMenu=${(P)=>b(P,U.id)}
                >
                    ${U.pinned&&z`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${U.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${v}
                        onClick=${(P)=>M(P,U.id)}
                        title=${U.dirty?"Unsaved changes":"Close"}
                        aria-label=${U.dirty?"Unsaved changes":`Close ${U.label}`}
                    >
                        ${U.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${O&&z`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${K?" active":""}`}
                    onClick=${O}
                    title=${`${K?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${K?"Hide":"Show"} terminal`}
                    aria-pressed=${K?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 12 4 10 8 6 12 10 12 12"/>
                        <line x1="2" y1="14" x2="14" y2="14"/>
                    </svg>
                </button>
            `}
        </div>
        ${H&&z`
            <div class="tab-context-menu" style=${{left:H.x+"px",top:H.y+"px"}}>
                <button onClick=${()=>{J?.(H.id),k(null)}}>Close</button>
                <button onClick=${()=>{X?.(H.id),k(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),k(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{j?.(H.id),k(null)}}>
                    ${_.find((U)=>U.id===H.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(H.id)&&z`
                    <hr />
                    <button onClick=${()=>{G(H.id),k(null)}}>
                        ${N?.has(H.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var t6=400,t1=60,X8=220,e1="mdPreviewHeight";function e6(){try{let _=localStorage.getItem(e1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=t1?$:X8}catch{return X8}}function j8({getContent:_,path:$,onClose:Z}){let[J,X]=f(""),[Y,j]=f(e6),G=F(null),N=F(null),O=F(""),K=F(_);return K.current=_,m(()=>{let L=()=>{let b=K.current?.()||"";if(b===O.current)return;O.current=b;try{let v=X2(b,null,{sanitize:!1});X(v)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let A=setInterval(L,t6);return()=>clearInterval(A)},[]),m(()=>{if(G.current&&J)C2(G.current).catch(()=>{})},[J]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let A=L.clientY,b=N.current?.offsetHeight||Y,v=N.current?.parentElement,M=v?v.offsetHeight*0.7:500,U=L.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let P=(I)=>{let l=Math.min(Math.max(b-(I.clientY-A),t1),M);j(l)},C=()=>{U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(e1,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",C)}}
            onTouchStart=${(L)=>{L.preventDefault();let A=L.touches[0];if(!A)return;let b=A.clientY,v=N.current?.offsetHeight||Y,M=N.current?.parentElement,U=M?M.offsetHeight*0.7:500,P=L.currentTarget;P.classList.add("dragging"),document.body.style.userSelect="none";let C=(l)=>{let o=l.touches[0];if(!o)return;l.preventDefault();let Z_=Math.min(Math.max(v-(o.clientY-b),t1),U);j(Z_)},I=()=>{P.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(e1,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}}
        ></div>
        <div class="md-preview-panel" ref=${N} style=${{height:Y+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${Z} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${G}
                dangerouslySetInnerHTML=${{__html:J}}
            />
        </div>
    `}function K8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:Z}){let J=F(_);J.current=_;let X=F($);X.current=$;let Y=F(Z);Y.current=Z,m(()=>{Y.current();let j=new S1((N,O)=>J.current(N,O),(N)=>X.current(N));j.connect();let G=()=>{j.reconnectIfNeeded()};return window.addEventListener("focus",G),document.addEventListener("visibilitychange",G),()=>{window.removeEventListener("focus",G),document.removeEventListener("visibilitychange",G),j.disconnect()}},[])}function W8(){let[_,$]=f(!1),[Z,J]=f("default"),X=F(!1);m(()=>{let N=F2("notificationsEnabled",!1);if(X.current=N,$(N),typeof Notification<"u")J(Notification.permission)},[]),m(()=>{X.current=_},[_]);let Y=S(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),j=S(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){J("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await Y();if(J(O||"default"),O!=="granted"){X.current=!1,$(!1),I_("notificationsEnabled","false");return}}let N=!X.current;X.current=N,$(N),I_("notificationsEnabled",String(N))},[Y]),G=S((N,O)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let K=new Notification(N,{body:O});return K.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:Z,toggleNotifications:j,notify:G}}var T2=(_)=>{let $=new Set;return(_||[]).filter((Z)=>{if(!Z||$.has(Z.id))return!1;return $.add(Z.id),!0})};function G8({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[Z,J]=f(null),[X,Y]=f(!1),j=F(!1),G=F(null),N=F(!1),O=F(null),K=F(null);m(()=>{j.current=X},[X]),m(()=>{K.current=Z},[Z]);let H=S(async(A=null)=>{try{if(A){let b=await g3(A);J(b.posts),Y(!1)}else{let b=await r2(10);J(b.posts),Y(b.has_more)}}catch(b){console.error("Failed to load posts:",b)}},[]),k=S(async()=>{try{let A=await r2(10);J((b)=>{if(!b||b.length===0)return A.posts;return T2([...A.posts,...b])}),Y((b)=>b||A.has_more)}catch(A){console.error("Failed to refresh timeline:",A)}},[]),L=S(async(A={})=>{let b=K.current;if(!b||b.length===0)return;if(N.current)return;let{preserveScroll:v=!0,preserveMode:M="top",allowRepeat:U=!1}=A,P=(l)=>{if(!v){l();return}if(M==="top")$(l);else _(l)},I=b.slice().sort((l,o)=>l.id-o.id)[0]?.id;if(!Number.isFinite(I))return;if(!U&&O.current===I)return;N.current=!0,O.current=I;try{let l=await r2(10,I);if(l.posts.length>0)P(()=>{J((o)=>T2([...l.posts,...o||[]])),Y(l.has_more)});else Y(!1)}catch(l){console.error("Failed to load more posts:",l)}finally{N.current=!1}},[_,$]);return m(()=>{G.current=L},[L]),{posts:Z,setPosts:J,hasMore:X,setHasMore:Y,hasMoreRef:j,loadPosts:H,refreshTimeline:k,loadMore:L,loadMoreRef:G,loadingMoreRef:N,lastBeforeIdRef:O}}function N8(){let[_,$]=f(null),[Z,J]=f({text:"",totalLines:0}),[X,Y]=f(""),[j,G]=f({text:"",totalLines:0}),[N,O]=f(null),[K,H]=f(null),[k,L]=f(null),A=F(null),b=F(0),v=F(!1),M=F(""),U=F(""),P=F(null),C=F(null),I=F(null),l=F(null),o=F(!1),Z_=F(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:Z,setAgentDraft:J,agentPlan:X,setAgentPlan:Y,agentThought:j,setAgentThought:G,pendingRequest:N,setPendingRequest:O,currentTurnId:K,setCurrentTurnId:H,steerQueuedTurnId:k,setSteerQueuedTurnId:L,lastAgentEventRef:A,lastSilenceNoticeRef:b,isAgentRunningRef:v,draftBufferRef:M,thoughtBufferRef:U,pendingRequestRef:P,stalledPostIdRef:C,currentTurnIdRef:I,steerQueuedTurnIdRef:l,thoughtExpandedRef:o,draftExpandedRef:Z_}}function V8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:Z,dockHeightRef:J}){let X=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let k=K.clientX,L=$.current||280,A=K.currentTarget;A.classList.add("dragging"),H.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let b=k,v=(U)=>{b=U.clientX;let P=Math.min(Math.max(L+(U.clientX-k),160),600);H.style.setProperty("--sidebar-width",`${P}px`),$.current=P},M=()=>{let U=Math.min(Math.max(L+(b-k),160),600);$.current=U,A.classList.remove("dragging"),H.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",I_("sidebarWidth",String(Math.round(U))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",M)}).current,Y=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let k=K.touches[0];if(!k)return;let L=k.clientX,A=$.current||280,b=K.currentTarget;b.classList.add("dragging"),H.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(U)=>{let P=U.touches[0];if(!P)return;U.preventDefault();let C=Math.min(Math.max(A+(P.clientX-L),160),600);H.style.setProperty("--sidebar-width",`${C}px`),$.current=C},M=()=>{b.classList.remove("dragging"),H.classList.remove("sidebar-resizing"),document.body.style.userSelect="",I_("sidebarWidth",String(Math.round($.current||A))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",M),document.removeEventListener("touchcancel",M)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",M),document.addEventListener("touchcancel",M)}).current,j=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let k=K.clientX,L=Z.current||$.current||280,A=K.currentTarget;A.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let b=k,v=(U)=>{b=U.clientX;let P=Math.min(Math.max(L+(U.clientX-k),200),800);H.style.setProperty("--editor-width",`${P}px`),Z.current=P},M=()=>{let U=Math.min(Math.max(L+(b-k),200),800);Z.current=U,A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("editorWidth",String(Math.round(U))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",M)}).current,G=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let k=K.touches[0];if(!k)return;let L=k.clientX,A=Z.current||$.current||280,b=K.currentTarget;b.classList.add("dragging"),document.body.style.userSelect="none";let v=(U)=>{let P=U.touches[0];if(!P)return;U.preventDefault();let C=Math.min(Math.max(A+(P.clientX-L),200),800);H.style.setProperty("--editor-width",`${C}px`),Z.current=C},M=()=>{b.classList.remove("dragging"),document.body.style.userSelect="",I_("editorWidth",String(Math.round(Z.current||A))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",M),document.removeEventListener("touchcancel",M)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",M),document.addEventListener("touchcancel",M)}).current,N=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let k=K.clientY,L=J?.current||200,A=K.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let b=k,v=(U)=>{b=U.clientY;let P=Math.min(Math.max(L-(U.clientY-k),100),window.innerHeight*0.5);if(H.style.setProperty("--dock-height",`${P}px`),J)J.current=P},M=()=>{let U=Math.min(Math.max(L-(b-k),100),window.innerHeight*0.5);if(J)J.current=U;A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("dockHeight",String(Math.round(U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",M)}).current,O=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let k=K.touches[0];if(!k)return;let L=k.clientY,A=J?.current||200,b=K.currentTarget;b.classList.add("dragging"),document.body.style.userSelect="none";let v=(U)=>{let P=U.touches[0];if(!P)return;U.preventDefault();let C=Math.min(Math.max(A-(P.clientY-L),100),window.innerHeight*0.5);if(H.style.setProperty("--dock-height",`${C}px`),J)J.current=C},M=()=>{b.classList.remove("dragging"),document.body.style.userSelect="",I_("dockHeight",String(Math.round(J?.current||A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",M),document.removeEventListener("touchcancel",M)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",M),document.addEventListener("touchcancel",M)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:j,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:O}}function O8({onTabClosed:_}={}){let $=F(_);$.current=_;let[Z,J]=f(()=>A_.getTabs()),[X,Y]=f(()=>A_.getActiveId()),[j,G]=f(()=>A_.getTabs().length>0);m(()=>{return A_.onChange((C,I)=>{J(C),Y(I),G(C.length>0)})},[]);let[N,O]=f(()=>new Set),K=S((C)=>{O((I)=>{let l=new Set(I);if(l.has(C))l.delete(C);else l.add(C);return l})},[]),H=S((C)=>{O((I)=>{if(!I.has(C))return I;let l=new Set(I);return l.delete(C),l})},[]),k=S((C)=>{if(!C)return;let I={path:C,mode:"edit"};try{if(!d_.resolve(I)){if(!d_.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(l){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,l)}A_.open(C)},[]),L=S(()=>{let C=A_.getActiveId();if(C){let I=A_.get(C);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}A_.close(C),H(C),$.current?.(C)}},[H]),A=S((C)=>{let I=A_.get(C);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}A_.close(C),H(C),$.current?.(C)},[H]),b=S((C)=>{A_.activate(C)},[]),v=S((C)=>{let I=A_.getTabs().filter((Z_)=>Z_.id!==C&&!Z_.pinned),l=I.filter((Z_)=>Z_.dirty).length;if(l>0){if(!window.confirm(`${l} unsaved tab${l>1?"s":""} will be closed. Continue?`))return}let o=I.map((Z_)=>Z_.id);A_.closeOthers(C),o.forEach((Z_)=>{H(Z_),$.current?.(Z_)})},[H]),M=S(()=>{let C=A_.getTabs().filter((o)=>!o.pinned),I=C.filter((o)=>o.dirty).length;if(I>0){if(!window.confirm(`${I} unsaved tab${I>1?"s":""} will be closed. Continue?`))return}let l=C.map((o)=>o.id);A_.closeAll(),l.forEach((o)=>{H(o),$.current?.(o)})},[H]),U=S((C)=>{A_.togglePin(C)},[]),P=S(()=>{let C=A_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return m(()=>{let C=(I)=>{let{oldPath:l,newPath:o,type:Z_}=I.detail||{};if(!l||!o)return;if(Z_==="dir"){for(let V_ of A_.getTabs())if(V_.path===l||V_.path.startsWith(`${l}/`)){let $_=`${o}${V_.path.slice(l.length)}`;A_.rename(V_.id,$_)}}else A_.rename(l,o)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),m(()=>{let C=(I)=>{if(A_.hasUnsaved())I.preventDefault(),I.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:j,tabStripTabs:Z,tabStripActiveId:X,previewTabs:N,openEditor:k,closeEditor:L,handleTabClose:A,handleTabActivate:b,handleTabCloseOthers:v,handleTabCloseAll:M,handleTabTogglePin:U,handleTabTogglePreview:K,revealInExplorer:P}}function _3(_,$){try{if(typeof window>"u")return $;let Z=window.__PICLAW_SILENCE||{},J=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=Z[_]??window[J],Y=Number(X);return Number.isFinite(Y)?Y:$}catch{return $}}var $3=_3("warning",30000),q8=_3("finalize",120000),Z3=_3("refresh",30000),z8=30000;function B8(_){let $={};return(_?.agents||[]).forEach((Z)=>{$[Z.id]=Z}),$}function Q8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function U8(_=30000){let[,$]=f(0);m(()=>{let Z=setInterval(()=>$((J)=>J+1),_);return()=>clearInterval(Z)},[_])}function J3(_,$=160){let Z=String(_||"").replace(/\r\n/g,`
`);if(!Z)return 0;return Z.split(`
`).reduce((J,X)=>J+Math.max(1,Math.ceil(X.length/$)),0)}function H8(_,$){if(typeof _!=="string")return{kind:"ignore"};let Z=_.trim();if(!Z)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(Z))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:Z,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${Z}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${Z}`,level:"warning"}}return{kind:"open",path:Z}}function f2(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var _5=u3,L8=c3,$5=p3,F8=o3,E8=n3,D8=h3,Y3=typeof C1==="function"?C1:f2("getAgentContext",null),Z5=typeof O2==="function"?O2:f2("getAgentModels",{current:null,models:[]}),J5=typeof y1==="function"?y1:f2("getAgentQueueState",{count:0}),Y5=typeof b1==="function"?b1:f2("steerAgentQueueItem",{removed:!1,queued:"steer"}),X5=typeof A1==="function"?A1:f2("removeAgentQueueItem",{removed:!1});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});d_.register(u1);d_.register(i1);d_.register(h1);m1();var j5=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(j5)d_.register(c1);function K5(){let[_,$]=f("disconnected"),[Z,J]=f(null),[X,Y]=f(null),[j,G]=f(!1),[N,O]=f([]),[K,H]=f([]),[k,L]=f(null),{agentStatus:A,setAgentStatus:b,agentDraft:v,setAgentDraft:M,agentPlan:U,setAgentPlan:P,agentThought:C,setAgentThought:I,pendingRequest:l,setPendingRequest:o,currentTurnId:Z_,setCurrentTurnId:V_,steerQueuedTurnId:$_,setSteerQueuedTurnId:N_,lastAgentEventRef:P_,lastSilenceNoticeRef:d,isAgentRunningRef:Y_,draftBufferRef:r,thoughtBufferRef:h,pendingRequestRef:e,stalledPostIdRef:K_,currentTurnIdRef:J_,steerQueuedTurnIdRef:M_,thoughtExpandedRef:X_,draftExpandedRef:Q_}=N8(),[U_,O_]=f({}),[H_,q_]=f(null),[b_,v_]=f(null),[F_,E_]=f(!1),[R_,D_]=f(null),[t_,r_]=f(null),[l_,C_]=f(null),[q0,g_]=f(null),[z0,S_]=f([]),[B0,L_]=f(!1),I0=z0.length,D0=F(new Set),Q0=F([]),s_=F(new Set),o_=F({inFlight:!1,lastAttemptAt:0,turnId:null});D0.current=new Set(z0.map((V)=>V.row_id)),Q0.current=z0;let{notificationsEnabled:x,notificationPermission:__,toggleNotifications:x_,notify:Z0}=W8(),[U0,J0]=f(()=>new Set),[n_,a0]=f(()=>F2("workspaceOpen",!0)),Y0=F(null),{editorOpen:c_,tabStripTabs:X0,tabStripActiveId:u_,previewTabs:j0,openEditor:p0,closeEditor:H0,handleTabClose:K2,handleTabActivate:k0,handleTabCloseOthers:T0,handleTabCloseAll:f0,handleTabTogglePin:K0,handleTabTogglePreview:h0,revealInExplorer:v2}=O8({onTabClosed:(V)=>Y0.current?.(V)}),W2=F(null),W0=F(null);m(()=>{let V=!1;async function q(){try{let y=await a3(u_||"");if(V)return;C_(y?.branch||null),g_(y?.repo_path||null)}catch{if(V)return;C_(null),g_(null)}}return q(),()=>{V=!0}},[u_]),m(()=>{let V=W2.current;if(!V)return;if(W0.current)W0.current.dispose(),W0.current=null;let q=u_;if(!q)return;let y={path:q,mode:"edit"},w=d_.resolve(y)||d_.get("editor");if(!w){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let u=w.mount(V,y);W0.current=u,u.onDirtyChange?.((p)=>{A_.setDirty(q,p)}),u.onSaveRequest?.(()=>{}),u.onClose?.(()=>{H0()});let T=A_.getViewState(q);if(T&&typeof u.restoreViewState==="function")requestAnimationFrame(()=>u.restoreViewState(T));if(typeof u.onViewStateChange==="function")u.onViewStateChange((p)=>{A_.saveViewState(q,p)});return requestAnimationFrame(()=>u.focus()),()=>{if(W0.current===u)u.dispose(),W0.current=null}},[u_,H0]);let[p_,w0]=f({name:"You",avatar_url:null,avatar_background:null}),A0=F(!1),m_=F(!1),e_=F(null),L0=F(0),S0=F(0),C0=F({}),t0=F({name:null,avatar_url:null}),G0=F({currentHashtag:null,searchQuery:null}),h_=F(null),i0=F(null),G2=F(0),l0=F(0),o0=F(0),e0=F(null),_0=F(null),n0=F(null),x0=F(0),_2=F({title:null,avatarBase:null}),Q=F(null),R=S(()=>{if(Q.current)clearTimeout(Q.current),Q.current=null;L(null)},[]);U8(30000),m(()=>{return q4()},[]),m(()=>{I_("workspaceOpen",String(n_))},[n_]),m(()=>{return()=>{R()}},[R]),m(()=>{C0.current=U_||{}},[U_]),m(()=>{t0.current=p_||{name:"You",avatar_url:null,avatar_background:null}},[p_]);let i=S((V,q,y=null)=>{if(typeof document>"u")return;let w=(V||"").trim()||"PiClaw";if(_2.current.title!==w){document.title=w;let B_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(B_&&B_.getAttribute("content")!==w)B_.setAttribute("content",w);_2.current.title=w}let u=document.getElementById("dynamic-favicon");if(!u)return;let T=u.getAttribute("data-default")||u.getAttribute("href")||"/favicon.ico",p=q||T,t=q?`${p}|${y||""}`:p;if(_2.current.avatarBase!==t){let B_=q?`${p}${p.includes("?")?"&":"?"}v=${y||Date.now()}`:p;u.setAttribute("href",B_),_2.current.avatarBase=t}},[]),W_=S((V)=>{if(!V)return;O((q)=>q.includes(V)?q:[...q,V])},[]),y_=S((V)=>{O((q)=>q.filter((y)=>y!==V))},[]);Y0.current=y_;let w_=S(()=>{O([])},[]),k_=S((V,q=null,y="info",w=3000)=>{R(),L({title:V,detail:q||null,kind:y||"info"}),Q.current=setTimeout(()=>{L((u)=>u?.title===V?null:u)},w)},[R]),y0=S((V)=>{let q=H8(V,{editorOpen:c_,resolvePane:(y)=>d_.resolve(y)});if(q.kind==="open"){p0(q.path);return}if(q.kind==="toast")k_(q.title,q.detail,q.level)},[c_,p0,k_]),d0=S(()=>{let V=u_;if(V)W_(V)},[u_,W_]),q2=S((V)=>{if(!V)return;H((q)=>q.includes(V)?q:[...q,V])},[]),b0=S(async(V)=>{let q=(w)=>{w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("post-highlight"),setTimeout(()=>w.classList.remove("post-highlight"),2000)},y=document.getElementById("post-"+V);if(y){q(y);return}try{let u=(await m3(V))?.thread?.[0];if(!u)return;$0((T)=>{if(!T)return[u];if(T.some((p)=>p.id===u.id))return T;return[...T,u]}),requestAnimationFrame(()=>{setTimeout(()=>{let T=document.getElementById("post-"+V);if(T)q(T)},50)})}catch(w){console.error("[scrollToMessage] Failed to fetch message",V,w)}},[]),z2=S((V)=>{H((q)=>q.filter((y)=>y!==V))},[]),B2=S(()=>{H([])},[]),T_=S((V={})=>{let q=Date.now();if(P_.current=q,V.running)Y_.current=!0,L_((y)=>y?y:!0);if(V.clearSilence)d.current=0},[L_]),f_=S(()=>{if(n0.current)clearTimeout(n0.current),n0.current=null;x0.current=0},[]);m(()=>()=>{f_()},[f_]);let N0=S(()=>{f_(),b((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:q,lastActivity:y,...w}=V;return w})},[f_]),$2=S((V)=>{if(!V)return;f_();let q=Date.now();x0.current=q,b({type:V.type||"active",last_activity:!0}),n0.current=setTimeout(()=>{if(x0.current!==q)return;b((y)=>{if(!y||!(y.last_activity||y.lastActivity))return y;return null})},z8)},[f_]),V0=S(()=>{Y_.current=!1,L_(!1),P_.current=null,d.current=0,r.current="",h.current="",e.current=null,_0.current=null,J_.current=null,M_.current=null,o_.current={inFlight:!1,lastAttemptAt:0,turnId:null},f_(),V_(null),N_(null),X_.current=!1,Q_.current=!1},[f_,V_,N_,L_]),F0=S((V)=>{if(!V)return;if(J_.current===V)return;J_.current=V,o_.current={inFlight:!1,lastAttemptAt:0,turnId:V},V_(V),M_.current=null,N_(null),r.current="",h.current="",M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),o(null),e.current=null,_0.current=null,X_.current=!1,Q_.current=!1},[V_,N_]),v0=S((V)=>{if(typeof document<"u"){let B_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&B_)return}let q=_0.current;if(!q||!q.post)return;if(V&&q.turnId&&q.turnId!==V)return;let y=q.post;if(y.id&&e0.current===y.id)return;let w=String(y?.data?.content||"").trim();if(!w)return;e0.current=y.id||e0.current,_0.current=null;let u=w.replace(/\s+/g," ").slice(0,200),T=C0.current||{},t=(y?.data?.agent_id?T[y.data.agent_id]:null)?.name||"Pi";Z0(t,u)},[Z0]),E0=S(async(V,q)=>{if(V!=="thought"&&V!=="draft")return;let y=J_.current;if(V==="thought"){if(X_.current=q,y)try{await E8(y,"thought",q)}catch(w){console.warn("Failed to update thought visibility:",w)}if(!q)return;try{let w=y?await F8(y,"thought"):null;if(w?.text)h.current=w.text;I((u)=>({...u||{text:"",totalLines:0},fullText:h.current||u?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:u?.totalLines||0}))}catch(w){console.warn("Failed to fetch full thought:",w)}return}if(Q_.current=q,y)try{await E8(y,"draft",q)}catch(w){console.warn("Failed to update draft visibility:",w)}if(!q)return;try{let w=y?await F8(y,"draft"):null;if(w?.text)r.current=w.text;M((u)=>({...u||{text:"",totalLines:0},fullText:r.current||u?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:u?.totalLines||0}))}catch(w){console.warn("Failed to fetch full draft:",w)}},[]),R0=F(null),Q2=S(()=>{let V=h_.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);R0.current=Q2;let Z2=S((V)=>{let q=h_.current;if(!q||typeof V!=="function"){V?.();return}let{currentHashtag:y,searchQuery:w}=G0.current||{},u=!(w&&!y),T=u?q.scrollHeight-q.scrollTop:q.scrollTop;V(),requestAnimationFrame(()=>{let p=h_.current;if(!p)return;if(u){let t=Math.max(p.scrollHeight-T,0);p.scrollTop=t}else{let t=Math.max(p.scrollHeight-p.clientHeight,0),B_=Math.min(T,t);p.scrollTop=B_}})},[]),N2=S((V)=>{let q=h_.current;if(!q||typeof V!=="function"){V?.();return}let y=q.scrollTop;V(),requestAnimationFrame(()=>{let w=h_.current;if(!w)return;let u=Math.max(w.scrollHeight-w.clientHeight,0);w.scrollTop=Math.min(y,u)})},[]),W1="Queued as a follow-up (one-at-a-time).",G1="⁣",V2=S((V)=>{if(!V||!Array.isArray(V))return V;let q=D0.current,y=new Set(q),w=V.filter((u)=>{if(y.has(u?.id))return!1;if(u?.data?.is_bot_message){let T=u?.data?.content;if(T===W1||T===G1)return!1}return!0});return w.length===V.length?V:w},[]),{posts:R2,setPosts:$0,hasMore:N1,setHasMore:V1,hasMoreRef:g2,loadPosts:g0,refreshTimeline:W,loadMore:B,loadMoreRef:E}=G8({preserveTimelineScroll:Z2,preserveTimelineScrollTop:N2}),D=a_(()=>V2(R2),[R2,z0,V2]),g=S(()=>{let V=K_.current;if(!V)return;$0((q)=>q?q.filter((y)=>y.id!==V):q),K_.current=null},[$0]),{handleSplitterMouseDown:n,handleSplitterTouchStart:s,handleEditorSplitterMouseDown:a,handleEditorSplitterTouchStart:c,handleDockSplitterMouseDown:j_,handleDockSplitterTouchStart:O0}=V8({appShellRef:i0,sidebarWidthRef:G2,editorWidthRef:l0,dockHeightRef:o0}),u0=S(()=>{if(!Y_.current)return;Y_.current=!1,d.current=0,P_.current=null,J_.current=null,V_(null),X_.current=!1,Q_.current=!1;let V=(r.current||"").trim();if(r.current="",h.current="",M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),o(null),e.current=null,_0.current=null,!V){b({type:"error",title:"Response stalled - No content received"});return}let y=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,w=Date.now(),u=new Date().toISOString(),T={id:w,timestamp:u,data:{type:"agent_response",content:y,agent_id:"default",is_local_stall:!0}};K_.current=w,$0((p)=>p?T2([...p,T]):[T]),R0.current?.(),b(null)},[V_]);m(()=>{G0.current={currentHashtag:Z,searchQuery:X}},[Z,X]);let z_=S(()=>{J5().then((V)=>{let q=s_.current,y=Array.isArray(V?.items)?V.items.map((w)=>({...w})).filter((w)=>!q.has(w.row_id)):[];if(y.length){S_((w)=>{if(w.length===y.length&&w.every((u,T)=>u.row_id===y[T].row_id))return w;return y});return}q.clear(),S_((w)=>w.length===0?w:[])}).catch(()=>{S_((V)=>V.length===0?V:[])})},[S_]),O1=S(async()=>{try{let V=await Y3();if(V)r_(V)}catch(V){console.warn("Failed to fetch agent context:",V)}},[]),J2=S(async()=>{try{let V=await D8("web:default");if(!V||V.status!=="active"||!V.data){if(m_.current){let{currentHashtag:w,searchQuery:u}=G0.current||{};if(!w&&!u)W()}return m_.current=!1,V0(),b(null),M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),o(null),e.current=null,V??null}m_.current=!0;let q=V.data,y=q.turn_id||q.turnId;if(y)F0(y);if(T_({running:!0,clearSilence:!0}),N0(),b(q),V.thought&&V.thought.text)I((w)=>{if(w&&w.text&&w.text.length>=V.thought.text.length)return w;return h.current=V.thought.text,{text:V.thought.text,totalLines:V.thought.totalLines||0}});if(V.draft&&V.draft.text)M((w)=>{if(w&&w.text&&w.text.length>=V.draft.text.length)return w;return r.current=V.draft.text,{text:V.draft.text,totalLines:V.draft.totalLines||0}});return V}catch(V){return console.warn("Failed to fetch agent status:",V),null}},[V0,N0,T_,W,F0]),q1=S(async()=>{if(!Y_.current)return null;if(e.current)return null;let V=J_.current||null,q=o_.current,y=Date.now();if(q.inFlight)return null;if(q.turnId===V&&y-q.lastAttemptAt<Z3)return null;q.inFlight=!0,q.lastAttemptAt=y,q.turnId=V;try{let{currentHashtag:w,searchQuery:u}=G0.current||{};if(!w&&!u)await W();return await z_(),await J2()}finally{q.inFlight=!1}},[J2,z_,W]);m(()=>{let V=Math.min(1000,Math.max(100,Math.floor($3/2))),q=setInterval(()=>{if(!Y_.current)return;if(e.current)return;let y=P_.current;if(!y)return;let w=Date.now(),u=w-y;if(u>=q8){b({type:"waiting",title:"Re-syncing after a quiet period…"}),q1();return}if(u>=$3){if(w-d.current>=Z3){let T=Math.floor(u/1000);b({type:"waiting",title:`Waiting for model… No events for ${T}s`}),d.current=w,q1()}}},V);return()=>clearInterval(q)},[q1]);let k8=S((V)=>{if($(V),V!=="connected"){b(null),M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),o(null),e.current=null,V0();return}if(!A0.current){A0.current=!0,J2();return}let{currentHashtag:q,searchQuery:y}=G0.current;if(!q&&!y)W();J2()},[V0,W,J2]),C8=S(async(V)=>{J(V),$0(null),await g0(V)},[g0]),y8=S(async()=>{J(null),Y(null),$0(null),await g0()},[g0]),A8=S(async(V)=>{if(!V||!V.trim())return;Y(V.trim()),J(null),$0(null);try{let q=await _5(V.trim());$0(q.results),V1(!1)}catch(q){console.error("Failed to search:",q),$0([])}},[]),b8=S(()=>{G(!0),Y(null),J(null),$0([])},[]),M8=S(()=>{G(!1),Y(null),g0()},[g0]),W5=S(()=>{},[]),P8=S(async(V)=>{if(!V)return;let q=V.id,y=D?.filter((u)=>u?.data?.thread_id===q&&u?.id!==q).length||0;if(y>0){if(!window.confirm(`Delete this message and its ${y} replies?`))return}let w=(u)=>{if(!u.length)return;J0((p)=>{let t=new Set(p);return u.forEach((B_)=>t.add(B_)),t}),setTimeout(()=>{if(N2(()=>{$0((p)=>p?p.filter((t)=>!u.includes(t.id)):p)}),J0((p)=>{let t=new Set(p);return u.forEach((B_)=>t.delete(B_)),t}),g2.current)E.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let u=await L8(q,y>0);if(u?.ids?.length)w(u.ids)}catch(u){let T=u?.message||"";if(y===0&&T.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let t=await L8(q,!0);if(t?.ids?.length)w(t.ids);return}console.error("Failed to delete post:",u),alert(`Failed to delete message: ${T}`)}},[D,N2]),X3=S(async()=>{try{let V=await $5();O_(B8(V));let q=V?.user||{};w0((w)=>{let u=typeof q.name==="string"&&q.name.trim()?q.name.trim():"You",T=typeof q.avatar_url==="string"?q.avatar_url.trim():null,p=typeof q.avatar_background==="string"&&q.avatar_background.trim()?q.avatar_background.trim():null;if(w.name===u&&w.avatar_url===T&&w.avatar_background===p)return w;return{name:u,avatar_url:T,avatar_background:p}});let y=(V?.agents||[]).find((w)=>w.id==="default");if(y?.model)q_(y.model);i(y?.name,y?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=await Y3();if(V)r_(V)}catch{}},[i]);m(()=>{X3();let V=E2("sidebarWidth",null),q=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(G2.current=q,i0.current)i0.current.style.setProperty("--sidebar-width",`${q}px`)},[X3]);let w8=B0||A!==null,j3=S((V)=>{if(!V||typeof V!=="object")return;let q=V.agent_id;if(!q)return;let{agent_name:y,agent_avatar:w}=V;if(!y&&w===void 0)return;let u=C0.current?.[q]||{id:q},T=u.name||null,p=u.avatar_url??u.avatarUrl??u.avatar??null,t=!1,B_=!1;if(y&&y!==u.name)T=y,B_=!0;if(w!==void 0){let r0=typeof w==="string"?w.trim():null,W3=typeof p==="string"?p.trim():null,H2=r0||null;if(H2!==(W3||null))p=H2,t=!0}if(!B_&&!t)return;if(O_((r0)=>{let H2={...r0[q]||{id:q}};if(B_)H2.name=T;if(t)H2.avatar_url=p;return{...r0,[q]:H2}}),q==="default")i(T,p,t?Date.now():null)},[i]),K3=S((V)=>{if(!V||typeof V!=="object")return;let q=V.user_name??V.userName,y=V.user_avatar??V.userAvatar,w=V.user_avatar_background??V.userAvatarBackground;if(q===void 0&&y===void 0&&w===void 0)return;w0((u)=>{let T=typeof q==="string"&&q.trim()?q.trim():u.name||"You",p=y===void 0?u.avatar_url:typeof y==="string"&&y.trim()?y.trim():null,t=w===void 0?u.avatar_background:typeof w==="string"&&w.trim()?w.trim():null;if(u.name===T&&u.avatar_url===p&&u.avatar_background===t)return u;return{name:T,avatar_url:p,avatar_background:t}})},[]),z1=S((V)=>{if(!V||typeof V!=="object")return;let q=V.model??V.current;if(q!==void 0)q_(q);if(V.thinking_level!==void 0)v_(V.thinking_level??null);if(V.supports_thinking!==void 0)E_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)D_(V.provider_usage??null)},[]),A2=S(()=>{Z5().then((V)=>{if(V)z1(V)}).catch(()=>{})},[z1]),S8=S((V)=>{let q=V?.row_id;if(q==null)return;s_.current.add(q),S_((y)=>y.filter((w)=>w?.row_id!==q)),Y5(q).then(()=>{z_()}).catch((y)=>{console.warn("[queue] Failed to steer queued item:",y),k_("Failed to steer message","The queued message could not be sent as steering.","warning"),s_.current.delete(q),z_()})},[z_,S_,k_]),x8=S((V)=>{let q=V?.row_id;if(q==null)return;s_.current.add(q),S_((y)=>y.filter((w)=>w?.row_id!==q)),X5(q).then(()=>{z_()}).catch((y)=>{console.warn("[queue] Failed to remove queued item:",y),k_("Failed to remove message","The queued message could not be removed.","warning"),s_.current.delete(q),z_()})},[z_,S_,k_]),I8=S((V)=>{if(!V||typeof V!=="object")return;if(V?.queued==="followup"||V?.queued==="steer"){z_();return}let q=V?.command;if(q&&typeof q==="object"&&(q?.queued_followup||q?.queued_steer))z_()},[z_]),B1=S(()=>{A2(),z_()},[A2,z_]);m(()=>{B1();let V=setInterval(()=>{A2(),z_()},60000);return()=>clearInterval(V)},[B1,A2,z_]);let Q1=S((V,q)=>{let y=q?.turn_id;if(j3(q),K3(q),V==="ui_theme"){z4(q);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))N0()}if(V==="connected"){b(null),M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),o(null),e.current=null,V0(),D8("web:default").then((t)=>{if(!t||t.status!=="active"||!t.data)return;let B_=t.data,r0=B_.turn_id||B_.turnId;if(r0)F0(r0);if(T_({clearSilence:!0}),$2(B_),t.thought&&t.thought.text)h.current=t.thought.text,I({text:t.thought.text,totalLines:t.thought.totalLines||0});if(t.draft&&t.draft.text)r.current=t.draft.text,M({text:t.draft.text,totalLines:t.draft.totalLines||0})}).catch((t)=>{console.warn("Failed to fetch agent status:",t)});let{currentHashtag:T,searchQuery:p}=G0.current||{};if(!T&&!p)W();B1();return}if(V==="agent_status"){if(q.type==="done"||q.type==="error"){if(y&&J_.current&&y!==J_.current)return;if(q.type==="done"){v0(y||J_.current);let{currentHashtag:T,searchQuery:p}=G0.current||{};if(!T&&!p)W();if(q.context_usage)r_(q.context_usage)}if(m_.current=!1,V0(),s_.current.clear(),z_(),M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),o(null),q.type==="error")b({type:"error",title:q.title||"Agent error"}),setTimeout(()=>b(null),8000);else b(null)}else{if(y)F0(y);if(T_({running:!0,clearSilence:!0}),q.type==="thinking")r.current="",h.current="",M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0});e_.current=q,b((T)=>{if(T&&T.type===q.type&&T.title===q.title)return T;return q})}return}if(V==="agent_steer_queued"){if(y&&J_.current&&y!==J_.current)return;let T=y||J_.current;if(!T)return;M_.current=T,N_(T);return}if(V==="agent_followup_queued"){let T=q?.row_id,p=q?.content;if(T!=null&&typeof p==="string"&&p.trim())S_((t)=>{if(t.some((B_)=>B_?.row_id===T))return t;return[...t,{row_id:T,content:p,timestamp:q?.timestamp||null,thread_id:q?.thread_id??null}]});z_();return}if(V==="agent_followup_consumed"){let T=q?.row_id;if(T!=null)S_((p)=>p.filter((t)=>t.row_id!==T));z_(),W();return}if(V==="agent_followup_removed"){let T=q?.row_id;if(T!=null)s_.current.add(T),S_((p)=>p.filter((t)=>t.row_id!==T));z_();return}if(V==="agent_draft_delta"){if(y&&J_.current&&y!==J_.current)return;if(y&&!J_.current)F0(y);if(T_({running:!0,clearSilence:!0}),q?.reset)r.current="";if(q?.delta)r.current+=q.delta;let T=Date.now();if(!L0.current||T-L0.current>=100){L0.current=T;let p=r.current,t=J3(p);if(Q_.current)M((B_)=>({text:B_?.text||"",totalLines:t,fullText:p}));else M({text:p,totalLines:t})}return}if(V==="agent_draft"){if(y&&J_.current&&y!==J_.current)return;if(y&&!J_.current)F0(y);T_({running:!0,clearSilence:!0});let T=q.text||"",p=q.mode||(q.kind==="plan"?"replace":"append"),t=Number.isFinite(q.total_lines)?q.total_lines:T?T.replace(/\r\n/g,`
`).split(`
`).length:0;if(q.kind==="plan")if(p==="replace")P(T);else P((B_)=>(B_||"")+T);else if(!Q_.current)r.current=T,M({text:T,totalLines:t});return}if(V==="agent_thought_delta"){if(y&&J_.current&&y!==J_.current)return;if(y&&!J_.current)F0(y);if(T_({running:!0,clearSilence:!0}),q?.reset)h.current="";if(typeof q?.delta==="string")h.current+=q.delta;let T=Date.now();if(X_.current&&(!S0.current||T-S0.current>=100)){S0.current=T;let p=h.current;I((t)=>({text:t?.text||"",totalLines:J3(p),fullText:p}))}return}if(V==="agent_thought"){if(y&&J_.current&&y!==J_.current)return;if(y&&!J_.current)F0(y);T_({running:!0,clearSilence:!0});let T=q.text||"",p=Number.isFinite(q.total_lines)?q.total_lines:T?T.replace(/\r\n/g,`
`).split(`
`).length:0;if(!X_.current)h.current=T,I({text:T,totalLines:p});return}if(V==="agent_request"){if(console.log("Agent request:",q),y&&J_.current&&y!==J_.current)return;if(y)F0(y);T_({running:!0,clearSilence:!0}),o(q),e.current=q;return}if(V==="agent_request_timeout"){if(console.log("Agent request timeout:",q),y&&J_.current&&y!==J_.current)return;o(null),e.current=null,V0(),b({type:"error",title:"Permission request timed out"});return}if(V==="model_changed"){if(q?.model!==void 0)q_(q.model);if(q?.thinking_level!==void 0)v_(q.thinking_level??null);if(q?.supports_thinking!==void 0)E_(Boolean(q.supports_thinking));Y3().then((T)=>{if(T)r_(T)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:q}));return}let{currentHashtag:w,searchQuery:u}=G0.current;if(V==="agent_response")g(),_0.current={post:q,turnId:J_.current};if(!w&&!u&&(V==="new_post"||V==="agent_response"))$0((T)=>{if(!T)return[q];if(T.some((p)=>p.id===q.id))return T;return[...T,q]}),R0.current?.();if(V==="interaction_updated")$0((T)=>{if(!T)return T;if(!T.some((p)=>p.id===q.id))return T;return T.map((p)=>p.id===q.id?q:p)});if(V==="interaction_deleted"){let T=q?.ids||[];if(T.length){N2(()=>{$0((B_)=>B_?B_.filter((r0)=>!T.includes(r0.id)):B_)});let{currentHashtag:p,searchQuery:t}=G0.current;if(g2.current&&!p&&!t)E.current?.({preserveScroll:!0,preserveMode:"top"})}}},[V0,N0,E,T_,v0,N2,W,g,F0,$2,j3,K3,A2,z_,S_]);m(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=Q1,V.reset=()=>{g(),V0(),b(null),M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),o(null)},V.finalize=()=>u0(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[V0,u0,Q1,g]),K8({handleSseEvent:Q1,handleConnectionStatusChange:k8,loadPosts:g0}),m(()=>{if(!D||D.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let q=V.slice(5);b0(q),history.replaceState(null,"",location.pathname+location.search)},[D,b0]);let U1=A!==null;m(()=>{if(_!=="connected")return;let q=setInterval(()=>{let{currentHashtag:y,searchQuery:w}=G0.current||{},u=!y&&!w;if(U1){if(u)W();z_(),J2(),O1()}else{if(u)W();J2(),O1()}},U1?15000:60000);return()=>clearInterval(q)},[_,U1,J2,O1,z_,W]);let T8=S(()=>{a0((V)=>!V)},[]);m(()=>{if(!c_)return;if(typeof window>"u")return;let V=i0.current;if(!V)return;if(!l0.current){let q=E2("editorWidth",null),y=G2.current||280;l0.current=Number.isFinite(q)?q:y}if(V.style.setProperty("--editor-width",`${l0.current}px`),!o0.current){let q=E2("dockHeight",null);o0.current=Number.isFinite(q)?q:200}V.style.setProperty("--dock-height",`${o0.current}px`)},[c_]);let U2=d_.getDockPanes().length>0,[H1,f8]=f(!1),u2=S(()=>f8((V)=>!V),[]);m(()=>{if(!U2)return;let V=(q)=>{if(q.ctrlKey&&q.key==="`")q.preventDefault(),u2()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[u2,U2]);let v8=Boolean($_&&$_===(A?.turn_id||Z_));return z`
        <div class=${`app-shell${n_?"":" workspace-collapsed"}${c_?" editor-open":""}`} ref=${i0}>
            <${J8}
                onFileSelect=${W_}
                visible=${n_}
                active=${n_||c_}
                onOpenEditor=${p0}
            />
            <button
                class=${`workspace-toggle-tab${n_?" open":" closed"}`}
                onClick=${T8}
                title=${n_?"Hide workspace":"Show workspace"}
                aria-label=${n_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${n} onTouchStart=${s}></div>
            ${c_&&z`
                <div class="editor-pane-container">
                    <${Y8}
                        tabs=${X0}
                        activeId=${u_}
                        onActivate=${k0}
                        onClose=${K2}
                        onCloseOthers=${T0}
                        onCloseAll=${f0}
                        onTogglePin=${K0}
                        onTogglePreview=${h0}
                        previewTabs=${j0}
                        onToggleDock=${U2?u2:void 0}
                        dockVisible=${U2&&H1}
                    />
                    <div class="editor-pane-host" ref=${W2}></div>
                    ${u_&&j0.has(u_)&&z`
                        <${j8}
                            getContent=${()=>W0.current?.getContent?.()}
                            path=${u_}
                            onClose=${()=>h0(u_)}
                        />
                    `}
                    ${U2&&H1&&z`<div class="dock-splitter" onMouseDown=${j_} onTouchStart=${O0}></div>`}
                    ${U2&&z`<div class=${`dock-panel${H1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${u2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="12" x2="12" y2="4"/>
                                    <polyline points="4 4 12 4 12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body">
                            <div class="terminal-placeholder">Terminal integration pending - xterm.js + WebSocket</div>
                        </div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${a} onTouchStart=${c}></div>
            `}
            <div class="container">
                ${X&&Q8()&&z`<div class="search-results-spacer"></div>`}
                ${(Z||X)&&z`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${y8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Z?`#${Z}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${R4}
                    posts=${D}
                    hasMore=${N1}
                    onLoadMore=${B}
                    timelineRef=${h_}
                    onHashtagClick=${C8}
                    onMessageRef=${q2}
                    onScrollToMessage=${b0}
                    onFileRef=${y0}
                    onPostClick=${void 0}
                    onDeletePost=${P8}
                    emptyMessage=${Z?`No posts with #${Z}`:X?`No results for "${X}"`:void 0}
                    agents=${U_}
                    user=${p_}
                    reverse=${!(X&&!Z)}
                    removingPostIds=${U0}
                    searchQuery=${X}
                />
                <${M4}
                    status=${A}
                    draft=${v}
                    plan=${U}
                    thought=${C}
                    pendingRequest=${l}
                    intent=${k}
                    turnId=${Z_}
                    steerQueued=${v8}
                    onPanelToggle=${E0}
                />
                <${j4}
                    onPost=${()=>{g0(),Q2()}}
                    onFocus=${Q2}
                    searchMode=${j}
                    onSearch=${A8}
                    onEnterSearch=${b8}
                    onExitSearch=${M8}
                    fileRefs=${N}
                    onRemoveFileRef=${y_}
                    onClearFileRefs=${w_}
                    messageRefs=${K}
                    onRemoveMessageRef=${z2}
                    onClearMessageRefs=${B2}
                    activeEditorPath=${u_}
                    onAttachEditorFile=${d0}
                    onOpenFilePill=${y0}
                    followupQueueCount=${I0}
                    followupQueueItems=${z0}
                    onInjectQueuedFollowup=${S8}
                    onRemoveQueuedFollowup=${x8}
                    onMessageResponse=${I8}
                    isAgentActive=${w8}
                    activeModel=${H_}
                    modelUsage=${R_}
                    thinkingLevel=${b_}
                    supportsThinking=${F_}
                    contextUsage=${t_}
                    currentBranch=${l_}
                    currentBranchRepoPath=${q0}
                    notificationsEnabled=${x}
                    notificationPermission=${__}
                    onToggleNotifications=${x_}
                    onModelChange=${q_}
                    onModelStateChange=${z1}
                />
                <${w4} status=${_} />
                <${P4}
                    request=${l}
                    onRespond=${()=>{o(null),e.current=null}}
                />
            </div>
        </div>
    `}T3(z`<${K5} />`,document.getElementById("app"));

//# debugId=3F031E1AC1B514E164756E2164756E21
//# sourceMappingURL=app.bundle.js.map
