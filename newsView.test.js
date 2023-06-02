/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NewsClient = require("./newsClient");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");
// auto-mocking other classes
jest.mock('./newsModel');
jest.mock('./newsClient');


describe('NewsView class', () => {
  let model;
  let client;
  let view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    NewsClient.mockClear()
    NewsModel.mockClear()
    model = new NewsModel;
    client = new NewsClient;
    view = new NewsView(model, client);
  })

  it('constructs', () => {
    expect(view).toBeTruthy();
    expect(view).toHaveProperty('model', model)
    expect(view).toHaveProperty('client', client)
  })

  xit('creates new page elements for each story in the model when displayNews is called', () => {
    // placeholder
  });
})