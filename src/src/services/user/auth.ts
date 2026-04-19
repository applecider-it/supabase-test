import { supabase } from '@/services/supabase/supabase';

/**
 * ログインユーザー取得
 *
 * authUser: ログイン情報
 * user: 補足情報
 */
export const getAuthUser = async () => {
  const retAuthUser = await supabase.auth.getUser();
  const authUser = retAuthUser?.data?.user;

  if (!authUser) return null;

  const retUser = await supabase
    .from('users')
    .select('*')
    .eq('id', authUser.id)
    .single();

  const user = retUser.data;

  return { authUser, user };
};
