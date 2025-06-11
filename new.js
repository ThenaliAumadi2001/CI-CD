document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  // Show confirmation message
  document.getElementById("confirmation").classList.remove("hidden");

  // Optionally clear form
  document.getElementById("orderForm").reset();
});
