describe('Api', function() {
var fakeResponse = {"response":{"status":"ok","userTier":"developer","total":2024539,"startIndex":1,"pageSize":10,"currentPage":1,"pages":202454,"orderBy":"newest","results":[
  {"id":"football/live/2018/apr/08/arsenal-v-southampton-premier-league-live","type":"liveblog","sectionId":"football","sectionName":"Football","webPublicationDate":"2018-04-08T13:40:31Z","webTitle":"test 1","webUrl":"https://www.theguardian.com/football/live/2018/apr/08/arsenal-v-southampton-premier-league-live","apiUrl":"https://content.guardianapis.com/football/live/2018/apr/08/arsenal-v-southampton-premier-league-live","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"},
  {"id":"media/2018/apr/08/an-oasis-of-calm-quaker-groups-30-minutes-of-silence-podcast","type":"article","sectionId":"media","sectionName":"Media","webPublicationDate":"2018-04-08T13:38:40Z","webTitle":"test 2","webUrl":"https://www.theguardian.com/media/2018/apr/08/an-oasis-of-calm-quaker-groups-30-minutes-of-silence-podcast","apiUrl":"https://content.guardianapis.com/media/2018/apr/08/an-oasis-of-calm-quaker-groups-30-minutes-of-silence-podcast","isHosted":false,"pillarId":"pillar/news","pillarName":"News"},
  {"id":"football/live/2018/apr/08/real-madrid-v-atletico-madrid-la-liga-live","type":"liveblog","sectionId":"football","sectionName":"Football","webPublicationDate":"2018-04-08T13:35:40Z","webTitle":"test 3","webUrl":"https://www.theguardian.com/football/live/2018/apr/08/real-madrid-v-atletico-madrid-la-liga-live","apiUrl":"https://content.guardianapis.com/football/live/2018/apr/08/real-madrid-v-atletico-madrid-la-liga-live","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"}
]}};

  // it('is able to get the latest headlines using the guardian api', function() {
  //   var api = new Api();
  //
  //   return expect().toEqual();
  // });

  it('is able to set a url for a different search query', function() {
    var api = new Api();
    api.setUrl('test');

    return expect(api.getUrl()).toEqual('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/test')
  });

  it('is able store a response received from the server', function() {
    var api = new Api();
    api.storeResponse(fakeResponse);

    return expect(api.getResponse()).toMatchArray(fakeResponse.response.results);
  });

  it('is able to parse the headlines from a response', function() {
    var api = new Api();
    api.storeResponse(fakeResponse);
    return expect(api.parseResponse()).toMatchArray(["test 1", "test 2", "test 3"]);
  });
});
