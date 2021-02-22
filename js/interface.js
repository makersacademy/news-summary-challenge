// Create 10 headline cards
// If the user clicks the headline, open the modal and fetch the summary
for (let i = 0; i < 10; i++) {
  createHeadlineCards();
  document.getElementsByClassName("headline-title")[i].onclick = () => {
    modal.style.display = "block";
    headlineIntoModalHeader(i);
    fetchNewsSummary(i);
  };
}

// If the user clicks on <span> (x), close the modal
closeModal.onclick = () => {
  modal.style.display = "none";
};

// If the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
