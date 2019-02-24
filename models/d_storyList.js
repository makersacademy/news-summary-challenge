(function(exports){
    function StoryList() {
        this.stories = []
    }

    StoryList.prototype.addStory = function(story) {
        this.stories.push(story)
    }

    exports.StoryList = StoryList
})(this)
