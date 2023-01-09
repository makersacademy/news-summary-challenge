/**
 * @jest-environment jsdom
 */

const ArticleClient = require('./articleClient');
const ArticleModel = require('./articleModel');
const ArticleView = require('./articleView');
const fs = require('fs');

jest.mock('./articleClient');
jest.mock('./articleModel');

describe(ArticleView, () => {

  let client, model, view;
  beforeEach(() => {
    jest.resetAllMocks();
    
    document.body.innerHTML = fs.readFileSync('./index.html');

    client = new ArticleClient();
    model = new ArticleModel();
    view = new ArticleView(client, model);
  });

  const exampleResponse = {
    response: {
      results: [
        {
          fields: {
            headline: ' Quarter of ambulance patients in England wait an hour to get into A&E after arrival',
            thumbnail: 'https://media.guim.co.uk/329d3c8ff5861ef968efbc4e320dac5b332b3d35/0_185_5554_3333/500.jpg'
          },
          webUrl: "https://www.theguardian.com/society/2023/jan/06/quarter-of-ambulance-patients-in-england-faced-hours-wait-for-a-and-e"
        }
      ]
    }
  }

  const exampleArticles = [
    {
      headline: ' Quarter of ambulance patients in England wait an hour to get into A&E after arrival',
      thumbnail: 'https://media.guim.co.uk/329d3c8ff5861ef968efbc4e320dac5b332b3d35/0_185_5554_3333/500.jpg',
      webUrl: 'https://www.theguardian.com/society/2023/jan/06/quarter-of-ambulance-patients-in-england-faced-hours-wait-for-a-and-e'
    },
    {
      headline: 'Antonio Conte mourns another friend with the death of Gianluca Vialli',
      thumbnail: 'https://media.guim.co.uk/4ce2ad9b7030d5c0d12e1cadc1e718de33ebcc9e/0_272_7153_4294/500.jpg',
      webUrl: 'https://www.theguardian.com/football/2023/jan/06/antonio-conte-mourns-another-friend-with-death-of-gianluca-vialli'
    }
  ]

  describe('displayArticles', () => {
    it('displays articles from the model', () => {
      model.getArticles.mockImplementationOnce(() => exampleArticles);

      view.displayArticles();

      expect(document.querySelectorAll('.headlines .article').length).toBe(2);
      expect(document.querySelector('.article img').src)
        .toBe(exampleArticles[0].thumbnail);
      expect(document.querySelector('.article .headline').textContent)
        .toBe(exampleArticles[0].headline);
      expect(document.querySelector('.article .headline a').href)
        .toBe(exampleArticles[0].webUrl);
    });

    it('does not add duplicates when calling displayArticles twice', () => {
      model.getArticles.mockImplementation(() => exampleArticles);

      view.displayArticles();
      view.displayArticles();
      
      expect(document.querySelectorAll('.headlines .article').length).toBe(2);
    });
  });
  
  describe('displayError', () => {
    it('displays error to page', () => {
      view.displayError(new Error('Oops, something went wrong'));
      
      expect(document.querySelector('#main-container').children.length).toBe(2);
      expect(document.querySelector('.error').textContent).toBe('Error');
      expect(document.querySelector('.error-message').textContent)
        .toBe('Oops, something went wrong');
    });
  });
  
  describe('fetchArticlesFromApi', () => {
    
    const scrollToSpy = jest.fn();
    beforeEach(() => {
      scrollToSpy.mockReset();
      global.scrollTo = scrollToSpy;
    });

    it('fetches articles, gives them to the model and displays them', () => {
      client.fetchArticles.mockImplementationOnce((date, query, callback) => {
        callback(exampleResponse);
      });
  
      model.getArticles.mockImplementationOnce(() => [exampleArticles[0]]);
  
      view.fetchArticlesFromApi('2023-01-06', '');
  
      expect(client.fetchArticles).toHaveBeenCalledWith(
        '2023-01-06', '', expect.any(Function), expect.any(Function)
      );
  
      expect(model.setArticles).toHaveBeenCalledWith([exampleArticles[0]]);
  
      expect(document.querySelector('.article img').src)
        .toBe(exampleArticles[0].thumbnail);
      expect(document.querySelector('.article .headline').textContent)
        .toBe(exampleArticles[0].headline);
      expect(document.querySelector('.article .headline a').href)
        .toBe(exampleArticles[0].webUrl);

      expect(scrollToSpy).toHaveBeenCalledWith(0,0);
    });
  
    it('catches fetch error', (done) => {
      client.fetchArticles.mockImplementationOnce((date, query, callback, errorCallback) => {
        errorCallback(new Error('Oops, something went wrong'))
      });
      
      view.fetchArticlesFromApi('2023-01-06', '', (error) => {
        expect(document.querySelector('.error').textContent).toBe('Error');
        expect(document.querySelector('.error-message').textContent)
          .toBe('Oops, something went wrong');
        done();
      });
    });
  
    it('fetches articles with a query term, adds them to the model and displays them', () => {
      client.fetchArticles.mockImplementationOnce((date, query, callback) => {
        callback(exampleResponse);
      });
  
      model.getArticles.mockImplementationOnce(() => [exampleArticles[0]]);
  
      view.fetchArticlesFromApi('', 'query');
  
      expect(client.fetchArticles).toHaveBeenCalledWith(
        '', 'query', expect.any(Function), expect.any(Function)
      );
  
      expect(model.setArticles).toHaveBeenCalledWith([exampleArticles[0]]);
  
      expect(document.querySelector('.article img').src)
        .toBe(exampleArticles[0].thumbnail);
      expect(document.querySelector('.article .headline').textContent)
        .toBe(exampleArticles[0].headline);
      expect(document.querySelector('.article .headline a').href)
        .toBe(exampleArticles[0].webUrl);
        
      expect(scrollToSpy).toHaveBeenCalledWith(0,0);
    });
  });

  describe('Search bar', () => {
    it('clicking search button fetches new articles', () => {
      const searchInputEl = document.querySelector('#search-bar-input');
      const searchButtonEl = document.querySelector('#search-button');
  
      jest.spyOn(view, 'fetchArticlesFromApi');
  
      searchInputEl.value = 'query';
      searchButtonEl.click();
  
      expect(view.fetchArticlesFromApi).toHaveBeenCalledWith('', 'query');
    });
  
    it('clicking search button with an empty input fetches today\'s articles', () => {
      const searchInputEl = document.querySelector('#search-bar-input');
      const searchButtonEl = document.querySelector('#search-button');
  
      jest.spyOn(view, 'fetchArticlesFromApi');
      jest.useFakeTimers().setSystemTime(new Date('2023-01-06'));
  
      searchInputEl.value = '';
      searchButtonEl.click();
  
      expect(view.fetchArticlesFromApi).toHaveBeenCalledWith('2023-01-06', '');
    });
  
    it('pressing enter in the input field fetches articles', () => {
      const searchInputEl = document.querySelector('#search-bar-input');
  
      jest.spyOn(view, 'fetchArticlesFromApi');
  
      const pressSpaceEvent = new KeyboardEvent('keydown', { key: 'Space' });
      searchInputEl.dispatchEvent(pressSpaceEvent);
      expect(view.fetchArticlesFromApi).not.toHaveBeenCalled();
  
      const pressEnterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      searchInputEl.value = 'query';
      searchInputEl.dispatchEvent(pressEnterEvent);
  
      expect(view.fetchArticlesFromApi).toHaveBeenCalledWith('', 'query');
    });
  });
});
