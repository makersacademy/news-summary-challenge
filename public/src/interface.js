document.addEventListener('DOMContentLoaded', () => {

  // Headder elements
  let headder = document.createElement('headder');
  document.body.appendChild(headder);
  let h1_headder = document.createElement('h1');
  h1_headder.innerHTML = "THE GUARDIAN NEWS SUMMARY"
  headder.appendChild(h1_headder);



  // Main container

  let div_element = document.createElement('div');
  div_element.setAttribute('id', 'main-div');
  div_element.innerHTML = 'Hello'

  document.body.appendChild(div_element);





})
