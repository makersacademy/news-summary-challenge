var testArticle = {
  getID: function() { return 0 },
  getUrl: function() { return 'url' },
  getHeadline: function() { return 'headline' },
  getThumbnail: function() { return 'thumbnail' }
}


var testList = [

  function() {
    var list = new List()
    var view = new ListView(list)

    testEquals('A message is displayed when list contains no articles',
    view.returnHTML(),
    '<h1> No news to report! </h1>'
    )
  },

  function() {
    var list = new List()
    list.addArticle(testArticle)
    var view = new ListView(list)
    var htmlString =
    '<ul style="list-style:none">' +
      '<li>' +
        '<div align=center>' +
          '<img src="' + 'thumbnail' + '">' +
          '<h2>' + 'headline' + '</h2>' +
          '<input type=button onclick=' + 'location.href="#article/0"' + ' value="Get Summary">' +
          '<input type=button onclick=' + 'location.href="' + 'url' + '" value="Read full article"/>' +
        '</div>' +
      '</li>' +
    '</ul>'

    testEquals('Can create html to display a 1 article list',
    view.returnHTML(),
    htmlString
    )
  },

  function() {
    var list = new List()
    list.addArticle(testArticle)
    var view = new ListView(list)
    list.addArticle(testArticle)
    var htmlString =
    '<ul style="list-style:none">' +
      '<li>' +
        '<div align=center>' +
          '<img src="' + 'thumbnail' + '">' +
          '<h2>' + 'headline' + '</h2>' +
          '<input type=button onclick=' + 'location.href="#article/0"' + ' value="Get Summary">' +
          '<input type=button onclick=' + 'location.href="' + 'url' + '" value="Read full article"/>' +
        '</div>' +
      '</li>' +
      '<li>' +
        '<div align=center>' +
          '<img src="' + 'thumbnail' + '">' +
          '<h2>' + 'headline' + '</h2>' +
          '<input type=button onclick=' + 'location.href="#article/0"' + ' value="Get Summary">' +
          '<input type=button onclick=' + 'location.href="' + 'url' + '" value="Read full article"/>' +
        '</div>' +
      '</li>' +
    '</ul>'

    testEquals('Can create html to display multiple articles in article list',
    view.returnHTML(),
    htmlString.toString()
    )
  }
]

voodoo(testList)
