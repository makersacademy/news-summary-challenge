var headlinesArray = [
  {title: "Yotam Ottolenghi Fish Recipes", url: "https://www.theguardian.com/lifeandstyle/2018/jun/02/yotam-ottolenghi-fish-recipes", summary: "From a Mexican-influenced cured gurnard to a simple supper of grilled sea bass, fish is a dish of dreams"},
  {title: "Meera Sodha’s recipe for vegan chilli burgers with garlic ‘mayo'", url: "https://www.theguardian.com/lifeandstyle/2018/may/19/meera-sodha-recipe-vegan-chilli-burgers-garlic-mayo", summary: "Transform the classic vegetarian chilli into a summer speciality with this simple spiced patty"},
  {title: "Felicity Cloake’s barbecue masterclass: jerk chicken – recipe", url: "https://www.theguardian.com/lifeandstyle/2018/may/23/felicity-cloake-barbecue-masterclass-jerk-chicken-recipe", summary: "This Jamaican summer stalwart is all about spice, heat and char – here’s how to achieve smoky perfection"}
];

function getTitles(item, index) {
  var newsTitle = [item.title];
  return newsTitle;
}

function displayTitles() {
  let paragraph = document.createElement('P')
  let textnode = headlinesArray.map(getTitles);
  console.log(textnode)
  paragraph.appendChild(textnode)
  document.getElementById('news-story').appendChild(paragraph)
}



function getLink(item,index) {
    var link = [item.url];
    return link;
}

function mySecondFunction() {
    document.getElementById("demoTwo").innerHTML = headlinesArray.map(getLink);
}
