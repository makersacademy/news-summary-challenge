'use strict';

const newsApi = "http://content.guardianapis.com/search?page=2&q=debate&api-key=test"
const summaryApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
const guardian = summaryApi + newsApi

var guardianData = null

function getGuardianData() {
  return fetch(guardian)
};

const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => { 
  console.log(guardian)
  getGuardianData().then(response => { response.json().then(data => {
      guardianData = data
    })
  })

});


