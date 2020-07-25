function speedread() {

  var words = document.getElementById('text').value.split(/\s/);
  
  for (var x = 0; x <= words.length; x+y) {
    console.log('in the method'+words[x])
    setTimeout(function() {
         var $y = showWord(words,x)
         return $y
    }, 3000);
    y = $y
  }
}

  function showWord(words,position) {
    var $displayWord = document.getElementById('displayWord');
    $displayWord.innerHTML = words[position] + "Text";
    console.log('in showWord'+words[position])
    return 1
  };

var btn = document.getElementById("submitButton")
btn.addEventListener("click", speedread);