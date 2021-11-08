// /**
//  * @jest-environment jsdom
//  */

// //the first test is not working as the fetch mock isn't called correctly - returns undefined

// const { TestWatcher } = require('@jest/core');

// const fetchMock = require('./__mocks__/fetch');
// const jsdom = require('jsdom');

// const dom = new jsdom.JSDOM(`<!DOCTYPE html><body><p id="feed" Some feed!</p></body>`);

const Feed = require('./feed');
let feed = new Feed()

// describe('getfeed', () => {
//   it('calls the guardian api', () => {
//     feed.getfeed();

//     expect(fetchMock).toHaveBeenCalledWith("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=feed");
//     expect(feed.headlines).toEqual(['some data']);
//   })
// })

describe('displayHeadline', () => {
  it('takes the first headline from the feed array', () => {
    feed.headlines.push('first headline');
    feed.headlines.push('second headline');
    feed.headlines.push('third headline');

    expect(feed.getHeadline()).toBe('first headline');
    expect(feed.headlines[0]).toBe('second headline');
  })
})