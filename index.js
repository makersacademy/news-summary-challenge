import * as env from 'env';
const NewsApi = require('./newsApi')

const api = new NewsApi(env.GUARDIAN_API_KEY);

api.loadNotes(console.log)