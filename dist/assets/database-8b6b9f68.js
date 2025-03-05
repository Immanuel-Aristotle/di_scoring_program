import{v as a}from"./index-2727bd88.js";const o={contests:"id,title,season,type",childCriteria:`
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
  `,users:"id,role,username,email,password"},s=e=>{if(e)return console.error("Error fetching data:",e,e.message),{data:[],error:e}},l=async(e,r,t=0,n=9)=>{let{data:i,error:c}=await a.from(e).select(r);return console.log(i),c?(console.error("Error fetching contests:",c),{data:[],error:c}):{data:i,error:null}},d=async(e=0,r=9)=>{const{data:t,error:n}=await a.from("Contests").select(o.contests);return console.log(t),n?(console.error("Error fetching contests:",n),{data:[],error:n}):{data:t,error:null}},u=async e=>{const{data:r,error:t}=await a.from("Contests").select(o.contests).eq("id",e);return console.log(r),s(t),{data:r,error:null}},m=async(e,r)=>{const{error:t}=await a.from(e).delete().eq("id",r);return s(t),{error:null}},f=async e=>{const{data:r,error:t}=await a.from("Parent_Criteria").select(o.parentCriteria).eq("criteria_season_id",e);return console.log(r),s(t),{data:r,error:null}},C=async e=>{const{data:r,error:t}=await a.from("Child_Criteria").select(o.childCriteria).eq("parent_criterion",e);return console.log(r),s(t),{data:r,error:null}},g=async(e,r,t,n)=>{const{data:i,error:c}=await a.from("Contests").update({title:r,season:t,type:n}).eq("id",e).select();return console.log(i),s(c),{data:i,error:null}},h=async()=>{const{data:e,error:r}=await a.from("Users").select(o.users);return s(r),{data:e,error:null}},_=async e=>{const{data:r,error:t}=await a.from("Users").select(o.users).eq("email",e);return s(t),!!(r&&r.length>0&&r[0].email===e)},w=async e=>{const{data:r,error:t}=await a.from("Users").select(o.users).eq("username",e);return s(t),!!(r&&r.length>0&&r[0].username===e)},p=async e=>{const{data:r,error:t}=await a.from("Users").select(o.users).eq("email",e);return t?{data:null,error:new Error(t.message)}:!r||r.length===0?{data:null,error:new Error("User not found")}:{data:r,error:null}},q={methods:{errorHandler:s,getData:l,getContests:d,getContestByID:u,deleteByID:m,getParentCriteria:f,getChildCriteria:C,editContestRow:g,getUsers:h,checkUsernameDuplicate:w,checkEmailDuplicate:_,getPassword:p}};export{q as d};
