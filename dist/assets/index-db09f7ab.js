import{s as o,F as i}from"./index-0862b214.js";const l={methods:{async getData(e,r,t=0,s=9){let{data:n,error:a}=await o.from(e).select(r);return console.log(n),a?(console.error("Error fetching contests:",a),{data:[],error:a}):{data:n,error:null}},async getContests(e=0,r=9){const{data:t,error:s}=await o.from("Contests").select("id,title,season,type");return console.log(t),s?(console.error("Error fetching contests:",s),{data:[],error:s}):{data:t,error:null}},async getContestByID(e){const{data:r,error:t}=await o.from("Contests").select("id,title,season,type").eq("id",e);return console.log(r),t?(console.error("Error fetching contests:",t),{data:[],error:t}):{data:r,error:null}},async deleteByID(e,r){const{error:t}=await o.from(e).delete().eq("id",r);return t?(console.error("Error fetching contests:",t),{data:[],error:t}):{error:null}},async getParentCriteria(e){const{data:r,error:t}=await o.from("Parent_Criteria").select(`
        id,
        Contests (season),
        criteria_alphabet, 
        criteria_title
      `).eq("criteria_season_id",e);return console.log(r),t?(console.error("Error fetching data:",t),{data:[],error:t}):{data:r,error:null}},async getChildCriteria(e){const{data:r,error:t}=await o.from("Child_Criteria").select(`
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
      `).eq("parent_criterion",e);return console.log(r),t?(console.error("Error fetching data:",t),{data:[],error:t}):{data:r,error:null}},async editContestRow(e,r,t,s){const{data:n,error:a}=await o.from("Contests").update({title:r,season:t,type:s}).eq("id",e).select();return console.log(n),a?(console.error("Error updating the contest:",a),{data:[],error:a}):{data:n,error:null}},async getUser(){await o.auth.getUser()}}},d=i("proceedStore",{state:()=>({chosenContestIDForNextLevel:0,chosenContestIDForEdit:0,chosenContestIDForDelete:0,chosenParentCriteriaIDForNextLevel:0,chosenParentCriteriaIDForEdit:0}),actions:{setContestIDNextLevel(e){this.chosenContestIDForNextLevel=e},setContestIDEdit(e){this.chosenContestIDForEdit=e},setParentCriteriaIDEdit(e){this.chosenParentCriteriaIDForEdit=e},setParentCriteriaIDNextLevel(e){this.chosenParentCriteriaIDForNextLevel=e},setChosenContestIDForDelete(e){this.chosenContestIDForDelete=e}}});export{l as d,d as u};
