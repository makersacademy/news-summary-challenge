(function() {

  (function() {
    var description = "A Headline object has a headline"

    var headline = new Headline({
      headline: "This is a headline."
    })
    assert.isTrue(
      headline.getHeadline() === "This is a headline.",
      description
    )
  })()

})()
