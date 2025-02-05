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
//songs list
songs = ['aaj_ki_rat',
    'Bano_ki_saheli',
    'bole_chudiyaa',
    'chhote_chhote_bhaiyoke',
    'Dholak_me_tak',
    'Dholak_me_tak',
    'doli_saja_ke',
    'ghumaro',
    'lal_dupata',
    'payal_hai_chhankai',
    'tut_gayi_chudiya',
];

//get song index 
let songIndex = 0;

//load song details with audio src
loadSong(songs[songIndex]);

function loadSong(song) {
    audio.src = `/Music/${song}.mp3`;
}

// Pause Music
function pauseSong() {
    playIcon.classList.replace("fa-pause", "fa-play");
    audio.pause();
    rotator.classList.remove("rotating");  // Stop rotating
    move.classList.remove("move");  // Stop rotating
}

// next song
function playNextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}
// prev song
function playPrevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
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

nextBtn.addEventListener('click', playNextSong);

prevBtn.addEventListener('click', playPrevSong);


