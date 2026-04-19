create table users (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  created_at timestamp default now()
);

alter table users enable row level security;

create policy "Anyone can read users"
on users
for select
using (true);

create policy "Authenticated can insert"
on users
for insert
to authenticated
with check (auth.uid() = id);

create policy "Users can update own users"
on users
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "Delete own users"
on users
for delete
to authenticated
using (auth.uid() = id);
