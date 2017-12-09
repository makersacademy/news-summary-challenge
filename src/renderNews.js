function RenderNews() {

  RenderNews.prototype.allNews = function(data) {
    var htmlString = ""
    console.log('3', data.results[1].webTitle)

    for (var i = 0; i < data.results.length; i++){
      htmlString += `<li><div>${data.results[i].webTitle}</div></li><div><a href="${data.results[i].webUrl}">Original Article</a></div><br />`
    }

    var final = (`<ul>${htmlString}</ul>`)
    document.getElementById("app").innerHTML = final;

  };
}
