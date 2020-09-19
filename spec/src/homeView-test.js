(function (exports) {
  function putEachArticleInSeparateDiv() {
    let home = new HomeView();
    let fakeModel = {
      id:
        'football/live/2020/sep/19/manchester-united-v-crystal-palace-premier-league-live',
      createdAt: '2020-09-19T17:49:56Z',
      tag: 'Football',
      title: 'Manchester United v Crystal Palace: Premier League – live!',
      url:
        'https://www.theguardian.com/football/live/2020/sep/19/manchester-united-v-crystal-palace-premier-league-live',
    };

    let expected = `<div class=newsDiv id=#a0><div><p class="pCreated">09-19 17:49:56</p><p class="pTag">Football</p></div><h3>Manchester United v Crystal Palace: Premier League – live!</h3><a class="btn-1" href=https://www.theguardian.com/football/live/2020/sep/19/manchester-united-v-crystal-palace-premier-league-live>Read</a></div>`;

    confirm.isTrue(home.displayTitles([fakeModel]) === expected);
  }
  putEachArticleInSeparateDiv();
})(this);
