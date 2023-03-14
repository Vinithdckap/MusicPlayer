const music = [
  {
    id: 1,
    song: "Pirai thedum",
    movie: "Mayakkam enna",
    img:"mayakam enna.jpg",
    audio: "Audio/Pirai-Thedum.mp3"

  },
  {
    id: 2,
    song: "Enna Solla",
    movie: "Thangamagan",
    img: "http://img.wynk.in/unsafe/320x180/top/http://s3-ap-southeast-1.amazonaws.com/bsbcms/srch_sonymusic/music/srch_sonymusic_A10328E00076372090.jpg",
    audio: "Audio/Enna-Solla (1).mp3"
  },

  {
    id: 3,
    song: "Venmegam",
    movie: "Yaaradi Nee Mohini",
    img: "https://c-cl.cdn.smule.com/rs-s80/arr/46/cb/73d7eca9-6dda-4eee-8ca9-1f7278a81675_1024.jpg",
    audio: "Audio/Venmegam-Pennaga.mp3"
  },
  {
    id: 4,
    song: "Vaa Vaathi",
    movie: "Vaathi",
    img: "https://i.ytimg.com/vi/Rq-ifswvGTQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gLigTMA8=&rs=AOn4CLAtLrx3c5Ad0SFZno7N76uxanEm1A",
    audio: "Audio/Vaa-Vaathi-MassTamilan.dev.mp3"
  },
  {
    id: 5,
    song: "Yaaro en nenjai",
    movie: "Kutty",
    img: "https://44.media.tumblr.com/68ba91afc6817235fea1c5c91522e40f/tumblr_p1cgfmHowG1tfw70go1_500.gif",
    audio: "Audio/Yaaro-En-Nenjai.mp3"
  },
  {
    id: 6,
    song: "Oh Oh Uyire",
    movie: "Thangamagan",
    img: "https://3.bp.blogspot.com/-v5MGuEFOtzc/VlHcxxU__YI/AAAAAAAADLc/6yxAg3-73cE/s1600/1.jpg",
    audio: "Audio/Oh-Oh-Uyire-Uyirin.mp3"
  },
  {
    id: 7,
    song: "Kalasalaa",
    movie: "Osthe",
    img: "https://a10.gaanacdn.com/gn_img/albums/Dk9KNk23Bx/k9KNMxEBbB/size_l.jpg",
    audio: "Audio/Kalasala-Kalasala.mp3"

  },
  {
    id: 8,
    song: "Aathadi Aathaadi",
    movie: "Anegan",
    img: "https://pbs.twimg.com/media/B-TdxaTCcAAOdCu.jpg",
    audio: "Audio/Aathadi-Aathadi (copy).mp3"

  },
  {
    id: 9,
    song: "Megham karukadha ",
    movie: "Thiruchitrambalam",
    img: "https://static.toiimg.com/thumb/msid-94474967,width-1280,resizemode-4/94474967.jpg",
    audio: "Audio/Megham-Karukatha-MassTamilan.dev.mp3"
  },
  {
    id: 10,
    song: "Minnalgal koothadum ",
    movie: "Polladhavan",
    img: "https://i.ytimg.com/vi/9Rn34BttVAg/maxresdefault.jpg",
    audio: "Audio/Minnazhgal-Koothadam.mp3"
  },
  {
    id: 11,
    song: "Kaadhal en kadhal",
    movie: "Mayakkam enna",
    img: "https://pbs.twimg.com/media/E-c_qTGUcAkQKx0?format=jpg&name=large",
    audio: "Audio/Kaadhal-Yen-Kaadhal.mp3"
  },
  {
    id: 12,
    song: "Kannazhaga",
    movie: "Monnu(3)",
    img: "https://c-cl.cdn.smule.com/rs-s79/arr/7e/12/69ae0157-bfd3-434b-99eb-6213fad606a4.jpg",
    audio:"Audio/Kannazhaga  Masstamilan.In -.mp3"
  },
  {
    id: 13,
    song: "Un mela aasadhan",
    movie: "1000thil oruven",
    img: "https://gumlet.assettype.com/filmcompanion%2F2022-09%2F688e461b-cb45-4aa3-890f-3488c3623810%2FLead_Collage_Aayirathil_Oruvan.jpg?format=auto",
    audio: "Audio/Un-Mela-Aasadhaan.mp3"
  },
  {
    id: 14,
    song: "Po indru neeyaga ",
    movie: "VIP",
    img: "https://i1.sndcdn.com/artworks-000086220955-63ltkj-t500x500.jpg",
    audio: "Audio/Po-Indru-Neeyaga.mp3"
  },
  {
    id: 15,
    song: "Pazhangalla ",
    movie: "2dam ulagam",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1IE7bZA8uMWhMt7BxDFYPBdKq81a89DXgxp0vIYGTO7SYaP3qINdWR-4oTXkBdfRUZm4&usqp=CAU",
    audio:"Audio/Pazhangalla-Vishamulla.mp3"
  },
 

]



const pic = document.querySelector(".img-view");
const songName = document.querySelector(".songName")
const movieName = document.querySelector(".movieName")
const playBtn = document.querySelector(".play")
const nextBtn = document.querySelector(".next-track");
const prevBtn = document.querySelector(".prev-track");
const audio = document.querySelector("audio");
const input = document.querySelector("input");
const currentTime = document.querySelector(".current-time");
const totalDuration = document.querySelector(".total-duration");
const mute = document.querySelector(".volumeMute")
const high = document.querySelector(".volumeHigh")
const alert_msg =  document.querySelector("#alert")



mute.addEventListener("click",()=>{
  audio.volume = 0;
  alert_msg.innerText = "Song muted";
  mute.classList.add("volumeMute");
  mute.style.color ="rgb(237 85 85)";
  high.style.color ="rgb(63, 61, 61)"
  setTimeout(()=>{
    alert_msg.innerText = " "
  },1000)
})


high.addEventListener("click",()=>{

  if(audio.volume = 1){}
  audio.volume = 1;
  alert_msg.innerText = "Song unmuted";
  mute.style.color = "rgb(63, 61, 61)";

  high.style.color ="#7acd7a"
  setTimeout(()=>{
    alert_msg.innerText = ""
  },1000)
})


window.addEventListener("DOMContentLoaded", () => {
  audio.src = music[count].audio
  songName.innerText = music[count].song
  movieName.innerText = music[count].movie
  pic.src = music[count].img;
  
}
)

audio.onloadeddata = () => {
  input.max = audio.duration;
  

}


playBtn.addEventListener("click", () => {
  if (playBtn.classList.contains("fa-pause")) {
    audio.pause();
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
  }
  else {
    audio.play();
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
    input.value = audio.currentTime;

  }
  setInterval(() => {
    input.value = audio.currentTime;
    add();
    
  }, 500)

})

let count = 0
nextBtn.addEventListener("click", () => {
  count++
  if(count == music.length){
    count = 0
  }
  songName.innerText = music[count].song
  movieName.innerText = music[count].movie
  pic.src = music[count].img
  audio.src = music[count].audio
 
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause")
  audio.play();
  add()



})

input.addEventListener("input",()=>{
  audio.play();
  audio.currentTime = input.value
  playBtn.classList.add("fa-pause");
  playBtn.classList.remove("fa-play");
  add()


})

prevBtn.addEventListener("click", () => {
  count--
  if(count == -1){
    count = music.length
  }
  songName.innerText = music[count].song
  movieName.innerText = music[count].movie
  pic.src = music[count].img
  audio.src = music[count].audio
  audio.play()
  add()
  
})

function add() {
  currentMinutes = Math.floor(audio.currentTime / 60)
  currentSeconds = Math.floor(audio.currentTime - (currentMinutes * 60))

  durationMinutes = Math.floor(audio.duration / 60)
  durationSeconds = Math.floor(audio.duration - (durationMinutes * 60))

  if (currentSeconds < 10) {
    currentMinutes = "0" + currentMinutes;
    currentSeconds = "0" + currentSeconds
  }
  else if (currentSeconds > 9) {
    currentMinutes = "0" + currentMinutes;
  }

  currentTime.innerText = `${currentMinutes}:${currentSeconds}`;
  totalDuration.innerText = `${durationMinutes}:${durationSeconds}`;
}




