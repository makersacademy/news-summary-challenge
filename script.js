var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/search?format=json&page=1&page-size=99&show-tags=keyword&show-fields=all&show-blocks=body:latest&show-elements=all&api-key=08e548e8-f799-4168-9ca3-7905fde4f823', true)

request.onload = function() {

  var data = JSON.parse(this.response).response.results


  if (request.status >= 200 && request.status < 400) {

    console.log(data);

    data.forEach(story => {

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const img = document.createElement('img')
      img.src = story.fields.thumbnail

      const h2 = document.createElement('h2')
      h2.textContent = story.fields.headline

      const a = document.createElement('a')
      // console.log(story.fields.shortUrl);
      a.href = story.fields.shortUrl
      a.textContent = 'Full article: ' + story.fields.shortUrl

      const p = document.createElement('p')
      story.body = story.fields.bodyText.substring(0, 300)
      p.textContent = `${story.body}...`

      const buttons = document.createElement('div')
      buttons.setAttribute('class', 'buttons')

      const fThis = document.createElement('BUTTON')
      const ftText = document.createTextNode("F-THIS!")
      fThis.appendChild(ftText)

      const read = document.createElement('BUTTON')
      const readText = document.createTextNode("Read more")
      read.appendChild(readText)

      buttons.appendChild(fThis)
      buttons.appendChild(read)

      container.appendChild(card)

      card.appendChild(img)
      card.appendChild(h2)
      card.appendChild(a)
      card.appendChild(p)
      card.appendChild(buttons)

    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = "Sorry something has gone wrong, and it is 100% the coder's fault."
    app.appendChild(errorMessage)
  }

}

request.send()

const app = document.getElementById('root')

const header = document.createElement('div')
header.setAttribute('class', 'header')

const logo = document.createElement('img')
logo.setAttribute('class', 'logo')
logo.src = 'logo.png'

const name = document.createElement('h1')
name.setAttribute('class', 'name')
name.innerHTML = " F-THIS NEWS..."

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(header)
header.appendChild(logo)
header.appendChild(name)
app.appendChild(container)
