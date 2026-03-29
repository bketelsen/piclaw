var Sq=Object.defineProperty;var wq=(_)=>_;function Rq(_,$){this[_]=wq.bind(null,$)}var uq=(_,$)=>{for(var j in $)Sq(_,j,{get:$[j],enumerable:!0,configurable:!0,set:Rq.bind($,j)})};var Y8,N1,m3,fq,F4,T3,p3,h3,c3,q6,_6,$6,l3,$8={},j8=[],vq=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q8=Array.isArray;function j4(_,$){for(var j in $)_[j]=$[j];return _}function Q6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function Q8(_,$,j){var Z,Y,q,Q={};for(q in $)q=="key"?Z=$[q]:q=="ref"?Y=$[q]:Q[q]=$[q];if(arguments.length>2&&(Q.children=arguments.length>3?Y8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(q in _.defaultProps)Q[q]===void 0&&(Q[q]=_.defaultProps[q]);return e5(_,Q,Z,Y,null)}function e5(_,$,j,Z,Y){var q={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++m3:Y,__i:-1,__u:0};return Y==null&&N1.vnode!=null&&N1.vnode(q),q}function K8(_){return _.children}function t4(_,$){this.props=_,this.context=$}function e4(_,$){if($==null)return _.__?e4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?e4(_):null}function bq(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Y=[],q=j4({},$);q.__v=$.__v+1,N1.vnode&&N1.vnode(q),K6(_.__P,q,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?e4($):j,!!(32&$.__u),Y),q.__v=$.__v,q.__.__k[q.__i]=q,r3(Z,q,Y),$.__e=$.__=null,q.__e!=j&&n3(q)}}function n3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),n3(_)}function j6(_){(!_.__d&&(_.__d=!0)&&F4.push(_)&&!Z8.__r++||T3!=N1.debounceRendering)&&((T3=N1.debounceRendering)||p3)(Z8)}function Z8(){try{for(var _,$=1;F4.length;)F4.length>$&&F4.sort(h3),_=F4.shift(),$=F4.length,bq(_)}finally{F4.length=Z8.__r=0}}function d3(_,$,j,Z,Y,q,Q,K,G,N,X){var V,U,L,F,O,J,W,D=Z&&Z.__k||j8,E=$.length;for(G=gq(j,$,D,G,E),V=0;V<E;V++)(L=j.__k[V])!=null&&(U=L.__i!=-1&&D[L.__i]||$8,L.__i=V,J=K6(_,L,U,Y,q,Q,K,G,N,X),F=L.__e,L.ref&&U.ref!=L.ref&&(U.ref&&G6(U.ref,null,L),X.push(L.ref,L.__c||F,L)),O==null&&F!=null&&(O=F),(W=!!(4&L.__u))||U.__k===L.__k?G=i3(L,G,_,W):typeof L.type=="function"&&J!==void 0?G=J:F&&(G=F.nextSibling),L.__u&=-7);return j.__e=O,G}function gq(_,$,j,Z,Y){var q,Q,K,G,N,X=j.length,V=X,U=0;for(_.__k=Array(Y),q=0;q<Y;q++)(Q=$[q])!=null&&typeof Q!="boolean"&&typeof Q!="function"?(typeof Q=="string"||typeof Q=="number"||typeof Q=="bigint"||Q.constructor==String?Q=_.__k[q]=e5(null,Q,null,null,null):q8(Q)?Q=_.__k[q]=e5(K8,{children:Q},null,null,null):Q.constructor===void 0&&Q.__b>0?Q=_.__k[q]=e5(Q.type,Q.props,Q.key,Q.ref?Q.ref:null,Q.__v):_.__k[q]=Q,G=q+U,Q.__=_,Q.__b=_.__b+1,K=null,(N=Q.__i=mq(Q,j,G,V))!=-1&&(V--,(K=j[N])&&(K.__u|=2)),K==null||K.__v==null?(N==-1&&(Y>X?U--:Y<X&&U++),typeof Q.type!="function"&&(Q.__u|=4)):N!=G&&(N==G-1?U--:N==G+1?U++:(N>G?U--:U++,Q.__u|=4))):_.__k[q]=null;if(V)for(q=0;q<X;q++)(K=j[q])!=null&&(2&K.__u)==0&&(K.__e==Z&&(Z=e4(K)),s3(K,K));return Z}function i3(_,$,j,Z){var Y,q;if(typeof _.type=="function"){for(Y=_.__k,q=0;Y&&q<Y.length;q++)Y[q]&&(Y[q].__=_,$=i3(Y[q],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=e4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function mq(_,$,j,Z){var Y,q,Q,K=_.key,G=_.type,N=$[j],X=N!=null&&(2&N.__u)==0;if(N===null&&K==null||X&&K==N.key&&G==N.type)return j;if(Z>(X?1:0)){for(Y=j-1,q=j+1;Y>=0||q<$.length;)if((N=$[Q=Y>=0?Y--:q++])!=null&&(2&N.__u)==0&&K==N.key&&G==N.type)return Q}return-1}function y3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||vq.test($)?j:j+"px"}function t5(_,$,j,Z,Y){var q,Q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||y3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||y3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")q=$!=($=$.replace(c3,"$1")),Q=$.toLowerCase(),$=Q in _||$=="onFocusOut"||$=="onFocusIn"?Q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+q]=j,j?Z?j.u=Z.u:(j.u=q6,_.addEventListener($,q?$6:_6,q)):_.removeEventListener($,q?$6:_6,q);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function P3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=q6++;else if($.t<j.u)return;return j(N1.event?N1.event($):$)}}}function K6(_,$,j,Z,Y,q,Q,K,G,N){var X,V,U,L,F,O,J,W,D,E,S,P,g,h,x,M=$.type;if($.constructor!==void 0)return null;128&j.__u&&(G=!!(32&j.__u),q=[K=$.__e=j.__e]),(X=N1.__b)&&X($);_:if(typeof M=="function")try{if(W=$.props,D=M.prototype&&M.prototype.render,E=(X=M.contextType)&&Z[X.__c],S=X?E?E.props.value:X.__:Z,j.__c?J=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new M(W,S):($.__c=V=new t4(W,S),V.constructor=M,V.render=hq),E&&E.sub(V),V.state||(V.state={}),V.__n=Z,U=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&M.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=j4({},V.__s)),j4(V.__s,M.getDerivedStateFromProps(W,V.__s))),L=V.props,F=V.state,V.__v=$,U)D&&M.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&M.getDerivedStateFromProps==null&&W!==L&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(W,S),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(W,V.__s,S)===!1){$.__v!=j.__v&&(V.props=W,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(B){B&&(B.__=$)}),j8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(W,V.__s,S),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(L,F,O)})}if(V.context=S,V.props=W,V.__P=_,V.__e=!1,P=N1.__r,g=0,D)V.state=V.__s,V.__d=!1,P&&P($),X=V.render(V.props,V.state,V.context),j8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,P&&P($),X=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++g<25);V.state=V.__s,V.getChildContext!=null&&(Z=j4(j4({},Z),V.getChildContext())),D&&!U&&V.getSnapshotBeforeUpdate!=null&&(O=V.getSnapshotBeforeUpdate(L,F)),h=X!=null&&X.type===K8&&X.key==null?o3(X.props.children):X,K=d3(_,q8(h)?h:[h],$,j,Z,Y,q,Q,K,G,N),V.base=$.__e,$.__u&=-161,V.__h.length&&Q.push(V),J&&(V.__E=V.__=null)}catch(B){if($.__v=null,G||q!=null)if(B.then){for($.__u|=G?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;q[q.indexOf(K)]=null,$.__e=K}else{for(x=q.length;x--;)Q6(q[x]);Z6($)}else $.__e=j.__e,$.__k=j.__k,B.then||Z6($);N1.__e(B,$,j)}else q==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=pq(j.__e,$,j,Z,Y,q,Q,G,N);return(X=N1.diffed)&&X($),128&$.__u?void 0:K}function Z6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(Z6))}function r3(_,$,j){for(var Z=0;Z<j.length;Z++)G6(j[Z],j[++Z],j[++Z]);N1.__c&&N1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(q){q.call(Y)})}catch(q){N1.__e(q,Y.__v)}})}function o3(_){return typeof _!="object"||_==null||_.__b>0?_:q8(_)?_.map(o3):j4({},_)}function pq(_,$,j,Z,Y,q,Q,K,G){var N,X,V,U,L,F,O,J=j.props||$8,W=$.props,D=$.type;if(D=="svg"?Y="http://www.w3.org/2000/svg":D=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),q!=null){for(N=0;N<q.length;N++)if((L=q[N])&&"setAttribute"in L==!!D&&(D?L.localName==D:L.nodeType==3)){_=L,q[N]=null;break}}if(_==null){if(D==null)return document.createTextNode(W);_=document.createElementNS(Y,D,W.is&&W),K&&(N1.__m&&N1.__m($,q),K=!1),q=null}if(D==null)J===W||K&&_.data==W||(_.data=W);else{if(q=q&&Y8.call(_.childNodes),!K&&q!=null)for(J={},N=0;N<_.attributes.length;N++)J[(L=_.attributes[N]).name]=L.value;for(N in J)L=J[N],N=="dangerouslySetInnerHTML"?V=L:N=="children"||(N in W)||N=="value"&&("defaultValue"in W)||N=="checked"&&("defaultChecked"in W)||t5(_,N,null,L,Y);for(N in W)L=W[N],N=="children"?U=L:N=="dangerouslySetInnerHTML"?X=L:N=="value"?F=L:N=="checked"?O=L:K&&typeof L!="function"||J[N]===L||t5(_,N,L,J[N],Y);if(X)K||V&&(X.__html==V.__html||X.__html==_.innerHTML)||(_.innerHTML=X.__html),$.__k=[];else if(V&&(_.innerHTML=""),d3($.type=="template"?_.content:_,q8(U)?U:[U],$,j,Z,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,q,Q,q?q[0]:j.__k&&e4(j,0),K,G),q!=null)for(N=q.length;N--;)Q6(q[N]);K||(N="value",D=="progress"&&F==null?_.removeAttribute("value"):F!=null&&(F!==_[N]||D=="progress"&&!F||D=="option"&&F!=J[N])&&t5(_,N,F,J[N],Y),N="checked",O!=null&&O!=_[N]&&t5(_,N,O,J[N],Y))}return _}function G6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Y){N1.__e(Y,j)}}function s3(_,$,j){var Z,Y;if(N1.unmount&&N1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||G6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(q){N1.__e(q,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Y=0;Y<Z.length;Y++)Z[Y]&&s3(Z[Y],$,j||typeof _.type!="function");j||Q6(_.__e),_.__c=_.__=_.__e=void 0}function hq(_,$,j){return this.constructor(_,j)}function J4(_,$,j){var Z,Y,q,Q;$==document&&($=document.documentElement),N1.__&&N1.__(_,$),Y=(Z=typeof j=="function")?null:j&&j.__k||$.__k,q=[],Q=[],K6($,_=(!Z&&j||$).__k=Q8(K8,null,[_]),Y||$8,$8,$.namespaceURI,!Z&&j?[j]:Y?null:$.firstChild?Y8.call($.childNodes):null,q,!Z&&j?j:Y?Y.__e:$.firstChild,Z,Q),r3(q,_,Q)}function a3(_){function $(j){var Z,Y;return this.getChildContext||(Z=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(q){this.props.value!=q.value&&Z.forEach(function(Q){Q.__e=!0,j6(Q)})},this.sub=function(q){Z.add(q);var Q=q.componentWillUnmount;q.componentWillUnmount=function(){Z&&Z.delete(q),Q&&Q.call(q)}}),j.children}return $.__c="__cC"+l3++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}Y8=j8.slice,N1={__e:function(_,$,j,Z){for(var Y,q,Q;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((q=Y.constructor)&&q.getDerivedStateFromError!=null&&(Y.setState(q.getDerivedStateFromError(_)),Q=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,Z||{}),Q=Y.__d),Q)return Y.__E=Y}catch(K){_=K}throw _}},m3=0,fq=function(_){return _!=null&&_.constructor===void 0},t4.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j4({},this.state),typeof _=="function"&&(_=_(j4({},j),this.props)),_&&j4(j,_),_!=null&&this.__v&&($&&this._sb.push($),j6(this))},t4.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),j6(this))},t4.prototype.render=K8,F4=[],p3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,h3=function(_,$){return _.__v.__b-$.__v.__b},Z8.__r=0,c3=/(PointerCapture)$|Capture$/i,q6=0,_6=P3(!1),$6=P3(!0),l3=0;var H4,G1,e8,C3,_5=0,t3=[],z1=N1,S3=z1.__b,w3=z1.__r,R3=z1.diffed,u3=z1.__c,f3=z1.unmount,v3=z1.__;function $5(_,$){z1.__h&&z1.__h(G1,_,_5||$),_5=0;var j=G1.__H||(G1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return _5=1,N6(Z2,_)}function N6(_,$,j){var Z=$5(H4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):Z2(void 0,$),function(K){var G=Z.__N?Z.__N[0]:Z.__[0],N=Z.t(G,K);G!==N&&(Z.__N=[N,Z.__[1]],Z.__c.setState({}))}],Z.__c=G1,!G1.__f)){var Y=function(K,G,N){if(!Z.__c.__H)return!0;var X=Z.__c.__H.__.filter(function(U){return U.__c});if(X.every(function(U){return!U.__N}))return!q||q.call(this,K,G,N);var V=Z.__c.props!==K;return X.some(function(U){if(U.__N){var L=U.__[0];U.__=U.__N,U.__N=void 0,L!==U.__[0]&&(V=!0)}}),q&&q.call(this,K,G,N)||V};G1.__f=!0;var{shouldComponentUpdate:q,componentWillUpdate:Q}=G1;G1.componentWillUpdate=function(K,G,N){if(this.__e){var X=q;q=void 0,Y(K,G,N),q=X}Q&&Q.call(this,K,G,N)},G1.shouldComponentUpdate=Y}return Z.__N||Z.__}function b(_,$){var j=$5(H4++,3);!z1.__s&&X6(j.__H,$)&&(j.__=_,j.u=$,G1.__H.__h.push(j))}function k5(_,$){var j=$5(H4++,4);!z1.__s&&X6(j.__H,$)&&(j.__=_,j.u=$,G1.__h.push(j))}function T(_){return _5=5,b0(function(){return{current:_}},[])}function e3(_,$,j){_5=6,k5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function b0(_,$){var j=$5(H4++,7);return X6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function y(_,$){return _5=8,b0(function(){return _},$)}function _2(_){var $=G1.context[_.__c],j=$5(H4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(G1)),$.props.value):_.__}function $2(_,$){z1.useDebugValue&&z1.useDebugValue($?$(_):_)}function j2(_){var $=$5(H4++,10),j=m();return $.__=_,G1.componentDidCatch||(G1.componentDidCatch=function(Z,Y){$.__&&$.__(Z,Y),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function cq(){for(var _;_=t3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(_8),$.__h.some(Y6),$.__h=[]}catch(j){$.__h=[],z1.__e(j,_.__v)}}}z1.__b=function(_){G1=null,S3&&S3(_)},z1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),v3&&v3(_,$)},z1.__r=function(_){w3&&w3(_),H4=0;var $=(G1=_.__c).__H;$&&(e8===G1?($.__h=[],G1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(_8),$.__h.some(Y6),$.__h=[],H4=0)),e8=G1},z1.diffed=function(_){R3&&R3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(t3.push($)!==1&&C3===z1.requestAnimationFrame||((C3=z1.requestAnimationFrame)||lq)(cq)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),e8=G1=null},z1.__c=function(_,$){$.some(function(j){try{j.__h.some(_8),j.__h=j.__h.filter(function(Z){return!Z.__||Y6(Z)})}catch(Z){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],z1.__e(Z,j.__v)}}),u3&&u3(_,$)},z1.unmount=function(_){f3&&f3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{_8(Z)}catch(Y){$=Y}}),j.__H=void 0,$&&z1.__e($,j.__v))};var b3=typeof requestAnimationFrame=="function";function lq(_){var $,j=function(){clearTimeout(Z),b3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);b3&&($=requestAnimationFrame(j))}function _8(_){var $=G1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),G1=$}function Y6(_){var $=G1;_.__c=_.__(),G1=$}function X6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function Z2(_,$){return typeof $=="function"?$(_):$}var Y2=function(_,$,j,Z){var Y;$[0]=0;for(var q=1;q<$.length;q++){var Q=$[q++],K=$[q]?($[0]|=Q?1:2,j[$[q++]]):$[++q];Q===3?Z[0]=K:Q===4?Z[1]=Object.assign(Z[1]||{},K):Q===5?(Z[1]=Z[1]||{})[$[++q]]=K:Q===6?Z[1][$[++q]]+=K+"":Q?(Y=_.apply(K,Y2(_,K,j,["",null])),Z.push(Y),K[0]?$[0]|=2:($[q-2]=0,$[q]=Y)):Z.push(K)}return Z},g3=new Map;function nq(_){var $=g3.get(this);return $||($=new Map,g3.set(this,$)),($=Y2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Y,q=1,Q="",K="",G=[0],N=function(U){q===1&&(U||(Q=Q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?G.push(0,U,Q):q===3&&(U||Q)?(G.push(3,U,Q),q=2):q===2&&Q==="..."&&U?G.push(4,U,0):q===2&&Q&&!U?G.push(5,0,!0,Q):q>=5&&((Q||!U&&q===5)&&(G.push(q,0,Q,Y),q=6),U&&(G.push(q,U,0,Y),q=6)),Q=""},X=0;X<j.length;X++){X&&(q===1&&N(),N(X));for(var V=0;V<j[X].length;V++)Z=j[X][V],q===1?Z==="<"?(N(),G=[G],q=3):Q+=Z:q===4?Q==="--"&&Z===">"?(q=1,Q=""):Q=Z+Q[0]:K?Z===K?K="":Q+=Z:Z==='"'||Z==="'"?K=Z:Z===">"?(N(),q=1):q&&(Z==="="?(q=5,Y=Q,Q=""):Z==="/"&&(q<5||j[X][V+1]===">")?(N(),q===3&&(G=G[0]),q=G,(G=G[0]).push(2,0,q),q=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(N(),q=2):Q+=Z),q===3&&Q==="!--"&&(q=4,G=G[0])}return N(),G}(_)),$),arguments,[])).length>1?$:$[0]}var z=nq.bind(Q8);var b1={};uq(b1,{uploadWorkspaceFile:()=>N8,uploadMedia:()=>J6,updateWorkspaceFile:()=>XQ,submitAdaptiveCardAction:()=>O6,streamSidePrompt:()=>KQ,stopAutoresearch:()=>jQ,steerAgentQueueItem:()=>QQ,setWorkspaceVisibility:()=>T5,setAgentThoughtVisibility:()=>E6,sendPeerAgentMessage:()=>eq,sendAgentMessage:()=>j5,searchPosts:()=>U6,restoreChatBranch:()=>tq,respondToAgentRequest:()=>G8,renameWorkspaceFile:()=>T6,renameChatBranch:()=>sq,removeAgentQueueItem:()=>qQ,pruneChatBranch:()=>aq,moveWorkspaceEntry:()=>y6,getWorkspaceTree:()=>I5,getWorkspaceRawUrl:()=>X8,getWorkspaceFile:()=>x5,getWorkspaceDownloadUrl:()=>V8,getWorkspaceBranch:()=>NQ,getTimeline:()=>v4,getThumbnailUrl:()=>k6,getThread:()=>L6,getPostsByHashtag:()=>V6,getMediaUrl:()=>k_,getMediaText:()=>M6,getMediaInfo:()=>Z5,getMediaBlob:()=>GQ,getChatBranches:()=>oq,getAutoresearchStatus:()=>$Q,getAgents:()=>F6,getAgentThought:()=>A6,getAgentStatus:()=>H6,getAgentQueueState:()=>YQ,getAgentModels:()=>M5,getAgentContext:()=>_Q,getActiveChatAgents:()=>B6,forkChatBranch:()=>z6,dismissAutoresearch:()=>ZQ,deleteWorkspaceFile:()=>P6,deletePost:()=>W6,createWorkspaceFile:()=>x6,createReply:()=>rq,createPost:()=>iq,attachWorkspaceFile:()=>I6,addToWhitelist:()=>D6,SSEClient:()=>U8});async function t0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function q2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let q of $)if(q.startsWith("event:"))j=q.slice(6).trim()||"message";else if(q.startsWith("data:"))Z.push(q.slice(5).trim());let Y=Z.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function dq(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Y="";while(!0){let{value:Q,done:K}=await j.read();if(K)break;Y+=Z.decode(Q,{stream:!0});let G=Y.split(`

`);Y=G.pop()||"";for(let N of G){let X=q2(N);if(X)$(X.event,X.data)}}Y+=Z.decode();let q=q2(Y);if(q)$(q.event,q.data)}async function v4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return t0(Z)}async function V6(_,$=50,j=0,Z=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return t0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function U6(_,$=50,j=0,Z=null,Y="current",q=null){let Q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",K=Y?`&scope=${encodeURIComponent(Y)}`:"",G=q?`&root_chat_jid=${encodeURIComponent(q)}`:"";return t0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Q}${K}${G}`)}async function L6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return t0(`/thread/${_}${j}`)}async function iq(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return t0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function rq(_,$,j=[],Z=null){let Y=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return t0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function W6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return t0(Y,{method:"DELETE"})}async function j5(_,$,j=null,Z=[],Y=null,q=null){let Q=q?`?chat_jid=${encodeURIComponent(q)}`:"",K={content:$,thread_id:j,media_ids:Z};if(Y==="auto"||Y==="queue"||Y==="steer")K.mode=Y;return t0(`/agent/${_}/message${Q}`,{method:"POST",body:JSON.stringify(K)})}async function B6(){return t0("/agent/active-chats")}async function oq(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return t0(`/agent/branches${Z}`)}async function z6(_,$={}){return t0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function sq(_,$={}){return t0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function aq(_){return t0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function tq(_,$={}){return t0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function eq(_,$,j,Z="auto",Y={}){let q={source_chat_jid:_,content:j,mode:Z,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return t0("/agent/peer-message",{method:"POST",body:JSON.stringify(q)})}async function F6(){return t0("/agent/roster")}async function H6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/status${$}`)}async function _Q(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/context${$}`)}async function $Q(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/autoresearch/status${$}`)}async function jQ(_=null,$={}){return t0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function ZQ(_=null){return t0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function YQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/queue-state${$}`)}async function qQ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function QQ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function M5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/models${$}`)}async function J6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function G8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${Z.status}`)}return Z.json()}async function O6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function KQ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let q=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(q.error||`HTTP ${j.status}`)}let Z=null,Y=null;if(await dq(j,(q,Q)=>{if($.onEvent?.(q,Q),q==="side_prompt_thinking_delta")$.onThinkingDelta?.(Q?.delta||"");else if(q==="side_prompt_text_delta")$.onTextDelta?.(Q?.delta||"");else if(q==="side_prompt_done")Z=Q;else if(q==="side_prompt_error")Y=Q}),Y){let q=Error(Y?.error||"Side prompt failed");throw q.payload=Y,q}return Z}async function D6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function A6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return t0(j)}async function E6(_,$,j){return t0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function k_(_){return`/media/${_}`}function k6(_){return`/media/${_}/thumbnail`}async function Z5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function M6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function GQ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function I5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return t0(Z)}async function NQ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return t0($)}async function x5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return t0(Y)}async function XQ(_,$){return t0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function I6(_){return t0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function N8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(j.overwrite)Y.set("overwrite","1");let q=Y.toString(),Q=q?`/workspace/upload?${q}`:"/workspace/upload",K=await fetch(""+Q,{method:"POST",body:Z});if(!K.ok){let G=await K.json().catch(()=>({error:"Upload failed"})),N=Error(G.error||`HTTP ${K.status}`);throw N.status=K.status,N.code=G.code,N}return K.json()}async function x6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Create failed"})),q=Error(Y.error||`HTTP ${Z.status}`);throw q.status=Z.status,q.code=Y.code,q}return Z.json()}async function T6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function y6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function P6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return t0($,{method:"DELETE"})}async function T5(_,$=!1){return t0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function X8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function V8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class U8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class Q2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Y=Z.canHandle(_);if(Y===!1||Y===0)continue;let q=Y===!0?0:typeof Y==="number"?Y:0;if(q>j)j=q,$=Z}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var d0=new Q2;var L8=null,C6=null;function VQ(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function K2(){if(C6)return Promise.resolve(C6);if(!L8)L8=import(VQ()).then((_)=>{return C6=_,_}).catch((_)=>{throw L8=null,_});return L8}class G2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await K2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var S6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new G2(_,$)}};function w6(){K2().catch(()=>{})}var Y5="piclaw://terminal";var UQ={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},LQ={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},W8=null,R6=null;function WQ(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function BQ(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Y,q)=>{let Q=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!WQ(Q))return $(Y,q);if(Y instanceof Request)return $(new Request(j,Y));return $(j,q)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function zQ(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!W8)W8=BQ(()=>Promise.resolve($.init?.())).catch((j)=>{throw W8=null,j});return await W8,$}async function FQ(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!R6)R6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await R6}async function HQ(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function JQ(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function OQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Z4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function DQ(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function N2(){let _=OQ(),$=_?LQ:UQ,j=Z4("--bg-primary",_?"#000000":"#ffffff"),Z=Z4("--text-primary",_?"#e7e9ea":"#0f1419"),Y=Z4("--text-secondary",_?"#71767b":"#536471"),q=Z4("--accent-color","#1d9bf0"),Q=Z4("--danger-color",_?"#ff7b72":"#cf222e"),K=Z4("--success-color",_?"#7ee787":"#1a7f37"),G=Z4("--bg-hover",_?"#1d1f23":"#e8ebed"),N=Z4("--border-color",_?"#2f3336":"#eff3f4"),X=Z4("--accent-soft-strong",DQ(q,_?"47":"33"));return{background:j,foreground:Z,cursor:q,cursorAccent:j,selectionBackground:X,selectionForeground:Z,black:G,red:Q,green:K,yellow:$.yellow,blue:q,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:N}}class u6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,q=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Y)}x${Math.round(q)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await zQ();if(await FQ(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:N2()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=N2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await HQ();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(JQ($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Y})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Y}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(Z.data))}catch{Y={type:"output",data:String(Z.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var f6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new u6(_,$)}},v6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new u6(_,$)}};function Y4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function B8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),q=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),Q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(q||Y>1||Q)}function X2(_,$={}){if(Y4($))return null;if(B8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:AQ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function b6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function g6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function m6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function p6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function q4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Y),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function V2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Y),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function U2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Y),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let q=j?.params&&typeof j.params==="object"?j.params:null;if(q)for(let[Q,K]of Object.entries(q)){let G=String(Q||"").trim();if(!G)continue;if(K===null||K===void 0||K==="")Z.searchParams.delete(G);else Z.searchParams.set(G,String(K))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function AQ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function EQ(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function L2(_,$={}){if(Y4($))return null;if(B8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:EQ(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function y5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function kQ(_){try{return JSON.parse(_)}catch{return null}}function MQ(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function IQ(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class h6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=IQ($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||kQ;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=MQ(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var P5=()=>{throw Error("Operation requires compiling with --exportRuntime")},xQ=typeof BigUint64Array<"u",C5=Symbol();var TQ=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function W2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return TQ.decode(Z)}catch{let Y="",q=0;while(j-q>1024)Y+=String.fromCharCode(...Z.subarray(q,q+=1024));return Y+String.fromCharCode(...Z.subarray(q))}}function B2(_){let $={};function j(Y,q){if(!Y)return"<yet unknown>";return W2(Y.buffer,q)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(q,Q,K,G){let N=$.memory||Z.memory;throw Error(`abort: ${j(N,q)} at ${j(N,Q)}:${K}:${G}`)},Z.trace=Z.trace||function(q,Q,...K){let G=$.memory||Z.memory;console.log(`trace: ${j(G,q)}${Q?" ":""}${K.slice(0,Q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function z2(_,$){let j=$.exports,Z=j.memory,Y=j.table,q=j.__new||P5,Q=j.__pin||P5,K=j.__unpin||P5,G=j.__collect||P5,N=j.__rtti_base,X=N?(B)=>B[N>>>2]:P5;_.__new=q,_.__pin=Q,_.__unpin=K,_.__collect=G;function V(B){let k=new Uint32Array(Z.buffer);if((B>>>=0)>=X(k))throw Error(`invalid id: ${B}`);return k[(N+4>>>2)+B]}function U(B){let k=V(B);if(!(k&7))throw Error(`not an array: ${B}, flags=${k}`);return k}function L(B){return 31-Math.clz32(B>>>6&31)}function F(B){if(B==null)return 0;let k=B.length,w=q(k<<1,2),l=new Uint16Array(Z.buffer);for(let v=0,n=w>>>1;v<k;++v)l[n+v]=B.charCodeAt(v);return w}_.__newString=F;function O(B){if(B==null)return 0;let k=new Uint8Array(B),w=q(k.length,1);return new Uint8Array(Z.buffer).set(k,w),w}_.__newArrayBuffer=O;function J(B){if(!B)return null;let k=Z.buffer;if(new Uint32Array(k)[B+-8>>>2]!==2)throw Error(`not a string: ${B}`);return W2(k,B)}_.__getString=J;function W(B,k,w){let l=Z.buffer;if(w)switch(B){case 2:return new Float32Array(l);case 3:return new Float64Array(l)}else switch(B){case 0:return new(k?Int8Array:Uint8Array)(l);case 1:return new(k?Int16Array:Uint16Array)(l);case 2:return new(k?Int32Array:Uint32Array)(l);case 3:return new(k?BigInt64Array:BigUint64Array)(l)}throw Error(`unsupported align: ${B}`)}function D(B,k=0){let w=k,l=U(B),v=L(l),n=typeof w!=="number",d=n?w.length:w,s=q(d<<v,l&4?B:1),_0;if(l&4)_0=s;else{Q(s);let t=q(l&2?16:12,B);K(s);let K0=new Uint32Array(Z.buffer);if(K0[t+0>>>2]=s,K0[t+4>>>2]=s,K0[t+8>>>2]=d<<v,l&2)K0[t+12>>>2]=d;_0=t}if(n){let t=W(v,l&2048,l&4096),K0=s>>>v;if(l&16384)for(let N0=0;N0<d;++N0)t[K0+N0]=w[N0];else t.set(w,K0)}return _0}_.__newArray=D;function E(B){let k=new Uint32Array(Z.buffer),w=k[B+-8>>>2],l=U(w),v=L(l),n=l&4?B:k[B+4>>>2],d=l&2?k[B+12>>>2]:k[n+-4>>>2]>>>v;return W(v,l&2048,l&4096).subarray(n>>>=v,n+d)}_.__getArrayView=E;function S(B){let k=E(B),w=k.length,l=Array(w);for(let v=0;v<w;v++)l[v]=k[v];return l}_.__getArray=S;function P(B){let k=Z.buffer,w=new Uint32Array(k)[B+-4>>>2];return k.slice(B,B+w)}_.__getArrayBuffer=P;function g(B){if(!Y)throw Error("Operation requires compiling with --exportTable");let k=new Uint32Array(Z.buffer)[B>>>2];return Y.get(k)}_.__getFunction=g;function h(B,k,w){return new B(x(B,k,w))}function x(B,k,w){let l=Z.buffer,v=new Uint32Array(l);return new B(l,v[w+4>>>2],v[w+8>>>2]>>>k)}function M(B,k,w){_[`__get${k}`]=h.bind(null,B,w),_[`__get${k}View`]=x.bind(null,B,w)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((B)=>{M(B,B.name,31-Math.clz32(B.BYTES_PER_ELEMENT))}),xQ)[BigUint64Array,BigInt64Array].forEach((B)=>{M(B,B.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Y,PQ(j,_)}function F2(_){return typeof Response<"u"&&_ instanceof Response}function yQ(_){return _ instanceof WebAssembly.Module}async function c6(_,$={}){if(F2(_=await _))return z8(_,$);let j=yQ(_)?_:await WebAssembly.compile(_),Z=B2($),Y=await WebAssembly.instantiate(j,$),q=z2(Z,Y);return{module:j,instance:Y,exports:q}}async function z8(_,$={}){if(!WebAssembly.instantiateStreaming)return c6(F2(_=await _)?_.arrayBuffer():_,$);let j=B2($),Z=await WebAssembly.instantiateStreaming(_,$),Y=z2(j,Z.instance);return{...Z,exports:Y}}function PQ(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Y=_[Z],q=Z.split("."),Q=$;while(q.length>1){let N=q.shift();if(!Object.hasOwn(Q,N))Q[N]={};Q=Q[N]}let K=q[0],G=K.indexOf("#");if(G>=0){let N=K.substring(0,G),X=Q[N];if(typeof X>"u"||!X.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[C5]}},V.wrap=function(U){return Object.create(V.prototype,{[C5]:{value:U,writable:!1}})},X)Object.getOwnPropertyNames(X).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(X,U)));Q[N]=V}if(K=K.substring(G+1),Q=Q[N].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(Q,K=K.substring(4))){let V=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(Q,K,{get(){return V(this[C5])},set(L){U(this[C5],L)},enumerable:!0})}}else if(K==="constructor")(Q[K]=function(...V){return j(V.length),Y(...V)}).original=Y;else(Q[K]=function(...V){return j(V.length),Y(this[C5],...V)}).original=Y}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(Q,K=K.substring(4)))Object.defineProperty(Q,K,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(Q[K]=(...N)=>{return j(N.length),Y(...N)}).original=Y;else Q[K]=Y}return $}var SQ="/static/js/vendor/remote-display-decoder.wasm",F8=null;function H2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function J2(){if(F8)return F8;return F8=(async()=>{try{let Z=function(Y,q,Q,K,G,N,X){let V=H2(q),U=j.__pin(j.__newArrayBuffer(V));try{return j[Y](U,Q,K,G,N,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(SQ,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof z8==="function"?await z8(_,{}):await c6(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,q){j.initFramebuffer(Y,q)},getFramebuffer(){let Y=j.getFramebufferPtr(),q=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,q).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,q,Q,K,G,N){return Z("processRawRect",Y,q,Q,K,G,N)},processCopyRect(Y,q,Q,K,G,N){return j.processCopyRect(Y,q,Q,K,G,N)},processRreRect(Y,q,Q,K,G,N){return Z("processRreRect",Y,q,Q,K,G,N)},processHextileRect(Y,q,Q,K,G,N){return Z("processHextileRect",Y,q,Q,K,G,N)},processZrleTileData(Y,q,Q,K,G,N){return Z("processZrleTileData",Y,q,Q,K,G,N)},decodeRawRectToRgba(Y,q,Q,K){let G=H2(Y),N=j.__pin(j.__newArrayBuffer(G));try{let X=j.__pin(j.decodeRawRectToRgba(N,q,Q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(X))}finally{j.__unpin(X)}}finally{j.__unpin(N);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),F8}function q5(_,$,j){return Math.max($,Math.min(j,_))}function H8(_,$,j){let Z=new Uint8Array(6),Y=q5(Math.floor(Number($||0)),0,65535),q=q5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=q5(Math.floor(Number(_||0)),0,255),Z[2]=Y>>8&255,Z[3]=Y&255,Z[4]=q>>8&255,Z[5]=q&255,Z}function n6(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function O2(_,$,j,Z,Y){let q=Math.max(1,Math.floor(Number(Z||0))),Q=Math.max(1,Math.floor(Number(Y||0))),K=Math.max(1,Number(j?.width||0)),G=Math.max(1,Number(j?.height||0)),N=(Number(_||0)-Number(j?.left||0))/K,X=(Number($||0)-Number(j?.top||0))/G;return{x:q5(Math.floor(N*q),0,Math.max(0,q-1)),y:q5(Math.floor(X*Q),0,Math.max(0,Q-1))}}function D2(_,$,j,Z=0){let Y=Number(_)<0?8:16,q=q5(Number(Z||0)|Y,0,255);return[H8(q,$,j),H8(Number(Z||0),$,j)]}function A2(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function S5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function E2(_,$,j,Z){let Y=Math.max(1,Math.floor(Number(_||0))),q=Math.max(1,Math.floor(Number($||0))),Q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Z||0))),G=Math.min(Y/Q,q/K);if(!Number.isFinite(G)||G<=0)return 1;return Math.max(0.01,G)}var l6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)l6[`F${_}`]=65470+(_-1);function d6(_){let $=[_?.key,_?.code];for(let q of $)if(q&&Object.prototype.hasOwnProperty.call(l6,q))return l6[q];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Y=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Y){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var T1=Uint8Array,U_=Uint16Array,$$=Int32Array,J8=new T1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),O8=new T1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a6=new T1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x2=function(_,$){var j=new U_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Y=new $$(j[30]);for(var Z=1;Z<30;++Z)for(var q=j[Z];q<j[Z+1];++q)Y[q]=q-j[Z]<<5|Z;return{b:j,r:Y}},T2=x2(J8,2),y2=T2.b,t6=T2.r;y2[28]=258,t6[258]=28;var P2=x2(O8,0),wQ=P2.b,k2=P2.r,e6=new U_(32768);for(l0=0;l0<32768;++l0)c_=(l0&43690)>>1|(l0&21845)<<1,c_=(c_&52428)>>2|(c_&13107)<<2,c_=(c_&61680)>>4|(c_&3855)<<4,e6[l0]=((c_&65280)>>8|(c_&255)<<8)>>1;var c_,l0,l_=function(_,$,j){var Z=_.length,Y=0,q=new U_($);for(;Y<Z;++Y)if(_[Y])++q[_[Y]-1];var Q=new U_($);for(Y=1;Y<$;++Y)Q[Y]=Q[Y-1]+q[Y-1]<<1;var K;if(j){K=new U_(1<<$);var G=15-$;for(Y=0;Y<Z;++Y)if(_[Y]){var N=Y<<4|_[Y],X=$-_[Y],V=Q[_[Y]-1]++<<X;for(var U=V|(1<<X)-1;V<=U;++V)K[e6[V]>>G]=N}}else{K=new U_(Z);for(Y=0;Y<Z;++Y)if(_[Y])K[Y]=e6[Q[_[Y]-1]++]>>15-_[Y]}return K},O4=new T1(288);for(l0=0;l0<144;++l0)O4[l0]=8;var l0;for(l0=144;l0<256;++l0)O4[l0]=9;var l0;for(l0=256;l0<280;++l0)O4[l0]=7;var l0;for(l0=280;l0<288;++l0)O4[l0]=8;var l0,f5=new T1(32);for(l0=0;l0<32;++l0)f5[l0]=5;var l0,RQ=l_(O4,9,0),uQ=l_(O4,9,1),fQ=l_(f5,5,0),vQ=l_(f5,5,1),i6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},u_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},r6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},j$=function(_){return(_+7)/8|0},u5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new T1(_.subarray($,j))};var bQ=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],K_=function(_,$,j){var Z=Error($||bQ[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,K_);if(!j)throw Z;return Z},gQ=function(_,$,j,Z){var Y=_.length,q=Z?Z.length:0;if(!Y||$.f&&!$.l)return j||new T1(0);var Q=!j,K=Q||$.i!=2,G=$.i;if(Q)j=new T1(Y*3);var N=function(P0){var Y0=j.length;if(P0>Y0){var E0=new T1(Math.max(Y0*2,P0));E0.set(j),j=E0}},X=$.f||0,V=$.p||0,U=$.b||0,L=$.l,F=$.d,O=$.m,J=$.n,W=Y*8;do{if(!L){X=u_(_,V,1);var D=u_(_,V+1,3);if(V+=3,!D){var E=j$(V)+4,S=_[E-4]|_[E-3]<<8,P=E+S;if(P>Y){if(G)K_(0);break}if(K)N(U+S);j.set(_.subarray(E,P),U),$.b=U+=S,$.p=V=P*8,$.f=X;continue}else if(D==1)L=uQ,F=vQ,O=9,J=5;else if(D==2){var g=u_(_,V,31)+257,h=u_(_,V+10,15)+4,x=g+u_(_,V+5,31)+1;V+=14;var M=new T1(x),B=new T1(19);for(var k=0;k<h;++k)B[a6[k]]=u_(_,V+k*3,7);V+=h*3;var w=i6(B),l=(1<<w)-1,v=l_(B,w,1);for(var k=0;k<x;){var n=v[u_(_,V,l)];V+=n&15;var E=n>>4;if(E<16)M[k++]=E;else{var d=0,s=0;if(E==16)s=3+u_(_,V,3),V+=2,d=M[k-1];else if(E==17)s=3+u_(_,V,7),V+=3;else if(E==18)s=11+u_(_,V,127),V+=7;while(s--)M[k++]=d}}var _0=M.subarray(0,g),t=M.subarray(g);O=i6(_0),J=i6(t),L=l_(_0,O,1),F=l_(t,J,1)}else K_(1);if(V>W){if(G)K_(0);break}}if(K)N(U+131072);var K0=(1<<O)-1,N0=(1<<J)-1,X0=V;for(;;X0=V){var d=L[r6(_,V)&K0],T0=d>>4;if(V+=d&15,V>W){if(G)K_(0);break}if(!d)K_(2);if(T0<256)j[U++]=T0;else if(T0==256){X0=V,L=null;break}else{var J0=T0-254;if(T0>264){var k=T0-257,W0=J8[k];J0=u_(_,V,(1<<W0)-1)+y2[k],V+=W0}var C0=F[r6(_,V)&N0],F0=C0>>4;if(!C0)K_(3);V+=C0&15;var t=wQ[F0];if(F0>3){var W0=O8[F0];t+=r6(_,V)&(1<<W0)-1,V+=W0}if(V>W){if(G)K_(0);break}if(K)N(U+131072);var y0=U+J0;if(U<t){var v0=q-t,H0=Math.min(t,y0);if(v0+U<0)K_(3);for(;U<H0;++U)j[U]=Z[v0+U]}for(;U<y0;++U)j[U]=j[U-t]}}if($.l=L,$.p=X0,$.b=U,$.f=X,L)X=1,$.m=O,$.d=F,$.n=J}while(!X);return U!=j.length&&Q?u5(j,0,U):j.subarray(0,U)},Q4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},w5=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},o6=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Y=j.length,q=j.slice();if(!Y)return{t:S2,l:0};if(Y==1){var Q=new T1(j[0].s+1);return Q[j[0].s]=1,{t:Q,l:1}}j.sort(function(P,g){return P.f-g.f}),j.push({s:-1,f:25001});var K=j[0],G=j[1],N=0,X=1,V=2;j[0]={s:-1,f:K.f+G.f,l:K,r:G};while(X!=Y-1)K=j[j[N].f<j[V].f?N++:V++],G=j[N!=X&&j[N].f<j[V].f?N++:V++],j[X++]={s:-1,f:K.f+G.f,l:K,r:G};var U=q[0].s;for(var Z=1;Z<Y;++Z)if(q[Z].s>U)U=q[Z].s;var L=new U_(U+1),F=_$(j[X-1],L,0);if(F>$){var Z=0,O=0,J=F-$,W=1<<J;q.sort(function(g,h){return L[h.s]-L[g.s]||g.f-h.f});for(;Z<Y;++Z){var D=q[Z].s;if(L[D]>$)O+=W-(1<<F-L[D]),L[D]=$;else break}O>>=J;while(O>0){var E=q[Z].s;if(L[E]<$)O-=1<<$-L[E]++-1;else++Z}for(;Z>=0&&O;--Z){var S=q[Z].s;if(L[S]==$)--L[S],++O}F=$}return{t:new T1(L),l:F}},_$=function(_,$,j){return _.s==-1?Math.max(_$(_.l,$,j+1),_$(_.r,$,j+1)):$[_.s]=j},M2=function(_){var $=_.length;while($&&!_[--$]);var j=new U_(++$),Z=0,Y=_[0],q=1,Q=function(G){j[Z++]=G};for(var K=1;K<=$;++K)if(_[K]==Y&&K!=$)++q;else{if(!Y&&q>2){for(;q>138;q-=138)Q(32754);if(q>2)Q(q>10?q-11<<5|28690:q-3<<5|12305),q=0}else if(q>3){Q(Y),--q;for(;q>6;q-=6)Q(8304);if(q>2)Q(q-3<<5|8208),q=0}while(q--)Q(Y);q=1,Y=_[K]}return{c:j.subarray(0,Z),n:$}},R5=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},C2=function(_,$,j){var Z=j.length,Y=j$($+2);_[Y]=Z&255,_[Y+1]=Z>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var q=0;q<Z;++q)_[Y+q+4]=j[q];return(Y+4+Z)*8},I2=function(_,$,j,Z,Y,q,Q,K,G,N,X){Q4($,X++,j),++Y[256];var V=o6(Y,15),U=V.t,L=V.l,F=o6(q,15),O=F.t,J=F.l,W=M2(U),D=W.c,E=W.n,S=M2(O),P=S.c,g=S.n,h=new U_(19);for(var x=0;x<D.length;++x)++h[D[x]&31];for(var x=0;x<P.length;++x)++h[P[x]&31];var M=o6(h,7),B=M.t,k=M.l,w=19;for(;w>4&&!B[a6[w-1]];--w);var l=N+5<<3,v=R5(Y,O4)+R5(q,f5)+Q,n=R5(Y,U)+R5(q,O)+Q+14+3*w+R5(h,B)+2*h[16]+3*h[17]+7*h[18];if(G>=0&&l<=v&&l<=n)return C2($,X,_.subarray(G,G+N));var d,s,_0,t;if(Q4($,X,1+(n<v)),X+=2,n<v){d=l_(U,L,0),s=U,_0=l_(O,J,0),t=O;var K0=l_(B,k,0);Q4($,X,E-257),Q4($,X+5,g-1),Q4($,X+10,w-4),X+=14;for(var x=0;x<w;++x)Q4($,X+3*x,B[a6[x]]);X+=3*w;var N0=[D,P];for(var X0=0;X0<2;++X0){var T0=N0[X0];for(var x=0;x<T0.length;++x){var J0=T0[x]&31;if(Q4($,X,K0[J0]),X+=B[J0],J0>15)Q4($,X,T0[x]>>5&127),X+=T0[x]>>12}}}else d=RQ,s=O4,_0=fQ,t=f5;for(var x=0;x<K;++x){var W0=Z[x];if(W0>255){var J0=W0>>18&31;if(w5($,X,d[J0+257]),X+=s[J0+257],J0>7)Q4($,X,W0>>23&31),X+=J8[J0];var C0=W0&31;if(w5($,X,_0[C0]),X+=t[C0],C0>3)w5($,X,W0>>5&8191),X+=O8[C0]}else w5($,X,d[W0]),X+=s[W0]}return w5($,X,d[256]),X+s[256]},mQ=new $$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),S2=new T1(0),pQ=function(_,$,j,Z,Y,q){var Q=q.z||_.length,K=new T1(Z+Q+5*(1+Math.ceil(Q/7000))+Y),G=K.subarray(Z,K.length-Y),N=q.l,X=(q.r||0)&7;if($){if(X)G[0]=q.r>>3;var V=mQ[$-1],U=V>>13,L=V&8191,F=(1<<j)-1,O=q.p||new U_(32768),J=q.h||new U_(F+1),W=Math.ceil(j/3),D=2*W,E=function(h0){return(_[h0]^_[h0+1]<<W^_[h0+2]<<D)&F},S=new $$(25000),P=new U_(288),g=new U_(32),h=0,x=0,M=q.i||0,B=0,k=q.w||0,w=0;for(;M+2<Q;++M){var l=E(M),v=M&32767,n=J[l];if(O[v]=n,J[l]=v,k<=M){var d=Q-M;if((h>7000||B>24576)&&(d>423||!N)){X=I2(_,G,0,S,P,g,x,B,w,M-w,X),B=h=x=0,w=M;for(var s=0;s<286;++s)P[s]=0;for(var s=0;s<30;++s)g[s]=0}var _0=2,t=0,K0=L,N0=v-n&32767;if(d>2&&l==E(M-N0)){var X0=Math.min(U,d)-1,T0=Math.min(32767,M),J0=Math.min(258,d);while(N0<=T0&&--K0&&v!=n){if(_[M+_0]==_[M+_0-N0]){var W0=0;for(;W0<J0&&_[M+W0]==_[M+W0-N0];++W0);if(W0>_0){if(_0=W0,t=N0,W0>X0)break;var C0=Math.min(N0,W0-2),F0=0;for(var s=0;s<C0;++s){var y0=M-N0+s&32767,v0=O[y0],H0=y0-v0&32767;if(H0>F0)F0=H0,n=y0}}}v=n,n=O[v],N0+=v-n&32767}}if(t){S[B++]=268435456|t6[_0]<<18|k2[t];var P0=t6[_0]&31,Y0=k2[t]&31;x+=J8[P0]+O8[Y0],++P[257+P0],++g[Y0],k=M+_0,++h}else S[B++]=_[M],++P[_[M]]}}for(M=Math.max(M,k);M<Q;++M)S[B++]=_[M],++P[_[M]];if(X=I2(_,G,N,S,P,g,x,B,w,M-w,X),!N)q.r=X&7|G[X/8|0]<<3,X-=7,q.h=J,q.p=O,q.i=M,q.w=k}else{for(var M=q.w||0;M<Q+N;M+=65535){var E0=M+65535;if(E0>=Q)G[X/8|0]=N,E0=Q;X=C2(G,X+1,_.subarray(M,E0))}q.i=Q}return u5(K,0,Z+j$(X)+Y)};var w2=function(){var _=1,$=0;return{p:function(j){var Z=_,Y=$,q=j.length|0;for(var Q=0;Q!=q;){var K=Math.min(Q+2655,q);for(;Q<K;++Q)Y+=Z+=j[Q];Z=(Z&65535)+15*(Z>>16),Y=(Y&65535)+15*(Y>>16)}_=Z,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},hQ=function(_,$,j,Z,Y){if(!Y){if(Y={l:1},$.dictionary){var q=$.dictionary.subarray(-32768),Q=new T1(q.length+_.length);Q.set(q),Q.set(_,q.length),_=Q,Y.w=q.length}}return pQ(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Y)};var R2=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var cQ=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=w2();Y.p($.dictionary),R2(_,2,Y.d())}},lQ=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)K_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)K_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var s6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new T1(32768),this.p=new T1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)K_(5);if(this.d)K_(4);if(!this.p.length)this.p=$;else if($.length){var j=new T1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=gQ(this.p,this.s,this.o);this.ondata(u5(Z,j,this.s.b),this.d),this.o=u5(Z,this.s.b-32768),this.s.b=this.o.length,this.p=u5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function u2(_,$){if(!$)$={};var j=w2();j.p(_);var Z=hQ(_,$,$.dictionary?6:2,4);return cQ(Z,$),R2(Z,Z.length-4,j.d()),Z}var f2=function(){function _($,j){s6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(s6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(lQ(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)K_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}s6.prototype.c.call(this,j)},_}();var nQ=typeof TextDecoder<"u"&&new TextDecoder,dQ=0;try{nQ.decode(S2,{stream:!0}),dQ=1}catch(_){}var iQ=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],rQ=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],oQ=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],sQ=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],aQ=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],tQ=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],eQ=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],_K=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],g2=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;g2[_]=$}function m2(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function p2(_){let $=0n,j=m2(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function $K(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(Z&0xffn),Z>>=8n;return j}function Q5(_,$,j){let Z=0n;for(let Y of $){let q=BigInt(_)>>BigInt(j-Y)&1n;Z=Z<<1n|q}return Z}function v2(_,$){let j=28n,Z=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&Z}function jK(_){let $=Q5(p2(_),aQ,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Y=[];for(let q of eQ){j=v2(j,q),Z=v2(Z,q);let Q=j<<28n|Z;Y.push(Q5(Q,tQ,56))}return Y}function ZK(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Y=Number(_>>Z&0x3fn),q=(Y&32)>>4|Y&1,Q=Y>>1&15;$=$<<4n|BigInt(_K[j][q][Q])}return $}function YK(_,$){let j=Q5(_,oQ,32)^BigInt($),Z=ZK(j);return Q5(Z,sQ,32)}function b2(_,$){let j=jK($),Z=Q5(p2(_),iQ,64),Y=Z>>32n&0xffffffffn,q=Z&0xffffffffn;for(let K of j){let G=q,N=(Y^YK(q,K))&0xffffffffn;Y=G,q=N}let Q=q<<32n|Y;return $K(Q5(Q,rQ,64),8)}function qK(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Y=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=g2[Y]}return j}function h2(_,$){let j=m2($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=qK(_),Y=new Uint8Array(16);return Y.set(b2(j.slice(0,8),Z),0),Y.set(b2(j.slice(8,16),Z),8),Y}var f_="vnc";function QK(_){return Number(_)}function KK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],Z=new Set;for(let Y of $){let q=QK(Y);if(!Number.isFinite(q))continue;let Q=Number(q);if(!Z.has(Q))j.push(Q),Z.add(Q)}if(j.length>0)return j;return[5,2,1,0,-223]}function N5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function GK(_,$){let j=N5(_),Z=N5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+Z.byteLength);return Y.set(j,0),Y.set(Z,j.byteLength),Y}function NK(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Y of _||[]){let q=N5(Y);j.set(q,Z),Z+=q.byteLength}return j}function XK(){return(_)=>{let $=N5(_);try{let j=[],Z=new f2((Y)=>{j.push(new Uint8Array(Y))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return NK(j)}catch(j){try{let Z=u2($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Y=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function VK(_){return new TextEncoder().encode(String(_||""))}function K5(_){return new TextDecoder().decode(N5(_))}function UK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function LK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function c2(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function WK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function BK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Y=4;for(let q of $)Z.setInt32(Y,Number(q||0),!1),Y+=4;return new Uint8Array(j)}function l2(_,$,j,Z=0,Y=0){let q=new ArrayBuffer(10),Q=new DataView(q);return Q.setUint8(0,3),Q.setUint8(1,_?1:0),Q.setUint16(2,Z,!1),Q.setUint16(4,Y,!1),Q.setUint16(6,Math.max(0,$||0),!1),Q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(q)}function G5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function d2(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function zK(_,$,j,Z){let Y=Z||X5,q=N5(_),Q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*Q;if(q.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${q.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let G=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),N=0,X=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=d2(q,N,Q,Y.bigEndian),L=G5(U>>>Y.redShift&Y.redMax,Y.redMax),F=G5(U>>>Y.greenShift&Y.greenMax,Y.greenMax),O=G5(U>>>Y.blueShift&Y.blueMax,Y.blueMax);G[X]=L,G[X+1]=F,G[X+2]=O,G[X+3]=255,N+=Q,X+=4}return G}function K4(_,$,j){let Z=j||X5,Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let q=d2(_,$,Y,Z.bigEndian);return{rgba:[G5(q>>>Z.redShift&Z.redMax,Z.redMax),G5(q>>>Z.greenShift&Z.greenMax,Z.greenMax),G5(q>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Y}}function D4(_,$,j,Z,Y,q,Q){if(!Q)return;for(let K=0;K<q;K+=1)for(let G=0;G<Y;G+=1){let N=((Z+K)*$+(j+G))*4;_[N]=Q[0],_[N+1]=Q[1],_[N+2]=Q[2],_[N+3]=Q[3]}}function i2(_,$,j,Z,Y,q,Q){for(let K=0;K<q;K+=1){let G=K*Y*4,N=((Z+K)*$+j)*4;_.set(Q.subarray(G,G+Y*4),N)}}function n2(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(Z+=Y,Y!==255)break}return{consumed:j-$,runLength:Z}}function FK(_,$,j,Z,Y,q,Q){let K=Y||X5,G=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let N=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+N)return null;let X=_.slice($+4,$+4+N),V;try{V=Q(X)}catch{return{consumed:4+N,skipped:!0}}let U=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let F=0;F<Z;F+=64){let O=Math.min(64,Z-F);for(let J=0;J<j;J+=64){let W=Math.min(64,j-J);if(V.byteLength<U+1)return null;let D=V[U++],E=D&127,S=(D&128)!==0;if(!S&&E===0){let P=W*O*G;if(V.byteLength<U+P)return null;let g=q(V.slice(U,U+P),W,O,K);U+=P,i2(L,j,J,F,W,O,g);continue}if(!S&&E===1){let P=K4(V,U,K);if(!P)return null;U+=P.bytesPerPixel,D4(L,j,J,F,W,O,P.rgba);continue}if(!S&&E>1&&E<=16){let P=[];for(let M=0;M<E;M+=1){let B=K4(V,U,K);if(!B)return null;U+=B.bytesPerPixel,P.push(B.rgba)}let g=E<=2?1:E<=4?2:4,h=Math.ceil(W*g/8),x=h*O;if(V.byteLength<U+x)return null;for(let M=0;M<O;M+=1){let B=U+M*h;for(let k=0;k<W;k+=1){let w=k*g,l=B+(w>>3),v=8-g-(w&7),n=V[l]>>v&(1<<g)-1;D4(L,j,J+k,F+M,1,1,P[n])}}U+=x;continue}if(S&&E===0){let P=0,g=0;while(g<O){let h=K4(V,U,K);if(!h)return null;U+=h.bytesPerPixel;let x=n2(V,U);if(!x)return null;U+=x.consumed;for(let M=0;M<x.runLength;M+=1)if(D4(L,j,J+P,F+g,1,1,h.rgba),P+=1,P>=W){if(P=0,g+=1,g>=O)break}}continue}if(S&&E>0){let P=[];for(let x=0;x<E;x+=1){let M=K4(V,U,K);if(!M)return null;U+=M.bytesPerPixel,P.push(M.rgba)}let g=0,h=0;while(h<O){if(V.byteLength<U+1)return null;let x=V[U++],M=x,B=1;if(x&128){M=x&127;let w=n2(V,U);if(!w)return null;U+=w.consumed,B=w.runLength}let k=P[M];if(!k)return null;for(let w=0;w<B;w+=1)if(D4(L,j,J+g,F+h,1,1,k),g+=1,g>=W){if(g=0,h+=1,h>=O)break}}continue}return{consumed:4+N,skipped:!0}}}return{consumed:4+N,rgba:L,decompressed:V}}function HK(_,$,j,Z,Y){let q=Y||X5,Q=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4+Q)return null;let G=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),N=4+Q+G*(Q+8);if(_.byteLength<$+N)return null;let X=$+4,V=K4(_,X,q);if(!V)return null;X+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);D4(U,j,0,0,j,Z,V.rgba);for(let L=0;L<G;L+=1){let F=K4(_,X,q);if(!F)return null;if(X+=F.bytesPerPixel,_.byteLength<X+8)return null;let O=new DataView(_.buffer,_.byteOffset+X,8),J=O.getUint16(0,!1),W=O.getUint16(2,!1),D=O.getUint16(4,!1),E=O.getUint16(6,!1);X+=8,D4(U,j,J,W,D,E,F.rgba)}return{consumed:X-$,rgba:U}}function JK(_,$,j,Z,Y,q){let Q=Y||X5,K=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8)),G=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),N=$,X=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<Z;U+=16){let L=Math.min(16,Z-U);for(let F=0;F<j;F+=16){let O=Math.min(16,j-F);if(_.byteLength<N+1)return null;let J=_[N++];if(J&1){let W=O*L*K;if(_.byteLength<N+W)return null;let D=q(_.slice(N,N+W),O,L,Q);N+=W,i2(G,j,F,U,O,L,D);continue}if(J&2){let W=K4(_,N,Q);if(!W)return null;X=W.rgba,N+=W.bytesPerPixel}if(D4(G,j,F,U,O,L,X),J&4){let W=K4(_,N,Q);if(!W)return null;V=W.rgba,N+=W.bytesPerPixel}if(J&8){if(_.byteLength<N+1)return null;let W=_[N++];for(let D=0;D<W;D+=1){let E=V;if(J&16){let B=K4(_,N,Q);if(!B)return null;E=B.rgba,N+=B.bytesPerPixel}if(_.byteLength<N+2)return null;let S=_[N++],P=_[N++],g=S>>4,h=S&15,x=(P>>4)+1,M=(P&15)+1;D4(G,j,F+g,U+h,x,M,E)}}}}return{consumed:N-$,rgba:G}}var X5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class D8{protocol=f_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:zK,this.pipeline=_.pipeline||null,this.encodings=KK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...X5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:XK()}receive(_){if(_)this.buffer=GK(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),q=K5(Y),Q=UK(q);if(!Q)throw Error(`Unsupported RFB version banner: ${q||"<empty>"}`);this.serverVersion=Q,this.clientVersionText=LK(Q),j.push(VK(this.clientVersionText)),$.push({type:"protocol-version",protocol:f_,server:Q.text.trim(),client:this.clientVersionText.trim()}),this.state=Q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+G)break;this.consume(1);let N=K5(this.consume(4+G).slice(4));throw Error(N||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let q=Array.from(this.consume(Y));$.push({type:"security-types",protocol:f_,types:q});let Q=null;if(q.includes(2)&&this.password!==null)Q=2;else if(q.includes(1))Q=1;else if(q.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${q.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Q)),$.push({type:"security-selected",protocol:f_,securityType:Q,label:Q===2?"VNC Authentication":"None"}),this.state=Q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),q===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let G=K5(this.consume(4+K).slice(4));throw Error(G||"VNC server rejected the connection.")}if(q===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:f_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(q!==1)throw Error(`Unsupported VNC security type ${q}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:f_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push(h2(this.password,Y)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),q!==0){if(this.buffer.byteLength>=4){let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Q){let K=K5(this.consume(4+Q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:f_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),q=Y.getUint16(0,!1),Q=Y.getUint16(2,!1),K=c2(Y,4),G=Y.getUint32(20,!1);if(this.buffer.byteLength<24+G)break;let N=this.consume(24),X=new DataView(N.buffer,N.byteOffset,N.byteLength);if(this.framebufferWidth=X.getUint16(0,!1),this.framebufferHeight=X.getUint16(2,!1),this.serverPixelFormat=c2(X,4),this.serverName=K5(this.consume(G)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(WK(this.clientPixelFormat)),j.push(BK(this.encodings)),j.push(l2(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:f_,width:q,height:Q,name:this.serverName,pixelFormat:K}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,G=[],N=!1,X=!!this.pipeline;for(let U=0;U<Q;U+=1){if(this.buffer.byteLength<K+12){N=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),F=L.getUint16(0,!1),O=L.getUint16(2,!1),J=L.getUint16(4,!1),W=L.getUint16(6,!1),D=L.getInt32(8,!1);if(K+=12,D===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),S=J*W*E;if(this.buffer.byteLength<K+S){N=!0;break}let P=this.buffer.slice(K,K+S);if(K+=S,X)this.pipeline.processRawRect(P,F,O,J,W,this.clientPixelFormat),G.push({kind:"pipeline",x:F,y:O,width:J,height:W});else G.push({kind:"rgba",x:F,y:O,width:J,height:W,rgba:this.decodeRawRect(P,J,W,this.clientPixelFormat)});continue}if(D===2){let E=HK(this.buffer,K,J,W,this.clientPixelFormat);if(!E){N=!0;break}if(X){let S=this.buffer.slice(K,K+E.consumed);this.pipeline.processRreRect(S,F,O,J,W,this.clientPixelFormat),G.push({kind:"pipeline",x:F,y:O,width:J,height:W})}else G.push({kind:"rgba",x:F,y:O,width:J,height:W,rgba:E.rgba});K+=E.consumed;continue}if(D===1){if(this.buffer.byteLength<K+4){N=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),S=E.getUint16(0,!1),P=E.getUint16(2,!1);if(K+=4,X)this.pipeline.processCopyRect(F,O,J,W,S,P),G.push({kind:"pipeline",x:F,y:O,width:J,height:W});else G.push({kind:"copy",x:F,y:O,width:J,height:W,srcX:S,srcY:P});continue}if(D===16){let E=FK(this.buffer,K,J,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){N=!0;break}if(K+=E.consumed,E.skipped)continue;if(X&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,F,O,J,W,this.clientPixelFormat),G.push({kind:"pipeline",x:F,y:O,width:J,height:W});else G.push({kind:"rgba",x:F,y:O,width:J,height:W,rgba:E.rgba});continue}if(D===5){let E=JK(this.buffer,K,J,W,this.clientPixelFormat,this.decodeRawRect);if(!E){N=!0;break}if(X){let S=this.buffer.slice(K,K+E.consumed);this.pipeline.processHextileRect(S,F,O,J,W,this.clientPixelFormat),G.push({kind:"pipeline",x:F,y:O,width:J,height:W})}else G.push({kind:"rgba",x:F,y:O,width:J,height:W,rgba:E.rgba});K+=E.consumed;continue}if(D===-223){if(this.framebufferWidth=J,this.framebufferHeight=W,X)this.pipeline.initFramebuffer(J,W);G.push({kind:"resize",x:F,y:O,width:J,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(N)break;this.consume(K);let V={type:"framebuffer-update",protocol:f_,width:this.framebufferWidth,height:this.framebufferHeight,rects:G};if(X)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(l2(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:f_}),Z=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Q)break;this.consume(8);let K=K5(this.consume(Q));$.push({type:"clipboard",protocol:f_,text:K}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var G4="piclaw://vnc";function OK(_){let $=String(_||"");if($===G4)return null;if(!$.startsWith(`${G4}/`))return null;let j=$.slice(`${G4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function b4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function DK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function AK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function EK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function kK(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function MK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class r2{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=OK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=MK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                        ${$.map((Y)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${b4(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${b4(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${b4(Y.id)}" data-target-label="${b4(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Y=kK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=S5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let q=Y.getAttribute("data-target-open-tab"),Q=Y.getAttribute("data-target-label")||q||"VNC";if(!q)return;this.openTargetTab(q,Q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${b4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${b4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=S5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(q)=>{if(q.key!=="Enter")return;q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=S5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",q=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Y}${q}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=E2($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return O2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(H8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=n6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~n6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of D2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(A2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=d6(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??d6(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Y,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new D8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Y of Z.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of Z.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await J2(),Y={};if(Z)Y.pipeline=Z,Y.decodeRawRect=(K,G,N,X)=>Z.decodeRawRectToRgba(K,G,N,X);let q=S5(this.authPassword);if(q!==null)Y.password=q;if(j)Y.encodings=j;let Q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new D8(Y),this.hasRenderedFrame=Q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q?"none":"";this.socketBoundary=new h6({url:EK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(K)=>{this.applyMetrics(K)},onMessage:(K)=>{this.handleSocketMessage(K)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await DK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${b4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await AK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var Z$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===G4||$.startsWith(`${G4}/`)?9000:!1},mount(_,$){return new r2(_,$)}};function L_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Y1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function V5(_,$=!1){let j=L_(_);if(j===null)return $;return j==="true"}function v5(_,$=null){let j=L_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}var Q$="piclaw_theme",E8="piclaw_tint",a2="piclaw_chat_themes",g5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},t2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},o2={default:{label:"Default",mode:"auto",light:g5,dark:t2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},IK=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],g4={theme:"default",tint:null},e2="light",Y$=!1;function k8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function L5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((q)=>q+q).join(""):j,Y=parseInt(Z,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${Z.toLowerCase()}`}}function xK(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Y=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let q=parseInt(Y[1],10),Q=parseInt(Y[2],10),K=parseInt(Y[3],10);if(![q,Q,K].every((N)=>Number.isFinite(N)))return null;let G=`#${[q,Q,K].map((N)=>N.toString(16).padStart(2,"0")).join("")}`;return{r:q,g:Q,b:K,hex:G}}function _7(_){return L5(_)||xK(_)}function b5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),q=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Y} ${q})`}function q$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function TK(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),q=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Y+0.7152*q+0.0722*Q}function yK(_){return TK(_)>0.4?"#000000":"#ffffff"}function $7(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function K$(_){return o2[_]||o2.default}function PK(_){return _.mode==="auto"?$7():_.mode}function j7(_,$){let j=K$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||g5}function Z7(_,$,j){let Z=_7($);if(!Z)return _;let Y=L5(_.bgPrimary),q=L5(_.bgSecondary),Q=L5(_.bgHover),K=L5(_.borderColor);if(!Y||!q||!Q||!K)return _;let N=L5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:b5(Y,Z,0.08),bgSecondary:b5(q,Z,0.12),bgHover:b5(Q,Z,0.16),borderColor:b5(K,Z,0.08),accent:Z.hex,accentHover:N?b5(Z,N,0.18):Z.hex}}function CK(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Y=_7(Z),q=Y?q$(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Q=Y?q$(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=Y?q$(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",G=Y?yK(Y):$==="dark"?"#000000":"#ffffff",N={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":Q,"--accent-soft-strong":K,"--accent-contrast-text":G,"--danger-color":_.danger||g5.danger,"--success-color":_.success||g5.success,"--search-highlight-color":q||"rgba(29, 155, 240, 0.2)"};Object.entries(N).forEach(([X,V])=>{if(V)j.style.setProperty(X,V)})}function SK(){if(typeof document>"u")return;let _=document.documentElement;IK.forEach(($)=>_.style.removeProperty($))}function U5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function s2(_){let $=k8(g4?.theme||"default"),j=g4?.tint?String(g4.tint).trim():null,Z=j7($,_);if($==="default"&&j)Z=Z7(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?t2.bgPrimary:g5.bgPrimary}function wK(_,$){if(typeof document>"u")return;let j=U5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=U5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",s2("light"));let Y=U5("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",s2("dark"));let q=U5("msapplication-TileColor");if(q&&_)q.setAttribute("content",_);let Q=U5("msapplication-navbutton-color");if(Q&&_)Q.setAttribute("content",_);let K=U5("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function RK(){if(typeof window>"u")return;let _={...g4,mode:e2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function Y7(){try{let _=L_(a2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function uK(_,$,j){let Z=Y7();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};Y1(a2,JSON.stringify(Z))}function fK(_){if(!_)return null;return Y7()[_]||null}function q7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function G$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=k8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Y=K$(j),q=PK(Y),Q=j7(j,q);g4={theme:j,tint:Z},e2=q;let K=document.documentElement;K.dataset.theme=q,K.dataset.colorTheme=j,K.dataset.tint=Z?String(Z):"",K.style.colorScheme=q;let G=Q;if(j==="default"&&Z)G=Z7(Q,Z,q);if(j==="default"&&!Z)SK();else CK(G,q);if(wK(G.bgPrimary,q),RK(),$.persist!==!1)if(Y1(Q$,j),Z)Y1(E8,Z);else Y1(E8,"")}function A8(){if(K$(g4.theme).mode!=="auto")return;G$(g4,{persist:!1})}function Q7(){if(typeof window>"u")return()=>{};let _=q7(),$=fK(_),j=$?k8($.theme||"default"):k8(L_(Q$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Y=L_(E8);return Y?Y.trim():null})();if(G$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!Y$){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",A8);else if(Y.addListener)Y.addListener(A8);return Y$=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",A8);else if(Y.removeListener)Y.removeListener(A8);Y$=!1}}return()=>{}}function K7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||q7(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(uK($,j||"default",Z),G$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")Y1(Q$,j||"default"),Y1(E8,Z||"")}function G7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return $7()}var M8=/#(\w+)/g,vK=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),bK=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),gK=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),mK={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},pK=new Set(["http:","https:","mailto:",""]);function N$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function m4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!pK.has(Z.protocol))return null;return Z.href}catch{return null}}function N7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),q;while(q=Y.nextNode())Z.push(q);for(let Q of Z){let K=Q.tagName.toLowerCase();if(!bK.has(K)){let N=Q.parentNode;if(!N)continue;while(Q.firstChild)N.insertBefore(Q.firstChild,Q);N.removeChild(Q);continue}let G=mK[K]||new Set;for(let N of Array.from(Q.attributes)){let X=N.name.toLowerCase(),V=N.value;if(X.startsWith("on")){Q.removeAttribute(N.name);continue}if(X.startsWith("data-")||X.startsWith("aria-"))continue;if(G.has(X)||gK.has(X)){if(X==="href"){let U=m4(V);if(!U)Q.removeAttribute(N.name);else if(Q.setAttribute(N.name,U),K==="a"&&!Q.getAttribute("rel"))Q.setAttribute("rel","noopener noreferrer")}else if(X==="src"){let U=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,L=m4(U,{allowDataImage:K==="img"});if(!L)Q.removeAttribute(N.name);else Q.setAttribute(N.name,L)}continue}Q.removeAttribute(N.name)}}return j.body.innerHTML}function X7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function I8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Y=X7(j);if(Y===j)break;j=Y}return j}function hK(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=[],q=!1,Q=[];for(let K of j){if(!q&&K.trim().match(/^```mermaid\s*$/i)){q=!0,Q=[];continue}if(q&&K.trim().match(/^```\s*$/)){let G=Z.length;Z.push(Q.join(`
`)),Y.push(`@@MERMAID_BLOCK_${G}@@`),q=!1,Q=[];continue}if(q)Q.push(K);else Y.push(K)}if(q)Y.push("```mermaid"),Y.push(...Q);return{text:Y.join(`
`),blocks:Z}}function cK(_){if(!_)return _;return I8(_,5)}function lK(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function nK(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function dK(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Y=Number(Z),q=$[Y]??"",Q=cK(q);return`<div class="mermaid-container" data-mermaid="${lK(Q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function V7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var iK={span:new Set(["title","class","lang","dir"])};function rK(_,$){let j=iK[_];if(!j||!$)return"";let Z=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,q;while(q=Y.exec($)){let Q=(q[1]||"").toLowerCase();if(!Q||Q.startsWith("on")||!j.has(Q))continue;let K=q[2]??q[3]??q[4]??"";Z.push(` ${Q}="${N$(K)}"`)}return Z.join("")}function U7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Y=Z.startsWith("/"),q=Y?Z.slice(1).trim():Z,K=q.endsWith("/")?q.slice(0,-1).trim():q,[G=""]=K.split(/\s+/,1),N=G.toLowerCase();if(!N||!vK.has(N))return $;if(N==="br")return Y?"":"<br>";if(Y)return`</${N}>`;let X=K.slice(G.length).trim(),V=rK(N,X);return`<${N}${V}>`})}function L7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function W7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(q)=>q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let q=Z(Y.nodeValue);if(q!==Y.nodeValue)Y.nodeValue=q}return $.body.innerHTML}function oK(_){if(!window.katex)return _;let $=(Q)=>X7(Q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Q)=>{let K=[],G=Q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(N)=>{let X=K.length;return K.push(N),`@@CODE_BLOCK_${X}@@`});return G=G.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(N)=>{let X=K.length;return K.push(N),`@@CODE_INLINE_${X}@@`}),{html:G,blocks:K}},Z=(Q,K)=>{if(!K.length)return Q;return Q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(G,N)=>{let X=Number(N);return K[X]??""})},Y=j(_),q=Y.html;return q=q.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Q,K,G)=>{try{let N=katex.renderToString($(G.trim()),{displayMode:!0,throwOnError:!1});return`${K}${N}`}catch(N){return`<span class="math-error" title="${N$(N.message)}">${Q}</span>`}}),q=q.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Q,K,G)=>{if(/\s$/.test(G))return Q;try{let N=katex.renderToString($(G),{displayMode:!1,throwOnError:!1});return`${K}${N}`}catch(N){return`${K}<span class="math-error" title="${N$(N.message)}">$${G}$</span>`}}),Z(q,Y.blocks)}function sK(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Y;while(Y=j.nextNode())Z.push(Y);for(let q of Z){let Q=q.nodeValue;if(!Q)continue;if(M8.lastIndex=0,!M8.test(Q))continue;M8.lastIndex=0;let K=q.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let G=Q.split(M8);if(G.length<=1)continue;let N=$.createDocumentFragment();G.forEach((X,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",X),U.textContent=`#${X}`,N.appendChild(U)}else N.appendChild($.createTextNode(X))}),q.parentNode?.replaceChild(N,q)}return $.body.innerHTML}function aK(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=!1;for(let q of j){if(!Y&&q.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,Z.push("$$");continue}if(Y&&q.trim().match(/^```\s*$/)){Y=!1,Z.push("$$");continue}Z.push(q)}return Z.join(`
`)}function tK(_){let $=aK(_||""),{text:j,blocks:Z}=hK($),Y=I8(j,2),Q=V7(Y).replace(/</g,"&lt;");return{safeHtml:U7(Q),mermaidBlocks:Z}}function W_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Y}=tK(_),q=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return q=L7(q),q=W7(q),q=oK(q),q=sK(q),q=dK(q,Y),q=N7(q,j),q}function m5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=I8($,2),Y=V7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=U7(Y),Q=window.marked?marked.parse(q):q.replace(/\n/g,"<br>");return Q=L7(Q),Q=W7(Q),Q=N7(Q),Q}function eK(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Y,q)=>{let Q=Y.trim().split(/\s+/).map((G)=>{let[N,X]=G.split(",").map(Number);return{x:N,y:X}});if(Q.length<3)return`<polyline${Z}points="${Y}"${q}/>`;let K=[`M ${Q[0].x},${Q[0].y}`];for(let G=1;G<Q.length-1;G++){let N=Q[G-1],X=Q[G],V=Q[G+1],U=X.x-N.x,L=X.y-N.y,F=V.x-X.x,O=V.y-X.y,J=Math.sqrt(U*U+L*L),W=Math.sqrt(F*F+O*O),D=Math.min($,J/2,W/2);if(D<0.5){K.push(`L ${X.x},${X.y}`);continue}let E=X.x-U/J*D,S=X.y-L/J*D,P=X.x+F/W*D,g=X.y+O/W*D,x=U*O-L*F>0?1:0;K.push(`L ${E},${S}`),K.push(`A ${D},${D} 0 0 ${x} ${P},${g}`)}return K.push(`L ${Q[Q.length-1].x},${Q[Q.length-1].y}`),`<path${Z}d="${K.join(" ")}"${q}/>`})}async function N4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=G7()==="dark"?j["tokyo-night"]:j["github-light"],q=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Q of q)try{let K=Q.dataset.mermaid,G=nK(K||""),N=I8(G,2),X=await $(N,{...Y,transparent:!0});X=eK(X),Q.innerHTML=X,Q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let G=document.createElement("pre");G.className="mermaid-error",G.textContent=`Diagram error: ${K.message}`,Q.innerHTML="",Q.appendChild(G),Q.removeAttribute("data-mermaid")}}function B7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Y=Z/1000,q=86400000;if(Z<q){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(Z<5*q){let G=$.toLocaleDateString(void 0,{weekday:"short"}),N=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${G} ${N}`}let Q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Q} ${K}`}function p5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function M_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function p4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function A4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function _G(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=Z?.[1]||j,q=Z?.[2]||"",Q=Z?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),N=Y.startsWith("/")?Y:`${K?`${K}/`:""}${Y}`,X=[];for(let U of N.split("/")){if(!U||U===".")continue;if(U===".."){if(X.length>0)X.pop();continue}X.push(U)}let V=X.join("/");return`${X8(V)}${q}${Q}`}function h5(_){return _?.preview||null}function $G(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Y=Z.lastIndexOf(".");if(Y<=0||Y===Z.length-1)return"none";return Z.slice(Y+1)}function jG(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function ZG(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${A4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${A4(M_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${A4(p4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${A4(jG($))}</span>`),Z.push(`<span><strong>extension:</strong> ${A4($G(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${A4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function YG(_){let $=h5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=ZG(_,$);if($.kind==="image"){let Z=$.url||($.path?X8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${A4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=W_($.text||"",null,{rewriteImageSrc:(Y)=>_G(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${A4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class X${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=YG(this.context)}getContent(){let _=h5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=h5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var V$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=h5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new X$(_,$)}},U$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return h5(_)||_?.path?1:!1},mount(_,$){return new X$(_,$)}};var qG=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),QG={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},KG={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function F7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function z7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class H7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=F7(j),q=KG[Y]||"\uD83D\uDCC4",Q=QG[Y]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${q}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${z7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${z7(Q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let G=K.querySelector("#ov-open-tab");if(G)G.addEventListener("click",()=>{let N=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class J7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,q=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var L$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=F7(_?.path);if(!$||!qG.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new H7(_,$);return new J7(_,$)}};var GG=/\.(csv|tsv)$/i;function O7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class D7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${O7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${O7(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let Q=q.querySelector("#csv-open-tab");if(Q)Q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class A7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var W$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!GG.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new D7(_,$);return new A7(_,$)}};var NG=/\.pdf$/i;function XG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class E7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${XG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#pdf-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class k7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var B$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!NG.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new E7(_,$);return new k7(_,$)}};var VG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function z$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class M7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${z$(Y)}" alt="${z$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${z$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let Q=q.querySelector("#img-open-tab");if(Q)Q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class I7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var F$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!VG.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new M7(_,$);return new I7(_,$)}};var UG=/\.(mp4|m4v|mov|webm|ogv)$/i;function LG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class x7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${LG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#video-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class T7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var H$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!UG.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new x7(_,$);return new T7(_,$)}};function WG(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function BG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var J$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function y7(_){let $=String(_||"").trim();return $?$:J$}function zG(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function FG(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function HG(_,$="*"){try{let j=(q)=>{let Q=_.parent||_.opener;if(!Q)return!1;return Q.postMessage(JSON.stringify({event:"workspace-export",...q}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let q=Z.prototype.saveData;Z.prototype.saveData=function(Q,K,G,N,X,V){try{if(Q&&G!=null&&j({filename:Q,format:K,data:G,mimeType:N,base64Encoded:Boolean(X),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return q.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let q=Y.prototype.exportFile;Y.prototype.exportFile=function(Q,K,G,N,X,V){try{if(K&&j({filename:K,data:Q,mimeType:G,base64Encoded:Boolean(N),mode:X,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return q.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function P7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${FG(j)}`}class C7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${BG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#drawio-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=zG(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let q=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(HG(this.iframe.contentWindow))return;setTimeout(q,250)};q()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=J$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await P7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await P7(_,"image/png");else this.xmlData=y7(await _.text());else if(_.status===404)this.xmlData=J$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?y7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var O$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!WG(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new C7(_,$);return new S7(_,$)}};var JG=/\.mindmap\.ya?ml$/i,D$=String(Date.now());function w7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function A$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,q)=>{let Q=document.createElement("script");Q.src=_,Q.dataset.src=$,Q.onload=()=>Y(),Q.onerror=()=>q(Error(`Failed to load ${_}`)),document.head.appendChild(Q)})}function OG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function DG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(j);let Z=document.createElement("div");Z.id="context-menu",Z.className="context-menu hidden",Z.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Z)}class R7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class u7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(w7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,OG("/static/css/mindmap.css"),await Promise.all([A$("/static/js/vendor/d3-mindmap.min.js?v="+D$),A$("/static/js/vendor/js-yaml.min.js?v="+D$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),DG(this.mindmapEl);let j=w7(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await A$("/static/js/vendor/mindmap-editor.js?v="+D$),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(q)=>{this.lastContent=q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(q)},resolveImagePath:(q)=>{if(q.startsWith("data:")||q.startsWith("http"))return q;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+q)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var E$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!JG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new R7(_,$);return new u7(_,$)}};var AG=/\.kanban\.md$/i,EG=String(Date.now());function f7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function kG(){let _=window;if(_.preact)return;_.preact={h:Q8,render:J4,Component:t4,createContext:a3},_.preactHooks={useState:m,useEffect:b,useCallback:y,useRef:T,useMemo:b0,useReducer:N6,useContext:_2,useLayoutEffect:k5,useImperativeHandle:e3,useErrorBoundary:j2,useDebugValue:$2},_.htm={bind:()=>z}}function MG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,q)=>{let Q=document.createElement("script");Q.src=_,Q.dataset.src=$,Q.onload=()=>Y(),Q.onerror=()=>q(Error(`Failed to load ${_}`)),document.head.appendChild(Q)})}function IG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class v7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y),Y.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class b7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(f7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,IG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=f7();try{if(kG(),await MG("/static/js/vendor/kanban-editor.js?v="+EG),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var k$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!AG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new v7(_,$);return new b7(_,$)}};class g7{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var e0=new g7;function m7(){let[_,$]=m(!1),[j,Z]=m("default"),Y=T(!1);b(()=>{let G=V5("notificationsEnabled",!1);if(Y.current=G,$(G),typeof Notification<"u")Z(Notification.permission)},[]),b(()=>{Y.current=_},[_]);let q=y(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let G=Notification.requestPermission();if(G&&typeof G.then==="function")return G;return Promise.resolve(G)}catch{return Promise.resolve("default")}},[]),Q=y(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let N=await q();if(Z(N||"default"),N!=="granted"){Y.current=!1,$(!1),Y1("notificationsEnabled","false");return}}let G=!Y.current;Y.current=G,$(G),Y1("notificationsEnabled",String(G))},[q]),K=y((G,N)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let X=new Notification(G,{body:N});return X.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:Q,notify:K}}var c5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function p7({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Y]=m(null),[q,Q]=m(!1),K=T(!1),G=T(null),N=T(!1),X=T(null),V=T(null),U=T(0);b(()=>{K.current=q},[q]),b(()=>{V.current=Z},[Z]),b(()=>{U.current+=1,X.current=null,N.current=!1,K.current=!1,Q(!1)},[j]);let L=y(async(J=null)=>{let W=U.current;try{if(J){let D=await V6(J,50,0,j);if(W!==U.current)return;Y(D.posts),Q(!1)}else{let D=await v4(10,null,j);if(W!==U.current)return;Y(D.posts),Q(D.has_more)}}catch(D){if(W!==U.current)return;console.error("Failed to load posts:",D)}},[j]),F=y(async()=>{let J=U.current;try{let W=await v4(10,null,j);if(J!==U.current)return;Y((D)=>{if(!D||D.length===0)return W.posts;return c5([...W.posts,...D])}),Q((D)=>D||W.has_more)}catch(W){if(J!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j]),O=y(async(J={})=>{let W=U.current,D=V.current;if(!D||D.length===0)return;if(N.current)return;let{preserveScroll:E=!0,preserveMode:S="top",allowRepeat:P=!1}=J,g=(M)=>{if(!E){M();return}if(S==="top")$(M);else _(M)},x=D.slice().sort((M,B)=>M.id-B.id)[0]?.id;if(!Number.isFinite(x))return;if(!P&&X.current===x)return;N.current=!0,X.current=x;try{let M=await v4(10,x,j);if(W!==U.current)return;if(M.posts.length>0)g(()=>{Y((B)=>c5([...M.posts,...B||[]])),Q(M.has_more)});else Q(!1)}catch(M){if(W!==U.current)return;console.error("Failed to load more posts:",M)}finally{if(W===U.current)N.current=!1}},[j,_,$]);return b(()=>{G.current=O},[O]),{posts:Z,setPosts:Y,hasMore:q,setHasMore:Q,hasMoreRef:K,loadPosts:L,refreshTimeline:F,loadMore:O,loadMoreRef:G,loadingMoreRef:N,lastBeforeIdRef:X}}function h7(){let[_,$]=m(null),[j,Z]=m({text:"",totalLines:0}),[Y,q]=m(""),[Q,K]=m({text:"",totalLines:0}),[G,N]=m(null),[X,V]=m(null),[U,L]=m(null),F=T(null),O=T(0),J=T(!1),W=T(""),D=T(""),E=T(null),S=T(null),P=T(null),g=T(null),h=T(!1),x=T(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Y,setAgentPlan:q,agentThought:Q,setAgentThought:K,pendingRequest:G,setPendingRequest:N,currentTurnId:X,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:L,lastAgentEventRef:F,lastSilenceNoticeRef:O,isAgentRunningRef:J,draftBufferRef:W,thoughtBufferRef:D,pendingRequestRef:E,stalledPostIdRef:S,currentTurnIdRef:P,steerQueuedTurnIdRef:g,thoughtExpandedRef:h,draftExpandedRef:x}}function c7({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Y=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,L=$.current||280,F=X.currentTarget;F.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let O=U,J=(D)=>{O=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let D=Math.min(Math.max(L+(O-U),160),600);$.current=D,F.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,q=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientX,F=$.current||280,O=X.currentTarget;O.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let S=Math.min(Math.max(F+(E.clientX-L),160),600);V.style.setProperty("--sidebar-width",`${S}px`),$.current=S},W=()=>{O.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round($.current||F))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,Q=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,L=j.current||$.current||280,F=X.currentTarget;F.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let O=U,J=(D)=>{O=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),200),800);V.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let D=Math.min(Math.max(L+(O-U),200),800);j.current=D,F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,K=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientX,F=j.current||$.current||280,O=X.currentTarget;O.classList.add("dragging"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let S=Math.min(Math.max(F+(E.clientX-L),200),800);V.style.setProperty("--editor-width",`${S}px`),j.current=S},W=()=>{O.classList.remove("dragging"),document.body.style.userSelect="",Y1("editorWidth",String(Math.round(j.current||F))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,G=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientY,L=Z?.current||200,F=X.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let O=U,J=(D)=>{O=D.clientY;let E=Math.min(Math.max(L-(D.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${E}px`),Z)Z.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let D=Math.min(Math.max(L-(O-U),100),window.innerHeight*0.5);if(Z)Z.current=D;F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,N=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientY,F=Z?.current||200,O=X.currentTarget;O.classList.add("dragging"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let S=Math.min(Math.max(F-(E.clientY-L),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${S}px`),Z)Z.current=S;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{O.classList.remove("dragging"),document.body.style.userSelect="",Y1("dockHeight",String(Math.round(Z?.current||F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:q,handleEditorSplitterMouseDown:Q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:G,handleDockSplitterTouchStart:N}}function xG(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,q=new Map;for(let[Q,K]of _.entries()){let G=Q;if(Z==="dir"){if(Q===$)G=j,Y=!0;else if(Q.startsWith(`${$}/`))G=`${j}${Q.slice($.length)}`,Y=!0}else if(Q===$)G=j,Y=!0;q.set(G,K)}return Y?q:_}function l7({onTabClosed:_}={}){let $=T(_);$.current=_;let[j,Z]=m(()=>e0.getTabs()),[Y,q]=m(()=>e0.getActiveId()),[Q,K]=m(()=>e0.getTabs().length>0);b(()=>{return e0.onChange((x,M)=>{Z(x),q(M),K(x.length>0)})},[]);let[G,N]=m(()=>new Set),[X,V]=m(()=>new Map),U=y((x)=>{N((M)=>{let B=new Set(M);if(B.has(x))B.delete(x);else B.add(x);return B})},[]),L=y((x)=>{N((M)=>{if(!M.has(x))return M;let B=new Set(M);return B.delete(x),B})},[]),F=y((x)=>{V((M)=>{if(!M.has(x))return M;let B=new Map(M);return B.delete(x),B})},[]),O=y((x,M={})=>{if(!x)return;let B=typeof M?.paneOverrideId==="string"&&M.paneOverrideId.trim()?M.paneOverrideId.trim():null,k={path:x,mode:"edit"};try{if(!(B?d0.get(B):d0.resolve(k))){if(!d0.get("editor")){console.warn(`[openEditor] No pane handler for: ${x}`);return}}}catch(l){console.warn(`[openEditor] paneRegistry.resolve() error for "${x}":`,l)}let w=typeof M?.label==="string"&&M.label.trim()?M.label.trim():void 0;if(e0.open(x,w),B)V((l)=>{if(l.get(x)===B)return l;let v=new Map(l);return v.set(x,B),v})},[]),J=y(()=>{let x=e0.getActiveId();if(x){let M=e0.get(x);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}e0.close(x),L(x),F(x),$.current?.(x)}},[F,L]),W=y((x)=>{let M=e0.get(x);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}e0.close(x),L(x),F(x),$.current?.(x)},[F,L]),D=y((x)=>{e0.activate(x)},[]),E=y((x)=>{let M=e0.getTabs().filter((w)=>w.id!==x&&!w.pinned),B=M.filter((w)=>w.dirty).length;if(B>0){if(!window.confirm(`${B} unsaved tab${B>1?"s":""} will be closed. Continue?`))return}let k=M.map((w)=>w.id);e0.closeOthers(x),k.forEach((w)=>{L(w),F(w),$.current?.(w)})},[F,L]),S=y(()=>{let x=e0.getTabs().filter((k)=>!k.pinned),M=x.filter((k)=>k.dirty).length;if(M>0){if(!window.confirm(`${M} unsaved tab${M>1?"s":""} will be closed. Continue?`))return}let B=x.map((k)=>k.id);e0.closeAll(),B.forEach((k)=>{L(k),F(k),$.current?.(k)})},[F,L]),P=y((x)=>{e0.togglePin(x)},[]),g=y((x)=>{if(!x)return;V((M)=>{if(M.get(x)==="editor")return M;let B=new Map(M);return B.set(x,"editor"),B}),e0.activate(x)},[]),h=y(()=>{let x=e0.getActiveId();if(x)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:x}}))},[]);return b(()=>{let x=(M)=>{let{oldPath:B,newPath:k,type:w}=M.detail||{};if(!B||!k)return;if(w==="dir"){for(let l of e0.getTabs())if(l.path===B||l.path.startsWith(`${B}/`)){let v=`${k}${l.path.slice(B.length)}`;e0.rename(l.id,v)}}else e0.rename(B,k);V((l)=>xG(l,B,k,w))};return window.addEventListener("workspace-file-renamed",x),()=>window.removeEventListener("workspace-file-renamed",x)},[]),b(()=>{let x=(M)=>{if(e0.hasUnsaved())M.preventDefault(),M.returnValue=""};return window.addEventListener("beforeunload",x),()=>window.removeEventListener("beforeunload",x)},[]),{editorOpen:Q,tabStripTabs:j,tabStripActiveId:Y,previewTabs:G,tabPaneOverrides:X,openEditor:O,closeEditor:J,handleTabClose:W,handleTabActivate:D,handleTabCloseOthers:E,handleTabCloseAll:S,handleTabTogglePin:P,handleTabTogglePreview:U,handleTabEditSource:g,revealInExplorer:h}}function M$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[Z],q=Number(Y);return Number.isFinite(q)?q:$}catch{return $}}var I$=M$("warning",30000),n7=M$("finalize",120000),x$=M$("refresh",30000),d7=30000;function i7(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function r7(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function o7(_=30000){let[,$]=m(0);b(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function s7(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Y)=>Z+Math.max(1,Math.ceil(Y.length/$)),0)}async function a7(_){let{panelKey:$,expanded:j,currentTurnIdRef:Z,thoughtExpandedRef:Y,draftExpandedRef:q,setAgentThoughtVisibility:Q,getAgentThought:K,thoughtBufferRef:G,draftBufferRef:N,setAgentThought:X,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let U=Z.current;if($==="thought"){if(Y.current=j,U)try{await Q(U,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=U?await K(U,"thought"):null;if(L?.text)G.current=L.text;X((F)=>({...F||{text:"",totalLines:0},fullText:G.current||F?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:F?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(q.current=j,U)try{await Q(U,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=U?await K(U,"draft"):null;if(L?.text)N.current=L.text;V((F)=>({...F||{text:"",totalLines:0},fullText:N.current||F?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:F?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function T$(_){return String(_||"").trim()||"web:default"}function t7({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function TG(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function E4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function x8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return E4(_)?"Compacting context":"Working..."}function yG(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function T8(_,$=Date.now()){let j=TG(_);if(j===null)return null;return yG(Math.max(0,$-j))}function l5(_){return typeof _==="string"}function e7(_){return typeof _==="string"&&_.trim().length>0}function y$(_){if(!Array.isArray(_))return[];return _.filter(($)=>e7($?.chat_jid)&&e7($?.agent_name))}function _9(_){if(!Array.isArray(_))return[];return _.filter(($)=>l5($?.chat_jid)&&l5($?.agent_name))}function $9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Z=new Map;if(Array.isArray(_)){for(let Q of _)if(l5(Q?.chat_jid))Z.set(Q.chat_jid,Q)}let Y=$.map((Q)=>{if(!l5(Q?.chat_jid))return Q;let K=Z.get(Q.chat_jid);return K?{...Q,...K,is_active:K.is_active??Q.is_active}:Q}),q=l5(j)?j:"";return Y.sort((Q,K)=>{if(Q.chat_jid===q&&K.chat_jid!==q)return-1;if(K.chat_jid===q&&Q.chat_jid!==q)return 1;let G=Boolean(Q.archived_at),N=Boolean(K.archived_at);if(G!==N)return G?1:-1;if(Boolean(Q.is_active)!==Boolean(K.is_active))return Q.is_active?-1:1;return String(Q.chat_jid).localeCompare(String(K.chat_jid))}),Y}var PG={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function j9(_){if(!_||typeof _!=="object")return PG;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function Z9(_){let j=(Array.isArray(_)?_:[]).find((Z)=>Z?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function Y9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Z=String(j),Y=_.agent_name,q=_.agent_avatar;if(!Y&&q===void 0)return null;let Q=$||{id:Z},K=Q.name||null,G=Q.avatar_url??Q.avatarUrl??Q.avatar??null,N=!1,X=!1;if(Y&&Y!==Q.name)K=Y,N=!0;if(q!==void 0){let V=typeof q==="string"?q.trim():null,U=typeof G==="string"?G.trim():null,L=V||null;if(L!==(U||null))G=L,X=!0}if(!N&&!X)return null;return{agentId:Z,nameChanged:N,avatarChanged:X,resolvedName:K,resolvedAvatar:G}}function q9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Z=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Y=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Z&&_.avatar_background===Y)return _;return{name:j,avatar_url:Z,avatar_background:Y}}function Q9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Z=$.user_avatar??$.userAvatar,Y=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Z===void 0&&Y===void 0)return _;let q=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Q=Z===void 0?_.avatar_url:typeof Z==="string"&&Z.trim()?Z.trim():null,K=Y===void 0?_.avatar_background:typeof Y==="string"&&Y.trim()?Y.trim():null;if(_.name===q&&_.avatar_url===Q&&_.avatar_background===K)return _;return{name:q,avatar_url:Q,avatar_background:K}}function CG(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function K9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Z=_.filter((Y)=>!j.has(Y?.id)&&!CG(Y));return Z.length===_.length?_:Z}function G9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Z)=>({...Z})).filter((Z)=>!j.has(Z.row_id)):[]}function N9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Z)=>j?.row_id===$[Z]?.row_id)}function k4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Z)=>Z?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function X9(_,$){let j=Array.isArray(_)?_:[],Z=$?.row_id,Y=$?.content;if(Z==null||typeof Y!=="string"||!Y.trim())return j;if(j.some((q)=>q?.row_id===Z))return j;return[...j,{row_id:Z,content:Y,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function V9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function U9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y}=_;try{let q=await $();j(i7(q));let Q=q?.user||{};Z((G)=>q9(G,Q));let K=Z9(q?.agents);Y(K.name,K.avatarUrl)}catch(q){console.warn("Failed to load agents:",q)}}function L9(_){let{payload:$,agentsRef:j,setAgents:Z,applyBranding:Y}=_,q=Y9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!q)return;if(Z((Q)=>{let G={...Q[q.agentId]||{id:q.agentId}};if(q.nameChanged)G.name=q.resolvedName;if(q.avatarChanged)G.avatar_url=q.resolvedAvatar;return{...Q,[q.agentId]:G}}),q.agentId==="default")Y(q.resolvedName,q.resolvedAvatar,q.avatarChanged?Date.now():null)}function W9(_){let{payload:$,setUserProfile:j}=_;j((Z)=>Q9(Z,$))}function B9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Z,setSupportsThinking:Y,setActiveModelUsage:q}=_,Q=j9($);if(Q.hasModel)j(Q.model);if(Q.hasThinkingLevel)Z(Q.thinkingLevel);if(Q.hasSupportsThinking)Y(Q.supportsThinking);if(Q.hasProviderUsage)q(Q.providerUsage)}function z9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Z,applyModelState:Y}=_,q=$;j(q).then((Q)=>{if(Z.current!==q)return;if(Q)Y(Q)}).catch(()=>{})}function F9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Z,activeChatJidRef:Y,setActiveChatAgents:q}=_,Q=$;Promise.all([j().catch(()=>({chats:[]})),Z(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([K,G])=>{if(Y.current!==Q)return;let N=y$(K?.chats),X=y$(G?.chats);q($9(N,X,Q))}).catch(()=>{if(Y.current!==Q)return;q([])})}function H9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Z}=_;j($).then((Y)=>{Z(_9(Y?.chats))}).catch(()=>{})}function J9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshContextUsage:Y,refreshAutoresearchStatus:q,refreshQueueState:Q}=_;if(!$||typeof $!=="object")return;if(j(),Z(),Y(),q(),V9($))Q()}function P$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function O9(_,$){let j=new Map(_),Z=P$($);if(typeof $?.key==="string"&&$.key&&Z)j.set($.key,Z);else j.delete("autoresearch");return j}function D9(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Z=new Map(_),Y=P$($);if($?.options?.remove||!Y)Z.delete(j);else Z.set(j,Y);return Z}function A9(_){if(_?.options?.remove)return!0;return P$(_)?.state!=="running"}function C$(_,$){return`${_}:${$}`}function E9(_,$,j){let Z=C$($,j);if(_.has(Z))return _;let Y=new Set(_);return Y.add(Z),Y}function k9(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function y8(_,$){if(_.size===0)return _;let j=`${$}:`,Z=new Set(Array.from(_).filter((Y)=>!String(Y).startsWith(j)));return Z.size===_.size?_:Z}async function M9(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Z=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Z)throw Error("No tmux command available.");return await _.writeClipboard(Z),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function n_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function I9(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function S$(_,$){return _&&$}function x9(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function T9(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function y9(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Z=new Set(j),Y=_.filter((q)=>!Z.has(q?.id));return Y.length===_.length?_:Y}function P9(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Z,dismissedQueueRowIdsRef:Y,getAgentQueueState:q,setFollowupQueueItems:Q,clearQueuedSteerStateIfStale:K}=_,G=++j.current,N=$;q(N).then((X)=>{if(G!==j.current)return;if(Z.current!==N)return;let V=Y.current,U=G9(X?.items,V);if(U.length){Q((L)=>N9(L,U)?L:U);return}V.clear(),K(0),Q((L)=>L.length===0?L:[])}).catch(()=>{if(G!==j.current)return;if(Z.current!==N)return;Q((X)=>X.length===0?X:[])})}async function C9(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Z,setContextUsage:Y}=_,q=$;try{let Q=await Z(q);if(j.current!==q)return;if(Q)Y(Q)}catch(Q){if(j.current!==q)return;console.warn("Failed to fetch agent context:",Q)}}async function S9(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Z,setExtensionStatusPanels:Y,setPendingExtensionPanelActions:q}=_,Q=$;try{let K=await Z(Q);if(j.current!==Q)return;Y((G)=>O9(G,K)),q((G)=>y8(G,"autoresearch"))}catch(K){if(j.current!==Q)return;console.warn("Failed to fetch autoresearch status:",K)}}function w9(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshQueueState:Y,refreshContextUsage:q,refreshAutoresearchStatus:Q}=_;$(),j(),Z(),Y(),q(),Q()}function R9(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Z}=_;if(n_($.current))j();Z()}function u9(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Z,minWidth:Y=160,maxWidth:q=600,fallbackWidth:Q=280}=_,K=$("sidebarWidth",null),G=Number.isFinite(K)?Math.min(Math.max(Number(K),Y),q):Q;if(j.current=G,Z)Z.style.setProperty("--sidebar-width",`${G}px`);return G}async function f9(_){let{currentHashtag:$,searchQuery:j,searchScope:Z,currentChatJid:Y,currentRootChatJid:q,loadPosts:Q,searchPosts:K,setPosts:G,setHasMore:N,scrollToBottom:X,isCancelled:V,scheduleRaf:U=(O)=>requestAnimationFrame(O),scheduleTimeout:L=(O,J)=>{setTimeout(O,J)}}=_,F=()=>{if(V())return;U(()=>{if(V())return;L(()=>{if(V())return;X()},0)})};if($){await Q($);return}if(j){try{let O=await K(j,50,0,Y,Z,q);if(V())return;G(Array.isArray(O?.results)?O.results:[]),N(!1)}catch(O){if(V())return;console.error("Failed to search:",O),G([]),N(!1)}return}try{await Q(),F()}catch(O){if(V())return;console.error("Failed to load timeline:",O)}}function SG(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,refreshQueueState:q,intervalMs:Q=60000,scheduleInterval:K=(X,V)=>setInterval(X,V),clearScheduledInterval:G=(X)=>clearInterval(X)}=_;$();let N=K(()=>{j(),Z(),Y(),q()},Q);return()=>{G(N)}}function v9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y,readStoredNumber:q,sidebarWidthRef:Q,appShellRef:K,currentChatJid:G,currentRootChatJid:N,getAgentModels:X,getActiveChatAgents:V,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:F,setCurrentChatBranches:O,setActiveModel:J,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E,agentsRef:S,refreshQueueState:P,refreshContextUsage:g,refreshAutoresearchStatus:h}=_,x=y(async()=>{await U9({getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y})},[Y,$,j,Z]);b(()=>{x(),u9({readStoredNumber:q,sidebarWidthRef:Q,shellElement:K.current})},[K,x,q,Q]);let M=y((d)=>{L9({payload:d,agentsRef:S,setAgents:j,applyBranding:Y})},[S,Y,j]),B=y((d)=>{W9({payload:d,setUserProfile:Z})},[Z]),k=y((d)=>{B9({payload:d,setActiveModel:J,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E})},[J,E,W,D]),w=y(()=>{z9({currentChatJid:G,getAgentModels:X,activeChatJidRef:L,applyModelState:k})},[L,k,G,X]),l=y(()=>{F9({currentChatJid:G,getActiveChatAgents:V,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:F})},[L,G,V,U,F]),v=y(()=>{H9({currentRootChatJid:N,getChatBranches:U,setCurrentChatBranches:O})},[N,U,O]),n=y(()=>{w9({refreshModelState:w,refreshActiveChatAgents:l,refreshCurrentChatBranches:v,refreshQueueState:P,refreshContextUsage:g,refreshAutoresearchStatus:h})},[l,h,g,v,w,P]);return b(()=>SG({refreshModelAndQueueState:n,refreshModelState:w,refreshActiveChatAgents:l,refreshCurrentChatBranches:v,refreshQueueState:P}),[l,v,n,w,P]),{updateAgentProfile:M,updateUserProfile:B,applyModelState:k,refreshModelState:w,refreshActiveChatAgents:l,refreshCurrentChatBranches:v,refreshModelAndQueueState:n}}function b9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function g9(_){return String(_||"").trim()||"web:default"}function m9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function p9(_){if(!_)return!1;return _.status!=="running"}function h9(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function c9(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function l9(_){let{question:$,currentChatJid:j,streamSidePrompt:Z,resolveBtwChatJid:Y,showIntentToast:q,btwAbortRef:Q,setBtwSession:K}=_,G=String($||"").trim();if(!G)return q("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Q.current)Q.current.abort();let N=new AbortController;Q.current=N,K({question:G,answer:"",thinking:"",error:null,model:null,status:"running"});try{let X=await Z(G,{signal:N.signal,chatJid:Y(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")K((U)=>U?{...U,status:"running"}:U)},onThinkingDelta:(V)=>{K((U)=>U?{...U,thinking:`${U.thinking||""}${V||""}`}:U)},onTextDelta:(V)=>{K((U)=>U?{...U,answer:`${U.answer||""}${V||""}`}:U)}});if(Q.current!==N)return!0;K((V)=>V?{...V,answer:X?.result||V.answer||"",thinking:X?.thinking||V.thinking||"",model:X?.model||null,status:"success",error:null}:V)}catch(X){if(N.signal.aborted)return!0;K((V)=>V?{...V,status:"error",error:X?.payload?.error||X?.message||"BTW request failed."}:V)}finally{if(Q.current===N)Q.current=null}return!0}async function n9(_){let{content:$,parseBtwCommand:j,closeBtwPanel:Z,runBtwPrompt:Y,showIntentToast:q}=_,Q=j($);if(!Q)return!1;if(Q.type==="help")return q("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Q.type==="clear")return Z(),q("BTW cleared","Closed the side conversation panel.","info"),!0;if(Q.type==="ask")return await Y(Q.question),!0;return!1}async function d9(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:Z,currentChatJid:Y,sendAgentMessage:q,handleMessageResponse:Q,showIntentToast:K}=_,G=j($);if(!G)return!1;try{let N=await q("default",G,null,[],Z?"queue":null,Y);return Q(N),K(N?.queued==="followup"?"BTW queued":"BTW injected",N?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(N){return K("BTW inject failed",N?.message||"Could not inject BTW answer into chat.","warning"),!1}}function wG(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function RG(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",q=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(q==="svg")return j?{kind:q,svg:j}:{kind:q};return Z?{kind:q,html:Z}:{kind:q}}function M4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function u0(_){return typeof _==="string"&&_.trim()?_.trim():null}function r9(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var o9="__PICLAW_WIDGET_HOST__:";function i9(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function w$(_,$){if(!_||_.type!=="generated_widget")return null;let j=wG(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:r9(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function s9(_){if(!_||typeof _!=="object")return null;let $=RG(_),j=u0(_?.widget_id)||u0(_?.widgetId)||u0(_?.tool_call_id)||u0(_?.toolCallId),Z=u0(_?.tool_call_id)||u0(_?.toolCallId),Y=u0(_?.turn_id)||u0(_?.turnId),q=u0(_?.title)||u0(_?.name)||"Generated widget",Q=u0(_?.subtitle)||"",K=u0(_?.description)||Q,G=u0(_?.status),N=G==="loading"||G==="streaming"||G==="final"||G==="error"?G:"streaming";return{title:q,subtitle:Q,description:K,originPostId:M4(_?.origin_post_id)??M4(_?.originPostId),originChatJid:u0(_?.origin_chat_jid)||u0(_?.originChatJid)||u0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:r9(_?.capabilities,!0),source:"live",status:N,turnId:Y,toolCallId:Z,width:M4(_?.width),height:M4(_?.height),error:u0(_?.error)}}function a9(_){return w$(_,null)!==null}function B_(_){let $=u0(_?.toolCallId)||u0(_?.tool_call_id);if($)return $;let j=u0(_?.widgetId)||u0(_?.widget_id);if(j)return j;let Z=M4(_?.originPostId)??M4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function t9(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((q)=>typeof q==="string"&&q.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function e9(_){return t9(_)?"allow-downloads allow-scripts":"allow-downloads"}function P8(_){return{title:u0(_?.title)||"Generated widget",widgetId:u0(_?.widgetId)||u0(_?.widget_id),toolCallId:u0(_?.toolCallId)||u0(_?.tool_call_id),turnId:u0(_?.turnId)||u0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:u0(_?.status)||"final"}}function C8(_){return{...P8(_),subtitle:u0(_?.subtitle)||"",description:u0(_?.description)||"",error:u0(_?.error)||null,width:M4(_?.width),height:M4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function S8(_){return`${o9}${JSON.stringify(C8(_))}`}function _j(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=u0(_.text)||u0(_.content)||u0(_.message)||u0(_.prompt)||u0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=u0(j.text)||u0(j.content)||u0(j.message)||u0(j.prompt)||u0(j.value);if(Z)return Z}return null}function $j(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function jj(_){let $=u0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return u0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function uG(_){let $=P8(_);return`<script>
(function () {
  const meta = ${i9($)};
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

  const windowNamePrefix = ${i9(o9)};
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
</script>`}function Zj(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Q=j==="svg"?Y:Z;if(!Q)return"";let K=t9(_),G=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),N=j==="svg"?`<div class="widget-svg-shell">${Q}</div>`:Q,X=K?uG(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${G}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${q.replace(/[<&>]/g,"")}</title>
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
<body>${N}</body>
</html>`}function fG(_,$){let j=B_(_);return Boolean(_&&j===$)}function W5(_,$,j){if(!fG(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function Yj(_,$){return{..._,openedAt:$}}function qj(_){let $=B_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function Qj(_,$,j){let Z=s9({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Z)return _;let Y=B_(Z);if(Y&&j.dismissedSessionKeys?.has(Y))return _;let q=B_(_),Q=Boolean(Y&&q&&Y===q),K={...Q&&_?.artifact?_.artifact:{},...Z.artifact||{}};return{...Q&&_?_:{},...Z,artifact:K,source:"live",originChatJid:Z.originChatJid||j.currentChatJid,openedAt:Q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function Kj(_,$){if(!_||_?.source!=="live")return _||null;let j=B_($),Z=B_(_);if(j&&Z&&j!==Z)return _;return null}function Gj(_,$,j){return W5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function R$(_,$,j){if(j.errorMessage)return W5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return W5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function Nj(_,$,j){return W5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function Xj(_,$,j){return W5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function Vj(_,$,j){return W5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function B5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Z=k4(_,j);return{rowId:j,items:Z.items,remainingQueueCount:Z.remainingQueueCount}}function u$(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function I4(_){return _.status==="fulfilled"?_.value:null}function w8(_){return Math.max(0,Math.min(100,_))}function Uj(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Z=$.filter((J)=>J?.data?.is_bot_message).length,Y=$.filter((J)=>!J?.data?.is_bot_message).length,q=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,K=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,G=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,N=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,X=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,F=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),O=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Q,branches:K},agent:{status:F,phase:O,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:U,supportsThinking:Boolean(L)},context:{tokens:N,contextWindow:X,percent:G},queue:{count:q},timeline:{loadedPosts:$.length,botPosts:Z,userPosts:Y,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:w8(Math.round(G))},{key:"queue",label:"Queue",value:w8(q*18)},{key:"activeChats",label:"Active chats",value:w8(Q*12)},{key:"posts",label:"Timeline load",value:w8($.length*5)}]}}function Lj(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function Wj(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function Bj(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function zj(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function Fj(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function Hj(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function Jj(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Z,getAgentStatus:Y,getAgentContext:q,getAgentQueueState:Q,getAgentModels:K,getActiveChatAgents:G,getChatBranches:N,getTimeline:X,rawPosts:V,activeChatAgents:U,currentChatBranches:L,contextUsage:F,followupQueueItems:O,activeModel:J,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E}=_,[S,P,g,h,x,M,B]=await Promise.allSettled([Y(j),q(j),Q(j),K(j),G(),N(Z),X(20,null,j)]);return Uj({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Z,statusPayload:I4(S),contextPayload:I4(P),queuePayload:I4(g),modelsPayload:I4(h),activeChatsPayload:I4(x),branchesPayload:I4(M),timelinePayload:I4(B),rawPosts:V,activeChatAgents:U,currentChatBranches:L,contextUsage:F,followupQueueItems:O,activeModel:J,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E})}function Oj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:q,setFollowupQueueItems:Q,showIntentToast:K,steerAgentQueueItem:G}=_,N=B5(j.current,$);if(!N)return;let{rowId:X}=N;Z.current.add(X),Q((V)=>k4(V,X).items),G(X,T$(Y)).then(()=>{q()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let U=u$("steer");K(U.title,U.detail,"warning"),Z.current.delete(X),q()})}function Dj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:q,setFollowupQueueItems:Q,showIntentToast:K,clearQueuedSteerStateIfStale:G,removeAgentQueueItem:N}=_,X=B5(j.current,$);if(!X)return;let{rowId:V}=X;Z.current.add(V),G?.(X.remainingQueueCount),Q((U)=>k4(U,V).items),N(V,T$(Y)).then(()=>{q()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let L=u$("remove");K(L.title,L.detail,"warning"),Z.current.delete(V),q()})}function Aj(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Z}=_;if(!$||typeof $!=="object")return;let Y=B_($);if(Y)j.current.delete(Y);Z(Yj($,new Date().toISOString()))}function Ej(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Z)=>{let Y=qj(Z);if(Y.dismissedSessionKey)$.current.add(Y.dismissedSessionKey);return Y.nextWidget})}function kj(_){let{event:$,widget:j,currentChatJid:Z,isComposeBoxAgentActive:Y,setFloatingWidget:q,handleCloseFloatingWidget:Q,handleMessageResponse:K,showIntentToast:G,sendAgentMessage:N,buildFloatingWidgetDashboardSnapshot:X}=_,V=typeof $?.kind==="string"?$.kind:"",U=B_(j);if(!V||!U)return;if(V==="widget.close"){Q();return}if(V==="widget.submit"){let L=_j($?.payload),F=$j($?.payload),O=new Date().toISOString();if(q((J)=>Gj(J,U,{kind:V,payload:$?.payload||null,submittedAt:O,submissionText:L})),!L){if(G("Widget submission received","The widget submitted data without a message payload yet.","info",3500),F)Q();return}(async()=>{try{let J=await N("default",L,null,[],Y?"queue":null,Z);K(J),q((D)=>R$(D,U,{submittedAt:O,submissionText:L,queued:J?.queued||null}));let W=Lj(J?.queued);if(G(W.title,W.detail,W.kind,W.durationMs),F)Q()}catch(J){q((D)=>R$(D,U,{submittedAt:O,submissionText:L,errorMessage:J?.message||"Could not send the widget message."}));let W=Wj(J?.message);G(W.title,W.detail,W.kind,W.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let L=new Date().toISOString(),F=Bj($?.payload||null,j?.runtimeState?.refreshCount);if(q((O)=>Nj(O,U,{kind:V,payload:$?.payload||null,eventAt:L,nextRefreshCount:F.nextRefreshCount,shouldBuildDashboard:F.shouldBuildDashboard})),V==="widget.request_refresh")if(F.shouldBuildDashboard)(async()=>{try{let O=await X($?.payload||null);q((W)=>Xj(W,U,{dashboard:O,at:new Date().toISOString(),count:F.nextRefreshCount,echo:$?.payload||null}));let J=zj();G(J.title,J.detail,J.kind,J.durationMs)}catch(O){q((W)=>Vj(W,U,{errorMessage:O?.message||"Could not build dashboard.",at:new Date().toISOString(),count:F.nextRefreshCount}));let J=Fj(O?.message);G(J.title,J.detail,J.kind,J.durationMs)}})();else{let O=Hj();G(O.title,O.detail,O.kind,O.durationMs)}}}function vG(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function Mj(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:Z,showIntentToast:Y,setPendingExtensionPanelActions:q,refreshAutoresearchStatus:Q,stopAutoresearch:K,dismissAutoresearch:G,streamSidePrompt:N,btwAbortRef:X,btwSession:V,setBtwSession:U,sendAgentMessage:L,handleMessageResponse:F,dismissedLiveWidgetKeysRef:O,setFloatingWidget:J,getAgentStatus:W,getAgentContext:D,getAgentQueueState:E,getAgentModels:S,getActiveChatAgents:P,getChatBranches:g,getTimeline:h,rawPosts:x,activeChatAgents:M,currentChatBranches:B,contextUsage:k,followupQueueItemsRef:w,activeModel:l,activeThinkingLevel:v,supportsThinking:n,isAgentTurnActive:d}=_,s=y(async(F0,y0)=>{let v0=typeof F0?.key==="string"?F0.key:"",H0=typeof y0?.key==="string"?y0.key:"",P0=C$(v0,H0);if(!v0||!H0)return;q((Y0)=>E9(Y0,v0,H0));try{let Y0=await M9({panel:F0,action:y0,currentChatJid:$,stopAutoresearch:K,dismissAutoresearch:G,writeClipboard:(E0)=>navigator.clipboard.writeText(E0)});if(Y0.refreshAutoresearchStatus)Q();if(Y0.toast)Y(Y0.toast.title,Y0.toast.detail,Y0.toast.kind,Y0.toast.durationMs)}catch(Y0){Y("Panel action failed",Y0?.message||"Could not complete that action.","warning")}finally{q((Y0)=>k9(Y0,P0))}},[$,G,Q,q,Y,K]),_0=y(()=>{c9({btwAbortRef:X,setBtwSession:U})},[X,U]),t=y(async(F0)=>{return await l9({question:F0,currentChatJid:$,streamSidePrompt:N,resolveBtwChatJid:g9,showIntentToast:Y,btwAbortRef:X,setBtwSession:U})},[X,$,U,Y,N]),K0=y(async({content:F0})=>{return await n9({content:F0,parseBtwCommand:b9,closeBtwPanel:_0,runBtwPrompt:t,showIntentToast:Y})},[_0,t,Y]),N0=y(()=>{if(V?.question)t(V.question)},[V,t]),X0=y(async()=>{await d9({btwSession:V,buildBtwInjectionText:h9,isComposeBoxAgentActive:Z,currentChatJid:$,sendAgentMessage:L,handleMessageResponse:F,showIntentToast:Y})},[V,$,F,Z,L,Y]),T0=y(async(F0=null)=>{return Jj({requestPayload:F0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:W,getAgentContext:D,getAgentQueueState:E,getAgentModels:S,getActiveChatAgents:P,getChatBranches:g,getTimeline:h,rawPosts:x,activeChatAgents:M,currentChatBranches:B,contextUsage:k,followupQueueItems:w.current,activeModel:l,activeThinkingLevel:v,supportsThinking:n,isAgentTurnActive:d})},[M,l,v,k,B,$,j,w,P,D,S,E,W,g,h,d,x,n]),J0=y((F0)=>{Aj({widget:F0,dismissedLiveWidgetKeysRef:O,setFloatingWidget:J})},[O,J]),W0=y(()=>{Ej({dismissedLiveWidgetKeysRef:O,setFloatingWidget:J})},[O,J]),C0=y((F0,y0)=>{kj({event:F0,widget:y0,currentChatJid:$,isComposeBoxAgentActive:Z,setFloatingWidget:J,handleCloseFloatingWidget:W0,handleMessageResponse:F,showIntentToast:Y,sendAgentMessage:L,buildFloatingWidgetDashboardSnapshot:T0})},[T0,$,W0,F,Z,L,J,Y]);return b(()=>{vG({dismissedLiveWidgetKeysRef:O,setFloatingWidget:J})},[$,O,J]),{handleExtensionPanelAction:s,closeBtwPanel:_0,handleBtwIntercept:K0,handleBtwRetry:N0,handleBtwInject:X0,handleOpenFloatingWidget:J0,handleCloseFloatingWidget:W0,handleFloatingWidgetEvent:C0}}function Ij(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function f$(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Z=Array.isArray(_)?_:[];if(Z.includes(j))return Z;return[...Z,j]}function v$(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Z=$.trim();if(!Z)return j;if(!j.includes(Z))return j;return j.filter((Y)=>Y!==Z)}function b$(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Z of _){if(typeof Z!=="string")continue;let Y=Z.trim();if(!Y||j.has(Y))continue;j.add(Y),$.push(Y)}return $}async function xj(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Z,loadPosts:Y}=_;j($),Z(null),await Y($)}async function Tj(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Z,loadPosts:Y}=_;$(null),j(null),Z(null),await Y()}async function yj(_){let{query:$,scope:j,currentChatJid:Z,currentRootChatJid:Y,searchPosts:q,setSearchScope:Q,setSearchQuery:K,setCurrentHashtag:G,setPosts:N,setHasMore:X}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let U=j==="root"||j==="all"?j:"current";Q(U),K(V),G(null),N(null);try{let L=await q(V,50,0,Z,U,Y);N(Array.isArray(L?.results)?L.results:[]),X(!1)}catch(L){console.error("Failed to search:",L),N([])}}async function Pj(_){let{post:$,posts:j,currentChatJid:Z,deletePost:Y,preserveTimelineScrollTop:q,setPosts:Q,setRemovingPostIds:K,hasMoreRef:G,loadMoreRef:N,confirm:X=(W)=>window.confirm(W),showAlert:V=(W)=>alert(W),scheduleTimeout:U=(W,D)=>{setTimeout(W,D)}}=_;if(!$)return;let L=$.id,F=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Z,O=j?.filter((W)=>W?.data?.thread_id===L&&W?.id!==L).length||0;if(O>0){if(!X(`Delete this message and its ${O} replies?`))return}let J=(W)=>{if(!W.length)return;K((D)=>{let E=new Set(D);return W.forEach((S)=>E.add(S)),E}),U(()=>{if(q(()=>{Q((D)=>D?D.filter((E)=>!W.includes(E.id)):D)}),K((D)=>{let E=new Set(D);return W.forEach((S)=>E.delete(S)),E}),G.current)N.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await Y(L,O>0,F);if(W?.ids?.length)J(W.ids)}catch(W){let D=W instanceof Error?W.message:String(W||"");if(O===0&&D.includes("Replies exist")){if(!X("Delete this message and its replies?"))return;let S=await Y(L,!0,F);if(S?.ids?.length)J(S.ids);return}console.error("Failed to delete post:",W),V(`Failed to delete message: ${D}`)}}async function Cj(_){let{id:$,targetChatJid:j,currentChatJid:Z,getThread:Y,setPosts:q,getElementById:Q=(V)=>document.getElementById(V),scheduleRaf:K=(V)=>requestAnimationFrame(V),scheduleTimeout:G=(V,U)=>{setTimeout(V,U)}}=_,N=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),G(()=>V.classList.remove("post-highlight"),2000)},X=Q(`post-${$}`);if(X){N(X);return}try{let V=typeof j==="string"&&j.trim()?j.trim():Z,L=(await Y($,V))?.thread?.[0];if(!L)return;q((F)=>{if(!F)return[L];if(F.some((O)=>O.id===L.id))return F;return[...F,L]}),K(()=>{G(()=>{let F=Q(`post-${$}`);if(F)N(F)},50)})}catch(V){console.error("[scrollToMessage] Failed to fetch message",$,V)}}function bG(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function Sj(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:Z,openEditor:Y,resolvePane:q,tabStripActiveId:Q,setFileRefs:K,setMessageRefs:G,currentChatJid:N,getThread:X,setPosts:V}=_,U=y(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);b(()=>{return()=>{U()}},[U]);let L=y((B)=>{K((k)=>f$(k,B))},[K]),F=y((B)=>{K((k)=>v$(k,B))},[K]),O=y(()=>{K([])},[K]),J=y((B)=>{K(b$(B))},[K]),W=y((B,k=null,w="info",l=3000)=>{U(),$({title:B,detail:k||null,kind:w||"info"}),j.current=setTimeout(()=>{$((v)=>v?.title===B?null:v)},l)},[U,j,$]),D=y((B)=>{let k=Ij(B,{editorOpen:Z,resolvePane:q});if(k.kind==="open"){Y(k.path);return}if(k.kind==="toast")W(k.title,k.detail,k.level)},[Z,Y,q,W]),E=y(()=>{let B=Q;if(B)L(B)},[L,Q]),S=y((B)=>{G((k)=>f$(k,B))},[G]),P=y(async(B,k=null)=>{await Cj({id:B,targetChatJid:k,currentChatJid:N,getThread:X,setPosts:V})},[N,X,V]),g=y((B)=>{G((k)=>v$(k,B))},[G]),h=y(()=>{G([])},[G]),x=y((B)=>{G(b$(B))},[G]),M=y((B)=>{W("Compose failed",bG(B),"error",5000)},[W]);return{clearIntentToast:U,addFileRef:L,removeFileRef:F,clearFileRefs:O,setFileRefsFromCompose:J,showIntentToast:W,openFileFromPill:D,attachActiveEditorFile:E,addMessageRef:S,scrollToMessage:P,removeMessageRef:g,clearMessageRefs:h,setMessageRefsFromCompose:x,handleComposeSubmitError:M}}function gG(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j}=_;$(new Map),j(new Set)}function wj(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:Z,searchQuery:Y,searchScope:q,loadPosts:Q,searchPosts:K,setPosts:G,setHasMore:N,scrollToBottom:X,setExtensionStatusPanels:V,setPendingExtensionPanelActions:U,paneStateOwnerChatJidRef:L,chatPaneStateByChatRef:F,snapshotCurrentChatPaneState:O,restoreChatPaneState:J,dismissedQueueRowIdsRef:W,refreshQueueState:D,refreshAgentStatus:E,refreshContextUsage:S,viewStateRef:P,refreshTimeline:g,refreshModelAndQueueState:h,setFloatingWidget:x,dismissedLiveWidgetKeysRef:M}=_;b(()=>{gG({setExtensionStatusPanels:V,setPendingExtensionPanelActions:U})},[$,V,U]),b(()=>{let w=!1;return f9({currentHashtag:Z,searchQuery:Y,searchScope:q,currentChatJid:$,currentRootChatJid:j,loadPosts:Q,searchPosts:K,setPosts:G,setHasMore:N,scrollToBottom:X,isCancelled:()=>w}),()=>{w=!0}},[$,Z,Y,q,j,Q,X,K,N,G]),b(()=>{let w=L.current||$;F.current.set(w,O())},[F,$,L,O]),b(()=>{let w=L.current||$;if(w===$)return;F.current.set(w,O()),L.current=$,W.current.clear(),J(F.current.get($)||null),D(),E(),S()},[F,$,W,L,E,S,D,J,O]);let B=y(()=>{R9({viewStateRef:P,refreshTimeline:g,refreshModelAndQueueState:h})},[h,g,P]),k=y((w,l="streaming")=>{let v=new Date().toISOString();x((n)=>Qj(n,w,{fallbackStatus:l,currentChatJid:$,dismissedSessionKeys:M.current,updatedAt:v}))},[$,M,x]);return{refreshCurrentView:B,applyLiveGeneratedWidgetUpdate:k}}function Rj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Y}){let q=T(_);q.current=_;let Q=T($);Q.current=$;let K=T(j);K.current=j;let G=T(Z);G.current=Z,b(()=>{let N=new U8((V,U)=>q.current(V,U),(V)=>Q.current(V),{chatJid:Y});N.connect();let X=()=>{N.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")G.current?.()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),N.disconnect()}},[Y])}function mG(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function R8(_,$){return{text:_,totalLines:mG(_,$)}}function g$(_,$){return{text:$?.text||"",totalLines:s7(_),fullText:_}}function uj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function fj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function vj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function h4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function z5(_,$){return Boolean(_)&&!Boolean($)}function bj(_,$){return _||$||null}function u8(_){return _?.turn_id||_?.turnId||null}function F5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function m$(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function gj(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function pG(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function mj(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:pG($,j),panelKey:typeof $?.key==="string"?$.key:""}}function pj(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var hG=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function hj(_){return hG.has(String(_||"").trim())}function cG(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function p$(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(cG(_),{detail:Z})),!0}function cj(_,$,j){let Z=$?.turn_id,Y=$?.chat_jid,q=typeof Y==="string"&&Y.trim()?Y.trim():null,Q=_==="connected"||_==="workspace_update";return{turnId:Z,eventChatJid:q,isGlobalUiEvent:Q,isCurrentChatEvent:q?q===j:Q}}function lj(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function nj(_,$,j){let{currentChatJid:Z,updateAgentProfile:Y,updateUserProfile:q,currentTurnIdRef:Q,activeChatJidRef:K,pendingRequestRef:G,draftBufferRef:N,thoughtBufferRef:X,steerQueuedTurnIdRef:V,thoughtExpandedRef:U,draftExpandedRef:L,draftThrottleRef:F,thoughtThrottleRef:O,viewStateRef:J,followupQueueItemsRef:W,dismissedQueueRowIdsRef:D,scrollToBottomRef:E,hasMoreRef:S,loadMoreRef:P,lastAgentResponseRef:g,wasAgentActiveRef:h,setActiveTurn:x,applyLiveGeneratedWidgetUpdate:M,setFloatingWidget:B,clearLastActivityFlag:k,handleUiVersionDrift:w,setAgentStatus:l,setAgentDraft:v,setAgentPlan:n,setAgentThought:d,setPendingRequest:s,clearAgentRunState:_0,getAgentStatus:t,noteAgentActivity:K0,showLastActivity:N0,refreshTimeline:X0,refreshModelAndQueueState:T0,refreshActiveChatAgents:J0,refreshCurrentChatBranches:W0,notifyForFinalResponse:C0,setContextUsage:F0,refreshContextUsage:y0,refreshQueueState:v0,setFollowupQueueItems:H0,clearQueuedSteerStateIfStale:P0,setSteerQueuedTurnId:Y0,applyModelState:E0,getAgentContext:h0,setExtensionStatusPanels:n0,setPendingExtensionPanelActions:U1,refreshActiveEditorFromWorkspace:a0,showIntentToast:g0,removeStalledPost:m0,setPosts:o0,preserveTimelineScrollTop:s0}=j,{turnId:V0,isCurrentChatEvent:w0}=cj(_,$,Z);if(w0)Y($),q($);if(_==="ui_theme"){K7($);return}let _1=gj(_);if(_1.kind==="update"){if(!w0)return;if(_1.shouldAdoptTurn&&z5(V0,Q.current))x(V0);M($,_1.fallbackStatus||"streaming");return}if(_1.kind==="close"){if(!w0)return;B((p)=>Kj(p,$));return}if(_?.startsWith("agent_")&&!lj(_))k();if(_==="connected"){if(w($?.app_asset_version))return;l(null),v({text:"",totalLines:0}),n(""),d({text:"",totalLines:0}),s(null),G.current=null,_0();let p=Z;if(t(p).then((i)=>{if(K.current!==p)return;if(!i||i.status!=="active"||!i.data)return;let z0=i.data,k0=u8(z0);if(k0)x(k0);K0({clearSilence:!0}),N0(z0);let M0=F5(i.thought);if(M0)X.current=M0.text,d(M0);let G0=F5(i.draft);if(G0)N.current=G0.text,v(G0)}).catch((i)=>{console.warn("Failed to fetch agent status:",i)}),n_(J.current))X0();T0();return}if(_==="agent_status"){if(!w0){if($?.type==="done"||$?.type==="error")J0(),W0();return}if($.type==="done"||$.type==="error"){if(h4(V0,Q.current))return;if($.type==="done"){if(C0(V0||Q.current),n_(J.current))X0();if($.context_usage)F0($.context_usage)}if(y0(),h.current=!1,_0(),D.current.clear(),J0(),v0(),v({text:"",totalLines:0}),n(""),d({text:"",totalLines:0}),s(null),$.type==="error")l({type:"error",title:$.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(V0)x(V0);if(K0({running:!0,clearSilence:!0}),$.type==="thinking")N.current="",X.current="",v({text:"",totalLines:0}),n(""),d({text:"",totalLines:0});l((p)=>{if(p&&p.type===$.type&&p.title===$.title)return p;return $})}return}if(_==="agent_steer_queued"){if(!w0)return;if(h4(V0,Q.current))return;let p=bj(V0,Q.current);if(!p)return;V.current=p,Y0(p);return}if(_==="agent_followup_queued"){if(!w0)return;H0((p)=>X9(p,$)),v0();return}if(_==="agent_followup_consumed"){if(!w0)return;let p=B5(W.current,$);if(p)P0(p.remainingQueueCount),H0((i)=>k4(i,p.rowId).items);if(v0(),n_(J.current))X0();return}if(_==="agent_followup_removed"){if(!w0)return;let p=B5(W.current,$);if(p)D.current.add(p.rowId),P0(p.remainingQueueCount),H0((i)=>k4(i,p.rowId).items);v0();return}if(_==="agent_draft_delta"){if(!w0)return;if(h4(V0,Q.current))return;if(z5(V0,Q.current))x(V0);K0({running:!0,clearSilence:!0}),N.current=fj(N.current,$);let p=Date.now();if(!F.current||p-F.current>=100){F.current=p;let i=N.current;if(L.current)v((z0)=>g$(i,z0));else v(R8(i,null))}return}if(_==="agent_draft"){if(!w0)return;if(h4(V0,Q.current))return;if(z5(V0,Q.current))x(V0);K0({running:!0,clearSilence:!0});let p=$.text||"",i=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")n((z0)=>uj(z0,p,i));else if(!L.current)N.current=p,v(R8(p,$.total_lines));return}if(_==="agent_thought_delta"){if(!w0)return;if(h4(V0,Q.current))return;if(z5(V0,Q.current))x(V0);K0({running:!0,clearSilence:!0}),X.current=vj(X.current,$);let p=Date.now();if(U.current&&(!O.current||p-O.current>=100)){O.current=p;let i=X.current;d((z0)=>g$(i,z0))}return}if(_==="agent_thought"){if(!w0)return;if(h4(V0,Q.current))return;if(z5(V0,Q.current))x(V0);K0({running:!0,clearSilence:!0});let p=$.text||"";if(!U.current)X.current=p,d(R8(p,$.total_lines));return}if(_==="model_changed"){if(!w0)return;E0($);let p=Z;h0(p).then((i)=>{if(K.current!==p)return;if(i)F0(i)}).catch(()=>{});return}let o=mj(_,$,Z);if(o.isStatusPanelWidgetEvent){if(o.eventChatJid!==Z)return;if(!o.panelKey)return;if(n0((p)=>D9(p,$)),A9($))U1((p)=>y8(p,o.panelKey));p$(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));a0($?.updates);return}if(hj(_)){if(!w0)return;p$(_,$);let p=pj(_,$);if(p)g0(p.title,p.detail,p.kind,p.durationMs);return}let Q0=n_(J.current);if(_==="agent_response"){if(!w0)return;m0(),g.current={post:$,turnId:Q.current}}if(I9(_,w0,Q0))o0((p)=>x9(p,$)),E.current?.();if(_==="interaction_updated"){if(!S$(w0,Q0))return;o0((p)=>T9(p,$))}if(_==="interaction_deleted"){if(!S$(w0,Q0))return;let p=$?.ids||[];if(p.length){if(s0(()=>{o0((i)=>y9(i,p))}),S.current)P.current?.({preserveScroll:!0,preserveMode:"top"})}}}function dj(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Z,staleUiReloadScheduledRef:Y,tabStoreHasUnsaved:q,isAgentRunningRef:Q,pendingRequestRef:K,showIntentToast:G}=_,N=typeof $==="string"&&$.trim()?$.trim():null;if(!N||!j||N===j)return!1;if(Z.current===N)return!0;Z.current=N;let X=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!q()&&!X&&!Q.current&&!K.current&&!Y.current)return Y.current=!0,G("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Y.current=!1}},350),!0;return G("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function h$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Z}=_||{};return!$&&!j&&!Z}function ij(_){let{status:$,setConnectionStatus:j,setAgentStatus:Z,setAgentDraft:Y,setAgentPlan:q,setAgentThought:Q,setPendingRequest:K,pendingRequestRef:G,clearAgentRunState:N,hasConnectedOnceRef:X,viewStateRef:V,refreshTimeline:U,refreshAgentStatus:L,refreshQueueState:F,refreshContextUsage:O}=_;if(j($),$!=="connected"){Z(null),Y({text:"",totalLines:0}),q(""),Q({text:"",totalLines:0}),K(null),G.current=null,N();return}if(!X.current){if(X.current=!0,h$(V.current))U();L(),F(),O();return}if(h$(V.current))U();L(),F(),O()}function rj(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Z,refreshQueueState:Y,refreshAgentStatus:q,refreshContextUsage:Q,refreshAutoresearchStatus:K}=_,G=h$($.current);if(j){if(G)Z();Y(),q(),Q(),K();return}if(G)Z();q(),Q(),K()}var lG=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function oj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(Y4({window:j,navigator:Z}))};Y();let Q=lG.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",Y),()=>K.removeEventListener("change",Y);if(typeof K.addListener==="function")return K.addListener(Y),()=>K.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let K of Q)K();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function sj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Y=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),Z.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),Z.removeEventListener?.("visibilitychange",Y)}}function nG(_){return _?15000:60000}function aj(_){let{currentChatJid:$,posts:j,scrollToMessage:Z,handleConnectionStatusChange:Y,loadPosts:q,refreshCurrentView:Q,updateAgentProfile:K,updateUserProfile:G,currentTurnIdRef:N,activeChatJidRef:X,pendingRequestRef:V,draftBufferRef:U,thoughtBufferRef:L,steerQueuedTurnIdRef:F,thoughtExpandedRef:O,draftExpandedRef:J,draftThrottleRef:W,thoughtThrottleRef:D,viewStateRef:E,followupQueueItemsRef:S,dismissedQueueRowIdsRef:P,scrollToBottomRef:g,hasMoreRef:h,loadMoreRef:x,lastAgentResponseRef:M,wasAgentActiveRef:B,setActiveTurn:k,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:l,clearLastActivityFlag:v,handleUiVersionDrift:n,setAgentStatus:d,setAgentDraft:s,setAgentPlan:_0,setAgentThought:t,setPendingRequest:K0,clearAgentRunState:N0,getAgentStatus:X0,noteAgentActivity:T0,showLastActivity:J0,refreshTimeline:W0,refreshModelAndQueueState:C0,refreshActiveChatAgents:F0,refreshCurrentChatBranches:y0,notifyForFinalResponse:v0,setContextUsage:H0,refreshContextUsage:P0,refreshQueueState:Y0,setFollowupQueueItems:E0,clearQueuedSteerStateIfStale:h0,setSteerQueuedTurnId:n0,applyModelState:U1,getAgentContext:a0,setExtensionStatusPanels:g0,setPendingExtensionPanelActions:m0,refreshActiveEditorFromWorkspace:o0,showIntentToast:s0,removeStalledPost:V0,setPosts:w0,preserveTimelineScrollTop:_1,finalizeStalledResponse:o,connectionStatus:Q0,agentStatus:p,refreshAgentStatus:i,refreshAutoresearchStatus:z0}=_,k0=y((G0,I0)=>{nj(G0,I0,{currentChatJid:$,updateAgentProfile:K,updateUserProfile:G,currentTurnIdRef:N,activeChatJidRef:X,pendingRequestRef:V,draftBufferRef:U,thoughtBufferRef:L,steerQueuedTurnIdRef:F,thoughtExpandedRef:O,draftExpandedRef:J,draftThrottleRef:W,thoughtThrottleRef:D,viewStateRef:E,followupQueueItemsRef:S,dismissedQueueRowIdsRef:P,scrollToBottomRef:g,hasMoreRef:h,loadMoreRef:x,lastAgentResponseRef:M,wasAgentActiveRef:B,setActiveTurn:k,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:l,clearLastActivityFlag:v,handleUiVersionDrift:n,setAgentStatus:d,setAgentDraft:s,setAgentPlan:_0,setAgentThought:t,setPendingRequest:K0,clearAgentRunState:N0,getAgentStatus:X0,noteAgentActivity:T0,showLastActivity:J0,refreshTimeline:W0,refreshModelAndQueueState:C0,refreshActiveChatAgents:F0,refreshCurrentChatBranches:y0,notifyForFinalResponse:v0,setContextUsage:H0,refreshContextUsage:P0,refreshQueueState:Y0,setFollowupQueueItems:E0,clearQueuedSteerStateIfStale:h0,setSteerQueuedTurnId:n0,applyModelState:U1,getAgentContext:a0,setExtensionStatusPanels:g0,setPendingExtensionPanelActions:m0,refreshActiveEditorFromWorkspace:o0,showIntentToast:s0,removeStalledPost:V0,setPosts:w0,preserveTimelineScrollTop:_1})},[X,w,U1,N0,v,h0,$,N,P,U,J,W,S,a0,X0,n,h,M,x,T0,v0,V,_1,F0,o0,P0,y0,C0,Y0,W0,V0,g,k,s,_0,d,t,H0,g0,l,E0,m0,K0,w0,n0,s0,J0,F,L,O,D,K,G,E,B]);b(()=>{if(typeof window>"u")return;let G0=window.__PICLAW_TEST_API||{};return G0.emit=k0,G0.reset=()=>{V0(),N0(),d(null),s({text:"",totalLines:0}),_0(""),t({text:"",totalLines:0}),K0(null)},G0.finalize=()=>o(),window.__PICLAW_TEST_API=G0,()=>{if(window.__PICLAW_TEST_API===G0)window.__PICLAW_TEST_API=void 0}},[N0,o,k0,V0,s,_0,d,t,K0]),Rj({handleSseEvent:k0,handleConnectionStatusChange:Y,loadPosts:q,onWake:Q,chatJid:$}),b(()=>{if(!j||j.length===0)return;let G0=location.hash;if(!G0||!G0.startsWith("#msg-"))return;let I0=G0.slice(5);Z(I0),history.replaceState(null,"",location.pathname+location.search)},[j,Z]);let M0=p!==null;b(()=>{if(Q0!=="connected")return;let G0=nG(M0),I0=setInterval(()=>{rj({viewStateRef:E,isAgentActive:M0,refreshTimeline:W0,refreshQueueState:Y0,refreshAgentStatus:i,refreshContextUsage:P0,refreshAutoresearchStatus:z0})},G0);return()=>clearInterval(I0)},[Q0,M0,i,z0,P0,Y0,W0,E]),b(()=>{return sj(()=>{i(),P0(),Y0(),z0()})},[i,z0,P0,Y0])}function tj(_={}){return Y4(_)&&B8(_)}function dG(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function iG(_={},$={}){if(!tj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Y=dG({window:j});if(Y&&Y>0)Z.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Y}function ej(_={}){if(!tj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Y=new Set,q=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of Y)$.clearTimeout?.(V);Y.clear()},Q=()=>{Z=0,iG({window:$,document:j})},K=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(Q)??0},G=()=>{K();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Y.delete(U),K()},V);if(U!=null)Y.add(U)}},N=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;G()},X=$.visualViewport;return G(),$.addEventListener("focus",G),$.addEventListener("pageshow",G),$.addEventListener("resize",G),$.addEventListener("orientationchange",G),j.addEventListener("visibilitychange",N),j.addEventListener("focusin",G,!0),X?.addEventListener?.("resize",G),X?.addEventListener?.("scroll",G),()=>{q(),$.removeEventListener("focus",G),$.removeEventListener("pageshow",G),$.removeEventListener("resize",G),$.removeEventListener("orientationchange",G),j.removeEventListener("visibilitychange",N),j.removeEventListener("focusin",G,!0),X?.removeEventListener?.("resize",G),X?.removeEventListener?.("scroll",G)}}function rG(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function i1(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:rG($,j)}function _Z(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,Y=_?.popOutPane,q=(G)=>{let N=G?.detail?.path,X=typeof G?.detail?.label==="string"&&G.detail.label.trim()?G.detail.label.trim():void 0;if(N)Z?.(N,X)},Q=(G)=>{let N=G?.detail?.path,X=typeof G?.detail?.label==="string"&&G.detail.label.trim()?G.detail.label.trim():void 0;if(N)Y?.(N,X)},K=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return K.forEach((G)=>j.addEventListener(G,q)),j.addEventListener("pane:popout",Q),()=>{K.forEach((G)=>j.removeEventListener(G,q)),j.removeEventListener("pane:popout",Q)}}function $Z(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(Y)=>{if(Y?.ctrlKey&&Y.key==="`")Y.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function jZ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,Y=_?.exitZenMode,q=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Q=(K)=>{if(K?.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault?.(),Z?.();return}if(K?.key==="Escape"&&q())K.preventDefault?.(),Y?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function ZZ(_,$){let j=Array.isArray(_)?_:[];return j.find((Z)=>Z?.id===$)||j[0]||null}function YZ(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function qZ(_,$,j){return _||$?.label||j||"Pane"}function QZ(_,$,j){let Z=Array.isArray(_)?_.length:0,Y=Boolean(j&&$?.has?.(j));return Z>1||Y}function KZ(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function GZ(_,$,j,Z){return _===$&&!j||Z}function NZ(_,$,j,Z,Y){return _||!$&&(j||Z&&Y)}function f8(_){let $=c$(_);return $?`@${$}`:""}function c$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function v8(_,$=""){let j=String(_||""),Z=c$(j),Y=c$($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let q=`@${Z}`;if(Z===Y)return{normalized:Z,handle:q,canSubmit:!1,kind:"info",message:`Already using ${q}.`};if(Z!==j.trim())return{normalized:Z,handle:q,canSubmit:!0,kind:"info",message:`Will save as ${q}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:q,canSubmit:!0,kind:"success",message:`Saving as ${q}.`}}function XZ(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?f8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function oG(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Y===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function b8(_,$={}){let j=f8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=oG(_,$);return Y.length>0?`${j} — ${Z} • ${Y.join(" • ")}`:`${j} — ${Z}`}function VZ(_,$,j){let Z=f8(_),Y=f8($),q=String(j||"").trim();if(Z&&Y&&Z!==Y)return`Restored archived ${Z} as ${Y} because ${Z} is already in use.`;if(Y)return`Restored ${Y}.`;if(Z)return`Restored ${Z}.`;return`Restored ${q||"branch"}.`}var sG="piclaw_btw_session",LZ=900,UZ="__piclawRenameBranchFormLock__";function aG(){try{return import.meta.url}catch{return null}}function l$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function g8(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function WZ(_={}){let $=_.importMetaUrl===void 0?aG():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Y=$?new URL($).searchParams.get("v"):null;if(Y&&Y.trim())return Y.trim()}catch{}try{let q=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((G)=>String(G?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!q)return null;let K=new URL(q,Z).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function BZ(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[UZ];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[UZ]=Z,Z}function zZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function FZ(_={}){let $=typeof _.readItem==="function"?_.readItem:L_,j=_.storageKey||sG,Z=$(j);if(!Z)return null;try{let Y=JSON.parse(Z);if(!Y||typeof Y!=="object")return null;let q=typeof Y.question==="string"?Y.question:"",Q=typeof Y.answer==="string"?Y.answer:"",K=typeof Y.thinking==="string"?Y.thinking:"",G=typeof Y.error==="string"&&Y.error.trim()?Y.error:null,N=Y.status==="running"?"error":Y.status==="success"||Y.status==="error"?Y.status:"success";return{question:q,answer:Q,thinking:K,error:N==="error"?G||"BTW stream interrupted. You can retry.":G,model:null,status:N}}catch{return null}}function HZ(_,$={}){let j=$.defaultChatJid||"web:default",Z=g8(_,"chat_jid",j),Y=l$(_?.get?.("chat_only")||_?.get?.("chat-only")),q=l$(_?.get?.("pane_popout")),Q=g8(_,"pane_path"),K=g8(_,"pane_label"),G=l$(_?.get?.("branch_loader")),N=g8(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:Y,panePopoutMode:q,panePopoutPath:Q,panePopoutLabel:K,branchLoaderMode:G,branchLoaderSourceChatJid:N}}function JZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:Y,getFormLock:q,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:K,now:G=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let N=q?.()||null;if(!N)return!1;if(Z||G<Number(Y||0)||N.inFlight||G<Number(N.cooldownUntil||0))return!1;return Q?.(j.agent_name||""),K?.(!0),!0}function OZ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function DZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:Y,renameBranchInFlightRef:q,renameBranchLockUntilRef:Q,getFormLock:K,setIsRenamingBranch:G,renameChatBranch:N,refreshActiveChatAgents:X,refreshCurrentChatBranches:V,showIntentToast:U,closeRenameForm:L,now:F=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return Y?.(),!1;let O=F(),J=K?.()||null;if(!J)return!1;if(q.current||O<Number(Q.current||0)||J.inFlight||O<Number(J.cooldownUntil||0))return!1;q.current=!0,J.inFlight=!0,G?.(!0);try{let W=j.agent_name||"",D=v8(Z,W);if(!D.canSubmit)return U?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let E=D.normalized||W,S=await N(j.chat_jid,{agentName:E});await Promise.allSettled([X?.(),V?.()]);let P=S?.branch?.agent_name||E||W;return U?.("Branch renamed",`@${P}`,"info",3500),L?.(),!0}catch(W){let D=W instanceof Error?W.message:String(W||"Could not rename branch."),E=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{q.current=!1,G?.(!1);let W=F()+LZ;Q.current=W;let D=K?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=W}}async function AZ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:Y,currentChatBranches:q=[],activeChatAgents:Q=[],pruneChatBranch:K,refreshActiveChatAgents:G,refreshCurrentChatBranches:N,showIntentToast:X,baseHref:V,chatOnlyMode:U,navigate:L,confirm:F=(g)=>window.confirm(g)}=_;if(!$)return!1;let O=typeof j==="string"&&j.trim()?j.trim():"",J=typeof Z==="string"&&Z.trim()?Z.trim():"",W=O||Y?.chat_jid||J;if(!W)return X?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Y?.chat_jid===W?Y:null)||q.find((g)=>g?.chat_jid===W)||Q.find((g)=>g?.chat_jid===W)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return X?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let S=`@${D?.agent_name||W}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!F(`Prune ${S}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await K(W),await Promise.allSettled([G?.(),N?.()]);let g=D?.root_chat_jid||"web:default";X?.("Branch pruned",`${S} has been archived.`,"info",3000);let h=q4(V,g,{chatOnly:U});return L?.(h),!0}catch(g){let h=g instanceof Error?g.message:String(g||"Could not prune branch.");return X?.("Could not prune branch",h||"Could not prune branch.","warning",5000),!1}}async function EZ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:Y,refreshCurrentChatBranches:q,showIntentToast:Q,baseHref:K,chatOnlyMode:G,navigate:N}=_,X=typeof $==="string"?$.trim():"";if(!X||typeof j!=="function")return!1;try{let V=Z.find((W)=>W?.chat_jid===X)||null,U=await j(X);await Promise.allSettled([Y?.(),q?.()]);let L=U?.branch,F=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():X,O=VZ(V?.agent_name,L?.agent_name,F);Q?.("Branch restored",O,"info",4200);let J=q4(K,F,{chatOnly:G});return N?.(J),!0}catch(V){let U=V instanceof Error?V.message:String(V||"Could not restore branch.");return Q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function kZ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:Y,baseHref:q,isCancelled:Q=()=>!1}=_;try{Z?.({status:"running",message:"Preparing a new chat branch…"});let K=await j($);if(Q())return!1;let G=K?.branch,N=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null;if(!N)throw Error("Branch fork did not return a chat id.");let X=q4(q,N,{chatOnly:!0});return Y?.(X,{replace:!0}),!0}catch(K){if(Q())return!1;return Z?.({status:"error",message:y5(K)}),!1}}function MZ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Z,chatOnlyMode:Y,currentHref:q,navigate:Q}=_;if(!$)return!1;let K=typeof j==="string"?j.trim():"";if(!K||K===Z)return!1;let G=q4(q,K,{chatOnly:Y});return Q?.(G),!0}async function IZ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Z,dockInstanceRef:Y,terminalTabPath:q}=_,K=(typeof j==="string"?j.trim():"")===$?Z.current:$===q?Y.current:null;if(typeof K?.preparePopoutTransfer!=="function")return null;return await K.preparePopoutTransfer()}function xZ(_){let{panePath:$,terminalTabPath:j,dockVisible:Z,resolveTab:Y,closeTab:q,setDockVisible:Q}=_,K=Y($);if(K&&!K.dirty){q($);return}if($===j&&Z)Q(!1)}function TZ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Z,editorWidthRef:Y,dockHeightRef:q,sidebarWidthRef:Q,readStoredNumber:K}=_;if(!j||!$||!Z)return;if(!Y.current){let G=K("editorWidth",null),N=Q.current||280;Y.current=Number.isFinite(G)?Number(G):N}if(Z.style.setProperty("--editor-width",`${Y.current}px`),!q.current){let G=K("dockHeight",null);q.current=Number.isFinite(G)?Number(G):200}Z.style.setProperty("--dock-height",`${q.current}px`)}async function yZ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:Y,refreshCurrentChatBranches:q,showIntentToast:Q,navigate:K,baseHref:G}=_;try{let X=(await Z($))?.branch,V=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Y?.(),q?.()]);let U=X?.agent_name?`@${X.agent_name}`:V;Q?.("New branch created",`Switched to ${U}.`,"info",2500);let L=q4(G,V,{chatOnly:j});return K?.(L),!0}catch(N){return Q?.("Could not create branch",y5(N),"warning",5000),!1}}async function PZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:Y,showIntentToast:q,resolveSourceTransfer:Q,closeSourcePaneIfTransferred:K,currentChatJid:G,baseHref:N}=_;if(!$||j)return!1;let X=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!X)return!1;let V=L2(X);if(!V)return q?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=b6(V);if(!U)return q?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;g6(U,{title:typeof Y==="string"&&Y.trim()?`Opening ${Y}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let L=await Q?.(X),F=U2(N,X,{label:typeof Y==="string"&&Y.trim()?Y.trim():void 0,chatJid:G,params:L});return m6(U,F),K?.(X),!0}catch(L){p6(U);let F=L instanceof Error?L.message:"Could not transfer pane state to the new window.";return q?.("Could not open pane window",F,"warning",5000),!1}}async function CZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:Y,forkChatBranch:q,getActiveChatAgents:Q,getChatBranches:K,setActiveChatAgents:G,setCurrentChatBranches:N,showIntentToast:X,baseHref:V}=_;if(!$||j)return!1;let U=X2(Z);if(!U)return X?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let F=V2(V,Z,{chatOnly:!0});if(!window.open(F,U.target))return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=b6(U);if(!L)return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;g6(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let O=(await q(Z))?.branch,J=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");try{let D=await Q?.();G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await K?.(Y);N?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let W=q4(V,J,{chatOnly:!0});return m6(L,W),!0}catch(F){return p6(L),X?.("Could not open branch window",y5(F),"error",5000),!1}}function tG(_){_(($)=>!$)}function eG(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,navigate:Y,hasWindow:q=typeof window<"u",currentHref:Q=q?window.location.href:"http://localhost/"}=_;return MZ({hasWindow:q,nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,currentHref:Q,navigate:Y})}function _N(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:Q,hasWindow:K=typeof window<"u"}=_;return JZ({hasWindow:K,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:Q})}function $N(_){OZ(_)}async function jN(_){let{hasWindow:$=typeof window<"u",...j}=_;await DZ({hasWindow:$,...j})}async function ZN(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await AZ({hasWindow:$,baseHref:j,...Z})}async function YN(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await EZ({baseHref:j,...Z})}function qN(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:q,hasWindow:Q=typeof window<"u",baseHref:K=Q?window.location.href:"http://localhost/",runBranchLoaderImpl:G=kZ}=_;if(!$||!Q)return;let N=!1;return G({branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:q,baseHref:K,isCancelled:()=>N}),()=>{N=!0}}async function QN(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await yZ({baseHref:j,...Z})}async function KN(_){let{isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:q,tabStripActiveId:Q,editorInstanceRef:K,dockInstanceRef:G,terminalTabPath:N,dockVisible:X,resolveTab:V,closeTab:U,setDockVisible:L,hasWindow:F=typeof window<"u",baseHref:O=F?window.location.href:"http://localhost/"}=_;await PZ({hasWindow:F,isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:q,baseHref:O,resolveSourceTransfer:(J)=>IZ({panePath:J,tabStripActiveId:Q,editorInstanceRef:K,dockInstanceRef:G,terminalTabPath:N}),closeSourcePaneIfTransferred:(J)=>{xZ({panePath:J,terminalTabPath:N,dockVisible:X,resolveTab:V,closeTab:U,setDockVisible:L})}})}function GN(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:Z=_Z}=_;return Z({openTab:(Y,q)=>$(Y,q?{label:q}:void 0),popOutPane:(Y,q)=>{j(Y,q)}})}async function NN(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await CZ({hasWindow:$,baseHref:j,...Z})}function XN(_){let{hasWindow:$=typeof window<"u",...j}=_;TZ({hasWindow:$,...j})}function SZ(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:Z,navigate:Y,currentBranchRecord:q,renameBranchInFlightRef:Q,renameBranchLockUntilRef:K,getFormLock:G,setRenameBranchNameDraft:N,setIsRenameBranchFormOpen:X,setIsRenamingBranch:V,renameChatBranch:U,refreshActiveChatAgents:L,refreshCurrentChatBranches:F,showIntentToast:O,currentChatBranches:J,activeChatAgents:W,pruneChatBranch:D,restoreChatBranch:E,branchLoaderMode:S,branchLoaderSourceChatJid:P,forkChatBranch:g,setBranchLoaderState:h,currentRootChatJid:x,isWebAppMode:M,getActiveChatAgents:B,getChatBranches:k,setActiveChatAgents:w,setCurrentChatBranches:l,openEditor:v,tabStripActiveId:n,editorInstanceRef:d,dockInstanceRef:s,terminalTabPath:_0,dockVisible:t,resolveTab:K0,closeTab:N0,setDockVisible:X0,editorOpen:T0,shellElement:J0,editorWidthRef:W0,dockHeightRef:C0,sidebarWidthRef:F0,readStoredNumber:y0}=_,v0=y(()=>{tG($)},[$]),H0=y((m0)=>{eG({nextChatJid:m0,currentChatJid:j,chatOnlyMode:Z,navigate:Y})},[Z,j,Y]),P0=y(()=>{_N({currentBranchRecord:q,renameBranchInFlight:Q.current,renameBranchLockUntil:K.current,getFormLock:G,setRenameBranchNameDraft:N,setIsRenameBranchFormOpen:X})},[q,G,Q,K,X,N]),Y0=y(()=>{$N({setIsRenameBranchFormOpen:X,setRenameBranchNameDraft:N})},[X,N]),E0=y(async(m0)=>{await jN({currentBranchRecord:q,nextName:m0,openRenameForm:P0,renameBranchInFlightRef:Q,renameBranchLockUntilRef:K,getFormLock:G,setIsRenamingBranch:V,renameChatBranch:U,refreshActiveChatAgents:L,refreshCurrentChatBranches:F,showIntentToast:O,closeRenameForm:Y0})},[Y0,q,G,P0,L,F,Q,K,U,V,O]),h0=y(async(m0=null)=>{await ZN({targetChatJid:m0,currentChatJid:j,currentBranchRecord:q,currentChatBranches:J,activeChatAgents:W,pruneChatBranch:D,refreshActiveChatAgents:L,refreshCurrentChatBranches:F,showIntentToast:O,chatOnlyMode:Z,navigate:Y})},[W,Z,q,J,j,Y,D,L,F,O]),n0=y(async(m0)=>{await YN({targetChatJid:m0,restoreChatBranch:E,currentChatBranches:J,refreshActiveChatAgents:L,refreshCurrentChatBranches:F,showIntentToast:O,chatOnlyMode:Z,navigate:Y})},[Z,J,Y,L,F,E,O]);b(()=>qN({branchLoaderMode:S,branchLoaderSourceChatJid:P,forkChatBranch:g,setBranchLoaderState:h,navigate:Y}),[S,P,g,Y,h]);let U1=y(async()=>{await QN({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:g,refreshActiveChatAgents:L,refreshCurrentChatBranches:F,showIntentToast:O,navigate:Y})},[Z,j,g,Y,L,F,O]),a0=y(async(m0,o0)=>{await KN({isWebAppMode:M,path:m0,label:o0,showIntentToast:O,currentChatJid:j,tabStripActiveId:n,editorInstanceRef:d,dockInstanceRef:s,terminalTabPath:_0,dockVisible:t,resolveTab:K0,closeTab:N0,setDockVisible:X0})},[N0,j,s,t,d,M,K0,X0,O,n,_0]);b(()=>GN({openEditor:v,popOutPane:(m0,o0)=>{a0(m0,o0)}}),[a0,v]);let g0=y(async()=>{await NN({isWebAppMode:M,currentChatJid:j,currentRootChatJid:x,forkChatBranch:g,getActiveChatAgents:B,getChatBranches:k,setActiveChatAgents:w,setCurrentChatBranches:l,showIntentToast:O})},[j,x,g,B,k,M,w,l,O]);return b(()=>{XN({editorOpen:T0,shellElement:J0,editorWidthRef:W0,dockHeightRef:C0,sidebarWidthRef:F0,readStoredNumber:y0})},[C0,T0,W0,y0,J0,F0]),{toggleWorkspace:v0,handleBranchPickerChange:H0,openRenameCurrentBranchForm:P0,closeRenameCurrentBranchForm:Y0,handleRenameCurrentBranch:E0,handlePruneCurrentBranch:h0,handleRestoreBranch:n0,handleCreateSessionFromCompose:U1,handlePopOutPane:a0,handlePopOutChat:g0}}function m8(_){return _?{..._}:{text:"",totalLines:0}}function wZ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function VN(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function UN(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function RZ(_){return{agentStatus:_.agentStatus,agentDraft:m8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:m8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:wZ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:VN(_.silentRecovery)}}function uZ(_){let $=_.snapshot||UN(),{refs:j,setters:Z}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Z.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Z.setAgentStatus($.agentStatus||null),Z.setAgentDraft(m8($.agentDraft)),Z.setAgentPlan($.agentPlan||""),Z.setAgentThought(m8($.agentThought)),Z.setPendingRequest($.pendingRequest||null),Z.setCurrentTurnId($.currentTurnId||null),Z.setSteerQueuedTurnId($.steerQueuedTurnId||null),Z.setFollowupQueueItems(wZ($.followupQueueItems)),Z.setActiveModel($.activeModel||null),Z.setActiveThinkingLevel($.activeThinkingLevel||null),Z.setSupportsThinking(Boolean($.supportsThinking)),Z.setActiveModelUsage($.activeModelUsage??null),Z.setContextUsage($.contextUsage??null),$}var LN=400,n$=60,fZ=220,d$="mdPreviewHeight";function WN(){try{let _=localStorage.getItem(d$),$=_?Number(_):NaN;return Number.isFinite($)&&$>=n$?$:fZ}catch{return fZ}}function p8({getContent:_,path:$,onClose:j}){let[Z,Y]=m(""),[q,Q]=m(WN),K=T(null),G=T(null),N=T(""),X=T(_);return X.current=_,b(()=>{let L=()=>{let O=X.current?.()||"";if(O===N.current)return;N.current=O;try{let J=W_(O,null,{sanitize:!1});Y(J)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let F=setInterval(L,LN);return()=>clearInterval(F)},[]),b(()=>{if(K.current&&Z)N4(K.current).catch(()=>{})},[Z]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let F=L.clientY,O=G.current?.offsetHeight||q,J=G.current?.parentElement,W=J?J.offsetHeight*0.7:500,D=L.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(P)=>{let g=Math.min(Math.max(O-(P.clientY-F),n$),W);Q(g)},S=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(d$,String(Math.round(G.current?.offsetHeight||q)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",S)}}
            onTouchStart=${(L)=>{L.preventDefault();let F=L.touches[0];if(!F)return;let O=F.clientY,J=G.current?.offsetHeight||q,W=G.current?.parentElement,D=W?W.offsetHeight*0.7:500,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let S=(g)=>{let h=g.touches[0];if(!h)return;g.preventDefault();let x=Math.min(Math.max(J-(h.clientY-O),n$),D);Q(x)},P=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(d$,String(Math.round(G.current?.offsetHeight||q)))}catch{}document.removeEventListener("touchmove",S),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}}
        ></div>
        <div class="md-preview-panel" ref=${G} style=${{height:q+"px"}}>
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
    `}function vZ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function BN(_){return _==="error"?"Could not open branch window":"Opening branch…"}function bZ(_){return z`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${BN(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function gZ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Z,panePopoutHasMenuActions:Y,panePopoutTitle:q,tabStripTabs:Q,tabStripActiveId:K,handleTabActivate:G,previewTabs:N,handleTabTogglePreview:X,editorContainerRef:V,getPaneContent:U,panePopoutPath:L}=_;return z`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${j&&!Z&&z`
          <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
            ${Y?z`
                <details class="pane-popout-controls-menu">
                  <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                    <span class="pane-popout-controls-title">${q}</span>
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="4.5 6.5 8 10 11.5 6.5" />
                    </svg>
                  </summary>
                  <div class="pane-popout-controls-panel">
                    ${Q.length>1&&z`
                      <div class="pane-popout-controls-section">
                        <div class="pane-popout-controls-section-title">Open panes</div>
                        <div class="pane-popout-controls-list">
                          ${Q.map((F)=>z`
                            <button
                              type="button"
                              class=${`pane-popout-controls-item${F.id===K?" active":""}`}
                              onClick=${(O)=>{G(F.id),O.currentTarget.closest("details")?.removeAttribute("open")}}
                            >
                              ${F.label}
                            </button>
                          `)}
                        </div>
                      </div>
                    `}
                    ${K&&N.has(K)&&z`
                      <button
                        type="button"
                        class="pane-popout-controls-action"
                        onClick=${(F)=>{X(K),F.currentTarget.closest("details")?.removeAttribute("open")}}
                      >
                        Hide preview
                      </button>
                    `}
                  </div>
                </details>
              `:z`
                <div class="pane-popout-controls-label" aria-label=${q}>${q}</div>
              `}
          </div>
        `}
        ${j?z`<div class="editor-pane-host" ref=${V}></div>`:z`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${L||"No pane path provided."}</p>
            </div>
          `}
        ${j&&K&&N.has(K)&&z`
          <${p8}
            getContent=${U}
            path=${K}
            onClose=${()=>X(K)}
          />
        `}
      </div>
    </div>
  `}function h8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function zN(_,$){let j=h8(_),Z=h8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function i$(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function r$(_,$,j=Date.now(),Z=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},q=String($||"").trim().toLowerCase();if(!q)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>Z?q:`${Y.value}${q}`,updatedAt:j}}function FN(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,q=[];for(let Q=0;Q<j;Q+=1)q.push((Y+Q)%j);return q}function HN(_,$,j=0,Z=(Y)=>Y){let Y=h8($);if(!Y)return-1;let q=Array.isArray(_)?_:[],Q=FN(q.length,j),K=q.map((G)=>h8(Z(G)));for(let G of Q)if(K[G].startsWith(Y))return G;for(let G of Q)if(K[G].includes(Y))return G;return-1}function o$(_,$,j=-1,Z=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let q=Z(Y[j]);if(zN(q,$))return j}return HN(Y,$,0,Z)}function c8(_){return String(_||"").trim().toLowerCase()}function s$(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return c8($[1]||"")}function JN(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Y=c8(Z?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(Z)}return j}function mZ(_,$,j={}){let Z=s$($);if(Z==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return JN(_).filter((q)=>{if(Y&&q?.chat_jid===Y)return!1;return c8(q?.agent_name).startsWith(Z)})}function a$(_){let $=c8(_);return $?`@${$} `:""}function pZ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function v_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Y,removeTitle:q="Remove",icon:Q="file"}){let K=`${_}-file-pill`,G=`${_}-file-name`,N=`${_}-file-remove`,X=Q==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${K} title=${j||$} onClick=${Y}>
      ${X}
      <span class=${G}>${$}</span>
      ${Z&&z`
        <button
          class=${N}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${q}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var ON=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function DN({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Y=_.contextWindow,q="Compact context",K=`${Z!=null?`Context: ${hZ(Z)} / ${hZ(Y)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,G=9,N=2*Math.PI*9,X=j/100*N,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
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
                    stroke-dasharray=${`${X} ${N}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function hZ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function AN(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let N=0;N<j.length;N+=1)if(j[N].trim()==="Files:"&&j[N+1]&&/^\s*-\s+/.test(j[N+1])){Z=N;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let N=j[q];if(/^\s*-\s+/.test(N))Y.push(N.replace(/^\s*-\s+/,"").trim());else if(!N.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let Q=j.slice(0,Z),K=j.slice(q);return{content:[...Q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function EN(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let N=0;N<j.length;N+=1)if(j[N].trim()==="Referenced messages:"&&j[N+1]&&/^\s*-\s+/.test(j[N+1])){Z=N;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let N=j[q];if(/^\s*-\s+/.test(N)){let X=N.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Y.push(X[1])}else if(!N.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let Q=j.slice(0,Z),K=j.slice(q);return{content:[...Q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function kN(_){let $=AN(_||""),j=EN($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function t$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return z`
        <div class="compose-queue-stack">
            ${_.map((Y)=>{let q=typeof Y?.content==="string"?Y.content:"",Q=kN(q);if(!Q.text.trim()&&Q.fileRefs.length===0&&Q.messageRefs.length===0)return null;return z`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${q}>
                            ${Q.text.trim()&&z`<div class="compose-queue-stack-text">${Q.text}</div>`}
                            ${(Q.messageRefs.length>0||Q.fileRefs.length>0)&&z`
                                <div class="compose-queue-stack-refs">
                                    ${Q.messageRefs.map((K)=>z`
                                        <${v_}
                                            key=${"queue-msg-"+K}
                                            prefix="compose"
                                            label=${"msg:"+K}
                                            title=${"Message reference: "+K}
                                            icon="message"
                                        />
                                    `)}
                                    ${Q.fileRefs.map((K)=>{let G=K.split("/").pop()||K;return z`
                                            <${v_}
                                                key=${"queue-file-"+K}
                                                prefix="compose"
                                                label=${G}
                                                title=${K}
                                                onClick=${()=>Z?.(K)}
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
                                onClick=${()=>$?.(Y)}
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
                                onClick=${()=>j?.(Y)}
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
    `}function cZ({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Y,onSearchScopeChange:q,onEnterSearch:Q,onExitSearch:K,fileRefs:G=[],onRemoveFileRef:N,onClearFileRefs:X,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:L,activeModel:F=null,modelUsage:O=null,thinkingLevel:J=null,supportsThinking:W=!1,contextUsage:D=null,onContextCompact:E,notificationsEnabled:S=!1,notificationPermission:P="default",onToggleNotifications:g,onModelChange:h,onModelStateChange:x,activeEditorPath:M=null,onAttachEditorFile:B,onOpenFilePill:k,followupQueueItems:w=[],onInjectQueuedFollowup:l,onRemoveQueuedFollowup:v,onSubmitIntercept:n,onMessageResponse:d,onPopOutChat:s,isAgentActive:_0=!1,activeChatAgents:t=[],currentChatJid:K0="web:default",connectionStatus:N0="connected",onSetFileRefs:X0,onSetMessageRefs:T0,onSubmitError:J0,onSwitchChat:W0,onRenameSession:C0,isRenameSessionInProgress:F0=!1,onCreateSession:y0,onDeleteSession:v0,onRestoreSession:H0,showQueueStack:P0=!0,statusNotice:Y0=null}){let[E0,h0]=m(""),[n0,U1]=m(""),[a0,g0]=m([]),[m0,o0]=m(!1),[s0,V0]=m([]),[w0,_1]=m(0),[o,Q0]=m(!1),[p,i]=m([]),[z0,k0]=m(0),[M0,G0]=m(!1),[I0,p0]=m(!1),[O0,f0]=m(!1),[D0,Z0]=m(!1),[C,e]=m([]),[B0,A0]=m(0),[i0,j1]=m(0),[q1,f1]=m(!1),[r1,I_]=m(0),[o1,S1]=m(null),[g1,v1]=m(()=>Date.now()),$1=T(null),m1=T(null),d_=T(null),s1=T(null),i_=T(null),b_=T(null),J1=T(null),p1=T(null),O1=T({value:"",updatedAt:0}),X1=T(0),L1=T(!1),G_=200,N_=(H)=>{let R=new Set,c=[];for(let j0 of H||[]){if(typeof j0!=="string")continue;let S0=j0.trim();if(!S0||R.has(S0))continue;R.add(S0),c.push(S0)}return c},y1=()=>{let H=L_("piclaw_compose_history");if(!H)return[];try{let R=JSON.parse(H);if(!Array.isArray(R))return[];return N_(R)}catch{return[]}},h1=(H)=>{Y1("piclaw_compose_history",JSON.stringify(H))},V1=T(y1()),k1=T(-1),a1=T(""),c1=E0.trim()||a0.length>0||G.length>0||V.length>0,r_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),x_=typeof window<"u"&&typeof Notification<"u",o_=typeof window<"u"?Boolean(window.isSecureContext):!1,X4=x_&&o_&&P!=="denied",F_=P==="granted"&&S,T_=E4(Y0),x4=x8(Y0),T4=typeof Y0?.detail==="string"&&Y0.detail.trim()?Y0.detail.trim():"",Z1=T_?T8(Y0,g1):null,D1=F_?"Disable notifications":"Enable notifications",V4=a0.length>0||G.length>0||V.length>0,t1=N0==="disconnected"?"Reconnecting":String(N0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(H)=>H.toUpperCase()),H_=N0==="disconnected"?"Reconnecting":`Connection: ${t1}`,l1=(Array.isArray(t)?t:[]).filter((H)=>!H?.archived_at),F1=(()=>{for(let H of Array.isArray(t)?t:[]){let R=typeof H?.chat_jid==="string"?H.chat_jid.trim():"";if(R&&R===K0)return H}return null})(),P1=Boolean(F1&&F1.chat_jid===(F1.root_chat_jid||F1.chat_jid)),Q1=b0(()=>{let H=new Set,R=[];for(let c of Array.isArray(t)?t:[]){let j0=typeof c?.chat_jid==="string"?c.chat_jid.trim():"";if(!j0||j0===K0||H.has(j0))continue;if(!(typeof c?.agent_name==="string"?c.agent_name.trim():""))continue;H.add(j0),R.push(c)}return R},[t,K0]),e1=Q1.length>0,__=e1&&typeof W0==="function",$_=e1&&typeof H0==="function",g_=Boolean(F0||L1.current),w1=!j&&typeof C0==="function"&&!g_,C1=!j&&typeof y0==="function",j_=!j&&typeof v0==="function"&&!P1,y_=!j&&(__||$_||w1||C1||j_),W1=F||"",J_=W&&J?` (${J})`:"",K1=J_.trim()?`${J}`:"",P_=typeof O?.hint_short==="string"?O.hint_short.trim():"",O_=[K1||null,P_||null].filter(Boolean).join(" • "),y4=[W1?`Current model: ${W1}${J_}`:null,O?.plan?`Plan: ${O.plan}`:null,P_||null,O?.primary?.reset_description||null,O?.secondary?.reset_description||null].filter(Boolean),c4=I0?"Switching model…":y4.join(" • ")||`Current model: ${W1}${J_} (tap to open model picker)`,C_=(H)=>{if(!H||typeof H!=="object")return;let R=H.model??H.current;if(typeof x==="function")x({model:R??null,thinking_level:H.thinking_level??null,supports_thinking:H.supports_thinking,provider_usage:H.provider_usage??null});if(R&&typeof h==="function")h(R)},m_=(H)=>{let R=H||$1.current;if(!R)return;R.style.height="auto",R.style.height=`${R.scrollHeight}px`,R.style.overflowY="hidden"},P4=(H)=>{if(!H.startsWith("/")||H.includes(`
`)){Q0(!1),V0([]);return}let R=H.toLowerCase().split(" ")[0];if(R.length<1){Q0(!1),V0([]);return}let c=ON.filter((j0)=>j0.name.startsWith(R)||j0.name.replace(/-/g,"").startsWith(R.replace(/-/g,"")));if(c.length>0&&!(c.length===1&&c[0].name===R))G0(!1),i([]),V0(c),_1(0),Q0(!0);else Q0(!1),V0([])},s_=(H)=>{let R=E0,c=R.indexOf(" "),j0=c>=0?R.slice(c):"",S0=H.name+j0;h0(S0),Q0(!1),V0([]),requestAnimationFrame(()=>{let B1=$1.current;if(!B1)return;let A1=S0.length;B1.selectionStart=A1,B1.selectionEnd=A1,B1.focus()})},l4=(H)=>{if(s$(H)==null){G0(!1),i([]);return}let R=mZ(l1,H,{currentChatJid:K0});if(R.length>0&&!(R.length===1&&a$(R[0].agent_name).trim().toLowerCase()===String(H||"").trim().toLowerCase()))Q0(!1),V0([]),i(R),k0(0),G0(!0);else G0(!1),i([])},a_=(H)=>{let R=a$(H?.agent_name);if(!R)return;h0(R),G0(!1),i([]),requestAnimationFrame(()=>{let c=$1.current;if(!c)return;let j0=R.length;c.selectionStart=j0,c.selectionEnd=j0,c.focus()})},p_=()=>{if(j||!__&&!$_&&!w1&&!C1&&!j_)return!1;return O1.current={value:"",updatedAt:0},f0(!1),Q0(!1),V0([]),G0(!1),i([]),Z0(!0),!0},n1=(H)=>{if(H?.preventDefault?.(),H?.stopPropagation?.(),j||!__&&!$_&&!w1&&!C1&&!j_)return;if(D0){O1.current={value:"",updatedAt:0},Z0(!1);return}p_()},n4=(H)=>{let R=typeof H==="string"?H.trim():"";if(Z0(!1),!R||R===K0){requestAnimationFrame(()=>$1.current?.focus());return}W0?.(R)},d4=async(H)=>{let R=typeof H==="string"?H.trim():"";if(Z0(!1),!R||typeof H0!=="function"){requestAnimationFrame(()=>$1.current?.focus());return}try{await H0(R)}catch(c){console.warn("Failed to restore session:",c),requestAnimationFrame(()=>$1.current?.focus())}},J5=(H)=>{let c=(Array.isArray(H)?H:[]).findIndex((j0)=>!j0?.disabled);return c>=0?c:0},H1=b0(()=>{let H=[];for(let R of Q1){let c=Boolean(R?.archived_at),j0=typeof R?.agent_name==="string"?R.agent_name.trim():"",S0=typeof R?.chat_jid==="string"?R.chat_jid.trim():"";if(!j0||!S0)continue;H.push({type:"session",key:`session:${S0}`,label:`@${j0} — ${S0}${R?.is_active?" active":""}${c?" archived":""}`,chat:R,disabled:c?!$_:!__})}if(C1)H.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(w1)H.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:g_});if(j_)H.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return H},[Q1,$_,__,C1,w1,j_,g_]),U4=async(H)=>{if(H?.preventDefault)H.preventDefault();if(H?.stopPropagation)H.stopPropagation();if(typeof C0!=="function"||F0||L1.current)return;L1.current=!0,Z0(!1);try{await C0()}catch(R){console.warn("Failed to rename session:",R)}finally{L1.current=!1}requestAnimationFrame(()=>$1.current?.focus())},i4=async()=>{if(typeof y0!=="function")return;Z0(!1);try{await y0()}catch(H){console.warn("Failed to create session:",H)}requestAnimationFrame(()=>$1.current?.focus())},X_=async()=>{if(typeof v0!=="function")return;Z0(!1);try{await v0(K0)}catch(H){console.warn("Failed to delete session:",H)}requestAnimationFrame(()=>$1.current?.focus())},Z_=(H)=>{if(j)U1(H);else h0(H),P4(H),l4(H);requestAnimationFrame(()=>m_())},t_=(H)=>{let R=j?n0:E0,c=R&&!R.endsWith(`
`)?`
`:"",j0=`${R}${c}${H}`.trimStart();Z_(j0)},C4=(H)=>{let R=H?.command?.model_label;if(R)return R;let c=H?.command?.message;if(typeof c==="string"){let j0=c.match(/•\s+([^\n]+?)\s+\(current\)/);if(j0?.[1])return j0[1].trim()}return null},S4=async(H)=>{if(j||I0)return;p0(!0);try{let R=await j5("default",H,null,[],null,K0),c=C4(R);C_({model:c??F??null,thinking_level:R?.command?.thinking_level,supports_thinking:R?.command?.supports_thinking});try{let j0=await M5(K0);if(j0)C_(j0)}catch{}return _?.(),!0}catch(R){return console.error("Failed to switch model:",R),alert("Failed to switch model: "+R.message),!1}finally{p0(!1)}},r4=async()=>{await S4("/cycle-model")},e_=async(H)=>{if(!H||I0)return;if(await S4(`/model ${H}`))f0(!1)},D_=(H)=>{if(!H||H.disabled)return;if(H.type==="session"){let R=H.chat;if(R?.archived_at)d4(R.chat_jid);else n4(R.chat_jid);return}if(H.type==="action"){if(H.action==="new"){i4();return}if(H.action==="rename"){U4();return}if(H.action==="delete")X_()}},O5=(H)=>{H.preventDefault(),H.stopPropagation(),O1.current={value:"",updatedAt:0},Z0(!1),f0((R)=>!R)},L4=async()=>{if(j)return;E?.(),await A_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},w4=(H)=>{if(H==="queue"||H==="steer"||H==="auto")return H;return _0?"queue":void 0},A_=async(H,R,c={})=>{let{includeMedia:j0=!0,includeFileRefs:S0=!0,includeMessageRefs:B1=!0,clearAfterSubmit:A1=!0,recordHistory:R1=!0}=c||{},_4=typeof H==="string"?H:H&&typeof H?.target?.value==="string"?H.target.value:E0,R4=typeof _4==="string"?_4:"";if(!R4.trim()&&(j0?a0.length===0:!0)&&(S0?G.length===0:!0)&&(B1?V.length===0:!0))return;Q0(!1),V0([]),G0(!1),i([]),Z0(!1),S1(null);let o4=j0?[...a0]:[],W4=S0?[...G]:[],d1=B1?[...V]:[],h_=R4.trim();if(R1&&h_){let S_=V1.current,M1=N_(S_.filter((D5)=>D5!==h_));if(M1.push(h_),M1.length>200)M1.splice(0,M1.length-200);V1.current=M1,h1(M1),k1.current=-1,a1.current=""}let o8=()=>{if(j0)g0([...o4]);if(S0)X0?.(W4);if(B1)T0?.(d1);h0(h_),requestAnimationFrame(()=>m_())};if(A1)h0(""),g0([]),X?.(),L?.();(async()=>{try{if(await n?.({content:h_,submitMode:R,fileRefs:W4,messageRefs:d1,mediaFiles:o4})){_?.();return}let M1=[];for(let q_ of o4){let B4=await J6(q_);M1.push(B4.id)}let D5=W4.length?`Files:
${W4.map((q_)=>`- ${q_}`).join(`
`)}`:"",s8=d1.length?`Referenced messages:
${d1.map((q_)=>`- message:${q_}`).join(`
`)}`:"",A5=M1.length?`Attachments:
${M1.map((q_,B4)=>{let s4=o4[B4]?.name||`attachment-${B4+1}`;return`- attachment:${q_} (${s4})`}).join(`
`)}`:"",a8=[h_,D5,s8,A5].filter(Boolean).join(`

`),u4=await j5("default",a8,null,M1,w4(R),K0);if(d?.(u4),u4?.command){C_({model:u4.command.model_label??F??null,thinking_level:u4.command.thinking_level,supports_thinking:u4.command.supports_thinking});try{let q_=await M5(K0);if(q_)C_(q_)}catch{}}_?.()}catch(S_){if(A1)o8();let M1=S_?.message||"Failed to send message.";S1(M1),J0?.(M1),console.error("Failed to post:",S_)}})()},A=(H)=>{l?.(H)},I=y((H)=>{if(j||!O0&&!D0||H?.isComposing)return!1;let R=()=>{H.preventDefault?.(),H.stopPropagation?.()},c=()=>{O1.current={value:"",updatedAt:0}};if(H.key==="Escape"){if(R(),c(),O0)f0(!1);if(D0)Z0(!1);return!0}if(O0){if(H.key==="ArrowDown"){if(R(),c(),C.length>0)A0((j0)=>(j0+1)%C.length);return!0}if(H.key==="ArrowUp"){if(R(),c(),C.length>0)A0((j0)=>(j0-1+C.length)%C.length);return!0}if((H.key==="Enter"||H.key==="Tab")&&C.length>0)return R(),c(),e_(C[Math.max(0,Math.min(B0,C.length-1))]),!0;if(i$(H)&&C.length>0){R();let j0=r$(O1.current,H.key);O1.current=j0;let S0=o$(C,j0.value,B0,(B1)=>B1);if(S0>=0)A0(S0);return!0}}if(D0){if(H.key==="ArrowDown"){if(R(),c(),H1.length>0)j1((j0)=>(j0+1)%H1.length);return!0}if(H.key==="ArrowUp"){if(R(),c(),H1.length>0)j1((j0)=>(j0-1+H1.length)%H1.length);return!0}if((H.key==="Enter"||H.key==="Tab")&&H1.length>0)return R(),c(),D_(H1[Math.max(0,Math.min(i0,H1.length-1))]),!0;if(i$(H)&&H1.length>0){R();let j0=r$(O1.current,H.key);O1.current=j0;let S0=o$(H1,j0.value,i0,(B1)=>B1.label);if(S0>=0)j1(S0);return!0}}return!1},[j,O0,D0,C,B0,H1,i0,e_]),f=(H)=>{if(H.isComposing)return;if(j&&H.key==="Escape"){H.preventDefault(),U1(""),K?.();return}if(I(H))return;let R=$1.current?.value??(j?n0:E0);if(pZ(H,R,{searchMode:j,showSessionSwitcherButton:y_})){H.preventDefault(),p_();return}if(M0&&p.length>0){let c=$1.current?.value??(j?n0:E0);if(!String(c||"").match(/^@([a-zA-Z0-9_-]*)$/))G0(!1),i([]);else{if(H.key==="ArrowDown"){H.preventDefault(),k0((j0)=>(j0+1)%p.length);return}if(H.key==="ArrowUp"){H.preventDefault(),k0((j0)=>(j0-1+p.length)%p.length);return}if(H.key==="Tab"||H.key==="Enter"){H.preventDefault(),a_(p[z0]);return}if(H.key==="Escape"){H.preventDefault(),G0(!1),i([]);return}}}if(o&&s0.length>0){let c=$1.current?.value??(j?n0:E0);if(!String(c||"").startsWith("/"))Q0(!1),V0([]);else{if(H.key==="ArrowDown"){H.preventDefault(),_1((j0)=>(j0+1)%s0.length);return}if(H.key==="ArrowUp"){H.preventDefault(),_1((j0)=>(j0-1+s0.length)%s0.length);return}if(H.key==="Tab"){H.preventDefault(),s_(s0[w0]);return}if(H.key==="Enter"&&!H.shiftKey){if(!R.includes(" ")){H.preventDefault();let S0=s0[w0];Q0(!1),V0([]),A_(S0.name);return}}if(H.key==="Escape"){H.preventDefault(),Q0(!1),V0([]);return}}}if(!j&&(H.key==="ArrowUp"||H.key==="ArrowDown")&&!H.metaKey&&!H.ctrlKey&&!H.altKey&&!H.shiftKey){let c=$1.current;if(!c)return;let j0=c.value||"",S0=c.selectionStart===0&&c.selectionEnd===0,B1=c.selectionStart===j0.length&&c.selectionEnd===j0.length;if(H.key==="ArrowUp"&&S0||H.key==="ArrowDown"&&B1){let A1=V1.current;if(!A1.length)return;H.preventDefault();let R1=k1.current;if(H.key==="ArrowUp"){if(R1===-1)a1.current=j0,R1=A1.length-1;else if(R1>0)R1-=1;k1.current=R1,Z_(A1[R1]||"")}else{if(R1===-1)return;if(R1<A1.length-1)R1+=1,k1.current=R1,Z_(A1[R1]||"");else k1.current=-1,Z_(a1.current||""),a1.current=""}requestAnimationFrame(()=>{let _4=$1.current;if(!_4)return;let R4=_4.value.length;_4.selectionStart=R4,_4.selectionEnd=R4});return}}if(H.key==="Enter"&&!H.shiftKey&&(H.ctrlKey||H.metaKey)){if(H.preventDefault(),j){if(R.trim())Y?.(R.trim(),Z)}else A_(R,"steer");return}if(H.key==="Enter"&&!H.shiftKey)if(H.preventDefault(),j){if(R.trim())Y?.(R.trim(),Z)}else A_(R)},u=(H)=>{let R=Array.from(H||[]).filter((c)=>c instanceof File&&!String(c.name||"").startsWith(".DS_Store"));if(!R.length)return;g0((c)=>[...c,...R]),S1(null)},r=(H)=>{u(H.target.files),H.target.value=""},q0=(H)=>{if(j)return;H.preventDefault(),H.stopPropagation(),X1.current+=1,o0(!0)},U0=(H)=>{if(j)return;if(H.preventDefault(),H.stopPropagation(),X1.current=Math.max(0,X1.current-1),X1.current===0)o0(!1)},L0=(H)=>{if(j)return;if(H.preventDefault(),H.stopPropagation(),H.dataTransfer)H.dataTransfer.dropEffect="copy";o0(!0)},$0=(H)=>{if(j)return;H.preventDefault(),H.stopPropagation(),X1.current=0,o0(!1),u(H.dataTransfer?.files||[])},R0=(H)=>{if(j)return;let R=H.clipboardData?.items;if(!R||!R.length)return;let c=[];for(let j0 of R){if(j0.kind!=="file")continue;let S0=j0.getAsFile?.();if(S0)c.push(S0)}if(c.length>0)H.preventDefault(),u(c)},I1=(H)=>{g0((R)=>R.filter((c,j0)=>j0!==H))},E_=()=>{S1(null),g0([]),X?.(),L?.()},Y_=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((H)=>{let{latitude:R,longitude:c,accuracy:j0}=H.coords,S0=`${R.toFixed(5)}, ${c.toFixed(5)}`,B1=Number.isFinite(j0)?` ±${Math.round(j0)}m`:"",A1=`https://maps.google.com/?q=${R},${c}`,R1=`Location: ${S0}${B1} ${A1}`;t_(R1)},(H)=>{let R=H?.message||"Unable to retrieve location.";alert(`Location error: ${R}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};b(()=>{if(!O0)return;O1.current={value:"",updatedAt:0},f1(!0),M5(K0).then((H)=>{let R=Array.isArray(H?.models)?H.models.filter((c)=>typeof c==="string"&&c.trim().length>0):[];R.sort((c,j0)=>c.localeCompare(j0,void 0,{sensitivity:"base"})),e(R),C_(H)}).catch((H)=>{console.warn("Failed to load model list:",H),e([])}).finally(()=>{f1(!1)})},[O0,F]),b(()=>{if(j)f0(!1),Z0(!1),Q0(!1),V0([]),G0(!1),i([])},[j]),b(()=>{if(D0&&!y_)Z0(!1)},[D0,y_]),b(()=>{if(!O0)return;let H=C.findIndex((R)=>R===F);A0(H>=0?H:0)},[O0,C,F]),b(()=>{if(!D0)return;j1(J5(H1)),O1.current={value:"",updatedAt:0}},[D0,K0]),b(()=>{if(!O0)return;let H=(R)=>{let c=s1.current,j0=i_.current,S0=R.target;if(c&&c.contains(S0))return;if(j0&&j0.contains(S0))return;f0(!1)};return document.addEventListener("pointerdown",H),()=>document.removeEventListener("pointerdown",H)},[O0]),b(()=>{if(!D0)return;let H=(R)=>{let c=b_.current,j0=J1.current,S0=R.target;if(c&&c.contains(S0))return;if(j0&&j0.contains(S0))return;Z0(!1)};return document.addEventListener("pointerdown",H),()=>document.removeEventListener("pointerdown",H)},[D0]),b(()=>{if(j||!O0&&!D0)return;let H=(R)=>{I(R)};return document.addEventListener("keydown",H,!0),()=>document.removeEventListener("keydown",H,!0)},[j,O0,D0,I]),b(()=>{if(!O0)return;let H=s1.current;H?.focus?.(),H?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,B0,C]),b(()=>{if(!D0)return;let H=b_.current;H?.focus?.(),H?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[D0,i0,H1.length]),b(()=>{let H=()=>{let B1=p1.current?.clientWidth||0;I_((A1)=>A1===B1?A1:B1)};H();let R=p1.current,c=0,j0=()=>{if(c)cancelAnimationFrame(c);c=requestAnimationFrame(()=>{c=0,H()})},S0=null;if(R&&typeof ResizeObserver<"u")S0=new ResizeObserver(()=>j0()),S0.observe(R);if(typeof window<"u")window.addEventListener("resize",j0);return()=>{if(c)cancelAnimationFrame(c);if(S0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",j0)}},[j,F,F1?.agent_name,y_,D?.percent]);let r5=(H)=>{let R=H.target.value;if(S1(null),D0)Z0(!1);m_(H.target),Z_(R)};return b(()=>{requestAnimationFrame(()=>m_())},[E0,n0,j]),b(()=>{if(!T_)return;v1(Date.now());let H=setInterval(()=>v1(Date.now()),1000);return()=>clearInterval(H)},[T_,Y0?.started_at,Y0?.startedAt]),b(()=>{if(j)return;l4(E0)},[l1,K0,E0,j]),z`
        <div class="compose-box">
            ${P0&&!j&&z`
                <${t$}
                    items=${w}
                    onInjectQueuedFollowup=${A}
                    onRemoveQueuedFollowup=${v}
                    onOpenFilePill=${k}
                />
            `}
            ${Y0&&z`
                <div
                    class=${`compose-inline-status${T_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${T4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${x4}</span>
                        ${Z1&&z`<span class="compose-inline-status-elapsed">${Z1}</span>`}
                    </div>
                    ${T4&&z`<div class="compose-inline-status-detail">${T4}</div>`}
                </div>
            `}
            ${o1&&z`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${o1}</div>
            `}
            <div
                class=${`compose-input-wrapper${m0?" drag-active":""}`}
                onDragEnter=${q0}
                onDragOver=${L0}
                onDragLeave=${U0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${V4&&z`
                        <div class="compose-file-refs">
                            ${V.map((H)=>{return z`
                                    <${v_}
                                        key=${"msg-"+H}
                                        prefix="compose"
                                        label=${"msg:"+H}
                                        title=${"Message reference: "+H}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(H)}
                                    />
                                `})}
                            ${G.map((H)=>{let R=H.split("/").pop()||H;return z`
                                    <${v_}
                                        prefix="compose"
                                        label=${R}
                                        title=${H}
                                        onClick=${()=>k?.(H)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>N?.(H)}
                                    />
                                `})}
                            ${a0.map((H,R)=>{let c=H?.name||`attachment-${R+1}`;return z`
                                    <${v_}
                                        key=${c+R}
                                        prefix="compose"
                                        label=${c}
                                        title=${c}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>I1(R)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${E_}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof s==="function"&&z`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>s?.()}
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
                        value=${j?n0:E0}
                        onInput=${r5}
                        onKeyDown=${f}
                        onPaste=${R0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${M0&&p.length>0&&z`
                        <div class="slash-autocomplete" ref=${d_}>
                            ${p.map((H,R)=>z`
                                <div
                                    key=${H.chat_jid||H.agent_name}
                                    class=${`slash-item${R===z0?" active":""}`}
                                    onMouseDown=${(c)=>{c.preventDefault(),a_(H)}}
                                    onMouseEnter=${()=>k0(R)}
                                >
                                    <span class="slash-name">@${H.agent_name}</span>
                                    <span class="slash-desc">${H.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${o&&s0.length>0&&z`
                        <div class="slash-autocomplete" ref=${m1}>
                            ${s0.map((H,R)=>z`
                                <div
                                    key=${H.name}
                                    class=${`slash-item${R===w0?" active":""}`}
                                    onMouseDown=${(c)=>{c.preventDefault(),s_(H)}}
                                    onMouseEnter=${()=>_1(R)}
                                >
                                    <span class="slash-name">${H.name}</span>
                                    <span class="slash-desc">${H.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&z`
                        <div class="compose-model-popup" ref=${s1} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${q1&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!q1&&C.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!q1&&C.map((H,R)=>z`
                                    <button
                                        key=${H}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${B0===R?" active":""}${F===H?" current-model":""}`}
                                        onClick=${()=>{e_(H)}}
                                        disabled=${I0}
                                    >
                                        ${H}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{r4()}}
                                    disabled=${I0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${D0&&!j&&z`
                        <div class="compose-model-popup" ref=${b_} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${z`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return XZ(F1,K0)})()}
                                    </div>
                                `}
                                ${!e1&&z`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${e1&&Q1.map((H,R)=>{let c=Boolean(H.archived_at),S0=H.chat_jid!==(H.root_chat_jid||H.chat_jid)&&!H.is_active&&!c&&typeof v0==="function",B1=b8(H,{currentChatJid:K0});return z`
                                        <div key=${H.chat_jid} class=${`compose-model-popup-item-row${c?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${c?" archived":""}${i0===R?" active":""}`}
                                                onClick=${()=>{if(c){d4(H.chat_jid);return}n4(H.chat_jid)}}
                                                disabled=${c?!$_:!__}
                                                title=${c?`Restore archived ${`@${H.agent_name}`}`:`Switch to ${`@${H.agent_name}`}`}
                                            >
                                                ${B1}
                                            </button>
                                            ${S0&&z`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${H.agent_name}`}
                                                    onClick=${(A1)=>{A1.stopPropagation(),Z0(!1),v0(H.chat_jid)}}
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
                            ${(C1||w1||j_)&&z`
                                <div class="compose-model-popup-actions">
                                    ${C1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${H1.findIndex((H)=>H.key==="action:new")===i0?" active":""}`}
                                            onClick=${()=>{i4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${w1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${H1.findIndex((H)=>H.key==="action:rename")===i0?" active":""}`}
                                            onClick=${(H)=>{U4(H)}}
                                            title="Rename the current branch handle"
                                            disabled=${g_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${j_&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${H1.findIndex((H)=>H.key==="action:delete")===i0?" active":""}`}
                                            onClick=${()=>{X_()}}
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
                <div class="compose-footer" ref=${p1}>
                    ${!j&&F&&z`
                    <div class="compose-meta-row">
                        ${!j&&F&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${i_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${c4}
                                    aria-label="Open model picker"
                                    onClick=${O5}
                                    disabled=${I0}
                                >
                                    ${I0?"Switching…":W1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!I0&&O_&&z`
                                        <span class="compose-model-usage-hint" title=${c4}>
                                            ${O_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&z`
                            <${DN} usage=${D} onCompact=${L4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${y_&&z`
                        ${F1?.agent_name&&z`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${F1.chat_jid||K0}
                                aria-label=${`Manage sessions for @${F1.agent_name}`}
                                onClick=${n1}
                            >@${F1.agent_name}</button>
                        `}
                        <button
                            ref=${J1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${D0?" active":""}`}
                            onClick=${n1}
                            title=${D0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${D0?"true":"false"}
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
                                value=${Z}
                                onChange=${(H)=>q?.(H.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?K:Q}
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
                    ${r_&&!j&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${Y_}
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
                    ${X4&&!j&&z`
                        <button
                            class=${`icon-btn notification-btn${F_?" active":""}`}
                            onClick=${g}
                            title=${D1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&z`
                        ${M&&B&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${B}
                                title=${`Attach open file: ${M}`}
                                type="button"
                                disabled=${G.includes(M)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${r} />
                        </label>
                    `}
                    ${(N0!=="connected"||!j)&&z`
                        <div class="compose-send-stack">
                            ${N0!=="connected"&&z`
                                <span class="compose-connection-status connection-status ${N0}" title=${H_}>
                                    ${t1}
                                </span>
                            `}
                            ${!j&&z`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{A_()}}
                                    disabled=${!c1}
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
    `}function lZ({session:_,onClose:$,onInject:j,onRetry:Z}){let Y=T(null),q=T(null),Q=_?.thinking?m5(_.thinking):"",K=_?.answer?W_(_.answer,null,{sanitize:!1}):"";if(b(()=>{if(Y.current&&Q)N4(Y.current).catch(()=>{})},[Q]),b(()=>{if(q.current&&K)N4(q.current).catch(()=>{})},[K]),!_)return null;let G=_.status==="running",N=Boolean(String(_.answer||"").trim()),X=Boolean(String(_.thinking||"").trim()),V=m9(_),U=p9(_),L=!G&&N,F=G?"Thinking…":_.status==="error"?"Error":"Done";return z`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${F}</span>
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
            ${X&&z`
                <details class="btw-block btw-thinking" open=${G?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:Q}}
                    ></div>
                </details>
            `}
            ${V&&z`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${q}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </div>
            `}

            ${U&&z`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&z`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
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
    `}function nZ({widget:_,onClose:$,onWidgetEvent:j}){let Z=T(null),Y=T(!1),q=b0(()=>Zj(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(b(()=>{if(!_)return;let W=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[_,$]),b(()=>{Y.current=!1},[q]),b(()=>{if(!_)return;let W=Z.current;if(!W)return;let D=(h)=>{let x=S8(_),M=h==="widget.init"?P8(_):C8(_);try{W.name=x}catch{}try{W.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:h,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M},"*")}catch{}},E=()=>{D("widget.init"),D("widget.update")},S=()=>{Y.current=!0,E()};W.addEventListener("load",S);let g=[0,40,120,300,800].map((h)=>setTimeout(E,h));return()=>{W.removeEventListener("load",S),g.forEach((h)=>clearTimeout(h))}},[q,_?.widgetId,_?.toolCallId,_?.turnId]),b(()=>{if(!_)return;let W=Z.current;if(!W?.contentWindow)return;let D=S8(_),E=C8(_);try{W.name=D}catch{}try{W.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),b(()=>{if(!_)return;let W=(D)=>{let E=D?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let S=Z.current,P=B_(_),g=B_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(g&&P&&g!==P)return;if(!g&&S?.contentWindow&&D.source!==S.contentWindow)return;j?.(E,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",G=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",N=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=X==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",F=!q,O=jj(_),J=e9(_);return z`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${G}
                onClick=${(W)=>W.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${G}</div>
                        ${(N||L)&&z`
                            <div class="floating-widget-subtitle">${N||L}</div>
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
                    ${F?z`<div class="floating-widget-empty">${O}</div>`:z`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${G}
                                name=${S8(_)}
                                sandbox=${J}
                                referrerpolicy="no-referrer"
                                srcdoc=${q}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var dZ="PiClaw";function e$(_,$,j=!1){let Z=_||"PiClaw",Y=Z.charAt(0).toUpperCase(),q=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Q=Y.charCodeAt(0)%q.length,K=q[Q],G=Z.trim().toLowerCase(),N=typeof $==="string"?$.trim():"",X=N?N:null,V=j||G==="PiClaw".toLowerCase()||G==="pi";return{letter:Y,color:K,image:X||(V?"/static/icon-192.png":null)}}function iZ(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function rZ(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function oZ(_){if(!_)return null;if(typeof document<"u"){let q=document.documentElement,Q=q?.dataset?.colorTheme||"",K=q?.dataset?.tint||"",G=getComputedStyle(q).getPropertyValue("--accent-color")?.trim();if(G&&(K||Q&&Q!=="default"))return G}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let q=0;q<j.length;q+=1)Z=(Z*31+j.charCodeAt(q))%2147483647;let Y=Math.abs(Z)%$.length;return $[Y]}var MN=z`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function _3({status:_,draft:$,plan:j,thought:Z,pendingRequest:Y,intent:q,extensionPanels:Q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:G,turnId:N,steerQueued:X,onPanelToggle:V,showCorePanels:U=!0,showExtensionPanels:L=!0}){let J=(o)=>{if(!o)return{text:"",totalLines:0,fullText:""};if(typeof o==="string"){let z0=o,k0=z0?z0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:z0,totalLines:k0,fullText:z0}}let Q0=o.text||"",p=o.fullText||o.full_text||Q0,i=Number.isFinite(o.totalLines)?o.totalLines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Q0,totalLines:i,fullText:p}},W=160,D=(o)=>String(o||"").replace(/<\/?internal>/gi,""),E=(o)=>{if(!o)return 1;return Math.max(1,Math.ceil(o.length/160))},S=(o,Q0,p)=>{let i=(o||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!i)return{text:"",omitted:0,totalLines:Number.isFinite(p)?p:0,visibleLines:0};let z0=i.split(`
`),k0=z0.length>Q0?z0.slice(0,Q0).join(`
`):i,M0=Number.isFinite(p)?p:z0.reduce((p0,O0)=>p0+E(O0),0),G0=k0?k0.split(`
`).reduce((p0,O0)=>p0+E(O0),0):0,I0=Math.max(M0-G0,0);return{text:k0,omitted:I0,totalLines:M0,visibleLines:G0}},P=J(j),g=J(Z),h=J($),x=Boolean(P.text)||P.totalLines>0,M=Boolean(g.text)||g.totalLines>0,B=Boolean(h.fullText?.trim()||h.text?.trim()),k=Boolean(_||B||x||M||Y||q),w=Array.isArray(Q)&&Q.length>0;if((!U||!k)&&(!L||!w))return null;let[l,v]=m(new Set),[n,d]=m(null),[s,_0]=m(()=>Date.now()),t=(o)=>v((Q0)=>{let p=new Set(Q0),i=!p.has(o);if(i)p.add(o);else p.delete(o);if(typeof V==="function")V(o,i);return p});b(()=>{v(new Set),d(null)},[N]);let K0=E4(_);b(()=>{if(!K0)return;_0(Date.now());let o=setInterval(()=>_0(Date.now()),1000);return()=>clearInterval(o)},[K0,_?.started_at,_?.startedAt]);let N0=_?.turn_id||N,X0=oZ(N0),T0=X?"turn-dot turn-dot-queued":"turn-dot",J0=(o)=>o,W0=Boolean(_?.last_activity||_?.lastActivity),C0=(o)=>o==="warning"?"#f59e0b":o==="error"?"var(--danger-color)":o==="success"?"var(--success-color)":X0,F0=q?.kind||"info",y0=C0(F0),v0=C0(_?.kind||(K0?"warning":"info")),H0="",P0=_?.title,Y0=_?.status;if(_?.type==="plan")H0=P0?`Planning: ${P0}`:"Planning...";else if(_?.type==="tool_call")H0=P0?`Running: ${P0}`:"Running tool...";else if(_?.type==="tool_status")H0=P0?`${P0}: ${Y0||"Working..."}`:Y0||"Working...";else if(_?.type==="error")H0=P0||"Agent error";else H0=P0||Y0||"Working...";if(W0)H0="Last activity just now";let E0=({panelTitle:o,text:Q0,fullText:p,totalLines:i,maxLines:z0,titleClass:k0,panelKey:M0})=>{let G0=l.has(M0),I0=p||Q0||"",p0=M0==="thought"||M0==="draft"?D(I0):I0,O0=typeof z0==="number",f0=G0&&O0,D0=O0?S(p0,z0,i):{text:p0||"",omitted:0,totalLines:Number.isFinite(i)?i:0};if(!p0&&!(Number.isFinite(D0.totalLines)&&D0.totalLines>0))return null;let Z0=`agent-thinking-body${O0?" agent-thinking-body-collapsible":""}`,C=O0?`--agent-thinking-collapsed-lines: ${z0};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${G0?"true":"false"}
                data-collapsible=${O0?"true":"false"}
                style=${X0?`--turn-color: ${X0};`:""}
            >
                <div class="agent-thinking-title ${k0||""}">
                    ${X0&&z`<span class=${T0} aria-hidden="true"></span>`}
                    ${o}
                    ${f0&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${o} panel`}
                            onClick=${()=>t(M0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Z0}
                    style=${C}
                    dangerouslySetInnerHTML=${{__html:m5(p0)}}
                />
                ${!G0&&D0.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>t(M0)}>
                        ▸ ${D0.omitted} more lines
                    </button>
                `}
                ${G0&&D0.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>t(M0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},h0=Y?.tool_call?.title,n0=h0?`Awaiting approval: ${h0}`:"Awaiting approval",U1=K0?T8(_,s):null,a0=(o,Q0,p=null)=>{let i=x8(o);return z`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${Q0?`--turn-color: ${Q0};`:""}
                title=${o?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${Q0&&z`<span class=${T0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${i}</span>
                    ${p&&z`<span class="agent-status-elapsed">${p}</span>`}
                </div>
                ${o.detail&&z`<div class="agent-thinking-body">${o.detail}</div>`}
            </div>
        `},g0=(o,Q0,p,i,z0,k0,M0,G0=8,I0=8)=>{let p0=Math.max(z0-i,0.000000001),O0=Math.max(Q0-G0*2,1),f0=Math.max(p-I0*2,1),D0=Math.max(M0-k0,1),Z0=M0===k0?Q0/2:G0+(o.run-k0)/D0*O0,C=I0+(f0-(o.value-i)/p0*f0);return{x:Z0,y:C}},m0=(o,Q0,p,i,z0,k0,M0,G0=8,I0=8)=>{if(!Array.isArray(o)||o.length===0)return"";return o.map((p0,O0)=>{let{x:f0,y:D0}=g0(p0,Q0,p,i,z0,k0,M0,G0,I0);return`${O0===0?"M":"L"} ${f0.toFixed(2)} ${D0.toFixed(2)}`}).join(" ")},o0=(o,Q0="")=>{if(!Number.isFinite(o))return"—";return`${Math.abs(o)>=100?o.toFixed(0):o.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${Q0}`},s0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],V0=(o,Q0)=>{let p=s0;if(!Array.isArray(p)||p.length===0)return"var(--accent-color)";if(p.length===1||!Number.isFinite(Q0)||Q0<=1)return p[0];let z0=Math.max(0,Math.min(Number.isFinite(o)?o:0,Q0-1))/Math.max(1,Q0-1)*(p.length-1),k0=Math.floor(z0),M0=Math.min(p.length-1,k0+1),G0=z0-k0,I0=p[k0],p0=p[M0];if(!p0||k0===M0||G0<=0.001)return I0;if(G0>=0.999)return p0;let O0=Math.round((1-G0)*1000)/10,f0=Math.round(G0*1000)/10;return`color-mix(in oklab, ${I0} ${O0}%, ${p0} ${f0}%)`},w0=(o,Q0="autoresearch")=>{let p=Array.isArray(o)?o.map((Z0)=>({...Z0,points:Array.isArray(Z0?.points)?Z0.points.filter((C)=>Number.isFinite(C?.value)&&Number.isFinite(C?.run)):[]})).filter((Z0)=>Z0.points.length>0):[],i=p.map((Z0,C)=>({...Z0,color:V0(C,p.length)}));if(i.length===0)return null;let z0=320,k0=120,M0=i.flatMap((Z0)=>Z0.points),G0=M0.map((Z0)=>Z0.value),I0=M0.map((Z0)=>Z0.run),p0=Math.min(...G0),O0=Math.max(...G0),f0=Math.min(...I0),D0=Math.max(...I0);return z`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${i.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${z0} ${k0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${i.map((Z0)=>{let C=Z0?.key||Z0?.label||"series",e=n?.panelKey===Q0&&n?.seriesKey===C;return z`
                                <g key=${C}>
                                    <path
                                        class=${`agent-series-chart-line${e?" is-hovered":""}`}
                                        d=${m0(Z0.points,z0,k0,p0,O0,f0,D0)}
                                        style=${`--agent-series-color: ${Z0.color};`}
                                        onMouseEnter=${()=>d({panelKey:Q0,seriesKey:C})}
                                        onMouseLeave=${()=>d((B0)=>B0?.panelKey===Q0&&B0?.seriesKey===C?null:B0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${i.flatMap((Z0)=>{let C=typeof Z0?.unit==="string"?Z0.unit:"",e=Z0?.key||Z0?.label||"series";return Z0.points.map((B0,A0)=>{let i0=g0(B0,z0,k0,p0,O0,f0,D0);return z`
                                    <button
                                        key=${`${e}-point-${A0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Z0.color}; left:${i0.x/z0*100}%; top:${i0.y/k0*100}%;`}
                                        onMouseEnter=${()=>d({panelKey:Q0,seriesKey:e,run:B0.run,value:B0.value,unit:C})}
                                        onMouseLeave=${()=>d((j1)=>j1?.panelKey===Q0?null:j1)}
                                        onFocus=${()=>d({panelKey:Q0,seriesKey:e,run:B0.run,value:B0.value,unit:C})}
                                        onBlur=${()=>d((j1)=>j1?.panelKey===Q0?null:j1)}
                                        aria-label=${`${Z0?.label||"Series"} ${o0(B0.value,C)} at run ${B0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${i.map((Z0)=>{let C=Z0.points[Z0.points.length-1]?.value,e=typeof Z0?.unit==="string"?Z0.unit:"",B0=Z0?.key||Z0?.label||"series",A0=n?.panelKey===Q0&&n?.seriesKey===B0?n:null,i0=A0&&Number.isFinite(A0.value)?A0.value:C,j1=A0&&typeof A0.unit==="string"?A0.unit:e,q1=A0&&Number.isFinite(A0.run)?A0.run:null;return z`
                            <div key=${`${B0}-legend`} class=${`agent-series-legend-item${A0?" is-hovered":""}`} style=${`--agent-series-color: ${Z0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Z0.color};`}></span>
                                <span class="agent-series-legend-label">${Z0?.label||"Series"}</span>
                                ${q1!==null&&z`<span class="agent-series-legend-run">run ${q1}</span>`}
                                <span class="agent-series-legend-value">${o0(i0,j1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},_1=(o)=>{if(!o)return null;let Q0=typeof o?.key==="string"?o.key:`panel-${Math.random()}`,p=l.has(Q0),i=o?.title||"Extension status",z0=o?.collapsed_text||"",k0=String(o?.state||"").replace(/[-_]+/g," ").replace(/^./,(e)=>e.toUpperCase()),M0=C0(o?.state==="completed"?"success":o?.state==="failed"?"error":o?.state==="stopped"?"warning":"info"),G0=typeof o?.detail_markdown==="string"?o.detail_markdown.trim():"",I0=typeof o?.last_run_text==="string"?o.last_run_text.trim():"",p0=typeof o?.tmux_command==="string"?o.tmux_command.trim():"",O0=Array.isArray(o?.series)?o.series:[],f0=Array.isArray(o?.actions)?o.actions:[],D0=Boolean(G0||p0),Z0=Boolean(G0||O0.length>0||p0),C=[i,z0].filter(Boolean).join(" — ");return z`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${p?"true":"false"}
                style=${M0?`--turn-color: ${M0};`:""}
                title=${!p?C||i:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>Z0?t(Q0):null}
                    >
                        ${M0&&z`<span class=${T0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${i}</span>
                        ${z0&&z`<span class="agent-thinking-title-meta">${z0}</span>`}
                    </button>
                    ${(f0.length>0||Z0&&!p)&&z`
                        <div class="agent-thinking-tools-inline">
                            ${f0.length>0&&z`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${f0.map((e)=>{let B0=`${Q0}:${e?.key||""}`,A0=K?.has?.(B0);return z`
                                            <button
                                                key=${B0}
                                                class=${`agent-thinking-action-btn${e?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>G?.(o,e)}
                                                disabled=${Boolean(A0)}
                                            >
                                                ${A0?"Working…":e?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${Z0&&!p&&z`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${i}`}
                                    title="Expand details"
                                    onClick=${()=>t(Q0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${Z0&&p&&z`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${i}`}
                        title="Collapse details"
                        onClick=${()=>t(Q0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${p&&z`
                    <div class=${`agent-thinking-autoresearch-layout${D0?"":" chart-only"}`}>
                        ${D0&&z`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${G0&&z`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:m5(G0)}}
                                    />
                                `}
                                ${p0&&z`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${p0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>G?.(o,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${MN}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${O0.length>0?z`
                                <div class="agent-series-chart-stack">
                                    ${w0(O0,Q0)}
                                    ${I0&&z`<div class="agent-series-chart-note">${I0}</div>`}
                                </div>
                            `:z`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return z`
        <div class="agent-status-panel">
            ${U&&q&&a0(q,y0)}
            ${L&&Array.isArray(Q)&&Q.map((o)=>_1(o))}
            ${U&&_?.type==="intent"&&a0(_,v0,U1)}
            ${U&&Y&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${X0?`--turn-color: ${X0};`:""}>
                    <span class=${T0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${n0}</span>
                </div>
            `}
            ${U&&x&&E0({panelTitle:J0("Planning"),text:P.text,fullText:P.fullText,totalLines:P.totalLines,panelKey:"plan"})}
            ${U&&M&&E0({panelTitle:J0("Thoughts"),text:g.text,fullText:g.fullText,totalLines:g.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&B&&E0({panelTitle:J0("Draft"),text:h.text,fullText:h.fullText,totalLines:h.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&z`
                <div class=${`agent-status${W0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${X0?`--turn-color: ${X0};`:""}>
                    ${X0&&z`<span class=${T0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!W0&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${H0}</span>
                </div>
            `}
        </div>
    `}function sZ({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Y,chat_jid:q}=_,Q=Z?.title||"Agent Request",K=Z?.kind||"other",G=Z?.rawInput||{},N=G.command||G.commands&&G.commands[0]||null,X=G.diff||null,V=G.fileName||G.path||null,U=Z?.description||G.description||G.explanation||null,F=(Array.isArray(Z?.locations)?Z.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),O=Array.from(new Set([V,...F].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Y});let J=async(E)=>{try{await G8(j,E,q||null),$()}catch(S){console.error("Failed to respond to agent request:",S)}},W=async()=>{try{await D6(Q,`Auto-approved: ${Q}`),await G8(j,"approved",q||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},D=Y&&Y.length>0;return z`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Q}</div>
                </div>
                ${(U||N||X||O.length>0)&&z`
                    <div class="agent-request-body">
                        ${U&&z`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${O.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${O.map((E,S)=>z`<li key=${S}>${E}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${N&&z`
                            <pre class="agent-request-command">${N}</pre>
                        `}
                        ${X&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${X}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${D?Y.map((E)=>z`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>J(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>J("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>J("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${W}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var IN=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),xN=new Set(["text/markdown"]),TN=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),yN=new Set(["application/vnd.jgraph.mxfile"]);function n5(_){return typeof _==="string"?_.trim().toLowerCase():""}function PN(_){let $=n5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function CN(_){let $=n5(_);return!!$&&$.endsWith(".pdf")}function SN(_){let $=n5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function d5(_,$){let j=n5(_);if(PN($)||yN.has(j))return"drawio";if(CN($)||j==="application/pdf")return"pdf";if(SN($)||TN.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(IN.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function aZ(_){let $=n5(_);return xN.has($)}function tZ(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function wN(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function RN(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Y=Number(j[2]),q=Number(j[3]);if(![Z,Y,q].every((Q)=>Number.isFinite(Q)))return null;return{r:Z,g:Y,b:q}}function eZ(_){return wN(_)||RN(_)}function l8(_){let $=(q)=>{let Q=q/255;return Q<=0.03928?Q/12.92:((Q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Y}function uN(_,$){let j=Math.max(l8(_),l8($)),Z=Math.min(l8(_),l8($));return(j+0.05)/(Z+0.05)}function fN(_,$,j="#ffffff"){let Z=eZ(_);if(!Z)return j;let Y=j,q=-1;for(let Q of $){let K=eZ(Q);if(!K)continue;let G=uN(Z,K);if(G>q)Y=Q,q=G}return Y}function $3(){let _=getComputedStyle(document.documentElement),$=(F,O)=>{for(let J of F){let W=_.getPropertyValue(J).trim();if(W)return W}return O},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),q=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),G=$(["--success-color","--color-success"],"#00ba7c"),N=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),X=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),L=fN(K,[j,Y],j);return{fg:j,fgMuted:Z,bgPrimary:Y,bg:q,bgEmphasis:Q,accent:K,good:G,warning:N,attention:X,border:V,fontFamily:U,buttonTextColor:L}}function _Y(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Y,good:q,warning:Q,attention:K,border:G,fontFamily:N}=$3();return{fontFamily:N,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:q,subtle:q},warning:{default:Q,subtle:Q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:q,subtle:q},warning:{default:Q,subtle:Q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:G},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var vN=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),$Y=!1,n8=null,jY=!1;function j3(_){_.querySelector(".adaptive-card-notice")?.remove()}function bN(_,$,j="error"){j3(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function gN(_,$=(j)=>W_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function mN(_=($)=>W_($,null)){return($,j)=>{try{let Z=gN($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function pN(_){if(jY||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=mN(),jY=!0}async function hN(){if($Y)return;if(n8)return n8;return n8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{$Y=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),n8}function cN(){return globalThis.AdaptiveCards}function lN(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function nN(_){return vN.has(_)}function Y3(_){if(!Array.isArray(_))return[];return _.filter(lN)}function dN(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:Z,raw:_}}function Z3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Z3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${Z3(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function iN(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return Z3($);return typeof $==="string"?$:String($)}function rN(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Y)=>{if(Array.isArray(Y))return Y.map((K)=>Z(K));if(!Y||typeof Y!=="object")return Y;let Q={...Y};if(typeof Q.id==="string"&&Q.id in j&&String(Q.type||"").startsWith("Input."))Q.value=iN(Q.type,j[Q.id],Q);for(let[K,G]of Object.entries(Q))if(Array.isArray(G)||G&&typeof G==="object")Q[K]=Z(G);return Q};return Z(_)}function oN(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function sN(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function aN(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Y=sN(_.completed_at||j?.submitted_at),q=[Z||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:q}}async function ZY(_,$,j){if(!nN($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await hN()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=cN();pN(Z);let Y=new Z.AdaptiveCard,q=$3();Y.hostConfig=new Z.HostConfig(_Y());let Q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:rN($.payload,Q);Y.parse(K),Y.onExecuteAction=(X)=>{let V=dN(X);if(j?.onAction)j3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let L=U instanceof Error?U.message:String(U||"Action failed.");bN(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let G=Y.render();if(!G)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",q.buttonTextColor);let N=aN($);if(N){_.classList.add("adaptive-card-finished");let X=document.createElement("div");X.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=N.label,X.appendChild(V),N.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=N.detail,X.appendChild(U)}_.appendChild(X)}if(j3(_),_.appendChild(G),N)oN(G);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function i5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>i5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${i5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function YY(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:i5(j)})).filter(($)=>$.value)}function tN(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function q3(_){if(!Array.isArray(_))return[];return _.filter(tN)}function qY(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=i5(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=YY(j).map(({key:q,value:Q})=>`${q}: ${Q}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function QY(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=YY(_.data),Z=j.length>0?j.slice(0,2).map(({key:q,value:Q})=>`${q}: ${Q}`).join(", "):i5(_.data)||null,Y=j.length;return{title:$,summary:Z,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function H5({children:_,className:$=""}){let j=T(null);return b(()=>{if(typeof document>"u")return;let Z=document.createElement("div");if($)Z.className=$;return document.body.appendChild(Z),j.current=Z,()=>{try{J4(null,Z)}finally{if(Z.remove(),j.current===Z)j.current=null}}},[$]),k5(()=>{let Z=j.current;if(!Z)return;return J4(_,Z),()=>{J4(null,Z)}},[_]),null}function eN(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?M_($):null},{label:"Added",value:_?.created_at?p4(_.created_at):null}].filter((Z)=>Z.value)}function _X(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${Z}#media=${Y}&name=${Z}`;if(j==="office"){let q=k_(_);return`/office-viewer/?url=${encodeURIComponent(q)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Y}&name=${Z}&readonly=1#media=${Y}&name=${Z}&readonly=1`;return null}function KY({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Y=b0(()=>d5($?.content_type,Z),[$?.content_type,Z]),q=tZ(Y),Q=b0(()=>aZ($?.content_type),[$?.content_type]),[K,G]=m(Y==="text"),[N,X]=m(""),[V,U]=m(null),L=T(null),F=b0(()=>eN($),[$]),O=b0(()=>_X(_,Z,Y),[_,Z,Y]),J=b0(()=>{if(!Q||!N)return"";return W_(N)},[Q,N]);return b(()=>{let W=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[j]),b(()=>{if(!L.current||!J)return;N4(L.current);return},[J]),b(()=>{let W=!1;async function D(){if(Y!=="text"){G(!1),U(null);return}G(!0),U(null);try{let E=await M6(_);if(!W)X(E)}catch{if(!W)U("Failed to load text preview.")}finally{if(!W)G(!1)}}return D(),()=>{W=!0}},[_,Y]),z`
        <${H5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(W)=>{W.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
                            <div class="attachment-preview-subtitle">${q}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${O&&z`
                                <a
                                    href=${O}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(W)=>W.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${k_(_)}
                                download=${Z}
                                class="attachment-preview-download"
                                onClick=${(W)=>W.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${K&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&V&&z`<div class="attachment-preview-state">${V}</div>`}
                        ${!K&&!V&&Y==="image"&&z`
                            <img class="attachment-preview-image" src=${k_(_)} alt=${Z} />
                        `}
                        ${!K&&!V&&(Y==="pdf"||Y==="office"||Y==="drawio")&&O&&z`
                            <iframe class="attachment-preview-frame" src=${O} title=${Z}></iframe>
                        `}
                        ${!K&&!V&&Y==="drawio"&&z`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!K&&!V&&Y==="text"&&Q&&z`
                            <div
                                ref=${L}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:J}}
                            />
                        `}
                        ${!K&&!V&&Y==="text"&&!Q&&z`
                            <pre class="attachment-preview-text">${N}</pre>
                        `}
                        ${!K&&!V&&Y==="unsupported"&&z`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${F.map((W)=>z`
                            <div class="attachment-preview-meta-item" key=${W.label}>
                                <span class="attachment-preview-meta-label">${W.label}</span>
                                <span class="attachment-preview-meta-value">${W.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${H5}>
    `}function GY({src:_,onClose:$}){return b(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),z`
        <${H5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${H5}>
    `}function $X({mediaId:_,onPreview:$}){let[j,Z]=m(null);if(b(()=>{Z5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Y=j.filename||"file",q=j.metadata?.size,Q=q?M_(q):"",G=d5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(N)=>N.stopPropagation()}>
            <a href=${k_(_)} download=${Y} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Y}</span>
                    <span class="file-meta-row">
                        ${Q&&z`<span class="file-size">${Q}</span>`}
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
                onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${G}
            </button>
        </div>
    `}function jX({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Y]=m(null);b(()=>{if(!Number.isFinite(j))return;Z5(j).then(Y).catch(()=>{});return},[j]);let q=Z?.filename||_.label||`attachment-${_.id}`,Q=Number.isFinite(j)?k_(j):null,G=d5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${q}>
            ${Q?z`
                    <a href=${Q} download=${q} class="attachment-pill-main" onClick=${(N)=>N.stopPropagation()}>
                        <${v_}
                            prefix="post"
                            label=${_.label}
                            title=${q}
                        />
                    </a>
                `:z`
                    <${v_}
                        prefix="post"
                        label=${_.label}
                        title=${q}
                    />
                `}
            ${Number.isFinite(j)&&Z&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${G}
                    onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function d8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Y=Z?p4(Z):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&z`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Y&&z`
                <span class="content-annotation">Updated: ${Y}</span>
            `}
        </div>
    `}function ZX({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?M_(_.size):"",Y=_.mime_type||"",q=QX(Y),Q=m4(_.uri);return z`
        <a
            href=${Q||"#"}
            class="resource-link"
            target=${Q?"_blank":void 0}
            rel=${Q?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${q}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&z`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Y&&z`<span>${Y}</span>`}
                    ${Z&&z`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function YX({block:_}){let[$,j]=m(!1),Z=_.uri||"Embedded resource",Y=_.text||"",q=Boolean(_.data),Q=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&z`
                ${Y&&z`<pre class="resource-embed-content">${Y}</pre>`}
                ${q&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Q&&z`<span class="resource-embed-blob-meta">${Q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let G=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Q||"application/octet-stream"}),N=URL.createObjectURL(G),X=document.createElement("a");X.href=N,X.download=Z.split("/").pop()||"resource",X.click(),URL.revokeObjectURL(N)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function qX({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=w$(_,$),Y=a9(_),q=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Q=Z?.title||_.title||_.name||"Generated widget",K=Z?.description||_.description||_.subtitle||"",G=_.open_label||"Open widget",N=(X)=>{if(X.preventDefault(),X.stopPropagation(),!Z)return;j?.(Z)};return z`
        <div class="generated-widget-launch" onClick=${(X)=>X.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${q?` • ${String(q).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Q}</div>
            </div>
            ${K&&z`<div class="generated-widget-launch-description">${K}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Y}
                    onClick=${N}
                    title=${Y?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${G}
                </button>
                <span class="generated-widget-launch-note">
                    ${Y?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function QX(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function KX({preview:_}){let $=m4(_.url),j=m4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Y||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function GX(_,$){return typeof _==="string"?_:""}var NX=1800,XX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,VX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,UX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function LX(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function WX(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((q)=>q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Y=(q,Q)=>{let K=Q||"idle";if(q.dataset.copyState=K,K==="success")q.innerHTML=VX,q.setAttribute("aria-label","Copied"),q.setAttribute("title","Copied"),q.classList.add("is-success"),q.classList.remove("is-error");else if(K==="error")q.innerHTML=UX,q.setAttribute("aria-label","Copy failed"),q.setAttribute("title","Copy failed"),q.classList.add("is-error"),q.classList.remove("is-success");else q.innerHTML=XX,q.setAttribute("aria-label","Copy code"),q.setAttribute("title","Copy code"),q.classList.remove("is-success","is-error")};return $.forEach((q)=>{let Q=document.createElement("div");Q.className="post-code-block",q.parentNode?.insertBefore(Q,q),Q.appendChild(q);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Y(K,"idle"),Q.appendChild(K);let G=async(N)=>{N.preventDefault(),N.stopPropagation();let V=q.querySelector("code")?.textContent||"",U=await LX(V);Y(K,U?"success":"error");let L=j.get(K);if(L)clearTimeout(L);let F=setTimeout(()=>{Y(K,"idle"),j.delete(K)},NX);j.set(K,F)};K.addEventListener("click",G),Z.push(()=>{K.removeEventListener("click",G);let N=j.get(K);if(N)clearTimeout(N);if(Q.parentNode)Q.parentNode.insertBefore(q,Q),Q.remove()})}),()=>{Z.forEach((q)=>q())}}function BX(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let N=0;N<j.length;N+=1)if(j[N].trim()==="Files:"&&j[N+1]&&/^\s*-\s+/.test(j[N+1])){Z=N;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let N=j[q];if(/^\s*-\s+/.test(N))Y.push(N.replace(/^\s*-\s+/,"").trim());else if(!N.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let Q=j.slice(0,Z),K=j.slice(q),G=[...Q,...K].join(`
`);return G=G.replace(/\n{3,}/g,`

`).trim(),{content:G,fileRefs:Y}}function zX(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let N=0;N<j.length;N+=1)if(j[N].trim()==="Referenced messages:"&&j[N+1]&&/^\s*-\s+/.test(j[N+1])){Z=N;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let N=j[q];if(/^\s*-\s+/.test(N)){let V=N.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Y.push(V[1])}else if(!N.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let Q=j.slice(0,Z),K=j.slice(q),G=[...Q,...K].join(`
`);return G=G.replace(/\n{3,}/g,`

`).trim(),{content:G,messageRefs:Y}}function FX(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let N=0;N<j.length;N+=1){let X=j[N].trim();if((X==="Images:"||X==="Attachments:")&&j[N+1]&&/^\s*-\s+/.test(j[N+1])){Z=N;break}}if(Z===-1)return{content:_,attachments:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let N=j[q];if(/^\s*-\s+/.test(N)){let X=N.replace(/^\s*-\s+/,"").trim(),V=X.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||X.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],L=(V[2]||"").trim()||U;Y.push({id:U,label:L,raw:X})}else Y.push({id:null,label:X,raw:X})}else if(!N.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let Q=j.slice(0,Z),K=j.slice(q),G=[...Q,...K].join(`
`);return G=G.replace(/\n{3,}/g,`

`).trim(),{content:G,attachments:Y}}function HX(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function JX(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(HX).sort((X,V)=>V.length-X.length),Y=new RegExp(`(${Z.join("|")})`,"gi"),q=new RegExp(`^(${Z.join("|")})$`,"i"),Q=new DOMParser().parseFromString(_,"text/html"),K=Q.createTreeWalker(Q.body,NodeFilter.SHOW_TEXT),G=[],N;while(N=K.nextNode())G.push(N);for(let X of G){let V=X.nodeValue;if(!V||!Y.test(V)){Y.lastIndex=0;continue}Y.lastIndex=0;let U=X.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let L=V.split(Y).filter((O)=>O!=="");if(L.length===0)continue;let F=Q.createDocumentFragment();for(let O of L)if(q.test(O)){let J=Q.createElement("mark");J.className="search-highlight-term",J.textContent=O,F.appendChild(J)}else F.appendChild(Q.createTextNode(O));X.parentNode.replaceChild(F,X)}return Q.body.innerHTML}function NY({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Y,agentName:q,agentAvatarUrl:Q,userName:K,userAvatarUrl:G,userAvatarBackground:N,onDelete:X,isThreadReply:V,isThreadPrev:U,isThreadNext:L,isRemoving:F,highlightQuery:O,onFileRef:J,onOpenWidget:W}){let[D,E]=m(null),S=T(null),P=_.data,g=P.type==="agent_response",h=K||"You",x=g?q||dZ:h,M=g?e$(q,Q,!0):e$(h,G),B=typeof N==="string"?N.trim().toLowerCase():"",k=!g&&M.image&&(B==="clear"||B==="transparent"),w=g&&Boolean(M.image),l=`background-color: ${k||w?"transparent":M.color}`,v=P.content_meta,n=Boolean(v?.truncated),d=Boolean(v?.preview),s=n&&!d,_0=n?{originalLength:Number.isFinite(v?.original_length)?v.original_length:P.content?P.content.length:0,maxLength:Number.isFinite(v?.max_length)?v.max_length:0}:null,t=P.content_blocks||[],K0=P.media_ids||[],N0=GX(P.content,P.link_previews),{content:X0,fileRefs:T0}=BX(N0),{content:J0,messageRefs:W0}=zX(X0),{content:C0,attachments:F0}=FX(J0);N0=C0;let y0=Y3(t),v0=q3(t),H0=y0.length===1&&typeof y0[0]?.fallback_text==="string"?y0[0].fallback_text.trim():"",P0=v0.length===1?qY(v0[0]).trim():"",Y0=Boolean(H0)&&N0?.trim()===H0||Boolean(P0)&&N0?.trim()===P0,E0=Boolean(N0)&&!s&&!Y0,h0=typeof O==="string"?O.trim():"",n0=b0(()=>{if(!N0||Y0)return"";let C=W_(N0,j);return h0?JX(C,h0):C},[N0,Y0,h0]),U1=(C,e)=>{C.stopPropagation(),E(k_(e))},[a0,g0]=m(null),m0=(C)=>{g0(C)},o0=(C)=>{C.stopPropagation(),X?.(_)},s0=(C,e)=>{let B0=new Set;if(!C||e.length===0)return{content:C,usedIds:B0};return{content:C.replace(/attachment:([^\s)"']+)/g,(i0,j1,q1,f1)=>{let r1=j1.replace(/^\/+/,""),o1=e.find((g1)=>g1.name&&g1.name.toLowerCase()===r1.toLowerCase()&&!B0.has(g1.id))||e.find((g1)=>!B0.has(g1.id));if(!o1)return i0;if(B0.add(o1.id),f1.slice(Math.max(0,q1-2),q1)==="](")return`/media/${o1.id}`;return o1.name||"attachment"}),usedIds:B0}},V0=[],w0=[],_1=[],o=[],Q0=[],p=[],i=[],z0=0;if(t.length>0)t.forEach((C)=>{if(C?.type==="text"&&C.annotations)i.push(C.annotations);if(C?.type==="generated_widget")p.push(C);else if(C?.type==="resource_link")o.push(C);else if(C?.type==="resource")Q0.push(C);else if(C?.type==="file"){let e=K0[z0++];if(e)w0.push(e),_1.push({id:e,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let e=K0[z0++];if(e){let B0=typeof C?.mime_type==="string"?C.mime_type:void 0;V0.push({id:e,annotations:C?.annotations,mimeType:B0}),_1.push({id:e,name:C?.name||C?.filename||C?.title})}}});else if(K0.length>0){let C=F0.length>0;K0.forEach((e,B0)=>{let A0=F0[B0]||null;if(_1.push({id:e,name:A0?.label||null}),C)w0.push(e);else V0.push({id:e,annotations:null})})}if(F0.length>0)F0.forEach((C)=>{if(!C?.id)return;let e=_1.find((B0)=>String(B0.id)===String(C.id));if(e&&!e.name)e.name=C.label});let{content:k0,usedIds:M0}=s0(N0,_1);N0=k0;let G0=V0.filter(({id:C})=>!M0.has(C)),I0=w0.filter((C)=>!M0.has(C)),p0=F0.length>0?F0.map((C,e)=>({id:C.id||`attachment-${e+1}`,label:C.label||`attachment-${e+1}`})):_1.map((C,e)=>({id:C.id,label:C.name||`attachment-${e+1}`})),O0=b0(()=>Y3(t),[t]),f0=b0(()=>q3(t),[t]),D0=b0(()=>{return O0.map((C)=>`${C.card_id}:${C.state}`).join("|")},[O0]);b(()=>{if(!S.current)return;return N4(S.current),WX(S.current)},[n0]);let Z0=T(null);return b(()=>{if(!Z0.current||O0.length===0)return;let C=Z0.current;C.innerHTML="";for(let e of O0){let B0=document.createElement("div");C.appendChild(B0),ZY(B0,e,{onAction:async(A0)=>{if(A0.type==="Action.OpenUrl"){let i0=m4(A0.url||"");if(!i0)throw Error("Invalid URL");window.open(i0,"_blank","noopener,noreferrer");return}if(A0.type==="Action.Submit"){await O6({post_id:_.id,thread_id:P.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:A0.type,title:A0.title||"",data:A0.data}});return}console.warn("[post] unsupported adaptive card action:",A0.type,A0)}}).catch((A0)=>{console.error("[post] adaptive card render error:",A0),B0.textContent=e.fallback_text||"Card failed to render."})}},[D0,_.id]),z`
        <div id=${`post-${_.id}`} class="post ${g?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${L?"thread-next":""} ${F?"removing":""}" onClick=${$}>
            <div class="post-avatar ${g?"agent-avatar":""} ${M.image?"has-image":""}" style=${l}>
                ${M.image?z`<img src=${M.image} alt=${x} />`:M.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${o0}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${x}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${B7(_.timestamp)}</a>
                </div>
                ${s&&_0&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${p5(_0.originalLength)} chars
                            ${_0.maxLength?z` • Display limit: ${p5(_0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${d&&_0&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${p5(_0.maxLength)} of ${p5(_0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(T0.length>0||W0.length>0||p0.length>0)&&z`
                    <div class="post-file-refs">
                        ${W0.map((C)=>{let e=(B0)=>{if(B0.preventDefault(),B0.stopPropagation(),Y)Y(C,_.chat_jid||null);else{let A0=document.getElementById("post-"+C);if(A0)A0.scrollIntoView({behavior:"smooth",block:"center"}),A0.classList.add("post-highlight"),setTimeout(()=>A0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${e}>
                                    <${v_}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${T0.map((C)=>{let e=C.split("/").pop()||C;return z`
                                <${v_}
                                    prefix="post"
                                    label=${e}
                                    title=${C}
                                    onClick=${()=>J?.(C)}
                                />
                            `})}
                        ${p0.map((C)=>z`
                            <${jX}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${m0}
                            />
                        `)}
                    </div>
                `}
                ${E0&&z`
                    <div 
                        ref=${S}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:n0}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let e=C.target.dataset.hashtag;if(e)j?.(e)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),E(C.target.src)}}
                    />
                `}
                ${O0.length>0&&z`
                    <div ref=${Z0} class="post-adaptive-cards" />
                `}
                ${f0.length>0&&z`
                    <div class="post-adaptive-card-submissions">
                        ${f0.map((C,e)=>{let B0=QY(C),A0=`${C.card_id}-${e}`;return z`
                                <div key=${A0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${B0.title}</span>
                                        </div>
                                    </div>
                                    ${B0.fields.length>0&&z`
                                        <div class="adaptive-card-submission-fields">
                                            ${B0.fields.map((i0)=>z`
                                                <span class="adaptive-card-submission-field" title=${`${i0.key}: ${i0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${i0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${i0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${p4(B0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${p.length>0&&z`
                    <div class="generated-widget-launches">
                        ${p.map((C,e)=>z`
                            <${qX}
                                key=${C.widget_id||C.id||`${_.id}-widget-${e}`}
                                block=${C}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${i.length>0&&z`
                    ${i.map((C,e)=>z`
                        <${d8} key=${e} annotations=${C} />
                    `)}
                `}
                ${G0.length>0&&z`
                    <div class="media-preview">
                        ${G0.map(({id:C,mimeType:e})=>{let A0=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?k_(C):k6(C);return z`
                                <img 
                                    key=${C} 
                                    src=${A0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(i0)=>U1(i0,C)}
                                />
                            `})}
                    </div>
                `}
                ${G0.length>0&&z`
                    ${G0.map(({annotations:C},e)=>z`
                        ${C&&z`<${d8} key=${e} annotations=${C} />`}
                    `)}
                `}
                ${I0.length>0&&z`
                    <div class="file-attachments">
                        ${I0.map((C)=>z`
                            <${$X} key=${C} mediaId=${C} onPreview=${m0} />
                        `)}
                    </div>
                `}
                ${o.length>0&&z`
                    <div class="resource-links">
                        ${o.map((C,e)=>z`
                            <div key=${e}>
                                <${ZX} block=${C} />
                                <${d8} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Q0.length>0&&z`
                    <div class="resource-embeds">
                        ${Q0.map((C,e)=>z`
                            <div key=${e}>
                                <${YX} block=${C} />
                                <${d8} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${P.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${P.link_previews.map((C,e)=>z`
                            <${KX} key=${e} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&z`<${GY} src=${D} onClose=${()=>E(null)} />`}
        ${a0&&z`
            <${KY}
                mediaId=${a0.mediaId}
                info=${a0.info}
                onClose=${()=>g0(null)}
            />
        `}
    `}function XY({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Y,onMessageRef:q,onScrollToMessage:Q,onFileRef:K,onOpenWidget:G,emptyMessage:N,timelineRef:X,agents:V,user:U,onDeletePost:L,reverse:F=!0,removingPostIds:O,searchQuery:J}){let[W,D]=m(!1),E=T(null),S=typeof IntersectionObserver<"u",P=y(async()=>{if(!j||!$||W)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,W,j]),g=y((v)=>{let{scrollTop:n,scrollHeight:d,clientHeight:s}=v.target,_0=F?d-s-n:n,t=Math.max(300,s);if(_0<t)P()},[F,P]);b(()=>{if(!S)return;let v=E.current,n=X?.current;if(!v||!n)return;let d=300,s=new IntersectionObserver((_0)=>{for(let t of _0){if(!t.isIntersecting)continue;P()}},{root:n,rootMargin:`${d}px 0px ${d}px 0px`,threshold:0});return s.observe(v),()=>s.disconnect()},[S,$,j,X,P]);let h=T(P);if(h.current=P,b(()=>{if(S)return;if(!X?.current)return;let{scrollTop:v,scrollHeight:n,clientHeight:d}=X.current,s=F?n-d-v:v,_0=Math.max(300,d);if(s<_0)h.current?.()},[S,_,$,F,X]),b(()=>{if(!X?.current)return;if(!$||W)return;let{scrollTop:v,scrollHeight:n,clientHeight:d}=X.current,s=F?n-d-v:v,_0=Math.max(300,d);if(n<=d+1||s<_0)h.current?.()},[_,$,W,F,X]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${N||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let x=_.slice().sort((v,n)=>v.id-n.id),M=(v)=>{let n=v?.data?.thread_id;if(n===null||n===void 0||n==="")return null;let d=Number(n);return Number.isFinite(d)?d:null},B=new Map;for(let v=0;v<x.length;v+=1){let n=x[v],d=Number(n?.id),s=M(n);if(s!==null){let _0=B.get(s)||{anchorIndex:-1,replyIndexes:[]};_0.replyIndexes.push(v),B.set(s,_0)}else if(Number.isFinite(d)){let _0=B.get(d)||{anchorIndex:-1,replyIndexes:[]};_0.anchorIndex=v,B.set(d,_0)}}let k=new Map;for(let[v,n]of B.entries()){let d=new Set;if(n.anchorIndex>=0)d.add(n.anchorIndex);for(let s of n.replyIndexes)d.add(s);k.set(v,Array.from(d).sort((s,_0)=>s-_0))}let w=x.map((v,n)=>{let d=M(v);if(d===null)return{hasThreadPrev:!1,hasThreadNext:!1};let s=k.get(d);if(!s||s.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let _0=s.indexOf(n);if(_0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:_0>0,hasThreadNext:_0<s.length-1}}),l=z`<div class="timeline-sentinel" ref=${E}></div>`;return z`
        <div class="timeline ${F?"reverse":"normal"}" ref=${X} onScroll=${g}>
            <div class="timeline-content">
                ${F?l:null}
                ${x.map((v,n)=>{let d=Boolean(v.data?.thread_id&&v.data.thread_id!==v.id),s=O?.has?.(v.id),_0=w[n]||{};return z`
                    <${NY}
                        key=${v.id}
                        post=${v}
                        isThreadReply=${d}
                        isThreadPrev=${_0.hasThreadPrev}
                        isThreadNext=${_0.hasThreadNext}
                        isRemoving=${s}
                        highlightQuery=${J}
                        agentName=${iZ(v.data?.agent_id,V||{})}
                        agentAvatarUrl=${rZ(v.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(v)}
                        onHashtagClick=${Y}
                        onMessageRef=${q}
                        onScrollToMessage=${Q}
                        onFileRef=${K}
                        onOpenWidget=${G}
                        onDelete=${L}
                    />
                `})}
                ${F?null:l}
            </div>
        </div>
    `}var i8="workspaceExplorerScale",OX=["compact","default","comfortable"],DX=new Set(OX),AX={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function VY(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return DX.has(j)?j:$}function Q3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function EX(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function kX(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function K3(_={}){let $=EX(_),j=_.stored?VY(_.stored,$):$;return kX(j,_)}function UY(_){return AX[VY(_)]}function MX(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function G3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function LY(_,$,j={}){let Z=j.resolvePane;if(G3(_,Z))return!0;return MX($)}var IX=60000,FY=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function xX(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return G3($,(j)=>d0.resolve(j))}function HY(_,$,j,Z=0,Y=[]){if(!j&&FY(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let q of _.children)HY(q,$,j,Z+1,Y);return Y}function WY(_,$,j){if(!_)return"";let Z=[],Y=(q)=>{if(!j&&FY(q))return;if(Z.push(q.type==="dir"?`d:${q.path}`:`f:${q.path}`),q.children&&$?.has(q.path))for(let Q of q.children)Y(Q)};return Y(_),Z.join("|")}function U3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Y=j?new Map(j.map((K)=>[K?.path,K])):new Map,q=!j||j.length!==Z.length,Q=Z.map((K)=>{let G=U3(Y.get(K.path),K);if(G!==Y.get(K.path))q=!0;return G});return q?{...$,children:Q}:_}function X3(_,$,j){if(!_)return _;if(_.path===$)return U3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Y=_.children.map((q)=>{let Q=X3(q,$,j);if(Q!==q)Z=!0;return Q});return Z?{..._,children:Y}:_}var JY=4,N3=14,TX=8,yX=16;function OY(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=OY(Z);return _.__bytes=j,j}function DY(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=JY)return Z;let Y=Array.isArray(_.children)?_.children:[],q=[];for(let K of Y){let G=Math.max(0,Number(K?.__bytes??K?.size??0));if(G<=0)continue;if(K.type==="dir")q.push({kind:"dir",node:K,size:G});else q.push({kind:"file",name:K.name,path:K.path,size:G})}q.sort((K,G)=>G.size-K.size);let Q=q;if(q.length>N3){let K=q.slice(0,N3-1),G=q.slice(N3-1),N=G.reduce((X,V)=>X+V.size,0);K.push({kind:"other",name:`+${G.length} more`,path:`${Z.path}/[other]`,size:N}),Q=K}return Z.children=Q.map((K)=>{if(K.kind==="dir")return DY(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Z}function BY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function AY(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),q=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Y}% ${q}%)`}function r8(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function L3(_,$,j,Z,Y,q){let Q=Math.PI*2-0.0001,K=q-Y>Q?Y+Q:q,G=r8(_,$,Z,Y),N=r8(_,$,Z,K),X=r8(_,$,j,K),V=r8(_,$,j,Y),U=K-Y>Math.PI?1:0;return[`M ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`L ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var EY={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function kY(_,$,j){let Z=[],Y=[],q=Math.max(0,Number($)||0),Q=(K,G,N,X)=>{let V=Array.isArray(K?.children)?K.children:[];if(!V.length)return;let U=Math.max(0,Number(K.size)||0);if(U<=0)return;let L=N-G,F=G;V.forEach((O,J)=>{let W=Math.max(0,Number(O.size)||0);if(W<=0)return;let D=W/U,E=F,S=J===V.length-1?N:F+L*D;if(F=S,S-E<0.003)return;let P=EY[X];if(P){let g=AY(E,X,j);if(Z.push({key:O.path,path:O.path,label:O.name,size:W,color:g,depth:X,startAngle:E,endAngle:S,innerRadius:P[0],outerRadius:P[1],d:L3(120,120,P[0],P[1],E,S)}),X===1)Y.push({key:O.path,name:O.name,size:W,pct:q>0?W/q*100:0,color:g})}if(X<JY)Q(O,E,S,X+1)})};return Q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Y}}function V3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Y=V3(Z,$);if(Y)return Y}return null}function MY(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Y=EY[1];if(!Y)return{segments:[],legend:[]};let q=-Math.PI/2,Q=Math.PI*3/2,K=AY(q,1,Z),N=`${$||"."}/[files]`;return{segments:[{key:N,path:N,label:_,size:j,color:K,depth:1,startAngle:q,endAngle:Q,innerRadius:Y[0],outerRadius:Y[1],d:L3(120,120,Y[0],Y[1],q,Q)}],legend:[{key:N,name:_,size:j,pct:100,color:K}]}}function zY(_,$=!1,j=!1){if(!_)return null;let Z=OY(_),Y=DY(_,0),q=Y.size||Z,{segments:Q,legend:K}=kY(Y,q,j);if(!Q.length&&q>0){let G=MY("[files]",Y.path,q,j);Q=G.segments,K=G.legend}return{root:Y,totalSize:q,segments:Q,legend:K,truncated:$,isDarkTheme:j}}function PX({payload:_}){if(!_)return null;let[$,j]=m(null),[Z,Y]=m(_?.root?.path||"."),[q,Q]=m(()=>[_?.root?.path||"."]),[K,G]=m(!1);b(()=>{let B=_?.root?.path||".";Y(B),Q([B]),j(null)},[_?.root?.path,_?.totalSize]),b(()=>{if(!Z)return;G(!0);let B=setTimeout(()=>G(!1),180);return()=>clearTimeout(B)},[Z]);let N=b0(()=>{return V3(_.root,Z)||_.root},[_?.root,Z]),X=N?.size||_.totalSize||0,{segments:V,legend:U}=b0(()=>{let B=kY(N,X,_.isDarkTheme);if(B.segments.length>0)return B;if(X<=0)return B;let k=N?.children?.length?"Total":"[files]";return MY(k,N?.path||_?.root?.path||".",X,_.isDarkTheme)},[N,X,_.isDarkTheme,_?.root?.path]),[L,F]=m(V),O=T(new Map),J=T(0);b(()=>{let B=O.current,k=new Map(V.map((n)=>[n.key,n])),w=performance.now(),l=220,v=(n)=>{let d=Math.min(1,(n-w)/220),s=d*(2-d),_0=V.map((t)=>{let N0=B.get(t.key)||{startAngle:t.startAngle,endAngle:t.startAngle,innerRadius:t.innerRadius,outerRadius:t.innerRadius},X0=(F0,y0)=>F0+(y0-F0)*s,T0=X0(N0.startAngle,t.startAngle),J0=X0(N0.endAngle,t.endAngle),W0=X0(N0.innerRadius,t.innerRadius),C0=X0(N0.outerRadius,t.outerRadius);return{...t,d:L3(120,120,W0,C0,T0,J0)}});if(F(_0),d<1)J.current=requestAnimationFrame(v)};if(J.current)cancelAnimationFrame(J.current);return J.current=requestAnimationFrame(v),O.current=k,()=>{if(J.current)cancelAnimationFrame(J.current)}},[V]);let W=L.length?L:V,D=X>0?M_(X):"0 B",E=N?.name||"",P=(E&&E!=="."?E:"Total")||"Total",g=D,h=q.length>1,x=(B)=>{if(!B?.path)return;let k=V3(_.root,B.path);if(!k||!Array.isArray(k.children)||k.children.length===0)return;Q((w)=>[...w,k.path]),Y(k.path),j(null)},M=()=>{if(!h)return;Q((B)=>{let k=B.slice(0,-1);return Y(k[k.length-1]||_?.root?.path||"."),k}),j(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${N?.path||_?.root?.path||"."}`}
                data-segments=${W.length}
                data-base-size=${X}>
                ${W.map((B)=>z`
                    <path
                        key=${B.key}
                        d=${B.d}
                        fill=${B.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===B.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(B)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(B)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>x(B)}
                    >
                        <title>${B.label} — ${M_(B.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${h?" is-drill":""}`}
                    onClick=${M}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${P}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${g}</text>
                </g>
            </svg>
            ${U.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((B)=>z`
                        <div key=${B.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${B.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${B.name}>${B.name}</span>
                            <span class="workspace-folder-starburst-size">${M_(B.size)}</span>
                            <span class="workspace-folder-starburst-pct">${B.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function CX({mediaId:_}){let[$,j]=m(null);if(b(()=>{if(!_)return;Z5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Y=$.metadata?.size?M_($.metadata.size):"";return z`
        <a href=${k_(_)} download=${Z} class="file-attachment"
            onClick=${(q)=>q.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${Y&&z`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function IY({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Y,onOpenVncTab:q,onToggleTerminal:Q,terminalVisible:K=!1}){let[G,N]=m(null),[X,V]=m(new Set(["."])),[U,L]=m(null),[F,O]=m(null),[J,W]=m(""),[D,E]=m(null),[S,P]=m(null),[g,h]=m(!0),[x,M]=m(!1),[B,k]=m(null),[w,l]=m(()=>V5("workspaceShowHidden",!1)),[v,n]=m(!1),[d,s]=m(null),[_0,t]=m(null),[K0,N0]=m(null),[X0,T0]=m(!1),[J0,W0]=m(null),[C0,F0]=m(()=>BY()),[y0,v0]=m(()=>K3({stored:L_(i8),...Q3()})),[H0,P0]=m(!1),Y0=T(X),E0=T(""),h0=T(null),n0=T(0),U1=T(new Set),a0=T(null),g0=T(new Map),m0=T(_),o0=T(Z),s0=T(null),V0=T(null),w0=T(null),_1=T(null),o=T(null),Q0=T(null),p=T("."),i=T(null),z0=T({path:null,dragging:!1,startX:0,startY:0}),k0=T({path:null,dragging:!1,startX:0,startY:0}),M0=T({path:null,timer:0}),G0=T(!1),I0=T(0),p0=T(new Map),O0=T(null),f0=T(null),D0=T(null),Z0=T(null),C=T(null),e=T(null),B0=T(w),A0=T($),i0=T(j??$),j1=T(0),q1=T(K0),f1=T(v),r1=T(d),I_=T(null),o1=T({x:0,y:0}),S1=T(0),g1=T(null),v1=T(U),$1=T(F),m1=T(null),d_=T(D);m0.current=_,o0.current=Z,b(()=>{Y0.current=X},[X]),b(()=>{B0.current=w},[w]),b(()=>{A0.current=$},[$]),b(()=>{i0.current=j??$},[j,$]),b(()=>{q1.current=K0},[K0]),b(()=>{if(typeof window>"u")return;let A=()=>{v0(K3({stored:L_(i8),...Q3()}))};A();let I=()=>A(),f=()=>A(),u=($0)=>{if(!$0||$0.key===null||$0.key===i8)A()};window.addEventListener("resize",I),window.addEventListener("focus",f),window.addEventListener("storage",u);let r=window.matchMedia?.("(pointer: coarse)"),q0=window.matchMedia?.("(hover: none)"),U0=($0,R0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",R0);else if($0.addListener)$0.addListener(R0)},L0=($0,R0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",R0);else if($0.removeListener)$0.removeListener(R0)};return U0(r,I),U0(q0,I),()=>{window.removeEventListener("resize",I),window.removeEventListener("focus",f),window.removeEventListener("storage",u),L0(r,I),L0(q0,I)}},[]),b(()=>{let A=(I)=>{let f=I?.detail?.path;if(!f)return;let u=f.split("/"),r=[];for(let q0=1;q0<u.length;q0++)r.push(u.slice(0,q0).join("/"));if(r.length)V((q0)=>{let U0=new Set(q0);U0.add(".");for(let L0 of r)U0.add(L0);return U0});L(f),requestAnimationFrame(()=>{let q0=document.querySelector(`[data-path="${CSS.escape(f)}"]`);if(q0)q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",A),()=>window.removeEventListener("workspace-reveal-path",A)},[]),b(()=>{f1.current=v},[v]),b(()=>{r1.current=d},[d]),b(()=>{v1.current=U},[U]),b(()=>{$1.current=F},[F]),b(()=>{d_.current=D},[D]),b(()=>{if(typeof window>"u"||typeof document>"u")return;let A=()=>F0(BY());A();let I=window.matchMedia?.("(prefers-color-scheme: dark)"),f=()=>A();if(I?.addEventListener)I.addEventListener("change",f);else if(I?.addListener)I.addListener(f);let u=typeof MutationObserver<"u"?new MutationObserver(()=>A()):null;if(u?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)u?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(I?.removeEventListener)I.removeEventListener("change",f);else if(I?.removeListener)I.removeListener(f);u?.disconnect()}},[]),b(()=>{if(!F)return;let A=o.current;if(!A)return;let I=requestAnimationFrame(()=>{try{A.focus(),A.select()}catch{}});return()=>cancelAnimationFrame(I)},[F]),b(()=>{if(!H0)return;let A=(f)=>{let u=f?.target;if(!(u instanceof Element))return;if(C.current?.contains(u))return;if(e.current?.contains(u))return;P0(!1)},I=(f)=>{if(f?.key==="Escape")P0(!1),e.current?.focus?.()};return document.addEventListener("mousedown",A),document.addEventListener("touchstart",A,{passive:!0}),document.addEventListener("keydown",I),()=>{document.removeEventListener("mousedown",A),document.removeEventListener("touchstart",A),document.removeEventListener("keydown",I)}},[H0]);let s1=async(A,I={})=>{let f=Boolean(I?.autoOpen),u=String(A||"").trim();M(!0),E(null),P(null);try{let r=await x5(u,20000);if(f&&u&&LY(u,r,{resolvePane:(q0)=>d0.resolve(q0)}))return o0.current?.(u,r),r;return E(r),r}catch(r){let q0={error:r.message||"Failed to load preview"};return E(q0),q0}finally{M(!1)}};s0.current=s1;let i_=async()=>{if(!A0.current)return;try{let A=await I5("",1,B0.current),I=WY(A.root,Y0.current,B0.current);if(I===E0.current){h(!1);return}if(E0.current=I,h0.current=A.root,!n0.current)n0.current=requestAnimationFrame(()=>{n0.current=0,N((f)=>U3(f,h0.current)),h(!1)})}catch(A){k(A.message||"Failed to load workspace"),h(!1)}},b_=async(A)=>{if(!A)return;if(U1.current.has(A))return;U1.current.add(A);try{let I=await I5(A,1,B0.current);N((f)=>X3(f,A,I.root))}catch(I){k(I.message||"Failed to load workspace")}finally{U1.current.delete(A)}};V0.current=b_;let J1=y(()=>{let A=U;if(!A)return".";let I=g0.current?.get(A);if(I&&I.type==="dir")return I.path;if(A==="."||!A.includes("/"))return".";let f=A.split("/");return f.pop(),f.join("/")||"."},[U]),p1=y((A)=>{let I=A?.closest?.(".workspace-row");if(!I)return null;let f=I.dataset.path,u=I.dataset.type;if(!f)return null;if(u==="dir")return f;if(f.includes("/")){let r=f.split("/");return r.pop(),r.join("/")||"."}return"."},[]),O1=y((A)=>{return p1(A?.target||null)},[p1]),X1=y((A)=>{q1.current=A,N0(A)},[]),L1=y(()=>{let A=M0.current;if(A?.timer)clearTimeout(A.timer);M0.current={path:null,timer:0}},[]),G_=y((A)=>{if(!A||A==="."){L1();return}let I=g0.current?.get(A);if(!I||I.type!=="dir"){L1();return}if(Y0.current?.has(A)){L1();return}if(M0.current?.path===A)return;L1();let f=setTimeout(()=>{M0.current={path:null,timer:0},V0.current?.(A),V((u)=>{let r=new Set(u);return r.add(A),r})},600);M0.current={path:A,timer:f}},[L1]),N_=y((A,I)=>{if(o1.current={x:A,y:I},S1.current)return;S1.current=requestAnimationFrame(()=>{S1.current=0;let f=I_.current;if(!f)return;let u=o1.current;f.style.transform=`translate(${u.x+12}px, ${u.y+12}px)`})},[]),y1=y((A)=>{if(!A)return;let f=(g0.current?.get(A)?.name||A.split("/").pop()||A).trim();if(!f)return;t({path:A,label:f})},[]),h1=y(()=>{if(t(null),S1.current)cancelAnimationFrame(S1.current),S1.current=0;if(I_.current)I_.current.style.transform="translate(-9999px, -9999px)"},[]),V1=y((A)=>{if(!A)return".";let I=g0.current?.get(A);if(I&&I.type==="dir")return I.path;if(A==="."||!A.includes("/"))return".";let f=A.split("/");return f.pop(),f.join("/")||"."},[]),k1=y(()=>{O(null),W("")},[]),a1=y((A)=>{if(!A)return;let f=(g0.current?.get(A)?.name||A.split("/").pop()||A).trim();if(!f||A===".")return;O(A),W(f)},[]),c1=y(async()=>{let A=$1.current;if(!A)return;let I=(J||"").trim();if(!I){k1();return}let f=g0.current?.get(A),u=(f?.name||A.split("/").pop()||A).trim();if(I===u){k1();return}try{let q0=(await T6(A,I))?.path||A,U0=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(k1(),k(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:A,newPath:q0,type:f?.type||"file"}})),f?.type==="dir")V((L0)=>{let $0=new Set;for(let R0 of L0)if(R0===A)$0.add(q0);else if(R0.startsWith(`${A}/`))$0.add(`${q0}${R0.slice(A.length)}`);else $0.add(R0);return $0});if(L(q0),f?.type==="dir")E(null),M(!1),P(null);else s0.current?.(q0);V0.current?.(U0)}catch(r){k(r?.message||"Failed to rename file")}},[k1,J]),r_=y(async(A)=>{let u=A||".";for(let r=0;r<50;r+=1){let U0=`untitled${r===0?"":`-${r}`}.md`;try{let $0=(await x6(u,U0,""))?.path||(u==="."?U0:`${u}/${U0}`);if(u&&u!==".")V((R0)=>new Set([...R0,u]));L($0),k(null),V0.current?.(u),s0.current?.($0);return}catch(L0){if(L0?.status===409||L0?.code==="file_exists")continue;k(L0?.message||"Failed to create file");return}}k("Failed to create file (untitled name already in use).")},[]),x_=y((A)=>{if(A?.stopPropagation?.(),X0)return;let I=V1(v1.current);r_(I)},[X0,V1,r_]);b(()=>{if(typeof window>"u")return;let A=(I)=>{let f=I?.detail?.updates||[];if(!Array.isArray(f)||f.length===0)return;N((L0)=>{let $0=L0;for(let R0 of f){if(!R0?.root)continue;if(!$0||R0.path==="."||!R0.path)$0=R0.root;else $0=X3($0,R0.path,R0.root)}if($0)E0.current=WY($0,Y0.current,B0.current);return h(!1),$0});let u=v1.current;if(Boolean(u)&&f.some((L0)=>{let $0=L0?.path||"";if(!$0||$0===".")return!0;return u===$0||u.startsWith(`${$0}/`)||$0.startsWith(`${u}/`)}))p0.current.clear();if(!u||!d_.current)return;let q0=g0.current?.get(u);if(q0&&q0.type==="dir")return;if(f.some((L0)=>{let $0=L0?.path||"";if(!$0||$0===".")return!0;return u===$0||u.startsWith(`${$0}/`)}))s0.current?.(u)};return window.addEventListener("workspace-update",A),()=>window.removeEventListener("workspace-update",A)},[]),a0.current=i_;let o_=T(()=>{if(typeof window>"u")return;let A=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),I=i0.current??A0.current,f=document.visibilityState!=="hidden"&&(I||A.matches&&A0.current);T5(f,B0.current).catch(()=>{})}).current,z_=T(0),X4=T(()=>{if(z_.current)clearTimeout(z_.current);z_.current=setTimeout(()=>{z_.current=0,o_()},250)}).current;b(()=>{if(A0.current)a0.current?.();X4()},[$,j]),b(()=>{a0.current(),o_();let A=setInterval(()=>a0.current(),IX),I=v5("previewHeight",null),f=Number.isFinite(I)?Math.min(Math.max(I,80),600):280;if(I0.current=f,w0.current)w0.current.style.setProperty("--preview-height",`${f}px`);let u=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),r=()=>X4();if(u.addEventListener)u.addEventListener("change",r);else if(u.addListener)u.addListener(r);return document.addEventListener("visibilitychange",r),()=>{if(clearInterval(A),n0.current)cancelAnimationFrame(n0.current),n0.current=0;if(u.removeEventListener)u.removeEventListener("change",r);else if(u.removeListener)u.removeListener(r);if(document.removeEventListener("visibilitychange",r),z_.current)clearTimeout(z_.current),z_.current=0;if(i.current)clearTimeout(i.current),i.current=null;T5(!1,B0.current).catch(()=>{})}},[]);let F_=b0(()=>HY(G,X,w),[G,X,w]),T_=b0(()=>new Map(F_.map((A)=>[A.node.path,A.node])),[F_]),x4=b0(()=>UY(y0),[y0]);g0.current=T_;let Z1=(U?g0.current.get(U):null)?.type==="dir";b(()=>{if(!U||!Z1){W0(null),O0.current=null,f0.current=null;return}let A=U,I=`${w?"hidden":"visible"}:${U}`,f=p0.current,u=f.get(I);if(u?.root){f.delete(I),f.set(I,u);let U0=zY(u.root,Boolean(u.truncated),C0);if(U0)O0.current=U0,f0.current=U,W0({loading:!1,error:null,payload:U0});return}let r=O0.current,q0=f0.current;W0({loading:!0,error:null,payload:q0===U?r:null}),I5(U,TX,w).then((U0)=>{if(v1.current!==A)return;let L0={root:U0?.root,truncated:Boolean(U0?.truncated)};f.delete(I),f.set(I,L0);while(f.size>yX){let R0=f.keys().next().value;if(!R0)break;f.delete(R0)}let $0=zY(L0.root,L0.truncated,C0);O0.current=$0,f0.current=U,W0({loading:!1,error:null,payload:$0})}).catch((U0)=>{if(v1.current!==A)return;W0({loading:!1,error:U0?.message||"Failed to load folder size chart",payload:q0===U?r:null})})},[U,Z1,w,C0]);let D1=Boolean(D&&D.kind==="text"&&!Z1&&(!D.size||D.size<=262144)),V4=D1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",t1=Boolean(U&&U!=="."),H_=Boolean(U&&!Z1),l1=Boolean(U&&!Z1),F1=U&&Z1?V8(U,w):null,P1=y(()=>P0(!1),[]),Q1=y(async(A)=>{P1();try{await A?.()}catch(I){console.warn("[workspace-explorer] Header menu action failed:",I)}},[P1]);b(()=>{let A=D0.current;if(Z0.current)Z0.current.dispose(),Z0.current=null;if(!A)return;if(A.innerHTML="",!U||Z1||!D||D.error)return;let I={path:U,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},f=d0.resolve(I)||d0.get("workspace-preview-default");if(!f)return;let u=f.mount(A,I);return Z0.current=u,()=>{if(Z0.current===u)u.dispose(),Z0.current=null;A.innerHTML=""}},[U,Z1,D]);let e1=(A)=>{let I=A?.target;if(I instanceof Element)return I;return I?.parentElement||null},__=(A)=>{return Boolean(A?.closest?.(".workspace-node-icon, .workspace-label-text"))},$_=T((A)=>{let I=e1(A),f=I?.closest?.("[data-path]");if(!f)return;let u=f.dataset.path;if(!u||u===".")return;let r=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),q0=Boolean(I?.closest?.(".workspace-caret"));if(r||q0)return;if($1.current===u)return;a1(u)}).current,g_=T((A)=>{if(G0.current){G0.current=!1;return}let I=e1(A),f=I?.closest?.("[data-path]");if(_1.current?.focus?.(),!f)return;let u=f.dataset.path,r=f.dataset.type,q0=Boolean(I?.closest?.(".workspace-caret")),U0=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),L0=v1.current===u,$0=$1.current;if($0){if($0===u)return;k1()}let R0=r==="file"&&m1.current===u&&!q0&&!U0;if(r==="dir"){if(m1.current=null,L(u),E(null),P(null),M(!1),!Y0.current.has(u))V0.current?.(u);if(L0&&!q0)return;V((E_)=>{let Y_=new Set(E_);if(Y_.has(u))Y_.delete(u);else Y_.add(u);return Y_})}else{m1.current=null,L(u);let I1=g0.current.get(u);if(I1)m0.current?.(I1.path,I1);if(!U0&&!q0&&xX(u))o0.current?.(u,d_.current);else{let Y_=!U0&&!q0;s0.current?.(u,{autoOpen:Y_})}}}).current,w1=T(()=>{E0.current="",a0.current(),Array.from(Y0.current||[]).filter((I)=>I&&I!==".").forEach((I)=>V0.current?.(I))}).current,C1=T(()=>{m1.current=null,L(null),E(null),P(null),M(!1)}).current,j_=T(()=>{l((A)=>{let I=!A;if(typeof window<"u")Y1("workspaceShowHidden",String(I));return B0.current=I,T5(!0,I).catch(()=>{}),E0.current="",a0.current?.(),Array.from(Y0.current||[]).filter((u)=>u&&u!==".").forEach((u)=>V0.current?.(u)),I})}).current,y_=T((A)=>{if(e1(A)?.closest?.("[data-path]"))return;C1()}).current,W1=y(async(A)=>{if(!A)return;let I=A.split("/").pop()||A;if(!window.confirm(`Delete "${I}"? This cannot be undone.`))return;try{await P6(A);let u=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(v1.current===A)C1();V0.current?.(u),k(null)}catch(u){E((r)=>({...r||{},error:u.message||"Failed to delete file"}))}},[C1]),J_=y((A)=>{let I=_1.current;if(!I||!A||typeof CSS>"u"||typeof CSS.escape!=="function")return;I.querySelector(`[data-path="${CSS.escape(A)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),K1=y((A)=>{let I=F_;if(!I||I.length===0)return;let f=U?I.findIndex((u)=>u.node.path===U):-1;if(A.key==="ArrowDown"){A.preventDefault();let u=Math.min(f+1,I.length-1),r=I[u];if(!r)return;if(L(r.node.path),r.node.type!=="dir")m0.current?.(r.node.path,r.node),s0.current?.(r.node.path);else E(null),M(!1),P(null);J_(r.node.path);return}if(A.key==="ArrowUp"){A.preventDefault();let u=f<=0?0:f-1,r=I[u];if(!r)return;if(L(r.node.path),r.node.type!=="dir")m0.current?.(r.node.path,r.node),s0.current?.(r.node.path);else E(null),M(!1),P(null);J_(r.node.path);return}if(A.key==="ArrowRight"&&f>=0){let u=I[f];if(u?.node?.type==="dir"&&!X.has(u.node.path))A.preventDefault(),V0.current?.(u.node.path),V((r)=>new Set([...r,u.node.path]));return}if(A.key==="ArrowLeft"&&f>=0){let u=I[f];if(u?.node?.type==="dir"&&X.has(u.node.path))A.preventDefault(),V((r)=>{let q0=new Set(r);return q0.delete(u.node.path),q0});return}if(A.key==="Enter"&&f>=0){A.preventDefault();let u=I[f];if(!u)return;let r=u.node.path;if(u.node.type==="dir"){if(!Y0.current.has(r))V0.current?.(r);V((U0)=>{let L0=new Set(U0);if(L0.has(r))L0.delete(r);else L0.add(r);return L0}),E(null),P(null),M(!1)}else m0.current?.(r,u.node),s0.current?.(r);return}if((A.key==="Delete"||A.key==="Backspace")&&f>=0){let u=I[f];if(!u||u.node.type==="dir")return;A.preventDefault(),W1(u.node.path);return}if(A.key==="Escape")A.preventDefault(),C1()},[C1,W1,X,F_,J_,U]),P_=y((A)=>{let I=e1(A),f=I?.closest?.(".workspace-row");if(!f)return;let u=f.dataset.type,r=f.dataset.path;if(!r||r===".")return;if($1.current===r)return;let q0=A?.touches?.[0];if(!q0)return;if(z0.current={path:__(I)?r:null,dragging:!1,startX:q0.clientX,startY:q0.clientY},u!=="file")return;if(i.current)clearTimeout(i.current);i.current=setTimeout(()=>{if(i.current=null,z0.current?.dragging)return;W1(r)},600)},[W1]),O_=y(()=>{if(i.current)clearTimeout(i.current),i.current=null;let A=z0.current;if(A?.dragging&&A.path){let I=q1.current||J1(),f=g1.current;if(typeof f==="function")f(A.path,I)}z0.current={path:null,dragging:!1,startX:0,startY:0},j1.current=0,n(!1),s(null),X1(null),L1(),h1()},[J1,h1,X1,L1]),y4=y((A)=>{let I=z0.current,f=A?.touches?.[0];if(!f||!I?.path){if(i.current)clearTimeout(i.current),i.current=null;return}let u=Math.abs(f.clientX-I.startX),r=Math.abs(f.clientY-I.startY),q0=u>8||r>8;if(q0&&i.current)clearTimeout(i.current),i.current=null;if(!I.dragging&&q0)I.dragging=!0,n(!0),s("move"),y1(I.path);if(I.dragging){A.preventDefault(),N_(f.clientX,f.clientY);let U0=document.elementFromPoint(f.clientX,f.clientY),L0=p1(U0)||J1();if(q1.current!==L0)X1(L0);G_(L0)}},[p1,J1,y1,N_,X1,G_]),c4=T((A)=>{A.preventDefault();let I=w0.current;if(!I)return;let f=A.clientY,u=I0.current||280,r=A.currentTarget;r.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let q0=f,U0=($0)=>{q0=$0.clientY;let R0=I.clientHeight-80,I1=Math.min(Math.max(u-($0.clientY-f),80),R0);I.style.setProperty("--preview-height",`${I1}px`),I0.current=I1},L0=()=>{let $0=I.clientHeight-80,R0=Math.min(Math.max(u-(q0-f),80),$0);I0.current=R0,r.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("previewHeight",String(Math.round(R0))),document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",L0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",L0)}).current,C_=T((A)=>{A.preventDefault();let I=w0.current;if(!I)return;let f=A.touches[0];if(!f)return;let u=f.clientY,r=I0.current||280,q0=A.currentTarget;q0.classList.add("dragging"),document.body.style.userSelect="none";let U0=($0)=>{let R0=$0.touches[0];if(!R0)return;$0.preventDefault();let I1=I.clientHeight-80,E_=Math.min(Math.max(r-(R0.clientY-u),80),I1);I.style.setProperty("--preview-height",`${E_}px`),I0.current=E_},L0=()=>{q0.classList.remove("dragging"),document.body.style.userSelect="",Y1("previewHeight",String(Math.round(I0.current||r))),document.removeEventListener("touchmove",U0),document.removeEventListener("touchend",L0),document.removeEventListener("touchcancel",L0)};document.addEventListener("touchmove",U0,{passive:!1}),document.addEventListener("touchend",L0),document.addEventListener("touchcancel",L0)}).current,m_=async()=>{if(!U)return;try{let A=await I6(U);if(A.media_id)P(A.media_id)}catch(A){E((I)=>({...I||{},error:A.message||"Failed to attach"}))}},P4=async()=>{if(!U||Z1)return;await W1(U)},s_=(A)=>{return Array.from(A?.dataTransfer?.types||[]).includes("Files")},l4=y((A)=>{if(!s_(A))return;if(A.preventDefault(),j1.current+=1,!f1.current)n(!0);s("upload");let I=O1(A)||J1();X1(I),G_(I)},[J1,O1,X1,G_]),a_=y((A)=>{if(!s_(A))return;if(A.preventDefault(),A.dataTransfer)A.dataTransfer.dropEffect="copy";if(!f1.current)n(!0);if(r1.current!=="upload")s("upload");let I=O1(A)||J1();if(q1.current!==I)X1(I);G_(I)},[J1,O1,X1,G_]),p_=y((A)=>{if(!s_(A))return;if(A.preventDefault(),j1.current=Math.max(0,j1.current-1),j1.current===0)n(!1),s(null),X1(null),L1()},[X1,L1]),n1=y(async(A,I=".")=>{let f=Array.from(A||[]);if(f.length===0)return;let u=I&&I!==""?I:".",r=u!=="."?u:"workspace root";T0(!0);try{let q0=null;for(let U0 of f)try{q0=await N8(U0,u)}catch(L0){let $0=L0?.status,R0=L0?.code;if($0===409||R0==="file_exists"){let I1=U0?.name||"file";if(!window.confirm(`"${I1}" already exists in ${r}. Overwrite?`))continue;q0=await N8(U0,u,{overwrite:!0})}else throw L0}if(q0?.path)m1.current=q0.path,L(q0.path),s0.current?.(q0.path);V0.current?.(u)}catch(q0){k(q0.message||"Failed to upload file")}finally{T0(!1)}},[]),n4=y(async(A,I)=>{if(!A)return;let f=g0.current?.get(A);if(!f)return;let u=I&&I!==""?I:".",r=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(u===r)return;try{let U0=(await y6(A,u))?.path||A;if(f.type==="dir")V((L0)=>{let $0=new Set;for(let R0 of L0)if(R0===A)$0.add(U0);else if(R0.startsWith(`${A}/`))$0.add(`${U0}${R0.slice(A.length)}`);else $0.add(R0);return $0});if(L(U0),f.type==="dir")E(null),M(!1),P(null);else s0.current?.(U0);V0.current?.(r),V0.current?.(u)}catch(q0){k(q0?.message||"Failed to move entry")}},[]);g1.current=n4;let d4=y(async(A)=>{if(!s_(A))return;A.preventDefault(),j1.current=0,n(!1),s(null),N0(null),L1();let I=Array.from(A?.dataTransfer?.files||[]);if(I.length===0)return;let f=q1.current||O1(A)||J1();await n1(I,f)},[J1,O1,n1]),J5=y((A)=>{if(A?.stopPropagation?.(),X0)return;let I=A?.currentTarget?.dataset?.uploadTarget||".";p.current=I,Q0.current?.click()},[X0]),H1=y(()=>{if(X0)return;let A=v1.current,I=A?g0.current?.get(A):null;p.current=I?.type==="dir"?I.path:".",Q0.current?.click()},[X0]),U4=y(()=>{Q1(()=>x_(null))},[Q1,x_]),i4=y(()=>{Q1(()=>H1())},[Q1,H1]),X_=y(()=>{Q1(()=>w1())},[Q1,w1]),Z_=y(()=>{Q1(()=>j_())},[Q1,j_]),t_=y(()=>{if(!U||!D1)return;Q1(()=>o0.current?.(U,D))},[Q1,U,D1,D]),C4=y(()=>{if(!U||U===".")return;Q1(()=>a1(U))},[Q1,U,a1]),S4=y(()=>{if(!U||Z1)return;Q1(()=>P4())},[Q1,U,Z1,P4]),r4=y(()=>{if(!U||Z1)return;Q1(()=>m_())},[Q1,U,Z1,m_]),e_=y(()=>{if(!F1)return;if(P1(),typeof window<"u")window.open(F1,"_blank","noopener")},[P1,F1]),D_=y(()=>{P1(),Y?.()},[P1,Y]),O5=y(()=>{P1(),q?.()},[P1,q]),L4=y(()=>{P1(),Q?.()},[P1,Q]),w4=y((A)=>{if(!A||A.button!==0)return;let I=A.currentTarget;if(!I||!I.dataset)return;let f=I.dataset.path;if(!f||f===".")return;if($1.current===f)return;let u=e1(A);if(u?.closest?.("button, a, input, .workspace-caret"))return;if(!__(u))return;A.preventDefault(),k0.current={path:f,dragging:!1,startX:A.clientX,startY:A.clientY};let r=(U0)=>{let L0=k0.current;if(!L0?.path)return;let $0=Math.abs(U0.clientX-L0.startX),R0=Math.abs(U0.clientY-L0.startY),I1=$0>4||R0>4;if(!L0.dragging&&I1)L0.dragging=!0,G0.current=!0,n(!0),s("move"),y1(L0.path),N_(U0.clientX,U0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(L0.dragging){U0.preventDefault(),N_(U0.clientX,U0.clientY);let E_=document.elementFromPoint(U0.clientX,U0.clientY),Y_=p1(E_)||J1();if(q1.current!==Y_)X1(Y_);G_(Y_)}},q0=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",q0);let U0=k0.current;if(U0?.dragging&&U0.path){let L0=q1.current||J1(),$0=g1.current;if(typeof $0==="function")$0(U0.path,L0)}k0.current={path:null,dragging:!1,startX:0,startY:0},j1.current=0,n(!1),s(null),X1(null),L1(),h1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{G0.current=!1},0)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",q0)},[p1,J1,y1,N_,h1,X1,G_,L1]),A_=y(async(A)=>{let I=Array.from(A?.target?.files||[]);if(I.length===0)return;let f=p.current||".";if(await n1(I,f),p.current=".",A?.target)A.target.value=""},[n1]);return z`
        <aside
            class=${`workspace-sidebar${v?" workspace-drop-active":""}`}
            data-workspace-scale=${y0}
            ref=${w0}
            onDragEnter=${l4}
            onDragOver=${a_}
            onDragLeave=${p_}
            onDrop=${d4}
        >
            <input type="file" multiple style="display:none" ref=${Q0} onChange=${A_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${e}
                            class=${`workspace-menu-button${H0?" active":""}`}
                            onClick=${(A)=>{A.stopPropagation(),P0((I)=>!I)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${H0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${H0&&z`
                            <div class="workspace-menu-dropdown" ref=${C} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${U4} disabled=${X0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${i4} disabled=${X0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${X_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${w?" active":""}`} role="menuitem" onClick=${Z_}>
                                    ${w?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&z`<div class="workspace-menu-separator"></div>`}
                                ${U&&!Z1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${t_} disabled=${!D1}>Open in editor</button>
                                `}
                                ${t1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C4}>Rename selected</button>
                                `}
                                ${l1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${r4}>Download selected file</button>
                                `}
                                ${F1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${e_}>Download selected folder (zip)</button>
                                `}
                                ${H_&&z`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${S4}>Delete selected file</button>
                                `}

                                ${(Y||q||Q)&&z`<div class="workspace-menu-separator"></div>`}
                                ${Y&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${D_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${q&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${O5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Q&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L4}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${x_} title="New file" disabled=${X0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${w1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${y_}>
                ${X0&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${g&&z`<div class="workspace-loading">Loading…</div>`}
                ${B&&z`<div class="workspace-error">${B}</div>`}
                ${G&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${_1}
                        tabIndex="0"
                        onClick=${g_}
                        onDblClick=${$_}
                        onKeyDown=${K1}
                        onTouchStart=${P_}
                        onTouchEnd=${O_}
                        onTouchMove=${y4}
                        onTouchCancel=${O_}
                    >
                        ${F_.map(({node:A,depth:I})=>{let f=A.type==="dir",u=A.path===U,r=A.path===F,q0=f&&X.has(A.path),U0=K0&&A.path===K0,L0=Array.isArray(A.children)&&A.children.length>0?A.children.length:Number(A.child_count)||0;return z`
                                <div
                                    key=${A.path}
                                    class=${`workspace-row${u?" selected":""}${U0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+I*x4.indentPx}px`}}
                                    data-path=${A.path}
                                    data-type=${A.type}
                                    onMouseDown=${w4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${f?q0?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${f?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${f?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${r?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${o}
                                                value=${J}
                                                onInput=${($0)=>W($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),c1();else if($0.key==="Escape")$0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${A.name}</span></span>`}
                                    ${f&&!q0&&L0>0&&z`
                                        <span class="workspace-count">${L0}</span>
                                    `}
                                    ${f&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${A.path}
                                            title="Upload files to this folder"
                                            onClick=${J5}
                                            disabled=${X0}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${c4} onTouchStart=${C_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${x_} title="New file" disabled=${X0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!Z1&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>D1&&o0.current?.(U,D)}
                                    title=${V4}
                                    disabled=${!D1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${P4}
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
                            ${Z1?z`
                                    <button class="workspace-download" onClick=${H1}
                                        title="Upload files to this folder" disabled=${X0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${V8(U,w)}
                                        title="Download folder as zip" onClick=${(A)=>A.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${m_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${x&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${D?.error&&z`<div class="workspace-error">${D.error}</div>`}
                    ${Z1&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${J0?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${J0?.error&&z`<div class="workspace-error">${J0.error}</div>`}
                        ${J0?.payload&&J0.payload.segments?.length>0&&z`
                            <${PX} payload=${J0.payload} />
                        `}
                        ${J0?.payload&&(!J0.payload.segments||J0.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!Z1&&z`
                        <div class="workspace-preview-body" ref=${D0}></div>
                    `}
                    ${S&&z`
                        <div class="workspace-download-card">
                            <${CX} mediaId=${S} />
                        </div>
                    `}
                </div>
            `}
            ${_0&&z`
                <div class="workspace-drag-ghost" ref=${I_}>${_0.label}</div>
            `}
        </aside>
    `}var SX=new Set(["kanban-editor","mindmap-editor"]);function wX(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function xY(_,$,j){let Z=wX(_,$,j);return Z!=null&&SX.has(Z)}var RX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,uX=/\.(csv|tsv)$/i,fX=/\.pdf$/i,vX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,TY=/\.drawio(\.xml|\.svg|\.png)?$/i;function yY({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Y,onCloseAll:q,onTogglePin:Q,onTogglePreview:K,onEditSource:G,previewTabs:N,paneOverrides:X,onToggleDock:V,dockVisible:U,onToggleZen:L,zenMode:F,onPopOutTab:O}){let[J,W]=m(null),D=T(null);b(()=>{if(!J)return;let B=(k)=>{if(k.type==="keydown"&&k.key!=="Escape")return;W(null)};return document.addEventListener("click",B),document.addEventListener("keydown",B),()=>{document.removeEventListener("click",B),document.removeEventListener("keydown",B)}},[J]),b(()=>{let B=(k)=>{if(k.ctrlKey&&k.key==="Tab"){if(k.preventDefault(),!_.length)return;let w=_.findIndex((l)=>l.id===$);if(k.shiftKey){let l=_[(w-1+_.length)%_.length];j?.(l.id)}else{let l=_[(w+1)%_.length];j?.(l.id)}return}if((k.ctrlKey||k.metaKey)&&k.key==="w"){let w=document.querySelector(".editor-pane");if(w&&w.contains(document.activeElement)){if(k.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[_,$,j,Z]);let E=y((B,k)=>{if(B.button===1){B.preventDefault(),Z?.(k);return}if(B.button===0)j?.(k)},[j,Z]),S=y((B,k)=>{B.preventDefault(),W({id:k,x:B.clientX,y:B.clientY})},[]),P=y((B)=>{B.preventDefault(),B.stopPropagation()},[]),g=y((B,k)=>{B.preventDefault(),B.stopPropagation(),Z?.(k)},[Z]);b(()=>{if(!$||!D.current)return;let B=D.current.querySelector(".tab-item.active");if(B)B.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let h=y((B)=>{if(!(X instanceof Map))return null;return X.get(B)||null},[X]),x=b0(()=>_.find((B)=>B.id===J?.id)||null,[J?.id,_]),M=b0(()=>{let B=J?.id;if(!B)return!1;return xY(B,h(B),(k)=>d0.resolve(k))},[J?.id,h]);if(!_.length)return null;return z`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((B)=>z`
                <div
                    key=${B.id}
                    class=${`tab-item${B.id===$?" active":""}${B.dirty?" dirty":""}${B.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${B.id===$}
                    title=${B.path}
                    onMouseDown=${(k)=>E(k,B.id)}
                    onContextMenu=${(k)=>S(k,B.id)}
                >
                    ${B.pinned&&z`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${B.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${P}
                        onClick=${(k)=>g(k,B.id)}
                        title=${B.dirty?"Unsaved changes":"Close"}
                        aria-label=${B.dirty?"Unsaved changes":`Close ${B.label}`}
                    >
                        ${B.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
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
            ${L&&z`
                <button
                    class=${`tab-strip-zen-toggle${F?" active":""}`}
                    onClick=${L}
                    title=${`${F?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${F?"Exit":"Enter"} zen mode`}
                    aria-pressed=${F?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${F?z`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:z`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${J&&z`
            <div class="tab-context-menu" style=${{left:J.x+"px",top:J.y+"px"}}>
                <button onClick=${()=>{Z?.(J.id),W(null)}}>Close</button>
                <button onClick=${()=>{Y?.(J.id),W(null)}}>Close Others</button>
                <button onClick=${()=>{q?.(),W(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Q?.(J.id),W(null)}}>
                    ${x?.pinned?"Unpin":"Pin"}
                </button>
                ${M&&G&&z`
                    <button onClick=${()=>{G(J.id),W(null)}}>Edit Source</button>
                `}
                ${O&&z`
                    <button onClick=${()=>{let B=_.find((k)=>k.id===J.id);O(J.id,B?.label),W(null)}}>Open in Window</button>
                `}
                ${K&&/\.(md|mdx|markdown)$/i.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{K(J.id),W(null)}}>
                        ${N?.has(J.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${RX.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/workspace/raw?path="+encodeURIComponent(J.id),k=J.id.split("/").pop()||"document",w="/office-viewer/?url="+encodeURIComponent(B)+"&name="+encodeURIComponent(k);window.open(w,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${uX.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/csv-viewer/?path="+encodeURIComponent(J.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${fX.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/workspace/raw?path="+encodeURIComponent(J.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${vX.test(J.id)&&!TY.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/image-viewer/?path="+encodeURIComponent(J.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${TY.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/drawio/edit?path="+encodeURIComponent(J.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function bX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Z,zenMode:Y}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Z?" chat-only":""}${Y?" zen-mode":""}`}function PY(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:q,isRenameBranchFormOpen:Q,closeRenameCurrentBranchForm:K,handleRenameCurrentBranch:G,renameBranchNameDraft:N,renameBranchNameInputRef:X,setRenameBranchNameDraft:V,renameBranchDraftState:U,isRenamingBranch:L,addFileRef:F,openEditor:O,openTerminalTab:J,openVncTab:W,hasDockPanes:D,toggleDock:E,dockVisible:S,handleSplitterMouseDown:P,handleSplitterTouchStart:g,showEditorPaneContainer:h,tabStripTabs:x,tabStripActiveId:M,handleTabActivate:B,handleTabClose:k,handleTabCloseOthers:w,handleTabCloseAll:l,handleTabTogglePin:v,handleTabTogglePreview:n,handleTabEditSource:d,previewTabs:s,tabPaneOverrides:_0,toggleZenMode:t,handlePopOutPane:K0,isWebAppMode:N0,editorContainerRef:X0,editorInstanceRef:T0,handleDockSplitterMouseDown:J0,handleDockSplitterTouchStart:W0,TERMINAL_TAB_PATH:C0,dockContainerRef:F0,handleEditorSplitterMouseDown:y0,handleEditorSplitterTouchStart:v0,searchQuery:H0,isIOSDevice:P0,currentBranchRecord:Y0,currentChatJid:E0,currentChatBranches:h0,handleBranchPickerChange:n0,formatBranchPickerLabel:U1,openRenameCurrentBranchForm:a0,handlePruneCurrentBranch:g0,currentHashtag:m0,handleBackToTimeline:o0,activeSearchScopeLabel:s0,posts:V0,isMainTimelineView:w0,hasMore:_1,loadMore:o,timelineRef:Q0,handleHashtagClick:p,addMessageRef:i,scrollToMessage:z0,openFileFromPill:k0,handleDeletePost:M0,handleOpenFloatingWidget:G0,agents:I0,userProfile:p0,removingPostIds:O0,agentStatus:f0,isCompactionStatus:D0,agentDraft:Z0,agentPlan:C,agentThought:e,pendingRequest:B0,intentToast:A0,currentTurnId:i0,steerQueued:j1,handlePanelToggle:q1,btwSession:f1,closeBtwPanel:r1,handleBtwRetry:I_,handleBtwInject:o1,floatingWidget:S1,handleCloseFloatingWidget:g1,handleFloatingWidgetEvent:v1,extensionStatusPanels:$1,pendingExtensionPanelActions:m1,handleExtensionPanelAction:d_,searchOpen:s1,followupQueueItems:i_,handleInjectQueuedFollowup:b_,handleRemoveQueuedFollowup:J1,viewStateRef:p1,loadPosts:O1,scrollToBottom:X1,searchScope:L1,handleSearch:G_,setSearchScope:N_,enterSearchMode:y1,exitSearchMode:h1,fileRefs:V1,removeFileRef:k1,clearFileRefs:a1,setFileRefsFromCompose:c1,messageRefs:r_,removeMessageRef:x_,clearMessageRefs:o_,setMessageRefsFromCompose:z_,handleCreateSessionFromCompose:X4,handleRestoreBranch:F_,attachActiveEditorFile:T_,followupQueueCount:x4,handleBtwIntercept:T4,handleMessageResponse:Z1,handleComposeSubmitError:D1,handlePopOutChat:V4,isComposeBoxAgentActive:t1,activeChatAgents:H_,connectionStatus:l1,activeModel:F1,activeModelUsage:P1,activeThinkingLevel:Q1,supportsThinking:e1,contextUsage:__,notificationsEnabled:$_,notificationPermission:g_,handleToggleNotifications:w1,setActiveModel:C1,applyModelState:j_,setPendingRequest:y_,pendingRequestRef:W1,toggleWorkspace:J_}=_;return z`
    <div class=${bX({workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:q})} ref=${$}>
      ${Q&&z`
        <div class="rename-branch-overlay" onPointerDown=${(K1)=>{if(K1.target===K1.currentTarget)K()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(K1)=>{K1.preventDefault(),G(N)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${X}
              value=${N}
              onInput=${(K1)=>{let P_=K1.currentTarget?.value??"";V(String(P_))}}
              onKeyDown=${(K1)=>{if(K1.key==="Escape")K1.preventDefault(),K()}}
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
      ${!Y&&z`
        <${IY}
          onFileSelect=${F}
          visible=${j}
          active=${j||Z}
          onOpenEditor=${O}
          onOpenTerminalTab=${J}
          onOpenVncTab=${W}
          onToggleTerminal=${D?E:void 0}
          terminalVisible=${Boolean(D&&S)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${J_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${P} onTouchStart=${g}></div>
      `}
      ${h&&z`
        <div class="editor-pane-container">
          ${q&&z`<div class="zen-hover-zone"></div>`}
          ${Z&&z`
            <${yY}
              tabs=${x}
              activeId=${M}
              onActivate=${B}
              onClose=${k}
              onCloseOthers=${w}
              onCloseAll=${l}
              onTogglePin=${v}
              onTogglePreview=${n}
              onEditSource=${d}
              previewTabs=${s}
              paneOverrides=${_0}
              onToggleDock=${D?E:void 0}
              dockVisible=${D&&S}
              onToggleZen=${t}
              zenMode=${q}
              onPopOutTab=${N0?void 0:K0}
            />
          `}
          ${Z&&z`<div class="editor-pane-host" ref=${X0}></div>`}
          ${Z&&M&&s.has(M)&&z`
            <${p8}
              getContent=${()=>T0.current?.getContent?.()}
              path=${M}
              onClose=${()=>n(M)}
            />
          `}
          ${D&&S&&z`<div class="dock-splitter" onMouseDown=${J0} onTouchStart=${W0}></div>`}
          ${D&&z`<div class=${`dock-panel${S?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!N0&&z`
                  <button class="dock-panel-action" onClick=${()=>K0(C0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
            <div class="dock-panel-body" ref=${F0}></div>
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${y0} onTouchStart=${v0}></div>
      `}
      <div class="container">
        ${H0&&P0()&&z`<div class="search-results-spacer"></div>`}
        ${Y&&z`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${Y0?.agent_name?`@${Y0.agent_name}`:E0}
              </span>
              <span class="chat-window-header-subtitle">${Y0?.chat_jid||E0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${h0.length>1&&z`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${E0}
                    onChange=${(K1)=>n0(K1.currentTarget.value)}
                  >
                    ${h0.map((K1)=>z`
                      <option key=${K1.chat_jid} value=${K1.chat_jid}>
                        ${U1(K1,{currentChatJid:E0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${Y0?.chat_jid&&z`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${a0}
                  title=${L?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${L}
                >
                  ${L?"Renaming…":"Rename"}
                </button>
              `}
              ${Y0?.chat_jid&&Y0.chat_jid!==(Y0.root_chat_jid||Y0.chat_jid)&&z`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${g0}
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
        ${(m0||H0)&&z`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${o0}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${m0?`#${m0}`:`Search: ${H0} · ${s0}`}</span>
          </div>
        `}
        <${XY}
          posts=${V0}
          hasMore=${w0?_1:!1}
          onLoadMore=${w0?o:void 0}
          timelineRef=${Q0}
          onHashtagClick=${p}
          onMessageRef=${i}
          onScrollToMessage=${z0}
          onFileRef=${k0}
          onPostClick=${void 0}
          onDeletePost=${M0}
          onOpenWidget=${G0}
          emptyMessage=${m0?`No posts with #${m0}`:H0?`No results for "${H0}"`:void 0}
          agents=${I0}
          user=${p0}
          reverse=${w0}
          removingPostIds=${O0}
          searchQuery=${H0}
        />
        <${_3}
          status=${D0(f0)?null:f0}
          draft=${Z0}
          plan=${C}
          thought=${e}
          pendingRequest=${B0}
          intent=${A0}
          turnId=${i0}
          steerQueued=${j1}
          onPanelToggle=${q1}
          showExtensionPanels=${!1}
        />
        <${lZ}
          session=${f1}
          onClose=${r1}
          onRetry=${I_}
          onInject=${o1}
        />
        <${nZ}
          widget=${S1}
          onClose=${g1}
          onWidgetEvent=${v1}
        />
        <${_3}
          extensionPanels=${Array.from($1.values())}
          pendingPanelActions=${m1}
          onExtensionPanelAction=${d_}
          turnId=${i0}
          steerQueued=${j1}
          onPanelToggle=${q1}
          showCorePanels=${!1}
        />
        <${t$}
          items=${s1?[]:i_}
          onInjectQueuedFollowup=${b_}
          onRemoveQueuedFollowup=${J1}
          onOpenFilePill=${k0}
        />
        <${cZ}
          onPost=${()=>{let{searchQuery:K1,searchOpen:P_}=p1.current||{};if(!K1&&!P_)O1(),X1()}}
          onFocus=${X1}
          searchMode=${s1}
          searchScope=${L1}
          onSearch=${G_}
          onSearchScopeChange=${N_}
          onEnterSearch=${y1}
          onExitSearch=${h1}
          fileRefs=${V1}
          onRemoveFileRef=${k1}
          onClearFileRefs=${a1}
          onSetFileRefs=${c1}
          messageRefs=${r_}
          onRemoveMessageRef=${x_}
          onClearMessageRefs=${o_}
          onSetMessageRefs=${z_}
          onSwitchChat=${n0}
          onRenameSession=${G}
          isRenameSessionInProgress=${L}
          onCreateSession=${X4}
          onDeleteSession=${g0}
          onRestoreSession=${F_}
          activeEditorPath=${Y?null:M}
          onAttachEditorFile=${Y?void 0:T_}
          onOpenFilePill=${k0}
          followupQueueCount=${x4}
          followupQueueItems=${i_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${b_}
          onRemoveQueuedFollowup=${J1}
          onSubmitIntercept=${T4}
          onMessageResponse=${Z1}
          onSubmitError=${D1}
          onPopOutChat=${N0?void 0:V4}
          isAgentActive=${t1}
          activeChatAgents=${H_}
          currentChatJid=${E0}
          connectionStatus=${l1}
          activeModel=${F1}
          modelUsage=${P1}
          thinkingLevel=${Q1}
          supportsThinking=${e1}
          contextUsage=${__}
          notificationsEnabled=${$_}
          notificationPermission=${g_}
          onToggleNotifications=${w1}
          onModelChange=${C1}
          onModelStateChange=${j_}
          statusNotice=${D0(f0)?f0:null}
        />
        <${sZ}
          request=${B0}
          onRespond=${()=>{y_(null),W1.current=null}}
        />
      </div>
    </div>
  `}async function CY(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Z,wasAgentActiveRef:Y,viewStateRef:q,refreshTimeline:Q,clearAgentRunState:K,agentStatusRef:G,pendingRequestRef:N,thoughtBufferRef:X,draftBufferRef:V,setAgentStatus:U,setAgentDraft:L,setAgentPlan:F,setAgentThought:O,setPendingRequest:J,setActiveTurn:W,noteAgentActivity:D,clearLastActivityFlag:E}=_,S=$;try{let P=await j(S);if(Z.current!==S)return null;if(!P||P.status!=="active"||!P.data){if(Y.current&&n_(q.current))Q();return Y.current=!1,K(),G.current=null,U(null),L({text:"",totalLines:0}),F(""),O({text:"",totalLines:0}),J(null),N.current=null,P??null}Y.current=!0;let g=P.data;G.current=g;let h=u8(g);if(h)W(h);D({running:!0,clearSilence:!0}),E(),U(g);let x=F5(P.thought);if(x)O((B)=>{if(m$(B,x.text))return B;return X.current=x.text,x});let M=F5(P.draft);if(M)L((B)=>{if(m$(B,M.text))return B;return V.current=M.text,M});return P}catch(P){return console.warn("Failed to fetch agent status:",P),null}}async function SY(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Z,silentRecoveryRef:Y,silenceRefreshMs:q,viewStateRef:Q,refreshTimeline:K,refreshQueueState:G,refreshAgentStatus:N,now:X=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=Z.current||null,U=Y.current,L=X();if(U.inFlight)return null;if(U.turnId===V&&L-U.lastAttemptAt<q)return null;U.inFlight=!0,U.lastAttemptAt=L,U.turnId=V;try{if(n_(Q.current))await K();return await G(),await N()}finally{U.inFlight=!1}}function wY(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Z,lastSilenceNoticeRef:Y,agentStatusRef:q,silenceWarningMs:Q,silenceFinalizeMs:K,silenceRefreshMs:G,isCompactionStatus:N,setAgentStatus:X,reconcileSilentTurn:V,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=Z.current;if(!L)return;let F=U(),O=F-L,J=N(q.current);if(O>=K){if(!J)X({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(O>=Q&&F-Y.current>=G){if(!J){let W=Math.floor(O/1000);X({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Y.current=F,V()}}function RY(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:Z,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:Q,draftBufferRef:K,thoughtBufferRef:G,pendingRequestRef:N,lastAgentResponseRef:X,stalledPostIdRef:V,scrollToBottomRef:U,setCurrentTurnId:L,setAgentDraft:F,setAgentPlan:O,setAgentThought:J,setPendingRequest:W,setAgentStatus:D,setPosts:E,dedupePosts:S,now:P=()=>Date.now(),nowIso:g=()=>new Date().toISOString()}=_;if(!$.current)return;$.current=!1,j.current=0,Z.current=null,Y.current=null,L(null),q.current=!1,Q.current=!1;let h=(K.current||"").trim();if(K.current="",G.current="",F({text:"",totalLines:0}),O(""),J({text:"",totalLines:0}),W(null),N.current=null,X.current=null,!h){D({type:"error",title:"Response stalled - No content received"});return}let M=`${h}${`

⚠️ Response may be incomplete - the model stopped responding`}`,B=P(),k=g(),w={id:B,timestamp:k,data:{type:"agent_response",content:M,agent_id:"default",is_local_stall:!0}};V.current=B,E((l)=>l?S([...l,w]):[w]),U.current?.(),D(null)}var gX=WZ(),uY=U6,mX=W6,pX=F6,hX=A6,cX=E6,W3=H6,B3=i1(b1,"getAgentContext",null),lX=i1(b1,"getAutoresearchStatus",null),nX=i1(b1,"stopAutoresearch",{status:"ok"}),dX=i1(b1,"dismissAutoresearch",{status:"ok"}),fY=i1(b1,"getAgentModels",{current:null,models:[]}),vY=i1(b1,"getActiveChatAgents",{chats:[]}),z3=i1(b1,"getChatBranches",{chats:[]}),iX=i1(b1,"renameChatBranch",null),rX=i1(b1,"pruneChatBranch",null),oX=i1(b1,"restoreChatBranch",null),bY=i1(b1,"getAgentQueueState",{count:0}),gY=i1(b1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),mY=i1(b1,"removeAgentQueueItem",{removed:!1}),sX=i1(b1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});d0.register(S6);d0.register(U$);d0.register(V$);d0.register(L$);d0.register(W$);d0.register(B$);d0.register(F$);d0.register(H$);d0.register(O$);d0.register(E$);d0.register(k$);d0.register(Z$);w6();d0.register(f6);d0.register(v6);function aX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:Q,branchLoaderMode:K,branchLoaderSourceChatJid:G}=b0(()=>HZ(_),[_]),[N,X]=m("disconnected"),[V,U]=m(()=>Y4()),[L,F]=m(null),[O,J]=m(null),[W,D]=m(!1),[E,S]=m("current"),[P,g]=m([]),[h,x]=m([]),[M,B]=m(null),{agentStatus:k,setAgentStatus:w,agentDraft:l,setAgentDraft:v,agentPlan:n,setAgentPlan:d,agentThought:s,setAgentThought:_0,pendingRequest:t,setPendingRequest:K0,currentTurnId:N0,setCurrentTurnId:X0,steerQueuedTurnId:T0,setSteerQueuedTurnId:J0,lastAgentEventRef:W0,lastSilenceNoticeRef:C0,isAgentRunningRef:F0,draftBufferRef:y0,thoughtBufferRef:v0,pendingRequestRef:H0,stalledPostIdRef:P0,currentTurnIdRef:Y0,steerQueuedTurnIdRef:E0,thoughtExpandedRef:h0,draftExpandedRef:n0}=h7(),[U1,a0]=m({}),[g0,m0]=m(null),[o0,s0]=m(null),[V0,w0]=m(!1),[_1,o]=m(null),[Q0,p]=m([]),[i,z0]=m([]),[k0,M0]=m(null),[G0,I0]=m(()=>new Map),[p0,O0]=m(()=>new Set),[f0,D0]=m([]),[Z0,C]=m(!1),[e,B0]=m(()=>FZ()),[A0,i0]=m(null),j1=T(new Set),q1=b0(()=>Q0.find((a)=>a?.chat_jid===j)||null,[Q0,j]),f1=b0(()=>i.find((a)=>a?.chat_jid===j)||q1||null,[q1,i,j]),r1=f1?.root_chat_jid||q1?.root_chat_jid||j,I_=zZ(E),[o1,S1]=m(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),g1=f0.length,v1=T(new Set),$1=T([]),m1=T(new Set),d_=T(0),s1=T({inFlight:!1,lastAttemptAt:0,turnId:null});v1.current=new Set(f0.map((a)=>a.row_id)),$1.current=f0;let{notificationsEnabled:i_,notificationPermission:b_,toggleNotifications:J1,notify:p1}=m7(),[O1,X1]=m(()=>new Set),[L1,G_]=m(()=>V5("workspaceOpen",!0)),N_=T(null),{editorOpen:y1,tabStripTabs:h1,tabStripActiveId:V1,previewTabs:k1,tabPaneOverrides:a1,openEditor:c1,closeEditor:r_,handleTabClose:x_,handleTabActivate:o_,handleTabCloseOthers:z_,handleTabCloseAll:X4,handleTabTogglePin:F_,handleTabTogglePreview:T_,handleTabEditSource:x4,revealInExplorer:T4}=l7({onTabClosed:(a)=>N_.current?.(a)}),Z1=T(null),D1=T(null),V4=T(null),t1=T(null),H_=d0.getDockPanes().length>0,[l1,F1]=m(!1),P1=y(()=>F1((a)=>!a),[]),Q1=y(()=>{c1(Y5,{label:"Terminal"})},[c1]),e1=y(()=>{c1(G4,{label:"VNC"})},[c1]),__=b0(()=>ZZ(h1,V1),[V1,h1]),$_=b0(()=>YZ(a1,V1),[a1,V1]),g_=b0(()=>qZ(Q,__,q),[__,Q,q]),w1=b0(()=>QZ(h1,k1,V1),[k1,V1,h1]),C1=b0(()=>KZ(q,G4),[q]),j_=b0(()=>GZ(q,Y5,w1,C1),[C1,w1,q]),y_=NZ(Y,Z,y1,H_,l1),[W1,J_]=m(!1),K1=T(!1),P_=y(()=>{if(!y1||Z)return;if(K1.current=l1,l1)F1(!1);J_(!0)},[y1,Z,l1]),O_=y(()=>{if(!W1)return;if(J_(!1),K1.current)F1(!0),K1.current=!1},[W1]),y4=y(()=>{if(W1)O_();else P_()},[W1,P_,O_]);b(()=>{if(W1&&!y1)O_()},[W1,y1,O_]),b(()=>{if(!Y||!q)return;if(e0.getActiveId()===q)return;c1(q,Q?{label:Q}:void 0)},[c1,Q,Y,q]),b(()=>{let a=Z1.current;if(!a)return;if(D1.current)D1.current.dispose(),D1.current=null;let x0=V1;if(!x0)return;let c0={path:x0,mode:"edit"},E1=($_?d0.get($_):null)||d0.resolve(c0)||d0.get("editor");if(!E1){a.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let r0=E1.mount(a,c0);D1.current=r0,r0.onDirtyChange?.((x1)=>{e0.setDirty(x0,x1)}),r0.onSaveRequest?.(()=>{}),r0.onClose?.(()=>{r_()});let Q_=e0.getViewState(x0);if(Q_&&typeof r0.restoreViewState==="function")requestAnimationFrame(()=>r0.restoreViewState(Q_));if(typeof r0.onViewStateChange==="function")r0.onViewStateChange((x1)=>{e0.saveViewState(x0,x1)});return requestAnimationFrame(()=>r0.focus()),()=>{if(D1.current===r0)r0.dispose(),D1.current=null}},[V1,$_,r_]);let c4=y(async(a)=>{let x0=typeof V1==="string"?V1.trim():"",c0=D1.current;if(!x0||!c0?.setContent)return;if(typeof c0.isDirty==="function"&&c0.isDirty())return;if(!(Array.isArray(a)&&a.length>0?a.some((r0)=>{let Q_=Array.isArray(r0?.changed_paths)?r0.changed_paths.map((u1)=>typeof u1==="string"?u1.trim():"").filter(Boolean):[];if(Q_.length>0)return Q_.some((u1)=>u1==="."||u1===x0);let x1=typeof r0?.path==="string"?r0.path.trim():"";return!x1||x1==="."||x1===x0}):!0))return;try{let r0=await x5(x0,1e6,"edit"),Q_=typeof r0?.text==="string"?r0.text:"",x1=typeof r0?.mtime==="string"&&r0.mtime.trim()?r0.mtime.trim():new Date().toISOString();c0.setContent(Q_,x1)}catch(r0){console.warn("[workspace_update] Failed to refresh active pane:",r0)}},[V1]);b(()=>{let a=V4.current;if(t1.current)t1.current.dispose(),t1.current=null;if(!a||!H_||!l1)return;let x0=d0.getDockPanes()[0];if(!x0){a.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let c0=x0.mount(a,{mode:"view"});return t1.current=c0,requestAnimationFrame(()=>c0.focus?.()),()=>{if(t1.current===c0)c0.dispose(),t1.current=null}},[H_,l1]);let[C_,m_]=m({name:"You",avatar_url:null,avatar_background:null}),P4=T(null),s_=T(!1),l4=T(!1),a_=T(!1),p_=T(null),n1=T(j),n4=T(new Map),d4=T(j),J5=T(0),H1=T(0),U4=T({}),i4=T({name:null,avatar_url:null}),X_=T({currentHashtag:null,searchQuery:null,searchOpen:!1}),Z_=T(null),t_=T(null),C4=T(0),S4=T(0),r4=T(0),e_=T(null),D_=T(null),O5=T(null),L4=T(null),w4=T(0),A_=T({title:null,avatarBase:null}),A=T(null),I=T(!1),[f,u]=m(!1),r=T(0),[q0,U0]=m(!1),[L0,$0]=m(""),R0=b0(()=>v8(L0,f1?.agent_name||""),[f1?.agent_name,L0]),I1=T(null);o7(30000),b(()=>{if(!q0)return;requestAnimationFrame(()=>{if(q0)I1.current?.focus(),I1.current?.select?.()})},[q0]),b(()=>{return Q7()},[]),b(()=>{return oj(U)},[]),b(()=>{Y1("workspaceOpen",String(L1))},[L1]),b(()=>{return ej()},[]),b(()=>{if(!e){Y1(BTW_SESSION_KEY,"");return}Y1(BTW_SESSION_KEY,JSON.stringify({question:e.question||"",answer:e.answer||"",thinking:e.thinking||"",error:e.error||null,status:e.status||"success"}))},[e]),b(()=>{U4.current=U1||{}},[U1]),b(()=>{n1.current=j},[j]),b(()=>{i4.current=C_||{name:"You",avatar_url:null,avatar_background:null}},[C_]);let E_=y((a,x0,c0=null)=>{if(typeof document>"u")return;let E1=(a||"").trim()||"PiClaw";if(A_.current.title!==E1){document.title=E1;let R_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(R_&&R_.getAttribute("content")!==E1)R_.setAttribute("content",E1);A_.current.title=E1}let r0=document.getElementById("dynamic-favicon");if(!r0)return;let Q_=r0.getAttribute("data-default")||r0.getAttribute("href")||"/favicon.ico",x1=x0||Q_,u1=x0?`${x1}|${c0||""}`:x1;if(A_.current.avatarBase!==u1){let R_=x0?`${x1}${x1.includes("?")?"&":"?"}v=${c0||Date.now()}`:x1;r0.setAttribute("href",R_),A_.current.avatarBase=u1}},[]),{addFileRef:Y_,removeFileRef:r5,clearFileRefs:H,setFileRefsFromCompose:R,showIntentToast:c,openFileFromPill:j0,attachActiveEditorFile:S0,addMessageRef:B1,scrollToMessage:A1,removeMessageRef:R1,clearMessageRefs:_4,setMessageRefsFromCompose:R4,handleComposeSubmitError:o4}=Sj({setIntentToast:B,intentToastTimerRef:A,editorOpen:y1,openEditor:c1,resolvePane:(a)=>d0.resolve(a),tabStripActiveId:V1,setFileRefs:g,setMessageRefs:x,currentChatJid:j,getThread:L6,setPosts:w_});N_.current=r5;let W4=y((a={})=>{let x0=Date.now();if(W0.current=x0,a.running)F0.current=!0,C((c0)=>c0?c0:!0);if(a.clearSilence)C0.current=0},[C]),d1=y(()=>{if(L4.current)clearTimeout(L4.current),L4.current=null;w4.current=0},[]);b(()=>()=>{d1()},[d1]);let h_=y(()=>{d1(),w((a)=>{if(!a)return a;if(!(a.last_activity||a.lastActivity))return a;let{last_activity:x0,lastActivity:c0,...E1}=a;return E1})},[d1]),o8=y((a)=>{if(!a)return;d1();let x0=Date.now();w4.current=x0,w({type:a.type||"active",last_activity:!0}),L4.current=setTimeout(()=>{if(w4.current!==x0)return;w((c0)=>{if(!c0||!(c0.last_activity||c0.lastActivity))return c0;return null})},d7)},[d1]),S_=y(()=>{F0.current=!1,C(!1),W0.current=null,C0.current=0,y0.current="",v0.current="",H0.current=null,D_.current=null,Y0.current=null,E0.current=null,p_.current=null,s1.current={inFlight:!1,lastAttemptAt:0,turnId:null},d1(),X0(null),J0(null),h0.current=!1,n0.current=!1},[d1,X0,J0,C]),M1=y((a)=>{if(!t7({remainingQueueCount:a,currentTurnId:Y0.current,isAgentTurnActive:Z0}))return;E0.current=null,J0(null)},[Z0,J0]),D5=y(()=>RZ({agentStatus:k,agentDraft:l,agentPlan:n,agentThought:s,pendingRequest:t,currentTurnId:N0,steerQueuedTurnId:T0,isAgentTurnActive:Z0,followupQueueItems:f0,activeModel:g0,activeThinkingLevel:o0,supportsThinking:V0,activeModelUsage:_1,contextUsage:k0,isAgentRunning:F0.current,wasAgentActive:a_.current,draftBuffer:y0.current,thoughtBuffer:v0.current,lastAgentEvent:W0.current,lastSilenceNotice:C0.current,lastAgentResponse:D_.current,currentTurnIdRef:Y0.current,steerQueuedTurnIdRef:E0.current,thoughtExpanded:h0.current,draftExpanded:n0.current,agentStatusRef:p_.current,silentRecovery:s1.current}),[g0,_1,o0,l,n,k,s,k0,N0,f0,Z0,t,T0,V0]),s8=y((a)=>{uZ({snapshot:a,clearLastActivityTimer:d1,refs:{isAgentRunningRef:F0,wasAgentActiveRef:a_,lastAgentEventRef:W0,lastSilenceNoticeRef:C0,draftBufferRef:y0,thoughtBufferRef:v0,pendingRequestRef:H0,lastAgentResponseRef:D_,currentTurnIdRef:Y0,steerQueuedTurnIdRef:E0,agentStatusRef:p_,silentRecoveryRef:s1,thoughtExpandedRef:h0,draftExpandedRef:n0},setters:{setIsAgentTurnActive:C,setAgentStatus:w,setAgentDraft:v,setAgentPlan:d,setAgentThought:_0,setPendingRequest:K0,setCurrentTurnId:X0,setSteerQueuedTurnId:J0,setFollowupQueueItems:D0,setActiveModel:m0,setActiveThinkingLevel:s0,setSupportsThinking:w0,setActiveModelUsage:o,setContextUsage:M0}})},[d1,X0,D0,C,J0]),A5=y((a)=>{if(!a)return;if(Y0.current===a)return;Y0.current=a,s1.current={inFlight:!1,lastAttemptAt:0,turnId:a},X0(a),E0.current=null,J0(null),y0.current="",v0.current="",v({text:"",totalLines:0}),d(""),_0({text:"",totalLines:0}),K0(null),H0.current=null,D_.current=null,h0.current=!1,n0.current=!1},[X0,J0]),a8=y((a)=>{if(typeof document<"u"){let R_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&R_)return}let x0=D_.current;if(!x0||!x0.post)return;if(a&&x0.turnId&&x0.turnId!==a)return;let c0=x0.post;if(c0.id&&e_.current===c0.id)return;let E1=String(c0?.data?.content||"").trim();if(!E1)return;e_.current=c0.id||e_.current,D_.current=null;let r0=E1.replace(/\s+/g," ").slice(0,200),Q_=U4.current||{},u1=(c0?.data?.agent_id?Q_[c0.data.agent_id]:null)?.name||"Pi";p1(u1,r0)},[p1]),u4=y(async(a,x0)=>{await a7({panelKey:a,expanded:x0,currentTurnIdRef:Y0,thoughtExpandedRef:h0,draftExpandedRef:n0,setAgentThoughtVisibility:cX,getAgentThought:hX,thoughtBufferRef:v0,draftBufferRef:y0,setAgentThought:_0,setAgentDraft:v})},[]),q_=T(null),B4=y(()=>{let a=Z_.current;if(!a)return;if(!(Math.abs(a.scrollTop)>150))a.scrollTop=0},[]);q_.current=B4;let F3=y((a)=>{let x0=Z_.current;if(!x0||typeof a!=="function"){a?.();return}let{currentHashtag:c0,searchQuery:E1,searchOpen:r0}=X_.current||{},Q_=!((E1||r0)&&!c0),x1=Q_?x0.scrollHeight-x0.scrollTop:x0.scrollTop;a(),requestAnimationFrame(()=>{let u1=Z_.current;if(!u1)return;if(Q_){let R_=Math.max(u1.scrollHeight-x1,0);u1.scrollTop=R_}else{let R_=Math.max(u1.scrollHeight-u1.clientHeight,0),Cq=Math.min(x1,R_);u1.scrollTop=Cq}})},[]),s4=y((a)=>{let x0=Z_.current;if(!x0||typeof a!=="function"){a?.();return}let c0=x0.scrollTop;a(),requestAnimationFrame(()=>{let E1=Z_.current;if(!E1)return;let r0=Math.max(E1.scrollHeight-E1.clientHeight,0);E1.scrollTop=Math.min(c0,r0)})},[]),H3=y((a)=>K9(a,v1.current),[]),{posts:t8,setPosts:w_,hasMore:pY,setHasMore:J3,hasMoreRef:O3,loadPosts:$4,refreshTimeline:z4,loadMore:hY,loadMoreRef:D3}=p7({preserveTimelineScroll:F3,preserveTimelineScrollTop:s4,chatJid:j}),o5=b0(()=>H3(t8),[t8,f0,H3]),cY=y(()=>{let a=P0.current;if(!a)return;w_((x0)=>x0?x0.filter((c0)=>c0.id!==a):x0),P0.current=null},[w_]),{handleSplitterMouseDown:lY,handleSplitterTouchStart:nY,handleEditorSplitterMouseDown:dY,handleEditorSplitterTouchStart:iY,handleDockSplitterMouseDown:rY,handleDockSplitterTouchStart:oY}=c7({appShellRef:t_,sidebarWidthRef:C4,editorWidthRef:S4,dockHeightRef:r4}),sY=y(()=>{RY({isAgentRunningRef:F0,lastSilenceNoticeRef:C0,lastAgentEventRef:W0,currentTurnIdRef:Y0,thoughtExpandedRef:h0,draftExpandedRef:n0,draftBufferRef:y0,thoughtBufferRef:v0,pendingRequestRef:H0,lastAgentResponseRef:D_,stalledPostIdRef:P0,scrollToBottomRef:q_,setCurrentTurnId:X0,setAgentDraft:v,setAgentPlan:d,setAgentThought:_0,setPendingRequest:K0,setAgentStatus:w,setPosts:w_,dedupePosts:c5})},[X0]);b(()=>{X_.current={currentHashtag:L,searchQuery:O,searchOpen:W}},[L,O,W]);let V_=y(()=>{P9({currentChatJid:j,queueRefreshGenRef:d_,activeChatJidRef:n1,dismissedQueueRowIdsRef:m1,getAgentQueueState:bY,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:M1})},[M1,j]),f4=y(async()=>{await C9({currentChatJid:j,activeChatJidRef:n1,getAgentContext:B3,setContextUsage:M0})},[j]),E5=y(async()=>{await S9({currentChatJid:j,activeChatJidRef:n1,getAutoresearchStatus:lX,setExtensionStatusPanels:I0,setPendingExtensionPanelActions:O0})},[j]),a4=y(async()=>{return await CY({currentChatJid:j,getAgentStatus:W3,activeChatJidRef:n1,wasAgentActiveRef:a_,viewStateRef:X_,refreshTimeline:z4,clearAgentRunState:S_,agentStatusRef:p_,pendingRequestRef:H0,thoughtBufferRef:v0,draftBufferRef:y0,setAgentStatus:w,setAgentDraft:v,setAgentPlan:d,setAgentThought:_0,setPendingRequest:K0,setActiveTurn:A5,noteAgentActivity:W4,clearLastActivityFlag:h_})},[S_,h_,j,W4,z4,A5]),A3=y(async()=>{return await SY({isAgentRunningRef:F0,pendingRequestRef:H0,currentTurnIdRef:Y0,silentRecoveryRef:s1,silenceRefreshMs:x$,viewStateRef:X_,refreshTimeline:z4,refreshQueueState:V_,refreshAgentStatus:a4})},[a4,V_,z4]);b(()=>{let a=Math.min(1000,Math.max(100,Math.floor(I$/2))),x0=setInterval(()=>{wY({isAgentRunningRef:F0,pendingRequestRef:H0,lastAgentEventRef:W0,lastSilenceNoticeRef:C0,agentStatusRef:p_,silenceWarningMs:I$,silenceFinalizeMs:n7,silenceRefreshMs:x$,isCompactionStatus:E4,setAgentStatus:w,reconcileSilentTurn:A3})},a);return()=>clearInterval(x0)},[A3]);let aY=y((a)=>{return dj({serverVersion:a,currentAppAssetVersion:gX,staleUiVersionRef:P4,staleUiReloadScheduledRef:s_,tabStoreHasUnsaved:()=>e0.hasUnsaved(),isAgentRunningRef:F0,pendingRequestRef:H0,showIntentToast:c})},[F0,H0,c]),tY=y((a)=>{ij({status:a,setConnectionStatus:X,setAgentStatus:w,setAgentDraft:v,setAgentPlan:d,setAgentThought:_0,setPendingRequest:K0,pendingRequestRef:H0,clearAgentRunState:S_,hasConnectedOnceRef:l4,viewStateRef:X_,refreshTimeline:z4,refreshAgentStatus:a4,refreshQueueState:V_,refreshContextUsage:f4})},[S_,z4,a4,V_,f4]),eY=y(async(a)=>{await xj({hashtag:a,setCurrentHashtag:F,setPosts:w_,loadPosts:$4})},[$4]),_q=y(async()=>{await Tj({setCurrentHashtag:F,setSearchQuery:J,setPosts:w_,loadPosts:$4})},[$4]),$q=y(async(a,x0=E)=>{await yj({query:a,scope:x0,currentChatJid:j,currentRootChatJid:r1,searchPosts:uY,setSearchScope:S,setSearchQuery:J,setCurrentHashtag:F,setPosts:w_,setHasMore:J3})},[j,r1,E]),jq=y(()=>{D(!0),J(null),F(null),S("current"),w_([])},[]),Zq=y(()=>{D(!1),J(null),$4()},[$4]),eX=y(()=>{},[]),Yq=!L&&!O&&!W,qq=y(async(a)=>{await Pj({post:a,posts:o5,currentChatJid:j,deletePost:mX,preserveTimelineScrollTop:s4,setPosts:w_,setRemovingPostIds:X1,hasMoreRef:O3,loadMoreRef:D3})},[j,o5,s4]),{updateAgentProfile:Qq,updateUserProfile:Kq,applyModelState:E3,refreshModelState:_V,refreshActiveChatAgents:s5,refreshCurrentChatBranches:a5,refreshModelAndQueueState:k3}=v9({getAgents:pX,setAgents:a0,setUserProfile:m_,applyBranding:E_,readStoredNumber:v5,sidebarWidthRef:C4,appShellRef:t_,currentChatJid:j,currentRootChatJid:r1,getAgentModels:fY,getActiveChatAgents:vY,getChatBranches:z3,activeChatJidRef:n1,setActiveChatAgents:p,setCurrentChatBranches:z0,setActiveModel:m0,setActiveThinkingLevel:s0,setSupportsThinking:w0,setActiveModelUsage:o,agentsRef:U4,refreshQueueState:V_,refreshContextUsage:f4,refreshAutoresearchStatus:E5}),M3=Z0||k!==null,Gq=y((a)=>{Oj({queuedItem:a,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:m1,currentChatJid:j,refreshQueueState:V_,setFollowupQueueItems:D0,showIntentToast:c,steerAgentQueueItem:gY,removeAgentQueueItem:mY})},[j,V_,D0,c]),Nq=y((a)=>{Dj({queuedItem:a,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:m1,currentChatJid:j,refreshQueueState:V_,setFollowupQueueItems:D0,showIntentToast:c,clearQueuedSteerStateIfStale:M1,steerAgentQueueItem:gY,removeAgentQueueItem:mY})},[M1,j,V_,D0,c]),I3=y((a)=>{J9({response:a,refreshActiveChatAgents:s5,refreshCurrentChatBranches:a5,refreshContextUsage:f4,refreshAutoresearchStatus:E5,refreshQueueState:V_})},[s5,E5,a5,f4,V_]),{handleExtensionPanelAction:Xq,closeBtwPanel:Vq,handleBtwIntercept:Uq,handleBtwRetry:Lq,handleBtwInject:Wq,handleOpenFloatingWidget:Bq,handleCloseFloatingWidget:zq,handleFloatingWidgetEvent:Fq}=Mj({currentChatJid:j,currentRootChatJid:r1,isComposeBoxAgentActive:M3,showIntentToast:c,setPendingExtensionPanelActions:O0,refreshAutoresearchStatus:E5,stopAutoresearch:nX,dismissAutoresearch:dX,streamSidePrompt:sX,btwAbortRef:O5,btwSession:e,setBtwSession:B0,sendAgentMessage:j5,handleMessageResponse:I3,dismissedLiveWidgetKeysRef:j1,setFloatingWidget:i0,getAgentStatus:W3,getAgentContext:B3,getAgentQueueState:bY,getAgentModels:fY,getActiveChatAgents:vY,getChatBranches:z3,getTimeline:v4,rawPosts:t8,activeChatAgents:Q0,currentChatBranches:i,contextUsage:k0,followupQueueItemsRef:$1,activeModel:g0,activeThinkingLevel:o0,supportsThinking:V0,isAgentTurnActive:Z0}),{refreshCurrentView:Hq,applyLiveGeneratedWidgetUpdate:Jq}=wj({currentChatJid:j,currentRootChatJid:r1,currentHashtag:L,searchQuery:O,searchScope:E,loadPosts:$4,searchPosts:uY,setPosts:w_,setHasMore:J3,scrollToBottom:B4,setExtensionStatusPanels:I0,setPendingExtensionPanelActions:O0,paneStateOwnerChatJidRef:d4,chatPaneStateByChatRef:n4,snapshotCurrentChatPaneState:D5,restoreChatPaneState:s8,dismissedQueueRowIdsRef:m1,refreshQueueState:V_,refreshAgentStatus:a4,refreshContextUsage:f4,viewStateRef:X_,refreshTimeline:z4,refreshModelAndQueueState:k3,setFloatingWidget:i0,dismissedLiveWidgetKeysRef:j1});aj({currentChatJid:j,posts:o5,scrollToMessage:A1,handleConnectionStatusChange:tY,loadPosts:$4,refreshCurrentView:Hq,updateAgentProfile:Qq,updateUserProfile:Kq,currentTurnIdRef:Y0,activeChatJidRef:n1,pendingRequestRef:H0,draftBufferRef:y0,thoughtBufferRef:v0,steerQueuedTurnIdRef:E0,thoughtExpandedRef:h0,draftExpandedRef:n0,draftThrottleRef:J5,thoughtThrottleRef:H1,viewStateRef:X_,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:m1,scrollToBottomRef:q_,hasMoreRef:O3,loadMoreRef:D3,lastAgentResponseRef:D_,wasAgentActiveRef:a_,setActiveTurn:A5,applyLiveGeneratedWidgetUpdate:Jq,setFloatingWidget:i0,clearLastActivityFlag:h_,handleUiVersionDrift:aY,setAgentStatus:w,setAgentDraft:v,setAgentPlan:d,setAgentThought:_0,setPendingRequest:K0,clearAgentRunState:S_,getAgentStatus:W3,noteAgentActivity:W4,showLastActivity:o8,refreshTimeline:z4,refreshModelAndQueueState:k3,refreshActiveChatAgents:s5,refreshCurrentChatBranches:a5,notifyForFinalResponse:a8,setContextUsage:M0,refreshContextUsage:f4,refreshQueueState:V_,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:M1,setSteerQueuedTurnId:J0,applyModelState:E3,getAgentContext:B3,setExtensionStatusPanels:I0,setPendingExtensionPanelActions:O0,refreshActiveEditorFromWorkspace:c4,showIntentToast:c,removeStalledPost:cY,setPosts:w_,preserveTimelineScrollTop:s4,finalizeStalledResponse:sY,connectionStatus:N,agentStatus:k,refreshAgentStatus:a4,refreshAutoresearchStatus:E5});let{toggleWorkspace:Oq,handleBranchPickerChange:Dq,openRenameCurrentBranchForm:Aq,closeRenameCurrentBranchForm:Eq,handleRenameCurrentBranch:kq,handlePruneCurrentBranch:Mq,handleRestoreBranch:Iq,handleCreateSessionFromCompose:xq,handlePopOutPane:Tq,handlePopOutChat:yq}=SZ({setWorkspaceOpen:G_,currentChatJid:j,chatOnlyMode:Z,navigate:$,currentBranchRecord:f1,renameBranchInFlightRef:I,renameBranchLockUntilRef:r,getFormLock:BZ,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:U0,setIsRenamingBranch:u,renameChatBranch:iX,refreshActiveChatAgents:s5,refreshCurrentChatBranches:a5,showIntentToast:c,currentChatBranches:i,activeChatAgents:Q0,pruneChatBranch:rX,restoreChatBranch:oX,branchLoaderMode:K,branchLoaderSourceChatJid:G,forkChatBranch:z6,setBranchLoaderState:S1,currentRootChatJid:r1,isWebAppMode:V,getActiveChatAgents:B6,getChatBranches:z3,setActiveChatAgents:p,setCurrentChatBranches:z0,openEditor:c1,tabStripActiveId:V1,editorInstanceRef:D1,dockInstanceRef:t1,terminalTabPath:Y5,dockVisible:l1,resolveTab:(a)=>e0.get(a),closeTab:x_,setDockVisible:F1,editorOpen:y1,shellElement:t_.current,editorWidthRef:S4,dockHeightRef:r4,sidebarWidthRef:C4,readStoredNumber:v5});b(()=>{if(!H_||Z)return;return $Z(P1)},[P1,H_,Z]),b(()=>{if(Z)return;return jZ({toggleZenMode:y4,exitZenMode:O_,zenMode:W1,isZenModeActive:()=>W1})},[y4,O_,W1,Z]);let Pq=Boolean(T0&&T0===(k?.turn_id||N0)),x3=vZ({branchLoaderMode:K,panePopoutMode:Y});if(x3==="branch-loader")return bZ(o1);if(x3==="pane-popout")return gZ({appShellRef:t_,editorOpen:y1,hidePanePopoutControls:j_,panePopoutHasMenuActions:w1,panePopoutTitle:g_,tabStripTabs:h1,tabStripActiveId:V1,handleTabActivate:o_,previewTabs:k1,handleTabTogglePreview:T_,editorContainerRef:Z1,getPaneContent:()=>D1.current?.getContent?.(),panePopoutPath:q});return PY({appShellRef:t_,workspaceOpen:L1,editorOpen:y1,chatOnlyMode:Z,zenMode:W1,isRenameBranchFormOpen:q0,closeRenameCurrentBranchForm:Eq,handleRenameCurrentBranch:kq,renameBranchNameDraft:L0,renameBranchNameInputRef:I1,setRenameBranchNameDraft:$0,renameBranchDraftState:R0,isRenamingBranch:f,addFileRef:Y_,openEditor:c1,openTerminalTab:Q1,openVncTab:e1,hasDockPanes:H_,toggleDock:P1,dockVisible:l1,handleSplitterMouseDown:lY,handleSplitterTouchStart:nY,showEditorPaneContainer:y_,tabStripTabs:h1,tabStripActiveId:V1,handleTabActivate:o_,handleTabClose:x_,handleTabCloseOthers:z_,handleTabCloseAll:X4,handleTabTogglePin:F_,handleTabTogglePreview:T_,handleTabEditSource:x4,previewTabs:k1,tabPaneOverrides:a1,toggleZenMode:y4,handlePopOutPane:Tq,isWebAppMode:V,editorContainerRef:Z1,editorInstanceRef:D1,handleDockSplitterMouseDown:rY,handleDockSplitterTouchStart:oY,TERMINAL_TAB_PATH:Y5,dockContainerRef:V4,handleEditorSplitterMouseDown:dY,handleEditorSplitterTouchStart:iY,searchQuery:O,isIOSDevice:r7,currentBranchRecord:f1,currentChatJid:j,currentChatBranches:i,handleBranchPickerChange:Dq,formatBranchPickerLabel:b8,openRenameCurrentBranchForm:Aq,handlePruneCurrentBranch:Mq,currentHashtag:L,handleBackToTimeline:_q,activeSearchScopeLabel:I_,posts:o5,isMainTimelineView:Yq,hasMore:pY,loadMore:hY,timelineRef:Z_,handleHashtagClick:eY,addMessageRef:B1,scrollToMessage:A1,openFileFromPill:j0,handleDeletePost:qq,handleOpenFloatingWidget:Bq,agents:U1,userProfile:C_,removingPostIds:O1,agentStatus:k,isCompactionStatus:E4,agentDraft:l,agentPlan:n,agentThought:s,pendingRequest:t,intentToast:M,currentTurnId:N0,steerQueued:Pq,handlePanelToggle:u4,btwSession:e,closeBtwPanel:Vq,handleBtwRetry:Lq,handleBtwInject:Wq,floatingWidget:A0,handleCloseFloatingWidget:zq,handleFloatingWidgetEvent:Fq,extensionStatusPanels:G0,pendingExtensionPanelActions:p0,handleExtensionPanelAction:Xq,searchOpen:W,followupQueueItems:f0,handleInjectQueuedFollowup:Gq,handleRemoveQueuedFollowup:Nq,viewStateRef:X_,loadPosts:$4,scrollToBottom:B4,searchScope:E,handleSearch:$q,setSearchScope:S,enterSearchMode:jq,exitSearchMode:Zq,fileRefs:P,removeFileRef:r5,clearFileRefs:H,setFileRefsFromCompose:R,messageRefs:h,removeMessageRef:R1,clearMessageRefs:_4,setMessageRefsFromCompose:R4,handleCreateSessionFromCompose:xq,handleRestoreBranch:Iq,attachActiveEditorFile:S0,followupQueueCount:g1,handleBtwIntercept:Uq,handleMessageResponse:I3,handleComposeSubmitError:o4,handlePopOutChat:yq,isComposeBoxAgentActive:M3,activeChatAgents:Q0,connectionStatus:N,activeModel:g0,activeModelUsage:_1,activeThinkingLevel:o0,supportsThinking:V0,contextUsage:k0,notificationsEnabled:i_,notificationPermission:b_,handleToggleNotifications:J1,setActiveModel:m0,applyModelState:E3,setPendingRequest:K0,pendingRequestRef:H0,toggleWorkspace:Oq})}function tX(){let[_,$]=m(()=>typeof window>"u"?"http://localhost/":window.location.href);b(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=y((Y,q={})=>{if(typeof window>"u")return;let{replace:Q=!1}=q||{},K=new URL(String(Y||""),window.location.href).toString();if(Q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Z=b0(()=>new URL(_).searchParams,[_]);return z`<${aX} locationParams=${Z} navigate=${j} />`}J4(z`<${tX} />`,document.getElementById("app"));

//# debugId=8201D219C7EF207964756E2164756E21
//# sourceMappingURL=app.bundle.js.map
