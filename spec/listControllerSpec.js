// Doubles.. I think!
class ArticleDouble2 {
  constructor() {
    this.id = 0;
    this.headline = "The Headline";
    this.content = "Stuff";
    this.author = "Joe Bloggs";
    this.date = "18/10/2020";
  }
}

class ListDouble {
  constructor() {
    this.addArticleCallCount = 0;
    this.findArticleByIDCallCount = 0;
    this.articles = [];
  }

  addArticle() {
    this.addArticleCallCount++;
  }
  viewArticles() {
    return ["News"];
  }
  findArticleByID() {
    this.findArticleByIDCallCount++;
  }
}

class ElementDouble {
  constructor() {
    this.innerHTML = "";
  }
}

class ViewDouble {
  generateHeadlineHtml() {
    return "Headlines";
  }
}

class ListControllerSpec {
  static addsArticlesToList() {
    var listDouble = new ListDouble();
    var controller = new ListController(listDouble);
    controller.addArticle("News", "Warmest day of the year...");
    console.log(
      Assert.isEqual("adds article to list", listDouble.addArticleCallCount, 1)
    );
  }

  static insertsHtmlOnPage() {
    var listDouble = new ListDouble();
    var controller = new ListController(listDouble);
    controller.view = new ViewDouble(ListDouble);
    var element = new ElementDouble();
    controller.insertListHTML(element);
    console.log(
      Assert.isEqual("Inserts HTML on page", element.innerHTML, "Headlines")
    );
  }

  static insertsHtmlForArticleContent() {
    var listDouble = new ListDouble();
    var controller = new ListController(listDouble);
    var element = new ElementDouble();
    var articleDouble = new ArticleDouble2();
    controller.insertArticleHTML(articleDouble, element);

    console.log(
      Assert.isEqual(
        "inserts html for article content",
        element.innerHTML,
        "<div>Stuff</div>"
      )
    );
  }

  static getsArticleById() {
    var listDouble = new ListDouble();
    var controller = new ListController(listDouble);
    var article = new ArticleDouble2();
    listDouble.articles.push(article);
    controller.getArticleByID8888888(0);

    console.log(
      Assert.isEqual(
        "gets article by ID",
        listDouble.findArticleByIDCallCount,
        1
      )
    );
  }
  catch(err) {
    console.log(err.message);
  }
}

ListControllerSpec.addsArticlesToList();
ListControllerSpec.insertsHtmlOnPage();
ListControllerSpec.insertsHtmlForArticleContent();
ListControllerSpec.getsArticleById();
