var newspaper = new ArticleList();
newspaper.getData();
var listOfArticles
var newsworthy = document.querySelector('#newsworthy')
var newArticleUrl
var newArticleDate
var newArticleTitle
var newArticle

function addArticleToList(){
    newArticle = document.createElement('div')
    newArticleTitle = document.createElement('h1')
    newArticleDate = document.createElement('p')
    newArticleUrl = document.createElement('p')
  }

  function addAll(){
    setTimeout(function(){
      listOfArticles = newspaper.list;
      for(i = 0; i < listOfArticles.length; i ++){
        addArticleToList();
        AddingInformation();
      };
    },5000);
  };

  function AddingInformation(){
    if (listOfArticles){
      listOfArticles.forEach(function(headline){
        newsworthy.insertBefore(newArticle, newsworthy.childNodes[0]);
        newArticle.setAttribute('class', 'article')
        newArticle.appendChild(newArticleTitle)
        newArticleTitle.innerHTML = headline.title;
        newArticle.appendChild(newArticleDate);
        newArticleDate.innerHTML = headline.date;
        newArticle.appendChild(newArticleUrl);
        newArticleUrl.innerHTML = headline.url;
      });
    };
  };

  addAll()
