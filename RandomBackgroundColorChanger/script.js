const Start = document.getElementById("start");
const Stop = document.getElementById("stop");
const BodyColorToBeChanged = document.getElementById('second-div');

// Generate random hex color
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId = null; // Initialize to null

const startChangingColor = function () {
  if (intervalId !== null) return; // Prevent multiple intervals
  
  intervalId = setInterval(() => {
    BodyColorToBeChanged.style.backgroundColor = randomColor();
  }, 200);
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null; // Reset to null
};

Start.addEventListener("click", startChangingColor);
Stop.addEventListener("click", stopChangingColor);
