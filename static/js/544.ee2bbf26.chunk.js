"use strict";(self.webpackChunkmovies_app=self.webpackChunkmovies_app||[]).push([[544],{3126:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(4165),i=r(5861),a=r(7820),s=r(2791),o=r(7606),c=r(184);function u(n){var e=n.children,r=n.onUserLoggedIn,u=n.onUserNotLoggedIn;return(0,s.useEffect)((function(){(0,a.Aj)(o.I8,function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var i,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=7;break}return n.next=3,(0,o.is)(e.uid);case 3:(i=n.sent)?r(i):(a={name:e.displayName,creationTime:Date.now(),lastName:"",email:e.email,uid:e.uid,photoURL:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"},(0,o.r4)(a),r(a)),n.next=8;break;case 7:u();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[r,u]),(0,c.jsx)("div",{children:e})}},1221:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(184);function i(n){var e=n.children;return(0,t.jsx)("footer",{children:e})}},4491:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(184);function i(n){var e=n.children;return(0,t.jsx)("header",{children:e})}},544:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t=r(9439),i=r(3126),a=r(4165),s=r(5861),o=r(7820),c=r(2791),u=r(1250),p=r(7606),l={background:"loginForm_background__0i19F",loginContainer:"loginForm_loginContainer__H7VaS",formBox:"loginForm_formBox__mMC7g",title:"loginForm_title__3P78Z",inputs:"loginForm_inputs__d5xUv",registered:"loginForm_registered__HhLJw",buttons:"loginForm_buttons__94qAy",imageBox:"loginForm_imageBox__xkuH4",error:"loginForm_error__Y7YSD"},d=r(4967),f=r(184);function m(){var n=(0,c.useRef)(),e=new o.hJ;function t(){return(t=(0,s.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.rh)(p.I8,e);case 3:n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}function i(){return(i=(0,s.Z)((0,a.Z)().mark((function e(r){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t=new FormData(r.target),!(i=Object.fromEntries(t)).email||!i.password){e.next=15;break}return e.prev=4,e.next=7,(0,p.pH)({email:i.email,password:i.password});case 7:e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),n.current.innerText=e.t0.code.split("/")[1];case 13:e.next=16;break;case 15:n.current.innerText="Completa todos los campos";case 16:case"end":return e.stop()}}),e,null,[[4,10]])})))).apply(this,arguments)}return(0,f.jsxs)("div",{className:l.loginContainer,children:[(0,f.jsxs)("form",{className:l.formBox,onSubmit:function(n){return i.apply(this,arguments)},children:[(0,f.jsx)("div",{className:l.title,children:(0,f.jsx)("h1",{children:"Iniciar sesi\xf3n"})}),(0,f.jsxs)("div",{className:l.inputs,children:[(0,f.jsx)("label",{htmlFor:"loginEmail",children:"Correo electr\xf3nico"}),(0,f.jsx)("input",{type:"text",id:"loginEmail",name:"email"}),(0,f.jsx)("label",{htmlFor:"loginPassword",children:"Contrase\xf1a"}),(0,f.jsx)("input",{type:"password",id:"loginPassword",name:"password"})]}),(0,f.jsx)("div",{className:l.error,ref:n}),(0,f.jsx)("div",{className:l.registered,children:(0,f.jsxs)("p",{children:["\xbfA\xfan no tienes una cuenta?"," ",(0,f.jsx)("button",{onClick:function(){var n=(0,c.lazy)((function(){return Promise.all([r.e(373),r.e(693)]).then(r.bind(r,5693))})),e=document.createElement("div");e.id=l.background;var t=(0,u.createRoot)(document.querySelector("#root").appendChild(e));t.render((0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)(d.Z,{}),children:(0,f.jsx)(n,{root:t,id:l.background})}))},children:"Registrate"})]})}),(0,f.jsxs)("div",{className:l.buttons,children:[(0,f.jsx)("button",{type:"submit",children:"Iniciar sesion"}),(0,f.jsx)("button",{type:"button",onClick:function(){return t.apply(this,arguments)},children:"Ingresar con Google"})]})]}),(0,f.jsx)("div",{className:l.imageBox,children:(0,f.jsx)("img",{src:r(3578),alt:"movies banner"})})]})}r(1221);var h=r(4491),x=r(7689),v=r(1087),g={btnHome:"login_btnHome__H3kft",link:"login_link__+TlSN",login:"login_login__qDDGC"};function b(){var n=(0,c.useState)(0),e=(0,t.Z)(n,2),r=e[0],a=e[1],s=(0,x.s0)();return 0===r?(0,f.jsx)(i.Z,{onUserLoggedIn:function(){s("/")},onUserNotLoggedIn:function(){a(2)}}):2===r?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.Z,{children:(0,f.jsx)("div",{className:g.btnHome,children:(0,f.jsx)(v.rU,{to:"/",className:g.link,children:"Inicio"})})}),(0,f.jsx)("div",{className:"".concat(g.login," login"),children:(0,f.jsx)(m,{})})]}):void 0}},7606:function(n,e,r){r.d(e,{Al:function(){return k},I8:function(){return p},Qc:function(){return N},a$:function(){return f},is:function(){return w},jY:function(){return y},kS:function(){return v},pH:function(){return h},r4:function(){return b}});var t=r(4165),i=r(5861),a=r(4702),s=r(7820),o=r(7799),c=r(276),u=(0,a.ZF)({apiKey:"AIzaSyAr-Jcx4B4JY1Lt2e9H4ecQbo4-i6plyog",authDomain:"movies-app-973c5.firebaseapp.com",projectId:"movies-app-973c5",storageBucket:"movies-app-973c5.appspot.com",messagingSenderId:"779018595072",appId:"1:779018595072:web:e97dab726a40711adba1e5"}),p=(0,s.v0)(u),l=(0,o.ad)(u),d=(0,c.cF)(u);function f(n){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.email,i=e.password,n.next=3,(0,s.Xb)(p,r,i);case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.email,i=e.password,n.next=3,(0,s.e5)(p,r,i);case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return(g=(0,i.Z)((0,t.Z)().mark((function n(){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.signOut();case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,i.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,o.JU)(l,"users",e.uid),n.next=3,(0,o.pl)(r,e);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return _.apply(this,arguments)}function _(){return(_=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,o.JU)(l,"users",e),n.next=3,(0,o.QT)(r);case 3:return i=n.sent,n.abrupt("return",i.data());case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n,e){return j.apply(this,arguments)}function j(){return(j=(0,i.Z)((0,t.Z)().mark((function n(e,r){var i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,o.JU)(l,"users",e),n.next=3,(0,o.r7)(i,r);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n,e){return F.apply(this,arguments)}function F(){return(F=(0,i.Z)((0,t.Z)().mark((function n(e,r){var i,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=(0,c.iH)(d,"images/".concat(e)),n.next=3,(0,c.KV)(i,r);case 3:return a=n.sent,n.abrupt("return",a.metadata.fullPath);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(n){return I.apply(this,arguments)}function I(){return(I=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,c.iH)(d,e),n.next=3,(0,c.Jt)(r);case 3:return i=n.sent,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3578:function(n,e,r){n.exports=r.p+"static/media/banner2.b69203b6009a4a7a97b7.webp"}}]);
//# sourceMappingURL=544.ee2bbf26.chunk.js.map