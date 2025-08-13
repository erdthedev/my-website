// Pesan sesuai waktu
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = "Selamat Pagi 🌞";
  } else if (hour < 18) {
    greeting.textContent = "Selamat Siang ☀️";
  } else {
    greeting.textContent = "Selamat Malam 🌙";
  }
}

// Tombol klik
const btn = document.getElementById("clickBtn");
if (btn) {
  btn.addEventListener("click", () => {
    document.getElementById("message").textContent =
      "Tombol berhasil diklik! 🎉";
  });
}

// Jam real-time di footer
const clock = document.getElementById("clock");
if (clock) {
  function updateClock() {
    const now = new Date();
    clock.textContent =
      now.toLocaleDateString("id-ID") + " " + now.toLocaleTimeString("id-ID");
  }
  setInterval(updateClock, 1000);
  updateClock();
}
