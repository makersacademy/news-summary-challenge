/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsSummaryView = require('../newsSummaryView')

require('jest-fetch-mock').enableMocks();

describe('NewsSummaryView', () => {
  let api;
  let view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    view = new NewsSummaryView(api);
  });

  it('displays news articles headlines', () => {
    fetch.mockResponseOnce(JSON.stringify(
      'Hello World'
    ));

    const data =  { "response": {
          "results": [{
            "webTitle": 'Hello World',
            "fields": 'thumbnail'
          }]
      }}
    view.displayHeadlines(data);
    const allHeadlines = document.querySelectorAll('.title');
    const oneHeadline = allHeadlines[allHeadlines.length - 1];

    expect(oneHeadline.innerText).toEqual('Hello World');
  })
})