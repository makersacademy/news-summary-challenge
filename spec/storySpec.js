'use strict';

var storyModule = require('../models/story');

describe('Story', function() {
  var story;

  beforeEach(function() {
    story = storyModule.story('title', 'desc', 'img', '2017-01-01');
  });

  describe('#title', function() {
    it('returns title', function() {
      expect(story.title()).toEqual('title');
    });
  });

  describe('#desc', function() {
    it('returns description', function() {
      expect(story.desc()).toEqual('desc');
    });
  });

  describe('#img', function() {
    it('has image', function() {
      expect(story.img()).toEqual('img');
    });
  }); 

  describe('#date', function() {
    var date;

    beforeEach(function() {
      date = new Date('2017-01-01').toString();
    });

    it('has date object', function() {
      expect(story.date().toString()).toEqual(date);
    });
  }); 
});
