import{g as r,i as t,t as o}from "./web.2706cf06.js";import{c as p,F as d}from "./solid.2784103e.js";import{s as _}from "./log.ed7c3991.js";const $=o('<div class="overflow-x-auto h-96"><table class="table table-pin-rows"><thead><tr><th class=capitalize>Time</th><th class=capitalize>log</th><th class=capitalize>location</th></tr></thead><tbody>'),f=o("<tr><th></th><th></th><th>"),u=()=>(()=>{const i=r($),n=i.firstChild,h=n.firstChild,c=h.nextSibling;return t(c,p(d,{each:_,children: e=>(()=>{const l=r(f),a=l.firstChild,s=a.nextSibling,m=s.nextSibling;return t(a,()=>e.time),t(s,()=>JSON.stringify(e.log)),t(m,()=>e.location),l})()})),i})();export{u as default};
