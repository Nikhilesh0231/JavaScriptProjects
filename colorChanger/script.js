const bgBody = document.querySelector(".body");


const firstColor = document.getElementById('1');
const secondColor = document.getElementById('2');
const thirdColor = document.getElementById('3');
const fourthColor = document.getElementById('4');

function Selection(colorElement) {
   bgBody.className = '';
   bgBody.classList.add(colorElement.classList[1]); // Add new class
}

// Example: Attach event listeners to the color elements
firstColor.addEventListener("click", () => Selection(firstColor));
secondColor.addEventListener("click", () => Selection(secondColor));
thirdColor.addEventListener("click", () => Selection(thirdColor));
fourthColor.addEventListener("click", () => Selection(fourthColor));

