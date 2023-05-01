// Variables

const container = document.querySelector('.container');
const image = document.getElementById('music-image');
const title = document.querySelector('#music-details .title');
const singer = document.querySelector('#music-details .singer');
const previous = document.querySelector('#controls #prev');
const play = document.querySelector('#controls #play');
const next = document.querySelector('#controls #next');
const duration = document.getElementById('duration');
const currentTime = document.getElementById('current-time');
const progressBar = document.getElementById('progress-bar');
const player = new MusicPlayer(musicList);
const volume = document.getElementById('volume');
const volumeBar = document.getElementById('volume-bar');

// Functions & Events

window.addEventListener('load', () => {
    let music = player.getMusic();
    displayMusic(music);
});

function displayMusic(music) {
    title.innerText = music.title;
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
};

play.addEventListener('click', () => {
    const isMusicPlay = container.classList.contains('playing');
    isMusicPlay ? pauseMusic() : playMusic();
});

const pauseMusic = () => {
    container.classList.remove('playing');
    play.classList = "las la-play";
    audio.pause();
    image.style.animation = "none";
}

const playMusic = () => {
    container.classList.add('playing');
    play.classList = "las la-pause";
    audio.play();
    image.style.animation = "image 40s ease-in-out infinite alternate"
};

previous.addEventListener('click', ()=> {prevMusic()});
next.addEventListener('click', ()=> {nextMusic()});

const prevMusic = () => {
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();

};
const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};

const calculateTime = (totalSecond) => {
    const minute = Math.floor(totalSecond / 60);
    const second = Math.floor(totalSecond % 60);
    const currentSecond = second < 10 ? `0${second}`: `${second}`;
    const result = `${minute}:${currentSecond}`;
    return result;
};

audio.addEventListener('loadedmetadata', ()=> {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});
audio.addEventListener('timeupdate', ()=> {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});
progressBar.addEventListener('input', () => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value
});

let muteState = "unmuted";

volumeBar.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
    if(value == 0) {
        audio.muted = true;
        muteState = "muted";
        volume.classList = "las la-volume-mute";
    } else {
        audio.muted = false;
        muteState = "unmuted";
        volume.classList = "las la-volume-up";
    }
});

volume.addEventListener('click', () => {
    if(muteState === "unmuted") {
        audio.muted = true;
        muteState = "muted";
        volume.classList = "las la-volume-mute";
        volumeBar.value = 0;
    } else {
        audio.muted = false;
        muteState = "unmuted";
        volume.classList = "las la-volume-up";
        volumeBar.value = 100;
    }
});