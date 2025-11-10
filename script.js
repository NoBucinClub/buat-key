const message = `Thank you for everything, and I’m sorry for everything too.
Hiduplah dengan baik dan bahagia, ya. Temukan kebahagiaanmu sendiri.
Terima kasih sudah menerima aku dengan baik selama ini.
I really hope you’ll be happy every time.
Dan... episode “mengejarmu gila-gilaan” akhirnya selesai.
Selamat berlayar wahai kisah cinta yang mungkin tidak pernah bisa menjadi sebuah pasangan.
Setelah ini, aku akan kembali seperti biasa sebagai teman, tidak lebih.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  const music = document.getElementById("bgMusic");
  music.volume = 0.4; // volume sedang
  music.play();

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    letterBox.classList.add("show");

    let i = 0;
    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    typeWriter();
  }, 600);
}

// 🔇 Tombol mute/unmute
const muteBtn = document.getElementById("muteBtn");
const bgMusic = document.getElementById("bgMusic");
let isMuted = false;

muteBtn.addEventListener("click", () => {
  if (isMuted) {
    bgMusic.muted = false;
    muteBtn.textContent = "🔊";
  } else {
    bgMusic.muted = true;
    muteBtn.textContent = "🔇";
  }
  isMuted = !isMuted;
});
