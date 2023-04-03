

class NewsView {
  constructor(client) {
    this.client = client;
  }

  displayArticles() {
    // this.model.reset()
    this.client.loadArticles((data) => {
      const articleMainContainer = document.querySelector('#article-main-container')
      data.response.results.forEach((article) => {
        const articleContainer = document.createElement('div')
        articleContainer.classList.add('article-container')

        articleContainer.innerHTML = `
        <a href="${article.webUrl}" class="article-link">
          <img src="${article.fields.thumbnail}" alt="" class="article-img">
          <div class="article-text-container">
            <h2 class="article-title">${article.webTitle}</h2>

          </div>
        </a>`
        
        articleMainContainer.appendChild(articleContainer)
        // <p class="article-description">${article.fields.bodyText}</p>

        // const articleLink = document.createElement('a')
        // articleLink.classList.add('article-link')
        // articleLink.setAttribute('href', `${article.webUrl}`)
        // articleContainer.appendChild(articleLink)

        // const articleImg = document.createElement('img')
        // articleImg.src = article.fields.thumbnail
        // articleContainer.classList.add('article-img')
        // articleLink.appendChild(articleImg)

        // const articleTextContainer = document.createElement('div')
        // articleTextContainer.classList.add('article-text-container')
        // articleLink.appendChild(articleTextContainer)

        // const articleTitle = document.createElement('h2')
        // articleTitle.classList.add('article-title')
        // articleTitle.innerText = article.webTitle
        // articleTextContainer.appendChild(articleTitle)

        // const articleDesc = document.createElement('p')
        // articleDesc.classList.add('article-description')
        // articleDesc.innerText = article.fields.bodyText
        // articleTextContainer.appendChild(articleDesc)
      })
    }, (error) => {
      console.log(error)
    })
  }
}

module.exports = { NewsView }