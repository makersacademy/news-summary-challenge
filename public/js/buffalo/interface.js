function addGroupToHtml(testGroup) {
  main.innerHTML += `<h4 class="group">${testGroup}</h4>`
}

function addTestToHtml(test) {
  main.innerHTML += `<p class="test">${test}: </p>`
}

function addPassToHtml() {
  main.innerHTML += `<p class="pass">PASS</p><br>`
  passCount++
  updateResultCount();
}

function addFailToHtml() {
  main.innerHTML += `<p class="fail">FAIL: </p>`
  failCount++
  updateResultCount();
}

function addFailInfoToHtml(actual, message, expected) {
  main.innerHTML += `<p class="fail-info">expected ${actual} ${message} ${expected}</p><br>`
}

function updateResultCount() {
  let failClass
  if (failCount > 0) {
    failClass = 'red'
  } else {
    failClass = 'green'
  }

  document.getElementById('result-count')
    .innerHTML = `<h3 class="${failClass}">Passes: ${passCount}, Failures: ${failCount}</h4>`
}
