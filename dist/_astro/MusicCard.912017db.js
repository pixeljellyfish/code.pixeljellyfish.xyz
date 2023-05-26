import{r as p}from"./index.ed373d49.js";import{j as w}from"./jsx-runtime.391947bd.js";var le=Object.prototype.hasOwnProperty;function ne(i,t){var e,u;if(i===t)return!0;if(i&&t&&(e=i.constructor)===t.constructor){if(e===Date)return i.getTime()===t.getTime();if(e===RegExp)return i.toString()===t.toString();if(e===Array){if((u=i.length)===t.length)for(;u--&&ne(i[u],t[u]););return u===-1}if(!e||typeof i=="object"){u=0;for(e in i)if(le.call(i,e)&&++u&&!le.call(t,e)||!(e in t)||!ne(i[e],t[e]))return!1;return Object.keys(t).length===u}}return i!==i&&t!==t}var X=new WeakMap,de=0;function me(i){if(!i.length)return"";for(var t="arg",e=0;e<i.length;++e){if(i[e]===null){t+="@null";continue}var u=void 0;typeof i[e]!="object"&&typeof i[e]!="function"?typeof i[e]=="string"?u='"'+i[e]+'"':u=String(i[e]):X.has(i[e])?u=X.get(i[e]):(u=de,X.set(i[e],de++)),t+="@"+u}return t}var pe=function(){function i(t){t===void 0&&(t={}),this.__cache=new Map(Object.entries(t)),this.__listeners=[]}return i.prototype.get=function(t){var e=this.serializeKey(t)[0];return this.__cache.get(e)},i.prototype.set=function(t,e){var u=this.serializeKey(t)[0];this.__cache.set(u,e),this.notify()},i.prototype.keys=function(){return Array.from(this.__cache.keys())},i.prototype.has=function(t){var e=this.serializeKey(t)[0];return this.__cache.has(e)},i.prototype.clear=function(){this.__cache.clear(),this.notify()},i.prototype.delete=function(t){var e=this.serializeKey(t)[0];this.__cache.delete(e),this.notify()},i.prototype.serializeKey=function(t){var e=null;if(typeof t=="function")try{t=t()}catch{t=""}Array.isArray(t)?(e=t,t=me(t)):t=String(t||"");var u=t?"err@"+t:"",a=t?"validating@"+t:"";return[t,e,u,a]},i.prototype.subscribe=function(t){var e=this;if(typeof t!="function")throw new Error("Expected the listener to be a function.");var u=!0;return this.__listeners.push(t),function(){if(u){u=!1;var a=e.__listeners.indexOf(t);a>-1&&(e.__listeners[a]=e.__listeners[e.__listeners.length-1],e.__listeners.length--)}}},i.prototype.notify=function(){for(var t=0,e=this.__listeners;t<e.length;t++){var u=e[t];u()}},i}();function be(){return typeof navigator<"u"&&typeof navigator.onLine<"u"?navigator.onLine:!0}function we(){return typeof document<"u"&&typeof document.visibilityState<"u"?document.visibilityState!=="hidden":!0}var xe=function(i){return fetch(i).then(function(t){return t.json()})};const Y={isOnline:be,isDocumentVisible:we,fetcher:xe};var g=new pe;function Oe(i,t,e,u,a){if(e.isDocumentVisible()&&!(typeof e.errorRetryCount=="number"&&a.retryCount>e.errorRetryCount)){var r=Math.min(a.retryCount||0,8),s=~~((Math.random()+.5)*(1<<r))*e.errorRetryInterval;setTimeout(u,s,a)}}var he=typeof window<"u"&&navigator.connection&&["slow-2g","2g"].indexOf(navigator.connection.effectiveType)!==-1,ie={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:Oe,errorRetryInterval:(he?10:5)*1e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:(he?5:3)*1e3,refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:ne,fetcher:Y.fetcher,isOnline:Y.isOnline,isDocumentVisible:Y.isDocumentVisible,isPaused:function(){return!1}},fe=p.createContext({});fe.displayName="SWRConfigContext";var ue=globalThis&&globalThis.__awaiter||function(i,t,e,u){function a(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function o(c){try{n(u.next(c))}catch(l){s(l)}}function v(c){try{n(u.throw(c))}catch(l){s(l)}}function n(c){c.done?r(c.value):a(c.value).then(o,v)}n((u=u.apply(i,t||[])).next())})},ae=globalThis&&globalThis.__generator||function(i,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},u,a,r,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(n){return function(c){return v([n,c])}}function v(n){if(u)throw new TypeError("Generator is already executing.");for(;e;)try{if(u=1,a&&(r=n[0]&2?a.return:n[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,n[1])).done)return r;switch(a=0,r&&(n=[n[0]&2,r.value]),n[0]){case 0:case 1:r=n;break;case 4:return e.label++,{value:n[1],done:!1};case 5:e.label++,a=n[1],n=[0];continue;case 7:n=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(n[0]===6||n[0]===2)){e=0;continue}if(n[0]===3&&(!r||n[1]>r[0]&&n[1]<r[3])){e.label=n[1];break}if(n[0]===6&&e.label<r[1]){e.label=r[1],r=n;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(n);break}r[2]&&e.ops.pop(),e.trys.pop();continue}n=t.call(i,e)}catch(c){n=[6,c],a=0}finally{u=r=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},$=typeof window>"u"||!!(typeof Deno<"u"&&Deno&&Deno.version&&Deno.version.deno),Se=$?null:window.requestAnimationFrame||function(i){return setTimeout(i,1)},ee=$?p.useEffect:p.useLayoutEffect,x={},A={},H={},oe={},z={},P={},U={},se=function(){var i=0;return function(){return++i}}();if(!$&&window.addEventListener&&typeof document<"u"&&typeof document.addEventListener<"u"){var re=function(i){if(!(!ie.isDocumentVisible()||!ie.isOnline()))for(var t in i)i[t][0]&&i[t][0]()};document.addEventListener("visibilitychange",function(){return re(H)},!1),window.addEventListener("focus",function(){return re(H)},!1),window.addEventListener("online",function(){return re(oe)},!1)}var Te=function(i,t){t===void 0&&(t=!0);var e=g.serializeKey(i),u=e[0],a=e[2],r=e[3];if(!u)return Promise.resolve();var s=z[u];if(u&&s){for(var o=g.get(u),v=g.get(a),n=g.get(r),c=[],l=0;l<s.length;++l)c.push(s[l](t,o,v,n,l>0));return Promise.all(c).then(function(){return g.get(u)})}return Promise.resolve(g.get(u))},te=function(i,t,e,u){var a=z[i];if(i&&a)for(var r=0;r<a.length;++r)a[r](!1,t,e,u)},Re=function(i,t,e){return e===void 0&&(e=!0),ue(void 0,void 0,void 0,function(){var u,a,r,s,o,v,n,c,l,I,R,E,V;return ae(this,function(b){switch(b.label){case 0:if(u=g.serializeKey(i),a=u[0],r=u[2],!a)return[2];if(typeof t>"u")return[2,Te(i,e)];if(P[a]=se()-1,U[a]=0,s=P[a],o=A[a],c=!1,t&&typeof t=="function")try{t=t(g.get(a))}catch(m){n=m}if(!(t&&typeof t.then=="function"))return[3,5];c=!0,b.label=1;case 1:return b.trys.push([1,3,,4]),[4,t];case 2:return v=b.sent(),[3,4];case 3:return l=b.sent(),n=l,[3,4];case 4:return[3,6];case 5:v=t,b.label=6;case 6:return I=function(){if(s!==P[a]||o!==A[a]){if(n)throw n;return!0}},I()?[2,v]:(typeof v<"u"&&g.set(a,v),g.set(r,n),U[a]=se()-1,c?[3,8]:[4,0]);case 7:if(b.sent(),I())return[2,v];b.label=8;case 8:if(R=z[a],R){for(E=[],V=0;V<R.length;++V)E.push(R[V](!!e,v,n,void 0,V>0));return[2,Promise.all(E).then(function(){if(n)throw n;return g.get(a)})]}if(n)throw n;return[2,v]}})})};function _e(){for(var i=this,t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var u,a,r={};t.length>=1&&(u=t[0]),t.length>2?(a=t[1],r=t[2]):typeof t[1]=="function"?a=t[1]:typeof t[1]=="object"&&(r=t[1]);var s=g.serializeKey(u),o=s[0],v=s[1],n=s[2],c=s[3];r=Object.assign({},ie,p.useContext(fe),r);var l=p.useRef(r);ee(function(){l.current=r}),typeof a>"u"&&(a=r.fetcher);var I=function(){var f=g.get(o);return typeof f>"u"?r.initialData:f},R=I(),E=g.get(n),V=!!g.get(c),b=p.useRef({data:!1,error:!1,isValidating:!1}),m=p.useRef({data:R,error:E,isValidating:V});p.useDebugValue(m.current.data);var ve=p.useState(null),ge=ve[1],C=p.useCallback(function(f){var h=!1;for(var d in f)m.current[d]!==f[d]&&(m.current[d]=f[d],b.current[d]&&(h=!0));if(h||r.suspense){if(L.current||!B.current)return;ge({})}},[]),L=p.useRef(!1),M=p.useRef(o),B=p.useRef(!1),W=p.useCallback(function(f){for(var h,d=[],y=1;y<arguments.length;y++)d[y-1]=arguments[y];L.current||B.current&&o===M.current&&(h=l.current)[f].apply(h,d)},[o]),Z=p.useCallback(function(f,h){return Re(M.current,f,h)},[]),q=function(f,h){h&&(f[o]?f[o].push(h):f[o]=[h])},G=function(f,h){if(f[o]){var d=f[o],y=d.indexOf(h);y>=0&&(d[y]=d[d.length-1],d.pop())}},S=p.useCallback(function(f){return f===void 0&&(f={}),ue(i,void 0,void 0,function(){var h,d,y,_,j,T,D;return ae(this,function(O){switch(O.label){case 0:if(!o||!a)return[2,!1];if(L.current)return[2,!1];if(l.current.isPaused())return[2,!1];f=Object.assign({dedupe:!1},f),h=!0,d=typeof x[o]<"u"&&f.dedupe,O.label=1;case 1:return O.trys.push([1,6,,7]),C({isValidating:!0}),g.set(c,!0),d||te(o,m.current.data,m.current.error,!0),y=void 0,_=void 0,d?(_=A[o],[4,x[o]]):[3,3];case 2:return y=O.sent(),[3,5];case 3:return r.loadingTimeout&&!g.get(o)&&setTimeout(function(){h&&W("onLoadingSlow",o,r)},r.loadingTimeout),v!==null?x[o]=a.apply(void 0,v):x[o]=a(o),A[o]=_=se(),[4,x[o]];case 4:y=O.sent(),setTimeout(function(){delete x[o],delete A[o]},r.dedupingInterval),W("onSuccess",y,o,r),O.label=5;case 5:return A[o]>_?[2,!1]:P[o]&&(_<=P[o]||_<=U[o]||U[o]===0)?(C({isValidating:!1}),[2,!1]):(g.set(o,y),g.set(n,void 0),g.set(c,!1),j={isValidating:!1},typeof m.current.error<"u"&&(j.error=void 0),r.compare(m.current.data,y)||(j.data=y),C(j),d||te(o,y,j.error,!1),[3,7]);case 6:return T=O.sent(),delete x[o],delete A[o],l.current.isPaused()?(C({isValidating:!1}),[2,!1]):(g.set(n,T),m.current.error!==T&&(C({isValidating:!1,error:T}),d||te(o,void 0,T,!1)),W("onError",T,o,r),r.shouldRetryOnError&&(D=(f.retryCount||0)+1,W("onErrorRetry",T,o,r,S,Object.assign({dedupe:!0},f,{retryCount:D}))),[3,7]);case 7:return h=!1,[2,!0]}})})},[o]);ee(function(){if(o){L.current=!1,B.current=!0;var f=m.current.data,h=I();M.current!==o&&(M.current=o),r.compare(f,h)||C({data:h});var d=function(){return S({dedupe:!0})};(r.revalidateOnMount||!r.initialData&&r.revalidateOnMount===void 0)&&(typeof h<"u"&&!$?Se(d):d());var y=!1,_=function(){y||!l.current.revalidateOnFocus||(y=!0,d(),setTimeout(function(){return y=!1},l.current.focusThrottleInterval))},j=function(){l.current.revalidateOnReconnect&&d()},T=function(D,O,ce,J,Q){D===void 0&&(D=!0),Q===void 0&&(Q=!0);var K={},F=!1;return typeof O<"u"&&!r.compare(m.current.data,O)&&(K.data=O,F=!0),m.current.error!==ce&&(K.error=ce,F=!0),typeof J<"u"&&m.current.isValidating!==J&&(K.isValidating=J,F=!0),F&&C(K),D?Q?d():S():!1};return q(H,_),q(oe,j),q(z,T),function(){C=function(){return null},L.current=!0,G(H,_),G(oe,j),G(z,T)}}},[o,S]),ee(function(){var f=null,h=function(){return ue(i,void 0,void 0,function(){return ae(this,function(d){switch(d.label){case 0:return!m.current.error&&(l.current.refreshWhenHidden||l.current.isDocumentVisible())&&(l.current.refreshWhenOffline||l.current.isOnline())?[4,S({dedupe:!0})]:[3,2];case 1:d.sent(),d.label=2;case 2:return l.current.refreshInterval&&f&&(f=setTimeout(h,l.current.refreshInterval)),[2]}})})};return l.current.refreshInterval&&(f=setTimeout(h,l.current.refreshInterval)),function(){f&&(clearTimeout(f),f=null)}},[r.refreshInterval,r.refreshWhenHidden,r.refreshWhenOffline,S]);var ye=p.useMemo(function(){var f={revalidate:S,mutate:Z};return Object.defineProperties(f,{error:{get:function(){return b.current.error=!0,M.current===o?m.current.error:E},enumerable:!0},data:{get:function(){return b.current.data=!0,M.current===o?m.current.data:R},enumerable:!0},isValidating:{get:function(){return b.current.isValidating=!0,o?m.current.isValidating:!1},enumerable:!0}}),f},[S,R,E,Z,o]);if(r.suspense){var N=g.get(o),k=g.get(n);if(typeof N>"u"&&(N=R),typeof k>"u"&&(k=E),typeof N>"u"&&typeof k>"u"){if(x[o]||S(),x[o]&&typeof x[o].then=="function")throw x[o];N=x[o]}if(typeof N>"u"&&k)throw k;return{error:k,data:N,revalidate:S,mutate:Z,isValidating:m.current.isValidating}}return ye}fe.Provider;globalThis&&globalThis.__awaiter;globalThis&&globalThis.__generator;globalThis&&globalThis.__rest;function Ee(i,t){var e,u,a;if(!i)return{status:"connecting",song:null};var r=(e=i.recenttracks.track)==null?void 0:e[0];if(!r||!((u=r["@attr"])!=null&&u.nowplaying))return{status:"idle",song:null};var s=r.image.find(function(o){return o.size===t});return{status:"playing",song:{name:r.name,artist:r.artist["#text"],art:(a=s?.["#text"])!=null?a:r.image[0]["#text"],url:r.url,album:r.album["#text"]}}}function Ce(i,t,e,u){e===void 0&&(e=15*1e3),u===void 0&&(u="extralarge");var a="//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+i+"&api_key="+t+"&format=json&limit=1",r=_e(a,{refreshInterval:e}),s=r.data,o=s===void 0?null:s,v=r.error;if(v)return{status:"error",song:null};try{return Ee(o,u)}catch{return{status:"error",song:null}}}const Ae=()=>{const i=(e,u)=>e.length>u?e.substr(0,u-1)+"...":e,t=Ce("pixel-donut12","b1cd73ea885ff9d6a9ddb143c56d7667",5e3,"large");return["connecting","error"].includes(t.status)?null:w.jsxs("a",{href:t.status==="playing"?t.song.url:"https://www.last.fm/user/pixel-donut12",rel:"noopener noreferrer",target:"_blank",className:"focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-md border border-gray-800 dark:border-gray-400 shadow flex flex-row max-w-sm",children:[t.status==="idle"&&w.jsx("img",{height:52,width:45,alt:"Song cover art",placeholder:"blur",className:"rounded shadow max-h-[45px]",src:"/img/idle-music.png"}),t.status==="playing"&&w.jsx("img",{alt:t.song.name,className:"rounded shadow max-h-[52px] max-w-[52px]",src:t.song.art}),w.jsxs("div",{className:"my-auto ml-4",children:[w.jsx("div",{className:"font-semibold text-sm sm:text-regular",children:t.status==="playing"?`Listening to ${i(t.song.name,52)}`:"Not listening to anything"}),w.jsxs("p",{className:"text-xs flex items-center",children:[w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current h-[1.9em] inline",viewBox:"0 0 24 24",children:w.jsx("path",{fill:"#888888",d:"M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991c0 5.494 4.496 9.99 9.991 9.99c5.494 0 9.99-4.496 9.99-9.99c0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201c-2.349-1.45-5.296-1.75-8.793-.951c-.348.102-.648-.148-.748-.449c-.101-.35.149-.648.45-.749c3.795-.85 7.093-.499 9.69 1.1c.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249c-2.697-1.646-6.792-2.148-9.939-1.148c-.398.101-.85-.1-.949-.498c-.101-.402.1-.852.499-.952c3.646-1.098 8.143-.548 11.239 1.351c.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6a.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351c.449.249.599.849.349 1.298c-.25.35-.849.498-1.299.248z"})}),"Spotify"]}),t.status==="playing"&&w.jsxs("p",{className:"text-xs text-gray-500",children:[w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current h-[1.9em] inline",viewBox:"0 0 24 24",children:w.jsx("g",{id:"evaHeadphonesOutline0",children:w.jsx("g",{id:"evaHeadphonesOutline1",children:w.jsx("path",{id:"evaHeadphonesOutline2",fill:"#888888",d:"M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4a3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56a4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2ZM6 15a2 2 0 1 1-2 2a2 2 0 0 1 2-2Zm12 4a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"})})})})," By ",t.song.artist," - ",t.song.album]})]})]})};export{Ae as MusicCard};
