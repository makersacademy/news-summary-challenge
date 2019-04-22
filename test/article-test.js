/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';
var Article = require('../src/article');

var { describe, it, expect } = require('../services/testing-framework');

let article = new Article('a', 'b');

describe('Article', function() {
  it('creates an article instance', function() {
    expect(article).toBeInstanceof(Article);
  });

  it('responds to getText method', function() {
    expect(article).toRespondTo('getText');
  });

  it('responds to getImage method', function() {
    expect(article).toRespondTo('getImage');
  });

  it('returns the text value', function() {
    expect(article.getText()).toEqual('a');
  });

  it('returns the image value', function() {
    expect(article.getImage()).toEqual('b');
  });

  it('has an id', function() {
    expect(article.getId()).toEqual('1');
  });
});
