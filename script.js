//for calculation
let display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}
function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

// for clear display
function clearDisplay() {
  display.innerText = "0";
}
