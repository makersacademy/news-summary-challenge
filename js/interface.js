// Get the modal
let modal = document.getElementById("myModal");

let openModal0 = document.getElementById("m0");
let openModal1 = document.getElementById("m1");
let openModal2 = document.getElementById("m2");
let openModal3 = document.getElementById("m3");
let openModal4 = document.getElementById("m4");
let openModal5 = document.getElementById("m5");
let openModal6 = document.getElementById("m6");
let openModal7 = document.getElementById("m7");
let openModal8 = document.getElementById("m8");
let openModal9 = document.getElementById("m9");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

openModal0.onclick = () => {
  modal.style.display = "block";
  headlineIntoModalHeader(0);
  fetchNewsSummary(0);
};

openModal1.onclick = () => {
  modal.style.display = "block";
  headlineIntoModalHeader(1);
  fetchNewsSummary(1);
};

openModal2.onclick = () => {
  modal.style.display = "block";
  headlineIntoModalHeader(2);
  fetchNewsSummary(2);
};

openModal3.onclick = () => {
  modal.style.display = "block";
  headlineIntoModalHeader(3);
  fetchNewsSummary(3);
};

openModal4.onclick = () => {
  modal.style.display = "block";
  headlineIntoModalHeader(4);
  fetchNewsSummary(4);
};

openModal5.onclick = () => {
  modal.style.display = "block";
  headlineIntoModalHeader(5);
  fetchNewsSummary(5);
};

openModal6.onclick = () => {
  modal.style.display = "block";
  headlineIntoModalHeader(6);
  fetchNewsSummary(6);
};

openModal7.onclick = () => {
  modal.style.display = "block";
  headlineIntoModalHeader(7);
  fetchNewsSummary(7);
};

openModal8.onclick = () => {
  modal.style.display = "block";
  headlineIntoModalHeader(8);
  fetchNewsSummary(8);
};

openModal9.onclick = () => {
  modal.style.display = "block";
  headlineIntoModalHeader(9);
  fetchNewsSummary(9);
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
