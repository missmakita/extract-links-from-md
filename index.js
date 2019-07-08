'use strict';
const fs = require('fs');
const linkEx = require('./lib/md-link-extractor.js');

const extract = function(file) {
  // Lee el contenido del archivo markdown y lo transforma en string:
  let md = fs.readFileSync(file).toString();
  
  // El contenido del archivo markdown es pasado como argumento al módulo extractor de links:
  let links = linkEx.markdownLinkExtractor(md);

  // Retorna resultados:
  console.log(links);

  // Guarda resultados en un archivo JSON (./data/mylinks.json):
  fs.mkdirSync('./data');
  fs.writeFile('./data/mylinks.json', links, function(err) {
    if (err) throw err;
    console.log('Tus links han sido guardados en ./data/mylinks.json');
  });
};
module.exports.extract = extract;