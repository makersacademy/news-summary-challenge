'use strict';

var storyModule = require('../models/story');

describe('Story', function() {
  var args;
  var story;

  beforeEach(function() {
    args = { 
      title: 'title', 
      description: 'desc', 
      image: 'img', 
      date: '2017-01-01', 
      link: 'link',
    };
    story = storyModule.story(args);
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
      date = new Date('2017-01-01').toDateString();
    });

    it('has date object', function() {
      expect(story.date()).toEqual(date);
    });
  }); 

  describe('#link', function() {
    it('returns link', function() {
      expect(story.link()).toEqual('link');
    });
  }); 

  describe('#preview', function() {
    describe('when text is short', function() {
      it('returns description', function() {
        expect(story.preview()).toEqual('desc');
      });
    });

    describe('when text is long', function() {
      beforeEach(function() {
        story._desc = 'a'.repeat(1000);
      });

      it('truncates text', function() {
        expect(story.preview().length).toEqual(320);
      });

      it('adds dots to end', function() {
        expect(story.preview().slice(-3)).toEqual('...');
      });
    });
  }); 
});
