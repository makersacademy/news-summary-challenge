describe('Headlines view', function() {

	var headlinesView = new HeadlinesView(new MockApiCall());

	it('is initialized with an array of stories', function() {
		assert.truthy(headlinesView.stories.constructor === Array) && assert.truthy(headlinesView.stories.length === 2)
	})

	it('prints the story headlines', function() {
		// console.log(headlinesView.stories.find(item => item.id === "tv-and-radio/2017/aug/21/bake-off-paul-hollywood-prue-leith-nadia-khomami-rock-hard-brownies"))
		assert.truthy(headlinesView.printHeadlines().includes("<h3>Bricking it: Bake Off judges reject Guardian reporter's rock-hard brownies</h3>"))
	})

});
