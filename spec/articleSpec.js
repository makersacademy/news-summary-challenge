var article = new Article('url', 'headline', 'text', 'thumbnail')

var testList = [

  function() {
    testEquals('Article returns headline',
    article.getHeadline(),
    'headline'
    )
  },

  function() {
    testEquals('Article returns url',
    article.getUrl(),
    'url'
    )
  },

  function() {
    testEquals('Article returns text',
    article.getText(),
    'text'
    )
  },

  function() {
    testEquals('Article returns thumbnail',
    article.getThumbnail(),
    'thumbnail'
    )
  },

  function() {
    article.setSummary('summary')
    testEquals('Article sets/gets summary',
    article.getSummary(),
    'summary'
    )
  },

  // function() {
  //   testEquals('Article returns id',
  //   article.id,
  //   'id'
  //   )
  // },

]

voodoo(testList)
