document.querySelector("#page2-btn").addEventListener("click", function () {
  let pages = document.querySelectorAll(".page");
  for (let p of pages) {
    //it is okay to remove non existing class
    p.classList.remove("show");
    p.classList.add("hidden");
  }

  let page2 = document.querySelector("#page-2");
  page2.classList.remove("hidden");
  page2.classList.add("show");
});

document.querySelector("#page3-btn").addEventListener("click", function () {
  let pages = document.querySelectorAll(".page");
  for (let p of pages) {
    //it is okay to remove non existing class
    p.classList.remove("show");
    p.classList.add("hidden");
  }

  let page2 = document.querySelector("#page-3");
  page2.classList.remove("hidden");
  page2.classList.add("show");
});

document.querySelector("#page1-btn").addEventListener("click", function () {
  let pages = document.querySelectorAll(".page");
  for (let p of pages) {
    //it is okay to remove non existing class
    p.classList.remove("show");
    p.classList.add("hidden");
  }

  let page2 = document.querySelector("#page-1");
  page2.classList.remove("hidden");
  page2.classList.add("show");
});
