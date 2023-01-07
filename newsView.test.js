/** 
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsClient = require('./newsClient');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

require('jest-fetch-mock').enableMocks()

describe('NewsView', () => {

  it('will display headlines and thumbnails', () => {
    document.body.innerHTML = fs.readFileSync('../notes-app/index.html');

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

  
})