import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rhmaepjpuungmznmasjk.supabase.co' // My supabase project
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJobWFlcGpwdXVuZ216bm1hc2prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3NzQ3NDYsImV4cCI6MjA1NTM1MDc0Nn0.hYmf7ZCoDI1toEIvJmuC_1WgeDLYS-6oZWJhRjP1mnU" // Supabase Anon key
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase