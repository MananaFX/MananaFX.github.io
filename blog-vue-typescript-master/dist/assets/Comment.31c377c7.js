import{_ as C,d as F,r as g,a4 as A,x as y,w as a,o,s as w,m as D,p as s,q as E,h as l,f as v,A as B}from"./index.d2777bb8.js";const h=F({name:"Comment",props:{visible:{type:Boolean,default:!1},comment_id:{type:String,default:""},article_id:{type:String,default:""},to_user:{default:{}}},emits:["ok","cancel"],setup(e,u){const t=g({dialogDodel:e.visible,btnLoading:!1,content:"",cacheTime:0,times:0}),c=()=>(u.emit("cancel",!1),!1),m=async()=>{if(!e.article_id){o({message:"\u8BE5\u6587\u7AE0\u4E0D\u5B58\u5728\uFF01",type:"error"});return}if(t.times>2){o({message:"\u60A8\u4ECA\u5929\u8BC4\u8BBA\u7684\u6B21\u6570\u5DF2\u7ECF\u7528\u5B8C\uFF0C\u660E\u5929\u518D\u6765\u8BC4\u8BBA\u5427\uFF01",type:"warning"});return}let n=new Date().getTime();if(n-t.cacheTime<4e3){o({message:"\u60A8\u8BC4\u8BBA\u592A\u8FC7\u9891\u7E41\uFF0C1 \u5206\u949F\u540E\u518D\u6765\u8BC4\u8BBA\u5427\uFF01",type:"warning"});return}if(!t.content){o({message:"\u8BC4\u8BBA\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",type:"error"});return}let i="";if(window.sessionStorage.userInfo)i=JSON.parse(window.sessionStorage.userInfo)._id;else{o({message:"\u767B\u5F55\u624D\u80FD\u8BC4\u8BBA\uFF0C\u8BF7\u5148\u767B\u5F55\uFF01",type:"warning"});return}t.btnLoading=!0,await w.post(D.addThirdComment,{article_id:e.article_id,user_id:i,comment_id:e.comment_id,to_user:JSON.stringify(e.to_user),content:t.content}),t.btnLoading=!1,t.times++,t.cacheTime=n,t.content="",u.emit("ok",!1),o({message:"\u64CD\u4F5C\u6210\u529F",type:"success"})};return A(e,(r,n)=>{t.dialogDodel=r.visible}),{state:t,cancel:c,handleOk:m}}}),k={slot:"footer",class:"dialog-footer"},V=B("\u53D6\u6D88"),b=B("\u786E \u5B9A");function T(e,u,t,c,m,r){const n=s("el-input"),i=s("el-form-item"),_=s("el-form"),f=s("el-button"),p=s("el-dialog");return E(),y(p,{title:"\u8BC4\u8BBA",width:"60%",modelValue:e.state.dialogDodel,"onUpdate:modelValue":u[1]||(u[1]=d=>e.state.dialogDodel=d),onClose:e.cancel},{default:a(()=>[l(_,null,{default:a(()=>[l(i,null,{default:a(()=>[l(n,{type:"textarea",modelValue:e.state.content,"onUpdate:modelValue":u[0]||(u[0]=d=>e.state.content=d),placeholder:"\u6587\u660E\u793E\u4F1A\uFF0C\u7406\u6027\u8BC4\u8BBA",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),v("div",k,[l(f,{type:"default",onClick:e.cancel},{default:a(()=>[V]),_:1},8,["onClick"]),l(f,{type:"primary",onClick:e.handleOk},{default:a(()=>[b]),_:1},8,["onClick"])])]),_:1},8,["modelValue","onClose"])}var I=C(h,[["render",T],["__scopeId","data-v-7bd21694"]]);export{I as default};
