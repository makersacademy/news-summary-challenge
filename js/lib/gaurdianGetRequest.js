(function(exports) {
  function gaurdianAPI() {

        var request = new XMLHttpRequest()
        var apiURL = 'http://content.guardianapis.com/search?q=politics&from-date=2020-02-08&api-key=a1d02ea7-ada1-4f93-bf10-906a6eac506f'
        request.open('GET', apiURL, true)
      
        request.onload = function() {
          var data = JSON.parse(this.response)
        
          data.response.results.forEach(article => {
            console.log(article)
          })
        }
        
        request.send()
      }


  

exports.gaurdianAPI = gaurdianAPI
})(this)

