(function($) {
  $(function() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#demo').on('click', function() {
    	$();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

window.onload = function() {
  'use strict';
  // Script markdown link extractor:
  const extract = document.getElementById('extract');
  extract.onclick = function myLinks() {
    let markdown = document.getElementById('markdown').value;
    document.getElementById('result').innerHTML = markdownLinkExtractor(markdown);
  };
};

