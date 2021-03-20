'use strict';

const newsApi = "http://content.guardianapis.com/search?section=uk-news&show-elements=image&api-key=test";
const summaryApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=";
const guardian = summaryApi + newsApi;

const getGuardianData = () => { return fetch(guardian) };

const apiToHtmlList = (data) => { data.response.results.forEach((headline) => {
  let headlineNews = headline.webTitle
  let articleUrl = headline.webUrl
  document.getElementById('view-headlines').innerHTML += `<li>${headlineNews}</li><br>`
  })
};

const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => { 
  console.log(guardian);
  getGuardianData().then(response => { response.json().then(data => {
  const guardianData = data 
  apiToHtmlList(guardianData)
   debugger
  })
  
  })
});






