function headlinesLoading() {
    var news = new Headlines();
    news.headlines = ['Is this the end of the world???']
    expect.toEqual(news.allHeadlines()[0] === 'Is this the end of the world???')
}

headlinesLoading()