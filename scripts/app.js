import keys from '../var.js'; // eslint-disable-line

const app = document.getElementById('root');
const request = new XMLHttpRequest(); // eslint-disable-line
request.open(
  'GET',
  `https://content.guardianapis.com/search?show-fields=main%2Cbody&order-by=newest&page-size=30&q=technology&api-key=${
    keys.GUARDIAN_KEY
  }`,
  true,
);
request.onload = function () {
  // Begin accessing JSON data here
  const apiInfo = JSON.parse(this.response);
  const data = apiInfo.response.results;

  if (request.status >= 200 && request.status < 400) {
    data.forEach((article, index) => {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'wrapper');

      const image = document.createElement('div');
      image.innerHTML = article.fields.main;

      const h2 = document.createElement('h2');
      h2.setAttribute('onclick', `show(${index})`);
      h2.setAttribute('class', 'article__header');
      h2.textContent = article.webTitle;
      h2.innerHTML = `<a href="#${index}">${article.webTitle}</a>`;

      const p = document.createElement('p');
      p.setAttribute('class', `article__body body-${index}`);
      p.toggleAttribute('hidden');
      p.innerHTML = article.fields.body;

      app.appendChild(wrapper);
      wrapper.appendChild(h2);
      wrapper.appendChild(image);
      wrapper.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = "This is an automated message. 'YOU GOOFED'";
    app.appendChild(errorMessage);
  }

  const annoyingCaption = document.querySelectorAll('figcaption');
  annoyingCaption.forEach((caption) => {
    caption.toggleAttribute('hidden', true);
  });
};

request.send();
