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
  document.querySelector('#get-data').style.display = 'none'
  // Add pageOneView to main div
  let container = document.querySelector('#container')
  pageOneView.setAttribute('class', 'page-view')
  pageOneView.setAttribute('id', 'page-one')
  container.appendChild(pageOneView)
  let headlines = data.newsArray[0]['sentences']
  // Iterating through fetched data array to display all elements
  headlines.forEach(function (item, index) {
    // Add link to display heading
    let headerLink = document.createElement('a')
    headerLink.setAttribute('id', `${index}`)
    headerLink.setAttribute('class', 'center')
    headerLink.setAttribute('href', '#')
    headerLink.addEventListener('click', loadFullView)
    let previewHeadline = new News(item)
    headerLink.innerHTML += (index + 1) + ':' + previewHeadline.preview() + '</br>'
    // Add image div for every heading title 
    let image = document.createElement('div')
    image.innerHTML = `Image ${index}`
    image.setAttribute('class', 'image')
    pageOneView.appendChild(image)
    pageOneView.appendChild(headerLink)
    console.log(headerLink)
  })

  function loadFullView() {
    event.preventDefault()
    let pageOne = document.querySelector('#page-one')
    pageOne.style.display = 'none'
    let fullHeadlineView = document.createElement('p')
    fullHeadlineView.setAttribute('class', 'center')
    fullHeadlineView.setAttribute('class', 'full-header')
    fullHeadlineView.innerHTML = `${data.newsArray[0]['sentences'][this.id]}`
    pageTwoView.setAttribute('class', 'page-view')
    pageTwoView.setAttribute('id', 'page-two')
    let button = document.createElement('button')
    button.setAttribute('class', 'center')
    button.innerHTML = 'Back To View Todays Headlines'
    button.addEventListener('click', takeToPageOne)
    container.appendChild(pageTwoView)
    pageTwoView.appendChild(fullHeadlineView)
    pageTwoView.appendChild(document.createElement('br'))
    pageTwoView.appendChild(button)
    document.querySelector('#page-two').style.display = 'block'
  }

  function takeToPageOne() {
    let pageTwoView = document.querySelector('#page-two')
    pageTwoView.style.display = 'none'
    while(pageTwoView.firstChild) {
      pageTwoView.removeChild(pageTwoView.lastChild)
    }
    document.querySelector('#page-one').style.display = 'block'
  }

}
















// </br>
