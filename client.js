import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ffkyajadtqsglmpnczqc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZma3lhamFkdHFzZ2xtcG5jenFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxNjU3MTQsImV4cCI6MjAxNDc0MTcxNH0.t1r_ZZ2-Wcx02iiSFmY9hKRQzwnrI9nlJjy7ZFc_4u8";
export const supabase = createClient(supabaseUrl, supabaseKey);
