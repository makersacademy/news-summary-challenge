/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const { isTypedArray } = require('util/types');
const newsApi = require('./newsApi');
const newsModel = require('./newsModel');
 const newsView = require('./newsView')
jest.mock('./newsModel');
jest.mock('./newsApi');

 describe(newsView, () => {
   
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    newsModel.mockClear();
    newsApi.mockClear();
    model = new newsModel();
    api = new newsApi();
    view = new newsView(model, api);
  });
    it("creates a new instance of the newsModel class", () => {
      expect(view.model).toBeInstanceOf(newsModel);
    });

    it("creates a new instance of the newsApi class", () => {
      expect(view.api).toBeInstanceOf(newsApi);
    });

    it("displayNews gets the list of headlines from the model", () => {
      model.getNews.mockImplementation(() => [
        {"headline": "Elon buys Twitter"}
      ]);
      view.displayNews();
      expect(document.querySelectorAll("h2.headline").length).toEqual(1);

  })
 })