function scrollForward() {
  let shortcutsFor = document.getElementById("shortcuts");
  let scrollAmount = shortcutsFor.clientWidth * 0.4;
  shortcutsFor.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

function scrollBackward() {
  let shortcutsBack = document.getElementById("shortcuts");
  let scrollAmount = shortcutsBack.clientWidth * 0.4;
  shortcutsBack.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}
