'use strict';

let data = new NewsData()
let news = new News()
const pageOneView = document.createElement('div')
const pageTwoView = document.createElement('div')

document.addEventListener('DOMContentLoaded', () => {

  // fetching data from API after DOM loads
  data.getDataFromAPI()
  // Headder elements
  headerContent();
  // Main container
  let divElement = mainContainer();
  // Content for Main container
  let button = mainContainerContent(divElement);

  button.addEventListener('click', displayTodaysNews, {once: true})

})


function headerContent() {
  let header = document.createElement('header');
  header.setAttribute('class', 'navbar navbar-dark bg-primary');
  document.body.appendChild(header);
  let headerMainText = document.createElement('h1');
  headerMainText.innerHTML = "THE GUARDIAN NEWS SUMMARY";
  header.appendChild(headerMainText);
}

function mainContainer() {
  let divElement = document.createElement('div');
  divElement.setAttribute('id', 'container');
  document.body.appendChild(divElement);
  return divElement;
}

function mainContainerContent(divElement) {
  const imageElement = document.createElement('div');
  imageElement.setAttribute('id', 'animation-div');
  let button = document.createElement('button');
  button.setAttribute('id', 'get-data');
  button.setAttribute('class', 'btn btn-primary btn-lg btn-block my-5');
  button.innerHTML = 'Get Todays News';
  divElement.appendChild(imageElement);
  divElement.appendChild(button);
  return button;
}
