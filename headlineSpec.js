(function (exports){
  function testHeadlinetext() {
    // arrange

    // act
    var headline = new Headline("headline text");

    //assert
    expect(headline.text).toEqual("headline text");
  };
  testHeadlinetext();

})(this);
