"use strict";

(function(exports) {
    function StoryListModel(storyModel) {
        this._storyModels = [];
        this._storyModel = storyModel;
    }

    StoryListModel.prototype = {
        allStories: function() {
            return this._storyModels;
        },
        addStory: function() {
            let storyModel = new this._storyModel();
            this._storyModels.push(storyModel);
            return storyModel;
        }
    };

    exports.StoryListModel = StoryListModel
})(this);