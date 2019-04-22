(function(){

  (function() {
    var description = "wrapHTML() wraps a string in an html element"

    assert.isTrue(
      wrapHTML({
        content: "This is the news",
        element: "element"
      }) === "<element>This is the news</element>",
      description
    )
  })();

  (function() {
    var description = "wrapHTML() takes an optional href tag (only for use with links obvs)"

    assert.isTrue(
      wrapHTML({
        content: "This is the news",
        element: "a",
        href: "google.com"
      }) === '<a href="google.com">This is the news</a>',
      description
    )
  })();

  (function() {
    var description = "wrapHTML() takes an optional id tag"

    assert.isTrue(
      wrapHTML({
        content: "This is the news",
        element: "element",
        id: "news"
      }) === '<element id="news">This is the news</element>',
      description
    )
  })();

  (function() {
    var description = "wrapHTML() takes an optional array of classes"

    assert.isTrue(
      wrapHTML({
        content: "This is the news",
        element: "element",
        classes: ["one", "two", "three"]
      }) === '<element class="one two three">This is the news</element>',
      description
    )
  })();

  (function() {
    var description = "wrapHTML() can accept all three attributes together"

    assert.isTrue(
      wrapHTML({
        content: "This is the news",
        element: "element",
        id: "news",
        classes: ["one", "two", "three"],
        href: "google.com"
      }) === '<element href="google.com" id="news" class="one two three">This is the news</element>',
      description
    )
  })()
})()
