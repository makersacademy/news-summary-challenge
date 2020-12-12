'use strict';

let newStory = new Story('Coronavirus vaccine rolls out across UK');

it('takes an article as a parameter', function() {
  expect(newStory.article).toEqual('Coronavirus vaccine rolls out across UK');
});

it('lets you see the article', function() {
  expect(newStory.seeArticle()).toEqual('Coronavirus vaccine rolls out across UK');
})
