import{_ as F,d as c,r as f,e as g,h as a,w as r,o as n,s as E,m as B,p as m,q as D,y as _}from"./index.85807a61.js";const w=(e,u,t)=>{if(!u)return t(new Error("\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A"))},b=(e,u,t)=>{if(!u)return t(new Error("\u624B\u673A\u4E0D\u80FD\u4E3A\u7A7A"))},C=(e,u,t)=>{if(!u)return t(new Error("\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A"))},y=(e,u,t)=>{if(!u)return t(new Error("\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"))},h=c({name:"Message",setup(){const e=f({btnLoading:!1,cacheTime:0,times:0,params:{email:"",phone:"",name:"",content:""},rules:{email:[{validator:w,trigger:"blur"}],phone:[{validator:b,trigger:"blur"}],name:[{validator:C,trigger:"blur"}],content:[{validator:y,trigger:"blur"}]}});return{state:e,submit:async()=>{if(e.times>3){n({message:"\u60A8\u4ECA\u5929\u7559\u8A00\u7684\u6B21\u6570\u5DF2\u7ECF\u7528\u5B8C\uFF0C\u660E\u5929\u518D\u6765\u7559\u8A00\u5427\uFF01",type:"warning"});return}let p=new Date().getTime();if(p-e.cacheTime<6e4){n({message:"\u60A8\u7559\u8A00\u592A\u8FC7\u9891\u7E41\uFF0C1 \u5206\u949F\u540E\u518D\u6765\u7559\u8A00\u5427\uFF01",type:"warning"});return}const i=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");if(e.params.email)if(i.test(e.params.email))if(e.params.phone)if(e.params.name){if(!e.params.content){n({message:"\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",type:"warning"});return}}else{n({message:"\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A",type:"warning"});return}else{n({message:"\u624B\u673A\u4E0D\u80FD\u4E3A\u7A7A",type:"warning"});return}else{n({message:"\u8BF7\u8F93\u5165\u683C\u5F0F\u6B63\u786E\u7684\u90AE\u7BB1\uFF01",type:"warning"});return}else{n({message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A\uFF01",type:"warning"});return}e.btnLoading=!0,await E.post(B.addMessage,e.params),e.btnLoading=!1,e.times++,e.cacheTime=p,n({message:"\u611F\u8C22\u60A8\u7684\u7559\u8A00\uFF0C\u6709\u5FC5\u8981\u7684\uFF0C\u535A\u4E3B\u6709\u7A7A\u90FD\u4F1A\u56DE\u590D\u60A8\u7684 \uFF01",type:"success"}),e.params.content=""}}}}),V={class:"message left"},v=_("\u63D0\u4EA4");function k(e,u,t,p,i,z){const l=m("el-input"),o=m("el-form-item"),d=m("el-button"),A=m("el-form");return D(),g("div",V,[a(A,{model:e.state.params,"status-icon":"",rules:e.state.rules,ref:"params","label-width":"50px",class:"demo-ruleForm"},{default:r(()=>[a(o,{label:"\u90AE\u7BB1",prop:"email"},{default:r(()=>[a(l,{type:"text",placeholder:"\u5FC5\u586B",modelValue:e.state.params.email,"onUpdate:modelValue":u[0]||(u[0]=s=>e.state.params.email=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(o,{label:"\u624B\u673A",prop:"phone"},{default:r(()=>[a(l,{modelValue:e.state.params.phone,"onUpdate:modelValue":u[1]||(u[1]=s=>e.state.params.phone=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(o,{label:"\u540D\u5B57",prop:"name"},{default:r(()=>[a(l,{modelValue:e.state.params.name,"onUpdate:modelValue":u[2]||(u[2]=s=>e.state.params.name=s)},null,8,["modelValue"])]),_:1}),a(o,{label:"\u5185\u5BB9",prop:"content"},{default:r(()=>[a(l,{type:"textarea",placeholder:"\u5FC5\u586B",modelValue:e.state.params.content,"onUpdate:modelValue":u[3]||(u[3]=s=>e.state.params.content=s)},null,8,["modelValue"])]),_:1}),a(o,null,{default:r(()=>[a(d,{type:"primary",loading:e.state.btnLoading,onClick:e.submit},{default:r(()=>[v]),_:1},8,["loading","onClick"])]),_:1})]),_:1},8,["model","rules"])])}var $=F(h,[["render",k],["__scopeId","data-v-5fb3e94d"]]);export{$ as default};
