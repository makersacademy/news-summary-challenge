'use strict'
/* global Guardian */

window.onload = () => {
  let guardian = new Guardian()
  let headlineDiv = document.getElementById('headlines')
  let summaryDiv = document.getElementById('summary')
  let links = document.getElementsByClassName('link')

  guardian.getHeadlines()
  headlineDiv.appendChild(guardian.renderArticles())

  Array.from(links).forEach((element, index) => {
    element.addEventListener('click', () => {
      headlineDiv.innerHTML = ''
      headlineDiv.appendChild(
        guardian.renderArticle(guardian.headlines[0][index], index)
      )

      guardian.getSummary(guardian.headlines[0][index])
      summaryDiv.innerHTML = guardian.summary
    })
  })

  window.g = guardian
}
