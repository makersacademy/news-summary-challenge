"use strict";

function callAPI(fetchMethod) {
  let results = fetchMethod("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body")
  console.log(results);
}
