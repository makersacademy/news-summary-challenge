Describe('RugbyArticle', function() {
  It ( 'contains a ruby Article title and URL', function() {
    var webTitle = 'Rugby World Cup 2019: Guardian writers’ predictions'
    var webUrl = 'https://www.theguardian.com/sport/2019/sep/19/rugby-world-cup-2019-guardian-predictions'
    var rugbyArticle = new RugbyArticle( webTitle, webUrl )
    Demand(rugbyArticle.title).toBe(webTitle)
    Demand(rugbyArticle.url).toBe(webUrl)
  });
});
