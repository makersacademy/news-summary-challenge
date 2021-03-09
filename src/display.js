'use strict;'

class ArticleDisplay {
  constructor(){
    this.listOfArticles = []
  }

  getFullArticleList(){
    return this.listOfArticles;
  }

  getArticleList(){
    let todaysDate = (new Date().toJSON().slice(0,10))
    fetch(`https://content.guardianapis.com/search?&show-fields=all&from-date=${todaysDate}&api-key=33e067be-58c5-4e13-a90e-dac88c47b6e2`
    )
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    let idCount = 1
    let articlesList = data.response.results

    articlesList.forEach((item) => {

      let article = new Article(
        item.sectionName,
        item.fields.headline,
        item.fields.trailText,
        item.webUrl,
        item.fields.thumbnail,
        item.webPublicationDate,
        item.fields.body,
        idCount)

        let html = `<div class="news-piece" id="${idCount}">
        <h2 class="section">${article.section}</h2><br>
        <h2><a href="#${article.id}">${article.headline}</a></h2><br>
        <h4 class="summary">${article.summary}</h4><div id="body-text${idCount}"></div>
        <img src="${article.thumbnail}"class="thumbnail"><br>
        <a href="${article.webUrl}">${article.headline}</a><br></div>`

        idCount += 1

        this.listOfArticles.push(article)
        document.getElementById("newsList").insertAdjacentHTML('afterend', html);
      });
    });
  }
};

let articleDisplay = new ArticleDisplay();
articleDisplay.getArticleList();
console.log(articleDisplay.listOfArticles[0]);

window.addEventListener("hashchange", function(event) {
  let newIndex = event.newURL.slice(-1);
  if (event.oldURL.slice(-1) === '/') {
    let oldIndex = 0;
  } else {
    let oldIndex = event.oldURL.slice(-1);
  }

  let fullArticle = articleDisplay.listOfArticles[newIndex]
  console.log(`${newIndex}`);
  console.log(`${oldIndex}`);
  document.getElementById(`body-text${newIndex}`).innerHTML = fullArticle['body']
  document.getElementById(`body-text${oldIndex}`).innerHTML = ""
});
