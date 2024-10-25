const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

const maxX = window.innerWidth - 200;
const maxY = window.innerHeight - 200;
const minX = 100;
const minY = 100;
noButton.addEventListener("mouseover", (event) => {
  const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
  // Apply smooth movement with constrained coordinates
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

noButton.addEventListener("click", (event) => {
  window.alert("Sai dồiiiiii");
});

yesButton.addEventListener("click", (event) => {
  window.alert("Ting tingggg");
});
