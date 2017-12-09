function RenderNews(data = null) {
  this._data = data;

  RenderNews.prototype.allNews = function() {
  var htmlString = ""
    var news = this._data
  console.log(news)
    htmlString += `<li><div>${news.response.results[0].webTitle}</div></li>`
    document.getElementById("app").innerHTML = htmlString;
  // this._noteList.list().forEach(function(note){
  //   if (note.text().length > 20) {
  //     htmlString += `<li><div>${note.text().slice(0,20)}...</div></li>`
  //   } else {
  //     htmlString += `<li><div>${note.text()}</div></li>`
  //   }
  // });
  // return (`<ul>${htmlString}</ul>`)
};
}
// data.response.results[i].webUrl
