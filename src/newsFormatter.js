
function NewsFormatter () {}
// creates article list view for viewController rendering 
NewsFormatter.createArticleList = function(overview) {
  let list = overview.map(function(article) {
    return `<div id="${article.articleId}"><a href="#article-${article.articleId}"><h2>${article.title}</h2></a><img src="${article.image}" alt="${article.title}"></div><input class="btn show-summary" id="show-summary" type="button" value="Show article summary" style="display: inline-block;" onclick="window.location.hash = 'summary-${article.articleId}'">`
  })
  return list.join('')
}
// creates full article view for viewController rendering 
NewsFormatter.createFullArticleView = function (fullArticleInformation) {
  return `<div><h2>${fullArticleInformation.title}</h2></a><img src="${fullArticleInformation.image}" alt="${fullArticleInformation.title}"><p>${fullArticleInformation.bodyText}</p></div><input class="btn show-summary" id="show-summary" type="button" value="Show article summary" style="display: inline-block;" onclick="window.location.hash = 'summary-${fullArticleInformation.articleId}'">`
}
// creates summarized article view for viewController rendering 
NewsFormatter.createSummarizedArticleView = function (textSummaryObject, fullArticleInformation) {
  let summarizedBody = textSummaryObject.sentences.join('')

  return `<div><h2>${fullArticleInformation.title}</h2></a><img src="${fullArticleInformation.image}" alt="${fullArticleInformation.title}"><p>${summarizedBody}</p></div><input class="btn show-full-article" id="show-full-article" type="button" value="Show full article" style="display: inline-block;" onclick="window.location.hash = 'article-${fullArticleInformation.articleId}'">`
}
