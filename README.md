# InvoiceSimple

This is a Next.js landing page for **InvoiceSimple**, a professional invoicing software for freelancers.

## ✨ Features

- **Simple Invoicing:** Create and send professional invoices in seconds.
- **Waitlist:** Capture emails for interested users with Supabase.
- **Responsive Design:** Looks great on all devices, from mobile to desktop.
- **Built with:** Next.js, React, Tailwind CSS, and shadcn/ui.

## 🚀 Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add your Supabase credentials:

    ```
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```

3.  **Set up the database:**

    Run the SQL code in `docs/schema.sql` in your Supabase SQL Editor to create the `waitlist_emails` table.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.