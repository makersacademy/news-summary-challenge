"use strict";

var spike = require("../test/lib/spike");
var assert = require("../test/lib/assert");
var stub = require("../test/lib/stub").stub;

var StoryModel = require("../js/story-model").StoryModel;

spike.describe('StoryModel', function() {
    let webPublicationDate = '2017-10-27T07:26:19Z';
    let webTitle = 'Politics Live - readers\' edition: Friday 27 October';
    let apiUrl = 'https://content.guardianapis.com/politics/blog/live/2017/oct/27/politics-live-readers-edition-friday-27-october';
    const storyModel = new StoryModel(webPublicationDate, webTitle, apiUrl);

    spike.it('initializes StoryModel', function() {
        assert.isTrue(storyModel instanceof StoryModel);
    });

    spike.it("should return webPublicationDate when webPublicationDate() called", function() {
        assert.isTrue(storyModel.webPublicationDate() === webPublicationDate);
    });
});