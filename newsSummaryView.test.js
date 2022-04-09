/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsSummary = require('./newsSummaryView');

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  const fakeApi = { getHeadlines: (searchField, callback) => callback(
    [ { webTitle: 'Your news today', webUrl: 'https://examplewebsite.com' } ]
    )};

  newsView = new NewsSummary(fakeApi);
})

describe('News summary', () => {
  it('displays the news headlines', () => {

    newsView.displayNews();

    expect(document.querySelectorAll('div.headline').length).toEqual(1);
  });

  it('displays the news headlines with clickable links', () => {

    newsView.displayNews();

    expect(document.querySelectorAll('a.headline-link').length).toEqual(1);
    expect(document.querySelector('a.headline-link').href).toBe('https://examplewebsite.com/');
  });
});