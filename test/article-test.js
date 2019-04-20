/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';
var Article = require('../src/article');

var { describe, it, expect } = require('./testing-framework');

describe('Article', function() {
  it('creates an article instance', function() {
    let article = new Article('a', 'b');
    expect(article).toBeInstanceof(Article);
  });

  it('responds to getText method', function() {
    let article = new Article('a', 'b');
    expect(article).toRespondTo('getText');
  });

  it('responds to getImage method', function() {
    let article = new Article('a', 'b');
    expect(article).toRespondTo('getImage');
  });

  it('returns the text value', function() {
    let article = new Article('a', 'b');
    expect(article.getText()).toEqual('a');
  });

  it('returns the image value', function() {
    let article = new Article('a', 'b');
    expect(article.getImage()).toEqual('b');
  });
});
