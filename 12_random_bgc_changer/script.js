const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());

const body = document.querySelector("body");
let intervalId;
document.getElementById("start").addEventListener("click", () => {
  if (!intervalId) {
    // better code
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    body.style.backgroundColor = randomColor();
    console.log("Start clicked");
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(intervalId);
  console.log("stop clicked");
  intervalId = null; // freeing up memory
});
