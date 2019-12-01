var http = new XMLHttpRequest()
var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/news"
http.open("GET", url)
http.send()

http.onreadystatechange=function(){
  if (this.readyState==4 && this.status==200) {
    var guardianContent = JSON.parse(http.responseText)


    titles = guardianContent.response.results
    page = document.getElementById('page')
    titles.forEach(function(headline){
      a = document.createElement("a")
      br = document.createElement("BR")
      a.setAttribute("href", "#")
      a.innerHTML = headline.webTitle
      page.appendChild(a)
        page.appendChild(br)

    })


    console.log(JSON.parse(http.responseText))













  }
}
