const DomManip = require('../lib/domManip').default;

const pretzl = require('pretzl');

pretzl.batch("DomManip", () => {
  // set up mocks
  let mockDoc = new pretzl.Bagel("mockDoc", [["createElement"],
                  ["querySelector"], ["getElementById"]])

  let mockElement = new pretzl.Bagel("mockElement", [["setAttribute"],
                  ["appendChild"], ["addEventListener"]], [["style", { display: null }]])
  mockDoc.stub("getElementById", mockElement)
  mockDoc.stub("createElement", mockElement)

  let subject = new DomManip(mockDoc)
  pretzl.batch("Instantiation", () =>{
    pretzl.bag("mockDoc injected into this.document", () => {
      pretzl.bite(subject.document).toTasteLike(mockDoc)
    })
  })

  pretzl.batch("getElementById", () => {
    pretzl.bag("getElementById called on mockdoc", () => {
      subject.getElementById("test")
      pretzl.bite(mockDoc, "getElementById").toHaveBeenEaten()
    })
  })

  pretzl.batch("createElement", () => {
    pretzl.bag("createElement called on mockdoc", () => {
      subject.createElement("test")
      pretzl.bite(mockDoc, "createElement").toHaveBeenEaten()
    })

    pretzl.bag("setAttribute called if id given", () => {
      // reset all method calls for mockElement
      mockElement._resetAllCount()

      subject.createElement("test", "testId")
      pretzl.bite(mockElement, "setAttribute").toHaveBeenEaten()
    })

    pretzl.bag("setAttribute called if class given", () => {
      subject.createElement("test", null ,"testClass")
      pretzl.bite(mockElement, "setAttribute").toHaveBeenEaten()
    })
  })

  pretzl.batch("createLinkElement", () => {
    pretzl.bag("createElement called on mockdoc", () => {
      subject.createLinkElement("testurl")
      pretzl.bite(mockDoc, "createElement").toHaveBeenEaten()
    })

    pretzl.bag("setAttribute called for href", () => {
      // reset all method calls for mockElement
      mockElement._resetAllCount()

      subject.createLinkElement("testurl")
      pretzl.bite(mockElement, "setAttribute").toHaveBeenEaten()
    })
  })

  pretzl.batch("createImgElement", () => {
    pretzl.bag("createElement called on mockdoc", () => {
      subject.createImgElement("testurl")
      pretzl.bite(mockDoc, "createElement").toHaveBeenEaten()
    })

    pretzl.bag("setAttribute called for src", () => {
      // reset all method calls for mockElement
      mockElement._resetAllCount()

      subject.createImgElement("testurl")
      pretzl.bite(mockElement, "setAttribute").toHaveBeenEaten()
    })
  })

  pretzl.batch("addElement", () => {
    pretzl.bag("getElementById called", () => {
      subject.addElement("test", "parentId")
      pretzl.bite(mockDoc, "getElementById").toHaveBeenEaten()
    })

    pretzl.bag("appendChild called", () => {
      mockElement._resetAllCount()

      subject.addElement("test", "parentId")
      pretzl.bite(mockElement, "appendChild").toHaveBeenEaten()
    })
  })

  pretzl.batch("addText", () => {
    pretzl.bag("getElementById called", () => {
      subject.addText
      pretzl.bite(mockDoc, "getElementById").toHaveBeenEaten()
    })
  })

  pretzl.batch("toggleHidden", () => {
    pretzl.bag("getElementById called", () => {
      subject.toggleHidden()
      pretzl.bite(mockDoc, "getElementById").toHaveBeenEaten()
    })

    pretzl.bag("style.display set to block if none", () => {
      mockElement.style.display = "none"

      subject.toggleHidden()
      pretzl.bite(mockElement.style.display).toTasteLike("block")
    })

    pretzl.bag("style.display set to none elsewhere", () => {
      mockElement.style.display = null

      subject.toggleHidden()
      pretzl.bite(mockElement.style.display).toTasteLike("none")
    })
  })

  pretzl.batch("clickHide", () => {
    pretzl.bag("clickHide calls addEventListener on element", () => {
      subject.clickHide()
      pretzl.bite(mockElement, "addEventListener").toHaveBeenEaten()
    })
  })
})
