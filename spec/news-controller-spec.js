const element = document.getElementById('news');
const newsController = new NewsController(element);

expect('Note controller can change page html', newsController.getHTML('testing')).isEqualTo('<p>testing</p>')