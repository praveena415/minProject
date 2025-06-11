document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "Thanks for your message!";
  this.reset();
});
