// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Syropia",
  templates: {
    Article: "/articles/:title"
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      presetEnvConfig: {
        stage: 3,
        features: {
          "nesting-rules": true
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/articles/**/*.md",
        typeName: "Article"
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
