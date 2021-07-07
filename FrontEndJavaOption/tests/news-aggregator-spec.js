let newsaggregator = new NewsAggregator;
let newstag = new NewsTagGenerator("Boris Johnson", "Wow, bad dude", "Wow", "http://notevenaurlwow.com/");
allNews = []
allNews.push( newstag );

// calls API so uncomment if you want to test all of these functions!

// describe("getAllArticles",
//   it("fetches articles and populates this._allNews",
//     (newsagg.getAllArticles() !== [])
//   )
// )

describe("displaySummaryArticles",
  it("takes the articles and formats each of their respective elements",
    (newsaggregator.displaySummaryArticles().includes('Boris Johnson'))
  )
)

describe("displayFullArticle",
  it("creates div/img/body elements and displays all of an article's info",
    (newsaggregator.displayFullArticle().includes('Wow, bad dude') )
  )
)
