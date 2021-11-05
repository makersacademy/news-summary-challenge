const displayFeed = (fetchedData) => {
  feedEl = document.getElementById('feedRequest');
  fetchedData.forEach((story) => {
    let storyEl = document.createElement('p');
    let storyContent = story["webTitle"];
    storyEl.textContent = storyContent;
    feedEl.appendChild(storyEl);
  })
}

module.exports = {
  displayFeed
}