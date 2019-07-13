(function (exports){
  function FetchGuardianFrontAPI(){
  }

  FetchGuardianFrontAPI.prototype._fetchHeadlines = function(){

    //----------- this returns another promise that needs to get resolved and data extracted but struggling with async nature
    return promise = fetch('https://api.nextgen.guardianapps.co.uk/uk/lite.json')
    .then(response => response.json())
    .then(data => data)

 
 
 //---------------------uncomment here to show working with static data-------------------
    // var exampleJson = {
    //   "webTitle": "Network Front",
    //   "collections": [
    //     {
    //       "displayName": "Headlines",
    //       "id": "uk-alpha/news/regular-stories",
    //       "content": [
    //         {
    //           "headline": "Private school student cleared of murdering teenager Yousef Makki",
    //           "trailText": "Boy, 17, found not guilty of killing friend from Manchester Grammar school in Hale Barns",
    //           "thumbnail": "https://i.guim.co.uk/img/media/a90fa420260d522e4d9bb2c4c4377ef2d5d6e062/0_290_1952_1171/500.jpg?quality=85&auto=format&fit=max&s=bafbd4582ff4ecefed077b1a669fb072",
    //           "shortUrl": "https://gu.com/p/bpgg3",
    //           "id": "uk-news/2019/jul/12/teenager-cleared-of-of-yousef-makki-17-in-cheshire",
    //           "group": "2",
    //           "frontPublicationDate": 1562940851697
    //         },
    //         {
    //           "headline": "UK to step up military presence in Gulf ",
    //           "trailText": "MoD says second warship will be deployed within days to protect British commercial oil tankers ",
    //           "thumbnail": "https://i.guim.co.uk/img/media/37282115bec82009fe5c3bdf5c47a31cb91512a1/1004_854_4308_2586/500.jpg?quality=85&auto=format&fit=max&s=409d17aeb5b99edbed2e2169f78fac1d",
    //           "shortUrl": "https://gu.com/p/bpea5",
    //           "id": "world/2019/jul/12/iran-warns-western-powers-to-leave-region-amid-gulf-crisis",
    //           "group": "2",
    //           "frontPublicationDate": 1562916463844,
    //           "supporting": [
    //             {
    //               "headline": "The UK must stand up to Trump over Iran",
    //               "trailText": "The US is threatening stability in the Middle East. Britain must support the Iran nuclear deal, says author Eskandar Sadeghi-Boroujerdi",
    //               "thumbnail": "https://i.guim.co.uk/img/media/972d11ee5dbf2fd2ff855dfda993e64eae27b0d5/0_0_5482_3289/500.jpg?quality=85&auto=format&fit=max&s=4efa28cad7057403c1ebbea0a351a54b",
    //               "shortUrl": "https://gu.com/p/bpg5h",
    //               "id": "commentisfree/2019/jul/12/uk-trump-iran-stability-middle-east",
    //               "group": "0",
    //               "frontPublicationDate": 1562942661795
    //             }
    //           ]
    //         },
    //         {
    //           "headline": "Man found guilty of murdering passenger on Surrey train",
    //           "trailText": "Darren Pencille killed Lee Pomeroy in front of his son during row about aisle blocking<br>",
    //           "thumbnail": "https://i.guim.co.uk/img/media/a0d845a8ff828430c7b563d1ed98edc522056a1b/222_133_1571_942/500.jpg?quality=85&auto=format&fit=max&s=adfc92733319b3739b4a7eaaaff6fb3a",
    //           "shortUrl": "https://gu.com/p/bpg9e",
    //           "id": "uk-news/2019/jul/12/man-found-guilty-of-murdering-passenger-on-surrey-train",
    //           "group": "1",
    //           "frontPublicationDate": 1562937646753
    //         }
    //       ]
    //     },
    //     {
    //       "displayName": "Podcast",
    //       "href": "news/series/todayinfocus",
    //       "id": "75ef80cd-2f3d-40d6-abf6-2021f88ece8e",
    //       "content": [
    //         {
    //           "headline": "Stop and search is discriminatory, so why is it on the rise?",
    //           "trailText": "The first stop and search Jamal ever experienced was when he was 11 years old. Now, at 24, he has been stopped numerous times. There is little evidence stop and search works in combating violent crime, but critics say it disproportionately targets young black men",
    //           "thumbnail": "https://i.guim.co.uk/img/media/ab91bd2558f894d2d4188fcd8cd1410bc4384f03/0_0_3500_2101/500.jpg?quality=85&auto=format&fit=max&s=2984bf5e6541a060cc34bdc5551120dd",
    //           "shortUrl": "https://gu.com/p/bp9h8",
    //           "id": "news/audio/2019/jul/12/stop-and-search-is-ineffective-so-why-is-it-on-the-rise-podcast",
    //           "group": "0"
    //         }
    //       ]
    //     },
    //     {
    //       "displayName": "Spotlight",
    //       "id": "66943059-f13f-43fb-8422-a23cad112b28",
    //       "content": [
    //         {
    //           "headline": "My gonzo night at writer's cabin – now on Airbnb",
    //           "trailText": "His incendiary prose changed journalism – and America. Our writer spends a night at the typewriter where it all happened",
    //           "thumbnail": "https://i.guim.co.uk/img/media/89899a1c9fa3ca75259af8d2402136f956aac43b/248_66_4775_2865/500.jpg?quality=85&auto=format&fit=max&s=3418f70d64d3764ff400fd037fc1e049",
    //           "shortUrl": "https://gu.com/p/bjgf8",
    //           "id": "books/2019/jul/12/gonzo-hunter-s-thompson-cabin-airbnb-fear-colorado",
    //           "group": "2",
    //           "frontPublicationDate": 1562937355928
    //         },
    //         {
    //           "headline": "No 6 Collaborations Project – smarm, charm and a watertight winning formula",
    //           "trailText": "The affable everyman dabbles in grime, hip-hop, balladry and Latino love songs as he zooms down the middle of the road to world domination",
    //           "thumbnail": "https://i.guim.co.uk/img/media/aa39c0591aba00b2262778d7b11cc4d46b9b0e87/0_76_4000_2400/500.jpg?quality=85&auto=format&fit=max&s=8fcace1cb0c7343485ce516dad388512",
    //           "shortUrl": "https://gu.com/p/bpg77",
    //           "id": "music/2019/jul/12/ed-sheeran-no-6-collaborations-project-review",
    //           "group": "2",
    //           "frontPublicationDate": 1562942232790
    //         }
    //       ]
    //     }
    //   ]
    // };
    // return exampleJson

}



exports.FetchGuardianFrontAPI = FetchGuardianFrontAPI

})(this);
