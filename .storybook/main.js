module.exports = {
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.@(ts|tsx)"],
  addons: [],
};
