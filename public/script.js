const dark = document.querySelector("#dark");
const light = document.querySelector("#light");
const html = document.querySelector("html");

dark.addEventListener("click", function () {
  html.classList.add("dark");
});
light.addEventListener("click", function () {
  html.classList.remove("dark");
});
