import{_ as f,d as L,r as y,g as l,C as v,E as C,G as w,H as E,e as d,f as n,h as k,w as A,T,x as h,j as _,I as b,J as B,K as H,p,q as r,F as S,v as N,t as g}from"./index.85807a61.js";import{L as $}from"./LoadEnd.1964e486.js";import{L as D}from"./Loading.9edb827c.js";const V=window.innerHeight||document.documentElement.clientHeight,x=b(()=>{const e=document.querySelectorAll("#list .item img");let o=0;for(let t=o;t<e.length;t++){let c=V-e[t].getBoundingClientRect().top,s=e[t];c>=100&&(s.getAttribute("data-has-lazy-src")==="false"&&(s.src=s.getAttribute("data-src"),s.setAttribute("data-has-lazy-src","true")),o=t+1)}},1e3),z=L({name:"Articles",components:{LoadEnd:$,LoadingCustom:D},watch:{$route:{handler(e,o){this.routeChange(e,o)},immediate:!0}},setup(e,o){const t=y({isLoadEnd:!1,isLoading:!1,articlesList:[],total:0,params:{keyword:"",tag_id:l("tag_id"),category_id:l("category_id")},href:"/articleDetail?article_title="}),c=a=>B(a,!0),s=()=>{H({url:"/static/articleslist.json",method:"get"}).then(a=>{console.log(a),t.total=a.list.length,t.articlesList=a.list})},m=(a,u)=>{t.params.tag_id=l("tag_id"),t.params.category_id=l("category_id"),t.articlesList=[],t.params.pageNum=1,s()};return v(()=>{s(),window.onscroll=()=>{C()+w()>E()-100&&t.isLoadEnd===!1&&t.isLoading===!1&&s()},document.addEventListener("scroll",x)}),{state:t,formatTime:c,getData:s,routeChange:m}}}),I={class:"left clearfix"},j={class:"articles-list",id:"list"},q=["href"],F={class:"content"},G={class:"title"},J={class:"abstract"},K={class:"meta"},M={key:0,class:"time"};function Q(e,o,t,c,s,m){const a=p("LoadingCustom"),u=p("LoadEnd");return r(),d("div",I,[n("ul",j,[k(T,{name:"el-fade-in"},{default:A(()=>[(r(!0),d(S,null,N(e.state.articlesList,i=>(r(),d("li",{key:i.title,class:"item"},[n("a",{href:e.state.href+i.name,target:"_blank"},[n("div",F,[n("h4",G,g(i.title),1),n("p",J,g(i.desc),1),n("div",K,[i.create_time?(r(),d("span",M,g(e.formatTime(i.create_time)),1)):_("",!0)])])],8,q)]))),128))]),_:1})]),e.state.isLoading?(r(),h(a,{key:0})):_("",!0),e.state.isLoadEnd?(r(),h(u,{key:1})):_("",!0)])}var P=f(z,[["render",Q],["__scopeId","data-v-0ecb0e58"]]);export{P as default};
