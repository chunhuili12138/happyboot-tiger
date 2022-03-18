import{r as _,o as v,c as h,w as f,u as w,a as E,N as x,b as R,d as y,e as L,f as b,g,h as P,i as O}from"./vendor.b90c6c04.js";const I=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}};I();const D={setup(o){return(s,a)=>{const i=_("router-view");return v(),h(w(x),null,{default:f(()=>[E(i)]),_:1})}}};const u=R(),l=y(),A="modulepreload",p={},T="/",e=function(s,a){return!a||a.length===0?s():Promise.all(a.map(i=>{if(i=`${T}${i}`,i in p)return;p[i]=!0;const r=i.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${t}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":A,r||(n.as="script",n.crossOrigin=""),n.href=i,document.head.appendChild(n),r)return new Promise((d,m)=>{n.addEventListener("load",d),n.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>s())},V=[{name:"\u4ECB\u7ECD",path:"/desc",view:"/desc/index.vue",isRouter:!0,isKeepalive:!0,icon:"ri-markdown-line",type:"menu",children:[]},{name:"\u4E3B\u63A7\u53F0",path:"/dashboard",view:"/dashboard/index.vue",isRouter:!0,isKeepalive:!0,icon:"ri-dashboard-line",type:"menu",children:[]},{name:"\u5DE5\u4F5C\u53F0",path:"/work-desk",view:"/work-desk/index.vue",isRouter:!0,isKeepalive:!0,icon:"ri-shape-line",type:"menu",children:[]},{name:"\u9519\u8BEF\u9875\u9762",path:"/error",view:"/security/index.vue",isRouter:!1,isKeepalive:!1,type:"menu",icon:"ri-error-warning-line",children:[{name:"404",path:"/404",view:"/error404/index.vue",isRouter:!0,isKeepalive:!0,type:"menu",icon:"ri-window-line",children:[]},{name:"500",path:"/500",view:"/error500/index.vue",isRouter:!0,isKeepalive:!0,type:"menu",icon:"ri-window-line",children:[]},{name:"403",path:"/403",view:"/error403/index.vue",isRouter:!0,isKeepalive:!0,type:"menu",icon:"ri-window-line",children:[]}]},{name:"\u57FA\u7840\u5217\u8868",path:"/base-list",view:"/base-list/index.vue",isRouter:!0,isKeepalive:!0,type:"menu",icon:"ri-bank-card-2-line",children:[]},{name:"\u57FA\u7840\u5361\u7247",path:"/card-list",view:"/card-list/index.vue",isRouter:!0,isKeepalive:!0,type:"menu",icon:"ri-table-line",children:[]},{name:"\u7CFB\u7EDF\u8BBE\u7F6E",path:"/setting",view:"",isRouter:!1,isKeepalive:!1,icon:"ri-tools-line",type:"menu",children:[{name:"\u83DC\u5355\u8BBE\u7F6E",path:"/menu",view:"/permission/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-menu-line",type:"menu",children:[]},{name:"\u7528\u6237\u7BA1\u7406",path:"/user",view:"/user/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-user-line",type:"menu",children:[]},{name:"\u89D2\u8272\u7BA1\u7406",path:"/role",view:"/role/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-file-user-line",type:"menu",children:[]}]},{name:"\u793A\u4F8B",path:"/demo",view:"",isRouter:!1,isKeepalive:!1,icon:"ri-collage-fill",type:"menu",children:[{name:"\u6743\u9650\u70B9",path:"/point",view:"/point-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[{name:"\u65B0\u589E",permissionKey:"add",path:"",view:"",isRouter:!1,isKeepalive:!1,type:"point",children:[]},{name:"\u7F16\u8F91\u5F39\u51FA\u6846\u53D6\u6D88",permissionKey:"cancel",path:"",view:"",isRouter:!1,isKeepalive:!1,type:"point",children:[]}]}]}],k={"/src/views/base-list/index.vue":()=>e(()=>import("./index.57da5e6b.js"),["assets/index.57da5e6b.js","assets/index.3433a44e.css","assets/HbAdminPageLayout.a3caf913.js","assets/HbAdminPageLayout.c1dcd757.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b90c6c04.js","assets/Create.f8934d1b.js","assets/CloseSharp.1958ae61.js","assets/TrashSharp.bb02a776.js","assets/DocumentOutline.0f76d44c.js"]),"/src/views/card-list/index.vue":()=>e(()=>import("./index.273b7ab9.js"),["assets/index.273b7ab9.js","assets/index.84604ecb.css","assets/HbAdminPageLayout.a3caf913.js","assets/HbAdminPageLayout.c1dcd757.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b90c6c04.js","assets/TrashSharp.bb02a776.js","assets/DocumentOutline.0f76d44c.js"]),"/src/views/dashboard/index.vue":()=>e(()=>import("./index.bf4ba2fd.js"),["assets/index.bf4ba2fd.js","assets/index.fedb70d5.css","assets/HbAdminPageLayout.a3caf913.js","assets/HbAdminPageLayout.c1dcd757.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b90c6c04.js","assets/config.36716565.js"]),"/src/views/desc/index.vue":()=>e(()=>import("./index.9566516d.js"),["assets/index.9566516d.js","assets/index.b080fcb9.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b90c6c04.js"]),"/src/views/error403/index.vue":()=>e(()=>import("./index.8e06e378.js"),["assets/index.8e06e378.js","assets/vendor.b90c6c04.js"]),"/src/views/error404/index.vue":()=>e(()=>import("./index.39ad301b.js"),["assets/index.39ad301b.js","assets/vendor.b90c6c04.js"]),"/src/views/error500/index.vue":()=>e(()=>import("./index.53a1b10c.js"),["assets/index.53a1b10c.js","assets/vendor.b90c6c04.js"]),"/src/views/home/index.vue":()=>e(()=>import("./index.0d4067b3.js"),["assets/index.0d4067b3.js","assets/index.8c90b40b.css","assets/vendor.b90c6c04.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/CubeOutline.1d26aeb9.js","assets/config.36716565.js","assets/CloseSharp.1958ae61.js","assets/logo.25de170e.js"]),"/src/views/login/index.vue":()=>e(()=>import("./index.0805b58d.js"),["assets/index.0805b58d.js","assets/index.2135eb37.css","assets/logo.25de170e.js","assets/config.36716565.js","assets/vendor.b90c6c04.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/Person.7bfb04c7.js"]),"/src/views/permission/index.vue":()=>e(()=>import("./index.257db25b.js"),["assets/index.257db25b.js","assets/HbAdminPageLayout.a3caf913.js","assets/HbAdminPageLayout.c1dcd757.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b90c6c04.js","assets/TrashSharp.bb02a776.js","assets/CubeOutline.1d26aeb9.js"]),"/src/views/point-demo/index.vue":()=>e(()=>import("./index.e13f68d5.js"),["assets/index.e13f68d5.js","assets/index.db66d5eb.css","assets/HbAdminPageLayout.a3caf913.js","assets/HbAdminPageLayout.c1dcd757.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b90c6c04.js"]),"/src/views/quick-login/index.vue":()=>e(()=>import("./index.0c7521f0.js"),["assets/index.0c7521f0.js","assets/index.ee85ee02.css","assets/logo.25de170e.js","assets/config.36716565.js","assets/vendor.b90c6c04.js","assets/plugin-vue_export-helper.21dcd24c.js"]),"/src/views/recover/index.vue":()=>e(()=>import("./index.aeb78139.js"),["assets/index.aeb78139.js","assets/index.16534a96.css","assets/config.36716565.js","assets/vendor.b90c6c04.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/MailOutline.f1e3ccc9.js"]),"/src/views/role/index.vue":()=>e(()=>import("./index.41c26ece.js"),["assets/index.41c26ece.js","assets/HbAdminPageLayout.a3caf913.js","assets/HbAdminPageLayout.c1dcd757.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b90c6c04.js","assets/TrashSharp.bb02a776.js","assets/DocumentOutline.0f76d44c.js"]),"/src/views/signup/index.vue":()=>e(()=>import("./index.fdd9a422.js"),["assets/index.fdd9a422.js","assets/index.9fbba222.css","assets/config.36716565.js","assets/vendor.b90c6c04.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/MailOutline.f1e3ccc9.js","assets/Person.7bfb04c7.js"]),"/src/views/user/index.vue":()=>e(()=>import("./index.c3462c15.js"),["assets/index.c3462c15.js","assets/HbAdminPageLayout.a3caf913.js","assets/HbAdminPageLayout.c1dcd757.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b90c6c04.js","assets/TrashSharp.bb02a776.js","assets/DocumentOutline.0f76d44c.js"]),"/src/views/work-desk/index.vue":()=>e(()=>import("./index.3ce6eed5.js"),["assets/index.3ce6eed5.js","assets/HbAdminPageLayout.a3caf913.js","assets/HbAdminPageLayout.c1dcd757.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b90c6c04.js"]),"/src/views/base-list/dialog/Create.vue":()=>e(()=>import("./Create.f8934d1b.js"),["assets/Create.f8934d1b.js","assets/vendor.b90c6c04.js","assets/CloseSharp.1958ae61.js"])},K=L({interceptorType:"before",framework:u,async dataLoader(){return{rawData:await new Promise(o=>{o(V)})}},dataLoadFailureHandler(){console.log("\u6570\u636E\u52A0\u8F7D\u5931\u8D25")},routerInjectOption:{randomName:!0,parentRoute:{name:"home",path:"/",component:()=>e(()=>import("./index.0d4067b3.js"),["assets/index.0d4067b3.js","assets/index.8c90b40b.css","assets/vendor.b90c6c04.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/CubeOutline.1d26aeb9.js","assets/config.36716565.js","assets/CloseSharp.1958ae61.js","assets/logo.25de170e.js"])},routes:[],viewLoader(o){return k[`/src/views${o}`]}}}),j=[{name:"login",path:"/login",component:()=>e(()=>import("./index.0805b58d.js"),["assets/index.0805b58d.js","assets/index.2135eb37.css","assets/logo.25de170e.js","assets/config.36716565.js","assets/vendor.b90c6c04.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/Person.7bfb04c7.js"])},{name:"quick-login",path:"/quick-login",component:()=>e(()=>import("./index.0c7521f0.js"),["assets/index.0c7521f0.js","assets/index.ee85ee02.css","assets/logo.25de170e.js","assets/config.36716565.js","assets/vendor.b90c6c04.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{name:"signup",path:"/signup",component:()=>e(()=>import("./index.fdd9a422.js"),["assets/index.fdd9a422.js","assets/index.9fbba222.css","assets/config.36716565.js","assets/vendor.b90c6c04.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/MailOutline.f1e3ccc9.js","assets/Person.7bfb04c7.js"])},{name:"recover",path:"/recover",component:()=>e(()=>import("./index.aeb78139.js"),["assets/index.aeb78139.js","assets/index.16534a96.css","assets/config.36716565.js","assets/vendor.b90c6c04.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/MailOutline.f1e3ccc9.js"])}],C=["/login","/quick-login","/recover","/signup"],H=(o,s,a)=>{if(!l.getToken()){if(!C.includes(o.path)){a("/login");return}a();return}K.filter(o,s,a)},N=(o,s)=>{},c=b({history:g(),routes:j}),S=P(u,c);c.beforeEach(H);c.afterEach(N);O(D).use(S).use(u).use(l).mount("#app");export{l as a,u as h};
