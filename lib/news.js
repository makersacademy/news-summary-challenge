class News {
  getHeadLines() {
    function getNewsData() {
      return fetch(
        `https://content.guardianapis.com/politics?api-key=028129ec-d816-4714-aff7-d05423b596fc`
      ).then((response) => {
        return response.json();
      });
    }
    function renderData(data) {
      let titleHtml = `<div><h2><a href="#${data.response.content.webUrl}">${data.response.content.webTitle}</a></h2></div>`;
      return titleHtml;
    }
    function getPostData() {
      getNewsData().then((posts) => {
        for (let i = 0; i < posts.response.results.length; i++) {
          fetch(
            `${posts.response.results[i].apiUrl}?show-fields=body&api-key=028129ec-d816-4714-aff7-d05423b596fc`
          ).then(async (response) => {
            const post = await response.json();
            let rendered = renderData(post);
            document.getElementById("headlines").innerHTML += rendered;
          });
        }
      });
    }
    getPostData();
  }
  showArticleSummary() {
    let articleUrl = location.hash.split("#")[1];
    console.log(articleUrl);
    fetch(
      `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleUrl}`
    ).then((response) => {
      return response.json().then((post) => {
        let rendered = render(post);
        document.getElementById("article").innerHTML = rendered;
      });
    });
    function render(data) {
      let summary = data.sentences.join(" ");
      return `<p>${summary}</p><br><a href="${articleUrl}" target="_blank">View full article</a>`;
    }
  }
}

