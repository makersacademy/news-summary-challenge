(function(global) {
  function ArticlePrinter() {}

  ArticlePrinter.prototype = {
    list: function(articles) {
      string = "";
      articles.forEach(article => {
        string += `<ul><li><h2><a href="${article["url"]}">${article["title"]}</a></h2></li>
                <li><div class='image'><img src="${article["urlToImage"]}"></div></li>
                <li><div class='author'>Source: ${article["author"]}</div></li></ul>`
      })
      return string;
    },
  };

  global.ArticlePrinter = ArticlePrinter;
})(this);
