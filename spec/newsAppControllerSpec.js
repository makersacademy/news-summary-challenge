function NewsListViewDouble() {
  this._list = [{id: 0, title: "story1", body: "story1 blah blah blah"},
  {id: 1, title: "story2", body: "story2 la la laaa laa laa la"}];
};

NewsListViewDouble.prototype.format = function() {
  return "<ul><li><div>story1</div></li><li><div>story2</div></li></ul>";
};

it("can instantiate and saves list and formatted list as instance vars", function() {
  newsListViewDouble = new NewsListViewDouble()
  newsAppController = new NewsAppController(newsListViewDouble)
  var arr = [{id: 0, title: "story1", body: "story1 blah blah blah"},
  {id: 1, title: "story2", body: "story2 la la laaa laa laa la"}]
  var formattedList = "<ul><li><div>story1</div></li><li><div>story2</div></li></ul>"
  // console.log(newsAppController._list);
  // console.log(arr);
  // console.log(newsAppController._formattedList);
  // console.log(formattedList);
  // assert.isEqual(newsAppController._list, arr);
  assert.isEqual(newsAppController._formattedList, formattedList);
});

it("inserts formatted news list into app element in html file", function() {
  newsListViewDouble = new NewsListViewDouble()
  newsAppController = new NewsAppController(newsListViewDouble)
  newsAppController.insertIntoApp();
  var formattedList = "<ul><li><div>story1</div></li><li><div>story2</div></li></ul>"
  assert.isEqual(document.getElementById("app").innerHTML, formattedList);
});
