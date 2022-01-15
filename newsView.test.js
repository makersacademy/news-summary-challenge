/**
 * @jest-environment jsdom
 */

const newsView = require('./newsView.js')
const fs = require('fs')

describe('class NewsView', () => {
  it('addHeadline adds a headline to the main page', () => {
    const view = new newsView();
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    view.addHeadline('Boris has a party');
    expect(document.querySelectorAll('div.headline').length).toEqual(1);
  })
})