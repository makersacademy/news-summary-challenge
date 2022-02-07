/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const HeadlineView = require('../headlineView');
class HeadlineModel {
  getStories() {
    return [
      { "headline":"Frogs Rain!", "thumbnail":"frogsImg", "url":"frog" },
      { "headline":"Pigs Fly!", "thumbnail":"pigsImg", "url":"pig" }
    ]
  }
}
class Api {
  loadStories = jest.fn();
}

describe('Page view', () => {
  describe('#displayStroies', () => {
    it('displays the headlines', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new HeadlineModel();
      const view = new HeadlineView(model);

      view.displayStories();

      const headlines = document.querySelectorAll('.headline');

      expect(headlines.length).toEqual(2);
      expect(headlines[0].title).toEqual("Frogs Rain!");
      expect(headlines[1].title).toEqual("Pigs Fly!");
    });

    it('displays corresponding images', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new HeadlineModel();
      const view = new HeadlineView(model);

      view.displayStories();

      const thumbnails = document.querySelectorAll('.thumbnail');

      expect(thumbnails.length).toEqual(2);
      expect(thumbnails[0].src).toEqual("http://localhost/frogsImg");
      expect(thumbnails[1].src).toEqual("http://localhost/pigsImg");
    });

    it('provide links to the story origin', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new HeadlineModel();
      const view = new HeadlineView(model);

      view.displayStories();

      const urls = document.querySelectorAll('.headline');

      expect(urls.length).toEqual(2);
      expect(urls[0].href).toEqual("http://localhost/frog");
      expect(urls[1].href).toEqual("http://localhost/pig");
    });
  });

  it('searches on a button click', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new HeadlineModel();
    const api = new Api;
    const view = new HeadlineView(model, api);
    
    const inputEl = document.querySelector('#search-input');
    const buttonEl = document.querySelector('#search-button');

    inputEl.value = 'Banana';
    
    buttonEl.click();
    
    expect(view.api.loadStories).toHaveBeenCalled();
  });

  it('resets page to latest stories on a button click', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new HeadlineModel();
    const api = new Api;
    const view = new HeadlineView(model, api);
    
    const resetbuttonEl = document.querySelector('#reset-button');
    
    resetbuttonEl.click();
    
    expect(view.api.loadStories).toHaveBeenCalled();
  });
});
