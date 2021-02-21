const h1 = document.querySelector('h1')
h1.style.fontVariationSettings = `"wght" 100`
window.addEventListener('scroll', function() {
  const pixels = window.pageYOffset
  const fontWeight = pixels * 0.5 + 100

  h1.style.fontVariationSettings = `"wght" ${fontWeight}`
})
