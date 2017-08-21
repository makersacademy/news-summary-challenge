describe('Headline controller', function() {

	var element = new MockElement();
	var headlinesView = new MockHeadlinesView(new MockApiCall());
	var headlineController = new HeadlineController(element, headlinesView);

	it('updates the page html', function() {
		headlineController.updateHTML();
		assert.truthy(headlineController.element.innerHTML.includes("<h3>Dina Asher-Smith ready to graduate to higher level after London 														success</h3>"));
	})
});
