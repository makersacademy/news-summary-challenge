const news = [
  {
    webUrl:
      'https://www.theguardian.com/business/live/2023/feb/01/uk-annual-house-price-growth-slows-lowest-rate-since-mid-2020-chinas-factories-slump-us-federal-reserve-rate-decision',
    headline:
      'UK house price growth slows to lowest rate since mid-2020; all eyes on Fed decision – business live',
    thumbnail:
      'https://media.guim.co.uk/4eb07f2f4bbd086197aa76ca2de731ad7fefc9fd/0_228_4500_2700/500.jpg',
    standfirst:
      '<p>UK annual house price growth slows to 1.1%; investors await US Federal Reserve message on whether it will tighten monetary policy further</p>',
  },
  {
    webUrl:
      'https://www.theguardian.com/politics/live/2023/feb/01/rishi-sunak-pmqs-keir-starmer-mass-strikes-teachers-trains-rail-border-uk-politics-live',
    headline:
      'Raab should be suspended until bullying inquiry concludes, civil servants’ union says – UK politics live ',
    thumbnail:
      'https://media.guim.co.uk/caafd87c5e37337396dc36082a485748e25bf2e4/0_163_4371_2622/500.jpg',
    standfirst:
      '<p>Government insiders believe Dominic Raab is fighting for his political survival, with one <a href="https://www.theguardian.com/politics/2023/jan/31/raab-bullying-claims-inquiry-has-interviewed-three-top-mandarins">describing him as “toast”</a></p>',
  },
  {
    webUrl:
      'https://www.theguardian.com/uk-news/2023/feb/01/uk-police-removing-large-amount-of-online-gun-making-guides',
    headline: 'UK police removing ‘large amount’ of online gun-making guides',
    thumbnail:
      'https://media.guim.co.uk/da40e78f1f8cf218017fd47afb3f7a345a434c3c/0_241_3100_1859/500.jpg',
    standfirst:
      '<p>Exclusive: Fears growing that far-right extremists are producing 3D-printed firearms to use on streets of Britain</p>',
  },
  {
    webUrl:
      'https://www.theguardian.com/business/live/2023/feb/01/uk-annual-house-price-growth-slows-lowest-rate-since-mid-2020-chinas-factories-slump-us-federal-reserve-rate-decision',
    headline:
      'UK house price growth slowest since mid-2020; manufacturing contracts for sixth month in a row – business live',
    thumbnail:
      'https://media.guim.co.uk/4eb07f2f4bbd086197aa76ca2de731ad7fefc9fd/0_228_4500_2700/500.jpg',
    standfirst:
      '<p>UK annual house price growth slows to 1.1%; investors await US Federal Reserve message on whether it will tighten monetary policy further</p>',
  },
  {
    webUrl:
      'https://www.theguardian.com/education/2023/feb/01/uk-international-students-visa-restrictions-economic-self-harm',
    headline:
      'UK curbs on international student visas would be ‘act of economic self-harm’',
    thumbnail:
      'https://media.guim.co.uk/39e9e72f9e11dc72ca5fd4e1997c733ac107bce6/0_352_5315_3191/500.jpg',
    standfirst:
      '<p>University leaders fear billions being lost as a result of battles within government over immigration policy</p><p></p><p></p>',
  },
  {
    webUrl:
      'https://www.theguardian.com/money/2023/feb/01/uk-house-prices-fall-for-fifth-month-in-a-row',
    headline: 'UK house prices fall for fifth month in a row',
    thumbnail:
      'https://media.guim.co.uk/a7f3dcc9aba9ae2b9a21a5c292e06c039e9d7ad3/0_108_3000_1800/500.jpg',
    standfirst:
      '<p>Average cost of home now 3.2% below August 2022 peak as mortgage demand  slumps</p>',
  },
  {
    webUrl:
      'https://www.theguardian.com/environment/2023/feb/01/specieswatch-donkey-work-uk-population-dwindles',
    headline: 'Specieswatch: donkey work is done as UK population dwindles',
    thumbnail:
      'https://media.guim.co.uk/2b6ad490d20f7112f2de8e2c7e39e5709450a75e/452_733_3049_1829/500.jpg',
    standfirst:
      '<p><em>Equus asinus </em>is gradually disappearing from countryside and as a working animal is now a rarity</p>',
  },
  {
    webUrl:
      'https://www.theguardian.com/society/2023/feb/01/uk-benefit-changes-have-pushed-people-into-dead-end-low-paid-jobs-says-ifs',
    headline:
      'UK benefit changes have pushed people into dead-end, low-paid jobs, says IFS',
    thumbnail:
      'https://media.guim.co.uk/e295474540148a99d0f0167eb0d230c22fd93d59/571_953_4090_2456/500.jpg',
    standfirst:
      '<p>Tougher rules have boosted employment but jobs offer scant career progression and contribute little to tax revenue</p>',
  },
  {
    webUrl:
      'https://www.theguardian.com/business/2023/jan/31/uk-supermarket-price-inflation-rise-bills-milk-eggs-dog-food',
    headline:
      'UK supermarket price inflation hits record high, adding £788 to annual bills',
    thumbnail:
      'https://media.guim.co.uk/ac43170eba40d7c2912012bfac93eca37531002c/0_0_8256_4954/500.jpg',
    standfirst:
      '<p>Milk, eggs and dog food were grocery items with fastest price rises, figures from Kantar show </p>',
  },
  {
    webUrl:
      'https://www.theguardian.com/uk-news/2023/feb/01/almost-13000-offshore-companies-with-uk-property-fail-to-declare-owners',
    headline:
      'Almost 13,000 offshore companies with UK property fail to declare owners',
    thumbnail:
      'https://media.guim.co.uk/eeab3db9ee4e8b5f6fceecf7cd0b3799e0d986ce/950_0_4177_2508/500.jpg',
    standfirst:
      '<p>The companies may now face fines and a ban on selling their land, the government has said</p>',
  },
  {
    webUrl:
      'https://www.theguardian.com/uk-news/2023/jan/31/up-to-half-a-million-to-strike-across-uk-as-talks-go-backwards',
    headline:
      'Up to half a million to strike across UK as talks go ‘backwards’',
    thumbnail:
      'https://media.guim.co.uk/2886960838a33c7bf1bba61d245fb4f270f69712/0_192_5792_3476/500.jpg',
    standfirst:
      '<p>Action by teachers, civil servants, Border Force staff and train drivers to go ahead, with ministers accused of ‘stonewalling’ </p>',
  },
];

module.exports = news;
