import{d as b,r as C,x as _,g as f,f as r,w as a,v,l as y,B as k,o as g,h as l,G as u,C as x}from"./index-fc2d5d22.js";/* empty css               *//* empty css                  */import{d as c}from"./database-38f6de2b.js";import{u as D}from"./index-b2735612.js";const E={class:"about"},P={style:{"padding-bottom":"15px"}},h=D(),B={name:"ContestsList",data(){return{parentCriteria:[]}},async created(){this.whenCreated()},methods:{async whenCreated(){const{data:o,error:t}=await c.methods.getParentCriteria(h.chosenContestIDForNextLevel);console.log(o),t?console.error("Error fetching contests:",t):this.parentCriteria=o||[]},chooseParentCriteria(o){const t=this.parentCriteria[o].id;h.setParentCriteriaIDNextLevel(t),v.push({name:"childCriteriaList"}),console.log("Set ParentCriteriaIDNextLevel to "+t+"and route")},async deleteRow(o){const t=this.parentCriteria[o].id,{error:i}=await c.methods.deleteByID("Parent_Criteria",t);i?console.error("Error deleting the selected data:",i):(console.log("Successfully delete the item from table."),this.whenCreated())}}},T=b({...B,setup(o){const t=C(!1),i=C(!1);return C(!1),(d,e)=>{const n=y,s=x,w=k;return g(),_("div",E,[e[6]||(e[6]=f("div",{class:"header"},[f("h1",null,"List of Parent Criteria from the chosen contest")],-1)),f("div",P,[r(n,{type:"primary",onClick:e[0]||(e[0]=p=>t.value=!0)},{default:a(()=>e[2]||(e[2]=[l("Add a new parent criterion")])),_:1})]),r(w,{data:d.parentCriteria,stripe:"",border:"",style:{width:"100%"}},{default:a(()=>[r(s,{prop:"Contests.season",label:"Season",width:"180",fixed:""}),r(s,{prop:"criteria_alphabet",label:"Alphabet",width:"180"}),r(s,{prop:"criteria_title",label:"Title",width:"180"}),r(s,{fixed:"right",label:"Operations",width:"180"},{default:a(p=>[r(n,{link:"",type:"primary",size:"small",onClick:e[1]||(e[1]=m=>i.value=!0)},{default:a(()=>e[3]||(e[3]=[l("Edit")])),_:1}),r(n,{link:"",type:"danger",size:"small",onClick:u(m=>d.deleteRow(p.$index),["prevent"])},{default:a(()=>e[4]||(e[4]=[l("Delete")])),_:2},1032,["onClick"]),r(n,{link:"",type:"info",onClick:u(m=>d.chooseParentCriteria(p.$index),["prevent"])},{default:a(()=>e[5]||(e[5]=[l("Choose")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}}});export{T as default};
