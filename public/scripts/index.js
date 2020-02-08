'use strict';

window.addEventListener('load', function() {
	// Creates new controller when webpage is opened
	window.newsController = new NewsController(new NewsModel(), new NewsView());
});

