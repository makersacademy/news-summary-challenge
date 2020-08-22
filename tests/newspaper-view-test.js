(function() {
  function testNewspaperViewIsAConstructor() {
    let newspaperView = new NewspaperView();

    assert.isTrue(newspaperView instanceof NewspaperView);
  }
  function testNewspaperViewInstancesHaveANewspaperProperty() {
    let newspaperDouble = {};
    let newspaperView = new NewspaperView(newspaperDouble);

    assert.isTrue(newspaperView.newspaper === newspaperDouble);
  }

  testNewspaperViewIsAConstructor();
  testNewspaperViewInstancesHaveANewspaperProperty();
})();