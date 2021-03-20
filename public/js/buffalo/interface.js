const main = document.getElementById('specs')

let passCount = 0
let failCount = 0
let dots = ''

function addGroupToHtml(testGroup) {
  main.innerHTML += `<h4 class="group">${testGroup}</h4>`;
}

function addTestToHtml(test) {
  main.innerHTML += `<p class="test">● ${test}: </p>`;
}

function addPassToHtml() {
  main.innerHTML += `<p class="pass">PASS</p><br>`;
  passCount++;
  dots += '<span class="green-dot">● </span>'
  updateResultCount();
  updateDots();
}

function addFailToHtml() {
  main.innerHTML += `<p class="fail">FAIL: </p>`;
  failCount++;
  dots += '<span class="red-dot">● </span>'
  updateResultCount();
  updateDots();
}

function addFailInfoToHtml(actual, message, expected) {
  main.innerHTML += `<p class="fail-info">expected ${actual} ${message} ${expected}</p><br>`;
}

function updateResultCount() {
  let failClass;
  if (failCount > 0) {
    failClass = 'red';
  } else {
    failClass = 'green';
  }

  if (testCount === 0) {
    document.getElementById('result-count')
      .innerHTML = `<h3 class="noSpecs">No Specs Found</h3>`;
  } else {
    document.getElementById('result-count')
      .innerHTML = `<h3 class="${failClass}">Passes: ${passCount}, Failures: ${failCount}</h3>`;
  }
}

function updateDots() {
  document.getElementById('dots')
    .innerHTML = dots
}
