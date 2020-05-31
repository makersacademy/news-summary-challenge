'use strict';

function newsHeadlines() {
  event.preventDefault();
  let pageOne = document.querySelector('#page-one');
  pageOne.style.display = 'none';
  let fullHeadlineView = document.createElement('p');
  fullHeadlineView.setAttribute('class', 'full-header');
  fullHeadlineView.innerHTML = `${data.viewAllNews()[0].sentences[this.id]}`;
  pageTwoView.setAttribute('class', 'card text-center m-3 p-3');
  pageTwoView.setAttribute('id', 'page-two');
  let button = document.createElement('button');
  button.setAttribute('class', 'btn btn-warning btn-lg');
  button.innerHTML = 'Back To View Todays Headlines';
  button.addEventListener('click', takeToPageOne);
  container.appendChild(pageTwoView);
  pageTwoView.appendChild(fullHeadlineView);
  pageTwoView.appendChild(document.createElement('br'));
  pageTwoView.appendChild(button);
  // Hide page two view
  document.querySelector('#page-two').style.display = 'block';
}
