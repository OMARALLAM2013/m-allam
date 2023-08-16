let navbar = document.querySelector(".navbar2");
let menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function () {
  if (navbar.style.opacity == 0) {
    navbar.style.cssText = `opacity:1;`;
  } else {
    navbar.style.cssText = `none; opacity:0;`;
  }
  console.log("true");
});
