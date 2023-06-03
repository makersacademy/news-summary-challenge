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

    mockData = [
      {
        webUrl: 'fake url',
        headline: 'fake headline ',
        byline: 'nobody',
        thumbnailUrl: 'an even more fake url'
      },
      {
        webUrl: 'a very fake url',
        headline: 'fake headline: the return',
        byline: 'who?',
        thumbnailUrl: 'the fakest url'
      }
    ]
  })

  it('constructs', () => {
    expect(view).toBeTruthy();
    expect(view).toHaveProperty('model', model)
    expect(view).toHaveProperty('client', client)
  })

  it('creates new page elements for each story in the model when displayNews is called', () => {
    // mock functions
    model.getStories.mockImplementationOnce(() => mockData);
    
    view.displayNews()
    const storyPageEls = document.querySelectorAll('div.story')
    // checks to story elements have been created
    expect(storyPageEls.length).toBe(2);

    const firstStory = storyPageEls.item(0);
    // checks that the first story element has two child elements: image and headline
    expect(firstStory.childNodes.length).toBe(2);
  });

  it('removes old story page elements when displayNews is called twice', () => {
    // mock functions
    model.getStories.mockImplementation(() => mockData);

    // first call
    view.displayNews()

    expect(document.querySelectorAll('div.story').length).toBe(2);
    // second call 
    view.displayNews()
    // length should still be two
    expect(document.querySelectorAll('div.story').length).toBe(2);
    })

  it('displays latest stories from the API when displayNewsFromApi is called', () => {
    // mock functions
    // this mock skips the fetch request. but mimics its result
    client.fetchNewsStories.mockImplementation((callback) => {
      return Promise.resolve(callback(mockData));
    })
    // this mock skips the setStories call in displayNewsFromApi
    model.getStories.mockImplementation(() => mockData);

    view.displayNewsFromApi()
    // these check that the correct methods have been called
    expect(client.fetchNewsStories).toHaveBeenCalled();
    expect(model.setStories).toHaveBeenCalledWith(mockData);
    expect(model.getStories).toHaveBeenCalled();
    // this checks that created elements are being added to page
    expect(document.querySelectorAll('div.story').length).toBe(2); 
  });

  it('has a form to submit an optional search query', () => {
    expect(document.querySelector('#search-button')).toBeTruthy();
    expect(document.querySelector('#search-input')).toBeTruthy();
  });

  it('filters latest stories then displays them with searchNews is called with a query string', () => {
    const query = 'fake query'
    // mock functions
    // this mock skips the fetch request. but mimics its result
    client.fetchNewsStories.mockImplementation((callback) => {
      return Promise.resolve(callback(mockData));
    })
    // this mock skips the setStories call in searchNews
    model.getStories.mockImplementation(() => mockData);

    view.searchNews(query)
    // checks that searchNews has passed on the query to the fetch
    expect(client.fetchNewsStories).toHaveBeenCalledWith(expect.any(Function), query);
    // checks that the display is still happening
    expect(model.setStories).toHaveBeenCalledWith(mockData);
    expect(model.getStories).toHaveBeenCalled();
    expect(document.querySelectorAll('div.story').length).toBe(2); 
  });
})