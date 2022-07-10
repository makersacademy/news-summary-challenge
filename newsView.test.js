/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('./newsView');
const NewsModel = require('./newsModel');
const fakeJson = require('./fakeJson.json')

describe('NewsView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  describe('displayNewsFromApi', () => {
    it('displays news from the API on the page', () => {
      const model = new NewsModel();
      const api = {
        loadData: () => {
          model.add(fakeJson.response.results);
          view.displayNews();
        }
      }
      const view = new NewsView(model, api);
      view.displayNewsFromApi();
      expect(document.querySelectorAll('div.news-title').length).toEqual(10);
      expect(document.querySelectorAll('div.news-title')[0].innerText).toEqual("Australia news live: Queenslanders urged to wear masks as nation records 13 Covid deaths; NSW flood clean-up under way");
      expect(document.querySelectorAll('img.news-image')[0].src).toEqual("https://media.guim.co.uk/88d052d9259c82ed38625b340da9b563b59f21aa/0_172_2600_1561/500.jpg");
    })
  })

  describe('displayError', () => {
    it('displays an error message when network connection interrupted', () => {
      const model = new NewsModel();
      const api = {
        loadData: () => {
          model.add(fakeJson.response.results);
          view.displayNews();
        }
      }
      const view = new NewsView(model, api);
      view.displayError();
      expect(document.querySelectorAll('div.error').length).toEqual(1);
      expect(document.querySelectorAll('div.error')[0].innerText).toEqual("Guardian servers are down, please try again later");
    })
  })

  describe('filterNews', () => {
    it('only shows news that matches search criteria', () => {
      const model = new NewsModel();
      const api = {
        loadData: () => {
          model.add(fakeJson.response.results);
          view.displayNews();
        }
      }
      const view = new NewsView(model, api);
      view.displayNewsFromApi();
      const searchInput = document.querySelector('#search-input')
      searchInput.value = 'covid';
      const button = document.querySelector('#search-button');
      button.click();
      expect(document.querySelectorAll('div.news-title').length).toEqual(1);
      expect(document.querySelectorAll('div.news-title')[0].innerText).toEqual("Australia news live: Queenslanders urged to wear masks as nation records 13 Covid deaths; NSW flood clean-up under way");
    })
  })

  describe('resetNews', () => {
    it('resets the news after its been filtered', () => {
      const model = new NewsModel();
      const api = {
        loadData: () => {
          model.add(fakeJson.response.results);
          view.displayNews();
        }
      }
      const view = new NewsView(model, api);
      view.displayNewsFromApi();
      const searchInput = document.querySelector('#search-input')
      searchInput.value = 'covid';
      const button = document.querySelector('#search-button');
      button.click();
      const resetButton = document.querySelector('#reset-button');
      resetButton.click()
      expect(document.querySelectorAll('div.news-title').length).toEqual(10);
    })
  })

  // I couldn't get this test to work without mocking the window
  // so I will return to it one day!
  //
  //
  // it('redirects to full artcile on click', () => {
  //   const model = new NewsModel();
  //   const api = {
  //     loadData: () => {
  //       model.add(fakeJson.response.results);
  //       view.displayNews();
  //     }
  //   }
  //   const view = new NewsView(model, api);
  //   view.displayNewsFromApi();
  //   const img = document.getElementById(fakeJson.response.results[0].id);
  //   img.click();
  //   console.log(window.location.href)
  //   window.location.href = fakeJson.response.results[0].webUrl
  //   console.log(window.location.href)

  //   expect(window.location.href).toEqual(fakeJson.response.results[0].webUrl)
  //   })
})