window.onload = function() {
  const API_KEY = '71498605-ef3e-4806-9b0a-eefd02426656';
  const articlesList = document.getElementById('articles');
  const button = document.getElementById('go-back');
  const articleContent = document.getElementById('article-content');
  const article = document.getElementById('article');

  function displayFullArticle() {
    hideArticlesList();

    var apiUrl = this.getAttribute('api-url');
    var request = new XMLHttpRequest();
    request.open('GET', `${apiUrl}?show-fields=body&api-key=${API_KEY}`, true);
    request.onload = function () {
      var data = JSON.parse(this.response);
      document.getElementById('article-headline').innerHTML = data.response.content.webTitle;
      document.getElementById('article-content').innerHTML = data.response.content.fields.body;
    }
    request.send();
  }

  function hideArticlesList() {
    articlesList.style.display = 'none';
    article.style.display = 'block';
    button.style.display = 'block';
  }

  function showArticlesList() {
    articlesList.style.display = 'block';
    article.style.display = 'none';
    button.style.display = 'none';
  }

  button.addEventListener('click', showArticlesList);
  showArticlesList();

  var request = new XMLHttpRequest();
  request.open('GET', `http://content.guardianapis.com/politics?api-key=${API_KEY}`, true);
  request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      data.response.results.forEach(article => {
        var li = document.createElement("li");
        li.innerHTML = article.webTitle;
        li.setAttribute("api-url", article.apiUrl)
        li.addEventListener('click', displayFullArticle);
        articlesList.appendChild(li);
      });
    } else {
      console.log('something went wrong')
    }
  }
  request.send();
};
