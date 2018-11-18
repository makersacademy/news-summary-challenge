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

// describe("#getText", function() {
//   it("gets the text of a NewsStory", function() {
//     newsStory = new NewsStory("Headline", "Text", 1)
//     expect(newsStory.getText()).toEqual("Text")
//   })
// })

describe("#getId", function() {
  it("gets the Id of a NewsStory", function() {
    newsStory = new NewsStory("Headline", 1)
    expect(newsStory.getId()).toEqual(1)
  })
})
