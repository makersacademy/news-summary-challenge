function NewsStoriesDouble() {
  this._newsStoriesArray = [{id: 0, title: "story1", body: "story1 blah blah blah"},
  {id: 1, title: "story2", body: "story2 la la laaa laa laa la"}]
};

it("formats a list of news stories", function() {
  newsStories = new NewsStoriesDouble();
  newsListView = new NewsListView(newsStories);
  var str = "<ul><li><div><a href='#news/0'>story1</a></div></li><li><div><a href='#news/1'>story2</a></div></li></ul>"
  assert.isEqual(newsListView.format(), str)
})
