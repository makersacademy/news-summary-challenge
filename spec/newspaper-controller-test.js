describe('Newspaper Controller', function () {
  it ('holds a Newspaper View', function () {
    var newspaperController = new NewspaperController()
    expect(newspaperController.newspaperView).toBeInstanceOf(NewspaperView)
  })


})
