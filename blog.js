// cada vez que hagamos click, sonara un sonido

document.addEventListener("click", function () {
  var audio = new Audio("audio/click.wav");
  audio.play();
});

// cada vez que hagamos hover sobre un elemnto con la clase card sonara un sonido

document.addEventListener("mouseover", function (e) {
  if (
    e.target.classList.contains("card") ||
    e.target.classList.contains("nav-link")
  ) {
    var audio = new Audio("audio/hover.ogg");
    audio.play();
  }
});
