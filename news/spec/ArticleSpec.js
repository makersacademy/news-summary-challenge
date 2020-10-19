

describe('Article', function() {
  
  let article;
  var time = new Date(2020, 09, 31, 11, 00, 00, 00);

  beforeEach(function() {
     article = new Article('Breaking news!', time);
  });

  it ('returns the text from the article', function() {
    expect(article.articleText()).toEqual('Breaking news!');
  });

  it ('returns the time the article was posted', function() {
    expect(article.articleTime()).toEqual(time); 
  });
});  