// /**
//  * @jest-environment jsdom
//  */

// //const jsdom = require('jsdom');
// const dom = new JSDOM(`<!DOCTYPE html><body><p id="feed" Some feed!</p> <script src="fetch-polyfill.js"> </body>`);



// const fetchMock = jest
// .spyOn(global, 'fetch')
// .mockImplementation(() =>
//   Promise.resolve({ json: () => Promise.resolve(['some data']) })
// )

// module.exports = fetchMock;