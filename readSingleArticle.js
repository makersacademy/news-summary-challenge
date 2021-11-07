let modalContainer;

readSingleArticle = (news) => {
  let modal = document.createElement("div");

  let modalBody = document.createElement("div");
  modalBody.innerHTML = news.fields.body;
  const modalText = modalBody.innerText;

  modal.innerHTML = `
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <img src="${news.fields.thumbnail}" class=""card-img-top"/>
        <div class="modal-header">
          <h5 class="modal-title">${news.fields.headline}</h5>
        </div>
        <div class="modal-body">
        <p>${modalText}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  `;

  document.body.appendChild(modal);

  let modalInner = modal.children[0];

  modalInner.addEventListener("hidden.bs.modal", () => {
    modal.remove();
  });

  return new bootstrap.Modal(modalInner);
};
