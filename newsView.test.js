/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");
const Responses = require('./serverResponses')

describe('NewsView class', () => {
  
  let model;
  let mockClient;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    fetch.resetMocks();
    model = new NewsModel();
    okResponse = Responses.okResponse()
    emptyResponse = Responses.emptyResponse()
    errorResponse = Responses.errorResponse()
    specificResponse = Responses.specificResponse()
    mockClient = jest.fn()
  })

  describe('getArticles method', () => {    
    test('loads the articles inside the model class', async() => {
      const mockClient = {loadArticles: jest.fn().mockResolvedValueOnce(okResponse)}
      const view = new NewsView(model, mockClient);
      await view.retrieveArticlesFromApi()
      const articles = model.getArticles() 
      expect(articles.length).toEqual(10)
      expect(articles[0].webTitle).toEqual('Top 10 books about being poor in America')
      expect(mockClient.loadArticles).toHaveBeenCalledWith(undefined);
    });
    test('loads the specific articles inside the model class', async() => {
      const mockClient = {loadArticles: jest.fn().mockResolvedValueOnce(specificResponse)}
      const view = new NewsView(model, mockClient);
      await view.retrieveArticlesFromApi('football')
      const articles = model.getArticles() 
      expect(articles.length).toEqual(10)
      expect(articles[0].webTitle).toEqual('Football Daily | Sam Allardyce, Leeds and football heritage')
      expect(mockClient.loadArticles.mock.calls.length).toEqual(1)
      expect(mockClient.loadArticles).toHaveBeenCalledWith('football');
    });
  });

  describe('displayPage method', () => {
    test('displays the loaded articles on the page', () => {
      model.setArticles(okResponse.response.results)
      const view = new NewsView(model, mockClient);
      view.displayPage()
      const all_notes_on_page = document.querySelectorAll('div.article')
      expect(all_notes_on_page.length).toEqual(10)
      expect(all_notes_on_page[0].textContent).toEqual("Top 10 books about being poor in America")
      expect(all_notes_on_page[0].querySelector('img').src).toEqual('https://media.guim.co.uk/111ce78e653584f39dc414c752768a4e90ce2504/0_317_3260_1955/500.jpg')
    })

    test('throws an error if there are no articles in the model', () => {
      model.setArticles(emptyResponse.response.results)
      const view = new NewsView(model, mockClient);
      expect(view.displayPage).toThrowError("No articles found.");
    })
  })

  describe('displayError method', () => {
    test('it resets all the views on page and creates a new error element', () =>{
      model.setArticles(okResponse.response.results)
      const view = new NewsView(model, mockClient);
      view.displayPage()
      view.displayError('Something went wrong.')
      const all_notes_on_page = document.querySelectorAll('div.error')
      expect(all_notes_on_page.length).toEqual(1)
      expect(all_notes_on_page[0].textContent).toEqual("Something went wrong.")
    })
  })

})