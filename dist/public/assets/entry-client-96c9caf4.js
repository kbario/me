const d={context:void 0,registry:void 0};function _(e){d.context=e}function ht(){return{...d.context,id:`${d.context.id}${d.context.count++}-`,count:0}}const gt=(e,t)=>e===t,de={equals:gt};let ne=null,Ve=Xe;const q=1,se=2,Fe={owned:null,cleanups:null,context:null,owner:null},be={};var m=null;let u=null,S=null,$=null,P=null,me=0;const[Zn,Ne]=N(!1);function Ae(e,t){const n=S,r=m,s=e.length===0,o=s?Fe:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},l=s?e:()=>e(()=>T(()=>F(o)));m=o,S=null;try{return R(l,!0)}finally{S=n,m=r}}function N(e,t){t=t?Object.assign({},de,t):de;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(u&&u.running&&u.sources.has(n)?s=s(n.tValue):s=s(n.value)),ze(n,s));return[We.bind(n),r]}function Oe(e,t,n){const r=ce(e,t,!0,q);J(r)}function M(e,t,n){const r=ce(e,t,!1,q);J(r)}function yt(e,t,n){Ve=vt;const r=ce(e,t,!1,q),s=K&&ue(m,K.id);s&&(r.suspense=s),(!n||!n.render)&&(r.user=!0),P?P.push(r):J(r)}function C(e,t,n){n=n?Object.assign({},de,n):de;const r=ce(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,J(r),We.bind(r)}function mt(e,t,n){let r,s,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,o=t||{}):(r=e,s=t,o=n||{});let l=null,i=be,c=null,f=!1,a=!1,h="initialValue"in o,y=typeof r=="function"&&C(r);const b=new Set,[E,x]=(o.storage||N)(o.initialValue),[k,O]=N(void 0),[L,H]=N(void 0,{equals:!1}),[B,I]=N(h?"ready":"unresolved");if(d.context){c=`${d.context.id}${d.context.count++}`;let g;o.ssrLoadFrom==="initial"?i=o.initialValue:d.load&&(g=d.load(c))&&(i=g[0])}function D(g,p,A,j){return l===g&&(l=null,h=!0,(g===i||p===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(j,{value:p})),i=be,u&&g&&f?(u.promises.delete(g),f=!1,R(()=>{u.running=!0,Q(p,A)},!1)):Q(p,A)),p}function Q(g,p){R(()=>{p===void 0&&x(()=>g),I(p!==void 0?"errored":"ready"),O(p);for(const A of b.keys())A.decrement();b.clear()},!1)}function Z(){const g=K&&ue(m,K.id),p=E(),A=k();if(A!==void 0&&!l)throw A;return S&&!S.user&&g&&Oe(()=>{L(),l&&(g.resolved&&u&&f?u.promises.add(l):b.has(g)||(g.increment(),b.add(g)))}),p}function v(g=!0){if(g!==!1&&a)return;a=!1;const p=y?y():r;if(f=u&&u.running,p==null||p===!1){D(l,T(E));return}u&&l&&u.promises.delete(l);const A=i!==be?i:T(()=>s(p,{value:E(),refetching:g}));return typeof A!="object"||!(A&&"then"in A)?(D(l,A,void 0,p),A):(l=A,a=!0,queueMicrotask(()=>a=!1),R(()=>{I(h?"refreshing":"pending"),H()},!1),A.then(j=>D(A,j,void 0,p),j=>D(A,void 0,Je(j),p)))}return Object.defineProperties(Z,{state:{get:()=>B()},error:{get:()=>k()},loading:{get(){const g=B();return g==="pending"||g==="refreshing"}},latest:{get(){if(!h)return Z();const g=k();if(g&&!l)throw g;return E()}}}),y?Oe(()=>v(!1)):v(!1),[Z,{refetch:v,mutate:x}]}function T(e){if(S===null)return e();const t=S;S=null;try{return e()}finally{S=t}}function De(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let f=0;f<e.length;f++)i[f]=e[f]()}else i=e();if(o){o=!1;return}const c=T(()=>t(i,s,l));return s=i,c}}function le(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function pt(e,t){ne||(ne=Symbol("error")),m=ce(void 0,void 0,!0),m.context={[ne]:[t]},u&&u.running&&u.sources.add(m);try{return e()}catch(n){pe(n)}finally{m=m.owner}}function Ke(){return m}function wt(e,t){const n=m,r=S;m=e,S=null;try{return R(t,!0)}catch(s){pe(s)}finally{m=n,S=r}}function bt(e){if(u&&u.running)return e(),u.done;const t=S,n=m;return Promise.resolve().then(()=>{S=t,m=n;let r;return K&&(r=u||(u={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),R(e,!1),S=m=null,r?r.done:void 0})}function xt(e){P.push.apply(P,e),e.length=0}function G(e,t){const n=Symbol("context");return{id:n,Provider:At(n),defaultValue:e}}function W(e){let t;return(t=ue(m,e.id))!==void 0?t:e.defaultValue}function Ce(e){const t=C(e),n=C(()=>Se(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let K;function St(){return K||(K=G({}))}function We(){const e=u&&u.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===q)J(this);else{const t=$;$=null,R(()=>ge(this),!1),$=t}if(S){const t=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(t)):(S.sources=[this],S.sourceSlots=[t]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return e&&u.sources.has(this)?this.tValue:this.value}function ze(e,t,n){let r=u&&u.running&&u.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(u){const s=u.running;(s||!n&&u.sources.has(e))&&(u.sources.add(e),e.tValue=t),s||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&R(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=u&&u.running;l&&u.disposed.has(o)||((l?!o.tState:!o.state)&&(o.pure?$.push(o):P.push(o),o.observers&&Ye(o)),l?o.tState=q:o.state=q)}if($.length>1e6)throw $=[],new Error},!1)}return t}function J(e){if(!e.fn)return;F(e);const t=m,n=S,r=me;S=m=e,Le(e,u&&u.running&&u.sources.has(e)?e.tValue:e.value,r),u&&!u.running&&u.sources.has(e)&&queueMicrotask(()=>{R(()=>{u&&(u.running=!0),S=m=e,Le(e,e.tValue,r),S=m=null},!1)}),S=n,m=t}function Le(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(u&&u.running?(e.tState=q,e.tOwned&&e.tOwned.forEach(F),e.tOwned=void 0):(e.state=q,e.owned&&e.owned.forEach(F),e.owned=null)),e.updatedAt=n+1,pe(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ze(e,r,!0):u&&u.running&&e.pure?(u.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function ce(e,t,n,r=q,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return u&&u.running&&(o.state=0,o.tState=r),m===null||m!==Fe&&(u&&u.running&&m.pure?m.tOwned?m.tOwned.push(o):m.tOwned=[o]:m.owned?m.owned.push(o):m.owned=[o]),o}function he(e){const t=u&&u.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===se)return ge(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<me);){if(t&&u.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let s=e,o=n[r+1];for(;(s=s.owner)&&s!==o;)if(u.disposed.has(s))return}if((t?e.tState:e.state)===q)J(e);else if((t?e.tState:e.state)===se){const s=$;$=null,R(()=>ge(e,n[0]),!1),$=s}}}function R(e,t){if($)return e();let n=!1;t||($=[]),P?n=!0:P=[],me++;try{const r=e();return Et(n),r}catch(r){n||(P=null),$=null,pe(r)}}function Et(e){if($&&(Xe($),$=null),e)return;let t;if(u){if(!u.promises.size&&!u.queue.size){const r=u.sources,s=u.disposed;P.push.apply(P,u.effects),t=u.resolve;for(const o of P)"tState"in o&&(o.state=o.tState),delete o.tState;u=null,R(()=>{for(const o of s)F(o);for(const o of r){if(o.value=o.tValue,o.owned)for(let l=0,i=o.owned.length;l<i;l++)F(o.owned[l]);o.tOwned&&(o.owned=o.tOwned),delete o.tValue,delete o.tOwned,o.tState=0}Ne(!1)},!1)}else if(u.running){u.running=!1,u.effects.push.apply(u.effects,P),P=null,Ne(!0);return}}const n=P;P=null,n.length&&R(()=>Ve(n),!1),t&&t()}function Xe(e){for(let t=0;t<e.length;t++)he(e[t])}function vt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:he(r)}for(d.context&&_(),t=0;t<n;t++)he(e[t])}function ge(e,t){const n=u&&u.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];if(s.sources){const o=n?s.tState:s.state;o===q?s!==t&&(!s.updatedAt||s.updatedAt<me)&&he(s):o===se&&ge(s,t)}}}function Ye(e){const t=u&&u.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=se:r.state=se,r.pure?$.push(r):P.push(r),r.observers&&Ye(r))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(u&&u.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)F(e.tOwned[t]);delete e.tOwned}Ge(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}u&&u.running?e.tState=0:e.state=0,e.context=null}function Ge(e,t){if(t||(e.tState=0,u.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Ge(e.owned[n])}function Je(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Re(e,t){for(const n of e)n(t)}function pe(e){const t=ne&&ue(m,ne);if(!t)throw e;const n=Je(e);P?P.push({fn(){Re(t,n)},state:q}):Re(t,n)}function ue(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ue(e.owner,t):void 0}function Se(e){if(typeof e=="function"&&!e.length)return Se(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Se(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function At(e,t){return function(r){let s;return M(()=>s=T(()=>(m.context={[e]:r.value},Ce(()=>r.children))),void 0),s}}let Qe=!1;function Ct(){Qe=!0}function w(e,t){if(Qe&&d.context){const n=d.context;_(ht());const r=T(()=>e(t||{}));return _(n),r}return T(()=>e(t||{}))}function Pt(e){let t,n;const r=s=>{const o=d.context;if(o){const[i,c]=N();(n||(n=e())).then(f=>{_(o),c(()=>f.default),_()}),t=i}else if(!t){const[i]=mt(()=>(n||(n=e())).then(c=>c.default));t=i}let l;return C(()=>(l=t())&&T(()=>{if(!o)return l(s);const i=d.context;_(o);const c=l(s);return _(i),c}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}let $t=0;function kt(){const e=d.context;return e?`${e.id}${e.count++}`:`cl-${$t++}`}const Tt=e=>`Stale read from <${e}>.`;function Pe(e){const t=e.keyed,n=C(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return C(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?T(()=>s(t?r:()=>{if(!T(n))throw Tt("Show");return e.when})):s}return e.fallback},void 0,void 0)}let X;function Ze(){X&&[...X].forEach(e=>e())}function Nt(e){let t,n;d.context&&d.load&&(n=d.load(d.context.id+d.context.count))&&(t=n[0]);const[r,s]=N(t,void 0);return X||(X=new Set),X.add(s),le(()=>X.delete(s)),C(()=>{let o;if(o=r()){const l=e.fallback;return typeof l=="function"&&l.length?T(()=>l(o,()=>s())):l}return pt(()=>e.children,s)},void 0,void 0)}const Ot=G();function Lt(e){let t=0,n,r,s,o,l;const[i,c]=N(!1),f=St(),a={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:i,effects:[],resolved:!1},h=Ke();if(d.context&&d.load){const E=d.context.id+d.context.count;let x=d.load(E);if(x&&(s=x[0])&&s!=="$$f"){(typeof s!="object"||!("then"in s))&&(s=Promise.resolve(s));const[k,O]=N(void 0,{equals:!1});o=k,s.then(L=>{if(L||d.done)return L&&(l=L),O();d.gather(E),_(r),O(),_()})}}const y=W(Ot);y&&(n=y.register(a.inFallback));let b;return le(()=>b&&b()),w(f.Provider,{value:a,get children(){return C(()=>{if(l)throw l;if(r=d.context,o)return o(),o=void 0;r&&s==="$$f"&&_();const E=C(()=>e.children);return C(x=>{const k=a.inFallback(),{showContent:O=!0,showFallback:L=!0}=n?n():{};if((!k||s&&s!=="$$f")&&O)return a.resolved=!0,b&&b(),b=r=s=void 0,xt(a.effects),E();if(L)return b?x:Ae(H=>(b=H,r&&(_({id:r.id+"f",count:0}),r=void 0),e.fallback),h)})})}})}const Rt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],qt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Rt]),_t=new Set(["innerHTML","textContent","innerText","children"]),jt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),It=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Mt(e,t){const n=It[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Ht=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Bt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ut(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,c=t[s-1].nextSibling,f=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const a=o<r?i?n[i-1].nextSibling:n[o-i]:c;for(;i<o;)e.insertBefore(n[i++],a)}else if(o===i)for(;l<s;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],a),t[s]=n[o]}else{if(!f){f=new Map;let h=i;for(;h<o;)f.set(n[h],h++)}const a=f.get(t[l]);if(a!=null)if(i<a&&a<o){let h=l,y=1,b;for(;++h<s&&h<o&&!((b=f.get(t[h]))==null||b!==a+y);)y++;if(y>a-i){const E=t[l];for(;i<a;)e.insertBefore(n[i++],E)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const qe="_$DX_DELEGATE";function Vt(e,t,n,r={}){let s;return Ae(o=>{s=o,t===document?e():ye(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function Ft(e,t,n){let r;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},o=t?()=>(r||(r=s())).cloneNode(!0):()=>T(()=>document.importNode(r||(r=s()),!0));return o.cloneNode=o,o}function $e(e,t=window.document){const n=t[qe]||(t[qe]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,tt))}}function Ee(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Dt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function Kt(e,t){t==null?e.removeAttribute("class"):e.className=t}function et(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function Wt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,l;for(o=0,l=s.length;o<l;o++){const i=s[o];!i||i==="undefined"||t[i]||(_e(e,i,!1),delete n[i])}for(o=0,l=r.length;o<l;o++){const i=r[o],c=!!t[i];!i||i==="undefined"||n[i]===c||!c||(_e(e,i,!0),n[i]=c)}return n}function zt(e,t,n){if(!t)return n?Ee(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,o;for(o in n)t[o]==null&&r.removeProperty(o),delete n[o];for(o in t)s=t[o],s!==n[o]&&(r.setProperty(o,s),n[o]=s);return n}function oe(e,t={},n,r){const s={};return r||M(()=>s.children=Y(e,t.children,s.children)),M(()=>t.ref&&t.ref(e)),M(()=>Xt(e,t,n,!0,s,!0)),s}function ye(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Y(e,t,r,n);M(s=>Y(e,t(),s,n),r)}function Xt(e,t,n,r,s={},o=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=je(e,l,null,s[l],n,o)}for(const l in t){if(l==="children"){r||Y(e,t.children);continue}const i=t[l];s[l]=je(e,l,i,s[l],n,o)}}function Yt(e,t,n={}){d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=globalThis._$HY.load,d.gather=s=>Me(t,s),d.registry=new Map,d.context={id:n.renderId||"",count:0},Me(t,n.renderId);const r=Vt(e,t,[...t.childNodes],n);return d.context=null,r}function Gt(e){let t,n;if(!d.context||!(t=d.registry.get(n=Zt()))){if(d.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e()}return d.completed&&d.completed.add(t),d.registry.delete(n),t}function Jt(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=d;for(t.queued=!1;t.length;){const[n,r]=t[0];if(!e.has(n))return;tt(r),t.shift()}}),d.events.queued=!0)}function Qt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function _e(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function je(e,t,n,r,s,o){let l,i,c,f,a;if(t==="style")return zt(e,n,r);if(t==="classList")return Wt(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);r&&e.removeEventListener(h,r),n&&e.addEventListener(h,n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);r&&e.removeEventListener(h,r,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),y=Ht.has(h);if(!y&&r){const b=Array.isArray(r)?r[0]:r;e.removeEventListener(h,b)}(y||n)&&(et(e,h,n,y),y&&$e([h]))}else if(t.slice(0,5)==="attr:")Ee(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(c=_t.has(t))||!s&&((f=Mt(t,e.tagName))||(i=qt.has(t)))||(l=e.nodeName.includes("-")))a&&(t=t.slice(5),i=!0),t==="class"||t==="className"?Kt(e,n):l&&!i&&!c?e[Qt(t)]=n:e[f||t]=n;else{const h=s&&t.indexOf(":")>-1&&Bt[t.split(":")[0]];h?Dt(e,h,t,n):Ee(e,jt[t]||t,n)}return n}function tt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),d.registry&&!d.done&&(d.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Y(e,t,n,r,s){if(d.context){!n&&(n=[...e.childNodes]);let i=[];for(let c=0;c<n.length;c++){const f=n[c];f.nodeType===8&&f.data.slice(0,2)==="!$"?f.remove():i.push(f)}n=i}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(d.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=z(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(d.context)return n;n=z(e,n,r)}else{if(o==="function")return M(()=>{let i=t();for(;typeof i=="function";)i=i();n=Y(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(ve(i,t,n,s))return M(()=>n=Y(e,i,n,r,!0)),()=>n;if(d.context){if(!i.length)return n;for(let f=0;f<i.length;f++)if(i[f].parentNode)return n=i}if(i.length===0){if(n=z(e,n,r),l)return n}else c?n.length===0?Ie(e,i,r):Ut(e,n,i):(n&&z(e),Ie(e,i));n=i}else if(t instanceof Node){if(d.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=z(e,n,r,t);z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ve(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],c=n&&n[o];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=ve(e,i,c)||s;else if(typeof i=="function")if(r){for(;typeof i=="function";)i=i();s=ve(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||s}else e.push(i),s=!0;else{const f=String(i);c&&c.nodeType===3?(c.data=f,e.push(c)):e.push(document.createTextNode(f))}}return s}function Ie(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function z(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const c=i.parentNode===e;!o&&!l?c?e.replaceChild(s,i):e.insertBefore(s,n):c&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}function Me(e,t){const n=e.querySelectorAll("*[data-hk]");for(let r=0;r<n.length;r++){const s=n[r],o=s.getAttribute("data-hk");(!t||o.startsWith(t))&&!d.registry.has(o)&&d.registry.set(o,s)}}function Zt(){const e=d.context;return`${e.id}${e.count++}`}function en(e){return d.context?void 0:e.children}function tn(){}const nt=!1,nn=(...e)=>(Ct(),Yt(...e)),rn="modulepreload",sn=function(e){return"/"+e},He={},on=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=sn(o),o in He)return;He[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!r)for(let a=s.length-1;a>=0;a--){const h=s[a];if(h.href===o&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":rn,l||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),l)return new Promise((a,h)=>{f.addEventListener("load",a),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function ln(e,t){e&&t&&nn(e,t)}const ke=G(),cn=["title","meta"],Be=e=>e.tag+(e.name?`.${e.name}"`:""),un=e=>{if(!d.context){const s=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(s,o=>o.parentNode.removeChild(o))}const t=new Map;function n(s){if(s.ref)return s.ref;let o=document.querySelector(`[data-sm="${s.id}"]`);return o?(o.tagName.toLowerCase()!==s.tag&&(o.parentNode&&o.parentNode.removeChild(o),o=document.createElement(s.tag)),o.removeAttribute("data-sm")):o=document.createElement(s.tag),o}const r={addClientTag:s=>{let o=Be(s);if(cn.indexOf(s.tag)!==-1){t.has(o)||t.set(o,[]);let i=t.get(o),c=i.length;i=[...i,s],t.set(o,i);{let f=n(s);s.ref=f,oe(f,s.props);let a=null;for(var l=c-1;l>=0;l--)if(i[l]!=null){a=i[l];break}f.parentNode!=document.head&&document.head.appendChild(f),a&&a.ref&&document.head.removeChild(a.ref)}return c}{let i=n(s);s.ref=i,oe(i,s.props),i.parentNode!=document.head&&document.head.appendChild(i)}return-1},removeClientTag:(s,o)=>{const l=Be(s);if(s.ref){const i=t.get(l);if(i){if(s.ref.parentNode){s.ref.parentNode.removeChild(s.ref);for(let c=o-1;c>=0;c--)i[c]!=null&&document.head.appendChild(i[c].ref)}i[o]=null,t.set(l,i)}else s.ref.parentNode&&s.ref.parentNode.removeChild(s.ref)}}};return w(ke.Provider,{value:r,get children(){return e.children}})},Te=(e,t,n)=>{const r=kt();if(!W(ke))throw new Error("<MetaProvider /> should be in the tree");return an({tag:e,props:t,setting:n,id:r,get name(){return t.name||t.property}}),null};function an(e){const{addClientTag:t,removeClientTag:n,addServerTag:r}=W(ke);M(()=>{{let s=t(e);le(()=>n(e,s))}})}const fn=e=>Te("title",e,{escape:!0}),ae=e=>Te("meta",e,{escape:!0}),dn=e=>Te("link",e);function hn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function gn([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function yn(e){try{return document.querySelector(e)}catch{return null}}function mn(e,t){const n=yn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function pn(e,t,n,r){let s=!1;const o=i=>typeof i=="string"?{value:i}:i,l=gn(N(o(e()),{equals:(i,c)=>i.value===c.value}),void 0,i=>(!s&&t(i),i));return n&&le(n((i=e())=>{s=!0,l[1](o(i)),s=!1})),{signal:l,utils:r}}function wn(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:N({value:""})};return e}function bn(){return pn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),mn(window.location.hash.slice(1),n)},e=>hn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function xn(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const l={to:s,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:c=>{c&&(n=!0),i.navigate(s,o)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const Sn=/^(?:[a-z0-9]+:)?\/\//i,En=/^\/+|(\/)\/+$/g;function re(e,t=!1){const n=e.replace(En,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function fe(e,t,n){if(Sn.test(t))return;const r=re(e),s=n&&re(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+re(t,!o)}function vn(e,t){if(e==null)throw new Error(t);return e}function rt(e,t){return re(e).replace(/\/*(\*.*)?$/g,"")+re(t)}function An(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Cn(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),l=o.length;return i=>{const c=i.split("/").filter(Boolean),f=c.length-l;if(f<0||f>0&&s===void 0&&!t)return null;const a={path:l?"":"/",params:{}},h=y=>n===void 0?void 0:n[y];for(let y=0;y<l;y++){const b=o[y],E=c[y],x=b[0]===":",k=x?b.slice(1):b;if(x&&xe(E,h(k)))a.params[k]=E;else if(x||!xe(E,b))return null;a.path+=`/${E}`}if(s){const y=f?c.slice(-f).join("/"):"";if(xe(y,h(s)))a.params[s]=y;else return null}return a}}function xe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Pn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function st(e){const t=new Map,n=Ke();return new Proxy({},{get(r,s){return t.has(s)||wt(n,()=>t.set(s,C(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function ot(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return ot(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const $n=100,it=G(),we=G(),lt=()=>vn(W(it),"Make sure your app is wrapped in a <Router />");let ie;const ct=()=>ie||W(we)||lt().base;function kn(e,t="",n){const{component:r,data:s,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:r?()=>w(r,{}):()=>{const{element:c}=e;return c===void 0&&n?w(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return ut(e.path).reduce((c,f)=>{for(const a of ot(f)){const h=rt(t,a),y=l?h:h.split("/*",1)[0];c.push({...i,originalPath:a,pattern:y,matcher:Cn(y,!l,e.matchFilters)})}return c},[])}function Tn(e,t=0){return{routes:e,score:Pn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function ut(e){return Array.isArray(e)?e:[e]}function at(e,t="",n,r=[],s=[]){const o=ut(e);for(let l=0,i=o.length;l<i;l++){const c=o[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const f=kn(c,t,n);for(const a of f){r.push(a);const h=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!h)at(c.children,a.pattern,n,r,s);else{const y=Tn([...r],s.length);s.push(y)}r.pop()}}}return r.length?s:s.sort((l,i)=>i.score-l.score)}function Nn(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function On(e,t){const n=new URL("http://sar"),r=C(c=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),c}},n,{equals:(c,f)=>c.href===f.href}),s=C(()=>r().pathname),o=C(()=>r().search,!0),l=C(()=>r().hash),i=C(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:st(De(o,()=>An(r())))}}function Ln(e,t="",n,r){const{signal:[s,o],utils:l={}}=wn(e),i=l.parsePath||(v=>v),c=l.renderPath||(v=>v),f=l.beforeLeave||xn(),a=fe("",t),h=void 0;if(a===void 0)throw new Error(`${a} is not a valid base path`);a&&!s().value&&o({value:a,replace:!0,scroll:!1});const[y,b]=N(!1),E=async v=>{b(!0);try{await bt(v)}finally{b(!1)}},[x,k]=N(s().value),[O,L]=N(s().state),H=On(x,O),B=[],I={pattern:a,params:{},path:()=>a,outlet:()=>null,resolvePath(v){return fe(a,v)}};if(n)try{ie=I,I.data=n({data:void 0,params:{},location:H,navigate:Q(I)})}finally{ie=void 0}function D(v,g,p){T(()=>{if(typeof g=="number"){g&&(l.go?f.confirm(g,p)&&l.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:A,resolve:j,scroll:U,state:ee}={replace:!1,resolve:!0,scroll:!0,...p},V=j?v.resolvePath(g):fe("",g);if(V===void 0)throw new Error(`Path '${g}' is not a routable path`);if(B.length>=$n)throw new Error("Too many redirects");const te=x();if((V!==te||ee!==O())&&!nt){if(f.confirm(V,p)){const dt=B.push({value:te,replace:A,scroll:U,state:O()});E(()=>{k(V),L(ee),Ze()}).then(()=>{B.length===dt&&Z({value:V,state:ee})})}}})}function Q(v){return v=v||W(we)||I,(g,p)=>D(v,g,p)}function Z(v){const g=B[0];g&&((v.value!==g.value||v.state!==g.state)&&o({...v,replace:g.replace,scroll:g.scroll}),B.length=0)}M(()=>{const{value:v,state:g}=s();T(()=>{v!==x()&&E(()=>{k(v),L(g)})})});{let v=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const p=g.composedPath().find(te=>te instanceof Node&&te.nodeName.toUpperCase()==="A");if(!p||!p.hasAttribute("link"))return;const A=p.href;if(p.target||!A&&!p.hasAttribute("state"))return;const j=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||j&&j.includes("external"))return;const U=new URL(A);if(U.origin!==window.location.origin||a&&U.pathname&&!U.pathname.toLowerCase().startsWith(a.toLowerCase()))return;const ee=i(U.pathname+U.search+U.hash),V=p.getAttribute("state");g.preventDefault(),D(I,ee,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:V&&JSON.parse(V)})};$e(["click"]),document.addEventListener("click",v),le(()=>document.removeEventListener("click",v))}return{base:I,out:h,location:H,isRouting:y,renderPath:c,parsePath:i,navigatorFactory:Q,beforeLeave:f}}function Rn(e,t,n,r,s){const{base:o,location:l,navigatorFactory:i}=e,{pattern:c,element:f,preload:a,data:h}=r().route,y=C(()=>r().path);a&&a();const b={parent:t,pattern:c,get child(){return n()},path:y,params:s,data:t.data,outlet:f,resolvePath(E){return fe(o.path(),E,y())}};if(h)try{ie=b,b.data=h({data:t.data,params:s,location:l,navigate:i(b)})}finally{ie=void 0}return b}const qn=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,l=t||bn(),i=Ln(l,r,s);return w(it.Provider,{value:i,get children(){return e.children}})},_n=e=>{const t=lt(),n=ct(),r=Ce(()=>e.children),s=C(()=>at(r(),rt(n.pattern,e.base||""),jn)),o=C(()=>Nn(s(),t.location.pathname)),l=st(()=>{const a=o(),h={};for(let y=0;y<a.length;y++)Object.assign(h,a[y].params);return h});t.out&&t.out.matches.push(o().map(({route:a,path:h,params:y})=>({originalPath:a.originalPath,pattern:a.pattern,path:h,params:y})));const i=[];let c;const f=C(De(o,(a,h,y)=>{let b=h&&a.length===h.length;const E=[];for(let x=0,k=a.length;x<k;x++){const O=h&&h[x],L=a[x];y&&O&&L.route.key===O.route.key?E[x]=y[x]:(b=!1,i[x]&&i[x](),Ae(H=>{i[x]=H,E[x]=Rn(t,E[x-1]||n,()=>f()[x+1],()=>o()[x],l)}))}return i.splice(a.length).forEach(x=>x()),y&&b?y:(c=E[0],E)}));return w(Pe,{get when(){return f()&&c},keyed:!0,children:a=>w(we.Provider,{value:a,get children(){return a.outlet()}})})},jn=()=>{const e=ct();return w(Pe,{get when(){return e.child},keyed:!0,children:t=>w(we.Provider,{value:t,get children(){return t.outlet()}})})};const In=[{component:Pt(()=>on(()=>import("./index-e8c47493.js"),[])),path:"/"}],Mn=()=>In,ft=G({}),Hn=_n,Bn="$FETCH",Un=Ft('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre>');function Vn(e){return w(Nt,{fallback:(t,n)=>w(Pe,{get when(){return!e.fallback},get fallback(){return C(()=>!!e.fallback)()&&e.fallback(t,n)},get children(){return w(Fn,{error:t})}}),get children(){return e.children}})}function Fn(e){return yt(()=>console.error(e.error)),(()=>{const t=Gt(Un),n=t.firstChild,r=n.firstChild,s=r.nextSibling,o=s.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),r.style.setProperty("font-weight","bold"),ye(r,()=>e.error.message),et(s,"click",Ze,!0),s.style.setProperty("color","rgba(252, 165, 165)"),s.style.setProperty("background-color","rgb(153, 27, 27)"),s.style.setProperty("border-radius","5px"),s.style.setProperty("padding","4px 8px"),o.style.setProperty("margin-top","8px"),o.style.setProperty("width","100%"),ye(o,()=>e.error.stack),Jt(),t})()}$e(["click"]);const Dn=!1,Kn=!1;function Wn(){return W(ft),[w(tn,{}),Kn,w(en,{get children(){return nt}}),Dn]}function zn(e){return oe(document.documentElement,e,!1,!0),e.children}function Xn(e){return oe(document.head,e,!1,!0),e.children}function Yn(e){{let t=Ce(()=>e.children);return oe(document.body,e,!1,!0),ye(document.body,()=>{let n=t();if(n){if(Array.isArray(n)){let r=n.filter(s=>!!s);return r.length?r:null}return n}return null},null,[...document.body.childNodes]),document.body}}function Gn(){return w(zn,{lang:"en",get children(){return[w(Xn,{get children(){return[w(fn,{children:"Create JD App"}),w(ae,{charset:"utf-8"}),w(ae,{name:"viewport",content:"width=device-width, initial-scale=1"}),w(ae,{name:"theme-color",content:"#026d56"}),w(ae,{name:"description",content:"Generated by create-jd-app"}),w(dn,{rel:"icon",href:"/favicon.ico"})]}}),w(Yn,{get children(){return[w(Lt,{get children(){return w(Vn,{get children(){return w(Hn,{get children(){return w(Mn,{})}})}})}}),w(Wn,{})]}})]}})}const Ue=Object.values(Object.assign({}))[0],Jn=Ue?Ue.default:void 0,Qn=()=>{let e={get request(){},get clientAddress(){},get locals(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:Bn,fetch};function t(n){return w(qn,n)}return w(ft.Provider,{value:e,get children(){return w(un,{get children(){return w(t,{get base(){return"/"},data:Jn,get children(){return w(Gn,{})}})}})}})};ln(()=>w(Qn,{}),document);export{Gt as g,Ft as t};
