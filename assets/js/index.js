let skill = document.querySelectorAll(".skill");
let sElement = document.querySelector(".second-element");

if (screen.width < 800) {
  sElement.classList.add("desable");
}
window.addEventListener("resize", function () {
  console.log(screen.width);
});
let originalWidth = screen.width;
let originalHeight = screen.height;

for (let index = 0; index < skill.length; index++) {
  const element = skill[index];
  element.addEventListener("click", function () {
    let text = this.innerHTML;
    if (text == "original") {
      window.screen.width = originalWidth;
      window.screen.height = originalHeight;
    } else if (text == "smaller") {
      window.screen.width = 800;
      window.screen.height = 500;
    } else if (text == "phone") {
      window.screen.width = 600;
      window.screen.height = 400;
    }
  });
}

//clicks
let about = document.querySelector(".about");

about.addEventListener("click", function () {
  console.log("lol");
  window.location.href = "../../pages/about.html";
});
