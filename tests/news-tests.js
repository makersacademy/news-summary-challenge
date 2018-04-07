

function testNews() {
  var news = new News('Just for once, this is a good new');

  document.write(' N is initialized with text ', expect(news.text).toEqual('Just for once, this is a good new'));
  document.write(' N can show its text ', expect(news.show()).toEqual('Just for once, this is a good new'));
};

testNews();
