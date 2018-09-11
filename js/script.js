
  var link = document.querySelector(".button-search");
  var popup = document.querySelector("form.popup-reserve");
  var mapLink = document.querySelector(".map");
  var mapPopup = document.querySelector(".popup-map");
  var up = document.querySelector(".up");
  var down = document.querySelector(".down");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Клик по кнопке");
    popup.classList.toggle("modal-show");
  });

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Клик по карте");
    mapPopup.classList.toggle("modal-show-blocke");
  });

  up.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Клик по up");
    up.classList.add("active");
    down.classList.remove("active");
  });

  down.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Клик по up");
    down.classList.add("active");
    up.classList.remove("active");
  });
