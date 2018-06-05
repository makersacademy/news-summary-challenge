Headlines();

function Headlines() {

  this.headlinesArray = [
    {title: "Yotam Ottolenghi Fish Recipes", url: "https://www.theguardian.com/lifeandstyle/2018/jun/02/yotam-ottolenghi-fish-recipes", summary: "From a Mexican-influenced cured gurnard to a simple supper of grilled sea bass, fish is a dish of dreams"},
    {title: "Meera Sodha’s recipe for vegan chilli burgers with garlic ‘mayo'", url: "https://www.theguardian.com/lifeandstyle/2018/may/19/meera-sodha-recipe-vegan-chilli-burgers-garlic-mayo", summary: "Transform the classic vegetarian chilli into a summer speciality with this simple spiced patty"},
    {title: "Felicity Cloake’s barbecue masterclass: jerk chicken – recipe", url: "https://www.theguardian.com/lifeandstyle/2018/may/23/felicity-cloake-barbecue-masterclass-jerk-chicken-recipe", summary: "This Jamaican summer stalwart is all about spice, heat and char – here’s how to achieve smoky perfection"}
  ];
}

Headlines.prototype.allHeadlines = function () {
  for(var i in this.headlinesArray) {
    let section = document.createElement('section')
    let paragraph = document.createElement('P')
    // let summaryButton = document.createElement('a')
    let headlineTitle = document.createTextNode(`${this.headlinesArray[i].title}`)
    let linkArticle = document.createElement('a')
    // summaryButton.setAttribute('class', 'paragraph_links')
    // summaryButton.setAttribute('href', `${this.headlinesArray[i].summary}`)
    linkArticle.setAttribute('href', `${this.headlinesArray[i].url}`)
    // summaryButton.innerHTML = "Show Summary"
    linkArticle.innerHTML = "View Full Article"
    paragraph.appendChild(headlineTitle)
    section.appendChild(paragraph)
    // section.appendChild(summaryButton)
    section.appendChild(linkArticle)
    document.getElementById('all_headlines').appendChild(section)
  }
}

Headlines.prototype.showSummary = function () {
  for(var i in this.headlinesArray) {
    document.getElementById('all_headlines').hidden = true
    document.getElementById('headline_summary').hidden = false
    let section = document.createElement('section')
    // let paragraph = document.createElement('P')
    let summaryButton = document.createElement('a')
    summaryButton.setAttribute('class', 'paragraph_links')
    summaryButton.setAttribute('href', `${this.headlinesArray[i].summary}`)
    summaryButton.innerHTML = "Show Summary"
    section.appendChild(summaryButton)
    document.getElementById('all_headlines').appendChild(section)
  }
}

let headlines = new Headlines()
