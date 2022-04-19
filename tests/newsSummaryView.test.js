/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsSummaryModel = require('../newsSummaryModel');
const NewsSummaryView = require('../newsSummaryView')

require('jest-fetch-mock').enableMocks();

describe('NewsSummaryView', () => {
  let api;
  let view;
  let model;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NewsSummaryModel();
    view = new NewsSummaryView(model, api);
  });

  it('displays news articles headlines', () => {
    fetch.mockResponseOnce(JSON.stringify(
      'Hello World'
    ));

    const data = {
        "response": {
          "results": [{
            "webTitle": 'Hello World',
            "fields": 'thumbnail'
          }]
        }    
      }

    view.displayHeadlines(data);
    const allHeadlines = document.getElementsByClassName('title is-3 mt-3 is-flex is-justify-content-center');

    expect(allHeadlines.length).toEqual(1);
  });

  it('displays article summary', () => {
    fetch.mockResponseOnce(JSON.stringify(
      'Test'
    ));

    const data = {
          "article_img": "http://image.jpeg",
          "article_title": "Test Title",
          "summary": [
            'Hello World',
            'I spent too much time on this'
          ]
        }
        
    view.displaySummary(data);
    
    const allParagraphs = document.querySelectorAll('.mb-2').length;
    expect(allParagraphs).toEqual(2);
  })
})