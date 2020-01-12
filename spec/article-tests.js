var article = new Article({"response":{
  "status":"ok",
  "userTier":"developer",
  "total":1,
  "content":{
    "id":"football/live/2020/jan/12/brighton-v-arsenal-womens-super-league-live",
    "type":"liveblog",
    "sectionId":"football",
    "sectionName":"Football",
    "webPublicationDate":"2020-01-12T13:21:38Z",
    "webTitle":"Brighton v Arsenal: Women's Super League – live!",
    "webUrl":"https://www.theguardian.com/football/live/2020/jan/12/brighton-v-arsenal-womens-super-league-live",
    "apiUrl":"https://content.guardianapis.com/football/live/2020/jan/12/brighton-v-arsenal-womens-super-league-live",
    "fields":{
      "body":"<div id=\"block-5e1b1d218f08c39722649150\" class=\"block is-key-event\" data-block-contributor=\"\"> <p class=\"block-time published-time\"> <time datetime=\"2020-01-12T13:21:38.990Z\">1.21pm <span class=\"timezone\">GMT</span></time> </p>   <h2 class=\"block-title\">Half time: Brighton 0-2 Arsenal</h2>  <div class=\"block-elements\">  <p>Peep peep! The league leaders Arsenal are in control at Crawley after a slick, authoritative first-half performance. Danielle van de Donk and Jill Roord scored excellent goals, and they could be further ahead."}}}}
        )

function generateArticleTitle() {
  assert.isTrue(article.readTitle() === "Brighton v Arsenal: Women's Super League – live!")
};
generateArticleTitle();

function generateArticleBody() {
  assert.isTrue(article.readBody() === "<div id=\"block-5e1b1d218f08c39722649150\" class=\"block is-key-event\" data-block-contributor=\"\"> <p class=\"block-time published-time\"> <time datetime=\"2020-01-12T13:21:38.990Z\">1.21pm <span class=\"timezone\">GMT</span></time> </p>   <h2 class=\"block-title\">Half time: Brighton 0-2 Arsenal</h2>  <div class=\"block-elements\">  <p>Peep peep! The league leaders Arsenal are in control at Crawley after a slick, authoritative first-half performance. Danielle van de Donk and Jill Roord scored excellent goals, and they could be further ahead.")
};
generateArticleBody();
