import{d as N,u as D,r as R,a as b,c as w,w as r,e as V,E as Y,o as k,f as o,g as f,h as x,i as h,t as K,j as M,k as v,v as O,x as E,l as j,m as L,n as $,p as q,q as z,s as G,_ as A}from"./index-2727bd88.js";/* empty css                *//* empty css                 *//* empty css                  */import{d as U}from"./database-8b6b9f68.js";import{s as H,u as S}from"./signup-35581db6.js";const J={class:"card-header"},Q=N({__name:"Signup",setup(W){const{validateEmail:P,validateEmpty:i,validateToken:B}=H,C=D(),y=R(),t=b({username:"",email:"",password:"",checkPass:"",token:""}),T=b({username:[{validator:i,trigger:"blur"}],email:[{validator:i,trigger:"blur"},{validator:P,trigger:"blur"}],password:[{validator:i,trigger:"blur"}],checkPass:[{validator:i,trigger:"blur"},{validator:(d,e,l)=>{e!==t.password?l(new Error("Two inputs don't match!")):l()},trigger:"blur"}],token:[{validator:i,trigger:"blur"},{validator:B,trigger:"blur"}]}),F=async d=>{d&&d.validate(async e=>{if(e){const{username:l,email:u,password:m,token:_}=t;let n="";for(let a in S)_==S[a]&&(n=a);if(await U.methods.checkEmailDuplicate(u)){v.alert("Email already exists, please use another email.","Notification",{confirmButtonText:"OK"});return}if(await U.methods.checkUsernameDuplicate(l)){v.alert("Username already exists, please use another username.","Notification",{confirmButtonText:"OK"});return}const{data:s,error:p}=await O.from("Users").insert([{role:n,username:l,email:u,password:m}]).select();console.log(s);let c=0;s!=null&&(c=s[0].id);const g={id:c,role:n,username:l,email:u,password:m};if(C.storeUser(g),p){console.error("Sign up failed:",p.message);return}v.alert("Sign up successfully! You are now redirected to the home page.","Notification",{confirmButtonText:"OK"}),E.push({name:"home"})}else{console.log("error submit!");return}})},I=()=>{E.push("/login")};return(d,e)=>{const l=j,u=V("Moon"),m=V("Sunny"),_=L,n=$,s=q,p=z,c=G,g=Y;return k(),w(g,{class:"login",justify:"center",align:"middle"},{default:r(()=>[o(c,{class:"box-card"},{header:r(()=>[f("div",J,[e[8]||(e[8]=f("span",null,"Sign Up",-1)),o(l,{type:"primary",class:"signup",onClick:I},{default:r(()=>e[7]||(e[7]=[x("Go Log In")])),_:1}),f("div",{class:"dark-icon",onClick:e[0]||(e[0]=a=>h(K)())},[o(_,null,{default:r(()=>[h(M)?(k(),w(u,{key:0})):(k(),w(m,{key:1}))]),_:1})])])]),default:r(()=>[f("div",null,[o(p,{ref_key:"ruleFormRef",ref:y,model:t,"status-icon":"",rules:T,"label-width":"60px",class:"demo-ruleForm"},{default:r(()=>[o(s,{label:"Username",prop:"username"},{default:r(()=>[o(n,{placeholder:"Your username",modelValue:t.username,"onUpdate:modelValue":e[1]||(e[1]=a=>t.username=a)},null,8,["modelValue"])]),_:1}),o(s,{label:"Email",prop:"email"},{default:r(()=>[o(n,{placeholder:"Your email",type:"email",modelValue:t.email,"onUpdate:modelValue":e[2]||(e[2]=a=>t.email=a)},null,8,["modelValue"])]),_:1}),o(s,{label:"Password",prop:"password"},{default:r(()=>[o(n,{placeholder:"Your password",modelValue:t.password,"onUpdate:modelValue":e[3]||(e[3]=a=>t.password=a),type:"password",autocomplete:"off","show-password":""},null,8,["modelValue"])]),_:1}),o(s,{label:"Confirm",prop:"checkPass"},{default:r(()=>[o(n,{placeholder:"Enter your password again",modelValue:t.checkPass,"onUpdate:modelValue":e[4]||(e[4]=a=>t.checkPass=a),type:"password",autocomplete:"off","show-password":""},null,8,["modelValue"])]),_:1}),o(s,{label:"Token",prop:"token"},{default:r(()=>[o(n,{autosize:{minRows:1,maxRows:3},type:"textarea",placeholder:"Please enter the token provided by the administrator in order to register. Your token will determine your user role.",modelValue:t.token,"onUpdate:modelValue":e[5]||(e[5]=a=>t.token=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(s,null,{default:r(()=>[o(l,{type:"primary",onClick:e[6]||(e[6]=a=>F(y.value))},{default:r(()=>e[9]||(e[9]=[x("Sign Up")])),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})]),_:1})}}});const se=A(Q,[["__scopeId","data-v-b48a5075"]]);export{se as default};
