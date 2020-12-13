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
    container.innerHTML += h1.textContent

    const p = document.createElement('p');
    p.textContent = article.fields.thumbnail;
    container.innerHTML += `<img src="${p.textContent}" />`

    const l = document.createElement('l');
    l.textContent = article.webUrl;
    console.log(article.webUrl)
    container.innerHTML += `<a href="${l.textContent}">CLICK HERE TO READ ARTICLE</a>`
  })
})


// const app = document.getElementById('root');


// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(container);

// var request = new XMLHttpRequest();
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// request.onload = function () {

//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(movie => {
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');

//       const h1 = document.createElement('h1');
//       h1.textContent = movie.title;

//       const p = document.createElement('p');
//       movie.description = movie.description.substring(0, 300);
//       p.textContent = `${movie.description}...`;

//       container.appendChild(card);
//       card.appendChild(h1);
//       card.appendChild(p);
//     });
//   } else {
//     const errorMessage = document.createElement('marquee');
//     errorMessage.textContent = `Gah, it's not working!`;
//     app.appendChild(errorMessage);
//   }
// }

// request.send();

// let catButton = document.getElementById('give-cat')

// catButton.addEventListener("click", evt => {
//     let catDiv = document.getElementById('cat-pic')
//     fetch('https://api.thecatapi.com/v1/images/search')
//     .then(res => res.json())
//     .then(cats => {
//         cats.forEach(cat => {
//             catDiv.innerHTML = `<h2> Here is a cat pic </h2>
//             <img src="${cat.url}" alt="kitty" />`
//             console.log(cats)
//         });
//     })
// })