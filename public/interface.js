'use strict';

const newsApi = "http://content.guardianapis.com/search?show-fields=all&section=uk-news&api-key=test";
const summaryApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=";

const guardian = summaryApi + newsApi;

const getGuardianData = () => { return fetch(guardian) };

const apiToHtmlList = (data) => { data.response.results.forEach((headline, index) => {
  let headlineNews = headline.fields.headline
  let url = headline.webUrl
  let thumbnail = headline.fields.thumbnail
  document.getElementById('view-headlines').innerHTML += `<li><h3>${headlineNews}</h3><br><a href=${url}>full article</a></li><br><br><img src="${thumbnail}"><br><br>  `
  })
};

const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => { 
  getGuardianData().then(response => { response.json().then(data => {
    const guardianData = data 
    apiToHtmlList(guardianData)
  });
 });
});

