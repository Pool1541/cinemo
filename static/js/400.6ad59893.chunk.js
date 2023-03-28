"use strict";(self.webpackChunkcinemo=self.webpackChunkcinemo||[]).push([[400],{8400:function(e,t,s){s.r(t),s.d(t,{default:function(){return $}});var i=s(9439),n=s(1933),a=s(7689),r=s(5567);function o(){var e=(0,a.UO)().movieId,t=(0,n.useQuery)({queryKey:["movie",e],queryFn:function(){return(0,r.XT)(e)}});return{movieData:t.data,isError:t.isError,error:t.error,isLoading:t.isLoading,isSuccess:t.isSuccess}}var c=s(3314),l="movieinfo_container__dUhzI",d="movieinfo_infoContainer__ZJKyy",u="movieinfo_info__VRNmj",m="movieinfo_absoluteInfo__e39K4",h="movieinfo_title__GfjPW",v="movieinfo_meta__Qwf0W",_="movieinfo_overview__PKbsl",x="movieinfo_backgroundImage__6iy7W",f="movieinfo_storylineCotnainer__qd4Cx",j="movieinfo_poster__UYv0j",p="movieinfo_sinopsis__7JapP",g="movieinfo_storylineInfo__HMroS",N="movieinfo_storylineList__berFC",b="movieinfo_storylineTitle__QLTID",C="movieinfo_storylineItem__D26xf",I="movieinfo_genres__oGOhL",L=s(7425),w=s(8820),y={actionsContainer:"actions_actionsContainer__5U4qL",actionsItem:"actions_actionsItem__EJO7K"},k=s(887),Z=s(7834),D=s(5854),S=s(2791),F=s(5386),E=s(4373),T={background:"addMovieToList_background__lLd6R",container:"addMovieToList_container__9g57Q",top:"addMovieToList_top__MU03j",form:"addMovieToList_form__42+Df",addList:"addMovieToList_addList__TjaEt"},R=s(4165),O=s(5861),P={formOption:"addMovieOption_formOption__WeOlV",checkbox:"addMovieOption_checkbox__YEmbO",label:"addMovieOption_label__YDQyt"},M=s(184);function B(e){var t=e.list,s=e.allLists,i=e.movieData,n=(0,Z.Z)().auth,r=(0,a.UO)().movieId,o=(0,S.useRef)();function c(){return(c=(0,O.Z)((0,R.Z)().mark((function e(){var a,o;return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.lists.find((function(e){return e.listID===t.listID})),o={id:parseInt(r),title:i.title,poster_path:i.poster_path,vote_average:i.vote_average,rating:0,review:"",status:!1},a.movies.push(o),e.next=5,(0,k.aw)(n.uid,s.lists);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,O.Z)((0,R.Z)().mark((function e(){var i;return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=s.lists.find((function(e){return e.listID===t.listID}))).movies=i.movies.filter((function(e){return e.id!==parseInt(r)})),e.next=4,(0,k.aw)(n.uid,s.lists);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,S.useEffect)((function(){t.movies.forEach((function(e){e.id===parseInt(r)&&(o.current.checked=!0)}))}),[t]),(0,M.jsxs)("div",{className:P.formOption,children:[(0,M.jsx)("input",{type:"checkbox",id:t.listID,className:P.checkbox,ref:o,onChange:function(){o.current.checked?function(){c.apply(this,arguments)}():function(){l.apply(this,arguments)}()}}),(0,M.jsx)("label",{htmlFor:t.listID,title:t.title,className:P.label,children:t.title})]})}var K=s(1413),U={newListForm:"createListForm_newListForm__t97Ew",show:"createListForm_show__9ZLU8",newListName:"createListForm_newListName__AdKde",newListPrivacity:"createListForm_newListPrivacity__hqwEi",newListCreate:"createListForm_newListCreate__KbKmn"};function A(e){var t=e.handleClose,s=(0,Z.Z)().auth,i=o().movieData;function n(){return(n=(0,O.Z)((0,R.Z)().mark((function e(n){var a,r,o,c;return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=new FormData(n.target),(r=Object.fromEntries(a)).public="public"===r.public,o={id:i.id,title:i.title,poster_path:i.poster_path,vote_average:i.vote_average,MyRating:0,review:"",status:!1},c=(0,K.Z)((0,K.Z)({},r),{},{creationTime:Date.now(),movies:[o],listID:(0,D.k$)(),background:"https://image.tmdb.org/t/p/w780".concat(i.backdrop_path)}),e.prev=6,e.next=9,(0,k.$8)(s.uid,c);case 9:t(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}return(0,M.jsxs)("form",{className:U.newListForm,onSubmit:function(e){return n.apply(this,arguments)},children:[(0,M.jsxs)("div",{className:U.newListName,children:[(0,M.jsx)("label",{htmlFor:"listName",children:"Nombre"}),(0,M.jsx)("input",{type:"text",id:"listName",placeholder:"Nombre de la lista",name:"title"})]}),(0,M.jsxs)("div",{className:U.newListPrivacity,children:[(0,M.jsx)("label",{htmlFor:"privacity",children:"Privacidad"}),(0,M.jsxs)("select",{id:"privacity",name:"public",children:[(0,M.jsx)("option",{value:"public",children:"P\xfablica"}),(0,M.jsx)("option",{value:"private",children:"Privada"})]})]}),(0,M.jsx)("button",{type:"submit",className:U.newListCreate,children:"Crear"})]})}function W(e){var t=e.handleClose,s=(0,F.Z)(),n=s.listsData,a=s.isLoading,r=o().movieData,c=(0,S.useState)(!1),l=(0,i.Z)(c,2),d=l[0],u=l[1];if(!a)return(0,M.jsx)("div",{className:T.background,children:(0,M.jsxs)("div",{className:T.container,children:[(0,M.jsxs)("div",{className:T.top,children:[(0,M.jsx)("h3",{children:"Agregar a ..."}),(0,M.jsx)("button",{type:"button",onClick:t,children:(0,M.jsx)(E.QAE,{})})]}),(0,M.jsx)("form",{className:T.form,children:n.lists.map((function(e){return(0,M.jsx)(B,{allLists:n,list:e,movieData:r},e.listID)}))}),d?(0,M.jsx)(A,{handleClose:t}):(0,M.jsxs)("button",{type:"button",className:T.addList,onClick:function(){u(!d)},children:["Nueva lista ",(0,M.jsx)(w.Lfi,{})]})]})})}function Q(){var e=(0,Z.Z)().auth,t=(0,S.useState)(),s=(0,i.Z)(t,2),n=s[0],r=s[1],o=(0,a.s0)();function c(){e?r(!n):o("/login")}return(0,M.jsxs)("ul",{className:y.actionsContainer,children:[(0,M.jsx)("li",{children:(0,M.jsx)("button",{className:y.actionsItem,action:"Agregar a lista",onClick:c,children:(0,M.jsx)(L.a8N,{})})}),(0,M.jsx)("li",{children:(0,M.jsx)("button",{className:y.actionsItem,action:"Favorito",children:(0,M.jsx)(w.lo,{})})}),(0,M.jsx)("li",{children:(0,M.jsx)("button",{className:y.actionsItem,action:"Valorar",children:(0,M.jsx)(w.y5j,{})})}),n?(0,M.jsx)(W,{handleClose:c}):null]})}var Y=s(8266),q={actorsContainer:"movieInfoCarousel_actorsContainer__EZwiC",castTitle:"movieInfoCarousel_castTitle__kgIIs",listContainer:"movieInfoCarousel_listContainer__4Sz5Z",castBox:"movieInfoCarousel_castBox__d5gwX",castImgBox:"movieInfoCarousel_castImgBox__bzKDD",castImg:"movieInfoCarousel_castImg__3fSzY",castInfo:"movieInfoCarousel_castInfo__7OhS2",buttonLeft:"movieInfoCarousel_buttonLeft__1C+p3",buttonRight:"movieInfoCarousel_buttonRight__hXAkG"},z=s(1087),X=s(6355);var G=function(e){var t,s=e.movie,n=(0,S.useState)({}),a=(0,i.Z)(n,2),r=a[0],o=a[1];(0,S.useEffect)((function(){o(s)}),[s]);var c,l,d=(0,S.useRef)(null),u=null===r||void 0===r||null===(t=r.credits)||void 0===t?void 0:t.cast.length;if(s)return(0,M.jsxs)("div",{className:q.actorsContainer,children:[u>6&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("button",{onClick:function(){d.current.scrollLeft-=d.current.offsetWidth},className:q.buttonLeft,children:(0,M.jsx)(X.x_l,{})}),(0,M.jsx)("button",{onClick:function(){d.current.scrollLeft+=d.current.offsetWidth},className:q.buttonRight,children:(0,M.jsx)(X.Z1Y,{})})]}),u>0&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("h2",{className:q.castTitle,children:"CAST"}),(0,M.jsx)("div",{className:q.castContainer,children:(0,M.jsx)("ul",{className:q.listContainer,ref:d,children:null===r||void 0===r||null===(c=r.credits)||void 0===c||null===(l=c.cast)||void 0===l?void 0:l.map((function(e){return(0,M.jsx)("li",{className:q.listItem,children:(0,M.jsxs)(z.rU,{to:"/person/".concat(e.id),className:q.castBox,children:[(0,M.jsx)("figure",{className:q.castImgBox,children:(0,M.jsx)("img",{className:q.castImg,src:e.profile_path?"https://image.tmdb.org/t/p/w300".concat(e.profile_path):"https://via.placeholder.com/300x450?text=Image+Not+Found",alt:"Picture of ".concat(e.name)})}),(0,M.jsxs)("div",{className:q.castInfo,children:[(0,M.jsx)("p",{children:e.name}),(0,M.jsx)("p",{children:e.character})]})]})},e.cast_id)}))})})]})]})},J={actorsContainer:"recomendedCarousel_actorsContainer__7PPRH",castTitle:"recomendedCarousel_castTitle__Xuzr3",listContainer:"recomendedCarousel_listContainer__NTOFx",castBox:"recomendedCarousel_castBox__NbiKE",castImgBox:"recomendedCarousel_castImgBox__x7Myl",castImg:"recomendedCarousel_castImg__SXaWg",castInfo:"recomendedCarousel_castInfo__v9jlc",buttonLeft:"recomendedCarousel_buttonLeft__QKyCE",buttonRight:"recomendedCarousel_buttonRight__oejbK"};var V=function(e){var t,s,n=e.movie,a=(0,S.useState)({}),r=(0,i.Z)(a,2),o=r[0],c=r[1];(0,S.useEffect)((function(){c(n)}),[n]);var l,d,u=(0,S.useRef)(null),m=null===o||void 0===o||null===(t=o.recommendations)||void 0===t||null===(s=t.results)||void 0===s?void 0:s.length;if(n)return(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:J.actorsContainer,children:[m>=6&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("button",{onClick:function(){u.current.scrollLeft-=u.current.offsetWidth},className:J.buttonLeft,children:(0,M.jsx)(X.x_l,{})}),(0,M.jsx)("button",{onClick:function(){u.current.scrollLeft+=u.current.offsetWidth},className:J.buttonRight,children:(0,M.jsx)(X.Z1Y,{})})]}),!m<=0&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("h2",{className:J.castTitle,children:"PELICULAS RECOMENDADAS"}),(0,M.jsx)("div",{className:J.castContainer,children:(0,M.jsx)("ul",{className:J.listContainer,ref:u,children:null===o||void 0===o||null===(l=o.recommendations)||void 0===l||null===(d=l.results)||void 0===d?void 0:d.map((function(e){return(0,M.jsx)("li",{className:J.listItem,children:(0,M.jsxs)(z.rU,{to:"/movies/".concat(e.id),className:J.castBox,children:[(0,M.jsx)("figure",{className:J.castImgBox,children:(0,M.jsx)("img",{className:J.castImg,src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://via.placeholder.com/300x450?text=Image+Not+Found",alt:"Picture of ".concat(e.title)})}),(0,M.jsxs)("div",{className:J.castInfo,children:[(0,M.jsx)("p",{children:e.title}),(0,M.jsx)("p",{children:e.release_date})]})]})},e.id)}))})})]})]})})},H=function(){var e,t,s=o(),n=s.movieData,a=s.isLoading,r=(0,S.useState)({}),L=(0,i.Z)(r,2),w=L[0],y=L[1];function k(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}if((0,c.Z)(),(0,S.useEffect)((function(){(null===n||void 0===n?void 0:n.runtime)&&y(function(e){var t=e,s=Math.floor(t/60),i=Math.round(t%60);return i>=60&&(s+=1,i-=60),{hours:s,min:i}}(n.runtime))}),[n]),!a)return(0,M.jsxs)("div",{className:l,children:[(0,M.jsxs)("div",{className:d,children:[(0,M.jsx)("div",{className:u,children:(0,M.jsxs)("div",{className:m,children:[(0,M.jsx)("h2",{className:h,children:n.title}),(0,M.jsxs)("div",{className:v,children:[(0,M.jsx)("span",{children:(0,M.jsx)(Y.Z,{votes:n.vote_average})}),(0,M.jsx)("span",{children:"".concat(n.vote_count," Reviews")}),(0,M.jsx)("span",{children:n.release_date}),(0,M.jsx)("span",{children:"".concat(w.hours,"h:").concat(w.min,"min")})]}),(0,M.jsx)("div",{className:_,children:(0,M.jsx)("p",{children:n.overview})}),(0,M.jsx)(Q,{})]})}),(0,M.jsx)("div",{className:x,children:(0,M.jsxs)("picture",{children:[(0,M.jsx)("source",{srcSet:"https://image.tmdb.org/t/p/w300".concat(n.backdrop_path),media:"(max-width: 320px)"}),(0,M.jsx)("source",{srcSet:"https://image.tmdb.org/t/p/w780".concat(n.backdrop_path),media:"(max-width: 780px)"}),(0,M.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280".concat(n.backdrop_path)})]})})]}),(0,M.jsxs)("div",{className:f,children:[(0,M.jsx)("div",{className:j,children:(0,M.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(n.poster_path),alt:"Poster de ".concat(n.title)})}),(0,M.jsxs)("div",{className:g,children:[(0,M.jsx)("h3",{children:"Storyline"}),(0,M.jsx)("p",{className:p,children:n.overview}),(0,M.jsx)("div",{children:(0,M.jsxs)("ul",{className:N,children:[(0,M.jsxs)("li",{className:C,children:[(0,M.jsx)("div",{className:b,children:"Released"}),(0,M.jsx)("div",{children:n.release_date})]}),(0,M.jsxs)("li",{className:C,children:[(0,M.jsx)("div",{className:b,children:"Revenue"}),(0,M.jsx)("div",{children:k(n.revenue)})]}),(0,M.jsxs)("li",{className:C,children:[(0,M.jsx)("div",{className:b,children:"Status"}),(0,M.jsx)("div",{children:n.status})]}),(0,M.jsxs)("li",{className:C,children:[(0,M.jsx)("div",{className:b,children:"Production"}),(0,M.jsx)("div",{children:null===(e=n.production_companies[0])||void 0===e?void 0:e.name})]}),(0,M.jsxs)("li",{className:C,children:[(0,M.jsx)("div",{className:b,children:"Runtime"}),(0,M.jsxs)("div",{children:[w.hours,"h ",w.min,"m"]})]}),(0,M.jsxs)("li",{className:C,children:[(0,M.jsx)("div",{className:b,children:"Budget"}),(0,M.jsx)("div",{children:k(n.budget)})]}),(0,M.jsxs)("li",{className:C,children:[(0,M.jsx)("div",{className:b,children:"Genres"}),(0,M.jsx)("div",{className:I,children:n.genres.map((function(e){return(0,M.jsx)("div",{children:e.name},e.id)}))})]}),(0,M.jsxs)("li",{className:C,children:[(0,M.jsx)("div",{className:b,children:"Language"}),(0,M.jsx)("div",{children:null===(t=n.spoken_languages[0])||void 0===t?void 0:t.name})]})]})})]})]}),(0,M.jsx)(G,{movie:n}),(0,M.jsx)(V,{movie:n})]})};function $(){return(0,M.jsx)(H,{})}},3314:function(e,t,s){function i(){window.scrollTo({top:0,behavior:"smooth"})}s.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=400.6ad59893.chunk.js.map