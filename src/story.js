'use strict'

class Story {

  constructor(id, storyObj) {
    this.id = id
    this.section = `${storyObj.pillarName} > ${storyObj.sectionName}`
    let dateSplit = storyObj.webPublicationDate.slice(0,-1).split("T")[0].split('-')
    this.date = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`
    this.time = storyObj.webPublicationDate.slice(0,-1).split("T")[1].slice(0,-3)
    this.url = storyObj.webUrl
    this.headline = storyObj.webTitle
    this.text = storyObj.fields.body
    this.thumbnail = storyObj.fields.thumbnail
    if (typeof TEST === 'undefined') {
      this.getSummary()
    } else {
      this.summary = this.text.match('<p>(.*?)</p>')[1]
    }
  }

  async getSummary() {
    this.summary = await apiSummarise(this.url)
  }

}
