Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/dolore) et
[dolore](http://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Quis ut commodo nulla sunt tempor veniam cillum reprehenderit ut sed 
nulla sed ![gooo](http://www.gooo.com). Lorem ipsum dolor sit amet, consectetur 
adipisicing elit. Dolor sed, doloribus esse. Debitis quibusdam ipsum modi, fugit
optio dolores blanditiis.commodi consequatur impedit nesciunt aliquid aut 
sapiente earum vel, qui.

[foo](http://foo.com)

Presentacion:

 Linkin' Mark. es un módulo de Node.js  que nos permite extraer  links de archivos Markdown.
 Linkin' Mark.  implementa ES6
A continuación algunas de las características de  Linkin' Mark.  
Extracción de links en archivos markdown 


1. Definir punto de entrada para  Linkin' Mark.  
Debemos bajar la librería de  Linkin' Mark.   disponible aquí  que ubicaremos un directorio llamado lib para efectos de este ejemplo (probado con la version 1.0.1).
Ahora definiremos en un archivo .js que podría ser index.js la carga de  Linkin' Mark.   como se muestra a continuación.

const fs = require('fs');
const linkEx = require('./lib/md-link-extractor.js');


También es posible hacer la inclusión de forma remota $ npm install --save linkinmarkn pero ya queda a gusto de lector.


2. Configurar Linkin' Mark.


En nuestro archivo index.js definiremos las opciones, lo primero que debemos hacer definir  la ruta de el texto markdown del cual deseamos obtener sus links  como se ve a continuación.
const fs = require('fs');

const linkEx = require('./lib/md-link-extractor.js');

// Lee el contenido del archivo markdown y lo transforma en string:
const md = fs.readFileSync('./url/archivoquequieroextraer.md').toString();

El contenido del archivo markdown es pasado como argumento al módulo extractor de links:

let links = linkEx.markdownLinkExtractor(md);

El módulo buscará e iterar  dentro de tu archivo markdown  devolviendo un array de objetos con todos los links correctamente escritos que se encuentren.
Si el archivo ingresado  contiene un error tipografico en alguno de sus link enviara un Error pidiendo que ingreses  un archivos correcto.
SI el resultado es correcto aparecerá en la consola un resultado similar a esto:
    [
                {
                  "text":"labore",
                  "href":"https://en.wiktionary.org/wiki/labore"
                },
                {
                  "text":"dolore",
                  "href":"https://en.wiktionary.org/wiki/dolore"
                },
                {
                  "text":"foo",
                  "href":"http://foo.com"
                }
              ]
      
3. Ejecutar en la Consola.

Una vez instalada la librería y definida  la ruta de tu archivo markdown ahora podemos ejecutar el módulo.

node index.js

el comando anterior iniciara y ejecutara el modulo en tu consola mostrando como resultado los links del archivo o un mesaje de error en caso de tenerlo.



