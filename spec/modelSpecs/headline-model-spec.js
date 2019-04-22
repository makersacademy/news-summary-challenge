(function() {

  (function() {
    var description = "A Headline object has a headline"

    var headline = new Headline({
      headline: "This is a headline.",
      url: ""
    })
    assert.isTrue(
      headline.getHeadline() === "This is a headline.",
      description
    )
  })();

  (function() {
    var description = "A Headline object has a url"

    var headline = new Headline({
      headline:  "",
      url: "Ceci n'est pas un url."
    })
    assert.isTrue(
      headline.getURL() === "Ceci n'est pas un url.",
      description
    )
  })()

})()
