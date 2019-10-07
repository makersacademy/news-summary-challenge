function listenForHashChange() {
  window.addEventListener("hashchange", showDetails, false)
}; listenForHashChange();

function showDetails() {
  document.getElementById('detail').parentNode.removeChild(document.getElementById('detail'));
  var htmlString = "</a></br><div id='detail'> Details should be here!  " + newsDetails.result[hashID()].webTitle + "</div>"
  document.getElementById('headlines' + hashID())
  .insertAdjacentHTML('afterend', htmlString);
  // console.log(hashID())
};

function hashID() {
return window.location.hash.split("#")[1];
}
