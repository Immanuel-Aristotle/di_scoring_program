import{s as a}from"./index-09eaad1e.js";const c={contests:"id,title,season,type",childCriteria:`
    id,
    Parent_Criteria (
      criteria_alphabet,
      Contests (season)
    ),
    child_criterion_number, 
    criterion_title,
    criterion_description,
    whether_score_by_choice,
    maximum_score,
    choice_score_array
  `,parentCriteria:`
    id,
    Contests (season),
    criteria_alphabet, 
    criteria_title
  `,users:"id,role,username,email"},o=r=>{if(r)return console.error("Error fetching data:",r,r.message),{data:[],error:r}},l=async(r,e,t=0,s=9)=>{let{data:n,error:i}=await a.from(r).select(e);return console.log(n),i?(console.error("Error fetching contests:",i),{data:[],error:i}):{data:n,error:null}},d=async(r=0,e=9)=>{const{data:t,error:s}=await a.from("Contests").select(c.contests);return console.log(t),s?(console.error("Error fetching contests:",s),{data:[],error:s}):{data:t,error:null}},u=async r=>{const{data:e,error:t}=await a.from("Contests").select(c.contests).eq("id",r);return console.log(e),o(t),{data:e,error:null}},C=async(r,e)=>{const{error:t}=await a.from(r).delete().eq("id",e);return o(t),{error:null}},m=async r=>{const{data:e,error:t}=await a.from("Parent_Criteria").select(c.parentCriteria).eq("criteria_season_id",r);return console.log(e),o(t),{data:e,error:null}},_=async r=>{const{data:e,error:t}=await a.from("Child_Criteria").select(c.childCriteria).eq("parent_criterion",r);return console.log(e),o(t),{data:e,error:null}},g=async(r,e,t,s)=>{const{data:n,error:i}=await a.from("Contests").update({title:e,season:t,type:s}).eq("id",r).select();return console.log(n),o(i),{data:n,error:null}},h=async()=>{const{data:r,error:e}=await a.from("Users").select(c.users);return o(e),{data:r,error:null}},p={methods:{errorHandler:o,getData:l,getContests:d,getContestByID:u,deleteByID:C,getParentCriteria:m,getChildCriteria:_,editContestRow:g,getUsers:h}};export{p as d};
