-- 1. テーブル作成
CREATE TABLE IF NOT EXISTS public.user_posts (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id uuid references users(id) on delete cascade,
    content text NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);

-- 2. RLS 有効化
ALTER TABLE public.user_posts ENABLE ROW LEVEL SECURITY;

-- 3. クライアント操作を全拒否（anon / authenticated）
REVOKE ALL ON TABLE public.user_posts FROM anon;
REVOKE ALL ON TABLE public.user_posts FROM authenticated;

-- 4. 必要なら service_role のみ許可
GRANT ALL ON TABLE public.user_posts TO service_role;

-- 5. 念のため RLS ポリシーも全拒否
CREATE POLICY "deny_all_select"
ON public.user_posts
FOR SELECT
TO anon, authenticated
USING (false);

CREATE POLICY "deny_all_insert"
ON public.user_posts
FOR INSERT
TO anon, authenticated
WITH CHECK (false);

CREATE POLICY "deny_all_update"
ON public.user_posts
FOR UPDATE
TO anon, authenticated
USING (false);

CREATE POLICY "deny_all_delete"
ON public.user_posts
FOR DELETE
TO anon, authenticated
USING (false);