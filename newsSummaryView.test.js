/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsSummary = require('./newsSummaryView.js');

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  const fakeApi = { getHeadlines: (searchField, callback) => callback([{webTitle: "Your news today"}])};
  newsView = new NewsSummary(fakeApi);
})

describe('News summary', () => {
  it('displays the news headlines', () => {

    newsView.displayNews();

    expect(document.querySelectorAll('div.headline').length).toEqual(1);
    expect(document.querySelectorAll('div.headline')[0].innerText).toEqual('Your news today');
  });
});