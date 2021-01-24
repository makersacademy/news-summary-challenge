let news = new News()
let list = document.createElement('div')

list.appendChild(news.connectAPI());
document.body.appendChild(list)