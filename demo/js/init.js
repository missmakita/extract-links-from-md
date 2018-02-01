$(document).ready(function() {
  $('#demo').hide();
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
});

$('#showDemo').click(function() {
  $('#demo').toggle();
});

var options = [ {selector: '.imgScript', offset: 500, callback: function(el) { Materialize.fadeInImage($(el)); } }, {selector: '.bwr', offset: 500, callback: function(el) { Materialize.fadeInImage($(el)); } }, {selector: '.imgHtml', offset: 500, callback: function(el) { Materialize.fadeInImage($(el)); } } ]; Materialize.scrollFire(options);

const extract = document.getElementById('extract');
extract.onclick = function myLinks() {
  let markdown = document.getElementById('txtInput').value;
  document.getElementById('result').innerHTML = markdownLinkExtractor(markdown);
};