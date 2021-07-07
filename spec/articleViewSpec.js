var viewArticle = {
  getID: function() { return 0 },
  getUrl: function() { return 'url' },
  getHeadline: function() { return 'headline' },
  getThumbnail: function() { return 'thumbnail' },
  getSummary: function() { return 'summary' }
}

var testList = [

  function() {
    var htmlString =
    '<div align=center>' +
      '<img src="' + 'thumbnail' + '">' +
      '<h1>' + 'headline' + '</h1>' +
      '<h4>' + 'summary' + '</h4>' +
      '<input type=button onclick=' + 'location.href="' + 'url' + '" value="Read full article"/>' +
    '</div>'
    var view = new ArticleView(viewArticle)

    testEquals('Can create html for a single article (to view summary)',
    view.returnHTML(),
    htmlString
    )
  }

]

voodoo(testList)
