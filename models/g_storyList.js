(function(exports){
    function StoryList() {
        this.stories = []
    }

    StoryList.prototype.addStory = function(story) {
        this.stories.push(story)
    }

    StoryList.prototype.getStoryById = function(id) {
        var i;
        for (i=0; i < this.stories.length; i++) {
            if (this.stories[i].id == id) {
                return this.stories[i]
            }
        }
    }

    exports.StoryList = StoryList
})(this)
