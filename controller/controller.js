(function(exports){

var articleInstance;

function articleList(){
  return articleInstance;
}

function onLoad() {
  articleInstance = new Article(title, articleUrl, pubDate);
  setup();
  runTest();
}

exports.onLoad = onLoad;
exports.articleList = articleList;

})(this)
