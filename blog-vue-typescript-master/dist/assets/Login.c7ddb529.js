import{_ as w,d as b,c as g,r as F,a4 as _,e as h,h as o,w as u,o as l,p as r,q as y,A as B}from"./index.db7a183f.js";const C=b({name:"Login",props:{visible:{type:Boolean,default:!1},handleFlag:{type:String,default:!1},isMobile:{type:Boolean,default:!1}},emits:["ok","cancel"],setup(e,t){const d=g(),a=F({dialogDodel:e.visible,btnLoading:!1,loading:!1,formLabelWidth:e.isMobile?"40px":"60px",params:{name:"",password:"",photo:"",token:"1"}}),i=async()=>{a.btnLoading=!0,window.localStorage.setItem("token","why"),a.btnLoading=!1,t.emit("ok",!1),l({message:"\u64CD\u4F5C\u6210\u529F",type:"success"}),await d.push({path:"/"})},p=()=>{if(a.params.password){if(!a.params.name){l({message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF01",type:"warning"});return}}else{l({message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01",type:"warning"});return}if(a.params.name!="MananaFX"){l({message:"\u7528\u6237\u540D\u9519\u8BEF\uFF01",type:"warning"});return}if(a.params.password!="121008"){l({message:"\u5BC6\u7801\u9519\u8BEF\uFF01",type:"warning"});return}i()},s=()=>(t.emit("cancel",!1),!1);return _(e,(n,f)=>{a.dialogDodel=n.visible}),{router:d,state:a,handleOk:p,submit:i,cancel:s}}}),D={title:"\u767B\u5F55"},k=B("\u767B\u5F55 ");function V(e,t,d,a,i,p){const s=r("el-input"),n=r("el-formItem"),f=r("el-button"),c=r("el-form");return y(),h("div",D,[o(c,null,{default:u(()=>[o(n,{label:"\u8D26\u53F7","label-width":e.state.formLabelWidth},{default:u(()=>[o(s,{modelValue:e.state.params.name,"onUpdate:modelValue":t[0]||(t[0]=m=>e.state.params.name=m),placeholder:"\u8D26\u53F7",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(n,{label:"\u5BC6\u7801","label-width":e.state.formLabelWidth},{default:u(()=>[o(s,{type:"password",placeholder:"\u5BC6\u7801",modelValue:e.state.params.password,"onUpdate:modelValue":t[1]||(t[1]=m=>e.state.params.password=m),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(f,{type:"primary",round:"",onClick:e.handleOk},{default:u(()=>[k]),_:1},8,["onClick"])]),_:1})])}var v=w(C,[["render",V]]);export{v as default};
