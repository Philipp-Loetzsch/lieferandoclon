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

function showScrollbarSide(){
 let maxHeightSidbar = document.getElementById(`orderBasket`)
 let maxHeight = maxHeightSidbar.clientHeight;
 if(maxHeight.scrollHeight >= maxHeight)
  {
    maxHeight.style.overflowY = "scroll";
  } else{
    maxHeight.style.overflowY = "hidden";
  }
}

function showScrollbarResponsive() {
  let maxHeightRespo = document.getElementById(`contentResponsiveBasket`);
  let maxHeight = maxHeightRespo.clientHeight;

  if (maxHeightRespo.scrollHeight >= maxHeight) {
    maxHeightRespo.style.overflowY = "scroll";
  } else {
    maxHeightRespo.style.overflowY = "hidden";
  }
}
