import{$ as u,d as j,g as S,f as T,h as F}from"./solid.0959ea88.js";const O=Symbol("store-raw"),d=Symbol("store-node"),s=Symbol("store-has"),k=Symbol("store-self");function _(e){let n=e[u];if(!n&&(Object.defineProperty(e,u,{value:n=new Proxy(e,E)}),!Array.isArray(e))){const r=Object.keys(e),f=Object.getOwnPropertyDescriptors(e);for(let o=0,i=r.length;o<i;o++){const t=r[o];f[t].get&&Object.defineProperty(e,t,{enumerable:f[t].enumerable,get:f[t].get.bind(n)})}}return n}function y(e){let n;return e!=null&&typeof e=="object"&&(e[u]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function g(e,n=new Set){let r,f,o,i;if(r=e!=null&&e[O])return r;if(!y(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let t=0,c=e.length;t<c;t++)o=e[t],(f=g(o,n))!==o&&(e[t]=f)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const t=Object.keys(e),c=Object.getOwnPropertyDescriptors(e);for(let l=0,P=t.length;l<P;l++)i=t[l],!c[i].get&&(o=e[i],(f=g(o,n))!==o&&(e[i]=f))}return e}function w(e,n){let r=e[n];return r||Object.defineProperty(e,n,{value:r=Object.create(null)}),r}function A(e,n,r){if(e[n])return e[n];const[f,o]=F(r,{equals:!1,internal:!0});return f.$=o,e[n]=f}function W(e,n){const r=Reflect.getOwnPropertyDescriptor(e,n);return!r||r.get||!r.configurable||n===u||n===d||(delete r.value,delete r.writable,r.get=()=>e[u][n]),r}function D(e){S()&&A(w(e,d),k)()}function z(e){return D(e),Reflect.ownKeys(e)}const E={get(e,n,r){if(n===O)return e;if(n===u)return r;if(n===j)return D(e),r;const f=w(e,d),o=f[n];let i=o?o():e[n];if(n===d||n===s||n==="__proto__")return i;if(!o){const t=Object.getOwnPropertyDescriptor(e,n);S()&&(typeof i!="function"||e.hasOwnProperty(n))&&!(t&&t.get)&&(i=A(f,n,i)())}return y(i)?_(i):i},has(e,n){return n===O||n===u||n===j||n===d||n===s||n==="__proto__"?!0:(S()&&A(w(e,s),n)(),n in e)},set(){return!0},deleteProperty(){return!0},ownKeys:z,getOwnPropertyDescriptor:W};function a(e,n,r,f=!1){if(!f&&e[n]===r)return;const o=e[n],i=e.length;r===void 0?(delete e[n],e[s]&&e[s][n]&&o!==void 0&&e[s][n].$()):(e[n]=r,e[s]&&e[s][n]&&o===void 0&&e[s][n].$());let t=w(e,d),c;if((c=A(t,n,o))&&c.$(()=>r),Array.isArray(e)&&e.length!==i){for(let l=e.length;l<i;l++)(c=t[l])&&c.$();(c=A(t,"length",i))&&c.$(e.length)}(c=t[k])&&c.$()}function R(e,n){const r=Object.keys(n);for(let f=0;f<r.length;f+=1){const o=r[f];a(e,o,n[o])}}function L(e,n){if(typeof n=="function"&&(n=n(e)),n=g(n),Array.isArray(n)){if(e===n)return;let r=0,f=n.length;for(;r<f;r++){const o=n[r];e[r]!==o&&a(e,r,o)}a(e,"length",f)}else R(e,n)}function b(e,n,r=[]){let f,o=e;if(n.length>1){f=n.shift();const t=typeof f,c=Array.isArray(e);if(Array.isArray(f)){for(let l=0;l<f.length;l++)b(e,[f[l]].concat(n),r);return}else if(c&&t==="function"){for(let l=0;l<e.length;l++)f(e[l],l)&&b(e,[l].concat(n),r);return}else if(c&&t==="object"){const{from:l=0,to:P=e.length-1,by:N=1}=f;for(let $=l;$<=P;$+=N)b(e,[$].concat(n),r);return}else if(n.length>1){b(e[f],n,[f].concat(r));return}o=e[f],r=[f].concat(r)}let i=n[0];typeof i=="function"&&(i=i(o,r),i===o)||f===void 0&&i==null||(i=g(i),f===void 0||y(o)&&y(i)&&!Array.isArray(i)?R(o,i):a(e,f,i))}function C(...[e,n]){const r=g(e||{}),f=Array.isArray(r),o=_(r);function i(...t){T(()=>{f&&t.length===1?L(r,t[0]):b(r,t)})}return[o,i]}const h=new WeakMap,K={get(e,n){if(n===O)return e;const r=e[n];let f;return y(r)?h.get(r)||(h.set(r,f=new Proxy(r,K)),f):r},set(e,n,r){return a(e,n,g(r)),!0},deleteProperty(e,n){return a(e,n,void 0,!0),!0}};function H(e){return n=>{if(y(n)){let r;(r=h.get(n))||h.set(n,r=new Proxy(n,K)),e(r)}return n}}export{C as c,H as p};