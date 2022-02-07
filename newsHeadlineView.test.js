/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsHeadlineView = require('./newsHeadlineView')


describe('newsHeadlineView', () => {
  it('displays more than 1 news headline ', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new NewsHeadlineView() 
    
    expect(document.querySelectorAll('p').length).toBeGreaterThanOrEqual(1)
    
  })
})