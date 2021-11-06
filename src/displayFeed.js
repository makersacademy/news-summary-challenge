const displayFeed = (fetchedData) => {
  feedEl = document.getElementById('feedRequest');
  fetchedData.forEach((story) => {
    let storyEl = document.createElement('p');
    let storyImg = document.createElement('img');
    let storyLink = document.createElement('a');
    let categoryTag = document.createElement('p')
    let categoryURL = document.createElement('a');
    let authorName = document.createElement('p');
    let bodyContent = document.createElement('p');
    categoryURL.href = `https://www.theguardian.com/${story["sectionId"]}`
    storyEl.className = "storyCard";
    storyImg.classname = "storyThumb";
    authorName.textContent = `Author: ${story["tags"][0]["webTitle"]}`;
    categoryURL.innerText = `Category: ${story["sectionName"]}`;
    storyLink.href = story["webUrl"];
    storyImg.src = story["fields"]["thumbnail"];
    let storyTitle = story["webTitle"];
    storyLink.textContent = storyTitle;
    bodyContent.innerHTML = `${story["fields"]["body"]}`;
    // let bodyContentShort = bodyContent.slice(0,20);
    categoryTag.appendChild(categoryURL);
    storyEl.appendChild(storyImg);
    storyEl.appendChild(categoryTag);
    storyEl.appendChild(storyLink);
    storyEl.appendChild(authorName);
    // storyEl.appendChild(bodyContent);
    feedEl.appendChild(storyEl);
  })
}

module.exports = {
  displayFeed
}