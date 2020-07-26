function speedread(text) {
  console.log("Start SpeedRead")
  console.log(text)
  var words = document.getElementById(text).innerHTML.split(/\s/);

  for (let i = 0; i <= words.length; i++) {
    setTimeout(function() { showWord(words,i) }, i*300);
  };

  function showWord(words,position) {
    if (words[position]===undefined) {
      document.getElementById('speedread'+text).innerHTML = "";
    } else {
      console.log('speedread'+text)
    document.getElementById('speedread'+text).innerHTML = words[position];
    }
  };

};