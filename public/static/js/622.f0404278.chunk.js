"use strict";(self.webpackChunkreact_e_shop=self.webpackChunkreact_e_shop||[]).push([[622],{93622:function(e,n,r){r.r(n),r.d(n,{Login:function(){return g}});var t=r(29439),a=r(29529),s=r(38999),o=r(16661),i=r(91604),u=r(61179),c=r(14692),l=r(71234),d=r(33855),p=r(65857),f=r(72791),m=r(81225),h=r(80184),g=function(){var e=(0,d.v9)((function(e){return e.auth.isLoggedIn})),n=(0,d.v9)((function(e){return e.message.message})),r=(0,f.useState)(!1),g=(0,t.Z)(r,2),v=g[0],x=g[1],Z=(0,d.I0)();(0,f.useEffect)((function(){e&&Z((0,m.p)("dashboard"))}),[e,Z]);return(0,h.jsx)(c.Z,{spinning:v,children:(0,h.jsx)(o._Y,{hashed:!1,children:(0,h.jsx)("div",{className:"bg-white mt-16",children:(0,h.jsx)(i.U,{title:"SIGN IN",subTitle:"Sign-in with your e-shop admin account.",submitter:{searchConfig:{submitText:"Sign In"}},onFinish:function(e){x(!0),Z((0,p.x)(e)).then((function(){x(!1),Z((0,m.p)("dashboard"))})).catch((function(){x(!1)}))},children:(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(l.Z,{message:n,type:"error",className:"my-2",showIcon:!0}),(0,h.jsx)(u.Z,{name:"name",fieldProps:{size:"large",prefix:(0,h.jsx)(a.Z,{className:"prefixIcon"})},placeholder:"Input user name",rules:[{required:!0,message:"This field is required!"}]}),(0,h.jsx)(u.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,h.jsx)(s.Z,{className:"prefixIcon"})},placeholder:"Input password",rules:[{required:!0,message:"This field is required"}]})]})})})})})};n.default=g},65857:function(e,n,r){r.d(n,{x:function(){return c},k:function(){return l}});var t=r(4942),a=r(1413),s=r(6803),o=r(31243),i=r(84635),u={login:function(e){return o.Z.post(i.Z+"login",e).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user"),localStorage.removeItem("persist:root")}},c=function(e,n){return function(r){return u.login(e,n).then((function(e){var n={};1===e.user.level_id&&(n={level:{view:1,add:1,edit:1,del:1}}),e.user.role.map((function(e){return n=(0,a.Z)((0,a.Z)({},n),{},(0,t.Z)({},e.page,(0,a.Z)((0,a.Z)({},n[e.page]),{},(0,t.Z)({},e.operation,e.permission))))}));var o={id:e.user.id,name:e.user.name,level:e.user.level_id,permission:n,parent:e.user.parent,token:e.access_token};return localStorage.setItem("token",e.access_token),r({type:s.XP,payload:{user:o}}),Promise.resolve()}),(function(e){var n="";switch(e.code){case"ERR_NETWORK":n="Network problem.";break;case"ERR_BAD_REQUEST":n=401===e.response.data.status?"User name or password is incorrect.":"Unknown error. Please contact admin.";break;default:n="Unknown error. Please contact admin."}return r({type:s.Qj}),r({type:s.Nd,payload:n}),Promise.reject()}))}},l=function(){return function(e){u.logout(),localStorage.clear(),e({type:s.Nv}),e({type:s.LD,payload:{name:"auth/login",param:null}})}}},81225:function(e,n,r){r.d(n,{p:function(){return a}});var t=r(6803),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:t.LD,payload:{name:e,param:n}}}},84635:function(e,n){n.Z="http://45.87.154.182/"}}]);
//# sourceMappingURL=622.f0404278.chunk.js.map