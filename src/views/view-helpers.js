(function(exports) {
  function wrapHTML(options) {
    var opening, closing, idString, classString

    idString = options.id ? ` id="${options.id}"` : ''
    classString = options.classes ? ` class="${options.classes.join(' ')}"` : ''

    opening = `<${options.element}${idString}${classString}>`
    closing = `</${options.element}>`

    return [opening, options.content, closing].join('')
  }

  exports.wrapHTML = wrapHTML
})(this)
