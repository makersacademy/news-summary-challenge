describe ('Newspaper View', function () {
  it('holds a Newspaper Model', function () {
    var newspaperView = new NewspaperView()
    expect(newspaperView.newspaper).toBeInstanceOf(NewspaperModel)
  })

})
