// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Select necessary elements
const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Function to create a specified number of div elements
function createBoxes(amount) {
  const elements = [];
  let size = 30; // Starting size for the first div

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px"; // Optional: Add spacing between boxes
    elements.push(box);
    size += 10; // Increase size for the next div
  }

  // Append all created elements to the container
  boxesContainer.append(...elements);
}

// Function to clear all elements in the container
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Event listener for the Create button
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value.trim(), 10);

  // Validate the input value
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; // Clear the input field
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Event listener for the Destroy button
destroyButton.addEventListener("click", destroyBoxes);
