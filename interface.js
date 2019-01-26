'use strict'

window.onload = () => {
  let guardian = new Guardian
  let headlines = document.getElementById('headlines')

  guardian.getHeadlines()

  headlines.appendChild(guardian.renderArticles())

  window.g = guardian
}
