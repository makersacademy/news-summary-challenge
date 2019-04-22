import ArticleList from '../src/articleList.js';
import Article from '../src/article.js';

let list = new ArticleList();

const Utils = {
  parseRequestURL: function() {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split('/');
    //create request object to return from this function
    let request = {
      resource: null,
      id: null
    };

    //assign url elements after #
    request.resource = r[0];
    request.id = r[1];
    return request;
  },

  createArticles: response => {
    let apiData = JSON.parse(response).response.results;
    for (let i = 0; i < apiData.length; i++) {
      const element = apiData[i];

      let article = new Article(
        element.webTitle,
        element.fields.thumbnail,
        element.webUrl
      );
      list.addArticle(article);
    }
    return list;
  },

  outputSummary: (id, summary) => {
    let sentences = summary.split('\n');
    let html = '';
    html += `<div class="card" style="width: 30rem;">`;
    html += `<div class="card-body">`;
    html += `<h5 class="card-title"> ${list.list[id].text}</h5>`;
    html += `</br>`;
    for (let sentence of sentences) {
      html += `<p class="card-text"> ${sentence}</p>`;
    }
    html += `<a href="${list.list[id].url}" class="card-link">Full article</a>`;
    html += `</div>`;
    html += `</div>`;

    document.getElementById('articles').innerHTML = html;
  },

  getLink: id => {
    return list.list[id].url;
  },

  outputArticlesHTML: list => {
    let html = '';
    for (let i = 0; i < list.length; i++) {
      const element = list[i];

      html += `<div class="card mb-3"  id="article">`;
      html += `<div class="card-body">`;
      html += `<img class="card-img-top" src="${
        element.image
      }" alt="" height=50% width=50%>`;
      html += `<h5 class="card-title">${element.text}</h5>`;
      html += `<a href="${
        element.url
      }" class="btn btn-primary" style="margin-right:10px">Full article</a>`;
      html += `<a href="#summary/${
        element.id
      }" id="summary" class="btn btn-primary">Summary</a>`;
      html += `</div>`;
      html += `</div>`;
    }

    document.getElementById('articles').innerHTML = html;
  }
};

export default Utils;
