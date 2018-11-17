describe("NewsStory", function() {
  it("creates a new instance of NewsStory", function() {
    newsStory = new NewsStory
    expect(newsStory).toBeInstanceOf(NewsStory)
  })
})

describe("#getText", function() {
  it("gets the Text of a NewsStory", function() {
    newsStory = new NewsStory("Text", 1)
    expect(newsStory.getText()).toEqual("Text")
  })
})

describe("#getId", function() {
  it("gets the Id of a NewsStory", function() {
    newsStory = new NewsStory("Text", 1)
    expect(newsStory.getText()).toEqual(1)
  })
})
