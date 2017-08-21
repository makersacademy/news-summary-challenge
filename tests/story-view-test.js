describe('Story view', function() {

	var apiCall = new MockApiCall()
	var storyView = new StoryView(apiCall.responseArray[0])

	it('prints the title of a story', function() {
		assert.truthy(storyView.printTitle() === ("<h2>Bricking it: Bake Off judges reject Guardian reporter's rock-hard brownies</h2>"))
	})

	it('prints the body of a story', function() {
		assert.truthy(storyView.printStory().includes("Presenters Sue Perkins and Mel Giedroyc cut ties with the show, as did Hollywoodâ€™s co-judge and national treasure, Mary Berry, who is returning to her role as a judge on a new BBC cooking programme. In their place, Channel 4 has brought on Prue Leith as a judge and Noel Fielding and Sandi Toksvig as presenters."))
	})

});
