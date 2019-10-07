document.addEventListener('buildOverview', testOverview, false);

function testOverview() {
  if(document.getElementById('headlines9').innerHTML !== 'Erratic Trump struggles to control message as impeachment threat grows') {
    console.log("Top Article not on site as expected");
    console.log(document.getElementById('headlines9').innerHTML)
  }
  else { console.log("Top Article on site as expected") }

  if(document.getElementById('headlines1').innerHTML !== 'Counter-terror police running secret Prevent database') {
    console.log("Bottom Article not on site as expected");
    console.log(document.getElementById('headlines1').innerHTML)
  }
  else { console.log("Bottom Article on site as expected") }

  if(document.getElementById('headlines_pic1').innerHTML !== '<img src="https://media.guim.co.uk/1d79ce3f5d563c8202fe8ea25ccbf379c7ac2384/0_98_3500_2099/500.jpg">') {
    console.log("Bottom picture link not on site as expected");
    console.log(document.getElementById('headlines_pic1').innerHTML)
  }
  else { console.log("Bottom picture link on site as expected") }

  if(document.getElementById('headlines_pic9').innerHTML !== '<img src="https://media.guim.co.uk/09485718a045852ca1a6e81b4d9ef7311530cfff/0_328_4961_2979/500.jpg">') {
    console.log("Top picture link not on site as expected");
    console.log(document.getElementById('headlines_pic9').innerHTML)
  }
  else { console.log("Top picture link on site as expected") }


console.log('Tests completed - Overview')

};
