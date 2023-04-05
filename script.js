const mainContainer = document.querySelector(".container");
const subContainer = document.querySelector(".sub-container");
const listButton = document.querySelectorAll(".btn");
const rating = document.getElementById("rating");
const submitButton = document.getElementById("submit");

subContainer.classList.add("hidden");

listButton.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    rating.innerHTML = buttons.innerHTML;
  });
});

submitButton.addEventListener("click", () => {
  subContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});


