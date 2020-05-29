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

function loadNews(once) {
  event.preventDefault()
  let container = document.querySelector('#container')
  pageOneView.setAttribute('class', 'page-view')
  container.appendChild(pageOneView)
  let headlines = data.newsArray[0]['sentences']
  headlines.forEach(function (item, index) {
    let pHeader = document.createElement('p')
    let previewHeadline = new News(item)
    let headlineList = pHeader.innerHTML += (index + 1) + ':' + previewHeadline.preview() + '</br>'

    pageOneView.appendChild(pHeader)
    console.log(pHeader)
  })


}
