describe('Headlines view', function() {

	var headlinesView = new HeadlinesView(new MockApiCall());

	it('is initialized with an array of stories', function() {
		assert.truthy(headlinesView.stories.constructor === Array) && assert.truthy(headlinesView.stories.length === 2)
	})

	it('prints the story headlines', function() {
		assert.truthy(headlinesView.printHeadlines().includes("<h3>Dina Asher-Smith ready to graduate to higher level after London 														success</h3>"))
	})
});
