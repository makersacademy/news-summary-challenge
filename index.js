console.log("Running...")

const loadContent = () => {
  let pageId = location.hash.split("#")[1];
  let feedUrl = 'https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail';
  if (pageId == "home") {
    console.log(`loading ${pageId}`);
    console.log(feedUrl)
    fetchContent(feedUrl, displayFeed);
  } else {
    console.log(`loading ${pageId}`);
    console.log(feedUrl)
    fetchContent(feedUrl, displayStory);
  }
}

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
  console.log("Displaying feed...");
  feedEL = document.getElementById("headlines");
  // clear feed
  feedEL.innerHTML = "";
  let results = content.response.results
  results.forEach((result) => {
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
    storyLink.href = "#" + result.id;
    // append all elements to story
    storyEl.appendChild(storyImg);
    storyEl.appendChild(storyHeadline);
    // append story to feed
    feedEl = document.getElementById("headlines");
    feedEl.appendChild(storyEl);
  })
}

const displayStory = (content) => {
  let pageId = location.hash.split("#")[1];
  console.log("Displaying story...");
  console.log("PageId:" + pageId)

  let result = content.response.results.find(element => element.id == pageId)
  console.log(result);

  feedEL = document.getElementById("headlines");
  // clear feed
  feedEL.innerHTML = "";

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
  storyLink.href = result.webUrl;
  // body text
  let storyBody = document.createElement('div');
  storyBody.innerHTML = result.fields.body;
  // append all elements to story
  storyEl.appendChild(storyImg);
  storyEl.appendChild(storyHeadline);
  storyEl.appendChild(storyBody);
  // append story to feed
  feedEl = document.getElementById("headlines");
  feedEl.appendChild(storyEl);
  window.scrollTo(0, 0);
}

// if there is no location hash make it home
if(!location.hash) {
  location.hash = "#home";
}
// call loadContent on script load
loadContent();
// call loadContent on hashchange
window.addEventListener("hashchange", loadContent)