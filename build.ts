import { readFile, writeFile, copy, ensureFile, ensureDir } from "fs-extra";
import { join } from "path";
import { render } from "sass";
import { minify } from "html-minifier";
import recursive from "recursive-readdir";
import marked from "marked";
import axios from "axios";

const startTime = new Date().getTime();
console.log("Building website...");

const build = async () => {
  const files = (await recursive(join(__dirname, "..", "content"))).map(
    f => f.split("content/")[1]
  );
  for await (const file of files) {
    const lastCommit = await getLastCommit(`content/${file}`);
    const text = (await readFile(join(__dirname, "..", `content/${file}`)))
      .toString()
      .replace("# Home", "") +
      `${lastCommit ? `\n\nLast modified by [${lastCommit.commit.author.name}](${lastCommit.author.html_url}) on ${new Date(lastCommit.commit.author.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}` : ''} in [${lastCommit.sha.substr(0, 6)}](${lastCommit.html_url})`;
    const content = marked(text);
    let extra = "";
    if (file === "sitemap.md") {
      for await (const f of files) {
        const fContent = (await readFile(
          join(__dirname, "..", `content/${f}`)
        )).toString();
        const title = fContent.split("\n")[0].replace("# ", "");
        extra += `- [${title}](/${f.replace(".md", ".html")})\n`;
      }
    }
    for await (const type of ["backend", "ui", "native", "css"]) {
      if (file === `${type}/index.md`) {
        extra += "## Articles\n\n";
        const iFiles = (await recursive(
          join(__dirname, "..", "content", type)
        )).map(f => f.split(`content/${type}/`)[1]);
        for await (const f of iFiles) {
          const fContent = (await readFile(
            join(__dirname, "..", "content", type, f)
          )).toString();
          const title = fContent.split("\n")[0].replace("# ", "");
          if (!f.endsWith("index.md"))
            extra += `- [${title}](/${type}/${f.replace(".md", ".html")})\n`;
        }
      }
    }
    const title = text.split("\n")[0].replace("# ", "");
    extra = marked(extra);
    const xhtml = (await readFile(join(__dirname, "..", "index.html")))
      .toString()
      .replace("</main>", `${content}${extra}</main>`);
    const scss = (await readFile(
      join(__dirname, "..", "styles.scss")
    )).toString();
    const css = <string>await renderScss(scss);
    const html = xhtml
      .replace("<!-- inject css -->", `<style>${css}</style>`)
      .replace("<!-- year -->", new Date().getUTCFullYear().toString())
      .replace(
        "<title>Staart</title>",
        `<title>${
          file !== "index.md" ? `${title} &middot; Staart` : "Staart"
        }</title>`
      );
    await ensureDir(join(__dirname, "..", "public", "assets"));
    await copy(
      join(__dirname, "..", "assets"),
      join(__dirname, "..", "public", "assets")
    );
    await ensureFile(
      join(__dirname, "..", "public", file.replace(".md", ".html"))
    );
    await writeFile(
      join(__dirname, "..", "public", file.replace(".md", ".html")),
      minify(html, {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true
      })
    );
  }
};

const getLastCommit = async (file: string): Promise<{
  html_url: string;
  sha: string;
  author: {
    login: string;
    name: string;
    avatar_url: string;
    html_url: string;
  };
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    }
  };
}> => {
  return (await axios.get(`https://api.github.com/repos/staart/staart.js.org/commits?path=${file}`)).data[0];
};

const renderScss = (data: string) =>
  new Promise((resolve, reject) => {
    render({ data }, (error, result) => {
      if (error) return reject(error);
      resolve(result.css.toString());
    });
  });

build()
  .then(() =>
    console.log(
      `Built in ${((new Date().getTime() - startTime) / 1000).toFixed(2)}s`
    )
  )
  .catch(error => console.log("Error", error));
