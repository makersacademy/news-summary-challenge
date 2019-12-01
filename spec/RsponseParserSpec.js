const ResponseParser = require("../src/ResponseParser.js").ResponseParser
const expect = require("../lib/tester.js").expect
const scenario = require("../lib/tester.js").scenario
const describe = require("../lib/tester.js").describe

var result = {
  "id": "uk-news/2019/dec/01/gogglebox-pulled-over-salmond-sexual-assault-case-contempt-fears",
  "type": "article",
  "sectionId": "uk-news",
  "sectionName": "UK news",
  "webPublicationDate": "2019-12-01T17:12:05Z",
  "webTitle": "Gogglebox pulled over Salmond sexual assault case contempt fears",
  "webUrl": "https://www.theguardian.com/uk-news/2019/dec/01/gogglebox-pulled-over-salmond-sexual-assault-case-contempt-fears",
  "apiUrl": "https://content.guardianapis.com/uk-news/2019/dec/01/gogglebox-pulled-over-salmond-sexual-assault-case-contempt-fears",
  "fields": {
  "body": "<p>Channel 4 has pulled an episode of Gogglebox over fears it may have prejudiced the forthcoming trial of the former Scottish first minister Alex Salmond on sexual assault charges, including attempted rape.</p> <p>The programme, where families are recorded at home making comments about the previous week’s television, is likely to have been seen by millions of people when it was first broadcast on Friday night.</p> <p>In the episode members of the Derby-based Siddiqui family are seen making comments about Salmond while discussing the performance of Scotland’s current first minister, Nicola Sturgeon, during a televised leaders debate.</p> <p>Both Salmond’s legal team and the Scottish Crown Office, which is responsible for prosecuting the case, are aware of the broadcast, according to the Scottish Sunday Mail.</p> <p>A spokesperson for Channel 4 confirmed it was aware of the concerns. “We are looking into this and have taken the episode from the schedule in the meantime.” A planned repeat of the programme has been cancelled, while the episode of the hit programme is also unavailable on the channel’s All 4 catchup service.</p> <p>Scotland has far stricter rules on what can be said in relation to live court cases than the rest of the UK.</p> <p>Salmond is due to stand trial in March charged with 14 offences, including an attempted rape, one intent to rape, 10 sexual assaults and two indecent assaults, allegedly committed while he was the first minister and the Scottish National party leader.</p> <p>Some of the incidents are alleged to have taken place in a bedroom at Bute House, the property in Edinburgh used as the official residence of Scotland’s first ministers.</p> <p>Salmond has said he will vigorously defend himself against all the charges when the case comes to court.</p>",
  "thumbnail": "https://media.guim.co.uk/3c15c89f1cb6aec68f509cc9c1f9897d07287f0c/0_11_4250_2550/500.jpg"
  },
  "isHosted": false,
  "pillarId": "pillar/news",
  "pillarName": "News"
}

var responseParser = new ResponseParser(result)

describe("#getApiUrl", function() {
  scenario("It returns the api url for an article", function() {
    expect(responseParser.getApiUrl(result)).toEqual(result.apiUrl)
  })
})

describe("#getWebUrl", function() {
  scenario("It returns the web url for an article", function(){
    expect(responseParser.getWebUrl(result)).toEqual(result.webUrl)
  })
})

describe("#getThumbnailUrl", function() {
  scenario("It returns the thumbnail url for an article", function(){
    expect(responseParser.getThumbnailUrl(result)).toEqual(result.fields.thumbnail)
  })
})

describe("#getTitle", function() {
  scenario("It returns the headline of a result", function() {
    expect(responseParser.getTitle(result)).toEqual(result.webTitle)
  })
})

describe("#getbody", function() {
  scenario("It returns the body of a result", function() {
    expect(responseParser.getBody(result)).toEqual(result.fields.body)
  })
})

describe("#parsedGuardianResponse", function() {
  scenario("It returns the parsed version of a result", function() {
    parsedGuardianResponse = responseParser.parseGuardianResponse(result)
    expect(parsedGuardianResponse.body).toEqual(result.fields.body)
    expect(parsedGuardianResponse.title).toEqual(result.webTitle)
    expect(parsedGuardianResponse.thumbnailUrl).toEqual(result.fields.thumbnail)
  })
})