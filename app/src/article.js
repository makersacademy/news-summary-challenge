(function(exports) {
  function Article() {
    this.headline = "";
    this.body = "";
    this.datePublished = "";
    this.summary = "";
  };

  exports.Article = Article;
})(this);


var articleBody = new XMLHttpRequest();
articleBody.open('GET', 'https://content.guardianapis.com/money/2017/dec/11/worst-consumer-service-errors-of-2017?show-blocks=body&api-key=' + apiKey(), true);

articleBody.onload = function() {
  if (articleBody.status >= 200 && articleBody.status < 400) {
    var bodyData = JSON.parse(articleBody.responseText);
    document.querySelector('body').innerHTML = bodyData.response.content.blocks.body[0].bodyHtml;
    console.log(bodyData);
  }
}

articleBody.send();
