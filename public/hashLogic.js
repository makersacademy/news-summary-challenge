makeUrlChangeShowNewsForHeadline();

function makeUrlChangeShowNewsForHeadline() {
  window.addEventListener("hashchange", showNewsForCurrentPage);
};

function showNewsForCurrentPage() {
  showNews(getNewsFromUrl(window.location));
};

function getNewsFromUrl(location) {
  index = location.hash.split("#")[1];
  return headlines[index];
};

function showNews() {
  document
    .getElementById(`news-blurb${index}`)
    .innerHTML = '<div class="summary">' + headlines[index][1] + '</div>';
};
