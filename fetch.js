// function getNews() {
//   let news = []
//   data = fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body")
//     .then((response) => response.json())
//     .then((data) => {
//     console.log(data, "Success")
//     news.push(data)
//   })
//     .catch((error) => {
//     console.error("Error:", error);
//   });
// }
//
// function extractNews() {
//   let storyCount = news.length;
//   let newsItem = 0;
//   while (newsItem < storyCount) {
//     addNews(news[0].response.results[newsItem].webTitle, "This is a test")
//     newsItem += 1;
//   }
// }


text = fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=" + url)


function getText() {
  let textSummary = []
  let url = "https://www.theguardian.com/film/2021/feb/09/sex-magic-occult-art-and-acid-the-story-of-the-infamous-witch-of-kings-cross"
  text = fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url)
    .then((response) => response.json())
    .then((data) => {
    console.log(data, "Success")
    textSummary.push(data)
  })
    .catch((error) => {
    console.error("Error:", error);
  });
}

"http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize??url=https://www.theguardian.com/film/2021/feb/09/sex-magic-occult-art-and-acid-the-story-of-the-infamous-witch-of-kings-cross"

// function extractNews() {
//   let storyCount = news.length;
//   let newsItem = 0;
//   while (newsItem < storyCount) {
//     addNews(news[0].response.results[newsItem].webTitle, "This is a test")
//     newsItem += 1;
//   }
// }
