import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import svelte from "@astrojs/svelte"; // @ts-check
// https://astro.build/config

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig(
/** @type {import('astro').AstroUserConfig} */
{
  // Comment out "renderers: []" to enable Astro's default component support.
  //renderers: [],
  vite: {
    plugins: [svelte({})]
  },
  build: {},
  site: "https://bootstrapped.me",
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: 'prism',
    remarkPlugins: ["remark-gfm", "remark-smartypants", "remark-prism", "@fec/remark-a11y-emoji", ["remark-behead", {
      depth: 1
    }]],
    rehypePlugins: ["rehype-slug", ["rehype-autolink-headings", {
      content: {
        type: "element",
        tagName: "span",
        properties: {
          className: ["headerLink"],
          ariaHidden: true
        },
        children: []
      },
      behavior: "append"
    }]]
  },
  integrations: [mdx(), svelte(), tailwind()]
});
