import{T as N}from"./components.FNtWaweb.js";import{_ as U}from"./nuxt-link.cftfJ_Uw.js";import{u as q}from"./use-api.KTCvbQcm.js";import{_ as O,z as j,A as E,v as m,B as z,o as x,c as g,b as c,w as I,d as _,a as e,n as w,j as s,C as y,D as V,F as C,t as A,q as S,E as D,p as L,e as R}from"./entry.VGLBRfk-.js";import"./vue.f36acd1f.p9cEaaxm.js";import"./index.q7pdzPxW.js";import"./index.XjgyyoPU.js";const a=v=>(L("data-v-dde2dd9e"),v=v(),R(),v),G={class:"form-background"},H={class:"form"},J=a(()=>e("h1",{class:"form-title text-center"},"忘记密码",-1)),K=a(()=>e("span",{class:"form-input-label"},"邮箱",-1)),M=a(()=>e("span",{class:"form-input-focus"},null,-1)),Q=a(()=>e("span",{class:"form-input-label"},"验证码",-1)),W=a(()=>e("span",{class:"form-input-focus"},null,-1)),X=["disabled"],Y=a(()=>e("span",{class:"form-input-label"},"密码",-1)),Z=a(()=>e("span",{class:"form-input-focus"},null,-1)),$=a(()=>e("span",{class:"form-input-label"},"重复密码",-1)),ee=a(()=>e("span",{class:"form-input-focus"},null,-1)),se={class:"form-text mt-12 text-center"},te={__name:"forget",setup(v){const k=q(),T=j(),p=E();let l=m(""),r=m(""),n=m(""),f=m(""),P=m(!1),d=m(0),u=null;z(()=>{u&&(clearInterval(u),u=null)});function B(){T.validate().then(({valid:h,results:t,errors:i})=>{if(!h){p.error(Object.values(i)[0]);return}k("/forgetPassword",{method:"POST",body:{email:l.value,newPassword:n.value,verifyCode:r.value}}).then(b=>{b.code===0?(p.success("您已成功重置密码！即将跳转至登录界面"),D("/user/login")):p.error("重置密码失败！"+b.msg)})})}function F(){T.validateField("email").then(({valid:h,errors:t})=>{if(!h){p.error(Object.values(t)[0]);return}k("/sendVerifyCode",{method:"POST",body:{type:3,email:l.value}}).then(i=>{i.code===0?(P.value=!0,d.value=60,u=setInterval(()=>{d.value>0?d.value--:(clearInterval(u),u=null)},1e3)):p.error("验证码发送失败！"+i.msg)})})}return(h,t)=>{const i=N,b=U;return x(),g(C,null,[c(i,null,{default:I(()=>[_("找回密码")]),_:1}),e("div",G,[e("form",H,[J,e("div",{class:w(["form-input mt-12",{"has-value":s(l)}])},[K,c(s(V),{class:"form-input-text",type:"text",name:"email",placeholder:"登录账号所需的邮箱",modelValue:s(l),"onUpdate:modelValue":t[0]||(t[0]=o=>y(l)?l.value=o:l=o),rules:"required|email"},null,8,["modelValue"]),M],2),e("div",{class:w(["form-input verify mt-4",{"has-value":s(r)}])},[Q,c(s(V),{class:"form-input-text",type:"text",name:"verifyCode",placeholder:"发送至邮箱的验证码",modelValue:s(r),"onUpdate:modelValue":t[1]||(t[1]=o=>y(r)?r.value=o:r=o),rules:"required|digits:6"},null,8,["modelValue"]),W,e("button",{class:"form-button",type:"button",disabled:s(d)>0,onClick:F},[_(" 发送验证码 "),s(d)?(x(),g(C,{key:0},[_(" ("+A(s(d))+" 秒)",1)],64)):S("",!0)],8,X)],2),s(P)?(x(),g(C,{key:0},[e("div",{class:w(["form-input mt-4",{"has-value":s(n)}])},[Y,c(s(V),{class:"form-input-text",type:"password",name:"password",placeholder:"6-20 位，至少包含数字，字母和符号中的两种",modelValue:s(n),"onUpdate:modelValue":t[2]||(t[2]=o=>y(n)?n.value=o:n=o),rules:"required|password|confirmed:@repeatedPassword"},null,8,["modelValue"]),Z],2),e("div",{class:w(["form-input mt-4",{"has-value":s(f)}])},[$,c(s(V),{class:"form-input-text",type:"password",name:"repeatedPassword",placeholder:"请再输入一次密码",modelValue:s(f),"onUpdate:modelValue":t[3]||(t[3]=o=>y(f)?f.value=o:f=o)},null,8,["modelValue"]),ee],2),e("button",{class:"form-button mt-6",type:"button",onClick:B},"重置密码")],64)):S("",!0),e("p",se,[_(" 想起密码了？ "),c(b,{class:"form-link",to:"/user/login"},{default:I(()=>[_("点此登录")]),_:1})])])])],64)}}},ie=O(te,[["__scopeId","data-v-dde2dd9e"]]);export{ie as default};