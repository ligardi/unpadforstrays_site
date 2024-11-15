const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/font');
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/js');
	eleventyConfig.addPassthroughCopy('./src/post');

	eleventyConfig.addCollection("recentPosts", function(collectionApi) {
  return collectionApi.getFilteredByGlob("./src/post/*.md").reverse().slice(0, 3);
});
	
	eleventyConfig.addFilter("postDate", (dateObj) => {
			return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
    return {
    templateFormats: ["md", "njk", "html", "liquid"],
    
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
      
    dir: {
        input: "src",
        output: "_site"
    }
    };
};