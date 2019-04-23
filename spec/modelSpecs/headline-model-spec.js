(function() {

  (function() {
    var description = "A Headline object has a headline"

    var headline = new Headline({
      headline: "This is a headline.",
      url: "",
      thumbnail: ""
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
      url: "Ceci n'est pas un url.",
      thumbnail: ""
    })
    assert.isTrue(
      headline.getURL() === "Ceci n'est pas un url.",
      description
    )
  })();

  (function() {
    var description = "A Headline object has a thumbnail"

    var headline = new Headline({
      headline:  "",
      url: "",
      thumbnail: "Thumbnail url"
    })
    assert.isTrue(
      headline.getThumbnail() === "Thumbnail url",
      description
    )
  })();

  (function() {
    var description = "A Headline object has an id"

    var headline = new Headline({
      headline:  "",
      url: "",
      thumbnail: "Thumbnail url",
      id: "headline id"
    })
    assert.isTrue(
      headline.getID() === "headline id",
      description
    )
  })()
})()
