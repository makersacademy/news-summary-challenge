"use strict";

var spike = require("../test/lib/spike");
var assert = require("../test/lib/assert");
var stub = require("../test/lib/stub").stub;

var StoryModel = require("../js/story-model").StoryModel;

spike.describe('StoryModel', function() {
    const storyModel = new StoryModel('Breaking Story');

    spike.it('initializes StoryModel', function() {
        assert.isTrue(storyModel instanceof StoryModel);
    });
});