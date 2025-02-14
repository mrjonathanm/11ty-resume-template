module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy({
    "./src/site.webmanifest": "site.webmanifest",
  });

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};

const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginTailwindCSS);
};

const autoprefixer = require("autoprefixer");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass, {
    postcss: postcss([autoprefixer]),
  });
};


const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
};