let newsCollector = []

const getHeadlines = async () => {
    const endpoint = 'https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&page-size=20&api-key=test'
    try { const response = await fetch(endpoint, {cache: 'no-cache'}); 
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.response.results
    }
    } catch (error) {
      console.log(error)
  }
} 

const headlinesBox = document.querySelector("#headlines-container");

function format(headlines) {
     let count = 1
     headlines.forEach(news => {
        let link = news.apiUrl.replace('https', 'http')
        let web = news.webUrl.replace('https', 'http')
        let imageLink = news.fields.thumbnail
        headline = new News(news.webTitle, link, web, imageLink, count)
        newsCollector.push(headline)
        const div = document.createElement("div"); 
        div.classList.add("headline"); 
        div.setAttribute("id", headline.id);
        div.innerHTML = `                                                 
                <a href="#${headline.id}"><img src="${headline.imageLink}" width="300"></a>
                <br>
                <a href="#${headline.id}">${headline.title}</a>
        `;
        headlinesBox.appendChild(div);
        count++
     })
}

const getSummary = async () => {
    const endpoint = 'https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/extract?url='
    try { const response = await fetch(endpoint, {cache: 'no-cache'}); 
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.response
    }
    } catch (error) {
      console.log(error)
  }
}

function loadHeadlines() {
    getHeadlines()
    .then(results => {
      format(results);
    })
    .catch(err => console.log(err))
  }

  document.addEventListener("DOMContentLoaded", loadHeadlines);
  makeURLChangeShowNewsForCurrentPage();
