# Shields.io schema

[Shields.io](https://shields.io) is the most popular service to add badges to your repository's `README.md`. Using their [endpoint API](https://shields.io/endpoint), you can embed custom badges. Staart Site generates the necessary schema files with information about the number of articles.

For each category (plus the site root), a file is created. For example, `./public/shield-schema/all.json` has the badge content "docs | 20 articles" if your site has a total of 20 pages.

This is what a badge looks like: ![Docs](https://img.shields.io/endpoint?url=https%3A%2F%2Fstaart.js.org%2Fshield-schema%2Fall.json)

The Markdown to display this badge is:

```md
![Docs](https://img.shields.io/endpoint?url=https%3A%2F%2Fstaart.js.org%2Fshield-schema%2Fnative.json)
```

In the above Markdown example, you have to URL-encode the path to the endpoint by replacing `https%3A%2F%2Fstaart.js.org` with your root domain.
