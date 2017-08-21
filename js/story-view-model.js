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

	exports.StoryView = StoryView
})(this);
