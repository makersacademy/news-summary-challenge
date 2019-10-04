let newsagg = new NewsAggregator;

describe("getAllArticles",
  it("fetches articles and populates this._allNews",
    (newsagg.getAllArticles() !== [])
  )
)

describe("displayArticles",
  it("takes the articles and formats each of their respective elements",
    (newsagg.displayArticles !== '')
  )
)
