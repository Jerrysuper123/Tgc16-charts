let allButtons = document.querySelectorAll("#nabar button");
for (let btn of allButtons) {
  btn.addEventListener("click", function (event) {
    let selectedBtn = event.target;
    //data-page="1";
    //dataset = {page: '1'};
    let pageNumber = selectedBtn.dataset.page;

    let pages = document.querySelectorAll(".page");
    for (let p of pages) {
      //it is okay to remove non existing class
      p.classList.remove("show");
      p.classList.add("hidden");
    }

    let page = document.querySelector("#page-" + pageNumber);
    page.classList.remove("hidden");
    page.classList.add("show");
  });
}
