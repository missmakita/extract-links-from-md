/// Objeto Link:
class Link {
  constructor(text, href) {
    this.text = text;
    this.href = href;
  }
}

// String en formato Markdown:
let markdown = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

// Función que extrae links desde el string en formato Markdown:
let result = [];
//module.exports = function markdownLinkExtractor(markdown) {

  // Expresión regular que identifica la URL y el Texto Visible de un link:
  const re = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;

  // Extraer links:
  let matches = markdown.match(re);

  for (i = 0; i < matches.length; i++) {
  let one = new Link(matches[i].toString(),matches[i + 1]);
  i++;
  result.push(one);
  };

  // Retornar un array de objetos:
  let links = JSON.stringify(result);
  console.log(links);
//};



