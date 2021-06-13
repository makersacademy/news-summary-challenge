'use strict';

class News {
  constructor() {
    this.API_KEY = config.API_KEY
  }

  

  getPostTitle() {
    fetch("https://content.guardianapis.com/search?api-key=" + this.API_KEY).then(response => {
        return response.json().then(posts => {
           for(let i = 0; i < 10; i++) {
             fetch(`${posts.response.results[i].apiUrl}?show-fields=body&api-key=40ee0722-3b29-454d-939f-69a9ebec8e2f`).then(response => {
                return response.json().then(post => {
                  let rendered = renderPost(post);
                  document.getElementById(`main${i}`).innerHTML = rendered;
              })
            }) 
          } 
        })
      })
    function renderPost(postData) {
      let postTitleHTML = `<div class="articleHead"><h1>${postData.response.content.webTitle}</h1><div class="cats"><div class="mainCat"><p>${postData.response.content.pillarName}</p></div><div class="subCat"><p>${postData.response.content.sectionName}</p></div></div></div>`
      let postUrlLink = `<div class="buttons"><button><a target="_blank" href="${postData.response.content.webUrl}"><i class="fas fa-external-link-alt"></i> Visit</a></button><button class="summary" id="${postData.response.content.apiUrl}"><i class="fas fa-book-open"></i> Summary</button></div>`
      return `${postTitleHTML}${postUrlLink}`
    }
  }

  summarisedText() {
    fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html`).then(response => {
      return response.json().then(summary => {
        let renderingText = renderText(summary)
        document.getElementById('main-article').innerHTML = renderingText;
      })
    })
    function renderText(postText) {
      let text = `<p>${postText.text}</p>`
      return `<p>${text}</p>`
    }
  }

}