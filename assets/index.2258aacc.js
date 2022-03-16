import{H as S}from"./HbAdminPageLayout.210ccb93.js";import{A as z,T as f,R as C,S as M}from"./TrashSharp.086f3613.js";import{D as T,C as A}from"./DocumentOutline.b82c39f3.js";import{u as D}from"./use-message.f2128f06.js";import{h as g,j as I,o as h,c as y,w as o,k as t,l as e,m as n,t as L,n as P,p as l}from"./vendor.43ce0c4d.js";import{N as W}from"./LayoutHeader.15a77ac6.js";import{N as d,a as s}from"./Grid.6604c0ae.js";import{N as _}from"./Input.c4c0dd16.js";import{N as m}from"./Space.5f8f31c2.js";import{N as r}from"./Button.e9fe7712.js";import{N as p}from"./Icon.5554db87.js";import{N as G}from"./Alert.7ebad545.js";import{N as H}from"./LayoutContent.6e93978a.js";import{N as B,a as E}from"./Popconfirm.a15d8273.js";import{N as R}from"./Layout.e3230d26.js";import"./index.e02a7786.js";import"./light.9ebcab32.js";import"./Select.1f2bf2a9.js";import"./fade-in-scale-up.cssr.94a38d6f.js";import"./Tag.140f16c8.js";import"./ScrollBar.4563dd35.js";import"./light.07102f53.js";import"./light.ebb53e7b.js";import"./FadeInExpandTransition.dc8aaca6.js";import"./fade-in-height-expand.cssr.a2d3add7.js";import"./Warning.31316bfd.js";import"./_common.81364e7f.js";import"./RadioGroup.f1ded07e.js";import"./light.6037d8ef.js";import"./Dropdown.e376a1c0.js";import"./index.eadd8604.js";import"./ChevronRight.ef1e123d.js";import"./light.a0e740d6.js";import"./light.c1efdb8c.js";import"./Ellipsis.c78b651b.js";import"./Tooltip.bba23aaf.js";const V=n(" \u63CF\u8FF0 "),j=n(" \u89D2\u8272 "),K=n(" \u65B0\u589E "),O=n(" \u5220\u9664 "),Y=n(" \u5237\u65B0\u6570\u636E "),$=n(" \u67E5\u8BE2 "),F=n("\u91CD\u7F6E"),De={setup(J){const c=D();function b(a){c.info("\u4F60\u70B9\u51FB\u4E86\u786E\u5B9A")}function N(a){c.info("\u4F60\u70B9\u51FB\u4E86\u53D6\u6D88")}const k=[{type:"selection",disabled(a,i){return a.name==="Edward King 3"}},{title:"\u89D2\u8272",key:"role"},{title:"\u63CF\u8FF0",key:"desc"},{title:"\u5907\u6CE8",key:"remark"},{title:"\u64CD\u4F5C",key:"actions",width:"270",render(a){return l(m,null,{default:()=>[l(r,{tertiary:!0,size:"small"},{default:()=>"\u8BE6\u60C5",icon:()=>l(T)}),l(r,{tertiary:!0,size:"small"},{default:()=>"\u7F16\u8F91",icon:()=>l(A)}),l(E,{onPositiveClick:()=>b(),onNegativeClick:()=>N()},{default:()=>"\u4F60\u786E\u5B9A\u4EE5\u53CA\u80AF\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F",trigger:()=>l(r,{tertiary:!0,size:"small",type:"error"},{default:()=>"\u5220\u9664",icon:()=>l(f)})})]})}}],u=g([]),x=Array.apply(null,{length:200}).map((a,i)=>({key:i,role:`\u89D2\u8272 - ${i}`,desc:"\u6211\u662F\u63CF\u8FF0",remark:"\u5907\u6CE8"+i})),v=I({pageSize:20,showQuickJumper:!0,showSizePicker:!0,pageSizes:[20,50,100],prefix({itemCount:a}){return`\u603B\u6570 ${a}`}});return g([{label:"Everybody's Got Something to Hide Except Me and My Monkey",value:"song0",disabled:!0},{label:"Drive My Car",value:"song1"},{label:"Norwegian Wood",value:"song2"},{label:"You Won't See",value:"song3",disabled:!0},{label:"Nowhere Man",value:"song4"},{label:"Think For Yourself",value:"song5"},{label:"The Word",value:"song6"},{label:"Michelle",value:"song7",disabled:!0},{label:"What goes on",value:"song8"},{label:"Girl",value:"song9"},{label:"I'm looking through you",value:"song10"},{label:"In My Life",value:"song11"},{label:"Wait",value:"song12"}]),(a,i)=>(h(),y(S,null,{default:o(()=>[t(e(R),{style:{height:"100%"},"content-style":"display:flex;flex-direction: column"},{default:o(()=>[t(e(W),null,{default:o(()=>[t(e(d),{"x-gap":"12",cols:4,style:{padding:"5px","box-sizing":"border-box"}},{default:o(()=>[t(e(s),null,{default:o(()=>[t(e(_),null,{prefix:o(()=>[V]),_:1})]),_:1}),t(e(s),null,{default:o(()=>[t(e(_),null,{prefix:o(()=>[j]),_:1})]),_:1})]),_:1}),t(e(d),{"x-gap":"12",cols:2,style:{padding:"5px","box-sizing":"border-box"}},{default:o(()=>[t(e(s),null,{default:o(()=>[t(e(m),null,{default:o(()=>[t(e(r),{type:"info"},{icon:o(()=>[t(e(p),{component:e(z)},null,8,["component"])]),default:o(()=>[K]),_:1}),t(e(r),{type:"error"},{icon:o(()=>[t(e(p),{component:e(f)},null,8,["component"])]),default:o(()=>[O]),_:1})]),_:1})]),_:1}),t(e(s),null,{default:o(()=>[t(e(m),{justify:"end"},{default:o(()=>[t(e(r),{type:"info"},{icon:o(()=>[t(e(p),{component:e(C)},null,8,["component"])]),default:o(()=>[Y]),_:1}),t(e(r),{type:"info"},{icon:o(()=>[t(e(p),{component:e(M)},null,8,["component"])]),default:o(()=>[$]),_:1}),t(e(r),null,{default:o(()=>[F]),_:1})]),_:1})]),_:1})]),_:1}),u.value.length>0?(h(),y(e(d),{key:0,"x-gap":"12",cols:1,style:{padding:"5px","box-sizing":"border-box"}},{default:o(()=>[t(e(s),null,{default:o(()=>[t(e(G),{type:"info"},{default:o(()=>[n(" \u4F60\u9009\u4E2D\u4E86 "+L(u.value.length)+" \u884C ",1)]),_:1})]),_:1})]),_:1})):P("",!0)]),_:1}),t(e(H),null,{default:o(()=>[t(e(B),{"checked-row-keys":u.value,"onUpdate:checked-row-keys":i[0]||(i[0]=w=>u.value=w),"flex-height":"",columns:k,striped:"",data:e(x),style:{height:"100%",padding:"5px","box-sizing":"border-box"},pagination:e(v)},null,8,["checked-row-keys","data","pagination"])]),_:1})]),_:1})]),_:1}))}};export{De as default};
