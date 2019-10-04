let news = new News("Boris Johnson", "Wow, bad dude", "DUMMY IMAGE HTTP");
console.log(news.generateHeadline().textContent)

describe("generateHeadline",
  it("Returns a headline for a given news object",
    (news.generateHeadline().textContent === 'Boris Johnson')
  )
)

describe("generateArticleBody",
  it("Returns the body of the article for a given news object",
    (news.generateArticleBody().textContent === 'Wow, bad dude')  
  )
)