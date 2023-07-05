import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qbykthllyuwopcqmgfxs.supabase.co";
// pake service role, nanti diubah ke anon kalo sudah ada auth
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFieWt0aGxseXV3b3BjcW1nZnhzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODUzODg2NiwiZXhwIjoyMDA0MTE0ODY2fQ.wW5G8F6eJcoHBiRq1PxpVAiimGInyekIonvWYLeTMtI";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export default supabase;
