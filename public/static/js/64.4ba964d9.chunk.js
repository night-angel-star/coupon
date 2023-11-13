"use strict";(self.webpackChunkreact_e_shop=self.webpackChunkreact_e_shop||[]).push([[64],{66064:function(e,t,n){n.r(t),n.d(t,{CouponCategoryManage:function(){return b}});var r=n(1413),o=n(29439),a=n(72791),i=n(60573),c=n(69228),s=n(91082),u=n(21306),d=n(57960),l=n(66106),h=n(31773),p=n(2641),f=n(14692),g=n(66883),m=n(36795),Z=n(82464),y=n(79286),x=n(10430),v=n(16243),k=n(33855),P=n(53192),j=n(84635),_=n(80184),b=function(){var e=a.useState(!1),t=(0,o.Z)(e,2),n=t[0],b=t[1],w=(0,k.I0)(),C=(0,k.v9)((function(e){return e.auth.isLoggedIn?e.auth.user.level:{}})),D=(0,k.v9)((function(e){return e.auth.isLoggedIn?e.data.data:[]})),E=function(e){b(!0),w((0,P.Id)("coupon_category",(0,r.Z)((0,r.Z)({},e),{},{status:1-e.status}),!0)).then((function(){b(!1)}))},U=function(e){return(0,_.jsxs)("div",{style:{flex:1,justifyContent:"center",alignItems:"center"},children:[(0,_.jsx)("h2",{children:e.name}),(0,_.jsxs)("div",{children:[(0,_.jsx)(i.Z,{width:100,src:"".concat(j.Z,"uploads/").concat(e.image1),alt:e.image1}),e.image2&&(0,_.jsx)(i.Z,{width:100,src:"".concat(j.Z,"uploads/").concat(e.image2),alt:e.image2}),e.image3&&(0,_.jsx)(i.Z,{width:100,src:"".concat(j.Z,"uploads/").concat(e.image3),alt:e.image3})]})]})},z=function(e){w((0,v.p)({id:e,title:"Edit Coupon Category",show:!0}))},S=function(e){b(!0),w((0,P.NU)("coupon_category",{id:e})).then((function(){return b(!1)})).catch((function(){d.ZP.error("Problem"),b(!1)}))};a.useEffect((function(){b(!0),w((0,P.Yu)("coupon_category")),b(!1)}),[]);return(0,_.jsxs)("div",{children:[(0,_.jsx)(l.Z,{justify:"end",className:"p-2",children:(0,_.jsx)(h.Z,{children:1===C&&(0,_.jsx)(p.ZP,{type:"primary",icon:(0,_.jsx)(y.Z,{}),onClick:function(){w((0,v.p)({id:0,title:"Add Category",show:!0}))},children:"Add"})})}),(0,_.jsx)(f.Z,{spinning:n,children:(0,_.jsx)(g.Z,{showLine:!0,switcherIcon:(0,_.jsx)(x.Z,{}),onSelect:function(e,t){},treeData:function e(t){return t.map((function(t){return void 0!==t.children?t.children.length?(0,r.Z)((0,r.Z)({},t),{},{title:(0,_.jsxs)("span",{children:[(0,_.jsx)(c.Z,{placement:"rightBottom",content:U(t),trigger:"hover",children:(0,_.jsx)("span",{style:{color:t.status?"#333":"#999"},children:t.name})}),1===C&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m.Z,{className:"cursor-pointer",onClick:function(){return z(t)},style:{marginLeft:"20px"}}),(0,_.jsx)(s.Z,{placement:"left",title:"Sure to delete?",description:"All categories and goods below this category will be deleted.",onConfirm:function(){return S(t.key)},okText:"Yes",cancelText:"No",children:(0,_.jsx)(Z.Z,{twoToneColor:"#eb2f96",className:"cursor-pointer",style:{marginLeft:"20px"}})}),(0,_.jsx)(u.Z,{checkedChildren:"Enable",unCheckedChildren:"Disable",checked:t.status,style:{marginLeft:"20px"},onChange:function(){return E(t)}})]})]}),children:e(t.children)}):(0,r.Z)((0,r.Z)({},t),{},{title:(0,_.jsxs)("span",{children:[(0,_.jsx)(c.Z,{placement:"rightBottom",content:U(t),trigger:"hover",children:(0,_.jsx)("span",{style:{color:t.status?"#333":"#999"},children:t.name})}),1===C&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m.Z,{className:"cursor-pointer",onClick:function(){return z(t)},style:{marginLeft:"20px"}}),(0,_.jsx)(s.Z,{placement:"left",title:"Sure to delete?",description:"All categories and coupons below this category will be deleted.",onConfirm:function(){return S(t.key)},okText:"Yes",cancelText:"No",children:(0,_.jsx)(Z.Z,{twoToneColor:"#eb2f96",className:"cursor-pointer",style:{marginLeft:"20px"}})}),(0,_.jsx)(u.Z,{checkedChildren:"Enable",unCheckedChildren:"Disable",checked:t.status,style:{marginLeft:"20px"},onChange:function(){return E(t)}})]})]})}):{}}))}(D),style:{fontSize:"20px"}})})]})};t.default=b},65857:function(e,t,n){n.d(t,{x:function(){return u},k:function(){return d}});var r=n(4942),o=n(1413),a=n(6803),i=n(31243),c=n(84635),s={login:function(e){return i.Z.post(c.Z+"login",e).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user"),localStorage.removeItem("persist:root")}},u=function(e,t){return function(n){return s.login(e,t).then((function(e){var t={};1===e.user.level_id&&(t={level:{view:1,add:1,edit:1,del:1}}),e.user.role.map((function(e){return t=(0,o.Z)((0,o.Z)({},t),{},(0,r.Z)({},e.page,(0,o.Z)((0,o.Z)({},t[e.page]),{},(0,r.Z)({},e.operation,e.permission))))}));var i={id:e.user.id,name:e.user.name,level:e.user.level_id,permission:t,parent:e.user.parent,token:e.access_token};return localStorage.setItem("token",e.access_token),n({type:a.XP,payload:{user:i}}),Promise.resolve()}),(function(e){var t="";switch(e.code){case"ERR_NETWORK":t="Network problem.";break;case"ERR_BAD_REQUEST":t=401===e.response.data.status?"User name or password is incorrect.":"Unknown error. Please contact admin.";break;default:t="Unknown error. Please contact admin."}return n({type:a.Qj}),n({type:a.Nd,payload:t}),Promise.reject()}))}},d=function(){return function(e){s.logout(),localStorage.clear(),e({type:a.Nv}),e({type:a.LD,payload:{name:"auth/login",param:null}})}}},53192:function(e,t,n){n.d(t,{Id:function(){return u},NU:function(){return d},Nk:function(){return l},Yu:function(){return s}});var r=n(6803),o=n(17992),a=n(57960),i=n(10297),c=n(65857),s=function(e,t){return function(n){return o.Z.getList(e,t).then((function(t){var o=(0,i.Z)(t.result,e);return n({type:r.mn,payload:o}),Promise.resolve()}),(function(e){return 401===e.response.data.status?(a.ZP.error("Unauthorized"),n((0,c.k)())):(console.log(e),a.ZP.error("Get Data Exception")),Promise.reject()}))}},u=function(e,t,n){return function(r){return o.Z.add(e,t,n).then((function(t){if(201!==t.status&&200!==t.status)return a.ZP.error("Add Data Problem."),Promise.reject("Server problem.");r(s(e)).then((function(){return Promise.resolve()})).catch((function(e){return a.ZP.error("Get Data Problem."),console.log(e),Promise.reject()}))}),(function(e){return 401===e.response.data.status?(a.ZP.error("Unauthorized"),r((0,c.k)())):(console.log(e),a.ZP.error("Add Data Exception")),Promise.reject(e)}))}},d=function(e,t){return function(n){return o.Z.del(e,t).then((function(t){if(201!==t.status)return Promise.reject();n(s(e)).then((function(){return Promise.resolve()})).catch((function(){return Promise.reject()}))}),(function(e){return Promise.reject(e)}))}},l=function(){return{type:r.hU}}},16243:function(e,t,n){n.d(t,{c:function(){return a},p:function(){return o}});var r=n(6803),o=function(e){return{type:r.iA,payload:e}},a=function(e){return{type:r.i_,payload:e}}},84635:function(e,t){t.Z="http://45.142.215.75/"},17992:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(31243);function o(){var e=localStorage.getItem("token");return e?{Authorization:e}:{}}var a=n(57960),i=n(84635),c=n(65857),s=n(63237),u=n(6803),d=(0,s.Z)().store,l=function(e,t){return r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/edit",t,{headers:o()}).then((function(e){return e.data}))},h={getList:function(e,t){var n=i.Z+("login"===e?"nvlogin":e)+"/view";return t&&(n+=t),r.Z.get(n,{headers:o()}).then((function(e){return e.data}))},add:function(e,t,n){return n?l(e,t):r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/add",t,{headers:o()}).then((function(e){return e.data}))},edit:l,del:function(e,t){return r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/delete",t,{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Del Data Exception"))}))},getFamily:function(){return r.Z.post(i.Z+"member/family",{},{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getPermission:function(e){return r.Z.post(i.Z+"level/get",{id:e},{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getJobLogin:function(){return r.Z.post(i.Z+"job/getlogin",{},{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getCategory:function(){return r.Z.get(i.Z+"coupon_category/view",{headers:o()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getCategoryForParentSelect:function(e){return r.Z.post(i.Z+"coupon_category/getwillparent",{id:e},{headers:o()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getCategoryForCoupon:function(){return r.Z.get(i.Z+"coupon_category/getforcoupon",{headers:o()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getBrands:function(){return r.Z.get(i.Z+"brand/view",{headers:o()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},changeStatus:function(e){return r.Z.post(i.Z+"coupon_category/change_status",e,{headers:o()}).then((function(e){return console.log(e.data.result),d.dispatch({type:u.mn,payload:e.data.result}),e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},delUpload:function(e){return r.Z.post(i.Z+"file/delete",e,{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Del Data Exception"))}))},getAdverts:function(){return r.Z.get(i.Z+"file/getadverts",{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Del Data Exception"))}))},delAdvert:function(e){return r.Z.post(i.Z+"file/deleteadvert",e,{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),d.dispatch((0,c.k)())):(console.log(e),a.ZP.error("Del Data Exception"))}))}}},10297:function(e,t,n){var r=n(1413),o=n(93433);t.Z=function(e,t){switch(t){case"level":return e.reduce((function(e,t){return[].concat((0,o.Z)(e),[{id:t.id,name:t.name,key:t.id}])}),[]);case"member":return e.members.reduce((function(e,t,n){return[].concat((0,o.Z)(e),[{no:n+1,id:t.id,name:t.name,level:t.level_name,parent:t.parent_name,level_id:t.level_id,parent_id:t.parent,key:t.id}])}),[]);case"goods":case"proxy":case"browser":case"login":case"coupon_user":case"machine":case"surfing":case"history":return e.reduce((function(e,t,n){return[].concat((0,o.Z)(e),[(0,r.Z)({no:n+1,id:t.id,key:t.id},t)])}),[]);case"job":return e.jobs.reduce((function(e,t,n){var a,i;return[].concat((0,o.Z)(e),[(0,r.Z)({no:n+1,id:t.id,key:t.id,login_user:t.login?t.login.user:"",machine_id:t.machine?t.machine.machine_id:"",proxy_ip:null===(a=t.proxy)||void 0===a?void 0:a.ip,browser_name:null===(i=t.browser)||void 0===i?void 0:i.name},t)])}),[]);case"log":return e.member_loglist.reduce((function(e,t,n){return[].concat((0,o.Z)(e),[(0,r.Z)({no:n+1,id:t.id,key:t.id,action:t.function_param,user:t.member_name,time:t.created_at},t)])}),[]);case"coupon":return e.couponsList.reduce((function(e,t,n){return[].concat((0,o.Z)(e),[{no:n+1,id:t.id,name:t.name,category_id:t.category_id,brand_id:t.brand_id,category:t.category,brand:t.brand,desc:t.desc,price:t.price,discount:t.discount,image1:t.image1,image2:t.image2,image3:t.image3,status:t.status,key:t.id}])}),[]);case"coupon_category":return e.reduce((function(e,t,n){return[].concat((0,o.Z)(e),[{id:t.id,name:t.name,image1:t.image1,image2:t.image2,image3:t.image3,status:t.status,parent_id:t.parent_id,key:t.key,children:t.children}])}),[]);case"brand":return e.reduce((function(e,t,n){return[].concat((0,o.Z)(e),[{no:n+1,id:t.id,name:t.name,image1:t.image1,image2:t.image2,image3:t.image3,key:t.id}])}),[]);default:return e}}}}]);
//# sourceMappingURL=64.4ba964d9.chunk.js.map