url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all"
fetch(url)
.then((res) => res.json())
.then((data) => {
  let content = data.response.results
  console.log(content)
  let output = ''
  content.forEach(function(news) {
    output += `
    <div class="news-item">
      <h2><a href="${news.webUrl}">${news.webTitle}</h2>
      <img src="${news.fields.thumbnail}" class="thumbnail">
    </div>
    `;
  })
  document.getElementById("news-feed").innerHTML = output;
})
.catch((err) => console.log(err))