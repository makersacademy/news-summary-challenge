/**
 * @jest-environment jsdom
 */

const newsView = require('./newsView.js')
const fs = require('fs')
const NewsModel = require('./newsModel.js')

describe('class NewsView', () => {
  it('displayHeadline adds the headline on index.html', () => {
    model = new NewsModel();
    const view = new newsView(model);
    document.body.innerHTML = fs.readFileSync('./index.html');
    model.addNewsInfo({"headline": 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg"})
    view.displayHeadline({"headline" : 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg" });
    expect(document.querySelectorAll('div.headline').length).toEqual(1);
  })
  it('displayImage adds a picture for the headline', () => {
    model = new NewsModel();
    const view = new newsView(model);
    document.body.innerHTML = fs.readFileSync('./index.html');
    model.addNewsInfo({"headline" : 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg" })
    view.displayImage({"headline" : 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg" });
    expect(document.querySelectorAll('img.headlineImage').length).toEqual(1);
  })
  it('displayViewArticleButton adds a view article button for the headline', () => {
    model = new NewsModel();
    const view = new newsView(model);
    document.body.innerHTML = fs.readFileSync('./index.html');
    model.addNewsInfo({"headline" : 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg" })
    view.displayViewArticleButton();
    expect(document.querySelectorAll('button').length).toEqual(1);
  })
  it('displayArticle adds the article below the headline', () => {
    model = new NewsModel();
    const view = new newsView(model);
    document.body.innerHTML = fs.readFileSync('./index.html');
    model.addNewsInfo({"headline" : 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg", "body" : "He went to a party during lockdown" })
    view.displayArticle({"headline" : 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg", "body" : "He went to a party during lockdown" })
    expect(document.querySelectorAll('p')[0].innerHTML).toEqual("He went to a party during lockdown");
  })
  it('Headline is clickable to take me to the full article', () => {
    model = new NewsModel();
    const view = new newsView(model);
    document.body.innerHTML = fs.readFileSync('./index.html');
    model.addNewsInfo({"headline" : 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg", "body" : "He went to a party during lockdown", "link" : "https://www.theguardian.com/politics/2022/jan/16/johnson-must-heed-the-writing-on-the-wall" })
    // click on link somehow
    view.displayHeadline({"headline" : 'Boris has a party', "thumbnail" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg", "body" : "He went to a party during lockdown", "link" : "https://www.theguardian.com/politics/2022/jan/16/johnson-must-heed-the-writing-on-the-wall" })
    expect(document.querySelectorAll('a').length).toEqual(1)
  })
})