const ResponseParser = require("../src/ResponseParser.js").ResponseParser
const expect = require("../lib/tester.js").expect
const it = require("../lib/tester.js").it
const describe = require("../lib/tester.js").describe
const context = require("../lib/tester.js").context

var guardianResult = {
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

var aylienResult = {
  "text": "Channel 4 has pulled an episode of Gogglebox over fears it may have prejudiced the forthcoming trial of the former Scottish first minister Alex Salmond on sexual assault charges, including attempted rape.\n\nThe programme, where families are recorded at home making comments about the previous week’s television, is likely to have been seen by millions of people when it was first broadcast on Friday night.\n\nIn the episode members of the Derby-based Siddiqui family are seen making comments about Salmond while discussing the performance of Scotland’s current first minister, Nicola Sturgeon, during a televised leaders debate.\n\nBoth Salmond’s legal team and the Scottish Crown Office, which is responsible for prosecuting the case, are aware of the broadcast, according to the Scottish Sunday Mail.\n\nA spokesperson for Channel 4 confirmed it was aware of the concerns. “We are looking into this and have taken the episode from the schedule in the meantime.” A planned repeat of the programme has been cancelled, while the episode of the hit programme is also unavailable on the channel’s All 4 catchup service.\n\nScotland has far stricter rules on what can be said in relation to live court cases than the rest of the UK.\n\nSalmond is due to stand trial in March charged with 14 offences, including an attempted rape, one intent to rape, 10 sexual assaults and two indecent assaults, allegedly committed while he was the first minister and the Scottish National party leader.\n\nSome of the incidents are alleged to have taken place in a bedroom at Bute House, the property in Edinburgh used as the official residence of Scotland’s first ministers.\n\nSalmond has said he will vigorously defend himself against all the charges when the case comes to court.",
  "sentences": [
  "Channel 4 has pulled an episode of Gogglebox over fears it may have prejudiced the forthcoming trial of the former Scottish first minister Alex Salmond on sexual assault charges, including attempted rape.",
  "In the episode members of the Derby-based Siddiqui family are seen making comments about Salmond while discussing the performance of Scotland’s current first minister, Nicola Sturgeon, during a televised leaders debate.",
  "Both Salmond’s legal team and the Scottish Crown Office, which is responsible for prosecuting the case, are aware of the broadcast, according to the Scottish Sunday Mail.",
  "Salmond is due to stand trial in March charged with 14 offences, including an attempted rape, one intent to rape, 10 sexual assaults and two indecent assaults, allegedly committed while he was the first minister and the Scottish National party leader.",
  "Some of the incidents are alleged to have taken place in a bedroom at Bute House, the property in Edinburgh used as the official residence of Scotland’s first ministers."
  ]
}

var responseParser = new ResponseParser(guardianResult)

context("Parsing the guardian response", function() {
  describe("#getApiUrl", function() {
    it("returns the api url for an article", function() {
      expect(responseParser.getApiUrl(guardianResult)).toEqual(guardianResult.apiUrl)
    })
  })
  
  describe("#getWebUrl", function() {
    it("returns the web url for an article", function(){
      expect(responseParser.getWebUrl(guardianResult)).toEqual(guardianResult.webUrl)
    })
  })
  
  describe("#getThumbnailUrl", function() {
    it("returns the thumbnail url for an article", function(){
      expect(responseParser.getThumbnailUrl(guardianResult)).toEqual(guardianResult.fields.thumbnail)
    })
  })
  
  describe("#getTitle", function() {
    it("returns the headline of a guardianResult", function() {
      expect(responseParser.getTitle(guardianResult)).toEqual(guardianResult.webTitle)
    })
  })
  
  describe("#getbody", function() {
    it("returns the body of a guardianResult", function() {
      expect(responseParser.getBody(guardianResult)).toEqual(guardianResult.fields.body)
    })
  })
  
  describe("#parsedGuardianResponse", function() {
    it("returns the parsed version of a guardianResult", function() {
      parsedGuardianResponse = responseParser.parseGuardianResponse(guardianResult)
      expect(parsedGuardianResponse.body).toEqual(guardianResult.fields.body)
      expect(parsedGuardianResponse.title).toEqual(guardianResult.webTitle)
      expect(parsedGuardianResponse.thumbnailUrl).toEqual(guardianResult.fields.thumbnail)
    })
  })
})

context("Parsing the aylienResponse", function() {
  describe("#getSentences", function(){
    it("returns an array of sentances", function(){
      expect(responseParser.getAylienSentences(aylienResult)).toEqual(aylienResult.sentences)
    })
  })

  describe("#returnHtmlStringFromSentences", function(){
    it("returns an array of sentances", function(){
      sentences = aylienResult.sentences
      expect(responseParser.returnHtmlStringFromSentences(sentences)).toEqual(`<br>${sentences[0]}</br><br>${sentences[1]}</br><br>${sentences[2]}</br><br>${sentences[3]}</br><br>${sentences[4]}</br>`)
    })
  })
})