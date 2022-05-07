/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsView = require('./newsView');
 
 const mockedModel = {
   getItems: () => [
    {fields: {headline: 'first headline'}},
    {fields: {headline: 'second headline'}}
  ],
   addItem: () => undefined,
   reset: () => undefined
 };
 
 const mockedApi = {
   getNews: () => {
    response: {
      results: [
        {fields: {headline: 'first headline'}},
        {fields: {headline: 'second headline'}}
      ]
    }
  }
 };

 describe(NewsView, () => {
  describe('.display()', () => {
    it("gets the items from model and displays it as a new div.news element", () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const view = new NewsView(mockedModel, mockedApi);
      view.display();
      expect(document.querySelectorAll('div.news').length).toBe(2);

    })

    it('shows no duplicates if display is called again', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const view = new NewsView(mockedModel, mockedApi);
      view.display();
      view.display();
      expect(document.querySelectorAll('div.news').length).toBe(2);
    })
  })

  describe('.fetch_then_display()', () => {
    it('loads the items taken from the api', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const view = new NewsView(mockedModel, mockedApi);
      view.fetch_then_display(() => {
        expect(document.querySelectorAll('div.news').length).toBe(2);
      });
    
    })
  })

})