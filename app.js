  function makeURLChangeShowNewsForCurrentPage() {
    // listener for when a link is clicked (that has a hash)
    window.addEventListener("hashchange", showNewsForCurrentPage);
  }
  
  function showNewsForCurrentPage() {
    // show the note on current page
    showNews(getNewsID(location));
  }
  
  function getNewsID(location) {
    // get the id of note wanted from link clicked
    return parseInt(location.hash.split("#")[1]);
  }
  
  function showNews(newsID) {
    news = newsCollector.filter((article) => {
      return article.id === newsID
    })
    document.getElementById("headlines-container").style.display = "none";
    document.getElementById(
        "news-summary"
      ).innerHTML = `news summary here<br>
      <img src="${news[0].imageLink}">
      </br>
      ${news[0].title}
      <input type="button" value="Back" onClick="document.location.reload(true)">
      `;
  }