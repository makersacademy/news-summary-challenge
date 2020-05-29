
var article = new Article('Test Headline')

describe(".headline", function(){
  it("should have a headline", function(){
    expect(article.headline).toEqual('Test Headline')
  });
});