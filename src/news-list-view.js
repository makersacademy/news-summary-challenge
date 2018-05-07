(function(exports){

  function NewsListView(newsList){
    this._newsList = newsList
  };

  NewsListView.prototype.html= function () {
    var html = "<ul>"

    this._newsList.get().forEach(function(news){
      html += `<div><img src='${news[1][1]}' width="50%"></img></div><a href='#${news[0]}'>${news[1][0]}</a>`
    })

    html += "</ul>"

    return html
  };


  exports.NewsListView = NewsListView;

})(this)
