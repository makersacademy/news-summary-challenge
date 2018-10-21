// add function
/*  add("Wow this is such a cool article")
    news = []
    expect(News).toInclude("Wow this is such a cool articles")

// show(article) function
//
// summarize function
//   result.title
//
list
*/

function News(){
};

News.prototype.add = function (){};


const ul = document.getElementById('root');
const url = 'https://content.guardianapis.com/search?from-date=2018-10-21&api-key=e205e271-3e30-497e-b8cc-d55897d51fe3&show-fields=thumbnail'

fetch(url)
.then(response => response.json())
.then(data => {
  data.response.results.forEach(article => {
    const title = document.createElement('h1');
    title.textContent = article.webTitle

    const image = document.createElement('img');
    image.src = article.fields.thumbnail

    document.getElementById('root').innerHTML += title.innerHTML
    document.getElementById('root').appendChild(image);

  })

})
.catch(error => console.error(error))
