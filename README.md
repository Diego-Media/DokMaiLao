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

The `.openai/hosting.json` file records a previous Sites setup; it is not required for other hosting providers. Before going live on a chosen domain, update the canonical website URLs and social image URL in `dist/index.html`.

## Editing

- `dist/index.html`: page content, contact information, opening hours and structured data.
- `dist/style.css`: layout and styling.
- `dist/menu.js`: dishes and prices in Lao kip.
- `dist/app.js`: menu filtering and navigation.
- `dist/assets/`: original logo, restaurant photos and hero illustration.
- `SOURCES.md`: content and image provenance.

Confirm menu prices and current restaurant details with the owner before public launch.
