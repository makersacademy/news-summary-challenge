"use strict";

(function(exports) {
    function StoryModel(webPublicationDate, webTitle) {
        this._webPublicationDate = webPublicationDate;
        this._webTitle = webTitle;
    }

    StoryModel.prototype = {
        webPublicationDate: function() {
            return this._webPublicationDate;
        },
        webTitle: function() {
            return this._webTitle;
        }
    };

    exports.StoryModel = StoryModel;
})(this);