var articles = []

var today = getTodaysDate();

window.onload = function() {
  getCurrentTime();
  setTodaysDate();
  getHeadlines();
}

window.addEventListener("hashchange", function(e) {
  let id = window.location.hash.split("#")[1];
  setModalHTML(id);
  displayModal();
})

function getTodaysDate() {
  let todaysDate = new Date().toISOString();
  return todaysDate.substring(0, 10);
}

function getCurrentTime() {
  let d = new Date();
  let h = doubleDigits(d.getHours());
  let m = doubleDigits(d.getMinutes());
  let currentTime = `${h}:${m}`
  console.log(`getting time, current time is ${currentTime}`)
  document.getElementById('header-title').textContent = `Your News Summary at ${currentTime}`
}

// Make the hours / minutes two digits
function doubleDigits(n) {
  if (n < 10) {
    n = "0" + n;
  }
  return n;
}

function setTodaysDate() {
  let todaysDate = new Date().toDateString();
  document.getElementById('date').innerHTML = `${todaysDate}`;
}

// This is the function I used to avoid using (and therefore maxing out) the offical API key.
function getTempHeadlines() {
  const HEADLINE_REQUEST = `https://content.guardianapis.com/search?from-date=${today}&to-date=${today}&show-fields=thumbnail&api-key=test`;
  fetch(HEADLINE_REQUEST).then(function(response) {
    response.json().then(function(json) {
      let headlineArray = json.response.results
      storeArticles(headlineArray);
      renderHeadlines(headlineArray);
    });
  });
}

// In final testing this didn't bring pictures through and now doesn't work at all. Perhaps something to do with the number of requests maxed out? The request URL matches exactly the one
// above, minus the API key as instructed in the news-summary-api instructions.
function getHeadlines() {
  const HEADLINE_REQUEST = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=https://content.guardianapis.com/search?from-date=${today}&to-date=${today}&show-fields=thumbnail`;
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
    createArticleDiv(index);
    setArticleHTML(article, index);
  });
}

function createArticleDiv(index) {
  let articleDiv = document.createElement('div');
  articleDiv.id = index;
  articleDiv.className = "article";
  document.getElementById('headlines').appendChild(articleDiv);
}

function setArticleHTML(article, index) {
  let image = getImage(article);
  let headlineHTML =
    `<h1 class="headline">
      <a href="#${index}">
      <img src="${image}" alt="Image Unavailable" style="font-size: small">
      ${article.webTitle}
      </a>
    </h1>`;
  document.getElementById(index).innerHTML = `${headlineHTML}`;
}

function getImage(article) {
  if (!article.fields) {
    return "Image Unavailable";
  } else {
    return article.fields.thumbnail;
  };
}

function getSummarization(articleUrl) {
  const AYLIEN_REQUEST = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleUrl}`
  fetch(AYLIEN_REQUEST).then(function(response) {
    response.json().then(function(data) {
      document.getElementById('modal-summary').innerHTML = data.sentences;
    });
  });
}

function setModalHTML(id) {
  let article = articles[id];
  let headlineLinkHTML = `<a href="${article.webUrl}" target="_blank">${article.webTitle}</a>`;
  document.getElementById('modal-headline').innerHTML = headlineLinkHTML;
  getSummarization(article.webUrl);
  document.getElementById('modal-image').innerHTML = `<img src="${article.fields.thumbnail}" alt="Image Unavailable">`
}

function displayModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "block";
  exitModal();
}

function exitModal() {
  document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
    history.replaceState(null, null, ' '); // this removes the hash from the url
  }
  window.onclick = function(event) {
    let gifDiv = document.getElementsByClassName("anchorman-gif")[0];
    if (event.target == modal || event.target == gifDiv) {
      modal.style.display = "none";
      history.replaceState(null, null, ' ');
    }
  }
}
