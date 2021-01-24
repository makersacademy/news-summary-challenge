'use strict;'

class News {
  constructor() {
    this.list = []
  }

  fetch(){
    return fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body', {
      method: 'GET'
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log("appending data");
      data.response.results.forEach(result => this.list.push({title: result.webTitle, url: result.webUrl}))
    })
  }

  renderNews(){
    console.log('asdasd');
    console.log(this.list);
    this.list.forEach(article => document.getElementById("newsList").insertAdjacentHTML('afterend', `<a href="${article.url}">${article.title}</a><br>`))
  }
}
