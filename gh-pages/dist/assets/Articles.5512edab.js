import{_ as f,d as M,r as E,g as c,B as I,E as L,G as B,H as R,e as r,t as n,j as m,f as s,h as v,w as H,T as b,x as h,I as y,J as k,s as Q,m as w,K as D,p as _,q as o,F as T,v as z}from"./index.a6c95b9f.js";import{L as x}from"./LoadEnd.21692def.js";import{L as G}from"./Loading.9050c844.js";var C="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRFRUU2MkZEM0I1MzExRTlBMzA2QzA5QTEwNzI4MTk4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFRUU2MkZFM0I1MzExRTlBMzA2QzA5QTEwNzI4MTk4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REVFRTYyRkIzQjUzMTFFOUEzMDZDMDlBMTA3MjgxOTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REVFRTYyRkMzQjUzMTFFOUEzMDZDMDlBMTA3MjgxOTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADIAPoDAREAAhEBAxEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAgBAQAAAAAAAAAAAAAAAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=";const Y=window.innerHeight||document.documentElement.clientHeight,p=y(()=>{const t=document.querySelectorAll("#list .item img");let l=0;for(let A=l;A<t.length;A++){let d=Y-t[A].getBoundingClientRect().top,e=t[A];d>=100&&(e.getAttribute("data-has-lazy-src")==="false"&&(e.src=e.getAttribute("data-src"),e.setAttribute("data-has-lazy-src","true")),l=A+1)}},1e3),N=M({name:"Articles",components:{LoadEnd:x,LoadingCustom:G},watch:{$route:{handler(t,l){this.routeChange(t,l)},immediate:!0}},setup(t,l){const A=E({isLoadEnd:!1,isLoading:!1,articlesList:[],total:0,tag_name:decodeURI(c("tag_name")),params:{keyword:"",likes:"",state:1,tag_id:c("tag_id"),category_id:c("category_id"),pageNum:1,pageSize:10},href:"https://biaochenxuying.cn/articleDetail?article_id="}),d=i=>k(i,!0),e=async()=>{A.isLoading=!0;const i=await Q.get(w.getArticleList,{params:A.params});A.isLoading=!1,A.articlesList=[...A.articlesList,...i.list],A.total=i.count,A.params.pageNum++,D(()=>{p()}),(i.list.length===0||A.total===A.articlesList.length)&&(A.isLoadEnd=!0,document.removeEventListener("scroll",()=>{}),window.onscroll=null)},g=(i,u)=>{A.tag_name=decodeURI(c("tag_name")),A.params.tag_id=c("tag_id"),A.params.category_id=c("category_id"),A.articlesList=[],A.params.pageNum=1,e()};return I(()=>{e(),window.onscroll=()=>{L()+B()>R()-100&&A.isLoadEnd===!1&&A.isLoading===!1&&e()},document.addEventListener("scroll",p)}),{state:A,formatTime:d,handleSearch:e,routeChange:g}}}),S={class:"left clearfix"},F={key:0,class:"left-title"},U={class:"articles-list",id:"list"},O=["href"],Z=["data-src"],V={class:"content"},W={class:"title"},j={class:"abstract"},J={class:"meta"},P={key:0,class:"time"};function X(t,l,A,d,e,g){const i=_("LoadingCustom"),u=_("LoadEnd");return o(),r("div",S,[t.state.params.tag_id?(o(),r("h3",F,n(t.state.tag_name)+" \u76F8\u5173\u7684\u6587\u7AE0\uFF1A",1)):m("",!0),s("ul",U,[v(b,{name:"el-fade-in"},{default:H(()=>[(o(!0),r(T,null,z(t.state.articlesList,a=>(o(),r("li",{key:a._id,class:"item"},[s("a",{href:t.state.href+a._id,target:"_blank"},[s("img",{class:"wrap-img img-blur-done","data-src":a.img_url,"data-has-lazy-src":"false",src:C,alt:"\u6587\u7AE0\u5C01\u9762"},null,8,Z),s("div",V,[s("h4",W,n(a.title),1),s("p",j,n(a.desc),1),s("div",J,[s("span",null,"\u67E5\u770B "+n(a.meta.views),1),s("span",null,"\u8BC4\u8BBA "+n(a.meta.comments),1),s("span",null,"\u8D5E "+n(a.meta.likes),1),a.create_time?(o(),r("span",P,n(t.formatTime(a.create_time)),1)):m("",!0)])])],8,O)]))),128))]),_:1})]),t.state.isLoading?(o(),h(i,{key:1})):m("",!0),t.state.isLoadEnd?(o(),h(u,{key:2})):m("",!0)])}var AA=f(N,[["render",X],["__scopeId","data-v-9c777b46"]]);export{AA as default};
