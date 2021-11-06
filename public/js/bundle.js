(() => {
  // index.js
  console.log("Running...");
  var fetchContent = (callback) => {
    fetch("https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail").then((response) => response.json()).then((data) => {
      console.log("Success:", data);
      callback(data);
    }).catch((error) => {
      console.error("Error:", error);
    });
  };
  var displayContent = (content) => {
    console.log("Displaying content...");
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
      storyLink.href = result.webUrl;
      storyEl.appendChild(storyImg);
      storyEl.appendChild(storyHeadline);
      feedEl = document.getElementById("headlines");
      feedEl.appendChild(storyEl);
    });
  };
  fetchContent(displayContent);
})();
