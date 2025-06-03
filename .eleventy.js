module.exports = function(eleventyConfig) {
  // Copy the CSS folder to the output
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Set custom directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    // Set template formats
    templateFormats: ["njk", "md", "html"],
    // Set Nunjucks as the default template engine for .html files
    htmlTemplateEngine: "njk"
  };
};