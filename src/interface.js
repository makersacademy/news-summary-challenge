listenForClick();

function listenForClick() {
  window.addEventListener("hashchange", function() {
    if (window.location.href.includes('#home')) {
      renderHeadlineListView();
    }
    else {
      renderSummaryView();
    }
  })
};