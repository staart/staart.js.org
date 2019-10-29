# About

Staart is a set of starter templates to build SaaS products.

## How Staart came to be

In 2016, I founded [Oswald Labs](https://oswaldlabs.com), an accessibility technology company with a SaaS product at its core. We've done countless redesigns and iterations of our admin interface consisting of account management, billing, and analytics UIs, and we were planning on building an updated version of it using TypeScript.

At the same time in 2019, I founded [O15Y](https://o15y.com), an "idea incubator" of sorts where my co-founder [Florian](https:/www.foverkamp.com) and I explore SaaS products in communication technology. Our first concept product is [Ara](https://araassistant.com), an AI-powered assistant for professionals. Ara's webapp also needed an admin interface.

I had an idea -- instead of starting from scratch when building SaaS products, why not build a starter that can accelerate that inital process?

### Staart API and Staart UI

I began working on a backend/API starter specifically designed for SaaS startups using some of O15Y's budget for Ara. I started a Node.js project with TypeScript and set up my first controller after some initial research. After setting up the basics, like authentication and CRUD APIs, I started another project as its frontend/PWA equivalent, Staart UI in Nuxt.js/Vue.js/TypeScript.

### Staart Native and Staart.css

After building and launching Staart and Staart UI (originally, Staart API was named just Staart), I thought the next logical step is a project for native apps. Then, Staart can be a one-stop starter solution for all platforms -- server, web, and mobile.

At the same time, I also spun-off the Sass/css part of Staart UI to a new project, Staart.css. This was better because other types of projects could be built on top of Staart.css as well, such as WordPress themes. Staart.css can be used as a Sass starter, which includes a CSS reset, beautiful typography, styled UI elements, and support for both dark and light themes.

### Staart Site

While building the O15Y website, I quickly made a custom static site generator in TypeScript. I didn't want to use something like Gatsby because of a huge footprint, and building one using just Node.js file system APIs wasn't hard. I then used that same `builder.ts` file for the mini-websites for a few other projects.

I realized that this can be a *real* static site generator "starter", which means that it won't be as heavy and feature-oriented as common static site generators like Hugo and Middleman, but will focus on lightweight and accessible websites, primarily for documentation, helpdesk, or landing pages. It fit perfectly in the Staart ecosystem, so Staart Site was born.

## What's next?

I'm continuing to work on adding more features to projects in the Staart ecosystem, like reseller accounts and connected accounts (OpenID). Initially, since Staart projects were built only for Oswald Labs and O15Y products (and both use AWS), most third-party services are AWS-managed. Therefore, I'm also trying to make Staart less opinionated by building more options for users, like custom-hosted ElasticSearch or NodeMailer instead of SES.
