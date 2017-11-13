(function(exports){
    function StoryController(appElement) {
        this._appElement = appElement
    }

    StoryController.prototype = {
        _renderHtml: function(html) {
            this._appElement.innerHTML = html;
        },
    }


    exports.StoryController = StoryController;
})(this);