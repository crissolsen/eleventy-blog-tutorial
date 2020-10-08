const util = require('util')
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    eleventyConfig.addPassthroughCopy('includes')
    eleventyConfig.addPassthroughCopy('admin')
}