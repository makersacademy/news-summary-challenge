function APIQuery (callback) {
  let request = new XMLHttpRequest()
  // let url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all'

  let url = 'data.json'
  
  request.open('GET', url, true)
  request.send()

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(request.responseText))
    }
  }
}
