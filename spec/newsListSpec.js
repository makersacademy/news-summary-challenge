'use strict'

function returnsAllNewsItems() {

  var newsList = new NewsList();


  assert.isTrue(Array.isArray(newsList.all()));

};

returnsAllNewsItems();


function returnsAllNewsItems() {

  var newsList = new NewsList();

  newsList.add("first news item")
  newsList.add("second news item")
  console.log(newsList.all())


  assert.isTrue(Array.isArray(newsList.all()));

};

returnsAllNewsItems();
