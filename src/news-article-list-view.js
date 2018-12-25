(function(exports) {

  function NewsArticleListView() {}

  NewsArticleListView.prototype = {
    render: function(articles) {
      return [
            Heading(),
            "<div class='container card-columns text-center'>",
              articles.map(function(article) {
                return [
                  "<div class='card mb-2' style='max-width: 30rem;'>",
                  "<img class='card-img-top' src=" + article.thumbnail() + ">",
                    "<div class='card-body'>",
                      "<a class='btn btn-primary' href='#'>" + article.headline() + "</a>",
                    "</div>",
                  "</div>"
                ].join("")
              }).join(""),
          "</div>"
      ].join("")
    }
  }

  exports.NewsArticleListView = NewsArticleListView;
})(this);


// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
