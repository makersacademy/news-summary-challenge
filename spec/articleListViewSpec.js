var list = new List()
list.addArticle(testArticle)
var view = new ListView(list)
var testArticle = {
  getID: function() { return 0 },
  getUrl: function() { return 'url' },
  getHeadline: function() { return 'headline' },
  getText: function() { return 'text' },
  getThumbnail: function() { return 'thumbnail' }
}


var testList = [

  function() {
    var htmlString =
    '<ul style="list-style:none">' +
      '<li>' +
        '<div align=center>' +
          '<img src=' + 'thumbnail' + '>' +
          '<h2>' + 'headline' + '<h2>'
          '<input type=button onclick=' + 'location.href="#article/0"' + 'value="Get Summary">' +
          '<input type=button onclick=' + 'location.href=' + 'url' + 'value="Read full article"/>' +
        '</div>' +
      '</li>' +
    '</ul>'
    testEquals('Can create html to display a 1 article list',
    view.returnHTML(testArticle),
    htmlString
    )
  }
]

voodoo(testList)
