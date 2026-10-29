# KhajuriConnect — Integrated Local Demo

A Next.js prototype for a book marketplace connecting Khajuri Market sellers with customers. This ZIP is a locally testable integrated demo, not a production commerce deployment.

## Run locally (Windows)
1. Install Node.js LTS from https://nodejs.org/ if needed.
2. Extract this ZIP. Open a terminal in the `khajuriconnect` folder (the one containing `package.json`).
3. Run `npm install` and then `npm run dev`.
4. Open http://localhost:3000. Keep the terminal open. Stop with Ctrl+C.
5. Before deployment, run `npm run build` and fix any errors.

## Included in this demo
- Original intro video asset retained.
- Warm cream, forest-green, sage, terracotta and muted-gold styling; navy-led colors removed from the main UI.
- Animated cursor trail, motion effects and responsive layout.
- Browse/search/category filtering and price/title sorting.
- 50 or more browseable sample entries per listed category. Many generated entries are marked as sample/demo catalogue records and are not verified inventory.
- Browser-local cart, demo checkout (Cash on Delivery or simulated payment), order history/tracking page.
- Browser-local buyer/seller demo profile and expanded seller dashboard: overview metrics, inventory add/edit/delete/search, stock alerts, order status management, and store profile editing.
- Store directory with sample data and an illustrative map.

## Important limitations
This project does **not** have production authentication, Google OAuth, server-side database, seller-confirmed stock, verified store coordinates, real payment gateway, SMS/email notifications, or secure multi-user order tracking. Profile/cart/order/inventory demo data stored in localStorage is only on the current browser and can be edited by the user. Seller order status updates are reflected in the browser-local order history, but are not shared with other devices or users. The simulated online payment does not charge money. Do not use this prototype to accept real orders or payments.

## Production integration required
To make it genuinely production-ready, configure a Supabase project and environment variables, implement server-side authorization and database policies, set up Google OAuth redirect URLs, integrate a payment provider in test mode then production, and connect verified seller/store data. Never put service-role secrets in client code.

## Deployment safety
Running this ZIP locally does not change the existing Render website. Do not upload/deploy until the local build and flows have been tested and you explicitly approve deployment.
