(function(exports) {
	function StoryView(story) {
		this.id = story.id
		this.title = story.webTitle,
		this.date = story.webPublicationDate,
		this.url = story.webUrl,
		this.body = story.fields.body
	}

	StoryView.prototype.printStory = function() {
		return this.body
	}

	StoryView.prototype.printTitle = function() {
		return "<h2>" + this.title + "</h2>"
	}

	StoryView.prototype.printId = function() {
		return this.id
	}

	exports.StoryView = StoryView
})(this);
