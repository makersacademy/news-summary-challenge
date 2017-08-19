it("Article model: should have article content", function(){
  var content = "News of something interesting";
  var article1 = new Article(content);
  return expect(article1.text()).toEqual(content);
});
