/**
 * @jest-environment jsdom
 */

const newsView = require('./newsView.js')
const fs = require('fs')
const NewsModel = require('./newsModel.js')

describe('class NewsView', () => {
  it('displayHeadlines shows all headlines on the main page', () => {
    model = new NewsModel();
    const view = new newsView(model);
    document.body.innerHTML = fs.readFileSync('./index.html');
    model.addHeadline('Boris has a party')
    view.displayHeadlines();
    expect(document.querySelectorAll('div.headline').length).toEqual(1);
  })
})