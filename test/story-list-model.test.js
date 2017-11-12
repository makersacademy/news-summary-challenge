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

    spike.describe('#allStories', function() {
        spike.it("should have no stories when instantiated", function() {
            assert.isEmpty(new StoryListModel().allStories());
        });
    });

    spike.describe('#addStory', function() {
        spike.it("should return some stories after creating them", function() {
            var StoryModelMock = stub({});
            var storyListModel = new StoryListModel(StoryModelMock);
            storyListModel.addStory("Breaking News");
            assert.isTrue(storyListModel.allStories().length === 1);
        });
    });
});