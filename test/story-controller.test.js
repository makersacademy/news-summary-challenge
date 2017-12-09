"use strict";

let spike = require("../test/lib/spike");
let assert = require("../test/lib/assert");
let stub = require("../test/lib/stub").stub;

let StoryController = require("../js/story-controller").StoryController;

spike.describe('StoryController', function() {
    function StoryListModelDouble() {
    };

    StoryListModelDouble.prototype = {
        getStories: function () {
            return ['Test note']
        },
        addStory: function () {
        },
    };

    function StoryModelDouble(text) {
        this._text = text;
    };

    StoryModelDouble.prototype = {};

    const storyController = new StoryController(new StoryListModelDouble());

    spike.it('can be instantiated', function () {
        assert.isTrue(storyController instanceof StoryController);
    });

});