console.log('ciao')

  window.onload = function() {
    // connect to the API and display the news on the page
    var controler = new Controler();
    // controler.updateDom();
    controler.displayNewsList();
    controler.displayFullArticle();
  }
