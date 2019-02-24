(function(exports) {

    function SingleStoryView(story) {
    }

    SingleStoryView.prototype.makeView = function(story) {
        elements = ['<div class="storyDiv"><img class="focus" alt="Image for story" src="']
        elements.push(story.imgLoc)
        elements.push('"/img><h1>')
        elements.push(story.headline)
        elements.push('</h1><h3>')
        elements.push(story.summary)
        elements.push('</h3><br/><p>')
        elements.push(story.text)
        elements.push('</p></div>')
        return elements.join('')
    }

    exports.SingleStoryView = SingleStoryView

})(this)
