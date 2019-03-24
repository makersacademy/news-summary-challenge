function NewsStoriesDouble() {
  this._newsStoriesArray = [{id: 0, title: "story1", body: "story1 blah blah blah"},
  {id: 1, title: "story2", body: "story2 la la laaa laa laa la"}]
};

it("shows a list of news stories", function() {
  newsStories = new NewsStoriesDouble();
  newsListView = new NewsListView(newsStories);
  var arr = [{id: 0, title: "story1", body: "story1 blah blah blah"},
  {id: 1, title: "story2", body: "story2 la la laaa laa laa la"}]
  console.log(newsListView._list)
  console.log(arr)
  assert.isEqual(newsListView._list, arr)
});

it("formats a list of news stories", function() {
  newsStories = new NewsStoriesDouble();
  newsListView = new NewsListView(newsStories);
  console.log(newsListView.format())
  console.log("<ul><li><div>story1</div></li><li><div>story2</div></li></ul>")
  assert.isEqual(newsListView.format(), "<ul><li><div>story1</div></li><li><div>story2</div></li></ul>")
});
