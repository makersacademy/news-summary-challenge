/* eslint-disable func-names */
const modalLogic = () => {
  for (let i = 1; i < 21; i += 1) {
    const modal = document.getElementById(`myModal-${i}`);
    const btn = document.getElementById(`post-${i}`);
    const span = document.getElementById(`close-${i}`);

    btn.onclick = function () {
      modal.style.display = 'block';
    };

    span.onclick = function () {
      modal.style.display = 'none';
    };

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  }
};

module.exports = modalLogic;
