function getFullScreenHandler(index) {
  return function displaySingle() {
    var single = getStoryView(stories.getIndex(index));
    document.querySelector('.stories').innerHTML = single.toFullPage();
    attachReturnListener();
  };
};

function attachFullScreenListeners() {
  var elements = document.querySelectorAll('.content');
  for (var index = 0; index < elements.length; index++) {
    var element = elements[index];
    element.addEventListener('click', getFullScreenHandler(index));
  };
};

function attachReturnListener() {
  var element = document.querySelector('.full-content');
  element.addEventListener('click', displayAll);
};

