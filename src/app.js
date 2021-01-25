// Init Newsify object
const newsify = new Newsify();

//Init UI object
const ui = new UI();

document.addEventListener('DOMContentLoaded', getArticles)

function getArticles() {
  newsify.getArticles()
  .then(results => {
    console.log(results)
    ui.paint(results)
  })
  .catch(err => console.log(err))
}