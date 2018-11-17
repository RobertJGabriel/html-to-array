# html-to-array [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Scrap a html page and convert all text on the page into an array.

## Installation

```sh
$ npm install --save html-to-array
```

## Usage

```js
const HTML_TO_ARRAY = require('html-to-array');
const URL = 'https://www.robertgabriel.ninja';
HTML_TO_ARRAY.scrap(URL).then(data =>)
;
// Returns an object
/*
  let object = {
    message: 'success',
    sentences: ['Robert gabriel is cool', 'Here is sentece two']
  };
*/
// Error
/*
  let object = {
    message: 'error',
    sentences: []
  };
*/
```
## License

Apache-2.0 © [Robert James Gabriel](https://www.robertgabriel.ninja)


[npm-image]: https://badge.fury.io/js/html-to-array.svg
[npm-url]: https://npmjs.org/package/html-to-array
[travis-image]: https://travis-ci.org/RobertJGabriel/html-to-array.svg?branch=master
[travis-url]: https://travis-ci.org/RobertJGabriel/html-to-array
[daviddm-image]: https://david-dm.org/RobertJGabriel/html-to-array.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/RobertJGabriel/html-to-array
[coveralls-image]: https://coveralls.io/repos/RobertJGabriel/html-to-array/badge.svg
[coveralls-url]: https://coveralls.io/r/RobertJGabriel/html-to-array
