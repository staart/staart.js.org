# Getting started

To get started with your Staart UI, you have three options:

1. **Preferred:** Click on the "Use this template" button on the [GitHub repo](https://github.com/staart/ui) and GitHub will create a new repo (without git history) in your account, or
2. Click on the "Import repository" link under "New" and enter the repo URL to make a duplicate repo in your account, or
3. Fork this repo to your account (your contributions will not be counted).

Then, rename the package name (this is required for Staart UI's updates to work properly) in your `package.json`:

```json
{
  "name": "your-package-name"
}
```

## Install dependencies

Install the dependencies using Yarn:

```bash
yarn install
```

You can also use the npm client instead:

```bash
npm install
```

## Update configuration

After installing dependencies, update the `nuxt.config.ts` file with your settings.

### SEO

Update the title and meta description first:

```ts
const config: Configuration = {
  // ...
  head: {
    title: "Product Name",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Basic one-line description of your product"
      }
    ]
  // ...
}
```

### Backend URL

Staart UI is a webapp using the [Staart API](/api), so you need to configure your backend API's URL:

```ts
const config: Configuration = {
  // ...
  axios: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://example.com/v1"
        : "http://localhost:4000/v1"
  },
  // ...
}
```

In the above example, you have Staart API running on https://example.com in production, and on `4000` port locally. The `v1` is a prefix for endpoint version control.

### Frontend API key

Finally, and most importantly, remove and then update the API key for your frontend. Edit the `./plugins/axios.ts` file and remove the line starting with `$axios.setHeader("X-Api-Key"`.

This is because the default API key given in Staart UI will **not** work on your frontend, it's domain-restricted.

Staart API has a public rate limit, but it's a good idea to add an API key here with domain restrictions for your frontend app -- so, as soon as you're up and running, use the UI to create an API key and add it back here.

## Build and run server

Build the Progressive Web App (PWA) from source:

```bash
yarn build # or npm run build
```

The above will create a `dist` directory with JS. Then, you can deploy this directory.

For development, run the following to start a server and linter:

```bash
yarn start
```
