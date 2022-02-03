/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const newsView = require('./newsView')
 const newsModel = require('./newsModel')
  
describe ("News View", () => {
  it("displays headlines in the browser", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const NewsModel = { 
      getNews: () => ['testing', 'testing2']
    }
    const view = new newsView(NewsModel);
  
    view.displayNews();
  
    expect(document.querySelectorAll('div.headline').length).toBe(2);
  });
});