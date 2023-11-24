//Watch Collection animation
const watchs = document.querySelectorAll(".watch");

const expand = (watch, i) => {
  watchs.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(watchs, {
    width: watch.clicked ? "252px" : "134.4px",
    duration: 2,
    ease: "elastic(0.9, 0.6)",
  });

  watch.clicked = !watch.clicked;

  gsap.to(watch, {
    width: watch.clicked ? "420px" : "252px",
    duration: 2.5,
    ease: "elastic(0.9, 0.3)",
  });
};

watchs.forEach((watch, i) => {
  watch.clicked = false;
  watch.addEventListener("click", () => expand(watch, i));
});
