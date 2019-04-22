(function(exports) {
  function wrapHTML(options) {
    var opening, closing, hrefString, targetString, idString, classString

    idString = options.id ? ` id="${options.id}"` : ''
    hrefString = options.href ? ` href="${options.href}"` : ''
    targetString = options.targetBlank ? ' target="_blank"' : ''
    classString = options.classes ? ` class="${options.classes.join(' ')}"` : ''

    opening = `<${options.element}${hrefString}${targetString}${idString}${classString}>`
    closing = `</${options.element}>`

    return [opening, options.content, closing].join('')
  }

  exports.wrapHTML = wrapHTML
})(this)
