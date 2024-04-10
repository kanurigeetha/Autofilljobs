// JavaScript Code (if needed)
document.getElementById("signup-form").addEventListener("submit", function(event) {
  // Prevent default form submission
  event.preventDefault();
  // You can add your form submission logic here, like sending data to the server
  // For demonstration purposes, we'll just log the email entered
  var email = document.getElementById("email").value;
  console.log("Email submitted:", email);
});
