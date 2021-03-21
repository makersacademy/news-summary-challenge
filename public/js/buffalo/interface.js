const main = document.getElementById('specs')

let errorCount = 0
let passCount = 0
let failCount = 0
let dots = ''

function addGroupToHtml(testGroup) {
  main.innerHTML += `<h4 class="group">${testGroup}:</h4>`;
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

function addErrorToHtml(error) {
  errorCount++
  main.innerHTML += `<p class="error"><span class="fail">ERROR</span>: ${error}</p><br>`;
  dots += '<span class="red-dot">● </span>'
  updateResultCount();
  updateDots();
}

function addErrorToGroup(error) {
  errorCount++
  main.innerHTML += `<p class="group-error">● <span class="fail">ERROR</span>: ${error}</p>`;
  dots += '<span class="red-dot">● </span>'
  updateResultCount();
  updateDots();
}

function updateResultCount() {
  let failClass;
  if (failCount + errorCount > 0) {
    failClass = 'red';
  } else {
    failClass = 'green';
  }

  if (testCount === 0) {
    document.getElementById('result-count')
      .innerHTML = `<h3 class="noSpecs">No Specs Found</h3>`;
  } else {
    document.getElementById('result-count')
      .innerHTML = `<h3 class="${failClass}">Passes: ${passCount}, Failures: ${failCount}, Errors: ${errorCount}</h3>`;
  }
}

function updateDots() {
  document.getElementById('dots')
    .innerHTML = dots
}
