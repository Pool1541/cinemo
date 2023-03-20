"use strict";(self.webpackChunkcinemo=self.webpackChunkcinemo||[]).push([[770],{9770:function(e,i,s){s.r(i),s.d(i,{default:function(){return X}});var t=s(9439),n=s(1933),a=s(7689),r=s(5567);function o(){var e=(0,a.UO)().movieId,i=(0,n.useQuery)({queryKey:["movie",e],queryFn:function(){return(0,r.XT)(e)}});return{movieData:i.data,isError:i.isError,error:i.error,isLoading:i.isLoading,isSuccess:i.isSuccess}}var c=s(3314),l="movieinfo_container__dUhzI",d="movieinfo_infoContainer__ZJKyy",m="movieinfo_info__VRNmj",u="movieinfo_absoluteInfo__e39K4",h="movieinfo_title__GfjPW",v="movieinfo_meta__Qwf0W",_="movieinfo_overview__PKbsl",x="movieinfo_backgroundImage__6iy7W",f="movieinfo_storylineCotnainer__qd4Cx",p="movieinfo_poster__UYv0j",j="movieinfo_sinopsis__7JapP",N="movieinfo_storylineInfo__HMroS",b="movieinfo_storylineList__berFC",g="movieinfo_storylineTitle__QLTID",w="movieinfo_storylineItem__D26xf",I="movieinfo_genres__oGOhL",L=s(7425),C=s(8820),y={actionsContainer:"actions_actionsContainer__5U4qL",actionsItem:"actions_actionsItem__EJO7K"},k=s(887),D=s(7834),Z=s(5854),S=s(2791),F=s(5386),T=s(4373),O={background:"addMovieToList_background__lLd6R",container:"addMovieToList_container__9g57Q",top:"addMovieToList_top__MU03j",form:"addMovieToList_form__42+Df",addList:"addMovieToList_addList__TjaEt"},E=s(4165),M=s(5861),P={formOption:"addMovieOption_formOption__WeOlV",checkbox:"addMovieOption_checkbox__YEmbO",label:"addMovieOption_label__YDQyt"},R=s(184);function U(e){var i=e.list,s=e.allLists,t=e.movieData,n=(0,D.Z)().auth,r=(0,a.UO)().movieId,o=(0,S.useRef)();function c(){return(c=(0,M.Z)((0,E.Z)().mark((function e(){var a,o;return(0,E.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.lists.find((function(e){return e.listID===i.listID})),o={id:parseInt(r),title:t.title,poster_path:t.poster_path,vote_average:t.vote_average,rating:0,review:"",status:!1},a.movies.push(o),e.next=5,(0,k.aw)(n.uid,s.lists);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,M.Z)((0,E.Z)().mark((function e(){var t;return(0,E.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=s.lists.find((function(e){return e.listID===i.listID}))).movies=t.movies.filter((function(e){return e.id!==parseInt(r)})),e.next=4,(0,k.aw)(n.uid,s.lists);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,S.useEffect)((function(){i.movies.forEach((function(e){e.id===parseInt(r)&&(o.current.checked=!0)}))}),[i]),(0,R.jsxs)("div",{className:P.formOption,children:[(0,R.jsx)("input",{type:"checkbox",id:i.listID,className:P.checkbox,ref:o,onChange:function(){o.current.checked?function(){c.apply(this,arguments)}():function(){l.apply(this,arguments)}()}}),(0,R.jsx)("label",{htmlFor:i.listID,title:i.title,className:P.label,children:i.title})]})}var K=s(1413),B={newListForm:"createListForm_newListForm__t97Ew",show:"createListForm_show__9ZLU8",newListName:"createListForm_newListName__AdKde",newListPrivacity:"createListForm_newListPrivacity__hqwEi",newListCreate:"createListForm_newListCreate__KbKmn"};function A(e){var i=e.handleClose,s=(0,D.Z)().auth,t=o().movieData;function n(){return(n=(0,M.Z)((0,E.Z)().mark((function e(n){var a,r,o,c;return(0,E.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=new FormData(n.target),(r=Object.fromEntries(a)).public="public"===r.public,o={id:t.id,title:t.title,poster_path:t.poster_path,vote_average:t.vote_average,MyRating:0,review:"",status:!1},c=(0,K.Z)((0,K.Z)({},r),{},{creationTime:Date.now(),movies:[o],listID:(0,Z.k$)(),background:"https://image.tmdb.org/t/p/w780".concat(t.backdrop_path)}),e.prev=6,e.next=9,(0,k.$8)(s.uid,c);case 9:i(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}return(0,R.jsxs)("form",{className:B.newListForm,onSubmit:function(e){return n.apply(this,arguments)},children:[(0,R.jsxs)("div",{className:B.newListName,children:[(0,R.jsx)("label",{htmlFor:"listName",children:"Nombre"}),(0,R.jsx)("input",{type:"text",id:"listName",placeholder:"Nombre de la lista",name:"title"})]}),(0,R.jsxs)("div",{className:B.newListPrivacity,children:[(0,R.jsx)("label",{htmlFor:"privacity",children:"Privacidad"}),(0,R.jsxs)("select",{id:"privacity",name:"public",children:[(0,R.jsx)("option",{value:"public",children:"P\xfablica"}),(0,R.jsx)("option",{value:"private",children:"Privada"})]})]}),(0,R.jsx)("button",{type:"submit",className:B.newListCreate,children:"Crear"})]})}function Q(e){var i=e.handleClose,s=(0,F.Z)(),n=s.listsData,a=s.isLoading,r=o().movieData,c=(0,S.useState)(!1),l=(0,t.Z)(c,2),d=l[0],m=l[1];if(!a)return(0,R.jsx)("div",{className:O.background,children:(0,R.jsxs)("div",{className:O.container,children:[(0,R.jsxs)("div",{className:O.top,children:[(0,R.jsx)("h3",{children:"Agregar a ..."}),(0,R.jsx)("button",{type:"button",onClick:i,children:(0,R.jsx)(T.QAE,{})})]}),(0,R.jsx)("form",{className:O.form,children:n.lists.map((function(e){return(0,R.jsx)(U,{allLists:n,list:e,movieData:r},e.listID)}))}),d?(0,R.jsx)(A,{handleClose:i}):(0,R.jsxs)("button",{type:"button",className:O.addList,onClick:function(){m(!d)},children:["Nueva lista ",(0,R.jsx)(C.Lfi,{})]})]})})}function W(){var e=(0,D.Z)().auth,i=(0,S.useState)(),s=(0,t.Z)(i,2),n=s[0],r=s[1],o=(0,a.s0)();function c(){e?r(!n):o("/login")}return(0,R.jsxs)("ul",{className:y.actionsContainer,children:[(0,R.jsx)("li",{children:(0,R.jsx)("button",{className:y.actionsItem,action:"Agregar a lista",onClick:c,children:(0,R.jsx)(L.a8N,{})})}),(0,R.jsx)("li",{children:(0,R.jsx)("button",{className:y.actionsItem,action:"Favorito",children:(0,R.jsx)(C.lo,{})})}),(0,R.jsx)("li",{children:(0,R.jsx)("button",{className:y.actionsItem,action:"Valorar",children:(0,R.jsx)(C.y5j,{})})}),n?(0,R.jsx)(Q,{handleClose:c}):null]})}var q=s(8266),Y={actorsContainer:"movieInfoCarousel_actorsContainer__EZwiC",castTitle:"movieInfoCarousel_castTitle__kgIIs",listContainer:"movieInfoCarousel_listContainer__4Sz5Z",castBox:"movieInfoCarousel_castBox__d5gwX",castImgBox:"movieInfoCarousel_castImgBox__bzKDD",castImg:"movieInfoCarousel_castImg__3fSzY",castInfo:"movieInfoCarousel_castInfo__7OhS2",buttonLeft:"movieInfoCarousel_buttonLeft__1C+p3",buttonRight:"movieInfoCarousel_buttonRight__hXAkG"},z=s(1087),G=s(6355);var J=function(){var e=o(),i=e.movieData,s=(e.isLoading,(0,S.useRef)(null));if(i)return(0,R.jsxs)("div",{className:Y.actorsContainer,children:[(0,R.jsx)("button",{onClick:function(){s.current.scrollLeft-=s.current.offsetWidth},className:Y.buttonLeft,children:(0,R.jsx)(G.x_l,{})}),(0,R.jsx)("button",{onClick:function(){s.current.scrollLeft+=s.current.offsetWidth},className:Y.buttonRight,children:(0,R.jsx)(G.Z1Y,{})}),(0,R.jsx)("h2",{className:Y.castTitle,children:"CAST"}),(0,R.jsx)("div",{className:Y.castContainer,children:(0,R.jsx)("ul",{className:Y.listContainer,ref:s,children:i.credits.cast.map((function(e){return(0,R.jsx)("li",{className:Y.listItem,children:(0,R.jsxs)(z.rU,{to:"/person/".concat(e.id),className:Y.castBox,children:[(0,R.jsx)("figure",{className:Y.castImgBox,children:(0,R.jsx)("img",{className:Y.castImg,src:e.profile_path?"https://image.tmdb.org/t/p/w300".concat(e.profile_path):"https://via.placeholder.com/300x450?text=Image+Not+Found",alt:"Picture of ".concat(e.name)})}),(0,R.jsxs)("div",{className:Y.castInfo,children:[(0,R.jsx)("p",{children:e.name}),(0,R.jsx)("p",{children:e.character})]})]})},e.cast_id)}))})})]})},V=function(){var e,i,s=o(),n=s.movieData,a=s.isLoading,r=(0,S.useState)({}),L=(0,t.Z)(r,2),C=L[0],y=L[1];function k(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}if((0,c.Z)(),(0,S.useEffect)((function(){(null===n||void 0===n?void 0:n.runtime)&&y(function(e){var i=e,s=Math.floor(i/60),t=Math.round(i%60);return t>=60&&(s+=1,t-=60),{hours:s,min:t}}(n.runtime))}),[n]),!a)return(0,R.jsxs)("div",{className:l,children:[(0,R.jsxs)("div",{className:d,children:[(0,R.jsx)("div",{className:m,children:(0,R.jsxs)("div",{className:u,children:[(0,R.jsx)("h2",{className:h,children:n.title}),(0,R.jsxs)("div",{className:v,children:[(0,R.jsx)("span",{children:(0,R.jsx)(q.Z,{votes:n.vote_average})}),(0,R.jsx)("span",{children:"".concat(n.vote_count," Reviews")}),(0,R.jsx)("span",{children:n.release_date}),(0,R.jsx)("span",{children:"".concat(C.hours,"h:").concat(C.min,"min")})]}),(0,R.jsx)("div",{className:_,children:(0,R.jsx)("p",{children:n.overview})}),(0,R.jsx)(W,{})]})}),(0,R.jsx)("div",{className:x,children:(0,R.jsxs)("picture",{children:[(0,R.jsx)("source",{srcSet:"https://image.tmdb.org/t/p/w300".concat(n.backdrop_path),media:"(max-width: 320px)"}),(0,R.jsx)("source",{srcSet:"https://image.tmdb.org/t/p/w780".concat(n.backdrop_path),media:"(max-width: 780px)"}),(0,R.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280".concat(n.backdrop_path)})]})})]}),(0,R.jsxs)("div",{className:f,children:[(0,R.jsx)("div",{className:p,children:(0,R.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(n.poster_path),alt:"Poster de ".concat(n.title)})}),(0,R.jsxs)("div",{className:N,children:[(0,R.jsx)("h3",{children:"Storyline"}),(0,R.jsx)("p",{className:j,children:n.overview}),(0,R.jsx)("div",{children:(0,R.jsxs)("ul",{className:b,children:[(0,R.jsxs)("li",{className:w,children:[(0,R.jsx)("div",{className:g,children:"Released"}),(0,R.jsx)("div",{children:n.release_date})]}),(0,R.jsxs)("li",{className:w,children:[(0,R.jsx)("div",{className:g,children:"Revenue"}),(0,R.jsx)("div",{children:k(n.revenue)})]}),(0,R.jsxs)("li",{className:w,children:[(0,R.jsx)("div",{className:g,children:"Status"}),(0,R.jsx)("div",{children:n.status})]}),(0,R.jsxs)("li",{className:w,children:[(0,R.jsx)("div",{className:g,children:"Production"}),(0,R.jsx)("div",{children:null===(e=n.production_companies[0])||void 0===e?void 0:e.name})]}),(0,R.jsxs)("li",{className:w,children:[(0,R.jsx)("div",{className:g,children:"Runtime"}),(0,R.jsxs)("div",{children:[C.hours,"h ",C.min,"m"]})]}),(0,R.jsxs)("li",{className:w,children:[(0,R.jsx)("div",{className:g,children:"Budget"}),(0,R.jsx)("div",{children:k(n.budget)})]}),(0,R.jsxs)("li",{className:w,children:[(0,R.jsx)("div",{className:g,children:"Genres"}),(0,R.jsx)("div",{className:I,children:n.genres.map((function(e){return(0,R.jsx)("div",{children:e.name},e.id)}))})]}),(0,R.jsxs)("li",{className:w,children:[(0,R.jsx)("div",{className:g,children:"Language"}),(0,R.jsx)("div",{children:null===(i=n.spoken_languages[0])||void 0===i?void 0:i.name})]})]})})]})]}),(0,R.jsx)(J,{})]})};function X(){return(0,R.jsx)(V,{})}},3314:function(e,i,s){function t(){window.scrollTo({top:0,behavior:"smooth"})}s.d(i,{Z:function(){return t}})}}]);
//# sourceMappingURL=770.0bfbf489.chunk.js.map