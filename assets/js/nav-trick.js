let nav = document.querySelector("nav");
let items = nav.querySelectorAll(".nav-items");
items[0].addEventListener("click", function () {
  window.location.href = "../../index.html";
});
for (let index = 1; index < items.length; index++) {
  items[index].addEventListener("click", function () {
    let text = items[index].innerHTML;
    window.location.href = "./pages/" + text + ".html";
  });
}

//verification de la page

//le nom
var nom = window.location.pathname;
nom = nom.split("/");
nom = nom[nom.length - 1];
nom = nom.split(".");
nom = nom[0];

for (let index = 0; index < items.length; index++) {
  const element = items[index];
  let text = element.innerHTML;

  if (nom == "index" && index == 0 && text == "profil") {
    element.classList.toggle("active");
  } else if (text == nom) {
    element.classList.toggle("active");
  }
}
//hamburger

let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

//scroll animation
let header = document.querySelector("header");
let hiddenHeader = document.querySelector(".hidden-header");

window.addEventListener("scroll", function () {
  if (this.scrollY != 0) {
    header.classList.add("scrolled");
    hiddenHeader.classList.add("active");
  } else {
    header.classList.remove("scrolled");
    hiddenHeader.classList.remove("active");
  }
});
