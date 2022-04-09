/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsSummary = require('./newsSummaryView.js');

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  newsView = new NewsSummary();
})

describe('News summary', () => {
  it('displays the news headlines', () => {
    newsView.displayNews();

    expect(document.querySelectorAll('div.headline').length).toEqual(3);
  });
});