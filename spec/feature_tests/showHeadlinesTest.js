it('should show five pieces of news', function(){
  var first_item = 'Ukip members oust Henry Bolton as leader after only five months'
  assert.hasContent('newsFeed', first_item )
})
