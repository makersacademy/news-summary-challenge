import keys from '../var.js'; // eslint-disable-line

const app = document.getElementById('root');
const request = new XMLHttpRequest(); // eslint-disable-line
request.open(
  'GET',
  `https://content.guardianapis.com/search?order-by=newest&page-size=20&show-fields=body&q=technology&api-key=${
    keys.GUARDIAN_KEY
  }`,
  true,
);
request.onload = function () {
  // Begin accessing JSON data here
  const data = JSON.parse(this.response).response;
  if (request.status >= 200 && request.status < 400) {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const h2 = document.createElement('h2');
    h2.setAttribute('onclick', 'show(1)');
    h2.textContent = data.content.webTitle;

    const p = document.createElement('p');
    p.setAttribute('class', 'body-1');
    p.toggleAttribute('hidden');
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
