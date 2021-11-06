const modalLogic = () => {
  for (let i = 0; i < 10; i++) {
    const modal = document.getElementById(`myModal-${i}`);
    const btn = document.getElementById(`post-${i}`);
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
      console.log('click')
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}

module.exports = modalLogic;