if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let o={};const u=e=>n(e,l),t={module:{uri:l},exports:o,require:u};i[l]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"assine_principal"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.10cc8030.css",revision:null},{url:"/fonts/TTHoves-ExtraBold.d427412d.ttf",revision:null},{url:"/img/1GB_1.1fc61b1d.png",revision:null},{url:"/img/480_1.b23a27c6.png",revision:null},{url:"/img/740_1.82f8921e.png",revision:null},{url:"/img/ASSINATURA.5d62bc31.png",revision:null},{url:"/img/fibras.5d121af5.png",revision:null},{url:"/img/first_section.c99fb57e.png",revision:null},{url:"/img/footer.29ef66d3.png",revision:null},{url:"/index.html",revision:"674d65fdb7409ebe0c2ec826f17c0c8b"},{url:"/js/app.f9345131.js",revision:null},{url:"/js/chunk-vendors.51e86075.js",revision:null},{url:"/manifest.json",revision:"9be67d41ee52c0ac0db2487acf22428d"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
