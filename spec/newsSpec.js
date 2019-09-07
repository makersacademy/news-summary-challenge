// Stores all of the tests for the news class

spec("Note Spec", [
  xtest("displayHeadline creates an element with a given innerText", function() {
    let news = new News("Dummy Headline", "Dummy Full Article", "http://dummyimage.com/")
    expect(news.displayHeadline().innerText).toEqual("Dummy Headline")
  }),

  xtest("displayStory creates an element with a given innerText", function() {
    let news = new News("Dummy Headline", "Dummy Full Article", "http://dummyimage.com/")
    expect(news.displayStory().innerText).toEqual("Dummy Full Article")
  }),

  xtest("displayImage creates an image object with a given url", function() {
    let news = new News("Dummy Headline", "Dummy Full Article", "http://dummyimage.com/")
    expect(news.displayImage().src).toEqual("http://dummyimage.com/")
  })
])

