"use strict";(self.webpackChunkreact_e_shop=self.webpackChunkreact_e_shop||[]).push([[106],{6793:function(e,t,n){var r=n(29439),a=n(67987),o=n(31773),i=n(66818),c=n(86005),d=n(2641),u=n(11730),s=n(33855),l=n(71755),f=n(80184);t.Z=function(e){var t=e.fields,n=(0,s.I0)(),m=""!==(0,s.v9)((function(e){return e.search.key})),p=a.Z.useForm(),h=(0,r.Z)(p,1)[0];return(0,f.jsx)(a.Z,{onFinish:function(e){m?(n((0,l.D)()),h.resetFields()):n((0,l.T)(e))},form:h,children:(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(a.Z.Item,{className:"my-0",name:"key",rules:[{required:!0,message:"Please select search key!"}],children:(0,f.jsx)(i.Z,{style:{width:120},options:t.map((function(e){return{value:e,label:e}})),placeholder:"Select Column"})}),(0,f.jsx)(a.Z.Item,{className:"my-0",name:"value",rules:[{required:!0,message:"Please input search str!"}],children:(0,f.jsx)(c.Z,{placeholder:"Input Search Str"})}),(0,f.jsx)(a.Z.Item,{className:"my-0",children:(0,f.jsx)(d.ZP,{type:m?"default":"primary",shape:"circle",icon:(0,f.jsx)(u.Z,{}),htmlType:"submit"})})]})})}},81529:function(e,t,n){var r=n(20952),a=n(80184),o={level:[{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"}],member:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"},{title:"Level",dataIndex:"level",key:"level"},{title:"Parent",dataIndex:"parent",key:"parent"}],goods:[{title:"No",dataIndex:"no",key:"no",fixed:"left"},{title:"Name",dataIndex:"name",key:"name",fixed:"left"},{title:"Nvid",dataIndex:"nvid",key:"nvid"},{title:"Keyword1",dataIndex:"keyword1",key:"keyword1"},{title:"Keyword2",dataIndex:"keyword2",key:"keyword2"},{title:"Keyword3",dataIndex:"keyword3",key:"keyword3"}],proxy:[{title:"No",dataIndex:"no",key:"no"},{title:"IP",dataIndex:"ip",key:"ip"},{title:"Port",dataIndex:"port",key:"port"},{title:"Username",dataIndex:"user",key:"user"},{title:"Password",dataIndex:"password",key:"password"}],browser:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"},{title:"Agent",dataIndex:"agent",key:"agent"}],login:[{title:"No",dataIndex:"no",key:"no"},{title:"Username",dataIndex:"user",key:"user"},{title:"Password",dataIndex:"password",key:"password"}],machine:[{title:"No",dataIndex:"no",key:"no"},{title:"IP",dataIndex:"ip",key:"ip"},{title:"Type",dataIndex:"type",key:"type"},{title:"Machine ID",dataIndex:"machine_id",key:"machine_id"},{title:"Last Access",dataIndex:"last_access",key:"last_access"}],surfing:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"},{title:"URL",dataIndex:"url",key:"url",render:function(e){return(0,a.jsx)("a",{href:e,children:e})}}],history:[{title:"No",dataIndex:"no",key:"no"},{title:"Time",dataIndex:"time",key:"time"},{title:"Machine",dataIndex:"machine",key:"machine"},{title:"Action",dataIndex:"action",key:"action"}],log:[{title:"No",dataIndex:"no",key:"no"},{title:"Time",dataIndex:"time",key:"time"},{title:"User",dataIndex:"user",key:"user"},{title:"Action",dataIndex:"action",key:"action"}],job:[{title:"No",dataIndex:"no",key:"no",fixed:"left"},{title:"Name",dataIndex:"name",key:"name",fixed:"left"},{title:"login",dataIndex:"login_user",key:"login_user",fixed:"left"},{title:"machine",dataIndex:"machine_id",key:"machine_id",fixed:"left"},{title:"proxy",dataIndex:"proxy_ip",key:"proxy_ip"},{title:"browser",dataIndex:"browser_name",key:"browser_name"},{title:"Goods",dataIndex:"goods",key:"goods",render:function(e){return e&&e.map((function(e,t){return(0,a.jsx)(r.Z,{children:e.name},t)}))}},{title:"Surfing",dataIndex:"surfing",key:"surfing",render:function(e){return e&&e.map((function(e,t){return(0,a.jsx)(r.Z,{children:e.name},t)}))}}],coupon_category:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"}],coupon:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"},{title:"Description",dataIndex:"desc",key:"desc"},{title:"Category",dataIndex:"category",key:"category"},{title:"Brand",dataIndex:"brand",key:"brand"},{title:"Price",dataIndex:"price",key:"price"},{title:"Discount(%)",dataIndex:"discount",key:"discount"}],brand:[{title:"No",dataIndex:"no",key:"no"},{title:"Name",dataIndex:"name",key:"name"}]};t.Z=o},79106:function(e,t,n){n.r(t),n.d(t,{CouponManage:function(){return U},default:function(){return E}});var r=n(93433),a=n(1413),o=n(74165),i=n(15861),c=n(29439),d=n(72791),u=n(57960),s=n(31773),l=n(60573),f=n(91082),m=n(21306),p=n(14692),h=n(23293),y=n(36795),g=n(82464),Z=n(33855),k=n(53192),x=n(16243),v=n(71755),I=n(84635),P=n(80184),_=function(e){var t=(0,Z.I0)(),n=(0,d.useState)(!1),_=(0,c.Z)(n,2),w=_[0],j=_[1],b=e.columns,N=e.showAction,D=(0,Z.v9)((function(e){return e.route.name})),U=(0,Z.v9)((function(e){return e.auth.isLoggedIn?e.auth.user.permission:{}})),E=(0,Z.v9)((function(e){return e.auth.isLoggedIn?e.auth.user.level:-1})),S=U[D]?U[D].edit:E,C=U[D]?U[D].del:E,z=(0,Z.v9)((function(e){return e.search})),A=z.key,L=z.value,G=(0,Z.v9)((function(e){return e.data.data})),T=(0,d.useState)(G),R=(0,c.Z)(T,2),F=R[0],Y=R[1];(0,d.useEffect)((function(){A.length>0?Y(G.filter((function(e){return!!e[A]&&("string"===typeof e[A]?e[A].toLowerCase().indexOf(L.toLowerCase())>-1:e[A].toString()===L)}))):Y(G)}),[A,L,G]),(0,d.useEffect)((function(){if(D){j(!0);var e=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t((0,k.Nk)()),t((0,k.Yu)(D)).then((function(){j(!1)})).catch((function(){j(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t((0,v.D)()),e()}}),[t,D]);var K=[].concat((0,r.Z)(b),[{title:"Image",key:"image",render:function(e){return(0,P.jsxs)(s.Z,{size:"small",children:[(0,P.jsx)(l.Z,{width:50,src:"".concat(I.Z,"uploads/").concat(e.image1),alt:e.image1}),e.image2&&(0,P.jsx)(l.Z,{width:50,src:"".concat(I.Z,"uploads/").concat(e.image2),alt:e.image2}),e.image3&&(0,P.jsx)(l.Z,{width:50,src:"".concat(I.Z,"uploads/").concat(e.image3),alt:e.image3})]})}},{title:"Action",key:"action",render:function(e){return(0,P.jsxs)(s.Z,{size:"middle",children:[1===S&&(0,P.jsx)(y.Z,{className:"cursor-pointer",onClick:function(){return n=e.key,void t((0,x.p)({id:n,title:"Edit ".concat(D),show:!0}));var n}}),(0,P.jsx)(f.Z,{placement:"left",title:"Sure to delete?",onConfirm:function(){return n=e.key,void(1===C?(j(!0),t((0,k.NU)(D,{id:n})).then((function(){return j(!1)})).catch((function(){u.ZP.error("Problem"),j(!1)}))):u.ZP.open({type:"warning",content:"You have no permission"}));var n},okText:"Yes",cancelText:"No",children:1===C&&(0,P.jsx)(g.Z,{twoToneColor:"#eb2f96",className:"cursor-pointer"})}),1===E&&(0,P.jsx)(m.Z,{checkedChildren:"Enable",unCheckedChildren:"Disable",checked:e.status,style:{marginLeft:"20px"},onChange:function(){return function(e){j(!0),t((0,k.Id)("coupon",(0,a.Z)((0,a.Z)({},e),{},{status:1-e.status}),!0)).then((function(){j(!1)}))}(e)}})]})}}]);return(0,P.jsx)(p.Z,{spinning:w,children:(0,P.jsx)(h.Z,{columns:N?K:b,dataSource:F})})},w=n(66106),j=n(2641),b=n(79286),N=n(6793),D=n(81529),U=function(){var e=(0,Z.I0)(),t=(0,Z.v9)((function(e){return e.auth.isLoggedIn?e.auth.user.level:{}})),n=D.Z.coupon,a=n.reduce((function(e,t){return[].concat((0,r.Z)(e),[t.key])}),[]);return(0,P.jsxs)("div",{children:[(0,P.jsx)(w.Z,{justify:"end",className:"p-2",children:(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(N.Z,{fields:a}),1===t&&(0,P.jsx)(j.ZP,{type:"primary",icon:(0,P.jsx)(b.Z,{}),onClick:function(){e((0,x.p)({id:0,title:"Add Goods",show:!0}))},children:"Add"})]})}),(0,P.jsx)(_,{columns:n,showAction:!0})]})},E=U},65857:function(e,t,n){n.d(t,{x:function(){return u},k:function(){return s}});var r=n(4942),a=n(1413),o=n(6803),i=n(31243),c=n(84635),d={login:function(e){return i.Z.post(c.Z+"login",e).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user"),localStorage.removeItem("persist:root")}},u=function(e,t){return function(n){return d.login(e,t).then((function(e){var t={};1===e.user.level_id&&(t={level:{view:1,add:1,edit:1,del:1}}),e.user.role.map((function(e){return t=(0,a.Z)((0,a.Z)({},t),{},(0,r.Z)({},e.page,(0,a.Z)((0,a.Z)({},t[e.page]),{},(0,r.Z)({},e.operation,e.permission))))}));var i={id:e.user.id,name:e.user.name,level:e.user.level_id,permission:t,parent:e.user.parent,token:e.access_token};return localStorage.setItem("token",e.access_token),n({type:o.XP,payload:{user:i}}),Promise.resolve()}),(function(e){var t="";switch(e.code){case"ERR_NETWORK":t="Network problem.";break;case"ERR_BAD_REQUEST":t=401===e.response.data.status?"User name or password is incorrect.":"Unknown error. Please contact admin.";break;default:t="Unknown error. Please contact admin."}return n({type:o.Qj}),n({type:o.Nd,payload:t}),Promise.reject()}))}},s=function(){return function(e){d.logout(),localStorage.clear(),e({type:o.Nv}),e({type:o.LD,payload:{name:"auth/login",param:null}})}}},53192:function(e,t,n){n.d(t,{Id:function(){return u},NU:function(){return s},Nk:function(){return l},Yu:function(){return d}});var r=n(6803),a=n(17992),o=n(57960),i=n(10297),c=n(65857),d=function(e,t){return function(n){return a.Z.getList(e,t).then((function(t){var a=(0,i.Z)(t.result,e);return n({type:r.mn,payload:a}),Promise.resolve()}),(function(e){return 401===e.response.data.status?(o.ZP.error("Unauthorized"),n((0,c.k)())):(console.log(e),o.ZP.error("Get Data Exception")),Promise.reject()}))}},u=function(e,t,n){return function(r){return a.Z.add(e,t,n).then((function(t){if(201!==t.status&&200!==t.status)return o.ZP.error("Add Data Problem."),Promise.reject("Server problem.");r(d(e)).then((function(){return Promise.resolve()})).catch((function(e){return o.ZP.error("Get Data Problem."),console.log(e),Promise.reject()}))}),(function(e){return 401===e.response.data.status?(o.ZP.error("Unauthorized"),r((0,c.k)())):(console.log(e),o.ZP.error("Add Data Exception")),Promise.reject(e)}))}},s=function(e,t){return function(n){return a.Z.del(e,t).then((function(t){if(201!==t.status)return Promise.reject();n(d(e)).then((function(){return Promise.resolve()})).catch((function(){return Promise.reject()}))}),(function(e){return Promise.reject(e)}))}},l=function(){return{type:r.hU}}},16243:function(e,t,n){n.d(t,{c:function(){return o},p:function(){return a}});var r=n(6803),a=function(e){return{type:r.iA,payload:e}},o=function(e){return{type:r.i_,payload:e}}},71755:function(e,t,n){n.d(t,{D:function(){return o},T:function(){return a}});var r=n(6803),a=function(e){return{type:r.YA,payload:e}},o=function(){return{type:r.$S}}},84635:function(e,t){t.Z="http://51.15.21.77/"},17992:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(31243);function a(){var e=localStorage.getItem("token");return e?{Authorization:e}:{}}var o=n(57960),i=n(84635),c=n(65857),d=n(63237),u=n(6803),s=(0,d.Z)().store,l=function(e,t){return r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/edit",t,{headers:a()}).then((function(e){return e.data}))},f={getList:function(e,t){var n=i.Z+("login"===e?"nvlogin":e)+"/view";return t&&(n+=t),r.Z.get(n,{headers:a()}).then((function(e){return e.data}))},add:function(e,t,n){return n?l(e,t):r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/add",t,{headers:a()}).then((function(e){return e.data}))},edit:l,del:function(e,t){return r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/delete",t,{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Del Data Exception"))}))},getFamily:function(){return r.Z.post(i.Z+"member/family",{},{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getPermission:function(e){return r.Z.post(i.Z+"level/get",{id:e},{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getJobLogin:function(){return r.Z.post(i.Z+"job/getlogin",{},{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getCategory:function(){return r.Z.get(i.Z+"coupon_category/view",{headers:a()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getCategoryForParentSelect:function(e){return r.Z.post(i.Z+"coupon_category/getwillparent",{id:e},{headers:a()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getCategoryForCoupon:function(){return r.Z.get(i.Z+"coupon_category/getforcoupon",{headers:a()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},getBrands:function(){return r.Z.get(i.Z+"brand/view",{headers:a()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},changeStatus:function(e){return r.Z.post(i.Z+"coupon_category/change_status",e,{headers:a()}).then((function(e){return console.log(e.data.result),s.dispatch({type:u.mn,payload:e.data.result}),e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Get Data Exception"))}))},delUpload:function(e){return r.Z.post(i.Z+"file/delete",e,{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Del Data Exception"))}))},getAdverts:function(){return r.Z.get(i.Z+"file/getadverts",{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Del Data Exception"))}))},delAdvert:function(e){return r.Z.post(i.Z+"file/deleteadvert",e,{headers:a()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(o.ZP.error("Unauthorized"),s.dispatch((0,c.k)())):(console.log(e),o.ZP.error("Del Data Exception"))}))}}},10297:function(e,t,n){var r=n(1413),a=n(93433);t.Z=function(e,t){switch(t){case"level":return e.reduce((function(e,t){return[].concat((0,a.Z)(e),[{id:t.id,name:t.name,key:t.id}])}),[]);case"member":return e.members.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[{no:n+1,id:t.id,name:t.name,level:t.level_name,parent:t.parent_name,level_id:t.level_id,parent_id:t.parent,key:t.id}])}),[]);case"goods":case"proxy":case"browser":case"login":case"machine":case"surfing":case"history":return e.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[(0,r.Z)({no:n+1,id:t.id,key:t.id},t)])}),[]);case"job":return e.jobs.reduce((function(e,t,n){var o,i;return[].concat((0,a.Z)(e),[(0,r.Z)({no:n+1,id:t.id,key:t.id,login_user:t.login?t.login.user:"",machine_id:t.machine?t.machine.machine_id:"",proxy_ip:null===(o=t.proxy)||void 0===o?void 0:o.ip,browser_name:null===(i=t.browser)||void 0===i?void 0:i.name},t)])}),[]);case"log":return e.member_loglist.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[(0,r.Z)({no:n+1,id:t.id,key:t.id,action:t.function_param,user:t.member_name,time:t.created_at},t)])}),[]);case"coupon":return e.couponsList.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[{no:n+1,id:t.id,name:t.name,category_id:t.category_id,brand_id:t.brand_id,category:t.category,brand:t.brand,desc:t.desc,price:t.price,discount:t.discount,image1:t.image1,image2:t.image2,image3:t.image3,status:t.status,key:t.id}])}),[]);case"coupon_category":return e.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[{id:t.id,name:t.name,image1:t.image1,image2:t.image2,image3:t.image3,status:t.status,parent_id:t.parent_id,key:t.key,children:t.children}])}),[]);case"brand":return e.reduce((function(e,t,n){return[].concat((0,a.Z)(e),[{no:n+1,id:t.id,name:t.name,image1:t.image1,image2:t.image2,image3:t.image3,key:t.id}])}),[]);default:return e}}}}]);
//# sourceMappingURL=106.58000dbf.chunk.js.map