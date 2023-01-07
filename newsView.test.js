/** 
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('../notes-app/src/notesView');
const NewsClient = require('./newsClient');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

require('jest-fetch-mock').enableMocks()

describe('NewsView', () => {

  it('will display headlines and thumbnails', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const object = {response: {results: [{webTitle: "response", fields:{thumbnail: "image"}}]}};

    mockModel ={
      getNews() {
        return object.response.results;
      }
    }

    const newsView = new NewsView(mockModel);

    newsView.displayFrontPage();

    expect(document.querySelector('div.headline').textContent).toEqual("response");

  })

  it('displays headlines and thunbnails from the API', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NewsModel();

    const object = {response: {results: [{webTitle: "response", fields:{thumbnail: "image"}}]}};

    const clientMock = {
      loadNews(callback) {
        callback(object);
      }
    }

    const newsView = new NewsView(model, clientMock);

    newsView.addNewsFromApi();

    expect(document.querySelector('div.headline').textContent).toEqual("response");
  })

})