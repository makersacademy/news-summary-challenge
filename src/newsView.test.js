/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsView = require('./newsView');

describe('NewsView', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  const api = { loadArticles: () => console.log('NEWS DOUBLE') };

  const model = {
    getHeadlines: () => {
      return [
        {
          webTitle: "Everton win Champions League",
          fields: { thumbnail: "src1" },
          webUrl: "https://www.evertonwinchampionsleague.com"
        },
        {
          webTitle: "And another!",
          fields: { thumbnail: "src2" },
          webUrl: "https://www.evertonwinanotherchampionsleague.com"
        },
      ];
    },
  }

  const view = new NewsView(model, api);

  it('loads headlines to the home page', () => {
    view.createHeadlines();
    expect(document.querySelectorAll('.headline').length).toEqual(2);
    expect(document.querySelectorAll('.headline')[0].innerText).toEqual('Everton win Champions League');
  });

  it('loads an image for each article', () => {
    expect(document.querySelectorAll('.image').length).toEqual(2);
    expect(document.querySelectorAll('.image')[1].src).toEqual('http://localhost/src2');
  });

});