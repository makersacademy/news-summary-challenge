let headlineMock1 = {
  title: function () {
    return 'Corona scare 1';
  }
}
let headlineMock2 = {
  title: function () {
    return 'Corona scare 2';
  }
}
let headlineMocks = [headlineMock1.title(), headlineMock2.title()]

let headlineListMock = {
  returnHeadlines: function () {
    return headlineMocks
  }
}

// let articleHeadlineListView = new ArticleHeadlineListView(myHeadlineList)

let articleHeadlineListViewMock = {
  returnHTML: function(){
    return "<ul><li><div>Corona scare 1</div></li><li><div>Corona scare 2</div></li></ul>"
  }
}

// controller should initialize with a new article list which gets passed to the view

let articleController = new ArticleController(headlineListMock) 

it('can be instantiated', function(){
  expect(articleController).toBeAnInstanceOf(ArticleController)
})

it('changes inner HTML of app div to headline list', function(){
  articleController.renderHeadlines(articleHeadlineListViewMock)
  expect(document.getElementById("app").innerHTML).toEqual("<ul><li><div>Corona scare 1</div></li><li><div>Corona scare 2</div></li></ul>")
})