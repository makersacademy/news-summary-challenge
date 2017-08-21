describe('Headline controller', function() {

	var element = new MockElement();
	var headlinesView = new MockHeadlinesView(new MockApiCall());
	var headlineController = new HeadlineController(element, headlinesView);

	it('updates the page html', function() {
		headlineController.updateHTML();
		assert.truthy(headlineController.element.innerHTML.includes("<h3>Bricking it: Bake Off judges reject Guardian reporter's rock-hard brownies</h3>"));
	})
});
