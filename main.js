// IPO Calculator

// Event Listener
document.getElementById("btn").addEventListener("click", btnclicked);

// Function
function btnclicked() {
  // Input

  let sideA = +document.getElementById("side1").value;
  let sideB = +document.getElementById("side2").value;

  // Process

  let total = Math.sqrt(sideA ** 2 + sideB ** 2);

  // Output
  document.getElementById("output").innerHTML = total;
}
