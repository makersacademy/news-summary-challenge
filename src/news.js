function News(){
};

News.prototype.add = function (){
  const app = document.getElementById('root');
  const url = 'https://content.guardianapis.com/search?from-date=2018-10-21&api-key=e205e271-3e30-497e-b8cc-d55897d51fe3&show-fields=thumbnail'

  fetch(url)
  .then(response => response.json())
  .then(data => {
    data.response.results.forEach(article => {
      // Create a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card')

       // Create an h1 and set the text content to the news title
      const title = document.createElement('h1');
      title.textContent = article.webTitle

      const image = document.createElement('img');
      image.src = article.fields.thumbnail

      app.appendChild(card)
      card.appendChild(image);
      card.appendChild(title);
    })

  })
  .catch(error => console.error(error))
};

news = new News
news.add()
