"use strict";

(function(exports) {
    function createStoryModelPresenter(storyModel) {
        return {
            webPublicationDate: storyModel.webPublicationDate(),
            webTitle: storyModel.webTitle(),
            apiUrl: storyModel.apiUrl(),
            // url: "/#/stories/" + storyModel.id()
        }
    }

    function StoryListView(storyListModel) {
        this._storyListModel = storyListModel;
    }

    StoryListView.prototype = {
        toHtml: function() {
            return storyListModelToHtml(this._storyListModel);
        }
    };

    function storyListModelToHtml(storyListModel) {
        return [`<h1>Headlines</h1>
                 <div id="stories">
                     <ul>
                         ${storyListModel.allStories().map(storyModelToHtml)}
                     </ul>
                 </div>`].join("");
    }

    function storyModelToHtml(storyModel) {
        var storyModelPresenter = createStoryModelPresenter(storyModel);
        return [`<li id="note">
                    <span class="text">
                        <a href="${ storyModelPresenter.url }">
                            ${ storyModelPresenter.webTitle }
                        </a>
                    </span>
                </li>`].join("");
    }
    exports.StoryListView = StoryListView
})(this);