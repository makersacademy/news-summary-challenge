const Article = require('./article');
const newsFeed = require('./newsFeed');

const displayFeed = (fetchedData) => {
  feedEl = document.getElementById('feedRequest');
  fetchedData.forEach((story) => {
    // Define elements
    let storyEl = document.createElement('article');
    let storyImg = document.createElement('img');
    let storyLink = document.createElement('a');
    let categoryTag = document.createElement('p')
    let categoryURL = document.createElement('a');
    let authorName = document.createElement('p');
    let readStory = document.createElement('button');
    let storyTitle = story["webTitle"];

    // let bodyContent = document.createElement('p');

    // Set Classes
    storyEl.className = "storyCard";
    storyImg.className = "storyThumb";

    let storyCount = document.querySelectorAll(".storyCard").length;
    storyEl.id = storyCount;

    // Set URLs
    categoryURL.href = `https://www.theguardian.com/${story["sectionId"]}`
    storyLink.href = story["webUrl"];

    //Set Text Content
    authorName.textContent = `Author: ${story["tags"][0]["webTitle"]}`;
    categoryURL.textContent = `Category: ${story["sectionName"]}`;
    storyLink.textContent = storyTitle;
    readStory.textContent = 'Click to read full story';
    readStory.id = storyCount;
    
    //Set image src
    storyImg.src = story["fields"]["thumbnail"];
    
    // bodyContent.innerHTML = `${story["fields"]["body"]}`;

    //Append Child
    categoryTag.appendChild(categoryURL);
    storyEl.appendChild(storyImg);
    storyEl.appendChild(categoryTag);
    storyEl.appendChild(storyLink);
    storyEl.appendChild(authorName);
    storyEl.appendChild(readStory);
    feedEl.appendChild(storyEl);
  })
}

module.exports = {
  displayFeed
}