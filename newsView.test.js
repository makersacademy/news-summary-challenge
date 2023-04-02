/** 
 * @jest-environment jsdom
 */

const fs = require('fs');
// const NewsClient = require('./newsClient');
// const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

require('jest-fetch-mock').enableMocks()

describe('NewsView', () => {

  it('displays data from the model class', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const object = {response: {results: [{webTitle: "The Headline", fields:{thumbnail: "image"}}]}};

    modelMock ={
      getNews() {
        return object.response.results;
      }
    }

    const newsView = new NewsView(modelMock);

    newsView.displayFrontPage();

    expect(document.querySelector('.link').innerText).toEqual("The Headline");
  })

  it('displays data from the API', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const modelMock = {
      addNews() {
        jest.fn();
      },

      getNews() {
        return object.response.results;
      }
    }

    const object = {response: {results: [{webTitle: "The Headline", fields:{thumbnail: "image"}}]}};

    const clientMock = {
      loadNews(callback) {
        callback(object);
      }
    }

    const newsView = new NewsView(modelMock, clientMock);

    newsView.displayNewsFromApi();

    expect(document.querySelector('.link').innerText).toEqual("The Headline");
  })

  it('displays data from the API based on search query', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const modelMock = {
      addNews() {
        jest.fn();
      },

      getNews() {
        return object.response.results;
      }
    }

    const object = {response: {results: [{webTitle: "The Headline", fields:{thumbnail: "image"}}]}};

    const clientMock = {
      searchQueryResults(keyWord, callback) {
        callback(object);
      }
    }

    const newsView = new NewsView(modelMock, clientMock);

    newsView.displayNewsFromSearch("keyword");

    expect(document.querySelector('.link').innerText).toEqual("The Headline");
  })

})