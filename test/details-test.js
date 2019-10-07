document.addEventListener('buildDetails', testDetails, false);

function testDetails() {
  document.location.hash = '#2';
  setTimeout(function(){
    if(document.getElementById('detail').innerHTML !== ' Details should be here!  World Athletics Championships: final day â€“ live!') {
      console.log("Details not on site as expected");
      console.log(document.getElementById('detail').innerHTML)
    }
    else { console.log("Details on site as expected") }
    console.log('Tests completed - Details')
    document.getElementById('detail').innerHTML = ''
  }, 100);
};
