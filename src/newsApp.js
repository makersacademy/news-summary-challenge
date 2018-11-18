function creatmode(element) {
  return document.getElementById(element);
}

let get_news = creatmode('get_news'),
headlines = creatmode('headlines'),
articles = creatmode('articles');

const controller = new NewsSummary();
controller.shownews();

get_news.addEventListener('click', function() {
  headlines.innerHTML = renderHeadlines(controller.allHeadlines)
})

headlines.addEventListener('click', function() {
  setTimeout(function(){
    articles = (window.location.hash.split('/'))
    artlicle_id = articles.slice(-1)[1]
  }, 10);
})
