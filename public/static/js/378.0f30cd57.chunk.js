"use strict";(self.webpackChunkreact_e_shop=self.webpackChunkreact_e_shop||[]).push([[378],{54865:function(e,t,n){n.r(t),n.d(t,{AdvertisementManage:function(){return y}});var r=n(29439),o=n(84635),a=n(72791),i=n(77106),s=n(79286),c=n(57960),l=n(66106),u=n(30914),d=n(76452),f=n(2641),p=n(34093),h=n(60573),g=n(17992),Z=n(80184),x={height:"300px",color:"#999",lineHeight:"300px",textAlign:"center",background:"#364d79"},m=function(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)},j=function(e,t){if(!("image/jpeg"===e.type||"image/png"===e.type))return c.ZP.error("You can only upload JPG/PNG file!"),!1;if(!(e.size/1024/1024<2))return c.ZP.error("Image must be smaller than 2MB!"),!1;var n="Advertisement".concat(t,".jpg");return new File([e],n,{type:e.type})},y=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],y=t[1],v=(0,a.useState)("".concat(o.Z,"uploads/Advertisement1.jpg")),b=(0,r.Z)(v,2),k=b[0],P=b[1],w=(0,a.useState)("".concat(o.Z,"uploads/Advertisement2.jpg")),U=(0,r.Z)(w,2),C=U[0],D=U[1],O=(0,a.useState)("".concat(o.Z,"uploads/Advertisement3.jpg")),E=(0,r.Z)(O,2),S=E[0],A=E[1],N=(0,a.useState)("".concat(o.Z,"uploads/Advertisement3.jpg")),L=(0,r.Z)(N,2),_=L[0],z=L[1],F=(0,a.useState)("".concat(o.Z,"uploads/Advertisement3.jpg")),B=(0,r.Z)(F,2),T=B[0],R=B[1],G=(0,a.useState)("".concat(o.Z,"uploads/Advertisement3.jpg")),I=(0,r.Z)(G,2),J=I[0],M=I[1],W=(0,a.useState)("".concat(o.Z,"uploads/Advertisement3.jpg")),H=(0,r.Z)(W,2),Q=H[0],K=H[1],X=(0,a.useState)("".concat(o.Z,"uploads/Advertisement3.jpg")),Y=(0,r.Z)(X,2),$=Y[0],q=Y[1],V=(0,a.useState)("".concat(o.Z,"uploads/Advertisement3.jpg")),ee=(0,r.Z)(V,2),te=ee[0],ne=ee[1],re=(0,a.useState)("".concat(o.Z,"uploads/Advertisement3.jpg")),oe=(0,r.Z)(re,2),ae=oe[0],ie=oe[1],se=(0,a.useState)([]),ce=(0,r.Z)(se,2),le=ce[0],ue=ce[1];a.useEffect((function(){g.Z.getAdverts().then((function(e){ue(e.adverts)}))}),[k,C,S,_,T,J,Q,$,te,ae]);var de=(0,Z.jsxs)("div",{children:[n?(0,Z.jsx)(i.Z,{}):(0,Z.jsx)(s.Z,{}),(0,Z.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),fe=function(e){window.confirm("Are you sure you want to delete this image?")&&g.Z.delAdvert({filename:le[e]}).then((function(t){if(200===t.status)switch(c.ZP.success("Image deleted successfully!"),e){case 0:P("");break;case 1:D("");break;case 2:A("");break;case 3:z("");break;case 4:R("");break;case 5:M("");break;case 6:K("");break;case 7:q("");break;case 8:ne("");break;case 9:ie("")}}))};return(0,Z.jsxs)(l.Z,{gutter:16,children:[(0,Z.jsxs)(u.Z,{span:4,style:{textAlign:"center"},children:[(0,Z.jsx)(d.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,action:"".concat(o.Z,"file/upload"),beforeUpload:function(e){return j(e,1)},onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&m(e.file.originFileObj,(function(e){y(!1),P(e)})):y(!0)},children:le[0]?(0,Z.jsx)("img",{src:k,alt:"file",style:{width:"100%"}}):de}),(0,Z.jsx)(f.ZP,{style:{marginBottom:"20px"},onClick:function(){return fe(0)},danger:!0,disabled:!le[0],children:"Delete"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(d.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,action:"".concat(o.Z,"file/upload"),beforeUpload:function(e){return j(e,2)},onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&m(e.file.originFileObj,(function(e){y(!1),D(e)})):y(!0)},children:le[1]?(0,Z.jsx)("img",{src:C,alt:"file",style:{width:"100%"}}):de}),(0,Z.jsx)(f.ZP,{style:{marginBottom:"20px"},onClick:function(){return fe(1)},danger:!0,disabled:!le[1],children:"Delete"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(d.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,action:"".concat(o.Z,"file/upload"),beforeUpload:function(e){return j(e,3)},onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&m(e.file.originFileObj,(function(e){y(!1),A(e)})):y(!0)},children:le[2]?(0,Z.jsx)("img",{src:S,alt:"file",style:{width:"100%"}}):de}),(0,Z.jsx)(f.ZP,{style:{marginBottom:"20px"},onClick:function(){return fe(2)},danger:!0,disabled:!le[2],children:"Delete"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(d.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,action:"".concat(o.Z,"file/upload"),beforeUpload:function(e){return j(e,4)},onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&m(e.file.originFileObj,(function(e){y(!1),z(e)})):y(!0)},children:le[3]?(0,Z.jsx)("img",{src:_,alt:"file",style:{width:"100%"}}):de}),(0,Z.jsx)(f.ZP,{style:{marginBottom:"20px"},onClick:function(){return fe(3)},danger:!0,disabled:!le[3],children:"Delete"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(d.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,action:"".concat(o.Z,"file/upload"),beforeUpload:function(e){return j(e,5)},onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&m(e.file.originFileObj,(function(e){y(!1),R(e)})):y(!0)},children:le[4]?(0,Z.jsx)("img",{src:T,alt:"file",style:{width:"100%"}}):de}),(0,Z.jsx)(f.ZP,{style:{marginBottom:"20px"},onClick:function(){return fe(4)},danger:!0,disabled:!le[4],children:"Delete"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(d.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,action:"".concat(o.Z,"file/upload"),beforeUpload:function(e){return j(e,6)},onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&m(e.file.originFileObj,(function(e){y(!1),M(e)})):y(!0)},children:le[5]?(0,Z.jsx)("img",{src:J,alt:"file",style:{width:"100%"}}):de}),(0,Z.jsx)(f.ZP,{style:{marginBottom:"20px"},onClick:function(){return fe(5)},danger:!0,disabled:!le[5],children:"Delete"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(d.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,action:"".concat(o.Z,"file/upload"),beforeUpload:function(e){return j(e,7)},onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&m(e.file.originFileObj,(function(e){y(!1),K(e)})):y(!0)},children:le[6]?(0,Z.jsx)("img",{src:Q,alt:"file",style:{width:"100%"}}):de}),(0,Z.jsx)(f.ZP,{style:{marginBottom:"20px"},onClick:function(){return fe(6)},danger:!0,disabled:!le[6],children:"Delete"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(d.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,action:"".concat(o.Z,"file/upload"),beforeUpload:function(e){return j(e,8)},onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&m(e.file.originFileObj,(function(e){y(!1),q(e)})):y(!0)},children:le[7]?(0,Z.jsx)("img",{src:$,alt:"file",style:{width:"100%"}}):de}),(0,Z.jsx)(f.ZP,{style:{marginBottom:"20px"},onClick:function(){return fe(7)},danger:!0,disabled:!le[7],children:"Delete"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(d.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,action:"".concat(o.Z,"file/upload"),beforeUpload:function(e){return j(e,9)},onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&m(e.file.originFileObj,(function(e){y(!1),ne(e)})):y(!0)},children:le[8]?(0,Z.jsx)("img",{src:te,alt:"file",style:{width:"100%"}}):de}),(0,Z.jsx)(f.ZP,{style:{marginBottom:"20px"},onClick:function(){return fe(8)},danger:!0,disabled:!le[8],children:"Delete"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(d.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,action:"".concat(o.Z,"file/upload"),beforeUpload:function(e){return j(e,10)},onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&m(e.file.originFileObj,(function(e){y(!1),ie(e)})):y(!0)},children:le[9]?(0,Z.jsx)("img",{src:ae,alt:"file",style:{width:"100%"}}):de}),(0,Z.jsx)(f.ZP,{style:{marginBottom:"20px"},onClick:function(){return fe(9)},danger:!0,disabled:!le[9],children:"Delete"}),(0,Z.jsx)("br",{})]}),(0,Z.jsx)(u.Z,{span:20,children:(0,Z.jsxs)(p.Z,{autoplay:!0,style:{height:"350px",background:"#999",padding:"20px"},children:[le[0]&&(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{style:x,src:k})}),le[1]&&(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{style:x,src:C})}),le[2]&&(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{style:x,src:S})}),le[3]&&(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{style:x,src:_})}),le[4]&&(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{style:x,src:T})}),le[5]&&(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{style:x,src:J})}),le[6]&&(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{style:x,src:Q})}),le[7]&&(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{style:x,src:$})}),le[8]&&(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{style:x,src:te})}),le[9]&&(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{style:x,src:ae})})]})})]})};t.default=y},65857:function(e,t,n){n.d(t,{x:function(){return l},k:function(){return u}});var r=n(4942),o=n(1413),a=n(6803),i=n(31243),s=n(84635),c={login:function(e){return i.Z.post(s.Z+"login",e).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user"),localStorage.removeItem("persist:root")}},l=function(e,t){return function(n){return c.login(e,t).then((function(e){var t={};1===e.user.level_id&&(t={level:{view:1,add:1,edit:1,del:1}}),e.user.role.map((function(e){return t=(0,o.Z)((0,o.Z)({},t),{},(0,r.Z)({},e.page,(0,o.Z)((0,o.Z)({},t[e.page]),{},(0,r.Z)({},e.operation,e.permission))))}));var i={id:e.user.id,name:e.user.name,level:e.user.level_id,permission:t,parent:e.user.parent,token:e.access_token};return localStorage.setItem("token",e.access_token),n({type:a.XP,payload:{user:i}}),Promise.resolve()}),(function(e){var t="";switch(e.code){case"ERR_NETWORK":t="Network problem.";break;case"ERR_BAD_REQUEST":t=401===e.response.data.status?"User name or password is incorrect.":"Unknown error. Please contact admin.";break;default:t="Unknown error. Please contact admin."}return n({type:a.Qj}),n({type:a.Nd,payload:t}),Promise.reject()}))}},u=function(){return function(e){c.logout(),localStorage.clear(),e({type:a.Nv}),e({type:a.LD,payload:{name:"auth/login",param:null}})}}},84635:function(e,t){t.Z="http://51.15.21.77/"},17992:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(31243);function o(){var e=localStorage.getItem("token");return e?{Authorization:e}:{}}var a=n(57960),i=n(84635),s=n(65857),c=n(63237),l=n(6803),u=(0,c.Z)().store,d=function(e,t){return r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/edit",t,{headers:o()}).then((function(e){return e.data}))},f={getList:function(e,t){var n=i.Z+("login"===e?"nvlogin":e)+"/view";return t&&(n+=t),r.Z.get(n,{headers:o()}).then((function(e){return e.data}))},add:function(e,t,n){return n?d(e,t):r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/add",t,{headers:o()}).then((function(e){return e.data}))},edit:d,del:function(e,t){return r.Z.post(i.Z+("login"===e?"nvlogin":e)+"/delete",t,{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Del Data Exception"))}))},getFamily:function(){return r.Z.post(i.Z+"member/family",{},{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getPermission:function(e){return r.Z.post(i.Z+"level/get",{id:e},{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getJobLogin:function(){return r.Z.post(i.Z+"job/getlogin",{},{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getCategory:function(){return r.Z.get(i.Z+"coupon_category/view",{headers:o()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getCategoryForParentSelect:function(e){return r.Z.post(i.Z+"coupon_category/getwillparent",{id:e},{headers:o()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getCategoryForCoupon:function(){return r.Z.get(i.Z+"coupon_category/getforcoupon",{headers:o()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},getBrands:function(){return r.Z.get(i.Z+"brand/view",{headers:o()}).then((function(e){return e.data.result})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},changeStatus:function(e){return r.Z.post(i.Z+"coupon_category/change_status",e,{headers:o()}).then((function(e){return console.log(e.data.result),u.dispatch({type:l.mn,payload:e.data.result}),e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Get Data Exception"))}))},delUpload:function(e){return r.Z.post(i.Z+"file/delete",e,{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Del Data Exception"))}))},getAdverts:function(){return r.Z.get(i.Z+"file/getadverts",{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Del Data Exception"))}))},delAdvert:function(e){return r.Z.post(i.Z+"file/deleteadvert",e,{headers:o()}).then((function(e){return e.data})).catch((function(e){401===e.response.data.status?(a.ZP.error("Unauthorized"),u.dispatch((0,s.k)())):(console.log(e),a.ZP.error("Del Data Exception"))}))}}},67575:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),o=n(72791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=n(54291),s=function(e,t){return o.createElement(i.Z,(0,r.Z)({},e,{ref:t,icon:a}))};var c=o.forwardRef(s)},19581:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(29439),o=n(72791);function a(){var e=o.useReducer((function(e){return e+1}),0);return(0,r.Z)(e,2)[1]}},89752:function(e,t,n){var r=n(4942),o=n(29439),a=n(72791),i=n(81694),s=n.n(i),c=n(71929),l=n(79426),u=n(18554),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var f=["xs","sm","md","lg","xl","xxl"],p=a.forwardRef((function(e,t){var n,i=a.useContext(c.E_),p=i.getPrefixCls,h=i.direction,g=a.useContext(l.Z),Z=g.gutter,x=g.wrap,m=e.prefixCls,j=e.span,y=e.order,v=e.offset,b=e.push,k=e.pull,P=e.className,w=e.children,U=e.flex,C=e.style,D=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),O=p("col",m),E=(0,u.c)(O),S=(0,o.Z)(E,2),A=S[0],N=S[1],L={};f.forEach((function(t){var n,o={},a=e[t];"number"===typeof a?o.span=a:"object"===typeof a&&(o=a||{}),delete D[t],L=Object.assign(Object.assign({},L),(n={},(0,r.Z)(n,"".concat(O,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,r.Z)(n,"".concat(O,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(n,"".concat(O,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(n,"".concat(O,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(n,"".concat(O,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(n,"".concat(O,"-").concat(t,"-flex-").concat(o.flex),o.flex||"auto"===o.flex),(0,r.Z)(n,"".concat(O,"-rtl"),"rtl"===h),n))}));var _=s()(O,(n={},(0,r.Z)(n,"".concat(O,"-").concat(j),void 0!==j),(0,r.Z)(n,"".concat(O,"-order-").concat(y),y),(0,r.Z)(n,"".concat(O,"-offset-").concat(v),v),(0,r.Z)(n,"".concat(O,"-push-").concat(b),b),(0,r.Z)(n,"".concat(O,"-pull-").concat(k),k),n),P,L,N),z={};if(Z&&Z[0]>0){var F=Z[0]/2;z.paddingLeft=F,z.paddingRight=F}return U&&(z.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(U),!1!==x||z.minWidth||(z.minWidth=0)),A(a.createElement("div",Object.assign({},D,{style:Object.assign(Object.assign({},z),C),className:_,ref:t}),w))}));t.Z=p}}]);
//# sourceMappingURL=378.0f30cd57.chunk.js.map