var article = new Article('url', 'headline', 'text', 'thumbnail')

var testList = [

  function() {
    testEquals('Article returns headline',
    article.headline,
    'headline'
    )
  },

  function() {
    testEquals('Article returns url',
    article.url,
    'url'
    )
  },

  function() {
    testEquals('Article returns text',
    article.text,
    'text'
    )
  },

  function() {
    testEquals('Article returns thumbnail',
    article.thumbnail,
    'thumbnail'
    )
  },

  // function() {
  //   article.setSummary('summary')
  //   testEquals('Article sets/gets summary',
  //   article.summary,
  //   'summary'
  //   )
  // },

  // function() {
  //   testEquals('Article returns id',
  //   article.id,
  //   'id'
  //   )
  // },

]

voodoo(testList)
