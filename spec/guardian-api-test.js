// Test with no stub:

function testGetUrl() {
  var api = new GuardianApi();
  var expected = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=uk-news%26from-date=2020-01-11%26show-fields=headline,thumbnail"
  assert.eq(expected, api.getUrl("2020-01-11"));
};

// testGetUrl();

// Test with stub:

function testGetHeadlines() {
  var api = new GuardianApi();
  var headlines = api.getHeadlines();

  assert.eq(3, headlines.response.results.length);
  assert.eq("ok", headlines.response.status);

  assert.eq("Extinction Rebellion guidance raises fresh concerns over Prevent", headlines.response.results[0].fields.headline);
  assert.eq("https://media.guim.co.uk/3cf7fa7877d4fa2ac41b75b9e8e686a716fcafdb/449_174_4192_2516/500.jpg", headlines.response.results[0].fields.thumbnail);
  assert.eq("https://www.theguardian.com/uk-news/2020/jan/12/extinction-rebellion-guidance-raises-fresh-concerns-over-prevent", headlines.response.results[0].webUrl);

  assert.eq("Harry and Meghan’s conscious uncoupling from the royal family", headlines.response.results[2].fields.headline);
  assert.eq("https://media.guim.co.uk/614a9bd82d924bc1c8b8e005166fe8717ef73f04/179_50_2381_1428/500.jpg", headlines.response.results[2].fields.thumbnail);
  assert.eq("https://www.theguardian.com/uk-news/2020/jan/12/prince-harry-meghan-markle-conscious-uncoupling-royal-family-cut-ties-windsor", headlines.response.results[2].webUrl);
};

testGetHeadlines();
