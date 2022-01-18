## All created pages are listed in the console after you run yarn build

`yarn build && gatsby serve`

1. Creating APIs

You can create a SERVER (not clientside) API by exporting a `expressJs` like function in the `/src/api` folder. That way we can get rid of our NodeJS APIs.

2. Private pages.

Private pages can be created in many ways. The basic approach is to use the `/src/pages` folder - an example is provided in `/src/pages/using-ssr.js`.

It also fits our needs for private documentation because it can be used with `createPage` API. I have created a small POC that can be found in `/src/templates/using-ssr-restricted-access`. This creates 5 pages and assumes that the user won't have access to pages >= 3.

3. Defered pages

It can also create static pages that are generated only when the user requests the page and then stores it in cache - this means we can reduce the documentation pages build time by defering the less visited pages (same goes for blog). An example can be found in the `src/templates/using-dsg.js` file.

We wouldn't have to maintain our own NodeJS server, all we'd have to do is run `gatsby serve` when the content is built.

Also changes on the server won't need any gatsby restarts as it currently takes place.
