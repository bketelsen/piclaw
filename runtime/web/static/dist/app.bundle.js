var xY=Object.defineProperty;var TY=(_)=>_;function CY(_,$){this[_]=TY.bind(null,$)}var PY=(_,$)=>{for(var j in $)xY(_,j,{get:$[j],enumerable:!0,configurable:!0,set:CY.bind($,j)})};var z8,L1,Y2,yY,I4,i3,q2,K2,N2,k6,J6,O6,G2,B8={},W8=[],SY=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H8=Array.isArray;function G4(_,$){for(var j in $)_[j]=$[j];return _}function M6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function J8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?z8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return U8(_,q,Q,Z,null)}function U8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++Y2:Z,__i:-1,__u:0};return Z==null&&L1.vnode!=null&&L1.vnode(Y),Y}function O8(_){return _.children}function G5(_,$){this.props=_,this.context=$}function X5(_,$){if($==null)return _.__?X5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?X5(_):null}function wY(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=G4({},$);Y.__v=$.__v+1,L1.vnode&&L1.vnode(Y),I6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?X5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,L2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&X2(Y)}}function X2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),X2(_)}function A6(_){(!_.__d&&(_.__d=!0)&&I4.push(_)&&!F8.__r++||i3!=L1.debounceRendering)&&((i3=L1.debounceRendering)||q2)(F8)}function F8(){try{for(var _,$=1;I4.length;)I4.length>$&&I4.sort(K2),_=I4.shift(),$=I4.length,wY(_)}finally{I4.length=F8.__r=0}}function V2(_,$,j,Q,Z,Y,q,K,N,G,X){var V,U,L,J,D,O,W,A=Q&&Q.__k||W8,E=$.length;for(N=RY(j,$,A,N,E),V=0;V<E;V++)(L=j.__k[V])!=null&&(U=L.__i!=-1&&A[L.__i]||B8,L.__i=V,O=I6(_,L,U,Z,Y,q,K,N,G,X),J=L.__e,L.ref&&U.ref!=L.ref&&(U.ref&&x6(U.ref,null,L),X.push(L.ref,L.__c||J,L)),D==null&&J!=null&&(D=J),(W=!!(4&L.__u))||U.__k===L.__k?N=U2(L,N,_,W):typeof L.type=="function"&&O!==void 0?N=O:J&&(N=J.nextSibling),L.__u&=-7);return j.__e=D,N}function RY(_,$,j,Q,Z){var Y,q,K,N,G,X=j.length,V=X,U=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=U8(null,q,null,null,null):H8(q)?q=_.__k[Y]=U8(O8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=U8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,N=Y+U,q.__=_,q.__b=_.__b+1,K=null,(G=q.__i=uY(q,j,N,V))!=-1&&(V--,(K=j[G])&&(K.__u|=2)),K==null||K.__v==null?(G==-1&&(Z>X?U--:Z<X&&U++),typeof q.type!="function"&&(q.__u|=4)):G!=N&&(G==N-1?U--:G==N+1?U++:(G>N?U--:U++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<X;Y++)(K=j[Y])!=null&&(2&K.__u)==0&&(K.__e==Q&&(Q=X5(K)),W2(K,K));return Q}function U2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=U2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=X5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function uY(_,$,j,Q){var Z,Y,q,K=_.key,N=_.type,G=$[j],X=G!=null&&(2&G.__u)==0;if(G===null&&K==null||X&&K==G.key&&N==G.type)return j;if(Q>(X?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((G=$[q=Z>=0?Z--:Y++])!=null&&(2&G.__u)==0&&K==G.key&&N==G.type)return q}return-1}function r3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||SY.test($)?j:j+"px"}function V8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||r3(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||r3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(N2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=k6,_.addEventListener($,Y?O6:J6,Y)):_.removeEventListener($,Y?O6:J6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function o3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=k6++;else if($.t<j.u)return;return j(L1.event?L1.event($):$)}}}function I6(_,$,j,Q,Z,Y,q,K,N,G){var X,V,U,L,J,D,O,W,A,E,f,u,c,o,P,I=$.type;if($.constructor!==void 0)return null;128&j.__u&&(N=!!(32&j.__u),Y=[K=$.__e=j.__e]),(X=L1.__b)&&X($);_:if(typeof I=="function")try{if(W=$.props,A=I.prototype&&I.prototype.render,E=(X=I.contextType)&&Q[X.__c],f=X?E?E.props.value:X.__:Q,j.__c?O=(V=$.__c=j.__c).__=V.__E:(A?$.__c=V=new I(W,f):($.__c=V=new G5(W,f),V.constructor=I,V.render=vY),E&&E.sub(V),V.state||(V.state={}),V.__n=Q,U=V.__d=!0,V.__h=[],V._sb=[]),A&&V.__s==null&&(V.__s=V.state),A&&I.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=G4({},V.__s)),G4(V.__s,I.getDerivedStateFromProps(W,V.__s))),L=V.props,J=V.state,V.__v=$,U)A&&I.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),A&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(A&&I.getDerivedStateFromProps==null&&W!==L&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(W,f),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(W,V.__s,f)===!1){$.__v!=j.__v&&(V.props=W,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(z){z&&(z.__=$)}),W8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(W,V.__s,f),A&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(L,J,D)})}if(V.context=f,V.props=W,V.__P=_,V.__e=!1,u=L1.__r,c=0,A)V.state=V.__s,V.__d=!1,u&&u($),X=V.render(V.props,V.state,V.context),W8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,u&&u($),X=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++c<25);V.state=V.__s,V.getChildContext!=null&&(Q=G4(G4({},Q),V.getChildContext())),A&&!U&&V.getSnapshotBeforeUpdate!=null&&(D=V.getSnapshotBeforeUpdate(L,J)),o=X!=null&&X.type===O8&&X.key==null?B2(X.props.children):X,K=V2(_,H8(o)?o:[o],$,j,Q,Z,Y,q,K,N,G),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),O&&(V.__E=V.__=null)}catch(z){if($.__v=null,N||Y!=null)if(z.then){for($.__u|=N?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;Y[Y.indexOf(K)]=null,$.__e=K}else{for(P=Y.length;P--;)M6(Y[P]);D6($)}else $.__e=j.__e,$.__k=j.__k,z.then||D6($);L1.__e(z,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=fY(j.__e,$,j,Q,Z,Y,q,N,G);return(X=L1.diffed)&&X($),128&$.__u?void 0:K}function D6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(D6))}function L2(_,$,j){for(var Q=0;Q<j.length;Q++)x6(j[Q],j[++Q],j[++Q]);L1.__c&&L1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){L1.__e(Y,Z.__v)}})}function B2(_){return typeof _!="object"||_==null||_.__b>0?_:H8(_)?_.map(B2):G4({},_)}function fY(_,$,j,Q,Z,Y,q,K,N){var G,X,V,U,L,J,D,O=j.props||B8,W=$.props,A=$.type;if(A=="svg"?Z="http://www.w3.org/2000/svg":A=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((L=Y[G])&&"setAttribute"in L==!!A&&(A?L.localName==A:L.nodeType==3)){_=L,Y[G]=null;break}}if(_==null){if(A==null)return document.createTextNode(W);_=document.createElementNS(Z,A,W.is&&W),K&&(L1.__m&&L1.__m($,Y),K=!1),Y=null}if(A==null)O===W||K&&_.data==W||(_.data=W);else{if(Y=Y&&z8.call(_.childNodes),!K&&Y!=null)for(O={},G=0;G<_.attributes.length;G++)O[(L=_.attributes[G]).name]=L.value;for(G in O)L=O[G],G=="dangerouslySetInnerHTML"?V=L:G=="children"||(G in W)||G=="value"&&("defaultValue"in W)||G=="checked"&&("defaultChecked"in W)||V8(_,G,null,L,Z);for(G in W)L=W[G],G=="children"?U=L:G=="dangerouslySetInnerHTML"?X=L:G=="value"?J=L:G=="checked"?D=L:K&&typeof L!="function"||O[G]===L||V8(_,G,L,O[G],Z);if(X)K||V&&(X.__html==V.__html||X.__html==_.innerHTML)||(_.innerHTML=X.__html),$.__k=[];else if(V&&(_.innerHTML=""),V2($.type=="template"?_.content:_,H8(U)?U:[U],$,j,Q,A=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&X5(j,0),K,N),Y!=null)for(G=Y.length;G--;)M6(Y[G]);K||(G="value",A=="progress"&&J==null?_.removeAttribute("value"):J!=null&&(J!==_[G]||A=="progress"&&!J||A=="option"&&J!=O[G])&&V8(_,G,J,O[G],Z),G="checked",D!=null&&D!=_[G]&&V8(_,G,D,O[G],Z))}return _}function x6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){L1.__e(Z,j)}}function W2(_,$,j){var Q,Z;if(L1.unmount&&L1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||x6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){L1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&W2(Q[Z],$,j||typeof _.type!="function");j||M6(_.__e),_.__c=_.__=_.__e=void 0}function vY(_,$,j){return this.constructor(_,j)}function T4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),L1.__&&L1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],I6($,_=(!Q&&j||$).__k=J8(O8,null,[_]),Z||B8,B8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?z8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),L2(Y,_,q)}function F2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,A6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+G2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}z8=W8.slice,L1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(K){_=K}throw _}},Y2=0,yY=function(_){return _!=null&&_.constructor===void 0},G5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=G4({},this.state),typeof _=="function"&&(_=_(G4({},j),this.props)),_&&G4(j,_),_!=null&&this.__v&&($&&this._sb.push($),A6(this))},G5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),A6(this))},G5.prototype.render=O8,I4=[],q2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K2=function(_,$){return _.__v.__b-$.__v.__b},F8.__r=0,N2=/(PointerCapture)$|Capture$/i,k6=0,J6=o3(!1),O6=o3(!0),G2=0;var x4,U1,H6,s3,V5=0,z2=[],O1=L1,a3=O1.__b,t3=O1.__r,e3=O1.diffed,_2=O1.__c,$2=O1.unmount,j2=O1.__;function U5(_,$){O1.__h&&O1.__h(U1,_,V5||$),V5=0;var j=U1.__H||(U1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function g(_){return V5=1,T6(D2,_)}function T6(_,$,j){var Q=U5(x4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):D2(void 0,$),function(K){var N=Q.__N?Q.__N[0]:Q.__[0],G=Q.t(N,K);N!==G&&(Q.__N=[G,Q.__[1]],Q.__c.setState({}))}],Q.__c=U1,!U1.__f)){var Z=function(K,N,G){if(!Q.__c.__H)return!0;var X=Q.__c.__H.__.filter(function(U){return U.__c});if(X.every(function(U){return!U.__N}))return!Y||Y.call(this,K,N,G);var V=Q.__c.props!==K;return X.some(function(U){if(U.__N){var L=U.__[0];U.__=U.__N,U.__N=void 0,L!==U.__[0]&&(V=!0)}}),Y&&Y.call(this,K,N,G)||V};U1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=U1;U1.componentWillUpdate=function(K,N,G){if(this.__e){var X=Y;Y=void 0,Z(K,N,G),Y=X}q&&q.call(this,K,N,G)},U1.shouldComponentUpdate=Z}return Q.__N||Q.__}function v(_,$){var j=U5(x4++,3);!O1.__s&&C6(j.__H,$)&&(j.__=_,j.u=$,U1.__H.__h.push(j))}function R5(_,$){var j=U5(x4++,4);!O1.__s&&C6(j.__H,$)&&(j.__=_,j.u=$,U1.__h.push(j))}function x(_){return V5=5,u0(function(){return{current:_}},[])}function H2(_,$,j){V5=6,R5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function u0(_,$){var j=U5(x4++,7);return C6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function T(_,$){return V5=8,u0(function(){return _},$)}function J2(_){var $=U1.context[_.__c],j=U5(x4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(U1)),$.props.value):_.__}function O2(_,$){O1.useDebugValue&&O1.useDebugValue($?$(_):_)}function A2(_){var $=U5(x4++,10),j=g();return $.__=_,U1.componentDidCatch||(U1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function gY(){for(var _;_=z2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(L8),$.__h.some(E6),$.__h=[]}catch(j){$.__h=[],O1.__e(j,_.__v)}}}O1.__b=function(_){U1=null,a3&&a3(_)},O1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),j2&&j2(_,$)},O1.__r=function(_){t3&&t3(_),x4=0;var $=(U1=_.__c).__H;$&&(H6===U1?($.__h=[],U1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(L8),$.__h.some(E6),$.__h=[],x4=0)),H6=U1},O1.diffed=function(_){e3&&e3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(z2.push($)!==1&&s3===O1.requestAnimationFrame||((s3=O1.requestAnimationFrame)||bY)(gY)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),H6=U1=null},O1.__c=function(_,$){$.some(function(j){try{j.__h.some(L8),j.__h=j.__h.filter(function(Q){return!Q.__||E6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],O1.__e(Q,j.__v)}}),_2&&_2(_,$)},O1.unmount=function(_){$2&&$2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{L8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&O1.__e($,j.__v))};var Q2=typeof requestAnimationFrame=="function";function bY(_){var $,j=function(){clearTimeout(Q),Q2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);Q2&&($=requestAnimationFrame(j))}function L8(_){var $=U1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),U1=$}function E6(_){var $=U1;_.__c=_.__(),U1=$}function C6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function D2(_,$){return typeof $=="function"?$(_):$}var E2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],K=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=K:q===4?Q[1]=Object.assign(Q[1]||{},K):q===5?(Q[1]=Q[1]||{})[$[++Y]]=K:q===6?Q[1][$[++Y]]+=K+"":q?(Z=_.apply(K,E2(_,K,j,["",null])),Q.push(Z),K[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(K)}return Q},Z2=new Map;function mY(_){var $=Z2.get(this);return $||($=new Map,Z2.set(this,$)),($=E2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",K="",N=[0],G=function(U){Y===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,U,q):Y===3&&(U||q)?(N.push(3,U,q),Y=2):Y===2&&q==="..."&&U?N.push(4,U,0):Y===2&&q&&!U?N.push(5,0,!0,q):Y>=5&&((q||!U&&Y===5)&&(N.push(Y,0,q,Z),Y=6),U&&(N.push(Y,U,0,Z),Y=6)),q=""},X=0;X<j.length;X++){X&&(Y===1&&G(),G(X));for(var V=0;V<j[X].length;V++)Q=j[X][V],Y===1?Q==="<"?(G(),N=[N],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:K?Q===K?K="":q+=Q:Q==='"'||Q==="'"?K=Q:Q===">"?(G(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[X][V+1]===">")?(G(),Y===3&&(N=N[0]),Y=N,(N=N[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(G(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,N=N[0])}return G(),N}(_)),$),arguments,[])).length>1?$:$[0]}var B=mY.bind(J8);var r1={};PY(r1,{uploadWorkspaceFile:()=>D8,uploadMedia:()=>v6,updateWorkspaceFile:()=>Yq,submitAdaptiveCardAction:()=>g6,streamSidePrompt:()=>jq,stopAutoresearch:()=>aY,steerAgentQueueItem:()=>$q,setWorkspaceVisibility:()=>b5,setAgentThoughtVisibility:()=>h6,sendPeerAgentMessage:()=>rY,sendAgentMessage:()=>d4,searchPosts:()=>y6,restoreChatBranch:()=>iY,respondToAgentRequest:()=>A8,renameWorkspaceFile:()=>d6,renameChatBranch:()=>nY,removeAgentQueueItem:()=>_q,pruneChatBranch:()=>dY,moveWorkspaceEntry:()=>i6,getWorkspaceTree:()=>v5,getWorkspaceRawUrl:()=>E8,getWorkspaceFile:()=>g5,getWorkspaceDownloadUrl:()=>k8,getWorkspaceBranch:()=>Zq,getTimeline:()=>n4,getThumbnailUrl:()=>p6,getThread:()=>S6,getPostsByHashtag:()=>P6,getMediaUrl:()=>S_,getMediaText:()=>c6,getMediaInfo:()=>L5,getMediaBlob:()=>Qq,getChatBranches:()=>lY,getAutoresearchStatus:()=>sY,getAgents:()=>u6,getAgentThought:()=>m6,getAgentStatus:()=>f6,getAgentQueueState:()=>eY,getAgentModels:()=>f5,getAgentContext:()=>oY,getActiveChatAgents:()=>R6,forkChatBranch:()=>u5,dismissAutoresearch:()=>tY,deleteWorkspaceFile:()=>r6,deletePost:()=>w6,createWorkspaceFile:()=>n6,createReply:()=>cY,createPost:()=>pY,attachWorkspaceFile:()=>l6,addToWhitelist:()=>b6,SSEClient:()=>M8});async function s0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function k2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function hY(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:K}=await j.read();if(K)break;Z+=Q.decode(q,{stream:!0});let N=Z.split(`

`);Z=N.pop()||"";for(let G of N){let X=k2(G);if(X)$(X.event,X.data)}}Z+=Q.decode();let Y=k2(Z);if(Y)$(Y.event,Y.data)}async function n4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return s0(Q)}async function P6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return s0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function y6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",K=Z?`&scope=${encodeURIComponent(Z)}`:"",N=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return s0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${N}`)}async function S6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return s0(`/thread/${_}${j}`)}async function pY(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return s0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function cY(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return s0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function w6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return s0(Z,{method:"DELETE"})}async function d4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",K={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")K.mode=Z;return s0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(K)})}async function R6(){return s0("/agent/active-chats")}async function lY(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return s0(`/agent/branches${Q}`)}async function u5(_,$={}){return s0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function nY(_,$={}){return s0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function dY(_){return s0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function iY(_,$={}){return s0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function rY(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return s0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function u6(){return s0("/agent/roster")}async function f6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/status${$}`)}async function oY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/context${$}`)}async function sY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/autoresearch/status${$}`)}async function aY(_=null,$={}){return s0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function tY(_=null){return s0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function eY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/queue-state${$}`)}async function _q(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function $q(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function f5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/models${$}`)}async function v6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function A8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function g6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function jq(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await hY(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function b6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function m6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return s0(j)}async function h6(_,$,j){return s0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function S_(_){return`/media/${_}`}function p6(_){return`/media/${_}/thumbnail`}async function L5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function c6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Qq(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function v5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return s0(Q)}async function Zq(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return s0($)}async function g5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return s0(Z)}async function Yq(_,$){return s0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function l6(_){return s0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function D8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",K=await fetch(""+q,{method:"POST",body:Q});if(!K.ok){let N=await K.json().catch(()=>({error:"Upload failed"})),G=Error(N.error||`HTTP ${K.status}`);throw G.status=K.status,G.code=N.code,G}return K.json()}async function n6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function d6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function i6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function r6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return s0($,{method:"DELETE"})}async function b5(_,$=!1){return s0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function E8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function k8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class M8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class M2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var l0=new M2;var I8=null,o6=null;function qq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function I2(){if(o6)return Promise.resolve(o6);if(!I8)I8=import(qq()).then((_)=>{return o6=_,_}).catch((_)=>{throw I8=null,_});return I8}class x2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await I2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var s6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new x2(_,$)}};function a6(){I2().catch(()=>{})}var i4="piclaw://terminal";var Kq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Nq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},x8=null,t6=null;function Gq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Xq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!Gq(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function Vq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!x8)x8=Xq(()=>Promise.resolve($.init?.())).catch((j)=>{throw x8=null,j});return await x8,$}async function Uq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!t6)t6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await t6}async function Lq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Bq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Wq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function X4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Fq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function T2(){let _=Wq(),$=_?Nq:Kq,j=X4("--bg-primary",_?"#000000":"#ffffff"),Q=X4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=X4("--text-secondary",_?"#71767b":"#536471"),Y=X4("--accent-color","#1d9bf0"),q=X4("--danger-color",_?"#ff7b72":"#cf222e"),K=X4("--success-color",_?"#7ee787":"#1a7f37"),N=X4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=X4("--border-color",_?"#2f3336":"#eff3f4"),X=X4("--accent-soft-strong",Fq(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:X,selectionForeground:Q,black:N,red:q,green:K,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class e6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Vq();if(await Uq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:T2()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=T2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Lq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Bq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var _$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new e6(_,$)}},$$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new e6(_,$)}};function V4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function T8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function C2(_,$={}){if(V4($))return null;if(T8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:zq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function j$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Q$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function Z$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function Y$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function U4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function P2(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function y2(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,K]of Object.entries(Y)){let N=String(q||"").trim();if(!N)continue;if(K===null||K===void 0||K==="")Q.searchParams.delete(N);else Q.searchParams.set(N,String(K))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function zq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function Hq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function S2(_,$={}){if(V4($))return null;if(T8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Hq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function m5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Jq(_){try{return JSON.parse(_)}catch{return null}}function Oq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function Aq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class q${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=Aq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||Jq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=Oq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var h5=()=>{throw Error("Operation requires compiling with --exportRuntime")},Dq=typeof BigUint64Array<"u",p5=Symbol();var Eq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function w2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return Eq.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function R2(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return w2(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,K,N){let G=$.memory||Q.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${K}:${N}`)},Q.trace=Q.trace||function(Y,q,...K){let N=$.memory||Q.memory;console.log(`trace: ${j(N,Y)}${q?" ":""}${K.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function u2(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||h5,q=j.__pin||h5,K=j.__unpin||h5,N=j.__collect||h5,G=j.__rtti_base,X=G?(z)=>z[G>>>2]:h5;_.__new=Y,_.__pin=q,_.__unpin=K,_.__collect=N;function V(z){let C=new Uint32Array(Q.buffer);if((z>>>=0)>=X(C))throw Error(`invalid id: ${z}`);return C[(G+4>>>2)+z]}function U(z){let C=V(z);if(!(C&7))throw Error(`not an array: ${z}, flags=${C}`);return C}function L(z){return 31-Math.clz32(z>>>6&31)}function J(z){if(z==null)return 0;let C=z.length,b=Y(C<<1,2),e=new Uint16Array(Q.buffer);for(let p=0,a=b>>>1;p<C;++p)e[a+p]=z.charCodeAt(p);return b}_.__newString=J;function D(z){if(z==null)return 0;let C=new Uint8Array(z),b=Y(C.length,1);return new Uint8Array(Q.buffer).set(C,b),b}_.__newArrayBuffer=D;function O(z){if(!z)return null;let C=Q.buffer;if(new Uint32Array(C)[z+-8>>>2]!==2)throw Error(`not a string: ${z}`);return w2(C,z)}_.__getString=O;function W(z,C,b){let e=Q.buffer;if(b)switch(z){case 2:return new Float32Array(e);case 3:return new Float64Array(e)}else switch(z){case 0:return new(C?Int8Array:Uint8Array)(e);case 1:return new(C?Int16Array:Uint16Array)(e);case 2:return new(C?Int32Array:Uint32Array)(e);case 3:return new(C?BigInt64Array:BigUint64Array)(e)}throw Error(`unsupported align: ${z}`)}function A(z,C=0){let b=C,e=U(z),p=L(e),a=typeof b!=="number",t=a?b.length:b,_0=Y(t<<p,e&4?z:1),q0;if(e&4)q0=_0;else{q(_0);let Z0=Y(e&2?16:12,z);K(_0);let N0=new Uint32Array(Q.buffer);if(N0[Z0+0>>>2]=_0,N0[Z0+4>>>2]=_0,N0[Z0+8>>>2]=t<<p,e&2)N0[Z0+12>>>2]=t;q0=Z0}if(a){let Z0=W(p,e&2048,e&4096),N0=_0>>>p;if(e&16384)for(let F0=0;F0<t;++F0)Z0[N0+F0]=b[F0];else Z0.set(b,N0)}return q0}_.__newArray=A;function E(z){let C=new Uint32Array(Q.buffer),b=C[z+-8>>>2],e=U(b),p=L(e),a=e&4?z:C[z+4>>>2],t=e&2?C[z+12>>>2]:C[a+-4>>>2]>>>p;return W(p,e&2048,e&4096).subarray(a>>>=p,a+t)}_.__getArrayView=E;function f(z){let C=E(z),b=C.length,e=Array(b);for(let p=0;p<b;p++)e[p]=C[p];return e}_.__getArray=f;function u(z){let C=Q.buffer,b=new Uint32Array(C)[z+-4>>>2];return C.slice(z,z+b)}_.__getArrayBuffer=u;function c(z){if(!Z)throw Error("Operation requires compiling with --exportTable");let C=new Uint32Array(Q.buffer)[z>>>2];return Z.get(C)}_.__getFunction=c;function o(z,C,b){return new z(P(z,C,b))}function P(z,C,b){let e=Q.buffer,p=new Uint32Array(e);return new z(e,p[b+4>>>2],p[b+8>>>2]>>>C)}function I(z,C,b){_[`__get${C}`]=o.bind(null,z,b),_[`__get${C}View`]=P.bind(null,z,b)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((z)=>{I(z,z.name,31-Math.clz32(z.BYTES_PER_ELEMENT))}),Dq)[BigUint64Array,BigInt64Array].forEach((z)=>{I(z,z.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,Mq(j,_)}function f2(_){return typeof Response<"u"&&_ instanceof Response}function kq(_){return _ instanceof WebAssembly.Module}async function K$(_,$={}){if(f2(_=await _))return C8(_,$);let j=kq(_)?_:await WebAssembly.compile(_),Q=R2($),Z=await WebAssembly.instantiate(j,$),Y=u2(Q,Z);return{module:j,instance:Z,exports:Y}}async function C8(_,$={}){if(!WebAssembly.instantiateStreaming)return K$(f2(_=await _)?_.arrayBuffer():_,$);let j=R2($),Q=await WebAssembly.instantiateStreaming(_,$),Z=u2(j,Q.instance);return{...Q,exports:Z}}function Mq(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let K=Y[0],N=K.indexOf("#");if(N>=0){let G=K.substring(0,N),X=q[G];if(typeof X>"u"||!X.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[p5]}},V.wrap=function(U){return Object.create(V.prototype,{[p5]:{value:U,writable:!1}})},X)Object.getOwnPropertyNames(X).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(X,U)));q[G]=V}if(K=K.substring(N+1),q=q[G].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4))){let V=_[Q.replace("set:","get:")],U=_[Q.replace("get:","set:")];Object.defineProperty(q,K,{get(){return V(this[p5])},set(L){U(this[p5],L)},enumerable:!0})}}else if(K==="constructor")(q[K]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[K]=function(...V){return j(V.length),Z(this[p5],...V)}).original=Z}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4)))Object.defineProperty(q,K,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[K]=(...G)=>{return j(G.length),Z(...G)}).original=Z;else q[K]=Z}return $}var xq="/static/js/vendor/remote-display-decoder.wasm",P8=null;function v2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function g2(){if(P8)return P8;return P8=(async()=>{try{let Q=function(Z,Y,q,K,N,G,X){let V=v2(Y),U=j.__pin(j.__newArrayBuffer(V));try{return j[Z](U,q,K,N,G,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(xq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof C8==="function"?await C8(_,{}):await K$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,K,N,G){return Q("processRawRect",Z,Y,q,K,N,G)},processCopyRect(Z,Y,q,K,N,G){return j.processCopyRect(Z,Y,q,K,N,G)},processRreRect(Z,Y,q,K,N,G){return Q("processRreRect",Z,Y,q,K,N,G)},processHextileRect(Z,Y,q,K,N,G){return Q("processHextileRect",Z,Y,q,K,N,G)},processZrleTileData(Z,Y,q,K,N,G){return Q("processZrleTileData",Z,Y,q,K,N,G)},decodeRawRectToRgba(Z,Y,q,K){let N=v2(Z),G=j.__pin(j.__newArrayBuffer(N));try{let X=j.__pin(j.decodeRawRectToRgba(G,Y,q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(X))}finally{j.__unpin(X)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),P8}function B5(_,$,j){return Math.max($,Math.min(j,_))}function y8(_,$,j){let Q=new Uint8Array(6),Z=B5(Math.floor(Number($||0)),0,65535),Y=B5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=B5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function G$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function b2(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),K=Math.max(1,Number(j?.width||0)),N=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/K,X=(Number($||0)-Number(j?.top||0))/N;return{x:B5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:B5(Math.floor(X*q),0,Math.max(0,q-1))}}function m2(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=B5(Number(Q||0)|Z,0,255);return[y8(Y,$,j),y8(Number(Q||0),$,j)]}function h2(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function c5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function p2(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Q||0))),N=Math.min(Z/q,Y/K);if(!Number.isFinite(N)||N<=0)return 1;return Math.max(0.01,N)}var N$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)N$[`F${_}`]=65470+(_-1);function X$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(N$,Y))return N$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var w1=Uint8Array,z_=Uint16Array,J$=Int32Array,S8=new w1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),w8=new w1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),W$=new w1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),d2=function(_,$){var j=new z_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new J$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},i2=d2(S8,2),r2=i2.b,F$=i2.r;r2[28]=258,F$[258]=28;var o2=d2(w8,0),Tq=o2.b,c2=o2.r,z$=new z_(32768);for(p0=0;p0<32768;++p0)s_=(p0&43690)>>1|(p0&21845)<<1,s_=(s_&52428)>>2|(s_&13107)<<2,s_=(s_&61680)>>4|(s_&3855)<<4,z$[p0]=((s_&65280)>>8|(s_&255)<<8)>>1;var s_,p0,a_=function(_,$,j){var Q=_.length,Z=0,Y=new z_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new z_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var K;if(j){K=new z_(1<<$);var N=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var G=Z<<4|_[Z],X=$-_[Z],V=q[_[Z]-1]++<<X;for(var U=V|(1<<X)-1;V<=U;++V)K[z$[V]>>N]=G}}else{K=new z_(Q);for(Z=0;Z<Q;++Z)if(_[Z])K[Z]=z$[q[_[Z]-1]++]>>15-_[Z]}return K},C4=new w1(288);for(p0=0;p0<144;++p0)C4[p0]=8;var p0;for(p0=144;p0<256;++p0)C4[p0]=9;var p0;for(p0=256;p0<280;++p0)C4[p0]=7;var p0;for(p0=280;p0<288;++p0)C4[p0]=8;var p0,i5=new w1(32);for(p0=0;p0<32;++p0)i5[p0]=5;var p0,Cq=a_(C4,9,0),Pq=a_(C4,9,1),yq=a_(i5,5,0),Sq=a_(i5,5,1),V$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},m_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},U$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},O$=function(_){return(_+7)/8|0},d5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new w1(_.subarray($,j))};var wq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],U_=function(_,$,j){var Q=Error($||wq[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,U_);if(!j)throw Q;return Q},Rq=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new w1(0);var q=!j,K=q||$.i!=2,N=$.i;if(q)j=new w1(Z*3);var G=function(i0){var z0=j.length;if(i0>z0){var x0=new w1(Math.max(z0*2,i0));x0.set(j),j=x0}},X=$.f||0,V=$.p||0,U=$.b||0,L=$.l,J=$.d,D=$.m,O=$.n,W=Z*8;do{if(!L){X=m_(_,V,1);var A=m_(_,V+1,3);if(V+=3,!A){var E=O$(V)+4,f=_[E-4]|_[E-3]<<8,u=E+f;if(u>Z){if(N)U_(0);break}if(K)G(U+f);j.set(_.subarray(E,u),U),$.b=U+=f,$.p=V=u*8,$.f=X;continue}else if(A==1)L=Pq,J=Sq,D=9,O=5;else if(A==2){var c=m_(_,V,31)+257,o=m_(_,V+10,15)+4,P=c+m_(_,V+5,31)+1;V+=14;var I=new w1(P),z=new w1(19);for(var C=0;C<o;++C)z[W$[C]]=m_(_,V+C*3,7);V+=o*3;var b=V$(z),e=(1<<b)-1,p=a_(z,b,1);for(var C=0;C<P;){var a=p[m_(_,V,e)];V+=a&15;var E=a>>4;if(E<16)I[C++]=E;else{var t=0,_0=0;if(E==16)_0=3+m_(_,V,3),V+=2,t=I[C-1];else if(E==17)_0=3+m_(_,V,7),V+=3;else if(E==18)_0=11+m_(_,V,127),V+=7;while(_0--)I[C++]=t}}var q0=I.subarray(0,c),Z0=I.subarray(c);D=V$(q0),O=V$(Z0),L=a_(q0,D,1),J=a_(Z0,O,1)}else U_(1);if(V>W){if(N)U_(0);break}}if(K)G(U+131072);var N0=(1<<D)-1,F0=(1<<O)-1,B0=V;for(;;B0=V){var t=L[U$(_,V)&N0],g0=t>>4;if(V+=t&15,V>W){if(N)U_(0);break}if(!t)U_(2);if(g0<256)j[U++]=g0;else if(g0==256){B0=V,L=null;break}else{var M0=g0-254;if(g0>264){var C=g0-257,D0=S8[C];M0=m_(_,V,(1<<D0)-1)+r2[C],V+=D0}var h0=J[U$(_,V)&F0],v0=h0>>4;if(!h0)U_(3);V+=h0&15;var Z0=Tq[v0];if(v0>3){var D0=w8[v0];Z0+=U$(_,V)&(1<<D0)-1,V+=D0}if(V>W){if(N)U_(0);break}if(K)G(U+131072);var c0=U+M0;if(U<Z0){var d0=Y-Z0,E0=Math.min(Z0,c0);if(d0+U<0)U_(3);for(;U<E0;++U)j[U]=Q[d0+U]}for(;U<c0;++U)j[U]=j[U-Z0]}}if($.l=L,$.p=B0,$.b=U,$.f=X,L)X=1,$.m=D,$.d=J,$.n=O}while(!X);return U!=j.length&&q?d5(j,0,U):j.subarray(0,U)},L4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},l5=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},L$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:a2,l:0};if(Z==1){var q=new w1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(u,c){return u.f-c.f}),j.push({s:-1,f:25001});var K=j[0],N=j[1],G=0,X=1,V=2;j[0]={s:-1,f:K.f+N.f,l:K,r:N};while(X!=Z-1)K=j[j[G].f<j[V].f?G++:V++],N=j[G!=X&&j[G].f<j[V].f?G++:V++],j[X++]={s:-1,f:K.f+N.f,l:K,r:N};var U=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>U)U=Y[Q].s;var L=new z_(U+1),J=H$(j[X-1],L,0);if(J>$){var Q=0,D=0,O=J-$,W=1<<O;Y.sort(function(c,o){return L[o.s]-L[c.s]||c.f-o.f});for(;Q<Z;++Q){var A=Y[Q].s;if(L[A]>$)D+=W-(1<<J-L[A]),L[A]=$;else break}D>>=O;while(D>0){var E=Y[Q].s;if(L[E]<$)D-=1<<$-L[E]++-1;else++Q}for(;Q>=0&&D;--Q){var f=Y[Q].s;if(L[f]==$)--L[f],++D}J=$}return{t:new w1(L),l:J}},H$=function(_,$,j){return _.s==-1?Math.max(H$(_.l,$,j+1),H$(_.r,$,j+1)):$[_.s]=j},l2=function(_){var $=_.length;while($&&!_[--$]);var j=new z_(++$),Q=0,Z=_[0],Y=1,q=function(N){j[Q++]=N};for(var K=1;K<=$;++K)if(_[K]==Z&&K!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[K]}return{c:j.subarray(0,Q),n:$}},n5=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},s2=function(_,$,j){var Q=j.length,Z=O$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},n2=function(_,$,j,Q,Z,Y,q,K,N,G,X){L4($,X++,j),++Z[256];var V=L$(Z,15),U=V.t,L=V.l,J=L$(Y,15),D=J.t,O=J.l,W=l2(U),A=W.c,E=W.n,f=l2(D),u=f.c,c=f.n,o=new z_(19);for(var P=0;P<A.length;++P)++o[A[P]&31];for(var P=0;P<u.length;++P)++o[u[P]&31];var I=L$(o,7),z=I.t,C=I.l,b=19;for(;b>4&&!z[W$[b-1]];--b);var e=G+5<<3,p=n5(Z,C4)+n5(Y,i5)+q,a=n5(Z,U)+n5(Y,D)+q+14+3*b+n5(o,z)+2*o[16]+3*o[17]+7*o[18];if(N>=0&&e<=p&&e<=a)return s2($,X,_.subarray(N,N+G));var t,_0,q0,Z0;if(L4($,X,1+(a<p)),X+=2,a<p){t=a_(U,L,0),_0=U,q0=a_(D,O,0),Z0=D;var N0=a_(z,C,0);L4($,X,E-257),L4($,X+5,c-1),L4($,X+10,b-4),X+=14;for(var P=0;P<b;++P)L4($,X+3*P,z[W$[P]]);X+=3*b;var F0=[A,u];for(var B0=0;B0<2;++B0){var g0=F0[B0];for(var P=0;P<g0.length;++P){var M0=g0[P]&31;if(L4($,X,N0[M0]),X+=z[M0],M0>15)L4($,X,g0[P]>>5&127),X+=g0[P]>>12}}}else t=Cq,_0=C4,q0=yq,Z0=i5;for(var P=0;P<K;++P){var D0=Q[P];if(D0>255){var M0=D0>>18&31;if(l5($,X,t[M0+257]),X+=_0[M0+257],M0>7)L4($,X,D0>>23&31),X+=S8[M0];var h0=D0&31;if(l5($,X,q0[h0]),X+=Z0[h0],h0>3)l5($,X,D0>>5&8191),X+=w8[h0]}else l5($,X,t[D0]),X+=_0[D0]}return l5($,X,t[256]),X+_0[256]},uq=new J$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),a2=new w1(0),fq=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,K=new w1(Q+q+5*(1+Math.ceil(q/7000))+Z),N=K.subarray(Q,K.length-Z),G=Y.l,X=(Y.r||0)&7;if($){if(X)N[0]=Y.r>>3;var V=uq[$-1],U=V>>13,L=V&8191,J=(1<<j)-1,D=Y.p||new z_(32768),O=Y.h||new z_(J+1),W=Math.ceil(j/3),A=2*W,E=function(o0){return(_[o0]^_[o0+1]<<W^_[o0+2]<<A)&J},f=new J$(25000),u=new z_(288),c=new z_(32),o=0,P=0,I=Y.i||0,z=0,C=Y.w||0,b=0;for(;I+2<q;++I){var e=E(I),p=I&32767,a=O[e];if(D[p]=a,O[e]=p,C<=I){var t=q-I;if((o>7000||z>24576)&&(t>423||!G)){X=n2(_,N,0,f,u,c,P,z,b,I-b,X),z=o=P=0,b=I;for(var _0=0;_0<286;++_0)u[_0]=0;for(var _0=0;_0<30;++_0)c[_0]=0}var q0=2,Z0=0,N0=L,F0=p-a&32767;if(t>2&&e==E(I-F0)){var B0=Math.min(U,t)-1,g0=Math.min(32767,I),M0=Math.min(258,t);while(F0<=g0&&--N0&&p!=a){if(_[I+q0]==_[I+q0-F0]){var D0=0;for(;D0<M0&&_[I+D0]==_[I+D0-F0];++D0);if(D0>q0){if(q0=D0,Z0=F0,D0>B0)break;var h0=Math.min(F0,D0-2),v0=0;for(var _0=0;_0<h0;++_0){var c0=I-F0+_0&32767,d0=D[c0],E0=c0-d0&32767;if(E0>v0)v0=E0,a=c0}}}p=a,a=D[p],F0+=p-a&32767}}if(Z0){f[z++]=268435456|F$[q0]<<18|c2[Z0];var i0=F$[q0]&31,z0=c2[Z0]&31;P+=S8[i0]+w8[z0],++u[257+i0],++c[z0],C=I+q0,++o}else f[z++]=_[I],++u[_[I]]}}for(I=Math.max(I,C);I<q;++I)f[z++]=_[I],++u[_[I]];if(X=n2(_,N,G,f,u,c,P,z,b,I-b,X),!G)Y.r=X&7|N[X/8|0]<<3,X-=7,Y.h=O,Y.p=D,Y.i=I,Y.w=C}else{for(var I=Y.w||0;I<q+G;I+=65535){var x0=I+65535;if(x0>=q)N[X/8|0]=G,x0=q;X=s2(N,X+1,_.subarray(I,x0))}Y.i=q}return d5(K,0,Q+O$(X)+Z)};var t2=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var K=Math.min(q+2655,Y);for(;q<K;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},vq=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new w1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return fq(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var e2=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var gq=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=t2();Z.p($.dictionary),e2(_,2,Z.d())}},bq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)U_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)U_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var B$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new w1(32768),this.p=new w1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)U_(5);if(this.d)U_(4);if(!this.p.length)this.p=$;else if($.length){var j=new w1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=Rq(this.p,this.s,this.o);this.ondata(d5(Q,j,this.s.b),this.d),this.o=d5(Q,this.s.b-32768),this.s.b=this.o.length,this.p=d5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function _7(_,$){if(!$)$={};var j=t2();j.p(_);var Q=vq(_,$,$.dictionary?6:2,4);return gq(Q,$),e2(Q,Q.length-4,j.d()),Q}var $7=function(){function _($,j){B$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(B$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(bq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)U_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}B$.prototype.c.call(this,j)},_}();var mq=typeof TextDecoder<"u"&&new TextDecoder,hq=0;try{mq.decode(a2,{stream:!0}),hq=1}catch(_){}var pq=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],cq=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],lq=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],nq=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],dq=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],iq=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],rq=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],oq=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],Z7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;Z7[_]=$}function Y7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function q7(_){let $=0n,j=Y7(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function sq(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function W5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function j7(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function aq(_){let $=W5(q7(_),dq,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of rq){j=j7(j,Y),Q=j7(Q,Y);let q=j<<28n|Q;Z.push(W5(q,iq,56))}return Z}function tq(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(oq[j][Y][q])}return $}function eq(_,$){let j=W5(_,lq,32)^BigInt($),Q=tq(j);return W5(Q,nq,32)}function Q7(_,$){let j=aq($),Q=W5(q7(_),pq,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let K of j){let N=Y,G=(Z^eq(Y,K))&0xffffffffn;Z=N,Y=G}let q=Y<<32n|Z;return sq(W5(q,cq,64),8)}function _K(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=Z7[Z]}return j}function K7(_,$){let j=Y7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=_K(_),Z=new Uint8Array(16);return Z.set(Q7(j.slice(0,8),Q),0),Z.set(Q7(j.slice(8,16),Q),8),Z}var h_="vnc";function $K(_){return Number(_)}function jK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=$K(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function H5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function QK(_,$){let j=H5(_),Q=H5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function ZK(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=H5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function YK(){return(_)=>{let $=H5(_);try{let j=[],Q=new $7((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return ZK(j)}catch(j){try{let Q=_7($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function qK(_){return new TextEncoder().encode(String(_||""))}function F5(_){return new TextDecoder().decode(H5(_))}function KK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function NK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function N7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function GK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function XK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function G7(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function z5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function V7(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function VK(_,$,j,Q){let Z=Q||J5,Y=H5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let N=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,X=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=V7(Y,G,q,Z.bigEndian),L=z5(U>>>Z.redShift&Z.redMax,Z.redMax),J=z5(U>>>Z.greenShift&Z.greenMax,Z.greenMax),D=z5(U>>>Z.blueShift&Z.blueMax,Z.blueMax);N[X]=L,N[X+1]=J,N[X+2]=D,N[X+3]=255,G+=q,X+=4}return N}function B4(_,$,j){let Q=j||J5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=V7(_,$,Z,Q.bigEndian);return{rgba:[z5(Y>>>Q.redShift&Q.redMax,Q.redMax),z5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),z5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function P4(_,$,j,Q,Z,Y,q){if(!q)return;for(let K=0;K<Y;K+=1)for(let N=0;N<Z;N+=1){let G=((Q+K)*$+(j+N))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function U7(_,$,j,Q,Z,Y,q){for(let K=0;K<Y;K+=1){let N=K*Z*4,G=((Q+K)*$+j)*4;_.set(q.subarray(N,N+Z*4),G)}}function X7(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function UK(_,$,j,Q,Z,Y,q){let K=Z||J5,N=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let X=_.slice($+4,$+4+G),V;try{V=q(X)}catch{return{consumed:4+G,skipped:!0}}let U=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let J=0;J<Q;J+=64){let D=Math.min(64,Q-J);for(let O=0;O<j;O+=64){let W=Math.min(64,j-O);if(V.byteLength<U+1)return null;let A=V[U++],E=A&127,f=(A&128)!==0;if(!f&&E===0){let u=W*D*N;if(V.byteLength<U+u)return null;let c=Y(V.slice(U,U+u),W,D,K);U+=u,U7(L,j,O,J,W,D,c);continue}if(!f&&E===1){let u=B4(V,U,K);if(!u)return null;U+=u.bytesPerPixel,P4(L,j,O,J,W,D,u.rgba);continue}if(!f&&E>1&&E<=16){let u=[];for(let I=0;I<E;I+=1){let z=B4(V,U,K);if(!z)return null;U+=z.bytesPerPixel,u.push(z.rgba)}let c=E<=2?1:E<=4?2:4,o=Math.ceil(W*c/8),P=o*D;if(V.byteLength<U+P)return null;for(let I=0;I<D;I+=1){let z=U+I*o;for(let C=0;C<W;C+=1){let b=C*c,e=z+(b>>3),p=8-c-(b&7),a=V[e]>>p&(1<<c)-1;P4(L,j,O+C,J+I,1,1,u[a])}}U+=P;continue}if(f&&E===0){let u=0,c=0;while(c<D){let o=B4(V,U,K);if(!o)return null;U+=o.bytesPerPixel;let P=X7(V,U);if(!P)return null;U+=P.consumed;for(let I=0;I<P.runLength;I+=1)if(P4(L,j,O+u,J+c,1,1,o.rgba),u+=1,u>=W){if(u=0,c+=1,c>=D)break}}continue}if(f&&E>0){let u=[];for(let P=0;P<E;P+=1){let I=B4(V,U,K);if(!I)return null;U+=I.bytesPerPixel,u.push(I.rgba)}let c=0,o=0;while(o<D){if(V.byteLength<U+1)return null;let P=V[U++],I=P,z=1;if(P&128){I=P&127;let b=X7(V,U);if(!b)return null;U+=b.consumed,z=b.runLength}let C=u[I];if(!C)return null;for(let b=0;b<z;b+=1)if(P4(L,j,O+c,J+o,1,1,C),c+=1,c>=W){if(c=0,o+=1,o>=D)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:L,decompressed:V}}function LK(_,$,j,Q,Z){let Y=Z||J5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let N=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+N*(q+8);if(_.byteLength<$+G)return null;let X=$+4,V=B4(_,X,Y);if(!V)return null;X+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);P4(U,j,0,0,j,Q,V.rgba);for(let L=0;L<N;L+=1){let J=B4(_,X,Y);if(!J)return null;if(X+=J.bytesPerPixel,_.byteLength<X+8)return null;let D=new DataView(_.buffer,_.byteOffset+X,8),O=D.getUint16(0,!1),W=D.getUint16(2,!1),A=D.getUint16(4,!1),E=D.getUint16(6,!1);X+=8,P4(U,j,O,W,A,E,J.rgba)}return{consumed:X-$,rgba:U}}function BK(_,$,j,Q,Z,Y){let q=Z||J5,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),G=$,X=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<Q;U+=16){let L=Math.min(16,Q-U);for(let J=0;J<j;J+=16){let D=Math.min(16,j-J);if(_.byteLength<G+1)return null;let O=_[G++];if(O&1){let W=D*L*K;if(_.byteLength<G+W)return null;let A=Y(_.slice(G,G+W),D,L,q);G+=W,U7(N,j,J,U,D,L,A);continue}if(O&2){let W=B4(_,G,q);if(!W)return null;X=W.rgba,G+=W.bytesPerPixel}if(P4(N,j,J,U,D,L,X),O&4){let W=B4(_,G,q);if(!W)return null;V=W.rgba,G+=W.bytesPerPixel}if(O&8){if(_.byteLength<G+1)return null;let W=_[G++];for(let A=0;A<W;A+=1){let E=V;if(O&16){let z=B4(_,G,q);if(!z)return null;E=z.rgba,G+=z.bytesPerPixel}if(_.byteLength<G+2)return null;let f=_[G++],u=_[G++],c=f>>4,o=f&15,P=(u>>4)+1,I=(u&15)+1;P4(N,j,J+c,U+o,P,I,E)}}}}return{consumed:G-$,rgba:N}}var J5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class R8{protocol=h_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:VK,this.pipeline=_.pipeline||null,this.encodings=jK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...J5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:YK()}receive(_){if(_)this.buffer=QK(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=F5(Z),q=KK(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=NK(q),j.push(qK(this.clientVersionText)),$.push({type:"protocol-version",protocol:h_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+N)break;this.consume(1);let G=F5(this.consume(4+N).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:h_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:h_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let N=F5(this.consume(4+K).slice(4));throw Error(N||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:h_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:h_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(K7(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let K=F5(this.consume(4+q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:h_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),K=N7(Z,4),N=Z.getUint32(20,!1);if(this.buffer.byteLength<24+N)break;let G=this.consume(24),X=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=X.getUint16(0,!1),this.framebufferHeight=X.getUint16(2,!1),this.serverPixelFormat=N7(X,4),this.serverName=F5(this.consume(N)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(GK(this.clientPixelFormat)),j.push(XK(this.encodings)),j.push(G7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:h_,width:Y,height:q,name:this.serverName,pixelFormat:K}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,N=[],G=!1,X=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<K+12){G=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),J=L.getUint16(0,!1),D=L.getUint16(2,!1),O=L.getUint16(4,!1),W=L.getUint16(6,!1),A=L.getInt32(8,!1);if(K+=12,A===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),f=O*W*E;if(this.buffer.byteLength<K+f){G=!0;break}let u=this.buffer.slice(K,K+f);if(K+=f,X)this.pipeline.processRawRect(u,J,D,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:D,width:O,height:W});else N.push({kind:"rgba",x:J,y:D,width:O,height:W,rgba:this.decodeRawRect(u,O,W,this.clientPixelFormat)});continue}if(A===2){let E=LK(this.buffer,K,O,W,this.clientPixelFormat);if(!E){G=!0;break}if(X){let f=this.buffer.slice(K,K+E.consumed);this.pipeline.processRreRect(f,J,D,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:D,width:O,height:W})}else N.push({kind:"rgba",x:J,y:D,width:O,height:W,rgba:E.rgba});K+=E.consumed;continue}if(A===1){if(this.buffer.byteLength<K+4){G=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),f=E.getUint16(0,!1),u=E.getUint16(2,!1);if(K+=4,X)this.pipeline.processCopyRect(J,D,O,W,f,u),N.push({kind:"pipeline",x:J,y:D,width:O,height:W});else N.push({kind:"copy",x:J,y:D,width:O,height:W,srcX:f,srcY:u});continue}if(A===16){let E=UK(this.buffer,K,O,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){G=!0;break}if(K+=E.consumed,E.skipped)continue;if(X&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,J,D,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:D,width:O,height:W});else N.push({kind:"rgba",x:J,y:D,width:O,height:W,rgba:E.rgba});continue}if(A===5){let E=BK(this.buffer,K,O,W,this.clientPixelFormat,this.decodeRawRect);if(!E){G=!0;break}if(X){let f=this.buffer.slice(K,K+E.consumed);this.pipeline.processHextileRect(f,J,D,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:D,width:O,height:W})}else N.push({kind:"rgba",x:J,y:D,width:O,height:W,rgba:E.rgba});K+=E.consumed;continue}if(A===-223){if(this.framebufferWidth=O,this.framebufferHeight=W,X)this.pipeline.initFramebuffer(O,W);N.push({kind:"resize",x:J,y:D,width:O,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${A}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(K);let V={type:"framebuffer-update",protocol:h_,width:this.framebufferWidth,height:this.framebufferHeight,rects:N};if(X)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(G7(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:h_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let K=F5(this.consume(q));$.push({type:"clipboard",protocol:h_,text:K}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var W4="piclaw://vnc";function WK(_){let $=String(_||"");if($===W4)return null;if(!$.startsWith(`${W4}/`))return null;let j=$.slice(`${W4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function r4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function FK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function zK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function HK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function JK(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function OK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class L7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=WK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=OK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${r4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${r4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${r4(Z.id)}" data-target-label="${r4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=JK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=c5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${r4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=c5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=c5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=p2($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return b2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(y8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=G$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~G$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of m2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(h2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=X$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??X$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new R8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await g2(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(K,N,G,X)=>Q.decodeRawRectToRgba(K,N,G,X);let Y=c5(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new R8(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new q$({url:HK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(K)=>{this.applyMetrics(K)},onMessage:(K)=>{this.handleSocketMessage(K)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await FK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${r4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await zK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var A$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===W4||$.startsWith(`${W4}/`)?9000:!1},mount(_,$){return new L7(_,$)}};function H_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Y1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function O5(_,$=!1){let j=H_(_);if(j===null)return $;return j==="true"}function r5(_,$=null){let j=H_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}var k$="piclaw_theme",f8="piclaw_tint",F7="piclaw_chat_themes",s5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},z7={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B7={default:{label:"Default",mode:"auto",light:s5,dark:z7},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},AK=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],o4={theme:"default",tint:null},H7="light",D$=!1;function v8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function D5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function DK(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),K=parseInt(Z[3],10);if(![Y,q,K].every((G)=>Number.isFinite(G)))return null;let N=`#${[Y,q,K].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:K,hex:N}}function J7(_){return D5(_)||DK(_)}function o5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function E$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function EK(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function kK(_){return EK(_)>0.4?"#000000":"#ffffff"}function O7(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function M$(_){return B7[_]||B7.default}function MK(_){return _.mode==="auto"?O7():_.mode}function A7(_,$){let j=M$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||s5}function D7(_,$,j){let Q=J7($);if(!Q)return _;let Z=D5(_.bgPrimary),Y=D5(_.bgSecondary),q=D5(_.bgHover),K=D5(_.borderColor);if(!Z||!Y||!q||!K)return _;let G=D5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:o5(Z,Q,0.08),bgSecondary:o5(Y,Q,0.12),bgHover:o5(q,Q,0.16),borderColor:o5(K,Q,0.08),accent:Q.hex,accentHover:G?o5(Q,G,0.18):Q.hex}}function IK(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=J7(Q),Y=Z?E$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?E$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=Z?E$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N=Z?kK(Z):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":K,"--accent-contrast-text":N,"--danger-color":_.danger||s5.danger,"--success-color":_.success||s5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([X,V])=>{if(V)j.style.setProperty(X,V)})}function xK(){if(typeof document>"u")return;let _=document.documentElement;AK.forEach(($)=>_.style.removeProperty($))}function A5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function W7(_){let $=v8(o4?.theme||"default"),j=o4?.tint?String(o4.tint).trim():null,Q=A7($,_);if($==="default"&&j)Q=D7(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?z7.bgPrimary:s5.bgPrimary}function TK(_,$){if(typeof document>"u")return;let j=A5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=A5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",W7("light"));let Z=A5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",W7("dark"));let Y=A5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=A5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let K=A5("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function CK(){if(typeof window>"u")return;let _={...o4,mode:H7};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function E7(){try{let _=H_(F7);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function PK(_,$,j){let Q=E7();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};Y1(F7,JSON.stringify(Q))}function yK(_){if(!_)return null;return E7()[_]||null}function k7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function I$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=v8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=M$(j),Y=MK(Z),q=A7(j,Y);o4={theme:j,tint:Q},H7=Y;let K=document.documentElement;K.dataset.theme=Y,K.dataset.colorTheme=j,K.dataset.tint=Q?String(Q):"",K.style.colorScheme=Y;let N=q;if(j==="default"&&Q)N=D7(q,Q,Y);if(j==="default"&&!Q)xK();else IK(N,Y);if(TK(N.bgPrimary,Y),CK(),$.persist!==!1)if(Y1(k$,j),Q)Y1(f8,Q);else Y1(f8,"")}function u8(){if(M$(o4.theme).mode!=="auto")return;I$(o4,{persist:!1})}function M7(){if(typeof window>"u")return()=>{};let _=k7(),$=yK(_),j=$?v8($.theme||"default"):v8(H_(k$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=H_(f8);return Z?Z.trim():null})();if(I$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!D$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",u8);else if(Z.addListener)Z.addListener(u8);return D$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",u8);else if(Z.removeListener)Z.removeListener(u8);D$=!1}}return()=>{}}function I7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||k7(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(PK($,j||"default",Q),I$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")Y1(k$,j||"default"),Y1(f8,Q||"")}function x7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return O7()}var g8=/#(\w+)/g,SK=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),wK=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),RK=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),uK={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},fK=new Set(["http:","https:","mailto:",""]);function x$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function s4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!fK.has(Q.protocol))return null;return Q.href}catch{return null}}function T7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let K=q.tagName.toLowerCase();if(!wK.has(K)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let N=uK[K]||new Set;for(let G of Array.from(q.attributes)){let X=G.name.toLowerCase(),V=G.value;if(X.startsWith("on")){q.removeAttribute(G.name);continue}if(X.startsWith("data-")||X.startsWith("aria-"))continue;if(N.has(X)||RK.has(X)){if(X==="href"){let U=s4(V);if(!U)q.removeAttribute(G.name);else if(q.setAttribute(G.name,U),K==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(X==="src"){let U=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,L=s4(U,{allowDataImage:K==="img"});if(!L)q.removeAttribute(G.name);else q.setAttribute(G.name,L)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function C7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function b8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=C7(j);if(Z===j)break;j=Z}return j}function vK(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let K of j){if(!Y&&K.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&K.trim().match(/^```\s*$/)){let N=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${N}@@`),Y=!1,q=[];continue}if(Y)q.push(K);else Z.push(K)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function gK(_){if(!_)return _;return b8(_,5)}function bK(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function mK(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function hK(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=gK(Y);return`<div class="mermaid-container" data-mermaid="${bK(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function P7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var pK={span:new Set(["title","class","lang","dir"])};function cK(_,$){let j=pK[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let K=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${x$(K)}"`)}return Q.join("")}function y7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,K=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[N=""]=K.split(/\s+/,1),G=N.toLowerCase();if(!G||!SK.has(G))return $;if(G==="br")return Z?"":"<br>";if(Z)return`</${G}>`;let X=K.slice(N.length).trim(),V=cK(G,X);return`<${G}${V}>`})}function S7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function w7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function lK(_){if(!window.katex)return _;let $=(q)=>C7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let K=[],N=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let X=K.length;return K.push(G),`@@CODE_BLOCK_${X}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let X=K.length;return K.push(G),`@@CODE_INLINE_${X}@@`}),{html:N,blocks:K}},Q=(q,K)=>{if(!K.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,G)=>{let X=Number(G);return K[X]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,K,N)=>{try{let G=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${K}${G}`}catch(G){return`<span class="math-error" title="${x$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,K,N)=>{if(/\s$/.test(N))return q;try{let G=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${K}${G}`}catch(G){return`${K}<span class="math-error" title="${x$(G.message)}">$${N}$</span>`}}),Q(Y,Z.blocks)}function nK(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(g8.lastIndex=0,!g8.test(q))continue;g8.lastIndex=0;let K=Y.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let N=q.split(g8);if(N.length<=1)continue;let G=$.createDocumentFragment();N.forEach((X,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",X),U.textContent=`#${X}`,G.appendChild(U)}else G.appendChild($.createTextNode(X))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function dK(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function iK(_){let $=dK(_||""),{text:j,blocks:Q}=vK($),Z=b8(j,2),q=P7(Z).replace(/</g,"&lt;");return{safeHtml:y7(q),mermaidBlocks:Q}}function J_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=iK(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=S7(Y),Y=w7(Y),Y=lK(Y),Y=nK(Y),Y=hK(Y,Z),Y=T7(Y,j),Y}function a5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=b8($,2),Z=P7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=y7(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=S7(q),q=w7(q),q=T7(q),q}function rK(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((N)=>{let[G,X]=N.split(",").map(Number);return{x:G,y:X}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let K=[`M ${q[0].x},${q[0].y}`];for(let N=1;N<q.length-1;N++){let G=q[N-1],X=q[N],V=q[N+1],U=X.x-G.x,L=X.y-G.y,J=V.x-X.x,D=V.y-X.y,O=Math.sqrt(U*U+L*L),W=Math.sqrt(J*J+D*D),A=Math.min($,O/2,W/2);if(A<0.5){K.push(`L ${X.x},${X.y}`);continue}let E=X.x-U/O*A,f=X.y-L/O*A,u=X.x+J/W*A,c=X.y+D/W*A,P=U*D-L*J>0?1:0;K.push(`L ${E},${f}`),K.push(`A ${A},${A} 0 0 ${P} ${u},${c}`)}return K.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${K.join(" ")}"${Y}/>`})}async function F4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=x7()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let K=q.dataset.mermaid,N=mK(K||""),G=b8(N,2),X=await $(G,{...Z,transparent:!0});X=rK(X),q.innerHTML=X,q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${K.message}`,q.innerHTML="",q.appendChild(N),q.removeAttribute("data-mermaid")}}function R7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let N=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${K}`}function t5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function w_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function a4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function y4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function oK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${K?`${K}/`:""}${Z}`,X=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(X.length>0)X.pop();continue}X.push(U)}let V=X.join("/");return`${E8(V)}${Y}${q}`}function e5(_){return _?.preview||null}function sK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function aK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function tK(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${y4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${y4(w_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${y4(a4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${y4(aK($))}</span>`),Q.push(`<span><strong>extension:</strong> ${y4(sK(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${y4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function eK(_){let $=e5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=tK(_,$);if($.kind==="image"){let Q=$.url||($.path?E8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${y4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=J_($.text||"",null,{rewriteImageSrc:(Z)=>oK(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${y4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class T${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=eK(this.context)}getContent(){let _=e5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=e5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var C$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=e5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new T$(_,$)}},P$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return e5(_)||_?.path?1:!1},mount(_,$){return new T$(_,$)}};var _N=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),$N={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},jN={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function f7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function u7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=f7(j),Y=jN[Z]||"\uD83D\uDCC4",q=$N[Z]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${u7(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${u7(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let N=K.querySelector("#ov-open-tab");if(N)N.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=f7(_?.path);if(!$||!_N.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new v7(_,$);return new g7(_,$)}};var QN=/\.(csv|tsv)$/i;function b7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${b7(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${b7(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var S$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!QN.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new m7(_,$);return new h7(_,$)}};var ZN=/\.pdf$/i;function YN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${YN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ZN.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new p7(_,$);return new c7(_,$)}};var qN=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function R$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class l7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${R$(Z)}" alt="${R$(Q)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${R$(Q)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!qN.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new l7(_,$);return new n7(_,$)}};var KN=/\.(mp4|m4v|mov|webm|ogv)$/i;function NN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class d7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${NN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!KN.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new d7(_,$);return new i7(_,$)}};function GN(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function XN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var v$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function r7(_){let $=String(_||"").trim();return $?$:v$}function VN(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function UN(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function LN(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,K,N,G,X,V){try{if(q&&N!=null&&j({filename:q,format:K,data:N,mimeType:G,base64Encoded:Boolean(X),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,K,N,G,X,V){try{if(K&&j({filename:K,data:q,mimeType:N,base64Encoded:Boolean(G),mode:X,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function o7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${UN(j)}`}class s7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${XN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class a7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=VN(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(LN(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=v$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await o7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await o7(_,"image/png");else this.xmlData=r7(await _.text());else if(_.status===404)this.xmlData=v$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?r7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var g$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!GN(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new s7(_,$);return new a7(_,$)}};var BN=/\.mindmap\.ya?ml$/i,b$=String(Date.now());function t7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function m$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function WN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function FN(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let Q=document.createElement("div");Q.id="context-menu",Q.className="context-menu hidden",Q.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Q)}class e7{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Q}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class _9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(t7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,WN("/static/css/mindmap.css"),await Promise.all([m$("/static/js/vendor/d3-mindmap.min.js?v="+b$),m$("/static/js/vendor/js-yaml.min.js?v="+b$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),FN(this.mindmapEl);let j=t7(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await m$("/static/js/vendor/mindmap-editor.js?v="+b$),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var h$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!BN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new e7(_,$);return new _9(_,$)}};var zN=/\.kanban\.md$/i,HN=String(Date.now());function $9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function JN(){let _=window;if(_.preact)return;_.preact={h:J8,render:T4,Component:G5,createContext:F2},_.preactHooks={useState:g,useEffect:v,useCallback:T,useRef:x,useMemo:u0,useReducer:T6,useContext:J2,useLayoutEffect:R5,useImperativeHandle:H2,useErrorBoundary:A2,useDebugValue:O2},_.htm={bind:()=>B}}function ON(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function AN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class j9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Q}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class Q9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.($9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,AN("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=$9();try{if(JN(),await ON("/static/js/vendor/kanban-editor.js?v="+HN),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var p$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!zN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new j9(_,$);return new Q9(_,$)}};class Z9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var a0=new Z9;function Y9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=x(_);Y.current=_;let q=x($);q.current=$;let K=x(j);K.current=j;let N=x(Q);N.current=Q,v(()=>{let G=new M8((V,U)=>Y.current(V,U),(V)=>q.current(V),{chatJid:Z});G.connect();let X=()=>{G.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")N.current?.()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),G.disconnect()}},[Z])}function q9(){let[_,$]=g(!1),[j,Q]=g("default"),Z=x(!1);v(()=>{let N=O5("notificationsEnabled",!1);if(Z.current=N,$(N),typeof Notification<"u")Q(Notification.permission)},[]),v(()=>{Z.current=_},[_]);let Y=T(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),q=T(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Q(G||"default"),G!=="granted"){Z.current=!1,$(!1),Y1("notificationsEnabled","false");return}}let N=!Z.current;Z.current=N,$(N),Y1("notificationsEnabled",String(N))},[Y]),K=T((N,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let X=new Notification(N,{body:G});return X.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:K}}var _8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function K9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=g(null),[Y,q]=g(!1),K=x(!1),N=x(null),G=x(!1),X=x(null),V=x(null),U=x(0);v(()=>{K.current=Y},[Y]),v(()=>{V.current=Q},[Q]),v(()=>{U.current+=1,X.current=null,G.current=!1,K.current=!1,q(!1)},[j]);let L=T(async(O=null)=>{let W=U.current;try{if(O){let A=await P6(O,50,0,j);if(W!==U.current)return;Z(A.posts),q(!1)}else{let A=await n4(10,null,j);if(W!==U.current)return;Z(A.posts),q(A.has_more)}}catch(A){if(W!==U.current)return;console.error("Failed to load posts:",A)}},[j]),J=T(async()=>{let O=U.current;try{let W=await n4(10,null,j);if(O!==U.current)return;Z((A)=>{if(!A||A.length===0)return W.posts;return _8([...W.posts,...A])}),q((A)=>A||W.has_more)}catch(W){if(O!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j]),D=T(async(O={})=>{let W=U.current,A=V.current;if(!A||A.length===0)return;if(G.current)return;let{preserveScroll:E=!0,preserveMode:f="top",allowRepeat:u=!1}=O,c=(I)=>{if(!E){I();return}if(f==="top")$(I);else _(I)},P=A.slice().sort((I,z)=>I.id-z.id)[0]?.id;if(!Number.isFinite(P))return;if(!u&&X.current===P)return;G.current=!0,X.current=P;try{let I=await n4(10,P,j);if(W!==U.current)return;if(I.posts.length>0)c(()=>{Z((z)=>_8([...I.posts,...z||[]])),q(I.has_more)});else q(!1)}catch(I){if(W!==U.current)return;console.error("Failed to load more posts:",I)}finally{if(W===U.current)G.current=!1}},[j,_,$]);return v(()=>{N.current=D},[D]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:K,loadPosts:L,refreshTimeline:J,loadMore:D,loadMoreRef:N,loadingMoreRef:G,lastBeforeIdRef:X}}function N9(){let[_,$]=g(null),[j,Q]=g({text:"",totalLines:0}),[Z,Y]=g(""),[q,K]=g({text:"",totalLines:0}),[N,G]=g(null),[X,V]=g(null),[U,L]=g(null),J=x(null),D=x(0),O=x(!1),W=x(""),A=x(""),E=x(null),f=x(null),u=x(null),c=x(null),o=x(!1),P=x(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:K,pendingRequest:N,setPendingRequest:G,currentTurnId:X,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:L,lastAgentEventRef:J,lastSilenceNoticeRef:D,isAgentRunningRef:O,draftBufferRef:W,thoughtBufferRef:A,pendingRequestRef:E,stalledPostIdRef:f,currentTurnIdRef:u,steerQueuedTurnIdRef:c,thoughtExpandedRef:o,draftExpandedRef:P}}function G9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,L=$.current||280,J=X.currentTarget;J.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=U,O=(A)=>{D=A.clientX;let E=Math.min(Math.max(L+(A.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let A=Math.min(Math.max(L+(D-U),160),600);$.current=A,J.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round(A))),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",W)}).current,Y=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientX,J=$.current||280,D=X.currentTarget;D.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let O=(A)=>{let E=A.touches[0];if(!E)return;A.preventDefault();let f=Math.min(Math.max(J+(E.clientX-L),160),600);V.style.setProperty("--sidebar-width",`${f}px`),$.current=f},W=()=>{D.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round($.current||J))),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,q=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,L=j.current||$.current||280,J=X.currentTarget;J.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=U,O=(A)=>{D=A.clientX;let E=Math.min(Math.max(L+(A.clientX-U),200),800);V.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let A=Math.min(Math.max(L+(D-U),200),800);j.current=A,J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("editorWidth",String(Math.round(A))),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",W)}).current,K=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientX,J=j.current||$.current||280,D=X.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let O=(A)=>{let E=A.touches[0];if(!E)return;A.preventDefault();let f=Math.min(Math.max(J+(E.clientX-L),200),800);V.style.setProperty("--editor-width",`${f}px`),j.current=f},W=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",Y1("editorWidth",String(Math.round(j.current||J))),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,N=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientY,L=Q?.current||200,J=X.currentTarget;J.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=U,O=(A)=>{D=A.clientY;let E=Math.min(Math.max(L-(A.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${E}px`),Q)Q.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let A=Math.min(Math.max(L-(D-U),100),window.innerHeight*0.5);if(Q)Q.current=A;J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("dockHeight",String(Math.round(A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",W)}).current,G=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientY,J=Q?.current||200,D=X.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let O=(A)=>{let E=A.touches[0];if(!E)return;A.preventDefault();let f=Math.min(Math.max(J-(E.clientY-L),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${f}px`),Q)Q.current=f;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",Y1("dockHeight",String(Math.round(Q?.current||J))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:G}}function DN(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,K]of _.entries()){let N=q;if(Q==="dir"){if(q===$)N=j,Z=!0;else if(q.startsWith(`${$}/`))N=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)N=j,Z=!0;Y.set(N,K)}return Z?Y:_}function X9({onTabClosed:_}={}){let $=x(_);$.current=_;let[j,Q]=g(()=>a0.getTabs()),[Z,Y]=g(()=>a0.getActiveId()),[q,K]=g(()=>a0.getTabs().length>0);v(()=>{return a0.onChange((P,I)=>{Q(P),Y(I),K(P.length>0)})},[]);let[N,G]=g(()=>new Set),[X,V]=g(()=>new Map),U=T((P)=>{G((I)=>{let z=new Set(I);if(z.has(P))z.delete(P);else z.add(P);return z})},[]),L=T((P)=>{G((I)=>{if(!I.has(P))return I;let z=new Set(I);return z.delete(P),z})},[]),J=T((P)=>{V((I)=>{if(!I.has(P))return I;let z=new Map(I);return z.delete(P),z})},[]),D=T((P,I={})=>{if(!P)return;let z=typeof I?.paneOverrideId==="string"&&I.paneOverrideId.trim()?I.paneOverrideId.trim():null,C={path:P,mode:"edit"};try{if(!(z?l0.get(z):l0.resolve(C))){if(!l0.get("editor")){console.warn(`[openEditor] No pane handler for: ${P}`);return}}}catch(e){console.warn(`[openEditor] paneRegistry.resolve() error for "${P}":`,e)}let b=typeof I?.label==="string"&&I.label.trim()?I.label.trim():void 0;if(a0.open(P,b),z)V((e)=>{if(e.get(P)===z)return e;let p=new Map(e);return p.set(P,z),p})},[]),O=T(()=>{let P=a0.getActiveId();if(P){let I=a0.get(P);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}a0.close(P),L(P),J(P),$.current?.(P)}},[J,L]),W=T((P)=>{let I=a0.get(P);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}a0.close(P),L(P),J(P),$.current?.(P)},[J,L]),A=T((P)=>{a0.activate(P)},[]),E=T((P)=>{let I=a0.getTabs().filter((b)=>b.id!==P&&!b.pinned),z=I.filter((b)=>b.dirty).length;if(z>0){if(!window.confirm(`${z} unsaved tab${z>1?"s":""} will be closed. Continue?`))return}let C=I.map((b)=>b.id);a0.closeOthers(P),C.forEach((b)=>{L(b),J(b),$.current?.(b)})},[J,L]),f=T(()=>{let P=a0.getTabs().filter((C)=>!C.pinned),I=P.filter((C)=>C.dirty).length;if(I>0){if(!window.confirm(`${I} unsaved tab${I>1?"s":""} will be closed. Continue?`))return}let z=P.map((C)=>C.id);a0.closeAll(),z.forEach((C)=>{L(C),J(C),$.current?.(C)})},[J,L]),u=T((P)=>{a0.togglePin(P)},[]),c=T((P)=>{if(!P)return;V((I)=>{if(I.get(P)==="editor")return I;let z=new Map(I);return z.set(P,"editor"),z}),a0.activate(P)},[]),o=T(()=>{let P=a0.getActiveId();if(P)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:P}}))},[]);return v(()=>{let P=(I)=>{let{oldPath:z,newPath:C,type:b}=I.detail||{};if(!z||!C)return;if(b==="dir"){for(let e of a0.getTabs())if(e.path===z||e.path.startsWith(`${z}/`)){let p=`${C}${e.path.slice(z.length)}`;a0.rename(e.id,p)}}else a0.rename(z,C);V((e)=>DN(e,z,C,b))};return window.addEventListener("workspace-file-renamed",P),()=>window.removeEventListener("workspace-file-renamed",P)},[]),v(()=>{let P=(I)=>{if(a0.hasUnsaved())I.preventDefault(),I.returnValue=""};return window.addEventListener("beforeunload",P),()=>window.removeEventListener("beforeunload",P)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:N,tabPaneOverrides:X,openEditor:D,closeEditor:O,handleTabClose:W,handleTabActivate:A,handleTabCloseOthers:E,handleTabCloseAll:f,handleTabTogglePin:u,handleTabTogglePreview:U,handleTabEditSource:c,revealInExplorer:o}}function c$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var l$=c$("warning",30000),V9=c$("finalize",120000),n$=c$("refresh",30000),U9=30000;function L9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function B9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function W9(_=30000){let[,$]=g(0);v(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function F9(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}async function z9(_){let{panelKey:$,expanded:j,currentTurnIdRef:Q,thoughtExpandedRef:Z,draftExpandedRef:Y,setAgentThoughtVisibility:q,getAgentThought:K,thoughtBufferRef:N,draftBufferRef:G,setAgentThought:X,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let U=Q.current;if($==="thought"){if(Z.current=j,U)try{await q(U,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=U?await K(U,"thought"):null;if(L?.text)N.current=L.text;X((J)=>({...J||{text:"",totalLines:0},fullText:N.current||J?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:J?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(Y.current=j,U)try{await q(U,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=U?await K(U,"draft"):null;if(L?.text)G.current=L.text;V((J)=>({...J||{text:"",totalLines:0},fullText:G.current||J?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:J?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function H9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function J9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function O9(_){return String(_||"").trim()||"web:default"}function A9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function D9(_){if(!_)return!1;return _.status!=="running"}function E9(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function d$(_){return String(_||"").trim()||"web:default"}function k9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function EN(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function S4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function m8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return S4(_)?"Compacting context":"Working..."}function kN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function h8(_,$=Date.now()){let j=EN(_);if(j===null)return null;return kN(Math.max(0,$-j))}function $8(_){return typeof _==="string"}function M9(_){return typeof _==="string"&&_.trim().length>0}function i$(_){if(!Array.isArray(_))return[];return _.filter(($)=>M9($?.chat_jid)&&M9($?.agent_name))}function I9(_){if(!Array.isArray(_))return[];return _.filter(($)=>$8($?.chat_jid)&&$8($?.agent_name))}function x9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if($8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!$8(q?.chat_jid))return q;let K=Q.get(q.chat_jid);return K?{...q,...K,is_active:K.is_active??q.is_active}:q}),Y=$8(j)?j:"";return Z.sort((q,K)=>{if(q.chat_jid===Y&&K.chat_jid!==Y)return-1;if(K.chat_jid===Y&&q.chat_jid!==Y)return 1;let N=Boolean(q.archived_at),G=Boolean(K.archived_at);if(N!==G)return N?1:-1;if(Boolean(q.is_active)!==Boolean(K.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(K.chat_jid))}),Z}var MN={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function T9(_){if(!_||typeof _!=="object")return MN;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function C9(_){let j=(Array.isArray(_)?_:[]).find((Q)=>Q?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function P9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Q=String(j),Z=_.agent_name,Y=_.agent_avatar;if(!Z&&Y===void 0)return null;let q=$||{id:Q},K=q.name||null,N=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,X=!1;if(Z&&Z!==q.name)K=Z,G=!0;if(Y!==void 0){let V=typeof Y==="string"?Y.trim():null,U=typeof N==="string"?N.trim():null,L=V||null;if(L!==(U||null))N=L,X=!0}if(!G&&!X)return null;return{agentId:Q,nameChanged:G,avatarChanged:X,resolvedName:K,resolvedAvatar:N}}function y9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Q=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Q&&_.avatar_background===Z)return _;return{name:j,avatar_url:Q,avatar_background:Z}}function S9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Q=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Q===void 0&&Z===void 0)return _;let Y=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Q===void 0?_.avatar_url:typeof Q==="string"&&Q.trim()?Q.trim():null,K=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===Y&&_.avatar_url===q&&_.avatar_background===K)return _;return{name:Y,avatar_url:q,avatar_background:K}}function IN(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function w9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!IN(Z));return Q.length===_.length?_:Q}function R9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function u9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function w4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function f9(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function v9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function g9(_){let{getAgents:$,setAgents:j,setUserProfile:Q,applyBranding:Z}=_;try{let Y=await $();j(L9(Y));let q=Y?.user||{};Q((N)=>y9(N,q));let K=C9(Y?.agents);Z(K.name,K.avatarUrl)}catch(Y){console.warn("Failed to load agents:",Y)}}function b9(_){let{payload:$,agentsRef:j,setAgents:Q,applyBranding:Z}=_,Y=P9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!Y)return;if(Q((q)=>{let N={...q[Y.agentId]||{id:Y.agentId}};if(Y.nameChanged)N.name=Y.resolvedName;if(Y.avatarChanged)N.avatar_url=Y.resolvedAvatar;return{...q,[Y.agentId]:N}}),Y.agentId==="default")Z(Y.resolvedName,Y.resolvedAvatar,Y.avatarChanged?Date.now():null)}function m9(_){let{payload:$,setUserProfile:j}=_;j((Q)=>S9(Q,$))}function h9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Q,setSupportsThinking:Z,setActiveModelUsage:Y}=_,q=T9($);if(q.hasModel)j(q.model);if(q.hasThinkingLevel)Q(q.thinkingLevel);if(q.hasSupportsThinking)Z(q.supportsThinking);if(q.hasProviderUsage)Y(q.providerUsage)}function p9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Q,applyModelState:Z}=_,Y=$;j(Y).then((q)=>{if(Q.current!==Y)return;if(q)Z(q)}).catch(()=>{})}function c9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Q,activeChatJidRef:Z,setActiveChatAgents:Y}=_,q=$;Promise.all([j().catch(()=>({chats:[]})),Q(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([K,N])=>{if(Z.current!==q)return;let G=i$(K?.chats),X=i$(N?.chats);Y(x9(G,X,q))}).catch(()=>{if(Z.current!==q)return;Y([])})}function l9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Q}=_;j($).then((Z)=>{Q(I9(Z?.chats))}).catch(()=>{})}function n9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshContextUsage:Z,refreshAutoresearchStatus:Y,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Q(),Z(),Y(),v9($))q()}function d9(_={}){return V4(_)&&T8(_)}function xN(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function TN(_={},$={}){if(!d9(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=xN({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function i9(_={}){if(!d9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,TN({window:$,document:j})},K=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},N=()=>{K();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Z.delete(U),K()},V);if(U!=null)Z.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;N()},X=$.visualViewport;return N(),$.addEventListener("focus",N),$.addEventListener("pageshow",N),$.addEventListener("resize",N),$.addEventListener("orientationchange",N),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",N,!0),X?.addEventListener?.("resize",N),X?.addEventListener?.("scroll",N),()=>{Y(),$.removeEventListener("focus",N),$.removeEventListener("pageshow",N),$.removeEventListener("resize",N),$.removeEventListener("orientationchange",N),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",N,!0),X?.removeEventListener?.("resize",N),X?.removeEventListener?.("scroll",N)}}function CN(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function __(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:CN($,j)}var PN=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function r9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(V4({window:j,navigator:Q}))};Z();let q=PN.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",Z),()=>K.removeEventListener("change",Z);if(typeof K.addListener==="function")return K.addListener(Z),()=>K.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let K of q)K();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function o9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function s9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(N)=>{let G=N?.detail?.path,X=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Q?.(G,X)},q=(N)=>{let G=N?.detail?.path,X=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Z?.(G,X)},K=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return K.forEach((N)=>j.addEventListener(N,Y)),j.addEventListener("pane:popout",q),()=>{K.forEach((N)=>j.removeEventListener(N,Y)),j.removeEventListener("pane:popout",q)}}function a9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function t9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(K)=>{if(K?.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault?.(),Q?.();return}if(K?.key==="Escape"&&Y())K.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function e9(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function _j(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function $j(_,$,j){return _||$?.label||j||"Pane"}function jj(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function Qj(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function Zj(_,$,j,Q){return _===$&&!j||Q}function Yj(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}function p8(_){let $=r$(_);return $?`@${$}`:""}function r$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function c8(_,$=""){let j=String(_||""),Q=r$(j),Z=r$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function qj(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?p8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function yN(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function l8(_,$={}){let j=p8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=yN(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function Kj(_,$,j){let Q=p8(_),Z=p8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}var SN="piclaw_btw_session",Gj=900,Nj="__piclawRenameBranchFormLock__";function wN(){try{return import.meta.url}catch{return null}}function o$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function n8(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function Xj(_={}){let $=_.importMetaUrl===void 0?wN():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((N)=>String(N?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let K=new URL(Y,Q).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function s$(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[Nj];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[Nj]=Q,Q}function Vj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Uj(_={}){let $=typeof _.readItem==="function"?_.readItem:H_,j=_.storageKey||SN,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",K=typeof Z.thinking==="string"?Z.thinking:"",N=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,G=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:K,error:G==="error"?N||"BTW stream interrupted. You can retry.":N,model:null,status:G}}catch{return null}}function Lj(_,$={}){let j=$.defaultChatJid||"web:default",Q=n8(_,"chat_jid",j),Z=o$(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=o$(_?.get?.("pane_popout")),q=n8(_,"pane_path"),K=n8(_,"pane_label"),N=o$(_?.get?.("branch_loader")),G=n8(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:K,branchLoaderMode:N,branchLoaderSourceChatJid:G}}function Bj(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Q,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:Y,isAgentRunningRef:q,pendingRequestRef:K,showIntentToast:N}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Q.current===G)return!0;Q.current=G;let X=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!Y()&&!X&&!q.current&&!K.current&&!Z.current)return Z.current=!0,N("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Z.current=!1}},350),!0;return N("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function a$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Q}=_||{};return!$&&!j&&!Q}function Wj(_){let{status:$,setConnectionStatus:j,setAgentStatus:Q,setAgentDraft:Z,setAgentPlan:Y,setAgentThought:q,setPendingRequest:K,pendingRequestRef:N,clearAgentRunState:G,hasConnectedOnceRef:X,viewStateRef:V,refreshTimeline:U,refreshAgentStatus:L,refreshQueueState:J,refreshContextUsage:D}=_;if(j($),$!=="connected"){Q(null),Z({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),N.current=null,G();return}if(!X.current){if(X.current=!0,a$(V.current))U();L(),J(),D();return}if(a$(V.current))U();L(),J(),D()}function Fj(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Q,refreshQueueState:Z,refreshAgentStatus:Y,refreshContextUsage:q,refreshAutoresearchStatus:K}=_,N=a$($.current);if(j){if(N)Q();Z(),Y(),q(),K();return}if(N)Q();Y(),q(),K()}function zj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:K,now:N=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Q||N<Number(Z||0)||G.inFlight||N<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),K?.(!0),!0}function Hj(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function Jj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:N,renameChatBranch:G,refreshActiveChatAgents:X,refreshCurrentChatBranches:V,showIntentToast:U,closeRenameForm:L,now:J=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let D=J(),O=K?.()||null;if(!O)return!1;if(Y.current||D<Number(q.current||0)||O.inFlight||D<Number(O.cooldownUntil||0))return!1;Y.current=!0,O.inFlight=!0,N?.(!0);try{let W=j.agent_name||"",A=c8(Q,W);if(!A.canSubmit)return U?.("Could not rename branch",A.message||"Enter a valid branch handle.","warning",4000),!1;let E=A.normalized||W,f=await G(j.chat_jid,{agentName:E});await Promise.allSettled([X?.(),V?.()]);let u=f?.branch?.agent_name||E||W;return U?.("Branch renamed",`@${u}`,"info",3500),L?.(),!0}catch(W){let A=W instanceof Error?W.message:String(W||"Could not rename branch."),E=/already in use/i.test(A||"")?`${A} Switch to or restore that existing session from the session manager.`:A;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,N?.(!1);let W=J()+Gj;q.current=W;let A=K?.()||null;if(A)A.inFlight=!1,A.cooldownUntil=W}}async function Oj(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:K,refreshActiveChatAgents:N,refreshCurrentChatBranches:G,showIntentToast:X,baseHref:V,chatOnlyMode:U,navigate:L,confirm:J=(c)=>window.confirm(c)}=_;if(!$)return!1;let D=typeof j==="string"&&j.trim()?j.trim():"",O=typeof Q==="string"&&Q.trim()?Q.trim():"",W=D||Z?.chat_jid||O;if(!W)return X?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let A=(Z?.chat_jid===W?Z:null)||Y.find((c)=>c?.chat_jid===W)||q.find((c)=>c?.chat_jid===W)||null;if(A?.chat_jid===(A?.root_chat_jid||A?.chat_jid))return X?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let f=`@${A?.agent_name||W}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!J(`Prune ${f}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await K(W),await Promise.allSettled([N?.(),G?.()]);let c=A?.root_chat_jid||"web:default";X?.("Branch pruned",`${f} has been archived.`,"info",3000);let o=U4(V,c,{chatOnly:U});return L?.(o),!0}catch(c){let o=c instanceof Error?c.message:String(c||"Could not prune branch.");return X?.("Could not prune branch",o||"Could not prune branch.","warning",5000),!1}}async function Aj(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:K,chatOnlyMode:N,navigate:G}=_,X=typeof $==="string"?$.trim():"";if(!X||typeof j!=="function")return!1;try{let V=Q.find((W)=>W?.chat_jid===X)||null,U=await j(X);await Promise.allSettled([Z?.(),Y?.()]);let L=U?.branch,J=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():X,D=Kj(V?.agent_name,L?.agent_name,J);q?.("Branch restored",D,"info",4200);let O=U4(K,J,{chatOnly:N});return G?.(O),!0}catch(V){let U=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function Dj(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let K=await j($);if(q())return!1;let N=K?.branch,G=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let X=U4(Y,G,{chatOnly:!0});return Z?.(X,{replace:!0}),!0}catch(K){if(q())return!1;return Q?.({status:"error",message:m5(K)}),!1}}async function Ej(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:K,baseHref:N}=_;try{let X=(await Q($))?.branch,V=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let U=X?.agent_name?`@${X.agent_name}`:V;q?.("New branch created",`Switched to ${U}.`,"info",2500);let L=U4(N,V,{chatOnly:j});return K?.(L),!0}catch(G){return q?.("Could not create branch",m5(G),"warning",5000),!1}}async function kj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:K,currentChatJid:N,baseHref:G}=_;if(!$||j)return!1;let X=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!X)return!1;let V=S2(X);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=j$(V);if(!U)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;Q$(U,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let L=await q?.(X),J=y2(G,X,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:N,params:L});return Z$(U,J),K?.(X),!0}catch(L){Y$(U);let J=L instanceof Error?L.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",J,"warning",5000),!1}}async function Mj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:K,setActiveChatAgents:N,setCurrentChatBranches:G,showIntentToast:X,baseHref:V}=_;if(!$||j)return!1;let U=C2(Q);if(!U)return X?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let J=P2(V,Q,{chatOnly:!0});if(!window.open(J,U.target))return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=j$(U);if(!L)return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;Q$(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let D=(await Y(Q))?.branch,O=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");try{let A=await q?.();N?.(Array.isArray(A?.chats)?A.chats:[])}catch{}try{let A=await K?.(Z);G?.(Array.isArray(A?.chats)?A.chats:[])}catch{}let W=U4(V,O,{chatOnly:!0});return Z$(L,W),!0}catch(J){return Y$(L),X?.("Could not open branch window",m5(J),"error",5000),!1}}function d8(_){return _?{..._}:{text:"",totalLines:0}}function Ij(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function RN(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function uN(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function xj(_){return{agentStatus:_.agentStatus,agentDraft:d8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:d8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:Ij(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:RN(_.silentRecovery)}}function Tj(_){let $=_.snapshot||uN(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(d8($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(d8($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(Ij($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function t$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function Cj(_,$){let j=new Map(_),Q=t$($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function Pj(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=t$($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function yj(_){if(_?.options?.remove)return!0;return t$(_)?.state!=="running"}function e$(_,$){return`${_}:${$}`}function Sj(_,$,j){let Q=e$($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function wj(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function i8(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function Rj(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function fN(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function vN(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function R4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function S0(_){return typeof _==="string"&&_.trim()?_.trim():null}function fj(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var vj="__PICLAW_WIDGET_HOST__:";function uj(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function _3(_,$){if(!_||_.type!=="generated_widget")return null;let j=fN(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:fj(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function gj(_){if(!_||typeof _!=="object")return null;let $=vN(_),j=S0(_?.widget_id)||S0(_?.widgetId)||S0(_?.tool_call_id)||S0(_?.toolCallId),Q=S0(_?.tool_call_id)||S0(_?.toolCallId),Z=S0(_?.turn_id)||S0(_?.turnId),Y=S0(_?.title)||S0(_?.name)||"Generated widget",q=S0(_?.subtitle)||"",K=S0(_?.description)||q,N=S0(_?.status),G=N==="loading"||N==="streaming"||N==="final"||N==="error"?N:"streaming";return{title:Y,subtitle:q,description:K,originPostId:R4(_?.origin_post_id)??R4(_?.originPostId),originChatJid:S0(_?.origin_chat_jid)||S0(_?.originChatJid)||S0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:fj(_?.capabilities,!0),source:"live",status:G,turnId:Z,toolCallId:Q,width:R4(_?.width),height:R4(_?.height),error:S0(_?.error)}}function bj(_){return _3(_,null)!==null}function O_(_){let $=S0(_?.toolCallId)||S0(_?.tool_call_id);if($)return $;let j=S0(_?.widgetId)||S0(_?.widget_id);if(j)return j;let Q=R4(_?.originPostId)??R4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function mj(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function hj(_){return mj(_)?"allow-downloads allow-scripts":"allow-downloads"}function r8(_){return{title:S0(_?.title)||"Generated widget",widgetId:S0(_?.widgetId)||S0(_?.widget_id),toolCallId:S0(_?.toolCallId)||S0(_?.tool_call_id),turnId:S0(_?.turnId)||S0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:S0(_?.status)||"final"}}function o8(_){return{...r8(_),subtitle:S0(_?.subtitle)||"",description:S0(_?.description)||"",error:S0(_?.error)||null,width:R4(_?.width),height:R4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function s8(_){return`${vj}${JSON.stringify(o8(_))}`}function pj(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=S0(_.text)||S0(_.content)||S0(_.message)||S0(_.prompt)||S0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=S0(j.text)||S0(j.content)||S0(j.message)||S0(j.prompt)||S0(j.value);if(Q)return Q}return null}function cj(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function lj(_){let $=S0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return S0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function gN(_){let $=r8(_);return`<script>
(function () {
  const meta = ${uj($)};
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
    } catch {
      /* expected: parent bridge may be unavailable while the iframe is unloading. */
    }
  }

  const windowNamePrefix = ${uj(vj)};
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
    } catch {
      /* expected: host window.name payload can be absent or mid-update while polling. */
    }
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
</script>`}function nj(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let K=mj(_),N=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,X=K?gN(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${N}" />
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
${X}
</head>
<body>${G}</body>
</html>`}function bN(_,$){let j=O_(_);return Boolean(_&&j===$)}function E5(_,$,j){if(!bN(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function dj(_,$){return{..._,openedAt:$}}function ij(_){let $=O_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function rj(_,$,j){let Q=gj({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=O_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=O_(_),q=Boolean(Z&&Y&&Z===Y),K={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:K,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function oj(_,$){if(!_||_?.source!=="live")return _||null;let j=O_($),Q=O_(_);if(j&&Q&&j!==Q)return _;return null}function sj(_,$,j){return E5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function $3(_,$,j){if(j.errorMessage)return E5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return E5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function aj(_,$,j){return E5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function tj(_,$,j){return E5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function ej(_,$,j){return E5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function k5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Q=w4(_,j);return{rowId:j,items:Q.items,remainingQueueCount:Q.remainingQueueCount}}function j3(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function u4(_){return _.status==="fulfilled"?_.value:null}function a8(_){return Math.max(0,Math.min(100,_))}function _Q(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Q=$.filter((O)=>O?.data?.is_bot_message).length,Z=$.filter((O)=>!O?.data?.is_bot_message).length,Y=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,K=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,N=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,X=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,J=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),D=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:K},agent:{status:J,phase:D,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:U,supportsThinking:Boolean(L)},context:{tokens:G,contextWindow:X,percent:N},queue:{count:Y},timeline:{loadedPosts:$.length,botPosts:Q,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:a8(Math.round(N))},{key:"queue",label:"Queue",value:a8(Y*18)},{key:"activeChats",label:"Active chats",value:a8(q*12)},{key:"posts",label:"Timeline load",value:a8($.length*5)}]}}function $Q(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function jQ(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function QQ(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function ZQ(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function YQ(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function qQ(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function KQ(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Q,getAgentStatus:Z,getAgentContext:Y,getAgentQueueState:q,getAgentModels:K,getActiveChatAgents:N,getChatBranches:G,getTimeline:X,rawPosts:V,activeChatAgents:U,currentChatBranches:L,contextUsage:J,followupQueueItems:D,activeModel:O,activeThinkingLevel:W,supportsThinking:A,isAgentTurnActive:E}=_,[f,u,c,o,P,I,z]=await Promise.allSettled([Z(j),Y(j),q(j),K(j),N(),G(Q),X(20,null,j)]);return _Q({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Q,statusPayload:u4(f),contextPayload:u4(u),queuePayload:u4(c),modelsPayload:u4(o),activeChatsPayload:u4(P),branchesPayload:u4(I),timelinePayload:u4(z),rawPosts:V,activeChatAgents:U,currentChatBranches:L,contextUsage:J,followupQueueItems:D,activeModel:O,activeThinkingLevel:W,supportsThinking:A,isAgentTurnActive:E})}function NQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:K,steerAgentQueueItem:N}=_,G=k5(j.current,$);if(!G)return;let{rowId:X}=G;Q.current.add(X),q((V)=>w4(V,X).items),N(X,d$(Z)).then(()=>{Y()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let U=j3("steer");K(U.title,U.detail,"warning"),Q.current.delete(X),Y()})}function GQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:K,clearQueuedSteerStateIfStale:N,removeAgentQueueItem:G}=_,X=k5(j.current,$);if(!X)return;let{rowId:V}=X;Q.current.add(V),N?.(X.remainingQueueCount),q((U)=>w4(U,V).items),G(V,d$(Z)).then(()=>{Y()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let L=j3("remove");K(L.title,L.detail,"warning"),Q.current.delete(V),Y()})}function XQ(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Q}=_;if(!$||typeof $!=="object")return;let Z=O_($);if(Z)j.current.delete(Z);Q(dj($,new Date().toISOString()))}function VQ(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Q)=>{let Z=ij(Q);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function UQ(_){let{event:$,widget:j,currentChatJid:Q,isComposeBoxAgentActive:Z,setFloatingWidget:Y,handleCloseFloatingWidget:q,handleMessageResponse:K,showIntentToast:N,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:X}=_,V=typeof $?.kind==="string"?$.kind:"",U=O_(j);if(!V||!U)return;if(V==="widget.close"){q();return}if(V==="widget.submit"){let L=pj($?.payload),J=cj($?.payload),D=new Date().toISOString();if(Y((O)=>sj(O,U,{kind:V,payload:$?.payload||null,submittedAt:D,submissionText:L})),!L){if(N("Widget submission received","The widget submitted data without a message payload yet.","info",3500),J)q();return}(async()=>{try{let O=await G("default",L,null,[],Z?"queue":null,Q);K(O),Y((A)=>$3(A,U,{submittedAt:D,submissionText:L,queued:O?.queued||null}));let W=$Q(O?.queued);if(N(W.title,W.detail,W.kind,W.durationMs),J)q()}catch(O){Y((A)=>$3(A,U,{submittedAt:D,submissionText:L,errorMessage:O?.message||"Could not send the widget message."}));let W=jQ(O?.message);N(W.title,W.detail,W.kind,W.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let L=new Date().toISOString(),J=QQ($?.payload||null,j?.runtimeState?.refreshCount);if(Y((D)=>aj(D,U,{kind:V,payload:$?.payload||null,eventAt:L,nextRefreshCount:J.nextRefreshCount,shouldBuildDashboard:J.shouldBuildDashboard})),V==="widget.request_refresh")if(J.shouldBuildDashboard)(async()=>{try{let D=await X($?.payload||null);Y((W)=>tj(W,U,{dashboard:D,at:new Date().toISOString(),count:J.nextRefreshCount,echo:$?.payload||null}));let O=ZQ();N(O.title,O.detail,O.kind,O.durationMs)}catch(D){Y((W)=>ej(W,U,{errorMessage:D?.message||"Could not build dashboard.",at:new Date().toISOString(),count:J.nextRefreshCount}));let O=YQ(D?.message);N(O.title,O.detail,O.kind,O.durationMs)}})();else{let D=qQ();N(D.title,D.detail,D.kind,D.durationMs)}}}var mN=400,Q3=60,LQ=220,Z3="mdPreviewHeight";function hN(){try{let _=localStorage.getItem(Z3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=Q3?$:LQ}catch{return LQ}}function t8({getContent:_,path:$,onClose:j}){let[Q,Z]=g(""),[Y,q]=g(hN),K=x(null),N=x(null),G=x(""),X=x(_);return X.current=_,v(()=>{let L=()=>{let D=X.current?.()||"";if(D===G.current)return;G.current=D;try{let O=J_(D,null,{sanitize:!1});Z(O)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let J=setInterval(L,mN);return()=>clearInterval(J)},[]),v(()=>{if(K.current&&Q)F4(K.current).catch(()=>{})},[Q]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let J=L.clientY,D=N.current?.offsetHeight||Y,O=N.current?.parentElement,W=O?O.offsetHeight*0.7:500,A=L.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(u)=>{let c=Math.min(Math.max(D-(u.clientY-J),Q3),W);q(c)},f=()=>{A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(Z3,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",f)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",f)}}
            onTouchStart=${(L)=>{L.preventDefault();let J=L.touches[0];if(!J)return;let D=J.clientY,O=N.current?.offsetHeight||Y,W=N.current?.parentElement,A=W?W.offsetHeight*0.7:500,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let f=(c)=>{let o=c.touches[0];if(!o)return;c.preventDefault();let P=Math.min(Math.max(O-(o.clientY-D),Q3),A);q(P)},u=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(Z3,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",f),document.removeEventListener("touchend",u),document.removeEventListener("touchcancel",u)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}}
        ></div>
        <div class="md-preview-panel" ref=${N} style=${{height:Y+"px"}}>
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
                dangerouslySetInnerHTML=${{__html:Q}}
            />
        </div>
    `}function BQ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function pN(_){return _==="error"?"Could not open branch window":"Opening branch…"}function WQ(_){return B`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${pN(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function FQ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Q,panePopoutHasMenuActions:Z,panePopoutTitle:Y,tabStripTabs:q,tabStripActiveId:K,handleTabActivate:N,previewTabs:G,handleTabTogglePreview:X,editorContainerRef:V,getPaneContent:U,panePopoutPath:L}=_;return B`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${j&&!Q&&B`
          <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
            ${Z?B`
                <details class="pane-popout-controls-menu">
                  <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                    <span class="pane-popout-controls-title">${Y}</span>
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="4.5 6.5 8 10 11.5 6.5" />
                    </svg>
                  </summary>
                  <div class="pane-popout-controls-panel">
                    ${q.length>1&&B`
                      <div class="pane-popout-controls-section">
                        <div class="pane-popout-controls-section-title">Open panes</div>
                        <div class="pane-popout-controls-list">
                          ${q.map((J)=>B`
                            <button
                              type="button"
                              class=${`pane-popout-controls-item${J.id===K?" active":""}`}
                              onClick=${(D)=>{N(J.id),D.currentTarget.closest("details")?.removeAttribute("open")}}
                            >
                              ${J.label}
                            </button>
                          `)}
                        </div>
                      </div>
                    `}
                    ${K&&G.has(K)&&B`
                      <button
                        type="button"
                        class="pane-popout-controls-action"
                        onClick=${(J)=>{X(K),J.currentTarget.closest("details")?.removeAttribute("open")}}
                      >
                        Hide preview
                      </button>
                    `}
                  </div>
                </details>
              `:B`
                <div class="pane-popout-controls-label" aria-label=${Y}>${Y}</div>
              `}
          </div>
        `}
        ${j?B`<div class="editor-pane-host" ref=${V}></div>`:B`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${L||"No pane path provided."}</p>
            </div>
          `}
        ${j&&K&&G.has(K)&&B`
          <${t8}
            getContent=${U}
            path=${K}
            onClose=${()=>X(K)}
          />
        `}
      </div>
    </div>
  `}function e8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function cN(_,$){let j=e8(_),Q=e8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function Y3(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function q3(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function lN(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function nN(_,$,j=0,Q=(Z)=>Z){let Z=e8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=lN(Y.length,j),K=Y.map((N)=>e8(Q(N)));for(let N of q)if(K[N].startsWith(Z))return N;for(let N of q)if(K[N].includes(Z))return N;return-1}function K3(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(cN(Y,$))return j}return nN(Z,$,0,Q)}function _6(_){return String(_||"").trim().toLowerCase()}function N3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return _6($[1]||"")}function dN(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=_6(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function zQ(_,$,j={}){let Q=N3($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return dN(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return _6(Y?.agent_name).startsWith(Q)})}function G3(_){let $=_6(_);return $?`@${$} `:""}function HQ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function p_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let K=`${_}-file-pill`,N=`${_}-file-name`,G=`${_}-file-remove`,X=q==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${K} title=${j||$} onClick=${Z}>
      ${X}
      <span class=${N}>${$}</span>
      ${Q&&B`
        <button
          class=${G}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Q()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var iN=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function rN({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",K=`${Q!=null?`Context: ${JQ(Q)} / ${JQ(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,N=9,G=2*Math.PI*9,X=j/100*G,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${K}
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
                    stroke-dasharray=${`${X} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function JQ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function oN(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function sN(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Z.push(X[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function aN(_){let $=oN(_||""),j=sN($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function X3({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return B`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=aN(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return B`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&B`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&B`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((K)=>B`
                                        <${p_}
                                            key=${"queue-msg-"+K}
                                            prefix="compose"
                                            label=${"msg:"+K}
                                            title=${"Message reference: "+K}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((K)=>{let N=K.split("/").pop()||K;return B`
                                            <${p_}
                                                key=${"queue-file-"+K}
                                                prefix="compose"
                                                label=${N}
                                                title=${K}
                                                onClick=${()=>Q?.(K)}
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
                                onClick=${()=>$?.(Z)}
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
                                onClick=${()=>j?.(Z)}
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
    `}function OQ({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:K,fileRefs:N=[],onRemoveFileRef:G,onClearFileRefs:X,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:L,activeModel:J=null,modelUsage:D=null,thinkingLevel:O=null,supportsThinking:W=!1,contextUsage:A=null,onContextCompact:E,notificationsEnabled:f=!1,notificationPermission:u="default",onToggleNotifications:c,onModelChange:o,onModelStateChange:P,activeEditorPath:I=null,onAttachEditorFile:z,onOpenFilePill:C,followupQueueItems:b=[],onInjectQueuedFollowup:e,onRemoveQueuedFollowup:p,onSubmitIntercept:a,onMessageResponse:t,onPopOutChat:_0,isAgentActive:q0=!1,activeChatAgents:Z0=[],currentChatJid:N0="web:default",connectionStatus:F0="connected",onSetFileRefs:B0,onSetMessageRefs:g0,onSubmitError:M0,onSwitchChat:D0,onRenameSession:h0,isRenameSessionInProgress:v0=!1,onCreateSession:c0,onDeleteSession:d0,onRestoreSession:E0,showQueueStack:i0=!0,statusNotice:z0=null}){let[x0,o0]=g(""),[t0,R1]=g(""),[q1,n0]=g([]),[B1,Q1]=g(!1),[e0,L0]=g([]),[f0,j1]=g(0),[r,Y0]=g(!1),[m,i]=g([]),[H0,k0]=g(0),[I0,J0]=g(!1),[C0,b0]=g(!1),[W0,w0]=g(!1),[O0,j0]=g(!1),[y,s]=g([]),[K0,A0]=g(0),[m0,_1]=g(0),[N1,k1]=g(!1),[u1,R_]=g(0),[$_,g1]=g(null),[o1,c1]=g(()=>Date.now()),$1=x(null),s1=x(null),e_=x(null),j_=x(null),_4=x(null),c_=x(null),M1=x(null),a1=x(null),I1=x({value:"",updatedAt:0}),W1=x(0),F1=x(!1),L_=200,B_=(F)=>{let w=new Set,n=[];for(let h of F||[]){if(typeof h!=="string")continue;let T0=h.trim();if(!T0||w.has(T0))continue;w.add(T0),n.push(T0)}return n},T1=()=>{let F=H_("piclaw_compose_history");if(!F)return[];try{let w=JSON.parse(F);if(!Array.isArray(w))return[];return B_(w)}catch{return[]}},t1=(F)=>{Y1("piclaw_compose_history",JSON.stringify(F))},K1=x(T1()),C1=x(-1),Q_=x(""),b1=x0.trim()||q1.length>0||N.length>0||V.length>0,$4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),A_=typeof window<"u"&&typeof Notification<"u",j4=typeof window<"u"?Boolean(window.isSecureContext):!1,z4=A_&&j4&&u!=="denied",E_=u==="granted"&&f,u_=S4(z0),f4=m8(z0),v4=typeof z0?.detail==="string"&&z0.detail.trim()?z0.detail.trim():"",Z1=u_?h8(z0,o1):null,x1=E_?"Disable notifications":"Enable notifications",H4=q1.length>0||N.length>0||V.length>0,Z_=F0==="disconnected"?"Reconnecting":String(F0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),k_=F0==="disconnected"?"Reconnecting":`Connection: ${Z_}`,l1=(Array.isArray(Z0)?Z0:[]).filter((F)=>!F?.archived_at),A1=(()=>{for(let F of Array.isArray(Z0)?Z0:[]){let w=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(w&&w===N0)return F}return null})(),f1=Boolean(A1&&A1.chat_jid===(A1.root_chat_jid||A1.chat_jid)),G1=u0(()=>{let F=new Set,w=[];for(let n of Array.isArray(Z0)?Z0:[]){let h=typeof n?.chat_jid==="string"?n.chat_jid.trim():"";if(!h||h===N0||F.has(h))continue;if(!(typeof n?.agent_name==="string"?n.agent_name.trim():""))continue;F.add(h),w.push(n)}return w},[Z0,N0]),Y_=G1.length>0,q_=Y_&&typeof D0==="function",K_=Y_&&typeof E0==="function",l_=Boolean(v0||F1.current),m1=!j&&typeof h0==="function"&&!l_,v1=!j&&typeof c0==="function",N_=!j&&typeof d0==="function"&&!f1,f_=!j&&(q_||K_||m1||v1||N_),z1=J||"",M_=W&&O?` (${O})`:"",X1=M_.trim()?`${O}`:"",v_=typeof D?.hint_short==="string"?D.hint_short.trim():"",I_=[X1||null,v_||null].filter(Boolean).join(" • "),g4=[z1?`Current model: ${z1}${M_}`:null,D?.plan?`Plan: ${D.plan}`:null,v_||null,D?.primary?.reset_description||null,D?.secondary?.reset_description||null].filter(Boolean),b4=C0?"Switching model…":g4.join(" • ")||`Current model: ${z1}${M_} (tap to open model picker)`,g_=(F)=>{if(!F||typeof F!=="object")return;let w=F.model??F.current;if(typeof P==="function")P({model:w??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(w&&typeof o==="function")o(w)},b_=(F)=>{let w=F||$1.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},m4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){Y0(!1),L0([]);return}let w=F.toLowerCase().split(" ")[0];if(w.length<1){Y0(!1),L0([]);return}let n=iN.filter((h)=>h.name.startsWith(w)||h.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===w))J0(!1),i([]),L0(n),j1(0),Y0(!0);else Y0(!1),L0([])},Q4=(F)=>{let w=x0,n=w.indexOf(" "),h=n>=0?w.slice(n):"",T0=F.name+h;o0(T0),Y0(!1),L0([]),requestAnimationFrame(()=>{let H1=$1.current;if(!H1)return;let P1=T0.length;H1.selectionStart=P1,H1.selectionEnd=P1,H1.focus()})},e4=(F)=>{if(N3(F)==null){J0(!1),i([]);return}let w=zQ(l1,F,{currentChatJid:N0});if(w.length>0&&!(w.length===1&&G3(w[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))Y0(!1),L0([]),i(w),k0(0),J0(!0);else J0(!1),i([])},Z4=(F)=>{let w=G3(F?.agent_name);if(!w)return;o0(w),J0(!1),i([]),requestAnimationFrame(()=>{let n=$1.current;if(!n)return;let h=w.length;n.selectionStart=h,n.selectionEnd=h,n.focus()})},n_=()=>{if(j||!q_&&!K_&&!m1&&!v1&&!N_)return!1;return I1.current={value:"",updatedAt:0},w0(!1),Y0(!1),L0([]),J0(!1),i([]),j0(!0),!0},n1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!q_&&!K_&&!m1&&!v1&&!N_)return;if(O0){I1.current={value:"",updatedAt:0},j0(!1);return}n_()},J4=(F)=>{let w=typeof F==="string"?F.trim():"";if(j0(!1),!w||w===N0){requestAnimationFrame(()=>$1.current?.focus());return}D0?.(w)},O4=async(F)=>{let w=typeof F==="string"?F.trim():"";if(j0(!1),!w||typeof E0!=="function"){requestAnimationFrame(()=>$1.current?.focus());return}try{await E0(w)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>$1.current?.focus())}},T5=(F)=>{let n=(Array.isArray(F)?F:[]).findIndex((h)=>!h?.disabled);return n>=0?n:0},D1=u0(()=>{let F=[];for(let w of G1){let n=Boolean(w?.archived_at),h=typeof w?.agent_name==="string"?w.agent_name.trim():"",T0=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(!h||!T0)continue;F.push({type:"session",key:`session:${T0}`,label:`@${h} — ${T0}${w?.is_active?" active":""}${n?" archived":""}`,chat:w,disabled:n?!K_:!q_})}if(v1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(m1)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:l_});if(N_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[G1,K_,q_,v1,m1,N_,l_]),A4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof h0!=="function"||v0||F1.current)return;F1.current=!0,j0(!1);try{await h0()}catch(w){console.warn("Failed to rename session:",w)}finally{F1.current=!1}requestAnimationFrame(()=>$1.current?.focus())},_5=async()=>{if(typeof c0!=="function")return;j0(!1);try{await c0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>$1.current?.focus())},G_=async()=>{if(typeof d0!=="function")return;j0(!1);try{await d0(N0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>$1.current?.focus())},X_=(F)=>{if(j)R1(F);else o0(F),m4(F),e4(F);requestAnimationFrame(()=>b_())},Y4=(F)=>{let w=j?t0:x0,n=w&&!w.endsWith(`
`)?`
`:"",h=`${w}${n}${F}`.trimStart();X_(h)},h4=(F)=>{let w=F?.command?.model_label;if(w)return w;let n=F?.command?.message;if(typeof n==="string"){let h=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(h?.[1])return h[1].trim()}return null},p4=async(F)=>{if(j||C0)return;b0(!0);try{let w=await d4("default",F,null,[],null,N0),n=h4(w);g_({model:n??J??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let h=await f5(N0);if(h)g_(h)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{b0(!1)}},$5=async()=>{await p4("/cycle-model")},q4=async(F)=>{if(!F||C0)return;if(await p4(`/model ${F}`))w0(!1)},x_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let w=F.chat;if(w?.archived_at)O4(w.chat_jid);else J4(w.chat_jid);return}if(F.type==="action"){if(F.action==="new"){_5();return}if(F.action==="rename"){A4();return}if(F.action==="delete")G_()}},W_=(F)=>{F.preventDefault(),F.stopPropagation(),I1.current={value:"",updatedAt:0},j0(!1),w0((w)=>!w)},D4=async()=>{if(j)return;E?.(),await T_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},c4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return q0?"queue":void 0},T_=async(F,w,n={})=>{let{includeMedia:h=!0,includeFileRefs:T0=!0,includeMessageRefs:H1=!0,clearAfterSubmit:P1=!0,recordHistory:S1=!0}=n||{},K4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:x0,l4=typeof K4==="string"?K4:"";if(!l4.trim()&&(h?q1.length===0:!0)&&(T0?N.length===0:!0)&&(H1?V.length===0:!0))return;Y0(!1),L0([]),J0(!1),i([]),j0(!1),g1(null);let j5=h?[...q1]:[],Q5=T0?[...N]:[],N4=H1?[...V]:[],p1=l4.trim();if(S1&&p1){let E4=K1.current,J1=B_(E4.filter((d_)=>d_!==p1));if(J1.push(p1),J1.length>200)J1.splice(0,J1.length-200);K1.current=J1,t1(J1),C1.current=-1,Q_.current=""}let Z5=()=>{if(h)n0([...j5]);if(T0)B0?.(Q5);if(H1)g0?.(N4);o0(p1),requestAnimationFrame(()=>b_())};if(P1)o0(""),n0([]),X?.(),L?.();(async()=>{try{if(await a?.({content:p1,submitMode:w,fileRefs:Q5,messageRefs:N4,mediaFiles:j5})){_?.();return}let J1=[];for(let C_ of j5){let M4=await v6(C_);J1.push(M4.id)}let d_=Q5.length?`Files:
${Q5.map((C_)=>`- ${C_}`).join(`
`)}`:"",Y5=N4.length?`Referenced messages:
${N4.map((C_)=>`- message:${C_}`).join(`
`)}`:"",Y8=J1.length?`Attachments:
${J1.map((C_,M4)=>{let G6=j5[M4]?.name||`attachment-${M4+1}`;return`- attachment:${C_} (${G6})`}).join(`
`)}`:"",q5=[p1,d_,Y5,Y8].filter(Boolean).join(`

`),k4=await d4("default",q5,null,J1,c4(w),N0);if(t?.(k4),k4?.command){g_({model:k4.command.model_label??J??null,thinking_level:k4.command.thinking_level,supports_thinking:k4.command.supports_thinking});try{let C_=await f5(N0);if(C_)g_(C_)}catch{}}_?.()}catch(E4){if(P1)Z5();let J1=E4?.message||"Failed to send message.";g1(J1),M0?.(J1),console.error("Failed to post:",E4)}})()},H=(F)=>{e?.(F)},k=T((F)=>{if(j||!W0&&!O0||F?.isComposing)return!1;let w=()=>{F.preventDefault?.(),F.stopPropagation?.()},n=()=>{I1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(w(),n(),W0)w0(!1);if(O0)j0(!1);return!0}if(W0){if(F.key==="ArrowDown"){if(w(),n(),y.length>0)A0((h)=>(h+1)%y.length);return!0}if(F.key==="ArrowUp"){if(w(),n(),y.length>0)A0((h)=>(h-1+y.length)%y.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&y.length>0)return w(),n(),q4(y[Math.max(0,Math.min(K0,y.length-1))]),!0;if(Y3(F)&&y.length>0){w();let h=q3(I1.current,F.key);I1.current=h;let T0=K3(y,h.value,K0,(H1)=>H1);if(T0>=0)A0(T0);return!0}}if(O0){if(F.key==="ArrowDown"){if(w(),n(),D1.length>0)_1((h)=>(h+1)%D1.length);return!0}if(F.key==="ArrowUp"){if(w(),n(),D1.length>0)_1((h)=>(h-1+D1.length)%D1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&D1.length>0)return w(),n(),x_(D1[Math.max(0,Math.min(m0,D1.length-1))]),!0;if(Y3(F)&&D1.length>0){w();let h=q3(I1.current,F.key);I1.current=h;let T0=K3(D1,h.value,m0,(H1)=>H1.label);if(T0>=0)_1(T0);return!0}}return!1},[j,W0,O0,y,K0,D1,m0,q4]),R=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),R1(""),K?.();return}if(k(F))return;let w=$1.current?.value??(j?t0:x0);if(HQ(F,w,{searchMode:j,showSessionSwitcherButton:f_})){F.preventDefault(),n_();return}if(I0&&m.length>0){let n=$1.current?.value??(j?t0:x0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))J0(!1),i([]);else{if(F.key==="ArrowDown"){F.preventDefault(),k0((h)=>(h+1)%m.length);return}if(F.key==="ArrowUp"){F.preventDefault(),k0((h)=>(h-1+m.length)%m.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),Z4(m[H0]);return}if(F.key==="Escape"){F.preventDefault(),J0(!1),i([]);return}}}if(r&&e0.length>0){let n=$1.current?.value??(j?t0:x0);if(!String(n||"").startsWith("/"))Y0(!1),L0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),j1((h)=>(h+1)%e0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),j1((h)=>(h-1+e0.length)%e0.length);return}if(F.key==="Tab"){F.preventDefault(),Q4(e0[f0]);return}if(F.key==="Enter"&&!F.shiftKey){if(!w.includes(" ")){F.preventDefault();let T0=e0[f0];Y0(!1),L0([]),T_(T0.name);return}}if(F.key==="Escape"){F.preventDefault(),Y0(!1),L0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let n=$1.current;if(!n)return;let h=n.value||"",T0=n.selectionStart===0&&n.selectionEnd===0,H1=n.selectionStart===h.length&&n.selectionEnd===h.length;if(F.key==="ArrowUp"&&T0||F.key==="ArrowDown"&&H1){let P1=K1.current;if(!P1.length)return;F.preventDefault();let S1=C1.current;if(F.key==="ArrowUp"){if(S1===-1)Q_.current=h,S1=P1.length-1;else if(S1>0)S1-=1;C1.current=S1,X_(P1[S1]||"")}else{if(S1===-1)return;if(S1<P1.length-1)S1+=1,C1.current=S1,X_(P1[S1]||"");else C1.current=-1,X_(Q_.current||""),Q_.current=""}requestAnimationFrame(()=>{let K4=$1.current;if(!K4)return;let l4=K4.value.length;K4.selectionStart=l4,K4.selectionEnd=l4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(w.trim())Z?.(w.trim(),Q)}else T_(w,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(w.trim())Z?.(w.trim(),Q)}else T_(w)},S=(F)=>{let w=Array.from(F||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!w.length)return;n0((n)=>[...n,...w]),g1(null)},d=(F)=>{S(F.target.files),F.target.value=""},Q0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),W1.current+=1,Q1(!0)},G0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),W1.current=Math.max(0,W1.current-1),W1.current===0)Q1(!1)},V0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";Q1(!0)},$0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),W1.current=0,Q1(!1),S(F.dataTransfer?.files||[])},P0=(F)=>{if(j)return;let w=F.clipboardData?.items;if(!w||!w.length)return;let n=[];for(let h of w){if(h.kind!=="file")continue;let T0=h.getAsFile?.();if(T0)n.push(T0)}if(n.length>0)F.preventDefault(),S(n)},y1=(F)=>{n0((w)=>w.filter((n,h)=>h!==F))},e1=()=>{g1(null),n0([]),X?.(),L?.()},h1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:w,longitude:n,accuracy:h}=F.coords,T0=`${w.toFixed(5)}, ${n.toFixed(5)}`,H1=Number.isFinite(h)?` ±${Math.round(h)}m`:"",P1=`https://maps.google.com/?q=${w},${n}`,S1=`Location: ${T0}${H1} ${P1}`;Y4(S1)},(F)=>{let w=F?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!W0)return;I1.current={value:"",updatedAt:0},k1(!0),f5(N0).then((F)=>{let w=Array.isArray(F?.models)?F.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];w.sort((n,h)=>n.localeCompare(h,void 0,{sensitivity:"base"})),s(w),g_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),s([])}).finally(()=>{k1(!1)})},[W0,J]),v(()=>{if(j)w0(!1),j0(!1),Y0(!1),L0([]),J0(!1),i([])},[j]),v(()=>{if(O0&&!f_)j0(!1)},[O0,f_]),v(()=>{if(!W0)return;let F=y.findIndex((w)=>w===J);A0(F>=0?F:0)},[W0,y,J]),v(()=>{if(!O0)return;_1(T5(D1)),I1.current={value:"",updatedAt:0}},[O0,N0]),v(()=>{if(!W0)return;let F=(w)=>{let n=j_.current,h=_4.current,T0=w.target;if(n&&n.contains(T0))return;if(h&&h.contains(T0))return;w0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[W0]),v(()=>{if(!O0)return;let F=(w)=>{let n=c_.current,h=M1.current,T0=w.target;if(n&&n.contains(T0))return;if(h&&h.contains(T0))return;j0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),v(()=>{if(j||!W0&&!O0)return;let F=(w)=>{k(w)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,W0,O0,k]),v(()=>{if(!W0)return;let F=j_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[W0,K0,y]),v(()=>{if(!O0)return;let F=c_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,m0,D1.length]),v(()=>{let F=()=>{let H1=a1.current?.clientWidth||0;R_((P1)=>P1===H1?P1:H1)};F();let w=a1.current,n=0,h=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,F()})},T0=null;if(w&&typeof ResizeObserver<"u")T0=new ResizeObserver(()=>h()),T0.observe(w);if(typeof window<"u")window.addEventListener("resize",h);return()=>{if(n)cancelAnimationFrame(n);if(T0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",h)}},[j,J,A1?.agent_name,f_,A?.percent]);let C5=(F)=>{let w=F.target.value;if(g1(null),O0)j0(!1);b_(F.target),X_(w)};return v(()=>{requestAnimationFrame(()=>b_())},[x0,t0,j]),v(()=>{if(!u_)return;c1(Date.now());let F=setInterval(()=>c1(Date.now()),1000);return()=>clearInterval(F)},[u_,z0?.started_at,z0?.startedAt]),v(()=>{if(j)return;e4(x0)},[l1,N0,x0,j]),B`
        <div class="compose-box">
            ${i0&&!j&&B`
                <${X3}
                    items=${b}
                    onInjectQueuedFollowup=${H}
                    onRemoveQueuedFollowup=${p}
                    onOpenFilePill=${C}
                />
            `}
            ${z0&&B`
                <div
                    class=${`compose-inline-status${u_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${v4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${f4}</span>
                        ${Z1&&B`<span class="compose-inline-status-elapsed">${Z1}</span>`}
                    </div>
                    ${v4&&B`<div class="compose-inline-status-detail">${v4}</div>`}
                </div>
            `}
            ${$_&&B`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${$_}</div>
            `}
            <div
                class=${`compose-input-wrapper${B1?" drag-active":""}`}
                onDragEnter=${Q0}
                onDragOver=${V0}
                onDragLeave=${G0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${H4&&B`
                        <div class="compose-file-refs">
                            ${V.map((F)=>{return B`
                                    <${p_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(F)}
                                    />
                                `})}
                            ${N.map((F)=>{let w=F.split("/").pop()||F;return B`
                                    <${p_}
                                        prefix="compose"
                                        label=${w}
                                        title=${F}
                                        onClick=${()=>C?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(F)}
                                    />
                                `})}
                            ${q1.map((F,w)=>{let n=F?.name||`attachment-${w+1}`;return B`
                                    <${p_}
                                        key=${n+w}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>y1(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${e1}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof _0==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>_0?.()}
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
                        ref=${$1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?t0:x0}
                        onInput=${C5}
                        onKeyDown=${R}
                        onPaste=${P0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${I0&&m.length>0&&B`
                        <div class="slash-autocomplete" ref=${e_}>
                            ${m.map((F,w)=>B`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${w===H0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),Z4(F)}}
                                    onMouseEnter=${()=>k0(w)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${r&&e0.length>0&&B`
                        <div class="slash-autocomplete" ref=${s1}>
                            ${e0.map((F,w)=>B`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${w===f0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),Q4(F)}}
                                    onMouseEnter=${()=>j1(w)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${W0&&!j&&B`
                        <div class="compose-model-popup" ref=${j_} tabIndex="-1" onKeyDown=${k}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${N1&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!N1&&y.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!N1&&y.map((F,w)=>B`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${K0===w?" active":""}${J===F?" current-model":""}`}
                                        onClick=${()=>{q4(F)}}
                                        disabled=${C0}
                                    >
                                        ${F}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{$5()}}
                                    disabled=${C0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${O0&&!j&&B`
                        <div class="compose-model-popup" ref=${c_} tabIndex="-1" onKeyDown=${k}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return qj(A1,N0)})()}
                                    </div>
                                `}
                                ${!Y_&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${Y_&&G1.map((F,w)=>{let n=Boolean(F.archived_at),T0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!n&&typeof d0==="function",H1=l8(F,{currentChatJid:N0});return B`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${m0===w?" active":""}`}
                                                onClick=${()=>{if(n){O4(F.chat_jid);return}J4(F.chat_jid)}}
                                                disabled=${n?!K_:!q_}
                                                title=${n?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${H1}
                                            </button>
                                            ${T0&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(P1)=>{P1.stopPropagation(),j0(!1),d0(F.chat_jid)}}
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
                            ${(v1||m1||N_)&&B`
                                <div class="compose-model-popup-actions">
                                    ${v1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${D1.findIndex((F)=>F.key==="action:new")===m0?" active":""}`}
                                            onClick=${()=>{_5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${m1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${D1.findIndex((F)=>F.key==="action:rename")===m0?" active":""}`}
                                            onClick=${(F)=>{A4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${l_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${N_&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${D1.findIndex((F)=>F.key==="action:delete")===m0?" active":""}`}
                                            onClick=${()=>{G_()}}
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
                <div class="compose-footer" ref=${a1}>
                    ${!j&&J&&B`
                    <div class="compose-meta-row">
                        ${!j&&J&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${_4}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${b4}
                                    aria-label="Open model picker"
                                    onClick=${W_}
                                    disabled=${C0}
                                >
                                    ${C0?"Switching…":z1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!C0&&I_&&B`
                                        <span class="compose-model-usage-hint" title=${b4}>
                                            ${I_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&A&&A.percent!=null&&B`
                            <${rN} usage=${A} onCompact=${D4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${f_&&B`
                        ${A1?.agent_name&&B`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${A1.chat_jid||N0}
                                aria-label=${`Manage sessions for @${A1.agent_name}`}
                                onClick=${n1}
                            >@${A1.agent_name}</button>
                        `}
                        <button
                            ref=${M1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${O0?" active":""}`}
                            onClick=${n1}
                            title=${O0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${O0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Q}
                                onChange=${(F)=>Y?.(F.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?K:q}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${$4&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${h1}
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
                    ${z4&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${E_?" active":""}`}
                            onClick=${c}
                            title=${x1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${I&&z&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${z}
                                title=${`Attach open file: ${I}`}
                                type="button"
                                disabled=${N.includes(I)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${d} />
                        </label>
                    `}
                    ${(F0!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${F0!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${F0}" title=${k_}>
                                    ${Z_}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{T_()}}
                                    disabled=${!b1}
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
    `}function AQ({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=x(null),Y=x(null),q=_?.thinking?a5(_.thinking):"",K=_?.answer?J_(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(Z.current&&q)F4(Z.current).catch(()=>{})},[q]),v(()=>{if(Y.current&&K)F4(Y.current).catch(()=>{})},[K]),!_)return null;let N=_.status==="running",G=Boolean(String(_.answer||"").trim()),X=Boolean(String(_.thinking||"").trim()),V=A9(_),U=D9(_),L=!N&&G,J=N?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${J}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&B`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&B`<div class="btw-block btw-error">${_.error}</div>`}
            ${X&&B`
                <details class="btw-block btw-thinking" open=${N?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${V&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </div>
            `}

            ${U&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Q?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!L}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function DQ({widget:_,onClose:$,onWidgetEvent:j}){let Q=x(null),Z=x(!1),Y=u0(()=>nj(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(v(()=>{if(!_)return;let W=(A)=>{if(A.key==="Escape")$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[_,$]),v(()=>{Z.current=!1},[Y]),v(()=>{if(!_)return;let W=Q.current;if(!W)return;let A=(o)=>{let P=s8(_),I=o==="widget.init"?r8(_):o8(_);try{W.name=P}catch{}try{W.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:o,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I},"*")}catch{}},E=()=>{A("widget.init"),A("widget.update")},f=()=>{Z.current=!0,E()};W.addEventListener("load",f);let c=[0,40,120,300,800].map((o)=>setTimeout(E,o));return()=>{W.removeEventListener("load",f),c.forEach((o)=>clearTimeout(o))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),v(()=>{if(!_)return;let W=Q.current;if(!W?.contentWindow)return;let A=s8(_),E=o8(_);try{W.name=A}catch{}try{W.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),v(()=>{if(!_)return;let W=(A)=>{let E=A?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let f=Q.current,u=O_(_),c=O_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(c&&u&&c!==u)return;if(!c&&f?.contentWindow&&A.source!==f.contentWindow)return;j?.(E,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",N=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=X==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",J=!Y,D=lj(_),O=hj(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${N}
                onClick=${(W)=>W.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${N}</div>
                        ${(G||L)&&B`
                            <div class="floating-widget-subtitle">${G||L}</div>
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
                    ${J?B`<div class="floating-widget-empty">${D}</div>`:B`
                            <iframe
                                ref=${Q}
                                class="floating-widget-frame"
                                title=${N}
                                name=${s8(_)}
                                sandbox=${O}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var EQ="PiClaw";function V3(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,K=Y[q],N=Q.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",X=G?G:null,V=j||N==="PiClaw".toLowerCase()||N==="pi";return{letter:Z,color:K,image:X||(V?"/static/icon-192.png":null)}}function kQ(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function MQ(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function IQ(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",K=Y?.dataset?.tint||"",N=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(N&&(K||q&&q!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var tN=B`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function U3({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:N,turnId:G,steerQueued:X,onPanelToggle:V,showCorePanels:U=!0,showExtensionPanels:L=!0}){let O=(r)=>{if(!r)return{text:"",totalLines:0,fullText:""};if(typeof r==="string"){let H0=r,k0=H0?H0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:H0,totalLines:k0,fullText:H0}}let Y0=r.text||"",m=r.fullText||r.full_text||Y0,i=Number.isFinite(r.totalLines)?r.totalLines:m?m.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Y0,totalLines:i,fullText:m}},W=160,A=(r)=>String(r||"").replace(/<\/?internal>/gi,""),E=(r)=>{if(!r)return 1;return Math.max(1,Math.ceil(r.length/160))},f=(r,Y0,m)=>{let i=(r||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!i)return{text:"",omitted:0,totalLines:Number.isFinite(m)?m:0,visibleLines:0};let H0=i.split(`
`),k0=H0.length>Y0?H0.slice(0,Y0).join(`
`):i,I0=Number.isFinite(m)?m:H0.reduce((b0,W0)=>b0+E(W0),0),J0=k0?k0.split(`
`).reduce((b0,W0)=>b0+E(W0),0):0,C0=Math.max(I0-J0,0);return{text:k0,omitted:C0,totalLines:I0,visibleLines:J0}},u=O(j),c=O(Q),o=O($),P=Boolean(u.text)||u.totalLines>0,I=Boolean(c.text)||c.totalLines>0,z=Boolean(o.fullText?.trim()||o.text?.trim()),C=Boolean(_||z||P||I||Z||Y),b=Array.isArray(q)&&q.length>0;if((!U||!C)&&(!L||!b))return null;let[e,p]=g(new Set),[a,t]=g(null),[_0,q0]=g(()=>Date.now()),Z0=(r)=>p((Y0)=>{let m=new Set(Y0),i=!m.has(r);if(i)m.add(r);else m.delete(r);if(typeof V==="function")V(r,i);return m});v(()=>{p(new Set),t(null)},[G]);let N0=S4(_);v(()=>{if(!N0)return;q0(Date.now());let r=setInterval(()=>q0(Date.now()),1000);return()=>clearInterval(r)},[N0,_?.started_at,_?.startedAt]);let F0=_?.turn_id||G,B0=IQ(F0),g0=X?"turn-dot turn-dot-queued":"turn-dot",M0=(r)=>r,D0=Boolean(_?.last_activity||_?.lastActivity),h0=(r)=>r==="warning"?"#f59e0b":r==="error"?"var(--danger-color)":r==="success"?"var(--success-color)":B0,v0=Y?.kind||"info",c0=h0(v0),d0=h0(_?.kind||(N0?"warning":"info")),E0="",i0=_?.title,z0=_?.status;if(_?.type==="plan")E0=i0?`Planning: ${i0}`:"Planning...";else if(_?.type==="tool_call")E0=i0?`Running: ${i0}`:"Running tool...";else if(_?.type==="tool_status")E0=i0?`${i0}: ${z0||"Working..."}`:z0||"Working...";else if(_?.type==="error")E0=i0||"Agent error";else E0=i0||z0||"Working...";if(D0)E0="Last activity just now";let x0=({panelTitle:r,text:Y0,fullText:m,totalLines:i,maxLines:H0,titleClass:k0,panelKey:I0})=>{let J0=e.has(I0),C0=m||Y0||"",b0=I0==="thought"||I0==="draft"?A(C0):C0,W0=typeof H0==="number",w0=J0&&W0,O0=W0?f(b0,H0,i):{text:b0||"",omitted:0,totalLines:Number.isFinite(i)?i:0};if(!b0&&!(Number.isFinite(O0.totalLines)&&O0.totalLines>0))return null;let j0=`agent-thinking-body${W0?" agent-thinking-body-collapsible":""}`,y=W0?`--agent-thinking-collapsed-lines: ${H0};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${J0?"true":"false"}
                data-collapsible=${W0?"true":"false"}
                style=${B0?`--turn-color: ${B0};`:""}
            >
                <div class="agent-thinking-title ${k0||""}">
                    ${B0&&B`<span class=${g0} aria-hidden="true"></span>`}
                    ${r}
                    ${w0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${r} panel`}
                            onClick=${()=>Z0(I0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:a5(b0)}}
                />
                ${!J0&&O0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>Z0(I0)}>
                        ▸ ${O0.omitted} more lines
                    </button>
                `}
                ${J0&&O0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>Z0(I0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},o0=Z?.tool_call?.title,t0=o0?`Awaiting approval: ${o0}`:"Awaiting approval",R1=N0?h8(_,_0):null,q1=(r,Y0,m=null)=>{let i=m8(r);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${Y0?`--turn-color: ${Y0};`:""}
                title=${r?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${Y0&&B`<span class=${g0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${i}</span>
                    ${m&&B`<span class="agent-status-elapsed">${m}</span>`}
                </div>
                ${r.detail&&B`<div class="agent-thinking-body">${r.detail}</div>`}
            </div>
        `},n0=(r,Y0,m,i,H0,k0,I0,J0=8,C0=8)=>{let b0=Math.max(H0-i,0.000000001),W0=Math.max(Y0-J0*2,1),w0=Math.max(m-C0*2,1),O0=Math.max(I0-k0,1),j0=I0===k0?Y0/2:J0+(r.run-k0)/O0*W0,y=C0+(w0-(r.value-i)/b0*w0);return{x:j0,y}},B1=(r,Y0,m,i,H0,k0,I0,J0=8,C0=8)=>{if(!Array.isArray(r)||r.length===0)return"";return r.map((b0,W0)=>{let{x:w0,y:O0}=n0(b0,Y0,m,i,H0,k0,I0,J0,C0);return`${W0===0?"M":"L"} ${w0.toFixed(2)} ${O0.toFixed(2)}`}).join(" ")},Q1=(r,Y0="")=>{if(!Number.isFinite(r))return"—";return`${Math.abs(r)>=100?r.toFixed(0):r.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${Y0}`},e0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],L0=(r,Y0)=>{let m=e0;if(!Array.isArray(m)||m.length===0)return"var(--accent-color)";if(m.length===1||!Number.isFinite(Y0)||Y0<=1)return m[0];let H0=Math.max(0,Math.min(Number.isFinite(r)?r:0,Y0-1))/Math.max(1,Y0-1)*(m.length-1),k0=Math.floor(H0),I0=Math.min(m.length-1,k0+1),J0=H0-k0,C0=m[k0],b0=m[I0];if(!b0||k0===I0||J0<=0.001)return C0;if(J0>=0.999)return b0;let W0=Math.round((1-J0)*1000)/10,w0=Math.round(J0*1000)/10;return`color-mix(in oklab, ${C0} ${W0}%, ${b0} ${w0}%)`},f0=(r,Y0="autoresearch")=>{let m=Array.isArray(r)?r.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((j0)=>j0.points.length>0):[],i=m.map((j0,y)=>({...j0,color:L0(y,m.length)}));if(i.length===0)return null;let H0=320,k0=120,I0=i.flatMap((j0)=>j0.points),J0=I0.map((j0)=>j0.value),C0=I0.map((j0)=>j0.run),b0=Math.min(...J0),W0=Math.max(...J0),w0=Math.min(...C0),O0=Math.max(...C0);return B`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${i.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${H0} ${k0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${i.map((j0)=>{let y=j0?.key||j0?.label||"series",s=a?.panelKey===Y0&&a?.seriesKey===y;return B`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${s?" is-hovered":""}`}
                                        d=${B1(j0.points,H0,k0,b0,W0,w0,O0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>t({panelKey:Y0,seriesKey:y})}
                                        onMouseLeave=${()=>t((K0)=>K0?.panelKey===Y0&&K0?.seriesKey===y?null:K0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${i.flatMap((j0)=>{let y=typeof j0?.unit==="string"?j0.unit:"",s=j0?.key||j0?.label||"series";return j0.points.map((K0,A0)=>{let m0=n0(K0,H0,k0,b0,W0,w0,O0);return B`
                                    <button
                                        key=${`${s}-point-${A0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${m0.x/H0*100}%; top:${m0.y/k0*100}%;`}
                                        onMouseEnter=${()=>t({panelKey:Y0,seriesKey:s,run:K0.run,value:K0.value,unit:y})}
                                        onMouseLeave=${()=>t((_1)=>_1?.panelKey===Y0?null:_1)}
                                        onFocus=${()=>t({panelKey:Y0,seriesKey:s,run:K0.run,value:K0.value,unit:y})}
                                        onBlur=${()=>t((_1)=>_1?.panelKey===Y0?null:_1)}
                                        aria-label=${`${j0?.label||"Series"} ${Q1(K0.value,y)} at run ${K0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${i.map((j0)=>{let y=j0.points[j0.points.length-1]?.value,s=typeof j0?.unit==="string"?j0.unit:"",K0=j0?.key||j0?.label||"series",A0=a?.panelKey===Y0&&a?.seriesKey===K0?a:null,m0=A0&&Number.isFinite(A0.value)?A0.value:y,_1=A0&&typeof A0.unit==="string"?A0.unit:s,N1=A0&&Number.isFinite(A0.run)?A0.run:null;return B`
                            <div key=${`${K0}-legend`} class=${`agent-series-legend-item${A0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${N1!==null&&B`<span class="agent-series-legend-run">run ${N1}</span>`}
                                <span class="agent-series-legend-value">${Q1(m0,_1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},j1=(r)=>{if(!r)return null;let Y0=typeof r?.key==="string"?r.key:`panel-${Math.random()}`,m=e.has(Y0),i=r?.title||"Extension status",H0=r?.collapsed_text||"",k0=String(r?.state||"").replace(/[-_]+/g," ").replace(/^./,(s)=>s.toUpperCase()),I0=h0(r?.state==="completed"?"success":r?.state==="failed"?"error":r?.state==="stopped"?"warning":"info"),J0=typeof r?.detail_markdown==="string"?r.detail_markdown.trim():"",C0=typeof r?.last_run_text==="string"?r.last_run_text.trim():"",b0=typeof r?.tmux_command==="string"?r.tmux_command.trim():"",W0=Array.isArray(r?.series)?r.series:[],w0=Array.isArray(r?.actions)?r.actions:[],O0=Boolean(J0||b0),j0=Boolean(J0||W0.length>0||b0),y=[i,H0].filter(Boolean).join(" — ");return B`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${m?"true":"false"}
                style=${I0?`--turn-color: ${I0};`:""}
                title=${!m?y||i:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?Z0(Y0):null}
                    >
                        ${I0&&B`<span class=${g0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${i}</span>
                        ${H0&&B`<span class="agent-thinking-title-meta">${H0}</span>`}
                    </button>
                    ${(w0.length>0||j0&&!m)&&B`
                        <div class="agent-thinking-tools-inline">
                            ${w0.length>0&&B`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${w0.map((s)=>{let K0=`${Y0}:${s?.key||""}`,A0=K?.has?.(K0);return B`
                                            <button
                                                key=${K0}
                                                class=${`agent-thinking-action-btn${s?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>N?.(r,s)}
                                                disabled=${Boolean(A0)}
                                            >
                                                ${A0?"Working…":s?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!m&&B`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${i}`}
                                    title="Expand details"
                                    onClick=${()=>Z0(Y0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&m&&B`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${i}`}
                        title="Collapse details"
                        onClick=${()=>Z0(Y0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${m&&B`
                    <div class=${`agent-thinking-autoresearch-layout${O0?"":" chart-only"}`}>
                        ${O0&&B`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${J0&&B`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:a5(J0)}}
                                    />
                                `}
                                ${b0&&B`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${b0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>N?.(r,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${tN}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${W0.length>0?B`
                                <div class="agent-series-chart-stack">
                                    ${f0(W0,Y0)}
                                    ${C0&&B`<div class="agent-series-chart-note">${C0}</div>`}
                                </div>
                            `:B`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${U&&Y&&q1(Y,c0)}
            ${L&&Array.isArray(q)&&q.map((r)=>j1(r))}
            ${U&&_?.type==="intent"&&q1(_,d0,R1)}
            ${U&&Z&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${B0?`--turn-color: ${B0};`:""}>
                    <span class=${g0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${t0}</span>
                </div>
            `}
            ${U&&P&&x0({panelTitle:M0("Planning"),text:u.text,fullText:u.fullText,totalLines:u.totalLines,panelKey:"plan"})}
            ${U&&I&&x0({panelTitle:M0("Thoughts"),text:c.text,fullText:c.fullText,totalLines:c.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&z&&x0({panelTitle:M0("Draft"),text:o.text,fullText:o.fullText,totalLines:o.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${D0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${B0?`--turn-color: ${B0};`:""}>
                    ${B0&&B`<span class=${g0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!D0&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${E0}</span>
                </div>
            `}
        </div>
    `}function xQ({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",K=Q?.kind||"other",N=Q?.rawInput||{},G=N.command||N.commands&&N.commands[0]||null,X=N.diff||null,V=N.fileName||N.path||null,U=Q?.description||N.description||N.explanation||null,J=(Array.isArray(Q?.locations)?Q.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),D=Array.from(new Set([V,...J].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let O=async(E)=>{try{await A8(j,E,Y||null),$()}catch(f){console.error("Failed to respond to agent request:",f)}},W=async()=>{try{await b6(q,`Auto-approved: ${q}`),await A8(j,"approved",Y||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},A=Z&&Z.length>0;return B`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${q}</div>
                </div>
                ${(U||G||X||D.length>0)&&B`
                    <div class="agent-request-body">
                        ${U&&B`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${D.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${D.map((E,f)=>B`<li key=${f}>${E}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&B`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${X&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${X}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${A?Z.map((E)=>B`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>O(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>O("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>O("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${W}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var eN=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),_G=new Set(["text/markdown"]),$G=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),jG=new Set(["application/vnd.jgraph.mxfile"]);function j8(_){return typeof _==="string"?_.trim().toLowerCase():""}function QG(_){let $=j8(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function ZG(_){let $=j8(_);return!!$&&$.endsWith(".pdf")}function YG(_){let $=j8(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function Q8(_,$){let j=j8(_);if(QG($)||jG.has(j))return"drawio";if(ZG($)||j==="application/pdf")return"pdf";if(YG($)||$G.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(eN.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function TQ(_){let $=j8(_);return _G.has($)}function CQ(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function qG(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function KG(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function PQ(_){return qG(_)||KG(_)}function $6(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function NG(_,$){let j=Math.max($6(_),$6($)),Q=Math.min($6(_),$6($));return(j+0.05)/(Q+0.05)}function GG(_,$,j="#ffffff"){let Q=PQ(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let K=PQ(q);if(!K)continue;let N=NG(Q,K);if(N>Y)Z=q,Y=N}return Z}function L3(){let _=getComputedStyle(document.documentElement),$=(J,D)=>{for(let O of J){let W=_.getPropertyValue(O).trim();if(W)return W}return D},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),N=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),X=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),L=GG(K,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:K,good:N,warning:G,attention:X,border:V,fontFamily:U,buttonTextColor:L}}function yQ(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:K,border:N,fontFamily:G}=L3();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:N},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var XG=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),SQ=!1,j6=null,wQ=!1;function B3(_){_.querySelector(".adaptive-card-notice")?.remove()}function VG(_,$,j="error"){B3(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function UG(_,$=(j)=>J_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function LG(_=($)=>J_($,null)){return($,j)=>{try{let Q=UG($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function BG(_){if(wQ||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=LG(),wQ=!0}async function WG(){if(SQ)return;if(j6)return j6;return j6=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{SQ=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),j6}function FG(){return globalThis.AdaptiveCards}function zG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function HG(_){return XG.has(_)}function F3(_){if(!Array.isArray(_))return[];return _.filter(zG)}function JG(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function W3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>W3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${W3(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function OG(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return W3($);return typeof $==="string"?$:String($)}function AG(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((K)=>Q(K));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=OG(q.type,j[q.id],q);for(let[K,N]of Object.entries(q))if(Array.isArray(N)||N&&typeof N==="object")q[K]=Q(N);return q};return Q(_)}function DG(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function EG(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function kG(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=EG(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function RQ(_,$,j){if(!HG($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await WG()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=FG();BG(Q);let Z=new Q.AdaptiveCard,Y=L3();Z.hostConfig=new Q.HostConfig(yQ());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:AG($.payload,q);Z.parse(K),Z.onExecuteAction=(X)=>{let V=JG(X);if(j?.onAction)B3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let L=U instanceof Error?U.message:String(U||"Action failed.");VG(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let N=Z.render();if(!N)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=kG($);if(G){_.classList.add("adaptive-card-finished");let X=document.createElement("div");X.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=G.label,X.appendChild(V),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,X.appendChild(U)}_.appendChild(X)}if(B3(_),_.appendChild(N),G)DG(N);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function Z8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Z8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${Z8(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function uQ(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:Z8(j)})).filter(($)=>$.value)}function MG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function z3(_){if(!Array.isArray(_))return[];return _.filter(MG)}function fQ(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=Z8(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=uQ(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function vQ(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=uQ(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):Z8(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function M5({children:_,className:$=""}){let j=x(null);return v(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{T4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),R5(()=>{let Q=j.current;if(!Q)return;return T4(_,Q),()=>{T4(null,Q)}},[_]),null}function IG(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?w_($):null},{label:"Added",value:_?.created_at?a4(_.created_at):null}].filter((Q)=>Q.value)}function xG(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=S_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function gQ({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=u0(()=>Q8($?.content_type,Q),[$?.content_type,Q]),Y=CQ(Z),q=u0(()=>TQ($?.content_type),[$?.content_type]),[K,N]=g(Z==="text"),[G,X]=g(""),[V,U]=g(null),L=x(null),J=u0(()=>IG($),[$]),D=u0(()=>xG(_,Q,Z),[_,Q,Z]),O=u0(()=>{if(!q||!G)return"";return J_(G)},[q,G]);return v(()=>{let W=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[j]),v(()=>{if(!L.current||!O)return;F4(L.current);return},[O]),v(()=>{let W=!1;async function A(){if(Z!=="text"){N(!1),U(null);return}N(!0),U(null);try{let E=await c6(_);if(!W)X(E)}catch{if(!W)U("Failed to load text preview.")}finally{if(!W)N(!1)}}return A(),()=>{W=!0}},[_,Z]),B`
        <${M5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(W)=>{W.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Q}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${D&&B`
                                <a
                                    href=${D}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(W)=>W.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${S_(_)}
                                download=${Q}
                                class="attachment-preview-download"
                                onClick=${(W)=>W.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${K&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&V&&B`<div class="attachment-preview-state">${V}</div>`}
                        ${!K&&!V&&Z==="image"&&B`
                            <img class="attachment-preview-image" src=${S_(_)} alt=${Q} />
                        `}
                        ${!K&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&D&&B`
                            <iframe class="attachment-preview-frame" src=${D} title=${Q}></iframe>
                        `}
                        ${!K&&!V&&Z==="drawio"&&B`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!K&&!V&&Z==="text"&&q&&B`
                            <div
                                ref=${L}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:O}}
                            />
                        `}
                        ${!K&&!V&&Z==="text"&&!q&&B`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!K&&!V&&Z==="unsupported"&&B`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${J.map((W)=>B`
                            <div class="attachment-preview-meta-item" key=${W.label}>
                                <span class="attachment-preview-meta-label">${W.label}</span>
                                <span class="attachment-preview-meta-value">${W.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${M5}>
    `}function bQ({src:_,onClose:$}){return v(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <${M5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${M5}>
    `}function TG({mediaId:_,onPreview:$}){let[j,Q]=g(null);if(v(()=>{L5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?w_(Y):"",N=Q8(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${S_(_)} download=${Z} class="file-attachment-main">
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
                        ${q&&B`<span class="file-size">${q}</span>`}
                        ${j.content_type&&B`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${N}
            </button>
        </div>
    `}function CG({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=g(null);v(()=>{if(!Number.isFinite(j))return;L5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?S_(j):null,N=Q8(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${Y}>
            ${q?B`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${p_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:B`
                    <${p_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Q&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${N}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Q})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Q6({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?a4(Q):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&B`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function PG({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?w_(_.size):"",Z=_.mime_type||"",Y=wG(Z),q=s4(_.uri);return B`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&B`<span>${Z}</span>`}
                    ${Q&&B`<span>${Q}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function yG({block:_}){let[$,j]=g(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Q}
            </button>
            ${$&&B`
                ${Z&&B`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&B`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let N=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(N),X=document.createElement("a");X.href=G,X.download=Q.split("/").pop()||"resource",X.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function SG({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=_3(_,$),Z=bj(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",K=Q?.description||_.description||_.subtitle||"",N=_.open_label||"Open widget",G=(X)=>{if(X.preventDefault(),X.stopPropagation(),!Q)return;j?.(Q)};return B`
        <div class="generated-widget-launch" onClick=${(X)=>X.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${K&&B`<div class="generated-widget-launch-description">${K}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${G}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${N}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function wG(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function RG({preview:_}){let $=s4(_.url),j=s4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Q}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function uG(_,$){return typeof _==="string"?_:""}var fG=1800,vG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,gG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,bG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function mG(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function hG(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let K=q||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=gG,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=bG,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=vG,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Z(K,"idle"),q.appendChild(K);let N=async(G)=>{G.preventDefault(),G.stopPropagation();let V=Y.querySelector("code")?.textContent||"",U=await mG(V);Z(K,U?"success":"error");let L=j.get(K);if(L)clearTimeout(L);let J=setTimeout(()=>{Z(K,"idle"),j.delete(K)},fG);j.set(K,J)};K.addEventListener("click",N),Q.push(()=>{K.removeEventListener("click",N);let G=j.get(K);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function pG(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:Z}}function cG(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:Z}}function lG(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1){let X=j[G].trim();if((X==="Images:"||X==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim(),V=X.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||X.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],L=(V[2]||"").trim()||U;Z.push({id:U,label:L,raw:X})}else Z.push({id:null,label:X,raw:X})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:Z}}function nG(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function dG(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(nG).sort((X,V)=>V.length-X.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),K=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),N=[],G;while(G=K.nextNode())N.push(G);for(let X of N){let V=X.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let U=X.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let L=V.split(Z).filter((D)=>D!=="");if(L.length===0)continue;let J=q.createDocumentFragment();for(let D of L)if(Y.test(D)){let O=q.createElement("mark");O.className="search-highlight-term",O.textContent=D,J.appendChild(O)}else J.appendChild(q.createTextNode(D));X.parentNode.replaceChild(J,X)}return q.body.innerHTML}function mQ({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:K,userAvatarUrl:N,userAvatarBackground:G,onDelete:X,isThreadReply:V,isThreadPrev:U,isThreadNext:L,isRemoving:J,highlightQuery:D,onFileRef:O,onOpenWidget:W}){let[A,E]=g(null),f=x(null),u=_.data,c=u.type==="agent_response",o=K||"You",P=c?Y||EQ:o,I=c?V3(Y,q,!0):V3(o,N),z=typeof G==="string"?G.trim().toLowerCase():"",C=!c&&I.image&&(z==="clear"||z==="transparent"),b=c&&Boolean(I.image),e=`background-color: ${C||b?"transparent":I.color}`,p=u.content_meta,a=Boolean(p?.truncated),t=Boolean(p?.preview),_0=a&&!t,q0=a?{originalLength:Number.isFinite(p?.original_length)?p.original_length:u.content?u.content.length:0,maxLength:Number.isFinite(p?.max_length)?p.max_length:0}:null,Z0=u.content_blocks||[],N0=u.media_ids||[],F0=uG(u.content,u.link_previews),{content:B0,fileRefs:g0}=pG(F0),{content:M0,messageRefs:D0}=cG(B0),{content:h0,attachments:v0}=lG(M0);F0=h0;let c0=F3(Z0),d0=z3(Z0),E0=c0.length===1&&typeof c0[0]?.fallback_text==="string"?c0[0].fallback_text.trim():"",i0=d0.length===1?fQ(d0[0]).trim():"",z0=Boolean(E0)&&F0?.trim()===E0||Boolean(i0)&&F0?.trim()===i0,x0=Boolean(F0)&&!_0&&!z0,o0=typeof D==="string"?D.trim():"",t0=u0(()=>{if(!F0||z0)return"";let y=J_(F0,j);return o0?dG(y,o0):y},[F0,z0,o0]),R1=(y,s)=>{y.stopPropagation(),E(S_(s))},[q1,n0]=g(null),B1=(y)=>{n0(y)},Q1=(y)=>{y.stopPropagation(),X?.(_)},e0=(y,s)=>{let K0=new Set;if(!y||s.length===0)return{content:y,usedIds:K0};return{content:y.replace(/attachment:([^\s)"']+)/g,(m0,_1,N1,k1)=>{let u1=_1.replace(/^\/+/,""),$_=s.find((o1)=>o1.name&&o1.name.toLowerCase()===u1.toLowerCase()&&!K0.has(o1.id))||s.find((o1)=>!K0.has(o1.id));if(!$_)return m0;if(K0.add($_.id),k1.slice(Math.max(0,N1-2),N1)==="](")return`/media/${$_.id}`;return $_.name||"attachment"}),usedIds:K0}},L0=[],f0=[],j1=[],r=[],Y0=[],m=[],i=[],H0=0;if(Z0.length>0)Z0.forEach((y)=>{if(y?.type==="text"&&y.annotations)i.push(y.annotations);if(y?.type==="generated_widget")m.push(y);else if(y?.type==="resource_link")r.push(y);else if(y?.type==="resource")Y0.push(y);else if(y?.type==="file"){let s=N0[H0++];if(s)f0.push(s),j1.push({id:s,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let s=N0[H0++];if(s){let K0=typeof y?.mime_type==="string"?y.mime_type:void 0;L0.push({id:s,annotations:y?.annotations,mimeType:K0}),j1.push({id:s,name:y?.name||y?.filename||y?.title})}}});else if(N0.length>0){let y=v0.length>0;N0.forEach((s,K0)=>{let A0=v0[K0]||null;if(j1.push({id:s,name:A0?.label||null}),y)f0.push(s);else L0.push({id:s,annotations:null})})}if(v0.length>0)v0.forEach((y)=>{if(!y?.id)return;let s=j1.find((K0)=>String(K0.id)===String(y.id));if(s&&!s.name)s.name=y.label});let{content:k0,usedIds:I0}=e0(F0,j1);F0=k0;let J0=L0.filter(({id:y})=>!I0.has(y)),C0=f0.filter((y)=>!I0.has(y)),b0=v0.length>0?v0.map((y,s)=>({id:y.id||`attachment-${s+1}`,label:y.label||`attachment-${s+1}`})):j1.map((y,s)=>({id:y.id,label:y.name||`attachment-${s+1}`})),W0=u0(()=>F3(Z0),[Z0]),w0=u0(()=>z3(Z0),[Z0]),O0=u0(()=>{return W0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[W0]);v(()=>{if(!f.current)return;return F4(f.current),hG(f.current)},[t0]);let j0=x(null);return v(()=>{if(!j0.current||W0.length===0)return;let y=j0.current;y.innerHTML="";for(let s of W0){let K0=document.createElement("div");y.appendChild(K0),RQ(K0,s,{onAction:async(A0)=>{if(A0.type==="Action.OpenUrl"){let m0=s4(A0.url||"");if(!m0)throw Error("Invalid URL");window.open(m0,"_blank","noopener,noreferrer");return}if(A0.type==="Action.Submit"){await g6({post_id:_.id,thread_id:u.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:s.card_id,action:{type:A0.type,title:A0.title||"",data:A0.data}});return}console.warn("[post] unsupported adaptive card action:",A0.type,A0)}}).catch((A0)=>{console.error("[post] adaptive card render error:",A0),K0.textContent=s.fallback_text||"Card failed to render."})}},[O0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${c?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${L?"thread-next":""} ${J?"removing":""}" onClick=${$}>
            <div class="post-avatar ${c?"agent-avatar":""} ${I.image?"has-image":""}" style=${e}>
                ${I.image?B`<img src=${I.image} alt=${P} />`:I.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${Q1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${P}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${R7(_.timestamp)}</a>
                </div>
                ${_0&&q0&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${t5(q0.originalLength)} chars
                            ${q0.maxLength?B` • Display limit: ${t5(q0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${t&&q0&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${t5(q0.maxLength)} of ${t5(q0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(g0.length>0||D0.length>0||b0.length>0)&&B`
                    <div class="post-file-refs">
                        ${D0.map((y)=>{let s=(K0)=>{if(K0.preventDefault(),K0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let A0=document.getElementById("post-"+y);if(A0)A0.scrollIntoView({behavior:"smooth",block:"center"}),A0.classList.add("post-highlight"),setTimeout(()=>A0.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${s}>
                                    <${p_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${s}
                                    />
                                </a>
                            `})}
                        ${g0.map((y)=>{let s=y.split("/").pop()||y;return B`
                                <${p_}
                                    prefix="post"
                                    label=${s}
                                    title=${y}
                                    onClick=${()=>O?.(y)}
                                />
                            `})}
                        ${b0.map((y)=>B`
                            <${CG}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${B1}
                            />
                        `)}
                    </div>
                `}
                ${x0&&B`
                    <div 
                        ref=${f}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:t0}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let s=y.target.dataset.hashtag;if(s)j?.(s)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),E(y.target.src)}}
                    />
                `}
                ${W0.length>0&&B`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${w0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${w0.map((y,s)=>{let K0=vQ(y),A0=`${y.card_id}-${s}`;return B`
                                <div key=${A0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${K0.title}</span>
                                        </div>
                                    </div>
                                    ${K0.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${K0.fields.map((m0)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${m0.key}: ${m0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${m0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${m0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${a4(K0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${m.length>0&&B`
                    <div class="generated-widget-launches">
                        ${m.map((y,s)=>B`
                            <${SG}
                                key=${y.widget_id||y.id||`${_.id}-widget-${s}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${i.length>0&&B`
                    ${i.map((y,s)=>B`
                        <${Q6} key=${s} annotations=${y} />
                    `)}
                `}
                ${J0.length>0&&B`
                    <div class="media-preview">
                        ${J0.map(({id:y,mimeType:s})=>{let A0=typeof s==="string"&&s.toLowerCase().startsWith("image/svg")?S_(y):p6(y);return B`
                                <img 
                                    key=${y} 
                                    src=${A0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(m0)=>R1(m0,y)}
                                />
                            `})}
                    </div>
                `}
                ${J0.length>0&&B`
                    ${J0.map(({annotations:y},s)=>B`
                        ${y&&B`<${Q6} key=${s} annotations=${y} />`}
                    `)}
                `}
                ${C0.length>0&&B`
                    <div class="file-attachments">
                        ${C0.map((y)=>B`
                            <${TG} key=${y} mediaId=${y} onPreview=${B1} />
                        `)}
                    </div>
                `}
                ${r.length>0&&B`
                    <div class="resource-links">
                        ${r.map((y,s)=>B`
                            <div key=${s}>
                                <${PG} block=${y} />
                                <${Q6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&B`
                    <div class="resource-embeds">
                        ${Y0.map((y,s)=>B`
                            <div key=${s}>
                                <${yG} block=${y} />
                                <${Q6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${u.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${u.link_previews.map((y,s)=>B`
                            <${RG} key=${s} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&B`<${bQ} src=${A} onClose=${()=>E(null)} />`}
        ${q1&&B`
            <${gQ}
                mediaId=${q1.mediaId}
                info=${q1.info}
                onClose=${()=>n0(null)}
            />
        `}
    `}function hQ({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:K,onOpenWidget:N,emptyMessage:G,timelineRef:X,agents:V,user:U,onDeletePost:L,reverse:J=!0,removingPostIds:D,searchQuery:O}){let[W,A]=g(!1),E=x(null),f=typeof IntersectionObserver<"u",u=T(async()=>{if(!j||!$||W)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,W,j]),c=T((p)=>{let{scrollTop:a,scrollHeight:t,clientHeight:_0}=p.target,q0=J?t-_0-a:a,Z0=Math.max(300,_0);if(q0<Z0)u()},[J,u]);v(()=>{if(!f)return;let p=E.current,a=X?.current;if(!p||!a)return;let t=300,_0=new IntersectionObserver((q0)=>{for(let Z0 of q0){if(!Z0.isIntersecting)continue;u()}},{root:a,rootMargin:`${t}px 0px ${t}px 0px`,threshold:0});return _0.observe(p),()=>_0.disconnect()},[f,$,j,X,u]);let o=x(u);if(o.current=u,v(()=>{if(f)return;if(!X?.current)return;let{scrollTop:p,scrollHeight:a,clientHeight:t}=X.current,_0=J?a-t-p:p,q0=Math.max(300,t);if(_0<q0)o.current?.()},[f,_,$,J,X]),v(()=>{if(!X?.current)return;if(!$||W)return;let{scrollTop:p,scrollHeight:a,clientHeight:t}=X.current,_0=J?a-t-p:p,q0=Math.max(300,t);if(a<=t+1||_0<q0)o.current?.()},[_,$,W,J,X]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let P=_.slice().sort((p,a)=>p.id-a.id),I=(p)=>{let a=p?.data?.thread_id;if(a===null||a===void 0||a==="")return null;let t=Number(a);return Number.isFinite(t)?t:null},z=new Map;for(let p=0;p<P.length;p+=1){let a=P[p],t=Number(a?.id),_0=I(a);if(_0!==null){let q0=z.get(_0)||{anchorIndex:-1,replyIndexes:[]};q0.replyIndexes.push(p),z.set(_0,q0)}else if(Number.isFinite(t)){let q0=z.get(t)||{anchorIndex:-1,replyIndexes:[]};q0.anchorIndex=p,z.set(t,q0)}}let C=new Map;for(let[p,a]of z.entries()){let t=new Set;if(a.anchorIndex>=0)t.add(a.anchorIndex);for(let _0 of a.replyIndexes)t.add(_0);C.set(p,Array.from(t).sort((_0,q0)=>_0-q0))}let b=P.map((p,a)=>{let t=I(p);if(t===null)return{hasThreadPrev:!1,hasThreadNext:!1};let _0=C.get(t);if(!_0||_0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let q0=_0.indexOf(a);if(q0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:q0>0,hasThreadNext:q0<_0.length-1}}),e=B`<div class="timeline-sentinel" ref=${E}></div>`;return B`
        <div class="timeline ${J?"reverse":"normal"}" ref=${X} onScroll=${c}>
            <div class="timeline-content">
                ${J?e:null}
                ${P.map((p,a)=>{let t=Boolean(p.data?.thread_id&&p.data.thread_id!==p.id),_0=D?.has?.(p.id),q0=b[a]||{};return B`
                    <${mQ}
                        key=${p.id}
                        post=${p}
                        isThreadReply=${t}
                        isThreadPrev=${q0.hasThreadPrev}
                        isThreadNext=${q0.hasThreadNext}
                        isRemoving=${_0}
                        highlightQuery=${O}
                        agentName=${kQ(p.data?.agent_id,V||{})}
                        agentAvatarUrl=${MQ(p.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Q?.(p)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${K}
                        onOpenWidget=${N}
                        onDelete=${L}
                    />
                `})}
                ${J?null:e}
            </div>
        </div>
    `}var Z6="workspaceExplorerScale",iG=["compact","default","comfortable"],rG=new Set(iG),oG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function pQ(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return rG.has(j)?j:$}function H3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function sG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function aG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function J3(_={}){let $=sG(_),j=_.stored?pQ(_.stored,$):$;return aG(j,_)}function cQ(_){return oG[pQ(_)]}function tG(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function O3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function lQ(_,$,j={}){let Q=j.resolvePane;if(O3(_,Q))return!0;return tG($)}var eG=60000,rQ=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function _X(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return O3($,(j)=>l0.resolve(j))}function oQ(_,$,j,Q=0,Z=[]){if(!j&&rQ(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)oQ(Y,$,j,Q+1,Z);return Z}function nQ(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&rQ(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function k3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((K)=>[K?.path,K])):new Map,Y=!j||j.length!==Q.length,q=Q.map((K)=>{let N=k3(Z.get(K.path),K);if(N!==Z.get(K.path))Y=!0;return N});return Y?{...$,children:q}:_}function D3(_,$,j){if(!_)return _;if(_.path===$)return k3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=D3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var sQ=4,A3=14,$X=8,jX=16;function aQ(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=aQ(Q);return _.__bytes=j,j}function tQ(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=sQ)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let K of Z){let N=Math.max(0,Number(K?.__bytes??K?.size??0));if(N<=0)continue;if(K.type==="dir")Y.push({kind:"dir",node:K,size:N});else Y.push({kind:"file",name:K.name,path:K.path,size:N})}Y.sort((K,N)=>N.size-K.size);let q=Y;if(Y.length>A3){let K=Y.slice(0,A3-1),N=Y.slice(A3-1),G=N.reduce((X,V)=>X+V.size,0);K.push({kind:"other",name:`+${N.length} more`,path:`${Q.path}/[other]`,size:G}),q=K}return Q.children=q.map((K)=>{if(K.kind==="dir")return tQ(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Q}function dQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function eQ(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function Y6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function M3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,K=Y-Z>q?Z+q:Y,N=Y6(_,$,Q,Z),G=Y6(_,$,Q,K),X=Y6(_,$,j,K),V=Y6(_,$,j,Z),U=K-Z>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var _Z={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function $Z(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(K,N,G,X)=>{let V=Array.isArray(K?.children)?K.children:[];if(!V.length)return;let U=Math.max(0,Number(K.size)||0);if(U<=0)return;let L=G-N,J=N;V.forEach((D,O)=>{let W=Math.max(0,Number(D.size)||0);if(W<=0)return;let A=W/U,E=J,f=O===V.length-1?G:J+L*A;if(J=f,f-E<0.003)return;let u=_Z[X];if(u){let c=eQ(E,X,j);if(Q.push({key:D.path,path:D.path,label:D.name,size:W,color:c,depth:X,startAngle:E,endAngle:f,innerRadius:u[0],outerRadius:u[1],d:M3(120,120,u[0],u[1],E,f)}),X===1)Z.push({key:D.path,name:D.name,size:W,pct:Y>0?W/Y*100:0,color:c})}if(X<sQ)q(D,E,f,X+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function E3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=E3(Q,$);if(Z)return Z}return null}function jZ(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=_Z[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,K=eQ(Y,1,Q),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:K,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:M3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:K}]}}function iQ(_,$=!1,j=!1){if(!_)return null;let Q=aQ(_),Z=tQ(_,0),Y=Z.size||Q,{segments:q,legend:K}=$Z(Z,Y,j);if(!q.length&&Y>0){let N=jZ("[files]",Z.path,Y,j);q=N.segments,K=N.legend}return{root:Z,totalSize:Y,segments:q,legend:K,truncated:$,isDarkTheme:j}}function QX({payload:_}){if(!_)return null;let[$,j]=g(null),[Q,Z]=g(_?.root?.path||"."),[Y,q]=g(()=>[_?.root?.path||"."]),[K,N]=g(!1);v(()=>{let z=_?.root?.path||".";Z(z),q([z]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Q)return;N(!0);let z=setTimeout(()=>N(!1),180);return()=>clearTimeout(z)},[Q]);let G=u0(()=>{return E3(_.root,Q)||_.root},[_?.root,Q]),X=G?.size||_.totalSize||0,{segments:V,legend:U}=u0(()=>{let z=$Z(G,X,_.isDarkTheme);if(z.segments.length>0)return z;if(X<=0)return z;let C=G?.children?.length?"Total":"[files]";return jZ(C,G?.path||_?.root?.path||".",X,_.isDarkTheme)},[G,X,_.isDarkTheme,_?.root?.path]),[L,J]=g(V),D=x(new Map),O=x(0);v(()=>{let z=D.current,C=new Map(V.map((a)=>[a.key,a])),b=performance.now(),e=220,p=(a)=>{let t=Math.min(1,(a-b)/220),_0=t*(2-t),q0=V.map((Z0)=>{let F0=z.get(Z0.key)||{startAngle:Z0.startAngle,endAngle:Z0.startAngle,innerRadius:Z0.innerRadius,outerRadius:Z0.innerRadius},B0=(v0,c0)=>v0+(c0-v0)*_0,g0=B0(F0.startAngle,Z0.startAngle),M0=B0(F0.endAngle,Z0.endAngle),D0=B0(F0.innerRadius,Z0.innerRadius),h0=B0(F0.outerRadius,Z0.outerRadius);return{...Z0,d:M3(120,120,D0,h0,g0,M0)}});if(J(q0),t<1)O.current=requestAnimationFrame(p)};if(O.current)cancelAnimationFrame(O.current);return O.current=requestAnimationFrame(p),D.current=C,()=>{if(O.current)cancelAnimationFrame(O.current)}},[V]);let W=L.length?L:V,A=X>0?w_(X):"0 B",E=G?.name||"",u=(E&&E!=="."?E:"Total")||"Total",c=A,o=Y.length>1,P=(z)=>{if(!z?.path)return;let C=E3(_.root,z.path);if(!C||!Array.isArray(C.children)||C.children.length===0)return;q((b)=>[...b,C.path]),Z(C.path),j(null)},I=()=>{if(!o)return;q((z)=>{let C=z.slice(0,-1);return Z(C[C.length-1]||_?.root?.path||"."),C}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${W.length}
                data-base-size=${X}>
                ${W.map((z)=>B`
                    <path
                        key=${z.key}
                        d=${z.d}
                        fill=${z.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===z.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(z)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(z)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>P(z)}
                    >
                        <title>${z.label} — ${w_(z.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${o?" is-drill":""}`}
                    onClick=${I}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${u}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${c}</text>
                </g>
            </svg>
            ${U.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((z)=>B`
                        <div key=${z.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${z.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${z.name}>${z.name}</span>
                            <span class="workspace-folder-starburst-size">${w_(z.size)}</span>
                            <span class="workspace-folder-starburst-pct">${z.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function ZX({mediaId:_}){let[$,j]=g(null);if(v(()=>{if(!_)return;L5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?w_($.metadata.size):"";return B`
        <a href=${S_(_)} download=${Q} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Q}</span>
                ${Z&&B`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function QZ({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:K=!1}){let[N,G]=g(null),[X,V]=g(new Set(["."])),[U,L]=g(null),[J,D]=g(null),[O,W]=g(""),[A,E]=g(null),[f,u]=g(null),[c,o]=g(!0),[P,I]=g(!1),[z,C]=g(null),[b,e]=g(()=>O5("workspaceShowHidden",!1)),[p,a]=g(!1),[t,_0]=g(null),[q0,Z0]=g(null),[N0,F0]=g(null),[B0,g0]=g(!1),[M0,D0]=g(null),[h0,v0]=g(()=>dQ()),[c0,d0]=g(()=>J3({stored:H_(Z6),...H3()})),[E0,i0]=g(!1),z0=x(X),x0=x(""),o0=x(null),t0=x(0),R1=x(new Set),q1=x(null),n0=x(new Map),B1=x(_),Q1=x(Q),e0=x(null),L0=x(null),f0=x(null),j1=x(null),r=x(null),Y0=x(null),m=x("."),i=x(null),H0=x({path:null,dragging:!1,startX:0,startY:0}),k0=x({path:null,dragging:!1,startX:0,startY:0}),I0=x({path:null,timer:0}),J0=x(!1),C0=x(0),b0=x(new Map),W0=x(null),w0=x(null),O0=x(null),j0=x(null),y=x(null),s=x(null),K0=x(b),A0=x($),m0=x(j??$),_1=x(0),N1=x(N0),k1=x(p),u1=x(t),R_=x(null),$_=x({x:0,y:0}),g1=x(0),o1=x(null),c1=x(U),$1=x(J),s1=x(null),e_=x(A);B1.current=_,Q1.current=Q,v(()=>{z0.current=X},[X]),v(()=>{K0.current=b},[b]),v(()=>{A0.current=$},[$]),v(()=>{m0.current=j??$},[j,$]),v(()=>{N1.current=N0},[N0]),v(()=>{if(typeof window>"u")return;let H=()=>{d0(J3({stored:H_(Z6),...H3()}))};H();let k=()=>H(),R=()=>H(),S=($0)=>{if(!$0||$0.key===null||$0.key===Z6)H()};window.addEventListener("resize",k),window.addEventListener("focus",R),window.addEventListener("storage",S);let d=window.matchMedia?.("(pointer: coarse)"),Q0=window.matchMedia?.("(hover: none)"),G0=($0,P0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",P0);else if($0.addListener)$0.addListener(P0)},V0=($0,P0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",P0);else if($0.removeListener)$0.removeListener(P0)};return G0(d,k),G0(Q0,k),()=>{window.removeEventListener("resize",k),window.removeEventListener("focus",R),window.removeEventListener("storage",S),V0(d,k),V0(Q0,k)}},[]),v(()=>{let H=(k)=>{let R=k?.detail?.path;if(!R)return;let S=R.split("/"),d=[];for(let Q0=1;Q0<S.length;Q0++)d.push(S.slice(0,Q0).join("/"));if(d.length)V((Q0)=>{let G0=new Set(Q0);G0.add(".");for(let V0 of d)G0.add(V0);return G0});L(R),requestAnimationFrame(()=>{let Q0=document.querySelector(`[data-path="${CSS.escape(R)}"]`);if(Q0)Q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",H),()=>window.removeEventListener("workspace-reveal-path",H)},[]),v(()=>{k1.current=p},[p]),v(()=>{u1.current=t},[t]),v(()=>{c1.current=U},[U]),v(()=>{$1.current=J},[J]),v(()=>{e_.current=A},[A]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let H=()=>v0(dQ());H();let k=window.matchMedia?.("(prefers-color-scheme: dark)"),R=()=>H();if(k?.addEventListener)k.addEventListener("change",R);else if(k?.addListener)k.addListener(R);let S=typeof MutationObserver<"u"?new MutationObserver(()=>H()):null;if(S?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)S?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(k?.removeEventListener)k.removeEventListener("change",R);else if(k?.removeListener)k.removeListener(R);S?.disconnect()}},[]),v(()=>{if(!J)return;let H=r.current;if(!H)return;let k=requestAnimationFrame(()=>{try{H.focus(),H.select()}catch{}});return()=>cancelAnimationFrame(k)},[J]),v(()=>{if(!E0)return;let H=(R)=>{let S=R?.target;if(!(S instanceof Element))return;if(y.current?.contains(S))return;if(s.current?.contains(S))return;i0(!1)},k=(R)=>{if(R?.key==="Escape")i0(!1),s.current?.focus?.()};return document.addEventListener("mousedown",H),document.addEventListener("touchstart",H,{passive:!0}),document.addEventListener("keydown",k),()=>{document.removeEventListener("mousedown",H),document.removeEventListener("touchstart",H),document.removeEventListener("keydown",k)}},[E0]);let j_=async(H,k={})=>{let R=Boolean(k?.autoOpen),S=String(H||"").trim();I(!0),E(null),u(null);try{let d=await g5(S,20000);if(R&&S&&lQ(S,d,{resolvePane:(Q0)=>l0.resolve(Q0)}))return Q1.current?.(S,d),d;return E(d),d}catch(d){let Q0={error:d.message||"Failed to load preview"};return E(Q0),Q0}finally{I(!1)}};e0.current=j_;let _4=async()=>{if(!A0.current)return;try{let H=await v5("",1,K0.current),k=nQ(H.root,z0.current,K0.current);if(k===x0.current){o(!1);return}if(x0.current=k,o0.current=H.root,!t0.current)t0.current=requestAnimationFrame(()=>{t0.current=0,G((R)=>k3(R,o0.current)),o(!1)})}catch(H){C(H.message||"Failed to load workspace"),o(!1)}},c_=async(H)=>{if(!H)return;if(R1.current.has(H))return;R1.current.add(H);try{let k=await v5(H,1,K0.current);G((R)=>D3(R,H,k.root))}catch(k){C(k.message||"Failed to load workspace")}finally{R1.current.delete(H)}};L0.current=c_;let M1=T(()=>{let H=U;if(!H)return".";let k=n0.current?.get(H);if(k&&k.type==="dir")return k.path;if(H==="."||!H.includes("/"))return".";let R=H.split("/");return R.pop(),R.join("/")||"."},[U]),a1=T((H)=>{let k=H?.closest?.(".workspace-row");if(!k)return null;let R=k.dataset.path,S=k.dataset.type;if(!R)return null;if(S==="dir")return R;if(R.includes("/")){let d=R.split("/");return d.pop(),d.join("/")||"."}return"."},[]),I1=T((H)=>{return a1(H?.target||null)},[a1]),W1=T((H)=>{N1.current=H,F0(H)},[]),F1=T(()=>{let H=I0.current;if(H?.timer)clearTimeout(H.timer);I0.current={path:null,timer:0}},[]),L_=T((H)=>{if(!H||H==="."){F1();return}let k=n0.current?.get(H);if(!k||k.type!=="dir"){F1();return}if(z0.current?.has(H)){F1();return}if(I0.current?.path===H)return;F1();let R=setTimeout(()=>{I0.current={path:null,timer:0},L0.current?.(H),V((S)=>{let d=new Set(S);return d.add(H),d})},600);I0.current={path:H,timer:R}},[F1]),B_=T((H,k)=>{if($_.current={x:H,y:k},g1.current)return;g1.current=requestAnimationFrame(()=>{g1.current=0;let R=R_.current;if(!R)return;let S=$_.current;R.style.transform=`translate(${S.x+12}px, ${S.y+12}px)`})},[]),T1=T((H)=>{if(!H)return;let R=(n0.current?.get(H)?.name||H.split("/").pop()||H).trim();if(!R)return;Z0({path:H,label:R})},[]),t1=T(()=>{if(Z0(null),g1.current)cancelAnimationFrame(g1.current),g1.current=0;if(R_.current)R_.current.style.transform="translate(-9999px, -9999px)"},[]),K1=T((H)=>{if(!H)return".";let k=n0.current?.get(H);if(k&&k.type==="dir")return k.path;if(H==="."||!H.includes("/"))return".";let R=H.split("/");return R.pop(),R.join("/")||"."},[]),C1=T(()=>{D(null),W("")},[]),Q_=T((H)=>{if(!H)return;let R=(n0.current?.get(H)?.name||H.split("/").pop()||H).trim();if(!R||H===".")return;D(H),W(R)},[]),b1=T(async()=>{let H=$1.current;if(!H)return;let k=(O||"").trim();if(!k){C1();return}let R=n0.current?.get(H),S=(R?.name||H.split("/").pop()||H).trim();if(k===S){C1();return}try{let Q0=(await d6(H,k))?.path||H,G0=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(C1(),C(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:H,newPath:Q0,type:R?.type||"file"}})),R?.type==="dir")V((V0)=>{let $0=new Set;for(let P0 of V0)if(P0===H)$0.add(Q0);else if(P0.startsWith(`${H}/`))$0.add(`${Q0}${P0.slice(H.length)}`);else $0.add(P0);return $0});if(L(Q0),R?.type==="dir")E(null),I(!1),u(null);else e0.current?.(Q0);L0.current?.(G0)}catch(d){C(d?.message||"Failed to rename file")}},[C1,O]),$4=T(async(H)=>{let S=H||".";for(let d=0;d<50;d+=1){let G0=`untitled${d===0?"":`-${d}`}.md`;try{let $0=(await n6(S,G0,""))?.path||(S==="."?G0:`${S}/${G0}`);if(S&&S!==".")V((P0)=>new Set([...P0,S]));L($0),C(null),L0.current?.(S),e0.current?.($0);return}catch(V0){if(V0?.status===409||V0?.code==="file_exists")continue;C(V0?.message||"Failed to create file");return}}C("Failed to create file (untitled name already in use).")},[]),A_=T((H)=>{if(H?.stopPropagation?.(),B0)return;let k=K1(c1.current);$4(k)},[B0,K1,$4]);v(()=>{if(typeof window>"u")return;let H=(k)=>{let R=k?.detail?.updates||[];if(!Array.isArray(R)||R.length===0)return;G((V0)=>{let $0=V0;for(let P0 of R){if(!P0?.root)continue;if(!$0||P0.path==="."||!P0.path)$0=P0.root;else $0=D3($0,P0.path,P0.root)}if($0)x0.current=nQ($0,z0.current,K0.current);return o(!1),$0});let S=c1.current;if(Boolean(S)&&R.some((V0)=>{let $0=V0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)||$0.startsWith(`${S}/`)}))b0.current.clear();if(!S||!e_.current)return;let Q0=n0.current?.get(S);if(Q0&&Q0.type==="dir")return;if(R.some((V0)=>{let $0=V0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)}))e0.current?.(S)};return window.addEventListener("workspace-update",H),()=>window.removeEventListener("workspace-update",H)},[]),q1.current=_4;let j4=x(()=>{if(typeof window>"u")return;let H=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),k=m0.current??A0.current,R=document.visibilityState!=="hidden"&&(k||H.matches&&A0.current);b5(R,K0.current).catch(()=>{})}).current,D_=x(0),z4=x(()=>{if(D_.current)clearTimeout(D_.current);D_.current=setTimeout(()=>{D_.current=0,j4()},250)}).current;v(()=>{if(A0.current)q1.current?.();z4()},[$,j]),v(()=>{q1.current(),j4();let H=setInterval(()=>q1.current(),eG),k=r5("previewHeight",null),R=Number.isFinite(k)?Math.min(Math.max(k,80),600):280;if(C0.current=R,f0.current)f0.current.style.setProperty("--preview-height",`${R}px`);let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),d=()=>z4();if(S.addEventListener)S.addEventListener("change",d);else if(S.addListener)S.addListener(d);return document.addEventListener("visibilitychange",d),()=>{if(clearInterval(H),t0.current)cancelAnimationFrame(t0.current),t0.current=0;if(S.removeEventListener)S.removeEventListener("change",d);else if(S.removeListener)S.removeListener(d);if(document.removeEventListener("visibilitychange",d),D_.current)clearTimeout(D_.current),D_.current=0;if(i.current)clearTimeout(i.current),i.current=null;b5(!1,K0.current).catch(()=>{})}},[]);let E_=u0(()=>oQ(N,X,b),[N,X,b]),u_=u0(()=>new Map(E_.map((H)=>[H.node.path,H.node])),[E_]),f4=u0(()=>cQ(c0),[c0]);n0.current=u_;let Z1=(U?n0.current.get(U):null)?.type==="dir";v(()=>{if(!U||!Z1){D0(null),W0.current=null,w0.current=null;return}let H=U,k=`${b?"hidden":"visible"}:${U}`,R=b0.current,S=R.get(k);if(S?.root){R.delete(k),R.set(k,S);let G0=iQ(S.root,Boolean(S.truncated),h0);if(G0)W0.current=G0,w0.current=U,D0({loading:!1,error:null,payload:G0});return}let d=W0.current,Q0=w0.current;D0({loading:!0,error:null,payload:Q0===U?d:null}),v5(U,$X,b).then((G0)=>{if(c1.current!==H)return;let V0={root:G0?.root,truncated:Boolean(G0?.truncated)};R.delete(k),R.set(k,V0);while(R.size>jX){let P0=R.keys().next().value;if(!P0)break;R.delete(P0)}let $0=iQ(V0.root,V0.truncated,h0);W0.current=$0,w0.current=U,D0({loading:!1,error:null,payload:$0})}).catch((G0)=>{if(c1.current!==H)return;D0({loading:!1,error:G0?.message||"Failed to load folder size chart",payload:Q0===U?d:null})})},[U,Z1,b,h0]);let x1=Boolean(A&&A.kind==="text"&&!Z1&&(!A.size||A.size<=262144)),H4=x1?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",Z_=Boolean(U&&U!=="."),k_=Boolean(U&&!Z1),l1=Boolean(U&&!Z1),A1=U&&Z1?k8(U,b):null,f1=T(()=>i0(!1),[]),G1=T(async(H)=>{f1();try{await H?.()}catch(k){console.warn("[workspace-explorer] Header menu action failed:",k)}},[f1]);v(()=>{let H=O0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!H)return;if(H.innerHTML="",!U||Z1||!A||A.error)return;let k={path:U,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},R=l0.resolve(k)||l0.get("workspace-preview-default");if(!R)return;let S=R.mount(H,k);return j0.current=S,()=>{if(j0.current===S)S.dispose(),j0.current=null;H.innerHTML=""}},[U,Z1,A]);let Y_=(H)=>{let k=H?.target;if(k instanceof Element)return k;return k?.parentElement||null},q_=(H)=>{return Boolean(H?.closest?.(".workspace-node-icon, .workspace-label-text"))},K_=x((H)=>{let k=Y_(H),R=k?.closest?.("[data-path]");if(!R)return;let S=R.dataset.path;if(!S||S===".")return;let d=Boolean(k?.closest?.("button"))||Boolean(k?.closest?.("a"))||Boolean(k?.closest?.("input")),Q0=Boolean(k?.closest?.(".workspace-caret"));if(d||Q0)return;if($1.current===S)return;Q_(S)}).current,l_=x((H)=>{if(J0.current){J0.current=!1;return}let k=Y_(H),R=k?.closest?.("[data-path]");if(j1.current?.focus?.(),!R)return;let S=R.dataset.path,d=R.dataset.type,Q0=Boolean(k?.closest?.(".workspace-caret")),G0=Boolean(k?.closest?.("button"))||Boolean(k?.closest?.("a"))||Boolean(k?.closest?.("input")),V0=c1.current===S,$0=$1.current;if($0){if($0===S)return;C1()}let P0=d==="file"&&s1.current===S&&!Q0&&!G0;if(d==="dir"){if(s1.current=null,L(S),E(null),u(null),I(!1),!z0.current.has(S))L0.current?.(S);if(V0&&!Q0)return;V((e1)=>{let h1=new Set(e1);if(h1.has(S))h1.delete(S);else h1.add(S);return h1})}else{s1.current=null,L(S);let y1=n0.current.get(S);if(y1)B1.current?.(y1.path,y1);if(!G0&&!Q0&&_X(S))Q1.current?.(S,e_.current);else{let h1=!G0&&!Q0;e0.current?.(S,{autoOpen:h1})}}}).current,m1=x(()=>{x0.current="",q1.current(),Array.from(z0.current||[]).filter((k)=>k&&k!==".").forEach((k)=>L0.current?.(k))}).current,v1=x(()=>{s1.current=null,L(null),E(null),u(null),I(!1)}).current,N_=x(()=>{e((H)=>{let k=!H;if(typeof window<"u")Y1("workspaceShowHidden",String(k));return K0.current=k,b5(!0,k).catch(()=>{}),x0.current="",q1.current?.(),Array.from(z0.current||[]).filter((S)=>S&&S!==".").forEach((S)=>L0.current?.(S)),k})}).current,f_=x((H)=>{if(Y_(H)?.closest?.("[data-path]"))return;v1()}).current,z1=T(async(H)=>{if(!H)return;let k=H.split("/").pop()||H;if(!window.confirm(`Delete "${k}"? This cannot be undone.`))return;try{await r6(H);let S=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(c1.current===H)v1();L0.current?.(S),C(null)}catch(S){E((d)=>({...d||{},error:S.message||"Failed to delete file"}))}},[v1]),M_=T((H)=>{let k=j1.current;if(!k||!H||typeof CSS>"u"||typeof CSS.escape!=="function")return;k.querySelector(`[data-path="${CSS.escape(H)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),X1=T((H)=>{let k=E_;if(!k||k.length===0)return;let R=U?k.findIndex((S)=>S.node.path===U):-1;if(H.key==="ArrowDown"){H.preventDefault();let S=Math.min(R+1,k.length-1),d=k[S];if(!d)return;if(L(d.node.path),d.node.type!=="dir")B1.current?.(d.node.path,d.node),e0.current?.(d.node.path);else E(null),I(!1),u(null);M_(d.node.path);return}if(H.key==="ArrowUp"){H.preventDefault();let S=R<=0?0:R-1,d=k[S];if(!d)return;if(L(d.node.path),d.node.type!=="dir")B1.current?.(d.node.path,d.node),e0.current?.(d.node.path);else E(null),I(!1),u(null);M_(d.node.path);return}if(H.key==="ArrowRight"&&R>=0){let S=k[R];if(S?.node?.type==="dir"&&!X.has(S.node.path))H.preventDefault(),L0.current?.(S.node.path),V((d)=>new Set([...d,S.node.path]));return}if(H.key==="ArrowLeft"&&R>=0){let S=k[R];if(S?.node?.type==="dir"&&X.has(S.node.path))H.preventDefault(),V((d)=>{let Q0=new Set(d);return Q0.delete(S.node.path),Q0});return}if(H.key==="Enter"&&R>=0){H.preventDefault();let S=k[R];if(!S)return;let d=S.node.path;if(S.node.type==="dir"){if(!z0.current.has(d))L0.current?.(d);V((G0)=>{let V0=new Set(G0);if(V0.has(d))V0.delete(d);else V0.add(d);return V0}),E(null),u(null),I(!1)}else B1.current?.(d,S.node),e0.current?.(d);return}if((H.key==="Delete"||H.key==="Backspace")&&R>=0){let S=k[R];if(!S||S.node.type==="dir")return;H.preventDefault(),z1(S.node.path);return}if(H.key==="Escape")H.preventDefault(),v1()},[v1,z1,X,E_,M_,U]),v_=T((H)=>{let k=Y_(H),R=k?.closest?.(".workspace-row");if(!R)return;let S=R.dataset.type,d=R.dataset.path;if(!d||d===".")return;if($1.current===d)return;let Q0=H?.touches?.[0];if(!Q0)return;if(H0.current={path:q_(k)?d:null,dragging:!1,startX:Q0.clientX,startY:Q0.clientY},S!=="file")return;if(i.current)clearTimeout(i.current);i.current=setTimeout(()=>{if(i.current=null,H0.current?.dragging)return;z1(d)},600)},[z1]),I_=T(()=>{if(i.current)clearTimeout(i.current),i.current=null;let H=H0.current;if(H?.dragging&&H.path){let k=N1.current||M1(),R=o1.current;if(typeof R==="function")R(H.path,k)}H0.current={path:null,dragging:!1,startX:0,startY:0},_1.current=0,a(!1),_0(null),W1(null),F1(),t1()},[M1,t1,W1,F1]),g4=T((H)=>{let k=H0.current,R=H?.touches?.[0];if(!R||!k?.path){if(i.current)clearTimeout(i.current),i.current=null;return}let S=Math.abs(R.clientX-k.startX),d=Math.abs(R.clientY-k.startY),Q0=S>8||d>8;if(Q0&&i.current)clearTimeout(i.current),i.current=null;if(!k.dragging&&Q0)k.dragging=!0,a(!0),_0("move"),T1(k.path);if(k.dragging){H.preventDefault(),B_(R.clientX,R.clientY);let G0=document.elementFromPoint(R.clientX,R.clientY),V0=a1(G0)||M1();if(N1.current!==V0)W1(V0);L_(V0)}},[a1,M1,T1,B_,W1,L_]),b4=x((H)=>{H.preventDefault();let k=f0.current;if(!k)return;let R=H.clientY,S=C0.current||280,d=H.currentTarget;d.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Q0=R,G0=($0)=>{Q0=$0.clientY;let P0=k.clientHeight-80,y1=Math.min(Math.max(S-($0.clientY-R),80),P0);k.style.setProperty("--preview-height",`${y1}px`),C0.current=y1},V0=()=>{let $0=k.clientHeight-80,P0=Math.min(Math.max(S-(Q0-R),80),$0);C0.current=P0,d.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("previewHeight",String(Math.round(P0))),document.removeEventListener("mousemove",G0),document.removeEventListener("mouseup",V0)};document.addEventListener("mousemove",G0),document.addEventListener("mouseup",V0)}).current,g_=x((H)=>{H.preventDefault();let k=f0.current;if(!k)return;let R=H.touches[0];if(!R)return;let S=R.clientY,d=C0.current||280,Q0=H.currentTarget;Q0.classList.add("dragging"),document.body.style.userSelect="none";let G0=($0)=>{let P0=$0.touches[0];if(!P0)return;$0.preventDefault();let y1=k.clientHeight-80,e1=Math.min(Math.max(d-(P0.clientY-S),80),y1);k.style.setProperty("--preview-height",`${e1}px`),C0.current=e1},V0=()=>{Q0.classList.remove("dragging"),document.body.style.userSelect="",Y1("previewHeight",String(Math.round(C0.current||d))),document.removeEventListener("touchmove",G0),document.removeEventListener("touchend",V0),document.removeEventListener("touchcancel",V0)};document.addEventListener("touchmove",G0,{passive:!1}),document.addEventListener("touchend",V0),document.addEventListener("touchcancel",V0)}).current,b_=async()=>{if(!U)return;try{let H=await l6(U);if(H.media_id)u(H.media_id)}catch(H){E((k)=>({...k||{},error:H.message||"Failed to attach"}))}},m4=async()=>{if(!U||Z1)return;await z1(U)},Q4=(H)=>{return Array.from(H?.dataTransfer?.types||[]).includes("Files")},e4=T((H)=>{if(!Q4(H))return;if(H.preventDefault(),_1.current+=1,!k1.current)a(!0);_0("upload");let k=I1(H)||M1();W1(k),L_(k)},[M1,I1,W1,L_]),Z4=T((H)=>{if(!Q4(H))return;if(H.preventDefault(),H.dataTransfer)H.dataTransfer.dropEffect="copy";if(!k1.current)a(!0);if(u1.current!=="upload")_0("upload");let k=I1(H)||M1();if(N1.current!==k)W1(k);L_(k)},[M1,I1,W1,L_]),n_=T((H)=>{if(!Q4(H))return;if(H.preventDefault(),_1.current=Math.max(0,_1.current-1),_1.current===0)a(!1),_0(null),W1(null),F1()},[W1,F1]),n1=T(async(H,k=".")=>{let R=Array.from(H||[]);if(R.length===0)return;let S=k&&k!==""?k:".",d=S!=="."?S:"workspace root";g0(!0);try{let Q0=null;for(let G0 of R)try{Q0=await D8(G0,S)}catch(V0){let $0=V0?.status,P0=V0?.code;if($0===409||P0==="file_exists"){let y1=G0?.name||"file";if(!window.confirm(`"${y1}" already exists in ${d}. Overwrite?`))continue;Q0=await D8(G0,S,{overwrite:!0})}else throw V0}if(Q0?.path)s1.current=Q0.path,L(Q0.path),e0.current?.(Q0.path);L0.current?.(S)}catch(Q0){C(Q0.message||"Failed to upload file")}finally{g0(!1)}},[]),J4=T(async(H,k)=>{if(!H)return;let R=n0.current?.get(H);if(!R)return;let S=k&&k!==""?k:".",d=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(S===d)return;try{let G0=(await i6(H,S))?.path||H;if(R.type==="dir")V((V0)=>{let $0=new Set;for(let P0 of V0)if(P0===H)$0.add(G0);else if(P0.startsWith(`${H}/`))$0.add(`${G0}${P0.slice(H.length)}`);else $0.add(P0);return $0});if(L(G0),R.type==="dir")E(null),I(!1),u(null);else e0.current?.(G0);L0.current?.(d),L0.current?.(S)}catch(Q0){C(Q0?.message||"Failed to move entry")}},[]);o1.current=J4;let O4=T(async(H)=>{if(!Q4(H))return;H.preventDefault(),_1.current=0,a(!1),_0(null),F0(null),F1();let k=Array.from(H?.dataTransfer?.files||[]);if(k.length===0)return;let R=N1.current||I1(H)||M1();await n1(k,R)},[M1,I1,n1]),T5=T((H)=>{if(H?.stopPropagation?.(),B0)return;let k=H?.currentTarget?.dataset?.uploadTarget||".";m.current=k,Y0.current?.click()},[B0]),D1=T(()=>{if(B0)return;let H=c1.current,k=H?n0.current?.get(H):null;m.current=k?.type==="dir"?k.path:".",Y0.current?.click()},[B0]),A4=T(()=>{G1(()=>A_(null))},[G1,A_]),_5=T(()=>{G1(()=>D1())},[G1,D1]),G_=T(()=>{G1(()=>m1())},[G1,m1]),X_=T(()=>{G1(()=>N_())},[G1,N_]),Y4=T(()=>{if(!U||!x1)return;G1(()=>Q1.current?.(U,A))},[G1,U,x1,A]),h4=T(()=>{if(!U||U===".")return;G1(()=>Q_(U))},[G1,U,Q_]),p4=T(()=>{if(!U||Z1)return;G1(()=>m4())},[G1,U,Z1,m4]),$5=T(()=>{if(!U||Z1)return;G1(()=>b_())},[G1,U,Z1,b_]),q4=T(()=>{if(!A1)return;if(f1(),typeof window<"u")window.open(A1,"_blank","noopener")},[f1,A1]),x_=T(()=>{f1(),Z?.()},[f1,Z]),W_=T(()=>{f1(),Y?.()},[f1,Y]),D4=T(()=>{f1(),q?.()},[f1,q]),c4=T((H)=>{if(!H||H.button!==0)return;let k=H.currentTarget;if(!k||!k.dataset)return;let R=k.dataset.path;if(!R||R===".")return;if($1.current===R)return;let S=Y_(H);if(S?.closest?.("button, a, input, .workspace-caret"))return;if(!q_(S))return;H.preventDefault(),k0.current={path:R,dragging:!1,startX:H.clientX,startY:H.clientY};let d=(G0)=>{let V0=k0.current;if(!V0?.path)return;let $0=Math.abs(G0.clientX-V0.startX),P0=Math.abs(G0.clientY-V0.startY),y1=$0>4||P0>4;if(!V0.dragging&&y1)V0.dragging=!0,J0.current=!0,a(!0),_0("move"),T1(V0.path),B_(G0.clientX,G0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(V0.dragging){G0.preventDefault(),B_(G0.clientX,G0.clientY);let e1=document.elementFromPoint(G0.clientX,G0.clientY),h1=a1(e1)||M1();if(N1.current!==h1)W1(h1);L_(h1)}},Q0=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",Q0);let G0=k0.current;if(G0?.dragging&&G0.path){let V0=N1.current||M1(),$0=o1.current;if(typeof $0==="function")$0(G0.path,V0)}k0.current={path:null,dragging:!1,startX:0,startY:0},_1.current=0,a(!1),_0(null),W1(null),F1(),t1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{J0.current=!1},0)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",Q0)},[a1,M1,T1,B_,t1,W1,L_,F1]),T_=T(async(H)=>{let k=Array.from(H?.target?.files||[]);if(k.length===0)return;let R=m.current||".";if(await n1(k,R),m.current=".",H?.target)H.target.value=""},[n1]);return B`
        <aside
            class=${`workspace-sidebar${p?" workspace-drop-active":""}`}
            data-workspace-scale=${c0}
            ref=${f0}
            onDragEnter=${e4}
            onDragOver=${Z4}
            onDragLeave=${n_}
            onDrop=${O4}
        >
            <input type="file" multiple style="display:none" ref=${Y0} onChange=${T_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${s}
                            class=${`workspace-menu-button${E0?" active":""}`}
                            onClick=${(H)=>{H.stopPropagation(),i0((k)=>!k)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${E0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${E0&&B`
                            <div class="workspace-menu-dropdown" ref=${y} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${A4} disabled=${B0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${_5} disabled=${B0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${G_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${b?" active":""}`} role="menuitem" onClick=${X_}>
                                    ${b?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&B`<div class="workspace-menu-separator"></div>`}
                                ${U&&!Z1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y4} disabled=${!x1}>Open in editor</button>
                                `}
                                ${Z_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h4}>Rename selected</button>
                                `}
                                ${l1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${$5}>Download selected file</button>
                                `}
                                ${A1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q4}>Download selected folder (zip)</button>
                                `}
                                ${k_&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${p4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&B`<div class="workspace-menu-separator"></div>`}
                                ${Z&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${W_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${D4}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${A_} title="New file" disabled=${B0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${m1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${f_}>
                ${B0&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${c&&B`<div class="workspace-loading">Loading…</div>`}
                ${z&&B`<div class="workspace-error">${z}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${j1}
                        tabIndex="0"
                        onClick=${l_}
                        onDblClick=${K_}
                        onKeyDown=${X1}
                        onTouchStart=${v_}
                        onTouchEnd=${I_}
                        onTouchMove=${g4}
                        onTouchCancel=${I_}
                    >
                        ${E_.map(({node:H,depth:k})=>{let R=H.type==="dir",S=H.path===U,d=H.path===J,Q0=R&&X.has(H.path),G0=N0&&H.path===N0,V0=Array.isArray(H.children)&&H.children.length>0?H.children.length:Number(H.child_count)||0;return B`
                                <div
                                    key=${H.path}
                                    class=${`workspace-row${S?" selected":""}${G0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+k*f4.indentPx}px`}}
                                    data-path=${H.path}
                                    data-type=${H.type}
                                    onMouseDown=${c4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${R?Q0?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${R?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${R?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${d?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${r}
                                                value=${O}
                                                onInput=${($0)=>W($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),b1();else if($0.key==="Escape")$0.preventDefault(),C1()}}
                                                onBlur=${C1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${H.name}</span></span>`}
                                    ${R&&!Q0&&V0>0&&B`
                                        <span class="workspace-count">${V0}</span>
                                    `}
                                    ${R&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${H.path}
                                            title="Upload files to this folder"
                                            onClick=${T5}
                                            disabled=${B0}
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
            ${U&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${b4} onTouchStart=${g_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${A_} title="New file" disabled=${B0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!Z1&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>x1&&Q1.current?.(U,A)}
                                    title=${H4}
                                    disabled=${!x1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${m4}
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
                            ${Z1?B`
                                    <button class="workspace-download" onClick=${D1}
                                        title="Upload files to this folder" disabled=${B0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${k8(U,b)}
                                        title="Download folder as zip" onClick=${(H)=>H.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${b_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${P&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&B`<div class="workspace-error">${A.error}</div>`}
                    ${Z1&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${M0?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${M0?.error&&B`<div class="workspace-error">${M0.error}</div>`}
                        ${M0?.payload&&M0.payload.segments?.length>0&&B`
                            <${QX} payload=${M0.payload} />
                        `}
                        ${M0?.payload&&(!M0.payload.segments||M0.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!Z1&&B`
                        <div class="workspace-preview-body" ref=${O0}></div>
                    `}
                    ${f&&B`
                        <div class="workspace-download-card">
                            <${ZX} mediaId=${f} />
                        </div>
                    `}
                </div>
            `}
            ${q0&&B`
                <div class="workspace-drag-ghost" ref=${R_}>${q0.label}</div>
            `}
        </aside>
    `}var YX=new Set(["kanban-editor","mindmap-editor"]);function qX(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function ZZ(_,$,j){let Q=qX(_,$,j);return Q!=null&&YX.has(Q)}var KX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,NX=/\.(csv|tsv)$/i,GX=/\.pdf$/i,XX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,YZ=/\.drawio(\.xml|\.svg|\.png)?$/i;function qZ({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:K,onEditSource:N,previewTabs:G,paneOverrides:X,onToggleDock:V,dockVisible:U,onToggleZen:L,zenMode:J,onPopOutTab:D}){let[O,W]=g(null),A=x(null);v(()=>{if(!O)return;let z=(C)=>{if(C.type==="keydown"&&C.key!=="Escape")return;W(null)};return document.addEventListener("click",z),document.addEventListener("keydown",z),()=>{document.removeEventListener("click",z),document.removeEventListener("keydown",z)}},[O]),v(()=>{let z=(C)=>{if(C.ctrlKey&&C.key==="Tab"){if(C.preventDefault(),!_.length)return;let b=_.findIndex((e)=>e.id===$);if(C.shiftKey){let e=_[(b-1+_.length)%_.length];j?.(e.id)}else{let e=_[(b+1)%_.length];j?.(e.id)}return}if((C.ctrlKey||C.metaKey)&&C.key==="w"){let b=document.querySelector(".editor-pane");if(b&&b.contains(document.activeElement)){if(C.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[_,$,j,Q]);let E=T((z,C)=>{if(z.button===1){z.preventDefault(),Q?.(C);return}if(z.button===0)j?.(C)},[j,Q]),f=T((z,C)=>{z.preventDefault(),W({id:C,x:z.clientX,y:z.clientY})},[]),u=T((z)=>{z.preventDefault(),z.stopPropagation()},[]),c=T((z,C)=>{z.preventDefault(),z.stopPropagation(),Q?.(C)},[Q]);v(()=>{if(!$||!A.current)return;let z=A.current.querySelector(".tab-item.active");if(z)z.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let o=T((z)=>{if(!(X instanceof Map))return null;return X.get(z)||null},[X]),P=u0(()=>_.find((z)=>z.id===O?.id)||null,[O?.id,_]),I=u0(()=>{let z=O?.id;if(!z)return!1;return ZZ(z,o(z),(C)=>l0.resolve(C))},[O?.id,o]);if(!_.length)return null;return B`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((z)=>B`
                <div
                    key=${z.id}
                    class=${`tab-item${z.id===$?" active":""}${z.dirty?" dirty":""}${z.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${z.id===$}
                    title=${z.path}
                    onMouseDown=${(C)=>E(C,z.id)}
                    onContextMenu=${(C)=>f(C,z.id)}
                >
                    ${z.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${z.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${u}
                        onClick=${(C)=>c(C,z.id)}
                        title=${z.dirty?"Unsaved changes":"Close"}
                        aria-label=${z.dirty?"Unsaved changes":`Close ${z.label}`}
                    >
                        ${z.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&B`
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
            ${L&&B`
                <button
                    class=${`tab-strip-zen-toggle${J?" active":""}`}
                    onClick=${L}
                    title=${`${J?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${J?"Exit":"Enter"} zen mode`}
                    aria-pressed=${J?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${J?B`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:B`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&B`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{Q?.(O.id),W(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),W(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),W(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(O.id),W(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${I&&N&&B`
                    <button onClick=${()=>{N(O.id),W(null)}}>Edit Source</button>
                `}
                ${D&&B`
                    <button onClick=${()=>{let z=_.find((C)=>C.id===O.id);D(O.id,z?.label),W(null)}}>Open in Window</button>
                `}
                ${K&&/\.(md|mdx|markdown)$/i.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{K(O.id),W(null)}}>
                        ${G?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${KX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(O.id),C=O.id.split("/").pop()||"document",b="/office-viewer/?url="+encodeURIComponent(z)+"&name="+encodeURIComponent(C);window.open(b,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${NX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/csv-viewer/?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${GX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${XX.test(O.id)&&!YZ.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/image-viewer/?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${YZ.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/drawio/edit?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function VX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Q,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Q?" chat-only":""}${Z?" zen-mode":""}`}function KZ(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Q,chatOnlyMode:Z,zenMode:Y,isRenameBranchFormOpen:q,closeRenameCurrentBranchForm:K,handleRenameCurrentBranch:N,renameBranchNameDraft:G,renameBranchNameInputRef:X,setRenameBranchNameDraft:V,renameBranchDraftState:U,isRenamingBranch:L,addFileRef:J,openEditor:D,openTerminalTab:O,openVncTab:W,hasDockPanes:A,toggleDock:E,dockVisible:f,handleSplitterMouseDown:u,handleSplitterTouchStart:c,showEditorPaneContainer:o,tabStripTabs:P,tabStripActiveId:I,handleTabActivate:z,handleTabClose:C,handleTabCloseOthers:b,handleTabCloseAll:e,handleTabTogglePin:p,handleTabTogglePreview:a,handleTabEditSource:t,previewTabs:_0,tabPaneOverrides:q0,toggleZenMode:Z0,handlePopOutPane:N0,isWebAppMode:F0,editorContainerRef:B0,editorInstanceRef:g0,handleDockSplitterMouseDown:M0,handleDockSplitterTouchStart:D0,TERMINAL_TAB_PATH:h0,dockContainerRef:v0,handleEditorSplitterMouseDown:c0,handleEditorSplitterTouchStart:d0,searchQuery:E0,isIOSDevice:i0,currentBranchRecord:z0,currentChatJid:x0,currentChatBranches:o0,handleBranchPickerChange:t0,formatBranchPickerLabel:R1,openRenameCurrentBranchForm:q1,handlePruneCurrentBranch:n0,currentHashtag:B1,handleBackToTimeline:Q1,activeSearchScopeLabel:e0,posts:L0,isMainTimelineView:f0,hasMore:j1,loadMore:r,timelineRef:Y0,handleHashtagClick:m,addMessageRef:i,scrollToMessage:H0,openFileFromPill:k0,handleDeletePost:I0,handleOpenFloatingWidget:J0,agents:C0,userProfile:b0,removingPostIds:W0,agentStatus:w0,isCompactionStatus:O0,agentDraft:j0,agentPlan:y,agentThought:s,pendingRequest:K0,intentToast:A0,currentTurnId:m0,steerQueued:_1,handlePanelToggle:N1,btwSession:k1,closeBtwPanel:u1,handleBtwRetry:R_,handleBtwInject:$_,floatingWidget:g1,handleCloseFloatingWidget:o1,handleFloatingWidgetEvent:c1,extensionStatusPanels:$1,pendingExtensionPanelActions:s1,handleExtensionPanelAction:e_,searchOpen:j_,followupQueueItems:_4,handleInjectQueuedFollowup:c_,handleRemoveQueuedFollowup:M1,viewStateRef:a1,loadPosts:I1,scrollToBottom:W1,searchScope:F1,handleSearch:L_,setSearchScope:B_,enterSearchMode:T1,exitSearchMode:t1,fileRefs:K1,removeFileRef:C1,clearFileRefs:Q_,setFileRefsFromCompose:b1,messageRefs:$4,removeMessageRef:A_,clearMessageRefs:j4,setMessageRefsFromCompose:D_,handleCreateSessionFromCompose:z4,handleRestoreBranch:E_,attachActiveEditorFile:u_,followupQueueCount:f4,handleBtwIntercept:v4,handleMessageResponse:Z1,handleComposeSubmitError:x1,handlePopOutChat:H4,isComposeBoxAgentActive:Z_,activeChatAgents:k_,connectionStatus:l1,activeModel:A1,activeModelUsage:f1,activeThinkingLevel:G1,supportsThinking:Y_,contextUsage:q_,notificationsEnabled:K_,notificationPermission:l_,handleToggleNotifications:m1,setActiveModel:v1,applyModelState:N_,setPendingRequest:f_,pendingRequestRef:z1,toggleWorkspace:M_}=_;return B`
    <div class=${VX({workspaceOpen:j,editorOpen:Q,chatOnlyMode:Z,zenMode:Y})} ref=${$}>
      ${q&&B`
        <div class="rename-branch-overlay" onPointerDown=${(X1)=>{if(X1.target===X1.currentTarget)K()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(X1)=>{X1.preventDefault(),N(G)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${X}
              value=${G}
              onInput=${(X1)=>{let v_=X1.currentTarget?.value??"";V(String(v_))}}
              onKeyDown=${(X1)=>{if(X1.key==="Escape")X1.preventDefault(),K()}}
              autocomplete="off"
              placeholder="Handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${U.kind||"info"}`}>
              ${U.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${L||!U.canSubmit}>
                ${L?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${K}
                disabled=${L}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&B`
        <${QZ}
          onFileSelect=${J}
          visible=${j}
          active=${j||Q}
          onOpenEditor=${D}
          onOpenTerminalTab=${O}
          onOpenVncTab=${W}
          onToggleTerminal=${A?E:void 0}
          terminalVisible=${Boolean(A&&f)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${M_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${u} onTouchStart=${c}></div>
      `}
      ${o&&B`
        <div class="editor-pane-container">
          ${Y&&B`<div class="zen-hover-zone"></div>`}
          ${Q&&B`
            <${qZ}
              tabs=${P}
              activeId=${I}
              onActivate=${z}
              onClose=${C}
              onCloseOthers=${b}
              onCloseAll=${e}
              onTogglePin=${p}
              onTogglePreview=${a}
              onEditSource=${t}
              previewTabs=${_0}
              paneOverrides=${q0}
              onToggleDock=${A?E:void 0}
              dockVisible=${A&&f}
              onToggleZen=${Z0}
              zenMode=${Y}
              onPopOutTab=${F0?void 0:N0}
            />
          `}
          ${Q&&B`<div class="editor-pane-host" ref=${B0}></div>`}
          ${Q&&I&&_0.has(I)&&B`
            <${t8}
              getContent=${()=>g0.current?.getContent?.()}
              path=${I}
              onClose=${()=>a(I)}
            />
          `}
          ${A&&f&&B`<div class="dock-splitter" onMouseDown=${M0} onTouchStart=${D0}></div>`}
          ${A&&B`<div class=${`dock-panel${f?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!F0&&B`
                  <button class="dock-panel-action" onClick=${()=>N0(h0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${E} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="dock-panel-body" ref=${v0}></div>
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${c0} onTouchStart=${d0}></div>
      `}
      <div class="container">
        ${E0&&i0()&&B`<div class="search-results-spacer"></div>`}
        ${Z&&B`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${z0?.agent_name?`@${z0.agent_name}`:x0}
              </span>
              <span class="chat-window-header-subtitle">${z0?.chat_jid||x0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${o0.length>1&&B`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${x0}
                    onChange=${(X1)=>t0(X1.currentTarget.value)}
                  >
                    ${o0.map((X1)=>B`
                      <option key=${X1.chat_jid} value=${X1.chat_jid}>
                        ${R1(X1,{currentChatJid:x0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${z0?.chat_jid&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${q1}
                  title=${L?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${L}
                >
                  ${L?"Renaming…":"Rename"}
                </button>
              `}
              ${z0?.chat_jid&&z0.chat_jid!==(z0.root_chat_jid||z0.chat_jid)&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${n0}
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
        ${(B1||E0)&&B`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${Q1}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${B1?`#${B1}`:`Search: ${E0} · ${e0}`}</span>
          </div>
        `}
        <${hQ}
          posts=${L0}
          hasMore=${f0?j1:!1}
          onLoadMore=${f0?r:void 0}
          timelineRef=${Y0}
          onHashtagClick=${m}
          onMessageRef=${i}
          onScrollToMessage=${H0}
          onFileRef=${k0}
          onPostClick=${void 0}
          onDeletePost=${I0}
          onOpenWidget=${J0}
          emptyMessage=${B1?`No posts with #${B1}`:E0?`No results for "${E0}"`:void 0}
          agents=${C0}
          user=${b0}
          reverse=${f0}
          removingPostIds=${W0}
          searchQuery=${E0}
        />
        <${U3}
          status=${O0(w0)?null:w0}
          draft=${j0}
          plan=${y}
          thought=${s}
          pendingRequest=${K0}
          intent=${A0}
          turnId=${m0}
          steerQueued=${_1}
          onPanelToggle=${N1}
          showExtensionPanels=${!1}
        />
        <${AQ}
          session=${k1}
          onClose=${u1}
          onRetry=${R_}
          onInject=${$_}
        />
        <${DQ}
          widget=${g1}
          onClose=${o1}
          onWidgetEvent=${c1}
        />
        <${U3}
          extensionPanels=${Array.from($1.values())}
          pendingPanelActions=${s1}
          onExtensionPanelAction=${e_}
          turnId=${m0}
          steerQueued=${_1}
          onPanelToggle=${N1}
          showCorePanels=${!1}
        />
        <${X3}
          items=${j_?[]:_4}
          onInjectQueuedFollowup=${c_}
          onRemoveQueuedFollowup=${M1}
          onOpenFilePill=${k0}
        />
        <${OQ}
          onPost=${()=>{let{searchQuery:X1,searchOpen:v_}=a1.current||{};if(!X1&&!v_)I1(),W1()}}
          onFocus=${W1}
          searchMode=${j_}
          searchScope=${F1}
          onSearch=${L_}
          onSearchScopeChange=${B_}
          onEnterSearch=${T1}
          onExitSearch=${t1}
          fileRefs=${K1}
          onRemoveFileRef=${C1}
          onClearFileRefs=${Q_}
          onSetFileRefs=${b1}
          messageRefs=${$4}
          onRemoveMessageRef=${A_}
          onClearMessageRefs=${j4}
          onSetMessageRefs=${D_}
          onSwitchChat=${t0}
          onRenameSession=${N}
          isRenameSessionInProgress=${L}
          onCreateSession=${z4}
          onDeleteSession=${n0}
          onRestoreSession=${E_}
          activeEditorPath=${Z?null:I}
          onAttachEditorFile=${Z?void 0:u_}
          onOpenFilePill=${k0}
          followupQueueCount=${f4}
          followupQueueItems=${_4}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${c_}
          onRemoveQueuedFollowup=${M1}
          onSubmitIntercept=${v4}
          onMessageResponse=${Z1}
          onSubmitError=${x1}
          onPopOutChat=${F0?void 0:H4}
          isAgentActive=${Z_}
          activeChatAgents=${k_}
          currentChatJid=${x0}
          connectionStatus=${l1}
          activeModel=${A1}
          modelUsage=${f1}
          thinkingLevel=${G1}
          supportsThinking=${Y_}
          contextUsage=${q_}
          notificationsEnabled=${K_}
          notificationPermission=${l_}
          onToggleNotifications=${m1}
          onModelChange=${v1}
          onModelStateChange=${N_}
          statusNotice=${O0(w0)?w0:null}
        />
        <${xQ}
          request=${K0}
          onRespond=${()=>{f_(null),z1.current=null}}
        />
      </div>
    </div>
  `}function t_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function NZ(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function I3(_,$){return _&&$}function GZ(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function XZ(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function VZ(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Q=new Set(j),Z=_.filter((Y)=>!Q.has(Y?.id));return Z.length===_.length?_:Z}function UZ(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Q,dismissedQueueRowIdsRef:Z,getAgentQueueState:Y,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:K}=_,N=++j.current,G=$;Y(G).then((X)=>{if(N!==j.current)return;if(Q.current!==G)return;let V=Z.current,U=R9(X?.items,V);if(U.length){q((L)=>u9(L,U)?L:U);return}V.clear(),K(0),q((L)=>L.length===0?L:[])}).catch(()=>{if(N!==j.current)return;if(Q.current!==G)return;q((X)=>X.length===0?X:[])})}async function LZ(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Q,setContextUsage:Z}=_,Y=$;try{let q=await Q(Y);if(j.current!==Y)return;if(q)Z(q)}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch agent context:",q)}}async function BZ(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:Y}=_,q=$;try{let K=await Q(q);if(j.current!==q)return;Z((N)=>Cj(N,K)),Y((N)=>i8(N,"autoresearch"))}catch(K){if(j.current!==q)return;console.warn("Failed to fetch autoresearch status:",K)}}function WZ(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshQueueState:Z,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_;$(),j(),Q(),Z(),Y(),q()}function FZ(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Q}=_;if(t_($.current))j();Q()}function UX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function q6(_,$){return{text:_,totalLines:UX(_,$)}}function x3(_,$){return{text:$?.text||"",totalLines:F9(_),fullText:_}}function zZ(_,$,j){return j==="replace"?$:`${_||""}${$}`}function HZ(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function JZ(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function t4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function I5(_,$){return Boolean(_)&&!Boolean($)}function OZ(_,$){return _||$||null}function K6(_){return _?.turn_id||_?.turnId||null}function x5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function T3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function AZ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function LX(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function DZ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:LX($,j),panelKey:typeof $?.key==="string"?$.key:""}}function EZ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var BX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function kZ(_){return BX.has(String(_||"").trim())}function WX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function C3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(WX(_),{detail:Q})),!0}function MZ(_,$,j){let Q=$?.turn_id,Z=$?.chat_jid,Y=typeof Z==="string"&&Z.trim()?Z.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Q,eventChatJid:Y,isGlobalUiEvent:q,isCurrentChatEvent:Y?Y===j:q}}function IZ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function xZ(_,$,j){let{currentChatJid:Q,updateAgentProfile:Z,updateUserProfile:Y,currentTurnIdRef:q,activeChatJidRef:K,pendingRequestRef:N,draftBufferRef:G,thoughtBufferRef:X,steerQueuedTurnIdRef:V,thoughtExpandedRef:U,draftExpandedRef:L,draftThrottleRef:J,thoughtThrottleRef:D,viewStateRef:O,followupQueueItemsRef:W,dismissedQueueRowIdsRef:A,scrollToBottomRef:E,hasMoreRef:f,loadMoreRef:u,lastAgentResponseRef:c,wasAgentActiveRef:o,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:I,setFloatingWidget:z,clearLastActivityFlag:C,handleUiVersionDrift:b,setAgentStatus:e,setAgentDraft:p,setAgentPlan:a,setAgentThought:t,setPendingRequest:_0,clearAgentRunState:q0,getAgentStatus:Z0,noteAgentActivity:N0,showLastActivity:F0,refreshTimeline:B0,refreshModelAndQueueState:g0,refreshActiveChatAgents:M0,refreshCurrentChatBranches:D0,notifyForFinalResponse:h0,setContextUsage:v0,refreshContextUsage:c0,refreshQueueState:d0,setFollowupQueueItems:E0,clearQueuedSteerStateIfStale:i0,setSteerQueuedTurnId:z0,applyModelState:x0,getAgentContext:o0,setExtensionStatusPanels:t0,setPendingExtensionPanelActions:R1,refreshActiveEditorFromWorkspace:q1,showIntentToast:n0,removeStalledPost:B1,setPosts:Q1,preserveTimelineScrollTop:e0}=j,{turnId:L0,isCurrentChatEvent:f0}=MZ(_,$,Q);if(f0)Z($),Y($);if(_==="ui_theme"){I7($);return}let j1=AZ(_);if(j1.kind==="update"){if(!f0)return;if(j1.shouldAdoptTurn&&I5(L0,q.current))P(L0);I($,j1.fallbackStatus||"streaming");return}if(j1.kind==="close"){if(!f0)return;z((m)=>oj(m,$));return}if(_?.startsWith("agent_")&&!IZ(_))C();if(_==="connected"){if(b($?.app_asset_version))return;e(null),p({text:"",totalLines:0}),a(""),t({text:"",totalLines:0}),_0(null),N.current=null,q0();let m=Q;if(Z0(m).then((i)=>{if(K.current!==m)return;if(!i||i.status!=="active"||!i.data)return;let H0=i.data,k0=K6(H0);if(k0)P(k0);N0({clearSilence:!0}),F0(H0);let I0=x5(i.thought);if(I0)X.current=I0.text,t(I0);let J0=x5(i.draft);if(J0)G.current=J0.text,p(J0)}).catch((i)=>{console.warn("Failed to fetch agent status:",i)}),t_(O.current))B0();g0();return}if(_==="agent_status"){if(!f0){if($?.type==="done"||$?.type==="error")M0(),D0();return}if($.type==="done"||$.type==="error"){if(t4(L0,q.current))return;if($.type==="done"){if(h0(L0||q.current),t_(O.current))B0();if($.context_usage)v0($.context_usage)}if(c0(),o.current=!1,q0(),A.current.clear(),M0(),d0(),p({text:"",totalLines:0}),a(""),t({text:"",totalLines:0}),_0(null),$.type==="error")e({type:"error",title:$.title||"Agent error"}),setTimeout(()=>e(null),8000);else e(null)}else{if(L0)P(L0);if(N0({running:!0,clearSilence:!0}),$.type==="thinking")G.current="",X.current="",p({text:"",totalLines:0}),a(""),t({text:"",totalLines:0});e((m)=>{if(m&&m.type===$.type&&m.title===$.title)return m;return $})}return}if(_==="agent_steer_queued"){if(!f0)return;if(t4(L0,q.current))return;let m=OZ(L0,q.current);if(!m)return;V.current=m,z0(m);return}if(_==="agent_followup_queued"){if(!f0)return;E0((m)=>f9(m,$)),d0();return}if(_==="agent_followup_consumed"){if(!f0)return;let m=k5(W.current,$);if(m)i0(m.remainingQueueCount),E0((i)=>w4(i,m.rowId).items);if(d0(),t_(O.current))B0();return}if(_==="agent_followup_removed"){if(!f0)return;let m=k5(W.current,$);if(m)A.current.add(m.rowId),i0(m.remainingQueueCount),E0((i)=>w4(i,m.rowId).items);d0();return}if(_==="agent_draft_delta"){if(!f0)return;if(t4(L0,q.current))return;if(I5(L0,q.current))P(L0);N0({running:!0,clearSilence:!0}),G.current=HZ(G.current,$);let m=Date.now();if(!J.current||m-J.current>=100){J.current=m;let i=G.current;if(L.current)p((H0)=>x3(i,H0));else p(q6(i,null))}return}if(_==="agent_draft"){if(!f0)return;if(t4(L0,q.current))return;if(I5(L0,q.current))P(L0);N0({running:!0,clearSilence:!0});let m=$.text||"",i=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")a((H0)=>zZ(H0,m,i));else if(!L.current)G.current=m,p(q6(m,$.total_lines));return}if(_==="agent_thought_delta"){if(!f0)return;if(t4(L0,q.current))return;if(I5(L0,q.current))P(L0);N0({running:!0,clearSilence:!0}),X.current=JZ(X.current,$);let m=Date.now();if(U.current&&(!D.current||m-D.current>=100)){D.current=m;let i=X.current;t((H0)=>x3(i,H0))}return}if(_==="agent_thought"){if(!f0)return;if(t4(L0,q.current))return;if(I5(L0,q.current))P(L0);N0({running:!0,clearSilence:!0});let m=$.text||"";if(!U.current)X.current=m,t(q6(m,$.total_lines));return}if(_==="model_changed"){if(!f0)return;x0($);let m=Q;o0(m).then((i)=>{if(K.current!==m)return;if(i)v0(i)}).catch(()=>{});return}let r=DZ(_,$,Q);if(r.isStatusPanelWidgetEvent){if(r.eventChatJid!==Q)return;if(!r.panelKey)return;if(t0((m)=>Pj(m,$)),yj($))R1((m)=>i8(m,r.panelKey));C3(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));q1($?.updates);return}if(kZ(_)){if(!f0)return;C3(_,$);let m=EZ(_,$);if(m)n0(m.title,m.detail,m.kind,m.durationMs);return}let Y0=t_(O.current);if(_==="agent_response"){if(!f0)return;B1(),c.current={post:$,turnId:q.current}}if(NZ(_,f0,Y0))Q1((m)=>GZ(m,$)),E.current?.();if(_==="interaction_updated"){if(!I3(f0,Y0))return;Q1((m)=>XZ(m,$))}if(_==="interaction_deleted"){if(!I3(f0,Y0))return;let m=$?.ids||[];if(m.length){if(e0(()=>{Q1((i)=>VZ(i,m))}),f.current)u.current?.({preserveScroll:!0,preserveMode:"top"})}}}async function TZ(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Q,wasAgentActiveRef:Z,viewStateRef:Y,refreshTimeline:q,clearAgentRunState:K,agentStatusRef:N,pendingRequestRef:G,thoughtBufferRef:X,draftBufferRef:V,setAgentStatus:U,setAgentDraft:L,setAgentPlan:J,setAgentThought:D,setPendingRequest:O,setActiveTurn:W,noteAgentActivity:A,clearLastActivityFlag:E}=_,f=$;try{let u=await j(f);if(Q.current!==f)return null;if(!u||u.status!=="active"||!u.data){if(Z.current&&t_(Y.current))q();return Z.current=!1,K(),N.current=null,U(null),L({text:"",totalLines:0}),J(""),D({text:"",totalLines:0}),O(null),G.current=null,u??null}Z.current=!0;let c=u.data;N.current=c;let o=K6(c);if(o)W(o);A({running:!0,clearSilence:!0}),E(),U(c);let P=x5(u.thought);if(P)D((z)=>{if(T3(z,P.text))return z;return X.current=P.text,P});let I=x5(u.draft);if(I)L((z)=>{if(T3(z,I.text))return z;return V.current=I.text,I});return u}catch(u){return console.warn("Failed to fetch agent status:",u),null}}async function CZ(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Q,silentRecoveryRef:Z,silenceRefreshMs:Y,viewStateRef:q,refreshTimeline:K,refreshQueueState:N,refreshAgentStatus:G,now:X=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=Q.current||null,U=Z.current,L=X();if(U.inFlight)return null;if(U.turnId===V&&L-U.lastAttemptAt<Y)return null;U.inFlight=!0,U.lastAttemptAt=L,U.turnId=V;try{if(t_(q.current))await K();return await N(),await G()}finally{U.inFlight=!1}}function PZ(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Q,lastSilenceNoticeRef:Z,agentStatusRef:Y,silenceWarningMs:q,silenceFinalizeMs:K,silenceRefreshMs:N,isCompactionStatus:G,setAgentStatus:X,reconcileSilentTurn:V,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=Q.current;if(!L)return;let J=U(),D=J-L,O=G(Y.current);if(D>=K){if(!O)X({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(D>=q&&J-Z.current>=N){if(!O){let W=Math.floor(D/1000);X({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Z.current=J,V()}}function yZ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Q,minWidth:Z=160,maxWidth:Y=600,fallbackWidth:q=280}=_,K=$("sidebarWidth",null),N=Number.isFinite(K)?Math.min(Math.max(Number(K),Z),Y):q;if(j.current=N,Q)Q.style.setProperty("--sidebar-width",`${N}px`);return N}async function SZ(_){let{currentHashtag:$,searchQuery:j,searchScope:Q,currentChatJid:Z,currentRootChatJid:Y,loadPosts:q,searchPosts:K,setPosts:N,setHasMore:G,scrollToBottom:X,isCancelled:V,scheduleRaf:U=(D)=>requestAnimationFrame(D),scheduleTimeout:L=(D,O)=>{setTimeout(D,O)}}=_,J=()=>{if(V())return;U(()=>{if(V())return;L(()=>{if(V())return;X()},0)})};if($){await q($);return}if(j){try{let D=await K(j,50,0,Z,Q,Y);if(V())return;N(Array.isArray(D?.results)?D.results:[]),G(!1)}catch(D){if(V())return;console.error("Failed to search:",D),N([]),G(!1)}return}try{await q(),J()}catch(D){if(V())return;console.error("Failed to load timeline:",D)}}function wZ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Q,chatOnlyMode:Z,currentHref:Y,navigate:q}=_;if(!$)return!1;let K=typeof j==="string"?j.trim():"";if(!K||K===Q)return!1;let N=U4(Y,K,{chatOnly:Z});return q?.(N),!0}async function RZ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Q,dockInstanceRef:Z,terminalTabPath:Y}=_,K=(typeof j==="string"?j.trim():"")===$?Q.current:$===Y?Z.current:null;if(typeof K?.preparePopoutTransfer!=="function")return null;return await K.preparePopoutTransfer()}function uZ(_){let{panePath:$,terminalTabPath:j,dockVisible:Q,resolveTab:Z,closeTab:Y,setDockVisible:q}=_,K=Z($);if(K&&!K.dirty){Y($);return}if($===j&&Q)q(!1)}function fZ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Q,editorWidthRef:Z,dockHeightRef:Y,sidebarWidthRef:q,readStoredNumber:K}=_;if(!j||!$||!Q)return;if(!Z.current){let N=K("editorWidth",null),G=q.current||280;Z.current=Number.isFinite(N)?Number(N):G}if(Q.style.setProperty("--editor-width",`${Z.current}px`),!Y.current){let N=K("dockHeight",null);Y.current=Number.isFinite(N)?Number(N):200}Q.style.setProperty("--dock-height",`${Y.current}px`)}function P3(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Q=Array.isArray(_)?_:[];if(Q.includes(j))return Q;return[...Q,j]}function y3(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Q=$.trim();if(!Q)return j;if(!j.includes(Q))return j;return j.filter((Z)=>Z!==Q)}function S3(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Q of _){if(typeof Q!=="string")continue;let Z=Q.trim();if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function vZ(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Q,loadPosts:Z}=_;j($),Q(null),await Z($)}async function gZ(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Q,loadPosts:Z}=_;$(null),j(null),Q(null),await Z()}async function bZ(_){let{query:$,scope:j,currentChatJid:Q,currentRootChatJid:Z,searchPosts:Y,setSearchScope:q,setSearchQuery:K,setCurrentHashtag:N,setPosts:G,setHasMore:X}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let U=j==="root"||j==="all"?j:"current";q(U),K(V),N(null),G(null);try{let L=await Y(V,50,0,Q,U,Z);G(Array.isArray(L?.results)?L.results:[]),X(!1)}catch(L){console.error("Failed to search:",L),G([])}}async function mZ(_){let{post:$,posts:j,currentChatJid:Q,deletePost:Z,preserveTimelineScrollTop:Y,setPosts:q,setRemovingPostIds:K,hasMoreRef:N,loadMoreRef:G,confirm:X=(W)=>window.confirm(W),showAlert:V=(W)=>alert(W),scheduleTimeout:U=(W,A)=>{setTimeout(W,A)}}=_;if(!$)return;let L=$.id,J=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Q,D=j?.filter((W)=>W?.data?.thread_id===L&&W?.id!==L).length||0;if(D>0){if(!X(`Delete this message and its ${D} replies?`))return}let O=(W)=>{if(!W.length)return;K((A)=>{let E=new Set(A);return W.forEach((f)=>E.add(f)),E}),U(()=>{if(Y(()=>{q((A)=>A?A.filter((E)=>!W.includes(E.id)):A)}),K((A)=>{let E=new Set(A);return W.forEach((f)=>E.delete(f)),E}),N.current)G.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await Z(L,D>0,J);if(W?.ids?.length)O(W.ids)}catch(W){let A=W instanceof Error?W.message:String(W||"");if(D===0&&A.includes("Replies exist")){if(!X("Delete this message and its replies?"))return;let f=await Z(L,!0,J);if(f?.ids?.length)O(f.ids);return}console.error("Failed to delete post:",W),V(`Failed to delete message: ${A}`)}}var FX=Xj(),hZ=y6,zX=w6,HX=u6,JX=m6,OX=h6,w3=f6,R3=__(r1,"getAgentContext",null),AX=__(r1,"getAutoresearchStatus",null),DX=__(r1,"stopAutoresearch",{status:"ok"}),EX=__(r1,"dismissAutoresearch",{status:"ok"}),pZ=__(r1,"getAgentModels",{current:null,models:[]}),cZ=__(r1,"getActiveChatAgents",{chats:[]}),N6=__(r1,"getChatBranches",{chats:[]}),kX=__(r1,"renameChatBranch",null),MX=__(r1,"pruneChatBranch",null),IX=__(r1,"restoreChatBranch",null),lZ=__(r1,"getAgentQueueState",{count:0}),nZ=__(r1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),dZ=__(r1,"removeAgentQueueItem",{removed:!1}),xX=__(r1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});l0.register(s6);l0.register(P$);l0.register(C$);l0.register(y$);l0.register(S$);l0.register(w$);l0.register(u$);l0.register(f$);l0.register(g$);l0.register(h$);l0.register(p$);l0.register(A$);a6();l0.register(_$);l0.register($$);function TX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:N}=u0(()=>Lj(_),[_]),[G,X]=g("disconnected"),[V,U]=g(()=>V4()),[L,J]=g(null),[D,O]=g(null),[W,A]=g(!1),[E,f]=g("current"),[u,c]=g([]),[o,P]=g([]),[I,z]=g(null),{agentStatus:C,setAgentStatus:b,agentDraft:e,setAgentDraft:p,agentPlan:a,setAgentPlan:t,agentThought:_0,setAgentThought:q0,pendingRequest:Z0,setPendingRequest:N0,currentTurnId:F0,setCurrentTurnId:B0,steerQueuedTurnId:g0,setSteerQueuedTurnId:M0,lastAgentEventRef:D0,lastSilenceNoticeRef:h0,isAgentRunningRef:v0,draftBufferRef:c0,thoughtBufferRef:d0,pendingRequestRef:E0,stalledPostIdRef:i0,currentTurnIdRef:z0,steerQueuedTurnIdRef:x0,thoughtExpandedRef:o0,draftExpandedRef:t0}=N9(),[R1,q1]=g({}),[n0,B1]=g(null),[Q1,e0]=g(null),[L0,f0]=g(!1),[j1,r]=g(null),[Y0,m]=g([]),[i,H0]=g([]),[k0,I0]=g(null),[J0,C0]=g(()=>new Map),[b0,W0]=g(()=>new Set),[w0,O0]=g([]),[j0,y]=g(!1),[s,K0]=g(()=>Uj()),[A0,m0]=g(null),_1=x(new Set),N1=u0(()=>Y0.find((M)=>M?.chat_jid===j)||null,[Y0,j]),k1=u0(()=>i.find((M)=>M?.chat_jid===j)||N1||null,[N1,i,j]),u1=k1?.root_chat_jid||N1?.root_chat_jid||j,R_=Vj(E),[$_,g1]=g(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),o1=w0.length,c1=x(new Set),$1=x([]),s1=x(new Set),e_=x(0),j_=x({inFlight:!1,lastAttemptAt:0,turnId:null});c1.current=new Set(w0.map((M)=>M.row_id)),$1.current=w0;let{notificationsEnabled:_4,notificationPermission:c_,toggleNotifications:M1,notify:a1}=q9(),[I1,W1]=g(()=>new Set),[F1,L_]=g(()=>O5("workspaceOpen",!0)),B_=x(null),{editorOpen:T1,tabStripTabs:t1,tabStripActiveId:K1,previewTabs:C1,tabPaneOverrides:Q_,openEditor:b1,closeEditor:$4,handleTabClose:A_,handleTabActivate:j4,handleTabCloseOthers:D_,handleTabCloseAll:z4,handleTabTogglePin:E_,handleTabTogglePreview:u_,handleTabEditSource:f4,revealInExplorer:v4}=X9({onTabClosed:(M)=>B_.current?.(M)}),Z1=x(null),x1=x(null),H4=x(null),Z_=x(null),k_=l0.getDockPanes().length>0,[l1,A1]=g(!1),f1=T(()=>A1((M)=>!M),[]),G1=T(()=>{b1(i4,{label:"Terminal"})},[b1]),Y_=T(()=>{b1(W4,{label:"VNC"})},[b1]),q_=u0(()=>e9(t1,K1),[K1,t1]),K_=u0(()=>_j(Q_,K1),[Q_,K1]),l_=u0(()=>$j(q,q_,Y),[q_,q,Y]),m1=u0(()=>jj(t1,C1,K1),[C1,K1,t1]),v1=u0(()=>Qj(Y,W4),[Y]),N_=u0(()=>Zj(Y,i4,m1,v1),[v1,m1,Y]),f_=Yj(Z,Q,T1,k_,l1),[z1,M_]=g(!1),X1=x(!1),v_=T(()=>{if(!T1||Q)return;if(X1.current=l1,l1)A1(!1);M_(!0)},[T1,Q,l1]),I_=T(()=>{if(!z1)return;if(M_(!1),X1.current)A1(!0),X1.current=!1},[z1]),g4=T(()=>{if(z1)I_();else v_()},[z1,v_,I_]);v(()=>{if(z1&&!T1)I_()},[z1,T1,I_]),v(()=>{if(!Z||!Y)return;if(a0.getActiveId()===Y)return;b1(Y,q?{label:q}:void 0)},[b1,q,Z,Y]),v(()=>{let M=Z1.current;if(!M)return;if(x1.current)x1.current.dispose(),x1.current=null;let l=K1;if(!l)return;let U0={path:l,mode:"edit"},y0=(K_?l0.get(K_):null)||l0.resolve(U0)||l0.get("editor");if(!y0){M.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let X0=y0.mount(M,U0);x1.current=X0,X0.onDirtyChange?.((r0)=>{a0.setDirty(l,r0)}),X0.onSaveRequest?.(()=>{}),X0.onClose?.(()=>{$4()});let R0=a0.getViewState(l);if(R0&&typeof X0.restoreViewState==="function")requestAnimationFrame(()=>X0.restoreViewState(R0));if(typeof X0.onViewStateChange==="function")X0.onViewStateChange((r0)=>{a0.saveViewState(l,r0)});return requestAnimationFrame(()=>X0.focus()),()=>{if(x1.current===X0)X0.dispose(),x1.current=null}},[K1,K_,$4]);let b4=T(async(M)=>{let l=typeof K1==="string"?K1.trim():"",U0=x1.current;if(!l||!U0?.setContent)return;if(typeof U0.isDirty==="function"&&U0.isDirty())return;if(!(Array.isArray(M)&&M.length>0?M.some((X0)=>{let R0=Array.isArray(X0?.changed_paths)?X0.changed_paths.map((V1)=>typeof V1==="string"?V1.trim():"").filter(Boolean):[];if(R0.length>0)return R0.some((V1)=>V1==="."||V1===l);let r0=typeof X0?.path==="string"?X0.path.trim():"";return!r0||r0==="."||r0===l}):!0))return;try{let X0=await g5(l,1e6,"edit"),R0=typeof X0?.text==="string"?X0.text:"",r0=typeof X0?.mtime==="string"&&X0.mtime.trim()?X0.mtime.trim():new Date().toISOString();U0.setContent(R0,r0)}catch(X0){console.warn("[workspace_update] Failed to refresh active pane:",X0)}},[K1]);v(()=>{let M=H4.current;if(Z_.current)Z_.current.dispose(),Z_.current=null;if(!M||!k_||!l1)return;let l=l0.getDockPanes()[0];if(!l){M.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let U0=l.mount(M,{mode:"view"});return Z_.current=U0,requestAnimationFrame(()=>U0.focus?.()),()=>{if(Z_.current===U0)U0.dispose(),Z_.current=null}},[k_,l1]);let[g_,b_]=g({name:"You",avatar_url:null,avatar_background:null}),m4=x(null),Q4=x(!1),e4=x(!1),Z4=x(!1),n_=x(null),n1=x(j),J4=x(new Map),O4=x(j),T5=x(0),D1=x(0),A4=x({}),_5=x({name:null,avatar_url:null}),G_=x({currentHashtag:null,searchQuery:null,searchOpen:!1}),X_=x(null),Y4=x(null),h4=x(0),p4=x(0),$5=x(0),q4=x(null),x_=x(null),W_=x(null),D4=x(null),c4=x(0),T_=x({title:null,avatarBase:null}),H=x(null),k=x(!1),[R,S]=g(!1),d=x(0),[Q0,G0]=g(!1),[V0,$0]=g(""),P0=u0(()=>c8(V0,k1?.agent_name||""),[k1?.agent_name,V0]),y1=x(null),e1=T(()=>{if(H.current)clearTimeout(H.current),H.current=null;z(null)},[]);W9(30000),v(()=>{if(!Q0)return;requestAnimationFrame(()=>{if(Q0)y1.current?.focus(),y1.current?.select?.()})},[Q0]),v(()=>{return M7()},[]),v(()=>{return r9(U)},[]),v(()=>{Y1("workspaceOpen",String(F1))},[F1]),v(()=>{return i9()},[]),v(()=>{return()=>{e1()}},[e1]),v(()=>{if(!s){Y1(BTW_SESSION_KEY,"");return}Y1(BTW_SESSION_KEY,JSON.stringify({question:s.question||"",answer:s.answer||"",thinking:s.thinking||"",error:s.error||null,status:s.status||"success"}))},[s]),v(()=>{A4.current=R1||{}},[R1]),v(()=>{n1.current=j},[j]),v(()=>{_5.current=g_||{name:"You",avatar_url:null,avatar_background:null}},[g_]);let h1=T((M,l,U0=null)=>{if(typeof document>"u")return;let y0=(M||"").trim()||"PiClaw";if(T_.current.title!==y0){document.title=y0;let F_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(F_&&F_.getAttribute("content")!==y0)F_.setAttribute("content",y0);T_.current.title=y0}let X0=document.getElementById("dynamic-favicon");if(!X0)return;let R0=X0.getAttribute("data-default")||X0.getAttribute("href")||"/favicon.ico",r0=l||R0,V1=l?`${r0}|${U0||""}`:r0;if(T_.current.avatarBase!==V1){let F_=l?`${r0}${r0.includes("?")?"&":"?"}v=${U0||Date.now()}`:r0;X0.setAttribute("href",F_),T_.current.avatarBase=V1}},[]),C5=T((M)=>{c((l)=>P3(l,M))},[]),F=T((M)=>{c((l)=>y3(l,M))},[]);B_.current=F;let w=T(()=>{c([])},[]),n=T((M)=>{c(S3(M))},[]),h=T((M,l=null,U0="info",y0=3000)=>{e1(),z({title:M,detail:l||null,kind:U0||"info"}),H.current=setTimeout(()=>{z((X0)=>X0?.title===M?null:X0)},y0)},[e1]),T0=T((M)=>{let l=H9(M,{editorOpen:T1,resolvePane:(U0)=>l0.resolve(U0)});if(l.kind==="open"){b1(l.path);return}if(l.kind==="toast")h(l.title,l.detail,l.level)},[T1,b1,h]),H1=T(()=>{let M=K1;if(M)C5(M)},[K1,C5]),P1=T((M)=>{P((l)=>P3(l,M))},[]),S1=T(async(M,l=null)=>{let U0=(X0)=>{X0.scrollIntoView({behavior:"smooth",block:"center"}),X0.classList.add("post-highlight"),setTimeout(()=>X0.classList.remove("post-highlight"),2000)},y0=document.getElementById("post-"+M);if(y0){U0(y0);return}try{let X0=typeof l==="string"&&l.trim()?l.trim():j,r0=(await S6(M,X0))?.thread?.[0];if(!r0)return;P_((V1)=>{if(!V1)return[r0];if(V1.some((F_)=>F_.id===r0.id))return V1;return[...V1,r0]}),requestAnimationFrame(()=>{setTimeout(()=>{let V1=document.getElementById("post-"+M);if(V1)U0(V1)},50)})}catch(X0){console.error("[scrollToMessage] Failed to fetch message",M,X0)}},[j]),K4=T((M)=>{P((l)=>y3(l,M))},[]),l4=T(()=>{P([])},[]),j5=T((M)=>{P(S3(M))},[]),Q5=T((M)=>{let l=typeof M==="string"&&M.trim()?M.trim():"Could not send your message.";h("Compose failed",l,"error",5000)},[h]),N4=T((M={})=>{let l=Date.now();if(D0.current=l,M.running)v0.current=!0,y((U0)=>U0?U0:!0);if(M.clearSilence)h0.current=0},[y]),p1=T(()=>{if(D4.current)clearTimeout(D4.current),D4.current=null;c4.current=0},[]);v(()=>()=>{p1()},[p1]);let Z5=T(()=>{p1(),b((M)=>{if(!M)return M;if(!(M.last_activity||M.lastActivity))return M;let{last_activity:l,lastActivity:U0,...y0}=M;return y0})},[p1]),E4=T((M)=>{if(!M)return;p1();let l=Date.now();c4.current=l,b({type:M.type||"active",last_activity:!0}),D4.current=setTimeout(()=>{if(c4.current!==l)return;b((U0)=>{if(!U0||!(U0.last_activity||U0.lastActivity))return U0;return null})},U9)},[p1]),J1=T(()=>{v0.current=!1,y(!1),D0.current=null,h0.current=0,c0.current="",d0.current="",E0.current=null,x_.current=null,z0.current=null,x0.current=null,n_.current=null,j_.current={inFlight:!1,lastAttemptAt:0,turnId:null},p1(),B0(null),M0(null),o0.current=!1,t0.current=!1},[p1,B0,M0,y]),d_=T((M)=>{if(!k9({remainingQueueCount:M,currentTurnId:z0.current,isAgentTurnActive:j0}))return;x0.current=null,M0(null)},[j0,M0]),Y5=T(()=>xj({agentStatus:C,agentDraft:e,agentPlan:a,agentThought:_0,pendingRequest:Z0,currentTurnId:F0,steerQueuedTurnId:g0,isAgentTurnActive:j0,followupQueueItems:w0,activeModel:n0,activeThinkingLevel:Q1,supportsThinking:L0,activeModelUsage:j1,contextUsage:k0,isAgentRunning:v0.current,wasAgentActive:Z4.current,draftBuffer:c0.current,thoughtBuffer:d0.current,lastAgentEvent:D0.current,lastSilenceNotice:h0.current,lastAgentResponse:x_.current,currentTurnIdRef:z0.current,steerQueuedTurnIdRef:x0.current,thoughtExpanded:o0.current,draftExpanded:t0.current,agentStatusRef:n_.current,silentRecovery:j_.current}),[n0,j1,Q1,e,a,C,_0,k0,F0,w0,j0,Z0,g0,L0]),Y8=T((M)=>{Tj({snapshot:M,clearLastActivityTimer:p1,refs:{isAgentRunningRef:v0,wasAgentActiveRef:Z4,lastAgentEventRef:D0,lastSilenceNoticeRef:h0,draftBufferRef:c0,thoughtBufferRef:d0,pendingRequestRef:E0,lastAgentResponseRef:x_,currentTurnIdRef:z0,steerQueuedTurnIdRef:x0,agentStatusRef:n_,silentRecoveryRef:j_,thoughtExpandedRef:o0,draftExpandedRef:t0},setters:{setIsAgentTurnActive:y,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:q0,setPendingRequest:N0,setCurrentTurnId:B0,setSteerQueuedTurnId:M0,setFollowupQueueItems:O0,setActiveModel:B1,setActiveThinkingLevel:e0,setSupportsThinking:f0,setActiveModelUsage:r,setContextUsage:I0}})},[p1,B0,O0,y,M0]),q5=T((M)=>{if(!M)return;if(z0.current===M)return;z0.current=M,j_.current={inFlight:!1,lastAttemptAt:0,turnId:M},B0(M),x0.current=null,M0(null),c0.current="",d0.current="",p({text:"",totalLines:0}),t(""),q0({text:"",totalLines:0}),N0(null),E0.current=null,x_.current=null,o0.current=!1,t0.current=!1},[B0,M0]),k4=T((M)=>{if(typeof document<"u"){let F_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&F_)return}let l=x_.current;if(!l||!l.post)return;if(M&&l.turnId&&l.turnId!==M)return;let U0=l.post;if(U0.id&&q4.current===U0.id)return;let y0=String(U0?.data?.content||"").trim();if(!y0)return;q4.current=U0.id||q4.current,x_.current=null;let X0=y0.replace(/\s+/g," ").slice(0,200),R0=A4.current||{},V1=(U0?.data?.agent_id?R0[U0.data.agent_id]:null)?.name||"Pi";a1(V1,X0)},[a1]),C_=T(async(M,l)=>{await z9({panelKey:M,expanded:l,currentTurnIdRef:z0,thoughtExpandedRef:o0,draftExpandedRef:t0,setAgentThoughtVisibility:OX,getAgentThought:JX,thoughtBufferRef:d0,draftBufferRef:c0,setAgentThought:q0,setAgentDraft:p})},[]),M4=x(null),P5=T(()=>{let M=X_.current;if(!M)return;if(!(Math.abs(M.scrollTop)>150))M.scrollTop=0},[]);M4.current=P5;let G6=T((M)=>{let l=X_.current;if(!l||typeof M!=="function"){M?.();return}let{currentHashtag:U0,searchQuery:y0,searchOpen:X0}=G_.current||{},R0=!((y0||X0)&&!U0),r0=R0?l.scrollHeight-l.scrollTop:l.scrollTop;M(),requestAnimationFrame(()=>{let V1=X_.current;if(!V1)return;if(R0){let F_=Math.max(V1.scrollHeight-r0,0);V1.scrollTop=F_}else{let F_=Math.max(V1.scrollHeight-V1.clientHeight,0),IY=Math.min(r0,F_);V1.scrollTop=IY}})},[]),q8=T((M)=>{let l=X_.current;if(!l||typeof M!=="function"){M?.();return}let U0=l.scrollTop;M(),requestAnimationFrame(()=>{let y0=X_.current;if(!y0)return;let X0=Math.max(y0.scrollHeight-y0.clientHeight,0);y0.scrollTop=Math.min(U0,X0)})},[]),u3=T((M)=>w9(M,c1.current),[]),{posts:K8,setPosts:P_,hasMore:iZ,setHasMore:X6,hasMoreRef:f3,loadPosts:i_,refreshTimeline:y_,loadMore:rZ,loadMoreRef:v3}=K9({preserveTimelineScroll:G6,preserveTimelineScrollTop:q8,chatJid:j}),K5=u0(()=>u3(K8),[K8,w0,u3]),N8=T(()=>{let M=i0.current;if(!M)return;P_((l)=>l?l.filter((U0)=>U0.id!==M):l),i0.current=null},[P_]),{handleSplitterMouseDown:oZ,handleSplitterTouchStart:sZ,handleEditorSplitterMouseDown:aZ,handleEditorSplitterTouchStart:tZ,handleDockSplitterMouseDown:eZ,handleDockSplitterTouchStart:_Y}=G9({appShellRef:Y4,sidebarWidthRef:h4,editorWidthRef:p4,dockHeightRef:$5}),g3=T(()=>{if(!v0.current)return;v0.current=!1,h0.current=0,D0.current=null,z0.current=null,B0(null),o0.current=!1,t0.current=!1;let M=(c0.current||"").trim();if(c0.current="",d0.current="",p({text:"",totalLines:0}),t(""),q0({text:"",totalLines:0}),N0(null),E0.current=null,x_.current=null,!M){b({type:"error",title:"Response stalled - No content received"});return}let U0=`${M}${`

⚠️ Response may be incomplete - the model stopped responding`}`,y0=Date.now(),X0=new Date().toISOString(),R0={id:y0,timestamp:X0,data:{type:"agent_response",content:U0,agent_id:"default",is_local_stall:!0}};i0.current=y0,P_((r0)=>r0?_8([...r0,R0]):[R0]),M4.current?.(),b(null)},[B0]);v(()=>{G_.current={currentHashtag:L,searchQuery:D,searchOpen:W}},[L,D,W]);let E1=T(()=>{UZ({currentChatJid:j,queueRefreshGenRef:e_,activeChatJidRef:n1,dismissedQueueRowIdsRef:s1,getAgentQueueState:lZ,setFollowupQueueItems:O0,clearQueuedSteerStateIfStale:d_})},[d_,j]),V_=T(async()=>{await LZ({currentChatJid:j,activeChatJidRef:n1,getAgentContext:R3,setContextUsage:I0})},[j]),r_=T(async()=>{await BZ({currentChatJid:j,activeChatJidRef:n1,getAutoresearchStatus:AX,setExtensionStatusPanels:C0,setPendingExtensionPanelActions:W0})},[j]),o_=T(async()=>{return await TZ({currentChatJid:j,getAgentStatus:w3,activeChatJidRef:n1,wasAgentActiveRef:Z4,viewStateRef:G_,refreshTimeline:y_,clearAgentRunState:J1,agentStatusRef:n_,pendingRequestRef:E0,thoughtBufferRef:d0,draftBufferRef:c0,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:q0,setPendingRequest:N0,setActiveTurn:q5,noteAgentActivity:N4,clearLastActivityFlag:Z5})},[J1,Z5,j,N4,y_,q5]),b3=T(async()=>{return await CZ({isAgentRunningRef:v0,pendingRequestRef:E0,currentTurnIdRef:z0,silentRecoveryRef:j_,silenceRefreshMs:n$,viewStateRef:G_,refreshTimeline:y_,refreshQueueState:E1,refreshAgentStatus:o_})},[o_,E1,y_]);v(()=>{let M=Math.min(1000,Math.max(100,Math.floor(l$/2))),l=setInterval(()=>{PZ({isAgentRunningRef:v0,pendingRequestRef:E0,lastAgentEventRef:D0,lastSilenceNoticeRef:h0,agentStatusRef:n_,silenceWarningMs:l$,silenceFinalizeMs:V9,silenceRefreshMs:n$,isCompactionStatus:S4,setAgentStatus:b,reconcileSilentTurn:b3})},M);return()=>clearInterval(l)},[b3]);let m3=T((M)=>{return Bj({serverVersion:M,currentAppAssetVersion:FX,staleUiVersionRef:m4,staleUiReloadScheduledRef:Q4,tabStoreHasUnsaved:()=>a0.hasUnsaved(),isAgentRunningRef:v0,pendingRequestRef:E0,showIntentToast:h})},[v0,E0,h]),$Y=T((M)=>{Wj({status:M,setConnectionStatus:X,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:q0,setPendingRequest:N0,pendingRequestRef:E0,clearAgentRunState:J1,hasConnectedOnceRef:e4,viewStateRef:G_,refreshTimeline:y_,refreshAgentStatus:o_,refreshQueueState:E1,refreshContextUsage:V_})},[J1,y_,o_,E1,V_]),jY=T(async(M)=>{await vZ({hashtag:M,setCurrentHashtag:J,setPosts:P_,loadPosts:i_})},[i_]),QY=T(async()=>{await gZ({setCurrentHashtag:J,setSearchQuery:O,setPosts:P_,loadPosts:i_})},[i_]),ZY=T(async(M,l=E)=>{await bZ({query:M,scope:l,currentChatJid:j,currentRootChatJid:u1,searchPosts:hZ,setSearchScope:f,setSearchQuery:O,setCurrentHashtag:J,setPosts:P_,setHasMore:X6})},[j,u1,E]),YY=T(()=>{A(!0),O(null),J(null),f("current"),P_([])},[]),qY=T(()=>{A(!1),O(null),i_()},[i_]),PX=T(()=>{},[]),KY=!L&&!D&&!W,NY=T(async(M)=>{await mZ({post:M,posts:K5,currentChatJid:j,deletePost:zX,preserveTimelineScrollTop:q8,setPosts:P_,setRemovingPostIds:W1,hasMoreRef:f3,loadMoreRef:v3})},[j,K5,q8]),h3=T(async()=>{await g9({getAgents:HX,setAgents:q1,setUserProfile:b_,applyBranding:h1})},[h1]);v(()=>{h3(),yZ({readStoredNumber:r5,sidebarWidthRef:h4,shellElement:Y4.current})},[h3]);let y5=j0||C!==null,p3=T((M)=>{b9({payload:M,agentsRef:A4,setAgents:q1,applyBranding:h1})},[h1]),c3=T((M)=>{m9({payload:M,setUserProfile:b_})},[]),S5=T((M)=>{h9({payload:M,setActiveModel:B1,setActiveThinkingLevel:e0,setSupportsThinking:f0,setActiveModelUsage:r})},[]),G8=T(()=>{p9({currentChatJid:j,getAgentModels:pZ,activeChatJidRef:n1,applyModelState:S5})},[S5,j]),d1=T(()=>{c9({currentChatJid:j,getActiveChatAgents:cZ,getChatBranches:N6,activeChatJidRef:n1,setActiveChatAgents:m})},[j]),i1=T(()=>{l9({currentRootChatJid:u1,getChatBranches:N6,setCurrentChatBranches:H0})},[u1]),GY=T((M)=>{NQ({queuedItem:M,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:s1,currentChatJid:j,refreshQueueState:E1,setFollowupQueueItems:O0,showIntentToast:h,steerAgentQueueItem:nZ,removeAgentQueueItem:dZ})},[j,E1,O0,h]),XY=T((M)=>{GQ({queuedItem:M,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:s1,currentChatJid:j,refreshQueueState:E1,setFollowupQueueItems:O0,showIntentToast:h,clearQueuedSteerStateIfStale:d_,steerAgentQueueItem:nZ,removeAgentQueueItem:dZ})},[d_,j,E1,O0,h]),w5=T((M)=>{n9({response:M,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,refreshContextUsage:V_,refreshAutoresearchStatus:r_,refreshQueueState:E1})},[d1,r_,i1,V_,E1]),VY=T(async(M,l)=>{let U0=typeof M?.key==="string"?M.key:"",y0=typeof l?.key==="string"?l.key:"",X0=e$(U0,y0);if(!U0||!y0)return;W0((R0)=>Sj(R0,U0,y0));try{let R0=await Rj({panel:M,action:l,currentChatJid:j,stopAutoresearch:DX,dismissAutoresearch:EX,writeClipboard:(r0)=>navigator.clipboard.writeText(r0)});if(R0.refreshAutoresearchStatus)r_();if(R0.toast)h(R0.toast.title,R0.toast.detail,R0.toast.kind,R0.toast.durationMs)}catch(R0){h("Panel action failed",R0?.message||"Could not complete that action.","warning")}finally{W0((R0)=>wj(R0,X0))}},[j,r_,h]),V6=T(()=>{if(W_.current)W_.current.abort(),W_.current=null;K0(null)},[]),X8=T(async(M)=>{let l=String(M||"").trim();if(!l)return h("BTW needs a question","Usage: /btw <question>","warning"),!0;if(W_.current)W_.current.abort();let U0=new AbortController;W_.current=U0,K0({question:l,answer:"",thinking:"",error:null,model:null,status:"running"});try{let y0=await xX(l,{signal:U0.signal,chatJid:O9(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(X0,R0)=>{if(X0==="side_prompt_start")K0((r0)=>r0?{...r0,status:"running"}:r0)},onThinkingDelta:(X0)=>{K0((R0)=>R0?{...R0,thinking:`${R0.thinking||""}${X0||""}`}:R0)},onTextDelta:(X0)=>{K0((R0)=>R0?{...R0,answer:`${R0.answer||""}${X0||""}`}:R0)}});if(W_.current!==U0)return!0;K0((X0)=>X0?{...X0,answer:y0?.result||X0.answer||"",thinking:y0?.thinking||X0.thinking||"",model:y0?.model||null,status:"success",error:null}:X0)}catch(y0){if(U0.signal.aborted)return!0;K0((X0)=>X0?{...X0,status:"error",error:y0?.payload?.error||y0?.message||"BTW request failed."}:X0)}finally{if(W_.current===U0)W_.current=null}return!0},[j,h]),UY=T(async({content:M})=>{let l=J9(M);if(!l)return!1;if(l.type==="help")return h("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(l.type==="clear")return V6(),h("BTW cleared","Closed the side conversation panel.","info"),!0;if(l.type==="ask")return await X8(l.question),!0;return!1},[V6,X8,h]),LY=T(()=>{if(s?.question)X8(s.question)},[s,X8]),BY=T(async()=>{let M=E9(s);if(!M)return;try{let l=await d4("default",M,null,[],y5?"queue":null,j);w5(l),h(l?.queued==="followup"?"BTW queued":"BTW injected",l?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(l){h("BTW inject failed",l?.message||"Could not inject BTW answer into chat.","warning")}},[s,w5,y5,h]),l3=T(async(M=null)=>{return KQ({requestPayload:M,currentChatJid:j,currentRootChatJid:u1,getAgentStatus:w3,getAgentContext:R3,getAgentQueueState:lZ,getAgentModels:pZ,getActiveChatAgents:cZ,getChatBranches:N6,getTimeline:n4,rawPosts:K8,activeChatAgents:Y0,currentChatBranches:i,contextUsage:k0,followupQueueItems:$1.current,activeModel:n0,activeThinkingLevel:Q1,supportsThinking:L0,isAgentTurnActive:j0})},[Y0,n0,Q1,k0,i,j,u1,j0,K8,L0]),N5=T(()=>{WZ({refreshModelState:G8,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,refreshQueueState:E1,refreshContextUsage:V_,refreshAutoresearchStatus:r_})},[d1,r_,V_,i1,G8,E1]);v(()=>{N5();let M=setInterval(()=>{G8(),d1(),i1(),E1()},60000);return()=>clearInterval(M)},[N5,G8,d1,i1,E1]),v(()=>{C0(new Map),W0(new Set)},[j]),v(()=>{let M=!1;return SZ({currentHashtag:L,searchQuery:D,searchScope:E,currentChatJid:j,currentRootChatJid:u1,loadPosts:i_,searchPosts:hZ,setPosts:P_,setHasMore:X6,scrollToBottom:P5,isCancelled:()=>M}),()=>{M=!0}},[j,L,D,E,u1,i_,P5,X6,P_]),v(()=>{let M=O4.current||j;J4.current.set(M,Y5())},[j,Y5]),v(()=>{let M=O4.current||j;if(M===j)return;J4.current.set(M,Y5()),O4.current=j,s1.current.clear(),Y8(J4.current.get(j)||null),E1(),o_(),V_()},[j,o_,V_,E1,Y8,Y5]);let WY=T(()=>{FZ({viewStateRef:G_,refreshTimeline:y_,refreshModelAndQueueState:N5})},[N5,y_]),n3=T((M,l="streaming")=>{let U0=new Date().toISOString();m0((y0)=>rj(y0,M,{fallbackStatus:l,currentChatJid:j,dismissedSessionKeys:_1.current,updatedAt:U0}))},[j]),U6=T((M,l)=>{xZ(M,l,{currentChatJid:j,updateAgentProfile:p3,updateUserProfile:c3,currentTurnIdRef:z0,activeChatJidRef:n1,pendingRequestRef:E0,draftBufferRef:c0,thoughtBufferRef:d0,steerQueuedTurnIdRef:x0,thoughtExpandedRef:o0,draftExpandedRef:t0,draftThrottleRef:T5,thoughtThrottleRef:D1,viewStateRef:G_,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:s1,scrollToBottomRef:M4,hasMoreRef:f3,loadMoreRef:v3,lastAgentResponseRef:x_,wasAgentActiveRef:Z4,setActiveTurn:q5,applyLiveGeneratedWidgetUpdate:n3,setFloatingWidget:m0,clearLastActivityFlag:Z5,handleUiVersionDrift:m3,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:q0,setPendingRequest:N0,clearAgentRunState:J1,getAgentStatus:w3,noteAgentActivity:N4,showLastActivity:E4,refreshTimeline:y_,refreshModelAndQueueState:N5,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,notifyForFinalResponse:k4,setContextUsage:I0,refreshContextUsage:V_,refreshQueueState:E1,setFollowupQueueItems:O0,clearQueuedSteerStateIfStale:d_,setSteerQueuedTurnId:M0,applyModelState:S5,getAgentContext:R3,setExtensionStatusPanels:C0,setPendingExtensionPanelActions:W0,refreshActiveEditorFromWorkspace:b4,showIntentToast:h,removeStalledPost:N8,setPosts:P_,preserveTimelineScrollTop:q8})},[n3,S5,J1,Z5,d_,j,m3,N4,k4,d1,b4,V_,i1,N5,E1,y_,N8,q5,O0,h,E4,p3,c3]);v(()=>{if(typeof window>"u")return;let M=window.__PICLAW_TEST_API||{};return M.emit=U6,M.reset=()=>{N8(),J1(),b(null),p({text:"",totalLines:0}),t(""),q0({text:"",totalLines:0}),N0(null)},M.finalize=()=>g3(),window.__PICLAW_TEST_API=M,()=>{if(window.__PICLAW_TEST_API===M)window.__PICLAW_TEST_API=void 0}},[J1,g3,U6,N8]),Y9({handleSseEvent:U6,handleConnectionStatusChange:$Y,loadPosts:i_,onWake:WY,chatJid:j}),v(()=>{if(!K5||K5.length===0)return;let M=location.hash;if(!M||!M.startsWith("#msg-"))return;let l=M.slice(5);S1(l),history.replaceState(null,"",location.pathname+location.search)},[K5,S1]);let L6=C!==null;v(()=>{if(G!=="connected")return;let l=setInterval(()=>{Fj({viewStateRef:G_,isAgentActive:L6,refreshTimeline:y_,refreshQueueState:E1,refreshAgentStatus:o_,refreshContextUsage:V_,refreshAutoresearchStatus:r_})},L6?15000:60000);return()=>clearInterval(l)},[G,L6,o_,r_,V_,E1,y_]),v(()=>{return o9(()=>{o_(),V_(),E1(),r_()})},[o_,r_,V_,E1]);let FY=T(()=>{L_((M)=>!M)},[]),zY=T((M)=>{wZ({hasWindow:typeof window<"u",nextChatJid:M,currentChatJid:j,chatOnlyMode:Q,currentHref:typeof window<"u"?window.location.href:"http://localhost/",navigate:$})},[Q,j,$]),B6=T(()=>{zj({hasWindow:typeof window<"u",currentBranchRecord:k1,renameBranchInFlight:k.current,renameBranchLockUntil:d.current,getFormLock:s$,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:G0})},[k1]),W6=T(()=>{Hj({setIsRenameBranchFormOpen:G0,setRenameBranchNameDraft:$0})},[]),HY=T(async(M)=>{await Jj({hasWindow:typeof window<"u",currentBranchRecord:k1,nextName:M,openRenameForm:B6,renameBranchInFlightRef:k,renameBranchLockUntilRef:d,getFormLock:s$,setIsRenamingBranch:S,renameChatBranch:kX,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:h,closeRenameForm:W6})},[W6,k1,d1,i1,B6,S,h]),JY=T(async(M=null)=>{await Oj({hasWindow:typeof window<"u",targetChatJid:M,currentChatJid:j,currentBranchRecord:k1,currentChatBranches:i,activeChatAgents:Y0,pruneChatBranch:MX,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:h,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Y0,Q,k1,i,j,$,d1,i1,h]),OY=T(async(M)=>{await Aj({targetChatJid:M,restoreChatBranch:IX,currentChatBranches:i,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:h,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,i,$,d1,i1,h]);v(()=>{if(!K||typeof window>"u")return;let M=!1;return Dj({branchLoaderSourceChatJid:N,forkChatBranch:u5,setBranchLoaderState:g1,navigate:$,baseHref:window.location.href,isCancelled:()=>M}),()=>{M=!0}},[K,N,$]);let AY=T((M)=>{XQ({widget:M,dismissedLiveWidgetKeysRef:_1,setFloatingWidget:m0})},[]),F6=T(()=>{VQ({dismissedLiveWidgetKeysRef:_1,setFloatingWidget:m0})},[]),DY=T((M,l)=>{UQ({event:M,widget:l,currentChatJid:j,isComposeBoxAgentActive:y5,setFloatingWidget:m0,handleCloseFloatingWidget:F6,handleMessageResponse:w5,showIntentToast:h,sendAgentMessage:d4,buildFloatingWidgetDashboardSnapshot:l3})},[l3,j,F6,w5,y5,h]);v(()=>{_1.current.clear(),m0(null)},[j]);let EY=T(async()=>{await Ej({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:u5,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:h,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,d1,i1,h]),z6=T(async(M,l)=>{await kj({hasWindow:typeof window<"u",isWebAppMode:V,path:M,label:l,showIntentToast:h,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:(U0)=>RZ({panePath:U0,tabStripActiveId:K1,editorInstanceRef:x1,dockInstanceRef:Z_,terminalTabPath:i4}),closeSourcePaneIfTransferred:(U0)=>{uZ({panePath:U0,terminalTabPath:i4,dockVisible:l1,resolveTab:(y0)=>a0.get(y0),closeTab:A_,setDockVisible:A1})}})},[j,l1,A_,V,h,K1]);v(()=>s9({openTab:(M,l)=>b1(M,l?{label:l}:void 0),popOutPane:(M,l)=>{z6(M,l)}}),[z6,b1]);let kY=T(async()=>{await Mj({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:u1,forkChatBranch:u5,getActiveChatAgents:R6,getChatBranches:N6,setActiveChatAgents:m,setCurrentChatBranches:H0,showIntentToast:h,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,u1,V,h]);v(()=>{fZ({hasWindow:typeof window<"u",editorOpen:T1,shellElement:Y4.current,editorWidthRef:p4,dockHeightRef:$5,sidebarWidthRef:h4,readStoredNumber:r5})},[T1]),v(()=>{if(!k_||Q)return;return a9(f1)},[f1,k_,Q]),v(()=>{if(Q)return;return t9({toggleZenMode:g4,exitZenMode:I_,zenMode:z1,isZenModeActive:()=>z1})},[g4,I_,z1,Q]);let MY=Boolean(g0&&g0===(C?.turn_id||F0)),d3=BQ({branchLoaderMode:K,panePopoutMode:Z});if(d3==="branch-loader")return WQ($_);if(d3==="pane-popout")return FQ({appShellRef:Y4,editorOpen:T1,hidePanePopoutControls:N_,panePopoutHasMenuActions:m1,panePopoutTitle:l_,tabStripTabs:t1,tabStripActiveId:K1,handleTabActivate:j4,previewTabs:C1,handleTabTogglePreview:u_,editorContainerRef:Z1,getPaneContent:()=>x1.current?.getContent?.(),panePopoutPath:Y});return KZ({appShellRef:Y4,workspaceOpen:F1,editorOpen:T1,chatOnlyMode:Q,zenMode:z1,isRenameBranchFormOpen:Q0,closeRenameCurrentBranchForm:W6,handleRenameCurrentBranch:HY,renameBranchNameDraft:V0,renameBranchNameInputRef:y1,setRenameBranchNameDraft:$0,renameBranchDraftState:P0,isRenamingBranch:R,addFileRef:C5,openEditor:b1,openTerminalTab:G1,openVncTab:Y_,hasDockPanes:k_,toggleDock:f1,dockVisible:l1,handleSplitterMouseDown:oZ,handleSplitterTouchStart:sZ,showEditorPaneContainer:f_,tabStripTabs:t1,tabStripActiveId:K1,handleTabActivate:j4,handleTabClose:A_,handleTabCloseOthers:D_,handleTabCloseAll:z4,handleTabTogglePin:E_,handleTabTogglePreview:u_,handleTabEditSource:f4,previewTabs:C1,tabPaneOverrides:Q_,toggleZenMode:g4,handlePopOutPane:z6,isWebAppMode:V,editorContainerRef:Z1,editorInstanceRef:x1,handleDockSplitterMouseDown:eZ,handleDockSplitterTouchStart:_Y,TERMINAL_TAB_PATH:i4,dockContainerRef:H4,handleEditorSplitterMouseDown:aZ,handleEditorSplitterTouchStart:tZ,searchQuery:D,isIOSDevice:B9,currentBranchRecord:k1,currentChatJid:j,currentChatBranches:i,handleBranchPickerChange:zY,formatBranchPickerLabel:l8,openRenameCurrentBranchForm:B6,handlePruneCurrentBranch:JY,currentHashtag:L,handleBackToTimeline:QY,activeSearchScopeLabel:R_,posts:K5,isMainTimelineView:KY,hasMore:iZ,loadMore:rZ,timelineRef:X_,handleHashtagClick:jY,addMessageRef:P1,scrollToMessage:S1,openFileFromPill:T0,handleDeletePost:NY,handleOpenFloatingWidget:AY,agents:R1,userProfile:g_,removingPostIds:I1,agentStatus:C,isCompactionStatus:S4,agentDraft:e,agentPlan:a,agentThought:_0,pendingRequest:Z0,intentToast:I,currentTurnId:F0,steerQueued:MY,handlePanelToggle:C_,btwSession:s,closeBtwPanel:V6,handleBtwRetry:LY,handleBtwInject:BY,floatingWidget:A0,handleCloseFloatingWidget:F6,handleFloatingWidgetEvent:DY,extensionStatusPanels:J0,pendingExtensionPanelActions:b0,handleExtensionPanelAction:VY,searchOpen:W,followupQueueItems:w0,handleInjectQueuedFollowup:GY,handleRemoveQueuedFollowup:XY,viewStateRef:G_,loadPosts:i_,scrollToBottom:P5,searchScope:E,handleSearch:ZY,setSearchScope:f,enterSearchMode:YY,exitSearchMode:qY,fileRefs:u,removeFileRef:F,clearFileRefs:w,setFileRefsFromCompose:n,messageRefs:o,removeMessageRef:K4,clearMessageRefs:l4,setMessageRefsFromCompose:j5,handleCreateSessionFromCompose:EY,handleRestoreBranch:OY,attachActiveEditorFile:H1,followupQueueCount:o1,handleBtwIntercept:UY,handleMessageResponse:w5,handleComposeSubmitError:Q5,handlePopOutChat:kY,isComposeBoxAgentActive:y5,activeChatAgents:Y0,connectionStatus:G,activeModel:n0,activeModelUsage:j1,activeThinkingLevel:Q1,supportsThinking:L0,contextUsage:k0,notificationsEnabled:_4,notificationPermission:c_,handleToggleNotifications:M1,setActiveModel:B1,applyModelState:S5,setPendingRequest:N0,pendingRequestRef:E0,toggleWorkspace:FY})}function CX(){let[_,$]=g(()=>typeof window>"u"?"http://localhost/":window.location.href);v(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=T((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},K=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Q=u0(()=>new URL(_).searchParams,[_]);return B`<${TX} locationParams=${Q} navigate=${j} />`}T4(B`<${CX} />`,document.getElementById("app"));

//# debugId=6885FFBF8DD18A0B64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
