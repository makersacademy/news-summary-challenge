let newsagg = new NewsAggregator;

describe("getAllArticles",
  it("fetches articles and populates this._allNews",
    (newsagg.getAllArticles() !== [])
  )
)

describe("displaySummaryArticles",
  it("takes the articles and formats each of their respective elements",
    (newsagg.displaySummaryArticles() !== '')
  )
)

describe("displayFullArticle",
  it("creates div/img/body elements and displays all of an article's info",
    function () {
      newsagg.displayAllNewsArray() = [["<div>Wow what a headline</div>", "<img src=http://fakenews.com>", "<body>LONG ARTICLE</body>"]]
      return (newsagg.displayFullArticle(0).includes("<div>Wow what a headline</div>"))
    }
  )
)
