import { supabase } from '@/services/supabase/supabase';

import { getAuthUser } from '@/services/user/auth';

/** ツイート一覧取得 */
export const getTweets = async () => {
  const retTweets = await supabase
    .from('user_tweets')
    .select(
      `
      id,
      content,
      created_at,
      users (
        name
      )
    `,
    )
    .order('created_at', { ascending: false })
    .limit(5);

  const tweets = retTweets.data;

  return tweets;
};

/** ツイート送信 */
export const postTweet = async (content: string) => {
  const auth = await getAuthUser();

  if (!auth || !auth.user?.id) {
    console.error('有効なユーザーがありません');
    return;
  }

  await supabase.from('user_tweets').insert({
    user_id: auth.user.id,
    content,
  });
};
