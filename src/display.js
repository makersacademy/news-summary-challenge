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
    let idCount = 1
    let articlesList = data.response.results
    let summaryText = ""

    articlesList.forEach((item) => {

      let article = new Article(
        item.sectionName,
        item.fields.headline,
        item.fields.trailText,
        item.webUrl,
        item.fields.thumbnail,
        item.webPublicationDate,
        item.fields.body,
        summaryText,
        idCount)

        let html = `<div class="news-piece" id="${idCount}">
        <h2 class="section">${article.section}</h2>
        <h2><a href="#${article.id}">${article.headline}</a></h2>
        <h4 class="trailText">${article.trailText}</h4><div class="sum" id="body-sum${idCount}"></div><br>
        <img src="${article.thumbnail}"class="thumbnail"><br>
        <p class="url"><a href="${article.webUrl}">${article.headline}</a></p><br><br></div>`

        idCount += 1
        this.listOfArticles.push(article)
        document.getElementById("newsList").insertAdjacentHTML('afterend', html);
      });
    });
  }
  
  getSummary(){
    this.listOfArticles.forEach((item) => {

      fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${item['webUrl']}`
      )
      .then((response) => response.json())
      .then((data) => {
        item['summaryText'] = data.sentences;
      });
    });
  }
};
