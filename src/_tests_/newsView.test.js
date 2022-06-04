/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsApi = require('../models/newsApi');
const NewsModel = require('../models/newsModel');
const NewsView = require('../views/newsView');

require('jest-fetch-mock').enableMocks();

describe('News view', () => {
  let view;
  let model;
  let api;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NewsModel();
    api = new NewsApi();
    view = new NewsView(model, api);
  });

  it('displays two headlines', () => {
    model.addNews('First headline');
    model.addNews('Second headline');

    view.displayNews();

    expect(document.querySelectorAll('div.headline').length).toEqual(2);
  });
});
