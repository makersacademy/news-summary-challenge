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

  it('creates new page elements for each story in the model when displayNews is called', () => {
    // mock functions
    model.getStories.mockImplementationOnce(() => [
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
      ],
    );
    
    view.displayNews()
    const storyPageEls = document.querySelectorAll('div.story')
    // checks to story elements have been created
    expect(storyPageEls.length).toBe(2);

    const firstStory = storyPageEls.item(0);
    // checks that the first story element has to child elements: image and headline
    expect(firstStory.childNodes.length).toBe(2);
  });

  it('removes old story page elements when displayNews is called twice', () => {
    model.getStories.mockImplementation(() => [
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
    ],
  );
  // first call
  view.displayNews()

  expect(document.querySelectorAll('div.story').length).toBe(2);
  // second call 
  view.displayNews()
  // length should still be two
  expect(document.querySelectorAll('div.story').length).toBe(2);
  })
})