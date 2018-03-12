
var newsBlock = new NewsBlock();
newsBlock.getNews();

newsBlock.allNews.forEach(function(element) {
  document.write(`<li>
  <a href="${element.url}">${element.title}</a><br>
  <img src="${element.imgUrl}">
  </li>`)
})