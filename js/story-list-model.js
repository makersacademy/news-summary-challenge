"use strict";

(function(exports) {
    function StoryListModel() {
        this._storyModels = [];
    }

    StoryListModel.prototype = {
        all: function() {
            return this._storyModels;
        }
    }

    exports.StoryListModel = StoryListModel
})(this);