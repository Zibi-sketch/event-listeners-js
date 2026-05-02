let body, input, display, change, key, reset;

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgb(150, 50, 200)";
}

//Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input
function displayKeyPress(event) {
  key.textContent = "Key pressed: " + event.key;
}

// Process Text Input
function displayUserInput() {
  display.textContent = "You typed: " + input.value ;
}


// Attach Event Listeners
function setupEventListeners() {
  body = document.getElementById('body');
  input = document.getElementById('textInput');
  display = document.getElementById('textInputDisplay');
  change = document.getElementById('changeColorButton');
  key = document.getElementById('keyPressDisplay');
  reset = document.getElementById('resetColorButton');
  // Attach event listener to change background color when the button is clicked

  change.addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked

  reset.addEventListener('dblclick', resetBackgroundColor);

  // Attach event listener to display key pressed when a key is pressed down

  document.addEventListener('keydown', displayKeyPress);

  // Attach event listener to display user input in real-time as they type

  input.addEventListener('input', displayUserInput);

}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  };
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

