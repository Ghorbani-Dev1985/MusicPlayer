let $ = document;
let MainWrapper = $.querySelector("#MainWrapper");
let AudioElement = $.querySelector("audio");
let PrevAudio = $.querySelector("#PrevAudio");
let NextAudio = $.querySelector("#NextAudio");
let PlayPauseHandler = $.querySelector("#PlayPauseHandler");
let IconPlay = $.querySelector("#IconPlay");
let FastSpeed = $.querySelector("#FastSpeed");
let BackSecond = $.querySelector("#BackSecond");
let ForwardSecond = $.querySelector("#ForwardSecond");
let musicCurrentTime = $.querySelector("#musicCurrentTime");
let musicDurationTime = $.querySelector("#musicDurationTime");
let progress = $.querySelector("#progress");
let progressContainer = $.querySelector("#progress-container");
let SongName = $.querySelector("#SongName");
let ArtistName = $.querySelector(".ArtistName");
let MusicCover = $.querySelector("#MusicCover");
let musics = [
  {
    path: "../Assets/Music/Billie-Eilish-i-dont-wanna-be-you-anymore-320.mp3",
    songName: "I dont wanna be you anymore",
    artistName: "Billie Eilish",
    coverImage:
      "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F3fada30ae6c10f42675d2c4c4d5c6fa4.640x640x1.jpg",
  },
  {
    path: "../Assets/Music/Christina Perri - A Thousand Years.mp3",
    songName: "A Thousand Years",
    artistName: "Christina Perri",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_MNzZk8Ue29E0of0-8YhqPt9CL0QGQPQ6vg&usqp=CAU",
  },
  {
    path: "../Assets/Music/Not-Afraid-Anymore-HALSEY.mp3",
    songName: "Not Afraid Anymore",
    artistName: "Halsey",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuM87G_lraitI5ZPNWYmrffcesJtXQorUl9GBgeC8ocjC5bIECcLA14BRfiv_JLFcf4M&usqp=CAU",
  },  
  {
    path: "../Assets/Music/06 Like Im Gonna Lose You (Feat. John Legend).mp3",
    songName: "Im Gonna Lose You",
    artistName: "Morghan Trainor Feat John Legend",
    coverImage:"https://i.scdn.co/image/ab67616d0000b2733b11178cccd78ec77fc12dbc",
  },  
  {
    path: "../Assets/Music/charlie_puth_-_we_dont_talk_anymore_lyrics_feat._selena_gomez.mp3",
    songName: "We Dont Talk Anymore",
    artistName: "Selena Gomez",
    coverImage:"https://i.scdn.co/image/ab67616d0000b2733b11178cccd78ec77fc12dbc",
  }, 
   {
    path: "../Assets/Music/sia_unstoppable.mp3",
    songName: "Unstoppable",
    artistName: "Sia",
    coverImage:"https://upload.wikimedia.org/wikipedia/en/2/2b/Unstoppable_single_art.jpg",
  },
  {
    path: "../Assets/Music/13 This Is Why We Can't Have Nice Things.mp3",
    songName: "This Is Why We Can't Have Nice Things",
    artistName: "Taylor Swift",
    coverImage:"https://f4.bcbits.com/img/a3028888827_16.jpg",
  },
  {
    path: "../Assets/Music/whitney houston I Will Always Love You.mp3",
    songName: "I Will Always Love You",
    artistName: "Whitney Houston",
    coverImage:"https://cdn.smehost.net/whitneyhoustoncom-uslegacyprod/wp-content/uploads/2009/07/whitney_iwaly_front.jpg",
  },
  {
    path: "../Assets/Music/Adele I Can't Make You Love Me.mp3",
    songName: "I Can't Make You Love Me",
    artistName: "Adele",
    coverImage:"https://images.genius.com/88cd37911616a9f0f90a167695eee90d.1000x1000x1.jpg",
  }, 
   {
    path: "../Assets/Music/Roozbeh Bemani - Cheshmat (320).mp3",
    songName: "چشمات",
    artistName: "روزبه بمانی",
    coverImage:"https://upmusics.com/wp-content/uploads/2023/05/photo_2023-05-14_21-00-34.jpg",
  },
];
function PlayHandler() {
  isPlaying = true;
  PlayPauseHandler.setAttribute("src", "./Assets/Images/pause-circle.svg");
  AudioElement.play();
}
function PauseHandler() {
  isPlaying = false;
  PlayPauseHandler.setAttribute("src", "./Assets/Images/play-circle.svg");
  AudioElement.pause();
}
function loadSong(song) {
  SongName.textContent = song.songName;
  ArtistName.textContent = song.artistName;
  AudioElement.src = song.path;
  MusicCover.setAttribute("src", song.coverImage);
  MainWrapper.style.backgroundImage = `url('${song.coverImage}')`;
}
loadSong(musics[audioIndex]);
function PrevAudioHandler() {
  audioIndex--;
  if (audioIndex < 0) {
    audioIndex = musics.length - 1;
  }
  loadSong(musics[audioIndex]);
  PlayHandler();
}
function NextAudioHandler() {
  audioIndex++;
  if (audioIndex > musics.length - 1) {
    audioIndex = 0;
  }
  loadSong(musics[audioIndex]);
  PlayHandler();
}
// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const duration = e.srcElement.duration;
    const currentTime = e.srcElement.currentTime;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = progressPercent + "%";
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      musicDurationTime.textContent = durationMinutes + ":" + durationSeconds;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    musicCurrentTime.textContent = currentMinutes + ":" + currentSeconds;
  }
}
// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  console.log(width);
  const clickX = e.offsetX;
  console.log(clickX);
  const duration = AudioElement.duration;
  console.log(duration);
  AudioElement.currentTime = (clickX / width) * duration;
}
function SpeedOn() {
  isFastSpeed = true;
  FastSpeed.style.opacity = 1;
  FastSpeed.style.color = "#532ab9";
  AudioElement.playbackRate = 1.5;
}
function SpeedOff() {
  isFastSpeed = false;
  FastSpeed.style.opacity = 0.7;
  FastSpeed.style.color = "#71829e";
  AudioElement.playbackRate = 1;
}

// Event Listeners
PlayPauseHandler.addEventListener("click", () => {
  if (isPlaying) {
    PauseHandler();
  } else {
    PlayHandler();
  }
});
PrevAudio.addEventListener("click", PrevAudioHandler);
NextAudio.addEventListener("click", NextAudioHandler);
BackSecond.addEventListener("click", () => {
  AudioElement.currentTime -= 5;
});
ForwardSecond.addEventListener("click", () => {
  AudioElement.currentTime += 5;
});
FastSpeed.addEventListener("click", () => {
  if (isFastSpeed) {
    SpeedOff();
  } else {
    SpeedOn();
  }
});
AudioElement.addEventListener("ended", NextAudioHandler);
AudioElement.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);