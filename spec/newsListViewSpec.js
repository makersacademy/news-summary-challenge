"use strict"

function returnsAllHTMLNewsItems() {

  var newsListView = new NewsListView();
  newsListView.newsList.add("this is the first news item")
  newsListView.newsList.add("this is the second news item")

  console.log(newsListView.newsList.all())
  console.log(newsListView.displayHTML())


 assert.isTrue( newsListView.displayHTML() === "<ul><li><div><a href='#0'>this is the first ne</a></div></li><li><div><a href='#1'>this is the second n</a></div></li></ul>");

};

returnsAllHTMLNewsItems();
