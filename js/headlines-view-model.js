(function(exports) {
	function HeadlinesView(apiCall) {
		this.apiCall = apiCall;
		this.stories = apiCall.responseArray
	}

	HeadlinesView.prototype.printHeadlines = function() {
		var htmlString = "<ul>"
		this.stories.forEach(function(story) {
			htmlString += ("<li><h3>" + story.webTitle + "</h3></li>")
		})
		htmlString += "</ul>"
		return htmlString
	};

	exports.HeadlinesView = HeadlinesView;
})(this);
