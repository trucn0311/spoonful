function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},o={},i=t.parcelRequire41b1;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire41b1=i),i.register("kyEFX",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"3EsVB":"index.9055e6a4.js","cPzGy":"icons.c14567a0.svg"}'));var a,c,s={},u=function(e){return e&&e.Math==Math&&e};s=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,d={};p=!f((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,v=Function.prototype.call;d=p?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!g.call({1:2},1);h=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:g;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k,E={},S={},O=Function.prototype,j=O.call,L=p&&O.bind.bind(j,j),P=(S=p?L:function(e){return function(){return j.apply(e,arguments)}})({}.toString),$=S("".slice);k=function(e){return $(P(e),8,-1)},w=function(e){if("Function"===k(e))return S(e)};var x=Object,M=w("".split);E=f((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==k(e)?M(e,""):x(e)}:x;var T,I;I=function(e){return null==e};var F=TypeError;T=function(e){if(I(e))throw F("Can't call method on "+e);return e},_=function(e){return E(T(e))};var A,H,N,q={},C={},R="object"==typeof document&&document.all,D=(N={all:R,IS_HTMLDDA:void 0===R&&void 0!==R}).all;C=N.IS_HTMLDDA?function(e){return"function"==typeof e||e===D}:function(e){return"function"==typeof e};var G=N.all;q=N.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:C(e)||e===G}:function(e){return"object"==typeof e?null!==e:C(e)};var z,U={},B=function(e){return C(e)?e:void 0};z=function(e,t){return arguments.length<2?B(s[e]):s[e]&&s[e][t]};var J={};J=w({}.isPrototypeOf);var W,X,V,Y={};Y=z("navigator","userAgent")||"";var Q,K,Z=s.process,ee=s.Deno,te=Z&&Z.versions||ee&&ee.version,re=te&&te.v8;re&&(K=(Q=re.split("."))[0]>0&&Q[0]<4?1:+(Q[0]+Q[1])),!K&&Y&&(!(Q=Y.match(/Edge\/(\d+)/))||Q[1]>=74)&&(Q=Y.match(/Chrome\/(\d+)/))&&(K=+Q[1]),V=K,X=!!Object.getOwnPropertySymbols&&!f((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&V&&V<41})),W=X&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ne=Object;U=W?function(e){return"symbol"==typeof e}:function(e){var t=z("Symbol");return C(t)&&J(t.prototype,ne(e))};var oe,ie,ae,ce=String;ae=function(e){try{return ce(e)}catch(e){return"Object"}};var se=TypeError;ie=function(e){if(C(e))return e;throw se(ae(e)+" is not a function")},oe=function(e,t){var r=e[t];return I(r)?void 0:ie(r)};var ue,le=TypeError;ue=function(e,t){var r,n;if("string"===t&&C(r=e.toString)&&!q(n=d(r,e)))return n;if(C(r=e.valueOf)&&!q(n=d(r,e)))return n;if("string"!==t&&C(r=e.toString)&&!q(n=d(r,e)))return n;throw le("Can't convert object to primitive value")};var fe;var pe,de={},he=Object.defineProperty;pe=function(e,t){try{he(s,e,{value:t,configurable:!0,writable:!0})}catch(r){s[e]=t}return t};var ve=s["__core-js_shared__"]||pe("__core-js_shared__",{});de=ve,(fe=function(e,t){return de[e]||(de[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var ge,ye={},me=Object;ge=function(e){return me(T(e))};var be=w({}.hasOwnProperty);ye=Object.hasOwn||function(e,t){return be(ge(e),t)};var _e,we=0,ke=Math.random(),Ee=w(1..toString);_e=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Ee(++we+ke,36)};var Se=fe("wks"),Oe=s.Symbol,je=Oe&&Oe.for,Le=W?Oe:Oe&&Oe.withoutSetter||_e,Pe=TypeError,$e=function(e){if(!ye(Se,e)||!X&&"string"!=typeof Se[e]){var t="Symbol."+e;X&&ye(Oe,e)?Se[e]=Oe[e]:Se[e]=W&&je?je(t):Le(t)}return Se[e]}("toPrimitive");H=function(e,t){if(!q(e)||U(e))return e;var r,n=oe(e,$e);if(n){if(void 0===t&&(t="default"),r=d(n,e,t),!q(r)||U(r))return r;throw Pe("Can't convert object to primitive value")}return void 0===t&&(t="number"),ue(e,t)},A=function(e){var t=H(e,"string");return U(t)?t:t+""};var xe,Me,Te=s.document,Ie=q(Te)&&q(Te.createElement);Me=function(e){return Ie?Te.createElement(e):{}},xe=!l&&!f((function(){return 7!=Object.defineProperty(Me("div"),"a",{get:function(){return 7}}).a}));var Fe,Ae,He=Object.getOwnPropertyDescriptor,Ne=c=l?He:function(e,t){if(e=_(e),t=A(t),xe)try{return He(e,t)}catch(e){}if(ye(e,t))return b(!d(h,e,t),e[t])},qe={};Ae=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ce,Re=String,De=TypeError;Ce=function(e){if(q(e))return e;throw De(Re(e)+" is not an object")};var Ge=TypeError,ze=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor;Fe=l?Ae?function(e,t,r){if(Ce(e),t=A(t),Ce(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=Ue(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return ze(e,t,r)}:ze:function(e,t,r){if(Ce(e),t=A(t),Ce(r),xe)try{return ze(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Ge("Accessors not supported");return"value"in r&&(e[t]=r.value),e},qe=l?function(e,t,r){return Fe(e,t,b(1,r))}:function(e,t,r){return e[t]=r,e};var Be,Je,We=Function.prototype,Xe=l&&Object.getOwnPropertyDescriptor,Ve=ye(We,"name"),Ye={EXISTS:Ve,PROPER:Ve&&"something"===function(){}.name,CONFIGURABLE:Ve&&(!l||l&&Xe(We,"name").configurable)}.CONFIGURABLE,Qe={},Ke=w(Function.toString);C(de.inspectSource)||(de.inspectSource=function(e){return Ke(e)}),Qe=de.inspectSource;var Ze,et,tt=s.WeakMap;et=C(tt)&&/native code/.test(String(tt));var rt,nt=fe("keys");rt=function(e){return nt[e]||(nt[e]=_e(e))};var ot={};ot={};var it,at,ct,st=s.TypeError,ut=s.WeakMap;if(et||de.state){var lt=de.state||(de.state=new ut);lt.get=lt.get,lt.has=lt.has,lt.set=lt.set,it=function(e,t){if(lt.has(e))throw st("Object already initialized");return t.facade=e,lt.set(e,t),t},at=function(e){return lt.get(e)||{}},ct=function(e){return lt.has(e)}}else{var ft=rt("state");ot[ft]=!0,it=function(e,t){if(ye(e,ft))throw st("Object already initialized");return t.facade=e,qe(e,ft,t),t},at=function(e){return ye(e,ft)?e[ft]:{}},ct=function(e){return ye(e,ft)}}var pt=(Ze={set:it,get:at,has:ct,enforce:function(e){return ct(e)?at(e):it(e,{})},getterFor:function(e){return function(t){var r;if(!q(t)||(r=at(t)).type!==e)throw st("Incompatible receiver, "+e+" required");return r}}}).enforce,dt=Ze.get,ht=Object.defineProperty,vt=l&&!f((function(){return 8!==ht((function(){}),"length",{value:8}).length})),gt=String(String).split("String"),yt=Je=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ye(e,"name")||Ye&&e.name!==t)&&(l?ht(e,"name",{value:t,configurable:!0}):e.name=t),vt&&r&&ye(r,"arity")&&e.length!==r.arity&&ht(e,"length",{value:r.arity});try{r&&ye(r,"constructor")&&r.constructor?l&&ht(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=pt(e);return ye(n,"source")||(n.source=gt.join("string"==typeof t?t:"")),e};Function.prototype.toString=yt((function(){return C(this)&&dt(this).source||Qe(this)}),"toString"),Be=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(C(r)&&Je(r,i,n),n.global)o?e[t]=r:pe(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:Fe(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var mt,bt,_t,wt,kt,Et={},St={},Ot=Math.ceil,jt=Math.floor;St=Math.trunc||function(e){var t=+e;return(t>0?jt:Ot)(t)},kt=function(e){var t=+e;return t!=t||0===t?0:St(t)};var Lt=Math.max,Pt=Math.min;wt=function(e,t){var r=kt(e);return r<0?Lt(r+t,0):Pt(r,t)};var $t,xt,Mt=Math.min;xt=function(e){return e>0?Mt(kt(e),9007199254740991):0},$t=function(e){return xt(e.length)};var Tt=function(e){return function(t,r,n){var o,i=_(t),a=$t(i),c=wt(n,a);if(e&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((e||c in i)&&i[c]===r)return e||c||0;return!e&&-1}},It={includes:Tt(!0),indexOf:Tt(!1)}.indexOf,Ft=w([].push);_t=function(e,t){var r,n=_(e),o=0,i=[];for(r in n)!ye(ot,r)&&ye(n,r)&&Ft(i,r);for(;t.length>o;)ye(n,r=t[o++])&&(~It(i,r)||Ft(i,r));return i};var At,Ht=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");bt=Object.getOwnPropertyNames||function(e){return _t(e,Ht)},At=Object.getOwnPropertySymbols;var Nt=w([].concat);Et=z("Reflect","ownKeys")||function(e){var t=bt(Ce(e));return At?Nt(t,At(e)):t},mt=function(e,t,r){for(var n=Et(t),o=Fe,i=c,a=0;a<n.length;a++){var s=n[a];ye(e,s)||r&&ye(r,s)||o(e,s,i(t,s))}};var qt={},Ct=/#|\.prototype\./,Rt=function(e,t){var r=Gt[Dt(e)];return r==Ut||r!=zt&&(C(t)?f(t):!!t)},Dt=Rt.normalize=function(e){return String(e).replace(Ct,".").toLowerCase()},Gt=Rt.data={},zt=Rt.NATIVE="N",Ut=Rt.POLYFILL="P";qt=Rt,a=function(e,t){var r,n,o,i,a,c=e.target,u=e.global,l=e.stat;if(r=u?s:l?s[c]||pe(c,{}):(s[c]||{}).prototype)for(n in t){if(i=t[n],o=e.dontCallGetSet?(a=Ne(r,n))&&a.value:r[n],!qt(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;mt(i,o)}(e.sham||o&&o.sham)&&qe(i,"sham",!0),Be(r,n,i,e)}};var Bt,Jt={},Wt=Function.prototype,Xt=Wt.apply,Vt=Wt.call;Jt="object"==typeof Reflect&&Reflect.apply||(p?Vt.bind(Xt):function(){return Vt.apply(Xt,arguments)});var Yt,Qt=w(w.bind);Yt=function(e,t){return ie(e),void 0===t?e:p?Qt(e,t):function(){return e.apply(t,arguments)}};var Kt={};Kt=z("document","documentElement");var Zt={};Zt=w([].slice);var er,tr=TypeError;er=function(e,t){if(e<t)throw tr("Not enough arguments");return e};var rr;rr=/(?:ipad|iphone|ipod).*applewebkit/i.test(Y);var nr;nr="process"==k(s.process);var or,ir,ar,cr,sr=s.setImmediate,ur=s.clearImmediate,lr=s.process,fr=s.Dispatch,pr=s.Function,dr=s.MessageChannel,hr=s.String,vr=0,gr={};try{or=s.location}catch(e){}var yr=function(e){if(ye(gr,e)){var t=gr[e];delete gr[e],t()}},mr=function(e){return function(){yr(e)}},br=function(e){yr(e.data)},_r=function(e){s.postMessage(hr(e),or.protocol+"//"+or.host)};sr&&ur||(sr=function(e){er(arguments.length,1);var t=C(e)?e:pr(e),r=Zt(arguments,1);return gr[++vr]=function(){Jt(t,void 0,r)},ir(vr),vr},ur=function(e){delete gr[e]},nr?ir=function(e){lr.nextTick(mr(e))}:fr&&fr.now?ir=function(e){fr.now(mr(e))}:dr&&!rr?(cr=(ar=new dr).port2,ar.port1.onmessage=br,ir=Yt(cr.postMessage,cr)):s.addEventListener&&C(s.postMessage)&&!s.importScripts&&or&&"file:"!==or.protocol&&!f(_r)?(ir=_r,s.addEventListener("message",br,!1)):ir="onreadystatechange"in Me("script")?function(e){Kt.appendChild(Me("script")).onreadystatechange=function(){Kt.removeChild(this),yr(e)}}:function(e){setTimeout(mr(e),0)});var wr=(Bt={set:sr,clear:ur}).clear;a({global:!0,bind:!0,enumerable:!0,forced:s.clearImmediate!==wr},{clearImmediate:wr});var kr=Bt.set;a({global:!0,bind:!0,enumerable:!0,forced:s.setImmediate!==kr},{setImmediate:kr});const Er=function(e){if(parseFloat(e)===parseInt(e))return e;const t=function(e,r){return r<1e-7?e:t(r,Math.floor(e%r))},r=e.toString().length-2;let n=Math.pow(10,r),o=e*n;var i=t(o,n);o/=i,n/=i;let a=0;return o>n&&(a=Math.floor(o/n),o-=a*n),e=Math.floor(o)+"/"+Math.floor(n),a&&(e=a+" "+e),e},Sr=async function(e,t){try{const n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([n,(r=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${r} second`))}),1e3*r)})))]),i=await o.json();if(!o.ok)throw new Error(`${i.message} (${o.status})`);return i}catch(e){throw e}var r},Or={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},jr=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},Lr=function(e=Or.search.page){Or.search.page=e;const t=(e-1)*Or.search.resultsPerPage,r=e*Or.search.resultsPerPage;return Or.search.results.slice(t,r)},Pr=function(){localStorage.setItem("bookmarks",JSON.stringify(Or.bookmarks))},$r=function(e){Or.bookmarks.push(e),e.id===Or.recipe.id&&(Or.recipe.bookmarked=!0),Pr()};!function(){const e=localStorage.getItem("bookmarks");e&&(Or.bookmarks=JSON.parse(e))}();function xr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Mr;Mr=new URL(i("kyEFX").resolve("cPzGy"),import.meta.url).toString();class Tr{render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;const t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));n.forEach(((e,t)=>{const r=o[t];e.isEqualNode(r)||""===e.firstChild?.nodeValue.trim()||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach((e=>r.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${r(Mr)}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${r(Mr)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${r(Mr)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}constructor(){xr(this,"_data",void 0)}}var Ir=new class extends Tr{addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--update-servings");if(!r)return;const{updateTo:n}=r.dataset;+n>0&&e(+n)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${r(Mr)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${r(Mr)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n\n        </div>\n\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${r(Mr)}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${r(Mr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${r(Mr)}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${r(Mr)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?new Er(e.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n  `}constructor(...e){super(...e),xr(this,"_parentElement",document.querySelector(".recipe")),xr(this,"_errorMessage","We could not find that recipe. Please try another one!"),xr(this,"_message","")}};var Fr=new class{getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}constructor(){xr(this,"_parentEl",document.querySelector(".search"))}};var Ar=new class extends Tr{_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n              <use href="${r(Mr)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}constructor(...e){super(...e),xr(this,"_parentElement","")}};var Hr=new class extends Tr{_generateMarkup(){return this._data.map((e=>Ar.render(e,!1))).join("")}constructor(...e){super(...e),xr(this,"_parentElement",document.querySelector(".results")),xr(this,"_errorMessage","No recipes found for your query! Please try again ;)"),xr(this,"_message","")}};var Nr=new class extends Tr{addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--inline");if(!r)return;const n=+r.dataset.goto;e(n)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${r(Mr)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:e===t&&t>1?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${r(Mr)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n      `:e<t?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${r(Mr)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${r(Mr)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:""}constructor(...e){super(...e),xr(this,"_parentElement",document.querySelector(".pagination"))}};var qr=new class extends Tr{addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Ar.render(e,!1))).join("")}constructor(...e){super(...e),xr(this,"_parentElement",document.querySelector(".bookmarks__list")),xr(this,"_errorMessage","No bookmarks yet. Find a nice recipe and bookmark it ;)"),xr(this,"_message","")}},Cr=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),c=new $(n||[]);return o(a,"_invoke",{value:O(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",d="executing",h="completed",v={};function g(){}function y(){}function m(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,i,a,c){var s=f(e[o],e,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function O(e,t,r){var n=p;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=f(e,t,r);if("normal"===s.type){if(n=r.done?h:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function x(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:M}}function M(){return{value:t,done:!0}}return y.prototype=m,o(k,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,s,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=Cr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Cr:Function("r","regeneratorRuntime = r")(Cr)}const Rr=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Ir.renderSpinner(),Hr.update(Lr()),qr.update(Or.bookmarks),await async function(e){try{const t=await Sr(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=da6e0a16-efc8-422e-84cf-814f1011e0b4`);Or.recipe=jr(t),Or.bookmarks.some((t=>t.id===e))?Or.recipe.bookmarked=!0:Or.recipe.bookmarked=!1,console.log(Or.recipe)}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),Ir.render(Or.recipe)}catch(e){Ir.renderError(),console.error(e)}},Dr=async function(){try{Hr.renderSpinner();const e=Fr.getQuery();if(!e)return;await async function(e){try{Or.search.query=e;const t=await Sr(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=da6e0a16-efc8-422e-84cf-814f1011e0b4`);console.log(t),Or.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Or.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),Hr.render(Lr()),Nr.render(Or.search)}catch(e){console.log(e)}},Gr=function(e){Hr.render(Lr(e)),Nr.render(Or.search)},zr=function(e){!function(e){Or.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Or.recipe.servings})),Or.recipe.servings=e}(e),Ir.update(Or.recipe)},Ur=function(){Or.recipe.bookmarked?function(e){const t=Or.bookmarks.findIndex((t=>t.id===e));Or.bookmarks.splice(t,1),e===Or.recipe.id&&(Or.recipe.bookmarked=!1),Pr()}(Or.recipe.id):$r(Or.recipe),Ir.update(Or.recipe),qr.render(Or.bookmarks)},Br=function(){qr.render(Or.bookmarks)};qr.addHandlerRender(Br),Ir.addHandlerRender(Rr),Ir.addHandlerUpdateServings(zr),Ir.addHandlerAddBookmark(Ur),Fr.addHandlerSearch(Dr),Nr.addHandlerClick(Gr);
//# sourceMappingURL=index.9055e6a4.js.map