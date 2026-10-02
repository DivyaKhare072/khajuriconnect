# KhajuriConnect

Premium working prototype for the Fail to Rise competition — a digital marketplace connecting Indore's Khajuri Market bookstores with customers.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Upload this folder to GitHub, or import the ZIP contents into a repository.
2. In Vercel, choose **New Project** and import the repository.
3. Framework: Next.js (auto-detected).
4. Build command: `next build`.
5. Deploy.

No API keys are required for the current prototype.

## Important prototype note

Product/store data is intentionally local sample data. Replace `lib-data.js` with a real database/API when the team is ready.

The supplied logo animation is included at `public/brand/logo-intro.mp4` and plays on first load.

## Map

The market section currently uses a lightweight animated visual map so the prototype runs without a paid map API key. If the team wants a live map later, Mapbox/MapLibre can be added without changing the marketplace structure.


## Marketplace upgrade (prototype)
This version includes an expanded 60+ item sample catalog, browser-persisted cart, cart page, and demo checkout with Cash on Delivery or simulated online payment. Orders are stored in the current browser only until the Supabase integration phase. Simulated payment does not charge money.

### Deploying on Render
1. Upload/commit the updated project files to your GitHub repository, keeping the `khajuriconnect` folder contents at repository root.
2. Render should redeploy automatically if the service is connected to that repository.
3. Test `/shop`, add an item, open `/cart`, and place a demo order at `/checkout`.
