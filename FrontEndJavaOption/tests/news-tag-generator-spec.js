let news = new NewsTagGenerator("Boris Johnson", "Wow, bad dude", "Wow", "http://notevenaurlwow.com/");

describe("generateHeadline",
  it("Returns a headline for a given news object",
    (news.generateHeadline().textContent === 'Boris Johnson')
  )
)

describe("generateArticleSummary",
  it("Returns the body of the article for a given news object",
    (news.generateArticleSummary().textContent === 'Wow')
  )
)

describe("generateImageTag",
  it("Returns Image URL for a given news object",
    (news.generateImageTag().src == "http://notevenaurlwow.com/")
  )
)

describe("generateLink",
  it("Returns a link tag for the given headline/story",
    (news.generateLink(0).textContent == "Boris Johnson")
  )
)