import{_ as d,d as c,r as o,C as r,e as l,s as n,m as u,q as v,D as _}from"./index.2822aa83.js";import{_ as p}from"./Oman2.e18baec3.js";var m="./assets/OmanBridge.c3fbd8a4.jpg",g="./assets/pinkHeart.7dfada27.jpg",b="./assets/OmanBro.671e6712.jpg";const f=c({name:"CustomSlider",setup(e,i){const t=o({isLoadEnd:!1,isLoading:!1,list:[],total:0,params:{keyword:"",pageNum:1,pageSize:100}}),s=async()=>{t.isLoading=!0;const a=await n.get(u.getTagList,{params:t.params});t.isLoading=!1,t.list=[...t.list,...a.list],t.total=a.count,t.params.pageNum++,t.total===t.list.length&&(t.isLoadEnd=!0)};return r(()=>{s()}),{state:t}}}),h={class:"right slider"},E=_('<img class="right-logo" src="'+p+'" alt="" data-v-24070cb2><div class="title" data-v-24070cb2>\u5C0F\u66FC\u66FC</div><div class="right-content" data-v-24070cb2></div><div class="introduce" data-v-24070cb2><div class="title" data-v-24070cb2>\u6211\u4E5F\u6CA1\u60F3\u597D\u653E\u4EC0\u4E48</div><div class="content" data-v-24070cb2><img style="width:100%;" src="'+m+'" alt="\u56FE\u72471" data-v-24070cb2></div></div><div class="introduce" data-v-24070cb2><div class="title" data-v-24070cb2>\u7D22\u6027\u5C31\u653E</div><div class="content" data-v-24070cb2><img style="width:100%;" src="'+g+'" alt="\u56FE\u72472" data-v-24070cb2></div></div><div class="introduce" data-v-24070cb2><div class="title" data-v-24070cb2>\u4E09\u5F20\u56FE\u7247\u5427</div><div class="content" data-v-24070cb2><img style="width:100%;" src="'+b+'" alt="\u56FE\u72473" data-v-24070cb2></div></div>',6),C=[E];function F(e,i,t,s,a,y){return v(),l("div",h,C)}var w=d(f,[["render",F],["__scopeId","data-v-24070cb2"]]);export{w as default};
