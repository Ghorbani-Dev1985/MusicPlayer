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