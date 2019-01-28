var myKey = config.MY_KEY

class Guardian {
  constructor (request = new XMLHttpRequest()){
    this.request = request;
    this.list = [];
  };

  requestHeadlines () {
    this.request.open('Get', `https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=${myKey}`, true)
    this.request.onload = this.onLoad;
    this.request.send();

  };

    onLoad () {
       var response = JSON.parse(this.response)

        response.response.results.forEach(headline => {

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = headline.webTitle;

        const p = document.createElement('href');
        p.textContent = headline.webUrl;

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
      })

};

};
