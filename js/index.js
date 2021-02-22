// Create HTML tags for modal
const modal = document.createElement("div");
const modalContent = document.createElement("div");
const modalHeader = document.createElement("div");
const closeModal = document.createElement("span");
const modalHeaderTitle = document.createElement("h2");
const modalBody = document.createElement("div");
const bodyTag = document.getElementsByTagName("body")[0];

const createModal = () => {
  // Add classes to the HTML tags for the modal
  modal.classList.add("modal");
  modalContent.classList.add("modal-content");
  modalHeader.classList.add("modal-header");
  closeModal.classList.add("close");
  modalHeaderTitle.classList.add("modal-header-title");
  modalBody.classList.add("modal-body");
  // Add ID to modal
  modal.id = "modal";
  // Add close text to span
  closeModal.innerHTML = "&times;";
  // Append HTML tags to each other inside body
  bodyTag.appendChild(modal);
  modal.appendChild(modalContent);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalHeader.appendChild(closeModal);
  modalHeader.appendChild(modalHeaderTitle);
};

const createHeadlineCards = () => {
  // Create HTML tags for headline card
  const headlineWrapper = document.createElement("div");
  const headlineThumbnail = document.createElement("img");
  const info = document.createElement("div");
  const headlineTitle = document.createElement("p");
  const mainTag = document.getElementsByTagName("main")[0];
  // Add classes to HTML tags for the headline card
  headlineWrapper.classList.add("headline-wrapper");
  headlineThumbnail.classList.add("headline-thumbnail");
  info.classList.add("info");
  headlineTitle.classList.add("headline-title");
  headlineTitle.id = "";
  // Append HTML tags to each other inside main
  mainTag.appendChild(headlineWrapper);
  headlineWrapper.appendChild(headlineThumbnail);
  headlineWrapper.appendChild(info);
  info.appendChild(headlineTitle);
};

// Create modal
createModal();
