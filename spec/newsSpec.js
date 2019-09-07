// Stores all of the tests for the news class

spec("Note Spec", [
  test("When given a dummy headline it is displayed in the inner text", function() {
    let news = new News("Dummy Headline", "Dummy Full Article", "http://dummyimage.com")
    expect(news.displayHeadline().innerText).toEqual("Dummy Headline")
  }),

  test("When given a dummy body it is displayed in the inner text", function() {
    let news = new News("Dummy Headline", "Dummy Full Article", "http://dummyimage.com")
    expect(news.displayStory().innerText).toEqual("Dummy Full Article")
  })
])

