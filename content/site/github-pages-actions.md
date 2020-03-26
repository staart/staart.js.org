# GitHub Pages + GitHub Actions

It's fairly easy to deploy a static site for your open-source projects on GitHub. Staart Site will automatically find the `README.md` and other content files and build a site for you, which you can deploy to GitHub Pages by using the `gh-pages` branch.

This is an example configuration of a GitHub Actions workflow that builds the static site and deploys it to the right branch. Make sure you add the `ACCESS_TOKEN` secret to your GitHub repository with an access token to publish the site:

```yaml
name: Staart Site
on:
  push:
    branches:
      - master
jobs:
  release:
    name: Build site
    runs-on: ubuntu-18.04
    if: "!contains(github.event.head_commit.message, '[skip ci]')"
    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 12
      - name: Build site
        run: npx @staart/site
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: public
```
