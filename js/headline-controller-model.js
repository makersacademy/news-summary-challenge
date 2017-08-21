(function(exports) {
	function HeadlineController(element, headlinesView) {
		this.element = element
		this.headlinesView = headlinesView
	}

	HeadlineController.prototype.updateHTML = function() {
		this.element.innerHTML = this.headlinesView.printHeadlines()
	}
	exports.HeadlineController = HeadlineController;
})(this);
