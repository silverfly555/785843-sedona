  var up = document.querySelector(".up");
  var down = document.querySelector(".down");

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
