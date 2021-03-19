function addGroupToHtml(testGroup) {
  main.innerHTML += `<h3 class="group">${testGroup}</h3>`
}

function addTestToHtml(test) {
  main.innerHTML += `<p class="test">${test}</p>`
}

function addPassToHtml() {
  main.innerHTML += `<p class="pass">PASS</p>`
  passCount++
  updateResultCount();
}

function addFailToHtml() {
  main.innerHTML += `<p class="fail">FAIL</p>`
  failCount++
  updateResultCount();
}

function addFailInfoToHtml(actual, message, expected) {
  main.innerHTML += `<p class="fail-info">expected ${actual} ${message} ${expected}</p>`
}

function updateResultCount() {
  document.getElementById('result-count')
    .innerHTML = `<h4>${passCount} Passes | ${failCount} Failures</h4>`
}
