/**
 * @jest-environment jsdom
 */

const fs = require('fs');
require('jest-fetch-mock').enableMocks();
const NewsModel = require('./src/newsModel');
const NewsView = require('./src/newsView');

describe('News View', () => {
  let model;
  let view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NewsModel();
    view = new NewsView(model);
  });

  it('calls articles from API and displays them', () => {
    const clientMock = {
      loadArticles: (callback) => {
        callback(
          {
            "response": {
                "results": [
                    {
                        "webTitle": "Woman wearing suffragette-coloured scarf removed from Holyrood debate",
                        "webUrl": "https://www.theguardian.com/society/2022/nov/15/woman-wearing-suffragette-coloured-scarf-removed-from-holyrood-debate",
                    },
                    {
                        "webTitle": "No winners in the Tory leadership debate | Brief letters",
                        "webUrl": "https://www.theguardian.com/politics/2022/jul/26/no-winners-in-the-tory-leadership-debate",
                    },
                    {
                        "webTitle": "Sunak interruptions ignite debate over mansplaining in politics ",
                        "webUrl": "https://www.theguardian.com/politics/2022/jul/26/sunaks-interruptions-ignite-debate-over-mansplaining-in-politics",
                    }
                ]
            }
          }
        )
      }
    }

    const view = new NewsView(model, clientMock);
    view.displayArticlesFromApi();
    expect(document.querySelectorAll('div.article').length).toEqual(3);
  })

});




