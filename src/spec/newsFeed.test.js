const newsFeed = require('../newsFeed');

describe (newsFeed, () => {
  it('creates a new array to store items', () => {
    feed = new newsFeed ();
    expect(feed.stories).toEqual([]);
  });

  describe ('.addStory', () => {
    it('add stories to the newsFeed object', () => {
      feed = new newsFeed ();
      feed.addStory({title: 'This is a new story'});
      expect(feed.stories).toEqual([{title: 'This is a new story'}]);
    });
  }) 

  describe ('.displayAll', () => {
    it('returns all of the stories that have been stored', () => {
      feed = new newsFeed ();
      feed.addStory({title: 'This is a new story'});
      feed.addStory({title: 'This is a second story'});
      expect(feed.displayAll()).toEqual([
        {title: 'This is a new story'},
        {title: 'This is a second story'}
      ]);
    });
  });

  describe ('.findStory', () => {
    it('returns a story based on its id', () => {
      feed = new newsFeed ();
      feed.addStory({title: 'This is a new story'});
      feed.addStory({title: 'This is a second story'});
      expect(feed.findStory(1)).toEqual(
        {title: 'This is a second story'}
      );
    });
  });

})
