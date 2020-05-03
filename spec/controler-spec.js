it('Newspaper can print news', function() {
  var newspaper = new Newspaper()
  newspaper.printNews()
  expect(newspaper.content.length).toEqual(10)
})
