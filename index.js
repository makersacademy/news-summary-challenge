const NewsHeadlineView = require('./newsHeadlineView')
const GuardianApi = require('./guardianApi')

const api = new GuardianApi()
const view = new NewsHeadlineView(api)

