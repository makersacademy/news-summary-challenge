'use strict';

let data = new NewsData()
let news = new News()
const pageOneView = document.createElement('div')
const pageTwoView = document.createElement('div')

document.addEventListener('DOMContentLoaded', () => {

  // fetching data from API after DOM loads
  data.getData()
  // Headder elements
  let header = document.createElement('header')
  document.body.appendChild(header)
  let headerMainText = document.createElement('h1')
  headerMainText.innerHTML = "THE GUARDIAN NEWS SUMMARY"
  header.appendChild(headerMainText)

  // Main container
  let div_element = document.createElement('div')
  div_element.setAttribute('id', 'container')
  document.body.appendChild(div_element)

  // Content for Main container
  let button = document.createElement('button')
  button.setAttribute('id', 'get-data')
  button.setAttribute('class', 'center')
  button.innerHTML = 'Get Todays News'
  div_element.appendChild(button)

  button.addEventListener('click', loadNews, {once: true})

})

function loadNews(event) {
  event.preventDefault()
  let button = document.querySelector('#get-data')
  button.style.display = 'none'
  // pageTwoView.style.display = 'block'
  let container = document.querySelector('#container')
  pageOneView.setAttribute('class', 'page-view')
  pageOneView.setAttribute('id', 'page-one')
  container.appendChild(pageOneView)
  let headlines = data.newsArray[0]['sentences']
  headlines.forEach(function (item, index) {
    let headerLink = document.createElement('a')
    headerLink.setAttribute('id', `${index}`)
    headerLink.setAttribute('href', '#')
    headerLink.addEventListener('click', loadFullView)
    let previewHeadline = new News(item)
    let headlineList = headerLink.innerHTML += (index + 1) + ':' + previewHeadline.preview() + '</br>'
    pageOneView.appendChild(headerLink)
    console.log(headerLink)
  })

  function loadFullView() {
    event.preventDefault()
    let pageOne = document.querySelector('#page-one')
    pageOne.style.display = 'none'
    let fullHeadlineView = document.createElement('p')
    fullHeadlineView.setAttribute('class', 'center')
    fullHeadlineView.innerHTML = `${data.newsArray[0]['sentences'][this.id]}`
    pageTwoView.setAttribute('class', 'page-view')
    pageTwoView.setAttribute('id', 'page-two')
    let button = document.createElement('button')
    button.setAttribute('class', 'center')
    button.innerHTML = 'Back To View Todays Headlines'
    container.appendChild(pageTwoView)
    pageTwoView.appendChild(fullHeadlineView)
    pageTwoView.appendChild(document.createElement('br'))
    pageTwoView.appendChild(button)
  }

}
















// </br>
