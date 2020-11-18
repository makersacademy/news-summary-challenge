// const { Article } = require("./news-model");

(function(exports){
  function loadingTest(){
    var news = new Article();

    if(news.loading != 'Alex Salmond speech'){
      throw new Errow ('has loaded')
    };
  }
loadingTest();
})();