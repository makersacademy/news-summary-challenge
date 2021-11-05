const displayFeed = (fetchedData) => {
  feedEl = document.getElementById('feedRequest');
  fetchedData.forEach((story) => {
    let storyEl = document.createElement('p');
    let storyLink = document.createElement('a');
    storyLink.href = story["webUrl"]
    let storyTitle = story["webTitle"];
    storyLink.textContent = storyTitle;
    storyEl.appendChild(storyLink);
    feedEl.appendChild(storyEl);
  })
}

module.exports = {
  displayFeed
}