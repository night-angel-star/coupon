"use strict";(self.webpackChunkreact_e_shop=self.webpackChunkreact_e_shop||[]).push([[489],{6793:function(e,t,n){var r=n(29439),a=n(67987),o=n(31773),i=n(66818),d=n(86005),c=n(2641),s=n(11730),u=n(33855),l=n(71755),m=n(80184);t.Z=function(e){var t=e.fields,n=(0,u.I0)(),p=""!==(0,u.v9)((function(e){return e.search.key})),f=a.Z.useForm(),y=(0,r.Z)(f,1)[0];return(0,m.jsx)(a.Z,{onFinish:function(e){p?(n((0,l.D)()),y.resetFields()):n((0,l.T)(e))},form:y,children:(0,m.jsxs)(o.Z,{children:[(0,m.jsx)(a.Z.Item,{className:"my-0",name:"key",rules:[{required:!0,message:"Please select search key!"}],children:(0,m.jsx)(i.Z,{style:{width:120},options:t.map((function(e){return{value:e,label:e}})),placeholder:"Select Column"})}),(0,m.jsx)(a.Z.Item,{className:"my-0",name:"value",rules:[{required:!0,message:"Please input search str!"}],children:(0,m.jsx)(d.Z,{placeholder:"Input Search Str"})}),(0,m.jsx)(a.Z.Item,{className:"my-0",children:(0,m.jsx)(c.ZP,{type:p?"default":"primary",shape:"circle",icon:(0,m.jsx)(s.Z,{}),htmlType:"submit"})})]})})}},81529:function(e,t,n){var r=n(20952),a=n(80184),o={level:[{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"}],member:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"},{title:"Level",dataIndex:"level",key:"level"},{title:"Parent",dataIndex:"parent",key:"parent"}],goods:[{title:"No",dataIndex:"no",key:"no",fixed:"left"},{title:"Name",dataIndex:"name",key:"name",fixed:"left"},{title:"Nvid",dataIndex:"nvid",key:"nvid"},{title:"Keyword1",dataIndex:"keyword1",key:"keyword1"},{title:"Keyword2",dataIndex:"keyword2",key:"keyword2"},{title:"Keyword3",dataIndex:"keyword3",key:"keyword3"}],proxy:[{title:"No",dataIndex:"no",key:"no"},{title:"IP",dataIndex:"ip",key:"ip"},{title:"Port",dataIndex:"port",key:"port"},{title:"Username",dataIndex:"user",key:"user"},{title:"Password",dataIndex:"password",key:"password"}],browser:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"},{title:"Agent",dataIndex:"agent",key:"agent"}],login:[{title:"No",dataIndex:"no",key:"no"},{title:"Username",dataIndex:"user",key:"user"},{title:"Password",dataIndex:"password",key:"password"}],machine:[{title:"No",dataIndex:"no",key:"no"},{title:"IP",dataIndex:"ip",key:"ip"},{title:"Type",dataIndex:"type",key:"type"},{title:"Machine ID",dataIndex:"machine_id",key:"machine_id"},{title:"Last Access",dataIndex:"last_access",key:"last_access"}],surfing:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"},{title:"URL",dataIndex:"url",key:"url",render:function(e){return(0,a.jsx)("a",{href:e,children:e})}}],history:[{title:"No",dataIndex:"no",key:"no"},{title:"Time",dataIndex:"time",key:"time"},{title:"Machine",dataIndex:"machine",key:"machine"},{title:"Action",dataIndex:"action",key:"action",render:function(e){var t=e.toLowerCase();return t.includes("fail")||t.includes("started")?(0,a.jsx)("div",{style:{color:"red"},children:e}):t.includes("end")?(0,a.jsx)("div",{style:{color:"green"},children:e}):(0,a.jsx)("div",{children:e})}}],log:[{title:"No",dataIndex:"no",key:"no"},{title:"Time",dataIndex:"time",key:"time"},{title:"User",dataIndex:"user",key:"user"},{title:"Action",dataIndex:"action",key:"action"}],job:[{title:"No",dataIndex:"no",key:"no",fixed:"left"},{title:"Name",dataIndex:"name",key:"name",fixed:"left"},{title:"login",dataIndex:"login_user",key:"login_user",fixed:"left"},{title:"machine",dataIndex:"machine_id",key:"machine_id",fixed:"left"},{title:"proxy",dataIndex:"proxy_ip",key:"proxy_ip"},{title:"browser",dataIndex:"browser_name",key:"browser_name"},{title:"Goods",dataIndex:"goods",key:"goods",render:function(e){return e&&e.map((function(e,t){return(0,a.jsx)(r.Z,{children:e.name},t)}))}},{title:"Surfing",dataIndex:"surfing",key:"surfing",render:function(e){return e&&e.map((function(e,t){return(0,a.jsx)(r.Z,{children:e.name},t)}))}}],job_select:[{title:"No",dataIndex:"no",key:"no",fixed:"left"},{title:"Name",dataIndex:"name",key:"name",fixed:"left"}],coupon_user:[{title:"No",dataIndex:"no",key:"no"},{title:"Username",dataIndex:"user",key:"user"},{title:"Password",dataIndex:"password",key:"password"},{title:"Nv Username",dataIndex:"nv_user",key:"nv_user"},{title:"Nv Password",dataIndex:"nv_password",key:"nv_password"},{title:"Job",dataIndex:"job_name",key:"job_name"},{title:"Time",dataIndex:"time",key:"time"}],coupon_category:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"}],coupon:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"},{title:"Description",dataIndex:"desc",key:"desc"},{title:"Category",dataIndex:"category",key:"category"},{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Price",dataIndex:"price",key:"price"},{title:"Discount(%)",dataIndex:"discount",key:"discount"}],brand:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"}]};t.Z=o},65857:function(e,t,n){n.d(t,{x:function(){return s},k:function(){return u}});var r=n(4942),a=n(1413),o=n(6803),i=n(31243),d=n(84635),c={login:function(e){return i.Z.post(d.Z+"login",e).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user"),localStorage.removeItem("persist:root")}},s=function(e,t){return function(n){return c.login(e,t).then((function(e){var t={};1===e.user.level_id&&(t={level:{view:1,add:1,edit:1,del:1}}),e.user.role.map((function(e){return t=(0,a.Z)((0,a.Z)({},t),{},(0,r.Z)({},e.page,(0,a.Z)((0,a.Z)({},t[e.page]),{},(0,r.Z)({},e.operation,e.permission))))}));var i={id:e.user.id,name:e.user.name,level:e.user.level_id,permission:t,parent:e.user.parent,token:e.access_token};return localStorage.setItem("token",e.access_token),n({type:o.XP,payload:{user:i}}),Promise.resolve()}),(function(e){var t="";switch(e.code){case"ERR_NETWORK":t="Network problem.";break;case"ERR_BAD_REQUEST":t=401===e.response.data.status?"User name or password is incorrect.":"Unknown error. Please contact admin.";break;default:t="Unknown error. Please contact admin."}return n({type:o.Qj}),n({type:o.Nd,payload:t}),Promise.reject()}))}},u=function(){return function(e){c.logout(),localStorage.clear(),e({type:o.Nv}),e({type:o.LD,payload:{name:"auth/login",param:null}})}}},53192:function(e,t,n){n.d(t,{Id:function(){return s},NU:function(){return u},Nk:function(){return l},Yu:function(){return c}});var r=n(6803),a=n(17992),o=n(57960),i=n(10297),d=n(65857),c=function(e,t){return function(n){return a.Z.getList(e,t).then((function(t){var a=(0,i.Z)(t.result,e);return n({type:r.mn,payload:a}),Promise.resolve()}),(function(e){return 401===e.response.data.status?(o.ZP.error("Unauthorized"),n((0,d.k)())):(console.log(e),o.ZP.error("Get Data Exception")),Promise.reject()}))}},s=function(e,t,n){return function(r){return a.Z.add(e,t,n).then((function(t){if(201!==t.status&&200!==t.status)return o.ZP.error("Add Data Problem."),Promise.reject("Server problem.");r(c(e)).then((function(){return Promise.resolve()})).catch((function(e){return o.ZP.error("Get Data Problem."),console.log(e),Promise.reject()}))}),(function(e){return 401===e.response.data.status?(o.ZP.error("Unauthorized"),r((0,d.k)())):(console.log(e),o.ZP.error("Add Data Exception")),Promise.reject(e)}))}},u=function(e,t){return function(n){return a.Z.del(e,t).then((function(t){if(201!==t.status)return Promise.reject();n(c(e)).then((function(){return Promise.resolve()})).catch((function(){return Promise.reject()}))}),(function(e){return Promise.reject(e)}))}},l=function(){return{type:r.hU}}},16243:function(e,t,n){n.d(t,{c:function(){return o},p:function(){return a}});var r=n(6803),a=function(e){return{type:r.iA,payload:e}},o=function(e){return{type:r.i_,payload:e}}},71755:function(e,t,n){n.d(t,{D:function(){return o},T:function(){return a}});var r=n(6803),a=function(e){return{type:r.YA,payload:e}},o=function(){return{type:r.$S}}},84635:function(e,t){t.Z="http://45.142.215.75/"},17992:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(31243);function a(){var e=localStorage.getItem("token");return e?{Authorization:e}:{}}var o=n(57960),i=n(84635),d=n(65857),c=n(63237),s=n(6803),u=(0,c.Z)().store,l=function(e,t){return r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/edit",t,{headers:a()}).then((function(e){return e.data}))},m={getList:function(e,t){var n=i.Z+("login"===e?"nvlogin":e)+"/view";return t&&(n+=t),r.Z.get(n,{headers:a()}).then((function(e){return e.data}))},add:function(e,t,n){return n?l(e,t):r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/add",t,{headers:a()}).then((function(e){return e.data}))},edit:l,del:function(e,t){return r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/delete",t,{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Del Data Exception"))}))},getFamily:function(){return r.Z.post(i.Z+"member/family",{},{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getPermission:function(e){return r.Z.post(i.Z+"level/get",{id:e},{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getJobLogin:function(){return r.Z.post(i.Z+"job/getlogin",{},{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getCategory:function(){return r.Z.get(i.Z+"coupon_category/view",{headers:a()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getCategoryForParentSelect:function(e){return r.Z.post(i.Z+"coupon_category/getwillparent",{id:e},{headers:a()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getCategoryForCoupon:function(){return r.Z.get(i.Z+"coupon_category/getforcoupon",{headers:a()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getBrands:function(){return r.Z.get(i.Z+"brand/view",{headers:a()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},changeStatus:function(e){return r.Z.post(i.Z+"coupon_category/change_status",e,{headers:a()}).then((function(e){return console.log(e.data.result),u.dispatch({type:s.mn,payload:e.data.result}),e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},delUpload:function(e){return r.Z.post(i.Z+"file/delete",e,{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Del Data Exception"))}))},getAdverts:function(){return r.Z.get(i.Z+"file/getadverts",{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Del Data Exception"))}))},delAdvert:function(e){return r.Z.post(i.Z+"file/deleteadvert",e,{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),u.dispatch((0,d.k)())):(console.log(e),o.ZP.error("Del Data Exception"))}))}}},10297:function(e,t,n){var r=n(1413),a=n(93433);t.Z=function(e,t){switch(t){case"level":return e.reduce((function(e,t){return[].concat((0,a.Z)(e),[{id:t.id,name:t.name,key:t.id}])}),[]);case"member":return e.members.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[{no:n+1,id:t.id,name:t.name,level:t.level_name,parent:t.parent_name,level_id:t.level_id,parent_id:t.parent,key:t.id}])}),[]);case"goods":case"proxy":case"browser":case"login":case"coupon_user":case"machine":case"surfing":case"history":return e.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[(0,r.Z)({no:n+1,id:t.id,key:t.id},t)])}),[]);case"job":return e.jobs.reduce((function(e,t,n){var o,i;return[].concat((0,a.Z)(e),[(0,r.Z)({no:n+1,id:t.id,key:t.id,login_user:t.login?t.login.user:"",machine_id:t.machine?t.machine.machine_id:"",proxy_ip:null===(o=t.proxy)||void 0===o?void 0:o.ip,browser_name:null===(i=t.browser)||void 0===i?void 0:i.name},t)])}),[]);case"log":return e.member_loglist.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[(0,r.Z)({no:n+1,id:t.id,key:t.id,action:t.function_param,user:t.member_name,time:t.created_at},t)])}),[]);case"coupon":return e.couponsList.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[{no:n+1,id:t.id,name:t.name,category_id:t.category_id,brand_id:t.brand_id,category:t.category,brand:t.brand,desc:t.desc,price:t.price,discount:t.discount,image1:t.image1,image2:t.image2,image3:t.image3,status:t.status,key:t.id}])}),[]);case"coupon_category":return e.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[{id:t.id,name:t.name,image1:t.image1,image2:t.image2,image3:t.image3,status:t.status,parent_id:t.parent_id,key:t.key,children:t.children}])}),[]);case"brand":return e.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[{no:n+1,id:t.id,name:t.name,image1:t.image1,image2:t.image2,image3:t.image3,key:t.id}])}),[]);default:return e}}}}]);
//# sourceMappingURL=489.19a0fbe3.chunk.js.map