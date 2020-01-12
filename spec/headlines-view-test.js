// Use guardian api stub

function testHeadlinesView() {
  var api = new GuardianApi();
  var headlines = new HeadlinesView(api);
  html = `<ul><li><a href="#article/0"><img src="https://media.guim.co.uk/3cf7fa7877d4fa2ac41b75b9e8e686a716fcafdb/449_174_4192_2516/500.jpg"></img><br>Extinction Rebellion guidance raises fresh concerns over Prevent</a></li><li><a href="#article/1"><img src="https://media.guim.co.uk/40754c5ff869aab4f0aae93b28831b8456ec9f7a/0_342_5126_3075/500.jpg"></img><br>Ex-Prevent chief pans terror list's inclusion of Extinction Rebellion</a></li><li><a href="#article/2"><img src="https://media.guim.co.uk/614a9bd82d924bc1c8b8e005166fe8717ef73f04/179_50_2381_1428/500.jpg"></img><br>Harry and Meghan’s conscious uncoupling from the royal family</a></li></ul>`
  assert.eq(html, headlines.html());
};

testHeadlinesView();
