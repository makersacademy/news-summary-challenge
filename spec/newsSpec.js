// Stores all of the tests for the news class

spec("Note Spec", [
  test("When given a dummy headline it is displayed in the inner text", function() {
    let news = new News("Dummy Headline", "Image", "Dummy Full Article")
    expect(news.displayHeadline().innerText).toEqual("Dummy adline")
  })
])