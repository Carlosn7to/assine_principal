if(!self.define){let i,e={};const n=(n,r)=>(n=new URL(n+".js",r).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(r,s)=>{const l=i||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const u=i=>n(i,l),t={module:{uri:l},exports:o,require:u};e[l]=Promise.all(r.map((i=>t[i]||u(i)))).then((i=>(s(...i),o)))}}define(["./workbox-db5fc017"],(function(i){"use strict";i.setCacheNameDetails({prefix:"assine_principal"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.10cc8030.css",revision:null},{url:"/fonts/TTHoves-ExtraBold.d427412d.ttf",revision:null},{url:"/img/1GB_1.1fc61b1d.png",revision:null},{url:"/img/480_1.b23a27c6.png",revision:null},{url:"/img/740_1.82f8921e.png",revision:null},{url:"/img/ASSINATURA.5d62bc31.png",revision:null},{url:"/img/fibras.5d121af5.png",revision:null},{url:"/img/first_section.c99fb57e.png",revision:null},{url:"/img/footer.29ef66d3.png",revision:null},{url:"/index.html",revision:"d257d2d7890aba3017c977973e8d8516"},{url:"/js/app.f9345131.js",revision:null},{url:"/js/chunk-vendors.51e86075.js",revision:null},{url:"/manifest.json",revision:"2bbda78adcda79059f1af2259d0bf3b6"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
