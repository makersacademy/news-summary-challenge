// When I start on the api i will just add each relevant piece of data (title, summary, url etc to headlines array below)

let headlines = [["BREAKING NEWS 1", "NEWS SUMMARY 1"], ["BREAKING NEWS 2", "NEWS SUMMARY 2"], ["BREAKING NEWS 3", "NEWS SUMMARY 3"]]
let imageURL = "http://public.media.smithsonianmag.com/legacy_blog/smiley-face-1.jpg";

showHeadlines = () => {
  headlines.forEach(headline =>
    document.getElementById("headlines").innerHTML += `<a href=#${headlines.indexOf(headline)}>` + headline[0] + `</a><div id=photo${headlines.indexOf(headline)}></div>` + `<a><div id=news-blurb${headlines.indexOf(headline)}></div></a>` + "<br>");
}

addImage = (src, i) => {
  let img = document.createElement("img");
  img.src = src;
  img.width = 150;
  img.height = 75;
  document.getElementById(`photo${i}`).appendChild(img);
} 

showImage = () => {
  for(let i = 0; i < headlines.length; i++){
    addImage(imageURL, i)
  }
}

showFullNews = () => {
  document.getElementById
}


showHeadlines()
showImage()


// i think i'm going to need to put the two methods above into another function that is then called
// something like
// runNewsSummary = () => {
//   showHeadlines()
//   addBlurb()
//   showImage(image will be passed here but may need to update showHeadlines too)
// }



//
// below is a button to get the picture. 
//
// showHeadlines = () => {
//   headlines.forEach(headline =>
//     document.getElementById("headlines").innerHTML += `<a href=#${headlines.indexOf(headline)}>` + headline + `</a><div id=photo${headlines.indexOf(headline)}></div>` + `<button onclick=showImage(imageURL,${headlines.indexOf(headline)})>Add smiley</button>` + "<br>");
// }