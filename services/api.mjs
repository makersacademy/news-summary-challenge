/* eslint-disable no-undef */
/* eslint-disable no-console */
import Utils from './helper-methods.mjs';

let api = {
  getArticles: function() {
    let category = 'politics';
    let url = `http://localhost:5000/articles?category=${category}`;
    let xhr = new XMLHttpRequest();

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

  getSummary: function(articleUrl) {
    console.log('here');
    // let articleUrl = url;
    console.log(articleUrl);
  }
};

export { api };
