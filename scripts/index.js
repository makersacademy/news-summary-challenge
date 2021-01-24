newsApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
guardian = "http://content.guardianapis.com/search?show-fields=all"
summaryApi = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="

let guardianNews = newsApi + guardian;

fetch(guardianNews)
.then((res) => res.json())
.then((data) => {
  let content = data.response.results
  let output = ''
  let headline = new Headlines();
  content.forEach(function(news) {
    let item = new News();
    item.title = news.webTitle;
    item.url = news.webUrl;
    item.thumbnail = news.fields.thumbnail;
    item.summary = news.fields.bodyText;
    headline.add(item)
    output += `
      <div class="news-item" id="${headline.collection.length-1}"> 
        <img src="${item.thumbnail}" class="thumbnail">
        <h2 class="trigger"><span class="section">${news.sectionName}</span> ${news.webTitle}</h2>
  
        <div class="modal">
          <span class="btn-close">&times;</span>
            <div class="modal-content">
              <h2><a href="${item.url}">${item.title}</a></h2>
              <img src="${item.thumbnail}" class="modal-thumbnail">
              <p id="summary-${headline.collection.length-1}">${item.summary}</p>
            </div>
        </div>
      </div>
      `;
     
    document.getElementById("news-feed").innerHTML = output;
  
    const triggers = document.getElementsByClassName("trigger");
    const triggerArray = Array.from(triggers).entries();
    const modals = document.getElementsByClassName("modal");
    const closeButtons = document.getElementsByClassName("btn-close");
  
      for (let [index, trigger] of triggerArray) {
        const toggleModal = () => {
          modals[index].classList.toggle("show-modal");
        };
  
        trigger.addEventListener("click", toggleModal);
        closeButtons[index].addEventListener("click", toggleModal);
    }
    let newsUrl = headline.collection[headline.collection.length - 1].url
    let summaryNews = summaryApi + newsUrl;
    fetch(summaryNews)
    .then((res) => res.json())
    .then((data) => {
      let summaryText = document.getElementById(`summary-${headline.collection.length-1}`)
      summaryText.innerHTML = data["text"];
    })
    }
  )});
