const app = document.getElementById('root');

const request = new XMLHttpRequest();
request.open(
  'GET',
  'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body',
  true,
);
request.onload = function () {
  // Begin accessing JSON data here
  const data = JSON.parse(this.response).response;
  if (request.status >= 200 && request.status < 400) {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const h2 = document.createElement('h2');
    h2.textContent = data.content.webTitle;

    const p = document.createElement('p');
    p.setAttribute('class', 'body');
    p.innerHTML = data.content.fields.body.substring(360, 500);

    app.appendChild(wrapper);
    wrapper.appendChild(h2);
    wrapper.appendChild(p);
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = "This is an automated message. 'YOU GOOFED'";
    app.appendChild(errorMessage);
  }
};

request.send();
