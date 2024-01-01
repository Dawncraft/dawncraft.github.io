import{T as B}from"./components.FNtWaweb.js";import N from"./Icon.m2fyG2rp.js";import{f as w,u as k,g as z,h as M,r as v,i as Q,o as s,c as a,a as e,n as r,j as n,k as D,l as b,w as _,m as F,q as d,t as c,F as f,s as x,b as y,v as g,d as h,x as P}from"./entry.VGLBRfk-.js";import{E as V}from"./el-card.CcAhuz9o.js";import{i as K,E as X}from"./index.FhqI1cGR.js";import{b as A,_ as L,w as W,a as G}from"./base.SzWP_EiS.js";import"./vue.f36acd1f.p9cEaaxm.js";import"./index.hPcBRl07.js";import"./index.XjgyyoPU.js";const H=w({name:"ElTimeline",setup(i,{slots:l}){const t=k("timeline");return z("timeline",l),()=>M("ul",{class:[t.b()]},[v(l,"default")])}}),R=A({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:K},hollow:{type:Boolean,default:!1}}),J=w({name:"ElTimelineItem"}),Y=w({...J,props:R,setup(i){const l=i,t=k("timeline-item"),u=Q(()=>[t.e("node"),t.em("node",l.size||""),t.em("node",l.type||""),t.is("hollow",l.hollow)]);return(o,T)=>(s(),a("li",{class:r([n(t).b(),{[n(t).e("center")]:o.center}])},[e("div",{class:r(n(t).e("tail"))},null,2),o.$slots.dot?d("v-if",!0):(s(),a("div",{key:0,class:r(n(u)),style:D({backgroundColor:o.color})},[o.icon?(s(),b(n(X),{key:0,class:r(n(t).e("icon"))},{default:_(()=>[(s(),b(F(o.icon)))]),_:1},8,["class"])):d("v-if",!0)],6)),o.$slots.dot?(s(),a("div",{key:1,class:r(n(t).e("dot"))},[v(o.$slots,"dot")],2)):d("v-if",!0),e("div",{class:r(n(t).e("wrapper"))},[!o.hideTimestamp&&o.placement==="top"?(s(),a("div",{key:0,class:r([n(t).e("timestamp"),n(t).is("top")])},c(o.timestamp),3)):d("v-if",!0),e("div",{class:r(n(t).e("content"))},[v(o.$slots,"default")],2),!o.hideTimestamp&&o.placement==="bottom"?(s(),a("div",{key:1,class:r([n(t).e("timestamp"),n(t).is("bottom")])},c(o.timestamp),3)):d("v-if",!0)],2)],2))}});var $=L(Y,[["__file","timeline-item.vue"]]);const Z=W(H,{TimelineItem:$}),O=G($),U={class:"overflow-hidden"},ee={class:"flex flex-col items-center h-full"},te=["src"],se={class:"w-full mt-4 text-center"},oe={class:"text-lg font-medium text-gray-900"},ne={class:"mt-1 text-gray-600"},ae={class:"mt-3"},ie={class:"inline-flex mt-4"},le=["href"],re={__name:"MemberCard",props:["member"],setup(i){return(l,t)=>{const u=N;return s(),a("div",U,[e("div",ee,[e("img",{class:"w-36 object-cover object-center aspect-square rounded-full",src:i.member.avatar,alt:"member"},null,8,te),e("div",se,[e("h2",oe,c(i.member.name),1),e("h3",ne,c(i.member.role),1),e("p",ae,c(i.member.introduction),1),e("span",ie,[(s(!0),a(f,null,x(i.member.socialMedia,o=>(s(),a("a",{class:"mx-1.5 text-gray-500",href:o.link,target:"_blank"},[y(u,{name:o.icon,size:"20"},null,8,["name"])],8,le))),256))])])])])}}},ce=re,me={class:"overflow-hidden"},de={class:"flex items-center h-full p-4 border border-gray-200 rounded-lg"},ue=["src"],pe={class:"flex-grow"},_e={class:"text-gray-900 font-medium"},fe={class:"text-gray-500"},he={__name:"ContributorCard",props:["contributor"],setup(i){return(l,t)=>(s(),a("div",me,[e("div",de,[e("img",{alt:"team",class:"w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4",src:i.contributor.avatar},null,8,ue),e("div",pe,[e("h2",_e,c(i.contributor.name),1),e("p",fe,c(i.contributor.role),1)])])]))}},be=he,ge={class:"min-h-screen pt-16 divide-y divide-gray-200 dark:divide-gray-700"},xe=e("section",{class:"my-container py-16"},[e("h1",{class:"text-2xl font-medium text-center text-gray-900"},"关于我们"),e("p",{class:"mt-4 text-base leading-relaxed text-center text-gray-600"},[h(" 这里是曙光工艺工作室，一个怀揣梦想，充满生机的游戏工作室。 "),e("br"),h(" 工作室主要制作与 Minecraft（我的世界）相关的项目，目前也在开发自己的游戏，未来还计划开发游戏平台。 "),e("br"),h(" 除了游戏相关的项目，我们也有物联网，聊天机器人以及动画制作等项目正在进行中。 "),e("br"),h(" 无论是新手还是大神，我们都诚挚地欢迎您的加入！")])],-1),ye={class:"my-container py-16"},ve=e("h1",{class:"text-2xl font-medium text-center text-gray-900"},"成员",-1),we=e("p",{class:"mt-4 text-base leading-relaxed text-center text-gray-600"},"工作室现有成员若干人，涵盖游戏策划、美工、程序等各个方面",-1),ke={class:"flex flex-wrap justify-center -m-4 mt-10"},$e={class:"flex flex-wrap -m-2 mt-10"},Te={class:"my-container py-16"},Ce=e("h1",{class:"text-2xl font-medium text-center text-gray-900"},"大事记",-1),Ee={class:"text-lg font-medium text-gray-900"},je={key:0,class:"mt-1 text-base leading-relaxed text-gray-600"},Se=P('<section class="my-container py-16"><h1 class="text-2xl font-medium text-center text-gray-900">加入我们</h1><div class="flex flex-col items-start mx-auto mt-10 sm:flex-row sm:items-center lg:w-2/3"><p class="flex-grow text-base font-medium text-gray-900 sm:pr-16">对我们感兴趣？立即加入我们！<br>QQ 交流群：287307326</p><a class="flex-shrink-0 px-8 py-2 text-lg text-white bg-blue-500 rounded border-0 hover:bg-blue-600" href="https://qm.qq.com/cgi-bin/qm/qr?k=kx3L2kPkrXnAnS7C324Y1MwXbBSIQFCK&amp;jump_from=webapi&amp;authKey=1Hfgo8GyAQkzEqTlhP7DwDur7QRkglXBK8+g9QRfF1b5LXTdGEbF2ZjMh4NopH/c" target="_blank">加入群聊</a></div></section>',1),Pe={__name:"about",setup(i){const l=g([{avatar:"/images/qingchenw.jpg",name:"QingChenW",role:"程序",introduction:"全栈工程师，目前致力于嵌入式及 Android 开发",socialMedia:[{icon:"fa6-regular:envelope",link:"mailto:wc@mail.dawncraft.cc"},{icon:"fa6-brands:bilibili",link:"https://space.bilibili.com/16030332"},{icon:"fa6-brands:github",link:"https://github.com/DawningW"}],homepage:"https://dawncraft.cc"},{avatar:"/images/jimmy.jpg",name:"Jimmy",role:"游戏策划",introduction:"《战争冒险》企划发起人",socialMedia:[{icon:"fa6-brands:bilibili",link:"https://space.bilibili.com/567731424"}],homepage:"#"},{avatar:"https://dummyimage.com/256x256",name:"虚位以待",role:"空缺",introduction:"期待您的加入",socialMedia:[],homepage:"#"}]),t=g([{avatar:"https://dummyimage.com/80x80",name:"heheze",role:"测试"},{avatar:"https://dummyimage.com/80x80",name:"Wazo",role:"测试"},{avatar:"https://dummyimage.com/80x80",name:"4561789",role:"吉祥物"}]);g([]);const u=g([{date:"2015/8/22",title:"工作室成立",content:""},{date:"2016/07/19",title:"工作室官网上线",content:""},{date:"2021/03/28",title:"博客上线",content:""},{date:"2022/09/30",title:"《战争冒险》序章发布",content:""},{date:"2023/04/18",title:"全新现代化官网上线",content:""}]);return(o,T)=>{const C=B,E=ce,j=be,S=V,I=O,q=Z;return s(),a(f,null,[y(C,null,{default:_(()=>[h("关于我们")]),_:1}),e("main",ge,[xe,e("section",ye,[ve,we,e("div",ke,[(s(!0),a(f,null,x(n(l),(m,p)=>(s(),b(E,{key:p,class:"p-4 sm:w-1/2 md:w-1/3",member:m},null,8,["member"]))),128))]),e("div",$e,[(s(!0),a(f,null,x(n(t),(m,p)=>(s(),b(j,{key:p,class:"w-1/2 p-2 md:w-1/3 lg:w-1/4",contributor:m},null,8,["contributor"]))),128))])]),e("section",Te,[Ce,y(q,{class:"max-w-xl !mx-auto !mt-10"},{default:_(()=>[(s(!0),a(f,null,x(n(u),(m,p)=>(s(),b(I,{key:p,placement:"top",timestamp:m.date},{default:_(()=>[y(S,null,{default:_(()=>[e("h2",Ee,c(m.title),1),m.content?(s(),a("p",je,c(m.content),1)):d("",!0)]),_:2},1024)]),_:2},1032,["timestamp"]))),128))]),_:1})]),Se])],64)}}};export{Pe as default};
