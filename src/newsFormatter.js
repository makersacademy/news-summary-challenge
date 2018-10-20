
function NewsFormatter () {}

NewsFormatter.createArticleList = function(headlines) {
  let list = headlines.map(function(headline, index) {
    return `<div id="${headline.articleId}"><a href="#article-${headline.articleId + 1}"><h2>${headline.title}</h2></a><img src="${headline.image}" alt="${headline.title}"></div>`
  })
  return list.join('')
  }
