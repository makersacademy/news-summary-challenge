class Headlines {
  constructor() {
    this.headlinesList = [];
  }

  add(headlines) {
    this.headlinesList.push(headlines);
  }

  all() {
    return this.headlinesList;
  }
}
