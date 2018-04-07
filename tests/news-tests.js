

function testNews() {
  var news = new News('Good news');

  document.write(' N is initialized with text ', expect(news.text).toEqual('Good news'));
  document.write(' N can show its text ', expect(news.show()).toEqual('Good news'));
};

testNews();
