var newspaper = new ArticleList();
newspaper.getData();
var listOfArticles
var newsworthy = document.querySelector('#newsworthy')
var newArticleUrl
var newArticleDate
var newArticleTitle
var newArticle

function addArticleToList(){
  }

  function addAll(){
    setTimeout(function(){
      listOfArticles = newspaper.list;
      console.log(listOfArticles)
      AddingInformation();
    },3000);
  };

  function AddingInformation(){
  console.log(listOfArticles.length)
    listOfArticles.forEach(function(headline){
      newArticle = document.createElement('div')
      newsworthy.insertBefore(newArticle, newsworthy.childNodes[0]);        newArticle.setAttribute('class', 'article')
      newArticleTitle = document.createElement('h1')
      newArticle.appendChild(newArticleTitle)
      newArticleTitle.innerHTML = headline.title;        newArticleDate = document.createElement('p')
      newArticle.appendChild(newArticleDate);
      newArticleDate.innerHTML = headline.date;              newArticleUrl = document.createElement('p')
      newArticle.appendChild(newArticleUrl);
      newArticleUrl.innerHTML = headline.url;
    });
  };

  addAll()
