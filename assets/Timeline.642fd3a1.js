import{L as f}from"./LoadEnd.ada827e6.js";import{L as g}from"./Loading.d6c68a5c.js";import{_ as L,d as h,r as v,B as T,D as w,E as x,G as B,e as r,h as m,w as a,I as E,J as k,p as n,q as i,F as y,v as z,x as C,f as c,t as _}from"./index.ba2d3716.js";const D=h({name:"Timeline",components:{LoadEnd:f,LoadingCustom:g},setup(){const e=v({isLoadEnd:!1,isLoading:!1,list:[],total:0,params:{pageNum:1,pageSize:10}}),l=t=>E(t,!0),s=()=>{k({url:"/timeLineList.json",method:"get"}).then(t=>{console.log(t),e.total=t.list.length,e.list=t.list})};return T(()=>{s(),window.onscroll=()=>{w()+x()>B()-100&&e.isLoadEnd===!1&&e.isLoading===!1&&s()}}),{state:e,formatTime:l,getData:s}}}),$={class:"timeline left"};function N(e,l,s,t,S,F){const d=n("el-card"),p=n("el-timeline-item"),u=n("el-timeline");return i(),r("div",$,[m(u,null,{default:a(()=>[(i(!0),r(y,null,z(e.state.list,(o,H)=>(i(),C(p,{key:o._id,color:o.color,placement:"top",timestamp:o.timestamp,size:o.size},{default:a(()=>[m(d,null,{default:a(()=>[c("h4",null,_(o.title),1),c("p",null,_(o.content),1)]),_:2},1024)]),_:2},1032,["color","timestamp","size"]))),128))]),_:1})])}var q=L(D,[["render",N],["__scopeId","data-v-425601c6"]]);export{q as default};
