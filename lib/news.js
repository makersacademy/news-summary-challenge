class News {
  constructor() {
    this.API = "3344397a-83f4-4ac1-a65e-1cf577be3167";
  }

  getHeadlines() {
    function getNewsData() {
      return fetch(`https://content.guardianapis.com/politics?api-key=3344397a-83f4-4ac1-a65e-1cf577be3167`).then(response => {
        return response.json();
      })
    }
    function renderData(data) {
      let titleHtml = `<div><h2>${data.response.content.webTitle}</h2></div>`;
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
}