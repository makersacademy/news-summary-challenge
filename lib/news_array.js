function Headlines () {

  this.headlinesArray = [
    {title: "Yotam Ottolenghi Fish Recipes", url: "https://www.theguardian.com/lifeandstyle/2018/jun/02/yotam-ottolenghi-fish-recipes", summary: "From a Mexican-influenced cured gurnard to a simple supper of grilled sea bass, fish is a dish of dreams"},
    {title: "Meera Sodha’s recipe for vegan chilli burgers with garlic ‘mayo'", url: "https://www.theguardian.com/lifeandstyle/2018/may/19/meera-sodha-recipe-vegan-chilli-burgers-garlic-mayo", summary: "Transform the classic vegetarian chilli into a summer speciality with this simple spiced patty"},
    {title: "Felicity Cloake’s barbecue masterclass: jerk chicken – recipe", url: "https://www.theguardian.com/lifeandstyle/2018/may/23/felicity-cloake-barbecue-masterclass-jerk-chicken-recipe", summary: "This Jamaican summer stalwart is all about spice, heat and char – here’s how to achieve smoky perfection"}
  ];

  console.log(headlinesArray);
  console.log(headlinesArray[0]);

  return headlinesArray;

  function showHeadlines(story) {
    document
      .getElementById("summary")
      .innerHTML = headlinesArray.map();
  };
}

// function showHeadlines(story) {
//   document
//     .getElementById("summary")
//     .innerHTML = story;
// };
//
// showHeadlines();

// makeUrlChangeShowStoryForCurrentPage();
//
// function makeUrlChangeShowStoryForCurrentPage() {
//   window.addEventListener("hashchange", showStoryForCurrentPage);
// };
//
// function showStoryForCurrentPage() {
//   showStory(getStoryFromUrl(window.location));
// };
//
// function getStoryFromUrl(location) {
//   return location.hash.split("#")[1];
// };
//
// function showStory(story) {
//   document
//     .getElementById("news-story")
//     .innerHTML = story;
// };


// title: result.webTitle, url: result.webUrl, imageUrl: result.fields? result.fields.thumbnail : undefined
