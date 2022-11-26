/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NewsModel = require('./newsModel');
const NewsClient = require('./newsClient');
const NewsView = require('./newsView');

const mockAPIData = require('./mockAPIData');

require('jest-fetch-mock').enableMocks();

let model, client, view;

describe('NewsView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NewsModel();
    client = new NewsClient();
    view = new NewsView(model, client);
  });
  // integration test?
  it('adds news article list items to the page', (done) => {
    model.setNews(mockAPIData);
    const data = model.getNews();
    view.displayNews(data);

    const divs = document.querySelectorAll('.list__item');
    const divsLength = divs.length;
    expect(divsLength).toBe(10);
    done();
  });
});
