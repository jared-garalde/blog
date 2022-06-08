//add collapsible sidebar
let togl = document.getElementsByClassName("toggle");
var i;

//add event selector to listen for click and toggle active attr.
for (i = 0; i < togl.length; i++) {
  togl[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
