'use strict';

const newsApi = "http://content.guardianapis.com/search?show-fields=all&section=uk-news&api-key=test";
const summaryApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=";

const guardian = summaryApi + newsApi;

const getGuardianData = () => { return fetch(guardian) };

const headlineArray = []

const dataToArray = (data) => { return headlineArray.push(data.response.results) }

const apiToHtmlList = (array) => { array[0].forEach((headline) => {
  let headlineNews = headline.fields.headline
  let url = headline.webUrl
  let thumbnail = headline.fields.thumbnail
  let bodyShort = headline.fields.trailText
  document.getElementById('view-headlines').innerHTML += `<li><h3>${headlineNews}</h3><br>${bodyShort}<a href=${url}><br>full article</a></li><br><br><img src="${thumbnail}"><br><br>  `
  })
};

const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => { 
  getGuardianData().then(response => { response.json().then(data => {
    const guardianData = data 
    dataToArray(guardianData)
    apiToHtmlList(headlineArray)
  });
 });
 
});

