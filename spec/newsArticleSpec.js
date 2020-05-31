
var article = new Article('Test Headline','Summary','image.jpg','full text goes here')

describe(".headline", function(){
  it("should have a headline", function(){
    expect(article.headline).toEqual('Test Headline')
  });
});

describe(".summary", function(){
  it("should have a summary", function(){
    expect(article.summary).toEqual('Summary')
  });
});

describe(".image", function(){
  it("should have a summary", function(){
    expect(article.image).toEqual('image.jpg')
  });
});

describe(".fullText", function(){
  it("should have a full text", function(){
    expect(article.fullText).toEqual('full text goes here')
  });
});