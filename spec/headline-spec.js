(function() {

  (function() {
    var decription = "A headline object has a headline"
    var headline = new Headline({
      headline: "This is a headline."
    })
    assert.isTrue(
      headline.getHeadline() === "This is a headline.",
      decription
    )
  })()
})()
