'use strict';

it('creates an instance of the article class', function() {
  let article = new Article('test headline', 'test thumbnail', 'test summary', 'https://test.url');
  expect(article instanceof Article).toEqual(true);
});

it('shows the headline of the article', function() {
  let article = new Article('test headline', 'test thumbnail', 'test summary', 'https://test.url');
  expect(article.headline).toEqual('test headline');
});

it('shows the thumbnail of the article', function() {
  let article = new Article('test headline', 'test thumbnail', 'test summary', 'https://test.url');
  expect(article.thumbnail).toEqual('test thumbnail');
});

it('shows the summary of the article', function() {
  let article = new Article('test headline', 'test thumbnail', 'test summary', 'https://test.url');
  expect(article.summary).toEqual('test summary');
});

it('shows the url of the article', function() {
  let article = new Article('test headline', 'test thumbnail', 'test summary', 'https://test.url');
  expect(article.url).toEqual('https://test.url');
});
