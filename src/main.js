// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue"

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    type: "text/css",
    rel: "stylesheet",
    href: "//fast.fonts.net/cssapi/7befbbc4-a64a-4d13-87f0-377478abd2e7.css"
  })
  Vue.component("Layout", DefaultLayout)
}
