import{g as r,i as s,t as o}from "./web.2706cf06.js";import{c as _,F as b}from "./solid.2784103e.js";import{s as g}from "./log.ed7c3991.js";const u=o('<div class="h-96 overflow-x-auto"><table class="table table-pin-rows"><thead><tr><th class=capitalize>Time</th><th class=capitalize>log</th><th class=capitalize>location</th></tr></thead><tbody>'),f=o("<tr><th></th><th></th><th>"),L=()=>(()=>{const a=r(u),n=a.firstChild,c=n.firstChild,h=c.nextSibling;return s(h,_(b,{each:g,children: t=>{const m=Object.keys(t.log),p=Object.values(t.log),$=m.map((e, l)=>`${e}: ${p[l]}`).join(", ");return(()=>{const e=r(f),l=e.firstChild,i=l.nextSibling,d=i.nextSibling;return s(l,()=>t.time),s(i,$),s(d,()=>t.location),e})()}})),a})();export{L as default};