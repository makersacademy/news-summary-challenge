const http = new XMLHttpRequest()
const url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
http.open("GET", url)
http.send()

var hhhh = "PPP"
var testpage = function () {

var pageRenTest = document.getElementById('page')
pageRenTest.innerHTML = http.responseText

}
