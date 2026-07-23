const flower = document.querySelector(".flower");
const message = document.querySelector(".message");
const bgMusic = document.getElementById("bg-music");

const messages = [
  "You're my happy pill ☀️",
  "I love you more each day, Ica 💖",
  "You make my world bloom 🌸",
  "Thank you for being you 💜",
  "My heart blossoms for you 🌷",
  "Forever yours 💕",
  "Your smile makes my day ✨",
  "With you, life is sweeter 🍯",
];

let blooming = false;

flower.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }

  blooming = !blooming;
  flower.classList.toggle("bloom");

  if (blooming) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;

    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
    });
  } else {
    message.textContent = "";
  }
});

const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = "🎵";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🔇";
  }
});
