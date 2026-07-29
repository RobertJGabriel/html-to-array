# html-to-array

> Scrape an HTML page and return its text as an array.

[![npm](https://img.shields.io/npm/v/html-to-array.svg)](https://www.npmjs.com/package/html-to-array)

Fetches a URL, strips the markup and scripts, collapses the whitespace, and hands
back the remaining text split into lines.

## Install

```sh
npm install html-to-array
```

## Usage

```js
const { scrap } = require('html-to-array');

scrap('https://example.com').then(lines => {
  console.log(lines);
});
```

## API

### scrap(url)

Returns a `Promise` resolving to an array of text lines.

Input is validated before any request is made, and returns a **string** rather
than a promise on failure:

| Condition | Returned |
| --- | --- |
| Not a string, or empty | `'Not a string'` |
| Fails URL validation | `'Invaild URL'` |

Markup is removed with [sanitize-html](https://github.com/apostrophecms/sanitize-html)
before the tags are stripped, so scripts and styles do not appear in the output.

## License

Apache-2.0 © Robert James Gabriel
