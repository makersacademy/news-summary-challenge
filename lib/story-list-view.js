'use strict';
(function(exports){
    function generateStoryHTML(story, id){
        if(typeof story.fields.thumbnail === "undefined"){
            story.fields.thumbnail = "http://via.placeholder.com/500x300";
        }
        return "<div><a href='#" + id + "'><div><img src='" + story.fields.thumbnail +"'></div> " + story.fields.headline + "</a></div>";
    }

    function StoryListView(storyListModel, id){
        this.html = "<div>";
        let array = storyListModel;
        console.log(array);
        this.html = this.html + generateStoryHTML(array, id);
        this.html = this.html + "</div>";
    }

    StoryListView.prototype.text = function() {
        return this.html;
    };

    exports.StoryListView = StoryListView;
})(this);