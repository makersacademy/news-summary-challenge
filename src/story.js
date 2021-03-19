'use strict'

class Story {

  constructor(id, storyObj) {
    this.id = id
    this.section = `${storyObj.pillarName} > ${storyObj.sectionName}`
    this.date = storyObj.webPublicationDate.slice(0,-1).split("T")[0]
    this.time = storyObj.webPublicationDate.slice(0,-1).split("T")[1]
    this.url = storyObj.webUrl
    this.headline = storyObj.webTitle
    this.text = storyObj.fields.body
    this.thumbnail = storyObj.fields.thumbnail
  }

}

