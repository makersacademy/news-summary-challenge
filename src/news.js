require('dotenv').config()

class News {

  constructor(){
    this.headlines = [];
  }

  add(headline){
    return this.headlines.push(headline);
  }


// function getPostData() {
//   return fetch("https://content.guardianapis.com/search?api-key=2a0b05ae-00bc-4442-be8c-e2d3e6c6c644").then(response => {
//     return response.json();
//   })
// }
//
// function renderPost(postData) {
//   let postHeadingHTML = `<h1>${postData.webTitle}</h1>`;
//   let postWithLinebreaksHTML = postData.webUrl.replaceAll("\n", "<br>\n");
//   let postBodyHTML = `<p>${postWithLinebreaksHTML}</p>`;
//   return `${postHeadingHTML}${postBodyHTML}`;
// }
//
// getPostData().then(post => {
//   let rendered = renderPost(post);
//   document.getElementById("main").innerHTML = rendered;
// });



}
