const boxes = document.querySelectorAll(".box");

const triggerLine = (window.innerHeight / 5) * 4;
console.log(triggerLine);

window.addEventListener("scroll", onScrollEventHandler);

function onScrollEventHandler() {
  boxes.forEach((box) => showBox(box));
}

function showBox(box) {
  if (document.documentElement.scrollTop > triggerLine) {
    box.classList.add("show");
  } else box.classList.remove("show");
}
