(function (exports) {
  let articleController

  function fetchArticlesFromApi () {
    console.log('fetchArticlesFromApi')
    let articleController2 = new ArticleController(new ArticleList, ListView)
    articleController2.fetchArticles('/public/mockJson/mockMultipleArticlesAPI.json').then((data) => {
      expect(data.length).toEqual(2)
      expect(data[0].title).toEqual("Alex Salmond speech – first minister hits back over Scottish independence")
      expect(data[1].title).toEqual("Brighton 1-1 Watford: Premier League – as it happened")
      expect(data[0].body).toInclude("I am body number 1")
      expect(data[0].summary).toEqual("Scotland’s first minister Alex Salmond mounts defence of key aspects of independence plan after week of pressure over whether the country could keep sterling or remain in EU")
      expect(data[1].summary).toEqual("I am the second trail text, howdy?")
    })
  }

  function fetchSingleArticleFromApi () {
    console.log('fetchSingleArticleFromApi')
    articleController = new ArticleController(new ArticleList, ListView)
    articleController.fetchSingleArticle('/public/mockJson/mockSingleArticleAPI.json').then((data) => {
      expect(data.title).toEqual("Alex Salmond speech – first minister hits back over Scottish independence")
      expect(data.body).toInclude("Alex Salmond has a responsibility to tell us")
      expect(data.summary).toEqual("Scotland’s first minister Alex Salmond mounts defence of key aspects of independence plan after week of pressure over whether the country could keep sterling or remain in EU")
    })
  }

  function addArticlesList () {
    console.log('addArticlesList')
    let articleController3 = new ArticleController(new ArticleList, ListView)

    let element = document.createElement('div')
    element.id = 'articles'
    element.innerHTML = 'Test'
    document.body.appendChild(element)

    articleController3.fetchArticles('/public/mockJson/mockMultipleArticlesAPI.json').then((data) => {
      articleController3.displayArticlesList('articles')
    })
  }

  fetchArticlesFromApi()
  fetchSingleArticleFromApi()
  addArticlesList()
})(this)

// Guardian query example
// "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body" 

// Guardian Json example
// {"response":{"status":"ok","userTier":"developer","total":2171375,"startIndex":1,"pageSize":2,"currentPage":1,"pages":1085688,"orderBy":"newest","results":[{"id":"football/live/2020/feb/08/brighton-v-watford-premier-league-live","type":"liveblog","sectionId":"football","sectionName":"Football","webPublicationDate":"2020-02-08T19:39:23Z","webTitle":"Brighton 1-1 Watford: Premier League – as it happened","webUrl":"https://www.theguardian.com/football/live/2020/feb/08/brighton-v-watford-premier-league-live","apiUrl":"https://content.guardianapis.com/football/live/2020/feb/08/brighton-v-watford-premier-league-live","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"},{"id":"sport/blog/2020/feb/08/gregor-townsend-scotland-england","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2020-02-08T19:20:51Z","webTitle":"Gregor Townsend left to lament Scotland’s failure to take chances | Gerard Meagher","webUrl":"https://www.theguardian.com/sport/blog/2020/feb/08/gregor-townsend-scotland-england","apiUrl":"https://content.guardianapis.com/sport/blog/2020/feb/08/gregor-townsend-scotland-england","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"}]}}%  

// Guardian single article
// "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
