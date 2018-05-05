(function testHeadline(){
  (function hasText() {
    // arrange
    var headline = new Headline();
    // act

    //assert
    expect(headline.text).toEqual("headline text");
  })

})();
