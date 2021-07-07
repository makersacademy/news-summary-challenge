const testArticle3 = {
  "response":{
    "status":"ok",
    "userTier":"developer",
    "total":1,
    "content":{
      "id":"politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live",
      "type":"liveblog",
      "sectionId":"politics",
      "sectionName":"Politics",
      "webPublicationDate":"2014-02-17T14:10:26Z",
      "webTitle":"Alex Salmond speech – first minister hits back over Scottish independence",
      "webUrl":"https://www.theguardian.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live",
      "apiUrl":"https://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live",
      "fields":{
        "body":"<p>Alistair Darling, the leader of the no campaign, has put out this statement in response to Salmond’s speech:</p> <blockquote> <p>Alex Salmond is pretending the last week never happened."}}}}

function displaysHTML() {
  const articleList = new ArticleList();
  articleList.add(testArticle3)
  var id = articleList.articles[0].id
  const articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.displayHTML().includes(`<li><a href='#articles/${id}'>Alex Salmond speech – first minister hits back over Scottish independence</a></li>`))
}
displaysHTML();
