(function() {
	describe('article model');
    
    console.log("canBeInstantiated:");
	function canBeInstantiated() {
		var article = new Article("Headline");
		assert.isTrue(article !== undefined);
	}
    canBeInstantiated();
    
    console.log("returnsHeadline:");
    function returnsHeadline() {
		var article = new Article("Headline");
		assert.isTrue(article.getHeadline() === "Headline");
	}
    returnsHeadline();
})();