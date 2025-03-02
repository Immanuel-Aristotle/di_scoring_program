// src/apis/crud/database.ts

import supabase from '@/apis/supabase'
export default {
  methods: {
    // Supabase table API
    // ref: https://supabase.com/docs/reference/javascript/select
    async getData(
      table: string,
      select: string,
      start: number = 0,
      end: number = 9
    ) {
      let { data: tableData, error } = await supabase.from(table).select(select)
      console.log(tableData)
      if (error) {
        console.error('Error fetching contests:', error)
        return { data: [], error }
      }
      return { data: tableData, error: null }
    },

    async getContests(start: number = 0, end: number = 9) {
      const { data: Contest, error } = await supabase
        .from('Contests')
        .select('id,title,season,type')
      console.log(Contest)
      if (error) {
        console.error('Error fetching contests:', error)
        return { data: [], error }
      }
      return { data: Contest, error: null }
    },

    async getContestByID(id: number) {
      const { data: contestRow, error } = await supabase
        .from('Contests')
        .select('id,title,season,type')
        .eq('id', id)
      console.log(contestRow)
      if (error) {
        console.error('Error fetching contests:', error)
        return { data: [], error }
      }
      return { data: contestRow, error: null }
    },

    async deleteByID(table: string, id: number) {
      let { error } = await supabase.from(table).delete().eq('id', id)
      // console.log(Contest)
      if (error) {
        console.error('Error fetching contests:', error)
        return { data: [], error }
      }
      return { error: null }
    },

    async getParentCriteria(contestID: number) {
      // From supabase API docs
      // Query referenced tables
      const { data: parentCriteria, error } = await supabase
        .from('Parent_Criteria')
        .select(
          `
        id,
        Contests (season),
        criteria_alphabet, 
        criteria_title
      `
        )
        .eq('criteria_season_id', contestID)
      console.log(parentCriteria)
      if (error) {
        console.error('Error fetching data:', error)
        return { data: [], error }
      }
      return { data: parentCriteria, error: null }
    },

    async getChildCriteria(ParentCriteriaID: number) {
      const { data: childCriteria, error } = await supabase
        .from('Child_Criteria')
        .select(
          `
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
      `
        )
        .eq('parent_criterion', ParentCriteriaID)
      console.log(childCriteria)
      if (error) {
        console.error('Error fetching data:', error)
        return { data: [], error }
      }
      return { data: childCriteria, error: null }
    },

    async editContestRow(
      id: number,
      title: string,
      season: string,
      type: string
    ) {
      const { data: response, error } = await supabase
        .from('Contests')
        .update({ title: title, season: season, type: type })
        .eq('id', id)
        .select()
      console.log(response)
      if (error) {
        console.error('Error updating the contest:', error)
        return { data: [], error }
      }
      return { data: response, error: null }
    },

    async getUser() {
      const { data: { user } } = await supabase.auth.getUser();
    }
  }
}
