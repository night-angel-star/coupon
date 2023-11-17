"use strict";(self.webpackChunkreact_e_shop=self.webpackChunkreact_e_shop||[]).push([[16],{68658:function(e,t,n){var r=n(93433),c=n(74165),o=n(15861),i=n(29439),a=n(72791),u=n(57960),s=n(31773),l=n(91082),f=n(14692),d=n(23293),h=n(36795),v=n(82464),p=n(33855),Z=n(53192),m=n(16243),g=n(71755),w=n(80184);t.Z=function(e){var t=(0,p.I0)(),n=(0,a.useState)(!1),x=(0,i.Z)(n,2),j=x[0],k=x[1],y=e.columns,z=e.showAction,b=(0,p.v9)((function(e){return e.route.name})),C=(0,p.v9)((function(e){return e.auth.isLoggedIn?e.auth.user.permission:{}})),L=(0,p.v9)((function(e){return e.auth.isLoggedIn?e.auth.user.level:-1})),q=C[b]?C[b].edit:L,H=C[b]?C[b].del:L,M=(0,p.v9)((function(e){return e.search})),A=M.key,E=M.value,N=(0,p.v9)((function(e){return e.data.data})),S=(0,a.useState)(N),_=(0,i.Z)(S,2),I=_[0],P=_[1];(0,a.useEffect)((function(){A.length>0?P(N.filter((function(e){return!!e[A]&&("string"===typeof e[A]?e[A].toLowerCase().indexOf(E.toLowerCase())>-1:e[A].toString()===E)}))):P(N)}),[A,E,N]),(0,a.useEffect)((function(){if(b){k(!0);var e=function(){var e=(0,o.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t((0,Z.Nk)()),t((0,Z.Yu)(b)).then((function(){k(!1)})).catch((function(){k(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t((0,g.D)()),e()}}),[t,b]);var B=[].concat((0,r.Z)(y),[{title:"Action",key:"action",fixed:"right",render:function(e){return(0,w.jsxs)(s.Z,{size:"middle",children:[1===q&&(0,w.jsx)(h.Z,{className:"cursor-pointer",onClick:function(){return n=e.key,void t((0,m.p)({id:n,title:"Edit ".concat(b),show:!0}));var n}}),(0,w.jsx)(l.Z,{placement:"left",title:"Sure to delete?",description:"All levels and members below this level will be deleted.",onConfirm:function(){return n=e.key,void(1===H?(k(!0),t((0,Z.NU)(b,{id:n})).then((function(){return k(!1)})).catch((function(){u.ZP.error("Problem"),k(!1)}))):u.ZP.open({type:"warning",content:"You have no permission"}));var n},okText:"Yes",cancelText:"No",children:1===H&&(0,w.jsx)(v.Z,{twoToneColor:"#eb2f96",className:"cursor-pointer"})})]})}}]);return(0,w.jsx)(f.Z,{spinning:j,children:(0,w.jsx)(d.Z,{columns:z?B:y,dataSource:I})})}},73016:function(e,t,n){n.r(t),n.d(t,{CouponUserManage:function(){return v}});var r=n(93433),c=n(68658),o=n(66106),i=n(31773),a=n(2641),u=n(79286),s=n(6793),l=n(81529),f=n(16243),d=n(33855),h=n(80184),v=function(){var e=(0,d.I0)(),t=l.Z.coupon_user,n=t.reduce((function(e,t){return[].concat((0,r.Z)(e),[t.key])}),[]);return(0,h.jsxs)("div",{children:[(0,h.jsx)(o.Z,{justify:"end",className:"p-2",children:(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(s.Z,{fields:n}),(0,h.jsx)(a.ZP,{type:"primary",icon:(0,h.jsx)(u.Z,{}),onClick:function(){e((0,f.p)({id:0,title:"Add Coupon User",show:!0}))},children:"Add"})]})}),(0,h.jsx)(c.Z,{columns:t,showAction:!0})]})};t.default=v},82464:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(87462),c=n(72791),o={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M292.7 840h438.6l24.2-512h-487z",fill:t}},{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z",fill:e}}]}},name:"delete",theme:"twotone"},i=n(54291),a=function(e,t){return c.createElement(i.Z,(0,r.Z)({},e,{ref:t,icon:o}))};var u=c.forwardRef(a)},36795:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(87462),c=n(72791),o={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M761.1 288.3L687.8 215 325.1 577.6l-15.6 89 88.9-15.7z",fill:t}},{tag:"path",attrs:{d:"M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89z",fill:e}}]}},name:"edit",theme:"twotone"},i=n(54291),a=function(e,t){return c.createElement(i.Z,(0,r.Z)({},e,{ref:t,icon:o}))};var u=c.forwardRef(a)},79286:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(87462),c=n(72791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=n(54291),a=function(e,t){return c.createElement(i.Z,(0,r.Z)({},e,{ref:t,icon:o}))};var u=c.forwardRef(a)}}]);
//# sourceMappingURL=16.6d017010.chunk.js.map