type Article = {
  title: string;
  abstract: string;
  section: string;
  byline: string;
  published_date: string;
  url: string;
  multimedia: Multimedia[];
};

type Multimedia = {
  url: string;
  caption: string;
};
