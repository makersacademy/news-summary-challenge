/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsApi = require('../models/newsApi');
const NewsModel = require('../models/newsModel');
const NewsView = require('../views/newsView');

require('jest-fetch-mock').enableMocks();

describe('News view', () => {
  let view;
  let model;
  let api;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NewsModel();
    api = new NewsApi();
    view = new NewsView(model, api);
  });

  it('displays two headlines', () => {
    model.addNews('First headline');
    model.addNews('Second headline');

    view.displayNews();

    expect(document.querySelectorAll('div.headline').length).toEqual(2);
  });

  // it('clicks the button and adds message', () => {
  //   const input = document.querySelector('#message-input');
  //   input.value = 'Hello!';

  //   const button = document.querySelector('#add-note-button');
  //   button.click();

  //   expect(document.querySelectorAll('div.note').length).toEqual(1);
  //   expect(document.querySelectorAll('div.note')[0].innerText).toEqual(
  //     'Hello!'
  //   );
  // });

  // it('clears the list of previous notes before displaying', () => {
  //   model.addNote('First note');
  //   model.addNote('Second note');

  //   view.displayNotes();
  //   view.displayNotes();

  //   expect(document.querySelectorAll('div.note').length).toEqual(2);
  // });
});
