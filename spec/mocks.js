let articleMock1 = {
  returnTitle: function () {
    return 'Corona scare 1';
  },
  returnUrlId: function(){
    return 'corona/story1'
  },
  returnThumbnail: function(){
    return 'corona1.img'
  }
}
let articleMock2 = {
  returnTitle: function () {
    return 'Corona scare 2';
  },
  returnUrlId: function(){
    return 'corona/story2'
  },
  returnThumbnail: function(){
    return 'corona2.img'
  }
}
let articleListMockArray = [articleMock1, articleMock2]
let headlineMocks = [articleMock1.returnTitle(), articleMock2.returnTitle()]

let articleListMock = {
  returnArticles: function(){
    return articleListMockArray
  },
  returnHeadlines: function () {
    return headlineMocks
  },
  addArticle: function (){},
  getArticle: function(){}
}

let articleSummaryViewMock = {
  returnHTML: function(){
    return `<div id="summary">summary of corona scare 1</div>`
  }
}

let articleHeadlineListViewMock = {
  returnHTML: function(){
    return `<ul style="list-style-type:none"><li><div class="newsheadlineclass"><img class="image" src="corona1.img" alt="The News Today"><h2 id="headline" href='#articles/0'>Corona scare 1</h2></div></li></ul>`
  }
}

let articleControllerMock = {
  renderCurrentArticles: function(){
    document.getElementById("app").innerHTML = articleHeadlineListView.returnHTML()
  },
  renderSummary: function(id){
    document.getElementById("app").innerHTML = articleSummaryViewMock.returnHTML()
  },
  httpGetAsync: function(url, callback){}
}