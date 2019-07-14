function NewsController(storyView) {
  this.storyView = storyView
}

NewsController.prototype = {
    
    updateInnerHtml: function(anElement, text) {
      anElement.innerHTML = text
    }

}