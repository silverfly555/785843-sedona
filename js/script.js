  var link = document.querySelector(".button-search");
  var popup = document.querySelector("form.popup-reserve");
  var mapLink = document.querySelector(".map");
  var mapPopup = document.querySelector(".popup-map");
  var up = document.querySelector(".up");
  var down = document.querySelector(".down");

  

  if (popup) {
  popup.classList.add("modal");
  link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по кнопке");
  popup.classList.toggle("modal-show");
  });}

  if (up && down) {
  up.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Клик по up");
    up.classList.add("active");
    down.classList.remove("active");
  });

  down.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Клик по down");
    down.classList.add("active");
    up.classList.remove("active");
  });}
