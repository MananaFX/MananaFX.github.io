import{L as f}from"./LoadEnd.8be8d25d.js";import{L as g}from"./Loading.0f685193.js";import{_ as h,d as v,r as L,C as T,E as w,G as x,H as C,e as r,h as c,w as n,J as E,K as k,p as a,q as i,F as y,v as B,x as $,f as m,t as _}from"./index.068f50e1.js";const z=v({name:"Timeline",components:{LoadEnd:f,LoadingCustom:g},setup(){const e=L({isLoadEnd:!1,isLoading:!1,list:[],total:0}),l=t=>E(t,!0),s=()=>{k({url:"/static/list.json",method:"get"}).then(t=>{console.log(t),e.total=t.list.length,e.list=t.list})};return T(()=>{s(),window.onscroll=()=>{w()+x()>C()-100&&e.isLoadEnd===!1&&e.isLoading===!1&&s()}}),{state:e,formatTime:l,getData:s}}}),D={class:"timeline left"};function H(e,l,s,t,F,N){const d=a("el-card"),p=a("el-timeline-item"),u=a("el-timeline");return i(),r("div",D,[c(u,null,{default:n(()=>[(i(!0),r(y,null,B(e.state.list,(o,S)=>(i(),$(p,{key:o._id,color:o.color,placement:"top",timestamp:o.timestamp,size:o.size},{default:n(()=>[c(d,null,{default:n(()=>[m("h4",null,_(o.title),1),m("p",null,_(o.content),1)]),_:2},1024)]),_:2},1032,["color","timestamp","size"]))),128))]),_:1})])}var G=h(z,[["render",H],["__scopeId","data-v-e4954480"]]);export{G as default};
