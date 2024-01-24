document.addEventListener("mouseover", function (e) {
  if (
    e.target.classList.contains("alink") ||
    e.target.classList.contains("nav-link")
  ) {
    var audio = new Audio("audio/hover.ogg");
    audio.play();
  }
});
