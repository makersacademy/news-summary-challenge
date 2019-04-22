import Utils from './helper-methods.mjs';
let xhr = new XMLHttpRequest();
let api = {
  getArticles: function() {
    let category = 'politics';
    let url = `http://localhost:5000/articles?category=${category}`;

    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        let apiData = JSON.parse(xhr.response);
        //create list of articles
        let response = Utils.createArticles(apiData);
        //create and insert html of articles into <div id='articles'>
        Utils.outputArticlesHTML(response.list);
      }
    };
  },

  createSummary: function(articleId) {
    // let articleLink = articleId;

    let articleLink = Utils.getLink(articleId);

    let url = `http://localhost:5000/summary?link=${articleLink}`;

    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        let summary = xhr.response;

        Utils.outputSummary(articleId, summary);
      }
    };
  }
};

export { api };
