const NewsClient = require('../src/newsClient');
require('jest-fetch-mock').enableMocks();
const apiData = require('../mock/mockApiData.js');
const API_TOKEN = process.env.API_TOKEN;

describe(NewsClient, () => {
  let newsClient;
  beforeEach(() => {
    fetch.mockReset();
    newsClient = new NewsClient();
  });

  describe('loadNews', () => {
    it('calls fetch and loads data', (done) => {
      fetch.mockResponseOnce(JSON.stringify(apiData));
      newsClient.loadNews((data) => {
        const results = data.response.results;
        const stories = results.map((article) => {
          const { webUrl } = article;
          const { headline, thumbnail, standfirst } = article.fields;
          return { webUrl, headline, thumbnail, standfirst };
        });
        expect(stories[0].thumbnail).toBe(
          'https://media.guim.co.uk/4eb07f2f4bbd086197aa76ca2de731ad7fefc9fd/0_228_4500_2700/500.jpg'
        );
        expect(stories[0].headline).toBe(
          'UK house price growth slows to lowest rate since mid-2020; all eyes on Fed decision – business live'
        );
        expect(stories[0].webUrl).toBe(
          'https://www.theguardian.com/business/live/2023/feb/01/uk-annual-house-price-growth-slows-lowest-rate-since-mid-2020-chinas-factories-slump-us-federal-reserve-rate-decision'
        );
        expect(stories[0].standfirst).toBe(
          '<p>UK annual house price growth slows to 1.1%; investors await US Federal Reserve message on whether it will tighten monetary policy further</p>'
        );
        done();
      });
    });

    it('catches errors', (done) => {
      fetch.mockRejectedValue('Oops, something went wrong!');

      newsClient.loadNews(
        () => {},
        (error) => {
          expect(error).toBe('Oops, something went wrong!');
          done();
        }
      );
    });
  });
  describe('searchNews', () => {
    it('calls fetch on the API with searchdata', (done) => {
      fetch.mockResponseOnce(JSON.stringify(apiData));
      newsClient.searchNews('sport', (data) => {
        const results = data.response.results;
        const stories = results.map((article) => {
          const { webUrl } = article;
          const { headline, thumbnail, standfirst } = article.fields;
          return { webUrl, headline, thumbnail, standfirst };
        });
        expect(stories[0].thumbnail).toBe(
          'https://media.guim.co.uk/4eb07f2f4bbd086197aa76ca2de731ad7fefc9fd/0_228_4500_2700/500.jpg'
        );
        expect(stories[0].headline).toBe(
          'UK house price growth slows to lowest rate since mid-2020; all eyes on Fed decision – business live'
        );
        expect(stories[0].webUrl).toBe(
          'https://www.theguardian.com/business/live/2023/feb/01/uk-annual-house-price-growth-slows-lowest-rate-since-mid-2020-chinas-factories-slump-us-federal-reserve-rate-decision'
        );
        expect(stories[0].standfirst).toBe(
          '<p>UK annual house price growth slows to 1.1%; investors await US Federal Reserve message on whether it will tighten monetary policy further</p>'
        );
        done();
      });
    });
  });

  it('catches errors', (done) => {
    fetch.mockRejectedValue('Oops, something went wrong!');

    newsClient.searchNews(
      'testsearch',
      () => {},
      (error) => {
        expect(error).toBe('Oops, something went wrong!');
        done();
      }
    );
  });

  describe('filterNews', () => {
    it('calls fetch on the API with filtertag', (done) => {
      fetch.mockResponseOnce(JSON.stringify(apiData));
      newsClient.filterNews('sport', (data) => {
        const results = data.response.results;
        const stories = results.map((article) => {
          const { webUrl } = article;
          const { headline, thumbnail, standfirst } = article.fields;
          return { webUrl, headline, thumbnail, standfirst };
        });
        expect(stories[0].thumbnail).toBe(
          'https://media.guim.co.uk/4eb07f2f4bbd086197aa76ca2de731ad7fefc9fd/0_228_4500_2700/500.jpg'
        );
        expect(stories[0].headline).toBe(
          'UK house price growth slows to lowest rate since mid-2020; all eyes on Fed decision – business live'
        );
        expect(stories[0].webUrl).toBe(
          'https://www.theguardian.com/business/live/2023/feb/01/uk-annual-house-price-growth-slows-lowest-rate-since-mid-2020-chinas-factories-slump-us-federal-reserve-rate-decision'
        );
        expect(stories[0].standfirst).toBe(
          '<p>UK annual house price growth slows to 1.1%; investors await US Federal Reserve message on whether it will tighten monetary policy further</p>'
        );
        done();
      });
    });
    it('catches errors', (done) => {
      fetch.mockRejectedValue('Oops, something went wrong!');

      newsClient.filterNews(
        'testfilter',
        () => {},
        (error) => {
          expect(error).toBe('Oops, something went wrong!');
          done();
        }
      );
    });
  });

  describe('summariseNews', (done) => {
    it('should provide a summary of an article handed to it', () => {
      fetch.mockResponseOnce(
        JSON.stringify({
          summary_text:
            'Scottish trio Young Fathers have spent the past decade fusing industrial bass with rap, soaring gospel choruses and thundering drums. Theirs is heavy music worn with a melodic lightness, a potent combination that won them the 2014 Mercury prize for their debut album, Dead. After 2018’s Cocoa Sugar, which produced some of the group’s most accessible work in the yearning single In My View, their fourth album is a joyful career highlight. Over 10 tracks, Heavy Heavy retains the band’s urgent energy – the yelps and driving drums of I Saw and sub-bass breakbeats of Shoot Me Down – but that vitality works in service',
        })
      );

      newsClient.summariseText(
        'Scottish trio Young Fathers have spent the past decade fusing industrial bass with rap, soaring gospel choruses and thundering drums. Theirs is heavy music worn with a melodic lightness, a potent combination that won them the 2014 Mercury prize for their debut album, Dead. After 2018’s Cocoa Sugar, which produced some of the group’s most accessible work in the yearning single In My View, their fourth album is a joyful career highlight. Over 10 tracks, Heavy Heavy retains the band’s urgent energy – the yelps and driving drums of I Saw and sub-bass breakbeats of Shoot Me Down – but that vitality works in service to an overall, infectious optimism. The high-speed hand claps of Drum bolster a refrain of “hear the beat of the drums and go numb/ have fun”, while Tell Somebody and Ululation explode into a collective show of free vocal power. Rather than inspire a moshpit, the album’s liveliness provokes a different kind of movement: dance. Although the brief runtime of songs such as Rice and Sink Or Swim might feel sketch-like, every second is packed with an invitation to stomp feet, clap hands and lose yourself in the cacophony.',
        (data) => {
          expect(data.summary_text).toBe(
            'Scottish trio Young Fathers have spent the past decade fusing industrial bass with rap, soaring gospel choruses and thundering drums. Theirs is heavy music worn with a melodic lightness, a potent combination that won them the 2014 Mercury prize for their debut album, Dead. After 2018’s Cocoa Sugar, which produced some of the group’s most accessible work in the yearning single In My View, their fourth album is a joyful career highlight. Over 10 tracks, Heavy Heavy retains the band’s urgent energy – the yelps and driving drums of I Saw and sub-bass breakbeats of Shoot Me Down – but that vitality works in service'
          );
          expect(fetch).toHaveBeenCalledWith(
            'https://api-inference.huggingface.co/models/google/pegasus-newsroom',
            {
              method: 'POST',
              headers: { Authorization: `Bearer ${API_TOKEN}` },
              body: JSON.stringify({
                text: 'Scottish trio Young Fathers have spent the past decade fusing industrial bass with rap, soaring gospel choruses and thundering drums. Theirs is heavy music worn with a melodic lightness, a potent combination that won them the 2014 Mercury prize for their debut album, Dead. After 2018’s Cocoa Sugar, which produced some of the group’s most accessible work in the yearning single In My View, their fourth album is a joyful career highlight. Over 10 tracks, Heavy Heavy retains the band’s urgent energy – the yelps and driving drums of I Saw and sub-bass breakbeats of Shoot Me Down – but that vitality works in service to an overall, infectious optimism. The high-speed hand claps of Drum bolster a refrain of “hear the beat of the drums and go numb/ have fun”, while Tell Somebody and Ululation explode into a collective show of free vocal power. Rather than inspire a moshpit, the album’s liveliness provokes a different kind of movement: dance. Although the brief runtime of songs such as Rice and Sink Or Swim might feel sketch-like, every second is packed with an invitation to stomp feet, clap hands and lose yourself in the cacophony.',
              }),
            }
          );
        }
      );
    });
  });
});
