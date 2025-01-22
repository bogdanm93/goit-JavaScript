// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Select necessary elements
const changeColorButton = document.querySelector(".change-color");
const colorDisplay = document.querySelector(".color");

// Add click event listener to the button
changeColorButton.addEventListener("click", () => {
  // Generate a random hex color
  const randomColor = getRandomHexColor();

  // Set the random color as the body's background
  document.body.style.backgroundColor = randomColor;

  // Display the random color value in the span element
  colorDisplay.textContent = randomColor;
});
