function NewsController() {

}

NewsController.prototype = {
    
    updateInnerHtml: function(anElement, text) {
      anElement.innerHTML = text
    }

}