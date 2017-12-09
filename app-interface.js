var newspaper = new ArticleList();
newspaper.getData();
var newsworthy = document.querySelector('#newsworthy')

function addArticleToList(){
    var newArticle = document.createElement('div')
    var newArticleTitle = document.createElement('h1')
    var newArticleDate = document.createElement('p')
    var newArticleUrl = document.createElement('p')
    newsworthy.insertBefore(newArticle, newsworthy.childNodes[0]);
    newArticle.setAttribute('class', 'article')
    newArticle.appendChild(newArticleTitle)
    newArticle.appendChild(newArticleDate)
    newArticle.appendChild(newArticleUrl)
  }

  function addAll(){
    console.log(newspaper.list)
    for(i = 0; i < 10; i ++){
      addArticleToList();
    };
  };

  addAll();
