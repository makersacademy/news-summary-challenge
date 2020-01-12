class Headline {
  constructor(headlines = []) {
    this.headlines = headlines
  }

  add(...headlines) {
    headlines.forEach(headline => {
      this.headlines.push(headline)
    });
  }

  show() {
    return this.headlines
  }
}