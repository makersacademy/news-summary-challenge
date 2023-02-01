const NewsClient = require('./src/newsClient');
const NewsModel = require('./src/newsModel');
const NewsView = require('./src/newsView');

const client = new NewsClient();
const model = new NewsModel();

model.setNews([
  {
    thumbnail:
      'https://media.guim.co.uk/fa7d5a5a0d6c0b13c9db83f4cd51721d655832dc/0_72_3500_2101/500.jpg',
    headline:
      'Three Russians under sanctions own UK property via overseas entities',
    webUrl:
      'https://www.theguardian.com/uk-news/2023/jan/31/three-russians-under-sanctions-own-uk-property-via-overseas-entities',
  },
  {
    thumbnail:
      'https://media.guim.co.uk/4eb07f2f4bbd086197aa76ca2de731ad7fefc9fd/0_228_4500_2700/500.jpg',
    headline:
      'UK house price growth slows to lowest rate since mid-2020; all eyes on Fed decision – business live',
    webUrl:
      'https://www.theguardian.com/business/live/2023/feb/01/uk-annual-house-price-growth-slows-lowest-rate-since-mid-2020-chinas-factories-slump-us-federal-reserve-rate-decision',
  },
]);

const view = new NewsView(model, client);
view.displayNews();
