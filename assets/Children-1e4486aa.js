import{d as w,r as n,x as C,g as d,f as o,w as a,l as b,B as y,o as x,h as c,G as S,C as g,F as v}from"./index-d7709c43.js";/* empty css                   *//* empty css               *//* empty css                  */import{d as m}from"./database-348ccfc6.js";import{u as k}from"./index-16921d40.js";const D={class:"about"},E={style:{"padding-bottom":"15px"}},B=k(),N={name:"ContestsList",data(){return{childCriteria:[]}},async created(){this.whenCreated()},methods:{async whenCreated(){const{data:t,error:e}=await m.methods.getChildCriteria(B.chosenParentCriteriaIDForNextLevel);console.log(t),e?console.error("Error fetching contests:",e):this.childCriteria=t||[],this.displayScore(this.childCriteria)},async deleteRow(t){const e=this.childCriteria[t].id,{error:l}=await m.methods.deleteByID("Parent_Criteria",e);l?console.error("Error deleting the selected data:",l):(console.log("Successfully delete the item from table."),this.whenCreated())},displayScore(t){for(let e=0;e<t.length;e++)t[e].whether_score_by_choice?t[e].displayScore="Score can be: "+t[e].choice_score_array:t[e].displayScore="Maximum Score: "+t[e].maximum_score}}},z=w({...N,setup(t){const e=n(!1),l=n(!1);return n(!1),(p,r)=>{const s=b,i=g,_=y,f=v;return x(),C("div",D,[r[5]||(r[5]=d("div",{class:"header"},[d("h1",null,"List of Child Criteria from the chosen parent criterion")],-1)),d("div",E,[o(s,{type:"primary",onClick:r[0]||(r[0]=h=>e.value=!0)},{default:a(()=>r[2]||(r[2]=[c("Add a new child criterion")])),_:1})]),o(_,{data:p.childCriteria,height:"500",stripe:"",border:"",style:{width:"100%"}},{default:a(()=>[o(i,{prop:"Parent_Criteria.Contests.season",label:"Season",width:"100",fixed:""}),o(i,{prop:"Parent_Criteria.criteria_alphabet",label:"Parent Criterion",width:"100",fixed:""}),o(i,{prop:"child_criterion_number",label:"Criterion Number",width:"100"}),o(i,{prop:"criterion_title",label:"Title",width:"180"}),o(i,{prop:"criterion_description",label:"Description",width:"300"}),o(i,{prop:"displayScore",label:"Score",width:"150"}),o(i,{fixed:"right",label:"Operations",width:"180"},{default:a(h=>[o(s,{link:"",type:"primary",size:"small",onClick:r[1]||(r[1]=u=>l.value=!0)},{default:a(()=>r[3]||(r[3]=[c("Edit")])),_:1}),o(s,{link:"",type:"danger",size:"small",onClick:S(u=>p.deleteRow(h.$index),["prevent"])},{default:a(()=>r[4]||(r[4]=[c("Delete")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),o(f)])}}});export{z as default};
