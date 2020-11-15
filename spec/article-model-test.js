let article = new Article('Corona Vaccine Created', 'sport/live/2020/nov/15/the-masters-2020-dustin-johnson-leads-final-round-at-augusta-live', 'corona.img', 1)
// did not throw error when new Article was not passed an argument

it('can be instantiated', function(){
  expect(article).toBeAnInstanceOf(Article)
})

it('can return the title', function(){
  expect(article.returnTitle()).toEqual('Corona Vaccine Created')
})

it('has an id', function(){
  expect(article.id).toEqual(1)
})

it('can return the article url id', function(){
  expect(article.returnUrlId()).toEqual('sport/live/2020/nov/15/the-masters-2020-dustin-johnson-leads-final-round-at-augusta-live')
})

it('can return the article thumbnail', function(){
  expect(article.returnThumbnail()).toEqual('corona.img')
})