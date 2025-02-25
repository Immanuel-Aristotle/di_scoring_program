// apis/client/login.ts

import supabase from '@/apis/supabase'  // Import supabase instance

// Define the function to handle login
export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    return { error: error.message }
  }

  return { data }
}
