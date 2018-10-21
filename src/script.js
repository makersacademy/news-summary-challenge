const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'testApi.txt', true);
//works with real request:
// request.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body,headline,thumbnail", true);

request.onload = function () {

  var data = JSON.parse(this.response).response.results;

  if (request.status >= 200 && request.status < 400) {
    data.forEach((article) => {

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h2 = document.createElement('h2');
    h2.textContent = article.webTitle;

    const p = document.createElement('p');
    article.summary = article.fields.body.substring(0, 300);
    p.innerHTML = `${article.summary}...`

    container.appendChild(card);

    card.appendChild(h2);
    card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
