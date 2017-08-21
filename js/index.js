document.addEventListener("DOMContentLoaded", function(event) {
    var element = document.getElementById('app');
		var apiCall = new ApiCall("http://content.guardianapis.com/search?api-key=test")
		apiCall.getContent();
    var headlinesView = new HeadlinesView(apiCall);
		var headlineController = new HeadlineController(element, headlinesView);
		console.log(headlinesView.stories)
		headlineController.updateHTML();
});
