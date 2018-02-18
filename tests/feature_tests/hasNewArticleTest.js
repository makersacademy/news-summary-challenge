function hasNewArticleTest(){

  it('Has an article', function() {
    assert.hasContent('articlelist', "Israel's Netanyahu could act against Iran's 'empire");
    assert.doesntHaveContent('articlelist', "Prime Minister Benjamin Netanyahu said");
  })


}
