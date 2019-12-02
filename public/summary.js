
function makeUrlChangeShowSummary() {
  window.addEventListener("hashchange", showUniqueNews);
};

function showUniqueNews() {
  showNews(getNewsFromUrl(window.location));
};

function getNewsFromUrl(location) {
  var id_on_page = location.hash.split("#")[1];
  return id_on_page
};

function showNews(id) {

  var link_id = "single-news-item-" + id
  var link = document.getElementById(link_id).href
  var section = "p-" + id

  console.log(link)
  console.log(section)

  apiCallAlyen(link, section)

};

