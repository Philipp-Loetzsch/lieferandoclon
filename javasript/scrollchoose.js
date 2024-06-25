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

function showScrollbar(){
  showScrollbarSide();
  showScrollbarResponsive();
};

function showScrollbarSide(){
 let maxHeight = document.getElementById(`orderBasket`)
 if(maxHeight.scrollHeight >= 500)
  {
    maxHeight.style.overflowY = "scroll";
  } else{
    maxHeight.style.overflowY = "hidden";
  }
}

function showScrollbarResponsive(){
  let maxHeightRespo = document.getElementById(`contentResponsiveBasket`)
  if(maxHeightRespo.scrollHeight >= 400)
   {
     maxHeightRespo.style.overflowY = "scroll";
   } else{
     maxHeightRespo.style.overflowY = "hidden";
   }
 }