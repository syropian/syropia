import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function get(context) {
  const posts = (await getCollection("posts"))
    .filter((post) => !post.data.isDraft)
    .sort(
      (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
    );

  return rss({
    // `<title>` field in output xml
    title: "Posts | Syropia",
    // `<description>` field in output xml
    description: "Technical tidbits for everyday coders",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.description,
      link: `/posts/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    stylesheet: "/rss/styles.xsl",
  });
}
