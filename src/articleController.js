class ArticleController{

  constructor() {
    this.listModel = new ArticleList();
    this.listView = new ArticleListView(this.listModel);
    this.environment = 'production';
  }

  getHtml() {
    return this.listView.outputHTML();
  }

  insertHtml() {
    let articles = document.getElementById('articles');
    articles.innerHTML = this.getHtml(); 
  }

  getURL() {
     let url;
     if (this.environment === 'test') {
     url = '../testRespone.json';
    } else {
      url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail";
    }
    return url;
  }

  async getArticles() {
    let data = [];
    let url = this.getURL();
    await fetch(url)
    .then(async (response) => {
      return response.json();
    }).then(function (response) {
      for (let i = 0; i < 10; i ++) {
      data.push(response.response.results[i])
      }
    })
    this.formatData(data);
    this.getHtml();
    this.insertHtml();
  }


  formatData(array) {
    //if story does not have a thumbnail sites crashes
    for (let i = 0; i < 10; i ++) {
      this.listView.articleList.addArticle(array[i].webTitle, array[i].webUrl, array[i].fields.thumbnail)
    }
  }

  //testing different ways to make api call


  // getData(data) {
  //   console.log(data)
  //   return data
  // }

  // getArticles() {
  //   const http = new XMLHttpRequest();
  //   const url = 'http://localhost:9292'
  //   http.open("GET", url);
  //   http.send();
  //   http.onreadystatechange=(e)=> {
  //     let result = http.responseText;
  //     console.log(result)
  //   }
  // }

}

controller = new ArticleController();
controller.getArticles();



