it('should show headlines of the first five pieces of news', function(){
  var firstItem = 'Ukip members oust Henry Bolton as leader after only five months'
  var lastItem = 'Ukip leader Henry Bolton arrives at crucial party meeting';
  var shouldNotHave = 'Revealed:  rightwing groups plot to ditch EU safety standards on food and drugs'
  assert.hasContent('newsFeed', firstItem )
  assert.hasContent('newsFeed', lastItem )
  assert.doesntHaveContent('newsFeed', shouldNotHave)
})
