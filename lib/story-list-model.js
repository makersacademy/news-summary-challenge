"use strict";
(function(exports){
    function StoryListModel(){
        this._storylist = [];
    }

    StoryListModel.prototype.add = function (storyToAdd) {
        this._storylist.push(storyToAdd);
    };

    StoryListModel.prototype.view = function() {
        return this._storylist;
    };

    exports.StoryListModel = StoryListModel;
})(this);
