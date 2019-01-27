'use strict'
/* global Guardian */

window.onload = () => {
  let guardian = new Guardian()
  let headlineDiv = document.getElementById('headlines')
  let links = document.getElementsByClassName('link')

  guardian.getHeadlines()
  headlineDiv.appendChild(guardian.renderArticles())

  Array.from(links).forEach((element, index) => {
    element.addEventListener('click', () => {
      guardian.getSummary(guardian.headlines[0][index])
      console.log(guardian.summary)
    })
  })

  window.g = guardian
}
