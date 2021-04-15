window.alert("This is app.js")

// So API fetch set up and working correctly for the url entered. This gives us information which we
// are pushing into the headlines array

// for the purposes of testing we have 2 key/value pairs in the headlines array, this allows us to
// test the renderhealines function which iterates through the headlines array and
// prints the information to the page.

let headlines = [{'webTitle': "This is the headline", 'body': "This is the body of the article"}]

function renderHeadlines() {
  let innerHTML = "";
  headlines.forEach(element =>  {
    let header = `<h2>${element.webTitle}</h2>`
    innerHTML += header
  });
  let headerList = document.getElementById('headline-text')
  headerList.innerHTML = innerHTML;
};

function retrieveHeadlines() {
  // url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/headlines?show-fields=body"
  const url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
  getapi(url, {})
  .then(data => {
    content = data
    headlines.push(content)
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
