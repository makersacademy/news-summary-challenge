describe("API Call", function() {
	var apiCall = new ApiCall("http://content.guardianapis.com/search?api-key=test");

	it("creates an XMLHttpRequestObject", function() {
		assert.truthy(apiCall.xml.constructor === XMLHttpRequest)
	})

	it("can get an api response", function() {
		apiCall.getContent();
		assert.truthy(apiCall.xml.constructor.response !== "")
	})
});
