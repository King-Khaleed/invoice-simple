-- SQL schema for the waitlist_emails table

CREATE TABLE waitlist_emails (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist_emails ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows public, anonymous users to insert into the table
CREATE POLICY "Public user can insert their own email"
ON waitlist_emails
FOR INSERT 
WITH CHECK (true);
