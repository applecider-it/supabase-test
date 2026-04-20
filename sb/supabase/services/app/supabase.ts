import { createClient } from 'npm:@supabase/supabase-js@2';

const supabaseUrl = Deno.env.get('APP_SUPABASE_URL')!;
const supabasePublishableKey = Deno.env.get('APP_SUPABASE_PUBLISHABLE_KEY')!;

console.log({ supabaseUrl, supabasePublishableKey });

/** 認証を反映したsupabaseオブジェクト */
export function getSupabase(req) {
  const authHeader = req.headers.get('Authorization');

  console.log({ authHeader });

  const supabase = createClient(supabaseUrl, supabasePublishableKey, {
    global: {
      headers: {
        Authorization: authHeader ?? '',
      },
    },
  });

  return supabase;
}
