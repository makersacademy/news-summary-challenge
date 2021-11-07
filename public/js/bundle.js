(() => {
  // index.js
  console.log("Running...");
  var loadContent = () => {
    let pageId = location.hash.split("#")[1];
    let feedUrl = "https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail";
    if (pageId == "home") {
      console.log("loading #home");
      console.log(feedUrl);
      fetchContent(feedUrl, displayFeed);
    } else {
      console.log(`loading ${pageId}`);
      console.log(feedUrl);
      fetchContent(feedUrl, displayStory);
    }
  };
  var fetchContent = (url, callback) => {
    fetch(url).then((response) => response.json()).then((data) => {
      console.log("Success:", data);
      callback(data);
    }).catch((error) => {
      console.error("Error:", error);
    });
  };
  var displayFeed = (content) => {
    console.log("Displaying feed...");
    feedEL = document.getElementById("headlines");
    feedEL.innerHTML = "";
    let results = content.response.results;
    results.forEach((result) => {
      let storyEl = document.createElement("article");
      storyEl.className = "storyCard";
      let storyImg = document.createElement("img");
      storyImg.className = "storyThumb";
      storyImg.src = result.fields.thumbnail;
      let storyHeadline = document.createElement("h2");
      let storyLink = document.createElement("a");
      storyHeadline.appendChild(storyLink);
      storyLink.textContent = result.webTitle;
      storyLink.href = "#" + result.id;
      storyEl.appendChild(storyImg);
      storyEl.appendChild(storyHeadline);
      feedEl = document.getElementById("headlines");
      feedEl.appendChild(storyEl);
    });
  };
  var displayStory = (content) => {
    let pageId = location.hash.split("#")[1];
    console.log("Displaying story...");
    console.log("PageId:" + pageId);
    let result = content.response.results.find((element) => element.id == pageId);
    console.log(result);
    feedEL = document.getElementById("headlines");
    feedEL.innerHTML = "";
    let storyEl = document.createElement("article");
    storyEl.className = "storyCard";
    let storyImg = document.createElement("img");
    storyImg.className = "storyThumb";
    storyImg.src = result.fields.thumbnail;
    let storyHeadline = document.createElement("h2");
    let storyLink = document.createElement("a");
    storyHeadline.appendChild(storyLink);
    storyLink.textContent = result.webTitle;
    storyLink.href = result.webUrl;
    let storyBody = document.createElement("div");
    storyBody.innerHTML = result.fields.body;
    storyEl.appendChild(storyImg);
    storyEl.appendChild(storyHeadline);
    storyEl.appendChild(storyBody);
    feedEl = document.getElementById("headlines");
    feedEl.appendChild(storyEl);
  };
  if (!location.hash) {
    location.hash = "#home";
  }
  loadContent();
  window.addEventListener("hashchange", loadContent);
})();
