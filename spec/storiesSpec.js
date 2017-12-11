'use strict';

var storiesModule = require('../models/stories');

describe('Stories', function() {
  var stories;
  var storyProto;

  beforeEach(function() {
    storyProto = function(...args) { return args.join(',') };
    stories = new storiesModule.Stories(storyProto);
  });

  describe('#add', function() {
    beforeEach(function() {
      stories.add({ a: 1 });
    });

    it('creates a new story', function() {
      expect(stories._list[0].toString()).toEqual({ a: 1 }.toString());
    });
  });

  describe('#all', function() {
    beforeEach(function() {
      stories._list = [1, 2, 3];
    });

    it('returns all stories', function() {
      expect(stories.all().toString()).toEqual([1, 2, 3].toString());
    });
  });
});
