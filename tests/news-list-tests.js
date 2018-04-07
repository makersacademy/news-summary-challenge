
function testNewsList() {
  var newslist = new NewsList();
  var news1 = new News('I am the 1st new');
  var news2 = new News('I am the 2nd new');

  document.write(' NL is initialized wih an empty array ', expect(newslist.content).toBeEmpty());

  newslist.adds(news1);

  document.write(' NL can add notes to its array ', expect(newslist.content).toNotToBeEmpty());

  newslist.adds(news2);

  document.write(' NL can show all the notes on its array ', expect(newslist.show()[1]).toEqual(news2));
};

testNewsList();
