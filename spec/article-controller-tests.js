const testArticle4 = {
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

const articleSummary4 = {
  text: "Alex Salmond has been speaking out after a week of…went down in Scotland and the rest of the UK now.",
  sentences: [
    "Alex Salmond has been speaking out after a week of attacks over whether an independent Scotland would be able to keep the pound or remain in the EU.",
    "Here are the key points from the Scottish first minister’s speech: \n • Salmond said George Osborne’s arguments against Scotland keeping the pound were based on a “caricature” of macroeconomic policy.",
    "If Osborne did not allow Scotland to share the pound he would be in effect imposing a “George tax” of hundreds of millions of pounds on businesses in the remaining UK.",
    "But he was sure that after a yes vote negotiations between an independent Scotland and the rest of the UK would become constructive again as economic sense and self-interest prevailed.",
    "• In Osborne’s speech, the chancellor referred to an independent Scotland as a foreign country, Salmond recalled - but the rest of the UK would never be a foreign country to Scots, the first minister said.",
  ]
}

function controllerChangesHTML() {
  const articleList = new ArticleList();
  articleList.add(testArticle4)
  var id = articleList.articles[0].id
  const articleController = new ArticleController(articleList)
  element = { innerHTML: 'Original' }
  articleController.changeHTML(element)
  assert.isTrue(element.innerHTML.includes(`<li><a href='#articles/${id}'>Alex Salmond speech – first minister hits back over Scottish independence</a></li>`))
}
controllerChangesHTML();

function testHashchange() {
  const articleList = new ArticleList();
  articleList.add(testArticle4, articleSummary4)
  const articlecontroller = new ArticleController(articleList);
  let element = { innerHTML: 'unchanged' }
  let callCounter = 0;
  let testWindow = {
    addEventListener: function(type, func) {
      callCounter++;
      assert.isTrue(type === 'hashchange');
      func();
    }
  }
  noteController.urlChange();
  assert.isTrue(callCounter === 1);
  assert.isTrue(element.innerHTML === "<div>Alex Salmond has been speaking out after a week of attacks over whether an independent Scotland would be able to keep the pound or remain in the EU. Here are the key points from the Scottish first minister’s speech: \n • Salmond said George Osborne’s arguments against Scotland keeping the pound were based on a “caricature” of macroeconomic policy. If Osborne did not allow Scotland to share the pound he would be in effect imposing a “George tax” of hundreds of millions of pounds on businesses in the remaining UK. But he was sure that after a yes vote negotiations between an independent Scotland and the rest of the UK would become constructive again as economic sense and self-interest prevailed. • In Osborne’s speech, the chancellor referred to an independent Scotland as a foreign country, Salmond recalled - but the rest of the UK would never be a foreign country to Scots, the first minister said.</div>")
}
