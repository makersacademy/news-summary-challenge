function returnsHTMLstring() {
  console.log('returns a HTML string with a title and a link')
  var newslist = new newsList();
  var array = [{webTitle: 'hey', webUrl: 'oi'}]
  assert.isTrue(newslist.display(array) == '<ul><li id=0><a href=\'#oi\'>hey</a></li></ul>')
}
returnsHTMLstring();