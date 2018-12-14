describe("ArticleListView", function() {
  articleListDoubleSetup()

  articleListView = new ArticleListView(newsList)

  describe(".createDiv", function() {
    it('creates a div element which shows the stories webTitle and thumbnail', function() {
      imageHTML = articleListView.createThumbnailImage(newsArticleObject);
      webTitleHTML = articleListView.createHTMLWebTitle(newsArticleObject);
      expect(articleListView.createDiv(imageHTML, webTitleHTML)).toEqual("<div><h3>Man who lost ears in Lancashire machete attack dies in hospital</h3><img src=https://media.guim.co.uk/93e68794b9286cc202b0e6b141770d3386ef2654/0_52_747_448/500.jpg></div>")
    })
  })

  describe(".createHTMLWebTitle", function() {
    it('creates a h3 element with the articles webTitle', function() {
      expect(articleListView.createHTMLWebTitle(newsArticleObject)).toEqual("<h3>Man who lost ears in Lancashire machete attack dies in hospital</h3>")
    })
  })

  describe("createThumbnailImage", function() {
    it('creates an image with the thumbnail', function() {
      expect(articleListView.createThumbnailImage(newsArticleObject)).toEqual("<img src=https://media.guim.co.uk/93e68794b9286cc202b0e6b141770d3386ef2654/0_52_747_448/500.jpg>")
    })
  })

  describe("singleHTMLString", function() {
    it('pulls all the HTML for all articls into a single string', function() {
      expect(articleListView.singleHTMLString()).toEqual("<div><h3>Man who lost ears in Lancashire machete attack dies in hospital</h3><img src=https://media.guim.co.uk/93e68794b9286cc202b0e6b141770d3386ef2654/0_52_747_448/500.jpg></div><div><h3>Man who lost ears in Lancashire machete attack dies in hospital</h3></div>")
    })
  })
})
