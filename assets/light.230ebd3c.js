import{o as t,p as i}from"./Space.5f8f31c2.js";import{s as S}from"./Icon.5554db87.js";import{b as L}from"./light.ebb53e7b.js";import{c as u}from"./light.87dd3328.js";var v={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"18px",closeMargin:"22px 28px 0 0",closeMarginIconTop:"12px 18px 0 0"};const M=o=>{const{textColor1:r,textColor2:e,modalColor:l,closeColor:n,closeColorHover:s,closeColorPressed:a,infoColor:c,successColor:p,warningColor:x,errorColor:g,primaryColor:C,dividerColor:m,borderRadius:d,fontWeightStrong:h,lineHeight:f,fontSize:b}=o;return Object.assign(Object.assign({},v),{fontSize:b,lineHeight:f,border:`1px solid ${m}`,titleTextColor:r,textColor:e,color:l,closeColor:n,closeColorHover:s,closeColorPressed:a,iconColor:C,iconColorInfo:c,iconColorSuccess:p,iconColorWarning:x,iconColorError:g,borderRadius:d,titleFontWeight:h})},z=t({name:"Dialog",common:i,peers:{Button:L},self:M});var T=z;const $=o=>{const{modalColor:r,textColor2:e,boxShadow3:l}=o;return{color:r,textColor:e,boxShadow:l}},w=t({name:"Modal",common:i,peers:{Scrollbar:S,Dialog:T,Card:u},self:$});var D=w;export{$ as a,T as d,D as m,M as s};
