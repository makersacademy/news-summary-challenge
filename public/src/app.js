import GuardianHandler from './guardianApi.js'
import DomManip from './domManip.js'

let ga = new GuardianHandler

let dm = new DomManip(document)

async function go() {
  const articles = await ga.getApi()
  for ( let i = 1; i < articles.length; i++ ) {
    console.log(articles[i])
    console.log(articles[i].id)
    console.log(articles[i].webTitle)
    if (articles[i].fields == null) {
      articles[i].fields = {thumbnail: null}
    }
    console.log(articles[i].fields.thumbnail)
    console.log(articles[i].webUrl)
    console.log(articles[i].apiUrl)
  }
}


console.log(dm.getIdByClass(".classname"))
