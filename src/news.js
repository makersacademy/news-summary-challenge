
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

        var newsContainer = document.createElement("article")
        newsContainer.classList.add("newsContainer")

        var newsTitle = document.createElement("h1")
        newsTitle.innerHTML = oneNews.response.content.webTitle

        var newsContent = document.createElement("p")
        newsContent.innerHTML = oneNews.response.content.fields.body

        document.querySelector(".newsWrap").appendChild(newsContainer);
        document.querySelector(".newsContainer").appendChild(newsTitle);
        document.querySelector(".newsContainer").appendChild(newsContent);

        console.log(oneNews.response.content.fields.body)
      })
     }
   })

  }
