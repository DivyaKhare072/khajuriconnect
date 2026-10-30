-- KhajuriConnect feature schema proposal for Supabase PostgreSQL.
-- Apply only after configuring Supabase Auth and reviewing RLS policies.
create extension if not exists pgcrypto;

create table if not exists public.delivery_settings (
  id uuid primary key default gen_random_uuid(), seller_id uuid not null references auth.users(id) on delete cascade,
  online_enabled boolean not null default false, delivery_partners text[] not null default '{}', radius_km int not null default 5 check(radius_km between 1 and 15),
  charge_type text not null default 'flat' check(charge_type in ('flat','per_km')), delivery_charge numeric(10,2) not null default 0,
  free_delivery_minimum numeric(10,2) not null default 0, delivery_slot text not null default 'Same Day',
  pickup_enabled boolean not null default false, pickup_slots text, reservation_hold_hours int not null default 24,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(seller_id)
);

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(), reservation_code text not null unique, buyer_id uuid references auth.users(id) on delete set null,
  seller_id uuid not null references auth.users(id) on delete cascade, book_id text not null, book_snapshot jsonb not null,
  status text not null default 'Reserved' check(status in ('Reserved','Ready for Pickup','Collected','Expired')),
  hold_until timestamptz not null, pickup_qr_token text not null unique, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table if not exists public.book_requirements (
  id uuid primary key default gen_random_uuid(), posted_by uuid references auth.users(id) on delete set null,
  posted_as text not null check(posted_as in ('buyer','seller')), title text not null, author text, publication text,
  quantity_required int not null default 1 check(quantity_required > 0), expected_price numeric(10,2), urgency text not null default 'Medium' check(urgency in ('Low','Medium','High')),
  subject text, location text not null default 'Indore', notes text, status text not null default 'Open', created_at timestamptz not null default now()
);

create table if not exists public.requirement_responses (
  id uuid primary key default gen_random_uuid(), requirement_id uuid not null references public.book_requirements(id) on delete cascade,
  responder_id uuid references auth.users(id) on delete set null, store_name text, message text, created_at timestamptz not null default now()
);

create table if not exists public.policy_acceptances (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  policy_slug text not null, policy_version text not null, accepted_at timestamptz not null default now(), unique(user_id,policy_slug,policy_version)
);

create table if not exists public.book_reports (
  id uuid primary key default gen_random_uuid(), reporter_id uuid references auth.users(id) on delete set null,
  book_id text not null, report_type text not null, reason text not null, status text not null default 'Open', created_at timestamptz not null default now()
);

create table if not exists public.seller_subscriptions (
  id uuid primary key default gen_random_uuid(), seller_id uuid not null references auth.users(id) on delete cascade,
  plan text not null default 'free' check(plan in ('free','pro','promax')), status text not null default 'demo',
  provider_subscription_id text, current_period_end timestamptz, created_at timestamptz not null default now(), unique(seller_id)
);

-- RLS is intentionally not enabled by this starter schema. Before production,
-- enable RLS on every table and add owner-scoped policies; never expose service-role keys in the browser.
