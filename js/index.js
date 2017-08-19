(function() {
  var xhttp = new XMLHttpRequest();
  var guardianAPICaller = new GuardianAPICaller(xhttp);
  guardianAPICaller.setupAPIListener();
  guardianAPICaller.makeAPIRequest();
})();
