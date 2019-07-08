const mark = require('../lib/md-link-extractor');

const { assert } = require('chai');

describe('#markdownLinkExtractor', () => {
  it('debería identificar el link "[Google](https://www.google.com)" y devolverlo en un array de objetos', () => {
    assert.equal(
      markdownLinkExtractor('[Google](https://www.google.com)'),
      '[\n {\n  "text": "Google",\n  "href": "https://www.google.com"\n }\n]'
    );
  });
  it('debería identificar el link "[Emol](http://www.emol.cl)" y devolverlo en un array de objetos', () => {
    assert.equal(
      markdownLinkExtractor('[Emol](http://www.emol.cl)'),
      '[\n {\n  "text": "Emol",\n  "href": "http://www.emol.cl"\n }\n]'
    );
  });
  it('debería identificar el link "[dolore](https://en.wiktionary.org/wiki/dolore)" y devolverlo en un array de objetos', () => {
    assert.equal(
      markdownLinkExtractor('[dolore](https://en.wiktionary.org/wiki/dolore)'),
      '[\n {\n  "text": "dolore",\n  "href": "https://en.wiktionary.org/wiki/dolore"\n }\n]'
    );
  });
  it('debería identificar el link "[ftp](ftp://192.168.0.100:2121" y devolverlo en un array de objetos)', () => {
    assert.equal(
      markdownLinkExtractor('[ftp](ftp://192.168.0.100:2121)'),
      '[\n {\n  "text": "ftp",\n  "href": "ftp://192.168.0.100:2121"\n }\n]'
    );
  });
  it('debería identificar el link "[Uma](ftp://ftp.uma.es)" y devolverlo en un array de objetos)', () => {
    assert.equal(
      markdownLinkExtractor('[uma](ftp://ftp.uma.es)'),
      '[\n {\n  "text": "uma",\n  "href": "ftp://ftp.uma.es"\n }\n]'
    );
  });
  it('debería identificar el link "![Latam](http://www.latam.com)" y devolverlo en un array de objetos)', () => {
    assert.equal(
      markdownLinkExtractor('![Latam](http://www.latam.com)'),
      '[\n {\n  "text": "Latam",\n  "href": "http://www.latam.com"\n }\n]'
    );
  });
});
