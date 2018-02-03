$(document).ready(function() {
  $('#demo').hide();
  $('#resultBox').hide();
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
});

$('#showDemo').click(function() {
  $('#demo').toggle();
  $('#resultBox').focus();
  $('#resultBox').toggle();
  $('#markdow').css('height', '0px');
});

// Scrollfire
const options = [
  {
    selector: '.imgScript',
    offset: 500,
    callback: function(el) {
      Materialize.fadeInImage($(el)); 
    } 
  },
  {
    selector: '.uso',
    offset: 500,
    callback: function(el) {
      Materialize.fadeInImage($(el)); 
    } 
  },
  {
    selector: '.instalacion',
    offset: 500,
    callback: function(el) {
      Materialize.fadeInImage($(el)); 
    } 
  },
  {
    selector: '.browser',
    offset: 500,
    callback: function(el) {
      Materialize.fadeInImage($(el)); 
    } 
  },
  
  {
    selector: '.icon-brow',
    offset: 500,
    callback: function(el) {
      Materialize.fadeInImage($(el)); 
    } 
  },
  {
    selector: '.bwr',
    offset: 500,
    callback: function(el) {
      Materialize.fadeInImage($(el)); 
    }
  },
  {
    selector: '.imgHtml',
    offset: 500,
    callback: function(el) {
      Materialize.fadeInImage($(el)); 
    }
  },
  {
    selector: '.descarga',
    offset: 300,
    callback: function(el) {
      Materialize.fadeInImage($(el)); 
    }
  },
  {
    selector: '.descarga-link',
    offset: 500,
    callback: function(el) {
      Materialize.fadeInImage($(el)); 
    }
  },
]; Materialize.scrollFire(options);

// Extractor de links:
const extract = document.getElementById('extract');
extract.onclick = function myLinks() {
  let markdown = document.getElementById('markdown').value;
  document.getElementById('markdown').value = '';
  document.getElementById('markdown').style.height = '0px';
  document.getElementById('result').innerHTML = markdownLinkExtractor(markdown);
};