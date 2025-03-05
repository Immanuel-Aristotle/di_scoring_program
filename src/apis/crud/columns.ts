export const columns = {
  contests: `id,title,season,type`,
  childCriteria: `
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
  `,
  parentCriteria: `
    id,
    Contests (season),
    criteria_alphabet, 
    criteria_title
  `,
  users: `id,role,username,email,password`,
  scores: `
    id,
    Users (
      username
    ),
    score_number,
    Child_Criteria (
      Parent_Criteria (
        criteria_alphabet
      ),
      criterion_title
    )
  `
}