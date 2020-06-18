document.addEventListener('DOMContentLoaded', function() {
        var papers;
        var api_key = thing['PERSONAL_API_KEY'];
        var api_url = `http://content.guardianapis.com/search?api-key=${api_key}&show-fields=thumbnail,headline,bodyText,shortUrl,thumbnail`
        fetch(api_url).then( function(response) {
          return response.json()
        }).then(data=> {
          console.log(data.response.results);
          papers = new newsReel(newsItem,data.response.results);
          papers.articleParser();
          for (let index = 0; index < papers.newsPieces.length; index++) {
            const article = papers.newsPieces[index],
            container = document.createElement("div"),
            title = article.getHeadlineHTML(),
            text = article.getbodyTextHTML(),
            thumbnail = article.getThumbnailHTML();
            container.id = index;
            container.classList.add('article-shell')
            shell = document.getElementById('news-spot');
            shell.appendChild(container);
            container.appendChild(thumbnail);
            container.appendChild(title);
            container.appendChild(text);
          }
          return data.results;
        })
})

