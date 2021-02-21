// require('dotenv').config();
class ArticleController {
  constructor() {
    this.name = "article controller"
  }
  outputToElement(data) {
    data = data['response']['results']
    for(let i = 0; i < data.length; i++) {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
  
      const a = document.createElement('a')
      a.textContent = data[i]['webTitle']
      a.href = "#" + i.toString()
  
      const p = document.createElement('div')
      // data[i]['fields']['body'] = data[i]['fields']['body'].substring(0, 300)
      p.innerHTML = `${data[i]['fields']['body'].substring(0, 300)}...`
  
      articleList.push({title: data[i]['webTitle'], summary: data[i]['fields']['data'], id: articleList.length, body: data[i]['fields']['body']})
  
      container.appendChild(card)
      card.appendChild(a)
      card.appendChild(p)
      // document.getElementById(i.toString()).innerHTML = "hello"
      console.log(data[i]['webTitle'])
    }
    console.log(articleList)
  }
  
  
}
const app = document.getElementById('root')
let articleList = []
const container = document.createElement('div')
container.setAttribute('id', 'container')

app.appendChild(container)

let request = new XMLHttpRequest()
let apiKey = "&api-key=XXX"
let testUrl = "https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01" + apiKey
let url = "https://content.guardianapis.com/"
let searchQuery = "search?q=&"
let fields = "show-fields=body"
request.open('GET', url + searchQuery + fields + apiKey, true)

request.onload = function() {
  let data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    articleController = new ArticleController
    articleController.outputToElement(data)
  } else {
    console.log('error');
  }
}
request.send()



window.addEventListener("hashchange", showArticleForCurrentPage);

function showArticleForCurrentPage() {
  return showArticle(getArticleFromUrl(window.location));

  function getArticleFromUrl(location) {
    return location.hash.split("#")[1];
  }

  function showArticle(article_id) {
    let article = getArticleContentById(article_id)
    let singleArticle = new SingleArticle(article)
    document.getElementById("container").innerHTML = article.body
  }

  function getArticleContentById(article_id) {
    for(let i = 0; i < articleList.length; i++) {
      console.log('---');
      console.log(articleList[i]);
      console.log('---');
      if (articleList[i].id == article_id) {
        return articleList[i]
      }
    } 
  }
}



