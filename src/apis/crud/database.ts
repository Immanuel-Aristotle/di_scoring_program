// src/apis/crud/database.ts
// Apis used for supabase interactions
import supabase from '@/apis/supabase'
import type { User } from '@/stores/user'

const columns = {
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
  users: `id,role,username,email,password`
}

const errorHandler = (error) => {
  if (error) {
    console.error('Error fetching data:', error, error.message)
    return { data: [], error }
  }
}

const getData = async (
  table: string,
  select: string,
  start: number = 0,
  end: number = 9
) => {
  let { data: tableData, error } = await supabase.from(table).select(select)
  console.log(tableData)
  if (error) {
    console.error('Error fetching contests:', error)
    return { data: [], error }
  }
  return { data: tableData, error: null }
}

const getContests = async (start: number = 0, end: number = 9) => {
  const { data: Contest, error } = await supabase
    .from('Contests')
    .select(columns.contests)
  console.log(Contest)
  if (error) {
    console.error('Error fetching contests:', error)
    return { data: [], error }
  }
  return { data: Contest, error: null }
}

const getContestByID = async (id: number) => {
  const { data: contestRow, error } = await supabase
    .from('Contests')
    .select(columns.contests)
    .eq('id', id)
  console.log(contestRow)
  errorHandler(error)
  return { data: contestRow, error: null }
}

const deleteByID = async (table: string, id: number) => {
  const { error } = await supabase.from(table).delete().eq('id', id)
  errorHandler(error)
  return { error: null }
}

const getParentCriteria = async (contestID: number) => {
  // From supabase API docs
  // Query referenced tables
  const { data: parentCriteria, error } = await supabase
    .from('Parent_Criteria')
    .select(columns.parentCriteria)
    .eq('criteria_season_id', contestID)
  console.log(parentCriteria)
  errorHandler(error)
  return { data: parentCriteria, error: null }
}

const getChildCriteria = async (ParentCriteriaID: number) => {
  const { data: childCriteria, error } = await supabase
    .from('Child_Criteria')
    .select(columns.childCriteria)
    .eq('parent_criterion', ParentCriteriaID)
  console.log(childCriteria)
  errorHandler(error)
  return { data: childCriteria, error: null }
}

const editContestRow = async (
  id: number,
  title: string,
  season: string,
  type: string
) => {
  const { data: response, error } = await supabase
    .from('Contests')
    .update({ title: title, season: season, type: type })
    .eq('id', id)
    .select()
  console.log(response)
  errorHandler(error)
  return { data: response, error: null }
}

const getUsers = async () => {
  const { data: users, error } = await supabase
    .from('Users')
    .select(columns.users)
  errorHandler(error)
  return { data: users, error: null }
}

const checkEmailDuplicate = async (email: string) => {
  const { data: users, error } = await supabase
    .from('Users')
    .select(columns.users)
    .eq('email', email) as { data: User[] | null, error: any }
  errorHandler(error)

  if (users && users.length > 0) {
    if (users[0].email === email) {
      return true
    }
  }
  return false
}

const checkUsernameDuplicate = async (username: string) => {
  const { data: users, error } = await supabase
    .from('Users')
    .select(columns.users)
    .eq('username', username) as { data: User[] | null, error: any }
  errorHandler(error)
  if (users && users.length > 0) {
    if (users[0].username === username) {
      return true
    }
  }
  return false
}

const getPassword = async (email: string): Promise<{ data: User[] | null, error: Error | null }> => {
  const { data: users, error } = await supabase
    .from('Users')
    .select(columns.users)
    .eq('email', email) as { data: User[] | null, error: any }
  
  if (error) {
    return { data: null, error: new Error(error.message) }
  }

  if (!users || users.length === 0) {
    return { data: null, error: new Error('User not found') }
  }

  return { data: users, error: null }
}

export default {
  methods: {
    errorHandler,
    getData,
    getContests,
    getContestByID,
    deleteByID,
    getParentCriteria,
    getChildCriteria,
    editContestRow,
    getUsers,
    checkUsernameDuplicate,
    checkEmailDuplicate,
    getPassword
    // Supabase table API
    // ref: https://supabase.com/docs/reference/javascript/select
  }
}
