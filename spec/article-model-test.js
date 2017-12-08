(function() {
  var article = new Article();

  describe('An article has an id', function() {
    return assert.arrayIncludes(Object.getOwnPropertyNames(Article.prototype), 'id');
  })
})();
