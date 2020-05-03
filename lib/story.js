class Story {
  constructor(id, headline, summariser = ArticleSummariser) {
    this.id = id;
    this.headline = headline;
    this.ARTICLE_SUMMARISER = new summariser();
    this.BASE_URL = 'https://www.theguardian.com/'
    this.LINK_URL = this.BASE_URL + this.id
  }

  headlineComponent() {
    let component = document.createElement("li");
    component.setAttribute('id', this.id)
    component.setAttribute('class', 'headline')
    let h2 = document.createElement("h2");
    h2.innerHTML = this.headline;
    component.append(h2);
    return component;
  }

  async summary() {
    if (this.summarySentences === undefined) {
      let sentences = await this.ARTICLE_SUMMARISER.fetchById(this.id)
      let trimmedSentences = sentences.map(sentence => {
        return sentence.replace(/\n/g,"").replace(/EDT\d{2}:\d{2}/g, "")
      })
      this.summarySentences = trimmedSentences
    }
    return this.summarySentences
  }

  async summaryComponent() {
    let component = document.createElement('section')
    let h2 = document.createElement('h2')
    h2.innerHTML = this.headline
    component.append(h2)
    let sentences = await this.summary()
    sentences.forEach(sentence => {
      let p = document.createElement('p')
      p.innerHTML = sentence
      component.append(p)
    });
    let articleLink = this.createLink('Read original article', this.LINK_URL);
    component.append(articleLink)
    return component
  }

  createLink(text, url) {
    let link = document.createElement('a');
    link.setAttribute('href', url);
    let linkText = document.createTextNode(text);
    link.appendChild(linkText);
    return link;
  }
}
