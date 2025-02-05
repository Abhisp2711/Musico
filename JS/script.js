// Select Elements
const playBtn = document.getElementById("play");
const playIcon = playBtn.querySelector("i");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const rotator = document.querySelector(".fa-compact-disc");
const move = document.querySelector(".fa-music");
const audio = document.getElementById("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");

// Play Music
function playSong() {
    playIcon.classList.replace("fa-play", "fa-pause");
    audio.play();
    rotator.classList.add("rotating");  // Start rotating
    move.classList.add("move");  // Start rotating
}

// Pause Music
function pauseSong() {
    playIcon.classList.replace("fa-pause", "fa-play");
    audio.pause();
    rotator.classList.remove("rotating");  // Stop rotating
    move.classList.remove("move");  // Stop rotating
}

// Toggle Play/Pause
playBtn.addEventListener("click", () => {
    const isPlaying = playIcon.classList.contains("fa-play");
    if (isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
});

// Update Progress Bar
audio.addEventListener("timeupdate", () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

// Seek in Audio
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    audio.currentTime = (clickX / width) * duration;
});

// OPTIONAL: Next & Previous Button Functionality (If you add a playlist)
prevBtn.addEventListener("click", () => {
    audio.currentTime -= 10; // Rewind 10 seconds
});

nextBtn.addEventListener("click", () => {
    audio.currentTime += 10; // Forward 10 seconds
});
