import{o as s,p as g,y as v}from"./Space.5f8f31c2.js";import{i as C}from"./light.9ebcab32.js";import{b as h}from"./light.ebb53e7b.js";import{s as P}from"./Icon.5554db87.js";var u={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"};const T=d=>{const{popoverColor:e,textColor2:a,primaryColor:o,hoverColor:n,dividerColor:i,opacityDisabled:r,boxShadow2:p,borderRadius:t,iconColor:c,iconColorDisabled:x}=d;return Object.assign(Object.assign({},u),{panelColor:e,panelBoxShadow:p,panelDividerColor:i,itemTextColor:a,itemTextColorActive:o,itemColorHover:n,itemOpacityDisabled:r,itemBorderRadius:t,borderRadius:t,iconColor:c,iconColorDisabled:x})},f=s({name:"TimePicker",common:g,peers:{Scrollbar:P,Button:h,Input:C},self:T});var L=f,S={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0"};const R=d=>{const{hoverColor:e,fontSize:a,textColor2:o,textColorDisabled:n,popoverColor:i,primaryColor:r,borderRadiusSmall:p,iconColor:t,iconColorDisabled:c,textColor1:x,dividerColor:l,boxShadow2:D,borderRadius:m,fontWeightStrong:b}=d;return Object.assign(Object.assign({},S),{itemFontSize:a,calendarDaysFontSize:a,calendarTitleFontSize:a,itemTextColor:o,itemTextColorDisabled:n,itemTextColorActive:i,itemTextColorCurrent:r,itemColorIncluded:v(r,{alpha:.1}),itemColorHover:e,itemColorDisabled:e,itemColorActive:r,itemBorderRadius:p,panelColor:i,panelTextColor:o,arrowColor:t,calendarTitleTextColor:x,calendarTitleColorHover:e,calendarDaysTextColor:o,panelHeaderDividerColor:l,calendarDaysDividerColor:l,calendarDividerColor:l,panelActionDividerColor:l,panelBoxShadow:D,panelBorderRadius:m,calendarTitleFontWeight:b,scrollItemBorderRadius:m,iconColor:t,iconColorDisabled:c})},H=s({name:"DatePicker",common:g,peers:{Input:C,Button:h,TimePicker:L,Scrollbar:P},self:R});var w=H;export{R as a,w as d,T as s,L as t};
