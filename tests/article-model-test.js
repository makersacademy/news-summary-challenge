function testCanBeInstantiated() {
  var article = new Article();
  assert.isTrue("Article can be instantiated", article instanceof Article);
}

testCanBeInstantiated();
