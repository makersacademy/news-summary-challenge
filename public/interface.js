// Once i get the api's working i will pass the same dataa (title, summary, imageUrl etc) to through instead of the headlines array.

let headlines = [["BREAKING NEWS 1", "NEWS SUMMARY 1", "http://public.media.smithsonianmag.com/legacy_blog/smiley-face-1.jpg", "https://www.theguardian.com/uk"], ["BREAKING NEWS 2", "NEWS SUMMARY 2", "https://ih1.redbubble.net/image.499518885.1931/flat,750x1000,075,f.u1.jpg", "https://www.theguardian.com/uk"], ["BREAKING NEWS 3", "NEWS SUMMARY 3", "https://images.emojiterra.com/google/android-11/512px/1f634.png", "https://www.theguardian.com/uk"]]

showHeadlines = () => {
  headlines.forEach(headline =>
    document
    .getElementById("headlines").innerHTML += `<div id=headline${headlines.indexOf(headline)}><a href=#${headlines.indexOf(headline)}>` + headline[0] + `</a>`
    + `<div id=photo${headlines.indexOf(headline)}></div>` 
    + `<div id=news-blurb${headlines.indexOf(headline)}></div>` 
    + `<a href=${headline[3]}><button>Visit full article</button></a></div>`
    + "<br>");
}

makeImage = () => {
  headlines.forEach(headline =>
    addImage(headline[2], headlines.indexOf(headline)))
}

addImage = (src, i) => {
  let img = document.createElement("img");
  img.src = src;
  img.width = 150;
  img.height = 75;
  document.getElementById(`photo${i}`).appendChild(img);
} 

showHeadlines()
makeImage()

// --- API LOGIC 

// function getNewsData() {
//   return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body").then(response => {
//     return response.json();
//   })
// }

// function renderNews(newsData) {
//   let newsTitleHTML = `<div id=headline></div>`
// }


// function getTitle() {
//   getPostData().then(post => {
//     console.log(post)
//     console.log(post.response.content.webTitle)
//     return post
//   });
// }

// function getSummaryData() {
//   return fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live").then(response => {
//     return response.json();
//   })
// }

// function getSummary() {
//   getNewsData().then(news => {
//     console.log(news)
//   });
// }

// getSummary()