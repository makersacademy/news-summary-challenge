'use strict'

function returnsAllNewsItems() {

  var newsList = new NewsList();


  assert.isTrue(Array.isArray(newsList.all()));

};

returnsAllNewsItems();
