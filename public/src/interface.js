document.addEventListener('DOMContentLoaded', () => {

  // Headder elements
  let header = document.createElement('header')
  document.body.appendChild(header)
  let h1_element = document.createElement('h1')
  h1_element.innerHTML = "THE GUARDIAN NEWS SUMMARY"
  header.appendChild(h1_element)

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

  button.addEventListener('click', loadNews)

})

function loadNews(event) {
  event.preventDefault()
  data = new NewsData
  data.getData()
  let h1 = document.createElement('h1')
  h1.innerHTML = "SUMMARY"
  document.body.appendChild(h1)
}
