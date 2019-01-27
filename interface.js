  guardian = new Guardian();
  guardian.requestHeadlines();
  var data = guardian.onLoad();
  console.log(data)
  arrangeResponse(data);


function arrangeResponse(response) {
  response.response.results.forEach(headline => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = headline.webTitle;

    const p = document.createElement('p');
    p.textContent = headline.webUrl;

    container.appendChild(card)
    card.appendChild(h1)
    card.appendChild(p)
  })
}
