// To keep controller skinny, any helper methods live here:

generateSummaryString = function(news) {
  newsSummaryHTMLString = "<ul><hr>"
  for (i=0; i<news.length; i++) {
    newsSummaryHTMLString += "<div id="+i+" class='container'>" + "<a href='#" + i + "'>" + news[i].webTitle + "</a><br><img src=" + news[i].fields.thumbnail + ">" + "</div><hr>"
  }
  newsSummaryHTMLString += "</ul>"
  return newsSummaryHTMLString
}

getPathFromURL = function(location) {
  return location.hash.split("#")[1];
}

getArticleHeader = function(news,articleId) {
  string = news[articleId].webTitle + "<br><img src=" + news[articleId].fields.thumbnail + ">";
  return string
}

getArticleSummary = function(news,articleId) {
  string = news[articleId].fields.trailText + "<br><br>" + news[articleId].fields.body.substring(0,news[articleId].fields.body.indexOf("</p>")) + "...<br><br>See the full article on <a href='" + news[articleId].webUrl + "'>The Guardian</a>";
  if (string.includes("Brexit")) {
    string += "<br><br>brexit, eh... <br><iframe src='https://giphy.com/embed/q4ICE9wYvOwBG' width='448' height='480' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/costume-cat-q4ICE9wYvOwBG'>(gif via GIPHY)</a></p>"
  }
  return string
}
