// Salam sesuai waktu
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) {
  greeting.textContent = "Selamat Pagi 🌞";
} else if (hour < 18) {
  greeting.textContent = "Selamat Siang ☀️";
} else {
  greeting.textContent = "Selamat Malam 🌙";
}

// Tombol klik
document.getElementById("clickBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "Tombol berhasil diklik! 🎉";
});

// Jam real-time
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleDateString("id-ID") + " " + now.toLocaleTimeString("id-ID");
}
setInterval(updateClock, 1000);
updateClock();
