import{b as p,d as y,_ as u,w as c}from"./base.SzWP_EiS.js";import{f,u as m,o as r,c as t,n as o,j as s,r as d,d as l,t as n,q as i,a as h,k as v}from"./entry.VGLBRfk-.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup(g){const a=m("card");return(e,$)=>(r(),t("div",{class:o([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(s(a).e("header"))},[d(e.$slots,"header",{},()=>[l(n(e.header),1)])],2)):i("v-if",!0),h("div",{class:o([s(a).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(s(a).e("footer"))},[d(e.$slots,"footer",{},()=>[l(n(e.footer),1)])],2)):i("v-if",!0)],2))}});var w=u(C,[["__file","card.vue"]]);const N=c(w);export{N as E};
