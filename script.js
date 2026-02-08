const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const errorScreen = document.getElementById("errorScreen");
const yesScreen = document.getElementById("yesScreen");

noBtn.addEventListener("click", () => {
  errorScreen.classList.remove("hidden");
});

function goBack() {
  errorScreen.classList.add("hidden");
}

yesBtn.addEventListener("click", () => {
  for (let i = 0; i < 60; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
    document.body.appendChild(heart);
  }

  setTimeout(() => {
    yesScreen.classList.remove("hidden");
  }, 1200);
});
