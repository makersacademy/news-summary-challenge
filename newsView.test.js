/** 
 * @jest-environment jsdom
 */

const fs = require('fs');
// const NewsClient = require('./newsClient');
// const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

require('jest-fetch-mock').enableMocks()

describe('NewsView', () => {

  // it('will display headlines and thumbnails', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');

  //   const object = {response: {results: [{webTitle: "response", fields:{thumbnail: "image"}}]}};

  //   modelMock ={
  //     getNews() {
  //       return object.response.results;
  //     }
  //   }

  //   const newsView = new NewsView(modelMock);

  //   newsView.displayFrontPage();

  //   expect(document.querySelector('div.headline').textContent).toEqual("response");
  // })

  it('will display headlines with link to article and thumbnails', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const object = {response: {results: [{webTitle: "response", fields:{thumbnail: "image"}}]}};

    modelMock ={
      getNews() {
        return object.response.results;
      }
    }

    const newsView = new NewsView(modelMock);

    newsView.displayFrontPage();

    expect(document.querySelector('.link').innerText).toEqual("response");
  })

  it('displays headlines and thunbnails from the API', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const modelMock = {
      addNews() {
        jest.fn();
      },

      getNews() {
        return object.response.results;
      }
    }

    const object = {response: {results: [{webTitle: "response", fields:{thumbnail: "image"}}]}};

    const clientMock = {
      loadNews(callback) {
        callback(object);
      }
    }

    const newsView = new NewsView(modelMock, clientMock);

    newsView.displayNewsFromApi();

    expect(document.querySelector('.link').innerText).toEqual("response");
  })

})