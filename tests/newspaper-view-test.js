(function() {
  function testNewspaperViewIsAConstructor() {
    let newspaperView = new NewspaperView();

    assert.isTrue(newspaperView instanceof NewspaperView);
  }
  testNewspaperViewIsAConstructor();
})();