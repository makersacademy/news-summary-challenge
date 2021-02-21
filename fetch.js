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
