import GetArticlesAPI from "./newsapi"

const articles = GetArticlesAPI.getArticles
document.querySelector('#app').appendChild(articles)
