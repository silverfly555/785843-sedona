
  var link = document.querySelector(".button-search");
  var popup = document.querySelector("form.popup-reserve");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Клик по кнопке")
    popup.classList.toggle("modal-show");
  });
