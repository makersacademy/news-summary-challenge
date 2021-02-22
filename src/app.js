("use strict");
class displayHeadlines {
  constructor(headlines) {
    this.headlines = headlines;
  }

  returnHtmlView() {
    let headlines = this.headlines.allHeadlines().map(function (article) {
      return (
        "<a href=" +
        article.articleUrl() +
        ">" +
        article.articleHeadline() +
        "</a>"
      );
    });
    return "<div>" + headlines.join("</div><div>") + "</div>";
  }
}

class HeadlinesController {
  constructor() {
    this.headlines = new Headlines();
    this.ViewClass = displayHeadlines;
    this.displayHeadlines = new this.ViewClass(this.headlines);
  }

  showHtml() {
    let html = this.displayHeadlines.returnHtmlView();
    document.getElementById("articles").innerHTML = html;
  }
  updateNews() {
    let that = this;
    this.headlines.articleRequest(function () {
      that.showHtml();
    });
  }
}

window.onload = function () {
  let controller = new HeadlinesController();
  controller.updateNews();
};

const guardian = "http://content.guardianapis.com/search?show-fields=all";

//modal info opening and closing modals
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// added dates
const today = new Date();
const date = String(today.getDate());
const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(today);
const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(today);
const year = today.getFullYear();

const displayDate = `${day} ${month} ${date}, ${year}`;

document.getElementById("today-date").innerHTML = `<h3>${displayDate}</h3>`;
