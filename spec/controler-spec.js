var newspaper = new Newspaper()

it('Newspaper can print news', function() {
  newspaper.printNews()
  expect(newspaper.content.length).toEqual(10)
})

it('Newspaper can create articles', function() {
  newspaper.printNews()
  expect(newspaper.articles[0].headline).toEqual('Talking Horses: Al Boum Photo headlines Gold Cup confirmations')
})
