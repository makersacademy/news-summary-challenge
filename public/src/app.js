import ArticleBuilder from './articleBuilder.js'
import DomManip from './domManip.js'
import GuardianHandler from './guardianHandler.js'
import AylienHandler from './aylienHandler.js'
import ArticleHandler from './articleHandler.js'

let guardianApiKey = 'xxxxxx'

let aylien = new AylienHandler()
let dm = new DomManip(document)
let guardian = new GuardianHandler(guardianApiKey)
let ab
let ah = new ArticleHandler(guardian, aylien)

async function initialise() {
  let articles = await ah.getEverything()
  ab = new ArticleBuilder(articles, dm)
  ab.renderArticles()
}

initialise()
