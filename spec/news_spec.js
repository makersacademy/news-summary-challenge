describe("News", function(){
  var news = new News()
  it("has a list",function(){
    return expect(news.list).toExist()
  })
})
