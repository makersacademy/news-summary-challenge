function speedread(text) {
  console.log("Start SpeedRead")
  var words = document.getElementById(text).value.split(/\s/);

  for (let i = 0; i <= words.length; i++) {
    setTimeout(function() { showWord(words,i) }, i*150);
  };

  function showWord(words,position) {
    if (words[position]===undefined) {
      document.getElementById('displayWord').innerHTML = "";
    } else {
    document.getElementById('displayWord').innerHTML = words[position];
    }
  };

};