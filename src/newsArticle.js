'use strict';

class Article {

  constructor(headline) {
    this.headline = headline
  }

}




// save the variables
const ul = document.getElementById('articles');
const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body'

function createNode(element) {
  return document.createElement(element); // creates element
}

function append(parent, el) {
  return parent.appendChild(el); // adds element to parent 
}
