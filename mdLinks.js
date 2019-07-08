var fs = require('fs');
var markdownLinkExtractor = require('markdown-link-extractor');

var markdown = fs.readFileSync('README.md').toString();
console.log(markdown);

var links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
    console.log(link);
});