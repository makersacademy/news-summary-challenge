class NotesView {

  constructor(client) {
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNewsInfo() {
    document.querySelectorAll('.headline').forEach(element => {
      element.remove();
    });
    
    const headlines = this.model.getHeadlines();

    headlines.forEach(headline => {
      const newEl = document.createElement('div');
      newEl.textContent = headline;
      newEl.className = 'headline';
      this.mainContainerEl.append(newEl);
    });
  }

  displayNotesFromApi() {
    this.client.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }
}