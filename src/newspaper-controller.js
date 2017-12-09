(function (exports) {
  function NewspaperController (newspaperView = NewspaperView) {
    this.newspaperView = new newspaperView()
  }

  exports.NewspaperController = NewspaperController

})(this)
