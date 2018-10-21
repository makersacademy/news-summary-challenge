const show = (num) => {
  const p = document.querySelector(`.body-${num}`);
  p.toggleAttribute('hidden');
};

const scrollToTop = () => {
  document.querySelector('h2').scrollIntoView({
    behavior: 'smooth',
  });
};

const nextArticle = () => {
  const article = document.querySelector('.wrapper');
  article.nextElementSibling.scrollIntoView({
    behavior: 'smooth',
  });
};
