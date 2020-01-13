const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/politics?api-key=68d87158-e915-4fcd-8d0a-a32396833208', true)

request.onload = function(){
  var data = JSON.parse(this.response)
  data.response.results.forEach(article => {
    const report = document.createElement('div')
    report.setAttribute('class', 'report')
  
    const h1 = document.createElement('h1')
    h1.textContent = article.webTitle

    console.log(article.webTitle)

    container.appendChild(report)
    report.appendChild(h1)
    console.log(report)
    console.log(h1)
  })
} 

request.send()