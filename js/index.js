document.addEventListener("DOMContentLoaded", function(event) {
    var element = document.getElementById('app');
		var apiCall = new ApiCall("https://content.guardianapis.com/search?show-fields=body,thumbnail&api-key=test")
		apiCall.getContent();
    var headlinesView = new HeadlinesView(apiCall);
		var headlineController = new HeadlineController(element, headlinesView);
		console.log(headlinesView.stories)
		headlineController.updateHTML();
});
