
class NewsData {

  constructor() {
    this.newsArray = []
  }

  getData() {
    // Getting data from API
    const url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html";
    var dataAPI = fetch(url)
    .then(response => response.json())//response type
    .then(data => this.newsArray.push(data))
    // .then(data => console.log(data.text)); //log the data;
    return dataAPI
  }

}

// async function getData() {
  // //await the response of the fetch call
  // let response = await fetch('http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html');
  // //proceed once the first promise is resolved.
  // let data = await response.json()
  // //proceed only when the second promise is resolved
  // return data;
// }

//call the fetch function
// fetch('https://api.github.com/users')
// .then(res => res.json())//response type
// .then(data => console.log(data)); //log the data;

// const url =
// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   let news = data;
//   return news
// })
