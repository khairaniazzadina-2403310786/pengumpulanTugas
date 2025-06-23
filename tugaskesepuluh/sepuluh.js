// Fitur 1: Alert saat tombol diklik
document.querySelector(".signup-btn").addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});

document.querySelector(".login-btn").addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});

// Fitur 2: Animasi Teks Berganti
const genres = ["HORROR", "ACTION", "ROMANCE", "COMEDY"];
let index = 0;

setInterval(() => {
  index = (index + 1) % genres.length;
  document.querySelector(".kedua-text").textContent = genres[index];
}, 4000);
