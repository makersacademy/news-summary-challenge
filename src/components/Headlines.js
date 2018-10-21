(function(exports){
  var headlines_div = document.getElementById('headlines')

  function renderLinkedHeadlines(linkedHeadlines) {
    linkedHeadlines.forEach(function(linkedHeadline) {

      headlines_div.innerHTML += '<a style="display: block" href=' + linkedHeadline.link + '>'+ linkedHeadline.headline +'</div>'
    })
  }

  exports.renderLinkedHeadlines = renderLinkedHeadlines
})(this)
