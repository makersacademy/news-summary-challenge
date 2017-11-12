"use strict";

let spike = require("../test/lib/spike");
let assert = require("../test/lib/assert");
let stub = require("../test/lib/stub").stub;

let StoryListModel = require("../js/story-list-model").StoryListModel;

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
            let StoryModelMock = stub({});
            let storyListModel = new StoryListModel(StoryModelMock);
            storyListModel.addStory("Breaking News");
            assert.isTrue(storyListModel.allStories().length === 1);
        });
    });

});