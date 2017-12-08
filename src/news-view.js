(function(exports) {

  function NewsView(newsList) {
  this._news = newsList;
};

NewsView.prototype.render = function() {
var htmlString = ""
this._news.forEach(function(singleNew){
  if (singleNew.length > 50) {
    htmlString += `<li><div>${singleNew.slice(0,20)}...</div></li>`
  } else {
    htmlString += `<li><div>${singleNew}</div></li>`
  }
});
return (`<ul>${htmlString}</ul>`)
};
