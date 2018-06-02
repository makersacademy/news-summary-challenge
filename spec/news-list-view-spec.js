function newsListViewTests(){

  var list = new NewsList()
  list.add("list view testing headlines", "imgURL", "SUMMARY", "BODYTEXT")

  var listView = new NewsListView(list)

  assert.isTrue(
    "News List View: display news list HTML",
    listView.html() === "<ul><div><img src='imgURL' width='50%'></img></div><a href='#0'>list view testing headlines</a><div>SUMMARY</div></ul>"
  )
};

newsListViewTests()
