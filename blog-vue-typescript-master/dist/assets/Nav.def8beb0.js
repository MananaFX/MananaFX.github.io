import{_ as L,d as N,a as V,b as D,g as O,u as R,k as H,c as T,r as q,i as z,e as c,f as o,h as i,w as a,t as y,n as B,j as v,l as J,s as P,m as j,o as Q,p as d,q as l,F as X,v as Y,x as U,y as m,z as G,A as K,B as W}from"./index.2822aa83.js";var E="./assets/cloudSheep.d8de6119.jpg";const Z=N({name:"Nav",components:{RegisterAndLogin:V(()=>D(()=>import("./RegisterAndLogin.b1aaa5b9.js"),["assets/RegisterAndLogin.b1aaa5b9.js","assets/RegisterAndLogin.bf60cbae.css","assets/index.2822aa83.js","assets/index.219d4036.css"]))},computed:{userInfo(){let e={_id:"",name:"",avatar:""};return window.sessionStorage.userInfo&&(e=JSON.parse(window.sessionStorage.userInfo),this.$store.commit("SAVE_USER",{userInfo:e})),this.$store.state.user.userInfo&&(e=this.$store.state.user.userInfo),e}},watch:{$route:{handler(e,n){this.routeChange(e,n)},immediate:!0}},mounted(){this.routeChange(this.$route,this.$route);const e=O("code");e&&this.getUser(e)},setup(e,n){const g=R(H),I=T(),s=q({visible:!1,handleFlag:"",title:"\u6162\u6162\u559C\u6B22\u4F60",list:[{index:"1",path:"/",name:"\u9996\u9875"},{index:"2",path:"/articles",name:"\u6587\u7AE0"},{index:"3",path:"/timeline",name:"\u5386\u7A0B"},{index:"4",path:"/ToLoveStory",name:"\u793C\u7269"}],activeIndex:"0",enterSlideUp:!1,leaveSlideDown:!1,isShow:!1,isMobile:z()}),b=(t,C)=>{for(let u=0;u<s.list.length;u++){const h=s.list[u];if(h.path===t.path){s.activeIndex=u+1+"",s.title=h.name;break}}},r=(t,C)=>{s.activeIndex=t},_=t=>{s.visible=t},S=t=>{s.visible=t},w=t=>{s.handleFlag=t,s.visible=!0},p=()=>{window.sessionStorage.userInfo="",g.commit("SAVE_USER",{userInfo:{_id:"",name:"",avatar:""}})};return{state:s,handleCancel:S,handleOk:_,handleClick:w,handleLogout:p,handleClickMenu:t=>{s.isShow=!1,t==="/login"&&(s.handleFlag="login",s.visible=!0),t==="/register"&&(s.handleFlag="register",s.visible=!0),t==="/logout"&&p()},handleMenu:()=>{s.isShow=!0,s.enterSlideUp=!0},getUser:async t=>{const C=J.service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(255, 255, 255, 0.7)"}),u=await P.post(j.getUser,{code:t},{withCredentials:!0});C.close();const h={_id:u._id,name:u.name,avatar:u.avatar};g.commit("SAVE_USER",{userInfo:h}),window.sessionStorage.userInfo=JSON.stringify(h),Q({message:"\u64CD\u4F5C\u6210\u529F",type:"success"});let k=JSON.parse(window.sessionStorage.preventHistory);k&&I.push({path:k.name,query:k.query})},handleSelect:r,routeChange:b,handleHideMenu:()=>{s.enterSlideUp=!1,s.leaveSlideDown=!0,setTimeout(()=>{s.leaveSlideDown=!1,s.isShow=!1},300)}}}}),f=e=>(G("data-v-6474643a"),e=e(),K(),e),x={key:0,class:"nav"},ee={class:"nav-content"},te=f(()=>o("img",{class:"logo",src:E,alt:"\u68C9\u82B1\u7F8A logo"},null,-1)),se={class:"nav-right"},oe={class:"el-dropdown-link"},ne=f(()=>o("i",{class:"el-icon-arrow-down el-icon--right"},null,-1)),ae={key:0,class:"user-img",src:W,alt:"\u5C0F\u66FC\u66FC logo"},ie=["src"],le=m("\u767B \u51FA"),de={key:1,class:"nav"},re={class:"nav-mobile"},ue={class:"nav-mobile-logo"},ce=f(()=>o("img",{class:"logo fl",src:E,alt:"\u6211\u662F\u68C9\u82B1\u7F8A"},null,-1)),me={class:"title"},_e=f(()=>o("i",{class:"el-icon-menu"},null,-1)),he=[_e],ve={class:"list"},pe=m("\u9996 \u9875"),fe=m("\u6587 \u7AE0"),ge=m("\u5386 \u7A0B"),Se=m("\u793C \u7269");function we(e,n,g,I,s,b){const r=d("router-link"),_=d("el-col"),S=d("el-menuItem"),w=d("el-menu"),p=d("el-dropdown-item"),M=d("el-dropdown-menu"),F=d("el-dropdown"),A=d("el-row"),$=d("RegisterAndLogin");return l(),c("div",null,[e.state.isMobile?(l(),c("div",de,[o("div",re,[o("div",ue,[i(r,{to:"/"},{default:a(()=>[ce]),_:1})]),o("div",me,y(e.state.title),1),o("div",{class:"menu",onClick:n[0]||(n[0]=(...t)=>e.handleMenu&&e.handleMenu(...t))},he)]),e.state.isShow?(l(),c("div",{key:0,class:B(["nav-mobile-content",{"enter-slideUp":e.state.enterSlideUp,"leave-slideDown":e.state.leaveSlideDown}])},[o("div",ve,[o("div",{onClick:n[1]||(n[1]=t=>e.handleClickMenu("")),class:"item"},[i(r,{to:"/"},{default:a(()=>[pe]),_:1})]),o("div",{onClick:n[2]||(n[2]=t=>e.handleClickMenu("/articles")),class:"item"},[i(r,{to:"/articles"},{default:a(()=>[fe]),_:1})]),o("div",{onClick:n[3]||(n[3]=t=>e.handleClickMenu("/timeline")),class:"item"},[i(r,{to:"/timeline"},{default:a(()=>[ge]),_:1})]),o("div",{onClick:n[4]||(n[4]=t=>e.handleClickMenu("/toLoveStory")),class:"item"},[i(r,{to:"/toLoveStory"},{default:a(()=>[Se]),_:1})])])],2)):v("",!0)])):(l(),c("div",x,[o("div",ee,[i(A,{gutter:20},{default:a(()=>[i(_,{span:3},{default:a(()=>[i(r,{to:"/"},{default:a(()=>[te]),_:1})]),_:1}),i(_,{span:16},{default:a(()=>[i(w,{router:!0,"default-active":e.state.activeIndex,"active-text-color":"#409eff",class:"el-menu-demo",mode:"horizontal",onSelect:e.handleSelect},{default:a(()=>[(l(!0),c(X,null,Y(e.state.list,t=>(l(),U(S,{route:t.path,index:t.index,key:t.index},{default:a(()=>[m(y(t.name),1)]),_:2},1032,["route","index"]))),128))]),_:1},8,["default-active","onSelect"])]),_:1}),e.userInfo._id?(l(),U(_,{key:0,span:5},{default:a(()=>[o("div",se,[i(F,{onCommand:e.handleLogout},{default:a(()=>[o("span",oe,[m(y(e.userInfo.name),1),ne]),e.userInfo.avatar?v("",!0):(l(),c("img",ae)),e.userInfo.avatar?(l(),c("img",{key:1,class:"user-img",src:e.userInfo.avatar,alt:"BiaoChenXuYing"},null,8,ie)):v("",!0),i(M,{slot:"dropdown"},{default:a(()=>[i(p,{command:"logout"},{default:a(()=>[le]),_:1})]),_:1})]),_:1},8,["onCommand"])])]),_:1})):v("",!0)]),_:1})])])),e.state.isShow?(l(),c("div",{key:2,class:B(["mask",{"mask-fade-out":e.state.leaveSlideDown}]),onClick:n[5]||(n[5]=(...t)=>e.handleHideMenu&&e.handleHideMenu(...t))},null,2)):v("",!0),i($,{visible:e.state.visible,isMobile:e.state.isMobile,handleFlag:e.state.handleFlag,onOk:e.handleOk,onCancel:e.handleCancel},null,8,["visible","isMobile","handleFlag","onOk","onCancel"])])}var ke=L(Z,[["render",we],["__scopeId","data-v-6474643a"]]);export{ke as default};
