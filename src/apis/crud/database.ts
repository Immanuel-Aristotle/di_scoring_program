// src/apis/crud/database.ts

import supabase from '@/apis/supabase'

interface Contest {
  // id: number;
  title: string;
  season: string;
  type: string;
  // other fields in the Contest table
}

interface ParentCriteria {
  id: number;
  name: string;
  // other fields in the Parent_Criteria table
}

export const getContests = async (start: number = 0, end: number = 9) => {
  let { data: Contest, error } = await supabase
    .from('Contest')
    .select('title,season,type')
    .range(start, end);
  // console.log(Contest);

  if (error) {
    console.error("Error fetching contests:", error);
    return { data: [], error };
  }
  return { Contest, error: null };
};

export const getParentCriteria = async (start: number = 0, end: number = 9) => {
  const { data, error } = await supabase
    .from('Parent_Criteria')
    .select('*')
    .range(start, end);

  if (error) {
    console.error("Error fetching parent criteria:", error);
    return { data: null, error };
  }
  return { data, error: null };
};
