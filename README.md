

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](www://en.wiktionary.org/wiki/labore) et (Lorem), [Other Lorem]
 [labore](www://en.wiktionary.org/wiki/labore) 

[dolore](http://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
# extractLinksFromMd

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

Implementar un módulo de Node.js que reciba un string (en formato Markdown) y
extraiga todos los links encontrados. La implementación debe ser una función que
recibe un string y devuelve un arreglo de objetos como se muestra en el este
ejemplo:

```js
const extractLinksFromMd = require('extract-links-from-md');
const str = `# Lorem ipsum



[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

const links = extractLinksFromMd(str);

console.log(links);
// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```
