let array = []

document.addEventListener("DOMContentLoaded", () => {
  console.log('Page fully loaded and parsed.')
  fetchFromApi()

  showArticles = () => {
    for (let i = 0; i < newsArticles.length; i++) {
      array += `<a href=${newsArticles[i]._webUrl} style="text-decoration: none;">
                  <div class="article-container">
                    <div class="article-image">
                      <img src="${newsArticles[i]._imgUrl}" alt="Article Image">
                    </div>
                    <div class="article-text-container">
                      <div class='article-headline'>${newsArticles[i]._webTitle}</div>
                      <div class='article-section'>${newsArticles[i]._sectionName}</div>
                      <div class='article-time'>${newsArticles[i]._webPublicationDate}</div>
                      <div class='article-snippet'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                  </div>
                </a>`
    }
    document.querySelector('.articles').innerHTML = array
  }
});

const refreshVariable = setInterval(myTimer, 500);

function myTimer() {
 const t = new Date();
 document.getElementById("time-display").innerHTML = t.toLocaleTimeString();
 document.getElementById("date-display").innerHTML = t.toDateString();
};
