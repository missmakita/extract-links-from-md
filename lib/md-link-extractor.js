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
  const re = /\[(.*?)\]\((.*?|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-]))\)/ig; // ignora mayusculas y minusculas  g = ejecuta una busqueda global , sucesibament
  
  // Expresion regular que comprueba el formato markdown de los links 
  let matches = re.exec(markdown); // Cambio método .match a metodo .exec para poder sacar los corchetes
  // console.log(matches); Para entender el funcionamiento de .exec https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp/exec
  let result = [];

  do {
    const one = new Link(matches[1], matches[2]); 
    result.push(one);
  } while ((matches = re.exec(markdown)) !== null);
  return JSON.stringify(result, null, ' ');
};
module.exports.markdownLinkExtractor = markdownLinkExtractor;