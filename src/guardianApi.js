'use strict'

const GUARDIANKEY = "GUARDIANKEY";
const APIKEY = getApiKey();

function  getApiKey(){
  if (localStorage.getItem(GUARDIANKEY) === null){
    let key = null;
    key = prompt("Please enter your Guardian API key");
    localStorage.setItem(GUARDIANKEY, key);
  }
  return localStorage.getItem(GUARDIANKEY);
}

function requestNews(number, container, callback){
  let query = "https://content.guardianapis.com/search?api-key=" + APIKEY + "&page-size=" + number + "&show-fields=headline,trailText,thumbnail";
  fetch(query)
  .then(response =>  response.json().then(data => ({status: response.status, body: data})))
  .then(obj => callback(container, obj.body));
}
