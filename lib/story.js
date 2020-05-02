class Story {
  constructor(id, headline) {
    this.id = id;
    this.headline = headline;
  }

  headlineComponent() {
    let component = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.innerHTML = this.headline;
    component.append(h2);
    return component;
  }
}
