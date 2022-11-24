/**
 * @jest-environment jsdom
 */

const fs = require('fs');
require('jest-fetch-mock').enableMocks();
const NewsModel = require('./src/newsModel');
const NewsView = require('./src/newsView');

describe('News View', () => {
  it('constructs with an empty list of articles', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NewsModel();
    const view = new NewsView(model);
    view.displayArticles();
    expect(document.querySelectorAll('div.article').length).toEqual(0);
  })

});