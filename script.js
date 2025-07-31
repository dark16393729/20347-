let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.add('hidden');
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.remove('hidden');
  if (currentPage === 1) {
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
  }
}

function restart() {
  document.getElementById(`page${currentPage}`).classList.add('hidden');
  document.getElementById('secret-message').classList.add('hidden');
  currentPage = 1;
  document.getElementById(`page${currentPage}`).classList.remove('hidden');
  confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
}

function showSecret() {
  const secret = document.getElementById('secret-message');
  secret.classList.remove('hidden');
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

// Music
const songs = [
  {
    title: "🎶 Just The Way You Are – Bruno Mars",
    url: "https://www.youtube.com/watch?v=LjhCEhWiKXk&pp=0gcJCfwAo7VqN5tD"
  }

let currentSongIndex = 0;

function updateMusic() {
  const iframe = document.getElementById("music-frame");
  const title = document.getElementById("music-title");
  iframe.src = songs[currentSongIndex].url;
  title.textContent = songs[currentSongIndex].title;
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateMusic();
}

function prevSong() {
  updateMusic(); 
}
