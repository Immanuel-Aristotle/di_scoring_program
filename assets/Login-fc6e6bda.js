import{d as L,s as f,a as B,r as R,b,c as _,w as o,u as N,e as U,E as j,o as g,f as s,g as d,h as k,i as E,j as D,k as M,l as O,m as P,n as Y,p as $,t as q,q as A,_ as T}from"./index-af83d4e5.js";/* empty css                *//* empty css                 *//* empty css                  */import{v as h,a as W}from"./login-f84dc849.js";const z=L("user",{state:()=>({user:null}),actions:{async fetchUser(){const{data:{user:t},error:a}=await f.auth.getUser();a&&console.error("Error fetching user:",a.message),this.user=t??null},setUser(t){this.user=t},async signOut(){const{error:t}=await f.auth.signOut();t&&console.error("Error signing out:",t.message),this.user=null}},getters:{isAuthenticated:t=>t.user!==null}}),G={class:"card-header"},H=B({__name:"Login",setup(t){const a=z(),w=R(),y=N(),r=b({email:"",password:""}),V=b({email:[{validator:h,trigger:"blur"},{validator:W,trigger:"blur"}],password:[{validator:h,trigger:"blur"}]}),x=async p=>{p&&p.validate(async e=>{if(e){const{email:l,password:m}=r,{data:i,error:u}=await f.auth.signInWithPassword({email:l,password:m});if(u){console.error("Login failed:",u.message);return}console.log("User logged in:",i.user),a.setUser(i.user),console.log(a.user),y.push("/")}else{console.log("error submit!");return}})},S=()=>{y.push("/signup")};return(p,e)=>{const l=D,m=U("Moon"),i=U("Sunny"),u=M,v=O,c=P,C=Y,F=$,I=j;return g(),_(I,{class:"login",justify:"center",align:"middle"},{default:o(()=>[s(F,{class:"box-card"},{header:o(()=>[d("div",G,[e[5]||(e[5]=d("span",null,"User Sign Up",-1)),s(l,{type:"primary",class:"signup",onClick:S},{default:o(()=>e[4]||(e[4]=[k("Sign Up")])),_:1}),d("div",{class:"dark-icon",onClick:e[0]||(e[0]=n=>E(q)())},[s(u,null,{default:o(()=>[E(A)?(g(),_(m,{key:0})):(g(),_(i,{key:1}))]),_:1})])])]),default:o(()=>[d("div",null,[s(C,{ref_key:"ruleFormRef",ref:w,model:r,"status-icon":"",rules:V,"label-width":"60px",class:"demo-ruleForm"},{default:o(()=>[s(c,{label:"Email",prop:"email"},{default:o(()=>[s(v,{placeholder:"Your email",type:"email",modelValue:r.email,"onUpdate:modelValue":e[1]||(e[1]=n=>r.email=n)},null,8,["modelValue"])]),_:1}),s(c,{label:"Password",prop:"password"},{default:o(()=>[s(v,{placeholder:"Your password",modelValue:r.password,"onUpdate:modelValue":e[2]||(e[2]=n=>r.password=n),type:"password",autocomplete:"off","show-password":""},null,8,["modelValue"])]),_:1}),s(c,null,{default:o(()=>[s(l,{type:"primary",onClick:e[3]||(e[3]=n=>x(w.value))},{default:o(()=>e[6]||(e[6]=[k("Log in")])),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1})]),_:1})}}});const ee=T(H,[["__scopeId","data-v-c84bd498"]]);export{ee as default};
