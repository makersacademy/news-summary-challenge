(function(exports) {
  function testNewspaperIsAConstructor() {
    var newspaper = new Newspaper();

    assert.isTrue(newspaper instanceof Newspaper);
  };
  
  testNewspaperIsAConstructor();
})(this);