# Production integration checklist

This archive is an integrated **local demo**. The following are not connected and must not be represented as live production functionality:

- **Authentication:** `/account` creates a browser-local demo profile. Configure Supabase Auth, Google OAuth provider, authorized redirect URLs, server-side session handling and role policies before using real accounts.
- **Database:** books, seller-added inventory, cart and orders are currently local sample data / `localStorage`. Add Supabase tables, RLS policies, server-side validation and migrations.
- **Payments:** checkout supports Cash on Delivery and a simulated online-payment choice. Simulated payment never charges money. Integrate a payment gateway using server-only secrets, signed webhooks and test-mode validation before accepting payments.
- **Orders and notifications:** order history reads the current browser's local order list. Production tracking requires server-side order state, seller permissions, email/SMS provider configuration and event logs.
- **Inventory and stores:** the catalog is demo data; generated entries are not verified stock. Seller-added listings are visible only in the same browser. Verify actual shop names, stock, prices, addresses and coordinates before launch.
- **Maps:** the current map is illustrative. Integrate a map provider only after verifying locations and configuring any required keys.

Do not place Supabase service-role keys or payment secrets in `NEXT_PUBLIC_*` variables or client components. Test all flows and run `npm run build` before deployment. Deploy only after explicit approval.
