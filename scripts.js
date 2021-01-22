const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

fetch('https://content.guardianapis.com/search?api-key=13fb806f-47f8-4b83-a397-0db0ce84ba45&show-fields=all')
.then((res) => res.json())
.then(data => {
  console.log(data)
  data.response.results.forEach((article) => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = article.fields.headline;

    const img = document.createElement('img');
    img.src = `${article.fields.thumbnail}`

    const a = document.createElement('a');
    a.href = `${article.webUrl}`
    a.innerHTML = "Click to read"

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img);
    card.appendChild(a);
  })
})
.catch((err) => {
  console.log(error);
})