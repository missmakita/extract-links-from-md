
//Creamos un objeto Link le pasamos el parametro Text, HREF
let links = [];
class Link {
		constructor(text,href) {
			
			this.text = text;
			this.href = href;
		};
	};  

// Agregamos un esuchador al boton eLinks y le decimos que al hacer click 
//Ejecute la funcion extractLinksFromMd

const eLinks = document.getElementById('eLinks');
eLinks.addEventListener('click', extractLinksFromMd );


//FUNCION!!

function extractLinksFromMd() {

//OBTENEMOS EL VALOR INGRESADO EN EL IMPUT.
let markdown = document.getElementById('txtInput').value;

//Crear un test que valide que el texto ingresado es un Str Markdwon!!!!IMPORTANTE 

//Expresion regular que saca todos lo Href del str ingresado

const re = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
//Aplicamos la expresion regular al str ingresado
let matches = markdown.match(re);

console.log(matches);

//Iteramos  el array resultado matches para sacar el Key el value de el nuevo Link

for ( i = 0; i <matches.length; i++){

	let one = new Link(matches[i],matches[i+1]);
	i++
    links.push(one);

	}
	
	
	console.log(JSON.stringify(links));
//IMPRIMIMOS EN EL HTML EL RESULTADO ESPERADO.

	document.getElementById("result").innerHTML = (JSON.stringify(links));
	       
};

