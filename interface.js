var articles = []

var today = getTodaysDate();

window.onload = function() {
  console.log(`loaded`)
  getCurrentTime();
  setTodaysDate();
  // API WORKING! USE getTempHeadlines in console for now.
  // getHeadlines();
}

function getTodaysDate() {
  let todaysDate = new Date().toISOString();
  return todaysDate.substring(0, 10);
}

function getCurrentTime() {
  let d = new Date();
  let currentTime = `${d.getHours()}:${d.getMinutes()}`
  console.log(`getting time, current time is ${currentTime}`)
  document.getElementById('header-title').textContent = `Your News Summary at ${currentTime}`
}

function setTodaysDate() {
  let todaysDate = new Date().toDateString();
  document.getElementById('date').innerHTML = `${todaysDate}`;
}

function getTempHeadlines() {
  const HEADLINE_REQUEST = `https://content.guardianapis.com/search?from-date=${today}&to-date=${today}&show-fields=thumbnail&api-key=test`;
  fetch(HEADLINE_REQUEST).then(function(response) {
    response.json().then(function(json) {
      let headlineArray = json.response.results
      console.log(headlineArray); // returned as an array of hashes. Need to retrieve .webTitle
      storeArticles(headlineArray);
      renderHeadlines(headlineArray);
    });
  });
}

function getHeadlines() {
  const HEADLINE_REQUEST = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=${today}&to-date=${today}`;
  fetch(HEADLINE_REQUEST).then(function(response) {
    response.json().then(function(json) {
      let headlineArray = json.response.results
      storeArticles(headlineArray);
      renderHeadlines(headlineArray);
    });
  });
}

function storeArticles(data) {
  data.forEach(function(article) {
    articles.push(article);
  });
}

function renderHeadlines(data) {
  data.forEach(function(article, index) {
    let articleDiv = document.createElement('div');
    let id = `${index}`;
    articleDiv.id = id;
    articleDiv.className = "article";
    let headlineHTML = `<h1 class="headline"><a href="#${id}">${article.webTitle}</a></h1>`;
    let headlineImageHTML = `<img src="${article.fields.thumbnail}" alt="Article Thumbnail">`
    document.getElementById('headlines').appendChild(articleDiv);
    document.getElementById(id).innerHTML = `${headlineImageHTML}${headlineHTML}`;
  });
}

function getSummarization(articleUrl) {
  const AYLIEN_REQUEST = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleUrl}`
  fetch(AYLIEN_REQUEST).then(function(response) {
    response.json().then(function(data) {
      document.getElementById('modal-summary').innerHTML = data.sentences;
    });
  });
  // API WORKING - here is temp solution.
  // document.getElementById('modal-summary').innerHTML = "API working. Here are some temporary sentences!";
}

function setModalHTML(id) {
  console.log(`setting the ModalHTML...`)
  let article = articles[id];
  console.log(`article is ${article}`)
  let headlineLinkHTML = `<a href="${article.webUrl}" target="_blank">${article.webTitle}</a>`;
  console.log(`headlinelinkhtml is ${headlineLinkHTML}`);
  document.getElementById('modal-headline').innerHTML = headlineLinkHTML;
  getSummarization(article.webUrl);
  document.getElementById('modal-image').innerHTML = `<img src="${article.fields.thumbnail}" alt="Article Thumbnail">`
}

window.addEventListener("hashchange", function(e) {
  let id = window.location.hash.split("#")[1];
  setModalHTML(id);
  displayModal();
})

function displayModal() {
  console.log(`displaying the modal...`)
  let modal = document.getElementById("modal");
  console.log(`modal is ${modal}`)
  modal.style.display = "block";
  exitModal();
}

function exitModal() {
  console.log(`in the exit Modal method...`)
  document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
    history.replaceState(null, null, ' '); // this removes the hash from the url
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      history.replaceState(null, null, ' ');
    }
  }
}


// function createHeadlineLink(article, id) {
//   let headlineHash = document.createElement('a');
//   headlineHash.href = `#${id}`;
// }
