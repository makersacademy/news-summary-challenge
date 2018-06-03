function Headlines() {

  this.headlinesArray = [
    {title: "Yotam Ottolenghi Fish Recipes", url: "https://www.theguardian.com/lifeandstyle/2018/jun/02/yotam-ottolenghi-fish-recipes", summary: "From a Mexican-influenced cured gurnard to a simple supper of grilled sea bass, fish is a dish of dreams"},
    {title: "Meera Sodha’s recipe for vegan chilli burgers with garlic ‘mayo'", url: "https://www.theguardian.com/lifeandstyle/2018/may/19/meera-sodha-recipe-vegan-chilli-burgers-garlic-mayo", summary: "Transform the classic vegetarian chilli into a summer speciality with this simple spiced patty"},
    {title: "Felicity Cloake’s barbecue masterclass: jerk chicken – recipe", url: "https://www.theguardian.com/lifeandstyle/2018/may/23/felicity-cloake-barbecue-masterclass-jerk-chicken-recipe", summary: "This Jamaican summer stalwart is all about spice, heat and char – here’s how to achieve smoky perfection"}
  ];

  for(var i in this.headlinesArray) {
    let paragraph = document.createElement('P')
    let headlineTitle = document.createTextNode(`${this.headlinesArray[i].title}`)
    paragraph.appendChild(headlineTitle)
    document.getElementById('full_notes').appendChild(paragraph)
  }

  return this.headlinesArray

  // function getTitles() {
  //   for(var i in this.headlinesArray) {
  //     let paragraph = document.createElement('P')
  //     let headlineTitle = document.createTextNode(`${this.headlinesArray[i].title}`)
  //     paragraph.appendChild(headlineTitle)
  //     document.getElementById('full_notes').appendChild(paragraph)
  //   }
  // }
}

console.log(this.headlinesArray)

// Headlines.prototype.displayTitle = function () {
//   for(var i in this.headlinesArray) {
//     let paragraph = document.createElement('P')
//     let headlineTitle = document.createTextNode(`${this.headlinesArray[i].title}`)
//     paragraph.appendChild(headlineTitle)
//     document.getElementById('full_notes').appendChild(paragraph)
//   }
// }
