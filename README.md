# Denslab

Landing page for Denslab: websites, graphic design, product design and data automation for small businesses (UMKM). Live at https://dendense.github.io.

Built with Vite, React, Tailwind CSS v4 and [Dens-UI](https://dendense.github.io/dens-ui) components. English by default, with an Indonesian switch.

## Develop

```bash
npm install
npm run dev
```

## Configure

Edit `src/config.ts`:

- `FORM_URL`: the Google Form share link for booking. While empty, booking buttons fall back to email.
- `SERVICE_FIELD_ID`: optional `entry.123456` id of the form's "service" question, so each button pre-fills the chosen service.
- `CITY`: the city for in-person meetings. While empty, the site mentions online work only.

Copy lives in `src/i18n.tsx` (English and Indonesian). Example work and chart numbers are fictional and labelled as examples; replace them with real work when it exists.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. In the repository settings, Pages → Source must be set to **GitHub Actions**.
