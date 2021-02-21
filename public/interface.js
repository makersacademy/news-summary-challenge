// When I start on the api i will just add each relevant piece of data (title, summary, imageUrl etc to headlines array below)

let headlines = [["BREAKING NEWS 1", "NEWS SUMMARY 1", "http://public.media.smithsonianmag.com/legacy_blog/smiley-face-1.jpg", "https://www.theguardian.com/uk"], ["BREAKING NEWS 2", "NEWS SUMMARY 2", "https://ih1.redbubble.net/image.499518885.1931/flat,750x1000,075,f.u1.jpg", "https://www.theguardian.com/uk"], ["BREAKING NEWS 3", "NEWS SUMMARY 3", "https://images.emojiterra.com/google/android-11/512px/1f634.png", "https://www.theguardian.com/uk"]]

showHeadlines = () => {
  headlines.forEach(headline =>
    document
    .getElementById("headlines").innerHTML += `<div id="headline"><a href=#${headlines.indexOf(headline)}>` + headline[0] + `</a>`
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

// function getPostData() {
//   return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body").then(response => {
//     return response.json();
//   })
// }

// function getTitle() {
//   getPostData().then(post => {
//     console.log(post)
//     return post.response.content.webTitle
//   });
// }

// let test = getTitle()
// console.log(test)
