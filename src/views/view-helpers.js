(function(exports) {
  function wrapHTML(options) {
    var opening, closing, hrefString, idString, classString

    idString = options.id ? ` id="${options.id}"` : ''
    hrefString = options.href? ` href="${options.href}"` : ''
    classString = options.classes ? ` class="${options.classes.join(' ')}"` : ''

    opening = `<${options.element}${hrefString}${idString}${classString}>`
    closing = `</${options.element}>`

    return [opening, options.content, closing].join('')
  }

  exports.wrapHTML = wrapHTML
})(this)
