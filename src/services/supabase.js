import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iaiiymtupxwklvmmneuw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhaWl5bXR1cHh3a2x2bW1uZXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNjg1NDIsImV4cCI6MjA4Mjk0NDU0Mn0.Hdv_EOYki7_jVH9wXpwRg72_JSGPujhEBKoMY6OhkWA'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
