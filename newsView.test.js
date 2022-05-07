/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsView = require('./newsView');
 
 const mockedModel = {
   getItems: () => [
    {webUrl: 'https://www.google.co.uk/', fields: {headline: 'first headline', thumbnail: 'a real image url'}},
    {webUrl: 'https://www.google.co.uk/', fields: {headline: 'second headline', thumbnail: 'even realer image url'}}
  ],
   setItems: () => undefined,
   reset: () => undefined
 };
 
 const mockedApi = {
   getNews: () => {
    response: {
      results: [
        {webUrl: 'https://www.google.co.uk/', fields: {headline: 'first headline', thumbnail: 'a real image url'}},
        {webUrl: 'https://www.google.co.uk/', fields: {headline: 'second headline', thumbnail: 'even realer image url'}}
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
      expect(document.querySelectorAll('a').length).toBe(2);
      expect(document.querySelectorAll('a')[0].href).toBe('https://www.google.co.uk/');
      expect(document.querySelectorAll('img').length).toBe(2);

    })

    it('shows no duplicates if display is called again', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const view = new NewsView(mockedModel, mockedApi);
      view.display();
      view.display();
      expect(document.querySelectorAll('a').length).toBe(2);
      expect(document.querySelectorAll('img').length).toBe(2);
    })
  })

  describe('.fetch_then_display()', () => {
    it('loads the items taken from the api', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const view = new NewsView(mockedModel, mockedApi);
      view.fetch_then_display(() => {
        expect(document.querySelectorAll('a').length).toBe(2);
        expect(document.querySelectorAll('img').length).toBe(2);
      });
    
    })
  })

})