document.addEventListener('DOMContentLoaded', () => {

  // Headder elements
  let header = document.createElement('header');
  document.body.appendChild(header);
  let h1_header = document.createElement('h1');
  h1_header.innerHTML = "THE GUARDIAN NEWS SUMMARY"
  header.appendChild(h1_header);

  // Main container
  let div_element = document.createElement('div');
  div_element.setAttribute('id', 'container');

  document.body.appendChild(div_element);

})
