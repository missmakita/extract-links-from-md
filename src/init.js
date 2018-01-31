(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#demo').on('click', function(){
    	$()
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space

window.onload = function() {

'use strict'
	const extract = document.getElementById('extract');
    extract.onclick = function(){
      let markdown = document.getElementById('txtInput').value;
      document.getElementById('txtInput').value = '';
      document.getElementById('result').innerHTML = markdownLinkExtractor(markdown);
    };
};

class Link {
			constructor(text,href) {
				
				this.text = text;
				this.href = href;
			};
		};  

markdownLinkExtractor = function(markdown) {
  'use strict';
  const re = /!?\[(.*)\]\((.*?)\)/gi;  

  let matches = re.exec(markdown); // Cambio Método .match a método .exec() para poder sacar los corchetes
  let result = [];
  let text = [];  
  // console.log(matches)
  do {
    let temp = matches[1];
    text.push(temp);
  } while ((matches = re.exec(markdown)) !== null);
  // return JSON.stringify(text);
  const reHref = /(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
  let href = markdown.match(reHref);
  // console.log(href);
  // console.log(text)

  if (text.length === href.length) {
    for (let i = 0; i < text.length; i++) {
      const one = new Link(text[i], href[i]);
      result.push(one);
    }
    return JSON.stringify(result, null," ");
  } else {
    console.log('El texto ingresado tiene un error, por favor  corrijalo  e intente nuevamente');
  };
};



  