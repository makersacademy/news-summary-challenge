(function() {
	describe('article model');
	
	function canBeInstantiated() {
		console.log("canBeInstantiated:");
		var testClass = new Article("Headline", "URL.com");
		assert.isTrue(testClass !== undefined);
	}
	canBeInstantiated();
})();