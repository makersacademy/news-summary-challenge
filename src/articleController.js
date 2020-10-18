class ArticleController{

  constructor(articleListView) {
    this.listView = articleListView;
    this.environment = 'production';
  }

  getHtml() {
    return this.listView.outputHTML();
  }

  insertHtml() {
    let articles = document.getElementById('articles');
    // let pageContent = this.getHtml();
    articles.innerHTML = this.getHtml(); 
  }

  getURL() {
     let url;
     if (this.environment === 'test') {
     url = 'http://localhost:9292';
    } else {
      url = productionURL;
    }
    return url;
  }

  async getArticles() {
    let data = [];
    let url = this.getURL();
    await fetch(url)
    .then(async (response) => {
      console.log(response)
      return response.json();
    }).then(function (response) {
      console.log(response)
      data.push(response.response.results[0].webTitle)
    })
    this.getData(data)
  }

  getData(data) {
    console.log(data[0])
    let headline = data[0]
    console.log(headline)
    return headline
  }

}


