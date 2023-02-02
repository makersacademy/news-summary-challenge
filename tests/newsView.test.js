/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsModel = require('../src/NewsModel');
const NewsView = require('../src/NewsView');
const NewsClient = require('../src/NewsClient');
const mockNews = require('../mock/mockNews');
const apiData = require('../mock/mockApiData');
jest.mock('../src/NewsClient.js');

describe('NewsView', () => {
  let newsModel, newsView, newsClient;

  beforeEach(() => {
    NewsClient.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html');

    newsClient = new NewsClient();
    newsModel = new NewsModel();
    newsView = new NewsView(newsModel, newsClient);
  });

  describe('displayNews', () => {
    it('displays no news if empty', () => {
      newsView.displayNews();
      expect(document.querySelectorAll('.news').length).toBe(0);
    });

    it('displays a single story on page', () => {
      newsModel.getNews = jest.fn().mockReturnValue([mockNews[0]]);
      newsView.displayNews();
      expect(document.querySelectorAll('.news').length).toEqual(1);
    });

    it('displays multiple stories on page', () => {
      newsModel.getNews = jest.fn().mockReturnValue([mockNews[0], mockNews[1]]);
      newsView.displayNews();
      expect(document.querySelectorAll('.news').length).toEqual(2);
    });

    it('displays the expected number of images and links', () => {
      const news = [mockNews[0], mockNews[1]];
      newsModel.getNews = jest.fn().mockReturnValue(news);
      newsView.displayNews();
      const images = document.querySelectorAll('.news_thumbnail');
      expect(images.length).toBe(2);
      const links = document.querySelectorAll('.headline_link');
      expect(links.length).toBe(2);
      links.forEach((link, index) => {
        expect(link.getAttribute('href')).toBe(news[index].webUrl);
      });
    });

    test("#clearStories should remove all elements with class 'news'", () => {
      const newsItem = document.createElement('div');
      newsItem.className = 'news';
      newsView.mainContainer.append(newsItem);
      newsView.displayNews();
      const stories = document.querySelectorAll('.news');
      expect(stories.length).toBe(0);
    });
  });

  describe('displayNewsFromApi', () => {
    it('adds API data to the model', () => {
      newsClient.loadNews.mockImplementation((callback) => {
        callback(apiData);
      });
      const news = [mockNews[0], mockNews[1]];
      newsModel.getNews = jest.fn().mockReturnValue(news);
      newsView.displayNewsFromApi();
      expect(document.querySelectorAll('.news').length).toEqual(2);
      expect(document.querySelectorAll('.news')[0].textContent).toContain(
        'UK house price growth slows'
      );
    });
  });

  describe('displayNewsFromSearch', () => {
    it('searches news using the search term', () => {
      newsView.displayNewsFromSearch('UK news');
      expect(newsClient.searchNews).toHaveBeenCalledWith(
        'UK news',
        expect.any(Function)
      );
    });

    it('updates news data on search', () => {
      newsClient.searchNews.mockImplementation((searchTerm, callback) => {
        callback(apiData);
      });
      newsModel.getNews = jest.fn().mockReturnValue([mockNews[0], mockNews[1]]);
      newsView.displayNewsFromSearch();

      expect(document.querySelectorAll('.news').length).toEqual(2);
      expect(document.querySelector('.news').textContent).toContain(
        'UK house price growth slows'
      );
    });
  });

  describe('displayNewsBySection', () => {
    it('searches news by specific sections', () => {
      newsView.displayNewsBySection('commentisfree');
      expect(newsClient.filterNews).toHaveBeenCalledWith(
        'commentisfree',
        expect.any(Function)
      );
    });

    it('updates news data on filter', () => {
      newsClient.filterNews.mockImplementation((section, callback) => {
        callback(apiData);
      });
      newsModel.getNews = jest.fn().mockReturnValue([mockNews[0], mockNews[1]]);
      newsView.displayNewsBySection();

      expect(document.querySelectorAll('.news').length).toEqual(2);
      expect(document.querySelector('.news').textContent).toContain(
        'UK house price growth slows'
      );
    });
  });

  describe('eventListeners', () => {
    beforeEach(() => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      document.dispatchEvent(new Event('DOMContentLoaded'));
      newsView.displayNewsFromApi = jest.fn();
      newsView.displayNewsBySection = jest.fn();
      newsView.displayNewsFromSearch = jest.fn();
    });

    it('calls displayNewsFromApi on DOMContentLoaded', () => {
      document.dispatchEvent(new Event('DOMContentLoaded'));
      expect(newsView.displayNewsFromApi).toHaveBeenCalled();
    });

    it('allows user to submit a search using the searchbar', () => {
      const searchForm = document.querySelector('.searchbar');
      const searchInput = document.querySelector('#search-input');
      searchInput.value = 'sport';
      searchForm.submit();
      expect(newsView.displayNewsFromSearch).toHaveBeenCalledWith('sport');
    });
    test('Header logo is clicked', () => {
      document.querySelector('#header-button-logo').click();
      expect(newsView.displayNewsFromApi).toHaveBeenCalled();
    });

    test('Business section is clicked', () => {
      document.querySelector('#header-button-business').click();
      expect(newsView.displayNewsBySection).toHaveBeenCalledWith('business');
    });

    test('Opinion section is clicked', () => {
      document.querySelector('#header-button-opinion').click();
      expect(newsView.displayNewsBySection).toHaveBeenCalledWith(
        'commentisfree'
      );
    });

    test('Sport section is clicked', () => {
      document.querySelector('#header-button-sport').click();
      expect(newsView.displayNewsBySection).toHaveBeenCalledWith('sport');
    });

    test('Culture section is clicked', () => {
      document.querySelector('#header-button-culture').click();
      expect(newsView.displayNewsBySection).toHaveBeenCalledWith('culture');
    });
  });
});
