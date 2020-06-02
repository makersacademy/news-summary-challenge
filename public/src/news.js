const app = document.getElementById('root')
const newlist = document.querySelector('.new-list')

const logo = document.createElement('img')
logo.src='images/logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')


app.appendChild(logo)
app.appendChild(container)


fetch('https://content.guardianapis.com/search?show-blocks=all&api-key=3d1bd118-3d6f-4211-a61e-3d0f966b08bb')

.then(response => {
  return response.json()
}).then(data => {
  console.log(data)
    data.response.results.forEach(news => {
      createCard(news);
  })  
}).catch(err => {
   const errorMessage = document.createElement('marquee')
   errorMessage.textContent = `it's not working!`
   app.appendChild(errorMessage)
})

function createCard(news)
{
  var a = document.createElement('a')
     a.setAttribute('href', onclick=retrieve)
     a.setAttribute('target', '_blank')
     a.text = "see article"
     const card = document.createElement('div')
     card.setAttribute('class', 'card')
     const h3 = document.createElement('h3')
     h3.textContent = news.webTitle
     container.appendChild(card)
     card.appendChild(h3)
     card.append(a)
     window.webUrl=news.webUrl
}

function retrieve(e){
  e.preventDefault()

  var settings = {
    "url": `https://api.meaningcloud.com/summarization-1.0?key=c855ca1f61d1002436b3f724a17c3a72&url=${window.webUrl}&sentences=2`,
    "method": "POST",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    alert(response.summary);
  });
}


