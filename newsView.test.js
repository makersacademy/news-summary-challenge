/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsView = require('./newsView')
 const NewsModel = require('./newsModel')
 
 describe ("News View", () => {
     describe ("display headlines", () => {
         it("displays headlines in the browser", () => {
             document.body.innerHTML = fs.readFileSync('./index.html');
 
             const newsModel = { 
                 getHeadlines: () => ['testing', 'testing2']
             }
 
             const newsView = new NewsView(newsModel);
 
             newsView.displayHeadlines();
 
             expect(document.querySelectorAll('div.headline').length).toBe(2);
 
         });
 
 
         it('has the right number of notes', () => {
             document.body.innerHTML = fs.readFileSync('./index.html');
 
             const model = new NewsModel();
             const view = new NewsView(model);
 
             model.addHeadline('one');
             model.addHeadline('two');
 
             view.displayHeadlines();
             view.displayHeadlines();
 
             expect(document.querySelectorAll('div.headline').length).toEqual(2);
 
         });
 
     });
 });