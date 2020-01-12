const articleSummary = {
  text: "Alex Salmond has been speaking out after a week of…went down in Scotland and the rest of the UK now.",
  sentences: [
    "Alex Salmond has been speaking out after a week of attacks over whether an independent Scotland would be able to keep the pound or remain in the EU.",
    "Here are the key points from the Scottish first minister’s speech: \n • Salmond said George Osborne’s arguments against Scotland keeping the pound were based on a “caricature” of macroeconomic policy.",
    "If Osborne did not allow Scotland to share the pound he would be in effect imposing a “George tax” of hundreds of millions of pounds on businesses in the remaining UK.",
    "But he was sure that after a yes vote negotiations between an independent Scotland and the rest of the UK would become constructive again as economic sense and self-interest prevailed.",
    "• In Osborne’s speech, the chancellor referred to an independent Scotland as a foreign country, Salmond recalled - but the rest of the UK would never be a foreign country to Scots, the first minister said.",
  ]
}

const articleContent = {
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

const article = new Article(articleContent, articleSummary)

function generateArticleTitle() {
  assert.isTrue(article.readTitle() === "Alex Salmond speech – first minister hits back over Scottish independence")
};
generateArticleTitle();

function generateArticleBody() {
  assert.isTrue(article.readBody() === "<p>Alistair Darling, the leader of the no campaign, has put out this statement in response to Salmond’s speech:</p> <blockquote> <p>Alex Salmond is pretending the last week never happened.")
};
generateArticleBody();

function generateArticleSummary() {
  assert.isTrue(article.readSummary().includes("Alex Salmond has been speaking out after a week of attacks over whether an independent Scotland would be able to keep the pound or remain in the EU."))
}
generateArticleSummary();
