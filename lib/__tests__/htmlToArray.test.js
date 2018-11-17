const HTML_TO_ARRAY = require('../index.js');
const URL = 'https://www.robertgabriel.ninja';

describe('Returning and prasing tests', () => {
  it('Check the amount of sentences on the webpage', () => {
    const testResult = HTML_TO_ARRAY.scrap(URL).then(data =>
      expect(data.sentences.length).toEqual(49)
    );
    return testResult;
  });
  it('Does it return the first sentence', () => {
    const testResult = HTML_TO_ARRAY.scrap(URL).then(data =>
      expect(data.sentences[0]).toEqual(
        ' Robert James Gabriel: Software engineer Robert James Gabriel Apps'
      )
    );
    return testResult;
  });
});

describe('Error testing', () => {
  it('Broken URL or invaild', () => {
    return expect(HTML_TO_ARRAY.scrap('http')).toEqual('Invaild URL');
  });
  it('Only strings', () => {
    return expect(HTML_TO_ARRAY.scrap(1)).toEqual('Not a string');
  });
});
