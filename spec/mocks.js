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
  },
  addArticle: function (){},
  getArticle: function(){}
}

let mockArticleSummaryView = {
  returnHTML: function(){
    return "<div>summary of corona scare 1</div>"
  }
}

let articleHeadlineListViewMock = {
  returnHTML: function(){
    return "<ul><li><div>Corona scare 1</div></li><li><div>Corona scare 2</div></li></ul>"
  }
}
