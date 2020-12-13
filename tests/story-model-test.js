'use strict';

let aStory = new Story('Coronavirus vaccine rolls out across UK',
                      'fakeurl',
                      'fakethumbnailurl');

it('returns a headline', function() {
  expect(aStory.headline).toEqual('Coronavirus vaccine rolls out across UK');
});

it('returns a url', function() {
  expect(aStory.url).toEqual('fakeurl');
})

it('returns a thumbnail', function(){
  expect(aStory.thumbnail).toEqual('fakethumbnailurl');
})

it('displays the headline, url and thumbnail nicely in html', function(){
  expect(aStory.displayStory()).toEqual(`<br><h4><a href="fakeurl">Coronavirus vaccine rolls out across UK</a></h4><a href="fakeurl"><img src="fakethumbnailurl"></a></br>`)
})
