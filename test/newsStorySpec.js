describe("tobeInstanceof tester", function() {
  it("returns true when arg1 is instance of arg2", function() {
    newsStory = new NewsStory
    expect(newsStory).toBeInstanceOf(NewsStory)
  })
})
