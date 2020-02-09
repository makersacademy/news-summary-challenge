'use strict';

(function testStoryShowsTitle() {
  var story = new Story()
  story.addTitle('My favourite language is JavaScript')

  assert.isTrue(story.showTitle() === 'My favourite language is JavaScript');
})();
