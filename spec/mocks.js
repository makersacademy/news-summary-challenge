let headlineMock1 = {
  returnTitle: function () {
    return 'Corona scare 1';
  },
  returnSummary: function(){
    return 'Corona 1 summary'
  }
}
let headlineMock2 = {
  returnTitle: function () {
    return 'Corona scare 2';
  },
  returnSummary: function(){
    return 'Corona 2 summary'
  }
}
let headlineMocks = [headlineMock1.returnTitle(), headlineMock2.returnTitle()]

let headlineListMock = {
  returnHeadlines: function () {
    return headlineMocks
  },
  addArticle: function (){},
  getArticle: function(){}
}

let mockArticleSummaryView = {
  returnHTML: function(){
    return `<div id="summary">summary of corona scare 1</div>`
  }
}

let articleHeadlineListViewMock = {
  returnHTML: function(){
    return `<ul style="list-style-type:none"><li><div id="headline"><a href='#articles/0'>Corona scare 1</a></div></li><li><div id="headline"><a href='#articles/1'>Corona scare 2</a></div></li></ul>`
  }
}
