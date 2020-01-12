(function(exports) {

  const demoArticle = {
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

          const demoArticle2 = {"response":{"status":"ok","userTier":"developer","total":1,"content":{"id":"football/live/2020/jan/12/bournemouth-v-watford-premier-league-live","type":"liveblog","sectionId":"football","sectionName":"Football","webPublicationDate":"2020-01-12T14:19:33Z","webTitle":"Bournemouth v Watford: Premier League – live!","webUrl":"https://www.theguardian.com/football/live/2020/jan/12/bournemouth-v-watford-premier-league-live","apiUrl":"https://content.guardianapis.com/football/live/2020/jan/12/bournemouth-v-watford-premier-league-live","fields":{"body":"<div id=\"block-5e1b2a538f08c397226491b8\" class=\"block\" data-block-contributor=\"\"> <p class=\"block-time published-time\"> <time datetime=\"2020-01-12T14:17:29.786Z\">2.17pm <span class=\"timezone\">GMT</span></time> </p>    <div class=\"block-elements\">  <p><strong>17 min </strong>We’ve not seen anything of Deulofeu yet, but it’s noticeable how quickly Watford get up when the ball goes into Deeney, whom they assume will win the header. </p> </div>   </div> <div id=\"block-5e1b2a1e8f087e8308e6ce14\" class=\"block\" data-block-contributor=\"\"> <p class=\"block-time published-time\"> <time datetime=\"2020-01-12T14:16:43.039Z\">2.16pm <span class=\"timezone\">GMT</span></time> </p>    <div class=\"block-elements\">  <p><strong>16 min </strong>These last few minutes have been a bit better for Bournemouth, who’ve settled into the game now."}}}}

  function ArticleController(articleList) {
    this.articleList = articleList;
    this.articleList.add(demoArticle)
    this.articleList.add(demoArticle2)
    this.articleListView = new ArticleListView(this.articleList);
  }

  ArticleController.prototype.changeHTML = function(element = document.getElementById("app")) {
    element.innerHTML = this.articleListView.displayHTML();
  }

  exports.ArticleController = ArticleController;


})(this);
