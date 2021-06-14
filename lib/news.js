class News {
  getHeadlines() {
    function getNewsData() {
      return fetch(`https://content.guardianapis.com/politics?api-key=3344397a-83f4-4ac1-a65e-1cf577be3167`).then(response => {
        return response.json();
      })
    }
    function renderData(data) {
      let titleHtml = `<div><h2><a href="#${data.response.content.webUrl}">${data.response.content.webTitle}</a></h2></div>`;
      return titleHtml;
    }
    function getPostData() {
      getNewsData().then(posts => {
        for(let i = 0; i < posts.response.results.length; i++) {
          fetch(`${posts.response.results[i].apiUrl}?show-fields=body&api-key=3344397a-83f4-4ac1-a65e-1cf577be3167`).then(response => {
            return response.json().then(post => {
              let rendered = renderData(post);
              document.getElementById("headlines").innerHTML += rendered
            })
          })
        }
      })
    }
    getPostData();
  }

  showArticleSummary() {
    let articleUrl = location.hash.split("#")[1]
    console.log(articleUrl)
    fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleUrl}`).then(response => {
      return response.json().then(post => {
        let rendered = render(post);
        console.log(rendered)
        document.getElementById("article").innerHTML = rendered
      })
    })
    function render(data) {
      let summary = data.sentences.join(" ")
      return `<p>${summary}</p>`
    }
  }
}