(function() {
	describe('article model');
	
	function canBeInstantiated() {
		console.log("canBeInstantiated:");
		var article = new Article("Headline", "URL.com");
		assert.isTrue(article !== undefined);
	}
    canBeInstantiated();
    
    function returnsHeadline() {
		console.log("returnsHeadline:");
		var article = new Article("Headline");
		assert.isTrue(article.getHeadline() === "Headline");
	}
    returnsHeadline();
})();