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
  // Expresion regular que comprueba el formato markDown de los links
  const re = /\[(.*?)\]\((.*?|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-]))\)/ig; //i = ignora mayusculas y minusculas  g = ejecuta una busqueda global , sucesibament

  let matches = re.exec(markdown); // Cambio Método .match a método .exec() para poder sacar los corchetes
  let result = [];

  do {
    const one = new Link(matches[1], matches[2]); 
    result.push(one);
  } while ((matches = re.exec(markdown)) !== null);
  return JSON.stringify(result);
};
module.exports.markdownLinkExtractor = markdownLinkExtractor;