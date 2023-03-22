const boxes = document.querySelectorAll(".box");
const triggerLine = (window.innerHeight / 5) * 4;
window.addEventListener("scroll", onScrollEventHandler);

onScrollEventHandler();

function onScrollEventHandler() {
  boxes.forEach((box) => showBox(box));
}

function showBox(box) {
  const boxTop = box.getBoundingClientRect().top;
  if (boxTop < triggerLine) {
    box.classList.add("show");
  } else {
    box.classList.remove("show");
  }
}
