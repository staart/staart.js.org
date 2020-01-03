# Getting started

To get started with your Staart backend, you have three options:

1. **Preferred:** Click on the "Use this template" button on the [GitHub repo](https://github.com/staart/api) and GitHub will create a new repo (without git history) in your account, or
2. Click on the "Import repository" link under "New" and enter the repo URL to make a duplicate repo in your account, or
3. Fork this repo to your account (your contributions will not be counted).

Then, rename the package name (this is required for Staart's updates to work properly) in your `package.json`:

```json
{
  "name": "your-package-name"
}
```

## Add Maxmind license key

The first step, even before you install dependencies, is to add the Maxmind license key. This is because of [runk/node-geolite2#17](https://github.com/runk/node-geolite2/issues/17), where download and using the GeoIP2 database now requires a license key.

To get a license key, sign up for free on the [Maxmind GeoLite2](https://www.maxmind.com/en/geolite2/signup) website. Then, add this license key as an environment variable:

```bash
export MAXMIND_LICENSE_KEY="your license key"
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

## Setup services

Set up your environment variables by creating a `.env` file in your project root. You can also rename the `.env.example` file to `.env` for a quick start. [Learn how to set up environment variables](/api/setting-up-environment-variables.html).

Set up your database structure by running the contents of the `schema.sql` file in your SQL client and enter the database credentials in your `.env` file.

Start a Redis instance and enter its URL in your `.env` file.

## Build and run server

Build the project by compiling TypeScript to JavaScript:

```bash
yarn build # or npm run build
```

The above will create a `dist` directory with JS. Then, run the server:

```bash
node dist/src/index.js
```

You can also build and run together:

```bash
yarn start
```

You should see the following output in your terminal:

```txt
✔  success   Generated paths
✔  success   Processed no redirect rules
✔  success   Setup 3 cron jobs
✔  success   Serving 2 static files
✔  success   Generated app.ts file
☐  pending   Compiling TypeScript
✔  success   Listening on 7007
```
