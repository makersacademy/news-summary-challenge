console.log("Running...")

const fetchContent = (url, callback) => {
  fetch(url)
  .then(response => response.json())
  .then(data =>  {
    console.log('Success:', data);
    callback(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

const displayFeed = (content) => {
  console.log("Displaying content...");
  feedEL = document.getElementById("headlines");
  // clear feed
  feedEL.innerHTML = "";
  let results = content.response.results
  results.forEach((result, index) => {
    // story card
    let storyEl = document.createElement('article');
    storyEl.className = "storyCard";
    // image
    let storyImg = document.createElement('img');
    storyImg.className = "storyThumb";
    storyImg.src = result.fields.thumbnail;
    // headline and link
    let storyHeadline = document.createElement('h2');
    let storyLink = document.createElement('a');
    storyHeadline.appendChild(storyLink);
    storyLink.textContent = result.webTitle;
    // storyLink.href = result.webUrl;
    storyLink.href = `#${index}`;
    // append all elements to story
    storyEl.appendChild(storyImg);
    storyEl.appendChild(storyHeadline);
    // append story to feed
    feedEl = document.getElementById("headlines");
    feedEl.appendChild(storyEl);
  })
}

let feedUrl = 'https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail'
fetchContent(feedUrl, displayFeed);

const makeUrlChange = () => {
  console.log("Changing URL...")
  window.addEventListener("hashchange", showStoryForCurrentPage);
}
const showStoryForCurrentPage = () => {
  let url = getStoryFromUrl(window.location);
  showStory(url);
}
const getStoryFromUrl = (location) => {
  return location.hash.split("#")[1];
}
const showStory = (story) => {
  let feedEL = document.getElementById("headlines")
  feedEL.innerHTML = "";
  let storyEl = document.createElement('p');
  storyEl.textContent = `I am story #${story}`;
  let home = document.createElement('a');
  home.textContent = "Go Back";
  home.href = "";
  feedEl.appendChild(home);
  feedEl.appendChild(storyEl);
}

makeUrlChange();