class Grauniad {
  constructor () {
    this.results = [];
  }


  getResults() {
  const key = config.GUARDIAN_KEY  
  var request = new XMLHttpRequest();
  request.open('GET', 
  "https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=${key}&show-fields=thumbnail"
  , true);

    request.onload = function () {
    var data = JSON.parse(this.response);
    var results = data.response.results
      if (request.status >= 200 && request.status < 400) {
        this.results.push(results);
        console.log("Success?");
      } else {
        console.log("error");
      }
    }
  
    request.send();
  }
  
  renderHeadlines() {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    this.results[0].forEach((article) => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = article.title;

      const p = document.createElement('p');
      article.description = article.description.substring(0, 300);
      p.textContent = `${article.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    })
    return container;    
  }
}