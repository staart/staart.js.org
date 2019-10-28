# Creating themes

Staart Site does not have a strict system for theme development like other static site generators do. By default, you get a simple and beautiful HTML/CSS theme to being with.

If you only want to change the colors of the default theme, you can do so using the [configuration](./configuration.html):

```json
{
  "themeColor": "#0e632c",
  "textColor": "#001b01",
  "linkColor": "#0e632c",
  "lightColor": "#ffffff"
}
```

In the above configuration object, `themeColor` is the basic color used in the theme. This is your brand color, which is ideally be vibrant. It's used as the background color for the header and in other places.

`textColor` is the color of text, which is ideally a very dark version of your theme color (almost black). "Pure black text and backgrounds with white can cause discomfort for the eye," ([source](https://uxmovement.com/content/why-you-should-never-use-pure-black-for-text-or-backgrounds/)) which is why we recommend a darker version of your theme color.

`linkColor` is the same as your theme color by default, but you can overwrite it if you like. Similarly, `lightColor` is the text color of your header (with the theme color as the background), which is white by default.

## Custom layouts

If you want to create an entirely different layout, you can create a custom theme file using [Handlebars](http://handlebarsjs.com). The best way is to customize our [default index.html file](https://github.com/staart/site/blob/master/src/index.html). You can specify the path of your template file in the `templatePath` key in the configuration object if it's not called `index.html`.

A minimal template looks like this, with nothing but the compiled CSS, page title, navigation, and content.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="charset" content="utf-8" />
    <title>{{ metaTitle }}</title>
    <style>{{{ css }}}</style>
  </head>
  <body>
    <header>{{{ navBar }}}</header>
    <main id="content">{{{ content }}}</main>
  </body>
</html>
```

## Custom styling

For style, you can create a Sass/Scss file and specify its path as the `stylePath` value in the configuration object. The contents of this file will be compiled to CSS and injected into your template in the `<style>` tag.
