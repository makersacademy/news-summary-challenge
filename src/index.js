const Client = require('./client');
const Presenter = require('./presenter');
const client = new Client();

const run = async () => {
  const data = await client.fetchNews();
  const presenter = new Presenter(data.response.results);

  presenter.createHeadlines();

  const newsSection = document.getElementById('headlines');

  newsSection.addEventListener('click', (event) => {
    let parentElementId = event.target.parentElement.attributes.id.value;
    if (parentElementId ==! 'headlines') {
      //do something with id [parentElementId];
      console.log(parentElementId);
    }
  });
};

run();
