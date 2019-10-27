# Getting started

To get started with your Staart Site, add `@staart/site` as a dev dependency to your project:

```bash
yarn add -D @staart/site
```

You can also use the npm client instead:

```bash
npm install @staart/site --save-dev
```

Then, use the `site` command to generate your static site:

```bash
yarn site
```

Or, if you're using the default npm client:

```bash
npm run site
```

You should see something like the following output in your terminal:

```bash
✔  success   Start Site built in 0.39s
```

## Quickstart

If you don't want to add the dependency, the easiest way is to use npx to generate a static site in your current working directory:

```bash
npx @staart/site
```

## Programmatically generating websites

```ts
import { generate } from "@staart/site";

generate({ /* options */ })
  .then(() => console.log("Completed"))
  .catch(error => console.error(error));
```
