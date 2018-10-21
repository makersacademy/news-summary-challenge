var news = new News()

console.log(expect(news.add).toExist())

document.getElementById('results').innerHTML += "Your first test is " + expect(news.add).toExist()
