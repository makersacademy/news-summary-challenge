describe('ApiMethod',function(){
  var news;
  beforeEach(function(){
    news = new Guardian();
  })

  it('has a empty array',function(){
    expect(news.editorsPicks).toEqual([])
  });

});
