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
    model.addHeadline({"headline": 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg"})
    view.displayHeadlines();
    expect(document.querySelectorAll('div.headline').length).toEqual(1);
  })
  it('displayHeadlines shows a picture for each headline on the main page', () => {
    model = new NewsModel();
    const view = new newsView(model);
    document.body.innerHTML = fs.readFileSync('./index.html');
    model.addHeadline({"headline" : 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg" })
    view.displayHeadlines();
    expect(document.querySelectorAll('img.headlineImage').length).toEqual(1);
  })
})