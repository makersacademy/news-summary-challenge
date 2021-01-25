'use strict;'

class ArticleDisplay {
  constructor(){
    this.listOfArticles = []
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
        item.fields.headline,
        item.webUrl,
        item.fields.thumbnail,
        item.webPublicationDate,
        item.fields.body,
        idCount)

        let html = `<div class="news-piece" id="${idCount}">
        <h2 class="headline">${article.headline}</h2><br>
        <img src="${article.thumbnail}"class="thumbnail"><br>
        <a href="${article.webUrl}">${article.headline}</a><br>
        <p class="text">${article.body}</p>`
        idCount += 1
        
        this.listOfArticles.push(article)
        document.getElementById("newsList").insertAdjacentHTML('afterend', html);
      });
    });
  }

}

let articleDisplay = new ArticleDisplay();
articleDisplay.getArticleList();
console.log("wahey")
