describe("NewsStory", function() {
  it("creates a new instance of NewsStory", function() {
    newsStory = new NewsStory
    expect(newsStory).toBeInstanceOf(NewsStory)
  })
})

describe("#getHeadline", function() {
  it("gets the headline of a NewsStory", function() {
    newsStory = new NewsStory("Headline", 1)
    expect(newsStory.getHeadline()).toEqual("Headline")
  })
})

describe("#getId", function() {
  it("gets the Id of a NewsStory", function() {
    newsStory = new NewsStory("Headline", 1)
    expect(newsStory.getId()).toEqual(1)
  })
})
