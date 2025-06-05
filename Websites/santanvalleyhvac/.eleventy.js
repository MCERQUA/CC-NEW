const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy the CSS folder to the output
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Add date filters
  eleventyConfig.addFilter("postDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd');
  });
  
  // Add limit filter for collections
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });
  
  // Create blog collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
  });
  
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
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    // This helps with path resolution
    pathPrefix: "/"
  };
};