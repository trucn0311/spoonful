!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},o={},i=t.parcelRequire41b1;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire41b1=i),i.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"4ko55":"index.cef57d76.js","hOerA":"icons.c14567a0.svg"}'));var a,c,s={},u=function(e){return e&&e.Math==Math&&e};s=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,d={};p=!f((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,v=Function.prototype.call;d=p?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!g.call({1:2},1);h=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:g;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k,E={},S={},O=Function.prototype,A=O.call,j=p&&O.bind.bind(A,A);S=p?j:function(e){return function(){return A.apply(e,arguments)}};var T=S({}.toString),P=S("".slice);k=function(e){return P(T(e),8,-1)},w=function(e){if("Function"===k(e))return S(e)};var x=Object,$=w("".split);E=f((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==k(e)?$(e,""):x(e)}:x;var L,M;M=function(e){return null==e};var I=TypeError;L=function(e){if(M(e))throw I("Can't call method on "+e);return e},_=function(e){return E(L(e))};var R,C,F,N={},H={},q="object"==typeof document&&document.all,D=(F={all:q,IS_HTMLDDA:void 0===q&&void 0!==q}).all;H=F.IS_HTMLDDA?function(e){return"function"==typeof e||e===D}:function(e){return"function"==typeof e};var U=F.all;N=F.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:H(e)||e===U}:function(e){return"object"==typeof e?null!==e:H(e)};var G,B={},z=function(e){return H(e)?e:void 0};G=function(e,t){return arguments.length<2?z(s[e]):s[e]&&s[e][t]};var V={};V=w({}.isPrototypeOf);var Y,W,J,Q={};Q=G("navigator","userAgent")||"";var K,X,Z=s.process,ee=s.Deno,te=Z&&Z.versions||ee&&ee.version,re=te&&te.v8;re&&(X=(K=re.split("."))[0]>0&&K[0]<4?1:+(K[0]+K[1])),!X&&Q&&(!(K=Q.match(/Edge\/(\d+)/))||K[1]>=74)&&(K=Q.match(/Chrome\/(\d+)/))&&(X=+K[1]),J=X,W=!!Object.getOwnPropertySymbols&&!f((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&J&&J<41})),Y=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ne=Object;B=Y?function(e){return"symbol"==typeof e}:function(e){var t=G("Symbol");return H(t)&&V(t.prototype,ne(e))};var oe,ie,ae,ce=String;ae=function(e){try{return ce(e)}catch(e){return"Object"}};var se=TypeError;ie=function(e){if(H(e))return e;throw se(ae(e)+" is not a function")},oe=function(e,t){var r=e[t];return M(r)?void 0:ie(r)};var ue,le=TypeError;ue=function(e,t){var r,n;if("string"===t&&H(r=e.toString)&&!N(n=d(r,e)))return n;if(H(r=e.valueOf)&&!N(n=d(r,e)))return n;if("string"!==t&&H(r=e.toString)&&!N(n=d(r,e)))return n;throw le("Can't convert object to primitive value")};var fe,pe;var de,he={},ve=Object.defineProperty;de=function(e,t){try{ve(s,e,{value:t,configurable:!0,writable:!0})}catch(r){s[e]=t}return t};var ge="__core-js_shared__",ye=s["__core-js_shared__"]||de(ge,{});he=ye,(pe=function(e,t){return he[e]||(he[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var me,be={},_e=Object;me=function(e){return _e(L(e))};var we=w({}.hasOwnProperty);be=Object.hasOwn||function(e,t){return we(me(e),t)};var ke,Ee=0,Se=Math.random(),Oe=w(1..toString);ke=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Oe(++Ee+Se,36)};var Ae=pe("wks"),je=s.Symbol,Te=je&&je.for,Pe=Y?je:je&&je.withoutSetter||ke;fe=function(e){if(!be(Ae,e)||!W&&"string"!=typeof Ae[e]){var t="Symbol."+e;W&&be(je,e)?Ae[e]=je[e]:Ae[e]=Y&&Te?Te(t):Pe(t)}return Ae[e]};var xe=TypeError,$e=fe("toPrimitive");C=function(e,t){if(!N(e)||B(e))return e;var r,n=oe(e,$e);if(n){if(void 0===t&&(t="default"),r=d(n,e,t),!N(r)||B(r))return r;throw xe("Can't convert object to primitive value")}return void 0===t&&(t="number"),ue(e,t)},R=function(e){var t=C(e,"string");return B(t)?t:t+""};var Le,Me,Ie=s.document,Re=N(Ie)&&N(Ie.createElement);Me=function(e){return Re?Ie.createElement(e):{}},Le=!l&&!f((function(){return 7!=Object.defineProperty(Me("div"),"a",{get:function(){return 7}}).a}));var Ce,Fe,Ne=Object.getOwnPropertyDescriptor,He=c=l?Ne:function(e,t){if(e=_(e),t=R(t),Le)try{return Ne(e,t)}catch(e){}if(be(e,t))return b(!d(h,e,t),e[t])},qe={};Fe=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var De,Ue=String,Ge=TypeError;De=function(e){if(N(e))return e;throw Ge(Ue(e)+" is not an object")};var Be=TypeError,ze=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Ye="enumerable",We="configurable",Je="writable";Ce=l?Fe?function(e,t,r){if(De(e),t=R(t),De(r),"function"==typeof e&&"prototype"===t&&"value"in r&&Je in r&&!r.writable){var n=Ve(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:We in r?r.configurable:n.configurable,enumerable:Ye in r?r.enumerable:n.enumerable,writable:!1})}return ze(e,t,r)}:ze:function(e,t,r){if(De(e),t=R(t),De(r),Le)try{return ze(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Be("Accessors not supported");return"value"in r&&(e[t]=r.value),e},qe=l?function(e,t,r){return Ce(e,t,b(1,r))}:function(e,t,r){return e[t]=r,e};var Qe,Ke,Xe=Function.prototype,Ze=l&&Object.getOwnPropertyDescriptor,et=be(Xe,"name"),tt={EXISTS:et,PROPER:et&&"something"===function(){}.name,CONFIGURABLE:et&&(!l||l&&Ze(Xe,"name").configurable)}.CONFIGURABLE,rt={},nt=w(Function.toString);H(he.inspectSource)||(he.inspectSource=function(e){return nt(e)}),rt=he.inspectSource;var ot,it,at=s.WeakMap;it=H(at)&&/native code/.test(String(at));var ct,st=pe("keys");ct=function(e){return st[e]||(st[e]=ke(e))};var ut={};ut={};var lt,ft,pt,dt="Object already initialized",ht=s.TypeError,vt=s.WeakMap;if(it||he.state){var gt=he.state||(he.state=new vt);gt.get=gt.get,gt.has=gt.has,gt.set=gt.set,lt=function(e,t){if(gt.has(e))throw ht(dt);return t.facade=e,gt.set(e,t),t},ft=function(e){return gt.get(e)||{}},pt=function(e){return gt.has(e)}}else{var yt=ct("state");ut[yt]=!0,lt=function(e,t){if(be(e,yt))throw ht(dt);return t.facade=e,qe(e,yt,t),t},ft=function(e){return be(e,yt)?e[yt]:{}},pt=function(e){return be(e,yt)}}var mt=(ot={set:lt,get:ft,has:pt,enforce:function(e){return pt(e)?ft(e):lt(e,{})},getterFor:function(e){return function(t){var r;if(!N(t)||(r=ft(t)).type!==e)throw ht("Incompatible receiver, "+e+" required");return r}}}).enforce,bt=ot.get,_t=Object.defineProperty,wt=l&&!f((function(){return 8!==_t((function(){}),"length",{value:8}).length})),kt=String(String).split("String"),Et=Ke=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!be(e,"name")||tt&&e.name!==t)&&(l?_t(e,"name",{value:t,configurable:!0}):e.name=t),wt&&r&&be(r,"arity")&&e.length!==r.arity&&_t(e,"length",{value:r.arity});try{r&&be(r,"constructor")&&r.constructor?l&&_t(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=mt(e);return be(n,"source")||(n.source=kt.join("string"==typeof t?t:"")),e};Function.prototype.toString=Et((function(){return H(this)&&bt(this).source||rt(this)}),"toString"),Qe=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(H(r)&&Ke(r,i,n),n.global)o?e[t]=r:de(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:Ce(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var St,Ot,At,jt,Tt,Pt={},xt={},$t=Math.ceil,Lt=Math.floor;xt=Math.trunc||function(e){var t=+e;return(t>0?Lt:$t)(t)},Tt=function(e){var t=+e;return t!=t||0===t?0:xt(t)};var Mt=Math.max,It=Math.min;jt=function(e,t){var r=Tt(e);return r<0?Mt(r+t,0):It(r,t)};var Rt,Ct,Ft=Math.min;Ct=function(e){return e>0?Ft(Tt(e),9007199254740991):0},Rt=function(e){return Ct(e.length)};var Nt=function(e){return function(t,r,n){var o,i=_(t),a=Rt(i),c=jt(n,a);if(e&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((e||c in i)&&i[c]===r)return e||c||0;return!e&&-1}},Ht={includes:Nt(!0),indexOf:Nt(!1)}.indexOf,qt=w([].push);At=function(e,t){var r,n=_(e),o=0,i=[];for(r in n)!be(ut,r)&&be(n,r)&&qt(i,r);for(;t.length>o;)be(n,r=t[o++])&&(~Ht(i,r)||qt(i,r));return i};var Dt,Ut=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Ot=Object.getOwnPropertyNames||function(e){return At(e,Ut)},Dt=Object.getOwnPropertySymbols;var Gt=w([].concat);Pt=G("Reflect","ownKeys")||function(e){var t=Ot(De(e));return Dt?Gt(t,Dt(e)):t},St=function(e,t,r){for(var n=Pt(t),o=Ce,i=c,a=0;a<n.length;a++){var s=n[a];be(e,s)||r&&be(r,s)||o(e,s,i(t,s))}};var Bt={},zt=/#|\.prototype\./,Vt=function(e,t){var r=Wt[Yt(e)];return r==Qt||r!=Jt&&(H(t)?f(t):!!t)},Yt=Vt.normalize=function(e){return String(e).replace(zt,".").toLowerCase()},Wt=Vt.data={},Jt=Vt.NATIVE="N",Qt=Vt.POLYFILL="P";Bt=Vt,a=function(e,t){var r,n,o,i,a,c=e.target,u=e.global,l=e.stat;if(r=u?s:l?s[c]||de(c,{}):(s[c]||{}).prototype)for(n in t){if(i=t[n],o=e.dontCallGetSet?(a=He(r,n))&&a.value:r[n],!Bt(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;St(i,o)}(e.sham||o&&o.sham)&&qe(i,"sham",!0),Qe(r,n,i,e)}};var Kt,Xt,Zt=TypeError,er=function(e){return function(t,r,n,o){ie(r);var i=me(t),a=E(i),c=Rt(i),s=e?c-1:0,u=e?-1:1;if(n<2)for(;;){if(s in a){o=a[s],s+=u;break}if(s+=u,e?s<0:c<=s)throw Zt("Reduce of empty array with no initial value")}for(;e?s>=0:c>s;s+=u)s in a&&(o=r(o,a[s],s,i));return o}},tr=(Kt={left:er(!1),right:er(!0)}).left;Xt=function(e,t){var r=[][e];return!!r&&f((function(){r.call(null,t||function(){return 1},1)}))};var rr;rr="process"==k(s.process),a({target:"Array",proto:!0,forced:!Xt("reduce")||!rr&&J>79&&J<83},{reduce:function(e){var t=arguments.length;return tr(this,e,t,t>1?arguments[1]:void 0)}});var nr=Kt.right;a({target:"Array",proto:!0,forced:!Xt("reduceRight")||!rr&&J>79&&J<83},{reduceRight:function(e){return nr(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}});var or=Math.hypot,ir=Math.abs,ar=Math.sqrt;a({target:"Math",stat:!0,arity:2,forced:!!or&&or(1/0,NaN)!==1/0},{hypot:function(e,t){for(var r,n,o=0,i=0,a=arguments.length,c=0;i<a;)c<(r=ir(arguments[i++]))?(o=o*(n=c/r)*n+1,c=r):o+=r>0?(n=r/c)*n:r;return c===1/0?1/0:c*ar(o)}});var cr,sr;sr="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var ur,lr={},fr={};fr[fe("toStringTag")]="z",ur="[object z]"===String(fr);var pr=fe("toStringTag"),dr=Object,hr="Arguments"==k(function(){return arguments}());lr=ur?k:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=dr(e),pr))?r:hr?k(t):"Object"==(n=k(t))&&H(t.callee)?"Arguments":n};var vr,gr=Ce,yr={};vr=!f((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}));var mr=ct("IE_PROTO"),br=Object,_r=br.prototype;yr=vr?br.getPrototypeOf:function(e){var t=me(e);if(be(t,mr))return t[mr];var r=t.constructor;return H(r)&&t instanceof r?r.prototype:t instanceof br?_r:null};var wr,kr={},Er=String,Sr=TypeError;wr=function(e){if("object"==typeof e||H(e))return e;throw Sr("Can't set "+Er(e)+" as a prototype")},kr=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=w(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return De(r),wr(n),t?e(r,n):r.__proto__=n,r}}():void 0);var Or,Ar,jr,Tr=ot.enforce,Pr=ot.get,xr=s.Int8Array,$r=xr&&xr.prototype,Lr=s.Uint8ClampedArray,Mr=Lr&&Lr.prototype,Ir=xr&&yr(xr),Rr=$r&&yr($r),Cr=Object.prototype,Fr=s.TypeError,Nr=fe("toStringTag"),Hr=ke("TYPED_ARRAY_TAG"),qr="TypedArrayConstructor",Dr=sr&&!!kr&&"Opera"!==lr(s.opera),Ur=!1,Gr={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},Br={BigInt64Array:8,BigUint64Array:8},zr=function(e){var t=yr(e);if(N(t)){var r=Pr(t);return r&&be(r,qr)?r.TypedArrayConstructor:zr(t)}},Vr=function(e){if(!N(e))return!1;var t=lr(e);return be(Gr,t)||be(Br,t)};for(Or in Gr)(jr=(Ar=s[Or])&&Ar.prototype)?Tr(jr).TypedArrayConstructor=Ar:Dr=!1;for(Or in Br)(jr=(Ar=s[Or])&&Ar.prototype)&&(Tr(jr).TypedArrayConstructor=Ar);if((!Dr||!H(Ir)||Ir===Function.prototype)&&(Ir=function(){throw Fr("Incorrect invocation")},Dr))for(Or in Gr)s[Or]&&kr(s[Or],Ir);if((!Dr||!Rr||Rr===Cr)&&(Rr=Ir.prototype,Dr))for(Or in Gr)s[Or]&&kr(s[Or].prototype,Rr);if(Dr&&yr(Mr)!==Rr&&kr(Mr,Rr),l&&!be(Rr,Nr))for(Or in Ur=!0,gr(Rr,Nr,{get:function(){return N(this)?this[Hr]:void 0}}),Gr)s[Or]&&qe(s[Or],Hr,Or);cr={NATIVE_ARRAY_BUFFER_VIEWS:Dr,TYPED_ARRAY_TAG:Ur&&Hr,aTypedArray:function(e){if(Vr(e))return e;throw Fr("Target is not a typed array")},aTypedArrayConstructor:function(e){if(H(e)&&(!kr||V(Ir,e)))return e;throw Fr(ae(e)+" is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r,n){if(l){if(r)for(var o in Gr){var i=s[o];if(i&&be(i.prototype,e))try{delete i.prototype[e]}catch(r){try{i.prototype[e]=t}catch(e){}}}Rr[e]&&!r||Qe(Rr,e,r?t:Dr&&$r[e]||t,n)}},exportTypedArrayStaticMethod:function(e,t,r){var n,o;if(l){if(kr){if(r)for(n in Gr)if((o=s[n])&&be(o,e))try{delete o[e]}catch(e){}if(Ir[e]&&!r)return;try{return Qe(Ir,e,r?t:Dr&&Ir[e]||t)}catch(e){}}for(n in Gr)!(o=s[n])||o[e]&&!r||Qe(o,e,t)}},getTypedArrayConstructor:zr,isView:function(e){if(!N(e))return!1;var t=lr(e);return"DataView"===t||be(Gr,t)||be(Br,t)},isTypedArray:Vr,TypedArray:Ir,TypedArrayPrototype:Rr};var Yr,Wr,Jr=RangeError;Wr=function(e){var t=Tt(e);if(t<0)throw Jr("The argument can't be less than 0");return t};var Qr=RangeError;Yr=function(e,t){var r=Wr(e);if(r%t)throw Qr("Wrong offset");return r};var Kr=s.RangeError,Xr=s.Int8Array,Zr=Xr&&Xr.prototype,en=Zr&&Zr.set,tn=cr.aTypedArray,rn=cr.exportTypedArrayMethod,nn=!f((function(){var e=new Uint8ClampedArray(2);return d(en,e,{length:1,0:3},1),3!==e[1]})),on=nn&&cr.NATIVE_ARRAY_BUFFER_VIEWS&&f((function(){var e=new Xr(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));rn("set",(function(e){tn(this);var t=Yr(arguments.length>1?arguments[1]:void 0,1),r=me(e);if(nn)return d(en,this,r,t);var n=this.length,o=Rt(r),i=0;if(o+t>n)throw Kr("Wrong length");for(;i<o;)this[t+i]=r[i++]}),!nn||on);var an,cn={},sn=Function.prototype,un=sn.apply,ln=sn.call;cn="object"==typeof Reflect&&Reflect.apply||(p?ln.bind(un):function(){return ln.apply(un,arguments)});var fn,pn=w(w.bind);fn=function(e,t){return ie(e),void 0===t?e:p?pn(e,t):function(){return e.apply(t,arguments)}};var dn={};dn=G("document","documentElement");var hn={};hn=w([].slice);var vn,gn=TypeError;vn=function(e,t){if(e<t)throw gn("Not enough arguments");return e};var yn;yn=/(?:ipad|iphone|ipod).*applewebkit/i.test(Q);var mn,bn,_n,wn,kn=s.setImmediate,En=s.clearImmediate,Sn=s.process,On=s.Dispatch,An=s.Function,jn=s.MessageChannel,Tn=s.String,Pn=0,xn={},$n="onreadystatechange";try{mn=s.location}catch(e){}var Ln=function(e){if(be(xn,e)){var t=xn[e];delete xn[e],t()}},Mn=function(e){return function(){Ln(e)}},In=function(e){Ln(e.data)},Rn=function(e){s.postMessage(Tn(e),mn.protocol+"//"+mn.host)};kn&&En||(kn=function(e){vn(arguments.length,1);var t=H(e)?e:An(e),r=hn(arguments,1);return xn[++Pn]=function(){cn(t,void 0,r)},bn(Pn),Pn},En=function(e){delete xn[e]},rr?bn=function(e){Sn.nextTick(Mn(e))}:On&&On.now?bn=function(e){On.now(Mn(e))}:jn&&!yn?(wn=(_n=new jn).port2,_n.port1.onmessage=In,bn=fn(wn.postMessage,wn)):s.addEventListener&&H(s.postMessage)&&!s.importScripts&&mn&&"file:"!==mn.protocol&&!f(Rn)?(bn=Rn,s.addEventListener("message",In,!1)):bn=$n in Me("script")?function(e){dn.appendChild(Me("script")).onreadystatechange=function(){dn.removeChild(this),Ln(e)}}:function(e){setTimeout(Mn(e),0)});var Cn=(an={set:kn,clear:En}).clear;a({global:!0,bind:!0,enumerable:!0,forced:s.clearImmediate!==Cn},{clearImmediate:Cn});var Fn=an.set;a({global:!0,bind:!0,enumerable:!0,forced:s.setImmediate!==Fn},{setImmediate:Fn});const Nn="https://forkify-api.herokuapp.com/api/v2/recipes/",Hn=function(e){if(parseFloat(e)===parseInt(e))return e;const t=function(e,r){return r<1e-7?e:t(r,Math.floor(e%r))},r=e.toString().length-2;let n=Math.pow(10,r),o=e*n;var i=t(o,n);o/=i,n/=i;let a=0;return o>n&&(a=Math.floor(o/n),o-=a*n),e=Math.floor(o)+"/"+Math.floor(n),a&&(e=a+" "+e),e},qn=async function(e,t){try{const n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([n,(r=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${r} second`))}),1e3*r)})))]),i=await o.json();if(!o.ok)throw new Error(`${i.message} (${o.status})`);return i}catch(e){throw e}var r},Dn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},Un=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},Gn=function(e=Dn.search.page){Dn.search.page=e;const t=(e-1)*Dn.search.resultsPerPage,r=e*Dn.search.resultsPerPage;return Dn.search.results.slice(t,r)},Bn=function(){localStorage.setItem("bookmarks",JSON.stringify(Dn.bookmarks))},zn=function(e){Dn.bookmarks.push(e),e.id===Dn.recipe.id&&(Dn.recipe.bookmarked=!0),Bn()};!function(){const e=localStorage.getItem("bookmarks");e&&(Dn.bookmarks=JSON.parse(e))}();function Vn(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Yn;Yn=i("aNJCr").getBundleURL("4ko55")+i("iE7OH").resolve("hOerA");class Wn{render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;const t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));n.forEach(((e,t)=>{var r;const n=o[t];e.isEqualNode(n)||""===(null===(r=e.firstChild)||void 0===r?void 0:r.nodeValue.trim())||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${r(Yn)}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${r(Yn)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${r(Yn)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}constructor(){Vn(this,"_data",void 0)}}var Jn=new class extends Wn{addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--update-servings");if(!r)return;const{updateTo:n}=r.dataset;+n>0&&e(+n)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${r(Yn)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${r(Yn)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n\n        </div>\n\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${r(Yn)}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${r(Yn)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${r(Yn)}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${r(Yn)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?new Hn(e.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n  `}constructor(...e){super(...e),Vn(this,"_parentElement",document.querySelector(".recipe")),Vn(this,"_errorMessage","We could not find that recipe. Please try another one!"),Vn(this,"_message","")}};var Qn=new class{getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}constructor(){Vn(this,"_parentEl",document.querySelector(".search"))}};var Kn=new class extends Wn{_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n              <use href="${r(Yn)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}constructor(...e){super(...e),Vn(this,"_parentElement","")}};var Xn=new class extends Wn{_generateMarkup(){return this._data.map((e=>Kn.render(e,!1))).join("")}constructor(...e){super(...e),Vn(this,"_parentElement",document.querySelector(".results")),Vn(this,"_errorMessage","No recipes found for your query! Please try again ;)"),Vn(this,"_message","")}};var Zn=new class extends Wn{addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--inline");if(!r)return;const n=+r.dataset.goto;e(n)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${r(Yn)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:e===t&&t>1?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${r(Yn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n      `:e<t?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${r(Yn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${r(Yn)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:""}constructor(...e){super(...e),Vn(this,"_parentElement",document.querySelector(".pagination"))}};var eo=new class extends Wn{addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Kn.render(e,!1))).join("")}constructor(...e){super(...e),Vn(this,"_parentElement",document.querySelector(".bookmarks__list")),Vn(this,"_errorMessage","No bookmarks yet. Find a nice recipe and bookmark it ;)"),Vn(this,"_message","")}},to=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:O(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",d="executing",h="completed",v={};function g(){}function y(){}function m(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,i,a,c){var s=f(e[o],e,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function O(e,t,r){var n=p;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return $()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=A(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=f(e,t,r);if("normal"===s.type){if(n=r.done?h:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}function A(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function x(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:$}}function $(){return{value:t,done:!0}}return y.prototype=m,o(k,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,s,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=to}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=to:Function("r","regeneratorRuntime = r")(to)}const ro=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Jn.renderSpinner(),Xn.update(Gn()),eo.update(Dn.bookmarks),await async function(e){try{const t=await qn(`${Nn}${e}?key=da6e0a16-efc8-422e-84cf-814f1011e0b4`);Dn.recipe=Un(t),Dn.bookmarks.some((t=>t.id===e))?Dn.recipe.bookmarked=!0:Dn.recipe.bookmarked=!1,console.log(Dn.recipe)}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),Jn.render(Dn.recipe)}catch(e){Jn.renderError(),console.error(e)}},no=async function(){try{Xn.renderSpinner();const e=Qn.getQuery();if(!e)return;await async function(e){try{Dn.search.query=e;const t=await qn(`${Nn}?search=${e}&key=da6e0a16-efc8-422e-84cf-814f1011e0b4`);console.log(t),Dn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Dn.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),Xn.render(Gn()),Zn.render(Dn.search)}catch(e){console.log(e)}},oo=function(e){Xn.render(Gn(e)),Zn.render(Dn.search)},io=function(e){!function(e){Dn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Dn.recipe.servings})),Dn.recipe.servings=e}(e),Jn.update(Dn.recipe)},ao=function(){Dn.recipe.bookmarked?function(e){const t=Dn.bookmarks.findIndex((t=>t.id===e));Dn.bookmarks.splice(t,1),e===Dn.recipe.id&&(Dn.recipe.bookmarked=!1),Bn()}(Dn.recipe.id):zn(Dn.recipe),Jn.update(Dn.recipe),eo.render(Dn.bookmarks)},co=function(){eo.render(Dn.bookmarks)};eo.addHandlerRender(co),Jn.addHandlerRender(ro),Jn.addHandlerUpdateServings(io),Jn.addHandlerAddBookmark(ao),Qn.addHandlerSearch(no),Zn.addHandlerClick(oo)}();
//# sourceMappingURL=index.cef57d76.js.map
