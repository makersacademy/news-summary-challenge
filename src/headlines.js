let newsCollector = [];

const getHeadlines = async () => {
  const endpoint =
    "https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&page-size=20&api-key=test";
  try {
    const response = await fetch(endpoint, { cache: "no-cache" });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.response.results;
    }
  } catch (error) {
    console.log(error);
  }
};

const headlinesBox = document.querySelector("#headlines-container");

function format(headlines) {
  let count = 1;
  headlines.forEach((news) => {
    let link = news.apiUrl.replace("https", "http");
    let web = news.webUrl.replace("https", "http");
    let title = news.webTitle;
    if (news.fields === undefined) {
      imageLink = "";
    } else {
      imageLink = news.fields.thumbnail;
    }
    headline = new News(title, link, web, imageLink, count);
    newsCollector.push(headline);
    const div = document.createElement("div");
    div.classList.add("headline");
    div.setAttribute("id", headline.id);
    div.innerHTML = `                                                 
                <a href="#${headline.id}"><img src="${headline.imageLink}" width="350"></a>
                <br>
                <a href="#${headline.id}">${headline.title}</a>
                <br>
                <br>
        `;
    headlinesBox.appendChild(div);
    count++;
  });
}

function loadHeadlines() {
  getHeadlines()
    .then((results) => {
      format(results);
    })
    .catch((err) => console.log(err));
}

document.addEventListener("DOMContentLoaded", loadHeadlines);
makeURLChangeShowNewsForCurrentPage();
