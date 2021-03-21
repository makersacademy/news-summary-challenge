class News {
    constructor(title, apiUrl, webUrl, id) {
      this.title = title;
      this.apiUrl = apiUrl;
      this.webUrl = webUrl;
      this.id = id
    }
}

const getHeadlines = async () => {
    const endpoint = 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-elements=image&api-key=test&show-fields=thumbnail'
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
        link = news.apiUrl.replace('https', 'http')
        headline = new News(news.webTitle, link, news.webUrl, count)
        const div = document.createElement("div"); 
        div.classList.add("headline"); 
        div.setAttribute("id", headline.id); 
        div.innerHTML = `                                                 
                <a href="#${headline.id}">${headline.title}</a>
        `;
        headlinesBox.appendChild(div);
        count++
     })
}

function loadHeadlines() {
    getHeadlines()
    .then(results => {
      format(results);
    })
    .catch(err => console.log(err))
  }

  document.addEventListener("DOMContentLoaded", loadHeadlines);