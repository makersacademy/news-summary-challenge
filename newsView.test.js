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
                        "fields": {thumbnail: 'https://media.guim.co.uk/cbd0793b222d4cb26683418cfac4e1d3a9c59bfa/0_389_5867_3522/500.jpg'}
                    },
                    {
                        "webTitle": "No winners in the Tory leadership debate | Brief letters",
                        "webUrl": "https://www.theguardian.com/politics/2022/jul/26/no-winners-in-the-tory-leadership-debate",
                        "fields": {thumbnail: 'https://media.guim.co.uk/cbd0793b222d4cb26683418cfac4e1d3a9c59bfa/0_389_5867_3522/500.jpg'}
                    },
                    {
                        "webTitle": "Sunak interruptions ignite debate over mansplaining in politics ",
                        "webUrl": "https://www.theguardian.com/politics/2022/jul/26/sunaks-interruptions-ignite-debate-over-mansplaining-in-politics",
                        "fields": {thumbnail: 'https://media.guim.co.uk/cbd0793b222d4cb26683418cfac4e1d3a9c59bfa/0_389_5867_3522/500.jpg'}
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
  });

  it('calls articles from API based on search query and displays them', () => {
    const clientMock = {
      searchArticles: (callback => {
        callback (
          {
            "response": {
                "results": [
                    {
                        "webTitle": "CDC coding error led to overcount of 72,000 Covid deaths",
                        "webUrl": "https://www.theguardian.com/world/2022/mar/24/cdc-coding-error-overcount-covid-deaths",
                        "fields": {thumbnail: 'https://media.guim.co.uk/e1a9939deec6f0012d21b477817a3ae0b97d2d93/0_314_5472_3283/500.jpg'}
                    },
                    {
                        "webTitle": "Climate groups say a change in coding can reduce bitcoin energy consumption by 99%",
                        "webUrl": "https://www.theguardian.com/technology/2022/mar/29/bitcoin-reduce-energy-consumption-climate-groups",
                        "fields": {thumbnail: 'https://media.guim.co.uk/e9c20a7f60c0b77aee57097e8c79d3294fd907e1/0_249_7360_4414/500.jpg'}
                    }
                ]
            }
          }
        )
      })
    }

    const view = new NewsView(model, clientMock);
    view.displayArticlesFromApiSearch();
    expect(document.querySelectorAll('div.article').length).toEqual(2);
  });

});




