document.getElementById('get-news').addEventListener('click', fetchNewsData);

function fetchNewsData(){
  fetch('https://content.guardianapis.com/search?api-key=f4eb11b1-0a1b-4793-8122-376a8dde0093')
  .then(response => response.json())
  .then(articles => {
    let output = '<h2>Headlines</h2>';
    output += '<ul>';
    articles.response.results.forEach(function(article) {
      output += `
      <li>
      ${article.webTitle}
      </li>
      `;
    });
    output += '</ul>'
    document.getElementById("news").innerHTML = output;
  })

};
