import{d as I,r as B,a as y,c as f,w as l,u as N,b,E as R,o as c,e as o,f as i,g as k,h as w,s as T,i as Y,j as L,k as M,l as $,m as h,n as j,t as z,p as A,_ as D}from"./index-322f1065.js";/* empty css                *//* empty css                 *//* empty css                  */const Z={class:"card-header"},G=I({__name:"Signup",setup(P){const g=B(),v=N(),m=(u,e,n)=>{e===""?n(new Error("The value should not be empty.")):n()},V=(u,e,n)=>{String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?n():n(new Error("The email is not valid"))},t=y({username:"",email:"",password:"",token:""}),E=y({username:[{validator:m,trigger:"blur"}],email:[{validator:V,trigger:"blur"}],password:[{validator:m,trigger:"blur"}],token:[{validator:m,trigger:"blur"}]}),S=async u=>{u&&u.validate(async e=>{if(e){const{username:n,email:d,password:p,token:_}=t,{data:s,error:a}=await T.auth.signUp({email:d,password:p,options:{data:{username:n,token:_}}});if(a){console.error("Sign up failed:",a.message);return}console.log("New user signed up:",s.user),v.push("/")}else{console.log("error submit!");return}})},x=()=>{v.push("/login")};return(u,e)=>{const n=Y,d=b("Moon"),p=b("Sunny"),_=L,s=M,a=$,C=h,F=j,U=R;return c(),f(U,{class:"login",justify:"center",align:"middle"},{default:l(()=>[o(F,{class:"box-card"},{header:l(()=>[i("div",Z,[e[7]||(e[7]=i("span",null,"Sign Up",-1)),o(n,{type:"primary",class:"signup",onClick:x},{default:l(()=>e[6]||(e[6]=[k("Go Log In")])),_:1}),i("div",{class:"dark-icon",onClick:e[0]||(e[0]=r=>w(z)())},[o(_,null,{default:l(()=>[w(A)?(c(),f(d,{key:0})):(c(),f(p,{key:1}))]),_:1})])])]),default:l(()=>[i("div",null,[o(C,{ref_key:"ruleFormRef",ref:g,model:t,"status-icon":"",rules:E,"label-width":"60px",class:"demo-ruleForm"},{default:l(()=>[o(a,{label:"用户名"},{default:l(()=>[o(s,{placeholder:"Your username",modelValue:t.username,"onUpdate:modelValue":e[1]||(e[1]=r=>t.username=r),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),o(a,{label:"邮箱"},{default:l(()=>[o(s,{placeholder:"Your email",type:"email",modelValue:t.email,"onUpdate:modelValue":e[2]||(e[2]=r=>t.email=r)},null,8,["modelValue"])]),_:1}),o(a,{label:"密码"},{default:l(()=>[o(s,{placeholder:"Your password",modelValue:t.password,"onUpdate:modelValue":e[3]||(e[3]=r=>t.password=r),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(a,{label:"Token"},{default:l(()=>[o(s,{placeholder:"Please enter the token provided by the administrator in order to register. Your token will determine your user role.",modelValue:t.token,"onUpdate:modelValue":e[4]||(e[4]=r=>t.token=r),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(a,null,{default:l(()=>[o(n,{type:"primary",onClick:e[5]||(e[5]=r=>S(g.value))},{default:l(()=>e[8]||(e[8]=[k("Sign Up")])),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})]),_:1})}}});const O=D(G,[["__scopeId","data-v-f7e508db"]]);export{O as default};
