'use strict';

function displayTodaysNews(event) {
  event.preventDefault();
  document.querySelector('#get-data').style.display = 'none';
  // Add pageOneView to main div
  let container = document.querySelector('#container');
  pageOneView.setAttribute('class', 'card text-center m-3 p-3');
  pageOneView.setAttribute('id', 'page-one');
  container.appendChild(pageOneView);
  let headlines = data.viewAllNews()[0].sentences;
  // Iterating through fetched data array to display all elements
  loopOverTheHeaders(headlines);
}

function loopOverTheHeaders(headlines) {
  headlines.forEach(function (item, index) {
    // Add link to display heading
    let headerLink = document.createElement('a');
    headerLink.setAttribute('id', `${index}`);
    headerLink.setAttribute('href', '#');
    headerLink.addEventListener('click', newsHeadlines);
    let previewHeadline = new News(item);
    headerLink.innerHTML += (index + 1) + ':' + previewHeadline.preview() + '</br>';
    // Add image div for every heading title 
    let image = document.createElement('div');
    image.innerHTML = `Image ${index}`;
    image.setAttribute('class', 'image');
    pageOneView.appendChild(image);
    pageOneView.appendChild(headerLink);
  });
}

