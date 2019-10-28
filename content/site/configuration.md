# Configuration

Staart Site uses [Cosmiconfig](https://github.com/davidtheclark/cosmiconfig), so you do any one of the following to add configuration:

- Create a `.staartrc` file in JSON or YAML format
- Add a `staart` property to your `package.json`
- Create a `staart.config.js` file exporting a JS object
- Any other Cosmiconfig-supported method

| Option | Description | Default |
| ------ | ----------- | ------- |
| `title` | Name of the site | `Staart Site` |
| `repo` | URL to git repository | `repository` key in `package.json` |
| `contentDir` | Folder with markdown content | `./content` |
| `distDir` | Output directory | `./public` |
| `assetsDir` | Static assets directory | `./assets` |
| `templatePath` | HTML template file path | `./index.html` |
| `stylePath` | Scss stylesheet path | `style.scss` |
| `homePath` | Markdown file path for homepage | `README.md` |
| `hostname` | Base URL for sitemap | `http://localhost:8080` |
| `themeColor` | Main theme color | `#0e632c` |
| `textColor` | Dark text color | `#001b01` |
| `linkColor` | Hyperlink color | `#0e632c` |
| `lightColor` | Light text color | `#ffffff` |
| `navbar` | Array of filenames for navbar | Root files/folders in `contentDir` |
| `contentFileExt` | File extension for content files | `md` |
| `keepHomeHeading` | Show `h1` heading on homepage | `false` |
| `ignoreReplaceTitle` | Don't update `<title>` from `title` | `false` |
| `ignoreReplaceDescription` | Don't update meta description | `false` |
| `ignoreReplaceAuthor` | Don't update footer author | `false` |
| `ignoreReplaceYear` | Don't update copyright year | `false` |
| `noHome` | Don't generate `index.html` | `false` |
| `noSitemap` | Don't generate sitemaps | `false` |
| `noContentList` | Don't add content lists | `false` |
| `noDelayWithoutToken` | Don't delay GitHub API requests | `false` |
| `noLastModified` | Don't add last modified commit info | `false` |
| `noGenerator` | Don't add meta generator tag | `false` |
| `noSyntaxHighlighting` | Disable code syntax highlighting | `false` |
| `noShieldSchema` | Don't generate Shields schema | `false` |
| `shieldSchemaLabel` | Label text for Shields schema | `docs` |
| `shieldSchemaColor` | Badge color in Shields schema | `blueviolet` |
