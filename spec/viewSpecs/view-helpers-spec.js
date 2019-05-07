(function(){

  describe('wrapHTML()', function() {
    it('wraps a string in an HTML element', function () {
      var wrapped = wrapHTML({
        content: "the content",
        element: "element"
      })
      expect(wrapped).toBe("<element>the content</element>")
    })

    it('takes an optional id tag', function () {
      var wrapped = wrapHTML({
        content: "the content",
        element: "element",
        id: "the-id"
      })
      expect(wrapped).toBe('<element id="the-id">the content</element>')
    })

    it('takes an optional array of classes', function () {
      var wrapped = wrapHTML({
        content: "the content",
        element: "element",
        classes: ["one", "two", "three"]
      })
      expect(wrapped).toBe('<element class="one two three">the content</element>')
    })

    it('takes an optional href tag for use with links', function () {
      var wrapped = wrapHTML({
        content: "the content",
        element: "a",
        href: "google.com"
      })
      expect(wrapped).toBe('<a href="google.com">the content</a>')
    })

    it('takes an optional targetBlank tag to open links in a new tab', function () {
      var wrapped = wrapHTML({
        content: "the content",
        element: "a",
        href: "google.com",
        targetBlank: true
      })
      expect(wrapped).toBe('<a href="google.com" target="_blank">the content</a>')
    })
    
    it('can take all of the above together', function () {
      var wrapped = wrapHTML({
        content: "This is the news",
        element: "element",
        id: "news",
        classes: ["one", "two", "three"],
        href: "google.com",
        targetBlank: true
      })
      expect(wrapped).toBe('<element href="google.com" target="_blank" id="news" class="one two three">This is the news</element>')
    })
  });

})()
