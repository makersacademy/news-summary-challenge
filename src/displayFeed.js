const displayFeed = (fetchedData) => {
  feedEl = document.getElementById('feedRequest');
  fetchedData.forEach((story) => {
    let storyEl = document.createElement('p');
    let storyImg = document.createElement('img');
    let storyLink = document.createElement('a');
    let categoryTag = document.createElement('p')
    let categoryURL = document.createElement('a');
    categoryURL.href = `https://www.theguardian.com/${story["sectionId"]}`
    storyEl.className = "storyCard";
    storyImg.classname = "storyThumb";
    categoryURL.innerText = `Category: ${story["sectionName"]}`;
    storyLink.href = story["webUrl"];
    storyImg.src = story["fields"]["thumbnail"];
    let storyTitle = story["webTitle"];
    storyLink.textContent = storyTitle;
    categoryTag.appendChild(categoryURL);
    storyEl.appendChild(storyImg);
    storyEl.appendChild(categoryTag);
    storyEl.appendChild(storyLink);
    feedEl.appendChild(storyEl);
  })
}

module.exports = {
  displayFeed
}