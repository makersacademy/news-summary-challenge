"use strict";

var spike = require("../test/lib/spike");
var assert = require("../test/lib/assert");
var stub = require("../test/lib/stub").stub;

var StoryListModel = require("../js/story-list-model").StoryListModel;

spike.describe('StoryListModel', function() {
    const storyListModel = new StoryListModel();

    spike.it('initializes StoryListModel', function() {
        assert.isTrue(storyListModel instanceof StoryListModel);
    });

});