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
      let { data: Contest, error } = await supabase
        .from('Contests')
        .select('id,title,season,type')
      console.log(Contest)
      if (error) {
        console.error('Error fetching contests:', error)
        return { data: [], error }
      }
      return { data: Contest, error: null }
    },
    
    async deleteByID(table: string, id: number) {
      let { error } = await supabase.from(table).delete().eq('id', id)
      // console.log(Contest)
      if (error) {
        console.error('Error fetching contests:', error)
        return { data: [], error }
      }
      return { error: null }
    }
  }
}
