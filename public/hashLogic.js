makeUrlChangeShowSummaryForCurrentPage();

function makeUrlChangeShowSummaryForCurrentPage() {
  window.addEventListener("hashchange", showSummaryForCurrentPage);
};

function showSummaryForCurrentPage() {
  showSummary(getSummaryFromUrl(window.location));
};

function getSummaryFromUrl(location) {
  a = location.hash.split("#")[1];
  return showSummary(a-1);
};

function showSummary(x) {
  console.log(x);
  getHeadlines().then(response => {
      response.json().then(urlData =>
        console.log(urlData)
        // document
        //     .getElementById("summary")
        //     .innerHTML = '<div class="print"><a href=${x.webUrl}> placeholder </a></div>'}
          )
      })
  }
