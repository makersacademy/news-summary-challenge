const show = (num) => {
  const p = document.querySelector(`.body-${num}`);
  const wrapper = document.querySelector('.wrapper');
  wrapper.toggleAttribute('hidden');
  p.toggleAttribute('hidden');
};
