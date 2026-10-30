# KhajuriConnect feature upgrade

This ZIP was assembled from the existing `KhajuriConnect-Seller-Dashboard-Upgrade.zip` project. It keeps the existing Next.js App Router / JavaScript / CSS architecture and adds routes and components without converting the project to TypeScript or replacing the original marketplace.

## Added routes
- `/policies/terms`, `/policies/fair-pricing`, `/policies/seller-guidelines`, `/policies/buyer-protection`, `/policies/privacy`, `/policies/refund-cancellation`, `/policies/prohibited-items`, `/policies/community-guidelines`, `/policies/contact`, `/policies/about`
- `/seller/plans`
- `/seller/settings`
- `/seller/requirements`
- `/seller/reservations`
- `/requirements`
- `/reservations`

## Functional demo behavior
The current project has browser-local demo profiles, inventory and orders. The new policy acceptances, reports, plans, delivery settings, reservations and requirements use the same localStorage pattern so they can be tried without breaking the existing site. Data is local to one browser/device and is not shared with other users.

- Fair pricing calculator uses 70%, 55%, 35% and 20% condition guidelines. Above-guideline prices warn but are not automatically blocked.
- Seller listing form includes a fair-price check and requires an unchecked seller-guideline confirmation before submission.
- Account creation requires Terms & Conditions and Privacy Policy consent.
- Seller plan selection is a demo state only. No subscription is charged or activated.
- Delivery settings and checkout fee calculation are demo flows. Pincode is collected but radius is not geospatially validated. Courier API and live tracking are not configured.
- Reserve & Pickup creates a reservation code and seller status controls. WhatsApp is a message preview only; no WhatsApp message is sent. A scannable QR provider is not configured; the reservation code is the pickup verification reference in this ZIP.
- Requirement posts and fulfilment interest are local to the same browser. Cross-user board visibility and realtime notifications require a backend.
- Buyer reports and support reports are stored locally and are not sent to a moderation/support team.

## Backend work still required for production
The existing source ZIP has no Supabase client, Prisma setup, server API routes or authentication provider. `supabase/schema.sql` provides a starting database schema, but it is not wired to the UI and does not enable RLS. Before production, configure Supabase Auth, owner-scoped Row Level Security policies, server-side validation, secure order APIs, realtime subscriptions, data retention/deletion, verified support contact details, a courier integration, WhatsApp provider, QR generation and a real payment/subscription provider. Do not expose Supabase service-role or provider secrets in browser code.

## Run locally
1. Extract this ZIP.
2. Open the `khajuriconnect` folder in VS Code.
3. Run `npm install`.
4. Run `npm run build` to verify production compilation.
5. Run `npm run dev` to preview locally.

The original design palette and pages are retained. No production deployment is performed by preparing this ZIP.
