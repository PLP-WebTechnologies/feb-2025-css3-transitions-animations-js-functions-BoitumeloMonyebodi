// Toggle Modal Visibility
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hidden");
});

// Optional: Handle "Enter" key for accessibility
closeModalButton.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    modal.classList.remove("show");
    modal.classList.add("hidden");
  }
});

// Example Function
function calculateVacationCost(days, costPerDay) {
  return days * costPerDay;
}

console.log(`Total cost: $${calculateVacationCost(7, 150)}`);
