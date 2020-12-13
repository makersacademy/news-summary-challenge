'use strict';

let aStory = new Story('Coronavirus vaccine rolls out across UK',
                      'fakeurl',
                      'fakethumbnailurl',
                      'Some words');

it('returns a headline', function() {
  expect(aStory.headline).toEqual('Coronavirus vaccine rolls out across UK');
});

it('returns a url', function() {
  expect(aStory.url).toEqual('fakeurl');
});

it('returns a thumbnail', function(){
  expect(aStory.thumbnail).toEqual('fakethumbnailurl');
});

it('returns a standfirst', function(){
  expect(aStory.standfirst).toEqual('Some words');
})

it('displays the headline, url, byline and thumbnail nicely in html', function(){
  expect(aStory.displayStoryList()).toEqual(`<h2><a href="fakeurl">Coronavirus vaccine rolls out across UK</a></h2><a href="fakeurl"><img src="fakethumbnailurl"></a><p>Some words</p></br>`)
})
