const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

$(".btn1").hover(
  function () {
    $(this).css("background-color", "pink");
  },
  function () {
    $(this).css("background-color", "grey");
  }
);

function validation1() {
  var form = document.getElementById("form");
  var fullName = document.getElementById("fullName").value;
  var text = document.getElementById("text");
  var pattern = /[A-Z][a-z]+\s[A-Z][a-z]+/;

  if (fullName.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text1.innerHTML = "Your name is valid!";
    text1.style.color = "#4d9900";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
  }
  if (fullName == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text1.innerHTML = "";
    text1.style.color = "#00ff00";
  }
}

function validation2() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text2.innerHTML = "Your adress is valid!";
    text2.style.color = "#4d9900";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
  }
  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text2.innerHTML = "";
    text2.style.color = "#00ff00";
  }
}

function checkBlank() {
  if (
    document.getElementById("radio1").checked ||
    document.getElementById("radio2").checked
  ) {
    text3.innerHTML = "";
  } else {
    text3.innerHTML = "Please select type of consultation.";
    text3.style.color = "#992600";
  }
  if (document.getElementById("fullName").value == "") {
    text1.innerHTML = "Your full name is required!";
    text1.style.color = "#992600";
  }
  if (document.getElementById("email").value == "") {
    text2.innerHTML = "Your email is required!";
    text2.style.color = "#992600";
  }
  return false;
}

$("#more").hide();
$("#read-btn").click(function () {
  $("#more").slideToggle();
});

$(document).ready(function () {
  $(".more-btn").on("click", function () {
    $(this).parent().parent().find(".more-text").toggleClass("active");
  });
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

var Stranice = new Array("Home", "Gallery", "Author");
var LinkoviStranica = new Array("index.html", "gallery.html", "author.html");

var divMeni = document.querySelector("#menu");
console.log(divMeni);

var ulTag = document.createElement("ul");
ulTag.setAttribute("class", "nav navbar-nav pull-right");

for (let i = 0; i < Stranice.length; i++) {
  var LiTag = document.createElement("li");
  var aTag = document.createElement("a");

  aTag.innerHTML = Stranice[i];

  aTag.setAttribute("href", LinkoviStranica[i]);

  LiTag.appendChild(aTag);
  ulTag.appendChild(LiTag);
}

divMeni.appendChild(ulTag);
