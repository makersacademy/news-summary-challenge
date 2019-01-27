describe('Grauniad', function() {
  it('starts with an empty array', function(){
      let news = new Grauniad()
      expect(news.results.length).toEqual(0)
  })

  it('can add headlines to the array', function(){
    let news = new Grauniad()
    news.getResults();
    expect(news.results.length).notToEqual(0)
  })
})