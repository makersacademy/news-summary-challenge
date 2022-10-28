/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsView = require('./newsView');
 const NewsModel = require('./newsModel');
 const { doesNotMatch } = require('assert');


describe('NewsView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  xit('displays one headlines', () => {
    const model = new NewsModel();
    const view = new NewsView(model);

    const input = document.querySelector('#note-input');
    input.value = 'Hey!';

    const buttonEl = document.querySelector('#add-note');
    buttonEl.click();
    // view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
      'Hey!'
    );
  });
});