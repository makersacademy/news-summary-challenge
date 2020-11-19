var request = new XMLHttpRequest()
var url = 'https://content.guardianapis.com/'
const SECRET_KEY = "1fdf45a2-844f-49aa-839e-5318a3a1074b"

request.open('GET', url, true)

request.onload = function() {

}

var data = JSON.parse(this.response)

  data.map( item => {
      console.log(item)
  })

request.send()

