# Dok Mai Lao

English-language restaurant website for Dok Mai Lao Caffè Restaurant in Pakse, Laos.

Includes a searchable menu, restaurant photographs, three attributed guest reviews, opening hours, telephone and WhatsApp links, and Google Maps.

## Local preview

With Node.js installed, run:

```sh
node preview.cjs
```

Open http://127.0.0.1:5177/.

## Hosting

Publish the contents of `dist/` with any static website host. No build step or package installation is required.

The `.openai/hosting.json` file records a previous Sites setup; it is not required for other hosting providers. When changing the public domain, update the website URLs and social image URL in `dist/index.html`.

## Editing

- `dist/index.html`: page content, contact information, opening hours and structured data.
- `dist/style.css`: layout and styling.
- `dist/menu.js`: dishes and prices in Lao kip.
- `dist/app.js`: menu filtering and navigation.
- `dist/assets/`: original logo, restaurant photos and hero illustration.
- `SOURCES.md`: content and image provenance.

Confirm menu prices and current restaurant details with the owner before public launch.

## GitHub Pages

Presentation URL: https://diego-media.github.io/DokMaiLao/

GitHub Pages serves the root of the `gh-pages` branch, containing only the contents of `dist/`. After committing changes on `main`, publish the updated contents of `dist/` to the root of `gh-pages`. Preserve the existing `gh-pages` history when creating the deployment commit. GitHub Pages publishes that branch automatically.
