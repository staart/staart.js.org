# Redirects

To set up redirects, simply create a `redirects.yml` file in the current working directory, for example:

```yaml
- /hello /about # Redirects example.com/hello to example.com/about
- /ext1 https://google.com # Redirects example.com/ext1 to google.com
```

Since Staart Site is a static site generator, we cannot configure server redirects. For these redirects, we create an HTML page which redirects using the `<meta>` tag and a fallback script.

For now, wildcard redirects with `*` are not supported.
