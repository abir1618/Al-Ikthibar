document.getElementById("menuToggle").addEventListener("click", function() {
  document.getElementById("navLinks").classList.toggle("active");
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formNote").textContent = "Thanks! We'll contact you shortly to confirm your appointment.";
  this.reset();
});
