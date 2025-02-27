// src/apis/crud/database.ts

import supabase from '@/apis/supabase'
export default {
  methods: {
    // Supabase table API
    // ref: https://supabase.com/docs/reference/javascript/select
    async getContests(start: number = 0, end: number = 9) {
      let { data: Contest, error } = await supabase
        .from('Contest')
        .select('title,season,type')
      console.log(Contest)
      if (error) {
        console.error('Error fetching contests:', error)
        return { data: [], error }
      }
      return { data: Contest, error: null }
    }
  }
}
