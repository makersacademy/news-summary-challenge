// window.alert("This is app.js")

// So API fetch set up and working correctly for the url entered. This gives us information which we
// are pushing into the headlines array

// for the purposes of testing we have 2 key/value pairs in the headlines array, this allows us to
// test the renderhealines function which iterates through the headlines array and
// prints the information to the page.

// let headlines = [{'webTitle': "This is the headline", 'body': "This is the body of the article"}]
let  headlines = []
let summary = []

function renderHeadlines() {
  htmlstr="";
  headlines.map((element, index) => {
    htmlstr += `<button class='headline-box' id='headline${index}'><img id='headline-picture' src='${element.thumbnail}'><div id='headline-text'>${element.webTitle}</div>`
  })
  document.querySelector('.articles').innerHTML=htmlstr;
}

function clickOnSummary() {
  document.querySelector('.articles').addEventListener("click", renderSummary())
}

function renderSummary() {
  htmlstr="";
  headlines.map((element, index) => {
    htmlstr += `<button class='headline-box' id='headline${index}'><img id='headline-picture' src='${element.thumbnail}'>`
    console.log(htmlstr)
    console.log(headlines)
  })
  innerhtml="";
  summary.map((element, index) => {
    innerhtml += `<button class='headline-box' id='headline${index}'><div id='headline-text'>${element.sentences.join(' ')}</div>`
    console.log(innerhtml)
    console.log(summary)
  })
  document.querySelector('.articles').innerHTML=htmlstr;
  document.querySelector('.articles').innerHTML=innerhtml;
}

// above method not working. Trying to get it to iterate through the headlines and summaries arrays and print the summary and picture to the page. currently not calling the method properly

function mockRetrieveHeadlines() {
    headlines.push(content)
    headlines.push(content)
    console.log(headlines[0].webTitle)
  };

function mockRetrieveSummary () {
  summary.push(summaries)
  console.log(summary[0].sentences)

}

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

function retrieveSummary () {
  const aylienurl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + headlines[0].webUrl
  getapi(aylienurl, {})
  .then(data => {
    body = data
    summary.push(body)
    console.log(body)
    console.log(summary[0])
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

let summaries = {
  sentences: [["Alex Salmond has been speaking out after a week of attacks over whether an independent Scotland would be able to keep the pound or remain in the EU. Here are the key points from the Scottish first minister\’s speech:"],
["Salmond said George Osborne’s arguments against Scotland keeping the pound were based on a “caricature” of macroeconomic policy. Many of the issues Osborne had raised had already been answered by the fiscal commission working group, a group of advisers analysing the issues an independent Scotland would have to deal with. London-based financial assets would always have to be backed by London even if Scotland were independent, he said. If Osborne did not allow Scotland to share the pound he"], ["would be in effect imposing a “George tax” of hundreds of millions of pounds on businesses in the remaining UK."],
["He renewed his threat to reject Scotland’s share of the UK’s debt if Edinburgh did not receive its share of the UK’s assets, including the Bank of England ie the currency."],
["He said he was confident the EU would find a pragmatic way to allow Scotland to become a member. To not do so would go against the grain of the union’s democratic values. The real threat to Scotland’s place in the EU came from the Tories’ plans to hold a UK-wide in/out referendum, Salmond said."],
["He said that politically it had been a mistake for Labour and the Liberal Democrats to team up with the Conservatives to try to tell Scotland what it could and could not do. But he was sure that after a yes vote negotiations between an independent Scotland and the rest of the UK would become constructive again as economic sense and self-interest prevailed."],
["In Osborne’s speech, the chancellor referred to an independent Scotland as a foreign country, Salmond recalled - but the rest of the UK would never be a foreign country to Scots, the first minister said."],
["I’ll look at how the speech went down in Scotland and the rest of the UK now."]]
}

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
