import{g as r,i as l,t as n}from"./web.1f1bf9cb.js";import{c as _,F as b}from"./solid.0959ea88.js";import{s as u}from"./log.5e74cee8.js";import"./store.11b9c9bf.js";const f=n('<div class="h-96 overflow-x-auto"><table class="table table-pin-rows"><thead><tr><th class=capitalize>Time</th><th class=capitalize>log</th><th class=capitalize>location</th></tr></thead><tbody>'),g=n("<tr><th></th><th></th><th>"),j=()=>(()=>{const s=r(f),o=s.firstChild,c=o.firstChild,h=c.nextSibling;return l(h,_(b,{each:u,children:t=>{const m=Object.keys(t.log),p=Object.values(t.log),d=m.map((e,i)=>`${e}: ${p[i]}`).join(", ");return(()=>{const e=r(g),i=e.firstChild,a=i.nextSibling,$=a.nextSibling;return l(i,()=>t.time),l(a,d),l($,()=>t.location),e})()}})),s})();export{j as default};
