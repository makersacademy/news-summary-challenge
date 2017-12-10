describe('storyView', function() {
  var storiesModule = require('../views/storiesView');
  var view;
  var all;
  var story;
  var stories;

  beforeEach(function() {
    story = createSpyObj('story', { toHTML: 'html' });
    all = [story, story, story];
    stories = createSpyObj('stories', { all: all });
    view = storiesModule.getStoriesView(stories);
  });

  describe('#_getStories', function() {
    it('gets all from stories object', function() {
      expect(view._getStories().toString()).toEqual(all.toString());
    });
  });

  describe('#_getViews', function() {
    it('converts stories to html and concatenates', function() {
      expect(view._getViews()).toEqual('html'.repeat(3));
    });
  });

  describe('#toHTML', function() {
    it('puts views inside div', function() {
      expect(view._getViews()).toEqual('html'.repeat(3));
      expect(view.toHTML()).toEqual('<div class="stories">htmlhtmlhtml</div>')
    });
  });
});
    
