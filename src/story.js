let storyCount = 0
class Story {
  constructor(headline, link) {
    this.headline = headline
    this.link = link
    this.id = storyCount
    this.selected = false
    storyCount++
  }

  getHeadline() {
    return this.headline
  }

  getLink() {
    return this.link
  }

  getId() {
    return this.id
  }

  isSelected() {
    return this.selected
  }

  select() {
    this.selected = true
  }

  deselect() {
    this.selected = false
  }
}