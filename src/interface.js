console.log(key)

var headline;

// http://content.guardianapis.com/world?format=json&api-key=fb55a13f-6bcc-4281-b9d6-e8f8331d48c3

var btn = document.getElementById("submitButton")
btn.addEventListener("click", speedread);

window.addEventListener("DOMContentLoaded", () => {
  console.log('We have executed the DOM Content Loaded');
  console.log(url)
})