// Global variable to track heartbeat state
let heartbeatActive = false;

// Function to toggle heartbeat animation
function toggleHeartbeat() {
  const btn = document.getElementById("heartbeatBtn");
  if (!heartbeatActive) {
    btn.classList.add("heartbeat");
    btn.textContent = "💔 Stop Heartbeat";
    heartbeatActive = true;
  } else {
    btn.classList.remove("heartbeat");
    btn.textContent = "❤️ Start Heartbeat";
    heartbeatActive = false;
  }
}

// Attach event listener
document.getElementById("heartbeatBtn").addEventListener("click", toggleHeartbeat);

// Local vs Global Scope Demonstration
function calculateBMI(height, weight) {
  // Local variables
  let bmi = weight / (height * height);
  return bmi.toFixed(2);
}

function showBMI() {
  let h = parseFloat(document.getElementById("height").value);
  let w = parseFloat(document.getElementById("weight").value);
  
  if (h > 0 && w > 0) {
    let result = calculateBMI(h, w); // using return value
    document.getElementById("bmiResult").textContent = `Your BMI is ${result}`;
  } else {
    document.getElementById("bmiResult").textContent = "Please enter valid numbers.";
  }
}

// Flip card function
const patientCard = document.getElementById("patientCard");
patientCard.addEventListener("click", () => {
  patientCard.classList.toggle("flip");
});
