var ArticleInstance;

function onLoad() {
  ArticleInstance = new Article(title, articleUrl, pubDate);
  setup();
  runTest();
}
