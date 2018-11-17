const request = require('request');
const sanitizeHtml = require('sanitize-html');
const URL_REGEX = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

function scrap(url) {
  let returnObject = {};
  if (typeof url !== 'string') return 'Not a string';
  if (url.trim() === '') return 'Not a string';
  url = url.toLowerCase(); // To lower case for the regex checking
  if (URL_REGEX.test(url) === false) return 'Invaild URL';
  var scrapResponse = new Promise((resolve, reject) => {
    request(
      {
        uri: url
      },
      (error, response, body) => {
        if (error) {
          return reject(error);
        }
        var removeJavascript = sanitizeHtml(body)
          .replace(/<(?:.|\n)*?>/gm, '')
          .replace(/\s\s+/g, ' ')
          .split('\n');
        return resolve(removeJavascript);
      }
    );
  });

  return scrapResponse
    .then(value => {
      returnObject.sentences = value;
      returnObject.message = 'success';
      return returnObject;
    })
    .catch(error => {
      returnObject.sentences = error;
      returnObject.message = 'error';
      return 'error';
    });
}

exports.scrap = scrap;
