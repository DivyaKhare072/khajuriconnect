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
