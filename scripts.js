const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)


var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/politics?show-elements=image&show-fields=thumbnail&api-key=68d87158-e915-4fcd-8d0a-a32396833208', true)

request.onload = function(){
  var data = JSON.parse(this.response)
  data.response.results.forEach(article => {
    const report = document.createElement('div')
    report.setAttribute('class', 'report')
  
    // const h2 = document.createElement('h2')
    // h2.textContent = article.webTitle

    const anchor = document.createElement('a')
    anchor.href = `${article.webUrl}`
    anchor.innerHTML = `${article.webTitle}`

    const img = document.createElement('img')
    img.src = `${article.fields.thumbnail}`

    console.log(article.webTitle)
    console.log(anchor)

    container.appendChild(report)
    // report.appendChild(h2)
    report.appendChild(anchor)
    report.appendChild(img)
    console.log(report)
    // console.log(h2)
  })
} 

request.send()