"use strict";

let spike = require("../test/lib/spike");
let assert = require("../test/lib/assert");
let stub = require("../test/lib/stub").stub;

let StoryListView = require("../js/story-list-view").StoryListView;

spike.describe('StoryListView', function() {
    spike.it('it should show a heading for a story', function() {
        let storyListModelMock = {
            allStories: stub([{
                webPublicationDate: stub('2017-10-27T07:26:19Z'),
                webTitle: stub('Politics Live - readers\' edition: Friday 27 October'),
                apiUrl: stub('https://content.guardianapis.com/politics/blog/live/2017/oct/27/politics-live-readers-edition-friday-27-october')
            }])
        };

        assert.isTrue(new StoryListView(storyListModelMock).toHtml().match(/Politics Live - readers' edition: Friday 27 October/));
    })
});