/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");
const Responses = require('./serverResponses')
const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

describe('NewsView class', () => {
  
  let model;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    fetch.resetMocks();
    model = new NewsModel();
    okResponse = Responses.okResponse()
    emptyResponse = Responses.emptyResponse()
    errorResponse = Responses.errorResponse()
    specificResponse = Responses.specificResponse()
  })

  test('loads the articles inside the model class', async () => {
    const mockClient = {loadArticles: jest.fn().mockResolvedValueOnce(okResponse)}
    const view = new NewsView(model, mockClient);
    await view.getArticles()
    const articles = model.getArticles() 
    expect(articles.length).toEqual(10)
    expect(articles[0].webTitle).toEqual('Top 10 books about being poor in America')
  })
})