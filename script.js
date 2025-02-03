// Music Player Controls
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const playPauseButton = document.getElementById('play-pause');
    const volumeControl = document.getElementById('volume');
    const lyricsElement = document.getElementById('lyrics');
  
    // Lyrics Data (Replace with your song's lyrics)
    const lyrics = [
      { time: 0, text: "🎵 Play me while reading 🎵" },
      { time: 1, text: "Halata sa'yong mata, ang pagod na iyong dala" },
      { time: 6, text: "Na para bang ayaw mo na" },
      { time: 12, text: "Mga luhang pilit mong tinatago" },
      { time: 18, text: "Ramdam mula sa kabiling silid" },
      { time: 25, text: "Nandito lang ako wag kang mag alala" },
      { time: 31, text: "Kahit hindi pa ako ang iyong i-una" },
      { time: 37, text: "Dahil kung kailangan mo pa ng oras" },
      { time: 44, text: "Sige lang" },
      { time: 50, text: "Tanggap ko namang ang lahat ng ito" },
      { time: 56, text: "Ay para satin din naman" },
      { time: 63, text: "At kung kailangan mo pa ng oras" },
      { time: 70, text: "Sige lang" },
      { time: 76, text: "Hindi man ako ang una mong piliin" },
      { time: 82, text: "Walang sawa kitang " },
      { time: 88, text: "Iintindihin" },
      { time: 101, text: "Aking mahal wag malumbay" },
      { time: 105, text: "Kahit minsan lang magsama" },
      { time: 108, text: "Dahil di ako mawawala" },
      { time: 115, text: "Wag ka sanang madala sa mga taong" },
      { time: 121, text: "Nagsasabi ng walang kabuluhan" },
      { time: 127, text: "Sinusukat daw ang pag-ibig" },
      { time: 131, text: "Sa oras na iyong nilaan" },
      { time: 135, text: "Na sa aking ay hindi makatarungan" },
      { time: 140, text: "Dahil kung kailangan mo pa ng oras" },
      { time: 147, text: "Sige lang" },
      { time: 152, text: "Tanggap ko namang ang lahat ng ito" },
      { time: 158, text: "Ay para sa'tin din naman" },
      { time: 165, text: "At kung kailangan mo pa ng oras" },
      { time: 172, text: "Sige lang" },
      { time: 178, text: "Hindi man ako ang una mong piliin" },
      { time: 184, text: "Walang sawa kitang" },
      { time: 188, text: "Iintindihin" },
      { time: 194, text: "Wag mo sanang isipin na" },
      { time: 198, text: "Kailanman ika'y nagkulang" },
      { time: 206, text: "Darating din ang panahong" },
      { time: 210, text: "Hindi na kailangan mawalay" },
      { time: 217, text: "Dahil kung kailangan mo pa ng oras" },
      { time: 224, text: "Sige lang" },
      { time: 229, text: "Tanggap ko namang ang lahat ng ito" },
      { time: 235, text: "Ay para satin din naman" },
      { time: 242, text: "At kung kailangan mo pa ng oras" },
      { time: 249, text: "Sige lang" },
      { time: 255, text: "Hindi man ako ang una mong piliin" },
      { time: 260, text: "Walang sawa kitang" },
      { time: 267, text: "Iintindihin" },
      { time: 274, text: "Iintindihin" },
    ];
  
    // Play/Pause Button
    playPauseButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '⏸️';
      } else {
        audio.pause();
        playPauseButton.textContent = '▶️';
      }
    });
  
    // Volume Control
    volumeControl.addEventListener('input', () => {
      audio.volume = volumeControl.value;
    });
  
    // Lyrics Display
    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      const currentLine = lyrics.findLast(line => line.time <= currentTime);
      if (currentLine) {
        lyricsElement.textContent = currentLine.text;
      }
    });
  
    // Optional: Heart Click Alert
    const heart = document.querySelector('.heart');
    heart.addEventListener('click', () => {
      alert('I love you!');
    });
  });