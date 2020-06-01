'use strict';

function takeToPageOne() {
  let pageTwoView = document.querySelector('#page-two');
  pageTwoView.style.display = 'none';
  while (pageTwoView.firstChild) {
    pageTwoView.removeChild(pageTwoView.lastChild);
  }
  document.querySelector('#page-one').style.display = 'block';
}
