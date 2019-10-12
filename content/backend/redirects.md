# Redirects

To set up redirects, simply create a `redirects.yml` file in the `./src` directory, for example:

```yaml
- /hello /about # Redirects example.com/hello to example.com/about
- /ext1 https://google.com # Redirects example.com/ext1 to google.com
```

For now, wildcard redirects with `*` are not supported.
