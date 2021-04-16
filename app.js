// window.alert("This is app.js")

// So API fetch set up and working correctly for the url entered. This gives us information which we
// are pushing into the headlines array

// for the purposes of testing we have 2 key/value pairs in the headlines array, this allows us to
// test the renderhealines function which iterates through the headlines array and
// prints the information to the page.

// let headlines = [{'webTitle': "This is the headline", 'body': "This is the body of the article"}]
let  headlines = []

function renderHeadlines() {
  htmlstr="";
  headlines.map((element, index) => {
    htmlstr += `<button class='headline-box' id='headline${index}'><img id='headline-picture' src='${element.thumbnail}'><div id='headline-text'>${element.webTitle}</div>`
  })
  document.querySelector('.articles').innerHTML=htmlstr;
}

function mockRetrieveHeadlines() {
    headlines.push(content)
    headlines.push(content)
    console.log(headlines[0].webTitle)
  };


function retrieveHeadlines() {
  // url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/headlines?show-fields=body"
  const url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=thumbnail"
  getapi(url, {})
  .then(data => {
    body = data
    headlines.push(body)
    console.log(body)
    console.log(headlines[0].response.content.webTitle)
  });
};

async function getapi(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

  });
  return response.json(); // parses JSON response into native JavaScript objects
};

let content = {apiUrl: "https://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live",
id: "politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live",
isHosted: false,
thumbnail: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/2/14/1392390229748/Alex-Salmond-012.jpg?width=780&quality=45&auto=format&fit=max&dpr=2&s=c4bce152763ddf20f14fe8ba66f8b81a",
pillarId: "pillar/news",
pillarName: "News",
sectionId: "politics",
sectionName: "Politics",
type: "liveblog",
webPublicationDate: "2014-02-17T14:10:26Z",
webTitle: "Alex Salmond speech – first minister hits back over Scottish independence",
webUrl: "https://www.theguardian.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live"}


// Below is extinct code replaced by renderHeadlines

// function renderThumbnail() {
//   innerHTML
//   headlines.forEach(element => {
//   let thumbnail = `<img src=${element.thumbnail}>`
//   innerHTML += thumbnail
//   })
//   let thumbnailList = document.getElementById('headline-picture')
//   thumbnailList.innerHTML = innerHTML;
// }
//
// function renderHeadlines() {
//   let innerHTML = "";
//   headlines.forEach(element =>  {
//     let header = `<h2>${element.webTitle}</h2>`
//     let thumbnail = `<img src=${element.thumbnail}>`
//     innerHTML += header + thumbnail
//   });
//   let headerList = document.getElementById('headline-text')
//   headerList.innerHTML = innerHTML;
//   renderThumbnail();
// };
