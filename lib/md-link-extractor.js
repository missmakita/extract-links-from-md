// Objeto Link:
class Link {
  constructor(text, href) {
    this.text = text;
    this.href = href;
  }
}

// Función que extrae links desde el string en formato Markdown:
markdownLinkExtractor = (markdown) => {
  'use strict';

  let result = [];
  
  // Expresión regular que identifica la URL y el Texto Visible de un link:
  const re = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;

  // Extraer links:
  let matches = markdown.match(re);

  for (let i = 0; i < matches.length; i++) {
    let one = new Link(matches[i], matches[i + 1]);
    i++;
    result.push(one);
  }

  // Retornar un array de objetos:
  return JSON.stringify(result, null, ' ');
};
module.exports.markdownLinkExtractor = markdownLinkExtractor;