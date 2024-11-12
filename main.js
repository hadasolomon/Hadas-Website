console.log("Hello World!");
startCountdown();

function removeSomeButtons() {
  document.querySelectorAll(".btn").forEach(button => button.remove());
}

function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("openPopupButton").addEventListener("click", openPopup);
document.getElementById("closePopupButton").addEventListener("click", closePopup);
document.getElementById("remover").addEventListener("click", removeSomeButtons);

function startCountdown() {
  const endDate = new Date("February 2, 2025 23:59:59").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    } else {
      document.getElementById("countdown").innerHTML = "<p>We're Live!</p>";
      clearInterval(countdownInterval);
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
}