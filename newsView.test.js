/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NewsModel = require('./newsModel');
 const NewsView = require('./newsView'); 

 describe('News view', () => {
  it('displays news headlines', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    
    const model = new NewsModel();
    const view = new NewsView(model);
    model.addNews('headline one');
    model.addNews('Another headline');
    
    
    view.displayNews();

    
    expect(document.querySelectorAll('div.news').length).toEqual(2);
  });
});