/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsApi = require('../models/newsApi');
const NewsModel = require('../models/newsModel');
const NewsView = require('../views/newsView');

require('jest-fetch-mock').enableMocks();

describe('News view', () => {
  let view;
  let model;
  let api;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NewsModel();
    api = new NewsApi();
    view = new NewsView(model, api);
  });

  it('displays two headlines', () => {
    model.addNews([
      {
        webTitle:
          'Scottish Greens walk out of Holyrood debate on Queen’s jubilee',
        webUrl:
          'https://www.theguardian.com/politics/2022/jun/02/scottish-greens-walk-out-of-holyrood-debate-on-queens-jubilee',
        fields: {
          thumbnail:
            'https://media.guim.co.uk/75e7224ddfe85dbb25415fd469b55b3b8b066ee7/0_0_5000_3000/500.jpg',
        },
      },
      {
        webTitle:
          'Scottish Greens walk out of Holyrood debate on Queen’s jubilee',
        webUrl:
          'https://www.theguardian.com/politics/2022/jun/02/scottish-greens-walk-out-of-holyrood-debate-on-queens-jubilee',
        fields: {
          thumbnail:
            'https://media.guim.co.uk/75e7224ddfe85dbb25415fd469b55b3b8b066ee7/0_0_5000_3000/500.jpg',
        },
      },
    ]);

    view.displayNews();

    expect(document.querySelectorAll('.headline').length).toEqual(2);
  });

  it('can click', () => {
    const mockLoadNews = jest.fn();
    api.loadNews = mockLoadNews;
    view.searchInputEl.value = 'check';

    view.searchButtonEl.click();

    expect(mockLoadNews.mock.calls.length).toEqual(1);
    expect(mockLoadNews.mock.calls[0][0]).toEqual('check');
  });
});
