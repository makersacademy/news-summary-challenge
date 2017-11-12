'use strict';

(function (exports) {
   
  var _html = '';
  var _describeLevel = 0;
  var _passedTestCount = 0;
  var _failedTestCount = 0;
  var _tests = [];
  
  function addTest (string, callback) {
    _tests.push([_describeLevel, string, callback]);
  };
  
  function executeTest (string, callback) {
    try {
      callback();
      addPassingTest(string);
    }
    catch (err) {
      addFailedTest(string, err.stack);
    };
  }
  
  function addPassingTest (text) {
    _html += "<div class='passes'><p>it " + text + "</p></div>";
    _passedTestCount++;
  };

  function addFailedTest (text, err) {
    _html += "<div class='fails'><p>it " + text + "</p><p>" + err + "</p></div>";
    _failedTestCount++;
  };
  
  function runSuite () {
    helpers.run('before', describeLevel());
    _tests.forEach(function (test) {
      helpers.run('beforeEach', test[0]);
      executeTest(test[1], test[2]);
      helpers.run('afterEach', test[0]);      
    })
    helpers.run('after', describeLevel());  
  };
  
  function renderPage () {
    var container = document.getElementById('spec-runner');
    container.innerHTML += _html;
    _html = '';
    renderStats();
  };
  
  function renderStats () {
    var total = document.getElementById('total');
    var failed = document.getElementById('failed');
    total.textContent = _passedTestCount + _failedTestCount + ' tests,';
    failed.textContent = _failedTestCount + ' failures';
  };

  function startDescribe (text, counter) {
    _describeLevel++;
    _html += '<article><p class="describe_block">' + text + '</p>';
  };

  function endDescribe (counter) {
    runSuite();
    helpers.reset(describeLevel());    
    _describeLevel--;
    _html += '</article>';
    if (describeLevel() === 0) renderPage();
    _tests = [];
  };

  function describeLevel () {
    return _describeLevel;
  };

  exports.output = {
    startDescribe: startDescribe,
    endDescribe: endDescribe,
    describeLevel: describeLevel,
    addTest: addTest,
  };

})(this);
