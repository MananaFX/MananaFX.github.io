import{_ as b,d as F,c as h,r as y,a5 as C,x as g,w as l,o as s,p as n,q as c,h as u,f as V,j as B,y as D}from"./index.0049962c.js";const k=F({name:"RegisterAndLogin",props:{visible:{type:Boolean,default:!1},handleFlag:{type:String,default:!1},isMobile:{type:Boolean,default:!1}},emits:["ok","cancel"],setup(e,a){const i=h(),o=y({dialogDodel:e.visible,btnLoading:!1,loading:!1,formLabelWidth:e.isMobile?"40px":"60px",params:{name:"",password:"",photo:"",token:"1"}}),m=async()=>{o.btnLoading=!0,window.localStorage.setItem("token","why"),o.btnLoading=!1,a.emit("ok",!1),s({message:"\u64CD\u4F5C\u6210\u529F",type:"success"}),await i.push({path:"/"})},p=()=>{if(o.params.password){if(!o.params.name){s({message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF01",type:"warning"});return}}else{s({message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01",type:"warning"});return}if(o.params.name!="MananaFX"){s({message:"\u7528\u6237\u540D\u9519\u8BEF\uFF01",type:"warning"});return}if(o.params.password!="121008"){s({message:"\u5BC6\u7801\u9519\u8BEF\uFF01",type:"warning"});return}m()},d=()=>(a.emit("cancel",!1),!1);return C(e,(r,f)=>{o.dialogDodel=r.visible}),{router:i,state:o,handleOk:p,submit:m,cancel:d}}}),v={slot:"footer",class:"dialog-footer"},L=D("\u767B \u5F55");function A(e,a,i,o,m,p){const d=n("el-input"),r=n("el-formItem"),f=n("el-form"),_=n("el-button"),w=n("el-dialog");return c(),g(w,{title:"\u767B\u5F55",width:e.isMobile?"90%":"50%",modelValue:e.state.dialogDodel,"onUpdate:modelValue":a[2]||(a[2]=t=>e.state.dialogDodel=t),onClose:e.cancel,"show-close":!0},{default:l(()=>[u(f,null,{default:l(()=>[u(r,{label:"\u8D26\u53F7","label-width":e.state.formLabelWidth},{default:l(()=>[u(d,{modelValue:e.state.params.name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.state.params.name=t),placeholder:"\u8D26\u53F7",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),u(r,{label:"\u5BC6\u7801","label-width":e.state.formLabelWidth},{default:l(()=>[u(d,{type:"password",placeholder:"\u5BC6\u7801",modelValue:e.state.params.password,"onUpdate:modelValue":a[1]||(a[1]=t=>e.state.params.password=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1}),V("div",v,[e.handleFlag==="login"?(c(),g(_,{key:0,loading:e.state.btnLoading,type:"primary",onClick:e.handleOk},{default:l(()=>[L]),_:1},8,["loading","onClick"])):B("",!0)])]),_:1},8,["width","modelValue","onClose"])}var I=b(k,[["render",A],["__scopeId","data-v-5737e016"]]);export{I as default};
