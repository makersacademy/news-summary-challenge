function replyClick(clickedId) {
  getFeedContent(clickedId, feed, displayFeeds);
}

const getFeedContent = (clickedId, feedName, callback) => {
  let story = feedName.findStory(clickedId);
  console.log(story);
  callback(story);
};

const displayFeeds = (fetchedData) => {
  feedEl = document.getElementById("feedRequest");
  feedEl.innerHTML = "";

  // Define elements
  let storyEl = document.createElement("article");
  let storyImg = document.createElement("img");
  let storyLink = document.createElement("a");
  let categoryTag = document.createElement("p");
  let categoryURL = document.createElement("a");
  let authorName = document.createElement("p");
  let allStories = document.createElement("button");
  let storyTitle = document.createElement("h1");
  let bodyContent = document.createElement("p");

  // Set Classes
  storyEl.className = "storyCard";
  storyImg.className = "storyThumb";

  allStories.id = "backToFeed";

  // Set URLs
  categoryURL.href = `https://www.theguardian.com/${fetchedData["sectionId"]}`;
  storyLink.href = fetchedData["webUrl"];

  //Set Text Content
  authorName.textContent = `Author: ${fetchedData["tags"][0]["webTitle"]}`;
  categoryURL.textContent = `Category: ${fetchedData["sectionName"]}`;
  storyLink.textContent = "Link to article on the Guardian";
  storyTitle.textContent = fetchedData["fields"]["headline"];
  allStories.textContent = "Back to story feed";

  //Set image src
  storyImg.src = fetchedData["fields"]["thumbnail"];

  bodyContent.innerHTML = `${fetchedData["fields"]["body"]}`;

  //Append Child
  categoryTag.appendChild(categoryURL);

  storyEl.appendChild(storyTitle);
  storyEl.appendChild(storyImg);
  storyEl.appendChild(categoryTag);
  storyEl.appendChild(storyLink);
  storyEl.appendChild(authorName);
  storyEl.appendChild(bodyContent);
  feedEl.appendChild(storyEl);
};
