const newsApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
const guardian = "http://content.guardianapis.com/search?show-fields=all"
const summaryApi = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="

const guardianNews = newsApi + guardian;

fetch(guardianNews)
.then((res) => res.json())
.then((data) => {
  const content = data.response.results
  let output = ''
  const headline = new Headlines();
  content.forEach(function(news) {
    const article = new News(news.webTitle, news.webUrl, news.fields.thumbnail, news.fields.bodyText, news.sectionName);
    headline.add(article)
    output += `
      <div class="news-item" id="${headline.collection.length-1}"> 
        ${article.createThumbnail()} 
        ${article.createTitle()} 
        ${article.createModal()}
      </div>`;
     
    document.getElementById("news-feed").innerHTML = output;
  
    triggerModals();
    
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

const triggerModals = () => {
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
}