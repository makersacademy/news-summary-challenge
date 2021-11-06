(() => {
  // index.js
  console.log("Running...");
  var fetchContent = (url, callback) => {
    fetch(url).then((response) => response.json()).then((data) => {
      console.log("Success:", data);
      callback(data);
    }).catch((error) => {
      console.error("Error:", error);
    });
  };
  var displayFeed = (content) => {
    console.log("Displaying content...");
    feedEL = document.getElementById("headlines");
    feedEL.innerHTML = "";
    let results = content.response.results;
    results.forEach((result, index) => {
      let storyEl = document.createElement("article");
      storyEl.className = "storyCard";
      let storyImg = document.createElement("img");
      storyImg.className = "storyThumb";
      storyImg.src = result.fields.thumbnail;
      let storyHeadline = document.createElement("h2");
      let storyLink = document.createElement("a");
      storyHeadline.appendChild(storyLink);
      storyLink.textContent = result.webTitle;
      storyLink.href = `#${index}`;
      storyEl.appendChild(storyImg);
      storyEl.appendChild(storyHeadline);
      feedEl = document.getElementById("headlines");
      feedEl.appendChild(storyEl);
    });
  };
  var feedUrl = "https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail";
  fetchContent(feedUrl, displayFeed);
  var makeUrlChange = () => {
    console.log("Changing URL...");
    window.addEventListener("hashchange", showStoryForCurrentPage);
  };
  var showStoryForCurrentPage = () => {
    let url = getStoryFromUrl(window.location);
    showStory(url);
  };
  var getStoryFromUrl = (location) => {
    return location.hash.split("#")[1];
  };
  var showStory = (story) => {
    let feedEL2 = document.getElementById("headlines");
    feedEL2.innerHTML = "";
    let storyEl = document.createElement("p");
    storyEl.textContent = `I am story #${story}`;
    let home = document.createElement("a");
    home.textContent = "Go Back";
    home.href = "";
    feedEl.appendChild(home);
    feedEl.appendChild(storyEl);
  };
  makeUrlChange();
})();
