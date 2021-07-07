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

const guardianHttp = new XMLHttpRequest();

urlMaker = new UrlFormatter()
gApiUrl = urlMaker.returnGuardianHeadlinesUrl()

guardianHttp.open("GET", urlMaker.formatGuardianBaseUrl())
guardianHttp.send()

guardianHttp.onreadystatechange = function () {
  if(guardianHttp.readyState === XMLHttpRequest.DONE && guardianHttp.status === 200) {

        guardianResults = JSON.parse(guardianHttp.responseText).response.results
        guardianResults.forEach(function(result) {
          console.log(result)
          i = 0
          guardianObj = new ResponseParser(result)
          guardianParsed = guardianObj.parseGuardianResponse()
          aylienUrl = urlMaker.getAylienUrl(guardianParsed.webUrl)
          makersApiUrl = urlMaker.concatUrl("aylien", aylienUrl)
          const aylienHttp = new XMLHttpRequest();
          aylienHttp.open("GET", makersApiUrl)
          aylienHttp.send()
          aylienHttp.onreadystatechange = function () {
            if(aylienHttp.readyState === XMLHttpRequest.DONE && aylienHttp.status === 200) { 
              try {
                render = new Render()
                guardianObj = new ResponseParser(result)
                guardianParsed = guardianObj.parseGuardianResponse()
                aylienResponse = JSON.parse(aylienHttp.responseText)
                sentences = new ResponseParser().getAylienSentences(aylienResponse)
                sentencesHTML = new ResponseParser().returnHtmlStringFromSentences(sentences)
                summaryEl = render.renderSummaryDiv(guardianParsed, sentencesHTML)
                render.appendToDiv("root", summaryEl)
              } catch(err) {
                console.log(err)
              }
            }
        }
      })
      }
};

guardianObj = new ResponseParser(guardianResult)



