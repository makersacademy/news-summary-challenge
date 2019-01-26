const app = document.querySelector(".root")
const header = document.querySelector(".header")
const appKey = config.GUARDIAN_KEY

const logo = document.createElement("img")
logo.src= 'guardian-logo.png'

const intro = document.createElement("h2")
intro.innerText = "Welcome to a roundup of Technology news from the Guardian. You can search for any tech topic using the search bar below:"

const container = document.createElement('div');
container.setAttribute('class', 'container');

header.appendChild(logo);
header.appendChild(intro)
app.appendChild(container);

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt").value;
let searchContent = searchInput.value
let searchText = searchInput.replace(" ", "%20")

searchButton.addEventListener("click", searchGuardianArticles)

function searchGuardianArticles() {
  let searchInput = document.getElementById("search-txt").value;
  let searchText = searchInput.replace(" ", "%20")

  if (searchInput.value === "") {

  }else {
    let searchLink = `https://content.guardianapis.com/search?q=${searchText}&format=json&show-fields=trailText,headline,thumbnail,short-url,body,byline,publication&section=technology&show-refinements=all&page=1&page-size=20&order-by=relevance&api-key=${appKey}`
    httpRequestAsync(searchLink, theResponse);
  }
}

function httpRequestAsync(url, callback)
{
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => { 
  if (httpRequest.readyState == 4 && httpRequest.status == 200)
    callback(httpRequest.responseText);
  }
  httpRequest.open("GET", url, true);
  httpRequest.send();
}

function theResponse(fromGuardian) {
  let data = JSON.parse(fromGuardian)
  let results = data.response.results

    results.forEach(article => {
      // Create a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      var fields = article.fields

      // Create an h1 and set the text content to the article headline
      const h1 = document.createElement('h1');
      h1.textContent = fields.headline;

      // Create an img and set the source to be the article's thumbnail
      const thumbnail = document.createElement('img')
      thumbnail.src = fields.thumbnail

      // Create a p and set the content to be the journalist's name
      const byline = document.createElement('p')
      byline.innerHTML = fields.byline

      // Create a p and set the text content to the film's description
      const p = document.createElement('p');
      var articleBody = fields.body.substring(0, 300); // Limit to 300 chars
      p.innerHTML = `${articleBody}...`; // End with an ellipses

      // Create a link that goes to the Guardian site with the full article
      const a = document.createElement('a')
      a.setAttribute('href', fields.shortUrl)
      a.innerText = "Click here to read more"

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an h1 and a p
      card.appendChild(h1);
      card.appendChild(thumbnail)
      card.appendChild(byline)
      card.appendChild(p);
      card.appendChild(a)
    })
}
