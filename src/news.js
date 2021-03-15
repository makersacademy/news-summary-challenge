
var newsWrap = document.querySelector(".newsWrap")

showAllArticles();

function showAllArticles(){


  fetch("https://content.guardianapis.com/search?page=2&q=debate&api-key=test")
  .then(res => res.json())
  .then(news => {
    for( let i = 0; i < news.response.results.length ; i++) {
      console.log(news.response.results[i].id)
      fetch("http://content.guardianapis.com/" + `${news.response.results[i].id}` + "?show-fields=body&api-key=test")
      .then(res => res.json())
      .then(oneNews => {
        console.log(oneNews.response.content.webTitle)

        var newsContainer = document.createElement("article");
        newsContainer.setAttribute("id", `${oneNews.response.content.webTitle}`);
        newsContainer.classList.add('newsContainer');

        var newsTitle = document.createElement("a");
        newsTitle.innerHTML = oneNews.response.content.webTitle
        newsTitle.setAttribute("href", "#" + `${oneNews.response.content.id}`);

        var newsContent = document.createElement("p");
        newsContent.innerHTML = oneNews.response.content.fields.body

        document.querySelector(".newsWrap").appendChild(newsContainer);
        document.getElementById(`${oneNews.response.content.webTitle}`).appendChild(newsTitle);
        document.getElementById(`${oneNews.response.content.webTitle}`).appendChild(newsContent);

        console.log(oneNews.response.content.fields.body)
      });
     }
   });
  }

  makeUrlChangeShowArticleForCurrentPage();

      function makeUrlChangeShowArticleForCurrentPage() {
        window.addEventListener("hashchange", showArticleForCurrentPage);
      };

      function showArticleForCurrentPage() {
        showArticle(getArticleFromUrl(window.location));
      };

      function getArticleFromUrl(location) {
        return location.hash.split("#")[1];
      };

      function showArticle(article) {


        fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + "https://www.theguardian.com/" + article )
          .then(res => res.json())
          .then(summary => {
            console.log(summary)
            document.getElementById('newsWrap').innerHTML = summary.sentences
          });
      };
