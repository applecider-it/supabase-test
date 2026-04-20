import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
//const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseFunctionUrl = import.meta.env.VITE_SUPABASE_FUNCTION_URL;
const supabaseFunctionPublishableKey = import.meta.env
  .VITE_SUPABASE_FUNCTION_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabasePublishableKey);

const supabaseFunction =
  supabaseUrl === supabaseFunctionUrl
    ? null
    : createClient(supabaseFunctionUrl, supabaseFunctionPublishableKey);

/**
 * Edge関数実行
 *
 * 開発環境と本番環境の違いを吸収している
 */
export const execFunction = async (name: string, params: any) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const supabaseExec = supabaseFunction ? supabaseFunction : supabase;

  const ret = await supabaseExec.functions.invoke(name, {
    body: params,
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  });

  return ret;
};

/** jwtトークン認証付きEdge Function実行 */
/*
const fetchFunction = async (name: string, params: any) => {
  const response = await fetch(supabaseUrl + '/functions/v1/' + name, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + supabaseAnonKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();

  return data;
};
*/
