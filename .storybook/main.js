module.exports = {
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  stories: [
    "../app/components/**/*.stories.mdx",
    "../app/components/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    // "storybook-addon-next-router",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require("postcss"),
        },
      },
    },
  ],
};
