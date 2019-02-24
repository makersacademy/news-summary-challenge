(function(exports) {

    function SingleStoryView(story) {
    }

    SingleStoryView.prototype.makeView = function(story) {
        elements = ['<img class="focus" alt="Image for story" src="']
        elements.push(story.imgLoc)
        elements.push('"/img><h1>')
        elements.push(story.headline)
        elements.push('</h1><p>')
        elements.push(story.text)
        elements.push('</p>')
        return elements.join('')
    }

    exports.SingleStoryView = SingleStoryView

})(this)
