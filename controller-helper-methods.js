// To keep controller skinny, any helper methods live here:

generateSummaryString = function(news) {
  newsSummaryHTMLString = "<ul><div class='container'><hr></div>"
  for (i=0; i<news.length; i++) {
    newsSummaryHTMLString += "<div id="+i+" class='container'>" + "<a href='#" + i + "'>" + "<img src=" + news[i].fields.thumbnail + " width='20%' height='20%' align='left' class='center'>" + "<span class='badge badge-pill badge-info'>" + news[i].pillarName + "</span> " + news[i].webTitle + "</a></div><br><br><div><hr></div><br>"
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
  string = news[articleId].fields.trailText + "<br><br>" + news[articleId].webTitle.substring(0,news[articleId].fields.body.indexOf("</p>")) + "...<br><br>See the full article on <a href='" + news[articleId].webUrl + "'>The Guardian</a>";
  string += getBrexitCat(news,articleId)
  return string
}

getBrexitCat = function(news,articleId) {
  if ((news[articleId].fields.trailText.includes("Brexit")) || (news[articleId].fields.trailText.includes("Brexit"))) {
    return "<br><br>brexit, eh... <br><iframe src='https://giphy.com/embed/q4ICE9wYvOwBG' width='448' height='480' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/costume-cat-q4ICE9wYvOwBG'>(gif via GIPHY)</a></p>"
  } else {
    return ""
  }
}
