
function testNewsListView() {
  var newslist = new NewsList();
  var news1 = new News('I am the 1st new');
  var news2 = new News('I am the 2nd new');

  newslist.adds(news1);
  newslist.adds(news2);

  var newslistview = new NewsListView(newslist);

  document.write(' NLV is initialized wih an NL ', expect(newslistview.core).toBe(NewsList));

  document.write(' NLV can show the NL ', expect(newslistview.show()).toEqual('<ul><li><div>I am the 1st new</div></li><li><div>I am the 2nd new</div></li></ul>'));
};

testNewsListView();
