(function(exports){
  function newsArticle(){
    
    var article = new Article('On Todays Headline');

    if(article.newsArticle !== 'On Todays Headline'){
      throw new Error ('No article available')
    }
  };
  newsArticle();
})();

// (function(exports){
//   function notes(){
//     var words = new Notes('My favourite language is JavaScript');

//     if(words.text !== 'My favourite language is JavaScript' ){
//       throw new Error('You do not like JS')
//     }
//   };
//   notes();
// })();